const ham = document.querySelector('.ham');
const mid = document.querySelector('.mid');

ham.addEventListener('click', () => {
    mid.classList.toggle('active');
    ham.classList.toggle('active');
});