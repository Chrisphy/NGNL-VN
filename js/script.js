"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the NGNL VN",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	"StationMusic": "station.mp3",

};

// Define the voice files used in the game.
const voice = {
	"c1":"c1.mp3",
};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	 
		"station": "station.jpg",
		"gameover":"gameover.jpg",

};

// Define the Characters
const characters = {
	"m": {
		"Name": "Miyu",
		"Color": "#5bcaff",
		"Directory": "Miyu", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "KG010201.kg.png",
            "Mad": "KG010203.kg.png",
            "Doubt": "KG010206.kg.png",
            "Disappointed":"KG010214.kg.png",
            "Happy": "KG010202.kg.png"
        },
	},

	"ma": {
		"Name": "Matcha",
		"Color": "#5bcaff",
		"Directory": "Matcha", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "KG040125.kg.png",
            "Mad": "KG040133.kg.png",
            "Doubt": "KG040137.kg.png",
            "Disappointed":"KG040126.kg.png",
            "Happy": "KG040122.kg.png"
        },
	},

	"hoka": {
		"Name": "Hokagan",
		"Color": "green",
		"Directory": "Hokagan", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "KG110000.kg.png",
            "Mad": "KG110004.kg.png",
            "Doubt": "KG110005.kg.png",
            "Disappointed":"KG110006.kg.png",
            "Happy": "KG110011.kg.png"
        },
	},

	"cadu": {
		"Name": "Cadu",
		"Color": "green",
		"Directory": "Cadu", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "geo_akuwaraia1.png",
            "Mad": "geo_ikaria1k.png",
            "Doubt": "geo_komarua2.png",
            "Disappointed":"geo_komarua1k.png",
            "Happy": "geo_defa1.png"
        },
	},

	"D3": {
		"Name": "D3",
		"Color": "green",
		"Directory": "D3", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "but_defa3.png",
            "Mad": "but_defb1.png",
            "Doubt": "but_futekia1.png",
            "Disappointed":"but_kuyasigarub1.png",
            "Happy": "but_futekia3.png"
        },
	},

	"jassu": {
		"Name": "Jassu",
		"Color": "pink",
		"Directory": "Jassu", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "Default.png",
            "Mad": "Angry.png",
            "Disappointed":"Sad.png",
            "Happy": "Smile.png"
        },
	},

	"yami": {
		"Name": "Yami",
		"Color": "yellow",
		"Directory": "Yami", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "KG080000.kg.png",
			"Mad": "KG080003.kg.png",
			"Doubt": "KG080008.kg.png",
            "Disappointed":"KG080006.kg.png",
            "Happy": "KG080002.kg.png"
        },
	},

	"guccitofu": {
		"Name": "Guccitofu",
		"Color": "pink",
		"Directory": "Guccitofu", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "立ち絵5_1.png",
			"Mad": "立ち絵5_2.png  ",
			"Doubt": "立ち絵5_4.png",
            "Happy": "立ち絵5_3.png"
        },
	},

	"charlie": {
		"Name": "Charlie",
		"Color": "yellow",
		"Directory": "Charlie", // Optional*
        "Images":{ // Images Identifier for the "Show" statement.
			"Normal": "pikachu.png",
        },
	},
};

let script = {
	// The game starts here.
	"Start": [
		"notify Welcome",
		{
			"Input": {
				"Text": "Hi there! What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},
		"play music StationMusic loop",
		"scene station with fadeIn",
		"show m Happy",

		"m Hi {{player.Name}} Welcome to the NGNL novel you filthy weeb!",
		"m In this visual novel you'll find great moments of the server!",
		"show m Doubt",
		"m This novel is not meant for the weak so are you sure you want to continue?",
		"hide m",
		"show ma Happy",
		"ma Hai hai, that's right dee~su!",
		"hide ma",
		"show m Happy",
		"Now choose a choice!",

		{
			"Choice": {
				"Dialog": "m Are you ready?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [
		"show m Happy",
		"m Glad to see you want to experience this horror show!",
		"m Let me introduce you to the cast of characters!",
		"m I'm Miyu of course, the server owner and usually missing!",
		"hide m",
		"show ma Happy",
		"ma I'm Matcha, Miyu's slave~!",
		"hide ma",
		"show m Doubt",
		"m Slave...anyway this is Hokagan, our resident Praneesh!",
		"hide m",
		"show hoka Mad",
		"hoka Don't call me Praneesh!",
		"hide hoka",
		"show m Happy",
		"m Maa...it's okay isn't it Hoka-chan~",
		"m Moving on this is Cadu, our favourite GM!",
		"hide m",
		"show cadu Doubt",
		"cadu Favourite...huh I don't know about that...",
		"hide cadu",
		"show D3 Happy",
		"D3 I'm obviously a better GM even though I do nothing.",
		"hide D3",
		"show m Disappointed",
		"m This is the other dissapointing GM D3.",
		"hide m",
		"show cadu Doubt",
		"cadu I think you're forgetting...wo-",
		"hide cadu",
		"show m Happy",
		"m Doesn't exist!",
		"hide m",
		"show cadu Doubt",
		"cadu ...",
		"hide cadu",
		"show yami Doubt",
		"yami Who are these weirdos...",
		"hide yami",
		"show jassu Normal",
		"jassu Aren't you a weirdo too Yami?",
		"show yami Mad right",
		"yami N-no!!",
		"hide jassu",
		"hide yami",
		"show guccitofu Mad",
		"guccitofu I can't believe you guys forgot about me!!!",
		"show m Happy left",
		"m Oh look it's the side char Gucci",
		"guccitofu I'm not a side char!!! T_T Miyu stop this abuse!",
		"hide m",
		"hide guccitofu",
		"show D3 Doubt",
		"D3 Who is this guy again?",
		"hide D3",
		"show charlie Normal",
		"charlie Watashi is a pokemon desu~",
		"show guccitofu Doubt right",
		"guccitofu Stop acting cute charlie",
		"play voice c1",
		"charlie Omae wa mou shindeiru.",
		"scene gameover with fadeIn",
		"{{player.Name}} ...Is that it..?",
		"end"
	],

	"No": [
		"show m Dissapointed",
		"m What a loser~",
		"m Ok nevermind maybe next time!",
		"end"
	]
};