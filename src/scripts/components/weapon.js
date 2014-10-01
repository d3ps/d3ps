/** @jsx React.DOM */

var Panel = require('./panel'),
    FormGroup = require('./form-group');

var Weapon = React.createClass({
  render: function () {
    var dps = +this.props.attacksPerSecond * (+this.props.minDamage + +this.props.maxDamage) / 2,
        dpsExact = dps.toLocaleString(),
        dpsFriendly = (+dps.toFixed(1)).toLocaleString();
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
            <p className="form-control-static" title={'Exact: ' + dpsExact}>{dpsFriendly}</p>
          </FormGroup>
        </Panel>
      </div>
    );
  }
});

module.exports = Weapon;
