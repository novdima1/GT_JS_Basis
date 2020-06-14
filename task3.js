//3*) Необходимо написать программу, которая выводит в консоль рандомно числа от 1 до 10 не повторяя их, пока функция
// не выведет их все. После чего происходит очистка всех записанных чисел и они могут повториться вновь.

const showArray = document.getElementById('newArray')
const cleanArray = document.getElementById('cleanArray')

showArray.onclick = () => {
    let array = Array.from({length: 10}, (v, k) => k+1)
    shuffledArray = array.sort(function (a, b) { return 0.5 - Math.random() })

    let i = 0;
    (function() {
        if (i <= 10) {
            console.log(shuffledArray[i])
            i++
            setTimeout(arguments.callee, 100)
        }
    })()
}

cleanArray.onclick = () => {
    console.clear()
}






