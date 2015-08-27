var React = require('react');
var {FormMixin, ErrorMessage} = require('react-formation');

module.exports = React.createClass({

  mixins: [FormMixin],

  render: function () {
    return (<div className="form-group">
      <label>Enter your credit card number:</label>
      <input type="number" valueLink={this.linkField('cardNumber')} />
      <ErrorMessage field="cardNumber" />
    </div>);
  }
});
