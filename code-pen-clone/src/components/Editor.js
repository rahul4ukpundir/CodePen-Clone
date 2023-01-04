import React from 'react'
import 'react-codemirror/node_modules/codemirror/lib/codemirror.css';
import 'react-codemirror/node_modules/codemirror/theme/material.css';
import 'react-codemirror/node_modules/codemirror/mode/xml/xml';
import 'react-codemirror/node_modules/codemirror/mode/javascript/javascript';
import 'react-codemirror/node_modules/codemirror/mode/css/css'
import CodeMirror from "react-codemirror"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
    const { displayName, value, onChange, language } = props;
    const [open, setOpen] = React.useState(true)

    function handleChange(editor, data, value) {
        onChange(editor)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button onClick={() => setOpen(!open)} className="expand-collaspe-btn">

                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                onChange={handleChange}
                value={value}
                className="codemirror-wrapper"
                options={{
                    lineWrapping: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}
