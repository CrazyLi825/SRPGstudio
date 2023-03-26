// Custom Defense version 1.0 by CrazyLi825 created on 3/16/2023
// The goal of this plugin is to allow a weapon to target stats other than def/res.
// Add the following custom parameter to a weapon: altdef
// Valid values that can be used:
// hp = current HP
// mhp = max HP
// str = strength
// mag = magic
// skl = skill
// spd = speed
// luk = luck
// mov = movement
// wlv = weapon level
// bld = build
// example: {altdef:"luk"} this would make the weapon target luck.



(function () {

  var alias1 = DamageCalculator.calculateDefense;
  DamageCalculator.calculateDefense = function(active, passive, weapon, isCritical, totalStatus, trueHitValue) {
    var def;


  		if (this.isNoGuard(active, passive, weapon, isCritical, trueHitValue)) {
  			return 0;
  		}

      if (weapon.custom.altdef!=null) {
        if (weapon.custom.altdef=="hp") {
          def = RealBonus.getHp(passive);
        }
        if (weapon.custom.altdef=="mhp") {
          def = RealBonus.getMhp(passive);
        }
        if (weapon.custom.altdef=="str") {
          def = RealBonus.getStr(passive);
        }
        if (weapon.custom.altdef=="mag") {
          def = RealBonus.getMag(passive);
        }
        if (weapon.custom.altdef=="skl") {
          def = RealBonus.getSki(passive);
        }
        if (weapon.custom.altdef=="spd") {
          def = RealBonus.getSpd(passive);
        }
        if (weapon.custom.altdef=="luk") {
          def = RealBonus.getLuk(passive);
        }
        if (weapon.custom.altdef=="mov") {
          def = RealBonus.getMov(passive);
        }
        if (weapon.custom.altdef=="wlv") {
          def = RealBonus.getWlv(passive);
        }
        if (weapon.custom.altdef=="bld") {
          def = RealBonus.getBld(passive);
        }
      } else {

  		if (Miscellaneous.isPhysicsBattle(weapon)) {
  			// Physical attack or Bow attack.
  			def = RealBonus.getDef(passive);
  		}
  		else {
  			// Magic attack
  			def = RealBonus.getMdf(passive);
  		}
    }

  	def += CompatibleCalculator.getDefense(passive, active, ItemControl.getEquippedWeapon(passive)) + SupportCalculator.getDefense(totalStatus);

  	return def;
	}

})();
