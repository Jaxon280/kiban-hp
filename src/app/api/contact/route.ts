import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// メール送信用のトランスポーター設定
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, email, phone, message } = body;

    // 管理者向けメール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "ウェブサイトからのお問い合わせ",
      text: `
会社名: ${company || "未入力"}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

お問い合わせ内容:
${message}
      `,
    });

    // 送信者向け自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "お問い合わせありがとうございます",
      text: `
${name} 様

お問い合わせいただき、ありがとうございます。
以下の内容で承りました。
担当者より順次ご連絡させていただきます。

--------------------
会社名: ${company || "未入力"}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

お問い合わせ内容:
${message}
--------------------

※このメールは自動送信されています。
      `,
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
