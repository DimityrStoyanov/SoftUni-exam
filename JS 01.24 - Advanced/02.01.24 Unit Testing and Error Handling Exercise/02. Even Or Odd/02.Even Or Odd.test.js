import { assert } from "chai";
import { isOddOrEven } from "./02. Even Or Odd.js";

describe("isOddOrEven", () => {
    it("Testing with string for length", () => {
        assert.equal(isOddOrEven("Teo"), "odd", "result is `odd`")
        assert.equal(isOddOrEven("Vesi"), "even", "result is `even`")
    })
    it("Testing for difference inputs", () => {
        assert.equal(isOddOrEven([]), undefined, "result is undefined")
        assert.equal(isOddOrEven({}), undefined, "result is undefined")

    })
})

describe("Test Againg", () => {
    it("Testing with string for length", function() {
        assert.equal(isOddOrEven("Teo"), "odd", "result is `odd`")
        assert.equal(isOddOrEven("Vesi"), "even", "result is `even`")
    })
    it("Testing for difference inputs", function() {
        assert.equal(isOddOrEven([]), undefined, "result is undefined")
        assert.equal(isOddOrEven({}), undefined, "result is undefined")

    })
})
