/// <reference types="jest" />
import { generateSlug, convertMarkdownToHtml } from "./articleUtils";

describe("Article Utils", () => {
  test("generateSlug converts title to a proper slug", () => {
    expect(generateSlug("Hello World!")).toBe("hello-world");
    expect(generateSlug("Test Title 123")).toBe("test-title-123");
    expect(generateSlug("こんにちは 世界")).toBe("こんにちは-世界");
  });

  test("convertMarkdownToHtml converts markdown to proper HTML", async () => {
    const markdown = "# Hello";
    const htmlContent = await convertMarkdownToHtml(markdown);
    // Depending on the remark-html output, it should contain an <h1> element.
    expect(htmlContent).toMatch(/<h1.*?>\s*Hello\s*<\/h1>/);
  });
});
