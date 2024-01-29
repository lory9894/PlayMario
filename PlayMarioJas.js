var __extends = this && this.__extends || function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    PlayMarioJas;
! function(e) {
    "use strict";
    var t = function(e) {
        function t(n) {
            this.settings = t.settings, this.deviceMotionStatus = {
                motionLeft: !1,
                motionRight: !1,
                x: void 0,
                y: void 0,
                dy: void 0
            }, e.call(this, this.proliferate({
                constantsSource: t,
                constants: ["unitsize", "scale", "gravity", "pointLevels", "customTextMappings"]
            }, n))
        }
        return __extends(t, e), t.prototype.resetObjectMaker = function(e, t) {
            e.ObjectMaker = new ObjectMakr.ObjectMakr(e.proliferate({
                properties: {
                    Quadrant: {
                        EightBitter: e,
                        GameStarter: e,
                        FSM: e
                    },
                    Thing: {
                        EightBitter: e,
                        GameStarter: e,
                        FSM: e
                    }
                }
            }, e.settings.objects))
        }, t.prototype.resetAudioPlayer = function(t, n) {
            e.prototype.resetAudioPlayer.call(this, t, n), t.AudioPlayer.setGetVolumeLocal(t.getVolumeLocal.bind(t, t)), t.AudioPlayer.setGetThemeDefault(t.getAudioThemeDefault.bind(t, t))
        }, t.prototype.resetAreaSpawner = function(e, t) {
            e.AreaSpawner = new AreaSpawnr.AreaSpawnr({
                MapsCreator: e.MapsCreator,
                MapScreener: e.MapScreener,
                screenAttributes: e.settings.maps.screenAttributes,
                onSpawn: e.settings.maps.onSpawn.bind(e),
                stretchAdd: e.mapAddStretched.bind(e),
                afterAdd: e.mapAddAfter.bind(e)
            })
        }, t.prototype.resetItemsHolder = function(t, n) {
            e.prototype.resetItemsHolder.call(this, t, n), n.width < 560 && (t.ItemsHolder.getContainer().children[0].cells[4].style.display = "none")
        }, t.prototype.resetMathDecider = function(e, t) {
            e.MathDecider = new MathDecidr.MathDecidr(e.proliferate({
                constants: e.MapScreener
            }, e.settings.math))
        }, t.prototype.resetContainer = function(t, n) {
            e.prototype.resetContainer.call(this, t, n), t.container.style.fontFamily = "Press Start", t.container.className += " PlayMarioJas", t.PixelDrawer.setThingArrays([t.GroupHolder.getGroup("Scenery"), t.GroupHolder.getGroup("Solid"), t.GroupHolder.getGroup("Character"), t.GroupHolder.getGroup("Text")]), t.ItemsHolder.getContainer().style.width = n.width + "px", t.container.appendChild(t.ItemsHolder.getContainer())
        }, t.prototype.gameStart = function() {
            var e = t.prototype.ensureCorrectCaller(this);
            e.setMap(e.settings.maps.mapDefault, e.settings.maps.locationDefault), e.ItemsHolder.setItem("lives", e.settings.items.values.lives.valueDefault), e.ModAttacher.fireEvent("onGameStart")
        }, t.prototype.gameOver = function() {
            var e, n, i, o = t.prototype.ensureCorrectCaller(this),
                r = o.ObjectMaker.make("CustomText", {
                    texts: [{
                        text: "GAME OVER"
                    }]
                });
            for (o.killNPCs(), o.AudioPlayer.clearAll(), o.AudioPlayer.play("GameOver"), o.GroupHolder.clearArrays(), o.ItemsHolder.hideContainer(), o.TimeHandler.cancelAllEvents(), o.PixelDrawer.setBackground("black"), o.addThing(r, o.MapScreener.width / 2, o.MapScreener.height / 2), e = r.children, n = -(e[e.length - 1].right - e[0].left) / 2, i = 0; i < e.length; i += 1) o.shiftHoriz(e[i], n);
            o.TimeHandler.addEvent(function() {
                o.gameStart(), o.ItemsHolder.displayContainer()
            }, 420), o.ModAttacher.fireEvent("onGameOver")
        }, t.prototype.thingProcess = function(t, n, i, o) {
            ("Infinity" === t.height || t.height === 1 / 0) && (t.height = t.FSM.getAbsoluteHeight(t.y) / t.FSM.unitsize), e.prototype.thingProcess.call(this, t, n, i, o), t.FSM.ThingHitter.cacheChecksForType(t.title, t.groupType)
        }, t.prototype.generateThingKey = function(e) {
            return e.GameStarter.AreaSpawner.getArea().setting + " " + e.groupType + " " + e.title + " " + e.className
        }, t.prototype.addPreThing = function(e) {
            var t = e.thing,
                n = e.position || t.position;
            t.FSM.addThing(t, e.left * t.FSM.unitsize - t.FSM.MapScreener.left, (t.FSM.MapScreener.floor - e.top) * t.FSM.unitsize), n && t.FSM.TimeHandler.addEvent(function() {
                switch (n) {
                    case "beginning":
                        t.FSM.arrayToBeginning(t, t.FSM.GroupHolder.getGroup(t.groupType));
                        break;
                    case "end":
                        t.FSM.arrayToEnd(t, t.FSM.GroupHolder.getGroup(t.groupType))
                }
            }), t.FSM.ModAttacher.fireEvent("onAddPreThing", e)
        }, t.prototype.addPlayer = function(e, n) {
            void 0 === e && (e = 16 * this.unitsize), void 0 === n && (n = 16 * this.unitsize);
            var i, o = t.prototype.ensureCorrectCaller(this);
            return i = o.player = o.ObjectMaker.make("Player", {
                power: o.ItemsHolder.getItem("power")
            }), i.keys = i.getKeys(), o.MapScreener.underwater && (i.swimming = !0, o.TimeHandler.addClassCycle(i, ["swim1", "swim2"], "swimming", 5), o.TimeHandler.addEventInterval(i.FSM.animatePlayerBubbling, 96, 1 / 0, i)), o.setPlayerSizeSmall(i), i.power >= 2 && (o.playerGetsBig(i, !0), 3 === i.power && o.playerGetsFire(i)), o.addThing(i, e, n - i.height * o.unitsize), o.ModAttacher.fireEvent("onAddPlayer", i), i
        }, t.prototype.scrollPlayer = function(e, n) {
            var i = t.prototype.ensureCorrectCaller(this);
            i.scrollThing(i.player, e, n), i.ModAttacher.fireEvent("onScrollPlayer", e, n)
        }, t.prototype.onGamePause = function(e) {
            e.AudioPlayer.pauseAll(), e.AudioPlayer.play("Pause"), e.ModAttacher.fireEvent("onGamePause")
        }, t.prototype.onGamePlay = function(e) {
            e.AudioPlayer.resumeAll(), e.ModAttacher.fireEvent("onGamePlay")
        }, t.prototype.keyDownLeft = function(e, t) {
            if (!e.GamesRunner.getPaused()) {
                var n = e.player;
                n.keys.run = -1, n.keys.leftDown = !0, n.FSM.ModAttacher.fireEvent("onKeyDownLeft")
            }
        }, t.prototype.keyDownRight = function(e, t) {
            if (!e.GamesRunner.getPaused()) {
                var n = e.player;
                n.keys.run = 1, n.keys.rightDown = !0, n.FSM.ModAttacher.fireEvent("onKeyDownRight"), t && void 0 !== t.preventDefault && t.preventDefault()
            }
        }, t.prototype.keyDownUp = function(e, t) {
            if (!e.GamesRunner.getPaused()) {
                var n = e.player;
                n.keys.up = !0, n.canjump && (n.resting || e.MapScreener.underwater) && (n.keys.jump = !0, n.canjump = !1, n.keys.jumplev = 0, n.power > 1 ? e.AudioPlayer.play("JumpSuper") : e.AudioPlayer.play("JumpSmall"), e.MapScreener.underwater && e.TimeHandler.addEvent(function() {
                    n.jumping = n.keys.jump = !1
                }, 14)), e.ModAttacher.fireEvent("onKeyDownUp"), t && void 0 !== t.preventDefault && t.preventDefault()
            }
        }, t.prototype.keyDownDown = function(e, t) {
            if (!e.GamesRunner.getPaused()) {
                var n = e.player;
                n.keys.crouch = !0, e.ModAttacher.fireEvent("onKeyDownDown"), t && void 0 !== t.preventDefault && t.preventDefault()
            }
        }, t.prototype.keyDownSprint = function(e, t) {
            if (!e.GamesRunner.getPaused()) {
                var n = e.player;
                3 !== n.power || n.keys.sprint !== !1 || n.crouching || n.fire(n), n.keys.sprint = !0, n.FSM.ModAttacher.fireEvent("onKeyDownSprint"), t && void 0 !== t.preventDefault && t.preventDefault()
            }
        }, t.prototype.keyDownPause = function(e, t) {
            e.GamesRunner.getPaused() ? e.GamesRunner.play() : e.GamesRunner.pause(), e.ModAttacher.fireEvent("onKeyDownPause"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyDownMute = function(e, t) {
            e.GamesRunner.getPaused() || (e.AudioPlayer.toggleMuted(), e.ModAttacher.fireEvent("onKeyDownMute"), t && void 0 !== t.preventDefault && t.preventDefault())
        }, t.prototype.keyUpLeft = function(e, t) {
            var n = e.player;
            n.keys.run = 0, n.keys.leftDown = !1, e.ModAttacher.fireEvent("onKeyUpLeft"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyUpRight = function(e, t) {
            var n = e.player;
            n.keys.run = 0, n.keys.rightDown = !1, e.ModAttacher.fireEvent("onKeyUpRight"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyUpUp = function(e, t) {
            var n = e.player;
            e.MapScreener.underwater || (n.keys.jump = n.keys.up = !1), n.canjump = !0, e.ModAttacher.fireEvent("onKeyUpUp"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyUpDown = function(e, t) {
            var n = e.player;
            n.keys.crouch = !1, n.piping || e.animatePlayerRemoveCrouch(n), e.ModAttacher.fireEvent("onKeyUpDown"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyUpSprint = function(e, t) {
            var n = e.player;
            n.keys.sprint = !1, e.ModAttacher.fireEvent("onKeyUpSprint"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.keyUpPause = function(e, t) {
            e.ModAttacher.fireEvent("onKeyUpPause"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.mouseDownRight = function(e, t) {
            e.GamesRunner.togglePause(), e.ModAttacher.fireEvent("onMouseDownRight"), t && void 0 !== t.preventDefault && t.preventDefault()
        }, t.prototype.deviceMotion = function(e, t) {
            var n = e.player,
                i = e.deviceMotionStatus,
                o = t.accelerationIncludingGravity;
            e.ModAttacher.fireEvent("onDeviceMotion", t), void 0 !== i.y && (i.dy = o.y - i.y, i.dy > .21 ? e.keyDownUp(e) : i.dy < -.14 && e.keyUpUp(e)), i.x = o.x, i.y = o.y, i.x > 2.1 ? i.motionLeft || (n.FSM.keyDownLeft(e), i.motionLeft = !0) : i.x < -2.1 ? i.motionRight || (n.FSM.keyDownRight(e), i.motionRight = !0) : (i.motionLeft && (n.FSM.keyUpLeft(e), i.motionLeft = !1), i.motionRight && (n.FSM.keyUpRight(e), i.motionRight = !1))
        }, t.prototype.canInputsTrigger = function(e) {
            return !e.MapScreener.nokeys
        }, t.prototype.maintainTime = function(e) {
            return e.MapScreener.notime ? e.ItemsHolder.getItem("time") ? !1 : !0 : (e.ItemsHolder.decrease("time", 1), !1)
        }, t.prototype.maintainScenery = function(e) {
            var t, n, i = e.GroupHolder.getGroup("Scenery"),
                o = e.QuadsKeeper.left;
            for (n = 0; n < i.length; n += 1) t = i[n], t.right < o && 2 !== t.outerok && (e.arrayDeleteThing(t, i, n), n -= 1)
        }, t.prototype.maintainSolids = function(e, t) {
            var n, i, o = e.QuadsKeeper.left;
            for (e.QuadsKeeper.determineAllQuadrants("Solid", t), i = 0; i < t.length; i += 1) n = t[i], n.alive && n.right > o ? n.movement && n.movement(n) : n.alive && 2 === n.outerok || (e.arrayDeleteThing(n, t, i), i -= 1)
        }, t.prototype.maintainCharacters = function(e, t) {
            var n, i, o = e.QuadsKeeper.right;
            for (i = 0; i < t.length; i += 1) n = t[i], n.resting ? n.yvel = 0 : (n.nofall || (n.yvel += n.gravity || e.MapScreener.gravity), n.yvel = Math.min(n.yvel, e.MapScreener.maxyvel)), n.under = n.undermid = void 0, e.updatePosition(n), e.QuadsKeeper.determineThingQuadrants(n), e.ThingHitter.checkHitsForThing(n), n.overlaps && n.overlaps.length && e.maintainOverlaps(n), n.resting && (e.isCharacterOnResting(n, n.resting) ? (n.yvel = 0, e.setBottom(n, n.resting.top)) : n.onRestingOff ? n.onRestingOff(n, n.resting) : n.resting = void 0), n.alive ? !n.player && (0 === n.numquads || n.left > o) && (!n.outerok || 2 !== n.outerok && n.right < e.MapScreener.width - o) ? (e.arrayDeleteThing(n, t, i), i -= 1) : !n.nomove && n.movement && n.movement(n) : (e.arrayDeleteThing(n, t, i), i -= 1)
        }, t.prototype.maintainOverlaps = function(e) {
            if (!e.checkOverlaps || e.FSM.setOverlapBoundaries(e)) {
                if (e.FSM.slideToX(e, e.overlapGoal, e.FSM.unitsize), e.overlapGoRight) {
                    if (!(e.left >= e.overlapCheck)) return;
                    e.FSM.setLeft(e, e.overlapCheck)
                } else {
                    if (!(e.right <= e.overlapCheck)) return;
                    e.FSM.setRight(e, e.overlapCheck)
                }
                e.overlaps.length = 0, e.checkOverlaps = !0
            }
        }, t.prototype.setOverlapBoundaries = function(e) {
            if (1 === e.overlaps.length) return e.overlaps.length = 0, !1;
            var t, n, i, o, r, a = -(1 / 0),
                l = 1 / 0,
                p = e.overlaps;
            for (r = 0; r < p.length; r += 1) t = p[r], t.right > a && (i = t), t.left < l && (n = t);
            return o = (l + a) / 2, e.FSM.getMidX(e) >= o ? (e.overlapGoal = 1 / 0, e.overlapGoRight = !0, e.overlapCheck = i.right) : (e.overlapGoal = -(1 / 0), e.overlapGoRight = !1, e.overlapCheck = n.left), e.checkOverlaps = !1, !0
        }, t.prototype.maintainPlayer = function(e) {
            var t = e.player;
            if (e.isThingAlive(t)) {
                if (t.yvel > 0 && (e.MapScreener.underwater || (t.keys.jump = !1), t.jumping || t.crouching || (e.MapScreener.underwater ? t.paddling || (e.switchClass(t, "paddling", "paddling"), t.paddling = !0) : (e.addClass(t, "jumping"), t.jumping = !0)), !t.dieing && t.top > e.MapScreener.bottom)) return void(e.AreaSpawner.getArea().exit ? e.setLocation(e.AreaSpawner.getArea().exit) : e.killPlayer(t, 2));
                if (t.xvel > 0 ? t.right > e.MapScreener.middleX && t.right > e.MapScreener.right - e.MapScreener.left && (t.xvel = Math.min(0, t.xvel)) : t.left < 0 && (t.xvel = Math.max(0, t.xvel)), t.under && (t.jumpcount = 0), e.MapScreener.canscroll) {
                    var n = t.right - e.MapScreener.middleX;
                    n > 0 && e.scrollWindow(Math.min(t.scrollspeed, n))
                }
            }
        }, t.prototype.generateCanThingCollide = function() {
            return function(e) {
                return e.alive && !e.nocollide
            }
        }, t.prototype.isThingAlive = function(e) {
            return e && e.alive && !e.dead
        }, t.prototype.isThingTouchingThing = function(e, t) {
            return !e.nocollide && !t.nocollide && e.right - e.FSM.unitsize > t.left && e.left + e.FSM.unitsize < t.right && e.bottom >= t.top && e.top <= t.bottom
        }, t.prototype.isThingOnThing = function(e, t) {
            return "Solid" === e.groupType && t.yvel > 0 ? !1 : e.yvel < t.yvel && "Solid" !== t.groupType ? !1 : e.player && e.bottom < t.bottom && t.enemy ? !0 : e.left + e.FSM.unitsize >= t.right ? !1 : e.right - e.FSM.unitsize <= t.left ? !1 : e.bottom <= t.top + t.toly + t.yvel ? !0 : e.bottom <= t.top + t.toly + Math.abs(e.yvel - t.yvel) ? !0 : !1
        }, t.prototype.isThingOnSolid = function(e, t) {
            return e.left + e.FSM.unitsize >= t.right ? !1 : e.right - e.FSM.unitsize <= t.left ? !1 : e.bottom - e.yvel <= t.top + t.toly + e.yvel ? !0 : e.bottom <= t.top + t.toly + Math.abs(e.yvel - t.yvel) ? !0 : !1
        }, t.prototype.isCharacterOnSolid = function(e, t) {
            return e.resting === t ? !0 : e.yvel < 0 ? !1 : e.FSM.isThingOnSolid(e, t) ? e.left + e.xvel + e.FSM.unitsize === t.right ? !1 : e.right - e.xvel - e.FSM.unitsize === t.left ? !1 : !0 : !1
        }, t.prototype.isCharacterOnResting = function(e, t) {
            return e.FSM.isThingOnSolid(e, t) ? e.left + e.xvel + e.FSM.unitsize === t.right ? !1 : e.right - e.xvel - e.FSM.unitsize === t.left ? !1 : !0 : !1
        }, t.prototype.generateIsCharacterTouchingCharacter = function() {
            return function(e, t) {
                return (!e.nocollidechar || t.player && !e.nocollideplayer) && (!t.nocollidechar || e.player && !t.nocollideplayer) ? e.FSM.isThingTouchingThing(e, t) : !1
            }
        }, t.prototype.generateIsCharacterTouchingSolid = function() {
            return function(e, t) {
                return (!t.hidden || t.collideHidden || e.player && e.FSM.isSolidOnCharacter(t, e)) && (!e.nocollidesolid || e.allowUpSolids && t.up) ? e.FSM.isThingTouchingThing(e, t) : !1
            }
        }, t.prototype.isCharacterAboveEnemy = function(e, t) {
            return e.bottom < t.top + t.toly
        }, t.prototype.isCharacterBumpingSolid = function(e, t) {
            return e.top + e.toly + Math.abs(e.yvel) > t.bottom
        }, t.prototype.isCharacterOverlappingSolid = function(e, t) {
            return e.top <= t.top && e.bottom > t.bottom
        }, t.prototype.isSolidOnCharacter = function(e, t) {
            if (t.yvel >= 0) return !1;
            var n = e.FSM.getMidX(t);
            return n <= e.left || n >= e.right ? !1 : e.bottom - e.yvel > t.top + t.toly - t.yvel ? !1 : !0
        }, t.prototype.gainLife = function(e, n) {
            var i = t.prototype.ensureCorrectCaller(this);
            e = Number(e) || 1, i.ItemsHolder.increase("lives", e), n || this.AudioPlayer.play("GainLife"), i.ModAttacher.fireEvent("onGainLife", e)
        }, t.prototype.itemJump = function(e) {
            e.yvel -= 1.4 * t.unitsize, this.shiftVert(e, -t.unitsize)
        }, t.prototype.jumpEnemy = function(e, t) {
            e.keys.up ? e.yvel = -1.4 * e.FSM.unitsize : e.yvel = e.FSM.unitsize * -.7, e.xvel *= .91, e.FSM.AudioPlayer.play("Kick"), (!e.item || t.shell) && (e.jumpcount += 1, e.FSM.scoreOn(e.FSM.findScore(e.jumpcount + e.jumpers), t)), e.jumpers += 1, e.FSM.TimeHandler.addEvent(function(e) {
                e.jumpers -= 1
            }, 1, e)
        }, t.prototype.playerShroom = function(e, t) {
            !e.shrooming && e.player && (e.FSM.AudioPlayer.play("Powerup"), e.FSM.scoreOn(1e3, e.FSM.player), e.power < 3 && (e.FSM.ItemsHolder.increase("power"), e.power < 3 && (e.shrooming = !0, e.power += 1, 3 === e.power ? e.FSM.playerGetsFire(e.FSM.player) : e.FSM.playerGetsBig(e.FSM.player))), e.FSM.ModAttacher.fireEvent("onPlayerShroom", e, t))
        }, t.prototype.playerShroom1Up = function(e, t) {
            e.player && (e.FSM.gainLife(1), e.FSM.ModAttacher.fireEvent("onPlayerShroom1Up", e, t))
        }, t.prototype.playerStarUp = function(e, t) {
            void 0 === t && (t = 560), e.star += 1, e.FSM.switchClass(e, "normal fiery", "star"), e.FSM.AudioPlayer.play("Powerup"), e.FSM.AudioPlayer.addEventListener("Powerup", "ended", e.FSM.AudioPlayer.playTheme.bind(e.FSM.AudioPlayer, "Star", !0)), e.FSM.TimeHandler.addClassCycle(e, ["star1", "star2", "star3", "star4"], "star", 2), e.FSM.TimeHandler.addEvent(e.FSM.playerStarDown, t || 560, e), e.FSM.ModAttacher.fireEvent("onPlayerStarUp", e)
        }, t.prototype.playerStarDown = function(e) {
            e.player && (e.FSM.TimeHandler.cancelClassCycle(e, "star"), e.FSM.TimeHandler.addClassCycle(e, ["star1", "star2", "star3", "star4"], "star", 5), e.FSM.TimeHandler.addEvent(e.FSM.playerStarOffCycle, 140, e), e.FSM.AudioPlayer.removeEventListeners("Powerup", "ended"), e.FSM.ModAttacher.fireEvent("onPlayerStarDown", e))
        }, t.prototype.playerStarOffCycle = function(e) {
            if (e.player) {
                if (e.star > 1) return void(e.star -= 1);
                e.FSM.AudioPlayer.getTheme().paused || e.FSM.AudioPlayer.playTheme(), e.FSM.TimeHandler.addEvent(e.FSM.playerStarOffFinal, 70, e), e.FSM.ModAttacher.fireEvent("onPlayerStarOffCycle", e)
            }
        }, t.prototype.playerStarOffFinal = function(e) {
            e.player && (e.star -= 1, e.FSM.TimeHandler.cancelClassCycle(e, "star"), e.FSM.removeClasses(e, "star star1 star2 star3 star4"), e.FSM.addClass(e, "normal"), 3 === e.power && e.FSM.addClass(e, "fiery"), e.FSM.ModAttacher.fireEvent("onPlayerStarOffFinal", e))
        }, t.prototype.playerGetsBig = function(e, t) {
            e.FSM.setPlayerSizeLarge(e), e.FSM.removeClasses(e, "crouching small"), e.FSM.updateBottom(e, 0), e.FSM.updateSize(e), t ? e.FSM.addClass(e, "large") : e.FSM.playerGetsBigAnimation(e), e.FSM.ModAttacher.fireEvent("onPlayerGetsBig", e)
        }, t.prototype.playerGetsBigAnimation = function(e) {
            var t = ["shrooming1", "shrooming2", "shrooming1", "shrooming2", "shrooming3", "shrooming2", "shrooming3"];
            e.FSM.addClass(e, "shrooming"), e.FSM.animateCharacterPauseVelocity(e), t.push(function(e) {
                return e.shrooming = !1, t.length = 0, e.FSM.addClass(e, "large"), e.FSM.removeClasses(e, "shrooming shrooming3"), e.FSM.animateCharacterResumeVelocity(e), !0
            }), e.FSM.TimeHandler.addClassCycle(e, t, "shrooming", 6)
        }, t.prototype.playerGetsSmall = function(e) {
            var n = e.bottom;
            e.FSM.animateCharacterPauseVelocity(e), e.nocollidechar = !0, e.FSM.animateFlicker(e), e.FSM.removeClasses(e, "running skidding jumping fiery"), e.FSM.addClasses(e, "paddling small"), e.FSM.TimeHandler.addEvent(function(e) {
                e.FSM.removeClass(e, "large"), e.FSM.setPlayerSizeSmall(e), e.FSM.setBottom(e, n - t.unitsize)
            }, 21, e), e.FSM.TimeHandler.addEvent(function(e) {
                e.FSM.animateCharacterResumeVelocity(e, !1), e.FSM.removeClass(e, "paddling"), (e.running || e.xvel) && e.FSM.addClass(e, "running"), e.FSM.PixelDrawer.setThingSprite(e)
            }, 42, e), e.FSM.TimeHandler.addEvent(function(e) {
                e.nocollidechar = !1
            }, 70, e), e.FSM.ModAttacher.fireEvent("onPlayerGetsSmall")
        }, t.prototype.playerGetsFire = function(e) {
            e.shrooming = !1, e.star || e.FSM.addClass(e, "fiery"), e.FSM.ModAttacher.fireEvent("onPlayerGetsFire")
        }, t.prototype.setPlayerSizeSmall = function(e) {
            e.FSM.setSize(e, 8, 8, !0), e.FSM.updateSize(e)
        }, t.prototype.setPlayerSizeLarge = function(e) {
            e.FSM.setSize(e, 8, 16, !0), e.FSM.updateSize(e)
        }, t.prototype.animatePlayerRemoveCrouch = function(e) {
            e.crouching = !1, e.toly = e.tolyOld || 0, 1 !== e.power && (e.FSM.setHeight(e, 16, !0, !0), e.FSM.removeClasses(e, "crouching"), e.FSM.updateBottom(e, 0), e.FSM.updateSize(e)), e.FSM.animatePlayerRunningCycle(e)
        }, t.prototype.unattachPlayer = function(e, t) {
            e.nofall = !1, e.nocollide = !1, e.checkOverlaps = !0, e.attachedSolid = void 0, e.xvel = e.keys ? e.keys.run : 0, e.movement = e.FSM.movePlayer, e.FSM.addClass(e, "jumping"), e.FSM.removeClasses(e, "climbing", "animated"), t.attachedCharacter = void 0
        }, t.prototype.playerAddRestingStone = function(e) {
            var t = e.FSM.addThing("RestingStone", e.left, e.top + 48 * e.FSM.unitsize);
            e.nocollide = !0, e.FSM.TimeHandler.addEventInterval(function() {
                return e.bottom < t.top ? !1 : (e.nocollide = !1, e.FSM.setMidXObj(t, e), e.FSM.setBottom(e, t.top), !0)
            }, 1, 1 / 0)
        }, t.prototype.markOverlap = function(e, t) {
            e.overlaps ? e.overlaps.push(t) : e.overlaps = [t]
        }, t.prototype.spawnDeadGoomba = function(e) {
            e.FSM.TimeHandler.addEvent(t.prototype.killNormal, 21, e)
        }, t.prototype.spawnHammerBro = function(e) {
            e.counter = 0, e.gravity = e.FSM.MapScreener.gravity / 2.1, e.FSM.TimeHandler.addEvent(e.FSM.animateThrowingHammer, 35, e, 7), e.FSM.TimeHandler.addEventInterval(e.FSM.animateJump, 140, 1 / 0, e)
        }, t.prototype.spawnBowser = function(e) {
            var t;
            for (e.counter = 0, e.deathcount = 0, t = 0; t < e.fireTimes.length; t += 1) e.FSM.TimeHandler.addEventInterval(e.FSM.animateBowserFire, e.fireTimes[t], 1 / 0, e);
            for (t = 0; t < e.jumpTimes.length; t += 1) e.FSM.TimeHandler.addEventInterval(e.FSM.animateBowserJump, e.jumpTimes[t], 1 / 0, e);
            if (e.throwing)
                for (t = 0; t < e.throwAmount; t += 1) e.FSM.TimeHandler.addEvent(function() {
                    e.FSM.TimeHandler.addEventInterval(e.FSM.animateBowserThrow, e.throwPeriod, 1 / 0, e)
                }, e.throwDelay + t * e.throwBetween)
        }, t.prototype.spawnPiranha = function(e) {
            var t;
            e.counter = 0, e.direction = e.FSM.unitsize / -40, e.onPipe && (t = e.bottom, e.FSM.setHeight(e, 6), e.FSM.setBottom(e, t))
        }, t.prototype.spawnBlooper = function(e) {
            e.squeeze = 0, e.counter = 0
        }, t.prototype.spawnPodoboo = function(e) {
            e.FSM.TimeHandler.addEventInterval(e.FSM.animatePodobooJumpUp, e.frequency, 1 / 0, e)
        }, t.prototype.spawnLakitu = function(e) {
            e.FSM.MapScreener.lakitu = e, e.FSM.TimeHandler.addEventInterval(e.FSM.animateLakituThrowingSpiny, 140, 1 / 0, e)
        }, t.prototype.spawnCannon = function(e) {
            e.noBullets || e.FSM.TimeHandler.addEventInterval(e.FSM.animateCannonFiring, e.frequency, e.frequency, e)
        }, t.prototype.spawnCastleBlock = function(e) {
            if (e.fireballs) {
                var t, n = [];
                for (t = 0; t < e.fireballs; t += 1) n.push(e.FSM.addThing("CastleFireball")), e.FSM.setMidObj(n[t], e);
                e.speed >= 0 ? (e.dt = .07, e.angle = .25) : (e.dt = -.07, e.angle = -.25), e.direction || (e.direction = -1), e.FSM.TimeHandler.addEventInterval(e.FSM.animateCastleBlock, Math.round(7 / Math.abs(e.speed)), 1 / 0, e, n)
            }
        }, t.prototype.spawnMoveFloating = function(e) {
            e.FSM.setMovementEndpoints(e), e.begin = e.FSM.MapScreener.floor * e.FSM.unitsize - e.begin, e.end = e.FSM.MapScreener.floor * e.FSM.unitsize - e.end
        }, t.prototype.spawnMoveSliding = function(e) {
            e.FSM.setMovementEndpoints(e)
        }, t.prototype.spawnScalePlatform = function(e) {
            var t = e.collection || {},
                n = "platformLeft" === e.collectionKey ? "Left" : "Right",
                i = "Left" === n ? "Right" : "Left";
            e.partners = {
                ownString: t["string" + n],
                partnerString: t["string" + i],
                partnerPlatform: t["platform" + i]
            }
        }, t.prototype.spawnRandomCheep = function(e) {
            if (!e.MapScreener.spawningCheeps) return !0;
            var t = e.ObjectMaker.make("CheepCheep", {
                flying: !0,
                xvel: e.NumberMaker.random() * e.unitsize * 1.4,
                yvel: -1.4 * e.unitsize
            });
            return e.addThing(t, e.NumberMaker.random() * e.MapScreener.width, e.MapScreener.height), t.left < e.MapScreener.width / 2 ? e.flipHoriz(t) : t.xvel *= -1, !1
        }, t.prototype.spawnRandomBulletBill = function(e) {
            if (!e.MapScreener.spawningBulletBills) return !0;
            var t = e.ObjectMaker.make("BulletBill");
            return t.direction = 1, t.moveleft = !0, t.xvel *= -1, e.flipHoriz(t), e.addThing(t, e.MapScreener.width, 8 * Math.floor(e.NumberMaker.randomIntWithin(0, e.MapScreener.floor) / 8) * e.unitsize), !1
        }, t.prototype.spawnCustomText = function(e) {
            var t, n, i, o, r, a, l = e.top,
                p = e.texts,
                s = e.textAttributes,
                d = e.spacingHorizontal * e.FSM.unitsize,
                c = e.spacingVertical * e.FSM.unitsize,
                u = e.spacingVerticalBlank * e.FSM.unitsize,
                S = [];
            for (e.children = S, r = 0; r < p.length; r += 1)
                if (p[r]) {
                    for (i = p[r].text, n = p[r].offset ? e.left + p[r].offset * e.FSM.unitsize : e.left, a = 0; a < i.length; a += 1) o = i[a], e.FSM.customTextMappings.hasOwnProperty(o) && (o = e.FSM.customTextMappings[o]), o = "Text" + e.size + o, t = e.FSM.ObjectMaker.make(o, s), t.FSM.addThing(t, n, l), S.push(t), n += t.width * e.FSM.unitsize, n += d;
                    l += c
                } else l += u;
            e.FSM.killNormal(e)
        }, t.prototype.spawnDetector = function(e) {
            e.activate(e), e.FSM.killNormal(e)
        }, t.prototype.spawnScrollBlocker = function(e) {
            e.FSM.MapScreener.width < e.right && (e.setEdge = !0)
        }, t.prototype.spawnCollectionComponent = function(e, t) {
            t.collection = e, e[t.collectionName] = t
        }, t.prototype.spawnRandomSpawner = function(e) {
            var t = e.FSM,
                n = (e.left + t.MapScreener.left) / t.unitsize;
            t.WorldSeeder.clearGeneratedCommands(), t.WorldSeeder.generateFull({
                title: e.randomization,
                top: e.randomTop,
                right: n + e.randomWidth,
                bottom: e.randomBottom,
                left: n,
                width: e.randomWidth,
                height: e.randomTop - e.randomBottom
            }), t.WorldSeeder.runGeneratedCommands(), t.AreaSpawner.spawnArea("xInc", t.QuadsKeeper.top / t.unitsize, t.QuadsKeeper.right / t.unitsize, t.QuadsKeeper.bottom / t.unitsize, t.QuadsKeeper.left / t.unitsize)
        }, t.prototype.activateCheepsStart = function(e) {
            e.FSM.MapScreener.spawningCheeps = !0, e.FSM.TimeHandler.addEventInterval(e.FSM.spawnRandomCheep, 21, 1 / 0, e.FSM)
        }, t.prototype.activateCheepsStop = function(e) {
            e.FSM.MapScreener.spawningCheeps = !1
        }, t.prototype.activateBulletBillsStart = function(e) {
            e.FSM.MapScreener.spawningBulletBills = !0, e.FSM.TimeHandler.addEventInterval(e.FSM.spawnRandomBulletBill, 210, 1 / 0, e.FSM)
        }, t.prototype.activateBulletBillsStop = function(e) {
            e.FSM.MapScreener.spawningBulletBills = !1
        }, t.prototype.activateLakituStop = function(e) {
            var t = e.FSM.MapScreener.lakitu;
            t && (t.fleeing = !0, t.movement = e.FSM.moveLakituFleeing)
        }, t.prototype.activateWarpWorld = function(e, t) {
            var n, i, o, r = t.collection,
                a = 0;
            if (e.player) {
                for (i = r.Welcomer.children, o = 0; o < i.length; o += 1) "TextSpace" !== i[o].title && (i[o].hidden = !1);
                for (;;) {
                    if (n = a + "-Text", !r.hasOwnProperty(n)) break;
                    for (i = r[n].children, o = 0; o < i.length; o += 1) "TextSpace" !== i[o].title && (i[o].hidden = !1);
                    e.FSM.killNormal(r[a + "-Piranha"]), a += 1
                }
            }
        }, t.prototype.activateRestingStone = function(e, t) {
            e.activated || (e.activated = !0, e.opacity = 1, e.FSM.AudioPlayer.playTheme(), e.FSM.TimeHandler.addEventInterval(function() {
                return t.resting === e ? !1 : (e.FSM.killNormal(e), !0)
            }, 1, 1 / 0))
        }, t.prototype.activateWindowDetector = function(e) {
            e.FSM.MapScreener.right - e.FSM.MapScreener.left < e.left || (e.activate(e), e.FSM.killNormal(e))
        }, t.prototype.activateScrollBlocker = function(e) {
            var t = e.FSM.MapScreener.width - e.left;
            e.FSM.MapScreener.canscroll = !1, e.setEdge && t > 0 && e.FSM.scrollWindow(-t)
        }, t.prototype.activateScrollEnabler = function(e) {
            e.FSM.MapScreener.canscroll = !0
        }, t.prototype.activateSectionBefore = function(e) {
            var t, n, i = e.FSM,
                o = i.MapsCreator,
                r = i.MapScreener,
                a = i.AreaSpawner,
                l = a.getArea(),
                p = a.getMap(),
                s = a.getPreThings(),
                d = l.sections[e.section || 0],
                c = (e.left + r.left) / i.unitsize,
                u = d.before ? d.before.creation : void 0;
            if (u)
                for (n = 0; n < u.length; n += 1) t = i.proliferate({}, u[n]), t.x ? t.x += c : t.x = c, t.sliding && (t.begin += c, t.end += c), o.analyzePreSwitch(t, s, l, p);
            t = {
                thing: "DetectWindow",
                x: c + (u ? d.before.width : 0),
                y: 0,
                activate: i.activateSectionStretch,
                section: e.section || 0
            }, o.analyzePreSwitch(t, s, l, p), a.spawnArea("xInc", r.top / i.unitsize, (r.left + i.QuadsKeeper.right) / i.unitsize, r.bottom / i.unitsize, c)
        }, t.prototype.activateSectionStretch = function(e) {
            var t, n, i = e.FSM,
                o = i.MapsCreator,
                r = i.MapScreener,
                a = i.AreaSpawner,
                l = a.getArea(),
                p = a.getMap(),
                s = a.getPreThings(),
                d = l.sections[e.section || 0],
                c = d.stretch ? d.stretch.creation : void 0,
                u = (e.left + r.left) / i.unitsize,
                S = r.width / i.unitsize;
            if (c) {
                for (n = 0; n < c.length; n += 1) t = i.proliferate({}, c[n]), t.x = u, t.width = S, o.analyzePreSwitch(t, s, l, p);
                t = {
                    thing: "DetectWindow",
                    x: u + S,
                    y: 0,
                    activate: i.activateSectionAfter,
                    section: e.section || 0
                }, o.analyzePreSwitch(t, s, l, p)
            }
            a.spawnArea("xInc", r.top / i.unitsize, u + r.width / i.unitsize, r.bottom / i.unitsize, u)
        }, t.prototype.activateSectionAfter = function(e) {
            var t, n, i = e.FSM,
                o = i.MapsCreator,
                r = i.MapScreener,
                a = i.AreaSpawner,
                l = a.getArea(),
                p = a.getMap(),
                s = a.getPreThings(),
                d = l.sections[e.section || 0],
                c = (e.left + r.left) / i.unitsize,
                u = d.after ? d.after.creation : void 0;
            if (u)
                for (n = 0; n < u.length; n += 1) t = i.proliferate({}, u[n]), t.x ? t.x += c : t.x = c, t.sliding && (t.begin += c, t.end += c), o.analyzePreSwitch(t, s, l, p);
            a.spawnArea("xInc", r.top / i.unitsize, c + r.right / i.unitsize, r.bottom / i.unitsize, c)
        }, t.prototype.generateHitCharacterSolid = function() {
            return function(e, t) {
                return t.up && e !== t.up ? e.FSM.collideCharacterSolidUp(e, t) : (t.collide(e, t), e.undermid ? e.undermid.bottomBump && e.undermid.bottomBump(e.undermid, e) : e.under && e.under && e.under.bottomBump && e.under.bottomBump(e.under[0], e), void(e.checkOverlaps && e.FSM.isCharacterOverlappingSolid(e, t) && e.FSM.markOverlap(e, t)))
            }
        }, t.prototype.generateHitCharacterCharacter = function() {
            return function(e, t) {
                if (e.player) {
                    if (t.collide) return t.collide(e, t)
                } else e.collide && e.collide(t, e)
            }
        }, t.prototype.collideFriendly = function(e, t) {
            e.player && e.FSM.isThingAlive(t) && (t.action && t.action(e, t), t.death(t))
        }, t.prototype.collideCharacterSolid = function(e, t) {
            if (t.up !== e) {
                if (e.FSM.isCharacterOnSolid(e, t)) {
                    if (t.hidden && !t.collideHidden) return;
                    e.resting !== t && (e.resting = t, e.onResting && e.onResting(e, t), t.onRestedUpon && t.onRestedUpon(t, e))
                } else if (e.FSM.isSolidOnCharacter(t, e)) {
                    var n = e.FSM.getMidX(e);
                    if (n > t.left && n < t.right) e.undermid = t;
                    else if (t.hidden && !t.collideHidden) return;
                    e.under ? e.under.push(t) : e.under = [t], e.player && (e.keys.jump = !1, e.FSM.setTop(e, t.bottom - e.toly + t.yvel)), e.yvel = t.yvel
                }(!t.hidden || t.collideHidden) && (e.resting === t || e.FSM.isCharacterBumpingSolid(e, t) || e.FSM.isThingOnThing(e, t) || e.FSM.isThingOnThing(t, e) || e.under || (e.right <= t.right ? (e.xvel = Math.min(e.xvel, 0), e.FSM.shiftHoriz(e, Math.max(t.left + e.FSM.unitsize - e.right, e.FSM.unitsize / -2))) : (e.xvel = Math.max(e.xvel, 0), e.FSM.shiftHoriz(e, Math.min(t.right - e.FSM.unitsize - e.left, e.FSM.unitsize / 2))), e.player ? t.actionLeft && (e.FSM.ModAttacher.fireEvent("onPlayerActionLeft", e, t), t.actionLeft(e, t, t.transport)) : (e.noflip || (e.moveleft = !e.moveleft), e.item && e.collide(t, e))))
            }
        }, t.prototype.collideCharacterSolidUp = function(e, t) {
            e.onCollideUp ? e.onCollideUp(e, t) : (e.FSM.scoreOn(e.scoreBelow, e), e.death(e, 2))
        }, t.prototype.collideUpItem = function(e, t) {
            e.FSM.animateCharacterHop(e), e.moveleft = e.FSM.objectToLeft(e, t)
        }, t.prototype.collideUpCoin = function(e, t) {
            e.blockparent = t, e.animate(e, t)
        }, t.prototype.collideCoin = function(e, t) {
            e.player && (e.FSM.AudioPlayer.play("Coin"), e.FSM.ItemsHolder.increase("score", 200), e.FSM.ItemsHolder.increase("coins", 1), e.FSM.killNormal(t))
        }, t.prototype.collideStar = function(e, t) {
            e.player && !e.star && (e.FSM.playerStarUp(e), e.FSM.ModAttacher.fireEvent("onCollideStar", e, t))
        }, t.prototype.collideFireball = function(e, t) {
            if (e.FSM.isThingAlive(e) && !(e.height < e.FSM.unitsize)) {
                if (e.nofire) return void(e.nofire > 1 && t.death(t));
                e.nofiredeath ? (e.FSM.AudioPlayer.playLocal("Bump", e.FSM.getMidX(t)), e.death(e)) : (e.FSM.AudioPlayer.playLocal("Kick", e.FSM.getMidX(t)), e.death(e, 2), e.FSM.scoreOn(e.scoreFire, e)), t.death(t)
            }
        }, t.prototype.collideCastleFireball = function(e, t) {
            e.star ? t.death(t) : e.death(e)
        }, t.prototype.collideShell = function(e, t) {
            return e.shell ? t.shell ? e.FSM.collideShellShell(e, t) : e.FSM.collideShell(e, t) : "Solid" === e.groupType ? e.FSM.collideShellSolid(e, t) : e.player ? e.FSM.collideShellPlayer(e, t) : void(t.xvel ? (e.FSM.killFlip(e), e.shellspawn && (e = e.FSM.killSpawn(e)), e.FSM.AudioPlayer.play("Kick"), e.FSM.scoreOn(e.FSM.findScore(t.enemyhitcount), e), t.enemyhitcount += 1) : e.moveleft = e.FSM.objectToLeft(e, t))
        }, t.prototype.collideShellSolid = function(e, t) {
            t.right < e.right ? (e.FSM.AudioPlayer.playLocal("Bump", e.left), e.FSM.setRight(t, e.left), t.xvel = -t.speed, t.moveleft = !0) : (e.FSM.AudioPlayer.playLocal("Bump", e.right), e.FSM.setLeft(t, e.right), t.xvel = t.speed, t.moveleft = !1)
        }, t.prototype.collideShellPlayer = function(e, t) {
            var n = e.FSM.objectToLeft(t, e),
                i = e.yvel > 0 && e.bottom <= t.top + 2 * e.FSM.unitsize;
            return e.star ? (e.FSM.scorePlayerShell(e, t), void t.death(t, 2)) : t.landing ? void(t.shelltoleft === n ? (t.landing += 1, 1 === t.landing && e.FSM.scorePlayerShell(e, t), e.FSM.TimeHandler.addEvent(function(e) {
                e.landing -= 1
            }, 2, t)) : e.death(e)) : void(0 === t.xvel || i ? (t.counting = 0, 0 === t.xvel ? (e.FSM.AudioPlayer.play("Kick"), e.FSM.scorePlayerShell(e, t), n ? (t.moveleft = !0, t.xvel = -t.speed) : (t.moveleft = !1, t.xvel = t.speed), t.hitcount += 1, e.FSM.TimeHandler.addEvent(function(e) {
                e.hitcount -= 1
            }, 2, t)) : t.xvel = 0, t.peeking && (t.peeking = 0, e.FSM.removeClass(t, "peeking"), t.height -= e.FSM.unitsize / 8, e.FSM.updateSize(t)), i && (e.FSM.AudioPlayer.play("Kick"), t.xvel || (e.FSM.jumpEnemy(e, t), e.yvel *= 2, e.FSM.setBottom(e, t.top - e.FSM.unitsize)), t.landing += 1, t.shelltoleft = n, e.FSM.TimeHandler.addEvent(function(e) {
                e.landing -= 1
            }, 2, t))) : !t.hitcount && (n && t.xvel > 0 || !n && t.xvel < 0) && e.death(e))
        }, t.prototype.collideShellShell = function(e, t) {
            if (0 !== e.xvel)
                if (0 !== t.xvel) {
                    var n = e.xvel;
                    e.xvel = t.xvel, t.xvel = n, e.FSM.shiftHoriz(e, e.xvel), e.FSM.shiftHoriz(t, t.xvel)
                } else e.FSM.ItemsHolder.increase("score", 500), t.death(t);
            else e.FSM.ItemsHolder.increase("score", 500), e.death(e)
        }, t.prototype.collideEnemy = function(e, t) {
            if (!e.player && t.player) return e.FSM.collideEnemy(e, t);
            if (e.FSM.isThingAlive(e) && e.FSM.isThingAlive(t))
                if (e.item) {
                    if (e.collidePrimary) return e.collide(t, e)
                } else {
                    if (!e.player) return e.moveleft = e.FSM.objectToLeft(e, t), void(t.moveleft = !e.moveleft);
                    if (e.star && !t.nostar || !e.FSM.MapScreener.underwater && !t.deadly && e.FSM.isThingOnThing(e, t)) {
                        var n = e;
                        if (n.FSM.isCharacterAboveEnemy(n, t)) return;
                        n.star ? (t.nocollide = !0, t.death(t, 2), n.FSM.scoreOn(t.scoreStar, t), n.FSM.AudioPlayer.play("Kick")) : (n.FSM.setBottom(n, Math.min(n.bottom, t.top + n.FSM.unitsize)), n.FSM.TimeHandler.addEvent(n.FSM.jumpEnemy, 0, n, t), t.death(t, n.star ? 2 : 0), n.FSM.addClass(n, "hopping"), n.FSM.removeClasses(n, "running skidding jumping one two three"), n.hopping = !0, 1 === n.power && n.FSM.setPlayerSizeSmall(n))
                    } else e.FSM.isCharacterAboveEnemy(e, t) || e.death(e)
                }
        }, t.prototype.collideBottomBrick = function(e, t) {
            if (t.solid && !e.solid) return e.FSM.collideBottomBrick(t, e);
            if (!e.up && t.player && (e.FSM.AudioPlayer.play("Bump"), !e.used)) {
                if (e.up = t, t.power > 1 && e.breakable && !e.contents) return void e.FSM.TimeHandler.addEvent(e.FSM.killBrick, 2, e, t);
                e.FSM.animateSolidBump(e), e.contents && e.FSM.TimeHandler.addEvent(function() {
                    e.FSM.animateSolidContents(e, t), "Coin" !== e.contents ? e.FSM.animateBlockBecomesUsed(e) : e.lastcoin ? e.FSM.animateBlockBecomesUsed(e) : e.FSM.TimeHandler.addEvent(function() {
                        e.lastcoin = !0
                    }, 245)
                }, 7)
            }
        }, t.prototype.collideBottomBlock = function(e, t) {
            if (t.solid && !e.solid) return e.FSM.collideBottomBlock(t, e);
            if (!e.up && t.player) {
                if (e.used) return void e.FSM.AudioPlayer.play("Bump");
                e.used = !0, e.hidden = !1, e.up = t, e.FSM.animateSolidBump(e), e.FSM.removeClass(e, "hidden"), e.FSM.switchClass(e, "unused", "used"), e.FSM.TimeHandler.addEvent(e.FSM.animateSolidContents, 7, e, t)
            }
        }, t.prototype.collideVine = function(e, t) {
            !e.player || e.attachedSolid || e.climbing || e.bottom > t.bottom + 2 * e.FSM.unitsize || (t.attachedCharacter = e,
                e.attachedSolid = t, e.nofall = !0, e.checkOverlaps = !1, e.resting = void 0, e.right < t.right ? (e.lookleft = !1, e.moveleft = !1, e.attachedDirection = -1, e.FSM.unflipHoriz(e)) : (e.lookleft = !0, e.moveleft = !0, e.attachedDirection = 1, e.FSM.flipHoriz(e)), e.FSM.animateCharacterPauseVelocity(e), e.FSM.addClass(e, "climbing"), e.FSM.removeClasses(e, "running", "jumping", "skidding"), e.FSM.TimeHandler.cancelClassCycle(e, "running"), e.FSM.TimeHandler.addClassCycle(e, ["one", "two"], "climbing", 0), e.attachedLeft = !e.FSM.objectToLeft(e, t), e.attachedOff = e.attachedLeft ? 1 : -1, e.movement = e.FSM.movePlayerVine)
        }, t.prototype.collideSpringboard = function(e, t) {
            e.player && e.yvel >= 0 && !t.tension && e.FSM.isCharacterOnSolid(e, t) ? (t.tension = t.tensionSave = Math.max(.77 * e.yvel, e.FSM.unitsize), e.movement = e.FSM.movePlayerSpringboardDown, e.spring = t, e.xvel /= 2.8) : e.FSM.collideCharacterSolid(e, t)
        }, t.prototype.collideWaterBlocker = function(e, t) {
            e.FSM.collideCharacterSolid(e, t)
        }, t.prototype.collideFlagpole = function(e, t) {
            e.bottom > t.bottom || e.FSM.ScenePlayer.startCutscene("Flagpole", {
                player: e,
                collider: t
            })
        }, t.prototype.collideCastleAxe = function(e, t) {
            e.FSM.MathDecider.compute("canPlayerTouchCastleAxe", e, t) && e.FSM.ScenePlayer.startCutscene("BowserVictory", {
                player: e,
                axe: t
            })
        }, t.prototype.collideCastleDoor = function(e, t) {
            if (e.FSM.killNormal(e), e.player) {
                var n = e.FSM.ItemsHolder.getItem("time");
                e.FSM.ScenePlayer.addCutsceneSetting("player", e), e.FSM.ScenePlayer.addCutsceneSetting("detector", t), e.FSM.ScenePlayer.addCutsceneSetting("time", n), n === 1 / 0 ? e.FSM.ScenePlayer.playRoutine("Fireworks") : e.FSM.ScenePlayer.playRoutine("Countdown")
            }
        }, t.prototype.collideCastleNPC = function(e, t) {
            var n = t.collection.npc.collectionKeys;
            e.FSM.ScenePlayer.addCutsceneSetting("keys", n), e.FSM.ScenePlayer.addCutsceneSetting("player", e), e.FSM.ScenePlayer.addCutsceneSetting("detector", t), e.FSM.ScenePlayer.playRoutine("Dialog")
        }, t.prototype.collideTransport = function(e, t) {
            e.player && (e.FSM.collideCharacterSolid(e, t), e.resting === t && (t.xvel = e.FSM.unitsize / 2, t.movement = e.FSM.movePlatform, t.collide = e.FSM.collideCharacterSolid))
        }, t.prototype.collideDetector = function(e, t) {
            return e.player ? (t.activate(e, t), void(t.noActivateDeath || e.FSM.killNormal(t))) : void(t.activateFail && t.activateFail(e))
        }, t.prototype.collideLevelTransport = function(e, t) {
            console.log("VINTO!")
            /*
            if (e.player) {
                var n = t.transport;
                if ("undefined" == typeof n) throw new Error("No transport given to collideLevelTransport");
                if (n.constructor === String) e.FSM.setLocation(n);
                else if ("undefined" != typeof n.map) "undefined" != typeof n.location ? e.FSM.setMap(n.map, n.location) : e.FSM.setMap(n.map);
                else {
                    if ("undefined" == typeof n.location) throw new Error("Unknown transport type:" + n);
                    e.FSM.setLocation(n.location)
                }
            }
             */

        }, t.prototype.moveSimple = function(e) {
            e.direction !== (e.moveleft ? 1 : 0) && (e.moveleft ? (e.xvel = -e.speed, e.noflip || e.FSM.unflipHoriz(e)) : (e.xvel = e.speed, e.noflip || e.FSM.flipHoriz(e)), e.direction = e.moveleft ? 1 : 0)
        }, t.prototype.moveSmart = function(e) {
            e.FSM.moveSimple(e), 0 === e.yvel && (e.resting && e.FSM.isCharacterOnResting(e, e.resting) || (e.moveleft ? e.FSM.shiftHoriz(e, e.FSM.unitsize, !0) : e.FSM.shiftHoriz(e, -e.FSM.unitsize, !0), e.moveleft = !e.moveleft))
        }, t.prototype.moveJumping = function(e) {
            e.FSM.moveSimple(e), e.resting && (e.yvel = -Math.abs(e.jumpheight), e.resting = void 0)
        }, t.prototype.movePacing = function(e) {
            e.counter += .007, e.xvel = Math.sin(Math.PI * e.counter) / 2.1
        }, t.prototype.moveHammerBro = function(e) {
            e.FSM.movePacing(e), e.FSM.lookTowardsPlayer(e), e.nocollidesolid = e.yvel < 0 || e.falling
        }, t.prototype.moveBowser = function(e) {
            e.flipHoriz ? e.FSM.objectToLeft(e, e.FSM.player) ? e.FSM.moveSimple(e) : (e.moveleft = e.lookleft = !0, e.FSM.unflipHoriz(e), e.FSM.movePacing(e)) : e.FSM.objectToLeft(e, e.FSM.player) ? (e.moveleft = e.lookleft = !1, e.FSM.flipHoriz(e), e.FSM.moveSimple(e)) : e.FSM.movePacing(e)
        }, t.prototype.moveBowserFire = function(e) {
            return Math.round(e.bottom) === Math.round(e.ylev) ? void(e.movement = void 0) : void e.FSM.shiftVert(e, Math.min(Math.max(0, e.ylev - e.bottom), e.FSM.unitsize))
        }, t.prototype.moveFloating = function(e) {
            e.top <= e.end ? e.yvel = Math.min(e.yvel + e.FSM.unitsize / 64, e.maxvel) : e.bottom >= e.begin && (e.yvel = Math.max(e.yvel - e.FSM.unitsize / 64, -e.maxvel)), e.FSM.movePlatform(e)
        }, t.prototype.moveSliding = function(e) {
            e.FSM.MapScreener.left + e.left <= e.begin ? e.xvel = Math.min(e.xvel + e.FSM.unitsize / 64, e.maxvel) : e.FSM.MapScreener.left + e.right > e.end && (e.xvel = Math.max(e.xvel - e.FSM.unitsize / 64, -e.maxvel)), e.FSM.movePlatform(e)
        }, t.prototype.setMovementEndpoints = function(e) {
            if (e.begin > e.end) {
                var t = e.begin;
                e.begin = e.end, e.end = t
            }
            e.begin *= e.FSM.unitsize, e.end *= e.FSM.unitsize
        }, t.prototype.movePlatform = function(e) {
            e.FSM.shiftHoriz(e, e.xvel), e.FSM.shiftVert(e, e.yvel), e === e.FSM.player.resting && e.FSM.player.alive && (e.FSM.setBottom(e.FSM.player, e.top), e.FSM.shiftHoriz(e.FSM.player, e.xvel), e.FSM.player.right > e.FSM.MapScreener.width ? e.FSM.setRight(e.FSM.player, e.FSM.MapScreener.width) : e.FSM.player.left < 0 && e.FSM.setLeft(e.FSM.player, 0))
        }, t.prototype.movePlatformSpawn = function(e) {
            if (e.bottom < 0) e.FSM.setTop(e, e.FSM.MapScreener.bottomPlatformMax);
            else {
                if (!(e.top > e.FSM.MapScreener.bottomPlatformMax)) return void e.FSM.movePlatform(e);
                e.FSM.setBottom(e, 0)
            }
            e.FSM.player && e.FSM.player.resting === e && (e.FSM.player.resting = void 0)
        }, t.prototype.moveFalling = function(e) {
            return e.FSM.player.resting !== e ? void(e.yvel = 0) : (e.FSM.shiftVert(e, e.yvel += e.FSM.unitsize / 8), e.FSM.setBottom(e.FSM.player, e.top), void(e.yvel >= (e.fallThresholdStart || 2.8 * e.FSM.unitsize) && (e.freefall = !0, e.movement = e.FSM.moveFreeFalling)))
        }, t.prototype.moveFreeFalling = function(e) {
            e.yvel += e.acceleration || e.FSM.unitsize / 16, e.FSM.shiftVert(e, e.yvel), e.yvel >= (e.fallThresholdEnd || 2.1 * e.FSM.unitsize) && (e.movement = e.FSM.movePlatform)
        }, t.prototype.movePlatformScale = function(e) {
            if (e.FSM.player.resting === e) e.yvel += e.FSM.unitsize / 16;
            else {
                if (!(e.yvel > 0)) return;
                e.partners ? e.yvel = Math.max(e.yvel - e.FSM.unitsize / 16, 0) : e.yvel = 0
            }
            e.tension += e.yvel, e.FSM.shiftVert(e, e.yvel), e.partners && (e.partners.partnerPlatform.tension -= e.yvel, e.partners.partnerPlatform.tension <= 0 && (e.FSM.scoreOn(1e3, e), e.partners.partnerPlatform.yvel = e.FSM.unitsize / 2, e.collide = e.partners.partnerPlatform.collide = e.FSM.collideCharacterSolid, e.movement = e.partners.partnerPlatform.movement = e.FSM.moveFreeFalling), e.FSM.shiftVert(e.partners.partnerPlatform, -e.yvel), e.FSM.setHeight(e.partners.ownString, e.partners.ownString.height + e.yvel / e.FSM.unitsize), e.FSM.setHeight(e.partners.partnerString, Math.max(e.partners.partnerString.height - e.yvel / e.FSM.unitsize, 0)))
        }, t.prototype.moveVine = function(e) {
            e.FSM.increaseHeight(e, e.speed), e.FSM.updateSize(e), e.attachedSolid && e.FSM.setBottom(e, e.attachedSolid.top), e.attachedCharacter && e.FSM.shiftVert(e.attachedCharacter, -e.speed)
        }, t.prototype.moveSpringboardUp = function(e) {
            var n = e.FSM.player;
            e.FSM.reduceHeight(e, -e.tension, !0), e.tension *= 2, e.height > e.heightNormal ? (e.FSM.reduceHeight(e, (e.height - e.heightNormal) * e.FSM.unitsize), e === n.spring && (n.yvel = e.FSM.MathDecider.compute("springboardYvelUp", e), n.resting = n.spring = void 0, n.movement = e.FSM.movePlayer), e.tension = 0, e.movement = void 0) : e.FSM.setBottom(n, e.top), e === n.spring && (e.FSM.isThingTouchingThing(n, e) || (n.spring = void 0, n.movement = t.prototype.movePlayer))
        }, t.prototype.moveShell = function(e) {
            0 === e.xvel && (e.counting += 1, 350 === e.counting ? (e.peeking = 1, e.height += e.FSM.unitsize / 8, e.FSM.addClass(e, "peeking"), e.FSM.updateSize(e)) : 455 === e.counting ? e.peeking = 2 : 490 === e.counting && (e.spawnSettings = {
                smart: e.smart
            }, e.FSM.killSpawn(e)))
        }, t.prototype.movePiranha = function(e) {
            var t = e.bottom,
                n = e.height + e.direction,
                i = !1;
            e.resting && !e.FSM.isThingAlive(e.resting) && (t = e.constructor.prototype.height * e.FSM.unitsize + e.top, n = 1 / 0, e.resting = void 0), 0 >= n ? (n = e.height = 0, i = !0) : n >= e.constructor.prototype.height && (n = e.height = e.constructor.prototype.height, i = !0), e.FSM.setHeight(e, n), e.FSM.setBottom(e, t), e.canvas.height = n * e.FSM.unitsize, e.FSM.PixelDrawer.setThingSprite(e), i && (e.counter = 0, e.movement = e.FSM.movePiranhaLatent)
        }, t.prototype.movePiranhaLatent = function(e) {
            var t = e.FSM.getMidX(e.FSM.player);
            e.counter >= e.countermax && (e.height > 0 || t < e.left - 8 * e.FSM.unitsize || t > e.right + 8 * e.FSM.unitsize) ? (e.movement = void 0, e.direction *= -1, e.FSM.TimeHandler.addEvent(function() {
                e.movement = e.FSM.movePiranha
            }, 7)) : e.counter += 1
        }, t.prototype.moveBubble = function(e) {
            e.top < e.FSM.MapScreener.top + 16 * e.FSM.unitsize && e.FSM.killNormal(e)
        }, t.prototype.moveCheepCheep = function(e) {
            e.top < 16 * e.FSM.unitsize && (e.FSM.setTop(e, 16 * e.FSM.unitsize), e.yvel *= -1)
        }, t.prototype.moveCheepCheepFlying = function(e) {
            e.top < 28 * e.FSM.unitsize && (e.movement = void 0, e.nofall = !1)
        }, t.prototype.moveBlooper = function(e) {
            if (!e.FSM.isThingAlive(e.FSM.player)) return e.xvel = e.FSM.unitsize / -4, e.yvel = 0, void(e.movement = void 0);
            switch (e.counter) {
                case 56:
                    e.squeeze = 1, e.counter += 1;
                    break;
                case 63:
                    e.FSM.moveBlooperSqueezing(e);
                    break;
                default:
                    e.counter += 1, e.top < 18 * e.FSM.unitsize && e.FSM.moveBlooperSqueezing(e)
            }
            e.squeeze ? e.yvel = Math.max(e.yvel + .021, .7) : e.yvel = Math.min(e.yvel - .035, -.7), e.top > 16 * e.FSM.unitsize && e.FSM.shiftVert(e, e.yvel, !0), e.squeeze || (e.FSM.player.left > e.right + 8 * e.FSM.unitsize ? e.xvel = Math.min(e.speed, e.xvel + e.FSM.unitsize / 32) : e.FSM.player.right < e.left - 8 * e.FSM.unitsize && (e.xvel = Math.max(-e.speed, e.xvel - e.FSM.unitsize / 32)))
        }, t.prototype.moveBlooperSqueezing = function(e) {
            2 !== e.squeeze && (e.squeeze = 2, e.FSM.addClass(e, "squeeze"), e.FSM.setHeight(e, 10, !0, !0)), e.squeeze < 7 ? e.xvel /= 1.4 : 7 === e.squeeze && (e.xvel = 0), e.squeeze += 1, (e.top > e.FSM.player.bottom || e.bottom > 91 * e.FSM.unitsize) && e.FSM.animateBlooperUnsqueezing(e)
        }, t.prototype.movePodobooFalling = function(e) {
            return e.top >= e.starty ? (e.yvel = 0, e.movement = void 0, e.FSM.unflipVert(e), void e.FSM.setTop(e, e.starty)) : e.yvel >= e.speed ? void(e.yvel = e.speed) : (!e.flipVert && e.yvel > 0 && e.FSM.flipVert(e), void(e.yvel += e.gravity))
        }, t.prototype.moveLakitu = function(e) {
            var t = e.FSM.player;
            t.xvel > e.FSM.unitsize / 8 && t.left > e.FSM.MapScreener.width / 2 ? e.left < t.right + 16 * e.FSM.unitsize && (e.FSM.slideToX(e, t.right + t.xvel + 32 * e.FSM.unitsize, 1.4 * t.maxspeed), e.counter = 0) : (e.counter += .007, e.FSM.slideToX(e, t.left + t.xvel + 117 * Math.sin(Math.PI * e.counter), .7 * t.maxspeed))
        }, t.prototype.moveLakituInitial = function(e) {
            return e.right < e.FSM.player.left ? (e.counter = 0, e.movement = e.FSM.moveLakitu, void e.movement(e)) : void e.FSM.shiftHoriz(e, -e.FSM.unitsize)
        }, t.prototype.moveLakituFleeing = function(e) {
            e.FSM.shiftHoriz(e, -e.FSM.unitsize)
        }, t.prototype.moveCoinEmerge = function(e, t) {
            e.FSM.shiftVert(e, e.yvel), t && e.bottom >= e.blockparent.bottom && e.FSM.killNormal(e)
        }, t.prototype.movePlayer = function(e) {
            e.keys.up ? e.keys.jump && (e.yvel <= 0 || e.FSM.MapScreener.underwater) && (e.FSM.MapScreener.underwater && (e.FSM.animatePlayerPaddling(e), e.FSM.removeClass(e, "running")), e.resting ? (e.resting.xvel && (e.xvel += e.resting.xvel), e.resting = void 0) : (e.jumping || e.FSM.MapScreener.underwater || e.FSM.switchClass(e, "running skidding", "jumping"), e.jumping = !0, e.power > 1 && e.crouching && e.FSM.removeClass(e, "jumping")), e.FSM.MapScreener.underwater || (e.keys.jumplev += 1, e.FSM.MathDecider.compute("decreasePlayerJumpingYvel", e))) : e.keys.jump = !1, e.keys.crouch && !e.crouching && e.resting && (e.power > 1 && (e.crouching = !0, e.FSM.removeClass(e, "running"), e.FSM.addClass(e, "crouching"), e.FSM.setHeight(e, 11, !0, !0), e.height = 11, e.tolyOld = e.toly, e.toly = 4 * e.FSM.unitsize, e.FSM.updateBottom(e, 0), e.FSM.updateSize(e)), e.resting.actionTop && (e.FSM.ModAttacher.fireEvent("onPlayerActionTop", e, e.resting), e.resting.actionTop(e, e.resting))), e.FSM.MathDecider.compute("decreasePlayerRunningXvel", e) && (e.skidding ? e.FSM.addClass(e, "skidding") : e.FSM.removeClass(e, "skidding")), Math.abs(e.xvel) < .14 ? e.running && (e.running = !1, 1 === e.power && e.FSM.setPlayerSizeSmall(e), e.FSM.removeClasses(e, "running skidding one two three"), e.FSM.addClass(e, "still"), e.FSM.TimeHandler.cancelClassCycle(e, "running")) : e.running || (e.running = !0, e.FSM.animatePlayerRunningCycle(e), 1 === e.power && e.FSM.setPlayerSizeSmall(e)), e.xvel > 0 ? (e.xvel = Math.min(e.xvel, e.maxspeed), e.moveleft && (e.resting || e.FSM.MapScreener.underwater) && (e.FSM.unflipHoriz(e), e.moveleft = !1)) : e.xvel < 0 && (e.xvel = Math.max(e.xvel, -1 * e.maxspeed), e.moveleft || !e.resting && !e.FSM.MapScreener.underwater || (e.moveleft = !0, e.FSM.flipHoriz(e))), e.resting && (e.hopping && (e.hopping = !1, e.FSM.removeClass(e, "hopping"), e.xvel && e.FSM.addClass(e, "running")), e.keys.jumplev = e.yvel = e.jumpcount = 0, e.jumping && (e.jumping = !1, e.FSM.removeClass(e, "jumping"), 1 === e.power && e.FSM.setPlayerSizeSmall(e), e.FSM.addClass(e, Math.abs(e.xvel) < .14 ? "still" : "running")), e.paddling && (e.paddling = e.swimming = !1, e.FSM.TimeHandler.cancelClassCycle(e, "paddling"), e.FSM.removeClasses(e, "paddling swim1 swim2"), e.FSM.addClass(e, "running")))
        }, t.prototype.movePlayerVine = function(e) {
            var t, n = e.attachedSolid;
            if (!n) return void(e.movement = e.FSM.movePlayer);
            if (e.bottom < e.attachedSolid.top) return void e.FSM.unattachPlayer(e, e.attachedSolid);
            if (0 !== e.keys.run && e.keys.run === e.attachedDirection) return -1 === e.attachedDirection ? e.FSM.setRight(e, n.left - e.FSM.unitsize) : 1 === e.attachedDirection && e.FSM.setLeft(e, n.right + e.FSM.unitsize), void e.FSM.unattachPlayer(e, n);
            if (e.keys.up) t = !0, e.FSM.shiftVert(e, e.FSM.unitsize / -4);
            else {
                if (e.keys.crouch) return t = !0, e.FSM.shiftVert(e, e.FSM.unitsize / 2), void(e.top > n.bottom && e.FSM.unattachPlayer(e, e.attachedSolid));
                t = !1
            }
            t && !e.animatedClimbing ? e.FSM.addClass(e, "animated") : !t && e.animatedClimbing && e.FSM.removeClass(e, "animated"), e.animatedClimbing = t, e.bottom < e.FSM.MapScreener.top - 4 * e.FSM.unitsize && e.FSM.setLocation(e.attachedSolid.transport)
        }, t.prototype.movePlayerSpringboardDown = function(e) {
            var t = e.spring;
            return e.FSM.isThingTouchingThing(e, t) ? t.height < 2.5 * e.FSM.unitsize || t.tension < e.FSM.unitsize / 32 ? (e.movement = void 0, void(t.movement = e.FSM.moveSpringboardUp)) : ((e.left < t.left + 2 * e.FSM.unitsize || e.right > t.right - 2 * e.FSM.unitsize) && (e.xvel /= 1.4), e.FSM.reduceHeight(t, t.tension, !0), t.tension /= 2, e.FSM.setBottom(e, t.top), void e.FSM.updateSize(t)) : (e.movement = e.FSM.movePlayer, t.movement = e.FSM.moveSpringboardUp, void(e.spring = void 0))
        }, t.prototype.animateSolidBump = function(e) {
            var t = -3;
            e.FSM.TimeHandler.addEventInterval(function(e) {
                return e.FSM.shiftVert(e, t), t += .5, 3.5 === t ? (e.up = void 0, !0) : !1
            }, 1, 1 / 0, e)
        }, t.prototype.animateBlockBecomesUsed = function(e) {
            e.used = !0, e.FSM.switchClass(e, "unused", "used")
        }, t.prototype.animateSolidContents = function(e, t) {
            var n;
            return t && t.player && t.power > 1 && "Mushroom" === e.contents && (e.contents = "FireFlower"), n = e.FSM.addThing(e.contents || e.constructor.prototype.contents), e.FSM.setMidXObj(n, e), e.FSM.setTop(n, e.top), n.blockparent = e, n.animate(n, e), n
        }, t.prototype.animateBrickShards = function(e) {
            var t, n, i, o, r = e.FSM.unitsize;
            for (o = 0; 4 > o; o += 1) n = e.left + Number(2 > o) * e.width * r - 2 * r, i = e.top + o % 2 * e.height * r - 2 * r, t = e.FSM.addThing("BrickShard", n, i), t.xvel = t.speed = r / 2 - r * Number(o > 1), t.yvel = -1.4 * r + o % 2, e.FSM.TimeHandler.addEvent(e.FSM.killNormal, 70, t)
        }, t.prototype.animateEmerge = function(e, t) {
            e.nomove = e.nocollide = e.nofall = e.alive = !0, e.FSM.flipHoriz(e), e.FSM.AudioPlayer.play("PApp"), e.FSM.arraySwitch(e, e.FSM.GroupHolder.getGroup("Character"), e.FSM.GroupHolder.getGroup("Scenery")), e.FSM.TimeHandler.addEventInterval(function() {
                return e.FSM.shiftVert(e, e.FSM.unitsize / -8), e.bottom > t.top ? !1 : (e.FSM.setBottom(e, t.top), e.FSM.GroupHolder.switchMemberGroup(e, "Scenery", "Character"), e.nomove = e.nocollide = e.nofall = e.moveleft = !1, e.emergeOut && e.emergeOut(e, t), e.movement && (e.movementOld = e.movement, e.movement = e.FSM.moveSimple, e.FSM.TimeHandler.addEventInterval(function() {
                    return e.resting === t ? !1 : (e.FSM.TimeHandler.addEvent(function() {
                        e.movement = e.movementOld
                    }, 1), !0)
                }, 1, 1 / 0)), !0)
            }, 1, 1 / 0)
        }, t.prototype.animateEmergeCoin = function(e, t) {
            e.nocollide = e.alive = e.nofall = !0, e.yvel -= e.FSM.unitsize, e.FSM.switchClass(e, "still", "anim"), e.FSM.GroupHolder.switchMemberGroup(e, "Character", "Scenery"), e.FSM.AudioPlayer.play("Coin"), e.FSM.ItemsHolder.increase("coins", 1), e.FSM.ItemsHolder.increase("score", 200), e.FSM.TimeHandler.cancelClassCycle(e, "0"), e.FSM.TimeHandler.addClassCycle(e, ["anim1", "anim2", "anim3", "anim4", "anim3", "anim2"], "0", 5), e.FSM.TimeHandler.addEventInterval(function() {
                return e.FSM.moveCoinEmerge(e, t), !e.FSM.isThingAlive(e)
            }, 1, 1 / 0), e.FSM.TimeHandler.addEvent(function() {
                e.FSM.killNormal(e)
            }, 49), e.FSM.TimeHandler.addEvent(function() {
                e.yvel *= -1
            }, 25)
        }, t.prototype.animateEmergeVine = function(e, t) {
            e.attachedSolid = t, e.FSM.setHeight(e, 0), e.FSM.AudioPlayer.play("VineEmerging"), e.FSM.TimeHandler.addEvent(function() {
                e.nocollide = !1
            }, 14), e.FSM.TimeHandler.addEvent(function() {
                e.movement = void 0
            }, 700)
        }, t.prototype.animateFlicker = function(e, t, n) {
            t = Math.round(t) || 49, n = Math.round(n) || 2, e.flickering = !0, e.FSM.TimeHandler.addEventInterval(function() {
                e.hidden = !e.hidden, e.FSM.PixelDrawer.setThingSprite(e)
            }, n, t), e.FSM.TimeHandler.addEvent(function() {
                e.flickering = e.hidden = !1, e.FSM.PixelDrawer.setThingSprite(e)
            }, t * n + 1)
        }, t.prototype.animateThrowingHammer = function(e, t) {
            return e.FSM.isThingAlive(e) ? (e.FSM.isThingAlive(e.FSM.player) && e.right >= -32 * e.FSM.unitsize && 3 !== t && e.FSM.switchClass(e, "thrown", "throwing"), e.FSM.TimeHandler.addEvent(function() {
                return e.FSM.isThingAlive(e) ? (t > 0 ? e.FSM.TimeHandler.addEvent(e.FSM.animateThrowingHammer, 7, e, t - 1) : (e.FSM.TimeHandler.addEvent(e.FSM.animateThrowingHammer, 70, e, 7), e.FSM.removeClass(e, "thrown")), !e.FSM.isThingAlive(e.FSM.player) || e.right < -32 * e.FSM.unitsize ? void e.FSM.switchClass(e, "throwing", "thrown") : void(3 !== t && (e.FSM.switchClass(e, "throwing", "thrown"), e.FSM.addThing(["Hammer", {
                    xvel: e.lookleft ? e.FSM.unitsize / -1.4 : e.FSM.unitsize / 1.4,
                    yvel: -1.4 * e.FSM.unitsize,
                    gravity: e.FSM.MapScreener.gravity / 2.1
                }], e.left - 2 * e.FSM.unitsize, e.top - 2 * e.FSM.unitsize)))) : void 0
            }, 14), !1) : !0
        }, t.prototype.animateBowserJump = function(e) {
            return e.lookleft && e.FSM.isThingAlive(e.FSM.player) ? e.FSM.isThingAlive(e) ? (e.resting = void 0, e.yvel = -1.4 * e.FSM.unitsize, e.nocollidesolid = !0, e.FSM.TimeHandler.addEventInterval(function() {
                return e.dead || e.yvel > e.FSM.unitsize ? (e.nocollidesolid = !1, !0) : !1
            }, 3, 1 / 0), !1) : !0 : !1
        }, t.prototype.animateBowserFire = function(e) {
            return e.lookleft && e.FSM.isThingAlive(e.FSM.player) ? e.FSM.isThingAlive(e) ? (e.FSM.addClass(e, "firing"), e.FSM.AudioPlayer.playLocal("BowserFires", e.left), e.FSM.TimeHandler.addEvent(e.FSM.animateBowserFireOpen, 14, e), !1) : !0 : !1
        }, t.prototype.animateBowserFireOpen = function(e) {
            var t = e.FSM.unitsize,
                n = Math.max(-e.height * t, Math.round(e.FSM.player.bottom / (8 * t)) * t * 8);
            return e.FSM.isThingAlive(e) ? (e.FSM.removeClass(e, "firing"), e.FSM.addThing(["BowserFire", {
                ylev: n
            }], e.left - 8 * e.FSM.unitsize, e.top + 4 * e.FSM.unitsize), !1) : !0
        }, t.prototype.animateBowserThrow = function(e) {
            if (!e.lookleft || !e.FSM.player || !e.FSM.isThingAlive(e.FSM.player)) return !1;
            if (!e.FSM.isThingAlive(e)) return !0;
            var t = e.FSM.addThing("Hammer", e.left + 2 * e.FSM.unitsize, e.top - 2 * e.FSM.unitsize);
            return e.FSM.TimeHandler.addEventInterval(function() {
                return e.FSM.isThingAlive(e) ? (e.FSM.setTop(t, e.top - 2 * e.FSM.unitsize), e.lookleft ? e.FSM.setLeft(t, e.left + 2 * e.FSM.unitsize) : e.FSM.setLeft(t, e.right - 2 * e.FSM.unitsize), !0) : (e.FSM.killNormal(t), !0)
            }, 1, 14), e.FSM.TimeHandler.addEvent(function() {
                t.xvel = 1.17 * e.FSM.unitsize, t.yvel = -2.1 * e.FSM.unitsize, e.lookleft && (t.xvel *= -1)
            }, 14), !1
        }, t.prototype.animateBowserFreeze = function(e) {
            e.nofall = !0, e.nothrow = !0, e.movement = void 0, e.dead = !0, e.FSM.animateCharacterPauseVelocity(e), e.FSM.ScenePlayer.addCutsceneSetting("bowser", e), e.FSM.TimeHandler.addEvent(function() {
                e.nofall = !1
            }, 70)
        }, t.prototype.animateJump = function(e) {
            return e.FSM.isThingAlive(e) && e.FSM.isThingAlive(e.FSM.player) ? e.resting ? (e.FSM.MapScreener.floor - e.bottom / e.FSM.unitsize >= 30 && "Floor" !== e.resting.title && e.FSM.NumberMaker.randomBoolean() ? (e.falling = !0, e.yvel = e.FSM.unitsize * -.7, e.FSM.TimeHandler.addEvent(function() {
                e.falling = !1
            }, 42)) : (e.nocollidesolid = !0, e.yvel = -2.1 * e.FSM.unitsize, e.FSM.TimeHandler.addEvent(function() {
                e.nocollidesolid = !1
            }, 42)), e.resting = void 0, !1) : !1 : !0
        }, t.prototype.animateBlooperUnsqueezing = function(e) {
            e.counter = 0, e.squeeze = 0, e.FSM.removeClass(e, "squeeze"), e.FSM.setHeight(e, 12, !0, !0)
        }, t.prototype.animatePodobooJumpUp = function(e) {
            e.starty = e.top, e.yvel = -1 * e.speed, e.FSM.TimeHandler.addEvent(e.FSM.animatePodobooJumpDown, e.jumpHeight, e)
        }, t.prototype.animatePodobooJumpDown = function(e) {
            e.movement = e.FSM.movePodobooFalling
        }, t.prototype.animateLakituThrowingSpiny = function(e) {
            return e.fleeing || !e.FSM.isThingAlive(e) ? !0 : (e.FSM.switchClass(e, "out", "hiding"), void e.FSM.TimeHandler.addEvent(function() {
                if (!e.dead) {
                    var t = e.FSM.addThing("SpinyEgg", e.left, e.top);
                    t.yvel = -2.1 * e.FSM.unitsize, e.FSM.switchClass(e, "hiding", "out")
                }
            }, 21))
        }, t.prototype.animateSpinyEggHatching = function(e) {
            if (e.FSM.isThingAlive(e)) {
                var t = e.FSM.addThing("Spiny", e.left, e.top - e.yvel);
                t.moveleft = e.FSM.objectToLeft(e.FSM.player, t), e.FSM.killNormal(e)
            }
        }, t.prototype.animateFireballEmerge = function(e) {
            e.FSM.AudioPlayer.play("Fireball")
        }, t.prototype.animateFireballExplode = function(e, t) {
            if (e.nocollide = !0, e.FSM.killNormal(e), 2 !== t) {
                var n = e.FSM.addThing("Firework");
                e.FSM.setMidXObj(n, e), e.FSM.setMidYObj(n, e), n.animate(n)
            }
        }, t.prototype.animateFirework = function(e) {
            var t, n = e.className + " n";
            for (t = 0; 3 > t; t += 1) e.FSM.TimeHandler.addEvent(function(t) {
                e.FSM.setClass(e, n + (t + 1).toString())
            }, 7 * t, t);
            e.FSM.AudioPlayer.play("Firework"), e.FSM.TimeHandler.addEvent(function() {
                e.FSM.killNormal(e)
            }, 7 * t)
        }, t.prototype.animateCannonFiring = function(e) {
            if (e.FSM.isThingAlive(e) && !(e.FSM.player.right > e.left - 8 * e.FSM.unitsize && e.FSM.player.left < e.right + 8 * e.FSM.unitsize)) {
                var t = e.FSM.ObjectMaker.make("BulletBill");
                e.FSM.objectToLeft(e.FSM.player, e) ? (t.direction = 1, t.moveleft = !0, t.xvel *= -1, e.FSM.flipHoriz(t), e.FSM.addThing(t, e.left, e.top)) : e.FSM.addThing(t, e.left + e.width, e.top), e.FSM.AudioPlayer.playLocal("Bump", e.right)
            }
        }, t.prototype.animatePlayerFire = function(e) {
            if (!(e.numballs >= 2)) {
                var t = e.moveleft ? e.left - e.FSM.unitsize / 4 : e.right + e.FSM.unitsize / 4,
                    n = e.FSM.ObjectMaker.make("Fireball", {
                        moveleft: e.moveleft,
                        speed: 1.75 * e.FSM.unitsize,
                        jumpheight: 1.56 * e.FSM.unitsize,
                        gravity: 1.56 * e.FSM.MapScreener.gravity,
                        yvel: e.FSM.unitsize,
                        movement: e.FSM.moveJumping
                    });
                e.FSM.addThing(n, t, e.top + 8 * e.FSM.unitsize), n.animate(n), n.onDelete = function() {
                    e.numballs -= 1
                }, e.numballs += 1, e.FSM.addClass(e, "firing"), e.FSM.TimeHandler.addEvent(function() {
                    e.FSM.removeClass(e, "firing")
                }, 7)
            }
        }, t.prototype.animateCastleBlock = function(e, t) {
            var n, i = e.EightBitter.getMidX(e),
                o = e.EightBitter.getMidY(e),
                r = Math.cos(e.angle * Math.PI) * e.FSM.unitsize * 4,
                a = Math.sin(e.angle * Math.PI) * e.FSM.unitsize * 4;
            for (n = 0; n < t.length; n += 1) e.FSM.setMidX(t[n], i + r * n), e.FSM.setMidY(t[n], o + a * n);
            e.angle += e.dt * e.direction
        }, t.prototype.animateCastleBridgeOpen = function(e) {
            e.FSM.ScenePlayer.playRoutine("CastleBridgeOpen", e)
        }, t.prototype.animateCastleChainOpen = function(e) {
            e.FSM.TimeHandler.addEvent(e.FSM.killNormal, 3, e)
        }, t.prototype.animatePlayerPaddling = function(e) {
            e.paddlingCycle || (e.FSM.removeClasses(e, "skidding paddle1 paddle2 paddle3 paddle4 paddle5"), e.FSM.addClass(e, "paddling"), e.FSM.TimeHandler.cancelClassCycle(e, "paddlingCycle"), e.FSM.TimeHandler.addClassCycle(e, ["paddle1", "paddle2", "paddle3", "paddle2", "paddle1", function() {
                return e.paddlingCycle = !1
            }], "paddlingCycle", 7)), e.paddling = e.paddlingCycle = e.swimming = !0, e.yvel = e.FSM.unitsize * -.84
        }, t.prototype.animatePlayerLanding = function(e) {
            e.crouching && e.power > 1 && e.FSM.setHeight(e, 11, !0, !0), e.FSM.hasClass(e, "hopping") && e.FSM.switchClass(e, "hopping", "jumping"), e.FSM.MapScreener.underwater && e.FSM.removeClass(e, "paddling"), e.FSM.ModAttacher.fireEvent("onPlayerLanding", e, e.resting)
        }, t.prototype.animatePlayerRestingOff = function(e) {
            e.resting = void 0, e.FSM.MapScreener.underwater && e.FSM.switchClass(e, "running", "paddling")
        }, t.prototype.animatePlayerBubbling = function(e) {
            e.FSM.addThing("Bubble", e.right, e.top)
        }, t.prototype.animatePlayerRunningCycle = function(e) {
            e.FSM.switchClass(e, "still", "running"), e.running = e.FSM.TimeHandler.addClassCycle(e, ["one", "two", "three", "two"], "running", function() {
                return 5 + Math.ceil(e.maxspeedsave - Math.abs(e.xvel))
            })
        }, t.prototype.animateCharacterPauseVelocity = function(e, t) {
            e.xvelOld = e.xvel || 0, e.yvelOld = e.yvel || 0, e.nofallOld = e.nofall || !1, e.nocollideOld = e.nocollide || !1, e.movementOld = e.movement || e.movementOld, e.nofall = e.nocollide = !0, e.xvel = e.yvel = 0, t || (e.movement = void 0)
        }, t.prototype.animateCharacterResumeVelocity = function(e, t) {
            t || (e.xvel = e.xvelOld || 0, e.yvel = e.yvelOld || 0), e.movement = e.movementOld || e.movement, e.nofall = e.nofallOld || !1, e.nocollide = e.nocollideOld || !1
        }, t.prototype.animateCharacterHop = function(e) {
            e.resting = void 0, e.yvel = -1.4 * e.FSM.unitsize
        }, t.prototype.animatePlayerPipingStart = function(e) {
            e.nocollide = e.nofall = e.piping = !0, e.xvel = e.yvel = 0, e.movementOld = e.movement, e.movement = void 0, e.power > 1 ? (e.FSM.animatePlayerRemoveCrouch(e), e.FSM.setPlayerSizeLarge(e)) : e.FSM.setPlayerSizeSmall(e), e.FSM.removeClasses(e, "jumping running crouching"), e.FSM.AudioPlayer.clearTheme(), e.FSM.TimeHandler.cancelAllCycles(e), e.FSM.GroupHolder.switchMemberGroup(e, "Character", "Scenery")
        }, t.prototype.animatePlayerPipingEnd = function(e) {
            e.movement = e.movementOld, e.nocollide = e.nofall = e.piping = !1, e.FSM.AudioPlayer.resumeTheme(), e.FSM.GroupHolder.switchMemberGroup(e, "Scenery", "Character")
        }, t.prototype.animatePlayerOffPole = function(e, t) {
            e.FSM.removeClasses(e, "climbing running"), e.FSM.addClass(e, "jumping"), e.xvel = 1.4, e.yvel = -.7, e.nocollide = e.nofall = !1, e.gravity = e.FSM.MapScreener.gravity / 14, e.FSM.TimeHandler.addEvent(function() {
                e.movement = e.FSM.movePlayer, e.gravity = e.FSM.MapScreener.gravity, e.FSM.unflipHoriz(e), t && e.FSM.animatePlayerRunningCycle(e)
            }, 21)
        }, t.prototype.animatePlayerOffVine = function(e) {
            e.FSM.flipHoriz(e), e.FSM.shiftHoriz(e, (e.width - 1) * e.FSM.unitsize), e.FSM.TimeHandler.addEvent(e.FSM.animatePlayerOffPole, 14, e)
        }, t.prototype.lookTowardsThing = function(e, t) {
            t.right <= e.left ? (e.lookleft = !0, e.moveleft = !0, e.FSM.unflipHoriz(e)) : t.left >= e.right && (e.lookleft = !1, e.moveleft = !1, e.FSM.flipHoriz(e))
        }, t.prototype.lookTowardsPlayer = function(e, t) {
            e.FSM.player.right <= e.left ? (!e.lookleft || t) && (e.lookleft = !0, e.moveleft = !1, e.FSM.unflipHoriz(e)) : e.FSM.player.left >= e.right && (e.lookleft || t) && (e.lookleft = !1, e.moveleft = !0, e.FSM.flipHoriz(e))
        }, t.prototype.killNormal = function(e) {
            e && (e.hidden = e.dead = !0, e.alive = !1, e.numquads = 0, e.movement = void 0, this.hasOwnProperty("resting") && (e.resting = void 0), e.FSM && e.FSM.TimeHandler.cancelAllCycles(e), e.FSM.ModAttacher.fireEvent("onKillNormal", e))
        }, t.prototype.killFlip = function(e, t) {
            void 0 === t && (t = 0), e.FSM.flipVert(e), e.bottomBump && (e.bottomBump = void 0), e.nocollide = e.dead = !0, e.speed = e.xvel = 0, e.nofall = !1, e.resting = e.movement = void 0, e.yvel = -e.FSM.unitsize, e.FSM.TimeHandler.addEvent(e.FSM.killNormal, 70 + t, e)
        }, t.prototype.killSpawn = function(e, t) {
            if (t) return void e.FSM.killNormal(e);
            if (!e.spawnType) throw new Error("Thing " + e.title + " has no .spawnType.");
            var n = e.FSM.ObjectMaker.make(e.spawnType, e.spawnSettings || {});
            return e.FSM.addThing(n), e.FSM.setBottom(n, e.bottom), e.FSM.setMidXObj(n, e), e.FSM.killNormal(e), n
        }, t.prototype.killReplace = function(e, t, n, i) {
            void 0 === n && (n = {});
            var o, r;
            if ("undefined" != typeof i)
                for (r = 0; r < i.length; r += 1) n[i[r]] = e[i[r]];
            return o = e.FSM.ObjectMaker.make(t, n), e.flipHoriz && e.FSM.flipHoriz(o), e.flipVert && e.FSM.flipVert(o), e.FSM.addThing(o, e.left, e.top), e.FSM.killNormal(e), o
        }, t.prototype.killGoomba = function(e, t) {
            return t ? void e.FSM.killFlip(e) : void e.FSM.killSpawn(e)
        }, t.prototype.killKoopa = function(e, t) {
            var n;
            return e.jumping || e.floating ? (n = e.FSM.killReplace(e, "Koopa", void 0, ["smart", "direction", "moveleft"]), n.xvel = n.moveleft ? -n.speed : n.speed) : n = e.FSM.killToShell(e, Number(t)), n
        }, t.prototype.killLakitu = function(e) {
            var t, n = e.FSM.GroupHolder.getGroup("Character");
            for (e.FSM.killFlip(e), e.FSM.MapScreener.lakitu = void 0, t = 0; t < n.length; t += 1)
                if ("Lakitu" === n[t].title) return void(e.FSM.MapScreener.lakitu = n[t]);
            e.FSM.TimeHandler.addEvent(e.FSM.addThing.bind(e.FSM), 350, "Lakitu", e.FSM.MapScreener.right, e.top)
        }, t.prototype.killBowser = function(e, t) {
            return t ? (e.nofall = !1, e.movement = void 0, void e.FSM.killFlip(e.FSM.killSpawn(e))) : (e.deathcount += 1, void(5 === e.deathcount && (e.yvel = e.speed = 0, e.movement = void 0, e.FSM.killFlip(e.FSM.killSpawn(e), 350), e.FSM.scoreOn(5e3, e))))
        }, t.prototype.killToShell = function(e, t) {
            var n, i, o;
            return e.spawnSettings = {
                smart: e.smart
            }, t && 2 !== t ? e.spawnType = e.title : e.spawnType = e.shelltype || "Shell", e.spawnSettings = {
                smart: e.smart
            }, n = e.FSM.killSpawn(e), i = n.nocollidechar, o = n.nocollideplayer, n.nocollidechar = !0, n.nocollideplayer = !0, e.FSM.TimeHandler.addEvent(function() {
                n.nocollidechar = i, n.nocollideplayer = o
            }, 7), e.FSM.killNormal(e), 2 === t && e.FSM.killFlip(n), n
        }, t.prototype.killNPCs = function() {
            var e, n, i, o, r = t.prototype.ensureCorrectCaller(this);
            for (e = r.GroupHolder.getGroup("Character"), o = e.length - 1; o >= 0; --o) n = e[o], n.nokillend ? n.killonend && n.killonend(n) : (n.FSM.killNormal(n), n.FSM.arrayDeleteThing(n, e, o));
            for (e = r.GroupHolder.getGroup("Solid"), o = e.length - 1; o >= 0; --o) i = e[o], i.killonend && (i.killonend.constructor === Function ? i.killonend(i, e, o) : i.FSM.arrayDeleteThing(i, e, o))
        }, t.prototype.killBrick = function(e, t) {
            e.FSM.AudioPlayer.play("BreakBlock"), e.FSM.TimeHandler.addEvent(e.FSM.animateBrickShards, 1, e), e.FSM.killNormal(e), t instanceof e.FSM.ObjectMaker.getFunction("Thing") ? e.up = t : e.up = void 0
        }, t.prototype.killPlayer = function(e, n) {
            if (e.alive && !e.flickering && !e.dieing) {
                var i = e.FSM,
                    o = e.FSM.AreaSpawner.getArea();
                if (2 === n) e.dead = e.dieing = !0, e.alive = !1, i.MapScreener.notime = !0;
                else {
                    if (!n && e.power > 1) return e.power = 1, i.ItemsHolder.setItem("power", 1), i.AudioPlayer.play("PowerDown"), void i.playerGetsSmall(e);
                    e.dieing = !0, i.setSize(e, 7.5, 7, !0), i.updateSize(e), i.setClass(e, "character player dead"), i.animateCharacterPauseVelocity(e), i.arrayToEnd(e, i.GroupHolder.getGroup(e.groupType)), i.MapScreener.notime = !0, i.MapScreener.nokeys = !0, i.TimeHandler.cancelAllCycles(e), i.TimeHandler.addEvent(function() {
                        i.animateCharacterResumeVelocity(e, !0), e.nocollide = !0, e.movement = e.resting = void 0, e.gravity = i.MapScreener.gravity / 2.1, e.yvel = -1.4 * t.unitsize
                    }, 7)
                }
                e.nocollide = e.nomove = e.dead = !0, i.MapScreener.nokeys = !0, i.AudioPlayer.clearAll(), i.AudioPlayer.play("PlayerDies"), i.ItemsHolder.decrease("lives"), i.ItemsHolder.setItem("power", 1), i.ItemsHolder.getItem("lives") > 0 ? i.TimeHandler.addEvent(o.onPlayerDeath.bind(i), o.onPlayerDeathTimeout, i) : i.TimeHandler.addEvent(o.onGameOver.bind(i), o.onGameOverTimeout, i)
            }
        }, t.prototype.findScore = function(e) {
            var n = t.prototype.ensureCorrectCaller(this);
            return e < n.pointLevels.length ? n.pointLevels[e] : (n.gainLife(1), 0)
        }, t.prototype.score = function(e, n) {
            if (e) {
                var i = t.prototype.ensureCorrectCaller(this);
                i.scoreOn(e, i.player, !0), n || this.ItemsHolder.increase("score", e)
            }
        }, t.prototype.scoreOn = function(e, t, n) {
            if (e) {
                var i = t.FSM.addThing("Text" + e);
                t.FSM.scoreAnimateOn(i, t), n || this.ItemsHolder.increase("score", e), t.FSM.ModAttacher.fireEvent("onScoreOn", e, t, n)
            }
        }, t.prototype.scoreAnimateOn = function(e, t) {
            t.FSM.setMidXObj(e, t), t.FSM.setBottom(e, t.top), t.FSM.scoreAnimate(e)
        }, t.prototype.scoreAnimate = function(e, t) {
            void 0 === t && (t = 28), e.FSM.TimeHandler.addEventInterval(e.FSM.shiftVert, 1, t, e, -e.FSM.unitsize / 6), e.FSM.TimeHandler.addEvent(e.FSM.killNormal, t, e)
        }, t.prototype.scorePlayerShell = function(e, t) {
            return e.star ? void e.FSM.scoreOn(200, t) : t.resting ? t.peeking ? void e.FSM.scoreOn(1e3, t) : e.jumpcount ? void e.FSM.scoreOn(500, t) : void e.FSM.scoreOn(400, t) : void e.FSM.scoreOn(8e3, t)
        }, t.prototype.scorePlayerFlag = function(e, t) {
            var n;
            return n = 28 > t ? 8 > t ? 100 : 400 : 40 > t ? 800 : 62 > t ? 2e3 : 5e3
        }, t.prototype.getVolumeLocal = function(e, t) {
            return t > e.MapScreener.right ? 0 : Math.max(.14, Math.min(.84, (e.MapScreener.width - Math.abs(t - e.player.left)) / e.MapScreener.width))
        }, t.prototype.getAudioThemeDefault = function(e) {
            return e.AreaSpawner.getArea().setting.split(" ")[0]
        }, t.prototype.setMap = function(e, n) {
            var i, o, r = t.prototype.ensureCorrectCaller(this);
            ("undefined" == typeof e || e.constructor === t) && (e = r.AreaSpawner.getMapName()), o = r.AreaSpawner.setMap(e), r.ModAttacher.fireEvent("onPreSetMap", o), o.seed && r.NumberMaker.resetFromSeed(o.seed), r.ItemsHolder.setItem("world", e), r.InputWriter.restartHistory(), r.ModAttacher.fireEvent("onSetMap", o), r.setLocation(n || o.locationDefault || r.settings.maps.locationDefault), i = r.AreaSpawner.getArea().time || r.AreaSpawner.getMap().time, r.ItemsHolder.setItem("time", Number(i))
        }, t.prototype.setLocation = function(e) {
            void 0 === e && (e = 0);
            var n, i = t.prototype.ensureCorrectCaller(this);
            i.MapScreener.nokeys = !1, i.MapScreener.notime = !1, i.MapScreener.canscroll = !0, i.MapScreener.clearScreen(), i.GroupHolder.clearArrays(), i.TimeHandler.cancelAllEvents(), i.AreaSpawner.setLocation((e || 0).toString()),
                i.MapScreener.setVariables(), n = i.AreaSpawner.getLocation((e || 0).toString()), i.ModAttacher.fireEvent("onPreSetLocation", n), i.PixelDrawer.setBackground(i.AreaSpawner.getArea().background), i.TimeHandler.addEventInterval(i.maintainTime, 25, 1 / 0, i), i.TimeHandler.addEventInterval(i.maintainScenery, 350, 1 / 0, i), i.AudioPlayer.clearAll(), i.AudioPlayer.playTheme(), i.QuadsKeeper.resetQuadrants(), n.entry(i, n), i.ModAttacher.fireEvent("onSetLocation", n), i.GamesRunner.play()
        }, t.prototype.mapEntranceNormal = function(e, t) {
            t && t.xloc && e.scrollWindow(t.xloc * e.unitsize), e.addPlayer(16 * e.unitsize, 16 * e.unitsize)
        }, t.prototype.mapEntrancePlain = function(e, t) {
            t && t.xloc && e.scrollWindow(t.xloc * e.unitsize), e.addPlayer(16 * e.unitsize, e.MapScreener.floor * e.unitsize)
        }, t.prototype.mapEntranceWalking = function(e, t) {
            e.mapEntrancePlain(e, t), e.player.keys.run = 1, e.player.maxspeed = e.player.walkspeed, e.MapScreener.nokeys = !0, e.MapScreener.notime = !0
        }, t.prototype.mapEntranceCastle = function(e) {
            e.addPlayer(2 * e.unitsize, 56 * e.unitsize)
        }, t.prototype.mapEntranceVine = function(e) {
            var t = e.MapScreener.bottom - 40 * e.unitsize,
                n = e.addThing("Vine", 32 * e.unitsize, e.MapScreener.bottom + 8 * e.unitsize);
            e.TimeHandler.addEventInterval(function() {
                return n.top >= t ? !1 : (n.movement = void 0, e.mapEntranceVinePlayer(e, n), !0)
            }, 1, 1 / 0)
        }, t.prototype.mapEntranceVinePlayer = function(e, t) {
            var n = e.MapScreener.bottom - 24 * e.unitsize,
                i = e.unitsize / -4,
                o = e.addPlayer(29 * e.unitsize, e.MapScreener.bottom - 4 * e.unitsize);
            e.shiftVert(o, o.height * e.unitsize), e.collideVine(o, t), e.TimeHandler.addEventInterval(function() {
                return e.shiftVert(o, i), o.top < n ? (e.TimeHandler.addEvent(e.animatePlayerOffVine, 49, o), !0) : !1
            }, 1, 1 / 0)
        }, t.prototype.mapEntrancePipeVertical = function(e, t) {
            t && t.xloc && e.scrollWindow(t.xloc * e.unitsize), e.addPlayer(t.entrance.left + e.player.width * e.unitsize / 2, t.entrance.top + e.player.height * e.unitsize), e.animatePlayerPipingStart(e.player), e.AudioPlayer.play("Pipe"), e.AudioPlayer.addEventListener("Pipe", "ended", function() {
                e.AudioPlayer.playTheme()
            }), e.TimeHandler.addEventInterval(function() {
                return e.shiftVert(e.player, e.unitsize / -4), e.player.bottom <= t.entrance.top ? (e.animatePlayerPipingEnd(e.player), !0) : !1
            }, 1, 1 / 0)
        }, t.prototype.mapEntrancePipeHorizontal = function(e, t) {
            throw new Error("mapEntrancePipeHorizontal is not yet implemented.")
        }, t.prototype.mapEntranceRespawn = function(e) {
            e.MapScreener.nokeys = !1, e.MapScreener.notime = !1, e.MapScreener.canscroll = !0, e.addPlayer(16 * e.unitsize, 0), e.animateFlicker(e.player), e.MapScreener.underwater || e.playerAddRestingStone(e.player), e.ModAttacher.fireEvent("onPlayerRespawn")
        }, t.prototype.mapExitPipeVertical = function(e, t) {
            !e.resting || "undefined" == typeof t.transport || e.right + 2 * e.FSM.unitsize > t.right || e.left - 2 * e.FSM.unitsize < t.left || (e.FSM.animatePlayerPipingStart(e), e.FSM.AudioPlayer.play("Pipe"), e.FSM.TimeHandler.addEventInterval(function() {
                return e.FSM.shiftVert(e, e.FSM.unitsize / 4), e.top <= t.top ? !1 : (e.FSM.TimeHandler.addEvent(function() {
                    t.transport.constructor === Object ? e.FSM.setMap(t.transport.map) : e.FSM.setLocation(t.transport)
                }, 42), !0)
            }, 1, 1 / 0))
        }, t.prototype.mapExitPipeHorizontal = function(e, t, n) {
            (n || e.resting || e.paddling) && (e.top < t.top || e.bottom > t.bottom || e.keys.run && (e.FSM.animatePlayerPipingStart(e), e.FSM.AudioPlayer.play("Pipe"), e.FSM.TimeHandler.addEventInterval(function() {
                return e.FSM.shiftHoriz(e, e.FSM.unitsize / 4), e.left <= t.left ? !1 : (e.FSM.TimeHandler.addEvent(function() {
                    e.FSM.setLocation(t.transport)
                }, 42), !0)
            }, 1, 1 / 0)))
        }, t.prototype.initializeArea = function() {
            var e, n = this;
            if (n.attributes)
                for (e in n.attributes) n.hasOwnProperty(e) && n[e] && t.prototype.proliferate(n, n.attributes[e]);
            n.setBackground(n)
        }, t.prototype.setAreaBackground = function(e) {
            -1 !== e.setting.indexOf("Underwater") || -1 === e.setting.indexOf("Underworld") && -1 === e.setting.indexOf("Castle") && -1 === e.setting.indexOf("Night") ? e.background = "#5c94fc" : e.background = "#000000"
        }, t.prototype.getAbsoluteHeight = function(e, n) {
            var i = t.prototype.ensureCorrectCaller(this),
                o = e + i.MapScreener.height;
            return n || (o *= i.unitsize), o
        }, t.prototype.mapAddStretched = function(e) {
            var n = t.prototype.ensureCorrectCaller(this),
                i = n.AreaSpawner.getArea().boundaries,
                o = e instanceof String ? {
                    thing: o
                } : e,
                r = (n.MapScreener.floor - o.y) * n.unitsize,
                a = n.ObjectMaker.make(o.thing, {
                    width: i.right - i.left,
                    height: o.height || n.getAbsoluteHeight(o.y)
                });
            return n.addThing(a, i.left, r)
        }, t.prototype.mapAddAfter = function(e) {
            var n = t.prototype.ensureCorrectCaller(this),
                i = n.MapsCreator,
                o = n.AreaSpawner,
                r = o.getPreThings(),
                a = e instanceof String ? {
                    thing: a
                } : e,
                l = o.getArea(),
                p = o.getMap(),
                s = n.AreaSpawner.getArea().boundaries;
            a.x = s.right, i.analyzePreSwitch(a, r, l, p)
        }, t.prototype.cutsceneFlagpoleStartSlidingDown = function(e, t) {
            var n = t.player,
                i = t.collider,
                o = i.bottom - n.bottom | 0,
                r = e.scorePlayerFlag(n, o / e.unitsize),
                a = e.ObjectMaker.make("Text" + r);
            n.star = 1, n.nocollidechar = !0, e.MapScreener.nokeys = !0, e.MapScreener.notime = !0, e.MapScreener.canscroll = !1, e.killNPCs(), e.animateCharacterPauseVelocity(n), e.setRight(n, i.left + 3 * e.unitsize), e.killNormal(i), e.removeClasses(n, "running jumping skidding"), e.addClass(n, "climbing animated"), e.TimeHandler.addClassCycle(n, ["one", "two"], "climbing", 0), e.TimeHandler.addEventInterval(e.shiftVert, 1, 64, i.collection.Flag, e.unitsize), e.addThing(a, i.right, i.bottom), e.TimeHandler.addEventInterval(e.shiftVert, 1, 72, a, -e.unitsize), e.TimeHandler.addEvent(e.ItemsHolder.increase.bind(e.ItemsHolder), 72, "score", r), e.AudioPlayer.clearAll(), e.AudioPlayer.clearTheme(), e.AudioPlayer.play("Flagpole"), e.TimeHandler.addEventInterval(function() {
                return n.bottom < i.bottom ? (e.shiftVert(n, e.unitsize), !1) : (0 | i.collection.Flag.bottom) < (0 | i.bottom) ? !1 : (n.movement = void 0, e.setBottom(n, i.bottom), e.TimeHandler.cancelClassCycle(n, "climbing"), e.TimeHandler.addEvent(e.ScenePlayer.bindRoutine("HitBottom"), 21), !0)
            }, 1, 1 / 0)
        }, t.prototype.cutsceneFlagpoleHitBottom = function(e, t) {
            var n = t.player;
            n.keys.run = 1, n.maxspeed = n.walkspeed, n.FSM.flipHoriz(n), n.FSM.shiftHoriz(n, (n.width + 1) * n.FSM.unitsize), n.FSM.TimeHandler.addEvent(function() {
                n.FSM.AudioPlayer.play("SC"), n.FSM.animatePlayerOffPole(n, !0),
                    console.log("vinto?")

            }, 14)
        }, t.prototype.cutsceneFlagpoleCountdown = function(e, t) {
            e.TimeHandler.addEventInterval(function() {
                return e.ItemsHolder.decrease("time"), e.ItemsHolder.increase("score", 50), e.AudioPlayer.play("Coin"), e.ItemsHolder.getItem("time") > 0 ? !1 : (e.TimeHandler.addEvent(e.ScenePlayer.bindRoutine("Fireworks"), 35), !0)
            }, 1, 1 / 0)
        }, t.prototype.cutsceneFlagpoleFireworks = function(e, t) {
            var n, i, o = e.MathDecider.compute("numberOfFireworks", t.time),
                r = t.player,
                a = t.detector,
                l = a.left,
                p = l - 8 * e.unitsize,
                s = a.bottom,
                d = s - 16 * e.unitsize,
                c = e.ObjectMaker.make("CastleFlag", {
                    position: "beginning"
                }),
                u = 28,
                S = 28,
                m = [
                    [0, -48],
                    [-8, -40],
                    [8, -40],
                    [-8, -32],
                    [0, -48],
                    [-8, -40]
                ],
                h = 0;
            e.addThing(c, p + e.unitsize, d - 24 * e.unitsize), e.arrayToBeginning(c, e.GroupHolder.getGroup(c.groupType)), e.TimeHandler.addEventInterval(function() {
                e.shiftVert(c, e.unitsize * -.25)
            }, 1, u), o > 0 && e.TimeHandler.addEventInterval(function() {
                i = m[h], n = e.addThing("Firework", r.left + i[0] * e.unitsize, r.top + i[1] * e.unitsize), n.animate(n), h += 1
            }, S, o), e.TimeHandler.addEvent(function() {
                e.AudioPlayer.addEventImmediate("Stage Clear", "ended", function() {
                    e.collideLevelTransport(r, a), e.ScenePlayer.stopCutscene()
                })
            }, h * S + 420)
        }, t.prototype.cutsceneBowserVictoryCollideCastleAxe = function(e, t) {
            var n = t.player,
                i = t.axe;
            e.animateCharacterPauseVelocity(n), e.killNormal(i), e.killNPCs(), e.AudioPlayer.clearTheme(), e.MapScreener.nokeys = !0, e.MapScreener.notime = !0, n.FSM.TimeHandler.addEvent(function() {
                n.keys.run = 1, n.maxspeed = n.walkspeed, e.animateCharacterResumeVelocity(n), n.yvel = 0, e.MapScreener.canscroll = !0, e.AudioPlayer.play("WorldClear")
            }, 140)
        }, t.prototype.cutsceneBowserVictoryCastleBridgeOpen = function(e, t) {
            var n = t.routineArguments[0];
            e.TimeHandler.addEventInterval(function() {
                return n.right -= 2 * e.unitsize, e.setWidth(n, n.width - 2), e.AudioPlayer.play("BreakBlock"), n.width <= 0 ? (e.ScenePlayer.playRoutine("BowserFalls"), !0) : !1
            }, 1, 1 / 0)
        }, t.prototype.cutsceneBowserVictoryBowserFalls = function(e, t) {
            e.AudioPlayer.play("BowserFalls"), t.bowser && (t.bowser.nofall = !0)
        }, t.prototype.cutsceneBowserVictoryDialog = function(e, t) {
            var n, i, o = t.player,
                r = t.detector,
                a = t.keys,
                l = 140,
                p = 0;
            o.keys.run = 0, o.FSM.killNormal(r), o.FSM.TimeHandler.addEventInterval(function() {
                for (i = r.collection[a[p]].children, n = 0; n < i.length; n += 1) "TextSpace" !== i[n].title && (i[n].hidden = !1);
                p += 1
            }, l, a.length), o.FSM.TimeHandler.addEvent(function() {
                o.FSM.collideLevelTransport(o, r)
            }, 280 + l * a.length)
        }, t.prototype.macroFillPreThings = function(e, t, n, i, o) {
            var r, a, l, p, s = o.ObjectMaker.getFullPropertiesOf(e.thing),
                d = e.xnum || 1,
                c = e.ynum || 1,
                u = e.xwidth || s.width,
                S = e.yheight || s.height,
                m = e.x || 0,
                h = e.y || 0,
                y = [],
                M = 0;
            for (l = 0; d > l; ++l) {
                for (a = h, p = 0; c > p; ++p) r = {
                    x: m,
                    y: a,
                    macro: void 0
                }, y.push(o.proliferate(r, e, !0)), M += 1, a += S;
                m += u
            }
            return y
        }, t.prototype.macroFillPrePattern = function(e, t, n, i, o) {
            if (!o.settings.maps.patterns[e.pattern]) throw new Error("An unknown pattern is referenced: " + e);
            var r, a, l, p, s = o.settings.maps.patterns[e.pattern],
                d = s.length,
                c = o.ObjectMaker.getFullProperties(),
                u = e.repeat || 1,
                S = e.x || 0,
                m = e.y || 0,
                h = [],
                y = 0,
                M = {};
            if ("undefined" != typeof e.skips)
                for (l = 0; l < e.skips.length; l += 1) M[e.skips[l]] = !0;
            for (l = 0; u > l; l += 1) {
                for (p = 0; d > p; p += 1) M[p] || (r = s[p], a = {
                    thing: r[0],
                    x: S + r[1],
                    y: m + r[2]
                }, a.y += c[r[0]].height, r[3] && (a.width = r[3]), h.push(a), y += 1);
                S += s.width
            }
            return h
        }, t.prototype.macroFloor = function(e, t, n, i, o) {
            var r = e.x || 0,
                a = e.y || 0,
                l = o.proliferate({
                    thing: "Floor",
                    x: r,
                    y: a,
                    width: e.width || 8,
                    height: "Infinity"
                }, e, !0);
            return l.macro = void 0, l
        }, t.prototype.macroPipe = function(e, n, i, o, r) {
            var a = e.x || 0,
                l = e.y || 0,
                p = e.height || 16,
                s = t.prototype.proliferate({
                    thing: "Pipe",
                    x: a,
                    y: l,
                    width: 16,
                    height: e.height === 1 / 0 ? "Infinity" : e.height || 8
                }, e, !0),
                d = [s];
            return s.macro = void 0, "Infinity" === p || p === 1 / 0 ? s.height = r.MapScreener.height : s.y += p, e.piranha && d.push({
                thing: "Piranha",
                x: a + 4,
                y: s.y + 12,
                onPipe: !0
            }), d
        }, t.prototype.macroPipeCorner = function(e, t, n, i, o) {
            var r = e.x || 0,
                a = e.y || 0,
                l = e.height || 16,
                p = [{
                    thing: "PipeHorizontal",
                    x: r,
                    y: a,
                    transport: e.transport || 0
                }, {
                    thing: "PipeVertical",
                    x: r + 16,
                    y: a + l - 16,
                    height: l
                }];
            return e.scrollEnabler && p.push({
                thing: "ScrollEnabler",
                x: r + 16,
                y: a + l + 48,
                height: 64,
                width: 16
            }), e.scrollBlocker && p.push({
                thing: "ScrollBlocker",
                x: r + 32
            }), p
        }, t.prototype.macroTree = function(e, t, n, i, o) {
            var r = e.x || 0,
                a = e.y || 0,
                l = e.width || 24,
                p = [{
                    thing: "TreeTop",
                    x: r,
                    y: a,
                    width: l
                }];
            return l > 16 && p.push({
                thing: "TreeTrunk",
                x: r + 8,
                y: a - 8,
                width: l - 16,
                height: "Infinity",
                groupType: e.solidTrunk ? "Solid" : "Scenery"
            }), p
        }, t.prototype.macroShroom = function(e, t, n, i, o) {
            var r = e.x || 0,
                a = e.y || 0,
                l = e.width || 24,
                p = [{
                    thing: "ShroomTop",
                    x: r,
                    y: a,
                    width: l
                }];
            return l > 16 && p.push({
                thing: "ShroomTrunk",
                x: r + (l - 8) / 2,
                y: a - 8,
                height: 1 / 0,
                groupType: e.solidTrunk ? "Solid" : "Scenery"
            }), p
        }, t.prototype.macroWater = function(e, t, n, i, o) {
            return o.proliferate({
                thing: "Water",
                x: e.x || 0,
                y: (e.y || 0) + 2,
                height: "Infinity",
                macro: void 0
            }, e, !0)
        }, t.prototype.macroCeiling = function(e) {
            return {
                macro: "Fill",
                thing: "Brick",
                x: e.x,
                y: 88,
                xnum: e.width / 8 | 0,
                xwidth: 8
            }
        }, t.prototype.macroBridge = function(e) {
            var t = e.x || 0,
                n = e.y || 0,
                i = Math.max(e.width || 0, 16),
                o = [];
            return e.begin && (i -= 8, o.push({
                thing: "Stone",
                x: t,
                y: n,
                height: "Infinity"
            }), t += 8), e.end && (i -= 8, o.push({
                thing: "Stone",
                x: t + i,
                y: n,
                height: "Infinity"
            })), o.push({
                thing: "BridgeBase",
                x: t,
                y: n,
                width: i
            }), o.push({
                thing: "Railing",
                x: t,
                y: n + 4,
                width: i
            }), o
        }, t.prototype.macroScale = function(e, t, n, i, o) {
            var r = e.x || 0,
                a = e.y || 0,
                l = o.unitsize,
                p = e.widthLeft || 24,
                s = e.widthRight || 24,
                d = e.between || 40,
                c = e.dropLeft || 24,
                u = e.dropRight || 24,
                S = "ScaleCollection--" + [r, a, p, s, c, u].join(",");
            return [{
                thing: "String",
                x: r,
                y: a - 4,
                height: c - 4,
                collectionName: S,
                collectionKey: "stringLeft"
            }, {
                thing: "String",
                x: r + d,
                y: a - 4,
                height: u - 4,
                collectionName: S,
                collectionKey: "stringRight"
            }, {
                thing: "String",
                x: r + 4,
                y: a,
                width: d - 7,
                collectionName: S,
                collectionKey: "stringMiddle"
            }, {
                thing: "StringCornerLeft",
                x: r,
                y: a
            }, {
                thing: "StringCornerRight",
                x: r + d - 4,
                y: a
            }, {
                thing: "Platform",
                x: r - p / 2,
                y: a - c,
                width: p,
                inScale: !0,
                tension: (c - 1.5) * l,
                onThingAdd: o.spawnScalePlatform,
                collectionName: S,
                collectionKey: "platformLeft"
            }, {
                thing: "Platform",
                x: r + d - s / 2,
                y: a - u,
                width: s,
                inScale: !0,
                tension: (u - 1.5) * l,
                onThingAdd: o.spawnScalePlatform,
                collectionName: S,
                collectionKey: "platformRight"
            }]
        }, t.prototype.macroPlatformGenerator = function(e, t, n, i, o) {
            var r, a = [],
                l = e.direction || 1,
                p = l > 0 ? [0, 48] : [8, 56],
                s = e.width || 16,
                d = e.x || 0,
                c = l * o.unitsize * .42;
            for (r = 0; r < p.length; r += 1) a.push({
                thing: "Platform",
                x: d,
                y: p[r],
                width: s,
                yvel: c,
                movement: o.movePlatformSpawn
            });
            return a.push({
                thing: "PlatformString",
                x: d + s / 2 - .5,
                y: o.MapScreener.floor,
                width: 1,
                height: o.MapScreener.height / o.unitsize
            }), a
        }, t.prototype.macroWarpWorld = function(e, t, n, i, o) {
            var r, a = [],
                l = e.x || 0,
                p = e.y || 0,
                s = e.hasOwnProperty("textHeight") ? e.textHeight : 8,
                d = e.warps,
                c = "WarpWorldCollection-" + d.join("."),
                u = [];
            for (a.push({
                    thing: "CustomText",
                    x: l + 8,
                    y: p + s + 56,
                    texts: [{
                        text: "WELCOME TO WARP WORLD!"
                    }],
                    textAttributes: {
                        hidden: !0
                    },
                    collectionName: c,
                    collectionKey: "Welcomer"
                }), a.push({
                    thing: "DetectCollision",
                    x: l + 64,
                    y: p + 174,
                    width: 40,
                    height: 102,
                    activate: o.activateWarpWorld,
                    collectionName: c,
                    collectionKey: "Detector"
                }), r = 0; r < d.length; r += 1) u.push(r), a.push({
                macro: "Pipe",
                x: l + 8 + 32 * r,
                height: 24,
                transport: {
                    map: d[r] + "-1"
                },
                collectionName: c,
                collectionKey: r + "-Pipe"
            }), a.push({
                thing: "Piranha",
                x: l + 12 + 32 * r,
                y: p + 36,
                collectionName: c,
                collectionKey: r + "-Piranha"
            }), a.push({
                thing: "CustomText",
                x: l + 14 + 32 * r,
                y: p + 32 + s,
                texts: [{
                    text: String(d[r])
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: c,
                collectionKey: r + "-Text"
            });
            if (1 === d.length)
                for (r = 2; r < a.length; r += 1) a[r].x += 32;
            return a
        }, t.prototype.macroCheepsStart = function(e, t, n, i, o) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: o.MapScreener.floor,
                width: e.width || 8,
                height: o.MapScreener.height / o.unitsize,
                activate: o.activateCheepsStart
            }
        }, t.prototype.macroCheepsStop = function(e, t, n, i, o) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: o.MapScreener.floor,
                width: e.width || 8,
                height: o.MapScreener.height / o.unitsize,
                activate: o.activateCheepsStop
            }
        }, t.prototype.macroBulletBillsStart = function(e, t, n, i, o) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: o.MapScreener.floor,
                width: e.width || 8,
                height: o.MapScreener.height / o.unitsize,
                activate: o.activateBulletBillsStart
            }
        }, t.prototype.macroBulletBillsStop = function(e, t, n, i, o) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: o.MapScreener.floor,
                width: e.width || 8,
                height: o.MapScreener.height / o.unitsize,
                activate: o.activateBulletBillsStop
            }
        }, t.prototype.macroLakituStop = function(e, t, n, i, o) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: o.MapScreener.floor,
                width: e.width || 8,
                height: o.MapScreener.height / o.unitsize,
                activate: o.activateLakituStop
            }
        }, t.prototype.macroCastleSmall = function(e, t, n, i, o) {
            var r, a, l = [],
                p = e.x || 0,
                s = e.y || 0;
            for (r = 0; 2 > r; r += 1)
                for (l.push({
                        thing: "BrickHalf",
                        x: p + 8 * r,
                        y: s + 4,
                        position: "end"
                    }), a = 1; 3 > a; a += 1) l.push({
                    thing: "BrickPlain",
                    x: p + 8 * r,
                    y: s + 4 + 8 * a,
                    position: "end"
                });
            for (r = 0; 2 > r; r += 1)
                for (l.push({
                        thing: "BrickHalf",
                        x: p + 24 + 8 * r,
                        y: s + 4,
                        position: "end"
                    }), a = 1; 3 > a; a += 1) l.push({
                    thing: "BrickPlain",
                    x: p + 24 + 8 * r,
                    y: s + 4 + 8 * a,
                    position: "end"
                });
            for (l.push({
                    thing: "CastleRailing",
                    x: p,
                    y: s + 24,
                    position: "end"
                }), r = 0; 3 > r; r += 1) l.push({
                thing: "CastleRailingFilled",
                x: p + 8 * (r + 1),
                y: s + 24,
                position: "end"
            });
            for (l.push({
                    thing: "CastleRailing",
                    x: p + 32,
                    y: s + 24,
                    position: "end"
                }), r = 0; 3 > r; r += 1) l.push({
                thing: "CastleRailing",
                x: p + 8 * (r + 1),
                y: s + 40,
                position: "end"
            });
            for (r = 0; 2 > r; r += 1) l.push({
                thing: "CastleTop",
                x: p + 8 + 12 * r,
                y: s + 36,
                position: "end"
            });
            return l.push({
                thing: "CastleDoor",
                x: p + 16,
                y: s + 20,
                position: "end"
            }), e.transport && l.push({
                thing: "DetectCollision",
                x: p + 24,
                y: s + 16,
                height: 16,
                activate: o.collideCastleDoor,
                transport: e.transport,
                position: "end"
            }), l
        }, t.prototype.macroCastleLarge = function(e, t, n, i, o) {
            var r, a, l = [],
                p = e.x || 0,
                s = e.y || 0;
            for (l.push({
                    macro: "CastleSmall",
                    x: p + 16,
                    y: s + 48
                }), r = 0; 2 > r; r += 1) l.push({
                thing: "CastleWall",
                x: p + 8 * r,
                y: s + 48
            });
            for (r = 0; 3 > r; r += 1)
                for (l.push({
                        thing: "CastleDoor",
                        x: p + 16 + 16 * r,
                        y: s + 20,
                        position: "end"
                    }), a = 0; 2 > a; a += 1) l.push({
                    thing: "BrickPlain",
                    x: p + 16 + 16 * r,
                    y: s + 28 + 8 * a
                }), l.push({
                    thing: "BrickHalf",
                    x: p + 16 + 16 * r,
                    y: s + 40 + 4 * a
                });
            for (r = 0; 2 > r; r += 1) {
                for (a = 0; 3 > a; a += 1) l.push({
                    thing: "BrickPlain",
                    x: p + 24 + 16 * r,
                    y: s + 8 + 8 * a
                });
                l.push({
                    thing: "CastleDoor",
                    x: p + 24 + 16 * r,
                    y: s + 44
                })
            }
            for (r = 0; 5 > r; r += 1) l.push({
                thing: "CastleRailingFilled",
                x: p + 16 + 8 * r,
                y: s + 48
            });
            for (a = e.hasOwnProperty("walls") ? e.walls : 2, r = 0; a > r; r += 1) l.push({
                thing: "CastleWall",
                x: p + 56 + 8 * r,
                y: s + 48,
                position: "end"
            });
            return e.transport && l.push({
                thing: "DetectCollision",
                x: p + 24,
                y: s + 16,
                height: 16,
                activate: o.collideCastleDoor,
                transport: e.transport,
                position: "end"
            }), l
        }, t.prototype.macroStartInsideCastle = function(e) {
            var t = e.x || 0,
                n = e.y || 0,
                i = (e.width || 0) - 40,
                o = [{
                    thing: "Stone",
                    x: t,
                    y: n + 48,
                    width: 24,
                    height: 1 / 0
                }, {
                    thing: "Stone",
                    x: t + 24,
                    y: n + 40,
                    width: 8,
                    height: 1 / 0
                }, {
                    thing: "Stone",
                    x: t + 32,
                    y: n + 32,
                    width: 8,
                    height: 1 / 0
                }];
            return i > 0 && o.push({
                macro: "Floor",
                x: t + 40,
                y: n + 24,
                width: i
            }), o
        }, t.prototype.macroEndOutsideCastle = function(e, n, i, o, r) {
            var a, l = e.x || 0,
                p = e.y || 0,
                s = "EndOutsideCastle-" + [e.x, e.y, e.large].join(",");
            return a = [{
                thing: "DetectCollision",
                x: l,
                y: p + 108,
                height: 100,
                activate: t.prototype.collideFlagpole,
                activateFail: t.prototype.killNormal,
                noActivateDeath: !0,
                collectionName: s,
                collectionKey: "DetectCollision"
            }, {
                thing: "Flag",
                x: l - 4.5,
                y: p + 79.5,
                collectionName: s,
                collectionKey: "Flag"
            }, {
                thing: "FlagTop",
                x: l + 1.5,
                y: p + 84,
                collectionName: s,
                collectionKey: "FlagTop"
            }, {
                thing: "FlagPole",
                x: l + 3,
                y: p + 80,
                collectionName: s,
                collectionKey: "FlagPole"
            }, {
                thing: "Stone",
                x: l,
                y: p + 8,
                collectionName: s,
                collectionKey: "FlagPole"
            }], e.large ? a.push({
                macro: "CastleLarge",
                x: l + (e.castleDistance || 24),
                y: p,
                transport: e.transport,
                walls: e.walls || 8
            }) : a.push({
                macro: "CastleSmall",
                x: l + (e.castleDistance || 32),
                y: p,
                transport: e.transport
            }), a
        }, t.prototype.macroEndInsideCastle = function(e, t, n, i, o) {
            var r, a, l, p = e.x || 0,
                s = e.y || 0,
                d = e.npc || "Toad";
            return "Toad" === d ? (l = ["1", "2"], a = [{
                thing: "CustomText",
                x: p + 164,
                y: s + 64,
                texts: [{
                    text: "THANK YOU MARIO!"
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: "endInsideCastleText",
                collectionKey: "1"
            }, {
                thing: "CustomText",
                x: p + 152,
                y: s + 48,
                texts: [{
                    text: "BUT OUR PRINCESS IS IN"
                }, {
                    text: "ANOTHER CASTLE!"
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: "endInsideCastleText",
                collectionKey: "2"
            }]) : "Peach" === d && (l = ["1", "2", "3"], a = [{
                thing: "CustomText",
                x: p + 164,
                y: s + 64,
                texts: [{
                    text: "THANK YOU MARIO!"
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: "endInsideCastleText",
                collectionKey: "1"
            }, {
                thing: "CustomText",
                x: p + 152,
                y: s + 48,
                texts: [{
                    text: "YOUR QUEST IS OVER.",
                    offset: 12
                }, {
                    text: "WE PRESENT YOU A NEW QUEST."
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: "endInsideCastleText",
                collectionKey: "2"
            }, {
                thing: "CustomText",
                x: p + 152,
                y: 32,
                texts: [{
                    text: "PRESS BUTTON B",
                    offset: 8
                }, {
                    text: "TO SELECT A WORLD"
                }],
                textAttributes: {
                    hidden: !0
                },
                collectionName: "endInsideCastleText",
                collectionKey: "3"
            }]), r = [{
                thing: "Stone",
                x: p,
                y: s + 88,
                width: 256
            }, {
                macro: "Water",
                x: p,
                y: s,
                width: 104
            }, {
                thing: "CastleBridge",
                x: p,
                y: s + 24,
                width: 104
            }, {
                thing: "Bowser",
                x: p + 69,
                y: s + 42,
                hard: e.hard,
                spawnType: e.spawnType || "Goomba",
                throwing: e.throwing
            }, {
                thing: "CastleChain",
                x: p + 96,
                y: s + 32
            }, {
                thing: "CastleAxe",
                x: p + 104,
                y: s + 40
            }, {
                thing: "ScrollBlocker",
                x: p + 112
            }, {
                macro: "Floor",
                x: p + 104,
                y: s,
                width: 152
            }, {
                thing: "Stone",
                x: p + 104,
                y: s + 32,
                width: 24,
                height: 32
            }, {
                thing: "Stone",
                x: p + 112,
                y: s + 80,
                width: 16,
                height: 24
            }, {
                thing: "DetectCollision",
                x: p + 180,
                activate: o.collideCastleNPC,
                transport: e.transport,
                collectionName: "endInsideCastleText",
                collectionKey: "npc",
                collectionKeys: l
            }, {
                thing: d,
                x: p + 200,
                y: 13
            }, {
                thing: "ScrollBlocker",
                x: p + 256
            }], e.topScrollEnabler && (r.push({
                thing: "ScrollEnabler",
                x: p + 96,
                y: s + 140,
                height: 52,
                width: 16
            }), r.push({
                thing: "ScrollEnabler",
                x: p + 240,
                y: s + 140,
                height: 52,
                width: 16
            })), r.push.apply(r, a), r
        }, t.prototype.macroSection = function(e, t, n, i, o) {
            return {
                thing: "DetectSpawn",
                x: e.x || 0,
                y: e.y || 0,
                activate: o.activateSectionBefore,
                section: e.section || 0
            }
        }, t.prototype.macroSectionPass = function(e) {
            return {
                thing: "DetectCollision",
                x: e.x || 0,
                y: e.y || 0,
                width: e.width || 8,
                height: e.height || 8,
                activate: function(e) {
                    e.FSM.AudioPlayer.play("Coin"), e.FSM.MapScreener.sectionPassed = !0
                }
            }
        }, t.prototype.macroSectionFail = function(e) {
            return [{
                thing: "DetectCollision",
                x: e.x,
                y: e.y,
                width: e.width || 8,
                height: e.height || 8,
                activate: function(e) {
                    e.FSM.AudioPlayer.play("Fail"), e.FSM.MapScreener.sectionPassed = !1
                }
            }]
        }, t.prototype.macroSectionDecider = function(e) {
            return {
                thing: "DetectSpawn",
                x: e.x || 0,
                y: e.y || 0,
                activate: function(t) {
                    t.FSM.MapScreener.sectionPassed ? t.section = e.pass || 0 : t.section = e.fail || 0, t.FSM.activateSectionBefore(t)
                }
            }
        }, t.prototype.ensureCorrectCaller = function(e) {
            if (!(e instanceof t)) throw new Error("A function requires the scope ('this') to be the manipulated PlayMarioJas object. Unfortunately, 'this' is a " + typeof this + ".");
            return e
        }, t.settings = {
            audio: void 0,
            collisions: void 0,
            devices: void 0,
            editor: void 0,
            generator: void 0,
            groups: void 0,
            events: void 0,
            help: void 0,
            input: void 0,
            math: void 0,
            maps: void 0,
            mods: void 0,
            objects: void 0,
            quadrants: void 0,
            renderer: void 0,
            runner: void 0,
            scenes: void 0,
            sprites: void 0,
            items: void 0,
            touch: void 0,
            ui: void 0
        }, t.unitsize = 4, t.scale = 2, t.gravity = Math.round(12 * t.unitsize) / 100, t.pointLevels = [100, 200, 400, 500, 800, 1e3, 2e3, 4e3, 5e3, 8e3], t.customTextMappings = {
            " ": "Space",
            ".": "Period",
            "!": "ExclamationMark",
            ":": "Colon",
            "/": "Slash",
            "©": "Copyright"
        }, t
    }(GameStartr.GameStartr);
    e.PlayMarioJas = t
}(PlayMarioJas || (PlayMarioJas = {}));