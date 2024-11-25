$(document).ready(function () {
    $("form").submit(function (event) {

        event.preventDefault()

        let valueInput = $("#pokemonInput").val();

        $.ajax({
            // Concatenamos el texto del pokemon + el valor de la variable
            url: "https://pokeapi.co/api/v2/pokemon/" + valueInput,
            success: function (data) {
                let nombre = data.name
                let imagen = data.sprites.front_default
                let peso = data.weight;

                $("#pokeInfo").html(`
                    <div class="text-center">
                        <h3>${nombre}</h3>
                        <img src="${imagen}">
                        <h6>Peso: ${peso}</h6>
                     </div>`)
            },
        });
    });
});