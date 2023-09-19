function calculator(input){
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let mins = Number(input[3]);
    let episodesWithAds = mins * 1.2

    let totalTime = ((episodesWithAds * episodes)*seasons) + seasons * 10

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(totalTime)} minutes.`)

}
calculator(["Lucifer",
"3",
"18",
"55"])

// Име на сериал - текст
//  Брой сезони – цяло число в диапазона [1… 10]
//  Брой епизоди – цяло число в диапазона [10… 80]
//  Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]