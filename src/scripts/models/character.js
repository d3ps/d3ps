var Character = (function () {
  var stats = {
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
  };


  function Character(state) {
    if (state) {
      Object.keys(state).forEach(function (key) {
        this[key] = state[key];
      }, this);
    }
  }


  Object.keys(stats).forEach(function (key) {
    var field = '_' + key;
    Object.defineProperty(Character.prototype, key, {
      get: function () {
        if (field in this) {
          return this[field];
        } else {
          return stats[key];
        }
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


  function dps(min, max, aps) {
    return aps * (min + max) / 2.0;
  }

  function pct(n) {
    return n * 0.01;
  }


  return Character;
})();

module.exports = Character;
