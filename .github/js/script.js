document.getElementById("btnluas")
    .addEventListener("click");
document.getElementById("btnkeliling")
    .addEventListener("click");
document.getElementById("hitung_luas")
    .addEventListener("click", persegi_luas);
document.getElementById("hitung_keliling")
    .addEventListener("click", persegi_keliling);

function number(evt) {
   var charCode = (evt.which) ? evt.which :
    event.keycode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) 

    return false;
    return true;
}

function persegi_luas() {
    var sisi, luas;

    sisi = parseInt(document.getElementById("sisi-luas").value);
    
    luas = sisi*sisi;
    
    document.getElementById("rumus-luas").innerHTML = "L = S x S";
    document.getElementById("output-sisi-luas").innerHTML ="L = " + sisi +" x "+ sisi;
    document.getElementById("persegi-luas").innerHTML ="L = " + luas;
}

function persegi_keliling() {
    var sisi, keliling;

    sisi = parseInt(document.getElementById("sisi-keliling").value);
    
    keliling = 4*sisi;
    
    document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
    document.getElementById("output-sisi-keliling").innerHTML ="K = 4 x "+ sisi;
    document.getElementById("persegi-keliling").innerHTML ="K = " + keliling;
}

function tampil_luas() {

}

function tampil_keliling() {
    
}