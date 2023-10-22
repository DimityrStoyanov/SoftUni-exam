function solve(arr) {
    let list = arr.shift().split(`, `);

    for (let commands of arr) {
        let element = commands.split(` `)
        let action = element.shift()

        if (action == `Add`) {
            let remove = element.shift()
            let phone = element.shift()
            if (list.includes(phone)) {
                continue
            } else {
                list.push(phone)
            }
        } else if (action == `Remove`) {
            let remove = element.shift()
            let phone = element.shift()
            if (list.includes(phone)) {
                list = list.filter(element => element !== phone)
            }
        } else if (action == `Bonus`) {
            let remove = element.shift()
            let secondRemove = element.shift()
            let phones = element.shift().split(`:`)
            let oldPhone = phones[0]
            let newPhone = phones[1]
            if (list.includes(oldPhone)) {
                let index = (list.indexOf(oldPhone)) + 1;
                list.splice(index, 0, newPhone);

            }
        } else if (action == `Last`) {
            let remove = element.shift()
            let phone = element.shift()
            if (list.includes(phone)) {

                let index = list.indexOf(phone)
                let splice = list.splice(index, 1)
                list.push(splice[0])

            } else {
                continue
            }
        } else if (action == `End`) {
            console.log(list.join(`, `));
        }
    }


}
solve(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"])
solve(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"])
solve(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"])