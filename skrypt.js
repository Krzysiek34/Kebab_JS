document.getElementById("wyslij").addEventListener('click', function showInfo(event){
    event.preventDefault();
    let danie = document.querySelector("input[name='wyborDania']:checked")?.value;
    
    let dodatki = document.querySelectorAll("input[name='wyborDodatkow']:checked");
    let dodatkiValues = [];
    dodatki.forEach(checkbox => dodatkiValues.push(checkbox.value));
    
    let mieso = document.querySelector("input[name='wyborMiesa']:checked")?.value;
    
    let sos = document.querySelector("input[name='wyborSosu']:checked")?.value;

    let imieNazwisko = document.getElementById("imieNazwisko").value;

    let telefon = document.getElementById("telefon").value;

    let plec = document.getElementById("plec").value;

    document.getElementById("wynik").innerHTML = `Twoje zamówienie: <br> Danie: ${danie} <br> Dodatki: ${dodatkiValues} <br> Mięso: ${mieso} <br>
    Sos: ${sos} <br> <br> Twoje dane: <br> Imię i nazwisko: ${imieNazwisko} <br> Numer telefonu: ${telefon} <br> 
    Płeć: ${plec}`;

    
})