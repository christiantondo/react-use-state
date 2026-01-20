import { useState } from 'react'
import style from "./App.module.css"
import languages from "./data/languages"

function App() {
  const [selectedLang, setSelectedLang] = useState(0)

  function onElementoCliccato(chi) {
    setSelectedLang(chi);
  }

  return (
    <>
      <div className={style.container}>
        <h1>Learn Web development</h1>

        {languages.map((language, i) =>
          <button onClick={e => onElementoCliccato(i)} key={i} className={style.btn}>{language.title}</button>
        )}

        <div>
          <h2>{languages[selectedLang].title}</h2>
          <p>{languages[selectedLang].description}</p>
        </div>

      </div>
    </>
  )
}

export default App
