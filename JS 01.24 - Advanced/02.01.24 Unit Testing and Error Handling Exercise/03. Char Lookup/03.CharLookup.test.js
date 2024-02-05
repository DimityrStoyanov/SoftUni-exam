import { assert } from "chai"
import { lookupChar } from "./03. CharLookup.js"

describe("Whats happening", function () {
    it("Testing type of string", function () {
        assert.equal(lookupChar(Object, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(Boolean, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(Number, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(BigInt, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(Symbol, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(undefined, 0), undefined, "Type is not string.")
        assert.equal(lookupChar(null, 0), undefined, "Type is not string.")
        assert.equal(lookupChar("String", 0), "S", "Type is not string.")
        assert.equal(lookupChar("String", 1), "t", "Type is not string.")
    })

    it("Is number integer", function () {
        assert.equal(lookupChar(Object, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(Boolean, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(Number, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(BigInt, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(Symbol, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(undefined, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(null, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar(String, 0), undefined, "Invalid number of index!")
        assert.equal(lookupChar("String", 0), "S", "Invalid number of index!")
        assert.equal(lookupChar("String", 1), "t", "Invalid number of index!")
        assert.equal(lookupChar("String", 1.5), undefined, "Invalid number of index!")

    })

    it("Testing for correct index", function () {
        assert.equal(lookupChar("String", -1), "Incorrect index", "Change the index with correct one!")
        assert.equal(lookupChar("String", 6), "Incorrect index", "Change the index with correct one!")
        assert.equal(lookupChar("String", 0), "S", "Change the index with correct one!")
        assert.equal(lookupChar("String", 1), "t", "Change the index with correct one!")


    })
}) 