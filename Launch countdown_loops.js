let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    output.appendChild(para);
    if (i == 10) {
        para.textContent = "Countdown 10";
    }
    else if (i == 0) {
        para.textContent = "Blast off!";
    }
    else {
        para.textContent = i;
    }
}

  

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

let refusedSeparator = '';
let admittedSeparator = '';

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person == 'Lola' || person == 'Phil') {
        refused.textContent += refusedSeparator + person;
        refusedSeparator = ', ';
    }    
    else {
        admitted.textContent += admittedSeparator + person;
        admittedSeparator = ', ';
    }
}

admitted.textContent += '.';
refused.textContent += '.'

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person == 'Lola' || person == 'Phil') {
        refused.textContent += person + ', ';
    }    
    else {
        admitted.textContent += person + ', ';
    }
}

