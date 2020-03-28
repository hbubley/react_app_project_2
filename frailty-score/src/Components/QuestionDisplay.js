import React, {useState} from 'react'

function QuestionDisplay(props) {
    const [input, setInput] = useState('');

let questionNumber = props.step+1

const handleChange = e => {
    const userInput = e.target.value;
    console.log("handleChange clicked", e.target.value);
    props.handleHasAnswered();
    setInput(userInput);
  };

const handleSubmit = () => {
    let userAnswer = input
    console.log("input from handle submit", input)
    props.increment()
    props.handleFromSurveyQuestions(props.idName, userAnswer)
    setInput=('')
}

let answerDisplay = props.currentQuestion.answer_options.map((answerOption, index) => { 
    return(
        <div key={index}>
            <input 
            value={input}
            key={props.step}
            type="radio" 
            name={props.idName}
            onChange = {handleChange}/>
            <span>{answerOption}</span>
     </div>
)})

    return (
        <div>
            <h3>{questionNumber}. {props.currentQuestion.question}</h3>
            <label className="" key={props.step}>
                {answerDisplay}
            </label>
            <button onClick={props.decrement} disabled={props.step===0}>Back</button>
            <button onClick = {handleSubmit} disabled={props.hasAnswered ? false : true}>Next</button>
    </div>
    )
}

export default QuestionDisplay
