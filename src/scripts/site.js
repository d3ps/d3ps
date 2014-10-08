(function () {
  'use strict';

  var Character = require('./models/character'),
      Page = require('./components/page');

  var character = Character.load(),
      stats = character.asStatic(),
      page = null;


  function render() {
    stats.handleChange = handleChange;
    React.renderComponent(
      new Page(stats),
      document.getElementById('container'));
  }

  function handleChange(e) {
    var stat = e.target.id,
        value = e.target.value;

    if (value.indexOf('.', value.length - 1) >= 0) {
      stats[stat] = value;
    } else {
      character[stat] = value;
      character.save();
      stats = character.asStatic();
    }
    render();
  }

  render();
})();
