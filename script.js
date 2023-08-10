const rating = document.getElementById('rating')
const thankyou = document.getElementById('thankyou')
const form = document.querySelector('form')
const chosenRating = document.getElementById('chosenRating')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	if (form.querySelector('#one').checked) {
		chosenRating.innerHTML = 'You selected 1 out of 5'
	} else if (form.querySelector('#two').checked) {
		chosenRating.innerHTML = 'You selected 2 out of 5'
	} else if (form.querySelector('#three').checked) {
		chosenRating.innerHTML = 'You selected 3 out of 5'
	} else if (form.querySelector('#four').checked) {
		chosenRating.innerHTML = 'You selected 4 out of 5'
	} else if (form.querySelector('#five').checked) {
		chosenRating.innerHTML = 'You selected 5 out of 5'
	} else {
		alert('You did not chose a rating!')
		return false
	}

	rating.style.transform = 'translate(0, -100vh)'
	setInterval(() => {
		thankyou.style.transform = 'translate(0, 0)'
	}, 200);
	setInterval(() => {
		rating.style.display = 'none'
	}, 1000);

})