let tabledata = document.getElementById('tabledata');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let date = document.getElementById('date');
let select = document.getElementById('select');
let phone = document.getElementById('phone');
let addemployee = document.getElementById('addemployee');
let detailsBtn = document.getElementsByClassName('detailsBtn');
let deleteBtn = document.getElementById("deleteBtn");
let yesBtn = document.getElementById("yes");
let searchBtn = document.getElementById("searchBtn");

let employeeId = document.getElementById("employeeId");
let employeeFirstname = document.getElementById("employeeFirstname");
let employeeLastname = document.getElementById("employeeLastname")
let employeeEmail = document.getElementById("employeeEmail")
let employeePhone = document.getElementById("employeePhone")
let employeeJob = document.getElementById("employeeJob")
let joiningDate = document.getElementById("joiningDate")
let id1 = document.getElementsByClassName("id1")
let id2 = 741;
let EmId = 7418;
let tableFullname = document.getElementById("tableFullname")

let editBtn = document.getElementsByClassName('editBtn')
let editAddEmployee = document.getElementById("editAddEmployee")
let editDate = document.getElementById("editDate")
let editFirstName = document.getElementById("editFirstName");
let editLastName = document.getElementById("editLastName");
let editEmail = document.getElementById("editEmail");
let editPhone = document.getElementById("editPhone");
let editSelect = document.getElementById("editSelect");

// initial data
let employees = [
    { EmployeeId: id2++, finame: "John", laname: "Doe", Email: "johndoe@gmail.com", Jop: "Graphic Designer", phone: "01234869754", fullname: "John Doe", Datejoin: "22July,2023" },
    { EmployeeId: id2++, finame: "Anas", laname: "Adel", Email: "anasadel@gmail.com", Jop: "Graphic Designer", phone: "01234869754", fullname: "Anas Adel", Datejoin: "22July,2023" },
    { EmployeeId: id2++, finame: "Ahmed", laname: "Gamal", Email: "ahmedgamal@gmail.com", Jop: "Graphic Designer", phone: "01234869754", fullname: "Ahmed Gamal", Datejoin: "22July,2023" }
];

//#region create data in table
const Createdata = (employee, id) =>
    `    <tr>
                            <td scope="row" >${id + 1}</td>
                            <td class="id1">${employee.EmployeeId}</td>
                            <td id="tableFullname">${employee.fullname}</td>
                            <td>${employee.Email}</td>
                            <td>
                                <a href="#" type="button" class="btn d-grid btn-primary detailsBtn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Details
                                </a>
                            </td>

                            <td>
                                <a href="#" type="button" class="btn d-grid btn-warning editBtn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">
                                    Edit </a>
                            </td>

                            <td>
                                <a href="#" type="button" class="btn d-grid btn-danger deleteBtn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal7">
                                    Delete
                                </a> 
                            </td>
                        </tr>`
//#endregion

//#region callFunction
const BindDataintable = (employeesopject) => {
    tabledata.innerHTML = employeesopject.map(Createdata).join("");
}

BindDataintable(employees);
//#endregion

//#region Addemployee 
addemployee.addEventListener("click", newemployee);
function newemployee() {
    let firstnamedetail = firstname.value;
    let lastnamedetail = lastname.value;
    let emaildetail = email.value;
    let nodetail = phone.value;
    let datedetail = date.value;
    let selectdetail = select.options[select.selectedIndex].innerHTML
    let fullname = firstnamedetail + " " + lastnamedetail;
    let newobj = {
        EmployeeId: id2++, finame: firstnamedetail, laname: lastnamedetail, Email: emaildetail, Jop: selectdetail,
        phone: nodetail, fullname: fullname, Datejoin: datedetail
    };
    employees.push(newobj)
    BindDataintable(employees)

    //Make the values empty
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phone.value = "";
    date.value = "";
    select.value = "";
}
//#endregion

//#region DETAILS DATA
tabledata.addEventListener("click", (e) => {
    if (e.target.classList.contains("detailsBtn")) {

        //Catch the certain employee with id
        let employeeDetails = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        let result = employees.findIndex(employee => employeeDetails == employee.EmployeeId)
        //Take the values to put them in the details of each employee
        employeeFirstname.innerHTML = employees[result].finame
        employeeLastname.innerHTML = employees[result].laname
        employeeEmail.innerHTML = employees[result].Email
        employeePhone.innerHTML = employees[result].phone
        employeeJob.innerHTML = employees[result].Jop
        joiningDate.innerHTML = employees[result].Datejoin
    }
});
//#endregion

//#region EDIT DETAILS
let result2;
let temp;
tabledata.addEventListener("click", (e) => {
    if (e.target.classList.contains("editBtn")) {

        let editEmployee = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        result2 = employees.findIndex(employee => editEmployee == employee.EmployeeId);

        //show the information of certain employee in the edit modal
        editFirstName.value = employees[result2].finame;
        editLastName.value = employees[result2].laname;
        editEmail.value = employees[result2].Email;
        editPhone.value = employees[result2].phone;
        editDate.value = employees[result2].Datejoin;
        editSelect.options[editSelect.selectedIndex].innerHTML = employees[result2].Jop;

        temp = e;
        //make edit on details

        editAddEmployee.addEventListener("click", () => {

            //Make new object to set the new values in it
            var newobject = {
                EmployeeId: id2++,
                finame: editFirstName.value,
                laname: editLastName.value,
                Email: editEmail.value,
                Jop: editSelect.options[editSelect.selectedIndex].innerHTML,
                phone: editPhone.value,
                fullname: editFirstName.value + " " + editLastName.value,
                Datejoin: editDate.value
            }

            var firstNameAfterEdit = newobject.finame;
            var lastNameAfterEdit = newobject.laname;
            var emailAfterEdit = newobject.Email;
            var jobAfterEdit = newobject.Jop;
            var phoneAfterEdit = newobject.phone;
            var fullnameAfterEdit = newobject.fullname;
            var dateAfterEdit = newobject.Datejoin;

            //Put the new values in the current object
            employees[result2].finame = firstNameAfterEdit;
            employees[result2].laname = lastNameAfterEdit;
            employees[result2].Email = emailAfterEdit;
            employees[result2].Jop = jobAfterEdit;
            employees[result2].phone = phoneAfterEdit;
            employees[result2].fullname = fullnameAfterEdit;
            employees[result2].Datejoin = dateAfterEdit;

            e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = fullnameAfterEdit;
            e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = emailAfterEdit;

            //Put new information in the details
            employeeFirstname.innerHTML = firstNameAfterEdit;
            employeeLastname.innerHTML = lastNameAfterEdit;
            employeeEmail.innerHTML = emailAfterEdit;
            employeePhone.innerHTML = phoneAfterEdit;
            employeeJob.innerHTML = jobAfterEdit;
            joiningDate.innerHTML = dateAfterEdit;
        })

    }
})
//#endregion

//#region DELETE ITEM
tabledata.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {

        //Catch the employee to be deleted
        let employeeTobeDeleted = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.parentElement

        yesBtn.addEventListener("click", () => {
            employeeTobeDeleted.remove();
        })

    }
})
//#endregion

//#region SEARCH ITEM
let getEmployee = function (list, textSearched) {
    let serchedEmployee = list.filter((employee) => employee.fullname.toLocaleLowerCase().includes(textSearched.toLocaleLowerCase()));
    BindDataintable(serchedEmployee);
}
searchBtn.addEventListener("keyup", (e) => {
    e.preventDefault();
    var searchedName = searchBtn.value;
    getEmployee(employees, searchedName)

})
//#endregion
