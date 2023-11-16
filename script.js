function soma_seg(){
    var n = parseInt(numero.value);
    var soma = n;
    while(n>1){
        soma = soma + (n-1);
        n = n-1;
    }
    alert(soma);
}