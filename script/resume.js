document.addEventListener('DOMContentLoaded', () => {
	const rFrame = document.getElementById('rFrame');
	const aspectRatioA4 = 1.41;
	
	function resizeFrame() {
		const frameWidth = rFrame.clientWidth;
		const newHeight = frameWidth*aspectRatioA4;
		rFrame.style.height = newHeight + 'px';
	}
	
	rFrame.onload = resizeFrame;
	window.addEventListener('resize', resizeFrame);
	
	var langSwitch = document.getElementById('lang-switch');
            var elementsWithLang = document.querySelectorAll('[lang]');
            var koElements = document.querySelectorAll('[lang="ru"]');
            var enElements = document.querySelectorAll('[lang="eng"]');

            function hideAllLangElements() {
                elementsWithLang.forEach(function (element) {
                    element.style.display = 'none';
                });
            }

            function showKoreanElements() {
                koElements.forEach(function (element) {
                    element.style.display = 'block';
                });
            }

            function showEnglishElements() {
                enElements.forEach(function (element) {
                    element.style.display = 'block';
                });
            }

            langSwitch.addEventListener('change', function () {
                var lang = langSwitch.value;
                hideAllLangElements();

                switch (lang) {
                    case 'eng':
                        showEnglishElements();
                        break;
                    case 'ru':
                        showKoreanElements();
                        break;
                    default:
                        showKoreanElements();
                }
            });

            // Initial setup
            hideAllLangElements();
            showKoreanElements();
	
	
});
