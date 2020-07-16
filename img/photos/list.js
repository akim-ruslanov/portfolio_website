var  fs = require('fs');



let all_photos =fs.readdirSync('./');
all_photos.splice(all_photos.indexOf('list.js'), 1);
all_photos.push(all_photos.splice(all_photos.indexOf('shiny_night-min.jpg'), 1)[0])
let photos = [];
let id = 1;
all_photos.forEach(photo => {
    photos.push({
        "id": id,
        "title": photo.split('_').join(' ').split('.')[0],
        "img": "img/photos/" + photo,
    })
    id++;
})
console.log(photos)
fs.writeFileSync("../../photos.txt", JSON.stringify(photos), (err)=> {
    if (err) throw err;
})