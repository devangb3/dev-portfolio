import { act } from "react";
import { createRoot } from "react-dom/client";
import MarkdownArticle from "./MarkdownArticle";

const theme = {
  primary: "#b6ff4d",
  secondary: "#ff4d6d",
  text: "#f6f2e9",
  textSecondary: "#bdb6ad",
  border: "#26304a",
};

test("renders a standard Markdown image with accessible text", () => {
  const container = document.createElement("div");
  const root = createRoot(container);

  act(() => {
    root.render(
      <MarkdownArticle
        source={'![Trace comparison](/blog-assets/evals/trace.png "Pass and failure traces")'}
        theme={theme}
      />
    );
  });

  const image = container.querySelector("img");
  expect(image).not.toBeNull();
  expect(image.getAttribute("src")).toBe("/blog-assets/evals/trace.png");
  expect(image.getAttribute("alt")).toBe("Trace comparison");
  expect(container.textContent).toContain("Pass and failure traces");

  act(() => {
    image.closest("button").dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const viewer = document.querySelector('[role="dialog"]');
  expect(viewer).not.toBeNull();
  expect(viewer.querySelector("img").getAttribute("src")).toBe("/blog-assets/evals/trace.png");
  expect(document.querySelector('[aria-label="Close image viewer"]')).not.toBeNull();

  act(() => {
    root.unmount();
  });
});
