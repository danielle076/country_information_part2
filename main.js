// 1. Maak een nieuwe HTML-pagina aan en link daar naartoe vanaf de home-pagina. Maak ook een nieuw JavaScript bestand
// aan en link die aan de nieuwe pagina. Koppel ook het bestaande CSS bestand hieraan.
// console.log("Hello")

// 2. Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.
async function getCountries(){
    const result = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log("RESULT:", result) // RESULT: {data: Array(250), status: 200, statusText: "", headers: {…}, config: {…},…}
    console.log("AXIOS:", axios) // AXIOS: ƒ (){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}
    // Data uit het result object halen
    const {data} = result;
    console.log("DATA:", data); // DATA: (250)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, etc.
    // Sorteer de landen in het object op population
    data.sort(function(a, b) {
        return a.population - b.population;
    });
}

// Aanroepen functie countries
getCountries();