function solve([arr]) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let match = pattern.exec(arr)
  

    while ( match != null){
        let {day, month, year} = match.groups ;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)

        match = pattern.exec(arr)
    }
}
solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
solve(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])