#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.italic.blueBright("\n \t Wellcome to My Object Oriented Program (OOP) \n"));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact it ?",
            choices: ["staff", "students", "exit"]
        });
        if (ans.select == "staff") {
            console.log(chalk.greenBright("\n Please feel free to ask any Questions \n"));
        }
        else if (ans.select == "students") {
            const input = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engaged with"
            });
            const std = person.student.find(val => val == input.student);
            if (!std) {
                const name = new Student(input.student);
                person.addStudent(name);
                console.log(`\n Hello I'm ${chalk.redBright(name.name)} \n`);
                console.log("\n New student added \n");
                console.log("\n Current students list \n");
                console.log(person.student);
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.yellowBright("\n Exiting the program..."));
            process.exit();
        }
    } while (true);
};
programStart(person);
