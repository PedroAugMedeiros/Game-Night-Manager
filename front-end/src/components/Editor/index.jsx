import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./index.css"
import Button from 'react-bootstrap/Button';

const Editor = (props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("Descreva o Game");

  const removeTags = (str) => {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    const cleanedText = str.replace(/(<([^>]+)>)/ig, '');
    props.setBody(cleanedText)
    setContent('')
    props.setButtonAddGame(false)
  }

  const config = {
    readonly: false,
    height: 200,
  };

  const handleSave = () => {
    removeTags(content)
  };

  return (
    <section className='textEdit'>
      <Button
        style={{
          width: '80%',
          margin: '5% 0 0 0',
          fontWeight: '700',
        }} variant="primary" onClick={handleSave}>Salvar Descrição</Button>
      <div className='editor'>
        <JoditEditor
          className='text'
          ref={editor}
          value={content}
          config={config}
          placeholder='Descreva o game'
          defaultValue='Descreva o game'
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => { }}
        />
      </div>
      <div className='buttonDiv'>
      </div>
    </section>
  );
};

export default Editor;
