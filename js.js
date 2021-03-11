var botao_sidebar_check = $('#revelar');

//CONFIGURAR OS ITEMS DE MENU E OS SUBITEM PARA QUANDO A BARRA ESTIVER RECUADA OU SOLTA.
botao_sidebar_check.click(function(){

	if($(this).is(':checked')){
		$('#revelar ~ .sidebar').mouseenter(function(){

			$('.sidebar a').addClass('item');
			$('.sub_item').css({display: 'flex'});

		});

		$('#revelar ~ .sidebar').mouseleave(function(){
			
			$('.sub_item').css({display: 'none'});
			$('.sidebar a').removeClass('item');

		});

	}else{

		$('#revelar ~ .sidebar').mouseenter(function(){
			$('sub_item').css({display: 'flex'});
		});

		$('#revelar ~ .sidebar').mouseleave(function(){
			$('sub_item').css({display: 'none'});
		});

	}
});


botao_sidebar_check.trigger("click");

//CONFIGURAR OS SUBITEMS DO MENU CATEGORIA
var clicou = false;
var clicks = 0;
$('.item_categoria').on('click', function(){
	clicks++;

	if(clicks == 1){

		clicou = true;

	}else{

		clicou = false;
		clicks = 0;

	}

	if(clicou){
		$('.sub_item_categoria').addClass('mostrar');
	}else{
		$('.sub_item_categoria').removeClass('mostrar');
	}

});

/////////////////////////////////////////////////////////////

//CONFIGURAR OS SUBITEMS DO MENU GRUPOS
var clicou2 = false;
var clicks2 = 0;
$('.item_grupo').on('click', function(){
	clicks2++;

	if(clicks2 == 1){

		clicou2 = true;

	}else{

		clicou2 = false;
		clicks2 = 0;

	}

	if(clicou2){
		$('.sub_item_grupo').addClass('mostrar');
	}else{
		$('.sub_item_grupo').removeClass('mostrar');
	}

});


/////////////////////////////////////////////////////////////

//CONFIGURAR OS SUBITEMS DO MENU FORMULÁRIOS
var clicou3 = false;
var clicks3 = 0;
$('.item_form').on('click', function(){
	clicks3++;

	if(clicks3 == 1){

		clicou3 = true;

	}else{

		clicou3 = false;
		clicks3 = 0;

	}

	if(clicou3){
		$('.sub_item_form').addClass('mostrar');
	}else{
		$('.sub_item_form').removeClass('mostrar');
	}

});


