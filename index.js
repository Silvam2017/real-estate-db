var addressEl = document.getElementById('address-search')
var zipEl = document.getElementById('zip-search')
var input = document.getElementById('search')

input.addEventListener("keyup", function(event)
    {
        if (event.keyCode == 13)
        {
            event.preventDefault();
            document.getElementById("add-search-do").click();
        }
    });

const zillowFetch = () => {
const key = 'X1-ZWz1i2154adhqj_6sext'
const Zillow = require('node-zillow')
const zillow = new Zillow(key)

const parameters = {
    address: '',
    citystatezip: '',
    rentezestimate: 'false'
}

zillow.get('GetSearchResults', parameters)
    .then(results => {
        console.log(results)
        return results
    })
    
    /*
    response.results.result.forEach(item => 
        console.log(item))
    */
} 

const renderSearch = () => {
    
}