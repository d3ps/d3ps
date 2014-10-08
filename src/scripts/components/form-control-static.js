/** @jsx React.DOM */

var FormControlStatic = React.createClass({
  render: function () {
    var precision = +this.props.precision,
        exact = this.props.value.toLocaleString(),
        rounded = (+this.props.value.toFixed(precision)).toLocaleString();
    return (
      <p className="form-control-static" title={'Exact: ' + exact + ' ' + this.props.name}>{rounded}</p>
    );
  }
});

module.exports = FormControlStatic;
