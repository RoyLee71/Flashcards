import { useState } from 'react'


import TriviaFlashcards from './components/TriviaFlashcards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TriviaFlashcards />
    </>
  )
}

export default App
