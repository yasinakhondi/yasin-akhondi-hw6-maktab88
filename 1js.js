function race() {
    let a = parseInt(prompt('how many cars?(max:10car)'))
    while (a > 10 || isNaN(a)) {
        a = parseInt(prompt('how many cars?(max:10car)'))
    }
}
console.log(race());


let cars = []

function car(name, position, rank) {
    this.name = name
    position = 0
    this.position = position
    rank = 0
    this.rank = rank
}
console.log((car));


for (let i = 0; i < a; i++) {
    let carName = prompt(`Enter name for car ${i + 1}`)
    cars.push(new cars(carName))
}

let track = []


for (let i = 0; i <= 300; i++) {
    track.push('-')
}



distanc = []
for (const i of cars) {
    let newdistanc = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    distanc.push(newdistanc)
}