//2) Необходимо вывести только те части JSON-объекта, где размерность массива больше, чем 3. Необходимо вывести каждое
// поле массива отдельно в формате: keyName = <значение>, value = <значение>. Каждый элемент массива должен быть отделен
//  знаками "=".
// Исходный json объект прикреплен к данному курсу.  Для данного задания необходимо скачать task1_2.doc , поменяв
// расширение из doc в json.

const initialJson = {
    "friends": [{
        "id": 0,
        "name": "Stella Mcknight",
        "top": 3
    },
    {
        "id": 1,
        "name": "Amparo Griffin"
    },
    {
        "id": 2,
        "name": "Riddle Molina"
    },
    {
        "id": 3,
        "name": "Sten Griphin"
    }
    ],
    "parents": [{
        "id": 0,
        "name": "Kasey Rivers"
    },
    {
        "id": 1,
        "name": "Fran Ryan"
    }
    ],
    "workHistory": [{
        "id": 0,
        "name": "Godel Technologies"
    },
    {
        "id": 1,
        "name": "My first task"
    },
    {
        "id": 2,
        "name": "Want to be an A-QA"
    },
        {
            "id": 222,
            "name": "Want to be an A-QA222"
        }
    ]
}

for (key in initialJson) {
    if (initialJson[key].length > 3) {
        initialJson[key].forEach((finalObject) => {
            for (key in finalObject) {
                //console.log("keyName =",key,", value =", finalObject[key])
                console.log(`keyName = ${key}, value = ${finalObject[key]}`)
            }
        })
    }
}
