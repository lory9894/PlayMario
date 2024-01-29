var PlayMarioJas;!function(a){"use strict";a.PlayMarioJas.settings.collisions={keyGroupName:"groupType",keyTypeName:"title",globalCheckGenerators:{Character:a.PlayMarioJas.prototype.generateCanThingCollide,Solid:a.PlayMarioJas.prototype.generateCanThingCollide},hitCheckGenerators:{Character:{Character:a.PlayMarioJas.prototype.generateIsCharacterTouchingCharacter,Solid:a.PlayMarioJas.prototype.generateIsCharacterTouchingSolid}},hitCallbackGenerators:{Character:{Solid:a.PlayMarioJas.prototype.generateHitCharacterSolid,Character:a.PlayMarioJas.prototype.generateHitCharacterCharacter}}}}(PlayMarioJas||(PlayMarioJas={}));PlayMarioJas.PlayMarioJas.settings.devices={triggers:{a:{trigger:"up"},b:{trigger:"sprint"},dpadUp:{trigger:"up"},dpadDown:{trigger:"down"},dpadLeft:{trigger:"left"},dpadRight:{trigger:"right"},leftTrigger:{trigger:"sprint"},rightTrigger:{trigger:"sprint"},select:{trigger:"sprint"},start:{trigger:"pause"},leftJoystick:{x:{negative:"left",positive:"right"},y:{negative:"up",positive:"down"}},rightJoystick:{x:{negative:"left",positive:"right"},y:{negative:"up",positive:"down"}}},aliases:{on:"onkeydown",off:"onkeyup"}};PlayMarioJas.PlayMarioJas.settings.editor=function(o,e){return{blocksize:4*PlayMarioJas.PlayMarioJas.unitsize,mapDefault:{name:"New Map 4 Mario",time:"Infinity",locations:[{entry:"Plain"}],areas:[{setting:"Over",creation:[{macro:"Floor",x:0,y:0,width:128}]}]},prethings:o,mapSettingDefault:"Over",mapEntrances:["Plain","Normal","Castle","PipeVertical","Walking"],thingGroups:["Text","Character","Solid","Scenery"],things:function(){var e,t,i={};for(e in o)if(o.hasOwnProperty(e))for(t in o[e])o[e].hasOwnProperty(t)&&(i[t]=o[e][t]);return i}(),macros:e}}({Characters:{Goomba:{},Koopa:{options:{smart:"Boolean",jumping:"Boolean",flying:"Boolean"}},Beetle:{},Piranha:{options:{evil:"Boolean"}},Blooper:{},CheepCheep:{options:{smart:"Boolean"}},Podoboo:{},Lakitu:{},HammerBro:{},Bowser:{options:{contents:{type:"String",options:["Gooma","Koopa","HammerBro","Bowser"]}}}},Items:{Mushroom:{},Mushroom1Up:{},MushroomDeathly:{},FireFlower:{},Star:{},Shell:{offsetTop:1,options:{smart:"Boolean"}},BeetleShell:{},Coin:{}},Solids:{Block:{options:{contents:{type:"String",options:["Coin","Mushroom","Star","Mushroom1Up","MushroomDeathly"]},hidden:"Boolean"}},Brick:{options:{contents:{type:"String",options:["","Coin","Mushroom","Star","Mushroom1Up","MushroomDeathly"]}}},Pipe:{options:{height:{type:"Number",value:2,mod:8,Infinite:!0}}},PipeHorizontal:{options:{width:{type:"Number",value:2,mod:8},transport:"Location"}},PipeVertical:{options:{height:{type:"Number",value:2,mod:8,Infinite:!0,real:8},transport:"Location"}},Platform:{options:{width:{type:"Number",value:4,mod:2,real:2}}},Stone:{options:{width:{type:"Number",mod:8},height:{type:"Number",Infinite:!0,mod:8}}},Cannon:{options:{height:{type:"Number",mod:8}}},Springboard:{offsetTop:1.5},Floor:{options:{width:{type:"Number",value:1,mod:8},height:{type:"Number",value:1/0,Infinite:!0,mod:8}}},CastleBlock:{options:{fireballs:{type:"Number",value:0,mod:4}}},CastleBridge:{options:{width:{type:"Number",mod:8,real:4}}},Coral:{options:{width:{type:"Number",mod:8},height:{type:"Number",mod:8}}}},Scenery:{BrickPlain:{},Bush1:{},Bush2:{},Bush3:{},Cloud1:{},Cloud2:{},Cloud3:{},Fence:{options:{width:{type:"Number",mod:8}}},HillSmall:{offsetTop:-1.5},HillLarge:{offsetTop:2.5},PlantSmall:{offsetTop:1},PlantLarge:{offsetTop:1},Railing:{options:{width:{type:"Number",mod:4,value:1}}},Water:{options:{width:{type:"Number",mod:4,value:1}}}}},{Fill:{description:"Place a bunch of Things at once, as a grid.",options:{thing:"Everything",xnum:1,ynum:1,xwidth:8,yheight:8}},Pattern:{description:"Fill one of the preset Scenery background patterns.",options:{pattern:["BackRegular","BackCloud","BackFence","BackFenceMin","BackFenceMin2","BackFenceMin3"],repeat:"Number"}},Floor:{description:"Place a floor of infinite height.",options:{width:{type:"Number",value:8,mod:4}}},Pipe:{description:"Add a pipe with the option for piranhas and moving to locations.",options:{height:{type:"Number",value:2,mod:8,Infinite:!0},piranha:"Boolean",transport:"Location",entrance:"Location"}},Tree:{description:"Add a tree to the map.",options:{width:{type:"Number",value:4,mod:8}}},Shroom:{function:"macroShroom",description:"Add a mushroom tree to the map.",options:{width:{type:"Number",value:4,mod:8}}},Scale:{function:"macroScale",description:"Add two platforms suspended by string to the map.",options:{widthLeft:{type:"Number",value:6,mod:4},widthRight:{type:"Number",value:6,mod:4},between:{type:"Number",value:10,mod:4},dropLeft:{type:"Number",value:6,mod:4},dropRight:{type:"Number",value:6,mod:4}}},Water:{function:"macroWater",description:"Fill water of infinite height.",options:{width:4}},CastleSmall:{description:"Add a one-story castle to the map."},CastleLarge:{description:"Add a two-story castle to the map."},Ceiling:{description:"Add an Underworld-style ceiling of Bricks.",options:{width:"Number"}},Bridge:{description:"Create a bridge, complete with stone columns.",options:{width:8,start:"Boolean",end:"Boolean"}},PlatformGenerator:{description:"Add a columnn of infinitely generated platforms.",options:{width:8,direction:{type:"Number",options:[1,-1]}}},StartInsideCastle:{description:"Add the castle stones similar to typical Castles.",options:{width:8}},EndOutsideCastle:{description:"End the map off with an outdoor flag and Castle.",options:{transport:"Location",large:"Boolean",castleDistance:{type:"Number",value:24,mod:1},walls:{type:"Number",value:2}}},EndInsideCastle:{description:"End the map off with an indoor bridge, Bowser, and Toad.",options:{transport:"Location",npc:{type:"String",options:["Toad","Peach"]},hard:"Boolean",spawnType:"Everything",throwing:"Boolean",topScrollEnabler:"Boolean"}}});PlayMarioJas.PlayMarioJas.settings.events={keyOnClassCycleStart:"onThingAdd",keyDoClassCycleStart:"placed",keyCycleCheckValidity:"alive",timingDefault:9};PlayMarioJas.PlayMarioJas.settings.generator={possibilities:{Over:{height:80,width:2992,contents:{mode:"Certain",direction:"right",children:[{type:"Known",title:"ScrollEnabler"},{type:"Random",title:"OverStart"},{type:"Random",title:"OverBody"},{type:"Random",title:"OverEnd"}]}},OverStart:{width:112,height:80,contents:{mode:"Certain",direction:"top",spacing:-8,children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:112}},{type:"Random",title:"OverScenery"}]}},OverBody:{width:2480,height:80,contents:{mode:"Multiple",children:[{type:"Random",title:"OverRandomization"},{type:"Random",title:"OverClouds"}]}},OverRandomization:{width:2480,height:80,contents:{mode:"Repeat",direction:"right",children:[{type:"Random",title:"OverClump"},{type:"Random",title:"OverSegwaySpotty"},{type:"Random",title:"OverSegway"},{type:"Random",title:"OverSegwaySpotty"}]}},OverClump:{width:320,height:80,contents:{mode:"Random",direction:"right",children:[{percent:60,type:"Random",title:"OverClumpLand"},{percent:20,type:"Random",title:"OverClumpWater"},{percent:20,type:"Random",title:"OverClumpTrees"}]}},OverClumpLand:{width:160,height:80,contents:{mode:"Multiple",children:[{type:"Random",title:"OverScenery"},{type:"Random",title:"OverLandArea"}]}},OverLandArea:{width:160,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:160}},{type:"Random",title:"LandObstacleGroup"}]}},OverClumpWater:{width:320,height:80,contents:{mode:"Multiple",children:[{type:"Random",title:"Water",sizing:{height:8,width:320}},{type:"Random",title:"OverClumpWaterMain"}]}},OverClumpWaterMain:{width:320,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"OverClumpWaterContents"}]}},OverClumpWaterContents:{width:320,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"CheepsStart"},{type:"Random",title:"OverClumpWaterBridge"},{type:"Random",title:"CheepsStop"}]}},OverClumpWaterBridge:{width:320,height:8,contents:{mode:"Certain",direction:"top",spacing:24,children:[{type:"Known",title:"Bridge",sizing:{width:320},arguments:{macro:"Bridge",width:320,begin:!0,end:!0}},{type:"Random",title:"OverClumpWaterBridgeBlock"}]}},OverClumpWaterBridgeBlock:{width:320,height:8,contents:{mode:"Certain",direction:"right",spacing:{min:80,max:240,units:8},children:[{type:"Random",title:"Nothing"},{type:"Known",title:"Block",arguments:[{percent:70,values:{contents:"Mushroom"}},{percent:30,values:{contents:"Star"}}]}]}},OverClumpTrees:{width:320,height:80,contents:{mode:"Random",direction:"right",spacing:{min:0,max:24,units:8},children:[{percent:40,type:"Random",title:"OverTreeLarge"},{percent:40,type:"Random",title:"OverTreesSmall"},{percent:20,type:"Random",title:"PlatformGenerator"}]}},OverTreesSmall:{width:64,height:80,contents:{mode:"Certain",direction:"right",spacing:{min:0,max:8,units:8},children:[{type:"Random",title:"OverTreeSmallShort"},{type:"Random",title:"OverTreeSmall"}]}},OverTreeSmall:{width:24,height:80,contents:{mode:"Repeat",limit:1,direction:"top",spacing:{min:32,max:88,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"TreeFancy"}]}},OverTreeSmallShort:{width:24,height:80,contents:{mode:"Certain",direction:"top",snap:"bottom",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing"},{type:"Known",title:"Tree",arguments:{macro:"Tree",width:24}}]}},OverTreeLarge:{width:64,height:80,contents:{mode:"Multiple",direction:"right",spacing:{min:0,max:40,units:8},children:[{type:"Random",title:"OverTreeLargeBase"},{type:"Random",title:"OverTreeSmall"}]}},OverTreeLargeBase:{width:64,height:80,contents:{mode:"Certain",direction:"top",snap:"bottom",spacing:[0,8,8],children:[{type:"Random",title:"Nothing"},{type:"Known",title:"Tree",arguments:{macro:"Tree",width:64}},{type:"Random",title:"TreeLargeCoins"}]}},OverSegway:{width:112,height:80,contents:{mode:"Random",direction:"right",children:[{percent:30,type:"Random",title:"OverSegwaySpotty"},{percent:20,type:"Random",title:"OverSegwayEnemySpots"},{percent:15,type:"Random",title:"OverSegwayRamps"},{percent:15,type:"Random",title:"OverSegwayWatery"},{percent:10,type:"Random",title:"OverSegwaySpring"},{percent:10,type:"Random",title:"OverSegwayPipeTransit"}]}},OverSegwaySpotty:{width:112,height:80,contents:{mode:"Random",direction:"right",children:[{percent:60,type:"Random",title:"OverSegwaySpot"},{percent:40,type:"Random",title:"Nothing"}]}},OverSegwaySpot:{width:8,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor"}},{type:"Random",title:"OverSegwaySpotContent"}]}},OverSegwaySpotContent:{width:8,height:24,contents:{mode:"Random",direction:"top",spacing:24,children:[{percent:90,type:"Random",title:"OverSegwaySpotScenery"},{percent:10,type:"Random",title:"KoopaJumping"}]}},OverSegwayEnemySpots:{width:112,height:24,contents:{mode:"Repeat",direction:"right",spacing:[{percent:60,value:0},{percent:25,value:8},{percent:15,value:16}],children:[{type:"Random",title:"OverSegwayEnemySpot"}]}},OverSegwayEnemySpot:{width:32,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:32}},{type:"Random",title:"OverSegwayEnemySpotContent"}]}},OverSegwayEnemySpotContent:{width:32,height:80,contents:{mode:"Random",direction:"right",children:[{percent:45,type:"Random",title:"EnemyEasy"},{percent:15,type:"Random",title:"Nothing"},{percent:40,type:"Random",title:"LandObstacleGroupVertical"}]}},OverSegwayRamps:{width:112,height:80,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"RampUpSmallFloor"},{type:"Random",title:"Nothing",sizing:{width:48}},{type:"Random",title:"RampDownSmallFloor"}]}},OverSegwayFloating:{width:112,height:80,contents:{mode:"Random",direction:"right",children:[{percent:50,type:"Random",title:"Nothing"},{percent:50,type:"Random",title:"OverSegwayFloat"}]}},OverSegwayFloat:{width:8,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"Stone"}]}},OverSegwayWatery:{width:112,height:80,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"RampUpSmallFloor"},{type:"Random",title:"OverSegwayWateryBridge"},{type:"Random",title:"RampDownSmallFloor"}]}},OverSegwayWateryBridge:{width:48,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"Water",sizing:{height:8}},{type:"Random",title:"Nothing",sizing:{height:24}},{type:"Random",title:"Bridge"},{type:"Random",title:"OverSegwayWateryBridgeTop"}]}},OverSegwayWateryBridgeTop:{width:48,height:40,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"OverSegwayWateryBridgeTopEnemies"},{type:"Random",title:"OverSegwayWateryBridgeTopSolid"}]}},OverSegwayWateryBridgeTopEnemies:{width:48,height:16,contents:{mode:"Certain",direction:"right",snap:"bottom",spacing:{min:4,max:20,units:4},children:[{type:"Random",title:"Nothing",sizing:16},{type:"Random",title:"EnemyEasy"},{type:"Random",title:"EnemyEasy"},{type:"Random",title:"EnemyEasy"}]}},OverSegwayWateryBridgeTopSolid:{width:48,height:24,contents:{mode:"Certain",direction:"right",snap:"bottom",spacing:{min:0,max:24,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"BlockReward"}]}},OverSegwaySpring:{width:112,height:80,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"OverSegwaySpringLand"},{type:"Random",title:"OverSegwaySpringGap"}]}},OverSegwaySpringLand:{width:8,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor"}},{type:"Known",title:"Springboard"}]}},OverSegwaySpringGap:{width:104,height:80,contents:{mode:"Certain",direction:"right",spacing:{min:48,max:80,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"OverSegwaySpringReward"}]}},OverSegwaySpringReward:{width:8,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:16,max:40,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"Brick"},{type:"Random",title:"BlockTreasureFloating"}]}},OverSegwayPipeTransit:{width:112,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:112}},{type:"Random",title:"OverSegwayPipeTransitLand"}]}},OverSegwayPipeTransitLand:{width:104,height:80,contents:{mode:"Certain",direction:"right",snap:"bottom",spacing:{min:32,max:80,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"PipeRandomTransit"}]}},LandObstacleGroup:{width:160,height:80,contents:{mode:"Random",direction:"right",spacing:{min:0,max:8,units:16},children:[{percent:30,type:"Random",title:"LandObstacleGroupDoubleStory"},{percent:30,type:"Random",title:"LandObstacleGroupSingleStory"},{percent:25,type:"Random",title:"LandObstacleGroupVertical"},{percent:20,type:"Random",title:"LandObstacleGroupPipes"},{percent:3,type:"Random",title:"LandObstacleGroupPitSmall"},{percent:2,type:"Random",title:"LandObstacleGroupPitLarge"}]}},LandObstacleGroupEnemies:{width:64,height:80,contents:{mode:"Random",direction:"right",spacing:4,children:[{percent:65,type:"Random",title:"EnemyEasyScattered"},{percent:2,type:"Random",title:"EnemyHard"},{percent:13,type:"Random",title:"LandObstacleGroupVertical"}]}},LandObstacleGroupEnemiesPure:{width:64,height:80,contents:{mode:"Random",direction:"right",spacing:{min:4,max:8,units:4},children:[{percent:90,type:"Random",title:"EnemyEasyScattered"},{percent:5,type:"Random",title:"EnemyHard"}]}},LandObstacleGroupSingleStory:{width:64,height:80,contents:{mode:"Multiple",snap:"bottom",children:[{type:"Random",title:"LandObstacleGroupSolidsSpotty"},{type:"Random",title:"EnemyEasy"}]}},LandObstacleGroupSingleStorySolids:{width:64,height:40,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"Nothing",sizing:{height:32}},{type:"Random",title:"LandObstacleGroupSolidsSpotty"}]}},LandObstacleGroupDoubleStory:{width:64,height:80,contents:{mode:"Multiple",snap:"bottom",children:[{type:"Random",title:"LandObstacleGroupDoubleStorySolids"},{type:"Random",title:"LandObstacleGroupEnemiesPure"}]}},LandObstacleGroupDoubleStorySolids:{width:64,height:80,contents:{mode:"Certain",snap:"bottom",direction:"top",children:[{type:"Random",title:"LandObstacleGroupSolidsPopulated"},{type:"Random",title:"LandObstacleGroupSolidsSpotty"}]}},LandObstacleGroupSolidsPopulated:{width:64,height:32,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"Nothing",sizing:{height:24}},{type:"Random",title:"LandObstacleGroupSolid"},{type:"Random",title:"EnemyEasyElevated"}]}},LandObstacleGroupSolids:{width:64,height:32,contents:{mode:"Random",snap:"bottom",direction:"right",children:[{percent:75,type:"Random",title:"Brick"},{percent:25,type:"Random",title:"Block"}]}},LandObstacleGroupSolidsSpotty:{width:64,height:32,contents:{mode:"Random",snap:"bottom",direction:"right",children:[{percent:30,type:"Random",title:"Brick"},{percent:20,type:"Random",title:"Block"},{percent:50,type:"Random",title:"Nothing"}]}},LandObstacleGroupPipes:{width:112,height:80,contents:{mode:"Random",snap:"bottom",direction:"right",children:[{percent:80,type:"Random",title:"PipeRandom"},{percent:10,type:"Random",title:"PipeRandomTransit"},{percent:10,type:"Random",title:"PipeFloating"}]}},LandObstacleGroupVertical:{width:32,height:80,contents:{mode:"Random",snap:"bottom",direction:"right",spacing:{min:0,max:16,units:8},children:[{percent:40,type:"Random",title:"PipeRandom"},{percent:35,type:"Random",title:"StoneTower"},{percent:25,type:"Random",title:"CannonTower"}]}},LandObstacleGroupPitSmall:{width:40,height:80,contents:{mode:"Certain",snap:"bottom",direction:"right",children:[{type:"Random",title:"StoneTower"},{type:"Random",title:"Nothing"},{type:"Random",title:"PitTreasure"},{type:"Random",title:"Nothing"},{type:"Random",title:"StoneTower"}]}},LandObstacleGroupPitLarge:{width:56,height:80,contents:{mode:"Certain",snap:"bottom",direction:"right",children:[{type:"Random",title:"StoneTower"},{type:"Random",title:"Nothing",sizing:{width:16}},{type:"Random",title:"PitTreasure"},{type:"Random",title:"EnemyEasy"},{type:"Random",title:"Nothing"},{type:"Random",title:"StoneTower"}]}},PitTreasure:{width:8,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:0,max:40,units:8},children:[{type:"Random",title:"Nothing",sizing:{height:32}},{type:"Random",title:"BlockTreasure"}]}},Underworld:{width:1520,height:88,contents:{mode:"Certain",direction:"right",snap:"left",children:[{type:"Random",title:"UnderworldStart"},{type:"Random",title:"UnderworldRandomization"},{type:"Random",title:"UnderworldPreEnd"},{type:"Random",title:"Nothing"},{type:"Random",title:"UnderworldEnd"}]}},UnderworldStart:{width:128,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Known",title:"Floor",arguments:[{percent:25,values:{macro:"Floor",width:80}},{percent:25,values:{macro:"Floor",width:96}},{percent:25,values:{macro:"Floor",width:104}},{percent:25,values:{macro:"Floor",width:128}}]},{type:"Known",title:"Brick",arguments:{macro:"Fill",ynum:11}}]}},UnderworldRandomization:{width:1512,height:80,contents:{mode:"Random",direction:"right",children:[{percent:40,type:"Random",title:"UnderworldLandArea"},{percent:40,type:"Random",title:"UnderworldSegway"},{percent:20,type:"Random",title:"Nothing"}]}},UnderworldLandArea:{width:160,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:160}},{type:"Random",title:"UnderworldObstacleGroup"},{type:"Random",title:"Brick",sizing:{width:160}}]}},UnderworldObstacleGroup:{width:160,height:80,contents:{mode:"Random",direction:"right",spacing:[{percent:50,value:0},{percent:30,value:8},{percent:20,value:16}],children:[{percent:30,type:"Random",title:"EnemyEasyScattered"},{percent:25,type:"Random",title:"UnderworldBricksOverhangs"},{percent:20,type:"Random",title:"LandObstacleGroupSingleStory"},{percent:25,type:"Random",title:"LandObstacleGroupVertical"}]}},UnderworldBricksOverhangs:{width:160,height:64,contents:{mode:"Repeat",direction:"right",snap:"bottom",spacing:{min:0,max:24,units:8},children:[{percent:100,type:"Random",title:"UnderworldBricksOverhang"}]}},UnderworldBricksOverhang:{width:32,height:64,contents:{mode:"Random",direction:"top",snap:"left",spacing:[{percent:40,value:0},{percent:40,value:16},{percent:20,value:8}],children:[{percent:40,type:"Random",title:"UnderworldBrickCluster"},{percent:30,type:"Known",title:"Coin",arguments:{macro:"Fill",xnum:4,xwidth:8},sizing:{width:32,height:16}},{percent:30,type:"Random",title:"EnemyEasyScattered"}]}},UnderworldBrickCluster:{width:32,height:16,contents:{mode:"Repeat",direction:"top",children:[{type:"Random",title:"UnderworldBrickRow"}]}},UnderworldBrickRow:{width:32,height:8,contents:{mode:"Random",direction:"right",children:[{percent:97,type:"Known",title:"Brick"},{percent:3,type:"Known",title:"Brick",arguments:{contents:"Coin"}}]}},UnderworldSegway:{width:112,height:80,contents:{mode:"Random",direction:"right",children:[{percent:30,type:"Random",title:"UnderworldSegwaySpotty"},{percent:25,type:"Random",title:"OverSegwayWatery"},{percent:25,type:"Random",title:"UnderworldSegwayPlatforms"},{percent:20,type:"Random",title:"OverSegwayRamps"}]}},UnderworldSegwaySpotty:{width:112,height:80,contents:{mode:"Multiple",direction:"right",snap:"bottom",children:[{type:"Random",title:"UnderworldSegwaySpots"},{type:"Random",title:"UnderworldBrickCeiling",sizing:{width:112}}]}},UnderworldSegwaySpots:{width:112,height:80,contents:{mode:"Random",direction:"right",snap:"bottom",children:[{percent:50,type:"Random",title:"UnderworldSegwaySpot"},{percent:50,type:"Random",title:"Nothing"}]}},UnderworldSegwaySpot:{width:8,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:[{percent:40,values:{macro:"Floor"}},{percent:30,values:{macro:"Floor",y:8}},{percent:30,values:{macro:"Floor",y:16}}]}]}},UnderworldSegwayPlatforms:{width:112,height:80,contents:{mode:"Certain",direction:"right",spacing:{min:0,max:8,units:8},children:[{type:"Random",title:"Nothing",sizing:{width:16}},{type:"Random",title:"PlatformGenerator"},{type:"Random",title:"Nothing"},{type:"Random",title:"PlatformGenerator"},{type:"Random",title:"Nothing"}]}},UnderworldBrickCeiling:{width:8,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Random",title:"Nothing",sizing:{height:88}},{type:"Random",title:"Brick"}]}},UnderworldPreEnd:{width:112,height:80,contents:{mode:"Random",direction:"right",snap:"left",spacing:32,children:[{percent:50,type:"Random",title:"OverSegwaySpring"},{percent:50,type:"Random",title:"PlatformGenerator"}]}},UnderworldEnd:{width:480,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Random",title:"UnderworldEndFloor"},{type:"Random",title:"UnderworldEndLand"}]}},UnderworldEndFloor:{width:480,height:8,contents:{mode:"Certain",children:[{type:"Random",title:"Floor"}]}},UnderworldEndLand:{width:488,height:72,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"LakituStop",sizing:{width:0}},{type:"Random",title:"UnderworldEndPipeArea"},{type:"Random",title:"Nothing",sizing:{width:64}},{type:"Random",title:"RampUpLarge"},{type:"Random",title:"Nothing",sizing:{width:64}},{type:"Random",title:"UnderworldEndOutsideCastle"},{type:"Known",title:"ScrollBlocker",sizing:{width:0,height:0}}]}},UnderworldEndPipeArea:{width:144,height:88,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"UnderworldEndPipeFront"},{type:"Random",title:"UnderworldEndPipeTransport"},{type:"Known",title:"Brick",arguments:{macro:"Fill",xnum:7,ynum:11,yheight:-8}}]}},UnderworldEndPipeFront:{width:80,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Known",title:"Brick",arguments:{macro:"Fill",xnum:10,ynum:3}},{type:"Random",title:"Nothing",sizing:{height:40}},{type:"Known",title:"Block",arguments:{hidden:!0}},{type:"Random",title:"Nothing",sizing:{height:24}},{type:"Known",title:"Brick",arguments:{macro:"Fill",xnum:10,ynum:1}}]}},UnderworldEndPipeTransport:{width:32,height:80,contents:{mode:"Certain",direction:"top",snap:"right",children:[{type:"Known",title:"Brick",arguments:{macro:"Fill",xnum:4,ynum:3,yheight:-8},sizing:{height:24}},{type:"Known",title:"PipeCorner",arguments:{macro:"PipeCorner",height:64,transport:"Over",scrollEnabler:!0,scrollBlocker:!0}},{type:"Random",title:"Nothing",sizing:{height:40}},{type:"Known",title:"Brick",arguments:{macro:"Fill",xnum:2}}]}},Sky:{width:1400,height:80,contents:{mode:"Certain",direction:"right",snap:"left",children:[{type:"Random",title:"SkyStart"},{type:"Random",title:"Nothing"},{type:"Random",title:"SkyBeforeMain"},{type:"Random",title:"SkyMain"},{type:"Random",title:"SkyEnd"}]}},SkyStart:{width:32,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Known",title:"Stone",arguments:{width:32},sizing:{width:32}}]}},SkyBeforeMain:{width:80,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Known",title:"Stone",arguments:{width:80},sizing:{width:80}}]}},SkyMain:{width:560,height:80,contents:{mode:"Multiple",children:[{type:"Random",title:"SkyMainLand"},{type:"Random",title:"SkyMainTransport"},{type:"Random",title:"SkyMainAir"}]}},SkyMainLand:{width:560,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Known",title:"Stone",arguments:{width:560}}]}},SkyMainTransport:{width:140,height:40,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Random",title:"Nothing",sizing:{height:32}},{type:"Known",title:"Platform",arguments:{width:24,transport:"true"}}]}},SkyMainAir:{width:560,height:80,contents:{mode:"Random",direction:"right",snap:"bottom",spacing:8,children:[{percent:20,type:"Random",title:"SkyCoinsShort"},{percent:20,type:"Random",title:"SkyCoinsMedium"},{percent:20,type:"Random",title:"SkyCoinsLong"},{percent:40,type:"Random",title:"SkyCoinsStone"}]}},SkyCoinsShort:{width:24,height:80,contents:{mode:"Certain",direction:"top",snap:"left",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing",sizing:{height:56}},{type:"Random",title:"SkyCoinsRow",stretch:{width:!0}}]}},SkyCoinsMedium:{width:56,height:80,contents:{mode:"Certain",direction:"top",snap:"left",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing",sizing:{height:56}},{type:"Random",title:"SkyCoinsRow",stretch:{width:!0}}]}},SkyCoinsLong:{width:128,height:80,contents:{mode:"Certain",direction:"top",snap:"left",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing",sizing:{height:56}},{type:"Random",title:"SkyCoinsRow",stretch:{width:!0}}]}},SkyCoinsRow:{width:5,height:7,contents:{mode:"Repeat",direction:"right",snap:"top",spacing:3,children:[{type:"Random",title:"Coin"}]}},SkyCoinsStone:{width:24,height:80,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"SkyCoinsStoneVertical"}]}},SkyCoinsStoneVertical:{width:8,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:0,max:8,units:8},children:[{type:"Random",title:"Nothing",sizing:{height:64}},{type:"Known",title:"Stone",arguments:[{percent:33,values:{}},{percent:34,values:{width:16}},{percent:33,values:{height:16}}]}]}},SkyEnd:{width:320,height:80,contents:{mode:"Certain",direction:"top",snap:"right",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"SkyEndCoins"}]}},SkyEndCoins:{width:24,height:7,contents:{mode:"Certain",direction:"right",snap:"bottom",spacing:3,children:[{type:"Random",title:"Nothing",sizing:{width:64}},{type:"Known",title:"Coin"},{type:"Known",title:"Coin"},{type:"Known",title:"Coin"}]}},Castle:{height:80,width:2e3,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"CastleStart"},{type:"Random",title:"CastleBody"},{type:"Random",title:"CastleEnd"}]}},CastleStart:{width:112,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"StartInsideCastle"},{type:"Random",title:"Nothing",sizing:{height:80}},{type:"Known",title:"Stone",arguments:{height:24,width:112}}]}},CastleBody:{width:1632,height:80,contents:{mode:"Repeat",direction:"right",children:[{type:"Random",title:"CastleSegway"},{type:"Random",title:"CastleLandArea"},{type:"Random",title:"CastleSegway"},{type:"Random",title:"CastleLandAreaLarge"}]}},CastleSegway:{width:168,height:80,contents:{mode:"Random",direction:"right",snap:"bottom",children:[{percent:50,type:"Random",title:"CastleSegwayFloatingGap"},{percent:50,type:"Random",title:"CastleSegwayPlatformGap"}]}},CastleSegwayFloatingGap:{width:168,height:80,contents:{mode:"Repeat",direction:"right",snap:"bottom",children:[{type:"Random",title:"CastleSegwayGapSpace"},{type:"Random",title:"CastleSegwayGapChunk"}]}},CastleSegwayGapSpace:{width:24,height:80,contents:{mode:"Multiple",children:[{type:"Random",title:"CastleSegwayGapSpaceWater"},{type:"Random",title:"CastleSegwayGapSpaceEnemyArea"}]}},CastleSegwayGapSpaceWater:{width:24,height:80,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Water",sizing:{width:24}}]}},CastleSegwayGapSpaceEnemyArea:{width:24,height:40,contents:{mode:"Repeat",direction:"right",snap:"bottom",spacing:[{percent:60,value:24},{percent:15,value:0},{percent:15,value:8},{percent:15,value:16}],children:[{type:"Random",title:"Nothing",sizing:{width:0}},{type:"Random",title:"Podoboo"}]}},CastleSegwayGapChunk:{width:24,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:16,max:40,units:8},children:[{type:"Random",title:"Water",sizing:{width:24}},{type:"Random",title:"CastleSegwayGapChunkSolids"},{type:"Random",title:"CastleSegwayGapChunkReward"}]}},CastleSegwayGapChunkSolids:{width:24,height:8,contents:{mode:"Repeat",direction:"right",children:[{percent:80,type:"Random",title:"Stone"},{percent:20,type:"Random",title:"CastleBlockActive"}]}},CastleSegwayGapChunkReward:{width:16,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"CastleSegwayGapChunkBlock"}]}},CastleSegwayGapChunkBlock:{width:8,height:8,contents:{mode:"Random",direction:"right",children:[{percent:50,type:"Random",title:"Nothing"},{percent:50,type:"Known",title:"Block",arguments:{contents:"Mushroom"}}]}},CastleSegwayPlatformGap:{width:168,height:80,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"CastleSegwayPlatformGapBorder"},{type:"Random",title:"CastleSegwayPlatformGapPlatforms"},{type:"Random",title:"CastleSegwayPlatformGapBorder"}]}},CastleSegwayPlatformGapBorder:{width:24,height:80,contents:{mode:"Certain",direction:"top",spacing:{min:0,max:24,units:8},children:[{type:"Known",title:"Floor",arguments:{macro:"Floor"},sizing:{height:32},stretch:{width:!0}},{type:"Random",title:"CastleSegwayPlatformGapBorderCastleBlock"}]}},CastleSegwayPlatformGapBorderCastleBlock:{width:24,height:8,contents:{mode:"Certain",direction:"right",spacing:{min:0,max:16,units:8},children:[{type:"Random",title:"Nothing",sizing:{width:0}},{type:"Random",title:"CastleBlockActive"}]}},CastleSegwayPlatformGapPlatforms:{width:120,height:80,contents:{mode:"Repeat",direction:"right",spacing:{min:0,max:16,units:16},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"PlatformGenerator"}]}},CastleLandArea:{width:160,height:80,contents:{mode:"Random",direction:"right",children:[{percent:100,type:"Random",title:"CastleLandTunnel"}]}},CastleLandTunnel:{width:160,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:160},sizing:{height:32}},{type:"Random",title:"CastleLandTunnelEnemies"},{type:"Random",title:"CastleLandTunnelTop"}]}},CastleLandTunnelEnemies:{width:160,height:16,contents:{mode:"Random",direction:"right",snap:"bottom",spacing:[{percent:10,value:4},{percent:15,value:8},{percent:85,value:{min:32,max:64,units:8}}],children:[{percent:70,type:"Random",title:"Goomba"},{percent:15,type:"Random",title:"Beetle"},{percent:15,type:"Random",title:"Koopa"}]}},CastleLandTunnelTop:{width:160,height:32,contents:{mode:"Certain",direction:"bottom",children:[{type:"Known",title:"Stone",stretch:{width:!0},arguments:[{percent:33,values:{height:24}},{percent:34,values:{height:32}},{percent:33,values:{height:40}}]}]}},CastleLandAreaLarge:{width:320,height:80,contents:{mode:"Repeat",direction:"right",children:[{type:"Random",title:"CastleLandAreaChunk"},{type:"Random",title:"CastleLandAreaBetween"}]}},CastleLandAreaChunk:{width:152,height:80,contents:{mode:"Repeat",direction:"right",children:[{percent:100,type:"Random",title:"CastleLandAreaCavern"}]}},CastleLandAreaCavern:{width:152,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:152}},{type:"Random",title:"CastleLandAreaCavernInside"},{type:"Known",title:"Stone",arguments:{width:152}}]}},CastleLandAreaCavernInside:{width:152,height:80,contents:{mode:"Random",direction:"right",snap:"bottom",spacing:{min:8,max:40,units:8},children:[{percent:40,type:"Random",title:"CastleLandAreaCavernInsideTites"},{percent:35,type:"Random",title:"CastleLandAreaCavernInsideBonus"},{percent:25,type:"Random",title:"Nothing",sizing:{width:24}}]}},CastleLandAreaCavernInsideTites:{width:24,height:80,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Known",title:"Stone",arguments:{width:24}},{type:"Random",title:"CastleLandAreaCavernInsideTitesCastleBlock"},{type:"Random",title:"Nothing",sizing:{height:40}},{type:"Random",title:"CastleLandAreaCavernInsideTitesCastleBlock"},{type:"Known",title:"Stone",sizing:{width:24,height:16},arguments:{width:24,height:16}}]}},CastleLandAreaCavernInsideTitesCastleBlock:{width:24,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"CastleBlockActive"}]}},CastleLandAreaCavernInsideBonus:{width:24,height:64,contents:{mode:"Certain",direction:"top",spacing:{min:8,max:24,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"CastleLandAreaCavernInsideBonusBlocks"},{type:"Random",title:"CastleLandAreaCavernInsideBonusBlocks"}]}},CastleLandAreaCavernInsideBonusBlocks:{width:24,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"Nothing"},{type:"Known",title:"Block",arguments:[{percent:45,values:{hidden:!0}},{percent:35,values:{}},{percent:15,values:{contents:"Mushroom",hidden:!0}},{percent:5,values:{contents:"Mushroom"}}]}]}},CastleLandAreaBetween:{width:16,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Water",arguments:{macro:"Water",width:16}},{type:"Random",title:"Nothing",sizing:{height:83}},{type:"Known",title:"Stone",arguments:{width:16}}]}},CastleEnd:{width:256,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"CastlePreEnd"},{type:"Random",title:"EndInsideCastle"},{type:"Random",title:"Over"}]}},CastlePreEnd:{width:80,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:80}},{type:"Random",title:"CastlePreEndBlocks"},{type:"Random",title:"Nothing",sizing:{height:56}},{type:"Known",title:"Stone",arguments:[{percent:50,values:{width:80,height:24}},{percent:50,values:{width:80,height:32}}]}]}},CastlePreEndBlocks:{width:80,height:24,contents:{mode:"Repeat",direction:"right",snap:"top",spacing:16,children:[{type:"Known",title:"Stone",sizing:{width:16,height:24},arguments:{width:16,height:24}}]}},EnemyEasy:{width:8,height:12,contents:{mode:"Random",direction:"right",spacing:[{percent:75,value:4},{percent:25,value:8}],children:[{percent:45,type:"Random",title:"Goomba"},{percent:35,type:"Random",title:"Koopa"},{percent:20,type:"Random",title:"Beetle"}]}},EnemyEasyScattered:{width:8,height:12,contents:{mode:"Random",direction:"right",spacing:[{percent:45,value:8},{percent:25,value:4},{percent:15,value:12},{percent:15,value:16}],children:[{percent:40,type:"Random",title:"Goomba"},{percent:30,type:"Random",title:"Koopa"},{percent:15,type:"Random",title:"Beetle"},{percent:15,type:"Random",title:"Nothing"}]}},EnemyEasyElevated:{width:64,height:12,contents:{mode:"Random",direction:"right",snap:"bottom",spacing:4,children:[{percent:25,type:"Random",title:"Goomba"},{percent:15,type:"Random",title:"Koopa"},{percent:10,type:"Random",title:"Beetle"},{percent:50,type:"Random",title:"Nothing"}]}},EnemyHard:{width:8,height:12,contents:{mode:"Random",direction:"right",children:[{percent:40,type:"Random",title:"HammerBro"},{percent:40,type:"Random",title:"Blooper"},{percent:20,type:"Random",title:"Lakitu"}]}},SolidSmall:{width:8,height:12,contents:{mode:"Random",direction:"right",children:[{percent:80,type:"Random",title:"Brick"},{percent:20,type:"Random",title:"Block"}]}},SolidSmallSpotty:{width:8,height:12,contents:{mode:"Random",direction:"right",children:[{percent:50,type:"Random",title:"Brick"},{percent:30,type:"Random",title:"Nothing"},{percent:20,type:"Random",title:"Block"}]}},LandObstacleGroupSolid:{width:8,height:8,contents:{mode:"Random",direction:"right",children:[{percent:70,type:"Random",title:"Brick"},{percent:30,type:"Random",title:"Block"}]}},Cannon:{width:8,height:32,contents:{mode:"Random",direction:"top",snap:"bottom",spacing:[{percent:50,
value:0},{percent:50,value:24}],children:[{percent:50,type:"Random",title:"CannonMedium"},{percent:10,type:"Random",title:"CannonSmall"},{percent:40,type:"Random",title:"CannonLarge"}]}},CannonStack:{width:8,height:32,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Random",title:"Cannon"},{type:"Random",title:"Cannon"}]}},RampUpSmall:{width:32,height:32,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Stone"},{type:"Known",title:"Stone",sizing:{height:16},arguments:{height:16}},{type:"Known",title:"Stone",sizing:{height:24},arguments:{height:24}},{type:"Known",title:"Stone",sizing:{height:32},arguments:{height:32}}]}},RampUpSmallFloor:{width:32,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:32}},{type:"Random",title:"RampUpSmall"}]}},RampUpLarge:{width:64,height:64,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Stone"},{type:"Known",title:"Stone",sizing:{height:16},arguments:{height:16}},{type:"Known",title:"Stone",sizing:{height:24},arguments:{height:24}},{type:"Known",title:"Stone",sizing:{height:32},arguments:{height:32}},{type:"Known",title:"Stone",sizing:{height:40},arguments:{height:40}},{type:"Known",title:"Stone",sizing:{height:48},arguments:{height:48}},{type:"Known",title:"Stone",sizing:{height:56},arguments:{height:56}},{type:"Known",title:"Stone",sizing:{height:64},arguments:{height:64}}]}},RampUpLargeFloor:{width:64,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:64}},{type:"Random",title:"RampUpLarge"}]}},RampDownSmall:{width:32,height:32,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Stone",sizing:{height:32},arguments:{height:32}},{type:"Known",title:"Stone",sizing:{height:24},arguments:{height:24}},{type:"Known",title:"Stone",sizing:{height:16},arguments:{height:16}},{type:"Known",title:"Stone"}]}},RampDownSmallFloor:{width:32,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:32}},{type:"Random",title:"RampDownSmall"}]}},RampDownLarge:{width:64,height:64,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Stone",sizing:{height:64},arguments:{height:64}},{type:"Known",title:"Stone",sizing:{height:56},arguments:{height:56}},{type:"Known",title:"Stone",sizing:{height:48},arguments:{height:48}},{type:"Known",title:"Stone",sizing:{height:40},arguments:{height:40}},{type:"Known",title:"Stone",sizing:{height:32},arguments:{height:32}},{type:"Known",title:"Stone",sizing:{height:24},arguments:{height:24}},{type:"Known",title:"Stone",sizing:{height:16},arguments:{height:16}},{type:"Known",title:"Stone"}]}},RampDownLargeFloor:{width:64,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Floor",arguments:{macro:"Floor",width:64}},{type:"Random",title:"RampDownLarge"}]}},StoneTower:{width:8,height:32,contents:{mode:"Random",direction:"right",snap:"bottom",children:[{percent:50,type:"Known",title:"Stone",snap:"bottom",sizing:{height:24},arguments:{height:24}},{percent:50,type:"Known",title:"Stone",stretch:{height:!0}}]}},StoneTowerLarge:{width:8,height:64,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Stone",arguments:{height:64},sizing:{height:64}}]}},CannonTower:{width:24,height:32,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"Cannon"},{type:"Random",title:"Nothing"}]}},OverScenery:{width:160,height:80,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Random",title:"Nothing",sizing:{height:8}},{type:"Random",title:"OverLandScenery"},{type:"Random",title:"Nothing",sizing:{height:32}}]}},OverLandScenery:{height:40,width:160,contents:{mode:"Random",direction:"right",snap:"bottom",spacing:{min:-4,max:40,units:4},children:[{percent:25,type:"Random",title:"HillSmall"},{percent:25,type:"Random",title:"HillLarge"},{percent:12,type:"Random",title:"Bush1"},{percent:11,type:"Random",title:"Bush2"},{percent:12,type:"Random",title:"Bush3"},{percent:10,type:"Random",title:"Fence"},{percent:5,type:"Random",title:"PlantSmall"},{percent:5,type:"Random",title:"PlantLarge"}]}},OverClouds:{height:56,width:2528,contents:{mode:"Random",direction:"right",snap:"top",spacing:{min:16,max:80,units:8},children:[{percent:40,type:"Random",title:"CloudClump1"},{percent:35,type:"Random",title:"CloudClump2"},{percent:25,type:"Random",title:"CloudClump3"}]}},CloudClump1:{height:56,width:16,contents:{mode:"Certain",direction:"top",spacing:{min:16,max:40,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"Cloud1"}]}},CloudClump2:{height:56,width:24,contents:{mode:"Certain",direction:"top",spacing:{min:16,max:40,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"Cloud2"}]}},CloudClump3:{height:56,width:32,contents:{mode:"Certain",direction:"top",spacing:{min:16,max:40,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"Cloud3"}]}},Cloud:{width:32,height:12,contents:{mode:"Random",direction:"right",limit:1,children:[{percent:40,type:"Random",title:"Cloud1"},{percent:35,type:"Random",title:"Cloud2"},{percent:25,type:"Random",title:"Cloud3"}]}},OverSegwaySpotScenery:{width:8,height:23,contents:{mode:"Random",direction:"top",snap:"bottom",children:[{percent:70,type:"Random",title:"Nothing",stretch:{height:!0}},{percent:15,type:"Random",title:"PlantSmall"},{percent:15,type:"Random",title:"PlantLarge"}]}},Goomba:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Goomba"}]}},Koopa:{width:8,height:12,contents:{mode:"Random",direction:"right",snap:"bottom",children:[{percent:20,type:"Known",title:"Koopa"},{percent:40,type:"Known",title:"Koopa",arguments:{smart:!0}},{percent:15,type:"Known",title:"Koopa",arguments:{jumping:!0}},{percent:25,type:"Known",title:"Koopa",arguments:{smart:!0,jumping:!0}}]}},KoopaJumping:{width:8,height:12,contents:{mode:"Random",direction:"top",snap:"left",children:[{percent:35,type:"Known",title:"Koopa",arguments:{jumping:!0}},{percent:65,type:"Known",title:"Koopa",arguments:{smart:!0,jumping:!0}}]}},Beetle:{width:8,height:8.5,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Beetle"}]}},HammerBro:{width:8,height:12,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"HammerBro"}]}},Blooper:{width:8,height:40,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Blooper"}]}},Lakitu:{width:8,height:80,contents:{mode:"Certain",direction:"top",snap:"right",spacing:4,children:[{type:"Random",title:"Nothing",sizing:{height:0}},{type:"Known",title:"Lakitu"}]}},Podoboo:{width:8,height:8,contents:{mode:"Certain",direction:"top",spacing:-40,snap:"bottom",children:[{type:"Random",title:"Nothing"},{type:"Known",title:"Podoboo"}]}},Brick:{width:8,height:8,contents:{mode:"Random",direction:"right",snap:"top",children:[{percent:85,type:"Known",title:"Brick"},{percent:10,type:"Known",title:"Brick",arguments:{contents:"Coin"}},{percent:5,type:"Known",title:"Brick",arguments:{contents:"Star"}}]}},Block:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Block",arguments:[{percent:90,values:{}},{percent:9,values:{contents:"Mushroom"}},{percent:1,values:{contents:"Mushroom1Up",hidden:!0}}]}]}},BlockTreasure:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Block",arguments:[{percent:35,values:{contents:"Mushroom"}},{percent:35,values:{contents:"Star"}},{percent:30,values:{contents:"Mushroom1Up"}}]}]}},BlockTreasureFloating:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Block",arguments:[{percent:20,values:{contents:"Mushroom"}},{percent:20,values:{hidden:!0,contents:"Mushroom"}},{percent:15,values:{contents:"Star"}},{percent:15,values:{hidden:!0,contents:"Star"}},{percent:20,values:{contents:"Mushroom1Up"}},{percent:20,values:{hidden:!0,contents:"Mushroom1Up"}}]}]}},BlockReward:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Block",arguments:[{percent:30,values:{hidden:!0}},{percent:30,values:{hidden:!0,contents:"Mushroom"}},{percent:30,values:{hidden:!0,contents:"Star"}},{percent:30,values:{hidden:!0,contents:"Mushroom1Up"}}]}]}},Bridge:{width:8,height:8,contents:{mode:"Certain",snap:"bottom",direction:"right",children:[{type:"Known",title:"Bridge",stretch:{width:!0},arguments:{macro:"Bridge"}}]}},Tree:{width:24,height:8,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Tree",stretch:{width:!0},arguments:{macro:"Tree"}}]}},TreeCoin:{width:8,height:12,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Random",title:"Nothing",sizing:{height:4}},{type:"Random",title:"Coin",sizing:{height:4}}]}},TreeCoins:{width:8,height:12,contents:{mode:"Random",direction:"right",stretch:{width:!0},spacing:4,children:[{percent:55,type:"Random",title:"TreeCoin"},{percent:30,type:"Random",title:"Nothing"},{percent:15,type:"Random",title:"EnemyEasy"}]}},TreeLargeCoins:{width:64,height:12,contents:{mode:"Certain",direction:"right",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"TreeCoins",sizing:{width:56}}]}},TreeFancy:{width:24,height:8,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Tree",stretch:{width:!0},arguments:{macro:"Tree"}},{type:"Random",title:"TreeCoins",stretch:{width:!0}}]}},Coin:{width:5,height:7,contents:{mode:"Certain",direction:"right",children:[{type:"Known",title:"Coin"}]}},PipeRandom:{width:16,height:40,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Random",title:"Nothing",sizing:{height:0}},{type:"Known",title:"Pipe",sizing:{height:0},arguments:[{percent:25,values:{macro:"Pipe",piranha:!0,height:16}},{percent:5,values:{macro:"Pipe",height:16}},{percent:25,values:{macro:"Pipe",piranha:!0,height:24}},{percent:5,values:{macro:"Pipe",height:24}},{percent:20,values:{macro:"Pipe",piranha:!0,height:32}},{percent:5,values:{macro:"Pipe",height:32}},{percent:5,values:{macro:"Pipe",piranha:!0,transport:"Underworld",height:32}},{percent:5,values:{macro:"Pipe",transport:"Underworld",height:32}},{percent:3,values:{macro:"Pipe",piranha:!0,transport:"Underwater",height:32}},{percent:2,values:{macro:"Pipe",transport:"Underwater",height:32}}]}]}},PipeRandomTransit:{width:16,height:40,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Known",title:"Pipe",sizing:{height:0},arguments:[{percent:50,values:{macro:"Pipe",piranha:!0,height:24,transport:"Underworld"}},{percent:50,values:{macro:"Pipe",piranha:!0,height:32,transport:"Underworld"}}]}]}},PipeFloating:{width:64,height:80,contents:{mode:"Certain",direction:"top",snap:"bottom",spacing:{min:8,max:32,units:8},children:[{type:"Random",title:"Nothing"},{type:"Random",title:"PipeFloatingContents"}]}},PipeFloatingContents:{width:64,height:8,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"Nothing"},{type:"Random",title:"PipeFloatingSolid"},{type:"Random",title:"PipeFloatingCenter"},{type:"Random",title:"PipeFloatingSolid"}]}},PipeFloatingSolid:{width:8,height:8,contents:{mode:"Random",direction:"right",children:[{percent:65,type:"Random",title:"Brick"},{percent:35,type:"Random",title:"Block"}]}},PipeFloatingCenter:{width:16,height:8,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"Stone",arguments:{width:16}},{type:"Random",title:"PipeRandomTransit"}]}},Pipe:{width:16,height:32,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"Pipe"}]}},PipeHorizontal:{width:16,height:16,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"PipeHorizontal"}]}},PipeVertical:{width:16,height:16,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"PipeVertical"}]}},PipeCorner:{width:32,height:16,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"PipeCorner",arguments:{macro:"PipeCorner"}}]}},CannonSmall:{width:8,height:8,contents:{mode:"Certain",snap:"bottom",children:[{type:"Final",source:"CannonSmall",title:"Cannon"}]}},CannonMedium:{width:8,height:16,contents:{mode:"Certain",children:[{type:"Final",source:"CannonMedium",title:"Cannon",arguments:{height:16}}]}},CannonLarge:{width:8,height:24,contents:{mode:"Certain",children:[{type:"Final",source:"CannonLarge",title:"Cannon",arguments:{height:24}}]}},Floor:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"top",children:[{type:"Known",title:"Floor",stretch:{width:!0},arguments:{height:"Infinity"}}]}},Springboard:{width:8,height:14.5,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Springboard"}]}},Stone:{width:8,height:8,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Known",title:"Stone"}]}},CastleBlock:{width:8,height:8,contents:{mode:"Certain",children:[{type:"Known",title:"CastleBlock"}]}},CastleBlockActive:{width:8,height:8,contents:{mode:"Certain",direction:"right",children:[{type:"Known",title:"CastleBlock",arguments:[{percent:30,values:{}},{percent:30,values:{fireballs:6}},{percent:30,values:{fireballs:6,direction:1}},{percent:5,values:{fireballs:12}},{percent:5,values:{fireballs:12,direction:1}}]}]}},Bush1:{width:16,height:8,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"Bush1"}]}},Bush2:{width:24,height:8,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"Bush2"}]}},Bush3:{width:32,height:8,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"Bush3"}]}},Cloud1:{width:16,height:12,contents:{mode:"Certain",children:[{type:"Known",title:"Cloud1"}]}},Cloud2:{width:24,height:12,contents:{mode:"Certain",children:[{type:"Known",title:"Cloud2"}]}},Cloud3:{width:32,height:12,contents:{mode:"Certain",children:[{type:"Known",title:"Cloud3"}]}},Fence:{width:8,height:8,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"Fence"}]}},HillSmall:{width:24,height:9.5,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"HillSmall"}]}},HillLarge:{width:40,height:17.5,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"HillLarge"}]}},PlantSmall:{width:7,height:15,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"PlantSmall"}]}},PlantLarge:{width:8,height:23,contents:{mode:"Certain",snap:"bottom",children:[{type:"Known",title:"PlantLarge"}]}},Water:{width:4,height:5,contents:{mode:"Certain",snap:"bottom",direction:"right",children:[{type:"Known",title:"Water",stretch:{width:!0},arguments:{macro:"Water"}}]}},LakituStop:{width:8,height:8,contents:{mode:"Certain",children:[{type:"Known",title:"LakituStop",arguments:{macro:"LakituStop"}}]}},Platform:{width:16,height:4,contents:{mode:"Certain",children:[{type:"Known",title:"Platform",stretch:{width:!0}}]}},PlatformGenerator:{width:24,height:80,contents:{mode:"Certain",children:[{type:"Known",title:"PlatformGenerator",arguments:[{percent:25,values:{macro:"PlatformGenerator"}},{percent:25,values:{macro:"PlatformGenerator",width:24}},{percent:25,values:{macro:"PlatformGenerator",direction:-1,width:24}},{percent:25,values:{macro:"PlatformGenerator",direction:-1}}]}]}},OverEnd:{width:288,height:80,contents:{mode:"Certain",direction:"top",snap:"left",children:[{type:"Random",title:"OverEndFloor"},{type:"Random",title:"OverEndLand"}]}},OverEndFloor:{width:288,height:8,contents:{mode:"Certain",children:[{type:"Random",title:"Floor"}]}},OverEndLand:{width:288,height:64,contents:{mode:"Certain",direction:"right",snap:"bottom",children:[{type:"Random",title:"LakituStop"},{type:"Random",title:"RampUpLarge"},{type:"Random",title:"StoneTowerLarge"},{type:"Random",title:"Nothing",sizing:{width:64}},{type:"Random",title:"OverEndOutsideCastle"},{type:"Random",title:"ScrollBlocker"}]}},OverEndOutsideCastle:{width:144,height:80,contents:{mode:"Multiple",direction:"right",spacing:-112,children:[{type:"Random",title:"EndOutsideCastle"},{type:"Random",title:"OverEndOutsideCastleScenery"}]}},OverEndOutsideCastleScenery:{width:144,height:80,contents:{mode:"Multiple",direction:"top",spacing:-8,children:[{type:"Random",title:"Nothing",sizing:{height:0}},{type:"Random",title:"OverScenery"}]}},EndOutsideCastle:{width:144,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"EndOutsideCastle",arguments:{macro:"EndOutsideCastle",large:!0,transport:{map:"Random",location:"Castle"}},sizing:{height:0}}]}},UnderworldEndOutsideCastle:{width:144,Height:88,contents:{mode:"Certain",direction:"top",children:[{type:"Random",title:"EndOutsideCastle"}]}},StartInsideCastle:{width:112,height:8,contents:{mode:"Certain",direction:"top",snap:"bottom",children:[{type:"Known",title:"StartInsideCastle",arguments:{macro:"StartInsideCastle",width:112}}]}},EndInsideCastle:{width:248,height:80,contents:{mode:"Certain",direction:"top",children:[{type:"Known",title:"EndInsideCastle",arguments:{macro:"EndInsideCastle",spawnType:"Bowser",npc:"Peach",transport:{map:"Random",location:"Over"},topScrollEnabler:!0},sizing:{height:8}}]}},CheepsStart:{width:0,height:0,contents:{mode:"Certain",children:[{type:"Known",title:"CheepsStart",arguments:{macro:"CheepsStart"}}]}},CheepsStop:{width:0,height:0,contents:{mode:"Certain",children:[{type:"Known",title:"CheepsStop",arguments:{macro:"CheepsStop"}}]}},ScrollEnabler:{width:0,height:0,contents:{mode:"Certain",direction:"right",children:[{type:"Known",title:"ScrollEnabler"}]}},ScrollBlocker:{width:0,height:0,contents:{mode:"Certain",direction:"right",children:[{type:"Known",title:"ScrollBlocker"}]}},Nothing:{width:8,height:8,contents:{mode:"Certain",children:[]}}}};PlayMarioJas.PlayMarioJas.settings.groups = {
    "groupNames": ["Solid", "Character", "Scenery", "Text"],
    "groupTypes": "Array",
};
    PlayMarioJas.PlayMarioJas.settings.audio = {
    "directory": "S",
    "fileTypes": ["ogg"],
    "library": {
        "S": [
            "BreakBlock",
            "Bump",
            "Coin",
            "Fail",
            "Fireball",
            "Flagpole",
            "GainLife",
            "GameOver2",
            "GameOver",
            "Hurry",
            "JumpSmall",
            "JumpSuper",
            "Kick",
            "LComp",
            "PlayerDies",
            "Pause",
            "Pipe",
            "PowerDown",
            "PApp",
            "Powerup",
            "SC",
            "VineEmerging",
            "WorldClear",
            "YouDead"
        ],
        "T": [
            "Over",
        ]
    }
};
/// <reference path="../PlayMarioJas.ts" />
var PlayMarioJas;
(function (PlayMarioJas) {
    "use strict";
    PlayMarioJas.PlayMarioJas.settings.help = {
        "globalName": "FSM",
        "aliases": [
            ["{GAME}", "FSM"]
        ],
        "openings": [
            ["%cHi, thanks for playing Mario! I see you're using the console.%c :)", "head"],
            ["If you'd like to know the common cheats, enter %c{GAME}.UsageHelper.displayHelpOptions();%c here.", "code"]
        ],
        "options": {
            "Map": [
                {
                    "title": "{GAME}.setMap",
                    "description": "Go to a specified map and location.",
                    "usage": "{GAME}.setMap(<map>[, <location>]);",
                    "examples": [
                        {
                            "code": "{GAME}.setMap(\"1-1\");",
                            "comment": "Starts map 1-1."
                        }, {
                            "code": "{GAME}.setMap(\"1-2\", 1);",
                            "comment": "Starts map 1-2, at the second location."
                        }, {
                            "code": "{GAME}.setMap(\"Random\");",
                            "comment": "Starts the random map."
                        }, {
                            "code": "{GAME}.setMap(\"Random\", \"Underworld\");",
                            "comment": "Starts the random map in the Underworld."
                        }]
                }],
            "Things": [
                {
                    "title": "{GAME}.addThing",
                    "description": "Adds a new Thing to the game.",
                    "usage": "{GAME}.addThing(<thing>, left, top);",
                    "examples": [
                        {
                            "code": "{GAME}.addThing(\"Goomba\", 256, 384);",
                            "comment": "Adds a Goomba to the game."
                        }, {
                            "code": "{GAME}.addThing(\"Mushroom\", {GAME}.player.right + 80, {GAME}.player.top);",
                            "comment": "Adds a Mushroom to the right of the player."
                        }, {
                            "code": "{GAME}.addThing([\"Koopa\", { \"smart\": true }], 256, 368);",
                            "comment": "Adds a smart Koopa to the game."
                        }, {
                            "code": "{GAME}.addThing({GAME}.ObjectMaker.make(\"Koopa\", { \"smart\": true, \"jumping\": true }), 256, 368);",
                            "comment": "Adds a smart jumping Koopa to the game."
                        }]
                }, {
                    "title": "{GAME}.GroupHolder.getGroups",
                    "description": "Gets the groups of in-game Things.",
                    "usage": "{GAME}.GroupHolder.getGroups();"
                }, {
                    "title": "{GAME}.GroupHolder.get*******Group",
                    "description": "Retrieves the group of in-game Things under that name.",
                    "usage": "{GAME}.GroupHolder.get*******Group();",
                    "examples": [
                        {
                            "code": "{GAME}.GroupHolder.getCharacterGroup();",
                            "comment": "Retrieves the currently playing Characters."
                        }]
                }, {
                    "title": "{GAME}.GroupHolder.get*******",
                    "description": "Retrieves the numbered Thing from its group.",
                    "usage": "{GAME}.GroupHolder.get*******(<index>);",
                    "examples": [
                        {
                            "code": "{GAME}.GroupHolder.getCharacter(0);",
                            "comment": "Retrieves the first playing Character."
                        }]
                }],
            "Physics": [
                {
                    "title": "{GAME}.shiftBoth",
                    "description": "Shifts a Thing horizontally and/or vertically.",
                    "usage": "{GAME}.shiftBoth(<thing>, <dx>[, <dy>]);",
                    "examples": [
                        {
                            "code": "{GAME}.shiftBoth({GAME}.player, 700);",
                            "comment": "Shifts the player 700 spaces to the right"
                        }, {
                            "code": "{GAME}.player.resting = undefined;\r\n{GAME}.shiftBoth({GAME}.player, 0, -{GAME}.player.top);",
                            "comment": "Shifts the player to the top of the screen."
                        }]
                }, {
                    "title": "{GAME}.killNormal",
                    "description": "Kills a specified Character with animation.",
                    "usage": "{GAME}.killNormal(<thing>);",
                    "examples": [
                        {
                            "code": "{GAME}.killNormal({GAME}.GroupHolder.getCharacter(0));",
                            "comment": "Kills the first playing Character."
                        }, {
                            "code": "{GAME}.GroupHolder.getSceneryGroup().forEach({GAME}.killNormal.bind(FSM));",
                            "comment": "Kills all playing Scenery."
                        }]
                }, {
                    "title": "{GAME}.player.gravity",
                    "description": "Sets the current Player's gravity.",
                    "usage": "{GAME}.player.gravity = <number>;",
                    "examples": [
                        {
                            "code": "{GAME}.player.gravity = {GAME}.MapScreener.gravity / 2;",
                            "comment": "Sets the player's gravity to half the default."
                        }]
                }],
            "Powerups": [
                {
                    "title": "{GAME}.playerShroom",
                    "description": "Simulates the player hitting a Mushroom.",
                    "usage": "{GAME}.playerShroom({GAME}.player);"
                }, {
                    "title": "{GAME}.playerStarUp",
                    "description": "Simulates the player hitting a Star.",
                    "usage": "{GAME}.playerStarUp({GAME}.player);"
                }],
            "Statistics": [
                {
                    "title": "{GAME}.ItemsHolder.getKeys",
                    "description": "Gets the keys you can manipulate.",
                    "usage": "{GAME}.ItemsHolder.getKeys();"
                }, {
                    "title": "{GAME}.ItemsHolder.setItem",
                    "description": "Sets a stored statitistic to a value.",
                    "usage": "{GAME}.ItemsHolder.setItem(\"<key>\", <number>);",
                    "examples": [
                        {
                            "code": "{GAME}.ItemsHolder.setItem(\"coins\", 77);",
                            "comment": "Sets the number of coins to 77."
                        }, {
                            "code": "{GAME}.ItemsHolder.setItem(\"lives\", 7);",
                            "comment": "Sets the number of lives to seven."
                        }, {
                            "code": "{GAME}.ItemsHolder.setItem(\"lives\", Infinity);",
                            "comment": "Sets the number of lives to Infinity and beyond."
                        }]
                }, {
                    "title": "{GAME}.ItemsHolder.increase",
                    "description": "Increases the number of coins you have.",
                    "usage": "{GAME}.ItemsHolder.increase(\"coins\", <number>);",
                    "examples": [
                        {
                            "code": "{GAME}.ItemsHolder.increase(\"coins\", 7);",
                            "comment": "Increases the number of coins by seven."
                        }]
                }],
            "Mods": [
                {
                    "title": "{GAME}.ModAttacher.getMods",
                    "description": "Gets all the available mods.",
                    "usage": "{GAME}.ItemsHolder.getMods();"
                }, {
                    "title": "{GAME}.ModAttacher.enableMod",
                    "description": "Enables a mod.",
                    "usage": "{GAME}.enableMod(\"<key>\");",
                    "examples": [
                        {
                            "code": "{GAME}.enableMod(\"Gradient Skies\");",
                            "comment": "Enables the \"Gradient Skies\" mod."
                        }]
                }, {
                    "title": "{GAME}.ModAttacher.disableMod",
                    "description": "Disables a mod.",
                    "usage": "{GAME}.disableMod(\"<key>\");",
                    "examples": [
                        {
                            "code": "{GAME}.disableMod(\"Gradient Skies\");",
                            "comment": "Disables the \"Gradient Skies\" mod."
                        }]
                }]
        },
        "optionHelp": "To focus on a group, enter %c{GAME}.UsageHelper.displayHelpOption(\"<group-name>\");%c"
    };
})(PlayMarioJas || (PlayMarioJas = {}));
PlayMarioJas.PlayMarioJas.settings.input = {
    "InputWritrArgs": {
        "aliases": {
            // Keyboard aliases
            "left":   [65, 37],     // a,     left
            "right":  [68, 39],     // d,     right
            "up":     [87, 38],     // w,     up
            "down":   [83, 40],     // s,     down
            "sprint": [16, 32],     // shift, space
            "pause":  [80],         // p (pause)
            // Mouse aliases
            "rightclick": [3],
        },
        "triggers": {
            "onkeydown": {
                "left": PlayMarioJas.PlayMarioJas.prototype.keyDownLeft,
                "right": PlayMarioJas.PlayMarioJas.prototype.keyDownRight,
                "up": PlayMarioJas.PlayMarioJas.prototype.keyDownUp,
                "down": PlayMarioJas.PlayMarioJas.prototype.keyDownDown,
                "sprint": PlayMarioJas.PlayMarioJas.prototype.keyDownSprint,
                "pause": PlayMarioJas.PlayMarioJas.prototype.keyDownPause,
                "mute": PlayMarioJas.PlayMarioJas.prototype.keyDownMute,
            },
            "onkeyup": {
                "left": PlayMarioJas.PlayMarioJas.prototype.keyUpLeft,
                "right": PlayMarioJas.PlayMarioJas.prototype.keyUpRight,
                "up": PlayMarioJas.PlayMarioJas.prototype.keyUpUp,
                "down": PlayMarioJas.PlayMarioJas.prototype.keyUpDown,
                "sprint": PlayMarioJas.PlayMarioJas.prototype.keyUpSprint,
                "pause": PlayMarioJas.PlayMarioJas.prototype.keyUpPause
            },
            "onmousedown": {
                "rightclick": PlayMarioJas.PlayMarioJas.prototype.mouseDownRight
            },
            "oncontextmenu": {},
            "ondevicemotion": {
                "devicemotion": PlayMarioJas.PlayMarioJas.prototype.deviceMotion
            }
        }
    }
};
PlayMarioJas.PlayMarioJas.settings.items = {
    "prefix": "PlayMarioJas",
    "doMakeContainer": true,
    "displayChanges": {
        "Infinity": "INF"
    },
    "containersArguments": [
        ["table", {
            "id": "dataDisplay",
            "style": {
                "position": "absolute",
                "top": 0,
                "width": "100%",
                "color": "white",
                "fontSize": "21px",
                "textTransform": "uppercase",
            }
        }],
        ["tr", {
            "style": {
                "padding": "7px 14px 0 14px",
                "textAlign": "center"
            }
        }]
    ],
    "defaults": {
        "elementTag": "td"
    },
    "values": {
        "volume": {
            "valueDefault": 1
        },
        "muted": {
            "valueDefault": false
        },
        "power": {
            "valueDefault": 1,
            "storeLocally": false
        },
        "traveled": {
            "valueDefault": 0
        },
        "score": {
            "valueDefault": 0,
            "digits": 6,
            "hasElement": true,
            "modularity": 100000,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "time": {
            "valueDefault": 0,
            "digits": 3,
            "hasElement": true,
            "minimum": 0,
            "triggers": {
                "100": function (EightBitter) {
                    if (!EightBitter.MapScreener.notime) {
                        EightBitter.AudioPlayer.playThemePrefixed("Hurry");
                    }
                }
            },
            "onMinimum": function (EightBitter) {
                EightBitter.killPlayer(EightBitter.player, true);
            }
        },
        "world": {
            "valueDefault": 0,
            "hasElement": true
        },
        "coins": {
            "valueDefault": 0,
            "hasElement": true,
            "modularity": 100,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "lives": {
            "valueDefault": 3,
            "hasElement": true
        },
        "luigi": {
            "valueDefault": 0,
            "storeLocally": true
        }
    }
};
PlayMarioJas.PlayMarioJas.settings.maps = {
    "mapDefault": "1-1",
    "locationDefault": "0",
    "groupTypes": ["Character", "Solid", "Scenery", "Text"],
    "requireEntrance": true,
    "screenAttributes": [
        "gravity",
        "setting",
        "time",
        "underwater",
        "floor",
        "jumpmod",
        "maxyvel",
        "maxyvelinv",
        "notime",
        "nokeys",
        "canscroll"
    ],
    "screenVariables": {
        "bottomDeathDifference": function (GameStarter) {
            return GameStarter.unitsize * 12;
        },
        "bottomPlatformMax": function (GameStarter) {
            var area = GameStarter.AreaSpawner.getArea(),
                diff = GameStarter.MapScreener.bottomDeathDifference;
                
            if (!area) {
                return -1;
            }
                
            return (area.floor + diff) * GameStarter.unitsize;
        },
        "gravity": function (GameStarter) {
            var area = GameStarter.AreaSpawner.getArea();
            
            if (area && area.underwater) {
                return GameStarter.gravity / 2.8;
            }
            
            return GameStarter.gravity;
        }
    },
    "onSpawn": PlayMarioJas.PlayMarioJas.prototype.addPreThing,
    "macros": {
        "Example": PlayMarioJas.PlayMarioJas.prototype.macroExample,
        "Fill": PlayMarioJas.PlayMarioJas.prototype.macroFillPreThings,
        "Pattern": PlayMarioJas.PlayMarioJas.prototype.macroFillPrePattern,
        "Floor": PlayMarioJas.PlayMarioJas.prototype.macroFloor,
        "Pipe": PlayMarioJas.PlayMarioJas.prototype.macroPipe,
        "PipeCorner": PlayMarioJas.PlayMarioJas.prototype.macroPipeCorner,
        "Tree": PlayMarioJas.PlayMarioJas.prototype.macroTree,
        "Shroom": PlayMarioJas.PlayMarioJas.prototype.macroShroom,
        "Water": PlayMarioJas.PlayMarioJas.prototype.macroWater,
        "CastleSmall": PlayMarioJas.PlayMarioJas.prototype.macroCastleSmall,
        "CastleLarge": PlayMarioJas.PlayMarioJas.prototype.macroCastleLarge,
        "Ceiling": PlayMarioJas.PlayMarioJas.prototype.macroCeiling,
        "Bridge": PlayMarioJas.PlayMarioJas.prototype.macroBridge,
        "Scale": PlayMarioJas.PlayMarioJas.prototype.macroScale,
        "PlatformGenerator": PlayMarioJas.PlayMarioJas.prototype.macroPlatformGenerator,
        "WarpWorld": PlayMarioJas.PlayMarioJas.prototype.macroWarpWorld,
        "CheepsStart": PlayMarioJas.PlayMarioJas.prototype.macroCheepsStart,
        "CheepsStop": PlayMarioJas.PlayMarioJas.prototype.macroCheepsStop,
        "BulletBillsStart": PlayMarioJas.PlayMarioJas.prototype.macroBulletBillsStart,
        "BulletBillsStop": PlayMarioJas.PlayMarioJas.prototype.macroBulletBillsStop,
        "LakituStop": PlayMarioJas.PlayMarioJas.prototype.macroLakituStop,
        "StartInsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroStartInsideCastle,
        "EndOutsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroEndOutsideCastle,
        "EndInsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroEndInsideCastle,
        "Section": PlayMarioJas.PlayMarioJas.prototype.macroSection,
        "SectionPass": PlayMarioJas.PlayMarioJas.prototype.macroSectionPass,
        "SectionFail": PlayMarioJas.PlayMarioJas.prototype.macroSectionFail,
        "SectionDecider": PlayMarioJas.PlayMarioJas.prototype.macroSectionDecider
    },
    "entrances": {
        "Normal": PlayMarioJas.PlayMarioJas.prototype.mapEntranceNormal,
        "Plain": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePlain,
        "Castle": PlayMarioJas.PlayMarioJas.prototype.mapEntranceCastle,
        "Walking": PlayMarioJas.PlayMarioJas.prototype.mapEntranceWalking,
        "Vine": PlayMarioJas.PlayMarioJas.prototype.mapEntranceVine,
        "PipeVertical": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePipeVertical,
        "PipeHorizontal": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePipeHorizontal,
    },
    "patterns": (function (patterns) {
        var pattern,
            i;
        for (i in patterns) {
            if (patterns.hasOwnProperty(i)) {
                pattern = patterns[i];
                if (!pattern.length) {
                    continue;
                }
                
                // Pattern's last array should previously be ["blank", width]
                pattern.width = pattern[pattern.length - 1][1];
                pattern.pop();
            }
        }
        return patterns;
    })({
        "BackRegular": [
            ["HillLarge", 0, 0],
            ["Cloud1", 68, 68],
            ["Bush3", 92, 0],
            ["HillSmall", 128, 0],
            ["Cloud1", 156, 76],
            ["Bush1", 188, 0],
            ["Cloud3", 220, 68],
            ["Cloud2", 292, 76],
            ["Bush2", 332, 0],
            ["Blank", 384]
        ],
        "BackCloud": [
            ["Cloud2", 28, 64],
            ["Cloud1", 76, 32],
            ["Cloud2", 148, 72],
            ["Cloud1", 228, 0],
            ["Cloud1", 284, 32],
            ["Cloud1", 308, 40],
            ["Cloud1", 372, 0],
            ["Blank", 384]
        ],
        "BackFence": [
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin": [
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin2": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0],
            ["Fence", 128, 0, 16],
            ["Cloud1", 148, 68],
            // ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin3": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ]
    }),
    "library": {}
};
/// <reference path="../PlayMarioJas.ts" />
var PlayMarioJas;
(function (PlayMarioJas) {
    "use strict";
    PlayMarioJas.PlayMarioJas.settings.math = {
        "equations": {
            /**
             * Determines whether a player is within touching distance of a castle axe
             * (assuming it is alive), so that it can start the BowserVictory cutscene.
             *
             * @param thing   A player close to a castle axe.
             * @param other   A castle axe that can defeat Bowser.
             * @returns Whether the player is both alive and close enough to the axe.
             */
            "canPlayerTouchCastleAxe": function (constants, equations, thing, other) {
                if (!thing.FSM.isThingAlive(thing)) {
                    return false;
                }
                if (thing.right < other.left + other.EightBitter.unitsize) {
                    return false;
                }
                if (thing.bottom > other.bottom - other.EightBitter.unitsize) {
                    return false;
                }
                return true;
            },
            /**
             * Decreases a player's jumping yvel based on whether it's running.
             */
            "decreasePlayerJumpingYvel": function (constants, equations, player) {
                var jumpmod = player.FSM.MapScreener.jumpmod - player.xvel * .0014, power = Math.pow(player.keys.jumplev, jumpmod), dy = player.FSM.unitsize / power;
                player.yvel = Math.max(player.yvel - dy, constants.maxyvelinv);
            },
            /**
             * Decreases a player's running xvel based on whether it's sprinting.
             * @returns {Boolean} True if the player started or stopped skidding,
             *                    or false if the skidding status was unchanged.
             */
            "decreasePlayerRunningXvel": function (constants, equations, player) {
                // If a button is pressed, hold/increase speed
                if (player.keys.run !== 0 && !player.crouching) {
                    var dir = player.keys.run, 
                    // No sprinting underwater
                    sprinting = Number(player.keys.sprint && !player.FSM.MapScreener.underwater) || 0, adder = dir * (.098 * (Number(sprinting) + 1)), decel = 0, skiddingChanged = false;
                    // Reduce the speed, both by subtracting and dividing a little
                    player.xvel += adder || 0;
                    player.xvel *= .98;
                    decel = .0007;
                    // If you're accelerating in the opposite direction from your current velocity, that's a skid
                    if ((player.keys.run > 0) === player.moveleft) {
                        if (!player.skidding) {
                            player.skidding = true;
                            skiddingChanged = true;
                        }
                    }
                    else if (player.skidding) {
                        // Not accelerating: make sure you're not skidding
                        player.skidding = false;
                        skiddingChanged = true;
                    }
                }
                else {
                    // Otherwise slow down a bit
                    player.xvel *= .98;
                    decel = .035;
                }
                if (player.xvel > decel) {
                    player.xvel -= decel;
                }
                else if (player.xvel < -decel) {
                    player.xvel += decel;
                }
                else if (player.xvel !== 0) {
                    player.xvel = 0;
                    if (!player.FSM.MapScreener.nokeys && player.keys.run === 0) {
                        if (player.keys.leftDown) {
                            player.keys.run = -1;
                        }
                        else if (player.keys.rightDown) {
                            player.keys.run = 1;
                        }
                    }
                }
                return skiddingChanged;
            },
            /**
             * @returns A player's yvel for when riding up a springboard.
             */
            "springboardYvelUp": function (constants, equations, thing) {
                return Math.max(thing.FSM.unitsize * -2, thing.tensionSave * -.98);
            },
            /**
             * @returns How many fireworks to show at the end of a level,
             *          based on the given time's rightmost digit.
             */
            "numberOfFireworks": function (constants, equations, time) {
                var numFireworks = time % 10;
                if (!(numFireworks === 1 || numFireworks === 3 || numFireworks === 6)) {
                    return 0;
                }
                return numFireworks;
            }
        }
    };
})(PlayMarioJas || (PlayMarioJas = {}));
PlayMarioJas.PlayMarioJas.settings.objects = {
    "onMake": "onMake",
    "indexMap": ["width", "height"],
    "doPropertiesFull": true,
    "inheritance": {
        "Quadrant": {},
        "Map": {},
        "Area": {},
        "Location": {},
        "Thing": {
            "character": {
                "Player": {},
                "enemy": {
                    "Goomba": {},
                    "Koopa": {},
                    "Beetle": {},
                    "Piranha": {},
                    "Blooper": {},
                    "CheepCheep": {},
                    "Podoboo": {},
                    "BulletBill": {},
                    "Lakitu": {},
                    "SpinyEgg": {},
                    "Spiny": {},
                    "HammerBro": {
                        "Bowser": {}
                    },
                    "Hammer": {},
                    "BowserFire": {},
                },
                "item": {
                    "Mushroom": {
                        "Mushroom1Up": {},
                        "MushroomDeathly": {}
                    },
                    "FireFlower": {},
                    "Fireball": {
                        "CastleFireball": {}
                    },
                    "Star": {},
                    "Shell": {
                        "BeetleShell": {}
                    },
                    "Vine": {}
                },
                "BrickShard": {},
                "Bubble": {},
                "Coin": {},
                "Firework": {},
            },
            "solid": {
                "Block": {},
                "BridgeBase": {},
                "Brick": {},
                "DeadGoomba": {},
                "Pipe": {},
                "PipeHorizontal": {},
                "PipeVertical": {},
                "Platform": {},
                "Stone": {
                    "RestingStone": {}
                },
                "Cannon": {},
                "Springboard": {},
                "Floor": {},
                "TreeTop": {},
                "ShroomTop": {},
                "CastleAxe": {},
                "CastleBlock": {},
                "CastleBridge": {},
                "CastleChain": {},
                "Coral": {},
                "WaterBlocker": {},
                "detector": {
                    "DetectCollision": {
                        "ScrollEnabler": {},
                    },
                    "DetectWindow": {
                        "ScrollBlocker": {},
                        "RandomSpawner": {}
                    },
                    "DetectSpawn": {}
                }
            },
            "scenery": {
                "Blank": {},
                "BrickHalf": {},
                "BrickPlain": {},
                "Bush1": {},
                "Bush2": {},
                "Bush3": {},
                "CastleDoor": {},
                "CastleFlag": {},
                "CastleRailing": {},
                "CastleRailingFilled": {},
                "CastleTop": {},
                "CastleWall": {},
                "Cloud": {
                    "Cloud1": {},
                    "Cloud2": {},
                    "Cloud3": {},
                },
                "Fence": {},
                "Flag": {},
                "FlagPole": {},
                "FlagTop": {},
                "HillSmall": {},
                "HillLarge": {},
                "Peach": {},
                "PlatformString": {},
                "PlantSmall": {},
                "PlantLarge": {},
                "Railing": {},
                "ShroomTrunk": {},
                "String": {},
                "StringCornerLeft": {},
                "StringCornerRight": {},
                "Toad": {},
                "TreeTrunk": {},
                "Water": {}
            },
            "Text": {
                "DecorativeBack": {},
                "DecorativeDot": {},
                "TextA": {},
                "TextB": {},
                "TextC": {},
                "TextD": {},
                "TextE": {},
                "TextF": {},
                "TextG": {},
                "TextH": {},
                "TextI": {},
                "TextJ": {},
                "TextK": {},
                "TextL": {},
                "TextM": {},
                "TextN": {},
                "TextO": {},
                "TextP": {},
                "TextQ": {},
                "TextR": {},
                "TextS": {},
                "TextT": {},
                "TextU": {},
                "TextV": {},
                "TextW": {},
                "TextX": {},
                "TextY": {},
                "TextZ": {},
                "Text0": {},
                "Text1": {},
                "Text2": {},
                "Text3": {},
                "Text4": {},
                "Text5": {},
                "Text6": {},
                "Text7": {},
                "Text8": {},
                "Text9": {},
                "TextSpace": {},
                "TextSlash": {},
                "TextCharacters": {
                    "TextPeriod": {},
                    "TextExclamationMark": {},
                    "TextColon": {},
                },
                "TextColored": {
                    "TextColoredD": {},
                    "TextColoredE": {},
                    "TextColoredI": {},
                    "TextColoredN": {},
                    "TextColoredO": {},
                    "TextColoredT": {},
                    "TextColored1": {},
                    "TextColored5": {},
                    "TextColored8": {},
                    "TextColored9": {},
                    "TextColoredSpace": {},
                    "TextColoredCopyright": {}
                },
                "TextLarge": {
                    "TextLargeE": {},
                    "TextLargeP": {},
                    "TextLargeR": {},
                    "TextLargeS": {},
                    "TextLargeU": {}
                },
                "TextHuge": {
                    "TextHugeA": {},
                    "TextHugeB": {},
                    "TextHugeI": {},
                    "TextHugeM": {},
                    "TextHugeO": {},
                    "TextHugeR": {},
                    "TextHugeS": {},
                    "TextHugeSpace": {},
                    "TextHugePeriod": {}
                },
                "ScoreText": {
                    "Text100": {},
                    "Text200": {},
                    "Text400": {},
                    "Text500": {},
                    "Text800": {},
                    "Text1000": {},
                    "Text2000": {},
                    "Text4000": {},
                    "Text5000": {},
                    "Text8000": {},
                    "Text1Up": {},
                },
                "CustomText": {}
            }
        }
    },
    "properties": {
        "Quadrant": {
            "tolx": 0,
            "toly": 0
        },
        "Map": {
            "initialized": false,
            "time": 400
        },
        "Area": {
            "onMake": PlayMarioJas.PlayMarioJas.prototype.initializeArea,
            "setBackground": PlayMarioJas.PlayMarioJas.prototype.setAreaBackground,
            "floor": 104,
            "jumpmod": 1.056,
            "maxyvel": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "maxyvelinv": PlayMarioJas.PlayMarioJas.unitsize * -3.5,
            "onPlayerDeathTimeout": 280,
            "onGameOverTimeout": 280,
            "gravity": PlayMarioJas.PlayMarioJas.gravity,
            "canscroll": true,
            "underwater": false,
            "notime": false,
            "nokeys": false,
            "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.setMap,
            "onGameOver": PlayMarioJas.PlayMarioJas.prototype.gameOver,
            "attributes": {
                "underwater": {
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
                    "stretches": [{
                        "thing": "WaterBlocker",
                        "y": 104,
                        "height": 16
                    }, {
                        "thing": "Water",
                        "y": 88
                    }]
                },
                "blockBoundaries": {
                    "afters": [{
                        "thing": "ScrollBlocker", "noBoundaryStretch": true
                    }]
                },
                "random": {
                    "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.mapEntranceRespawn,
                    "onPlayerDeathTimeout": 140
                },
                "editor": {
                    "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.mapEntranceRespawn,
                    "onPlayerDeathTimeout": 140
                }
            }
        },
        "Location": {
            "area": 0,
            "entry": "Normal"
        },
        "Thing": {
            // Sizing
            "width": 8,
            "height": 8,
            "tolx": 0,
            "toly": PlayMarioJas.PlayMarioJas.unitsize / 8,
            // Velocity
            "xvel": 0,
            "yvel": 0,
            "speed": 0,
            // Score amounts on death
            "scoreStomp": 100,
            "scoreFire": 200,
            "scoreStar": 200,
            "scoreBelow": 100,
            // Placement
            "alive": true,
            "placed": false,
            // Quadrants
            "maxquads": 4,
            "outerok": false,
            // Sprites
            "sprite": "",
            "spriteType": "neither",
            "opacity": 1,
            "scale": 1,
            // Triggered functions
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmerge,
            "onMake": PlayMarioJas.PlayMarioJas.prototype.thingProcess,
            "death": PlayMarioJas.PlayMarioJas.prototype.killNormal,
            "collide": undefined,
            "movement": undefined
        },
        "character": {
            "groupType": "Character",
            "character": true,
            "lookleft": true,
            "moveleft": true,
            "firedeath": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveSimple
        },
        "Player": {
            "player": true,
            "canjump": true,
            "nofire": true,
            "nokillend": true,
            "checkOverlaps": true,
            "power": 1,
            "numballs": 0,
            "moveleft": 0,
            "skidding": 0,
            "star": 0,
            "dieing": 0,
            "nofall": 0,
            "maxvel": 0,
            "paddling": 0,
            "jumpers": 0,
            "landing": 0,
            "tolx": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "toly": 0,
            "walkspeed": PlayMarioJas.PlayMarioJas.unitsize / 2,
            "maxspeed": PlayMarioJas.PlayMarioJas.unitsize * 1.35, // Really only used for timed animations
            "maxspeedsave": PlayMarioJas.PlayMarioJas.unitsize * 1.35,
            "scrollspeed": PlayMarioJas.PlayMarioJas.unitsize * 1.75,
            "running": '', // Evaluates to false for cycle checker
            "fire": PlayMarioJas.PlayMarioJas.prototype.animatePlayerFire,
            "movement": PlayMarioJas.PlayMarioJas.prototype.movePlayer,
            "death": PlayMarioJas.PlayMarioJas.prototype.killPlayer,
            "onResting": PlayMarioJas.PlayMarioJas.prototype.animatePlayerLanding,
            "onRestingOff": PlayMarioJas.PlayMarioJas.prototype.animatePlayerRestingOff,
            "type": "character",
            "name": "player normal small still",
            "getKeys": function () {
                return {
                    "run": 0,
                    "crouch": 0,
                    "jump": 0,
                    "jumplev": 0,
                    "sprint": 0
                };
            }
        },
        "enemy": {
            "type": "enemy",
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideEnemy,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip
        },
        "Goomba": {
            "scoreFire": 100,
            "scoreStar": 100,
            "spawnType": "DeadGoomba",
            "toly": PlayMarioJas.PlayMarioJas.unitsize,
            "death": PlayMarioJas.PlayMarioJas.prototype.killGoomba,
            "spriteCycleSynched": [
                [PlayMarioJas.PlayMarioJas.prototype.unflipHoriz, PlayMarioJas.PlayMarioJas.prototype.flipHoriz]
            ]
        },
        "Koopa": {
            "height": 12,
            "shellspawn": true,
            "spawnType": "Shell",
            "shelltype": "Shell",
            "toly": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "death": PlayMarioJas.PlayMarioJas.prototype.killKoopa,
            "spriteCycle": [
                ["one", "two"]
            ],
            "attributes": {
                "smart": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveSmart,
                    "spawnSettings": {
                        "smart": true
                    }
                },
                "jumping": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveJumping,
                    "jumpheight": PlayMarioJas.PlayMarioJas.unitsize * 1.17,
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
                    "scoreStomp": 400
                },
                "floating": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveFloating,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFloating,
                    "nofall": true,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / 8,
                    "maxvel": PlayMarioJas.PlayMarioJas.unitsize / 4,
                    "scoreStomp": 400
                }
            }
        },
        "Beetle": {
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "height": 8,
            "nofire": 2,
            "shellspawn": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveSmart,
            "death": PlayMarioJas.PlayMarioJas.prototype.killToShell,
            "spawnType": "BeetleShell",
            "shelltype": "BeetleShell",
            "spriteCycle": [
                ["one", "two"]
            ],
        },
        "Piranha": {
            "height": 12,
            "toly": PlayMarioJas.PlayMarioJas.unitsize * 8,
            "countermax": 49,
            // nofall": true,
            "deadly": true,
            // nocollidesolid": true,
            "grounded": true,
            "death": PlayMarioJas.PlayMarioJas.prototype.killNormal,
            "movement": PlayMarioJas.PlayMarioJas.prototype.movePiranha,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnPiranha,
            "spriteCycleSynched": [
                ["one", "two"]
            ]
        },
        "Blooper": {
            "height": 12,
            "nofall": true,
            "nocollidesolid": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize / 2,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnBlooper,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBlooper,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip
        },
        "CheepCheep": {
            "nofall": true,
            "nocollidesolid": true,
            "nocollidechar": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveCheepCheep,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize / -6,
            "yvel": PlayMarioJas.PlayMarioJas.unitsize / -32,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip,
            "spriteCycleSynched": [
                ["one", "two"]
            ],
            "attributes": {
                "red": {
                    "xvel": PlayMarioJas.PlayMarioJas.unitsize / -4,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / -24
                },
                "flying": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveCheepCheepFlying,
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 3.5
                }
            }
        },
        "Podoboo": {
            "width": 7,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * 1.75,
            "gravity": PlayMarioJas.PlayMarioJas.unitsize / 24,
            "jumpHeight": 28,
            "frequency": 245,
            "deadly": true,
            "nofall": true,
            "nofire": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "grounded": true,
            "movement": undefined,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnPodoboo
        },
        "BulletBill": {
            "height": 7,
            "nofall": true,
            "nofire": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "grounded": true,
            "movement": undefined,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize / 2,
        },
        "Lakitu": {
            "height": 12,
            "nofall": true,
            "noshiftx": true,
            "nocollidesolid": true,
            "grounded": true,
            "death": PlayMarioJas.PlayMarioJas.prototype.killLakitu,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnLakitu,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveLakituInitial
        },
        "SpinyEgg": {
            "width": 7,
            "deadly": true,
            "movement": undefined,
            "onResting": PlayMarioJas.PlayMarioJas.prototype.animateSpinyEggHatching,
            "spawnType": "Spiny",
            "spriteCycleSynched": [
                ["one", "two"]
            ]
        },
        "Spiny": {
            "deadly": true,
            "moveleft": true,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "HammerBro": {
            "height": 12,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnHammerBro,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveHammerBro,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "Bowser": {
            "width": 16,
            "height": 16,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .14,
            "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
            "jumpTimes": [117],
            "fireTimes": [280, 350, 490],
            "throwAmount": 7,
            "throwDelay": 84,
            "throwPeriod": 210,
            "throwBetween": 11,
            "deadly": true,
            "noflip": true,
            "nofiredeath": true,
            "nokillend": true,
            "outerok": true,
            "spawnType": "Goomba",
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBowser,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateBowserFreeze,
            "death": PlayMarioJas.PlayMarioJas.prototype.killBowser,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnBowser,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "Hammer": {
            "movement": undefined,
            "nocollidesolid": true,
            "nocollidechar": true,
            "deadly": true,
            "nofire": true,
            "spriteCycle": [
                ["one", "two", "three", "four"],
                3
            ]
        },
        "BowserFire": {
            "width": 12,
            "height": 4,
            "nocollidesolid": true,
            "nocollidechar": true,
            "nofall": true,
            "deadly": true,
            "nofire": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBowserFire,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize * -.63,
            "spriteCycle": [
                [
                    PlayMarioJas.PlayMarioJas.prototype.flipVert,
                    PlayMarioJas.PlayMarioJas.prototype.unflipVert
                ]
            ]
        },
        "item": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideFriendly,
            "onCollideUp": PlayMarioJas.PlayMarioJas.prototype.collideUpItem,
            "jump": PlayMarioJas.PlayMarioJas.prototype.itemJump,
            "item": true,
            "nofire": true
        },
        "Mushroom": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .42
        },
        "Mushroom1Up": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom1Up
        },
        "MushroomDeathly": {
            "action": PlayMarioJas.PlayMarioJas.prototype.killPlayer
        },
        "FireFlower": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom,
            "spriteCycle": [
                ["one", "two", "three", "four"]
            ]
        },
        "Fireball": {
            "width": 4,
            "height": 4,
            "nofire": true,
            "nostar": true,
            "collidePrimary": true,
            "grounded": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateFireballEmerge,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideFireball,
            "death": PlayMarioJas.PlayMarioJas.prototype.animateFireballExplode,
            "spriteCycleSynched": [
                ["one", "two", "three", "four"], "spinning", 4
            ]
        },
        "CastleFireball": {
            "deadly": true,
            "nocollidesolid": true,
            "nocollidechar": true,
            "nofall": true,
            "outerok": true,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCastleFireball
        },
        "Firework": {
            "nocollide": true,
            "nofall": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateFirework
        },
        "Star": {
            "name": "star item", // Item class so player's star isn't confused with this
            "width": 7,
            "grounded": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .56,
            "action": PlayMarioJas.PlayMarioJas.prototype.collideStar,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveJumping,
            "jumpheight": PlayMarioJas.PlayMarioJas.unitsize * 1.17,
            "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
            "spriteCycle": [
                ["one", "two", "three", "four"], 0, 7
            ]
        },
        "Shell": {
            "height": 7,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "collidePrimary": true,
            "nofire": false,
            "moveleft": 0,
            "xvel": 0,
            "move": 0,
            "shell": true,
            "hitcount": 0,
            "peeking": 0,
            "counting": 0,
            "landing": 0,
            "enemyhitcount": 0,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveShell,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideShell,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip,
            "spawnType": "Koopa",
            "attributes": {
                "smart": {}
            }
        },
        "BeetleShell": {
            "height": 8,
            "nofire": 2,
            "spawnType": "Beetle"
        },
        "Vine": {
            "width": 7,
            "nofall": true,
            "nocollide": true,
            "nocollidesolid": true,
            "grounded": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize / 4,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveVine,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideVine,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmergeVine
        },
        "BrickShard": {
            "width": 4,
            "height": 4,
            "nocollide": true,
            "grounded": true,
            "movement": undefined,
            "spriteCycle": [
                [PlayMarioJas.PlayMarioJas.prototype.unflipHoriz, PlayMarioJas.PlayMarioJas.prototype.flipHoriz]
            ]
        },
        "Bubble": {
            "width": 2,
            "height": 2,
            "nocollide": true,
            "nofall": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBubble,
            "yvel": PlayMarioJas.PlayMarioJas.unitsize / -4
        },
        "Coin": {
            "width": 5,
            "spritewidth": 5,
            "height": 7,
            "nofall": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "allowUpSolids": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmergeCoin,
            "onCollideUp": PlayMarioJas.PlayMarioJas.prototype.collideUpCoin,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCoin,
            "spriteCycleSynched": [
                ["one", "two", "three", "two", "one"]
            ]
        },
        "solid": {
            "type": "solid",
            "groupType": "Solid",
            "spritewidth": 8,
            "spriteheight": 8,
            "repeat": true,
            "solid": true,
            "nocollidesolid": true,
            "firedeath": 0,
            "nofire": 2,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCharacterSolid,
        },
        "Brick": {
            "breakable": true,
            "bottomBump": PlayMarioJas.PlayMarioJas.prototype.collideBottomBrick
        },
        "Block": {
            "unused": true,
            "contents": "Coin",
            "bottomBump": PlayMarioJas.PlayMarioJas.prototype.collideBottomBlock,
            "spriteCycleSynched": [
                ["one", "two", "three", "two", "one"]
            ]
        },
        "BridgeBase": {
            "height": 4,
            "spritewidth": 4,
        },
        "DeadGoomba": {
            "height": 4,
            "nocollide": true,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnDeadGoomba
        },
        "Pipe": {
            "width": 16,
            "spritewidth": 16,
            "actionTop": PlayMarioJas.PlayMarioJas.prototype.mapExitPipeVertical
        },
        "PipeHorizontal": {
            "height": 16,
            "spriteheight": 16,
            "width": 19.5,
            "spritewidth": 19.5,
            "actionLeft": PlayMarioJas.PlayMarioJas.prototype.mapExitPipeHorizontal,
            "attributes": {
                "width": 8,
                "spritewidth": 8
            }
        },
        "PipeVertical": {
            "position": "beginning",
            "width": 16,
            "spritewidth": 16
        },
        "Platform": {
            "height": 4,
            "spritewidth": 4,
            "fallThresholdStart": PlayMarioJas.PlayMarioJas.unitsize * 2.8,
            "fallThresholdEnd": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "acceleration": PlayMarioJas.PlayMarioJas.unitsize / 16,
            "repeat": true,
            "killonend": false,
            "maxvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5,
            "attributes": {
                "floating": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveFloating,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFloating,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5
                },
                "sliding": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveSliding,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveSliding,
                    "xvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5
                },
                "transport": {
                    "movement": undefined,
                    "collide": PlayMarioJas.PlayMarioJas.prototype.collideTransport
                },
                "falling": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFalling
                },
                "inScale": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.movePlatformScale
                }
            }
        },
        "RestingStone": {
            "opacity": 0.01, // Why is opacity set to 1 when added?
            "onRestedUpon": PlayMarioJas.PlayMarioJas.prototype.activateRestingStone
        },
        "Cannon": {
            "frequency": 280,
            "spriteheight": 8,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCannon
        },
        "Springboard": {
            "height": 14.5,
            "heightNormal": 14.5,
            "spriteheight": 10,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideSpringboard
        },
        "CastleAxe": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCastleAxe
        },
        "CastleBlock": {
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCastleBlock,
            "attributes": {
                "fireballs": {
                    "speed": 1
                }
            }
        },
        "CastleBridge": {
            "height": 8,
            "spriteheight": 8,
            "spritewidth": 4,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateCastleBridgeOpen
        },
        "CastleChain": {
            "width": 7.5,
            "spritewidth": 7.5,
            "height": 8,
            "nocollide": true,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateCastleChainOpen
        },
        "Floor": {
            "nofire": true // for the "Super Fireballs" mod
        },
        "WaterBlocker": {
            "hidden": true,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideWaterBlocker
        },
        "detector": {
            "hidden": true,
            "collideHidden": true
        },
        "DetectCollision": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideDetector
        },
        "ScrollEnabler": {
            "activate": PlayMarioJas.PlayMarioJas.prototype.activateScrollEnabler
        },
        "DetectWindow": {
            "movement": PlayMarioJas.PlayMarioJas.prototype.activateWindowDetector
        },
        "RandomSpawner": {
            "activate": PlayMarioJas.PlayMarioJas.prototype.spawnRandomSpawner
        },
        "ScrollBlocker": {
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnScrollBlocker,
            "activate": PlayMarioJas.PlayMarioJas.prototype.activateScrollBlocker
        },
        "DetectSpawn": {
            "movement": PlayMarioJas.PlayMarioJas.prototype.spawnDetector
        },
        "scenery": {
            "groupType": "Scenery",
            "repeat": true,
            "nocollide": true, // for when placed in Solid group
            "noBoundaryStretch": true
        },
        "BrickHalf": [8, 4],
        "BrickPlain": [8, 8],
        "Bush1": [16, 8],
        "Bush2": [24, 8],
        "Bush3": [32, 8],
        "CastleDoor": [8, 20],
        "CastleFlag": [6.5, 10],
        "CastleRailing": [8, 4],
        "CastleRailingFilled": [8, 4],
        "CastleTop": [12, 12],
        "CastleWall": [8, 48],
        "Cloud1": [16, 12],
        "Cloud2": [24, 12],
        "Cloud3": [32, 12],
        "Flag": [8, 8],
        "FlagPole": [1, 72],
        "FlagTop": [4, 4],
        "Fence": [8, 8],
        "HillSmall": [24, 9.5],
        "HillLarge": [40, 17.5],
        "Peach": [8, 13],
        "PlatformString": [1, 1],
        "PlantSmall": [7, 15],
        "PlantLarge": [8, 23],
        "Railing": [4, 4],
        "ShroomTrunk": [8, 8],
        "String": [1, 1],
        "StringCornerLeft": [5, 5],
        "StringCornerRight": [5, 5],
        "Toad": [8, 13],
        "TreeTrunk": [4, 4],
        "Water": {
            "width": 4,
            "height": 5
        },
        "Text": {
            "width": 3.5,
            "height": 3.5,
            "groupType": "Text",
            "size": ""
        },
        "DecorativeBack": {
            "width": 88,
            "height": 44,
            "spritewidth": .5,
            "spriteheight": .5,
        },
        "DecorativeDot": {
            "width": 1.5,
            "height": 1.5
        },
        "TextSpace": {
            "hidden": true
        },
        "TextColored1": [3, 3.5],
        "TextColoredSpace": {
            "hidden": true
        },
        "TextColoredCopyright": [4, 4],
        "TextLarge": {
            "width": 7.5,
            "height": 14,
            "size": "Large"
        },
        "TextHuge": {
            "width": 7.5,
            "height": 22
        },
        "TextHugeI": {
            "width": 3.5
        },
        "TextHugeM": {
            "width": 11.5
        },
        "TextHugeSpace": {
            "width": 3.5,
            "hidden": true
        },
        "TextHugePeriod": {
            "width": 3.5
        },
        "ScoreText": {
            "groupType": "Text",
        },
        "TextCharacters": [2.5, 4],
        "TextCharagersHuge": [1, 1],
        "Text100": [6, 4],
        "Text200": [6, 4],
        "Text400": [6, 4],
        "Text500": [6, 4],
        "Text800": [6, 4],
        "Text1000": [8, 4],
        "Text2000": [8, 4],
        "Text4000": [8, 4],
        "Text5000": [8, 4],
        "Text8000": [8, 4],
        "Text1Up": [8, 4],
        "CustomText": {
            "hidden": true,
            "spacingHorizontal": .5,
            "spacingVertical": 8,
            "spacingVerticalBlank": 6,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCustomText
        }
    }
};
PlayMarioJas.PlayMarioJas.settings.quadrants = {
    "numRows": 5,
    "numCols": 6,
    "tolerance": PlayMarioJas.PlayMarioJas.unitsize / 2,
    "groupNames": ["Solid", "Character", "Scenery", "Text"],
    "keyGroupName": "groupType"
};
PlayMarioJas.PlayMarioJas.settings.renderer = {
    "groupNames": ["Text", "Character", "Solid", "Scenery"],
    "spriteCacheCutoff": 2048
};
PlayMarioJas.PlayMarioJas.settings.runner = {
    "games": [
        function () {
            this.DeviceLayer.checkNavigatorGamepads();
            this.DeviceLayer.activateAllGamepadTriggers();
        },
        function () {
            this.QuadsKeeper.determineAllQuadrants("Scenery", this.GroupHolder.getSceneryGroup());
            this.QuadsKeeper.determineAllQuadrants("Text", this.GroupHolder.getTextGroup());
        },
        function () {
            this.maintainSolids(this, this.GroupHolder.getSolidGroup());
        },
        function () {
            this.maintainCharacters(this, this.GroupHolder.getCharacterGroup());
        },
        function () {
            this.maintainPlayer(this, this.player);
        },
        function () {
            this.TimeHandler.handleEvents();
        },
        function () {
            this.PixelDrawer.refillGlobalCanvas(this.AreaSpawner.getArea().background);
        }
    ]
};
PlayMarioJas.PlayMarioJas.settings.scenes = {
    "cutscenes": {
		"Flagpole": {
			"firstRoutine": "StartSlidingDown",
			"routines": {
				"StartSlidingDown": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleStartSlidingDown,
				"HitBottom": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleHitBottom ,
				"Countdown": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleCountdown,
				"Fireworks": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleFireworks
			}
		},
		"BowserVictory": {
		    "firstRoutine": "CollideCastleAxe",
		    "routines": {
		        "CollideCastleAxe": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryCollideCastleAxe,
		        "CastleBridgeOpen": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryCastleBridgeOpen,
		        "BowserFalls": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryBowserFalls,
		        "Dialog": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryDialog
		    }
		}
	}
};
PlayMarioJas.PlayMarioJas.settings.sprites={spriteWidth:"spritewidthpixels",spriteHeight:"spriteheightpixels",flipVert:"flip-vert",flipHoriz:"flipped",paletteDefault:[[0,0,0,0],[255,255,255,255],[0,0,0,255],[188,188,188,255],[116,116,116,255],[252,216,168,255],[252,152,56,255],[252,116,180,255],[216,40,0,255],[200,76,12,255],[136,112,0,255],[124,7,0,255],[168,250,188,255],[128,208,16,255],[0,168,0,255],[24,60,92,255],[0,128,136,255],[32,56,236,255],[156,252,240,255],[60,188,252,255],[92,148,252,255],[0,130,0,255],[252,188,176,255]],filters:{Underworld:["palette",{"05":"18","09":"16"}],UnderworldKoopa:["palette",{"06":"09",14:"16"}],Castle:["palette",{"02":"04","05":"01","09":"03"}],Alt:["palette",{11:"01"}],Alt2:["palette",{"02":"04","05":"01","09":"03",13:"01",19:"08"}],StarOne:["palette",{}],StarTwo:["palette",{"06":"02","08":"05",10:"09"}],StarThree:["palette",{"06":"01","08":"06",10:"08"}],StarFour:["palette",{"06":"01","08":"06",10:"14"}],Smart:["palette",{14:"08"}]},library:{Character:{Beetle:{normal:{normal:"p[0,2,5,8]x022,1111x010,x18,x07,x110,x05,x17,33111000x18,32311000x19,3311003333x111,001133x110,001113x110,011213x110,011113x110,011113x110,0011233x15,x35,00222331133322200222203333002222",two:"p[0,2,5,8]x07,111x010,x18,x07,x110,x05,x17,33111000x18,32311000x19,3311003333x111,001133x110,001113x110,011213x110,011113x110,011113x110,0011233x15,x35,00022331133322x05,22233330222x06,22x05,22000"},Underworld:{normal:"p[0,15,16,18]x022,1111x010,x18,x07,x110,x05,x17,22111000x18,23211000x19,2211002222x111,001122x110,001112x110,011312x110,011112x110,011112x110,0011322x15,x25,00333221122233300333302222003333",two:"p[0,15,16,18]x07,111x010,x18,x07,x110,x05,x17,22111000x18,23211000x19,2211002222x111,001122x110,001112x110,011312x110,011112x110,011112x110,0011322x15,x25,00033221122233x05,33322220333x06,33x05,33000"},Castle:{normal:"p[0,1,3,4]x022,3333x010,x38,x07,x310,x05,x37,22333000x38,21233000x39,2233002222x311,003322x310,003332x310,033132x310,033332x310,033332x310,0033122x35,x25,00111223322211100111102222001111",two:"p[0,1,3,4]x07,333x010,x38,x07,x310,x05,x37,22333000x38,21233000x39,2233002222x311,003322x310,003332x310,033132x310,033332x310,033332x310,0033122x35,x25,00011223322211x05,11122220111x06,11x05,11000"}},BeetleShell:{normal:"p[0,2,5,8]x06,1111x010,x18,x07,1111331111x05,1111322311110000x15,33x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x35,x16,x35,000033311333x010,3333x06,",Underworld:"p[0,15,16,18]x06,1111x010,x18,x07,1111221111x05,1111233211110000x15,22x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x25,x16,x25,000022211222x010,2222x06,",Castle:"p[0,1,3,4]x06,3333x010,x38,x07,3333223333x05,3333211233330000x35,22x35,0000x312,000x314,00x314,00x314,00x314,00x314,00x314,0x25,x36,x25,000022233222x010,2222x06,"},Blooper:{normal:{normal:"p[0,2,5,9]x06,2332x011,232232x09,23222232x07,2232222322x05,223x26,3220002223x26,322202223x28,32220003x28,3x06,x210,x06,2x18,2x06,1221111221x06,2112112112x06,2112112112x05,212211112212000022332222332200003x210,30000220x26,022000032032002302300002202200220220000320320023023x05,2022002202x06,2032002302x06,2002002002x09,2002x06,",squeeze:"p[0,2,5,9]x06,2332x011,232232x09,23222232x07,2232222322x05,223x26,3220002223x26,322202223x28,32220003x28,3x06,2x18,200003x25,11x25,30x216,32223x26,322232222022002202222032203200230223000222020020222x05,2202002022000"},Underwater:{normal:"p[0,1,2,3]x06,1331x011,131131x09,13111131x07,1131111311x05,113x16,3110001113x16,311101113x18,31110003x18,3x06,x110,x06,1x28,1x06,2112222112x06,1221221221x06,1221221221x05,121122221121000011331111331100003x110,30000110x16,011000031031001301300001101100110110000310310013013x05,1011001101x06,1031001301x06,1001001001x09,1001x06,",squeeze:"p[0,1,2,3]x06,1331x011,131131x09,13111131x07,1131111311x05,113x16,3110001113x16,311101113x18,31110003x18,3x06,1x28,100003x15,22x15,30x116,31113x16,311131111011001101111031103100130113000111010010111x05,1101001011000"}},Bowser:{normal:{normal:"p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,122233221323333113331x012,1022223332333311331123x010,10113133123333113111223111x09,10003223331113312233112x013,12233111x39,2231x011,2233111x313,1x09,122233111x36,111x35,x010,220033x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,111x36,x019,x35,11113333x019,2x36,x17,x017,1122332222x15,x016,111x210,11x021,1122112222x021,1112111x25,0",two:"p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,122233221323333113331x012,1022223332333311331123x010,10113133123333113111223111x09,10003223331113312233112x013,12233111x39,2231x011,2233111x313,1x09,122233111x36,111x35,x010,220033x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,11x37,x019,x35,11113333x020,x36,x17,x019,22332222x15,x018,2222112211211x018,112211121112222x016,111x27,x06,"},firing:{normal:"p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,112233221323333113331x012,1022223322333311331123x010,101030322x35,113111223111x06,x29,33331113312233112x07,x27,3333111x39,2231x07,x38,111x313,1x010,x35,111x36,111x35,x014,33x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,111x36,x019,x35,11113333x019,2x36,x17,x017,1122332222x15,x016,111x210,11x021,1122112222x021,1112111x25,0",two:"p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,112233221323333113331x012,1022223322333311331123x010,101030322x35,113111223111x06,x29,33331113312233112x07,x27,3333111x39,2231x07,x38,111x313,1x010,x35,111x36,111x35,x014,33x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,11x37,x019,x35,11113333x020,x36,x17,x019,22332222x15,x018,2222112211211x018,112211121112222x016,111x27,x06,"}},BowserFire:"p[0,1,6,8]x010,x36,003x010,x316,x06,x35,22332222332222x315,x25,111133x05,3333x213,13000x313,2223333x05,x39,0x36,x09,3300333033003x06,",BrickShard:{normal:"p[0,2,9]0021200002221200212121202212221222212221022212220021212000022200",Underworld:["filter",["Character","BrickShard","normal"],"Underworld"],Castle:["filter",["Character","BrickShard","normal"],"Castle"]},BulletBill:{normal:"p[0,2,5,8]110x17,x06,2201x25,1110000113x16,2111000112x19,2100113x19,22101131133x15,2121113132212111121111313x26,x17,3111x25,x17,31111222x15,0113x111,00113x110,000110x19,0000110x17,x06,",Alt2:["filter",["Character","BulletBill","normal"],"Alt2"]},Bubble:"p[0,1]0110100110010110",CastleFireball:["same",["Character","Fireball"]],CheepCheep:{normal:{normal:"p[0,1,3,6]0003333x013,x35,011x07,x26,11110000121122221111000x16,222111100012121122x15,0001212112211110000x16,221112x05,1211x27,0000333x210,0000233x29,00300233x28,3330023311x26,333033331112222333000x18,20333x05,x15,0000300",two:"p[0,1,3,6]0003333x013,x35,x010,x26,3x07,1211x25,x06,x16,x25,111001212112222x15,0121211222x16,0x16,22x16,0001211222x16,00333x210,0300233x29,33000233x28,3300023311x26,300033331112222330000x18,203x07,x15,x07,"},red:{normal:"p[0,1,6,8]0002222x013,x25,x010,x36,2x07,1311x35,x06,x16,x35,111001313113333x15,0131311333x16,0x16,33x16,0001311333x16,00222x310,0200322x39,22000322x38,2200032211x36,200022221113333220000x18,302x07,x15,x07,",two:"p[0,1,6,8]0002222x013,x25,011x07,x36,11110000131133331111000x16,333111100013131133x15,0001313113311110000x16,331113x05,1311x37,0000222x310,0000322x39,00200322x38,2220032211x36,222022221113333222000x18,30222x05,x15,0000200"},flying:["same",["Character","CheepCheep","red"]]},Coin:{normal:{normal:{normal:"p[0,2,6,8]00222211000x26,11002233221102232212211223221221122322122112232212211223221221122322122112232212211223221221102211221100x26,1100022221100",two:"p[0,2,8]00222211000x26,1100x26,110x25,12211x25,12211x25,12211x25,12211x25,12211x25,12211x25,12211x25,1221102211221100x26,1100022221100",three:"p[0,2,9,11]00333311000x36,11003322331103323313311332331331133233133113323313311332331331133233133113323313311332331331103311331100x36,1100033331100"},Underworld:{normal:"p[0,6,9,16]00111133000x16,33001122113301121131133112113113311211311331121131133112113113311211311331121131133112113113301133113300x16,3300011113300",two:"p[0,9,16]00111122000x16,2200x16,220x15,21122x15,21122x15,21122x15,21122x15,21122x15,21122x15,21122x15,2112201122112200x16,2200011112200",three:"p[0,9,11,16]00222233000x26,33002211223302212232233221223223322122322332212232233221223223322122322332212232233221223223302233223300x26,3300022223300"}},anim:{normal:"p[0,1,7]000012x08,12x07,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x07,12x08,120000",anim2:"p[0,1,6,7]000022x07,2222x05,x26,000022132200022122322002212232200221223220022122322002212232200221223220002213220000x26,x05,2222x07,220000",anim3:"p[0,1,6,7]000023x08,23x07,2333x06,2333x06,2333x06,2333x06,1333x06,1333x06,2333x06,2333x06,2333x06,2333x07,23x08,230000",anim4:"p[0,1,6]x05,2x09,2x09,2x09,2x09,2x09,2x09,1x09,1x09,2x09,2x09,2x09,2x09,2x09,20000"}},Fireball:{normal:"p[0,1,6,8]0303330000303330300032330033322303322123032212330332233000333300",two:"p[0,1,6,8]x05,3000333000333233030322230033212x36,2122330332233000333300",three:"p[0,1,6,8]0033330003322330332122303212233032233300332300030333030000333030",four:"p[0,1,6,8]0033330003322330332212x36,2123300322230303323330003330003x05,"},FireFlower:{normal:{normal:"p[0,1,6,8,14]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",two:"p[0,2,5,9,14]0000x28,x06,x212,000222x38,222022333x16,3332222333x16,333220222x38,222000x212,x06,x28,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",three:"p[0,6,8,10,14]0000x18,x06,x112,000111x38,111011333x26,3331111333x26,333110111x38,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",four:"p[0,1,6,14]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,33x07,333000033000033303330003300033300333300330033330003333033033330000333303303333x05,x310,x09,3333x06,"},Underworld:{normal:"p[0,1,6,8,16]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",two:"p[0,15,16,18]0000x38,x06,x312,000333x28,333033222x16,2223333222x16,222330333x28,333000x312,x06,x38,x011,22x07,222000022000022202220002200022200222200220022220002222022022220000222202202222x05,x210,x09,2222x06,",three:"p[0,6,8,10,16]0000x18,x06,x112,000111x38,111011333x26,3331111333x26,333110111x38,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",four:"p[0,5,9,16]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,33x07,333000033000033303330003300033300333300330033330003333033033330000333303303333x05,x310,x09,3333x06,"}},Firework:["same",["Solid","Firework"]],Goomba:{normal:"p[0,2,5,9]x06,3333x011,x36,x09,x38,x07,x310,x05,311x36,11300033321333312333003332x16,23330333321233212x38,22233222x320,03333x26,3333x05,x28,x06,11x28,x05,x15,x25,110000x16,222111x05,x15,001110000",Underworld:"p[0,15,16,18]x06,2222x011,x26,x09,x28,x07,x210,x05,211x26,11200022231222213222002223x16,32220222231322313x28,33322333x220,02222x36,2222x05,x38,x06,11x38,x05,x15,x35,110000x16,333111x05,x15,001110000",Castle:["filter",["Character","Goomba","normal"],"Castle"]},Hammer:{normal:{normal:"p[0,2,5,8]x08,2x014,12101x010,111101x09,1122232x09,1211131x08,x16,31x08,10011131x09,x15,01x012,2x015,2x015,2x015,2x015,2x015,2x015,2x015,2x07,",two:"p[0,2,5,8]x073,11x013,10111x011,101211x010,11112110x28,11112122x08,1111211x010,3333x011,1111211x065,",three:"p[0,2,5,8]x07,2x015,2x015,2x015,2x015,2x015,2x015,2x015,2x012,10x15,x09,13111001x08,13x16,x08,1311121x09,2322211x09,101111x010,10121x014,2x08,",four:"p[0,2,5,8]x065,1121111x011,3333x010,1121111x08,22121111x28,01121111x010,112101x011,11101x013,11x073,"},Castle:["filter",["Character","Hammer","normal"],"Castle"],Alt2:["filter",["Character","Hammer","normal"],"Alt2"]},HammerBro:{normal:{normal:"p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,1133332200x25,313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",two:"p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,1211333300002221231x36,x06,10311133313x06,3322113231x06,3222212331x06,3x25,32313x05,33x25,3233x05,33312222322x06,3313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"},throwing:{normal:"p[0,1,6,14]00003333x011,333313x09,3113331x010,31133332x07,231133322x06,x25,12322x06,x25,12222x06,x25,1122233x05,2221x25,333x07,1322223313x06,3322223231x06,33x25,331x06,33322132313x05,33311133233x05,3331x35,22x06,3313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",two:"p[0,1,6,14]00003333x011,333313x09,3113331x010,31133332x07,231133322x06,x25,12322x06,x25,12222x06,x25,1122233x05,2221x25,333x07,1322223313x06,3322223231x06,33x25,331x06,33322132313x05,33311133233x05,3331x35,22x06,3313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"},thrown:{normal:"p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,1133332200x25,313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",two:"p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,113333220022223313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"}},Koopa:{normal:{normal:{jumping:{normal:"p[0,1,6,14]x019,1x09,11000111x07,1111001112x05,x15,0231122000x15,0023112200112110002311220012111100211122011211110222122201211110023x25,012111010x26,0012x15,022202203312111002200220331113330220221333232333002022133233323200002212x36,23000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",two:"p[0,1,6,14]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,2211120011100002322122011211000x27,0121111002220022012x15,022000213x17,x05,22133x17,00022133331131110222213332323311002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"},flying:{normal:"p[0,1,6,14]x019,1x09,11000111x07,1111001112x05,x15,0231122000x15,0023112200112110002311220012111100211122011211110222122201211110023x25,012111010x26,0012x15,022202203312111002200220331113330220221333232333002022133233323200002212x36,23000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",two:"p[0,1,6,14]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,2211120011100002322122011211000x27,0121111002220022012x15,022000213x17,x05,22133x17,00022133331131110222213332323311002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"},normal:{normal:"p[0,1,6,14]x019,1x014,111x013,1112x011,231122x010,231122x010,231122x010,211122x09,2221222x09,23x25,x09,x26,00x35,0002220220323332300220022033232333022022133332311300202213332323130000221232333232000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",two:"p[0,1,6,14]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,221112x09,2322122x09,x27,x09,22200220x35,00022000213233323x06,2213323233x05,22133332311300222213332323130002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"}}},smart:["filter",["Character","Koopa","normal","normal"],"Smart"],Underworld:{smart:["same",["Character","Koopa","smart"]],normal:["filter",["Character","Koopa","normal","normal"],"UnderworldKoopa"]},Castle:["same",["Character","Koopa","Underworld"]]},Lakitu:{normal:"p[0,1,6,14]x05,x25,x010,x27,x08,333233322x06,3111311132x06,3x17,323x05,3113131132330000311313113233x05,3332x37,x05,222333322233000x25,33x25,3003x25,11x25,30031222111122213003x112,303x114,33x15,3113x15,33x15,3113x15,33x15,3113x15,33x114,3313x110,3130311131111311130031111333311113003x112,3000311113311113x05,3333003333000",hiding:"p[0,1,6,14]x0131,2220000222x05,x25,33x25,0000x25,11x25,00003222111122230003x112,303x114,33x15,3113x15,33x15,3113x15,33x15,3113x15,33x114,3313x110,3130311131111311130031111333311113003x112,3000311113311113x05,3333003333000"},Player:{dead:"p[0,6,8,10]x05,x25,x07,11x27,1100111131311313x16,3313113133x15,33311113331100x35,113333x05,331333313x06,33x16,3x05,222211112220003332233332233003333223322333003333212212333003333x26,333000333x26,3300",normal:{normal:{jumping:"p[0,6,8,10]x013,111x06,x26,0111x05,x29,11x05,33311311333000031311131133300003133111311130000331111x36,x06,x17,33000x35,2333233000x37,2333220311x36,x26,0311112232212212330113x210,3300333x29,330333x28,x05,330x25,x07,",normal:{normal:"p[0,6,8,10]0000x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,3332333x08,333323323330000x35,2222333300011132122123110001111x26,111000111x28,11x05,222202222x06,333300033330000x35,000x35,00",hopping:["same",["Character","Player","normal","normal","normal","running","normal","two"]],running:{skidding:"p[0,6,8,10]x05,x26,x08,x28,33x07,131x37,0000x16,3113111001133113311311100033x16,3111x05,1123332222x05,3332231112220000x36,1113220000x36,112222x05,3333x26,x07,222233322x07,222x35,x09,2333223333x09,2x36,x010,x35,00",normal:{normal:"p[0,6,8,10]x05,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x05,x35,2233x05,1113333222333x17,3332122233x15,0x28,0330000x210,33000x211,330033322200222233003333x013,3333x010,",two:"p[0,6,8,10]x020,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x08,333322333x07,3332212211x06,3333x26,x06,2331112222x07,23112222x09,2223333x09,x38,0000",three:"p[0,6,8,10]x021,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,x35,2311x06,11x36,11100001112x35,11x05,333x27,x06,33x28,x05,333x27,x06,330003333x012,x35,x05,"}},paddling:{normal:{normal:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x06,33x27,x07,33x26,x08,332222x010,30033x014,3x027,",paddle1:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x05,33x28,x06,33x27,x07,33x25,x09,330333x013,33x026,",paddle2:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x05,33x25,33111000033x27,111000033x26,00110000330333x013,33x026,",paddle3:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x07,33x25,x09,330333x013,33x026,"},swim2:{normal:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x07,3x27,x07,33x26,x010,3322x011,333x013,33x028,",paddle1:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x06,3x28,x06,33x27,x09,33222x010,3333x012,333x027,",paddle2:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x06,3x25,33111000033x27,111x06,3322220011x05,3333x012,333x027,",paddle3:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x09,332222x09,3333x012,333x027,"}},climbing:{normal:"p[0,6,8,10]0000x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x09,222x35,x08,222x36,11100002222x35,111100x26,3333111100x211,33300x211,330000x29,x08,x26,x06,",two:"p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x08,22x35,111x05,22x36,1111000222x36,1111000x25,122x08,x28,00033000x210,3330000x29,333x05,x28,333x016,"}}},large:{jumping:"p[0,6,8,10]x012,111x012,11311x06,x25,113310000x27,x15,000x28,x35,000x211,33000333113111333300311311331111330031133x18,30031133111311113033x15,x37,0033331111333313000033x18,33x05,2222332333300x36,223233300x38,23323300x38,2232300033113333223320003111133222231000x15,32221222000x15,x28,0001011x29,003011x210,033000x29,33330003x28,x37,233x26,x37,222332222x37,x25,0022x37,x25,x08,3332222x09,33x014,3x015,",fiery:["same",["Character","Player","normal","fiery"]],normal:{normal:"p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,",hopping:["same",["Character","Player","normal","large","normal","running","normal","two"]],crouching:"p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000331113111311110033x15,x36,000223x15,x35,0033323x19,0033323331113323033332x38,23033332x37,22x36,21x35,22x37,x28,x39,x26,x38,1112222111333231111222211113221111x26,1111202113x06,311200033330000333300x36,0000x36,",running:{skidding:"p[0,6,8,10]000x27,x09,11x27,33x06,1x27,333000x26,31133110022113113113111100013311311311110x16,3111213x16,3x15,22313111133331133223110333311113332x05,x15,x35,220003322233111332000333222x15,32000333233x15,3200x37,x15,0000x37,113122200x38,11222200x37,x27,00x36,x27,0000333x25,333x05,x25,x35,x06,x25,x38,0000222333311113x06,233x16,3x07,3112222x010,x27,003x07,222230033x07,22x37,x08,x37,x09,x36,x011,3333x012,3330000",normal:{normal:"p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x08,33311x010,222233200010000333322332011100x36,223231110x37,223321110x37,223323130x36,222332330x36,22212313003333x29,000x15,x28,000x15,x28,0031111x29,0330111x27,x35,00023x26,x35,003223x25,x38,22233222x39,2222000x310,2x011,333x013,333x014,333x011,",two:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,30003333x27,322003333x25,3322200333322223222200033332220022220003333x05,333300033x07,33330003x08,x36,x010,x36,x017,",three:"p[0,6,8,10]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x05,33x18,x07,222211x09,32332233x07,323333223x07,3233332233x06,3233332223x06,32x35,113x06,3233331111x06,22333311112x05,22233311112200002222331112220000x26,332222x05,x25,33322x07,222x36,x07,22x36,x09,223333x010,3222333x09,3333033x08,x35,x011,x37,x011,x35,x05,"}},paddling:{normal:{normal:"p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",paddle1:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",paddle2:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",paddle3:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,"},swim2:{normal:"p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",paddle1:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,",paddle2:"p[0,6,8,10]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x028,",paddle3:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,"}},climbing:{normal:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x29,30330000x27,x35,x05,x26,x35,x07,22223333x011,x35,x013,33x015,3x018,",two:"p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,3x06,x210,033000x29,33330000x28,33330000x28,3333x05,x27,3333x064,"}}},fiery:{jumping:{normal:"p[0,5,6,8]x012,222x012,22322x06,x15,223320000x17,x25,000x18,x35,000x111,33000333223222333300322322332222330032233x28,30032233222322223033x25,x37,0033332222333323000033x28,33x05,1111331333300x36,113133300x38,13313300x38,1131300033223333113310003222233111132000x25,31112111000x25,x18,0002222x19,003022x110,033000x19,33330003x18,x37,133x16,x37,111331111x37,x15,0011x37,x15,x08,3331111x09,33x014,3x015,",firing:["same",["Character","Player","normal","fiery","normal","running","normal","two"]]},normal:{normal:"p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x07,1x25,3x09,31333313x07,3313333133x05,3331333313330003333133331333300333113333113330333311333311x38,x18,x38,1211112133332222x18,x28,x18,22220222x18,2220022x110,22000x112,000x16,00x16,00x15,0000x15,00x15,0000x15,000333300003333000033330000333300x36,0000x312,0000x36,",hopping:["same",["Character","Player","normal","fiery","normal","running","normal","three"]],crouching:"p[0,5,6,8]x07,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000332223222322220033x25,x36,000113x25,x35,0033313x29,0033313332223313033331x38,13033331x37,11x36,12x35,11x37,x18,x39,x16,x38,2221111222333132222111122223112222x16,2222101223x06,322100033330000333300x36,0000x36,",firing:["same",["Character","Player","normal","fiery","normal","running","normal","two"]],running:{skidding:"p[0,5,6,8]000x17,x09,22x17,33x06,2x17,333000x16,32233220011223223223222200023322322322220x26,3222123x26,3x25,11323222233332233113220333322223331x05,x25,x35,110003311133222331000333111x25,31000333133x25,3100x37,x25,0000x37,223211100x38,22111100x37,x17,00x36,x17,0000333x15,333x05,x15,x35,x06,x15,x38,0000111333322223x06,133x26,3x07,3221111x010,x17,003x07,111130033x07,11x37,x08,x37,x09,x36,x011,3333x012,3330000",normal:{normal:"p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x08,33322x010,111133100020000333311331022200x36,113132220x37,113312220x37,113313230x36,111331330x36,11121323003333x19,000x25,x18,000x25,x18,0032222x19,0330222x17,x35,00013x16,x35,003113x15,x38,11133111x39,1111000x310,1x011,333x013,333x014,333x011,",two:"p[0,5,6,8]x039,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,30003333x17,311003333x15,3311100333311113111100033331110011110003333x05,333300033x07,33330003x08,x36,x010,x36,0",three:"p[0,5,6,8,10]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000044x25,x35,x05,33x28,x07,111122x09,31331133x07,313333113x07,3133331133x06,3133331113x06,31x35,223x06,3133332222x06,11333322221x05,11133322221100001111332221110000x16,331111x05,x15,33311x07,111x36,x07,11x36,x09,113333x010,3111333x09,3333033x08,x35,x011,x37,x011,x35,x05,"}},paddling:{normal:{normal:["same",["Character","Player","normal","fiery","normal","paddling","normal","paddle1"]],paddle1:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x05,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",paddle2:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",
paddle3:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,"},swim2:{normal:["same",["Character","Player","normal","fiery","normal","paddling","swim2","paddle1"]],paddle1:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,",paddle2:"p[0,5,6,8]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x028,",paddle3:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,"}},climbing:{normal:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x19,30330000x17,x35,x05,x16,x35,x07,11113333x011,x35,x013,33x015,3x018,",two:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,3x06,x110,033000x19,33330000x18,33330000x18,3333x05,x17,3333x064,"}}},shrooming:{normal:"p[0,6,8,10]x0261,x25,x010,x29,x07,3331131x08,3131113111x06,31331113111x05,3311113333x08,x17,x08,332333x09,3332332333x05,33332222333300001132122123110000111x26,111000011x28,11x06,22200222x07,3330000333x05,33330000333300",shrooming2:"p[0,6,8,10]x0134,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,33323333233300033332333323333011002122221200x15,0x28,0x16,x210,11101022220022220100022220000222200003333000033330000333300003333000x35,0000x35,0",shrooming3:"p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,"}},star:{normal:["filter",["Character","Player","normal"],"StarOne"],star2:["filter",["Character","Player","normal"],"StarTwo"],star3:["filter",["Character","Player","normal"],"StarThree"],star4:["filter",["Character","Player","normal"],"StarFour"]}},Luigi:{dead:"p[0,6,1,21]x05,x25,x07,11x27,1100111131311313x16,3313113133x15,33311113331100x35,113333x05,331333313x06,33x16,3x05,222211112220003332233332233003333223322333003333212212333003333x26,333000333x26,3300",normal:{normal:{normal:"p[0,6,1,21]0000x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,3332333x08,333323323330000x35,2222333300011132122123110001111x26,111000111x28,11x05,222202222x06,333300033330000x35,000x35,00",hopping:["same",["Character","Luigi","normal","normal","running","normal","two"]],jumping:"p[0,6,1,21]x013,111x06,x26,0111x05,x29,11x05,33311311333000031311131133300003133111311130000331111x36,x06,x17,33000x35,2333233000x37,2333220311x36,x26,0311112232212212330113x210,3300333x29,330333x28,x05,330x25,x07,",running:{skidding:"p[0,6,1,21]x05,x26,x08,x28,33x07,131x37,0000x16,3113111001133113311311100033x16,3111x05,1123332222x05,3332231112220000x36,1113220000x36,112222x05,3333x26,x07,222233322x07,222x35,x09,2333223333x09,2x36,x010,x35,00",normal:{normal:"p[0,6,1,21]x05,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x05,x35,2233x05,1113333222333x17,3332122233x15,0x28,0330000x210,33000x211,330033322200222233003333x013,3333x010,",two:"p[0,6,1,21]x020,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x08,333322333x07,3332212211x06,3333x26,x06,2331112222x07,23112222x09,2223333x09,x38,0000",three:"p[0,6,1,21]x021,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,x35,2311x06,11x36,11100001112x35,11x05,333x27,x06,33x28,x05,333x27,x06,330003333x012,x35,x05,"}},paddling:{normal:{normal:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x06,33x27,x07,33x26,x08,332222x010,30033x014,3x027,",paddle1:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x05,33x28,x06,33x27,x07,33x25,x09,330333x013,33x026,",paddle2:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x05,33x25,33111000033x27,111000033x26,00110000330333x013,33x026,",paddle3:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x07,33x25,x09,330333x013,33x026,"},swim2:{normal:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x07,3x27,x07,33x26,x010,3322x011,333x013,33x028,",paddle1:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x06,3x28,x06,33x27,x09,33222x010,3333x012,333x027,",paddle2:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x06,3x25,33111000033x27,111x06,3322220011x05,3333x012,333x027,",paddle3:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x09,332222x09,3333x012,333x027,"}},climbing:{normal:"p[0,6,1,21]0000x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x09,222x35,x08,222x36,11100002222x35,111100x26,3333111100x211,33300x211,330000x29,x08,x26,x06,",two:"p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x08,22x35,111x05,22x36,1111000222x36,1111000x25,122x08,x28,00033000x210,3330000x29,333x05,x28,333x016,"}},large:{normal:"p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,",jumping:"p[0,6,1,21]x012,111x012,11311x06,x25,113310000x27,x15,000x28,x35,000x211,33000333113111333300311311331111330031133x18,30031133111311113033x15,x37,0033331111333313000033x18,33x05,2222332333300x36,223233300x38,23323300x38,2232300033113333223320003111133222231000x15,32221222000x15,x28,0001011x29,003011x210,033000x29,33330003x28,x37,233x26,x37,222332222x37,x25,0022x37,x25,x08,3332222x09,33x014,3x015,",hopping:["same",["Character","Luigi","normal","large","running","normal","two"]],crouching:"p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000331113111311110033x15,x36,000223x15,x35,0033323x19,0033323331113323033332x38,23033332x37,22x36,21x35,22x37,x28,x39,x26,x38,1112222111333231111222211113221111x26,1111202113x06,311200033330000333300x36,0000x36,",running:{skidding:"p[0,6,1,21]000x27,x09,11x27,33x06,1x27,333000x26,31133110022113113113111100013311311311110x16,3111213x16,3x15,22313111133331133223110333311113332x05,x15,x35,220003322233111332000333222x15,32000333233x15,3200x37,x15,0000x37,113122200x38,11222200x37,x27,00x36,x27,0000333x25,333x05,x25,x35,x06,x25,x38,0000222333311113x06,233x16,3x07,3112222x010,x27,003x07,222230033x07,22x37,x08,x37,x09,x36,x011,3333x012,3330000",normal:{normal:"p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x08,33311x010,222233200010000333322332011100x36,223231110x37,223321110x37,223323130x36,222332330x36,22212313003333x29,000x15,x28,000x15,x28,0031111x29,0330111x27,x35,00023x26,x35,003223x25,x38,22233222x39,2222000x310,2x011,333x013,333x014,333x011,",two:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,30003333x27,322003333x25,3322200333322223222200033332220022220003333x05,333300033x07,33330003x08,x36,x010,x36,x017,",three:"p[0,6,1,21]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x05,33x18,x07,222211x09,32332233x07,323333223x07,3233332233x06,3233332223x06,32x35,113x06,3233331111x06,22333311112x05,22233311112200002222331112220000x26,332222x05,x25,33322x07,222x36,x07,22x36,x09,223333x010,3222333x09,3333033x08,x35,x011,x37,x011,x35,x05,"}},paddling:{normal:{normal:"p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",paddle1:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",paddle2:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",paddle3:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,"},swim2:{normal:"p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",paddle1:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,",paddle2:"p[0,6,1,21]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x028,",paddle3:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,"}},climbing:{normal:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x29,30330000x27,x35,x05,x26,x35,x07,22223333x011,x35,x013,33x015,3x018,",two:"p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,3x06,x210,033000x29,33330000x28,33330000x28,3333x05,x27,3333x064,"}},fiery:{normal:"p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x07,1x25,3x09,31333313x07,3313333133x05,3331333313330003333133331333300333113333113330333311333311x38,x18,x38,1211112133332222x18,x28,x18,22220222x18,2220022x110,22000x112,000x16,00x16,00x15,0000x15,00x15,0000x15,000333300003333000033330000333300x36,0000x312,0000x36,",jumping:"p[0,5,6,8]x012,222x012,22322x06,x15,223320000x17,x25,000x18,x35,000x111,33000333223222333300322322332222330032233x28,30032233222322223033x25,x37,0033332222333323000033x28,33x05,1111331333300x36,113133300x38,13313300x38,1131300033223333113310003222233111132000x25,31112111000x25,x18,0002222x19,003022x110,033000x19,33330003x18,x37,133x16,x37,111331111x37,x15,0011x37,x15,x08,3331111x09,33x014,3x015,",hopping:["same",["Character","Luigi","normal","fiery","running","normal","three"]],crouching:"p[0,5,6,8]x07,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000332223222322220033x25,x36,000113x25,x35,0033313x29,0033313332223313033331x38,13033331x37,11x36,12x35,11x37,x18,x39,x16,x38,2221111222333132222111122223112222x16,2222101223x06,322100033330000333300x36,0000x36,",firing:["same",["Character","Luigi","normal","fiery","running","normal","two"]],running:{skidding:"p[0,5,6,8]000x17,x09,22x17,33x06,2x17,333000x16,32233220011223223223222200023322322322220x26,3222123x26,3x25,11323222233332233113220333322223331x05,x25,x35,110003311133222331000333111x25,31000333133x25,3100x37,x25,0000x37,223211100x38,22111100x37,x17,00x36,x17,0000333x15,333x05,x15,x35,x06,x15,x38,0000111333322223x06,133x26,3x07,3221111x010,x17,003x07,111130033x07,11x37,x08,x37,x09,x36,x011,3333x012,3330000",normal:{normal:"p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x08,33322x010,111133100020000333311331022200x36,113132220x37,113312220x37,113313230x36,111331330x36,11121323003333x19,000x25,x18,000x25,x18,0032222x19,0330222x17,x35,00013x16,x35,003113x15,x38,11133111x39,1111000x310,1x011,333x013,333x014,333x011,",two:"p[0,5,6,8]x039,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,30003333x17,311003333x15,3311100333311113111100033331110011110003333x05,333300033x07,33330003x08,x36,x010,x36,0",three:"p[0,5,6,8,10]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000044x25,x35,x05,33x28,x07,111122x09,31331133x07,313333113x07,3133331133x06,3133331113x06,31x35,223x06,3133332222x06,11333322221x05,11133322221100001111332221110000x16,331111x05,x15,33311x07,111x36,x07,11x36,x09,113333x010,3111333x09,3333033x08,x35,x011,x37,x011,x35,x05,"}},paddling:{normal:{normal:"p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",paddle1:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x05,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",paddle2:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",paddle3:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,"},swim2:{normal:"p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",paddle1:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,",paddle2:"p[0,5,6,8]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x028,",paddle3:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,"}},climbing:{normal:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x19,30330000x17,x35,x05,x16,x35,x07,11113333x011,x35,x013,33x015,3x018,",two:"p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,3x06,x110,033000x19,33330000x18,33330000x18,3333x05,x17,3333x064,"}},shrooming:{normal:"p[0,6,1,21]x0261,x25,x010,x29,x07,3331131x08,3131113111x06,31331113111x05,3311113333x08,x17,x08,332333x09,3332332333x05,33332222333300001132122123110000111x26,111000011x28,11x06,22200222x07,3330000333x05,33330000333300",shrooming2:"p[0,6,1,21]x0134,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,33323333233300033332333323333011002122221200x15,0x28,0x16,x210,11101022220022220100022220000222200003333000033330000333300003333000x35,0000x35,0",shrooming3:"p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,"}},star:{normal:["filter",["Character","Luigi","normal"],"StarOne"],star2:["filter",["Character","Luigi","normal"],"StarTwo"],star3:["filter",["Character","Luigi","normal"],"StarThree"],star4:["filter",["Character","Luigi","normal"],"StarFour"]}},Mushroom:"p[0,1,6,8]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,",Mushroom1Up:"p[0,1,6,14]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,",MushroomDeathly:"p[0,5,9,16]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,",Piranha:{normal:{normal:"p[0,6,14]x022,2002x011,210012x09,22200222x08,12200221x07,2221001222x06,2222002222x05,1212200221210000x25,00x25,0000222120021222000021222002221200002222100122220000212220022212x05,2212002122x06,2222002222x07,12100121x010,2002x06,11x05,11x05,11121100011000112101211001100112100112110110112110001121011012110000111211112111x05,x110,000",two:"p[0,1,6,14]x034,3x010,30003211x06,112300331x08,1330023311000011332033321x06,12333233331100113333233233100001332x37,x06,x36,23333100133332x35,23100132333302x35,00x35,20033233300333233000333320023333x05,32x36,23x08,323323x05,22x05,22x05,22232200022000223202322002200223200223220220223220002232022023220000222322223222x05,x210,000"},Underworld:{normal:"p[0,9,16]x022,2002x011,210012x09,22200222x08,12200221x07,2221001222x06,2222002222x05,1212200221210000x25,00x25,0000222120021222000021222002221200002222100122220000212220022212x05,2212002122x06,2222002222x07,12100121x010,2002x06,11x05,11x05,11121100011000112101211001100112100112110110112110001121011012110000111211112111x05,x110,000",two:"p[0,5,9,16]x034,3x010,30003211x06,112300331x08,1330023311000011332033321x06,12333233331100113333233233100001332x37,x06,x36,23333100133332x35,23100132333302x35,00x35,20033233300333233000333320023333x05,32x36,23x08,323323x05,22x05,22x05,22232200022000223202322002200223200223220220223220002232022023220000222322223222x05,x210,000"},Castle:["same",["Character","Piranha","Underworld"]]},Podoboo:"p[0,1,6,8]0000x36,x07,x38,x05,3332222333000333x26,33300332221122233033322111122x35,22x16,22333322x16,22333322x16,223333222111122233332222112222x35,232222323330x35,22x35,00x35,22x35,0003303333033x05,30033003000",Shell:{normal:{normal:{normal:"p[0,1,6,14]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100011x36,11x07,11333311x09,x16,x011,1111x06,",peeking:"p[0,1,6,14]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100211x36,11200022211333311222002220x16,02220022000111100022002x012,20"},smart:["filter",["Character","Shell","normal","normal"],"Smart"]},Underworld:{smart:["same",["Character","Shell","normal","smart"]],normal:{normal:"p[0,5,9,16]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100011x36,11x07,11333311x09,x16,x011,1111x06,",peeking:"p[0,5,6,9,16]x05,344443x09,44333344x07,4434444344x06,43x46,34x05,43x48,340000343x46,3430003444344443444300x45,3333x45,01114434444344x17,3x46,3111100211x46,11200022211444411222002220x16,02220022000111100022002x012,20"}},Castle:["same",["Character","Shell","Underworld"]]},ShellBeetle:{normal:"p[0,2,5,9]x06,1111x010,x18,x07,1111331111x05,1111322311110000x15,33x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x35,x16,x35,000033311333x010,3333x06,",Underworld:"p[0,15,16,18]x06,1111x010,x18,x07,1111221111x05,1111233211110000x15,22x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x25,x16,x25,000022211222x010,2222x06,",Castle:"p[0,1,3,4]x06,3333x010,x38,x07,3333223333x05,3333211233330000x35,22x35,0000x312,000x314,00x314,00x314,00x314,00x314,00x314,0x25,x36,x25,000022233222x010,2222x06,"},Spiny:{normal:"p[0,1,6,8]x024,1x015,1x014,122x08,10000122000010001200122220012000122012222012200012223222312220001122x35,1222003322331123322301113331122233330033133x25,x36,133133222333111333321x35,111x05,222x16,2220002222x06,2222",two:"p[0,1,6,8]x08,1x015,1x014,122x08,10000122000010001200122220012000122012222012200012223222312220001122x35,1222003322331123322301113331122233330033133x25,x36,133133222333111333321x35,111x05,222x16,22x06,222000222x08,22000220000"},SpinyEgg:{normal:"p[0,1,6,8]x06,22x09,22322322x06,2x36,2x05,x310,00022311x35,22002311x37,200331x39,022x310,2222x310,220x39,133002x37,11320022x35,11322000x310,x05,2x36,2x06,22322322x09,22x06,",two:"p[0,1,6,8]0000220022x08,233332x05,22x38,2200233311x35,20003311x36,0022331x37,2222x310,220x312,00x312,022x310,2222x37,1332200x36,11330002x35,1133320022x38,22x05,233332x08,2200220000"},Star:{normal:"p[0,6,8]x06,11x012,11x011,1111x010,1111x09,x16,0000x119,2112x15,01111211211110001112112111x05,x18,x06,x18,x05,x110,0000x110,00001111001111000111x06,1110011x08,110",two:"p[0,2,9]x06,22x012,22x011,2222x010,2222x09,x26,0000x219,1221x25,02222122122220002221221222x05,x28,x06,x28,x05,x210,0000x210,00002222002222000222x06,2220022x08,220",three:"p[0,5,8]x06,22x012,22x011,2222x010,2222x09,x26,0000x219,1221x25,02222122122220002221221222x05,x28,x06,x28,x05,x210,0000x210,00002222002222000222x06,2220022x08,220",four:"p[0,6,14]x06,11x012,11x011,1111x010,1111x09,x16,0000x119,2112x15,01111211211110001112112111x05,x18,x06,x18,x05,x110,0000x110,00001111001111000111x06,1110011x08,110"},Vine:["multiple","vertical",{top:"p[0,6,14]00222x010,x25,x08,2211122x07,x25,12x09,222022x012,22x012,22x012,22x012,22x012,220022x08,2202222x07,2221112x07,x26,12x06,220x25,",topheight:7,middle:"p[0,6,14]x06,22x012,22x012,22x08,220022x07,2222022x07,2111222x06,21x26,x06,x25,022x012,22x012,22x012,22x012,220022x08,2202222x07,2221112x07,x26,12x06,220x25,"}]},Solid:{Block:{normal:{used:"p[0,2,9]0x114,01x214,1121x210,1211x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,1121x210,1211x214,10x114,0",normal:{normal:"p[0,2,6,9]0x314,03x214,1321x210,12132222x35,x25,132223311133222213222331223312221322233122331222132222112333122213x26,3311122213x26,331x25,13x27,11x25,13x26,33x26,13x26,331x25,1321x25,112221213x214,x117,",two:"p[0,2,9]0x214,0x215,1221x210,121x215,1x26,111x26,1x26,1222212221x26,1222212221x25,11222212221x29,1112221x29,1x25,1x28,11x25,1x215,1x29,1x25,1221x25,11222121x215,x117,",three:"p[0,2,9,11]0x214,02x314,1231x310,13123333x25,x35,123332211122333312333221332213331233322133221333123333113222133312x36,2211133312x36,221x35,12x37,11x35,12x36,22x36,12x36,221x35,1231x35,113331312x314,x117,"}},Underworld:{used:"p[0,9,16]0x214,02x114,2212x110,2122x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,2212x110,2122x114,20x214,0",normal:{normal:"p[0,6,9,16]0x214,02x114,3213x110,31321111x25,x15,321112233322111132111223112231113211122311223111321111331222311132x16,2233311132x16,223x15,32x17,33x15,32x16,22x16,32x16,223x15,3213x15,331113132x114,x317,",two:"p[0,9,16]0x114,0x115,2112x110,212x115,2x16,222x16,2x16,2111121112x16,2111121112x15,22111121112x19,2221112x19,2x15,2x18,22x15,2x115,2x19,2x15,2112x15,22111212x115,x217,",three:"p[0,9,11,16]0x114,01x214,3123x210,32312222x15,x25,312221133311222231222113221132223122211322113222312222332111322231x26,1133322231x26,113x25,31x27,33x25,31x26,11x26,31x26,113x25,3123x25,332223231x214,x317,"}},Castle:["same",["Solid","Block","Underworld"]]},Brick:{normal:{normal:"p[2,5,9]x116,x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,x27,0x27,0x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,",used:["same",["Solid","Block","normal","used"]]},Underworld:{normal:"p[2,16]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,",used:["same",["Solid","Block","normal","used"]]},Castle:["filter",["Solid","Brick","normal"],"Castle"],Alt2:["filter",["Solid","Brick","normal"],"Alt2"]},BridgeBase:"p[0,2,5,8]111000112221012222x35,222x35,222x35,222x35,22221012211100011",Cannon:["multiple","vertical",{top:"p[0,2,9,22]333x010,3333111x310,11333x110,x36,1x313,111x310,113x112,3113x112,3113x112,3113x15,33331113113111131111211311311131133112131131113131121213113111313112121311311131122112331133313x16,2133331103x16,203110003x18,2x06,3x18,2x05,3x110,200003x110,2000311x28,1120031222333322212031122x36,2212031122323323221123112322332232112311232233223211231123223322321123112x38,2112311222322322211231122233332221123111x28,11123x114,2",topheight:8,middle:"p[2,5,9]1x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,2"}],CastleAxe:{normal:"p[0,2,4,6,9]003x010,3000323300420033130032333322333313032x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,130323333423333130002330042000313000300002200003x09,42x014,22x014,42x014,22x014,42x07,",two:"p[0,2,4,9]003x010,3000323300320033130032333322333313032x36,2x35,1332x36,2x35,1332x36,2x35,1332x36,2x35,1332x36,2x35,13032x35,23333130002330032000313000300002200003x09,32x014,22x014,32x014,22x014,32x07,",three:"p[0,2,4,9,11]004x010,4000424400320044140042444422444414042x45,32x45,1442x45,32x45,1442x45,32x45,1442x45,32x45,1442x45,32x45,140424444324444140002440032000414000400002200004x09,32x014,22x014,32x014,22x014,32x07,"},CastleBlock:"p[0,4,9]0x114,01x214,1121x210,1211x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,1121x210,1211x214,10x114,0",CastleBridge:"p[1,2,4,8]10001000100010001000100010001000122212223222322232223222322232223222322232223222322232221222122213331333133313331333133313331333",CastleChain:"p[0,1,3]x014,1x013,1x014,22x011,12x013,22x011,12x012,102x012,22x011,12x012,102x012,22x011,12x013,22x011,12x012,102x012,22x013,",CastleStone:{normal:"p[1,2,3,4]0031x06,31000022310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,3102223331x37,13333x116,x06,31x06,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,31x37,1x37,x117,",Underwater:"p[2,12,14,20]1103x16,03111122031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,0312220003x07,30000x316,x16,03x16,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,03x07,3x07,x317,"},Cloud:"p[0,1,2]000x210,x05,2x110,20002x112,2002x112,2002x112,202x114,22x15,2112x15,22x15,2112x15,22x15,2112x15,22x114,2212x110,2120211121111211120021111222211112002x112,2000211112211112x05,2222002222000",Coral:"p[0,7,8]0000100012x05,110001000120000121001000112000120110100012000020001010011211112000101001x26,100021100120000221000221112x06,2x05,22120001x05,1000012001x06,1011012001000100101001120122010001100012120022000021001122000020000211112x011,22212x06,",
DeadGoomba:{normal:"p[0,5,9,15]x06,2222x09,x210,000022333222233322022111133331111x218,000x110,x07,x18,x05,x35,0000x35,0",Underworld:"p[0,15,16,18]x06,2222x09,x210,000022111222211122022333311113333x218,000x310,x07,x38,x05,x15,0000x15,0",Castle:["filter",["Solid","DeadGoomba","normal"],"Castle"]},Firework:{normal:"p[0,6,8]x070,2002x010,20222202x09,221122x09,22111122x08,22111122x09,221122x09,20222202x010,2002x070,",n2:"p[0,1,6,8]x020,3x06,3x09,303303x09,x38,x06,303232232303x05,3321221233x06,3221111223x05,3332111123330000333211112333x05,3221111223x06,3321221233x05,303232232303x06,x38,x09,303303x09,3x06,3x020,",n3:"p[0,1,6,8]00030033330030000300x38,003000x35,22x35,00303323233232330300323x26,32300033321211212333033232x16,232x35,22x16,22x36,22x16,22x35,232x16,23233033321211212333000323x26,32300303323233232330300x35,22x35,000300x38,00300003003333003000"},Floor:{normal:"p[2,5,9]2x18,02111121x28,01222201x28,01222201x28,01222201x28,01022201x28,02000021x28,0x15,01x28,01222201x28,01222201x28,012222000x26,01x25,01100222201x25,0121100001x26,0122211101x26,01x26,01x25,002x06,21x06,2",Underworld:"p[2,16,18]1x28,01222212x18,02111102x18,02111102x18,02111102x18,02011102x18,01000012x18,0x25,02x18,02111102x18,02111102x18,021111000x16,02x15,02200111102x15,0212200002x16,0211122202x16,02x16,02x15,001x06,12x06,1",Underwater:{normal:"p[2,12,14]22x112,0221111x29,0011122111222211100122x15,2212221202112222011x25,0211222201x26,021x26,0x25,0221x26,0022201201x26,0000101011112222000100101222122220012011x25,02200122011x25,0200012001x25,001111220012220000122220022x06,2x07,2",Castle:["same",["Solid","Stone","Castle","Underwater"]]},Castle:["same",["Solid","Stone","Castle"]],Alt2:["filter",["Solid","Floor","normal"],"Alt2"]},Pipe:{normal:["multiple","vertical",{top:"p[0,2,13,14]x133,x230,11x35,x26,x319,1122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,232322x133,00x128,00",middle:"p[0,2,13,14]00122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,2322100"}],Castle:{normal:["multiple","vertical",{top:"p[0,1,3,4]x333,x130,33x25,x16,x219,3311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,121211x333,00x328,00",middle:"p[0,1,3,4]00311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,1211300"}],Underwater:["multiple","vertical",{top:"p[0,5,9,17]x133,x230,11x35,x26,x319,1122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,232322x133,00x128,00",middle:"p[5,9,17,20]33011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,1211033"}]},Alt:["same",["Solid","Pipe","Castle"]],Alt2:["same",["Solid","Pipe","Castle"]]},PipeHorizontal:{normal:"p[0,2,13,14]x115,x024,1x213,x122,0001x213,11x220,1001x213,11x220,1001x213,11x220,1001x313,11x221,101x313,11x321,101x213,11x321,101x213,11x221,101x213,11x221,101x213,11x222,11x213,11x222,11x313,11x222,11x213,11x322,11x213,11x222,11x213,11x222,11x213,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x321,101x313,11x321,101x313,11x321,101x313,11323232323232323232323101323232323232311232323232323232323232101232323232323211323232323232323232321001323232323232311x220,1001x213,11x220,1001x213,x122,000x115,x024,",small:"p[0,2,13,14]x115,01x213,111x213,111x213,111x213,111x313,111x313,111x213,111x213,111x213,111x213,111x213,111x313,111x213,111x213,111x213,111x213,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111323232323232311123232323232321113232323232323111x213,111x213,x117,0"},PipeVertical:{normal:"p[0,2,13,14]012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210",Castle:{normal:"p[0,1,3,4]00211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,1311200",Underwater:"p[0,7,8,17]00122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,2322100"}},Platform:{normal:"p[0,1,6,9]x18,x38,220000222x05,322x05,32223333x210,x38,",Sky:"p[0,1,6]001111000x15,2012x15,212x15,212211112112211220111122000222200"},RestingStone:["same",["Solid","Stone"]],Springboard:{Alt2:["multiple","vertical",{top:"p[8]x032,",topheight:1,middle:"p[0,1,6]x05,110011x010,210012x010,200002x010,200002x09,2x06,2x08,2x06,2x08,2x06,2x07,2x08,2x05,12x08,21000011x08,11000011x08,11000012x08,21x05,2x08,2x07,2x06,2x08,2x06,2x08,2x06,2x09,200002x010,200002x010,210012x010,110011x05,",middleStretch:!0,bottom:"p[4,8,3]x132,x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,",bottomheight:4}],normal:["multiple","vertical",{top:"p[8]x032,",topheight:1,middle:"p[0,1,6]x05,110011x010,210012x010,200002x010,200002x09,2x06,2x08,2x06,2x08,2x06,2x07,2x08,2x05,12x08,21000011x08,11000011x08,11000012x08,21x05,2x08,2x07,2x06,2x08,2x06,2x08,2x06,2x09,200002x010,200002x010,210012x010,110011x05,",middleStretch:!0,bottom:"p[2,8,9]x132,x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,",bottomheight:4}]},Stone:{normal:"p[2,5,9]2x114,012x112,00112x110,0001112x18,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,0000111x09,200011x011,2001x013,2x016,2",Underwater:{normal:["same",["Solid","Floor","Underwater","normal"]],Castle:["same",["Solid","Stone","Castle","Underwater"]]},Underworld:["filter",["Solid","Stone","normal"],"Underworld"],Castle:{normal:"p[1,2,3,4]0031x06,31000022310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,3102223331x37,13333x116,x06,31x06,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,31x37,1x37,x117,",Underwater:"p[2,3,14,20]1103x16,03111122031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,0312220003x07,30000x316,x16,03x16,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,03x07,3x07,x317,"},Sky:"p[0,1,2]000x210,x05,2x110,20002x112,2002x112,2002x112,202x114,22x15,2112x15,22x15,2112x15,22x15,2112x15,22x114,2212x110,2120211121111211120021111222211112002x112,2000211112211112x05,2222002222000",Alt:["filter",["Solid","Stone","normal"],"Alt"],Alt2:["filter",["Solid","Stone","normal"],"Alt2"]},ShroomTop:["multiple","horizontal",{left:"p[0,2,6,8]000x113,001x36,x27,01x37,x27,01x37,x27,1x38,x27,1x37,x28,1x37,222333221x36,222x35,21x35,222x37,1x28,x37,1x28,x37,1x29,x35,21x210,333221x215,011x213,000x113,",middle:"p[2,6,8]x016,1x28,x18,x28,x19,x26,x132,x25,x110,x27,x19,x27,x18,x29,x17,x29,x17,x29,x17,x29,x18,x27,x19,x27,x110,x25,111x016,",right:"p[0,2,6,8]x113,000x38,x25,100x38,x26,10x38,x26,10x38,222333212x36,222x35,1223333222x36,1x29,x36,1x29,x36,1x210,x35,1x211,33321x215,1x215,1x215,1x214,x117,0"}],TreeTop:{normal:["multiple","horizontal",{left:"p[0,2,13]00x114,011x213,01x214,11x214,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x26,1x27,1012222101x25,10001111000x15,00",middle:"p[2,8,13]x016,x2199,0x27,00x25,010x25,011x05,111x05,11",right:"p[0,2,13]x114,00x213,110x214,10x214,11x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,11x27,1x26,101x25,10122221000x15,000111100"}],Alt:["multiple","horizontal",{left:"p[0,1,4]00x214,022x113,02x114,22x114,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x16,2x17,2021111202x15,20002222000x25,00",middle:"p[1,3,4]x216,x0199,2x07,22x05,212x05,211x25,111x25,11",right:"p[0,1,4]x213,000x113,200x114,20x114,20x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,22x17,2x16,202x15,20211112000x25,000222200"}],Alt2:["same",["Solid","TreeTop","Alt"]]},TreeTrunk:["same",["Scenery","TreeTrunk"]],WaterBlock:"20"},Scenery:{BrickHalf:{normal:"p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,",Alt2:["filter",["Scenery","BrickHalf","normal"],"Alt2"]},BrickPlain:{normal:"p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0",Alt2:["filter",["Scenery","BrickPlain","normal"],"Alt2"]},BridgeBase:"p[0,2,5,9]111000112221012222x35,222x35,222x35,222x35,22221012211100011",Bush1:"p[0,2,13,14]x014,1111x027,122221x024,11x26,1x022,1x28,101x020,1x29,121x019,1x26,3x25,1x017,122233222322221x016,12223x210,1x013,111x216,1001x08,1x219,10121x06,1x221,1221x06,x225,1010011x226,1211x230,11x230,101x228,10",Bush2:"p[0,2,13,14]x014,1111x012,1111x027,122221x010,122221x024,11x26,1x07,11x26,1x022,1x28,10100001x28,101x020,1x29,1210001x29,121x019,1x26,3x25,1001x26,3x25,1x017,1222332223222210122233222322221x016,12223x210,112223x210,1x013,111x232,1001x08,1x235,10121x06,1x237,1221x06,x241,1010011x242,1211x246,11x246,101x244,10",Bush3:"p[0,2,13,14]x014,1111x012,1111x012,1111x027,122221x010,122221x010,122221x024,11x26,1x07,11x26,1x07,11x26,1x022,1x28,10100001x28,10100001x28,101x020,1x29,1210001x29,1210001x29,121x019,1x26,3x25,1001x26,3x25,1001x26,3x25,1x017,12223322232222101222332223222210122233222322221x016,12223x210,112223x210,112223x210,1x013,111x248,1001x08,1x251,10121x06,1x253,1221x06,x257,1010011x258,1211x262,11x262,101x260,10",CastleBridge:"p[1,2,4,9]10001000100010001000100010001000122212223222322232223222322232223222322232223222322232221222122213331333133313331333133313331333",CastleChain:"p[0,1,3]x014,1x013,1x014,22x011,12x013,22x011,12x012,102x012,22x011,12x012,102x012,22x011,12x013,22x011,12x012,102x012,22x013,",CastleDoor:{normal:"p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x15,x06,11110111x010,11011x012,1x017,1x014,11x014,1x0416,",Alt2:["filter",["Scenery","CastleDoor","normal"],"Alt2"]},CastleFlag:"p[0,1,6,8]02x011,222x011,2x012,3x111,03x15,3x15,03x15,3x15,0311x37,1103111x35,11103111133311110311133133111031113111311103x111,03x012,3x012,3x012,3x012,3x012,3x012,3x012,3x011,",CastleRailing:{normal:"p[0,2,5,9]2222x07,x25,3332x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,23333111x29,1111",Alt2:["filter",["Scenery","CastleRailing","normal"],"Alt2"]},CastleRailingFilled:{normal:"p[2,5,9]11112220222x15,222122202221x27,122202221x27,1x07,1x27,1x27,1x27,1x27,1x27,1x27,12222000x19,0000",Alt2:["filter",["Scenery","CastleRailingFilled","normal"],"Alt2"]},CastleTop:{normal:"p[2,9]x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,x025,1110x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,01111x024,x17,x09,x17,0x17,x09,x17,0x17,x09,x17,x025,11101111x08,1110x17,01111x08,1110x17,01111x08,11101111x024,x17,x09,x17,0x17,x09,x17,0x17,x09,x17,x025,11101111x08,1110x17,01111x08,1110x17,01111x08,11101111x024,",Alt2:["filter",["Scenery","CastleTop","normal"],"Alt2"]},CastleWall:{normal:"p[0,2,5,9]2222x07,x25,3332x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,23333111x29,1111x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,",Alt2:["filter",["Scenery","CastleWall","normal"],"Alt2"]},Cloud1:{normal:"p[0,1,2,19]x014,2222x027,211112x024,22x16,2x022,2x18,202x020,2x19,212x019,2x16,3x15,2x017,211133111311112x016,21113x110,2x013,222x116,2002x08,2x119,20212x06,2x121,2112x06,x125,2020022x126,2122x130,22x130,202x128,20002113x111,3x111,2x05,2113113x16,3x113,2x05,2113333111333311113x18,200002x15,x36,1x35,x19,x06,2221111331111333x18,22x09,2x16,2x18,21122x012,221112022111122022x016,22200002222x010,",Alt2:["filter",["Scenery","Cloud1","normal"],"Alt2"]},Cloud2:{normal:"p[0,1,2,19]x014,2222x012,2222x027,211112x010,211112x024,22x16,2x07,22x16,2x022,2x18,20200002x18,202x020,2x19,2120002x19,212x019,2x16,3x15,2002x16,3x15,2x017,2111331113111120211133111311112x016,21113x110,221113x110,2x013,222x132,2002x08,2x135,20212x06,2x137,2112x06,x141,2020022x142,2122x146,22x146,202x144,20002113x111,3x115,3x111,2x05,2113113x16,3x18,3x16,3x113,2x05,21133331113333111131333111333311113x18,200002x15,x36,1x35,1111x36,1x35,x19,x06,2221111331111333x17,331111333x18,22x09,2x16,2x18,2x16,2x18,21122x012,2211120221111220221112022111122022x016,22200002222x05,22200002222x010,",Alt2:["filter",["Scenery","Cloud2","normal"],"Alt2"]},Cloud3:{normal:"p[0,1,2,19]x014,2222x012,2222x012,2222x027,211112x010,211112x010,211112x024,22x16,2x07,22x16,2x07,22x16,2x022,2x18,20200002x18,20200002x18,202x020,2x19,2120002x19,2120002x19,212x019,2x16,3x15,2002x16,3x15,2002x16,3x15,2x017,21113311131111202111331113111120211133111311112x016,21113x110,221113x110,221113x110,2x013,222x148,2002x08,2x151,20212x06,2x153,2112x06,x157,2020022x158,2122x162,22x162,202x160,20002113x111,3x115,3x115,3x111,2x05,2113113x16,3x18,3x16,3x18,3x16,3x113,2x05,211333311133331111313331113333111131333111333311113x18,200002x15,x36,1x35,1111x36,1x35,1111x36,1x35,x19,x06,2221111331111333x17,331111333x17,331111333x18,22x09,2x16,2x18,2x16,2x18,2x16,2x18,21122x012,22111202211112202211120221111220221112022111122022x016,22200002222x05,22200002222x05,22200002222x010,",Alt2:["filter",["Scenery","Cloud3","normal"],"Alt2"]},Fence:"p[0,2,5,9]000023222331x08,2322333100003322232233312222333323223331333311112322333x15,000023223331x08,23223331x08,23232331x08,23232331x08,2323233100003322232323312222333323232331333311112322233x15,000023222331x08,23222331x08,232223310000",Flag:{normal:"p[0,1,14]x116,0x18,x25,1100x16,22121221000x15,211211210000111121222121x05,11122212221x06,11x27,1x07,111222111x08,x18,x09,x17,x010,x16,x011,x15,x012,1111x013,111x014,11x015,1",Alt:"p[0,5,16]x116,0x18,x25,1100x16,22121221000x15,211211210000111121222121x05,11122212221x06,11x27,1x07,111222111x08,x18,x09,x17,x010,x16,x011,x15,x012,1111x013,111x014,11x015,1",Alt2:["same",["Scenery","Flag","Alt"]]},FlagPole:{normal:"p[13]x0288,",Alt:"p[1]x0288,",Alt2:["same",["Scenery","FlagPole","Alt"]],Shrooms:"x06888,"},FlagTop:{normal:"p[0,2,13,14]001111000123331012x35,112x35,11x36,11x36,10133331000111100",Alt:"p[0,1,3,4]002222000213332021x35,221x35,22x36,22x36,20233332000222200",Alt2:["same",["Scenery","FlagTop","Alt"]],Shrooms:"p[0,2,6,8]001111000123331012x35,112x35,11x36,11x36,10133331000111100"},HillLarge:"p[0,2,14]x037,x16,x071,111x26,111x066,11x212,11x063,1x213,1221x061,1x213,111221x059,1x214,1112221x057,1x215,11122221x055,1x213,112111x25,1x053,1x214,11221x27,1x051,1x215,11x211,1x049,1x216,11x212,1x047,1x232,1x045,1x234,1x043,1x236,1x041,1x238,1x039,1x240,1x037,1x242,1x035,1x244,1x033,1x246,1x031,1x213,1x223,1x210,1x029,1x213,111x221,111x210,1x027,1x214,111x221,111x211,1x025,1x215,111x221,111x212,1x023,1x213,112111x218,112111x213,1x021,1x214,11221x219,11221x215,1x019,1x215,11x222,11x219,1x017,1x216,11x222,11x220,1x015,1x264,1x013,1x266,1x011,1x268,1x09,1x270,1x07,1x272,1x05,1x274,10001x276,101x278,1",HillSmall:"p[0,2,14]x021,x16,x039,111x26,111x034,11x212,11x031,1x213,1221x029,1x213,111221x027,1x214,1112221x025,1x215,11122221x023,1x213,112111x25,1x021,1x214,11221x27,1x019,1x215,11x211,1x017,1x216,11x212,1x015,1x232,1x013,1x234,1x011,1x236,1x09,1x238,1x07,1x240,1x05,1x242,10001x244,101x246,1",Peach:"p[0,1,2,6,8]x051,303303x010,x36,x09,x48,x07,x410,x07,4443234444x07,433233434x06,x37,434x07,x38,44x05,3444x35,44x05,34433334444x06,x36,4444x06,4413341444x05,44133111144x05,431111331440000x39,144x05,x37,1444x07,44111144x07,x110,x05,x112,0000x112,0001111x46,111100x414,00x45,1111x45,0",PlatformString:{normal:"x008,",Castle:"x018,"},PlantLarge:{normal:"p[0,2,5,13]x06,1111x010,11333311x07,1x38,1x05,1x310,10001x312,1001x312,101x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,101x312,1001x312,1001x312,10001x310,1000011x38,11x05,1113333111x07,x18,x09,x17,x08,1x26,1x08,12222121x08,12222121x08,12222121x08,12222121x08,11222211x09,121121x09,12122121x08,1x26,1x08,12222121x08,12222121x08,12222121x08,12222121x08,11222211x09,121121x09,121221210000",Alt:"p[0,1,2,3,5]x06,3333x010,33111133x07,3x18,3x05,3x110,30003x112,3003x112,303x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,303x112,3003x112,3003x112,30003x110,3000033x18,33x05,3331111333x07,x38,x09,x37,x08,2x46,2x08,24444242x08,24444242x08,24444242x08,24444242x08,22444422x09,242242x09,24244242x08,2x46,2x08,24444242x08,24444242x08,24444242x08,24444242x08,22444422x09,242242x09,242442420000",Alt2:["same",["Scenery","PlantLarge","Alt"]]},PlantSmall:{normal:"p[0,2,5,13]x05,1111x08,11333311x05,1x38,10001x310,101x312,11x312,11x312,11x312,11x312,101x310,10011x38,110001113333111x05,x18,x07,x17,x06,1x26,1x06,12222121x06,12222121x06,12222121x06,12222121x06,11222211x07,121121x07,12122121x06,1x26,1x06,12222121x06,12222121x06,12222121x06,12222121x06,11222211x07,121121x07,12122121000",Alt:"p[0,1,2,3,5]x05,3333x08,33111133x05,3x18,30003x110,303x112,33x112,33x112,33x112,33x112,303x110,30033x18,330003331111333x05,x38,x07,x37,x06,2x46,2x06,24444242x06,24444242x06,24444242x06,24444242x06,22444422x07,242242x07,24244242x06,2x46,2x06,24444242x06,24444242x06,24444242x06,24444242x06,22444422x07,242242x07,24244242000",Alt2:["same",["Scenery","PlantSmall","Alt"]]},Railing:{normal:"p[0,2,13]2x06,221x05,12010001220100012200111022x06,22x06,22x06,2",Night:"p[0,1,3]1x06,112x05,21020002110200021100222011x06,11x06,11x06,1"},ShroomTrunk:["multiple","vertical",{top:"p[2,5,9]0x114,00x114,00x114,00x114,00x114,00111121111211110021121211212112001221112211122100x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,0",middle:"p[2,5]0x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,0"}],String:{normal:"x058,",Alt2:"x018,"},StringCornerLeft:{normal:"p[0,5,9]000x17,00x18,0111222000011x25,00112220222011220002201122202220110x25,00110022200011x08,",Alt2:"p[0,1,3,4]000x17,00x18,0111222000011x25,00112223222011223332201122232220110x25,00110022200011x08,"},StringCornerRight:{normal:"p[0,5,9]x17,000x18,x05,222111000x25,11002220222110220002211022202221100x25,0110002220011x08,11",Alt2:"p[0,1,3,4]x17,000x18,x05,222111000x25,11002223222110223332211022232221100x25,0110002220011x08,11"},Toad:"p[0,1,2,6,8]x038,1111x010,x18,x06,144411114441000114441441444110011441444414411044111144441111x45,1114444111x46,1111441111x46,x110,x45,1133233233114401143323323341100300x38,00303330333223330x37,443333443333003x410,300004444333344440000444x36,4440000444x36,444x05,x110,x05,x112,000444x18,444041444x16,4441x47,1111x412,1111x46,",TreeTrunk:{normal:"p[2,9]x112,0x17,0x17,0x16,0x17,0x17,0x112,",Underworld:["filter",["Scenery","TreeTrunk","normal"],"Underworld"],Alt2:["filter",["Scenery","TreeTrunk","normal"],"Alt2"]},Water:{normal:["multiple","vertical",{top:"p[0,1,17]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",middle:"p[17]x088,"}],Underwater:["multiple","vertical",{top:"p[1,17,0]x212,0x26,010222201102200111022x16,0010x16,010111101101100x19,",middle:"p[17]x088,"}],Night:["multiple","vertical",{top:"p[2,1,19]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",middle:"p[19]x088,"}],Castle:{normal:["multiple","vertical",{top:"p[0,1,8]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",middle:"p[8]x088,"}],Underwater:["multiple","vertical",{top:"p[1,17,20]x212,0x26,010222201102200111022x16,0010x16,010111101101100x19,",middle:"p[20]x088,"}]}}},Text:{DecorativeBack:["multiple","corners",{top:"x054,",topRight:"00",right:"x024,",bottomRight:"00",bottom:"x024,",bottomLeft:"00",left:"x054,",topLeft:"00",middle:"x094,"}],DecorativeDot:"p[0,2,22]220221011",TextA:"p[0,1]00111000110110110001111000x111,000111100011",TextB:"p[0,1]x16,0110001111000x18,0110001111000x18,0",TextC:"p[0,1]0011110011001111x05,11x05,11x06,1100110011110",TextD:"p[0,1]x15,0011001101100011110001111000111100110x15,00",TextE:"p[0,1]x19,x05,11x05,x16,011x05,11x05,x17,",TextF:"p[0,1]x19,x05,11x05,x16,011x05,11x05,11x05,",TextG:"p[0,1]0011110011001111x05,1100x15,00011011001100x15,",TextH:"p[0,1]1100011110001111000x111,0001111000111100011",TextI:"p[0,1]0x16,00011x05,11x05,11x05,11x05,11000x16,",TextK:"p[0,1]1100011110011011011001111000x15,0011011101100111",TextL:"p[0,1]011x05,11x05,11x05,11x05,11x05,11x05,x16,",TextM:"p[0,1]11000x15,0x119,0101111000111100011",TextN:"p[0,1]11000x15,00x16,0x111,0x16,00x15,00011",TextO:"p[0,1]0x15,0110001111000111100011110001111000110x15,0",TextP:"p[0,1]x16,01100011110001111000x18,011x05,11x05,",TextQ:"p[0,1]0x15,0110001111000111100011110x16,001100111101",TextR:"p[0,1]x16,0110001111000111100x18,0011011101100111",TextS:"p[0,1]0111100110011011x06,x15,x06,1111000110x15,0",TextT:"p[0,1]0x16,00011x05,11x05,11x05,11x05,11x05,1100",TextU:"p[0,1]1100011110001111000111100011110001111000110x15,0",TextV:"p[0,1]1100011110001111000x15,01110x15,000111x05,1000",TextW:"p[0,1]1100011110001111010x119,0x15,00011",TextY:"p[0,1]011001101100110110011001111000011x05,11x05,1100",Text0:"",Text1:"p[0,1]001100011100001100001100001100001100x16,",Text2:"p[0,1]0x15,011000110000111001111001111001110000x17,",Text3:"p[0,1]0x16,00001100001100001111x06,1111000110x15,0",Text4:"p[0,1]0001110001111001101101100110x17,000011x05,110",Text5:"p[0,1]x16,011x05,x16,x06,11x05,1111000110x15,0",Text6:"p[0,1]0011110011000011x05,x16,0110001111000110x15,0",Text7:"p[0,1]x19,00011000011000011000011x05,11x05,11000",Text8:"p[0,1]0x15,0110001111000110x15,0110001111000110x15,0",Text9:"p[0,1]0x15,0110001111000110x16,x05,1100001100111100",TextPeriod:"p[0,1]x032,11000110",TextExclamationMark:"p[0,1]00110011110111101111001100011x08,110",TextColon:"p[0,1]x06,1100011x08,1100011x012,",TextSlash:"p[0,1]x06,1x05,1x05,1x05,1x05,1x05,1x05,1x06,",Text1up:"p[0,1]0110011001011110111001100101100101100110010110010110011001011001011001100101111001100x15,0110001111001110011000",Text100:"p[0,1]001000100010011001010101001001010101001001010101001001010101001001010101011101110111011100100010",Text200:"p[0,1]01100010001010010101010100010101010100100101010101000101010110000101010x15,01110x17,00100010",Text400:"p[0,1]10100010001010100101010110100101010110100101010x15,0101010x15,01010101001001110111001000100010",Text500:"p[0,1]11110010001010000101010110000101010111100101010100010101010100010101010x15,01110x16,000100010",Text800:"p[0,1]011000100010100101010101010101010101011001010101101101010101100101010101100101110111011000100010",Text1000:"p[0,1]00100010001000100110010101010101001001010101010100100101010101010010010101010101001001010101010101110111011101110111001000100010",Text2000:"p[0,1]01100010001000101001010101010101000101010101010100100101010101010100010101010101100001010101010x15,011101110x17,001000100010",Text4000:"p[0,1]101000100010001010100101010101011010010101010101101001010101010x15,01010101010x15,01010101010100100111011101110010001000100010",Text5000:"p[0,1]11110010001000101000010101010101100001010101010111100101010101010001010101010101000101010101010x15,011101110x16,0001000100010",Text8000:"p[0,1]01100010001000101001010101010101010101010101010101100101010101011011010101010101100101010101010110010111011101110110001000100010",TextColoredCopyright:"p[0,22]0011110001000010100110011010000110100001100110010100001000111100",TextColoredD:"p[0,22]x15,0011001101100011110001111000111100110x15,00",TextColoredE:"p[0,22]x19,x05,11x05,x16,011x05,11x05,x17,",TextColoredI:"p[0,22]0x16,00011x05,11x05,11x05,11x05,11000x16,",TextColoredN:"p[0,22]11000x15,00x16,0x111,0x16,00x15,00011",TextColoredO:"p[0,22]0x15,0110001111000111100011110001111000110x15,0",TextColoredT:"p[0,22]0x16,00011x05,11x05,11x05,11x05,11x05,1100",TextColored1:"p[0,22]001100011100001100001100001100001100x16,",TextColored5:"p[0,22]x16,011x05,x16,x06,11x05,1111000110x15,0",TextColored8:"p[0,22]0x15,0110001111000110x15,0110001111000110x15,0",TextColored9:"p[0,22]0x15,0110001111000110x16,x05,1100001100111100",TextLargeE:"p[0,2,22]000x211,000x212,000x212,00x213,00x213,1x214,1x214,1x214,1x26,x19,x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,00x26,1x26,10x26,1x26,10x26,10x16,0x214,0x214,0x214,00x213,00x213,101x212,101x212,1001x211,100x113,000x112,000x112,0000x111,",TextLargeP:"p[0,2,22]x211,0000x212,000x212,000x213,00x213,00x214,0x214,0x214,0x26,1x27,1x26,1x27,1x26,1x27,1x26,1x26,11x26,1x26,11x26,1x25,111x26,1x25,111x26,122221110x26,10x16,0x26,10x15,00x26,10x15,00x26,101111000x26,1x08,x26,1x08,x26,1x08,x26,1x09,x16,x09,x16,x09,x16,x09,x16,x08,",TextLargeR:"p[0,2,22]x211,0000x212,000x212,000x213,00x213,00x214,0x214,0x214,0x26,1x27,1x26,1x27,1x26,1x27,1x26,1x26,11x26,1x25,111x26,1x26,11x26,1x27,1x26,1x27,0x26,10x26,0x26,10x26,0x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,10x16,00x16,0x16,00x16,0x16,00x16,0x16,00x16,",TextLargeS:"p[0,2,22]000x28,x06,x210,x05,x210,0000x212,000x212,00x214,0x214,0x214,0x27,x17,0x28,x17,0x29,x15,0x211,11101x211,000111x29,00001111x28,000x16,x26,0x214,0x214,0x214,10x212,110x212,1101x210,11101x210,111001x28,111000x112,0000x110,x05,x110,x06,x18,000",TextLargeU:"p[0,2,22]x26,00x26,0x26,00x26,0x26,00x26,0x26,00x26,0x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x214,1x214,1x214,10x212,110x212,1101x210,11101x210,111001x28,111000x112,0000x110,x05,x110,x06,x18,000",TextHugeA:"p[0,2,22]000x28,x06,x210,x05,x210,0000x212,000x212,00x214,0x214,0x214,0x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x214,1x214,1x214,1x214,1x214,1x214,1x214,1x214,1x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,10x16,00x16,0x16,00x16,0x16,00x16,0x16,00x16,",TextHugeB:"p[0,2,22]x211,0000x212,000x212,000x213,00x213,00x214,0x214,0x214,0x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,1x27,1x26,1x27,1x26,1x27,1x26,1x26,11x26,1x25,111x26,1x26,11x26,1x27,1x26,1x27,0x26,11x26,0x26,11x26,0x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,1x27,1x26,1x27,1x26,1x27,1x26,1x26,11x26,1x26,11x26,1x25,111x26,1x25,111x26,1222211100x16,0x16,00x16,0x15,000x16,0x15,000x16,01111000",TextHugeI:"p[0,2,22]x26,0x26,0x26,0x26,0x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,1x26,10x16,0x16,0x16,0x16,",TextHugeM:"p[0,2,22]000x25,x06,x25,x06,x27,0000x27,x05,x27,0000x27,0000x29,00x29,000x29,00x29,00x222,0x222,0x222,0x26,11x26,11x26,1x26,11x26,11x26,1x26,11x26,11x26,1x26,11x26,11x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,1x26,10x26,10x26,10x16,00x16,00x16,0x16,00x16,00x16,0x16,00x16,00x16,0x16,00x16,00x16,",TextHugeO:"p[0,2,22]000x28,x06,x210,x05,x210,0000x212,000x212,00x214,0x214,0x214,0x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x214,1x214,1x214,10x212,110x212,1101x210,11101x210,111001x28,111000x112,0000x110,x05,x110,x06,x18,000",TextHugeR:"p[0,2,22]x211,0000x212,000x212,000x213,00x213,00x214,0x214,0x214,0x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,1x27,1x26,1x27,1x26,1x27,1x26,1x26,11x26,1x25,111x26,1x26,11x26,1x27,1x26,1x27,0x26,10x26,0x26,10x26,0x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,10x16,00x16,0x16,00x16,0x16,00x16,0x16,00x16,",TextHugeS:"p[0,2,22]000x28,x06,x210,x05,x210,0000x212,000x212,00x214,0x214,0x214,0x26,11x26,1x26,11x26,1x26,11x26,1x26,11x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x27,00x16,x28,0x16,0x29,x15,0x211,11101x211,000111x29,00001111x28,000x16,x26,0x26,11x26,0x26,11x26,0x26,01x26,1x26,01x26,1x26,10x26,1x26,10x26,1x26,10x26,1x26,10x26,1x214,1x214,1x214,10x212,110x212,1101x210,11101x210,111001x28,111000x112,0000x110,x05,x110,x06,x18,000",TextHugePeriod:"p[0,2,22]x0224,x26,0x26,0x26,0x26,0x26,1x26,1x26,1x26,10x16,0x16,0x16,0x16,"}}};PlayMarioJas.PlayMarioJas.settings.statistics = {
    "prefix": "PlayMarioJas",
    "doMakeContainer": true,
    "displayChanges": {
        "Infinity": "INF"
    },
    "containersArguments": [
        ["table", {
            "id": "dataDisplay",
            "style": {
                "position": "absolute",
                "top": 0,
                "width": "100%",
                "color": "white",
                "fontSize": "21px",
                "textTransform": "uppercase",
            }
        }],
        ["tr", {
            "style": {
                "padding": "7px 14px 0 14px",
                "textAlign": "center"
            }
        }]
    ],
    "defaults": {
        "elementTag": "td"
    },
    "values": {
        "volume": {
            "valueDefault": 1
        },
        "muted": {
            "valueDefault": false
        },
        "power": {
            "valueDefault": 1,
            "storeLocally": false
        },
        "traveled": {
            "valueDefault": 0
        },
        "score": {
            "valueDefault": 0,
            "digits": 6,
            "hasElement": true,
            "modularity": 100000,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "time": {
            "valueDefault": 0,
            "digits": 3,
            "hasElement": true,
            "minimum": 0,
            "triggers": {
                "100": function (EightBitter) {
                    if (!EightBitter.MapScreener.notime) {
                        EightBitter.AudioPlayer.playThemePrefixed("Hurry");
                    }
                }
            },
            "onMinimum": function (EightBitter) {
                EightBitter.killPlayer(EightBitter.player, true);
            }
        },
        "world": {
            "valueDefault": 0,
            "hasElement": true
        },
        "coins": {
            "valueDefault": 0,
            "hasElement": true,
            "modularity": 100,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "lives": {
            "valueDefault": 3,
            "hasElement": true
        },
        "luigi": {
            "valueDefault": 0,
            "storeLocally": true
        }
    }
};
PlayMarioJas.PlayMarioJas.settings.touch = {
    "enabled": true,
    "styles": {
        "Button": {
            "elementInner": {
                "style": {
                    "padding": ".385cm",
                    "width": "1.4cm",
                    "height": "1.4cm",
                    "border": "4px solid rgb(238, 238, 238)",
                    "borderRadius": "100%",
                    "background": "rgb(175, 175, 175)",
                    "textAlign": "center",
                    "cursor": "pointer"
                }
            }
        },
        "Joystick": {
            "elementInner": {
                "style": {
                    "width": "3.5cm",
                    "height": "3.5cm"
                }
            },
            "circle": {
                "style": {
                    "top": "21%",
                    "right": "21%",
                    "bottom": "21%",
                    "left": "21%",
                    "boxShadow": "0 0 1px 4px rgb(238, 238, 238)",
                    "background": "rgb(175, 175, 175)",
                    "borderRadius": "100%",
                    "cursor": "pointer"
                }
            },
            "tick": {
                "style": {
                    "width": ".28cm",
                    "height": "4px",
                    "background": "rgb(238, 238, 238)"
                }
            },
            "dragLine": {
                "style": {
                    "width": ".49cm",
                    "height": "4px",
                    "background": "rgb(210, 210, 210)",
                    "transition": "117ms opacity"
                }
            },
            "dragShadow": {
                "style": {
                    "background": "rgba(231, 231, 231, .84)",
                    "boxShadow": "0 0 7px 3px rgba(175, 175, 175, .7)",
                    "transition": "117ms all"
                }
            }
        }
    },
    "controls": [
        {
            "name": "Joystick",
            "control": "Joystick",
            "position": {
                "vertical": "bottom",
                "horizontal": "left",
                "offset": {
                    "left": "0",
                    "top": "-3.5cm"
                }
            },
            "directions": [
                {
                    "name": "Up",
                    "degrees": 0,
                    "neighbors": ["UpLeft", "UpRight"]
                },
                {
                    "name": "UpRight",
                    "degrees": 45,
                    "neighbors": ["Up", "Right"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["right"]
                        },
                        "deactivated": {
                            "onkeyup": ["right"]
                        }
                    }
                },
                {
                    "name": "Right",
                    "degrees": 90,
                    "neighbors": ["UpRight", "DownRight"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["right"]
                        },
                        "deactivated": {
                            "onkeyup": ["right"]
                        }
                    }
                },
                {
                    "name": "DownRight",
                    "degrees": 135,
                    "neighbors": ["Right", "Down"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["down", "right"]
                        },
                        "deactivated": {
                            "onkeyup": ["down", "right"]
                        }
                    }
                },
                {
                    "name": "Down",
                    "degrees": 180,
                    "neighbors": ["DownRight", "DownLeft"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["down"]
                        },
                        "deactivated": {
                            "onkeyup": ["down"]
                        }
                    }
                },
                {
                    "name": "DownLeft",
                    "degrees": 225,
                    "neighbors": ["Down", "left"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["down", "left"]
                        },
                        "deactivated": {
                            "onkeyup": ["down", "left"]
                        }
                    }
                },
                {
                    "name": "Left",
                    "degrees": 270,
                    "neighbors": ["DownLeft", "UpLeft"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["left"]
                        },
                        "deactivated": {
                            "onkeyup": ["left"]
                        }
                    }
                },
                {
                    "name": "UpLeft",
                    "degrees": 315,
                    "neighbors": ["Left", "Up"],
                    "pipes": {
                        "activated": {
                            "onkeydown": ["left"]
                        },
                        "deactivated": {
                            "onkeyup": ["left"]
                        }
                    }
                }
            ]
        },
        {
            "name": "A",
            "control": "Button",
            "label": "A",
            "position": {
                "vertical": "bottom",
                "horizontal": "right",
                "offset": {
                    "left": "-1.56cm",
                    "top": "-2.8cm"
                }
            },
            "pipes": {
                "activated": {
                    "onkeydown": ["up"]
                },
                "deactivated": {
                    "onkeyup": ["up"]
                }
            }
        },
        {
            "name": "B",
            "control": "Button",
            "label": "B",
            "position": {
                "vertical": "bottom",
                "horizontal": "right",
                "offset": {
                    "left": "-2.8cm",
                    "top": "-1.56cm"
                }
            },
            "pipes": {
                "activated": {
                    "onkeydown": ["sprint"]
                },
                "deactivated": {
                    "onkeyup": ["sprint"]
                }
            }
        },
        {
            "name": "Start",
            "control": "Button",
            "label": "Start",
            "styles": {
                "elementInner": {
                    "style": {
                        "width": "7em",
                        "height": "auto",
                        "padding": ".21cm",
                        "borderRadius": "7px",
                        "fontSize": "77%"
                    }
                }
            },
            "position": {
                "vertical": "bottom",
                "horizontal": "center",
                "offset": {
                    "top": "-1.12cm"
                }
            },
            "pipes": {
                "activated": {
                    "onmousedown": ["rightclick"]
                }
            }
        }
    ]
};
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
                    "url('Fonts/pstart.eot')",
                    "url('Fonts/pstart.eot?#iefix') format('embedded-opentype')",
                    "url('Fonts/2p-web.woff') format('woff')",
                    "url('Fonts/2p-web.ttf') format('truetype')",
                    "url('Fonts/pstart.svg') format('svg')"
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

        ]
    };
})(PlayMarioJas || (PlayMarioJas = {}));
