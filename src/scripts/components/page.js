/** @jsx React.DOM */

var Header = require('./header'),
    Row = require('./row'),
    Weapon = require('./weapon');

var Page = React.createClass({
  getInitialState: function () {
    return {
      weapon1MinDamage: 1343,
      weapon1MaxDamage: 1841,
      weapon1AttacksPerSecond: 1.47,
      weapon2MinDamage: 1287,
      weapon2MaxDamage: 1763,
      weapon2AttacksPerSecond: 1.4
    };
  },
  handleChange: function (e) {
    var state = {};
    state[e.target.id] = e.target.value
    this.setState(state);
  },
  render: function () {
    return (
      <div className="container">
        <Header />
        <form className="form-horizontal" onChange={this.handleChange}>
          <Row>
            <Weapon number="1" minDamage={this.state.weapon1MinDamage} maxDamage={this.state.weapon1MaxDamage} attacksPerSecond={this.state.weapon1AttacksPerSecond} />
            <Weapon number="2" minDamage={this.state.weapon2MinDamage} maxDamage={this.state.weapon2MaxDamage} attacksPerSecond={this.state.weapon2AttacksPerSecond} />
          </Row>
        </form>
      </div>
    );
  }
});

module.exports = Page;
