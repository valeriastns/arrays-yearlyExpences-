let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function sumOfExpenses(yearlyExpences) {
  let totalSum = 0;
  for (let i = 0; i < yearlyExpences.length; i++) {
    if (yearlyExpences[i] >= 1000) {
      totalSum += yearlyExpences[i];
    }
  }
  //console.log(totalSum);
  return totalSum;
}

///
function getMonthName(i) {
    let date = new Date();
    date.setMonth(i);
    return date.toLocaleString("default", { month: "long" });
  }

function monthsWithLowExpenses(yearlyExpences) {
    let monthsNamesLowExpenses = [];
    for (let i = 0; i < yearlyExpences.length; i++) {
      if (yearlyExpences[i] <= 1000) {  
        monthsNamesLowExpenses.push(getMonthName(i));
      }
    }
    //console.log(monthsNamesLowExpenses);
    return monthsNamesLowExpenses;
  }



function testExpencesExamples(expencesExamples) {
  expencesExamples.forEach((example) => {
    console.log(`Sum of expenses of costs more than 1000 is ${sumOfExpenses(example.yearlyExpences)}`);
  });
};


function testMonthWithLowExpences(expencesExamples){
    expencesExamples.forEach((example) => {
        console.log(`Months with expenses below or equal to 1000 are: ${monthsWithLowExpenses(example.yearlyExpences)}`);
      });
};

testExpencesExamples(expencesExamples);
testMonthWithLowExpences(expencesExamples);