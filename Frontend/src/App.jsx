"use client";

import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Changed to dark theme
import axios from "axios";
import "./App.css"; // Updated to match our new CSS file name

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setIsLoading(true);
      const response = await axios.post("https://code-reviewer-f38q.onrender.com", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      setReview(
        "```\nError: Could not get code review. Please try again.\n```"
      );
      console.error("Error fetching review:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={16}
              style={{
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: 14,
                backgroundColor: "var(--bg-code)",
                color: "var(--text-primary)",
                height: "100%",
                width: "100%",
                borderRadius: "var(--border-radius)",
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className={`review ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "" : "Review"}
          </button>
        </div>
        <div className="right">
          {review ? (
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ node, ...props }) => <h2 {...props} />,
                h2: ({ node, ...props }) => <h2 {...props} />,
                h3: ({ node, ...props }) => (
                  <div className="issue-title" {...props} />
                ),
                p: ({ node, children, ...props }) => {
                  if (
                    typeof children === "string" &&
                    children.startsWith("Issue:")
                  ) {
                    return (
                      <div className="issue">
                        <div className="issue-title">
                          {children.replace("Issue:", "")}
                        </div>
                      </div>
                    );
                  }
                  return <p {...props}>{children}</p>;
                },
              }}
            >
              {review}
            </Markdown>
          ) : (
            <div className="empty-state">
              <h2>Code Review</h2>
              <p>
                Click the "Review" button to analyze your code and get feedback.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
