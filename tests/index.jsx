// React needs a polyfill!
require('phantomjs-polyfill');

var should = require('should');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Form', function () {

  var Form = require('../src/components/Form.jsx');

   it('should create a form with 3 fields', function () {
    var testError = TestUtils.renderIntoDocument(<Form />);
    var el = testError.getDOMNode();
    should.equal(el.querySelectorAll('.form-group').length, 3);
  });

});
