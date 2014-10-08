/** @jsx React.DOM */

var Panel = require('./panel'),
    FormGroup = require('./form-group'),
    FormControlStatic = require('./form-control-static'),
    Definition = require('./definition'),
    Character = require('../models/character');

function incDiff(stat, result) {
    result = result || 'sheetDamage';

    var character = Character.load(),
        before = character[result];
    character['_' + stat] += 1;
    return character[result] - before;
}

var DamagePerStat = React.createClass({
  render: function () {
    var weaponDamage = incDiff('weapon1MinDamage'),
        primaryAttribute = incDiff('primaryAttribute'),
        critChance = incDiff('critChance'),
        critDamage = incDiff('critDamage'),
        attackSpeed = incDiff('attackSpeed'),
        passiveDamage = incDiff('passiveDamage'),
        elementalDamage = incDiff('elementalDamage', 'sheetElementalDamage'),
        eliteDamage = incDiff('eliteDamage', 'eliteElementalDamage');
    return (
      <div className="col-md-6">
        <Panel heading="Damage per Stat">
          <p>Each number represents how much damage you will gain by increasing the specified stat by 1 (or 1% for percentage based stats).</p>
          <dl className="dl-horizontal">
            <dt>Weapon Damage</dt>
            <Definition value={weaponDamage} />
            <dt>Primary Attribute</dt>
            <Definition value={primaryAttribute} />
            <dt>Critical Hit Chance</dt>
            <Definition value={critChance} />
            <dt>Critical Hit Damage</dt>
            <Definition value={critDamage} />
            <dt>Attack Speed</dt>
            <Definition value={attackSpeed} />
            <dt>Passive Damage</dt>
            <Definition value={passiveDamage} />
            <dt>&times; Elemental</dt>
            <Definition value={elementalDamage} />
            <dt>&times; Elite</dt>
            <Definition value={eliteDamage} />
          </dl>
        </Panel>
      </div>
    );
  }
});

module.exports = DamagePerStat;
