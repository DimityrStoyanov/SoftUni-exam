import { assert } from "chai"
import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js"

describe("planYourTrip funtion", () => {
    describe("choosingDestination", () => {
        it(`input - happy path winter `, () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.")
        })
        it(`input - happy path not winter `, () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.")
        })
        it(`input - not 2024 year`, () => {
            expect(() => { planYourTrip.choosingDestination("Ski Resort", "Summer", 2023) }).to.throw("Invalid Year!")
        })
        it(`input - not that destination`, () => {
            expect(() => { planYourTrip.choosingDestination("Bansko", "Summer", 2024) }).to.throw("This destination is not what you are looking for.")
        })
    })
    describe("exploreOptions", () => {
        it(`input - happy path`, () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal(`Skiing, Snowboarding`)
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal(`Skiing, Winter Hiking`)
        })
        it(`input - test array`, () => {
            expect(() => { planYourTrip.exploreOptions({}, 1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions("string", 1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(1, 1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(Boolean, 1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(null, 1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(undefined, 1) }).to.throw("Invalid Information!")
        })
        it(`input - test num`, () => {
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], {}) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "String") }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], []) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], Boolean) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], null) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], undefined) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2.5) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -2.5) }).to.throw("Invalid Information!")
        })
        it(`input - test invalid index`, () => {
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1) }).to.throw("Invalid Information!")
        })
    })
    describe("estimateExpenses ", () => {
        it(`input - happy path less then 500`, () => {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.")
        })
        it(`input - happy path more then 500`, () => {
            expect(planYourTrip.estimateExpenses(100, 6)).to.equal("The estimated cost for the trip is $600.00, plan accordingly.")
        })
        it(`input - test 1 input num`, () => {
            expect(() => { planYourTrip.estimateExpenses({}, 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses([], 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses("string", 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(null, 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(undefined, 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(Boolean, 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(-1, 3) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(0, 3) }).to.throw("Invalid Information!")
        })
        it(`input - test 2 input num`, () => {
            expect(() => { planYourTrip.estimateExpenses(3, {}) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, []) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, "string") }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, null) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, undefined) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, Boolean) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, -1) }).to.throw("Invalid Information!")
            expect(() => { planYourTrip.estimateExpenses(3, 0) }).to.throw("Invalid Information!")
        })
    })
})