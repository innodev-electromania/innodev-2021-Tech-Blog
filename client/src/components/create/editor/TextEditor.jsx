import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import { useState } from "react";

const TextEditor = (props) => {
  const [blog, setBlog] = useState(props.post);

  const handleCKEditor = (event, editor) => {
    const data = editor.getData();
    setBlog({ ...blog, description: data });
    props.changePost(blog);
    console.log("blog ", blog);
    console.log(data);
  };
  return (
    <div className="ckeditor">
      <CKEditor
        type="inline"
        editor={ClassicEditor}
        className="ckeditor"
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={handleCKEditor}
      />
    </div>
  );
};

export default TextEditor;
