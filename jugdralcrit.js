/*
Jugdral Crit
Script by CrazyLi825
Version: 1.1 (6/2/2022)

This script modifies how critical damage is calculated so you can replicate the style of Genealogy/Thracia.
For proper Jugdral settings, make your Critical Coefficient 200% (otherwise, it'll do 3x atk pow instead)

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

    damage = Math.floor(pow * this.getCriticalFactor()) - def;

  }



  return this.validValue(active, passive, weapon, damage);
}
