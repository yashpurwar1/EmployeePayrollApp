let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    //let empPayrollList = createEmployeePayrollJSON();  
    for ( const empPayrollData of empPayrollList ) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="${empPayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDeptHtml(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._start_date}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="../assets/icons/create-black-18dp.svg">           
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for ( const dept of deptList ) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Yash',
            _gender: 'Male',
            _department: [
                'Engineering', 'HR'
            ],
            _salary: '750000',
            _start_date: '01 Nov 2021',
            _note: '',
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Atul',
            _gender: 'Male',
            _department: [
                'Engineering', 'Finance'
            ],
            _salary: '500000',
            _start_date: '29 Oct 2020',
            _note: '',
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        }
    ]
    return empPayrollListLocal;
}