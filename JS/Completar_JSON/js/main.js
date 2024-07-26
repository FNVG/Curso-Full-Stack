const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Buscar en states.json y filtrar
const searchStates = async searchText => {
    console.log(searchText);
   
        const res = await fetch('data/states.json');
        
      
            const states = await res.json();

            // Obtener coincidencia con el texto de entrada
            let matches = states.filter(state => {
                const regex = new RegExp(`^${searchText}`, 'gi');
      
                return state.name.match(regex) || state.abbr.match(regex);
           
            });

            if (searchText.length == 0) {
                matches = [];
                matchList.innerHTML= '';
            }  

            outputHTML(matches);
      

};


const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.name} (${match.abbr}) <span class="text-primary"
            ${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long} </small>    
        </div>
        `).join('');
        matchList.innerHTML = html;
    }
}


search.addEventListener('input', () => searchStates(search.value));


