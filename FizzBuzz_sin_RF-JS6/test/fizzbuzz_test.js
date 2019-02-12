var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should;
var fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz de beria hacer',function() {

it('si',function(){
    expect(true).equal(true);
});
it('should return a list of the correct size', function() {
    var output = fizzbuzz.run(1, 5);
    expect(output).to.equal(output.length, 5);
  });
});