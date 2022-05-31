/*
Script by CrazyLi825
Version: 1.0 (5/31/2022)

By default, this emulates the Critical Damage system of Fire Emblem Genealogy of the Holy War, where no crits can do less than 1 damage.
In Thracia 776, the formula is the same, but 0 damage crits are possible. If you prefer Thracia style, comment out lines 32-34.
Genealogy also had regular attack damage with a minimum of 1. If you wish to replicate that as well, you can move lines 32-34 to
after line 35 so it applies to the entire damage calculation.

 */

DamageCalculator.calculateDamage = function(active, passive, weapon, isCritical, activeTotalStatus, passiveTotalStatus, trueHitValue) {
  var pow, def, damage;

  if (this.isHpMinimum(active, passive, weapon, isCritical, trueHitValue)) {
    return -1;
  }

  pow = this.calculateAttackPower(active, passive, weapon, isCritical, activeTotalStatus, trueHitValue);
  def = this.calculateDefense(active, passive, weapon, isCritical, passiveTotalStatus, trueHitValue);

  damage = pow - def;
  if (this.isHalveAttack(active, passive, weapon, isCritical, trueHitValue)) {
    if (!this.isHalveAttackBreak(active, passive, weapon, isCritical, trueHitValue)) {
      damage = Math.floor(damage / 2);
    }
  }

  if (this.isCritical(active, passive, weapon, isCritical, trueHitValue)) {

    damage = (pow * 2) - def;
    if (damage < 1) {
      damage = 1;
    }
  }

  return this.validValue(active, passive, weapon, damage);
}
