import {Service} from "./service";

export class ServiceTest {
  valueTest() {
    assert.equal(new Service().value(), "valueqwqw");
  }
}

var assert = require('assert');
describe('Suite 1', function() {
  describe('Suite 1.1', function() {
    it('Should failed', function() {
      new ServiceTest().valueTest();
    });
  });
});