# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- 
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

main {
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}

main .left,
main .right {
  height: 100%;
  flex-basis: 50%;
  border-radius: 0.7rem;
}

main .left {
  background-color: #000000;
  position: relative;
}

.left .code,
.code pre,
.code pre code {
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 0.7rem;
  background-color: #0c0c0c;
}

main .left .review {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: rgb(219, 219, 255);
  color: #000000;
  padding: 0.5rem 2rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  border-radius: 0.7rem;
}


main .right {
  background-color: #343434;
  padding: 1rem 2rem;
  font-size: 15px;
  overflow: auto;
}



//////////////////////////////////////////////////////////////


import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github.css"
import axios from 'axios'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [code, setcode] = useState(`function sum(){
                return 1+1
                }`);

const [review, setReview] = useState(``)


  useEffect(() => {
    prism.highlightAll();
  },[]);

  async function reviewCode(){
   const response = await axios.post('http://localhost:3000/ai/get-review', {code})

setReview(response.data)   
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setcode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
              <Markdown rehypePlugins={[rehypeHighlight]} >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

function sum() {
  return 1 + 1;
}

export default App; -->
