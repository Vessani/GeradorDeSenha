import { useState } from "react"

export default function App() {

  const [passaword, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
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
      <button onClick={generate}>Gerar!</button>
			<button onClick={copyToClipboard}>{copyText}</button>
      <div>{passaword}</div>
    </div>
  )
}