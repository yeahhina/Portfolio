import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./learnMore.scss";

function LearnMore() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(require("./../../data/seats.md"))
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="learnMore">
      <div className="back">
        <a>← Back</a>
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
          h2: ({ node, ...props }) => (
            <div>
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
