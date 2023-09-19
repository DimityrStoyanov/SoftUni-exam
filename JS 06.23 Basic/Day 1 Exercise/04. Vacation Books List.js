function vacationBooksList (input){
 let pagesAtBook = Number(input[0]);
 let pagesPerHour = Number(input[1]);
 let daysForReading = Number(input[2]);

 let timeNeededForBook = pagesAtBook / pagesPerHour
 let total = timeNeededForBook / daysForReading

 console.log(total)

}

vacationBooksList(["212 ",
"20 ",
"2 "])
//1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
//2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
//3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
