const form = document.querySelectorAll('.signup-form');

const convertHTMLtoString = () => {
	return fetch('./html/template.html')
		.then(response => response.text())
}

const sendEmail = (address, template) => {

	fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"address": address,
			"template": template
		})
	}).then(results => {
		console.log(results)
	})
		.catch(error => {
			console.log(error)
		})
}

const getEmail = (event) => {
	event.preventDefault();
	const email = event.target.elements[0].value;
	convertHTMLtoString()
		.then(response => {
			sendEmail(email,response)
		})
		.catch(error => {
			console.log(error,'error al convertir el template.')
		})
}

for(let i=0; i < form.length; i++){
	form[i].addEventListener("submit",getEmail);
}
