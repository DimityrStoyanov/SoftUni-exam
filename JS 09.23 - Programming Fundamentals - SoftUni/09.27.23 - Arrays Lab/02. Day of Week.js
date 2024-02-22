function dayOfWeek(currentDay) {
    if (currentDay < 1 || currentDay > 7) {
        console.log(`Invalid day!`);
    } else {
        let days = [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

        ];
        console.log(days[currentDay - 1]);
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(33);
dayOfWeek(-3);