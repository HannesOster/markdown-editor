import React, { useState, useEffect } from "react";
import { marked } from "marked";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
    // ... (dein Markdown hier) ...`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h5>Editor</h5>
          <textarea
            id="editor"
            className="form-control"
            rows="10"
            value={markdown}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="col-md-6">
          <h5>Preview</h5>
          <div id="preview"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
