# SRPGstudio
Plugins for SRPG Studio

This is a collection of whatever plugins I decide to create and share for SRPG Studio. I will also try to give a brief overview of each one added.

| Jugdral Critical Formula (jugdralcrit.js) |

This re-writes the battle formula of the game to match that of the Jugdral games (Genealogy of the Holy War and Thracia 776). Unlike the standard FE system of 3 times whatever the regular damage would be, these games have a unique formula where the attacker's ATK gets doubled before the defender's DEF is subtracted from it. Let's use 3 scenarios to better explain this...

Scenario 1: Attacker's ATK = 10, Defender's DEF = 5

In this case, both systems would function the same. A regular attack would do 5 damage and a crit would do 15. Standard FE would be 3*5=15 and Jugdral would be 20-5=15

Scenario 2: Attacker's ATK = 12, Defender's DEF = 5

In this case, standard FE would be 7*3 or 21 damage for the crit. Jugdral would be 24-5 or 19 for the crit, meaning standard FE would be higher crit damage here.

Scenario 3: Attacker's ATK = 8, Defender's DEF = 5

Here, standard FE crit would be 3*3 or 9 damage. Jugdral crit would be 16-5 or 11 damage, making the Jugdral version come out ahead.

Essentially, this makes crits at lower gaps between ATK and DEF more impressive at the trade-off of muting those at higher gaps.

This script could be improved if I decide to fine-tune it to be better customizable, but it's bare-bones at the moment. I added some additional code (lines 32-34) that prevent critical hits from doing 0 damage. This is because in Genealogy of the Holy War, no attacks can do 0 damage and are capped at a minimum of 1. Since this script is aimed to only change how criticals work, I limited the code to crits only. If you want to fully replicate Genealogy's damage formula, you will need to move these lines past the } on line 35 so it applies to everything. In Thracia, they removed this cap and attacks can do 0 damage again, including crits. If you would like to allow 0-damage crits, comment out the lines 32-34 from the code.

Since this script overwrites the damage calculator, it will be incompatible with any other plugin that does the same. You may need to merge the changes together into one plugin for it to work.
