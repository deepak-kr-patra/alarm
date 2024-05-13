const input = document.getElementById('input');

const sound = document.getElementsByTagName('audio')[0];

input.addEventListener("input", (event) => {
    input.value = event.target.value;
    console.log(input.value);
});

let userTime = "";
const handleClick = () => {
    userTime = input.value;
    console.log(userTime);
    input.value = "";
}

let checker = setInterval(() => {
    let date = new Date();

    // Extract hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Format hours and minutes
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    if (formattedTime == userTime) {
        sound.play();
        clearInterval(checker);
    }
}, 100);