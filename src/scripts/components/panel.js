/** @jsx React.DOM */

var Panel = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.heading}</div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Panel;
