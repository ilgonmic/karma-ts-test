(function (_, Kotlin, $module$kotlin_test, $module$check_js_test) {
  'use strict';
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_i7pyzi$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var Service = $module$check_js_test.org.my.Service;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  function MyTest() {
  }
  function MyTest$foo$lambda() {
    return false;
  }
  MyTest.prototype.foo = function () {
    assertTrue(void 0, MyTest$foo$lambda);
  };
  MyTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyTest',
    interfaces: []
  };
  function ServiceTest() {
  }
  ServiceTest.prototype.valueTest = function () {
    assertEquals('value', (new Service()).value());
  };
  ServiceTest.prototype.valueFailTest = function () {
    console.warn('FROM VALUE FAIL TEST');
    assertEquals('valueqwqw', (new Service()).value());
    console.log('AFTER ASSERT');
  };
  ServiceTest.prototype.valueFailTest2 = function () {
    console.warn('FROM VALUE FAIL TEST 2');
    assertEquals('valueqwqw', (new Service()).value());
  };
  ServiceTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServiceTest',
    interfaces: []
  };
  _.MyTest = MyTest;
  var package$org = _.org || (_.org = {});
  var package$my = package$org.my || (package$org.my = {});
  package$my.ServiceTest = ServiceTest;
  suite('', false, function () {
    suite('MyTest', false, function () {
      test('foo', false, function () {
        return (new MyTest()).foo();
      });
    });
  });
  suite('org.my', false, function () {
    suite('ServiceTest', false, function () {
      test('valueTest', false, function () {
        return (new ServiceTest()).valueTest();
      });
      test('valueFailTest', false, function () {
        return (new ServiceTest()).valueFailTest();
      });
      test('valueFailTest2', false, function () {
        return (new ServiceTest()).valueFailTest2();
      });
    });
  });
  Kotlin.defineModule('check-js-test-test', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-test'), require('check-js-test')));

//# sourceMappingURL=check-js-test-test.js.map
