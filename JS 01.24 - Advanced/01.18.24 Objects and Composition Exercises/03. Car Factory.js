function solve(car) {
    let result = {
        model: car.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    if (car.power <= 90) {
        result.engine = { power: 90, volume: 1800 }
    } else if (car.power <= 120) {
        result.engine = { power: 120, volume: 2400 }
    } else {
        result.engine = { power: 200, volume: 3500 }
    }

    if (car.carriage == `hatchback`) {
        result.carriage = { type: 'hatchback', color: car.color }
    } else {
        result.carriage = { type: 'coupe', color: car.color }
    }

    if (car.wheelsize % 2 == 0) {
        let size = car.wheelsize - 1;
        result.wheels = [size, size, size, size]
    } else {
        let size = car.wheelsize
        result.wheels = [size, size, size, size]
    }
    return result

}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
))