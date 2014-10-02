/** @jsx React.DOM */

function pct(n) {
  return +n * 0.01;
}

function calcAttacksPerSecond(a, b) {
  if (b) {
    return (2 * +a * +b) / (+a + +b);
  } else {
    return +a;
  }
}

function calcSheetDamage(x) {
  var s = 1 + pct(x.primaryAttribute),
      c = 1 + (pct(x.critChance) * pct(x.critDamage)),
      r = (1 + pct(x.attackSpeed)) * calcAttacksPerSecond(x.weapon1AttacksPerSecond, x.weapon2AttacksPerSecond),
      a = (+x.weapon1MinDamage + +x.weapon1MaxDamage + +x.weapon2MinDamage + +x.weapon2MaxDamage) / (x.weapon2AttacksPerSecond ? 4.0 : 2.0),
      m = 1 + pct(x.passiveDamage);
  return s * c * r * a * m;
}

var Header = require('./header'),
    Row = require('./row'),
    Weapon = require('./weapon'),
    CharacterStats = require('./character-stats');

var Page = React.createClass({
  getInitialState: function () {
    return {
      weapon1MinDamage: 1343,
      weapon1MaxDamage: 1841,
      weapon1AttacksPerSecond: 1.47,
      weapon2MinDamage: 1287,
      weapon2MaxDamage: 1763,
      weapon2AttacksPerSecond: 1.4,
      primaryAttribute: 7490,
      attackSpeed: 46.4,
      critChance: 41.5,
      critDamage: 423,
      passiveDamage: 8,
      elementalDamage: 54,
      eliteDamage: 0
    };
  },
  handleChange: function (e) {
    var state = {};
    state[e.target.id] = e.target.value
    this.setState(state);
  },
  render: function () {
    var dps1 = +this.state.weapon1AttacksPerSecond * (+this.state.weapon1MinDamage + +this.state.weapon1MaxDamage) / 2.0,
        dps2 = +this.state.weapon2AttacksPerSecond * (+this.state.weapon2MinDamage + +this.state.weapon2MaxDamage) / 2.0,
        sheetDamage = calcSheetDamage(this.state),
        sheetElementalDamage = sheetDamage * (1 + pct(this.state.elementalDamage)),
        eliteElementalDamage = sheetElementalDamage * (1 + pct(this.state.eliteDamage));
    return (
      <div className="container">
        <Header />
        <form className="form-horizontal" onChange={this.handleChange}>
          <Row>
            <Weapon number="1"
                minDamage={this.state.weapon1MinDamage}
                maxDamage={this.state.weapon1MaxDamage}
                attacksPerSecond={this.state.weapon1AttacksPerSecond}
                dps={dps1} />
            <Weapon number="2"
                minDamage={this.state.weapon2MinDamage}
                maxDamage={this.state.weapon2MaxDamage}
                attacksPerSecond={this.state.weapon2AttacksPerSecond}
                dps={dps2} />
          </Row>
          <Row>
            <CharacterStats
                primaryAttribute={this.state.primaryAttribute}
                attackSpeed={this.state.attackSpeed}
                critChance={this.state.critChance}
                critDamage={this.state.critDamage}
                passiveDamage={this.state.passiveDamage}
                elementalDamage={this.state.elementalDamage}
                eliteDamage={this.state.eliteDamage}
                sheetDamage={sheetDamage}
                sheetElementalDamage={sheetElementalDamage}
                eliteElementalDamage={eliteElementalDamage} />
          </Row>
        </form>
      </div>
    );
  }
});

module.exports = Page;
