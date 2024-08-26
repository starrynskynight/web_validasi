function validasi () 
{
    var nama = document.forms["formPerpus"]["nama"].value;
    var kelasJurusan = document.forms["formPerpus"]["kJurusan"].value;
    var email = document.forms["formPerpus"]["email"].value;
    var jurusan = document.forms["formPerpus"]["jurusan"].value;
    var kBuku = document.forms["formPerpus"]["kBuku"].value;
    var jBuku = document.forms["formPerpus"]["jBuku"].value;
    var noInduk = document.forms["formPerpus"]["noInduk"].value;

    if (nama =="") {
        alert("Nama harus diisi");
        document.getElementById("nama").focus();
        return false;
    } else if(!/^[a-zA-Z\s]+$/.test(nama)) {
        alert("Data yang dimasukkan harus berupa huruf");
        document.getElementById("nama").focus();
        document.forms["formPerpus"]["nama"].value="";
        return false;
    }

    var radios = document.getElementsByName("kJurusan");
    var kelasJurusanSelected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            kelasJurusanSelected = true;
            break;
        }
    }
    if (!kelasJurusanSelected) {
        alert("Kelas harus dipilih");
        return false;
    }

    var ekspresi=/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
    if(email == "" || ekspresi.test(email) == false)
    {
        alert("Email anda belum benar");
        document.getElementById("email").focus();
        return false;
    }
    
    
    if (jurusan == "") {
        alert("Jurusan harus dipilih");
        return false;
    }
    if (kBuku == "") {
        alert("Jurusan harus dipilih");
        return false;
    }
    if (jBuku == "") {
        alert("Judul buku harus diisi");
        document.getElementById("jBuku").focus();
        return false;
    }
    if (noInduk == "") {
        alert("No. Induk harus diisi");
        document.getElementById("noInduk").focus();
        return false;
    } else if(!/^[0-9]+$/.test(noInduk)) {
        alert("Data yang dimasukkan harus berupa angka");
        document.getElementById("noInduk").focus();
        document.forms ["formPerpus"]["noInduk"].value="";
        return false;
    }
    else {
        alert ("Data anda telah terkirim. Silahkan mengecek email anda untuk pemberitahuannya.")
    }
    return true;
}