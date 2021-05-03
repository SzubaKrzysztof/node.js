var colors = require ('colors');
const parse = require('csv-parse');
const fs = require('fs');

const results = []

function isHabitablePlanet(data){
    return data['koi_disposition'] === 'CONFIRMED'
    && data['koi_insol'] > 0.36 && data['koi_insol'] < 1.11
    && data['koi_prad'] <1.6;
}

fs.createReadStream('./kepler_data.csv/kepler_data.csv')
// pipe łączy dwa strumienie 
.pipe(parse({
    comment: '#', 
    columns: true, 
}))
// dalej jest łańcuch emmiterów
.on('data', (data) => {
    if (isHabitablePlanet(data)) {
        results.push(data);
    }
})
.on('error' , (err) => {
    console.log(err);
})
.on('end', () =>{
    console.log(`${results.length} habitable planets found!`);

})
                                           
