document.addEventListener('DOMContentLoaded', () => {
	
	const followCursor = () => {
		const elem = document.getElementById('follow-cursor');
		
		window.addEventListener('mousemove', (e) => {
			const target = e.target;
			if(!target) return;
			
			elem.style.left = e.pageX + 'px';
			elem.style.top = e.pageY + 'px';

		});
	};
	followCursor();

	// Получите ссылки на элементы меню
	var menuLinks = document.querySelectorAll(".hashlinks");
	var offsetPersentage = 10;
	var windowHeight = window.innerHeight;
	var offset = (windowHeight * 12) / 100;
	var offsetForScroll = (windowHeight * offsetPersentage) / 100;

	// Обработчик события для скроллинга
	window.addEventListener("scroll", function () {
		// Получите текущую позицию скролла
		var scrollPosition = window.scrollY + offset;

		// Переберите все ссылки в меню
		menuLinks.forEach(function (link) {
			var sectionId = link.getAttribute("href").substring(1); // Удалите "#" из атрибута href
			var section = document.getElementById(sectionId);

			// Проверьте, находится ли раздел на экране
			if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
				// Если да, то добавьте класс "active" к соответствующей ссылке, иначе удалите его
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	});

	// Обработчик события для перехода по якорям
	menuLinks.forEach(function (link) {
		link.addEventListener("click", function (e) {
			e.preventDefault(); // Предотвратите стандартное поведение ссылки

			var sectionId = link.getAttribute("href").substring(1); // Удалите "#" из атрибута href
			var section = document.getElementById(sectionId);

			// Прокрутите страницу к соответствующему разделу с использованием плавного скролла
			window.scrollTo({
				top: section.offsetTop - offsetForScroll,
				behavior: "smooth"
			});
		});
	});
	
});

