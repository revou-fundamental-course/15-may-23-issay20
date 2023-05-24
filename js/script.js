document.getElementById("btnluas")
    .addEventListener("click", function() { showBox("luas") });

document.getElementById("btnkeliling")
    .addEventListener("click", function() { showBox("keliling") });

document.getElementById("hitung_luas")
    .addEventListener("click", function() { hitung("luas") });

document.getElementById("hitung_keliling")
    .addEventListener("click", function() { hitung("keliling") });

document.getElementsByClassName("btnReset")[0]
    .addEventListener("click", reset);

document.getElementsByClassName("btnReset")[1]
    .addEventListener("click", reset);

// function button luas dan button keliling untuk menampilkan box hitung luas atau box hitung keliling
function showBox(type) {
    switch (type) {
        case "luas":
            document.getElementById('luas').setAttribute("style", "display: block;");
            document.getElementById('keliling').setAttribute("style", "display: none;");
            break;
        case "keliling":
            document.getElementById('keliling').setAttribute("style", "display: block;");
            document.getElementById('luas').setAttribute("style", "display: none;");
            break;
        default:            
            break;
    }
}

// function menjadikan kolom input hanya dapat diisi angka
function number(evt) {
   var charCode = (evt.which) ? evt.which :
    event.keycode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
}

// function pada button hitung untuk menghitung luas dan keliling persegi
function hitung(type) {
    switch (type) {
        case "luas":    
            var sisi, luas;
    
            sisi = parseInt(document.getElementById("sisi-luas").value);
        
            luas = sisi*sisi;
        
            document.getElementById("rumus-luas").innerHTML = "L = S x S";
            document.getElementById("output-sisi-luas").innerHTML ="L = " + sisi +" x "+ sisi;
            document.getElementById("persegi-luas").innerHTML ="L = " + luas;
            break;
        case "keliling":
            var sisi, keliling;
            
            sisi = parseInt(document.getElementById("sisi-keliling").value);
            
            keliling = 4*sisi;
            
            document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
            document.getElementById("output-sisi-keliling").innerHTML ="K = 4 x "+ sisi;
            document.getElementById("persegi-keliling").innerHTML ="K = " + keliling;
            break;
        default:
            return;
            break;
    }
}

// function pada button reset untuk menghapus input dan hasil
function reset() {

    document.getElementById("sisi-luas").value = null;
    document.getElementById("rumus-luas").innerHTML = null;
    document.getElementById("output-sisi-luas").innerHTML = null;
    document.getElementById("persegi-luas").innerHTML = null;
    
    document.getElementById("sisi-keliling").value = null;
    document.getElementById("rumus-keliling").innerHTML = null;
    document.getElementById("output-sisi-keliling").innerHTML = null;
    document.getElementById("persegi-keliling").innerHTML = null;
}