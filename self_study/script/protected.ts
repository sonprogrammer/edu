class Person {
    protected name: string
    constructor(name : string) {
        this.name = name;
    }
}
class Employee extends Person {
    private department : string
    constructor(name : string, department : string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return 'Hello,mynameis${this.name}andIworkin${this.department}.';
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);