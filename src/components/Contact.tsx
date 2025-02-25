"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "送信に失敗しました");
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch {
      setError("送信中にエラーが発生しました");
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            お名前 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            メールアドレス <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-1">
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1">
            件名 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            メッセージ <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {status === "success" && (
          <p className="text-green-600">送信が成功しました</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          {status === "sending" ? "送信中..." : "送信"}
        </button>
      </form>
    </div>
  );
}
