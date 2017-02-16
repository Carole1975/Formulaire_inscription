$(document).ready(function(){
	console.log("coucou")
	//alert("Bonjour et bienvenue!")
	$("form").submit(function(event){
         event.preventDefault();
         console.log("send");
         var nom = $("#nom").val()
         var prenom = $("#prenom").val()
         var login = $("#login").val()
         var email = $("#email").val()
         var ville = $ ("#ville").val()

         localStorage.setItem("")



	})
});