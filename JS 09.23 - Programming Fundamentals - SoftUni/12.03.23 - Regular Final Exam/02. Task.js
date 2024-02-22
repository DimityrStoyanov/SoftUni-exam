function solve(arr) {
    let text = arr[0];
    // let pattern = /[@#]+(?<color>[a-z]{3,})[^a-z\d]*\/(?<count>\d+)\/[^a-z\d]*/g;
    let pattern = /[@#]+(?<color>[a-z]{3,})[^a-z\d]*\/(?<count>\d+)\//g;

    let maches = text.matchAll(pattern)
    for (let info of maches) {
        let token = info.groups;
        console.log(`You found ${token.count} ${token.color} eggs!`)
    }

}
solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])