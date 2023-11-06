const body = document.querySelector('body');
const search = document.querySelector('.search');
const btn = document.querySelector('.search-btn');
const navBtn = document.querySelector('.buy');
const basketBox = document.querySelector('.buy-box');
const iconsBtn = document.querySelectorAll('.icon');
const activeSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const showMoreBox = sidebar.querySelector('.show-more-box');
const products = document.querySelectorAll('.products');
const showMoreBtnCard = document.querySelectorAll('.show-more');

const priceImg = document.querySelector('.price-img');
const money = document.querySelector('.money');
const iphoneName = document.querySelector('.iphone-name');

const arrow = sidebar.querySelector('.arrow');
const title = sidebar.querySelector('.title');
const slider = sidebar.querySelector('.slider');
const themeText = sidebar.querySelector('.theme-text');
const changeThemeBtn = sidebar.querySelector('.change-theme');

const showMoreCards = (e) => {
	const closestLi = e.target.closest('li');
	const img = closestLi.querySelector('img');
	const title = closestLi.querySelector('.title');
	const price = closestLi.querySelector('.price');

	const imgSrc = img.src;
	const titleText = title.textContent;
	const imgAlt = img.alt;

	priceImg.src = imgSrc;
	priceImg.alt = imgAlt;
	iphoneName.textContent = titleText;
	money.textContent = price.textContent;
};

const changeTheme = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark');
		changeThemeBtn.classList.add('slider-active');
	} else {
		body.setAttribute('data-mode', 'light');
		changeThemeBtn.classList.remove('slider-active');
	}
};

const activeSearch = () => {
	if (search.value === '' || search.value !== '') {
		search.classList.add('search-active');
	}
};

const searchFunctiotn = (e) => {
	enterCheck(e);
};

const enterCheck = (e) => {
	if (e.keyCode === 13) {
		console.log('ok');
	}
};

const basketOffSearch = () => {
	if (search.classList.contains('search-active')) {
		search.classList.remove('search-active');
		search.classList.add('search-close');

		setTimeout(() => {
			search.classList.remove('search-close');
		}, 500);
	}
};

const sidebarActive = () => {
	sidebar.classList.toggle('sidebar-active');
	if (sidebar.classList.contains('sidebar-active')) {
		showMoreBox.style.display = 'flex';
		arrow.style.transform = 'rotate(180deg)';
		// body.style.overflow = 'hidden';
		setTimeout(() => {
			themeText.style.opacity = '1';
		}, 300);
	} else {
		arrow.style.transform = 'rotate(0deg)';
		setTimeout(() => {
			showMoreBox.style.display = 'none';
		}, 300);

		// body.style.overflow = 'visible';
		themeText.style.opacity = '0';
	}
};
showMoreBtnCard.forEach((btn) => {
	btn.addEventListener('click', showMoreCards);
});
products.forEach((product) => {
	product.addEventListener('click', (e) => {
		if (e.target.closest('li').classList.contains('active-info-card')) {
			return;
		} else {
			product.classList.add('active-info-card');
		}
		// product.classList.toggle('active-info-card');
	});
});
slider.addEventListener('click', changeTheme);
activeSidebar.addEventListener('click', sidebarActive);
navBtn.addEventListener('click', basketOffSearch);
search.addEventListener('keyup', searchFunctiotn);
btn.addEventListener('click', activeSearch);
