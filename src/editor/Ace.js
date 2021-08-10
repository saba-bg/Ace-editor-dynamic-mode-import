import React, { lazy, useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
const languages = [
  "sass",
  "mysql",
  "golang",
  "elixir",
  "csharp",
  "css",
  "d",
  "diff",
  "handlebars",
  "haskell",
  "ini",
  "java",
  "javascript",
  "json",
  "julia",
  "kotlin",
  "less",
  "lua",
  "makefile",
  "markdown",
  "nginx",
  "objectivec",
  "perl",
  "php",
  "properties",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "scss",
  "sql",
  "swift",
  "typescript",
  "xml",
  "yaml",
  "django",
  "c_cpp",
];

function Ace(props) {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  const [lang1, setLang1] = useState("java");
  languages.map(
    (lang) =>
      lang === props.lan &&
      require(`ace-builds/src-noconflict/mode-${lang}`) &&
      require(`ace-builds/src-noconflict/snippets/${lang}`)
  );
  return (
    <div>
      <AceEditor
        mode={props.lan}
        theme="monokai"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
}

export default Ace;
