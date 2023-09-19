function cinemaTicket(input){
    let day = input[0];
    let ticketPrice = 0

    switch(day){
        case `Monday`:
        case `Tuesday`: ticketPrice = 12; break;
        case `Wednesday`:
        case `Thursday`:ticketPrice = 14; break;
        case `Friday`:ticketPrice = 12; break;
        case `Saturday`:
        case `Sunday`:ticketPrice = 16; break;
        default:
    }
console.log(ticketPrice)
}
cinemaTicket(["Monday"])
// (["1"])	Monday
// (["2"])	Tuesday
// (["3"])	Wednesday
// (["4"])	Thursday
// (["5"])	Friday
// (["6"])	Saturday
// (["7"])	Sunday