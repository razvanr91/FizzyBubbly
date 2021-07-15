// get all the variables

let fizzValue = document.getElementById('fizz').value;
fizzValue = Number.parseInt(fizzValue);

let buzzValue = document.getElementById('buzz').value;
buzzValue = Number.parseInt(buzzValue);

let button = document.getElementById('bubblyBtn');

let alertDiv = document.getElementById('alert');

let table = document.getElementById('results');

// main function

function startTheFizz() {
    alertDiv.classList.add('invisible');
    buzzIt();

    // if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

    // } else {
    //     alertDiv.innerHTML += `
    //         <p class="lead">You must add two integer values...</p>
    //     `;
    //     alertDiv.classList.remove('invisible');
    // }
}

function buzzIt() {
    let number = 1;
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 5; j++) {
            if ((number % fizzValue === 0) && (number % buzzValue === 0)) {
                table.innerHTML += `<td class="fw-bold text-danger">FizzBuzz</td>`;
            } else if (number % fizzValue === 0) {
                table.innerHTML += `<td class="text-success">Fizz</td>`
            } else if (number % buzzValue === 0) {
                table.innerHTML += `<td class="text-primary">Buzz</td>`
            } else {
                table.innerHTML += `<td>${number}</td>`;
            }
            number++;
        }
    }
}

button.addEventListener('click', startTheFizz);