import React, {useState} from 'react';
import QuestionDisplay from "./QuestionDisplay"




function SurveyQuestions(props) {
  const [step, setStep] = useState(0)
  const [userAnswerArray, setUserAnswerArray] = useState([{}])
  const [hasAnswered, setHasAnswered] = useState(false)
  console.log("SurveyQuestions-props", props)

  let idName = props.idArray[step]
  let currentQuestion = props.surveyJSON[idName]

  const handleHasAnswered= () => {
    return(setHasAnswered(!hasAnswered))
  }

  const handleUserAnswer= ( name, answer ) => {
    setUserAnswerArray([name.value, answer.value])
    console.log("answer", answer)
    console.log("answerArray", userAnswerArray)
  }
  
  console.log("ID NAME IN SURVEY QUESTION", props.surveyJSON[idName])
  const increment = () => setStep(step + 1);
  const decrement = () => setStep(step - 1);
  

 

  //push current question into array and pass down
  //iterate over radio button answers and pass down


  return (
  <div className="survey-questions">
  <QuestionDisplay 
    currentQuestion = {currentQuestion} 
    step={step} 
    increment={increment}
    decrement={decrement}
    idName={idName} 
    handleHasAnswered={handleHasAnswered}
    handleFromSurveyQuestions={handleUserAnswer}
    />
  </div> 
  
)}

export default SurveyQuestions;