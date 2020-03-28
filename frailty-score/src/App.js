import React,{useState} from 'react';
import SurveyData from './Components/SurveyData'
import Results from './Components/Results'
import surveyJSON from './content.json'
import {Route} from "react-router-dom";

function App() {
  console.log("APP-JSON", surveyJSON)
  console.log("APP TYPE OF", typeof surveyJSON)
  return (
    <div className="App">
    <Route exact path="/" render = {props => <SurveyData {...props} surveyJSON = {surveyJSON} />} />
    <Route exact path="/results" render = {props => <Results {...props} surveyJSON = {surveyJSON} />} />
    </div>
  );
}

export default App;
