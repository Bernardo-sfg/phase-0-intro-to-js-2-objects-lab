// Initial employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(empObj, key, value) {
    
    const newObj = {...empObj}
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value) {
    
    empObj[key] = value
    return empObj;
}

function deleteFromEmployeeByKey(empObj, key){
    const newObj = {...empObj}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(empObj, key){
    delete empObj[key]
    return empObj
}
//test