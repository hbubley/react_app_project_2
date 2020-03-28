# Project Overview
![Image description](https://media.tenor.com/images/afdd108e2e6b46fd825a66e1b92dc87e/tenor.gif)

## Project Links

- [github repo link](https://github.com/hbubley/react_app_project_2)
- [add your deployment link]()

## Project Description

I will be building a health survey application involving a question display and response collection UI.  Responses would need to update application state to in order to support results pages.
I will most likely be using some form of storage, either local or to another API. 

### Brainstorm:
-RESEARCH BEFORE ARCHITECTURE:

- [Local storage with useEffect hoook](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14384908#overview)
- useReduce
- Could I have the original json saved as a state and alter it to save the user's answer by adding an answer value?
- step function to take questions forward and back
- state conatiaining all the questions, state containing answers and questions, state handling step forward and back.
- pull from json and then api
- button that only appears after state containing questionss and answers is equal in length to the state/list containing all the questions. 
- post answers back to api after each submit to render results page

#### Steps

##### comp1 (PARENT)

- ROUTE
- take data from api/json and map over it to get individual questions
- in object, have key that says hasAnswered = false, switches to true when user answers. (possibly a state?)

##### comp1a (CHILD OF COMP 1)

- map over individual questions in order to get all possible answers to appear as radio buttons
- toggle hasAnswered state when user clicks an input
- when the key hasAnswered = true, show 'next' button

##### comp1b (CHILD OF COMP 1)

- update state pushing quesiton id, question answer, and index into an array handled by state. Use local storage?
- give state ability to work next, previous, and submit buttons

##### comp2

- ROUTE
- takes user to updated results page

#### STATES

##### [userAnswer, setUserAnswer] = [{}]

##### [hasAnswered, setHasAnswered] = [false]

- when user answers a question, store question answer key to user answer. When hasAnswered === true, (toggle hook) user has the ability to go to the next question. 
- useEffect for local storage will update whenever userAnswer has changed. 


## API




```
{data: { }}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min



#### MVP
- Find and use external api
- Render data on page
- Allow user to interact with the page
- Input form that updates an array of data using state, pushing user input into array
- filter using that array the api values
- limit results on page

#### PostMVP 

- post results

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| Header | This will render the header include the nav |
| Footer | This will render the header include the nav |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```

```
<!-- 
Important Code:
```
Question HTMML:

    <div class="question mb-4 pt-4 p-4 p-md-5">
                        <h3 class="mb-4">5. Has the person fallen in the past 12 months?</h3>

                        <label class="answer btn btn-lg btn-light text-primary mr-2">
                            <input style="display: inline-block; vertical-align: baseline;" value="Yes" type="radio" name="CFRA5">&nbsp; <span style="display: inline-block; vertical-align: middle;">Yes</span>
                        </label>

                        <label class="answer btn btn-lg btn-light text-primary mr-2">
                            <input style="display: inline-block; vertical-align: baseline;" value="No" type="radio" name="CFRA5">&nbsp; <span style="display: inline-block; vertical-align: middle;">No</span>
                        </label>

                        <label class="answer btn btn-lg btn-light text-primary mr-2">
                            <input style="display: inline-block; vertical-align: baseline;" value="Unknown" type="radio" name="CFRA5">&nbsp; <span style="display: inline-block; vertical-align: middle;">Unknown</span>
                        </label>

                    </div>

window.storedFormValues = JSON.parse('{"CFRA33": "No", "CFRA32": "Yes", "CFRA31": "No", "CFRA30": "Yes", "CFRA37": "No", "CFRA36": "Yes", "CFRA35": "No", "CFRA34": "Yes", "CFRA38": "Unknown", "CFRA19": "No", "CFRA18": "No", "CFRA11": "No", "CFRA10": "Unknown", "CFRA13": "No", "CFRA12": "No", "CFRA15": "No", "CFRA14": "No", "CFRA17": "No", "CFRA16": "No", "CFRA1": "Yes", "CFRA3": "No", "CFRA2": "No", "CFRA5": "No", "CFRA4": "Unknown", "CFRA7": "Yes", "CFRA6": "No", "CFRA9": "No", "CFRA8": "No", "CFRA24": "No", "CFRA25": "Yes", "CFRA26": "No", "CFRA27": "No", "CFRA20": "Unknown", "CFRA21": "Unknown", "CFRA22": "No", "CFRA23": "No", "CFRA28": "Yes", "CFRA29": "No"}');

        var $loader = $('#loader');
        var $visibleQuestion = $('.question.active');
        var $submitBtn = $('.submit');
        var $questions = $('.questions');
        var $progressBar = $('.progress-bar');
        var totalQuestionCount = $questions.children().length;
        var respondedQuestionCount = _.size(window.storedFormValues);

        $(function() {
            $(document)
                .on('click', '.answer input', onAnswerClick)
                .on('click', '.back', onBackClick)
                .on('click', '.next', onNextClick);

            adjustQuestionsHeight($questions, $visibleQuestion);

            if (window.storedFormValues) {
                loadStoredFormValues(true);
            }


 Old code for updating progress bar:

 function updateProgressBar() {
            $progressBar.css('width', (respondedQuestionCount / totalQuestionCount) * 100 + '%');
        }

        function updateSubmitButton() {
            if (totalQuestionCount === respondedQuestionCount) {
                $submitBtn
                    .removeClass('disabled')
                    .fadeIn();
            }
        } 

 function onBackClick(e) {
            e.preventDefault();

            var $previousQuestion = $visibleQuestion.prev();

            if ($previousQuestion.length) {
                moveBack($visibleQuestion, $previousQuestion);
                $visibleQuestion = $previousQuestion;
                adjustQuestionsHeight($questions, $visibleQuestion);
            }
        }

        function onNextClick(e) {
            e.preventDefault();

            var $nextQuestion = $visibleQuestion.next();

            if ($nextQuestion.length) {
                moveForward($visibleQuestion, $nextQuestion);
                $visibleQuestion = $nextQuestion;
                adjustQuestionsHeight($questions, $visibleQuestion);

                if (!$visibleQuestion.next().length) {
                    $submitBtn.fadeIn();
                }
            }
        }

        function submitResponse(key, value, callback) {
            $.ajax({
                type: "PATCH",
                url: "/api/patientvisit/14/",
                data: JSON.stringify({
                    mds_data: window.storedFormValues,
                    changes: [{
                        type: "ASSESSMENT",
                        key: key,
                        value: value
                    }]
                }),
                success: function(response) {
                    if (
                        response &&
                        !_.isUndefined(response["mds_data"])
                    ) {
                        window.storedFormValues = response["mds_data"];

                        loadStoredFormValues(false, response["new_changes"]);

                        if (callback) {
                            callback(response);
                        }
                    }
                },
                contentType: "application/json"
            });
        }

        function loadStoredFormValues(isInitialLoad, newChanges) {
            if (newChanges) {
                _.forEach(newChanges, function(change) {
                    updateFormValues(
                        change.field,
                        change.value,
                        change.user,
                        change.datetime
                    );
                });
            } else {
                for (field in window.storedFormValues) {
                    updateFormValues(field, window.storedFormValues[field]);
                }
            }

            respondedQuestionCount = _.size(window.storedFormValues);

            updateProgressBar();
            updateSubmitButton();
        }

        function updateFormValues(field, value) {
            var $inputs = $('[name="' + field + '"]');

            if ($inputs.length) {
                if ($inputs.eq(0)[0].type == "checkbox") {
                    if (value == "1") {
                        $inputs.prop("checked", true);
                    } else {
                        $inputs.prop("checked", false);
                    }
                } else {
                    if ($inputs.eq(0).is(":radio")) {
                        $inputs.val([value]);
                    } else {
                        $inputs.val(value);
                    }
                }

                $inputs.eq(0).closest('.question').addClass('responded');
            }
        }

        function moveBack($visibleQuestion, $previousQuestion) {
            $visibleQuestion
                .removeClass('animating')
                .removeClass('previous')
                .addClass('next')
                .addClass('animating')
                .removeClass('active');
            $previousQuestion
                .removeClass('animating')
                .addClass('.previous')
                .removeClass('.next')
                .addClass('animating')
                .addClass('active');

            if ($previousQuestion.prev().length) {
                $('.back').removeClass('disabled');
            } else {
                $('.back').addClass('disabled');
            }

            if ($previousQuestion.next().length && $previousQuestion.hasClass('responded')) {
                $('.next').removeClass('disabled');
            } else {
                $('.next').addClass('disabled');
            }
        }
step functions
        function moveForward($visibleQuestion, $nextQuestion) {
            $visibleQuestion
                .removeClass('animating')
                .removeClass('next')
                .addClass('previous')
                .addClass('animating')
                .removeClass('active')
                .addClass('responded');
            $nextQuestion
                .removeClass('animating')
                .addClass('.next')
                .removeClass('.previous')
                .addClass('animating')
                .addClass('active');

            if ($nextQuestion.prev().length) {
                $('.back').removeClass('disabled');
            } else {
                $('.back').addClass('disabled');
            }

            if ($nextQuestion.next().length && $nextQuestion.hasClass('responded')) {
                $('.next').removeClass('disabled');
            } else {
                $('.next').addClass('disabled');
            }
        }

        function adjustQuestionsHeight($questions, $visibleQuestion) {
            $questions.css('height', $visibleQuestion.height() + parseInt($visibleQuestion.css('padding'), 10) * 2);
        }
    </script>

```        
-->