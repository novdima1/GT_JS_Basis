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
