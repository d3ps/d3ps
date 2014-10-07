/** @jsx React.DOM */

var Definition = React.createClass({
  render: function () {
    var precision = +this.props.precision,
        exact = this.props.value.toLocaleString(),
        rounded = (+this.props.value.toFixed(precision)).toLocaleString();
    return (
      <dd title={'Exact: ' + exact}>{rounded}</dd>
    );
  }
});

module.exports = Definition;
