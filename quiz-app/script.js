const startBut = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const quesContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question'); 
const answersButElement = document.getElementById('answer-buttons');

let shuffledQues, currentQuesIndex

startBut.addEventListener('click', startQuiz)
nextBut.addEventListener('click', () => {
	currentQuesIndex++
	setNextQues()
})

function startQuiz() {
	console.log("started");
	startBut.classList.add('hide');
	
	shuffledQues = questions.sort(() => Math.random() -.5)
	currentQuesIndex = 0;
	
	quesContainerElement.classList.remove('hide');
	setNextQues()
}

function setNextQues(){
	resetState()
	showQues(shuffledQues[currentQuesIndex])
}

function showQues(ques){
	questionElement.innerText = ques.question
	ques.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text;
		button.classList.add('btn')
		if(answer.correct){
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answersButElement.appendChild(button)
	})
}

function resetState(){
	clearStatusClass(document.body)
	nextBut.classList.add('hide')
	while(answersButElement.firstChild){
		answersButElement.removeChild(answersButElement.firstChild)
	}
}

function selectAnswer(e){
	const selectedBut = e.target     // target we clicked on
	const correct = selectedBut.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answersButElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})

	if(shuffledQues.length > currentQuesIndex + 1){
		nextBut.classList.remove('hide')
	}
	else{
		startBut.innerText = "Restart"
		startBut.classList.remove('hide')
	}
}

function setStatusClass(element, correct){
	clearStatusClass(element)
	if(correct){
		element.classList.add('correct')
	}
	else{
		element.classList.add('wrong')
	}
}

function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
{
	question: "What is 2 + 2 ?",
	answers: [
		{ text: '4', correct:true},
		{ text: '8', correct:false},
		{ text: '9', correct:false},
		{ text: '7', correct:false}		
	]
},

{
	question: "What is 4 + 4 ?",
	answers: [
		{ text: '4', correct:false},
		{ text: '8', correct:true},
		{ text: '9', correct:false},
		{ text: '7', correct:false}		
	]
},

{
	question: "What is 10 + 10 ?",
	answers: [
		{ text: '40', correct:false},
		{ text: '80', correct:false},
		{ text: '20', correct:true},
		{ text: '30', correct:false}		
	]
},

{
	question: "What is 2 * 25 ?",
	answers: [
		{ text: '40', correct:false},
		{ text: '85', correct:false},
		{ text: '65', correct:false},
		{ text: '50', correct:true}		
	]
}

]