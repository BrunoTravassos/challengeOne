function codificar() {
    if(input.value==""){
        aviso2.style.display = "block";
    }else{
        aviso2.style.display = "none";
        let novoTexto = input.value.replace(/a|e|i|o|u/g,function(click){
            return codifica[click];
        });
    output.value = novoTexto;
    }
    
}

function decodificar() {
    let novoTexto = input.value.replace(/ai|enter|imes|ober|ufat/g,function(click){
            return decodifica[click];
        });
    output.value = novoTexto;
}

function copiar() {
    navigator.clipboard.writeText(output.value);
    input.select();
}

function limpar() {
    input.value = "";
    output.value = "";
}

let input = document.getElementById("input");

let output = document.getElementById("output");
let botaoCodificar = document.getElementById("encoder");
let botaoDecodificar = document.getElementById("decoder");
let botaoCopiar = document.getElementById("copiar");
let codifica = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
let decodifica = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};
let aviso = document.getElementById("warning");
let aviso2 = document.getElementById("warning2");
let botaoLimpar = document.getElementById("limpar");
botaoCodificar.onclick = codificar;
botaoDecodificar.onclick = decodificar;
botaoCopiar.onclick = copiar;
botaoLimpar.onclick = limpar;

input.addEventListener('beforeinput', function(event) {
    if(/[^a-z\s.,?!;]/.test(event.data)) {
        event.preventDefault();
        aviso.style.display = "block";
        aviso.style.color = "red";
        aviso.style.fontWeight = "bold";
        aviso.scrollIntoView(true);
    } else {
        aviso.style.display = "none";
        aviso.style.color = "rgb(87, 87, 87)";
        aviso.style.fontWeight = "normal";
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
    }
});