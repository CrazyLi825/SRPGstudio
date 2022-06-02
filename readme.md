# SRPGstudio
Plugins for SRPG Studio

This is a collection of whatever plugins I decide to create and share for SRPG Studio. I will also try to give a brief overview of each one added.

| Jugdral Damage Formula (jugdraldmg.js) |

This is a customizable script allowing you to replicate battle damage more inline with the Jugdral games (Genealogy and Thracia).
The main change is how critical damage is coded. In these games, it is the attacker's power multiplied by 2 and then the defender's defense
is subtracted from that. This plugin uses the Critical Coefficient to determine the multiplier, so you will need to change it to 200% if you
wish to properly use the formula from the games. Of course, you can change this to whatever you want to alter how strong crits are.

There is also a minimum damage option as in Genealogy, all damage had a floor cap of 1. To implement this, add a global parameter of:
{minDamage:1}

If you want a different minimum, you can replace 1 with any other number. If you do not use the parameter, it will floor at 0 like normal.
