//Selecting html element
let emailElement = document.querySelector('#email');
let messageElement =document.querySelector('#message');
let submitbutton = document.querySelector('#submit-button');
submitbutton.addEventListener('click', function (e){
	e.preventDefault();
	let emailValue= emailElement.value;
	let messageValue =messageElement.value;


	//console.log('Email: ',emailValue);
	//console.log('Message: ',messageValue);

	if (emailValue.includes('@')) {
		// all good
		alert('Thank you for your message');

	}
	else {
		alert('Oh no.That does not look like a valid email address.Please try again');
	}
});