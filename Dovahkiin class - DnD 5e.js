var iFileName = "Dovahkiin Class.js";
RequiredSheetVersion("13.0.9");

ClassList["dovahkiin"] = {
	regExpSearch : /dovahkiin/i,
	name : "Dovahkiin",
	source : ["HB", 1],
	primaryAbility : "\n • Dovahkiin: Strength or Dexterity;",
	prereqs : "\n • Dovahkiin: Strength or Dexterity 13;",
	die : 10,
	improvements : [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
	saves : ["Con", "Dex"],
	skills : ["\n\n" + toUni("Dovahkiin") + ": Choose two from Acrobatics, Arcana, Athletics, Intimidation, Persuasion, Religion, Stealth, Survival."],
	toolProfs : { primary : [["Cook's utensils"], ["Leatherworker's tools"]] },
	armor : [ [true, true, false, true], [true, true, false, true] ],
	weapons : [ [true, false, ["greatsword", "maul", "greataxe"]], [true, false, ["greatsword", "maul", "greataxe"]] ],
	equipment : "Dovahkiin starting equipment:\n • (a) scale mail or (b) leather armor\n • (a) a greatsword or (b) a maul or (c) a greataxe\n • (a) a dungeoneer’s pack or (b) an explorer’s pack\n • Cook’s utensils and leatherworker’s tools\n\nAlternatively, choose 5d4 × 10 gp worth of starting equipment instead of the class’ and background’s starting equipment.",
	subclasses : ["Guardian", ["guardian of the nightingale", "guardian of the college", "guardian of the companions"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {

	"dragons soul" : {
	    name : "Dragon's soul",
	    source : ["HB", 1],
	    minlevel : 1,
	    description : desc("I have the soul of a mighty dragon, that these creature requicnise in me. This soul allows me to talk/read their language; absorb their soul and use the  	    Thu'um."),
	    languageProfs : ["Draconic"]
	},

        "shout charge" : {
            name : "Shout Charge",
            minlevel : 2,
            source : ["HB", 1],
            description : desc([
                			"I can spend Shout Charges to use my Thu'um as a bonus action (see third page)",
					"Regain all charges on a short or long rest."
            ]),
            limfeaname : "Shout Charges",
            usages : levels.map(function (n) { return n < 2 ? 0 : n; }),
            recovery : "short rest",
            additional : levels.map(function (n) {
                return n < 2 ? "" : n + " Shout Charges";
            }),
"unrelenting force" : {
		name : "Unrelenting Force",
		extraname : "Thu'um Feature",
		source : ["HB", 1],
		description : "\n  Your Voice is raw power, pushing aside anything - or anyone - who stands in your path." +
			      "\n  • FUS (lvl 2, 1 charge): Creatures up to your size in 15 ft cone pushed back 5 ft." +
			      "\n  • FUS RO (lvl 5, 2 charges): Creatures up top 1 size larger in 20 ft cone pushed 10 ft." +
			      "\n  • FUS RO DAH (lvl 8, 3 charges): Creatures up to  2 sizes larger in 20 ft cone pushed 10 ft; Con save or prone.\n"
	},

				autoSelectExtrachoices : [{
					extrachoice : "unrelenting force"
				}],
        },

        "dragons thu um (shout)" : {               name : "Dragons Thu'um (Shout)",
            minlevel : 2,
            source : [["SRD", 27], ["P", 78]],
            description : desc([
                "As a bonus action, you can spend a Shout Charge to yell out your Thu'um." +
                "A Thu'um has 1 to 3 words, using a charge for every word shouted." +
                "This isn't a spell, and cannot (usually) be used when silenced.",

            ]),
            action : [["bonus action", ""]],
            additional : "1 Shout Charge"
        },
	



        "words of power" : {
            name : "Words of Power",
            minlevel : 4,
            source : ["HB", 1],
            description : desc([
                'Use the "Choose Feature" button above to learn Words of Power and gain access to Dragon Thu\'um shouts. If a dragon dies within 600 ft, you get a permanent +1 to words known (track manually).'
            ]),
            additional : levels.map(function (n) {
                return n < 4 ? "" :
                       n < 7 ? "1 Word known" :
                       n < 9 ? "2 Words known" :
                       n < 11 ? "3 Words known" :
                       n < 13 ? "4 Words known" :
                       n < 15 ? "5 Words known" :
                       n < 17 ? "6 Words known" :
                       n < 19 ? "7 Words known" :
                       n < 20 ? "8 Words known" :
                       "9 Words known";
            }),
            extraname : "Word of Power",
            extrachoices : [
                "whirlwind sprint wuld",
                "whirlwind sprint wuld nah (prereq: wuld)",
                "whirlwind sprint wuld nah kest (prereq: wuld nah)",
		"disarm zun",
		"disarm zun haal (prereq: zun)",
		"disarm zun haal viik (prereq: zun haal)",
        	"throw voice zul (guardian of the nightingale)",
		"throw voice zul mey (prereq: zul)",
		"throw voice zul mey gut (prereq: zul mey)",
        	"battle fury mid (guardian of the companions)",
        	"battle fury mid vur (prereq: mid)",
        	"battle fury mid vur shaan (prereq: mid vur)",
		"ice form liz (guardian of the college)",
		"ice form liz slen (prereq: liz)",
		"ice form liz slen nus (prereq: liz slen)",
        	"dragonrend joor",
        	"dragonrend joor zah (prereq: joor)",
        	"dragonrend joor zah frul (prereq: joor zah)",
		"dragon aspect mul",
		"dragon aspect mul qah (prereq: mul)",
		"dragon aspect mul qah diiv (prereq: mul qah)",
            ],
            extraTimes : levels.map(function (n) {
                return n < 4 ? 0 :
                       n < 7 ? 1 :
                       n < 9 ? 2 :
                       n < 11 ? 3 :
                       n < 13 ? 4 :
                       n < 15 ? 5 :
                       n < 17 ? 6 :
                       n < 19 ? 7 :
                       n < 20 ? 8 : 9;
            }),
            "whirlwind sprint wuld" : {
                name : "Whirlwind Sprint – WULD",
                description : desc([
                    "(1 charge) The Thu'um rushes you forward, carrying you in its wake with the speed of a tempest." + 
		    "you take the Dash action this turn."
                ]),
                source : ["HB", 0],
                submenu : "[Whirlwind Sprint]",
            },
            "whirlwind sprint wuld nah (prereq: wuld)" : {
                name : "Whirlwind Sprint – WULD NAH",
                description : desc([
                    "(2 charges) You take the Dash and Disengage actions this turn."
                ]),
                source : ["HB", 0],
                submenu : "[Whirlwind Sprint]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("whirlwind sprint wuld") !== -1;
    }
            },
            "whirlwind sprint wuld nah kest (prereq: wuld nah)" : {
                name : "Whirlwind Sprint – WULD NAH KEST",
                description : desc([
                    "(3 charges) As a bonus action, Dash + Disengage this turn." +
                    "The effect lasts 2 turns total without using a bonusaction or charge.",
                ]),
                source : ["HB", 0],
                submenu : "[Whirlwind Sprint]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("whirlwind sprint wuld nah (prereq: wuld)") !== -1;
    }
            },
		"disarm zun" : {
                name : "Disarm – ZUN",
                description : desc([
                    "(1 charge) Shout defies steel, as you rip the weapon from an opponent's grasp." +
		    "A creature within 60-ft of you rolls a con save. On a fail the target drops whatever it is holding."
                ]),
                source : ["HB", 0],
                submenu : "[Disarm]",
            },
            	"disarm zun haal (prereq: zun)" : {
                name : "Disarm – ZUN HAAL",
                description : desc([
                    "(2 charges) 3 creature within 60-ft of you rolls a con save. On a fail the target drops whatever it is holding."
                ]),
                source : ["HB", 0],
                submenu : "[Disarm]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("disarm zun") !== -1;
    }
            },
            	"disarm zun haal viik (prereq: zun haal)" : {
                name : "Disarm – ZUN HAAL VIIK",
                description : desc([
                    "(3 charges) 3 creature within 60-ft of you rolls a con save with disadvantage. On a fail the target drops whatever it is holding."
                ]),
                source : ["HB", 0],
                submenu : "[Disarm]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("disarm zun haal (prereq: zun)") !== -1;
    }
            },
		"throw voice zul (guardian of the nightingale)" : {
                name : "Throw Voice – ZUL",
                description : desc([
                    "(1 charge) The Thu'um is heard, but its source unknown, fooling those into seeking it out." +
		    "You create a non-magical sound on a point you can see up to 30ft away, its volume can range from a whisper to a scream." +
		    "This sounds like you saying the word of power, and might attract attention."

                ]),
                source : ["HB", 0],
                submenu : "[Throw Voice (Level 11)]",
		prereqeval : function(v) {
        var subclass = classes.known.dovahkiin.subclass || "";
        var hasCorrectSubclass = /guardian of the nightingale/i.test(subclass);
        // Check level 11+
        var hasLevel = classes.known.dovahkiin && classes.known.dovahkiin.level >= 11;

        return hasCorrectSubclass && hasLevel;
    }
            },
            	"throw voice zul mey (prereq: zul)" : {
                name : "Throw Voice – ZUL MEY",
                description : desc([
                    "(2 charges) You create a non-magical sound on a point you can see up to 40ft away, its volume can range from a whisper to a scream." +
		    "The end point can be directly on the other side of a standard wall, closed door, etc. but not further."

                ]),
                source : ["HB", 0],
                submenu : "[Throw Voice (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("throw voice zul (guardian of the nightingale)") !== -1;
    }
            },
            	"throw voice zul mey gut (prereq: zul mey)" : {
                name : "Throw Voice – ZUL MEY GUT",
                description : desc([
                    "(2 charges) You create a non-magical sound on a point you can see up to 50ft away, its volume can range from a whisper to a scream." +
		    "The end point can be directly on the otherside of a standard wall, closed door, etc. but not further." +
		    "Can be shouted from a silenced area, but its end point can't be. Otherwise it won't be heard or attract attention."

                ]),
                source : ["HB", 0],
                submenu : "[Throw Voice (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("throw voice zul mey (prereq: zul)") !== -1;
    }
            },
		"battle fury mid (guardian of the companions)" : {
                name : "Battle Fury – MID",
                description : desc([
                    "(1 charge) Your Thu'um enchants your nearby allies' weapons, allowing them to attack faster." +
		    "Allies in a 15-ft radius gain +15 current/max HP for the encounter."
                ]),
                source : ["HB", 0],
                submenu : "[Battle Fury (Level 11)]",
		prereqeval : function(v) {
       	 // Check if the correct subclass is selected
        var subclass = classes.known.dovahkiin.subclass || "";
        var hasCorrectSubclass = /guardian of the companions/i.test(subclass);
        var hasLevel = classes.known.dovahkiin && classes.known.dovahkiin.level >= 11;

        return hasCorrectSubclass && hasLevel;
    }
            },
            	"battle fury mid vur (prereq: mid)" : {
                name : "Battle Fury – MID VUR",
                description : desc([
                    "(2 charges) You and your allies in a 20-ft radius gain an extra attack when taking the Attack action for one turn."
                ]),
                source : ["HB", 0],
                submenu : "[Battle Fury (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("battle fury mid (guardian of the companions)") !== -1;
    }
            },
            	"battle fury mid vur shaan (prereq: mid vur)" : {
                name : "Battle Fury – MID VUR SHAAN",
                description : desc([
                    "(3 charges) You and your allies in a 10-ft radius gain an extra action for one turn."
                ]),
                source : ["HB", 0],
                submenu : "[Battle Fury (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("battle fury mid vur (prereq: mid)") !== -1;
    }
            },
		"ice form liz (guardian of the college)" : {
                name : "Ice Form – LIZ",
                description : desc([
                    "(1 charge) Your Thu'um freezes an opponent solid." +
		    "all creatures in a 15-ft cone roll a con save. on a fail their movement speed is halved until the end of their next turn."
                ]),
                source : ["HB", 0],
                submenu : "[Ice Form (Level 11)]",
		prereqeval : function(v) {
        var subclass = classes.known.dovahkiin.subclass || "";
        var hasCorrectSubclass = /guardian of the college/i.test(subclass);
        var hasLevel = classes.known.dovahkiin && classes.known.dovahkiin.level >= 11;

        return hasCorrectSubclass && hasLevel;
    }
            },
                "ice form liz slen (prereq: liz)" : {
                name : "Ice Form – LIZ SLEN",
                description : desc([
                    "(2 charges) all creatures in a 15-ft cone roll a con save. On a fail their movement speed is 0 for 5 turns, even if they dash."+
		    "At the end of their turn they can roll another con save. On a succes their movement speed is normal again."
                ]),
                source : ["HB", 0],
                submenu : "[Ice Form (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("ice form liz (guardian of the college)") !== -1;
    }
            },
                "ice form liz slen nus (prereq: liz slen)" : {
                name : "Ice Form – LIZ SLEN NUS",
                description : desc([
                    "(3 charges) all creatures in a 15-ft cone roll a con save. On a fail they are stunned for 5 turns."+
		    "At the end of their turn or if hit with fire they can roll another con save. On a succes the creature is not stunned anymore."
                ]),
                source : ["HB", 0],
                submenu : "[Ice Form (Level 11)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("ice form liz slen (prereq: liz)") !== -1;
    }
            },


		"dragonrend joor" : {
                name : "Dragonrend – JOOR",
                description : desc([
                    "(1 charge) Your Voice lashes out at a dragon's very soul, forcing the beast to land." +
		    "Dragons, Dragonborn, Draconic Bloodline Sorcerers in 25-ft radius are grounded (no fly) for 2 turns."
                ]),
                source : ["HB", 0],
                submenu : "[Dragonrend (Level 17)]",
		prereqeval : function(v) {
        	return classes.known.dovahkiin && classes.known.dovahkiin.level >= 17;
    		}
            },
		"dragonrend joor zah (prereq: joor)" : {
                name : "Dragonrend – JOOR ZAH",
                description : desc([
                    "(2 charges) Dragons, Dragonborn, Draconic Bloodline Sorcerers in 25-ft radius are grounded (no fly) for 2 turns" +
		    "and they must make a Wis save or be stunned for 1 turn."
                ]),
                source : ["HB", 0],
                submenu : "[Dragonrend (Level 17)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("dragonrend joor") !== -1;
    		}
            },
		"dragonrend joor zah frul (prereq: joor zah)" : {
                name : "Dragonrend – JOOR ZAH FRUL",
                description : desc([
                    "(3 charges) Dragons, Dragonborn, Draconic Bloodline Sorcerers in 25-ft radius are grounded (no fly);" +
		    "cannot use breath weapons and they must make a Wis save or be stunned for 2 turn." +
		    "Reroll at the end of their turn to break free."
                ]),
                source : ["HB", 0],
                submenu : "[Dragonrend (Level 17)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("dragonrend joor zah (prereq: joor)") !== -1;
    		}
            },
		"dragon aspect mul" : {
                name : "Dragon Aspect – MUL",
                description : desc([
                    "(1 charge) Take on the mighty aspect of a dragon, delivering colossal blows, with an armored hide, and spectral wings." +
		    "This shout requires concentration, and its affects disappear	 when it's broken. Lasts for 1 minute."+
		    "Your attacks and spells do an extra 1d4 damage in the attacks primary damage type."
                ]),
                source : ["HB", 0],
                submenu : "[Dragon Aspect (Level 17)]",
		prereqeval : function(v) {
        	return classes.known.dovahkiin && classes.known.dovahkiin.level >= 17;
    		}
            },
		"dragon aspect mul qah (prereq: mul)" : {
                name : "Dragon Aspect – MUL QAH",
                description : desc([
                    "(2 charges) This shout requires concentration, and its affects disapear when it's broken. Lasts for 1 minute." +
		    "Your attacks and spells do an extra 1d6 damage in the attacks primary damage type and you get a +3 in AC and (spell) saves."
                ]),
                source : ["HB", 0],
                submenu : "[Dragon Aspect (Level 17)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("dragon aspect mul") !== -1;
    		}
            },
		"dragon aspect mul qah diiv (prereq: mul qah)" : {
                name : "Dragon Aspect – MUL QAH DIIV",
                description : desc([
                    "(2 charges) This shout requires concentration, and its affects disapear when it's broken. Lasts for 1 minute." +
		    "Your attacks and spells do an extra 2d4 damage in the attacks primary damage type;" +
		    "a +5 in AC and (spell) saves and can fly up to your movement speed."
                ]),
                source : ["HB", 0],
                submenu : "[Dragon Aspect (Level 17)]",
                prereqeval : function (v) {
        var selected = GetFeatureChoice("class", "dovahkiin", "words of power", true);
        return selected && selected.indexOf("dragon aspect mul qah (prereq: mul)") !== -1;
    		}
            },

        }
    }
};



ClassSubList["guardian of the college"] = {
    regExpSearch : /^(?=.*guardian)(?=.*college).*$/i,
    subname : "Guardian of the College",
    source : ["HB", 1],
    class : "dovahkiin",
    fullname : "Dovahkiin (Guardian of the College)",
    spellcastingAbility : 4, // Intelligence
    spellcastingFactor : 1, //Full Caster
    spellcastingList : {
	spells : [
            "fire bolt", "ray of frost", "shocking grasp", "light", "dancing lights", "control flames", "create bonfire",
            "burning hands", "cure wounds", "healing word", "mage armor", "detect magic",
            "magic weapon", "find familiar", "shield", "cause fear", "command",
            "scorching ray", "find steed", "hold person", "calm emotions", "crown of madness",
            "prayer of healing", "shadow blade", "darkvision", "locate object", "darkness",
            "fireball", "lightning bolt", "water breathing", "animate dead", "fear",
            "vampiric touch", "clairvoyance",
            "wall of fire", "ice storm", "stoneskin", "banishment",
            "summon elemental", "fire shield",
            "cone of cold", "telekinesis", "mass cure wounds",
            "conjure elemental", "hold monster",
            "chain lightning", "create undead", "soul cage",
            "wall of ice", "summon fiend", "heroes' feast",
            "draconic transformation", "fire storm", "etherealness",
	    "control weather", "dominate monster", "power word stun",
	    "psychic scream", "time stop"
       		]
	},
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6],
        spells : [0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : ["HB", 1],
            minlevel : 3,
            description : "I can cast cantrips and spells, using Intelligence as my spellcasting ability.",
            additional : ["", "", "2 cantrips & 2 spells known", "2 cantrips & 3 spells known", "2 cantrips & 4 spells known", "2 cantrips & 5 spells known", "3 cantrips & 6 spells known", "3 cantrips & 7 spells known", "3 cantrips & 8 spells known", "3 cantrips & 9 spells known", "4 cantrips & 10 spells known", "4 cantrips & 11 spells known", "4 cantrips & 12 spells known", "4 cantrips & 13 spells known", "4 cantrips & 14 spells known", "5 cantrips & 15 spells known", "5 cantrips & 16 spells known", "5 cantrips & 17 spells known", "5 cantrips & 18 spells known", "6 cantrips & 19 spells known"],
        },
        "subclassfeature3a" : {
            name : "College Education",
            minlevel : 3,
            source : ["HB", 1],
            description : desc([
                "You gain proficiency in Arcana (or expertise if already proficient).",
                "You learn one extra language of your choice.",
                "You gain proficiency with alchemist’s supplies."
            ]),
            skillstxt : "Proficiency with Arcana (or expertise if already proficient)",
            languageProfs : [1],
            toolProfs : [["alchemist's supplies"]]
        },
        "subclassfeature6" : {
            name : "Loud doesn't mean stupid",
            minlevel : 6,
            source : ["HB", 1],
            description : "You gain proficiency in Intelligence saving throws.",
	    savetxt : {text : ["proficiency in INT saves"] }
        },
        "subclassfeature10" : {
            name : "Spell Absorption",
            minlevel : 10,
            source : ["HB", 1],
            description : desc([
                "As a reaction when a projectile spell (e.g. Fire Bolt, Eldritch Blast, Magic Missile) targets you, attempt to absorb it.",
                "Roll a d20 + proficiency bonus; must equal or exceed 10 + the spell's level.",
                "On success, absorb the spell and cast it for free on your next turn (action; same targets/conditions).",
                "Usable proficiency bonus times, regained on a long rest."
            ]),
            usages : "Proficiency Bonus",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest"
        },
        "subclassfeature14" : {
            name : "Blood of the Vampire Lord",
            minlevel : 14,
            source : ["HB", 1],
            description : desc([
        	"Just as your draconic soul strengthens you, so does your tainted blood of the Vampire Lord:",
        	"You can see normally in darkness, both magical and non-magical, up to 60 ft thank to your red vampiric eyes and you gain resistance to cold and poison damage."
    ]),
    vision : [["Vampiric eyes", 60]],
    dmgres : ["Cold", "Poison"]

        },
	"subclassfeature17" : {
    	    name : "Secret of Arcana",
    	    minlevel : 17,
    	    source : ["HB", 1],
    	    description : "Once per long rest, cast one spell you know without expending a spell slot.",
            usages : 1,
            recovery : "long rest"
	},
    }
};



ClassSubList["guardian of the companions"] = {
	regExpSearch : /companions/i,
	subname : "Guardian of the Companions",
	source : ["HB", 1],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	armor : [ [true, true, true, true], [true, true, true, true] ],
	weapons : [ [true, true], [true, true] ],
	fullname : "Dovahkiin (Guardian of the Companions)",
	features : {
		"subclassfeature3" : {
			name : "Held back Thu'um",
			source : ["HB", 0],
			minlevel : 3,
			description : "Even holding back your Thu'um shakes the plane. You learn the thaumaturgy cantrip and can cast it at will.",
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : "atwill"
			}
		},
		"subclassfeature3.1" : {
			name : "Warriors stone's blessing",
			source : [["X", 15]],
			minlevel : 3,
			description : desc([
                		"Choose a Fighting Style using the \"Choose Feature\" button above.",
                		"You gain proficiency in Athletics (or expertise if already proficient).",
                		"You gain proficiency with Smith’s tools."
            ]),
            skillstxt : "Proficiency with Athletics (or expertise if already proficient)",
            toolProfs : [["Smith’s tools"]],

			choices : ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
			"archery" : FightingStyles.archery,
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"protection" : FightingStyles.protection,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature6" : {
			name : "Sprinters stamina",
			source : ["HB", 0],
			minlevel : 6,
			description : desc([
        			"You've honed your stamina not only for the power of attack, but also for your well-toned thighs.",
        			"Your walking speed increases by 10 feet."
    			]),
    			speed : { walk : { spd : "+10", enc : "+10" } }
		},
       		"subclassfeature12" : {
    			name : "Blood of the Lycanthrope",
    			minlevel : 12,
    			source : ["HB", 1],
    			description : desc([
        			"Just as your draconic soul strengthens you, so does your tainted blood of the werewolf:",
        			"You gain darkvision out to 120 ft thanks to your predator-like wolfman senses.",
        			"You are immune to disease."
    				]),
    			vision : [["Darkvision", 120]],
    			savetxt : { immune : ["disease"] },
		},
        	"subclassfeature12.1" : {
    			name : "Pack Howl",
    			minlevel : 12,
    			source : ["HB", 1],
    			description : desc([
        			"Once per long rest, you use your inner wolf to howl for aid, summoning wolfs or a direwolf.",
				"You can cast the *conjure animals* spell once per long rest [only (dire)wolfs]."
    				]),
    			spellcastingBonus : {
        			spells : ["conjure animals"],
        			selection : ["conjure animals"],
        			firstCol : "oncelr"
    			},
        			usages : 1,
        			recovery : ["long rest"]    
		},
       		"subclassfeature17" : {
            		name : "Power Attack",
            		minlevel : 17,
            		source : ["HB", 1],
            		description : desc([
                		"Use your weapon or fists to perform a power attack, put some of that stamina of yours into it.",
                		"Your Crit-rate is lowered by one. (So also 19 instead of just 20; can stack)",
                		"Ignore 2 of the targets AC",
                		"Target rolls a CON save. On a fail bleed for 1d6 of damage for 5 turns. They reroll the save at the end of every turn or perform a DC15 Medicine check to 				stop the bleeding."
            		]),
            		usages : "Proficiency Bonus",
            		usagescalc : "event.value = How('Proficiency Bonus');",
            		recovery : "long rest"
        	}
	}
};



ClassSubList["guardian of the nightingale"] = {
	regExpSearch : /nightingale/i,
	subname : "Guardian of the Nightingale",
	source : ["HB", 1],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Dovahkiin (Guardian of the Nightingale)",
	weapons : [ [true, "longbow", "heavy crossbow", "hand crossbow"], [true, "longbow", "heavy crossbow", "hand crossbow"] ],
	features : {
		"subclassfeature3" : {
			name : "Guild initiate",
			source : ["HB", 1],
			minlevel : 3,
			description : desc([
                		"Choose the Figting Style Archery using the \"Choose Feature\" button above.",
                		"You gain proficiency in Stealth or Sleight of hand (or expertise if already proficient).",
                		"You gain proficiency with Brewer’s supplies and Thieves' tools."
            ]),
            skillstxt : "Proficiency with Stealth or Sleight of hand (or expertise if already proficient)",
            toolProfs : [["Brewer’s supplies"], ["Thieves' tools"]],
	    weaponProfs : {
    		 custom : "Longbow, Heavy Crossbow, Hand Crossbow"
			},
			choices : ["Archery"],
			"archery" : FightingStyles.archery
		},
		"subclassfeature3.1" : {
			name : "Sneaky snitch",
			source : ["HB", 1],
			minlevel : 3,
			description : desc([
                		"You can use either an action and/or bonus action to hide."
            ]),
            action : [["bonus action", "Hide"]]
		},
		"subclassfeature6" : {
			name : "Stealth Archer",
			source : ["HB", 1],
			minlevel : 6,
			description : desc([
                		"All roads lead to here." +
				"While having advantage on a target, your ranged weapon attacks do double damage." +
				"Regained on a long rest.",
            ]),
            		usages : "Proficiency Bonus",
            		usagescalc : "event.value = How('Proficiency Bonus');",
            		recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Spiritual skeleton key",
			source : ["HB", 1],
			minlevel : 10,
			description : desc([
                		"Nocturnal blessed you with a non-physical skeleton key." +
				"When you make a Dexterity (Sleight of hand) or Dexterity (Thieves’ tools) check," +
				"you can treat a d20 roll of 9 or lower as a 10.",
            ])
		},
		"subclassfeature12" : {
			name : "Blood of the Evergloam",
			source : ["HB", 1],
			minlevel : 12,
			description : desc([
                		"Just as your draconic soul strengthens you, so does your connection to the Evergloam." +
				"You gain an extra attack; walk and sneak completely without sound" +
				"and are not affected by difficult terrain.",
            ])
		},
		"subclassfeature14" : {
			name : "Poisoned point",
			source : ["HB", 1],
			minlevel : 14,
			description : desc([
                		"Your \"Stealth Archer\" shots are tipped with a paralyzing poison." +
				"When hit, on top of the double damage, the target rolls a CON save." +
				"On a fail they are paralyzed for 10 turns." +
				"Reroll at the end of their turn to break free.",
            ])
		},
		"subclassfeature18" : {
			name : "Agent of the crescent moon",
			source : ["HB", 1],
			minlevel : 18,
			description : desc([
                		"When successfully hiding, you can use your reaction to turn invisible." +
				"The effect is the same as Greater Invisibility, just that it isn’t a spell" +
				"Once per long rest",
            ]),
        			usages : 1,
        			recovery : ["long rest"] 
		},	

	}
};
