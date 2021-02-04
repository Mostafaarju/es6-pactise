class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Kolimunnesa';
    }
}

const student1 = new student(17, 'Raju');
const student2 = new student(20, 'Talukder');

console.log(student1.name, student2.name);