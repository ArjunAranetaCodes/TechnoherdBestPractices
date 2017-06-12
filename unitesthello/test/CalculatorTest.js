let chai = require("chai")
let Calculator = require("../model/Calculator")
let sinon = require('sinon')
chai.should()


describe("Calculator", ()=>{

  describe("add", ()=>{
    it("should add numbers", ()=>{
      let sum = Calculator.add({num1:3,num2:5})
      sum.should.equal(8)

    })

    context("When num1 does not exist",()=>{
         it("should throw an error", ()=>{
              let addition = ()=>{
                   let sum = Calculator.add({num2:5})
              }
          addition.should.throw("num1 should have a value")
         })
    })

    context("When num2 does not exist",()=>{
         it("should throw an error", ()=>{
              let addition = ()=>{
                   let sum = Calculator.add({num1:5})
              }
          addition.should.throw("num2 should have a value")
         })
    })
  })

  describe("multiply", ()=>{
    it("should multiply a number", ()=>{
      let sum = Calculator.multiply({num1:3,num2:5})
      sum.should.equal(15)
    })

    context("When num1 does not exist",()=>{
         it("should throw an error", ()=>{
              let multiply = ()=>{
                   let product = Calculator.multiply({num2:5})
              }
          multiply.should.throw("num1 should have a value")
         })
    })

    context("When num2 does not exist",()=>{
         it("should throw an error", ()=>{
              let multiply = ()=>{
                   let product = Calculator.multiply({num1:5})
              }
          multiply.should.throw("num2 should have a value")
         })
    })

  })
})
