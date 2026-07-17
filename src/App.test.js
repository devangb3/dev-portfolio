import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  act(() => {
    root.unmount();
  });
});

test("renders a blog as a standalone page at its direct URL", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  const originalScrollTo = window.scrollTo;

  window.history.pushState({}, "", "/blog/grok-build-context-management");
  window.scrollTo = jest.fn();

  act(() => {
    root.render(<App />);
  });

  expect(container.textContent).toContain("How Grok Build Manages Context");
  expect(container.querySelector('[role="dialog"]')).toBeNull();

  act(() => {
    root.unmount();
  });

  window.history.pushState({}, "", "/");
  window.scrollTo = originalScrollTo;
});

test("renders every figure extracted from the benchmark PDF", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  const originalScrollTo = window.scrollTo;

  window.history.pushState({}, "", "/blog/dont-trust-score");
  window.scrollTo = jest.fn();

  act(() => {
    root.render(<App />);
  });

  expect(container.querySelectorAll("article img")).toHaveLength(7);
  expect(container.querySelector('img[alt="Airline task 25 tool call passes three total bags"]')).not.toBeNull();

  act(() => {
    root.unmount();
  });

  window.history.pushState({}, "", "/");
  window.scrollTo = originalScrollTo;
});
