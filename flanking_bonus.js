/*
Flanking Bonus
Script by CrazyLi825
Version: 1.0 (4/1/2023)

This plugin gives a bonus to hit and crit to the skill possesser for every ally that is adjacent to the target enemy.
As written, it's +10 hit and +20 crit, but these numbers can be manually modified by changing the values of lines 36 & 69.

To use, create a skill with Custom type and set the keyword to "Flanking".
*/

HitCalculator.calculateHit = function(active, passive, weapon, activeTotalStatus, passiveTotalStatus) {

  var hit, avoid, percent;
  if (root.isAbsoluteHit()) {
    if (passive.isImmortal()) {
      // If the opponent is immortal, hit rate cannot be 100%.
      return 99;
    }
    return 100;
  }

  hit = this.calculateSingleHit(active, passive, weapon, activeTotalStatus);
  avoid = this.calculateAvoid(active, passive, weapon, passiveTotalStatus);

  var skill = SkillControl.getPossessionCustomSkill(active, "Flanking"); //check if unit possesses a skill with Flanking bonus keyword
  if (skill !== null && unit !== active) {
    var positions = IndexArray.getBestIndexArray(passive.getMapX(), passive.getMapY(), 1, 1);
    for (i = 0; i < 4; i++) {
      var spaceX = CurrentMap.getX(positions[i]);
      var spaceY = CurrentMap.getY(positions[i]);
      var unit = PosChecker.getUnitFromPos(spaceX, spaceY);
      if (unit !== null) {
        var unitType = unit.getUnitType();
        if (unitType === UnitType.PLAYER) {
          hit += 10;
        }
      }
    }
  }

  percent = hit - avoid;

  return this.validValue(active, passive, weapon, percent);

}

CriticalCalculator.calculateCritical = function(active, passive, weapon, activeTotalStatus, passiveTotalStatus) {

  var critical, avoid, percent;

  if (!this.isCritical(active, passive, weapon)) {
    return 0;
  }

  critical = this.calculateSingleCritical(active, passive, weapon, activeTotalStatus);
  avoid = this.calculateCriticalAvoid(active, passive, weapon, passiveTotalStatus);

  var skill = SkillControl.getPossessionCustomSkill(active, "Flanking"); //check if unit possesses a skill with Flanking bonus keyword
  if (skill !== null) {
    var positions = IndexArray.getBestIndexArray(passive.getMapX(), passive.getMapY(), 1, 1);
    for (i = 0; i < 4; i++) {
      var spaceX = CurrentMap.getX(positions[i]);
      var spaceY = CurrentMap.getY(positions[i]);
      var unit = PosChecker.getUnitFromPos(spaceX, spaceY);
      if (unit !== null && unit !== active) {
        var unitType = unit.getUnitType();
        if (unitType === UnitType.PLAYER) {
          critical += 20;
        }
      }
    }
  }

  percent = critical - avoid;

  return this.validValue(active, passive, weapon, percent);

}
