import { useState } from "react";
import { marked } from "marked";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Define a functional component called Markdown
const Markdown = () => {
  // Define state variables for the text, whether the editor is expanded, and whether it is in full screen mode
  const [text, setText] = useState(placeholder);
  const [expanded, setExpanded] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  // Define a function to handle changes in the text input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Define a function to handle the click event to expand the editor
  const handleExpandClick = () => {
    setExpanded(!expanded);
    // Toggle the 'expanded' class on the editor element to show or hide it
    if (!expanded) {
      document.getElementById("editor").classList.add("expanded");
    } else {
      document.getElementById("editor").classList.remove("expanded");
    }
  };

  // Define a function to handle the click event to enter full screen mode
  const handleFullScreenClick = () => {
    setFullScreen(!fullScreen);
    // Toggle the 'hidden' class on the editorWrap element to show or hide it
    if (!fullScreen) {
      document.getElementById("editorWrap").classList.add("hidden");
    } else {
      document.getElementById("editorWrap").classList.remove("hidden");
    }
  };

  // Convert the text to markdown using the marked library
  const markdown = marked(text, { breaks: true });

  // Return the JSX for the Markdown component
  return (
    <div className="container">
      <div className="row">
        {/* Editor section */}
        <div
          className={`col-${expanded ? "12" : "4"} editorWrap`}
          id="editorWrap"
        >
          <div className="toolbar flex items-center">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/external-basicons-line-edtgraphics/50/external-Editor-coding-basicons-line-edtgraphics.png"
              alt="external-Editor-coding-basicons-line-edtgraphics"
            />
            Editor
            {/* Toggle expand/collapse button */}
            <div className="ml-auto" onClick={handleExpandClick}>
              {expanded ? (
                <div className="img-container">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/collapse-arrow--v2.png"
                    alt="collapse-arrow--v2"
                  />
                </div>
              ) : (
                <div className="img-container">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                    alt="expand-arrow--v2"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Text input area */}
          <textarea
            name="editor"
            placeholder="Enter text here"
            className={`form-control editor ${expanded ? "expanded" : ""}`}
            id="editor"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Preview section */}
        <div className={`col-${expanded ? "12" : "6"} previewWrap`}>
          <div className="toolbar flex items-center">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/visible--v1.png"
              alt="visible--v1"
            />
            Preview
            {/* Toggle full screen mode button */}
            <div className="ml-auto" onClick={handleFullScreenClick}>
              {fullScreen ? (
                <div className="img-container">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/collapse-arrow--v2.png"
                    alt="collapse-arrow--v2"
                  />
                </div>
              ) : (
                <div className="img-container">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                    alt="expand-arrow--v2"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Render the markdown preview */}
          <div
            id="preview"
            className="preview rounded"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
