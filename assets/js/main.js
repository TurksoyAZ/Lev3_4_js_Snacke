


// 1 Methode
let snack = () => {

    // Create Container.
    let feld = document.createElement('div');
    feld.id = 'snakeField';
    document.body.appendChild(feld);

    // Create with for() 100 div in Container.
    for (let i = 0; i < 100; i++) {

        let divs = document.createElement('div');
        divs.className = 'item';
        feld.appendChild(divs);

        // function for change color of Divs(100).
        divs.addEventListener('mouseover', () => {

            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var divsColor = `rgb(${r},${g},${b})`;

            divs.style.backgroundColor = divsColor
            divs.style.transition = '0.4s ease'
            setTimeout(() => {
                divs.style.backgroundColor = '',
                    divs.style.transition = '0.3 ease'
            }, 600)
        })
    }
}

snack()


// =======================================================================


// //  2 Methode with (event.target.style.....)

// // Create Container
// let feld = document.createElement('div');
// feld.id = 'snakeField';
// document.body.appendChild(feld);

// // Create with for() 100 div in Container
// for (let i = 0; i < 100; i++) {
//     let divs = document.createElement('div');
//     divs.className = 'item';
//     feld.appendChild(divs);
// }

// // function for change color of Divs(100)

// feld.addEventListener('mouseover', (event) => {

//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);
//     var divsColor = `rgb(${r},${g},${b})`;

//     event.target.style.backgroundColor = divsColor;
//     event.target.style.transition = '0.4s ease';

//     setInterval(() => {
//         event.target.style.backgroundColor = '',
//             event.target.style.transition = '0.4s ease'
//     }, 500);

// })

