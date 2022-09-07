document.querySelector('button').addEventListener('click', getIdolInfo);
// // Get the input field
document.querySelector('input').addEventListener("keyup", function (event) {// Execute a function when the user releases a key on the keyboard
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector("button").click();
    }
});

async function getIdolInfo() {
    const idolName = document.querySelector('input').value
    try {
        // need to remember await key word for response and data
        const response = await fetch(`https://kpop-idols-api.herokuapp.com/api/idols/${idolName}`) // need http or https for cors
        const data = await response.json()

        console.log(data)
        // document.querySelector('.directions').style.display = 'none';
        document.querySelector('.results').style.display = 'block';
        document.getElementById('stage-name').innerText = data.stageName[0].toUpperCase() + data.stageName.slice(1);
        document.getElementById('birth-name').innerText = data.birthName;
        document.getElementById('idol-img').alt = `${data.stageName} picture`
        document.getElementById('idol-img').src = data.image
        document.getElementById('idol-mbti').innerText = data.mbti;
        // TODO: document.getElementById('idol-position').innerText = data.position;



    } catch (err) {
        console.log(err)
    }

}