"use strict";
const checkInputs = (title, description, people) => {
    let valid = false;
    let msg = '';
    console.log(people);
    // Checking if user filled the inputs.
    if (!title && !description && !people)
        msg = 'Please fill all the inputs.';
    else if (!title)
        msg = 'Please fill the title input.';
    else if (!description)
        msg = 'Please fill the description input.';
    else if (!people)
        msg = 'Please fill the people input.';
    // Checking if people is a positive integer, and max number of people is 10.
    else if (people > 10)
        msg = 'Max people on a project is 10.';
    // Checking if description is more than 10 chars.
    else if (description.trim().length < 10)
        msg = 'Please make sure the description is at least 10 chars long.';
    else {
        valid = true;
    }
    return {
        valid,
        msg
    };
};
const flash = (msg, element, time = 2500) => {
    const CheckFlashMsg = document.querySelector('.flash-msg');
    if (CheckFlashMsg)
        return;
    const flashMessage = document.createElement('span');
    flashMessage.innerText = msg;
    flashMessage.classList.add('flash-msg');
    element.insertAdjacentElement('beforeend', flashMessage);
    setTimeout(() => {
        flashMessage.remove();
    }, time);
};
const dragHelper = (from, to) => {
    const allowDrop = (e) => e.preventDefault();
    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer?.getData('Text');
        const dropElement = e.target;
        dropElement.appendChild(document.getElementById(data));
    };
    from.ondragover = allowDrop;
    to.ondragover = allowDrop;
    from.ondrop = drop;
    to.ondrop = drop;
};
