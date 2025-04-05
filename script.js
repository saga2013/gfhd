
const addButton = document.querySelector('.btn');
const inputName = document.querySelector('.ki');
const inputNumber = document.querySelector('.ka');


addButton.addEventListener('click', function () {
    const name = inputName.value.trim();
    const number = inputNumber.value.trim();

    if (name && number) {
        addContact(name, number);
        inputName.value = '';
        inputNumber.value = '';
    }
});

function addContact(name, number) {
    const contact = document.createElement('div');
    contact.classList.add('box');

    contact.innerHTML = `
        <div class="bok">
            <img src="Group 232.png" alt="Contact Image">
            <span>
                <p>${name}</p>
                <p>${number}</p>
            </span>
        </div>
        <div class="divn">
            <img src="Vector.png" alt="Action Icon" class="action-icon">
            <img src="tabler_edit.png" alt="Edit Icon" class="edit-icon">
        </div>
    `;


    document.body.appendChild(contact);


    const actionIcon = contact.querySelector('.action-icon');
    const editIcon = contact.querySelector('.edit-icon');

   
    actionIcon.addEventListener('click', () => {
        contact.remove();
    });


    editIcon.addEventListener('click', () => {
        inputName.value = name;
        inputNumber.value = number;
        contact.remove();
    });
}
