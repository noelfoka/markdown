const defaultContent = `
![Dwinatech Logo](https://yt3.ggpht.com/ytc/AKedOLRCB8l9dwq0qVxZIb7C7b1G5lvYlFIYzymD1Dkx=s176-c-k-c0x00ffffff-no-rj)

# Hello, 
## You'r welcom at
### DwinaTech Channel


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My Channel](https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA)

> Block Quot

1. First list item
2. Second list item
`;

//const renderer = new marked.Renderer();
//renderer.link = function (href, title, text) {
//  return `<a target="_blank" href="${href}">${text}</a>`;
//};

//marked.setOptions({
//  highlight: function (code) {
//    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
//  }
//});

const Editor = ({ content, handleTextareaChange }) => /*#__PURE__*/
React.createElement("textarea", { value: content, onChange: handleTextareaChange, id: "editor" });


const Previewer = ({ content }) => /*#__PURE__*/
React.createElement("div", { id: "preview",
  dangerouslySetInnerHTML: {
    __html: marked.parse(content) } });




const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextareaChange = event => {
    console.log(content);
    setContent(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextareaChange: handleTextareaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));