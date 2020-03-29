import React, {useState} from 'react'

function QuestionDisplay(props) {
    const [input, setInput] = useState();
    const [hasAnswered, setHasAnswered] = useState(false)

let questionNumber = props.step+1

const handleChange = e => {
    let userInput = e.target.value;
    setInput(userInput);
    setHasAnswered(true)
  };

const handleSubmit = e => {
    let userAnswer = input
    props.handleFromSurveyQuestions(props.idName, userAnswer)
    props.increment()
}
let answerDisplay = props.currentQuestion.answer_options.map((answerOption, index) => { 
    return(
        <div key={index}>
            <input 
            value={answerOption}
            key={props.step}
            type="radio" 
            name={props.idName}
            onChange = {handleChange}
            />
            <span>{answerOption}</span>
     </div>
)})

    return (
        <div>
            <h3>{questionNumber}. {props.currentQuestion.question}</h3>
            <label className="" key={props.idName} value={input}>
                {answerDisplay}
            </label>
            <button onClick={props.decrement} disabled={props.step===0}>Back</button>
            <button onClick = {handleSubmit} disabled={hasAnswered ? false : true}>Next</button>
    </div>
    )
}

export default QuestionDisplay
