// 1. Maak een nieuwe HTML-pagina aan en link daar naartoe vanaf de home-pagina. Maak ook een nieuw JavaScript bestand
// aan en link die aan de nieuwe pagina. Koppel ook het bestaande CSS bestand hieraan.
// console.log("Hello")

// 2. Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.
// async function getCountries(){
//     const result = await axios.get("https://restcountries.eu/rest/v2/all");
//     console.log("RESULT:", result) // RESULT: {data: Array(250), status: 200, statusText: "", headers: {…}, config: {…},…}
//     console.log("AXIOS:", axios) // AXIOS: ƒ (){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}
//     // Data uit het result object halen
//     const {data} = result;
//     console.log("DATA:", data); // DATA: (250)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, etc.
//     // Sorteer de landen in het object op population
//     data.sort(function(a, b) {
//         return a.population - b.population;
//     });
// }
//
// // Aanroepen functie getCountries
// getCountries();

// 3. Zorg ervoor dat er een lijst met land-namen en de bijbehorende vlag in de DOM wordt geplaatst. Gebruik hierbij
// destructuring om de properties aan te spreken.
// Aanroepen country-container in html
countryListContainer = document.getElementById("country-container");

async function getCountries() {
    const result = await axios.get("https://restcountries.eu/rest/v2/all");
    // Data uit het result object halen
    const {data} = result;
    // Sorteer de landen in het object op population
    data.sort(function (a, b) {
        return a.population - b.population;
    });

// Creëer html structuur en inhoud API array
    data.map(function({ flag, name }) {
        // Listitem met uniek id
        const li = document.createElement("li");

        // Vlag toevoegen
        const flagImg = document.createElement("img");
        console.log("FLAGIMG:", flagImg); // urls met vlag
        flagImg.setAttribute("src", flag);
        flagImg.setAttribute("class", "flag");

        // Naam land toevoegen
        const nameCountry = document.createElement("name-country");
        console.log("NAME COUNTRY:", nameCountry); // lijst met naam countries, NAME COUNTRY: <name-country class="country">India</name-country>
        nameCountry.setAttribute("class", "country");
        nameCountry.textContent = name;

        // Vlag en land toevoegen aan listitem
        li.appendChild(flagImg);
        li.appendChild(nameCountry);

        // Listitem toevoegen aan html
        countryListContainer.appendChild(li);
    })
}

// Aanroepen functie getCountries
getCountries();

// 4. Plaats de landkaart world_map.png (te vinden in de assets map) bovenaan de pagina.