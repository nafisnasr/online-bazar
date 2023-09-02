import React, { useState } from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import { questionsData } from '../../data'
import "./Questions.css"

export default function Questions() {


  const [showQuestionBody, setShowQuestionBoody] = useState(false)
  const [allQuestions, setAllQuestions] = useState(questionsData)
  const [activeIndex, setActiveIndex] = useState(questionsData)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };


  return (
    <>
      <Header />

      <section className='questions'>
        <div className="question-wrapper container">
          {allQuestions.map((question, index) => (

            <div className="question-box">
              <div className="question-header">
                <h4 className="question-title">{question.title}</h4>
                <button
                  className='question-toggle-btn'
                  onClick={() => {
                    setShowQuestionBoody(prev => !prev)
                    handleClick(index)
                  }}
                >
                  {(showQuestionBody && index === activeIndex) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {(showQuestionBody && index === activeIndex) ? (
                <div className="question-body">
                  <p>{question.body}</p>
                </div>
              ) : ''}
            </div>

          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
