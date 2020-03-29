import React, {useState} from 'react';
import SurveyQuestions from './SurveyQuestions'



function SurveyData(props) {
// const [idName, setIdName] = useState([])
  // START IF
  if(props){
  const idArray = Object.keys(props.surveyJSON).map((item, index) => { 
      let idName = item
      let key = index
      return idName
    })
  return (
    <div className="SurveyData">
      <SurveyQuestions idArray = {idArray} surveyJSON = {props.surveyJSON}/>
    </div>
    )
  }
// END IF
  else{
    return <h1>Loading</h1>
  }
}

export default SurveyData;