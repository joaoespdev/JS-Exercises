const familia = [{
        nome: 'Jorge',
        papel: 'pai'
    },
    {
        nome: 'Vanessa',
        papel: 'mãe'
    },
    {
        nome: 'Eduardo',
        papel: 'filho'
    },
    {
        nome: 'Felipe',
        papel: 'filho'
    }
]

for (let pessoa in familia) {
    console.log(familia[pessoa])
}