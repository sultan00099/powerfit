function big (element) {
	element.style.fontSize = "17px";
}
function small (element){
	element.style.fontSize = "14px";
}
$(document).ready(function(){
  $("a").on({
    mouseenter: function(){
      $(this).css("color", "red");
    },  
    mouseleave: function(){
      $(this).css("color", "white");
    }
  });
});
	$('.slider').slick({
	arrows: false,
	dots: false, 
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 3000,
	infinite: false,
	initialSlide:0,
	autoplay: true,
	autoplaySpeed: 1000,
	contentPadding: '0',
	centerMode: false,
	vertical: true,
	verticalSwiping: true,
	});

	function popup(){
		document.querySelector(".popup").style.display = "flex";             
	};
	function close_popup(){
		document.querySelector(".popup").style.display = "none";	
		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('num').value = "";
		document.getElementById('message').value = "";
	};
	
	let message = document.querySelector('.subscription-message');
	let form = document.querySelector('.subscription');
	let email = document.querySelector('#email');
	form.onsubmit = function(evt){
		evt.preventDefault();
		message.textContent = '*Отправлено';
		close_popup();
	};	

	//max-width(767px)	
	$(document).ready(function(){
		$('.header_burger').click(function(event) {
			$('.header_burger, .header_menu').toggleClass('active');
			$('body').toggleClass('lock'); //блокировка прокрутки
		});
	});	
	
	//scroll
	$(document).ready(function(){
    $(".header_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top-120}, 1500);
    });
});
