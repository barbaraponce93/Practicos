

const num = document.getElementById('numerorandom');
num.innerHTML = '';

function numero(max, min) {
    return Math.floor(Math.random()*(max-min))+min;
}

    for (let i = 0; i < 50; i++) {
        let n = numero(1, 7);
        num.innerHTML += n + ' ';
}