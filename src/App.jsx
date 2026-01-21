import { useState } from 'react'
import style from "./App.module.css"
import languages from "./data/languages"

function App() {
  const [selectedLang, setSelectedLang] = useState(0)

  return (
    <>
      <div className={style.container}>
        <h1>Learn Web development</h1>

        {languages.map((language, i) =>
          <button
            key={i}
            className={style.btn}
            onClick={() => setSelectedLang(i)}
          >
            {language.title}
          </button>
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
