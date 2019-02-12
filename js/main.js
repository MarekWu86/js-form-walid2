function getNumber() {
    var numer = document.getElementById("email").value;
    if (numer.length == 9) {
    document.getElementById("potwierdzenie").innerHTML = "Numer telefonu wpisany!";
}else{
    alert("Wpisz numer telefonu");
}
}