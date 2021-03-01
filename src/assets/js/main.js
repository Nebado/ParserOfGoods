// Modal Window
let modal = document.getElementById("modalTable");
let btn = document.getElementById("btn");
let table = document.getElementById("table");
let span = document.getElementsByClassName("close")[0];
let paginationRange = document.getElementById("pagination-range"),
    numberPages = document.getElementById("number-pages");

btn.addEventListener("click", showFunc);
span.addEventListener("click", hideFunc);

function showFunc() {
    modal.style.display = "block";
    document.body.style.overflowY = "auto";
}

function hideFunc() {
    modal.style.display = "none";
    document.body.style.overflowY = "hidden";
}

// Show Table
if (table) {
    btn.style.display = "inline-block";
} else {
    btn.style.display = "none";
}

// Main Slider
let slideIndex = 1;
let next = document.getElementsByClassName("next")[0];
let previous = document.getElementsByClassName("previous")[0];
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Custom fields
let i = 0;
function addField() {
    i++;
    let containerId = document.getElementById('form-fields'),
        inputField  = document.createElement('input'),
        removeBtn   = document.createElement('div');

    inputField.setAttribute('type', 'text');
    inputField.setAttribute('name', 'field[]');
    inputField.setAttribute('id', 'field'+i);
    inputField.setAttribute('class', 'input');
    inputField.setAttribute('placeholder', 'Enter selector of custom field');

    removeBtn.setAttribute('id', 'btnRem'+i);
    removeBtn.innerHTML = '-';
    removeBtn.setAttribute("onclick", "removeField('field"+i+"', 'btnRem"+i+"')");
    removeBtn.setAttribute('class', 'btn btn-remove');

    containerId.appendChild(inputField);
    containerId.appendChild(removeBtn);
}

function removeField(fieldId, btnId) {
    let field = document.getElementById(fieldId),
        btn = document.getElementById(btnId);
    field.parentNode.removeChild(field);
    btn.parentNode.removeChild(btn);
}

// Pagination
function pagination() {
    let checkPagination = document.getElementById('pagination-checkbox'),
        pagination      = document.getElementById('pagination');

    if (checkPagination.checked == true) {
        pagination.style.display = 'block';
    } else {
        pagination.style.display = 'none';
    }
}

