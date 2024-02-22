import { assert } from "chai"
import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js"

describe(`Testing Pet Adoption Agency`, () => {

    describe(`isPetAvailable function`, () => {
        it(`Testing number of pets - 0`, () => {
            expect(petAdoptionAgency.isPetAvailable(`dog`, 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`)
        })
        it(`Testing vaccinated - true`, () => {
            expect(petAdoptionAgency.isPetAvailable(`dog`, 1, true)).to.equal(`Great! We have 1 vaccinated dog(s) available for adoption at the agency.`)
        })
        it(`Testing vaccinated - false`, () => {
            expect(petAdoptionAgency.isPetAvailable(`dog`, 1, false)).to.equal(`Great! We have 1 dog(s) available for adoption, but they need vaccination.`)
        })
        describe(`Testing inputs`, () => {

            it(`1st string - array true`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable([], 2, true) }).to.throw("Invalid input")
            })
            it(`1st string - array false`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable([], 2, false) }).to.throw("Invalid input")
            })
            it(`1st string - object - false`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable({}, 2, false) }).to.throw("Invalid input")
            })
            it(`1st string - object - true`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable({}, 2, true) }).to.throw("Invalid input")
            })
            it(`1st string - num true`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(2, 2, true) }).to.throw("Invalid input")
            })
            it(`1st string - num false`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(2, 2, false) }).to.throw("Invalid input")
            })
            it(`2nd num - array`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, [], true) }).to.throw("Invalid input")
            })
            it(`2nd num - object`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, {}, true) }).to.throw("Invalid input")
            })
            it(`2nd num - string`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, `dog`, true) }).to.throw("Invalid input")
            })
            it(`3rd boolean - object`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, 3, {}) }).to.throw("Invalid input")
            })
            it(`3rd boolean - string`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, 3, `dog`) }).to.throw("Invalid input")
            })
            it(`3rd boolean - array`, () => {
                expect(() => { petAdoptionAgency.isPetAvailable(`dog`, 3, []) }).to.throw("Invalid input")
            })

        })

    })

    describe(`getRecommendedPets function`, () => {
        it(`testing input - much traits`, () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: `Shelby`, traits: `love` }], `love`)).to.equal(`Recommended pets with the desired traits (love): Shelby`)
        })
        it(`testing input - no traits`, () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: `Shelby`, traits: `love` }], `jump`)).to.equal(`Sorry, we currently have no recommended pets with the desired traits: jump.`)
        })
        describe(`Testing inputs`, () => {
            it(`1st array  - object`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets({}, `love`) }).to.throw("Invalid input")
            })
            it(`1st array  - string`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets(`dog`, `love`) }).to.throw("Invalid input")
            })
            it(`1st array  - num`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets(1, `love`) }).to.throw("Invalid input")
            })
            it(`2nd string  - array`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets([], []) }).to.throw("Invalid input")
            })
            it(`2nd string  - object`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets([], {}) }).to.throw("Invalid input")
            })
            it(`2nd string  - num`, () => {
                expect(() => { petAdoptionAgency.getRecommendedPets([], 2) }).to.throw("Invalid input")
            })
        })

    })

    describe(`adoptPet functon`, () => {
        it(`Testing adoptPet - pet and name`, () => {
            expect(petAdoptionAgency.adoptPet(`dog`, `Balkan`)).to.equal(`Congratulations, Balkan! You have adopted dog from the agency. Enjoy your time with your new furry friend!`)
        })
        describe(`Testing inputs`, () => {
            it(`1st string - array`, () => {
                expect(() => { petAdoptionAgency.adoptPet([], `Balkan`) }).to.throw("Invalid input")
            })
            it(`1st string - object`, () => {
                expect(() => { petAdoptionAgency.adoptPet({}, `Balkan`) }).to.throw("Invalid input")
            })
            it(`1st string - num`, () => {
                expect(() => { petAdoptionAgency.adoptPet(1, `Balkan`) }).to.throw("Invalid input")
            })
            it(`2nd string - num`, () => {
                expect(() => { petAdoptionAgency.adoptPet(`dog`, 2) }).to.throw("Invalid input")
            })
            it(`2nd string - object`, () => {
                expect(() => { petAdoptionAgency.adoptPet(`dog`, {}) }).to.throw("Invalid input")
            })
            it(`2nd string - array`, () => {
                expect(() => { petAdoptionAgency.adoptPet(`dog`, []) }).to.throw("Invalid input")
            })
        })
    })


})