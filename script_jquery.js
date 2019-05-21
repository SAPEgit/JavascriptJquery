// VERIFICA SE O DOCUMENTO ESTÁ PRONTO
//esconder elemento

/*
$(function() {
    $('button').click(function (params) {
    $('h1').hide(); 
    }); 
});
*/
// trocar a cor de algo
/*
$(function() {
    $('#blue').click(function() {
        $('p').css("background-color", "blue"); 
    });
    $('#red').click(function() {
        $('p').css("background-color", "red"); 
    });
});
*/

//efeito fade, aula 17

$(function () {
    $('#blue').click(function() {
        $('p').css("background-color", "blue"); 
        $('p').fadeOut('slow');
        $('p').delay(1000);
        $('p').fadeIsn('slow');

    });
    $('#red').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");

    });
   

    /*
    $('#var').click(function() {
        
        $('#input').attr("placeholder", "digite o valor da sua variável");
    });



    $('#en').click(function () {
        $('#input').attr("placeholder", "qual valor você quer pegar?");
    })
    $('#fun').click(function () {
        $('#input').attr("placeholder", "função");
    })
    */
    function myFunction() {
        var x = document.getElementById("opcao").value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
      }
})

