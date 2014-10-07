/** @jsx React.DOM */

var Panel = require('./panel'),
    FormGroup = require('./form-group'),
    FormControlStatic = require('./form-control-static'),
    Definition = require('./definition'),
    Character = require('../models/character');

var DamagePerStat = React.createClass({
  render: function () {
    var c = this.props.character,
        sheetDamage = c.sheetDamage,
        sheetElementalDamage = c.sheetElementalDamage,
        eliteElementalDamage = c.eliteElementalDamage,
        weaponDamage = new Character(c, 'weapon1MinDamage').sheetDamage,
        primaryAttribute = new Character(c, 'primaryAttribute').sheetDamage,
        critChance = new Character(c, 'critChance', 0.5).sheetDamage,
        critDamage = new Character(c, 'critDamage').sheetDamage,
        attackSpeed = new Character(c, 'attackSpeed').sheetDamage,
        passiveDamage = new Character(c, 'passiveDamage').sheetDamage,
        elementalDamage = new Character(c, 'elementalDamage').sheetElementalDamage,
        eliteDamage = new Character(c, 'eliteDamage').eliteElementalDamage;
    return (
      <div className="col-md-6">
        <Panel heading="Damage per Stat">
          <p>Each number represents how much damage you will gain by increasing the specified stat by 1.</p>
          <p>Critical Hit Chance damage is based on an increase of 0.5 instead of 1.</p>
          <dl className="dl-horizontal">
            <dt>Weapon Damage</dt>
            <Definition value={weaponDamage - sheetDamage} />
            <dt>Primary Attribute</dt>
            <Definition value={primaryAttribute - sheetDamage} />
            <dt>Critical Hit Chance</dt>
            <Definition value={critChance - sheetDamage} />
            <dt>Critical Hit Damage</dt>
            <Definition value={critDamage - sheetDamage} />
            <dt>Attack Speed</dt>
            <Definition value={attackSpeed - sheetDamage} />
            <dt>Passive Damage</dt>
            <Definition value={passiveDamage - sheetDamage} />
            <dt>Elemental Damage</dt>
            <Definition value={elementalDamage - sheetElementalDamage} />
            <dt>Elite Ele. Damage</dt>
            <Definition value={eliteDamage - eliteElementalDamage} />
          </dl>
        </Panel>
      </div>
    );
  }
});

module.exports = DamagePerStat;
