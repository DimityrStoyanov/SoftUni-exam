function solution() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {
            return this._ribbon
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this.text = text
        }
        get text() {
            return this._text
        }

        set text(text) {
            this._text = text
        }

    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }


}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
console.log(testBalloon)
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
console.log(testPartyBalloon)
let ribbon = testPartyBalloon.ribbon;
console.log(ribbon)
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);

