function solve(arr) {
    let meetings = {};
    for (let item of arr) {
        let [day, name] = item.split(` `)

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue
        } else {
            console.log(`Scheduled for ${day}`)
        }
        meetings[day] = name
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
    }

    let { day } = meetings
    console.log(meetings);
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)