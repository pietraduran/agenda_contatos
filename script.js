document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        addContactToTable(name, phone);
        clearForm();
    }
});

function addContactToTable(name, phone) {
    const tableBody = document.getElementById('contactTableBody');

    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);

    tableBody.appendChild(newRow);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}
