// Write your solution in this file!
let employee={
    name:"masai",
    streetAddress:"policeline"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
     return {...employee,[key]:value,
     }

       
    }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key]=value;
return employee;
}

function deleteFromEmployeeByKey(employee, name){
const newEmployee={...employee};
delete newEmployee[name]
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
