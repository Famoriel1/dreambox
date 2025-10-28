(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.toggleBtn_btnOn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape.setTransform(15.0467,15.0067,0.9333,0.9333);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape_2.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toggleBtn_btnOn, new cjs.Rectangle(0,0,31,31), null);


(lib.toggleBtn_btnOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape.setTransform(15.0467,15.0067,0.9333,0.9333);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(-13,15).curveTo(-15,15,-15,13).lineTo(-15,-13).curveTo(-15,-15,-13,-15).lineTo(13,-15).curveTo(15,-15,15,-13).lineTo(15,13).curveTo(15,15,13,15).closePath();
	this.shape_2.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toggleBtn_btnOff, new cjs.Rectangle(0,0,31,31), null);


(lib.toggleBtn_baseOn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-32.5,14).curveTo(-34.5,14,-34.5,12).lineTo(-34.5,-12).curveTo(-34.5,-14,-32.5,-14).lineTo(32.5,-14).curveTo(34.5,-14,34.5,-12).lineTo(34.5,12).curveTo(34.5,14,32.5,14).closePath();
	this.shape.setTransform(35.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// base
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_3")).beginStroke().moveTo(-33,14.5).curveTo(-35,14.5,-35,12.5).lineTo(-35,-12.5).curveTo(-35,-14.5,-33,-14.5).lineTo(33,-14.5).curveTo(35,-14.5,35,-12.5).lineTo(35,12.5).curveTo(35,14.5,33,14.5).closePath();
	this.shape_1.setTransform(35,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toggleBtn_baseOn, new cjs.Rectangle(0,0,70,29), null);


(lib.toggleBtn_baseOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_2")).beginStroke().moveTo(-32.5,14).curveTo(-34.5,14,-34.5,12).lineTo(-34.5,-12).curveTo(-34.5,-14,-32.5,-14).lineTo(32.5,-14).curveTo(34.5,-14,34.5,-12).lineTo(34.5,12).curveTo(34.5,14,32.5,14).closePath();
	this.shape.setTransform(35.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// base
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_3")).beginStroke().moveTo(-33,14.5).curveTo(-35,14.5,-35,12.5).lineTo(-35,-12.5).curveTo(-35,-14.5,-33,-14.5).lineTo(33,-14.5).curveTo(35,-14.5,35,-12.5).lineTo(35,12.5).curveTo(35,14.5,33,14.5).closePath();
	this.shape_1.setTransform(35,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toggleBtn_baseOff, new cjs.Rectangle(0,0,70,29), null);


(lib.SettingsSoundIcn_On = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-15,25).curveTo(-19.2,25,-22.1,22.1).curveTo(-25,19.2,-25,15).lineTo(-25,-15).curveTo(-25,-19.1,-22.1,-22.1).curveTo(-19.2,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22.1,-22.1).curveTo(25,-19.1,25,-15).lineTo(25,15).curveTo(25,19.2,22.1,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-19.9).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,18,-20,19.9).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,19.9,19.9).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,19.9,-19.9).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-19.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-0.9,12.8).lineTo(-8,5.6).lineTo(-13.6,5.6).curveTo(-14.1,5.6,-14.5,5.2).curveTo(-15,4.7,-15,4.2).lineTo(-15,-4.2).curveTo(-15,-4.7,-14.5,-5.2).curveTo(-14.1,-5.6,-13.6,-5.6).lineTo(-8,-5.6).lineTo(-0.9,-12.8).curveTo(-0.4,-13.2,-0,-13.2).curveTo(0.5,-13.2,1,-12.8).curveTo(1.4,-12.3,1.4,-11.8).lineTo(1.4,11.8).curveTo(1.4,12.3,1,12.8).curveTo(0.5,13.2,-0,13.2).curveTo(-0.4,13.2,-0.9,12.8).closePath().moveTo(6.9,9.9).curveTo(6.5,9.5,6.5,9).curveTo(6.5,8.1,7.4,7.7).lineTo(9,6.7).curveTo(10.5,5.5,11.4,3.8).curveTo(12.3,2,12.3,0).curveTo(12.3,-2,11.4,-3.8).curveTo(10.5,-5.5,9,-6.7).lineTo(7.4,-7.7).curveTo(6.5,-8.1,6.5,-9).curveTo(6.5,-9.5,6.9,-9.9).curveTo(7.3,-10.4,7.8,-10.4).lineTo(8.4,-10.3).curveTo(11.5,-8.9,13.2,-6.1).curveTo(15,-3.3,15,0).curveTo(15,3.3,13.2,6.2).curveTo(11.4,8.9,8.4,10.3).lineTo(7.9,10.4).curveTo(7.4,10.4,6.9,9.9).closePath().moveTo(4.8,4.8).curveTo(4.3,4.5,4.4,3.8).curveTo(4.4,3.4,4.7,3.1).curveTo(4.9,2.7,5.3,2.5).lineTo(5.9,2).curveTo(6.3,1.7,6.6,1.2).curveTo(6.8,0.7,6.8,0).curveTo(6.8,-0.7,6.6,-1.2).curveTo(6.3,-1.7,5.9,-2).lineTo(5.3,-2.5).lineTo(4.7,-3).curveTo(4.4,-3.4,4.4,-3.8).curveTo(4.3,-4.4,4.8,-4.8).curveTo(5.2,-5.2,5.7,-5.2).lineTo(6.3,-5.1).curveTo(7.8,-4.5,8.6,-3.1).curveTo(9.5,-1.6,9.5,0).curveTo(9.5,1.7,8.6,3.1).curveTo(7.8,4.5,6.3,5.1).lineTo(5.7,5.2).curveTo(5.2,5.2,4.8,4.8).closePath();
	this.shape_1.setTransform(-0.05,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsSoundIcn_On, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SettingsSoundIcn_Off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-15,25).curveTo(-19.2,25,-22.1,22.1).curveTo(-25,19.2,-25,15).lineTo(-25,-15).curveTo(-25,-19.1,-22.1,-22.1).curveTo(-19.2,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22.1,-22.1).curveTo(25,-19.1,25,-15).lineTo(25,15).curveTo(25,19.2,22.1,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-19.9).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,18,-20,19.9).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,19.9,19.9).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,19.9,-19.9).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-19.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// slash
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-23,20.9).lineTo(20.9,-23).curveTo(22.1,-22.1,23,-20.9).lineTo(-20.9,23).curveTo(-22.1,22.1,-23,20.9).closePath();
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// icon
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-0.9,12.8).lineTo(-8,5.6).lineTo(-13.6,5.6).curveTo(-14.1,5.6,-14.5,5.2).curveTo(-15,4.7,-15,4.2).lineTo(-15,-4.2).curveTo(-15,-4.7,-14.5,-5.2).curveTo(-14.1,-5.6,-13.6,-5.6).lineTo(-8,-5.6).lineTo(-0.9,-12.8).curveTo(-0.4,-13.2,-0,-13.2).curveTo(0.5,-13.2,1,-12.8).curveTo(1.4,-12.3,1.4,-11.8).lineTo(1.4,11.8).curveTo(1.4,12.3,1,12.8).curveTo(0.5,13.2,-0,13.2).curveTo(-0.4,13.2,-0.9,12.8).closePath().moveTo(6.9,9.9).curveTo(6.5,9.5,6.5,9).curveTo(6.5,8.1,7.4,7.7).lineTo(9,6.7).curveTo(10.5,5.5,11.4,3.8).curveTo(12.3,2,12.3,0).curveTo(12.3,-2,11.4,-3.8).curveTo(10.5,-5.5,9,-6.7).lineTo(7.4,-7.7).curveTo(6.5,-8.1,6.5,-9).curveTo(6.5,-9.5,6.9,-9.9).curveTo(7.3,-10.4,7.8,-10.4).lineTo(8.4,-10.3).curveTo(11.5,-8.9,13.2,-6.1).curveTo(15,-3.3,15,0).curveTo(15,3.3,13.2,6.2).curveTo(11.4,8.9,8.4,10.3).lineTo(7.9,10.4).curveTo(7.4,10.4,6.9,9.9).closePath().moveTo(4.8,4.8).curveTo(4.3,4.5,4.4,3.8).curveTo(4.4,3.4,4.7,3.1).curveTo(4.9,2.7,5.3,2.5).lineTo(5.9,2).curveTo(6.3,1.7,6.6,1.2).curveTo(6.8,0.7,6.8,0).curveTo(6.8,-0.7,6.6,-1.2).curveTo(6.3,-1.7,5.9,-2).lineTo(5.3,-2.5).lineTo(4.7,-3).curveTo(4.4,-3.4,4.4,-3.8).curveTo(4.3,-4.4,4.8,-4.8).curveTo(5.2,-5.2,5.7,-5.2).lineTo(6.3,-5.1).curveTo(7.8,-4.5,8.6,-3.1).curveTo(9.5,-1.6,9.5,0).curveTo(9.5,1.7,8.6,3.1).curveTo(7.8,4.5,6.3,5.1).lineTo(5.7,5.2).curveTo(5.2,5.2,4.8,4.8).closePath();
	this.shape_2.setTransform(-0.05,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsSoundIcn_Off, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SettingsMusicIcn_On = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-15,25).curveTo(-19.1,25,-22.1,22.1).curveTo(-25,19.1,-25,15).lineTo(-25,-15).curveTo(-25,-19.2,-22.1,-22.1).curveTo(-19.1,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22,-22.1).curveTo(25,-19.1,25,-15).lineTo(25,15).curveTo(25,19.1,22,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-20).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,17.9,-20,20).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,20,20).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,20,-20).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-20).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-12.6,16.2).curveTo(-14.2,14.6,-14.2,12.3).curveTo(-14.2,10.1,-12.6,8.5).curveTo(-11,6.9,-8.8,6.9).lineTo(-7.7,7).lineTo(-7.7,-8.8).curveTo(-7.7,-9.8,-7.1,-10.7).curveTo(-6.5,-11.5,-5.5,-11.9).lineTo(9.8,-17.6).curveTo(11.4,-18.2,12.8,-17.2).curveTo(14.2,-16.2,14.2,-14.5).lineTo(14.2,5.8).curveTo(14.2,8,12.6,9.6).curveTo(11,11.2,8.8,11.2).curveTo(6.5,11.2,4.9,9.6).curveTo(3.3,8,3.3,5.8).curveTo(3.3,3.5,4.9,1.9).curveTo(6.5,0.3,8.8,0.3).lineTo(9.8,0.4).lineTo(9.8,-9.8).lineTo(9.7,-9.9).lineTo(-3.2,-5.1).lineTo(-3.3,-5).lineTo(-3.3,12.3).curveTo(-3.3,14.6,-4.9,16.2).curveTo(-6.5,17.8,-8.8,17.8).curveTo(-11,17.8,-12.6,16.2).closePath();
	this.shape_1.setTransform(-0.025,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsMusicIcn_On, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SettingsMusicIcn_Off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-15,25).curveTo(-19.2,25,-22.1,22.1).curveTo(-25,19.2,-25,15).lineTo(-25,-15).curveTo(-25,-19.2,-22.1,-22).curveTo(-19.2,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22.1,-22).curveTo(25,-19.1,25,-15).lineTo(25,15).curveTo(25,19.2,22.1,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-20).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,18,-20,19.9).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,19.9,19.9).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,19.9,-20).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-20).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// slash
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-23,20.9).lineTo(20.9,-23).curveTo(22.1,-22.1,23,-20.9).lineTo(-20.9,23).curveTo(-22.1,22.1,-23,20.9).closePath();
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// icon
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-12.6,16.2).curveTo(-14.2,14.6,-14.2,12.3).curveTo(-14.2,10.1,-12.6,8.5).curveTo(-11,6.9,-8.8,6.9).lineTo(-7.7,7).lineTo(-7.7,-8.8).curveTo(-7.7,-9.8,-7.1,-10.7).curveTo(-6.5,-11.5,-5.5,-11.9).lineTo(9.8,-17.6).curveTo(11.4,-18.2,12.8,-17.2).curveTo(14.2,-16.2,14.2,-14.5).lineTo(14.2,5.8).curveTo(14.2,8,12.6,9.6).curveTo(11,11.2,8.8,11.2).curveTo(6.5,11.2,4.9,9.6).curveTo(3.3,8,3.3,5.8).curveTo(3.3,3.5,4.9,1.9).curveTo(6.5,0.3,8.8,0.3).lineTo(9.8,0.4).lineTo(9.8,-9.8).lineTo(9.7,-9.9).lineTo(-3.2,-5.1).lineTo(-3.3,-5).lineTo(-3.3,12.3).curveTo(-3.3,14.6,-4.9,16.2).curveTo(-6.5,17.8,-8.8,17.8).curveTo(-11,17.8,-12.6,16.2).closePath();
	this.shape_2.setTransform(-0.025,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsMusicIcn_Off, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SettingsCCIcn_On = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-15,25).curveTo(-19.2,25,-22.1,22.1).curveTo(-25,19.2,-25,15).lineTo(-25,-15).curveTo(-25,-19.2,-22.1,-22.1).curveTo(-19.2,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22.1,-22.1).curveTo(25,-19.2,25,-15).lineTo(25,15).curveTo(25,19.2,22.1,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-20).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,17.9,-20,19.9).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,19.9,19.9).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,19.9,-20).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-20).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-4.6,6.8).curveTo(-6,5.7,-6.9,3.9).curveTo(-7.7,2.1,-7.7,-0).curveTo(-7.7,-2.1,-6.9,-3.9).curveTo(-6,-5.7,-4.6,-6.8).curveTo(-1.9,-9,1.2,-9).curveTo(2.4,-9,3.6,-8.6).curveTo(4.7,-8.4,5.4,-8).lineTo(6.8,-7).curveTo(7.7,-6.3,7.7,-5.5).curveTo(7.7,-4.7,7,-3.5).curveTo(5.8,-1.7,4.7,-1.7).curveTo(4,-1.7,3,-2.4).curveTo(2.4,-3,1.2,-3).curveTo(0.2,-3,-0.8,-2.2).curveTo(-1.8,-1.4,-1.8,0).curveTo(-1.8,1.5,-0.8,2.3).curveTo(0.1,3,1.1,3).curveTo(2.2,3,3.1,2.4).curveTo(3.9,1.8,4.5,1.8).curveTo(5.6,1.8,6.9,3.6).curveTo(7.7,4.5,7.7,5.3).curveTo(7.7,6.6,5.9,7.7).curveTo(4,9,1.3,9).curveTo(-1.8,9,-4.6,6.8).closePath();
	this.shape_1.setTransform(9.225,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-4.6,6.8).curveTo(-6,5.7,-6.8,3.9).curveTo(-7.7,2.1,-7.7,-0).curveTo(-7.7,-2.2,-6.8,-3.9).curveTo(-6,-5.7,-4.6,-6.8).curveTo(-1.9,-9,1.2,-9).curveTo(2.4,-9,3.7,-8.6).curveTo(4.6,-8.4,5.4,-8).lineTo(6.9,-7).curveTo(7.7,-6.3,7.7,-5.5).curveTo(7.7,-4.7,7,-3.5).curveTo(5.8,-1.7,4.7,-1.7).curveTo(4,-1.7,3,-2.4).curveTo(2.4,-3,1.2,-3).curveTo(0.2,-3,-0.8,-2.2).curveTo(-1.8,-1.4,-1.8,0).curveTo(-1.8,1.5,-0.8,2.3).curveTo(0.1,3,1.1,3).curveTo(2.2,3,3.1,2.4).curveTo(3.9,1.8,4.5,1.8).curveTo(5.6,1.8,7,3.6).curveTo(7.7,4.6,7.7,5.3).curveTo(7.7,6.6,5.9,7.7).curveTo(4,9,1.3,9).curveTo(-1.8,9,-4.6,6.8).closePath();
	this.shape_2.setTransform(-9.275,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsCCIcn_On, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SettingsCCIcn_Off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-15,25).curveTo(-19.2,25,-22.1,22.1).curveTo(-25,19.2,-25,15).lineTo(-25,-15).curveTo(-25,-19.2,-22.1,-22.1).curveTo(-19.2,-25,-15,-25).lineTo(15,-25).curveTo(19.2,-25,22.1,-22.1).curveTo(25,-19.2,25,-15).lineTo(25,15).curveTo(25,19.2,22.1,22.1).curveTo(19.2,25,15,25).closePath().moveTo(-20,-20).curveTo(-22,-17.9,-22,-15).lineTo(-22,15).curveTo(-22,17.9,-20,19.9).curveTo(-17.9,22,-15,22).lineTo(15,22).curveTo(17.9,22,19.9,19.9).curveTo(22,17.9,22,15).lineTo(22,-15).curveTo(22,-17.9,19.9,-20).curveTo(17.9,-22,15,-22).lineTo(-15,-22).curveTo(-17.9,-22,-20,-20).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// slash
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-23,20.9).lineTo(20.9,-23).curveTo(22.1,-22.2,23,-21).lineTo(-20.9,23.1).curveTo(-22,22.2,-23,20.9).closePath();
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// icon
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-4.6,6.8).curveTo(-6,5.7,-6.9,3.9).curveTo(-7.7,2.1,-7.7,-0).curveTo(-7.7,-2.1,-6.9,-3.9).curveTo(-6,-5.7,-4.6,-6.8).curveTo(-1.9,-9,1.2,-9).curveTo(2.4,-9,3.6,-8.6).curveTo(4.7,-8.4,5.4,-8).lineTo(6.8,-7).curveTo(7.7,-6.3,7.7,-5.5).curveTo(7.7,-4.7,7,-3.5).curveTo(5.8,-1.7,4.7,-1.7).curveTo(4,-1.7,3,-2.4).curveTo(2.4,-3,1.2,-3).curveTo(0.2,-3,-0.8,-2.2).curveTo(-1.8,-1.4,-1.8,0).curveTo(-1.8,1.5,-0.8,2.3).curveTo(0.1,3,1.1,3).curveTo(2.2,3,3.1,2.4).curveTo(3.9,1.8,4.5,1.8).curveTo(5.6,1.8,6.9,3.6).curveTo(7.7,4.5,7.7,5.3).curveTo(7.7,6.6,5.9,7.7).curveTo(4,9,1.3,9).curveTo(-1.8,9,-4.6,6.8).closePath();
	this.shape_2.setTransform(9.225,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_surface_5")).beginStroke().moveTo(-4.6,6.8).curveTo(-6,5.7,-6.8,3.9).curveTo(-7.7,2.1,-7.7,-0).curveTo(-7.7,-2.2,-6.8,-3.9).curveTo(-6,-5.7,-4.6,-6.8).curveTo(-1.9,-9,1.2,-9).curveTo(2.4,-9,3.7,-8.6).curveTo(4.6,-8.4,5.4,-8).lineTo(6.9,-7).curveTo(7.7,-6.3,7.7,-5.5).curveTo(7.7,-4.7,7,-3.5).curveTo(5.8,-1.7,4.7,-1.7).curveTo(4,-1.7,3,-2.4).curveTo(2.4,-3,1.2,-3).curveTo(0.2,-3,-0.8,-2.2).curveTo(-1.8,-1.4,-1.8,0).curveTo(-1.8,1.5,-0.8,2.3).curveTo(0.1,3,1.1,3).curveTo(2.2,3,3.1,2.4).curveTo(3.9,1.8,4.5,1.8).curveTo(5.6,1.8,7,3.6).curveTo(7.7,4.6,7.7,5.3).curveTo(7.7,6.6,5.9,7.7).curveTo(4,9,1.3,9).curveTo(-1.8,9,-4.6,6.8).closePath();
	this.shape_3.setTransform(-9.275,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsCCIcn_Off, new cjs.Rectangle(-25,-25,50,50), null);


(lib.header = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {header_en:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.lblSettingsHeader = new cjs.Text("Settings", "bold 36px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_title"));
	this.lblSettingsHeader.name = "lblSettingsHeader";
	this.lblSettingsHeader.textAlign = "center";
	this.lblSettingsHeader.lineHeight = 48;
	this.lblSettingsHeader.lineWidth = 467;
	this.lblSettingsHeader.parent = this;
	this.lblSettingsHeader.setTransform(134.55,52.7);

	this.timeline.addTween(cjs.Tween.get(this.lblSettingsHeader).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(-101,50.7,471.1,58.3), null);


(lib.play_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-12.5,12.4).curveTo(-17.5,7.3,-17.5,-0).curveTo(-17.5,-7.3,-12.5,-12.5).curveTo(-7.3,-17.5,-0,-17.5).curveTo(7.3,-17.5,12.4,-12.5).curveTo(17.5,-7.3,17.5,-0).curveTo(17.5,7.3,12.4,12.4).curveTo(7.3,17.5,-0,17.5).curveTo(-7.3,17.5,-12.5,12.4).closePath().moveTo(-4.2,-8.2).curveTo(-4.6,-8.1,-5,-7.8).curveTo(-5.3,-7.4,-5.3,-7).lineTo(-5.3,7.1).curveTo(-5.3,7.5,-5,7.9).curveTo(-4.6,8.2,-4.2,8.2).curveTo(-3.6,8.3,-3.3,8.1).lineTo(6.9,1).curveTo(7.2,0.8,7.3,0.4).curveTo(7.4,0,7.3,-0.3).curveTo(7.2,-0.8,6.9,-1).lineTo(-3.3,-8).lineTo(-3.7,-8.2).lineTo(-4,-8.2).lineTo(-4.2,-8.2).closePath();
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.play_btn, new cjs.Rectangle(0,0,35,35), null);


(lib.locator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Avatar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,17.3,29.300000000000004,30.499999999999996);


(lib.arrowGlyph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {left:0,right:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-10.5,-0).lineTo(5.7,-11).lineTo(5.7,-5.4).lineTo(10.5,-5.4).lineTo(10.5,5.5).lineTo(5.7,5.5).lineTo(5.7,11).closePath();
	this.shape.setTransform(8.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-5.7,5.5).lineTo(-10.5,5.5).lineTo(-10.5,-5.4).lineTo(-5.7,-5.4).lineTo(-5.7,-11).lineTo(10.5,-0).lineTo(-5.7,11).closePath();
	this.shape_1.setTransform(11.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,24,22);


(lib.voicePagination_btn_R = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:1,Down:2,Highlight:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.arrowGlyph("single",1);
	this.instance.setTransform(19.3,21.15,0.9876,0.9865,0,0,0,8.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.1,regY:11.2,scaleX:1.1154,scaleY:1.1201,x:19.25,y:21.55},0).wait(1).to({scaleX:0.8963,scaleY:0.8964,x:19.45,y:21.05},0).wait(1).to({regX:8.2,regY:11.3,scaleX:0.9876,scaleY:0.9865,x:19.3,y:21.15},0).wait(1));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.platform_white_alpha_20).beginStroke().moveTo(-17.1,19.1).curveTo(-19.1,19.1,-19.1,17.1).lineTo(-19.1,-17.1).curveTo(-19.1,-19.1,-17.1,-19.1).lineTo(17.1,-19.1).curveTo(19.1,-19.1,19.1,-17.1).lineTo(19.1,17.1).curveTo(19.1,19.1,17.1,19.1).closePath();
	this.shape.setTransform(21.0046,20.9907,1.1013,1.0987);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.platform_black_alpha_20).beginStroke().moveTo(-17,19).curveTo(-19,19,-19,17).lineTo(-19,-17).curveTo(-19,-19,-17,-19).lineTo(17,-19).curveTo(19,-19,19,-17).lineTo(19,17).curveTo(19,19,17,19).closePath();
	this.shape_1.setTransform(20.9751,20.9776,0.9211,0.9211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-16.5,18.5).curveTo(-18.5,18.5,-18.5,16.5).lineTo(-18.5,-16.5).curveTo(-18.5,-18.5,-16.5,-18.5).lineTo(16.5,-18.5).curveTo(18.5,-18.5,18.5,-16.5).lineTo(18.5,16.5).curveTo(18.5,18.5,16.5,18.5).closePath();
	this.shape_2.setTransform(21,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-17.1,19.1).curveTo(-19.1,19.1,-19.1,17.1).lineTo(-19.1,-17.1).curveTo(-19.1,-19.1,-17.1,-19.1).lineTo(17.1,-19.1).curveTo(19.1,-19.1,19.1,-17.1).lineTo(19.1,17.1).curveTo(19.1,19.1,17.1,19.1).closePath();
	this.shape_3.setTransform(21.0046,20.9907,1.1013,1.0987);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-17,19).curveTo(-19,19,-19,17).lineTo(-19,-17).curveTo(-19,-19,-17,-19).lineTo(17,-19).curveTo(19,-19,19,-17).lineTo(19,17).curveTo(19,19,17,19).closePath();
	this.shape_4.setTransform(20.9751,20.9776,0.9211,0.9211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// shadow
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill(DBLColorManager.platform_black_alpha_30).beginStroke().moveTo(-16.5,18.5).curveTo(-18.5,18.5,-18.5,16.5).lineTo(-18.5,-16.5).curveTo(-18.5,-18.5,-16.5,-18.5).lineTo(16.5,-18.5).curveTo(18.5,-18.5,18.5,-16.5).lineTo(18.5,16.5).curveTo(18.5,18.5,16.5,18.5).closePath();
	this.shape_5.setTransform(22.75,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(3));

	// highlight
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke(DBLColorManager.platform_highlight_outer).setStrokeStyle(1,1,1).moveTo(16.5,-20.5).lineTo(-16.5,-20.5).curveTo(-20.5,-20.5,-20.5,-16.5).lineTo(-20.5,16.5).curveTo(-20.5,20.5,-16.5,20.5).lineTo(16.5,20.5).curveTo(20.5,20.5,20.5,16.5).lineTo(20.5,-16.5).curveTo(20.5,-20.5,16.5,-20.5).closePath();
	this.shape_6.setTransform(21,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill(DBLColorManager.platform_highlight_inner).beginStroke().moveTo(-16.5,20.5).curveTo(-20.5,20.5,-20.5,16.5).lineTo(-20.5,-16.5).curveTo(-20.5,-20.5,-16.5,-20.5).lineTo(16.5,-20.5).curveTo(20.5,-20.5,20.5,-16.5).lineTo(20.5,16.5).curveTo(20.5,20.5,16.5,20.5).closePath();
	this.shape_7.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).wait(1));

	// hitarea
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,153,255,0)").beginStroke().moveTo(-22,22).lineTo(-22,-22).lineTo(22,-22).lineTo(22,22).closePath();
	this.shape_8.setTransform(22,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,44.5,44.5);


(lib.voicePagination_btn_L = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Highlight":3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.arrowGlyph("single",0);
	this.instance.setTransform(19.3,21.15,0.9876,0.9865,0,0,0,8.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.1,regY:11.2,scaleX:1.1154,scaleY:1.1201,x:19.25,y:21.55},0).wait(1).to({scaleX:0.8963,scaleY:0.8964,x:19.45,y:21.05},0).wait(1).to({regX:8.2,regY:11.3,scaleX:0.9876,scaleY:0.9865,x:19.3,y:21.15},0).wait(1));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.platform_white_alpha_20).beginStroke().moveTo(-17.1,19.1).curveTo(-19.1,19.1,-19.1,17.1).lineTo(-19.1,-17.1).curveTo(-19.1,-19.1,-17.1,-19.1).lineTo(17.1,-19.1).curveTo(19.1,-19.1,19.1,-17.1).lineTo(19.1,17.1).curveTo(19.1,19.1,17.1,19.1).closePath();
	this.shape.setTransform(21.0046,20.9907,1.1013,1.0987);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.platform_black_alpha_20).beginStroke().moveTo(-17,19).curveTo(-19,19,-19,17).lineTo(-19,-17).curveTo(-19,-19,-17,-19).lineTo(17,-19).curveTo(19,-19,19,-17).lineTo(19,17).curveTo(19,19,17,19).closePath();
	this.shape_1.setTransform(20.9751,20.9776,0.9211,0.9211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-16.5,18.5).curveTo(-18.5,18.5,-18.5,16.5).lineTo(-18.5,-16.5).curveTo(-18.5,-18.5,-16.5,-18.5).lineTo(16.5,-18.5).curveTo(18.5,-18.5,18.5,-16.5).lineTo(18.5,16.5).curveTo(18.5,18.5,16.5,18.5).closePath();
	this.shape_2.setTransform(21,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-17.1,19.1).curveTo(-19.1,19.1,-19.1,17.1).lineTo(-19.1,-17.1).curveTo(-19.1,-19.1,-17.1,-19.1).lineTo(17.1,-19.1).curveTo(19.1,-19.1,19.1,-17.1).lineTo(19.1,17.1).curveTo(19.1,19.1,17.1,19.1).closePath();
	this.shape_3.setTransform(21.0046,20.9907,1.1013,1.0987);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-17,19).curveTo(-19,19,-19,17).lineTo(-19,-17).curveTo(-19,-19,-17,-19).lineTo(17,-19).curveTo(19,-19,19,-17).lineTo(19,17).curveTo(19,19,17,19).closePath();
	this.shape_4.setTransform(20.9751,20.9776,0.9211,0.9211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// shadow
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill(DBLColorManager.platform_black_alpha_40).beginStroke().moveTo(-16.5,18.5).curveTo(-18.5,18.5,-18.5,16.5).lineTo(-18.5,-16.5).curveTo(-18.5,-18.5,-16.5,-18.5).lineTo(16.5,-18.5).curveTo(18.5,-18.5,18.5,-16.5).lineTo(18.5,16.5).curveTo(18.5,18.5,16.5,18.5).closePath();
	this.shape_5.setTransform(22.75,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(3));

	// highlight
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke(DBLColorManager.platform_highlight_outer).setStrokeStyle(1,1,1).moveTo(16.5,-20.5).lineTo(-16.5,-20.5).curveTo(-20.5,-20.5,-20.5,-16.5).lineTo(-20.5,16.5).curveTo(-20.5,20.5,-16.5,20.5).lineTo(16.5,20.5).curveTo(20.5,20.5,20.5,16.5).lineTo(20.5,-16.5).curveTo(20.5,-20.5,16.5,-20.5).closePath();
	this.shape_6.setTransform(21,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill(DBLColorManager.platform_highlight_inner).beginStroke().moveTo(-16.5,20.5).curveTo(-20.5,20.5,-20.5,16.5).lineTo(-20.5,-16.5).curveTo(-20.5,-20.5,-16.5,-20.5).lineTo(16.5,-20.5).curveTo(20.5,-20.5,20.5,-16.5).lineTo(20.5,16.5).curveTo(20.5,20.5,16.5,20.5).closePath();
	this.shape_7.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).wait(1));

	// hitarea
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(255,153,255,0)").beginStroke().moveTo(-22,22).lineTo(-22,-22).lineTo(22,-22).lineTo(22,22).closePath();
	this.shape_8.setTransform(22,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,44.5,44.5);


(lib.voiceArt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {voice1:0,voice2:1,voice3:2,voice4:3,voice5:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.play_btn();
	this.instance.setTransform(13.25,17.5,0.7571,0.7571,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// bars
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,11).curveTo(-0.4,11,-0.7,10.7).curveTo(-1,10.4,-1,10).lineTo(-1,-10).curveTo(-1,-10.5,-0.7,-10.7).curveTo(-0.4,-11,-0,-11).lineTo(0,-11).curveTo(0.4,-11,0.7,-10.7).curveTo(1,-10.5,1,-10).lineTo(1,10).curveTo(1,10.4,0.7,10.7).curveTo(0.4,11,0,11).closePath();
	this.shape.setTransform(53.4603,17.5,1.0132,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,7).curveTo(-0.4,7,-0.7,6.7).curveTo(-1,6.4,-1,6).lineTo(-1,-6).curveTo(-1,-6.5,-0.7,-6.7).curveTo(-0.4,-7,-0,-7).lineTo(0,-7).curveTo(0.4,-7,0.7,-6.7).curveTo(1,-6.5,1,-6).lineTo(1,6).curveTo(1,6.4,0.7,6.7).curveTo(0.4,7,0,7).closePath();
	this.shape_1.setTransform(59.4603,17.5,1.0132,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,10).curveTo(-0.4,10,-0.7,9.7).curveTo(-1,9.5,-1,9.1).lineTo(-1,-9).curveTo(-1,-9.5,-0.7,-9.7).curveTo(-0.4,-10,-0,-10).lineTo(0,-10).curveTo(0.4,-10,0.7,-9.7).curveTo(1,-9.5,1,-9).lineTo(1,9.1).curveTo(1,9.5,0.7,9.7).curveTo(0.4,10,0,10).closePath();
	this.shape_2.setTransform(41.4397,17.5,1.0132,1,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,12).curveTo(-0.4,12,-0.7,11.7).curveTo(-1,11.5,-1,11).lineTo(-1,-11).curveTo(-1,-11.5,-0.7,-11.7).curveTo(-0.4,-12,-0,-12).lineTo(0,-12).curveTo(0.4,-12,0.7,-11.7).curveTo(1,-11.5,1,-11).lineTo(1,11).curveTo(1,11.5,0.7,11.7).curveTo(0.4,12,0,12).closePath();
	this.shape_3.setTransform(35.2397,17.5,1.0132,1,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,16).curveTo(-0.4,16,-0.7,15.7).curveTo(-1,15.4,-1,15).lineTo(-1,-15).curveTo(-1,-15.5,-0.7,-15.7).curveTo(-0.4,-16,-0,-16).lineTo(0,-16).curveTo(0.4,-16,0.7,-15.7).curveTo(1,-15.5,1,-15).lineTo(1,15).curveTo(1,15.4,0.7,15.7).curveTo(0.4,16,0,16).closePath();
	this.shape_4.setTransform(47.4603,17.5,1.0132,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,8).curveTo(-0.4,8,-0.7,7.7).curveTo(-1,7.4,-1,7).lineTo(-1,-7).curveTo(-1,-7.5,-0.7,-7.7).curveTo(-0.4,-8,-0,-8).lineTo(0,-8).curveTo(0.4,-8,0.7,-7.7).curveTo(1,-7.5,1,-7).lineTo(1,7).curveTo(1,7.4,0.7,7.7).curveTo(0.4,8,0,8).closePath();
	this.shape_5.setTransform(71.4397,17.5,1.0132,1,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,11).curveTo(-0.4,11,-0.7,10.7).curveTo(-1,10.4,-1,10).lineTo(-1,-10).curveTo(-1,-10.5,-0.7,-10.7).curveTo(-0.4,-11,-0,-11).lineTo(0,-11).curveTo(0.4,-11,0.7,-10.7).curveTo(1,-10.5,1,-10).lineTo(1,10).curveTo(1,10.4,0.7,10.7).curveTo(0.4,11,0,11).closePath();
	this.shape_6.setTransform(65.4397,17.5,1.0132,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,10).curveTo(-0.4,10,-0.7,9.7).curveTo(-1,9.5,-1,9.1).lineTo(-1,-9).curveTo(-1,-9.5,-0.7,-9.7).curveTo(-0.4,-10,-0,-10).lineTo(0,-10).curveTo(0.4,-10,0.7,-9.7).curveTo(1,-9.5,1,-9).lineTo(1,9.1).curveTo(1,9.5,0.7,9.7).curveTo(0.4,10,0,10).closePath();
	this.shape_7.setTransform(101.6897,17.5,1.0132,1,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,7).curveTo(-0.4,7,-0.7,6.7).curveTo(-1,6.4,-1,6).lineTo(-1,-6).curveTo(-1,-6.5,-0.7,-6.7).curveTo(-0.4,-7,-0,-7).lineTo(0,-7).curveTo(0.4,-7,0.7,-6.7).curveTo(1,-6.5,1,-6).lineTo(1,6).curveTo(1,6.4,0.7,6.7).curveTo(0.4,7,0,7).closePath();
	this.shape_8.setTransform(95.4397,17.5,1.0132,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,6).curveTo(-0.4,6,-0.7,5.7).curveTo(-1,5.4,-1,5.1).lineTo(-1,-5).curveTo(-1,-5.5,-0.7,-5.7).curveTo(-0.4,-6,-0,-6).lineTo(0,-6).curveTo(0.4,-6,0.7,-5.7).curveTo(1,-5.5,1,-5).lineTo(1,5.1).curveTo(1,5.4,0.7,5.7).curveTo(0.4,6,0,6).closePath();
	this.shape_9.setTransform(89.4397,17.5,1.0132,1,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,9).curveTo(-0.4,9,-0.7,8.7).curveTo(-1,8.5,-1,8.1).lineTo(-1,-8).curveTo(-1,-8.5,-0.7,-8.7).curveTo(-0.4,-9,-0,-9).lineTo(0,-9).curveTo(0.4,-9,0.7,-8.7).curveTo(1,-8.5,1,-8).lineTo(1,8.1).curveTo(1,8.5,0.7,8.7).curveTo(0.4,9,0,9).closePath();
	this.shape_10.setTransform(83.4397,17.5,1.0132,1,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,11).curveTo(-0.4,11,-0.7,10.7).curveTo(-1,10.4,-1,10).lineTo(-1,-10).curveTo(-1,-10.5,-0.7,-10.7).curveTo(-0.4,-11,-0,-11).lineTo(0,-11).curveTo(0.4,-11,0.7,-10.7).curveTo(1,-10.5,1,-10).lineTo(1,10).curveTo(1,10.4,0.7,10.7).curveTo(0.4,11,0,11).closePath();
	this.shape_11.setTransform(77.4397,17.5,1.0132,1,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,5).curveTo(-0.4,5,-0.7,4.7).curveTo(-1,4.5,-1,4.1).lineTo(-1,-4).curveTo(-1,-4.5,-0.7,-4.7).curveTo(-0.4,-5,-0,-5).lineTo(0,-5).curveTo(0.4,-5,0.7,-4.7).curveTo(1,-4.5,1,-4).lineTo(1,4.1).curveTo(1,4.5,0.7,4.7).curveTo(0.4,5,0,5).closePath();
	this.shape_12.setTransform(35.2603,17.4,1.0132,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,8).curveTo(-0.4,8,-0.7,7.7).curveTo(-1,7.4,-1,7).lineTo(-1,-7).curveTo(-1,-7.5,-0.7,-7.7).curveTo(-0.4,-8,-0,-8).lineTo(0,-8).curveTo(0.4,-8,0.7,-7.7).curveTo(1,-7.5,1,-7).lineTo(1,7).curveTo(1,7.4,0.7,7.7).curveTo(0.4,8,0,8).closePath();
	this.shape_13.setTransform(71.4397,17.5,1.0132,1,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill(DBLColorManager.color("engagement_on_accent_body")).beginStroke().moveTo(-0,8).curveTo(-0.4,8,-0.7,7.7).curveTo(-1,7.4,-1,7).lineTo(-1,-7).curveTo(-1,-7.5,-0.7,-7.7).curveTo(-0.4,-8,-0,-8).lineTo(0,-8).curveTo(0.4,-8,0.7,-7.7).curveTo(1,-7.5,1,-7).lineTo(1,7).curveTo(1,7.4,0.7,7.7).curveTo(0.4,8,0,8).closePath();
	this.shape_14.setTransform(35.2397,17,1.0132,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{rotation:180,x:77.4397,skewX:0}},{t:this.shape_10,p:{rotation:180,x:83.4397,skewX:0}},{t:this.shape_9,p:{rotation:180,x:89.4397,skewX:0}},{t:this.shape_8,p:{rotation:180,x:95.4397,skewX:0}},{t:this.shape_7,p:{rotation:180,x:101.6897,skewX:0}},{t:this.shape_6,p:{rotation:180,x:65.4397,skewX:0}},{t:this.shape_5,p:{rotation:180,x:71.4397,y:17.5,skewX:0}},{t:this.shape_4,p:{x:47.4603,skewY:0}},{t:this.shape_3,p:{rotation:180,x:35.2397,skewX:0}},{t:this.shape_2,p:{rotation:180,x:41.4397,skewX:0}},{t:this.shape_1,p:{rotation:0,x:59.4603,skewY:0}},{t:this.shape,p:{x:53.4603,rotation:0,skewY:0}}]}).to({state:[{t:this.shape_6,p:{rotation:0,x:101.7103,skewX:0}},{t:this.shape_10,p:{rotation:0,x:95.4603,skewX:0}},{t:this.shape_9,p:{rotation:0,x:89.4603,skewX:0}},{t:this.shape_8,p:{rotation:0,x:83.4603,skewX:0}},{t:this.shape_7,p:{rotation:0,x:77.4603,skewX:0}},{t:this.shape,p:{x:71.4603,rotation:0,skewY:0}},{t:this.shape_5,p:{rotation:0,x:65.4603,y:17.5,skewX:0}},{t:this.shape_4,p:{x:59.4603,skewY:0}},{t:this.shape_3,p:{rotation:0,x:53.4603,skewX:0}},{t:this.shape_2,p:{rotation:180,x:41.4397,skewX:0}},{t:this.shape_1,p:{rotation:180,x:47.4397,skewY:0}},{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_10,p:{rotation:180,x:41.4397,skewX:0}},{t:this.shape_9,p:{rotation:180,x:47.4397,skewX:0}},{t:this.shape_8,p:{rotation:180,x:53.4397,skewX:0}},{t:this.shape_7,p:{rotation:180,x:59.4397,skewX:0}},{t:this.shape,p:{x:65.4397,rotation:180,skewY:0}},{t:this.shape_13},{t:this.shape_4,p:{x:89.4603,skewY:0}},{t:this.shape_3,p:{rotation:0,x:83.4603,skewX:0}},{t:this.shape_2,p:{rotation:0,x:77.4603,skewX:0}},{t:this.shape_1,p:{rotation:180,x:95.4397,skewY:0}},{t:this.shape_5,p:{rotation:180,x:101.6897,y:17,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{rotation:0,x:59.4603,skewX:0}},{t:this.shape_10,p:{rotation:0,x:53.4603,skewX:0}},{t:this.shape_9,p:{rotation:0,x:47.4603,skewX:0}},{t:this.shape_8,p:{rotation:0,x:41.4603,skewX:0}},{t:this.shape_7,p:{rotation:0,x:35.2603,skewX:0}},{t:this.shape_6,p:{rotation:0,x:71.4603,skewX:0}},{t:this.shape_5,p:{rotation:0,x:65.4603,y:17.5,skewX:0}},{t:this.shape_4,p:{x:77.4603,skewY:0}},{t:this.shape_3,p:{rotation:0,x:101.7103,skewX:0}},{t:this.shape_2,p:{rotation:0,x:95.4603,skewX:0}},{t:this.shape_1,p:{rotation:0,x:89.4603,skewY:0}},{t:this.shape,p:{x:83.4603,rotation:0,skewY:0}}]},1).to({state:[{t:this.shape_11,p:{rotation:0,x:59.4603,skewX:180}},{t:this.shape_10,p:{rotation:0,x:53.4603,skewX:180}},{t:this.shape_9,p:{rotation:0,x:47.4603,skewX:180}},{t:this.shape_8,p:{rotation:0,x:41.4603,skewX:180}},{t:this.shape_7,p:{rotation:0,x:35.2603,skewX:180}},{t:this.shape_6,p:{rotation:0,x:71.4603,skewX:180}},{t:this.shape_5,p:{rotation:0,x:65.4603,y:17.5,skewX:180}},{t:this.shape_4,p:{x:89.4397,skewY:180}},{t:this.shape_3,p:{rotation:0,x:101.7103,skewX:180}},{t:this.shape_2,p:{rotation:0,x:95.4603,skewX:180}},{t:this.shape_1,p:{rotation:0,x:77.4397,skewY:180}},{t:this.shape,p:{x:83.4397,rotation:0,skewY:180}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,102.7,32);


(lib.speechSample = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,Selected:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// avatar
	this.inst_avatar = new lib.Avatar();
	this.inst_avatar.name = "inst_avatar";
	this.inst_avatar.setTransform(-8.1,26,0.9375,0.9231,0,0,0,31.1,32.5);

	this.timeline.addTween(cjs.Tween.get(this.inst_avatar).wait(6));

	// voice_art
	this.voiceArt = new lib.voiceArt();
	this.voiceArt.name = "voiceArt";
	this.voiceArt.setTransform(171.65,25,1.0157,1,0,0,0,55.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.voiceArt).to({_off:true},3).wait(3));

	// voiceName
	this.lblVoiceName = new cjs.Text("Character", "bold 20px 'Montreal Serial'", DBLColorManager.color("engagement_on_accent_title"));
	this.lblVoiceName.name = "lblVoiceName";
	this.lblVoiceName.textAlign = "center";
	this.lblVoiceName.lineHeight = 26;
	this.lblVoiceName.lineWidth = 130;
	this.lblVoiceName.parent = this;
	this.lblVoiceName.setTransform(47.05,11.8);

	this.timeline.addTween(cjs.Tween.get(this.lblVoiceName).to({_off:true},3).wait(3));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.platform_white_alpha_20).beginStroke().moveTo(-132,28).curveTo(-135,28,-135,25).lineTo(-135,-25).curveTo(-135,-28,-132,-28).lineTo(132,-28).curveTo(135,-28,135,-25).lineTo(135,25).curveTo(135,28,132,28).closePath();
	this.shape.setTransform(103,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.platform_black_alpha_20).beginStroke().moveTo(-129,24).curveTo(-131,24,-131,22).lineTo(-131,-22).curveTo(-131,-24,-129,-24).lineTo(129,-24).curveTo(131,-24,131,-22).lineTo(131,22).curveTo(131,24,129,24).closePath();
	this.shape_1.setTransform(103,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(3));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-131,25).curveTo(-133,25,-133,23).lineTo(-133,-23).curveTo(-133,-25,-131,-25).lineTo(131,-25).curveTo(133,-25,133,-23).lineTo(133,23).curveTo(133,25,131,25).closePath();
	this.shape_2.setTransform(103,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_accent_top")).beginStroke().moveTo(-132,28).curveTo(-135,28,-135,25).lineTo(-135,-25).curveTo(-135,-28,-132,-28).lineTo(132,-28).curveTo(135,-28,135,-25).lineTo(135,25).curveTo(135,28,132,28).closePath();
	this.shape_3.setTransform(103,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill(DBLColorManager.color("engagement_surface_accent")).beginStroke().moveTo(-129,24).curveTo(-131,24,-131,22).lineTo(-131,-22).curveTo(-131,-24,-129,-24).lineTo(129,-24).curveTo(131,-24,131,-22).lineTo(131,22).curveTo(131,24,129,24).closePath();
	this.shape_4.setTransform(103,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(3));

	// shadow
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill(DBLColorManager.platform_black_alpha_30).beginStroke().moveTo(-130.1,25).curveTo(-133.1,25,-133.1,22).lineTo(-133.1,-22).curveTo(-133.1,-25,-130.1,-25).lineTo(130.1,-25).curveTo(133.1,-25,133.1,-22).lineTo(133.1,22).curveTo(133.1,25,130.1,25).closePath();
	this.shape_5.setTransform(104.9,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({x:104.1,y:26.25},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-2,270,56);


(lib.SettingsSoundIcn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icn_on
	this.icn_On = new lib.SettingsSoundIcn_On();
	this.icn_On.name = "icn_On";
	this.icn_On.setTransform(-0.15,-0.15,0.7599,0.7599,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.icn_On).wait(1));

	// icn_off
	this.icn_Off = new lib.SettingsSoundIcn_Off();
	this.icn_Off.name = "icn_Off";
	this.icn_Off.setTransform(-0.15,-0.15,0.7599,0.7599,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.icn_Off).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsSoundIcn, new cjs.Rectangle(-19,-19,38,38), null);


(lib.SettingsMusicIcn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icn_on
	this.icn_On = new lib.SettingsMusicIcn_On();
	this.icn_On.name = "icn_On";
	this.icn_On.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.icn_On).wait(1));

	// icn_off
	this.icn_Off = new lib.SettingsMusicIcn_Off();
	this.icn_Off.name = "icn_Off";
	this.icn_Off.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.icn_Off).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsMusicIcn, new cjs.Rectangle(-19,-19,38,38), null);


(lib.SettingsCCIcn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icn_on
	this.icn_On = new lib.SettingsCCIcn_On();
	this.icn_On.name = "icn_On";
	this.icn_On.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.icn_On).wait(1));

	// icn_off
	this.icn_Off = new lib.SettingsCCIcn_Off();
	this.icn_Off.name = "icn_Off";
	this.icn_Off.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.icn_Off).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SettingsCCIcn, new cjs.Rectangle(-19,-19,38,38), null);


(lib.SettingsTgl_On = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.instance = new lib.toggleBtn_btnOn();
	this.instance.setTransform(20,-13,0.9035,0.9035);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9681,scaleY:0.9681,x:19,y:-15},0).wait(1).to({scaleX:0.8387,scaleY:0.8387,x:-13,y:-12},0).wait(1));

	// label
	this.lblOnTxt = new cjs.Text("ON", "22px 'Helvetica'", DBLColorManager.color("engagement_on_accent_body"));
	this.lblOnTxt.name = "lblOnTxt";
	this.lblOnTxt.textAlign = "center";
	this.lblOnTxt.lineHeight = 22;
	this.lblOnTxt.lineWidth = 54;
	this.lblOnTxt.parent = this;
	this.lblOnTxt.setTransform(-21,-13);

	this.timeline.addTween(cjs.Tween.get(this.lblOnTxt).to({_off:true},2).wait(1));

	// background
	this.instance_1 = new lib.toggleBtn_baseOn();
	this.instance_1.setTransform(0.3,0,1.4288,1.3103,0,0,0,35.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-19,100,38);


(lib.SettingsTgl_Off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.instance = new lib.toggleBtn_btnOff();
	this.instance.setTransform(-45,-13,0.9034,0.9034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0322,scaleY:1.0322,x:-47,y:-15.25},0).wait(1).to({scaleX:0.8387,scaleY:0.8387,x:-13,y:-12},0).wait(1));

	// text
	this.lblOffTxt = new cjs.Text("OFF", "22px 'Helvetica'", DBLColorManager.color("engagement_accent_top"));
	this.lblOffTxt.name = "lblOffTxt";
	this.lblOffTxt.textAlign = "center";
	this.lblOffTxt.lineHeight = 22;
	this.lblOffTxt.lineWidth = 54;
	this.lblOffTxt.parent = this;
	this.lblOffTxt.setTransform(22,-13);

	this.timeline.addTween(cjs.Tween.get(this.lblOffTxt).to({_off:true},2).wait(1));

	// Layer_3
	this.instance_1 = new lib.toggleBtn_baseOff();
	this.instance_1.setTransform(-50,-19,1.4284,1.3099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-19,101,38);


(lib.screenReader_checkbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt_screenReader = new cjs.Text("I am using assistive technology like a screen reader.", "16px 'Arial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_screenReader.name = "txt_screenReader";
	this.txt_screenReader.lineHeight = 20;
	this.txt_screenReader.lineWidth = 614;
	this.txt_screenReader.parent = this;
	this.txt_screenReader.setTransform(15,4);

	this.lct_SRCheckbox = new lib.locator();
	this.lct_SRCheckbox.name = "lct_SRCheckbox";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lct_SRCheckbox},{t:this.txt_screenReader}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenReader_checkbox, new cjs.Rectangle(13,2,618,27.2), null);


(lib.DBLA_AudioToggle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// labels
	this.lblCC = new cjs.Text("Subtítulos", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblCC.name = "lblCC";
	this.lblCC.textAlign = "center";
	this.lblCC.lineHeight = 30;
	this.lblCC.lineWidth = 156;
	this.lblCC.parent = this;
	this.lblCC.setTransform(469,35);

	this.lblSound = new cjs.Text("Sonido", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblSound.name = "lblSound";
	this.lblSound.textAlign = "center";
	this.lblSound.lineHeight = 30;
	this.lblSound.lineWidth = 156;
	this.lblSound.parent = this;
	this.lblSound.setTransform(269,35);

	this.lblMusic = new cjs.Text("Música", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblMusic.name = "lblMusic";
	this.lblMusic.textAlign = "center";
	this.lblMusic.lineHeight = 30;
	this.lblMusic.lineWidth = 156;
	this.lblMusic.parent = this;
	this.lblMusic.setTransform(61,35);

	this.lctSoundIcn = new lib.locator();
	this.lctSoundIcn.name = "lctSoundIcn";
	this.lctSoundIcn.setTransform(217,13);

	this.lctMusicIcn = new lib.locator();
	this.lctMusicIcn.name = "lctMusicIcn";
	this.lctMusicIcn.setTransform(17,13);

	this.lctCCIcn = new lib.locator();
	this.lctCCIcn.name = "lctCCIcn";
	this.lctCCIcn.setTransform(417,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctCCIcn},{t:this.lctMusicIcn},{t:this.lctSoundIcn},{t:this.lblMusic},{t:this.lblSound},{t:this.lblCC}]}).wait(1));

	// sliders
	this.lctSoundTgl = new lib.locator();
	this.lctSoundTgl.name = "lctSoundTgl";
	this.lctSoundTgl.setTransform(295,13);

	this.lctMusicTgl = new lib.locator();
	this.lctMusicTgl.name = "lctMusicTgl";
	this.lctMusicTgl.setTransform(95,13);

	this.lctCCTgl = new lib.locator();
	this.lctCCTgl.name = "lctCCTgl";
	this.lctCCTgl.setTransform(495,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctCCTgl},{t:this.lctMusicTgl},{t:this.lctSoundTgl}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLA_AudioToggle, new cjs.Rectangle(-19,33,568,42), null);


(lib.voiceSelector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {cycle_current:0,cycleLeft_start:4,cycleLeft_stop:14,cycleRight_start:19,cycleRight_stop:29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(6));

	// next
	this.btn_playAudio_next = new lib.speechSample();
	this.btn_playAudio_next.name = "btn_playAudio_next";
	this.btn_playAudio_next.setTransform(160.1,18.95,1.0011,0.9983,0,0,0,110,19);
	this.btn_playAudio_next.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn_playAudio_next).wait(5).to({x:110.1,alpha:1},9,cjs.Ease.quadOut).wait(5).to({x:60.1,alpha:0},0).wait(1).to({x:110.1,alpha:1},9).wait(6));

	// current
	this.btn_playAudio_current = new lib.speechSample();
	this.btn_playAudio_current.name = "btn_playAudio_current";
	this.btn_playAudio_current.setTransform(110.1,18.95,1.0011,0.9983,0,0,0,110,19);

	this.timeline.addTween(cjs.Tween.get(this.btn_playAudio_current).wait(4).to({x:100.1,alpha:0},4,cjs.Ease.quadOut).to({_off:true},1).wait(10).to({_off:false,x:110.1,alpha:1},0).to({x:125.1,alpha:0},5,cjs.Ease.quadOut).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-3.9,375.5,55.9);


(lib.SettingsModal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {VoiceChoice:0,NoVoiceChoice:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// heading_en
	this.lblHeader = new lib.header();
	this.lblHeader.name = "lblHeader";
	this.lblHeader.setTransform(330.05,16.65,1,1,0,0,0,125,53.4);

	this.timeline.addTween(cjs.Tween.get(this.lblHeader).wait(2));

	// closebutton
	this.lctCloseBtn = new lib.locator();
	this.lctCloseBtn.name = "lctCloseBtn";
	this.lctCloseBtn.setTransform(669.2,30,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.lctCloseBtn).wait(2));

	// togglebuttons
	this.audioToggle = new lib.DBLA_AudioToggle();
	this.audioToggle.name = "audioToggle";
	this.audioToggle.setTransform(69,96.05);

	this.timeline.addTween(cjs.Tween.get(this.audioToggle).wait(1).to({y:131.05},0).wait(1));

	// screenReader
	this.ast_screenReader = new lib.screenReader_checkbox();
	this.ast_screenReader.name = "ast_screenReader";
	this.ast_screenReader.setTransform(260.15,303.5,1,1,0,0,0,234.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.ast_screenReader).wait(1).to({y:243.5},0).wait(1));

	// ButtonLocators
	this.lctModalBtn02 = new lib.locator();
	this.lctModalBtn02.name = "lctModalBtn02";
	this.lctModalBtn02.setTransform(339.2,362,1,1,0,0,0,-0.8,0);

	this.lctModalBtn03 = new lib.locator();
	this.lctModalBtn03.name = "lctModalBtn03";
	this.lctModalBtn03.setTransform(500.2,362,1,1,0,0,0,-0.8,0);

	this.lctModalBtn01 = new lib.locator();
	this.lctModalBtn01.name = "lctModalBtn01";
	this.lctModalBtn01.setTransform(179,362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctModalBtn01,p:{y:362}},{t:this.lctModalBtn03,p:{y:362}},{t:this.lctModalBtn02,p:{y:362}}]}).to({state:[{t:this.lctModalBtn01,p:{y:317}},{t:this.lctModalBtn03,p:{y:317}},{t:this.lctModalBtn02,p:{y:317}}]},1).wait(1));

	// copyrighttext
	this.txt_copyright = new cjs.Text("Copyright 2022 Dreambox Learning. All rights Reserved.", "16px 'Montreal Serial'", DBLColorManager.platform_white_alpha_100);
	this.txt_copyright.name = "txt_copyright";
	this.txt_copyright.textAlign = "center";
	this.txt_copyright.lineHeight = 22;
	this.txt_copyright.lineWidth = 676;
	this.txt_copyright.parent = this;
	this.txt_copyright.setTransform(340,415);

	this.timeline.addTween(cjs.Tween.get(this.txt_copyright).wait(1).to({y:352,color:DBLColorManager.color("engagement_on_surface_body")},0).wait(1));

	// voiceSwap_btns
	this.tabRight = new lib.voicePagination_btn_R();
	this.tabRight.name = "tabRight";
	this.tabRight.setTransform(509,201,1,1,0,0,0,16,16);

	this.tabLeft = new lib.voicePagination_btn_L();
	this.tabLeft.name = "tabLeft";
	this.tabLeft.setTransform(182,201,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tabLeft},{t:this.tabRight}]}).to({state:[]},1).wait(1));

	// label_voice
	this.lblVoice = new cjs.Text("Voice", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblVoice.name = "lblVoice";
	this.lblVoice.textAlign = "center";
	this.lblVoice.lineHeight = 30;
	this.lblVoice.lineWidth = 156;
	this.lblVoice.parent = this;
	this.lblVoice.setTransform(337,243);

	this.voiceSelector = new lib.voiceSelector();
	this.voiceSelector.name = "voiceSelector";
	this.voiceSelector.setTransform(432.9,211.1,1,1,0,0,0,186.2,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.voiceSelector},{t:this.lblVoice}]}).to({state:[]},1).wait(1));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill(DBLColorManager.color("engagement_surface_3")).beginStroke().moveTo(-315,105).curveTo(-320,105,-320,99.8).lineTo(-320,-99.8).curveTo(-320,-105,-315,-105).lineTo(315,-105).curveTo(320,-105,320,-99.8).lineTo(320,99.8).curveTo(320,105,315,105).closePath();
	this.shape.setTransform(340,175.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill(DBLColorManager.color("engagement_surface_3")).beginStroke().moveTo(-315,95).curveTo(-320,95,-320,90.3).lineTo(-320,-90.2).curveTo(-320,-95,-315,-95).lineTo(315,-95).curveTo(320,-95,320,-90.2).lineTo(320,90.3).curveTo(320,95,315,95).closePath();
	this.shape_1.setTransform(340,154.9861,1,0.6842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill(DBLColorManager.color("engagement_surface_1")).beginStroke().moveTo(-328,205).curveTo(-340,205,-340,193).lineTo(-340,-193).curveTo(-340,-205,-328,-205).lineTo(328,-205).curveTo(340,-205,340,-193).lineTo(340,193).curveTo(340,205,328,205).closePath();
	this.shape_2.setTransform(340,205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill(DBLColorManager.color("engagement_surface_1")).beginStroke().moveTo(-336,190).curveTo(-340,190,-340,186).lineTo(-340,-186).curveTo(-340,-190,-336,-190).lineTo(336,-190).curveTo(340,-190,340,-186).lineTo(340,186).curveTo(340,190,336,190).closePath();
	this.shape_3.setTransform(340,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,680,437.1);


// stage content:
(lib.SettingsMenu_CFcolor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SettingsCCIcn();
	this.instance.setTransform(177.05,712.9);

	this.instance_1 = new lib.SettingsSoundIcn();
	this.instance_1.setTransform(177.05,651.8);

	this.instance_2 = new lib.SettingsMusicIcn();
	this.instance_2.setTransform(177.05,594.8);

	this.instance_3 = new lib.SettingsTgl_On();
	this.instance_3.setTransform(202.05,461.6);

	this.instance_4 = new lib.SettingsTgl_Off();
	this.instance_4.setTransform(202.05,526.7);

	this.instance_5 = new lib.SettingsModal();
	this.instance_5.setTransform(1129,854.6,1,1,0,0,0,370,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1176.1,1210.6,262.9000000000001,-168.89999999999986);
// library properties:
lib.properties = {
	id: '2DF54D3CA7EE454B956F06723C8D3B44',
	width: 2048,
	height: 1536,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2DF54D3CA7EE454B956F06723C8D3B44'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;