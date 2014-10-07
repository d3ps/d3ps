/** @jsx React.DOM */

var Panel = require('./panel'),
    FormGroup = require('./form-group'),
    FormControlStatic = require('./form-control-static');

var CharacterStats = React.createClass({
  render: function () {
    return (
      <div className="col-md-6">
        <Panel heading="Character Stats">
          <FormGroup for="primaryAttribute" label="Primary Attribute">
            <input type="text" id="primaryAttribute" value={this.props.primaryAttribute} className="form-control" />
          </FormGroup>
          <FormGroup for="attackSpeed" label="Attack Speed" suffix="%">
            <input type="text" id="attackSpeed" value={this.props.attackSpeed} className="form-control" />
          </FormGroup>
          <FormGroup for="critChance" label="Critical Hit Chance" suffix="%">
            <input type="text" id="critChance" value={this.props.critChance} className="form-control" />
          </FormGroup>
          <FormGroup for="critDamage" label="Critical Hit Damage" suffix="%">
            <input type="text" id="critDamage" value={this.props.critDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="passiveDamage" label="Passive Damage" suffix="%">
            <input type="text" id="passiveDamage" value={this.props.passiveDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="elementalDamage" label="Elemental Damage" suffix="%">
            <input type="text" id="elementalDamage" value={this.props.elementalDamage} className="form-control" />
          </FormGroup>
          <FormGroup for="eliteDamage" label="Elite Damage" suffix="%">
            <input type="text" id="eliteDamage" value={this.props.eliteDamage} className="form-control" />
          </FormGroup>
          <FormGroup label="Sheet Damage">
            <FormControlStatic value={this.props.sheetDamage} />
          </FormGroup>
          <FormGroup label="&times; Elemental">
            <FormControlStatic value={this.props.sheetElementalDamage} />
          </FormGroup>
          <FormGroup label="&times; Elite">
            <FormControlStatic value={this.props.eliteElementalDamage} />
          </FormGroup>
        </Panel>
      </div>
    );
  }
});

module.exports = CharacterStats;
