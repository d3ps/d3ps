/** @jsx React.DOM */

var FormGroup = React.createClass({
  render: function () {
    return (
      <div className="form-group">
        <label for={this.props.for} className="col-sm-3 col-md-5 col-lg-4 control-label">{this.props.label}</label>
        <div className="col-sm-9 col-md-7 col-lg-8">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = FormGroup;
