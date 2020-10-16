import React, { useEffect, useState } from 'react'
import './App.css'
import Questionnaire from './components/Questionnaire'

const API_URL =
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gameEnded, setGameEnded] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [])

  const handleAnswer = answer => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1)
    }
    if (newIndex >= questions.length) {
      setGameEnded(true)
    }
  }

  return gameEnded ? (
    <div className='bg-white p-10 rounded-lg shadow-xl text-purple-800'>
      <h2 className='text-2xl'> Your score is {score}</h2>
    </div>
  ) : questions.length > 0 ? (
    <div className='container'>
      <Questionnaire
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  ) : (
    <>
      <div class='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
    </>
  )
}

export default App
