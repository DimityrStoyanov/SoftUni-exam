function tickets(arr, param) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let tickets of arr) {
        let [destination, price, status] = tickets.split(`|`)
        price = Number(price)
        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }

    // Function for sort of arr. If type is string, we use "localeCompare". Else, we sort number, so use standart sort.
   //  This is normal function. We can use "static" on solution 2.
    function sortResult(ticketArr, criteria) {
        if (typeof ticketArr[0][criteria] == "string") {
            ticketArr.sort((a, b) => a[criteria].localeCompare(b[criteria])) // for string
        }
        else {
            ticketArr.sort((a, b) => a[criteria] - b[criteria]) // for Num
        }
        return ticketArr
    }
    return sortResult(result, param)


}





console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))
