let employees = [];
let id = 1;

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (name === '' || profession === '' || age === '') {
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById('success-msg').style.display = 'none';
        return;
    }

    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('success-msg').style.display = 'block';

    const employee = {
        id: id++,
        name: name,
        profession: profession,
        age: age
    };

    employees.push(employee);
    displayEmployees();
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    if (employees.length === 0) {
        employeeList.textContent = 'You have 0 Employees.';
        return;
    }

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.classList.add('employee');

        const pTags = `
            <p><strong>ID:</strong> ${employee.id}</p>
            <p><strong>Name:</strong> ${employee.name}</p>
            <p><strong>Profession:</strong> ${employee.profession}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
        `;

        div.innerHTML = `
            <div class="btn-outline-light java">
                ${pTags}
            </div>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(div);
    });
}
