/*
Fire Emblem: Thracia-style hit calculator
Script by CrazyLi825
Version: 1.0 (10/9/2022)

This script just makes hit rates use Thracia caluclations

*/

AbilityCalculator.getHit = function(unit, weapon) {
  // Hit Rate = Weapon Accuracy + Skill x 2 + Luck
  return weapon.getHit() + (RealBonus.getSki(unit) * 2) + (RealBonus.getLuk(unit));

}

AbilityCalculator.getAvoid = function(unit) {
  // Avoid = Attack Speed x 2 + Luck + Terrain Bonus
  var avoid, terrain;
  var cls = unit.getClass();

  avoid = RealBonus.getSpd(unit) * 2 + (RealBonus.getLuk(unit));

  // If class type gains terrain bonus, add the avoid rate of terrain.
  if (cls.getClassType().isTerrainBonusEnabled()) {
    terrain = PosChecker.getTerrainFromPos(unit.getMapX(), unit.getMapY());
    if (terrain !== null) {
      avoid += terrain.getAvoid();
    }
  }

  return avoid;
}

}
