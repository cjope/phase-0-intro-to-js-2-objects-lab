const employee = {
    name: "",
    streetAddress:""
};

function updateEmployeeWithKeyAndValue(obj,key,value){
    return Object.assign ({},employee,{[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj,key){
    const newEmployee = {...obj};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete employee.name;
    return employee;
}