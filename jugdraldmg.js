/*
Fire Emblem: Genealogy of the Holy War style damage calculator
Script by CrazyLi825
Version: 1.1 (6/2/2022)

This script changes the battle damage calculator to be more in line with the one from Genealogy of the Holy War.
For proper Genealogy settings, make your Critical Coefficient 200% and add the following Global Parameter:
{minDamage: 1}

With these settings, no attack will do less than 1 damage and all criticals will use the Genealogy/Thracia formula
of Attack Power * 2 - Defense.

If you wish to change values, you can set minDamage to whatever number you want damage to cap to at minimum (0 for standard FE).
You can also change your Critical Coefficient to alter the multiplier to the attacker's ATK Power before the defender's DEF is subtracted.

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

  var dmgFloor = root.getMetaSession().global.minDamage;
  if (damage < dmgFloor) {
    damage =  dmgFloor;
  }

  return this.validValue(active, passive, weapon, damage);
}
