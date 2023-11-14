function solve(arr) {
    let start = arr[0].charCodeAt()
    let end = arr[1].charCodeAt()
    let text = arr[2].split(``)
    let sum = 0;
    text.forEach(element => {

        if (element.charCodeAt() > start && element.charCodeAt() < end && start < end) {
            sum += element.charCodeAt()
        } else if (element.charCodeAt() < start && element.charCodeAt() > end && start > end) {
            sum += element.charCodeAt()
        }
    });
    console.log(sum);

}
solve(['.',
    '@',
    'dsg12gr5653feee5']
)