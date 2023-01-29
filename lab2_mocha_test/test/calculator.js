var expect = require('chai').expect
var calculator = require('../app/calculator')

describe("Calculator operations", () => {
  describe("Addition", () => {
    it('adds two numbers', () => {
      var res1 = calculator.add(5, 2)

      expect(res1).to.equal(7)
    })

    it('adds two numbers - FAIL', () => {
      var res1 = calculator.add(5, 2)

      expect(res1).to.equal(8)
    })
  })

  describe("Subtraction", () => {
    it('Subtract two numbers', () => {
      var res1 = calculator.sub(5, 2)

      expect(res1).to.equal(3)
    })

    it('Subtract two numbers - FAIL', () => {
      var res1 = calculator.sub(5, 2)

      expect(res1).to.equal(5)
    })
  })

  describe("Multiplication", () => {
    it('Multiplication of two numbers', () => {
      var res1 = calculator.mul(5, 2)

      expect(res1).to.equal(10)
    })

    it('Multiplication of two numbers - FAIL', () => {
      var res1 = calculator.mul(5, 2)

      expect(res1).to.equal(12)
    })
  })

  describe("Division", () => {
    it('Division of two numbers', () => {
      var res1 = calculator.div(10, 2)

      expect(res1).to.equal(5)
    })

    it('Division of two numbers - FAIL', () => {
      var res1 = calculator.div(10, 2)

      expect(res1).to.equal(2)
    })
  })
})