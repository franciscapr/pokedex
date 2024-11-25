$(document).ready(function () {
    $("form").submit(function(event){

        event.preventDefault()

        let valueInput = $("#pokemonInput").val();

        alert(valueInput);
    })
});