/*
Double Terrain Bonus
Script by CrazyLi825
Version: 1.0 (1/15/2023)

This script will allow class types to have modifiers on terrain bonuses. Example use:
{tbonus: 2} // doubles terrain bonuses for this class type

*/

AbilityCalculator.getAvoid = function(unit) {
  var avoid, terrain;
  var cls = unit.getClass();

  // Avoid is (Spd * 2)
  avoid = RealBonus.getSpd(unit) * 2 + (RealBonus.getLuk(unit));

  // If class type gains terrain bonus, add the avoid rate of terrain.
  if (cls.getClassType().isTerrainBonusEnabled()) {
    terrain = PosChecker.getTerrainFromPos(unit.getMapX(), unit.getMapY());
    if (terrain !== null) {
      var tbonus = cls.getClassType().custom.tbonus;
      if (tbonus == null) {
        tbonus = 1;
      }
      avoid += terrain.getAvoid() * tbonus;
    }
  }

  return avoid;
}

RealBonus.getDef = function(unit) {
  var def, terrain;
  var cls = unit.getClass();

  // If class type gains terrain bonus, add the avoid rate of terrain.
  if (cls.getClassType().isTerrainBonusEnabled()) {
    terrain = PosChecker.getTerrainFromPos(unit.getMapX(), unit.getMapY());
    if (terrain !== null) {
      var tbonus = cls.getClassType().custom.tbonus;
      if (tbonus == null) {
        tbonus = 1;
      }
      def = terrain.getDef() * tbonus;
    }
  }

  return ParamBonus.getDef(unit) + def;
}
