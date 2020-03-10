function highestScore(students) {
  // Code disini
  let nilai = {};
  for (let i = 0; i < students.length; i++) {
    let student = {
      name: students[i].name,
      score: students[i].score
    };
    if (nilai[students[i].class]) {
      if (student.score > nilai[students[i].class].score) {
        nilai[students[i].class].name = student.name;
        nilai[students[i].class].score = student.score;
      }
    } else {
      nilai[students[i].class] = student;
    }
  }
  return nilai;
}

// TEST CASE
console.log(highestScore([{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}