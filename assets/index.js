const hamburgerButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const introSubtitle = document.querySelector('.subtitle--intro');

hamburgerButton.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

const roles = JSON.parse(
	JSON.stringify(introSubtitle.getAttribute('data-labels'))
).split(', ');

let index = 0;

setInterval(() => {
	introSubtitle.classList.remove('scale-out-hor-left');
	introSubtitle.classList.add('scale-in-hor-left');
	introSubtitle.innerText = roles[index];
}, 2000);

setInterval(() => {
	introSubtitle.classList.remove('scale-in-hor-left');
	introSubtitle.classList.add('scale-out-hor-left');
	index = index + 1 === roles.length ? 0 : index + 1;
}, 6000);
