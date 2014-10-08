var Character = (function () {
  var DEFAULT_STATS = {
        weapon1MinDamage: 1343,
        weapon1MaxDamage: 1841,
        weapon1AttacksPerSecond: 1.47,
        weapon2MinDamage: 1287,
        weapon2MaxDamage: 1763,
        weapon2AttacksPerSecond: 1.4,
        primaryAttribute: 7490,
        attackSpeed: 46.4,
        critChance: 41.5,
        critDamage: 423,
        passiveDamage: 8,
        elementalDamage: 54,
        eliteDamage: 0
      },
      PROPERTIES = [
        'weapon1DPS',
        'weapon2DPS',
        'attacksPerSecond',
        'sheetDamage',
        'sheetElementalDamage',
        'eliteElementalDamage'
      ];


  function Character(name, stats) {
    this.name = name;
    Object.keys(DEFAULT_STATS).forEach(function (stat) {
      this['_' + stat] = stats['_' + stat];
    }, this);
  }


  Character.load = function (name) {
    name = name || 'default';

    var stats = DEFAULT_STATS;
    if (localStorageSupport()) {
      var saved = localStorage['character_' + name];
      if (saved) {
        stats = JSON.parse(saved);
      }
    }

    return new Character(name, stats);
  };


  Character.prototype.save = function () {
    if (localStorageSupport()) {
      localStorage['character_' + this.name] = JSON.stringify(this);
    }
  };

  Character.prototype.asStatic = function () {
    var s = {};
    Object.keys(DEFAULT_STATS).forEach(function (stat) {
      s[stat] = this[stat];
    }, this);
    PROPERTIES.forEach(function (prop) {
      s[prop] = this[prop];
    }, this);
    return s;
  };


  Object.keys(DEFAULT_STATS).forEach(function (stat) {
    var field = '_' + stat;
    Object.defineProperty(Character.prototype, stat, {
      get: function () {
        return this[field];
      },
      set: function (value) {
        this[field] = +value;
      }
    });
  });

  Object.defineProperty(Character.prototype, 'weapon1DPS', {
    get: function () {
      return dps(
        this.weapon1MinDamage,
        this.weapon1MaxDamage,
        this.weapon1AttacksPerSecond);
    }
  });

  Object.defineProperty(Character.prototype, 'weapon2DPS', {
    get: function () {
      return dps(
        this.weapon2MinDamage,
        this.weapon2MaxDamage,
        this.weapon2AttacksPerSecond);
    }
  });

  Object.defineProperty(Character.prototype, 'attacksPerSecond', {
    get: function () {
      if (this.weapon2AttacksPerSecond > 0) {
        var a = this.weapon1AttacksPerSecond,
            b = this.weapon2AttacksPerSecond;
        return (2 * a * b) / (a + b);
      } else {
        return this.weapon1AttacksPerSecond;
      }
    }
  });

  Object.defineProperty(Character.prototype, 'sheetDamage', {
    get: function () {
      var s = 1 + pct(this.primaryAttribute),
          c = 1 + (pct(this.critChance) * pct(this.critDamage)),
          r = (1 + pct(this.attackSpeed)) * this.attacksPerSecond,
          a = (+this.weapon1MinDamage + +this.weapon1MaxDamage + +this.weapon2MinDamage + +this.weapon2MaxDamage) / (this.weapon2AttacksPerSecond ? 4.0 : 2.0),
          m = 1 + pct(this.passiveDamage);
      return s * c * r * a * m;
    }
  });

  Object.defineProperty(Character.prototype, 'sheetElementalDamage', {
    get: function () {
      return this.sheetDamage * (1 + pct(this.elementalDamage));
    }
  });

  Object.defineProperty(Character.prototype, 'eliteElementalDamage', {
    get: function () {
      return this.sheetElementalDamage * (1 + pct(this.eliteDamage));
    }
  });


  function localStorageSupport() {
    try {
      localStorage.setItem('x', 'x');
      localStorage.removeItem('x');
      return 'JSON' in window && 'parse' in JSON && 'stringify' in JSON;
    } catch (e) {
      return false;
    }
  }

  function dps(min, max, aps) {
    return aps * (min + max) / 2.0;
  }

  function pct(n) {
    return n * 0.01;
  }


  return Character;
})();

module.exports = Character;
