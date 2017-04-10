


$(document).ready(function(){

	// on centralise la couleur du boutton cliqué pour pas etre emmerdé
	var clickedButtonColor = "papayawhip";
	// on récupere la couleur initiale du boutton
	var baseButtonColor = $('button').css('background-color');


	// coloration des boutons lorsque la souris entre et sort
    $('button').mouseenter(function() {
        $(this).css('background-color',clickedButtonColor);
    });

    $('button').mouseleave(function() {
        $(this).css('background-color',baseButtonColor);
    });

    //Animations de la SECTION PARCOURS
    //on cache tout ce qui n'as pas a etre vu à l'ouverure de la page
    $('#pointFortText').hide();

    //affichage des zones de textes au moment du clic
    $('#monParcours').click(function(){
        $('#monParcoursText').slideToggle(900);
        $('monParcours').css('padding', '10');
    });
            // tentative de faire persister la couleur des selecteurs cochés, a débugger...

    $('#pointFort').click(function(){
        $('#pointFortText').slideToggle(900);
    });

    //Animations de la SECTION FORMATION ET COMPETENCES
    //on cache tout ce qui n'as pas a etre vu à l'ouverure de la page
    $('#numerique-text').hide();
    $('#social-text').hide();
    $('#cuisine-text').hide();
    $('#autre-text').hide();

    //affichage des zones de textes au moment du clic
    $('#numerique').click(function(){
        $('#numerique-text').slideToggle(900);
    });

    $('#social').click(function(){
        $('#social-text').slideToggle(900);
    });

    $('#cuisine').click(function(){
        $('#cuisine-text').slideToggle(900);
    });

    $('#autre').click(function(){
        $('#autre-text').slideToggle(900);
    });

    //Animations de la SECTION EXPERIENCES
    //on cache tout ce qui n'as pas a etre vu à l'ouverure de la page
    $('#numerique-xp-text').hide();
    $('#social-xp-text').hide();
    $('#cuisine-xp-text').hide();
    $('#autre-xp-text').hide();

    //affichage des zones de textes au moment du clic
    $('#numerique-xp').click(function(){
        $('#numerique-xp-text').slideToggle(900);
    });

    $('#social-xp').click(function(){
        $('#social-xp-text').slideToggle(900);
    });

    $('#cuisine-xp').click(function(){
        $('#cuisine-xp-text').slideToggle(900);
    });

    $('#autre-xp').click(function(){
        $('#autre-xp-text').slideToggle(900);
    });

        //Animations de la SECTION PROJETS
    //on cache tout ce qui n'as pas a etre vu à l'ouverure de la page
    $('#projet-form-text').hide();
    $('#projet-hub-text').hide();

    //affichage des zones de textes au moment du clic
    $('#projet-form').click(function(){
        $('#projet-form-text').slideToggle(900);
    });

    $('#projet-hub').click(function(){
        $('#projet-hub-text').slideToggle(900);
    });

        //Animations de la SECTION LOISIRS
    //on cache tout ce qui n'as pas a etre vu à l'ouverure de la page
    $('#interet-text').hide();
    $('#loisirs-text').hide();
    $('#aquarelle-text').hide();

    //affichage des zones de textes au moment du clic
    $('#interet').click(function(){
        $('#interet-text').slideToggle(900);
    });

    $('#loisirs').click(function(){
        $('#loisirs-text').slideToggle(900);
    });

    $('#aquarelle').click(function(){
        $('#aquarelle-text').slideToggle(900);
    });

    // Le CAROUSSEL
   $('.caroussel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  variableWidth: true

});
});
