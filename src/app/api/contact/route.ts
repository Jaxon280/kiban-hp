import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// メール送信用のトランスポーター設定
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// フォームデータの型定義
interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactForm;

    // バリデーション
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メール本文の作成
    const mailBody = `
お問い合わせがありました。

■ お名前
${data.name}

■ メールアドレス
${data.email}

${data.company ? `■ 会社名\n${data.company}\n` : ""}
■ 件名
${data.subject}

■ メッセージ
${data.message}
    `.trim();

    // 管理者向けメール
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@example.com",
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      subject: `[お問い合わせ] ${data.subject}`,
      text: mailBody,
    });

    // 自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@example.com",
      to: data.email,
      subject: "お問い合わせありがとうございます",
      text: `
${data.name} 様

お問い合わせありがとうございます。
以下の内容で承りました。
内容を確認次第、担当者よりご連絡させていただきます。

--------------------
■ お問い合わせ内容
--------------------
${mailBody}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
