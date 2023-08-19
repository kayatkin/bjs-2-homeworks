function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.excluded) {
    this.marks = this.marks ? [...this.marks, ...marksToAdd] : [...marksToAdd];
  } else {
    console.log("Студент отчислен.");
  }
}

/* вариант 2
 Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.excluded) {
    if (!this.marks) {
      this.marks = [];
    }
    this.marks.push(...marksToAdd);
  } else {
    console.log("Студент отчислен.");
  }
}*/

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((total, mark) => total + mark, 0);
  return parseFloat((sum / this.marks.length).toFixed(1));
}

Student.prototype.exclude = function (reason) {
  this.subject = '';
  this.marks = [];
  this.excluded = reason;
}