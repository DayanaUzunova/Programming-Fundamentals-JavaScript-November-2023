function schoolGrades(arr) {
    let student = {}
    let sum = 0
   
    for (const line of arr) {
      let [name, ...grade] = line.split(' ')
   
      if (student.hasOwnProperty(name)) {
        student[name].push(...grade)
      } else {
        student[name] = grade
      }
   
   
    }
    studentToArr = Object.entries(student)
    studentToArr.sort((a, b) => a[0].localeCompare(b[0]))
    let sortedStuden = Object.fromEntries(studentToArr)
   
   
    for (const final in sortedStuden) {
   
      for (let i = 0; i < sortedStuden[final].length; i++) {
        sum += Number(sortedStuden[final][i])
      }
   
      let averageSum = (sum / sortedStuden[final].length).toFixed(2)
      console.log(`${final}: ${averageSum}`);
      sum = 0
    }
  }