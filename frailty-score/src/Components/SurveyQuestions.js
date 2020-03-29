import React, {useState} from 'react';
import QuestionDisplay from "./QuestionDisplay"

function SurveyQuestions(props) {
  const [step, setStep] = useState(0)
  const [userAnswerArray, setUserAnswerArray] = useState([{}])
  
  let idName = props.idArray[step]

  let currentQuestion = props.surveyJSON[idName]
  

  const handleUserAnswer= ( name, answer ) => {
    let answers = {key: name, value: answer}
    setUserAnswerArray([...userAnswerArray, {key: name, value: answer}])
    console.log("answer", answers)
    console.log("answerArray", userAnswerArray)
  }
  
  console.log("ID NAME IN SURVEY QUESTION", props.surveyJSON[idName])
  const increment = () => setStep(step + 1);
  const decrement = () => setStep(step - 1);
  
  return (
  <div className="survey-questions">
  <QuestionDisplay 
    currentQuestion = {currentQuestion} 
    step={step} 
    increment={increment}
    decrement={decrement}
    idName={idName} 
    handleFromSurveyQuestions={handleUserAnswer}
    />
  </div> 
  
)}

export default SurveyQuestions;