class Person {
    protectedname: string
    constructor(name : string) {
        this.name = name;
    }
}
classEmployeeextendsPerson {
    privatedepartment : stringconstructor(name : string, department : string) {
        super(name);
        this.department = department;
    }
    publicgetElevatorPitch() {
        return 'Hello,mynameis${this.name}andIworkin${this.department}.';
    }
}
lethoward = newEmployee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);