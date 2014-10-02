/** @jsx React.DOM */

function p(n) {
  return (+n).toLocaleString();
}

function pr(n) {
  return p((+n).toFixed(1));
}

var Panel = require('./panel'),
    FormGroup = require('./form-group');

var Weapon = React.createClass({
  render: function () {
    return (
      <div className="col-md-6">
        <Panel heading={'Weapon ' + this.props.number}>
          <FormGroup for={'weapon' + this.props.number + 'MinDamage'} label="Minimum Damage">
            <input type="text" id={'weapon' + this.props.number + 'MinDamage'} value={this.props.minDamage} className="form-control" />
          </FormGroup>
          <FormGroup for={'weapon' + this.props.number + 'MaxDamage'} label="Maximum Damage">
            <input type="text" id={'weapon' + this.props.number + 'MaxDamage'} value={this.props.maxDamage} className="form-control" />
          </FormGroup>
          <FormGroup for={'weapon' + this.props.number + 'AttacksPerSecond'} label="Attacks per Second">
            <input type="text" id={'weapon' + this.props.number + 'AttacksPerSecond'} value={this.props.attacksPerSecond} className="form-control" />
          </FormGroup>
          <FormGroup label="Damage per Second">
            <p className="form-control-static" title={'Exact: ' + p(this.props.dps)}>{pr(this.props.dps)}</p>
          </FormGroup>
        </Panel>
      </div>
    );
  }
});

module.exports = Weapon;
