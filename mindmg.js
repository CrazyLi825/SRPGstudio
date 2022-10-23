/*
Minimum Damage
Script by CrazyLi825
Version: 1.1 (6/2/2022)

This script is designed to allow you to set a minimum amount of damage that all attacks must do.
It's intended for replicated Genealogy of the Holy War, not allowing 0-damage attacks and instead having a min cap of 1.
To use this plugin, you must set a the Global Parameter of minDamage. (e.g.: {minDamage: 1})
For proper Genealogy settings, make your Critical Coefficient 200% and add the following Global Parameter:
{minDamage: 1}
*/


DamageCalculator.validValue = function(active, passive, weapon, damage) {
  var dmgFloor = root.getMetaSession().global.minDamage;
  if (damage < dmgFloor) {
    damage = dmgFloor;
  }

  return damage;
}
