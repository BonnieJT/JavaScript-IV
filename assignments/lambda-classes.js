/*class Person {
  constructor(attrs) {
    this.age = attrs.age;
    this.name = attrs.name;
    this.homeTown = attrs.homeTown;
  }

  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor(childAttrs) {
    super(childAttrs);
    this.isChild = childAttrs.isChild;
  }
  checkIfChild() {
    if(this.isChild) {
      console.log(`${this.speak} and I am a child object`);
    }
  }
}*/

// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(inst) {
        super(inst);
        this.specialty = inst.specialty;
        this.favLanguage = inst.favLanguage;
        this.catchPhrase = inst.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.student.name} has submitted a PR for ${subject}`);
    } 
    sprintChallenge(subject) {
        console.log(`${this.student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const john = new Instructor({
    name: 'John',
    age: 35,
    location: 'San Francisco', 
    specialty: 'JavaScript',
    favLanguage: 'Python',
    catchPhrase: 'Cheaters never prosper',
});

const mary = new Instructor({
    name: 'Mary',
    age: 50,
    location: 'New York',
    specialty: 'React',
    favLanguage: 'Ruby',
    catchPhrase: 'Google is your friend',
});

const susan = new Student({
    name: 'Susan',
    age: 19,
    location:'Miami',
    previousBackground: 'High School Student',
    className: 'WEBPT12',
    favSubjects: ['HTML', 'CSS'],  
});

const tom = new Student({
    name: 'Tom',
    age: 25,
    location: 'Seattle', 
    previousBackground: 'Accountant',
    className: 'UX12',
    favSubjects: ['Python', 'React', 'JavaScript'], 
});

const jameis = new ProjectManager({
    name: 'Jameis',
    age: 30,
    location: 'Honolulu', 
    specialty: 'Redux',
    favLanguage: 'Elm',
    catchPhrase: 'Surfs up',
    gradClassName: 'UX15',
    favInstructor: 'Mary',
});

const teresia = new ProjectManager({
    name: 'Teresia',
    age: 29,
    location: 'Ontario', 
    specialty: 'CSS',
    favLanguage: 'C#',
    catchPhrase: 'Cest la Vie',
    gradClassName: 'WEB7',
    favInstructor: 'Dan',
});

console.log(teresia.location);
jameis.debugsCode(tom, 'HTML');
susan.listsSubjects();
mary.grade(susan, 'Python');

       

