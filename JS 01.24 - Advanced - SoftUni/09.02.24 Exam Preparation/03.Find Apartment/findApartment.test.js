import { assert } from "chai"
import { expect } from "chai";
import { findNewApartment } from "./findApartment.js"

describe("isGoodLocation", () => {
    it(`first input - happy path `, () => {
        expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!")
        expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!")
        expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!")
    })
    it(`first input - wrong city `, () => {
        expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.")
        expect(findNewApartment.isGoodLocation("Burgas", false)).to.equal("This location is not suitable for you.")
    })
    it(`second input - false `, () => {
        expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.")
        expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.")
        expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.")
    })
    it(`wrong input - 1st not string`, () => {
        expect(() => {findNewApartment.isGoodLocation({}, true)}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation([], true)}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation(5, true)}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation(Boolean, true)}).to.throw("Invalid input!")
    })
    it(`wrong input - 2nd not boolean`, () => {
        expect(() => {findNewApartment.isGoodLocation("Sofia", {})}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation("Sofia", [])}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation("Sofia", 5)}).to.throw("Invalid input!")
        expect(() => {findNewApartment.isGoodLocation("Sofia", "true")}).to.throw("Invalid input!")
    })

})
