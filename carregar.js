function carregarSelect2(valor) { 
 
    var arrayValores = new Array( 
        new Array(1, 1, "Gandalf"), 
        new Array(1, 2, "Galadriel"), 
        new Array(1, 3, "Saruman"), 
        new Array(1, 4, "Radagast"), 
        new Array(2, 1, "Bilbo"), 
        new Array(2, 2, "Frodo"),
        new Array(2, 3, "Samsagaz"), 
        new Array(2, 4, "Merry"), 
        new Array(2, 5, "Pippin"), 
        new Array(3, 1, "Balin"), 
        new Array(3, 2, "Bifur"), 
        new Array(3, 3, "Bofur"), 
        new Array(3, 4, "Bombur"), 
        new Array(3, 5, "Dori"), 
        new Array(3, 6, "Dwalin"), 
        new Array(3, 7, "Fili"), 
        new Array(3, 8, "Glóin"), 
        new Array(3, 9, "Kili"), 
        new Array(3, 10, "Nori"), 
        new Array(3, 11, "Óin"), 
        new Array(3, 12, "Ori"), 
        new Array(3, 13, "Thorin") 
    ); 
 
    if (valor == 0) { 

        document.getElementById("select2").disabled = true; 
        document.body.style.backgroundImage = "url('fundos/bokeh.jpg')"; 
        document.getElementById("foto").style.display = "none"; 
        document.getElementById("select2").options.length = 0; 
        document.getElementById("select2").options[0] = new Option("Desativado", "0"); 

    } else { 

        document.getElementById("foto").style.display = "block"; 
        var index = document.getElementById("select1").value; 
        fundo(index); 
        document.getElementById("select2").options.length = 0; 
        document.getElementById("select2").options[0] = new Option("Selecione uma opção", "0"); 
        for (i = 0; i < arrayValores.length; i++) {

            if (arrayValores[i][0] == valor) { 
                document.getElementById("select2").options[document.getElementById("select2").options.length] = new Option(arrayValores[i][2], arrayValores[i][1]); 
            } 
        } 
        document.getElementById("select2").disabled = false; 

        if (document.getElementById("select2").value == 0) { 

            document.getElementById("foto").src = "img/10.jpg"; 
        } 
    } 
 
} 
 
function inicio() { 

    document.getElementById("watch").style.display = "none"; 
    document.getElementById("reset").style.display = "none"; 
    document.getElementById("foto").style.display = "none"; 

} 
 
function selecionadoSelect2(value) { 

    var v1 = document.getElementById("select1");
    var valor1 = v1.options[v1.selectedIndex].value; 
    var text1 = v1.options[v1.selectedIndex].text; 
    var v2 = document.getElementById("select2"); 
    var valor2 = v2.options[v2.selectedIndex].value; 
    var text2 = v2.options[v2.selectedIndex].text; 
 
    var caminhoFoto = document.getElementById("select1").value + document.getElementById("select2").value; 
    document.getElementById("foto").src = "img/" + caminhoFoto + ".jpg"; 
 
    if (caminhoFoto == "13") { 

        window.setTimeout(sauron, 3000); 
        document.getElementById("select1").disabled = true; 
        document.getElementById("select2").disabled = true; 
        document.getElementById("watch").style.display = "block"; 

    } else { 
        window.clearTimeout(sauron); 
    } 
 
} 
 
function fundo(value) { 
    if (value == 1) { 
        document.body.style.background = "url('fundos/rivendell.jpg')"; 
    } else if (value == 2) { 
        document.body.style.background = "url('fundos/hobbiton.jpg')";
 } else { 
    document.body.style.background = "url('fundos/lothlorien.jpg')"; 
    } 
    } 
    function sauron(value) { 
    document.getElementById("foto").src = "img/0.jpg"; 
    document.body.style.backgroundImage = "url('fundos/mordor.png')"; 
    document.getElementById("watch").innerHTML = "O infiltrado foi capturado!"; 
    document.getElementById("reset").style.display = "block"; 
    }

