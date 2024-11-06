const dateInput = document.getElementById('date-input');
 const form = document.getElementById('form');
const resultP = document.getElementById('result');
const submitBtn = document.getElementById('submit-btn')

const millisecondsInADay = 1000 * 60 * 60 * 24;

const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const today = new Date();
    const date = dateInput.value ? 
    new Date(calculateTenThousandthDay(dateInput.value)) :
    new Date(calculateTenThousandthDay(today));

    resultP.innerHTML = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}!`;
})

function calculateTenThousandthDay(date) {
    const dateObj = new Date(date).getTime();
    const tenThousandthDay = (dateObj + (millisecondsInADay * 10000));
    return tenThousandthDay;
}

