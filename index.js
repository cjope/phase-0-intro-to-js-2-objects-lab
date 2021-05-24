const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(obj,key,value) {
    return Object.assign ({}, employee, {[key]:value})
}
function destructivelyUpdateEmployeeWithKeyAndValue (obj,key,value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey (obj,key,value) {
    const newEmployee = { ...obj }
    delete newEmployee.name;
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey (obj,key,value) {
    delete employee.name;
    return employee;
}