upDate = student.map((student) => {
  student.role = 'student';
  return student;
});
console.log(upDate);

highScore = student.filter((student) => student.score >= 80);
console.log(highScore);

specificId = student.find((student) => student.id == 2);
console.log(specificId);

// !total =acc  \\\\   student= valeur courant
// ! 0 = valeur initiale dans le tableau
// return = total ajouter au score courant à chaque itération du tableau
// divisé par la longueur du tableau

averageScore =
  student.reduce((total, student) => {
    return (total += student.score);
  }, 0) / student.length;
console.log(averageScore);

// survey = student.reduce(
//   (total, student) => total + student.favoriteSubject,
//   []
// );

survey = student.reduce((total, student) => {
  if (!(student.favoriteSubject in total)) {
    total[student.favoriteSubject] = 1;
  } else {
    total[student.favoriteSubject]++;
  }
  return total;
}, []);
console.log(survey);
