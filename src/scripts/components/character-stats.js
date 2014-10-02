/** @jsx React.DOM */

function p(n) {
  return (+n).toLocaleString();
}

function pr(n) {
  return p(Math.round(+n));
}

var Panel = require('./panel'),
    FormGroup = require('./form-group');

var CharacterStats = React.createClass({
  render: function () {
    return (
      <div className="col-md-6">
        <Panel heading="Character Stats">
          <FormGroup for="primaryAttribute" label="Primary Attribute">
            <input type="text" id="primaryAttribute" value={this.props.primaryAttribute} className="form-control" />
          </FormGroup>
          <FormGroup for="attackSpeed" label="Attack Speed">
            <input type="text" id="attackSpeed" value={this.props.attackSpeed} className="form-control" />
          </FormGroup>
          <FormGroup for="critChance" label="Critical Hit Chance">
            <input type="text" id="critChance" value={this.props.critChance} className="form-control" />
          </FormGroup>
          <FormGroup for="critDamage" label="Critical Hit Damage">
            <input type="text" id="critDamage" value={this.props.critDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="passiveDamage" label="Passive Damage">
            <input type="text" id="passiveDamage" value={this.props.passiveDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="elementalDamage" label="Elemental Damage">
            <input type="text" id="elementalDamage" value={this.props.elementalDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="eliteDamage" label="Elite Damage">
            <input type="text" id="eliteDamage" value={this.props.eliteDamage} className="form-control" />
          </FormGroup>
          <FormGroup label="Sheet Damage">
            <p className="form-control-static" title={'Exact: ' + p(this.props.sheetDamage)}>{pr(this.props.sheetDamage)}</p>
          </FormGroup>
          <FormGroup label="&times; Elemental">
            <p className="form-control-static" title={'Exact: ' + p(this.props.sheetElementalDamage)}>{pr(this.props.sheetElementalDamage)}</p>
          </FormGroup>
          <FormGroup label="&times; Elite">
            <p className="form-control-static" title={'Exact: ' + p(this.props.eliteElementalDamage)}>{pr(this.props.eliteElementalDamage)}</p>
          </FormGroup>
        </Panel>
      </div>
    );
  }
});

module.exports = CharacterStats;
