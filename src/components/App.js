import './App.css';
import Editor from './Editor';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


function App() {
  //code for not presist data
  // const [html, setHtml] = React.useState('');
  // const [css, setCss] = React.useState('');
  // const [js, setJS] = React.useState('');

  //code for persist data after refreshing the page.
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJS] = useLocalStorage('javacript', '');


  const [srcDoc, setSrcDOC] = React.useState('')


  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDOC(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      
      `
      )
    }, 250)

    return () => clearInterval(timeOut)

  }, [html, css, js])


  return (
    <>
      <div className='pane top-pane'>
        <Editor displayName="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor displayName="CSS" language="css" value={css} onChange={setCss} />
        <Editor displayName="JS" language="javascript" value={js} onChange={setJS} />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
