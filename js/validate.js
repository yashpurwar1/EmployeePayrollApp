window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
       if ( name.value.length == 0) {
          textError.textContent = "";
          return;
       }
       try {
          (new PersonInfo()).name = name.value;
          textError.textContent = "";
       } catch (e) {
          textError.textContent = e;
       }
    });
 
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
       output.textContent = salary.value;
    });
 });
 
 const save = () => {
    try {
       let employeePayrollData = createEmployeePayroll();
       createAndUpdateStorage(employeePayrollData);
    } catch (e) {
       return;
    }
 }
 
 const createEmployeePayroll = () => {
    let employeePayrollData = new PersonInfo();
    try {
       employeePayrollData.name = getInputValueById('#name');
    } catch ( e ) {
       setTextValue('.text-error', e);
       throw e;
    }
 
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " +getInputValueById('#month') + " "
                                                       +getInputValueById('#year');
    employeePayrollData.start_date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
 }
 
 const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach ( item => {
       if( item.checked )
          selItems.push( item.value );
    });
    return selItems;
 }
 const getInputValueById = ( id ) => {
    let value = document.querySelector(id).value;
    return value;
 }
 
 function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse( localStorage.getItem ("EmployeePayrollList"));
    if(employeePayrollList != undefined) {
       employeePayrollList.push(employeePayrollData);
    } else {
       employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
 }