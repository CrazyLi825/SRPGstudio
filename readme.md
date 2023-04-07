# SRPGstudio
Plugins for SRPG Studio

This is a collection of whatever plugins I decide to create and share for SRPG Studio. I will also try to give a brief overview of each one added.

| Jugdral Critical Damage Formula (jugdralcrit.js) |

This changes the way the Critical Coefficient is used in the engine. By default, it's just the value times the damage that would have been done normally. In FE4 and FE5, criticals are instead atk X 2 - def. With this plugin, I've changed the formula to atk X critcoefficent - def so if you put a critical coefficient of 200%, you can have it work just like those games or you can augment the attack power by whatever value you'd like.

| Jugdral Accuracy Formula (jugdralhit.js) |

This alters the way hit rate is calculated to be more in line with how it works in FE5 (or FE4 if you ignore stuff like love bonuses). The change makes evade evaluated as Attack Speed x 2 + Luck + Terrain Bonus + Support Bonus (+ any other bonuses they might have that alters this)

| Minimum Damage (mindmg.js) |

This allows you to change the minimum damage an attack can do via a global parameter. By default, the minimum is 0, allowing for no-damage attacks. In Genealogy of the Holy War (as well as Shadows of Valentia), this was not possible and all attacks did at least 1 damage. You can replicate this by adding a {minDamage: 1} Global Parameter.

| Custom Defense (custom-def.js) |

This allows you to define a custom parameter in a weapon to change the target's defense stat for calcuation. Normally, you can only target def or res, but this allows just about any other stat to be used instead. 
Valid values that can be used:
hp = current HP
mhp = max HP
str = strength
mag = magic
skl = skill
spd = speed
luk = luck
mov = movement
wlv = weapon level
bld = build
example: {altdef:"luk"} this would make the weapon target luck.

| Double Terrain Bonus (doubleterrain.js) |

This allows you to put a custom parameter in a class type that will multiply all terrain bonuses for members of that class type, akin to Engage's Covert bonus. Example use: {tbonus: 2} will double the bonuses.

| Ignis (ignis.js) |

This can replicate FE's Ignis (華炎) skill where half of STR gets added to calculation for magic attacks and half of MAG gets added to calculation for physical attacks. To use, create a skill with Custom type and set the keyword to "Ignis".

| Flanking Bonus (flanking_bonus.js)|

This was a project-specific plugin I made that will give a character with a Skill keyworded to "Flanking" a buff to hit and crit for every ally that's adjacent to their targetted enemy. As-is, it gives +10 Hit and +20 Crit per ally.
