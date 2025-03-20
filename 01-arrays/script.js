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
const lastTeacher = teachers.pop(); // Metodo che rimuove l'ultimo elemento dall'array e lo restituisce
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
let nameIndex // dichiaro la variabile nameIndex

for (let i = 0; i < teachers.length; i++) { // ciclo for per scorrere l'array teachers
  if (teachers[i] === 'Lewis') { // verifico se l'elemento dell'array è uguale a 'Lewis'
    nameIndex = i; // salvo l'indice dell'elemento in nameIndex
  }
}
// e salvalo nella variabile lewisIndex
const lewisIndex = nameIndex; // salvo l'indice dell'elemento 'Lewis' in lewisIndex

// 8. Verifica se l'array teachers è vuoto
let emptyArray = false; // dichiaro la variabile emptyArray e la inizializzo a false

if (teachers.length === 0) { // verifico se la lunghezza dell'array è uguale a 0
  console.log('L\'array teachers è vuoto'); // se vero stampo il messaggio
  emptyArray = true; // assegno true alla variabile emptyArray nel caso in cui l'array sia vuoto
} else {
  console.log('L\'array teachers non è vuoto'); // altrimenti stampo questo messaggio
}
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = emptyArray; // salvo il risultato in isTeachersEmpty

//8a. Verifica se l'array teachers è vuoto
// Metodo alternaitvopiù efficiente
const isTeachersEmpty2 = teachers.length === 0; // dichiaro la variabile isTeachersEmpty2 e assegno il risultato della condizione all'interno delle parentesi
if (isTeachersEmpty2) { // verifico se l'array è vuoto
  console.log(`L'array è vuoto? ${isTeachersEmpty2}`); // se vero stampo il messaggio
} else { 
  console.log(`L'array è vuoto? ${isTeachersEmpty2}`); // altrimenti stampo questo messaggio
}