let chai = require("chai")
let Calculator = require("../model/Calculator")

chai.should()

describe("Calculator", ()=>{
  describe("add", ()=>{
    it("should add numbers", ()=>{
      let sum = Calculator.add(3,5)
      sum.should.equal(8)
    })
  })
})
