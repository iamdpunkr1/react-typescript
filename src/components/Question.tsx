import React from 'react'
import { useRecoilValue } from 'recoil'
import { mcqSelector } from '../recoilState'

type QuestionT = {
    question: string,
    options: string[],
    answer: string
}

function Question() {
    const {questions} = useRecoilValue(mcqSelector)
  return (
    <div className='box'>
    <h2>MCQ Questions</h2>
    {questions[0].question.length === 0 ? <p>No Questions Added!</p>:
    questions.map((question:QuestionT, index:number) => (
      <div key={index} className="questionBox">
        <h4>{`Question ${index + 1}`}</h4>
        <p>{question.question}</p>
        <ol>
          {question.options.map((option, oindex) => (
            <li key={oindex}>{option}</li>
          ))}
        </ol>
        <p>{`Answer: ${question.answer}`}</p>
        
      </div>
    ))}
  </div>
  )
}

export default Question