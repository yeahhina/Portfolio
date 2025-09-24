import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useLocation } from "react-router-dom";
import "./learnMore.scss";

function LearnMore() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const file = location.state || {};
  console.log(file);

  useEffect(() => {
    if (!file.mdFile) return;

    const path = `${process.env.PUBLIC_URL}${file.mdFile}`;

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not fetch ${path}`);
        return res.text();
      })
      .then(setContent)
      .catch((err) => console.error("Markdown load error:", err));
  }, [file.mdFile]);

  return (
    <div className="learnMore">
      <div className="back">
        <a onClick={() => navigate(-1)}>← Back</a>
      </div>
      <ReactMarkdown
        components={{
          a: ({ node, children, ...props }) => {
            if (node.children && node.children[0].tagName === "img") {
              return children;
            }
            return (
              <a {...props} className="btn">
                <button>{children}</button>
              </a>
            );
          },
          h1: ({ node, ...props }) => (
            <div id="title">
              <h1 {...props} />
              <hr className="line" />
            </div>
          ),
          h2: ({ node, ...props }) => (
            <div className="subtitle">
              <h2 {...props} />
              <hr className="line" />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default LearnMore;
