function birthdayParty(a) {
    const rent = Number(a[0])
    const kake = rent * 0.2;
    const drink = kake * 0.55;
    const animator = rent / 3;
    const totalCost = rent + kake + drink + animator
    console.log(totalCost)
}
    
birthdayParty(["3200"])

