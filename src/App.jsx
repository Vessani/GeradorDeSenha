import { useState } from "react"

export default function App() {

  const [passaword, setPassword] = useState("")
  const [passwordSize, setPassordSize] = useState(12)
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(passaword)
    setCopyText("Copiado")
  }

  return(
    <div>
      <h1>Gerador de senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <input type="number" name="" id="passwordSize" min={1} value={passwordSize} onChange={(ev) => setPassordSize(ev.target.value)}/>
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
			<button onClick={copyToClipboard}>{copyText}</button>
      <div>{passaword}</div>
    </div>
  )
}