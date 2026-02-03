let ages = ['I Love you so much ', 'I Love you my only one  ', 'I Love you my favorite person   ', 'I love you my love '];
let containerrr = document.createElement('div');
document.body.appendChild(containerrr);
containerrr.style.textAlign = 'center';

function elementtt(name, ages) {
    //element 
    let cards = document.createElement('div');
    let title = document.createElement('h1');
    let age = document.createElement('p');
    let imaging = document.createElement('img');

    let head9 = document.createTextNode(name);
    let agecontent = document.createTextNode(ages);
    imaging.src = 'aa.jpg';
    title.appendChild(head9);
    age.appendChild(agecontent);
    //style
    cards.style.width = '200px';
    cards.style.background = '#444';
    cards.style.color = 'afff';
    cards.style.padding = '10px';
    cards.style.margin = '20px';
    cards.style.display = 'inline-block';



    imaging.style.width = '100px';



    cards.appendChild(title);
    cards.appendChild(age);
    cards.appendChild(imaging);
    containerrr.appendChild(cards);
}
for (let i = 0; i < 4; i++) {
    elementtt(name[i], ages[i]);
}