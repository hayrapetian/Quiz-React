import React, { useEffect, useState } from 'react'
import './App.css'
import Questionnaire from './components/Questionnaire'

const API_URL =
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [])

  const handleAnswer = answer => {
    setCurrentIndex(currentIndex + 1)
  }

  return questions.length > 0 ? (
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
