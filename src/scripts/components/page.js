/** @jsx React.DOM */

var Header = require('./header'),
    Row = require('./row'),
    Weapon = require('./weapon'),
    CharacterStats = require('./character-stats'),
    DamagePerStat = require('./damage-per-stat'),
    Character = require('../models/character');

var Page = React.createClass({
  getInitialState: function () {
    return { character: new Character() };
  },
  handleChange: function (e) {
    var character = new Character(this.state.character);
    character[e.target.id] = e.target.value;
    this.setState({ character: character });
  },
  render: function () {
    var c = this.state.character;
    return (
      <div className="container">
        <Header />
        <form className="form-horizontal" onChange={this.handleChange}>
          <Row>
            <Weapon number="1"
                minDamage={c.weapon1MinDamage}
                maxDamage={c.weapon1MaxDamage}
                attacksPerSecond={c.weapon1AttacksPerSecond}
                dps={c.weapon1DPS} />
            <Weapon number="2"
                minDamage={c.weapon2MinDamage}
                maxDamage={c.weapon2MaxDamage}
                attacksPerSecond={c.weapon2AttacksPerSecond}
                dps={c.weapon2DPS} />
          </Row>
          <Row>
            <CharacterStats
                primaryAttribute={c.primaryAttribute}
                attackSpeed={c.attackSpeed}
                critChance={c.critChance}
                critDamage={c.critDamage}
                passiveDamage={c.passiveDamage}
                elementalDamage={c.elementalDamage}
                eliteDamage={c.eliteDamage}
                sheetDamage={c.sheetDamage}
                sheetElementalDamage={c.sheetElementalDamage}
                eliteElementalDamage={c.eliteElementalDamage} />
            <DamagePerStat character={c} />
          </Row>
        </form>
      </div>
    );
  }
});

module.exports = Page;
