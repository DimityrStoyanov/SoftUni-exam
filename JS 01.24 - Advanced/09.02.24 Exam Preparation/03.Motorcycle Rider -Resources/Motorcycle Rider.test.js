import { assert } from "chai"
import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js"

describe('motorcycleRider test', () => {

    describe(`testing licenseRestriction`, () => {
        it(`Testing category AM`, () => {
            expect(motorcycleRider.licenseRestriction(`AM`)).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`)
        })
        it(`Testing category A1`, () => {
            expect(motorcycleRider.licenseRestriction(`A1`)).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it(`Testing category A2`, () => {
            expect(motorcycleRider.licenseRestriction(`A2`)).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })
        it(`Testing category A`, () => {
            expect(motorcycleRider.licenseRestriction(`A`)).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        })

        it(`Testing input with other category string`, () => {
            expect(() => { motorcycleRider.licenseRestriction(`Z`) }).to.throw("Invalid Information!")
        })
        it(`Testing input with other category number`, () => {
            expect(() => { motorcycleRider.licenseRestriction(5) }).to.throw("Invalid Information!")
        })
    })

    describe(`testing motorcycleShowroom`, () => {
        it(`Testing array input with 1 `, () => {
            expect(motorcycleRider.motorcycleShowroom([`50`], 50)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
        it(`Testing array input with 2, two less`, () => {
            expect(motorcycleRider.motorcycleShowroom([`50`, `55`], 100)).to.equal("There are 2 available motorcycles matching your criteria!")
        })
        it(`Testing array input with 2 , one less, one equal`, () => {
            expect(motorcycleRider.motorcycleShowroom([`50`, `100`], 100)).to.equal("There are 2 available motorcycles matching your criteria!")
        })
        it(`Testing array input, one more, one equal`, () => {
            expect(motorcycleRider.motorcycleShowroom([`110`, `100`], 100)).to.equal("There are 1 available motorcycles matching your criteria!")
        })
        it(`Testing array input, one more, one less`, () => {
            expect(motorcycleRider.motorcycleShowroom([`110`, `50`], 100)).to.equal("There are 1 available motorcycles matching your criteria!")
        })
        it(`Testing input - first string`, () => {
            expect(() => { motorcycleRider.licenseRestriction(`2`, 50) }).to.throw("Invalid Information!")
        })
        it(`Testing input - first object`, () => {
            expect(() => { motorcycleRider.licenseRestriction({}, 50) }).to.throw("Invalid Information!")
        })
        it(`Testing input - first num`, () => {
            expect(() => { motorcycleRider.licenseRestriction(2, 50) }).to.throw("Invalid Information!")
        })
        it(`Testing input - second string`, () => {
            expect(() => { motorcycleRider.licenseRestriction([2], `50`) }).to.throw("Invalid Information!")
        })
        it(`Testing input - second array`, () => {
            expect(() => { motorcycleRider.licenseRestriction([2], [50]) }).to.throw("Invalid Information!")
        })
        it(`Testing input - second obj`, () => {
            expect(() => { motorcycleRider.licenseRestriction([2], { num: 50 }) }).to.throw("Invalid Information!")
        })
        it(`Testing input - first input - empty array`, () => {
            expect(() => { motorcycleRider.licenseRestriction([], 50) }).to.throw("Invalid Information!")
        })
        it(`Testing input - second input  - less then 50`, () => {
            expect(() => { motorcycleRider.licenseRestriction([10], 49) }).to.throw("Invalid Information!")
        })
    })

    describe(`testing otherSpendings`, () => {
        it(`Testing no discount`, () => {
            expect(motorcycleRider.otherSpendings([`helmet`, `jacked`], [`engine oil`, `oil filter`], false)).to.equal('You spend $600.00 for equipment and consumables!')
        })
        it(`Testing  discount`, () => {
            expect(motorcycleRider.otherSpendings([`helmet`, `jacked`], [`engine oil`, `oil filter`], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!")
        })
        it(`Testing input first array`, () => {
            expect(() => { motorcycleRider.licenseRestriction(`5`, [`engine oil`, `oil filter`], true) }).to.throw("Invalid Information!")
        })
        it(`Testing input second array`, () => {
            expect(() => { motorcycleRider.licenseRestriction([`helmet`, `jacked`], `engine oil`, true) }).to.throw("Invalid Information!")
        })
        it(`Testing input boolean`, () => {
            expect(() => { motorcycleRider.licenseRestriction([`helmet`, `jacked`], [`engine oil`, `oil filter`], `true`) }).to.throw("Invalid Information!")
        })

    })

});