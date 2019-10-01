function Service() { }

Service.prototype.value = function () {
  console.error("MY FAIL")
  console.log("MY LOG\nLOG ON NEXT LINE")
  return "value"
}


function ServiceTest() { }
ServiceTest.prototype.valueTest = function () {
  if (new Service().value() != "value") throw new Error("valueTest");
}

ServiceTest.prototype.valueFailTest = function () {
  if (new Service().value() != "valueqwqw") throw new Error("valueFailTest");
}

ServiceTest.prototype.valueFailTest2 = function () {
  if (new Service().value() != "valueqwqw") throw new Error("valueFailTest2");
}

function MyTest() { }
MyTest.prototype.foo = function () {
  throw new Error("foo");
}

describe('', function () {
  describe('MyTest', function () {
    it('foo', function () {
      new MyTest().foo();
    });
  });
});

describe('org.my', function () {
  describe('ServiceTest', function () {
    it('valueTest', function () {
      new ServiceTest().valueTest();
    });

    it('valueFailTest', function () {
      new ServiceTest().valueFailTest();
    });

    it('valueFailTest2', function () {
      new ServiceTest().valueFailTest2();
    });
  });
});