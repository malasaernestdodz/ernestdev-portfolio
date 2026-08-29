import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], typeMs = 70, deleteMs = 35, holdMs = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
        },
        deleting ? deleteMs : typeMs,
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs])

  return text
}
