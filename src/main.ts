import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript2");

// interface Person {
//     firstName: string;
//     lastName: string;
// }


// interface Driver {
//     licenceNum: number;
// }


// class Student implements Person, Driver{
// 	fullName: string;
// 	constructor(public firstName : string, public lastName : string = "", public licenceNum : number = 0){
// 		this.fullName = firstName + " " + lastName;
// 	}

// 	private methodPrivate(){
// 		return "private";
// 	}

// 	protected methodProtected(){
// 		return "protected";
// 	}

// 	public methodPublic(){
// 		return "public";
// 	}

// 	method(){
// 		return "default";
// 	}
// }


// class ExStudent extends Student{
// 	constructor(firstName, lastName, licenceNum, public gradDate: number){
// 		super(firstName, lastName, licenceNum);
// 	}

// 	public methodProtected(){
// 		return `new protected (${super.methodProtected()})`;
// 	}

// 	public methodPublic(){
// 		return `new public (${super.methodPublic()})`;
// 	}
// }


// function greeter(person: Student) {
//     return "Hello, " + person.fullName;
// }

// // let student = { firstName: "Bojan", lastName: "Reljic" };
// let student = new Student("Bojan", "Reljic", 1234);

// document.body.innerHTML = greeter(student); 	

// console.log(student.methodPublic());
// // console.log(student.methodProtected());
// // console.log(student.methodPrivate());
// console.log(student.method());

// let exStudent = new ExStudent("Bojan", "Reljic", 123, 321321321321);

// console.log(exStudent.methodProtected());
// console.log(exStudent.methodPublic());
