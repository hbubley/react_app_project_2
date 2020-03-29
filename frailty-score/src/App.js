import React,{useState} from 'react';
import SurveyData from './Components/SurveyData'
import Results from './Components/Results'
import surveyJSON from './content.json'
import {Route, Switch} from "react-router-dom";
import SurveyQuestions from './Components/SurveyQuestions';
import QuestionDisplay from './Components/QuestionDisplay';

function App() {
  console.log("APP-JSON", surveyJSON)
  console.log("APP TYPE OF", typeof surveyJSON)
  return (
    <div className="App">
    <Route exact path="/" render = {props => <SurveyData {...props} surveyJSON = {surveyJSON} />} />
    <Route path="/results" render = {props => <Results {...props} surveyJSON = {surveyJSON} />} />
    <Route path="/survey" render = {props => <SurveyQuestions {...props} surveyJSON = {surveyJSON} />} />
    <Route path="/survey/:id" render = {props => <QuestionDisplay {...props} surveyJSON = {surveyJSON} />} />
    </div>
  );
}

export default App;
