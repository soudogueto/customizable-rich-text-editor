import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBold, faCode, faItalic, faUnderline, faHeading, faQuoteRight, faListUl} from '@fortawesome/free-solid-svg-icons';
import { EditorState } from 'draft-js';

import Editor from './Editor/editor';
import StylingBar from './StylingBar/stylingBar';

import './richTextEditor.css';

library.add(faBold, faCode, faItalic, faUnderline, faHeading, faQuoteRight, faListUl)

const RichTextEditor = () => {
   const [editorState, setEditorState] = useState(
      EditorState.createEmpty()
   );

   return (
      <div>
         <StylingBar
            editorState={editorState}
            setEditorState={setEditorState}
         />
         <Editor
            editorState={editorState}
            setEditorState={setEditorState}
         />
      </div>
   )
}
export default RichTextEditor