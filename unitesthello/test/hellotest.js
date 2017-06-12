let chai = require("chai")

let hello = require("../model/hello")

chai.should()

describe("Stable Run",()=>{
  describe("Output",()=>{
    it("should output hello world", ()=>{
      let result = hello.output()
      result.should.equal("hello world")
    })
  })
})
