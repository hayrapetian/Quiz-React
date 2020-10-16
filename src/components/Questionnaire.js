import React from 'react'

const Questionnaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  )
  return (
    <>
      <div className='bg-white p-10 rounded-lg shadow-xl text-purple-800'>
        <h2
          className='text-2xl'
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className='mt-4 flex flex-wrap justify-between'>
        {shuffledAnswers.map(answer => (
          <button
            className='bg-white w-5/12 p-4 text-purple-800 rounded-lg font-semibold mb-4 shadow-lg'
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </>
  )
}
export default Questionnaire
