document.addEventListener('DOMContentLoaded', function () {
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
	const shoppingCardBtn = document.querySelector('.shopping-card');

	const priceBox = document.querySelector('.price-box');
	const close = document.querySelector('.close');
	const priceImg = document.querySelector('.price-img');
	const money = document.querySelector('.money');
	const iphoneName = document.querySelector('.iphone-name');
	const backArrow = document.querySelectorAll('.back-arrow');
	const addToBasketBtn = document.querySelectorAll('.favorite');

	const arrow = sidebar.querySelector('.arrow');
	const title = sidebar.querySelector('.title');
	const slider = sidebar.querySelector('.slider');
	const themeText = sidebar.querySelector('.theme-text');
	const changeThemeBtn = sidebar.querySelector('.change-theme');

	const basket = document.querySelector('.basket-box');
	const basketContainer = document.querySelector('.basket-container');
	const addBasketBtn = document.querySelectorAll('.add-basket-btn');

	const activeBuyWindow = (e) => {
		if (basket.style.display !== 'block') {
			setTimeout(() => {
				basket.style.display = 'block';
			}, 1);
		}
	};

	const addItemToBasket = (e) => {
		// basket.style.display = 'block';
		const closestLi = e.target.closest('li');
		const closestImg = closestLi.querySelector('img').src;
		const closestAlt = closestLi.querySelector('img').alt;
		const closestPrice = closestLi.querySelector('.price').textContent;
		const closestName = closestLi.querySelector('.product-name').textContent;

		const newLi = document.createElement('li');
		newLi.classList.add('basket-item');

		newLi.innerHTML = `
		<div class="basket-img-box">
			<img src="${closestImg}" alt="${closestAlt}" class="basket-img">
			<h3 class="basket-title">${closestName}</h3>
		</div>
		<div class="basket-price-box">
			
			<p class="basket-price">${closestPrice}</p>
		</div>
		`;
		console.log(newLi);

		basketContainer.appendChild(newLi);
	};

	const closePriceBox = () => {
		if (priceBox.classList.contains('active-price-box')) {
			priceBox.classList.add('close-price-box');
			setTimeout(() => {
				priceBox.classList.remove('active-price-box');
				priceBox.classList.remove('close-price-box');
			}, 500);
		}
	};

	const showPriceBox = (e) => {
		const closestLi = e.target.closest('li');
		const img = closestLi.querySelector('img');
		const title = closestLi.querySelector('.title');
		const price = closestLi.querySelector('.price');

		priceBox.classList.add('active-price-box');

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
	//=========================================================//
	shoppingCardBtn.addEventListener('click', activeBuyWindow);
	addBasketBtn.forEach((addBtn) => {
		addBtn.addEventListener('click', (e) => {
			const backLi = e.target.closest('li');
			console.log('dodano do koszyka');
			setTimeout(() => {
				backLi.classList.remove('active-info-card');
			}, 1);

			addItemToBasket(e);
		});
	});

	basketBox.addEventListener('click', () => {
		basketBox.classList.add('buy-box-active');
	});

	document.addEventListener('click', (e) => {
		if (basketBox.classList.contains('buy-box-active')) {
			if (!basketBox.contains(e.target)) {
				basketBox.classList.remove('buy-box-active');
			}
		}

		if (basket.style.display === 'block') {
			if (!basket.contains(e.target)) {
				basket.style.display = 'none';
			}
		}
	});
	backArrow.forEach((item) => {
		item.addEventListener('click', (e) => {
			const backLi = e.target.closest('li');
			if (backLi.classList.contains('active-info-card')) {
				setTimeout(() => {
					backLi.classList.remove('active-info-card');
				}, 1);
			}
		});
	});

	close.addEventListener('click', closePriceBox);
	showMoreBtnCard.forEach((btn) => {
		btn.addEventListener('click', showPriceBox);
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
	addToBasketBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const backLi = e.target.closest('li');
			console.log('dodano do ulubionych');
			setTimeout(() => {
				backLi.classList.remove('active-info-card');
			}, 1);
		});
	});

	slider.addEventListener('click', changeTheme);
	activeSidebar.addEventListener('click', sidebarActive);
	navBtn.addEventListener('click', basketOffSearch);
	search.addEventListener('keyup', searchFunctiotn);
	btn.addEventListener('click', activeSearch);
});
