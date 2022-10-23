# SRPGstudio
Plugins for SRPG Studio

This is a collection of whatever plugins I decide to create and share for SRPG Studio. I will also try to give a brief overview of each one added.

| Jugdral Critical Damage Formula (jugdralcrit.js) |

This changes the way the Critical Coefficient is used in the engine. By default, it's just the value times the damage that would have been done normally. In FE4 and FE5, criticals are instead atk*2-def. With this plugin, I've changed the formula to atk*critcoefficent-def so if you put a critical coefficient of 200%, you can have it work just like those games or you can augment the attack power by whatever value you'd like.

| Jugdral Accuracy Formula (jugdralhit.js) |

This alters the way hit rate is calculated to be more in line with how it works in FE5 (or FE4 if you ignore stuff like love bonuses).

| Minimum Damage (mindmg.js) |

This allows you to change the minimum damage an attack can do via a global parameter. By default, the minimum is 0, allowing for no-damage attacks. In Genealogy of the Holy War (as well as Shadows of Valentia), this was not possible and all attacks did at least 1 damage. You can replicate this by adding a {minDamage: 1} Global Parameter.
