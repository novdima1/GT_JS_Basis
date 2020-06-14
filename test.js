//3*) Необходимо написать программу, которая выводит в консоль рандомно числа от 1 до 10 не повторяя их, пока функция
// не выведет их все. После чего происходит очистка всех записанных чисел и они могут повториться вновь.


const showArray = document.getElementById('newArray')
const cleanArray = document.getElementById('cleanArray')

showArray.onclick = () => {
    let array = Array.from({length: 10}, (v, k) => k+1)
    shuffledArray = array.sort(function (a, b) { return 0.5 - Math.random() })
    const delay = (wait = 1000) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, wait)
        })
        return promise
    }
    for (let i=1; i<11; i++) {
        delay(2000)
            .then(() => {
                console.log(shuffledArray[i])
            })
    }
}

cleanArray.onclick = () => {
    console.clear();
}






