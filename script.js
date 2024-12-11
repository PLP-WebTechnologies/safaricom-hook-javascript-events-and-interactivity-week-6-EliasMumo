// Color Toggle Button
const colorToggle = document.getElementById('colorToggle');
let isToggled = false;
colorToggle.addEventListener('click', () => {
    isToggled = !isToggled;
    colorToggle.style.backgroundColor = isToggled ? '#f43f5e' : '#1a1a1a';
});
// Dynamic Text Slider
const fontSlider = document.getElementById('fontSlider');
const dynamicText = document.getElementById('dynamicText');
const sizeValue = document.getElementById('sizeValue');
fontSlider.addEventListener('input', (e) => {
    const size = e.target.value;
    dynamicText.style.fontSize = `${size}px`;
    sizeValue.textContent = size;
});
// Modal Dialog
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
openModal.addEventListener('click', () => {
    modal.classList.add('active');
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
// Custom Select
const customSelect = document.getElementById('customSelect');
const selectMessage = document.getElementById('selectMessage');
customSelect.addEventListener('change', (e) => {
    selectMessage.textContent = `You selected: ${e.target.value}`;
    selectMessage.style.opacity = '0';
    setTimeout(() => {
        selectMessage.style.opacity = '1';
    }, 10);
});
// Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const validateForm = () => {
    let isValid = true;
    // Name validation
    if (nameInput.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 
            'Password must be at least 8 characters with one uppercase letter and one number';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    return isValid;
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Form submitted successfully');
        // You can add a success message or handle the form submission here
        form.reset();
    }
});
// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.length >= 3) {
        nameError.textContent = '';
    }
});
emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        emailError.textContent = '';
    }
});
passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = '';
    }
});