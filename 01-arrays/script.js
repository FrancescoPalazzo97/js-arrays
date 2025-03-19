const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; 
console.log(`Il quarto insegnante è ${fourthTeacher}`); // Output: Phil

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
console.log(teachers); // Output: Elenco degli insegnanti con Patrick al posto di Carlo

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length - 1];
teachers.pop();
console.log(teachers); // Output: Elenco degli insegnanti senza l'ultimo insegnante
console.log(`L'ultimo insegnante era ${lastTeacher}`); // Output: L'ultimo insegnante era Luca

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift();
console.log(teachers); // Output: Elenco degli insegnanti senza il primo insegnante
console.log(`Il primo insegnante era ${firstTeacher}`); // Output: Il primo insegnante era Nathan

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers); // Output: Elenco degli insegnanti con Vanessa alla fine

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers); // Output: Elenco degli insegnanti con Sarah all'inizio

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;