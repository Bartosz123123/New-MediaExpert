document.addEventListener('DOMContentLoaded', function () {
	const body = document.querySelector('body');
	const search = document.querySelector('.search');
	const btn = document.querySelector('.search-btn');
	const navBtn = document.querySelector('.buy');
	const basketBox = document.querySelector('.buy-box');
	// const iconsBtn = document.querySelectorAll('.icon');
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
	const addToFavoriteBtn = document.querySelectorAll('.favorite');

	const arrow = sidebar.querySelector('.arrow');
	// const title = sidebar.querySelector('.title');
	const slider = sidebar.querySelector('.slider');
	const themeText = sidebar.querySelector('.theme-text');
	const changeThemeBtn = sidebar.querySelector('.change-theme');
	const notification = document.querySelector('.notification');
	const favNotification = document.querySelector('.fav-notification');

	const basket = document.querySelector('.basket-box');
	const basketContainer = document.querySelector('.basket-container');
	const addBasketBtn = document.querySelectorAll('.add-basket-btn');

	const showFavBoxBtn = document.querySelector('.favorite-card');
	const favBox = document.querySelector('.favorite-box');
	const favContainer = document.querySelector('.fav-container');

	const activeBuyWindow = (e) => {
		if (basket.style.display !== 'block') {
			setTimeout(() => {
				basket.style.display = 'block';
			}, 1);
		}
	};

	const showFavBox = (e) => {
		if (favBox.style.display !== 'block') {
			setTimeout(() => {
				favBox.style.display = 'block';
			}, 1);
		}
	};

	const addItemToBasket = (e) => {
		const closestLi = e.target.closest('li');
		const closestImg = closestLi.querySelector('img').src;
		const closestAlt = closestLi.querySelector('img').alt;
		const closestPrice = closestLi.querySelector('.price').textContent;
		const closestName = closestLi.querySelector('.product-name').textContent;
		const newLi = document.createElement('li');
		newLi.classList.add('basket-item');

		newLi.innerHTML = `
		<button class="close-item"><i class="fa-solid fa-xmark"></i></button>
		<div class="basket-img-box">
			<img src="${closestImg}" alt="${closestAlt}" class="basket-img">
			<h3 class="basket-title">${closestName}</h3>
		</div>
		<div class="basket-price-box">
			
			<p class="basket-price">${closestPrice}</p>
		</div>
		`;

		basketContainer.appendChild(newLi);
		const allLiInBasket = document.querySelectorAll('.basket-item');
		getAllElementsInBasket();

		if (allLiInBasket.length === 0) {
			console.log('Dodaj zakupy do koszyka');
		} else if (allLiInBasket.length > 0) {
			notification.textContent = allLiInBasket.length;
			notification.classList.add('show-notification');
			notification.classList.remove('close-notification');

			if (allLiInBasket.length >= 10) {
				notification.textContent = '+9';
			}
		}
	};

	const getAllElementsInFav = () => {
		const closeLi = document.querySelectorAll('.close-item');
		if (closeLi !== null && closeLi.length > 0) {
			closeLi.forEach((btn) => {
				btn.addEventListener('click', (e) => {
					e.stopPropagation(); // Zapobiegnij bąbelkowaniu zdarzenia

					if (favBox) {
						const targetClick = e.target;
						const targetClicked = targetClick.closest('li');
						// const favElement = targetClicked.querySelector('.fav-title');
						const allProduct = document.querySelectorAll('.product-name');

						allProduct.forEach((names) => {
							const favElement = targetClicked.querySelector('.fav-title'); // Przeniesienie wewnątrz pętli
							const favElementName = favElement;
							const allNames = names.textContent;
							const allLi = names.closest('li');

							if (allLi.classList.contains('added-to-fav')) {
								if (favElementName.textContent === allNames) {
									const buttonElement = allLi.querySelector('.favorite');

									if (buttonElement) {
										// Tutaj możesz wykonywać operacje na elemencie buttonElement
										buttonElement.classList.remove('added-to-favorite');
									}

									// Usunięcie elementu li
									targetClicked.remove();

									// Usunięcie klasy 'added-to-fav' z elementu li
									allLi.classList.remove('added-to-fav');
								}
							}
						});

						// Sprawdź, czy w koszyku są jeszcze elementy

						const allFavLi = document.querySelectorAll('.fav-li');
						if (allFavLi.length === 0) {
							favBox.style.display = 'none';
							favNotification.classList.add('close-notification');

							setTimeout(() => {
								favNotification.classList.remove('show-notification');
								favNotification.classList.remove('close-notification');
							}, 1000);

							favNotification.textContent = '';
						} else if (allFavLi.length !== 0) {
							favNotification.textContent = allFavLi.length;

							if (allFavLi.length >= 10) {
								favNotification.textContent = '9+';
							}
						}

						console.log('ok');
					}
				});
			});
		}
	};

	const getAllElementsInBasket = () => {
		const closeLi = document.querySelectorAll('.close-item');
		if (closeLi !== null && closeLi.length > 0) {
			closeLi.forEach((btn) => {
				btn.addEventListener('click', (e) => {
					e.stopPropagation(); // Zapobiegnij bąbelkowaniu zdarzenia

					if (basket !== null && basket !== undefined) {
						// <--- Zmiana
						const target = e.target;
						const closestLi = target.closest('li');
						console.log(closestLi);
						closestLi.remove();

						const allLiInBasket = document.querySelectorAll('.basket-item');
						if (allLiInBasket.length === 0) {
							basket.style.display = 'none';
							notification.classList.add('close-notification');

							setTimeout(() => {
								notification.classList.remove('show-notification');
								notification.classList.remove('close-notification');
							}, 1000);

							notification.textContent = '';
						} else if (allLiInBasket.length !== 0) {
							notification.textContent = allLiInBasket.length;

							if (allLiInBasket.length >= 10) {
								notification.textContent = '9+';
							}
						}
					}

					// addToFavoriteBtn.forEach((btn, e) => {
					// 	if (btn.classList.contains('added-to-favorite')) {
					// 		const allProductWithFav =
					// 			document.querySelectorAll('.added-to-fav');
					// 		btn.classList.remove('added-to-favorite');
					// 		console.log(allProductWithFav);
					// 	}
					// });
				});
			});
		}
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
			if (!e.target.closest('.close-item') && !basketBox.contains(e.target)) {
				basketBox.classList.remove('buy-box-active');
			}
		}

		if (basket.style.display === 'block') {
			if (!basket.contains(e.target)) {
				basket.style.display = 'none';
			}
		}

		if (favBox.style.display === 'block') {
			if (!favBox.contains(e.target)) {
				favBox.style.display = 'none';
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

	// products.forEach((product) => {
	// 	product.addEventListener('click', (e) => {
	// 		if (e.target.closest('li').classList.contains('active-info-card')) {
	// 			return;
	// 		} else {
	// 			product.classList.add('active-info-card');
	// 		}
	// 		// product.classList.toggle('active-info-card');
	// 	});
	// });

	products.forEach((product) => {
		product.addEventListener('click', (e) => {
			if (e.target.closest('li').classList.contains('active-info-card')) {
				return;
			} else {
				product.classList.add('active-info-card');
			}
		});
	});

	showFavBoxBtn.addEventListener('click', showFavBox);

	addToFavoriteBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const backLi = e.target.closest('li');

			// if (backLi.classList.contains('added-to-fav')) {
			// 	return;
			// }

			if (!backLi.classList.contains('added-to-fav')) {
				backLi.classList.add('added-to-fav');
				const closestImg = backLi.querySelector('img').src;
				const closestAlt = backLi.querySelector('img').alt;
				const closestPrice = backLi.querySelector('.price').textContent;
				const closestName = backLi.querySelector('.product-name').textContent;
				const newFav = document.createElement('li');
				newFav.classList.add('fav-li');

				newFav.innerHTML = `
			<button class="close-item"><i class="fa-solid fa-xmark"></i></button>
	    		<div class="fav-img-box">
	       			<img src="${closestImg}" alt="${closestAlt}" class="fav-img">

	        		<h3 class="fav-title">${closestName}</h3>
	   			</div>

	    		<div class="fav-price-box">
	             	<p class="fav-price">${closestPrice}</p>
	    		</div>
			`;
				favContainer.appendChild(newFav);
			}
			const allFavLi = document.querySelectorAll('.fav-li');
			getAllElementsInFav();
			btn.classList.add('added-to-favorite');

			if (allFavLi.length === 0) {
				console.log('Dodaj do ulubionych');
			} else if (allFavLi.length > 0) {
				favNotification.textContent = allFavLi.length;
				favNotification.classList.add('show-notification');
				favNotification.classList.remove('close-notification');

				if (allFavLi.length >= 10) {
					favNotification.textContent = '+9';
				}
			}

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
