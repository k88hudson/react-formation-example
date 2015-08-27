var React = require('react');
var {CreateForm, SubmitButton, ErrorMessage} = require('react-formation');

var CreditCard = require('./CreditCard.jsx');

module.exports = CreateForm({

  schema: {
    name: {
      required: true,
      label: 'Name',
      type: 'string'
    },
    email: {
      required: true,
      label: 'Email',
      type: 'email'
    },
    cardNumber: {
      type: 'number',
      label: 'Credit card number'
    }
  },

  onSuccess: function (data) {
    alert(JSON.stringify(data));
  },

  render: function () {
    return (<form>

      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" valueLink={this.linkField('name')} />
        <ErrorMessage field="name" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" valueLink={this.linkField('email')} />
        <ErrorMessage field="email" />
      </div>

      <CreditCard />
      <p><SubmitButton /></p>
    </form>);
  }
});
