function solve(arr, string1, string2) {
    let start = arr.indexOf(string1);
    let end = arr.indexOf(string2);

    let result = arr.slice(start, end + 1)
    return result
}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie', 'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')