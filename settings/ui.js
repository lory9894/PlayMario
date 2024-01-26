/// <reference path="../PlayMarioJas.ts" />
var PlayMarioJas;
(function (PlayMarioJas) {
    "use strict";
    PlayMarioJas.PlayMarioJas.settings.ui = {
        "globalName": "FSM",
        "styleSheet": {
            ".PlayMarioJas": {
                "color": "white"
            },
            "@font-face": {
                "font-family": "'Press Start'",
                "src": [
                    "url('Fonts/pressstart2p-webfont.eot')",
                    "url('Fonts/pressstart2p-webfont.eot?#iefix') format('embedded-opentype')",
                    "url('Fonts/pressstart2p-webfont.woff') format('woff')",
                    "url('Fonts/pressstart2p-webfont.ttf') format('truetype')",
                    "url('Fonts/pressstart2p-webfont.svg') format('svg')"
                ].join(", "),
                "font-weight": "normal",
                "font-style": "normal"
            }
        },
        "sizeDefault": "Full!",
        "sizes": {
            "Wide": {
                "width": Infinity,
                "height": 464,
                "full": false
            },
            "Large": {
                "width": Infinity,
                "height": Infinity,
                "full": false
            },
            "Full!": {
                "width": Infinity,
                "height": Infinity,
                "full": true
            }
        },
        "schemas": [
            {
                "title": "Options",
                "generator": "OptionsTable",
                "options": [
                    {
                        "title": "Volume",
                        "type": "Number",
                        "minimum": 0,
                        "maximum": 100,
                        "source": function (FSM) {
                            return Math.round(FSM.AudioPlayer.getVolume() * 100);
                        },
                        "update": function (FSM, value) {
                            FSM.AudioPlayer.setVolume(value / 100);
                        }
                    },
                    {
                        "title": "Framerate",
                        "type": "Select",
                        "options": function (FSM) {
                            return ["60fps", "30fps"];
                        },
                        "source": function (FSM) {
                            return (1 / FSM.PixelDrawer.getFramerateSkip() * 60) + "fps";
                        },
                        "update": function (FSM, value) {
                            FSM.PixelDrawer.setFramerateSkip(1 / Number(value.replace("fps", "")) * 60);
                        },
                        "storeLocally": true
                    }
                ],
            },
        ]
    };
})(PlayMarioJas || (PlayMarioJas = {}));
