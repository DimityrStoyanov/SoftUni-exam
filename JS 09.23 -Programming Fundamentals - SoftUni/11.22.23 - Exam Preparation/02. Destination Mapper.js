function solve(text) {

    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let matches = text.matchAll(pattern)
    let result = [];
    let travelPts = 0;

    for (let token of matches) {
        let { destination } = token.groups
        result.push(destination)
        let pts = Number(destination.length);
        travelPts += pts
    }

    console.log(`Destinations: ${result.join(`, `)}`);
    console.log(`Travel Points: ${travelPts}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve("ThisIs some InvalidInput")
