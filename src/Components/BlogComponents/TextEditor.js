import React, {useState} from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';


function TextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty()); // State to control the editor state

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled'
        }
        return 'not-handled'
    }
    // Apply inline style (Bold, Italic, Underline)
    const toggleInlineStyle = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    // Apply block style (H1, H2)
    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };


    return (
        <div style={{width: '100%', maxWidth: '1200px', minWidth: '600px'}}>
        <div className='editor-toolbar'>
            <button onClick={() => toggleInlineStyle('BOLD')} className="toolbar-button">Bold</button>
            <button onClick={() => toggleInlineStyle('ITALIC')} className="toolbar-button">Italic</button>
            <button onClick={() => toggleInlineStyle('UNDERLINE')} className="toolbar-button">Underline</button>
            <button onClick={() => toggleBlockType('header-one')} className="toolbar-button">H1</button>
            <button onClick={() => toggleBlockType('header-two')} className="toolbar-button">H2</button>
        </div>
        <div className="editor-wrapper">
            <Editor
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={setEditorState}
              placeholder="Start writing your blog here..."
            />
          </div>
        </div>
    )
}

export default TextEditor