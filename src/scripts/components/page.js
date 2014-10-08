/** @jsx React.DOM */

var Header = require('./header'),
    Row = require('./row'),
    Weapon = require('./weapon'),
    CharacterStats = require('./character-stats'),
    DamagePerStat = require('./damage-per-stat'),
    Character = require('../models/character');

var Page = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Header />
        <form className="form-horizontal" onChange={this.props.handleChange}>
          <Row>
            <Weapon number="1"
                minDamage={this.props.weapon1MinDamage}
                maxDamage={this.props.weapon1MaxDamage}
                attacksPerSecond={this.props.weapon1AttacksPerSecond}
                dps={this.props.weapon1DPS} />
            <Weapon number="2"
                minDamage={this.props.weapon2MinDamage}
                maxDamage={this.props.weapon2MaxDamage}
                attacksPerSecond={this.props.weapon2AttacksPerSecond}
                dps={this.props.weapon2DPS} />
          </Row>
          <Row>
            <CharacterStats
                primaryAttribute={this.props.primaryAttribute}
                attackSpeed={this.props.attackSpeed}
                critChance={this.props.critChance}
                critDamage={this.props.critDamage}
                passiveDamage={this.props.passiveDamage}
                elementalDamage={this.props.elementalDamage}
                eliteDamage={this.props.eliteDamage}
                sheetDamage={this.props.sheetDamage}
                sheetElementalDamage={this.props.sheetElementalDamage}
                eliteElementalDamage={this.props.eliteElementalDamage} />
            <DamagePerStat />
          </Row>
        </form>
      </div>
    );
  }
});

module.exports = Page;
