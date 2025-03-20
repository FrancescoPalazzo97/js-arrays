const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.reverse(); // Metodo che inverte l'ordine degli elementi nell'array
let temp = []; // dichiaro un array temporaneo
for (let i = teachers.length - 1; i >= 0; i--) { // ciclo for per scorrere l'array teachers al contrario
  temp.push(teachers[i]); // aggiungo gli elementi dell'array teachers all'array temporaneo
}
const reversedTeachers = temp; // salvo il risultato nell'array reversedTeachers
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = teachers.filter(name => name.length >= 5); // Metodo che filtra gli elementi dell'array in base ad una condizione, in questo caso, la lunghezza del nome deve essere maggiore o uguale a 5 caratteri
const longNames = []; // dichiaro l'array longNames

for (let i = 0; i < teachers.length; i++) { // ciclo for per scorrere l'array teachers
  if (teachers[i].length >= 5) { // verifico se la lunghezza del nome è maggiore o uguale a 5 caratteri
    longNames.push(teachers[i]); // se la condizione è vera, aggiungo l'elemento all'array longNames
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Ed') {
    teachers.splice(i, 1); // rimuovo 'Ed' dall'array
  }
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
present = false; // variabile di controllo
for (let i = 0; i < teachers.length; i++) { // ciclo for per scorrere l'array
  if (teachers[i] === 'Fabio') { // verifico se l'elemento 'Fabio' è presente
    present = true; // se 'Fabio' è presente nell'array, present diventa true
  }
}
const isFabioPresent = present; // salvo il risultato nella variabile isFabioPresent
console.log(isFabioPresent); // stampo il risultato

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.join(', '); // Metodo che unisce tutti gli elementi dell'array in una stringa separata da virgole
// console.log(teachersString); // stampo il risultato
let tempString = ''; // dichiaro una stringa temporanea
for (let i = 0; i < teachers.length; i++) { // ciclo for per scorrere l'array teachers
  if (i === teachers.length - 1) { // verifico se l'elemento è l'ultimo
    tempString += teachers[i]; // se l'elemento è l'ultimo, non aggiungo la virgola
  }
  else {
    tempString += teachers[i] + ', '; // altrimenti aggiungo la virgola
  }
}
const teachersString = tempString; // salvo il risultato nella variabile teachersString
console.log(teachersString); // stampo il risultato