// get the values from the ui
function getValues() {
    // take the values for fizz and buzz and parse them to int
    let fizzValue = document.getElementById("fizz").value;
    fizzValue = Number.parseInt(fizzValue);

    let buzzValue = document.getElementById("buzz").value;
    buzzValue = Number.parseInt(buzzValue);

    // getting the results element and saving to a variable
    let resultsDiv = document.getElementById("results");

    // create error message to present in case of wrong value entry
    let errorMessage = `
        <div class="alert alert-danger fade show" id="alert" role="alert">
            You must enter valid integers in order to continue...
        </div>
    `;

    // making sure the results element is empty and posting results
    resultsDiv.innerHTML = "";

    // perform checks an the entered values
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // call makeBubles function to reate the values
        let results = makeBubblesTurnary(fizzValue, buzzValue);

        resultsDiv.innerHTML += displayBubbles(results);
    } else {
        // display error message
        resultsDiv.innerHTML += errorMessage;
    }
}

// create function that handles the checking and creating the values

function makeBubbles(fizzValue, buzzValue) {
    // create an empty array to store values
    let numbers = [];

    // checking for each condition and entering the value in to the array
    for (let i = 1; i <= 100; i++) {
        if ((i % fizzValue === 0) && (i % buzzValue === 0)) {
            numbers.push('FizzBuzz');
        } else if (i % fizzValue === 0) {
            numbers.push('Fizz');
        } else if (i % buzzValue === 0) {
            numbers.push('Buzz');
        } else {
            numbers.push(i);
        }
    }
    // return the values
    return numbers;
}

function makeBubblesSwitch(fizzValue, buzzValue) {
    let numbers = [];

    let fizz = false;
    let buzz = false;

    for (let i = 1; i <= 100; i++) {
        fizz = i % fizzValue === 0;
        buzz = i % buzzValue === 0;

        switch (true) {
            case fizz && buzz:
                numbers.push("FizzBuzz");
                break;
            case fizz:
                numbers.push("Fizz");
                break;
            case buzz:
                numbers.push("Buzz");
                break;
            default:
                numbers.push(i);
                break;
        }
    }

    return numbers;
}

function makeBubblesTurnary(fizzValue, buzzValue) {
    let numbers = [];

    for (let i = 1; i <= 100; i++) {
        // using the ternary operator we check the values for divisibility
        let value = ((i % fizzValue === 0 ? 'Fizz' : '') + (i % buzzValue === 0 ? 'Buzz' : '') || i);
        numbers.push(value);
    }

    return numbers;
}

function displayBubbles(numbers) {
    // create an variable that helps with looping
    let index = 0
    // create a template string
    let template = ``;
    // create classes for text decoration
    let fizzText = "text-success";
    let buzzText = "text-primary";
    let fizzBuzzText = "fw-bold text-danger";

    // using two for loops in order to create 
    // a 5 column table. the first one loops 
    // 20 times, and on each loop it creates a new row
    // and  the second one loops 5 times, performing 
    // checks and creating the appropriate template each time.
    for (let i = 0; i < 20; i++) {
        template += `<tr>`;
        for (let j = 0; j < 5; j++) {
            if (numbers[index] === "Fizz") {
                template += `<td class="ms-auto ${fizzText}">${numbers[index]}</td>`;
            } else if (numbers[index] === "Buzz") {
                template += `<td class="ms-auto ${buzzText}">${numbers[index]}</td>`;
            } else if (numbers[index] === "FizzBuzz") {
                template += `<td class="ms-auto ${fizzBuzzText}">${numbers[index]}</td>`;
            } else {
                template += `<td class="ms-auto">${numbers[index]}</td>`;
            }
            index++;
        }
        template += `</tr>`;
    }
    return template;
}

document.getElementById('bubblyBtn').addEventListener('click', getValues);