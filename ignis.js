/*
Ignis
Script by CrazyLi825
Version: 1.0 (1/9/2023)

This basically recreates the Ignis (華炎) skill from Awakening & Fates.
Upon activation, when attacking when a physical weapon, half the user's Mag gets added to the damage
and when attacking with a magical weapon, half the user's Str gets added to the damage.

To use, create a skill with Custom type and set the keyword to "Ignis".
*/

(function() {

	var Ignis1 = SkillRandomizer.isCustomSkillInvokedInternal;
	SkillRandomizer.isCustomSkillInvokedInternal = function(active, passive, skill, keyword) {
		if (keyword === "Ignis"){
			return this._isSkillInvokedInternal(active, passive, skill);
		}
		return Ignis1.call(this, active, passive, skill, keyword);
	};

	var Ignis2 = AttackEvaluator.HitCritical.calculateDamage;
	AttackEvaluator.HitCritical.calculateDamage = function(virtualActive, virtualPassive, attackEntry){
		var damage = Ignis2.call(this, virtualActive, virtualPassive, attackEntry);
		var active = virtualActive.unitSelf;
		var passive = virtualPassive.unitSelf;
		var Skill = SkillControl.checkAndPushCustomSkill(active, passive, attackEntry, true, "Ignis");
		if (Skill !== null){
			var weapon = ItemControl.getEquippedWeapon(active);
			if (Miscellaneous.isPhysicsBattle(weapon)){
				var extra = Math.floor(RealBonus.getMag(active)/2);
			}
			else{
				var extra = Math.floor(RealBonus.getStr(active)/2);
			}
			damage += extra;
		}
		return damage;
	};
}) ();
