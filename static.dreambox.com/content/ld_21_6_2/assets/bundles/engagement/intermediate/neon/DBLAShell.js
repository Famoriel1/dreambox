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



(lib.BitmapShellBackground = function() {
	this.initialize(img.BitmapShellBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1138,768);// helper functions:

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


(lib.ToolTipBackground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AnLD6QgoAAAAgoIAAmjQAAgoAoAAIOXAAQAoAAAAAoIAAGjQAAAogoAAg");
	this.shape.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("AnMD6QgjgBgDgeIAJAAIOXAAQAnAAAAgnIAAmkIAAgJQAeAFABAjIAAGiQgBAogoABg");
	this.shape_1.setTransform(2.05,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolTipBackground, new cjs.Rectangle(-50,0,102,52), null);


(lib.StickerNotification = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9F9F").ss(2,0,1).p("AAAhPQggAAgYAXQgXAYAAAgQAAAhAXAYQAYAXAgAAQAhAAAYgXQAXgYAAghQAAgggXgYQgYgXghAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D12F24").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StickerNotification, new cjs.Rectangle(-9,-9,18,18), null);


(lib.StickerLock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_surface_3")).ss(2,0,1).p("AAAhPQggAAgYAXQgXAYAAAgQAAAhAXAYQAYAXAgAAQAhAAAYgXQAXgYAAghQAAgggXgYQgYgXghAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_accent")).s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StickerLock, new cjs.Rectangle(-9,-9,18,18), null);


(lib.SkipButton_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgGAwIAggmQg1g+hPA0QATg0A1gOQA0gOAvAwIAdgiIAOCIg");
	this.shape.setTransform(-0.25,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipButton_Over, new cjs.Rectangle(-11,-7,21.5,14), null);


(lib.SkipButton_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgGAwIAggmQg1g+hPA0QATg0A1gOQA0gOAvAwIAdgiIAOCIg");
	this.shape.setTransform(-0.25,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipButton_Down, new cjs.Rectangle(-11,-7,21.5,14), null);


(lib.SkipButton_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgGAwIAggmQg1g+hPA0QATg0A1gOQA0gOAvAwIAdgiIAOCIg");
	this.shape.setTransform(-0.25,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipButton_Disabled, new cjs.Rectangle(-11,-7,21.5,14), null);


(lib.SkipButton_Brightness = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgGAwIAggmQg1g+hPA0QATg0A1gOQA0gOAvAwIAdgiIAOCIg");
	this.shape.setTransform(-0.25,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipButton_Brightness, new cjs.Rectangle(-11,-7,21.5,14), null);


(lib.SkipButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgGAwIAggmQg1g+hPA0QATg0A1gOQA0gOAvAwIAdgiIAOCIg");
	this.shape.setTransform(-0.25,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipButton, new cjs.Rectangle(-11,-7,21.5,14), null);


(lib.scrim_dark = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(511.975,383.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scrim_dark, new cjs.Rectangle(0,0,1024,768), null);


(lib.RectangleWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("ArPDrIAAnVIWfAAIAAHVg");
	this.shape.setTransform(72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleWhite, new cjs.Rectangle(0,0,144,47), null);


(lib.RectangleSurface = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("ArPDrIAAnVIWfAAIAAHVg");
	this.shape.setTransform(72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleSurface, new cjs.Rectangle(0,0,144,47), null);


(lib.RectangleRoundedWhite_ShellDialog = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("A+iLuQh4AAAAh4IAAzrQAAh4B4AAMA9FAAAQB4AAAAB4IAATrQAAB4h4AAg");
	this.shape.setTransform(207.5,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleRoundedWhite_ShellDialog, new cjs.Rectangle(0,0,415,150), null);


(lib.RectangleRoundedWhite_Info = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("EgtYAPoQh4AAAAh4IAA7fQAAh4B4AAMBaxAAAQB4AAAAB4IAAbfQAAB4h4AAg");
	this.shape.setTransform(302.5,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleRoundedWhite_Info, new cjs.Rectangle(0,0,605,200), null);


(lib.RectangleRounded = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AiBCWQgUAAAAgUIAAkDQAAgUAUAAIEDAAQAUAAAAAUIAAEDQAAAUgUAAg");
	this.shape.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleRounded, new cjs.Rectangle(0,0,30,30), null);


(lib.RectangleBlue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],0,25.3,0,-25.2).ss(3,1,1).p("AprjWITXAAQBQAAAABQIAAENQAABQhQAAIzXAAQhQAAAAhQIAAkNQAAhQBQAAg");
	this.shape.setTransform(72,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AprDXQhQAAAAhQIAAkNQAAhQBQAAITXAAQBQAAAABQIAAENQAABQhQAAg");
	this.shape_1.setTransform(72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleBlue, new cjs.Rectangle(0.5,0.5,143,46), null);


(lib.PlayButton_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhFhZICLBgIiLBTg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayButton_Over, new cjs.Rectangle(-6,-9,14,18), null);


(lib.PlayButton_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhFhZICLBgIiLBTg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayButton_Down, new cjs.Rectangle(-6,-9,14,18), null);


(lib.PlayButton_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhFhZICLBgIiLBTg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayButton_Disabled, new cjs.Rectangle(-6,-9,14,18), null);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhFhZICLBgIiLBTg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayButton, new cjs.Rectangle(-6,-9,14,18), null);


(lib.PauseButtonDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AANBNIAAiZIAvAAIAACZgAg7BNIAAiZIAvAAIAACZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PauseButtonDisabled, new cjs.Rectangle(-6,-7.7,12,15.5), null);


(lib.PauseButton_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAOBMIAAiXIAuAAIAACXgAg7BMIAAiXIAuAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PauseButton_Over, new cjs.Rectangle(-6,-7.6,12,15.2), null);


(lib.PauseButton_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AANBMIAAiXIAvAAIAACXgAg7BMIAAiXIAvAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PauseButton_Down, new cjs.Rectangle(-6,-7.6,12,15.2), null);


(lib.PauseButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AANBNIAAiZIAvAAIAACZgAg7BNIAAiZIAvAAIAACZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PauseButton, new cjs.Rectangle(-6,-7.7,12,15.5), null);


(lib.OrangeRing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,111,8,0.976)").s().p("AiQCRQg8g8AAhVQAAhUA8g8IAAAAQA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8IAAAAQg8A8hVAAQhUAAg8g8gAAAiuQhHAAg0AzIAAAAQgzA0AABHQAABIAzAzQA0A0BHAAQBIAAAzg0IAAAAQA0gzAAhIQAAhHg0g0QgzgzhIAAIAAAAg");
	this.shape.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,41,41);


(lib.nineslice = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AobCqIAAlTIQ3AAIAAFTg");
	this.shape.setTransform(54,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nineslice, new cjs.Rectangle(0,0,108,34), null);


(lib.MSEBaseRedOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_new_top"),DBLColorManager.color("engagement_status_new_bottom")],[0,1],41.9,-17.5,41.9,17.6).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseRedOver, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.MSEBaseRedDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_new_top"),DBLColorManager.color("engagement_status_new_bottom")],[0,1],41.9,-17.5,41.9,17.6).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseRedDown, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.MSEBaseRedDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseRedDisabled, new cjs.Rectangle(-46,-18,92,36), null);


(lib.MSEBaseRed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_new_top"),DBLColorManager.color("engagement_status_new_bottom")],[0,1],41.9,-17.5,41.9,17.6).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseRed, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.MSEBaseGreenOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_inprogress_top"),DBLColorManager.color("engagement_status_inprogress_bottom")],[0,1],-41.9,17.6,-41.9,-17.5).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenOver, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.MSEBaseGreenDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_inprogress_top"),DBLColorManager.color("engagement_status_inprogress_bottom")],[0,1],-41.9,17.6,-41.9,-17.5).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenDown, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.MSEBaseGreenDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenDisabled, new cjs.Rectangle(-46,-18,92,36), null);


(lib.MSEBaseGreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls([DBLColorManager.color("engagement_status_inprogress_top"),DBLColorManager.color("engagement_status_inprogress_bottom")],[0,1],-41.9,17.6,-41.9,-17.5).ss(3,1,1).p("Al7izIL3AAQBQAAAABQIAADHQAABQhQAAIr3AAQhQAAAAhQIAAjHQAAhQBQAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("Al7C0QhQAAAAhQIAAjHQAAhQBQAAIL3AAQBQAAAABQIAADHQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreen, new cjs.Rectangle(-47.5,-19.5,95,39), null);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_logo_brand).s().p("AAbBMIAAg6Ig1AAIAAA6IguAAIAAiWIAuAAIAAA1IA1AAIAAg1IAuAAIAACWg");
	this.shape.setTransform(79.4149,28.4734,0.4408,0.4408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_logo_brand).s().p("AgWBMIAAhvIgoAAIAAgnIB9AAIAAAnIgoAAIAABvg");
	this.shape_1.setTransform(72.8916,28.4734,0.4408,0.4408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_logo_brand).s().p("AAjBMIgGgUIg5AAIgGAUIgyAAIA4iWIA5AAIA4CWgAgQASIAhAAIgRg0g");
	this.shape_2.setTransform(67.0404,28.4734,0.4408,0.4408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.platform_logo_brand).s().p("AAsBMIAAhfIgiBfIgUAAIghhfIAABfIguAAIAAiWIA/AAIAaBLIAahLIA/AAIAACWg");
	this.shape_3.setTransform(59.0185,28.4734,0.4408,0.4408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKQAAAKgHAIQgHAHgLAAQgJAAgIgHgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAJAAAGgGQAGgHAAgIQAAgIgGgGQgGgGgJAAQgIAAgGAGgAAAADIgEAAIAAAMIgFAAIAAgcIALAAQAEAAADACQADADAAADQAAAFgDABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAIAIALIgFAAIAAABgAgEAAIAGAAQAFAAAAgFQAAgFgFAAIgGAAg");
	this.shape_4.setTransform(84.2854,10.2368,0.4408,0.4408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.platform_logo_type).s().p("ABLCBIhLhqIhLBqIglAAIBeiEIhYh9IAnAAIBDBiIBEhiIAoAAIhZB9IBeCEg");
	this.shape_5.setTransform(77.9583,14.7039,0.4406,0.4406);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.platform_logo_type).s().p("AhHBpQgagcgBgxIAAg4QABgwAagcQAbgcAsAAQAuAAAaAcQAbAcgBAwIAAA4QAAAxgaAcQgZAcgvAAQgtgBgagbgAgvhRQgRASAAAgIAAA/QAAAhARASQARASAeAAQAfAAARgTQARgSAAggIAAg/QAAgggQgSQgSgSgfgBQgdABgSASg");
	this.shape_6.setTransform(68.4641,14.737,0.4406,0.4406);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.platform_logo_type).s().p("AhCCKIAAAeIggAAIAAlTIAhAAIAABxQAYgiAvAAQAsAAAYAbQAZAbAAAvIAAA8QAAAxgZAbQgYAbgsABQgvAAgZgjgAgwgrQgRASAAAiIAAA6QAAAkARAUQARAUAfAAQAfAAARgUQARgUAAgkIAAg3QAAgjgRgTQgSgVgeABQgegBgSAUg");
	this.shape_7.setTransform(58.254,12.9747,0.4406,0.4406);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.platform_logo_type).s().p("AB0CEIAAivQAAgcgNgOQgMgPgYAAQgXABgNAOQgNANAAAaIAACyIgjAAIAAivQAAgbgNgOQgMgPgYgBQgXAAgNAPQgNAOAAAZIAACyIgkAAIAAkEIAjAAIAAAVQAUgYAlAAQAtAAAUAmQAKgSASgKQASgKAXAAQAkAAAVAYQAUAZAAArIAACrg");
	this.shape_8.setTransform(45.2132,14.6268,0.4406,0.4406);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.platform_logo_type).s().p("AhKBrQgZgcAAgxIAAg8QAAgwAZgcQAZgbArAAQAuAAAZAfIAAgcIAjAAIAAEEIgjAAIAAgbQgZAfguAAQgsAAgYgbgAgvhSQgQATAAAkIAAA2QAAAkARATQARAUAdAAQAeAAARgUQARgUAAgjIAAg5QAAgigRgSQgQgTgfAAQgeAAgRATg");
	this.shape_9.setTransform(31.9521,14.726,0.4406,0.4406);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.platform_logo_type).s().p("AhIBrQgbgbAAgxIAAg8QAAgwAbgcQAbgcAtAAQAvAAAaAbQAbAbAAAwIAAAqIijAAIAAAYQAAAfASASQARASAcAAQAdAAASgQQARgPAAgZIAAgIIAkAAIAAAHQAAAngcAZQgcAagsAAQguAAgagcgAguhTQgRASAAAhIAAAOIB/AAIAAgOQAAhEhAgBIAAAAQgdABgRARg");
	this.shape_10.setTransform(21.3785,14.7149,0.4406,0.4406);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.platform_logo_type).s().p("Ag4CEIAAkEIAjAAIAAAgQAYgjAtAAIAJAAIAAAkIgFAAQgjAAgSATQgTASAAAiIAACcg");
	this.shape_11.setTransform(13.6245,14.6268,0.4406,0.4406);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.platform_logo_type).s().p("AhKCTQgZgcAAgyIAAg8QAAgwAZgbQAZgbAsgBQAtAAAYAgIAAhvIAkAAIAAFXIgjAAIAAgbQgZAfgtAAQgsAAgZgbgAgugpQgRASAAAjIAAA3QAAAkARATQARAUAdgBQAfAAAQgTQARgUAAgjIAAg6QAAgigRgRQgQgTgfAAQgdAAgRAUg");
	this.shape_12.setTransform(4.3947,12.9747,0.4406,0.4406);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.platform_logo_brand).s().p("AhsCNIgCgCQgVggAKgxQAMg6A2gsQgHgDgUABIgTAAQgJgCgDgEQgEgFACgIQAJgYAWgTQAWgTAcgJQAXgGAUADQAVADAPAMQAEADAAAFQAAAEgDACIgBABQgTAPgKAYQgHARAAALIAAACIABAEQADADAKgCQAKgBAPgHQAYgLAPgSQACgCADAAQADAAACACQAXAYAEAoQAFAogWAXQgTAUgcAKQgQAGgkAGQgjAFgUAHQggAKgaAVIgCABg");
	this.shape_13.setTransform(95.0034,27.713,0.4408,0.4408);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.platform_logo_brand).s().p("AhiEqQgEgDABgFIAAgQIgBgOQgFgdgRgfQgSgggbgbQgOgOgKgIQgDgDAAgDQAAgDADgDIElkQQAHgGgBgMQAAgMgHgHQgGgHgKgCQgKgBgHAGIk4EeQgDADgEgBIgTgHQgHgCgHgBIgOgBQgGAAgBgFQgCgFAEgDIFklJQAEgEAHgBIDhgVQAJgBAHAHIAAAAQAHAHgCAKIgjDmQgBAHgFAEIlkFKIgFACg");
	this.shape_14.setTransform(108.6748,14.5671,0.4408,0.4408);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.platform_logo_brand).s().p("AhJBLQgegfAAgsQAAgrAeggQAfgfAqAAQArAAAeAfQAfAgAAArQAAAsgfAfQgeAggrAAQgqAAgfggg");
	this.shape_15.setTransform(117.7488,28.0155,0.4408,0.4408);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.platform_logo_brand).s().p("AhIBMQgfggAAgsQAAgrAfgfQAeggAqAAQArAAAeAgQAfAfAAArQAAAsgfAgQgeAfgrAAQgqAAgegfg");
	this.shape_16.setTransform(95.2879,4.717,0.4408,0.4408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,122.4,33.9), null);


(lib.Lock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_on_accent_body")).ss(2,2,1).p("AgnAeQAAgZAMgRQALgRAQAAQARAAALARQAMARAAAZ");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_on_accent_body")).s().p("Ag7AtIAAhZIB3AAIAABZg");
	this.shape_1.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lock, new cjs.Rectangle(-6,-9,12,16), null);


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


(lib.LabelBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AtSFAQhKAAAAg9IAAoFQAAg9BKAAIalAAQBKAAAAA9IAAIFQAAA9hKAAg");
	this.shape.setTransform(92.5,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LabelBackground, new cjs.Rectangle(0,0,185,64), null);


(lib.Label = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AnLDSQgoAAAAgoIAAlTQAAgoAoAAIOXAAQAoAAAAAoIAAFTQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("AnMDTQgjAAgDgfIAFgCIAEAAIOWAAQApAAAAgoIAAlTIgBgJQAeAEABAjIAAFWQgBAogoAAg");
	this.shape_1.setTransform(1.7,1.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Label, new cjs.Rectangle(-50,-21,101.7,43.6), null);


(lib.KeyboardButtonInverse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_on_accent_body")).s().p("AiLBfQgEAAgCgEQgEgDAAgEIAAioQAAgEAEgDQACgDAEAAIEXAAQADAAAEADQADADAAAEIAACoQAAAEgDADQgEAEgDAAgAh/BKID/AAIAAiUIj/AAgAhjA3IAAgeIDHAAIAAAegABFAPIAAgdIAfAAIAAAdgAAbAPIAAgdIAeAAIAAAdgAgPAPIAAgdIAdAAIAAAdgAg6APIAAgdIAeAAIAAAdgAhjAPIAAgdIAeAAIAAAdgABFgYIAAgeIAfAAIAAAegAAbgYIAAgeIAeAAIAAAegAgPgYIAAgeIAdAAIAAAegAg6gYIAAgeIAeAAIAAAegAhjgYIAAgeIAeAAIAAAeg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_accent")).s().p("AiBCWQgUAAAAgUIAAkDQAAgUAUAAIEDAAQAUAAAAAUIAAEDQAAAUgUAAg");
	this.shape_1.setTransform(0.0157,0.0283,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardButtonInverse, new cjs.Rectangle(-20,-19.9,40,40), null);


(lib.ImageLoader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB9AABXBYQBYBYAAB7QAAB8hYBYQhXBYh9AAQh7AAhYhYgAiQiQQg7A9AABTQAABUA7A9QA9A7BTAAQBUAAA9g7QA7g9AAhUQAAhTg7g9Qg9g7hUAAQhTAAg9A7gAhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313131").s().p("AgnAjIAAhPQAqACAlASIgoBFQgSgIgVgCg");
	this.shape_1.setTransform(5.475,-16.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AghAiIgPgOIAohEQAQALAPAPIAAAAQAPAPALAQIhEAoIgOgPg");
	this.shape_2.setTransform(12.925,-12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#585858").s().p("AgiAoQgCgVgIgSIBFgoQASAlACAqg");
	this.shape_3.setTransform(16.925,-5.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AgsAAQAIgSACgVIBPAAQgCAqgTAlg");
	this.shape_4.setTransform(16.925,5.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C7C7C").s().p("AgwgUIAPgNIAOgPIBEAoQgLAQgPAPQgPAOgQAMg");
	this.shape_5.setTransform(12.925,12.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8A8A8A").s().p("AgngiQAVgCASgIIAoBFQglASgqACg");
	this.shape_6.setTransform(5.475,16.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E9E9E").s().p("AgnAZIAnhFQATAIAVACIAABPQgqgCglgSg");
	this.shape_7.setTransform(-5.475,16.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A4A4A4").s().p("AgWAXQgPgPgLgQIBFgoIANAPIAAAAIAPANIgoBFQgQgLgPgPg");
	this.shape_8.setTransform(-12.925,12.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0B0B0").s().p("AgsgnIBPAAQACAVAIASIhFAoQgSglgCgqg");
	this.shape_9.setTransform(-16.925,5.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBCBC").s().p("AgsAoQACgqASglIBFAoQgIASgCAVg");
	this.shape_10.setTransform(-16.925,-5.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CACACA").s().p("AgwAJQAMgQAOgPQAPgPAQgLIAoBEIgPAOIgNAPg");
	this.shape_11.setTransform(-12.95,-12.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDDDDD").s().p("AgngXQAlgTAqgCIAABPQgVACgTAIg");
	this.shape_12.setTransform(-5.475,-16.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E9E9E").s().p("AgxgIIBGgoQAMAQAQAMIgnBFQgjgYgYghg");
	this.shape_13.setTransform(-12.95,12.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B0B0B0").s().p("AgtAnQADgoATglIBEAmQgIATgCAUg");
	this.shape_14.setTransform(-16.95,-5.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A4A4").s().p("AgmABQgFgUgBgUIBPAAQABAKADAKIAHATIhGAnQgIgSgGgUg");
	this.shape_15.setTransform(-16.9,5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCBCBC").s().p("AgwAKQAYgjAhgYIAoBGQgQAMgMAQg");
	this.shape_16.setTransform(-12.95,-12.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CACACA").s().p("AgngXQATgJAUgFQAUgGAUgBIAABPIgUAEIgUAGg");
	this.shape_17.setTransform(-5.475,-16.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDDDDD").s().p("AgnAjIAAhPQAoACAnASIgoBGQgTgKgUgBg");
	this.shape_18.setTransform(5.475,-16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A8A8A").s().p("AgmAYIAmhFQATAJAUACIAABQQgogDglgTg");
	this.shape_19.setTransform(-5.45,16.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C7C7C").s().p("AgngiIAUgEIATgGIAoBFQgTAIgUAFQgUAGgUABg");
	this.shape_20.setTransform(5.475,16.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6E6E").s().p("AgwgUQAQgMAMgQIBFAoQgYAjghAXg");
	this.shape_21.setTransform(12.95,12.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#585858").s().p("AgtAAQAJgTACgUIBQAAQgDAogTAng");
	this.shape_22.setTransform(16.95,5.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#313131").s().p("AgwAVIAohFQAjAYAXAhIhGAoQgMgQgQgMg");
	this.shape_23.setTransform(12.95,-12.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgiAnIgEgTIgGgUIBFgmQAIARAFAVIAAAAQAGAUACATg");
	this.shape_24.setTransform(16.95,-5.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A8A8A").s().p("AgwgIIBEgoQANAQAQAMIgpBFQgggXgYgig");
	this.shape_25.setTransform(-12.9,12.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9E9E9E").s().p("AgtgmIBQgBQADAUAIATIhEAoQgTgngEgng");
	this.shape_26.setTransform(-16.975,5.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A4A4A4").s().p("AgsAoQABgVAGgUQAFgUAIgSIBGAoQgFAIgCALIgEAUg");
	this.shape_27.setTransform(-16.9,-5.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B0B0B0").s().p("AgwAIQAWggAjgYIAoBEQgRANgLAQg");
	this.shape_28.setTransform(-12.95,-12.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BCBCBC").s().p("AgngWQAngUAogDIAABQQgUADgUAHg");
	this.shape_29.setTransform(-5.475,-16.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CACACA").s().p("AgSAnQgLgDgJgBIgBhPQAVABATAGQAVAFASAIIgoBFIgSgGg");
	this.shape_30.setTransform(5.45,-16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C7C7C").s().p("AAAAmQgUgGgSgIIAmhFIAUAHIATAEIAABQQgTgDgUgFg");
	this.shape_31.setTransform(-5.45,16.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6E6E6E").s().p("AgngiQAUgCATgJIAoBFQgnATgoADg");
	this.shape_32.setTransform(5.475,16.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#585858").s().p("AgwgUQAQgMAMgQIBGAoQgXAhgjAYg");
	this.shape_33.setTransform(12.95,12.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AgsAAIAGgSIAFgVIBPABQgBATgHAUIAAABQgFAUgJASg");
	this.shape_34.setTransform(16.95,5.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#313131").s().p("AgiAnQgCgUgJgTIBFgmQATAlADAog");
	this.shape_35.setTransform(16.975,-5.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DDDDDD").s().p("AgwAUIAohEQAhAWAYAjIhFAoQgMgRgQgMg");
	this.shape_36.setTransform(12.975,-12.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C7C7C").s().p("AgVAWQgQgPgLgPIBEgoIAOAPIAPAOIgoBEQgQgMgOgPg");
	this.shape_37.setTransform(-12.925,12.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9E9E9E").s().p("AgYgnIBFAnQgIATgCAUIhPABQACgqASglg");
	this.shape_38.setTransform(-16.9,-5.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8A8A8A").s().p("AgsgnIBPAAQACAVAIASIhFAoQgSglgCgqg");
	this.shape_39.setTransform(-16.9,5.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B0B0B0").s().p("AgmgYQAkgSApgCIAABPQgUACgTAIg");
	this.shape_40.setTransform(-5.45,-16.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BCBCBC").s().p("AgmAjIgBhPQAqADAlARIgoBFQgSgIgUgCg");
	this.shape_41.setTransform(5.45,-16.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A4A4A4").s().p("AgwAJQALgQAQgPQAOgPAQgLIAoBEQgIAGgHAHIgNAQg");
	this.shape_42.setTransform(-12.925,-12.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E6E6E").s().p("AgnAYIAnhFQATAIAVACIAABQQgqgDglgSg");
	this.shape_43.setTransform(-5.475,17);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#585858").s().p("AgngiQAVgCASgJIAoBGQglARgqAEg");
	this.shape_44.setTransform(5.475,16.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#444444").s().p("AgwgUQAIgFAHgIIAOgPIBEAoQgKAQgQAOIgBABQgPAPgPALg");
	this.shape_45.setTransform(12.95,12.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DDDDDD").s().p("AgiAnQgCgUgIgTIBFgnQASAlADAqg");
	this.shape_46.setTransform(16.95,-5.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#313131").s().p("AgsAAQAHgSADgVIBPAAQgDAqgSAlg");
	this.shape_47.setTransform(16.975,5.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CACACA").s().p("AghAjIgPgPIAnhEQAQALAPAQQAPAOAMAQIhFAoIgNgOg");
	this.shape_48.setTransform(12.975,-12.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6E6E6E").s().p("AgxgIIBGgoQAMAQAQAMIgoBFQgjgYgXghg");
	this.shape_49.setTransform(-12.95,12.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8A8A8A").s().p("AgWgmIBEAmQgJATgCAUIhQAAQADgoAUglg");
	this.shape_50.setTransform(-16.975,-5.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C7C7C").s().p("AglABQgGgUgBgTIBPgBIADAVIAHASIhFAoQgIgTgFgUg");
	this.shape_51.setTransform(-16.9,5.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9E9E9E").s().p("AgwAKQAYgjAggXIApBEQgQANgNAQg");
	this.shape_52.setTransform(-12.925,-12.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A4A4A4").s().p("AgmgXQASgKAUgEQAUgHAUAAIAABPQgKAAgKADIgTAHg");
	this.shape_53.setTransform(-5.5,-16.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B0B0B0").s().p("AgmAjIAAhPQAoACAlATIgnBEQgSgIgUgCg");
	this.shape_54.setTransform(5.425,-16.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#585858").s().p("AgnAYIAohFQASAJAVACIAABQQgogEgngSg");
	this.shape_55.setTransform(-5.475,16.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#444444").s().p("AgmgiIATgEIATgGIAnBFQgQAIgWAFIgBAAQgTAGgTACg");
	this.shape_56.setTransform(5.45,16.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#313131").s().p("AgwgUQAQgMAMgQIBFAoQgYAighAYg");
	this.shape_57.setTransform(12.975,12.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DDDDDD").s().p("AgsAAQAIgSACgVIBQABQgDAngTAng");
	this.shape_58.setTransform(16.95,5.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BCBCBC").s().p("AgwAUIAnhEQAjAYAXAhIhFAoQgMgRgQgMg");
	this.shape_59.setTransform(12.975,-12.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CACACA").s().p("AgiAnIgFgTQgCgLgDgJIBDgnQAKASAFAVQAGATACAVg");
	this.shape_60.setTransform(16.95,-5.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#585858").s().p("AgwgIIBFgoQAMAQAQAMIgoBGQghgYgYgig");
	this.shape_61.setTransform(-12.925,12.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6E6E6E").s().p("AgtgnIBQAAQADAVAIASIhFAoQgTgngDgog");
	this.shape_62.setTransform(-16.925,5.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7C7C7C").s().p("AgtAnQADgUAFgTQAGgVAIgRIBFAmIgHAUIgEATg");
	this.shape_63.setTransform(-16.925,-5.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8A8A8A").s().p("AgxAJQAYgiAjgXIAnBEQgQANgMAQg");
	this.shape_64.setTransform(-12.95,-12.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9E9E9E").s().p("AgngWQAngTAngEIABBQQgVADgTAIg");
	this.shape_65.setTransform(-5.425,-16.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A4A4A4").s().p("AgSAmIgUgDIgBhPQAWAAATAHQAVAEARAKIgoBEQgHgEgLgDg");
	this.shape_66.setTransform(5.4,-16.875);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("AAAAmIgBAAQgUgFgSgJIAnhEIATAGIAVAFIgBBPQgTgCgUgGg");
	this.shape_67.setTransform(-5.45,16.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#313131").s().p("AgmgiQAUgDASgIIAoBFQgmASgpAEg");
	this.shape_68.setTransform(5.475,16.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DDDDDD").s().p("AgwgUQARgMAMgQIBEAoQgWAhgjAZg");
	this.shape_69.setTransform(12.95,12.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CACACA").s().p("AgsAAIAGgSQADgLACgJIBOgBQgBAUgGAUQgFAVgJASg");
	this.shape_70.setTransform(16.925,5.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BCBCBC").s().p("AgiAoQgDgVgIgTIBEgnQAUAnACAog");
	this.shape_71.setTransform(17,-5.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B0B0B0").s().p("AgwAUIAphEQAhAWAXAjIhEAoQgMgQgRgNg");
	this.shape_72.setTransform(12.925,-12.925);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#444444").s().p("AgVAXIgCgBQgOgOgLgQIBEgoIAOAPIAPAOIgpBEQgPgKgOgQg");
	this.shape_73.setTransform(-12.925,12.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6E6E6E").s().p("AgsAoQADgqASglIBEAnQgHATgDAVg");
	this.shape_74.setTransform(-16.925,-5.45);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#585858").s().p("AgsgnIBPAAQACAVAIASIhFAoQgRgmgDgpg");
	this.shape_75.setTransform(-16.925,5.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8A8A8A").s().p("AgngYQAmgSApgCIAABOQgUADgTAIg");
	this.shape_76.setTransform(-5.475,-16.875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9E9E9E").s().p("AgnAjIAAhPQAqADAlARIgoBFQgSgIgVgCg");
	this.shape_77.setTransform(5.475,-16.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7C7C7C").s().p("AgwAIQAMgOAPgPQAPgQAPgLIApBEIgQAOIgOAPg");
	this.shape_78.setTransform(-12.9,-12.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#313131").s().p("AgnAYIAohEQASAHAVADIAABPQgpgDgmgSg");
	this.shape_79.setTransform(-5.475,17.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DDDDDD").s().p("AgngiQAVgCASgJIAoBFQgkASgrADg");
	this.shape_80.setTransform(5.475,17);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CACACA").s().p("AgwgTIAOgOQAJgIAGgHIBEAnQgLAQgQAQQgOAPgQALg");
	this.shape_81.setTransform(12.975,12.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BCBCBC").s().p("AgsAAQAIgSADgUIBOgBQgDAqgRAlg");
	this.shape_82.setTransform(16.95,5.475);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B0B0B0").s().p("AgsAAIBFgnQARAlADApIhOABQgDgVgIgTg");
	this.shape_83.setTransform(16.95,-5.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A4A4A4").s().p("AggAiIgQgOIAohEQARALAOAQQAQAOAKAQIhEAoQgFgIgIgHg");
	this.shape_84.setTransform(12.875,-12.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#313131").s().p("AgwgIIBEgoQANAQAQAMIgoBFQgigYgXghg");
	this.shape_85.setTransform(-12.975,13.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#585858").s().p("AgXgnIBFAoQgJASgCAUIhQABQAEgoASgng");
	this.shape_86.setTransform(-16.95,-5.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#444444").s().p("AglABIAAgBQgGgSgBgUIBPAAIAFAUIAFATIhFAmQgIgQgFgWg");
	this.shape_87.setTransform(-16.95,5.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6E6E6E").s().p("AgwAJQAYgiAigXIAnBEQgQANgMARg");
	this.shape_88.setTransform(-12.95,-12.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7C7C7C").s().p("AgngYQATgHAUgFQAUgHATgBIABBQIgVADIgTAGg");
	this.shape_89.setTransform(-5.425,-16.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8A8A8A").s().p("AgmAkIAAhRQAoAEAlATIgnBDQgSgHgUgCg");
	this.shape_90.setTransform(5.45,-16.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DDDDDD").s().p("AgnAYIAnhFQATAIAVAEIgBBOQgngCgngTg");
	this.shape_91.setTransform(-5.45,17);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CACACA").s().p("AgnghIAUgGQAKgCAJgEIAoBEQgSAKgWAFQgSAGgVABg");
	this.shape_92.setTransform(5.5,17);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BCBCBC").s().p("AgwgUQAQgMANgQIBEAmQgZAkggAXg");
	this.shape_93.setTransform(13,13.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B0B0B0").s().p("AgsABQAHgTAEgUIBOAAQgCAngTAmg");
	this.shape_94.setTransform(17,5.475);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9E9E9E").s().p("AgwAUIAnhEQAjAZAXAfIhEApQgNgQgQgNg");
	this.shape_95.setTransform(12.975,-12.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A4A4A4").s().p("AgiAnQAAgJgDgKIgHgUIBEgmQAKASAFAUQAGAUAAATg");
	this.shape_96.setTransform(16.8768,-5.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DDDDDD").s().p("AgwgIIBFgoQAMARAQAMIgoBEQghgWgYgjg");
	this.shape_97.setTransform(-12.975,12.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#313131").s().p("AgtgmIBQAAQACAUAJASIhFAnQgTglgDgog");
	this.shape_98.setTransform(-16.975,5.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#444444").s().p("AgtAnQABgTAHgUIAAgBQAFgUAJgSIBEAnIgGATIgFAVg");
	this.shape_99.setTransform(-16.95,-5.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#585858").s().p("AgxAJQAXghAjgYIAoBFQgQAMgMAQg");
	this.shape_100.setTransform(-12.95,-12.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6E6E6E").s().p("AgngXQAngTAogDIAABQQgUACgTAJg");
	this.shape_101.setTransform(-5.475,-16.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7C7C7C").s().p("AgTAnIgTgEIAAhQQATADAUAFQAUAGASAIIgnBFIgTgHg");
	this.shape_102.setTransform(5.45,-16.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CACACA").s().p("AAAAmQgVgFgSgIIAnhFIATAGQALADAJABIABBPQgVgBgTgGg");
	this.shape_103.setTransform(-5.45,16.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BCBCBC").s().p("AgngiQAUgDATgHIAoBDQgnAUgoADg");
	this.shape_104.setTransform(5.475,16.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B0B0B0").s().p("AgwgTQARgNALgQIBFApQgWAggjAYg");
	this.shape_105.setTransform(12.95,12.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A4A4A4").s().p("AgtAAQAFgIACgLIAEgUIBPAAQgBAVgGAUQgFAUgIASg");
	this.shape_106.setTransform(16.9,5.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9E9E9E").s().p("AgtAAIBEgnQATAnAEAnIhQABQgDgUgIgUg");
	this.shape_107.setTransform(16.975,-5.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8A8A8A").s().p("AgwAVIAphFQAgAXAYAiIhEAoQgNgQgQgMg");
	this.shape_108.setTransform(12.9,-12.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CACACA").s().p("AgWAVQgQgNgLgQIBFgoIAOAOQAIAJAHAGIgmBEQgSgLgPgRg");
	this.shape_109.setTransform(-12.95,13.025);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#313131").s().p("AgsAoQAEgqARglIBEAoQgHASgCAVg");
	this.shape_110.setTransform(-17.05,-5.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DDDDDD").s().p("AgsgnIBPAAQADAVAIASIhFAoQgSgkgDgrg");
	this.shape_111.setTransform(-17,5.525);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#585858").s().p("AgngYQAmgRApgDIAABPQgUACgTAIg");
	this.shape_112.setTransform(-5.525,-16.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6E6E6E").s().p("AgnAjIAAhPQAqADAlASIgoBEQgTgHgUgDg");
	this.shape_113.setTransform(5.475,-16.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#444444").s().p("AgwAIQAKgPAQgPIABgCQAOgNAQgLIAoBEIgPANIgPAQg");
	this.shape_114.setTransform(-12.925,-12.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BCBCBC").s().p("AgoAYIAohEQATAHAUAEIABBOQgqgDgmgSg");
	this.shape_115.setTransform(-5.45,17.025);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B0B0B0").s().p("AgmghQAUgEATgHIAmBEQgkASgoADg");
	this.shape_116.setTransform(5.425,17.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A4A4A4").s().p("AgwgTQAIgFAIgIIANgQIBEAoQgLARgPAOQgOAQgRAKg");
	this.shape_117.setTransform(12.875,12.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#9E9E9E").s().p("AgsAAQAIgSACgVIBPAAQgEArgQAkg");
	this.shape_118.setTransform(16.925,5.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8A8A8A").s().p("AghAnQgDgTgIgSIBFgoQASAlACAog");
	this.shape_119.setTransform(16.875,-5.45);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7C7C7C").s().p("AghAhIgPgOIAphEQAOANAQAOQAPAQALAOIhFAqQgFgIgIgJg");
	this.shape_120.setTransform(12.925,-12.825);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BCBCBC").s().p("AgwgIIBFgoQANAQAPANIgmBEQgkgYgXghg");
	this.shape_121.setTransform(-13.025,13.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DDDDDD").s().p("AgsAnQACgnATgnIBFAnQgIATgEAVg");
	this.shape_122.setTransform(-17,-5.35);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CACACA").s().p("AglAAQgGgTgBgUIBOAAIAGATQACAMAEAIIhEAoQgJgSgGgWg");
	this.shape_123.setTransform(-17,5.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#313131").s().p("AgwAJQAZgiAggXIAoBEQgQANgMAQg");
	this.shape_124.setTransform(-13.025,-12.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#444444").s().p("AgmgYQAQgIAVgFIABgBQATgFAUgBIAABOIgUAFQgKAEgJACg");
	this.shape_125.setTransform(-5.425,-16.825);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#585858").s().p("AgmAiIgBhPQApAEAmATIgoBEQgSgJgUgDg");
	this.shape_126.setTransform(5.4,-16.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B0B0B0").s().p("AgmAYIAmhEQATAHAUAEIgBBOQgngDglgSg");
	this.shape_127.setTransform(-5.425,17.075);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A4A4A4").s().p("AgnAtIABhPQAJAAALgDIATgHIAnBEQgSAKgVAFQgSAGgTAAIgDAAg");
	this.shape_128.setTransform(5.4,16.9518);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9E9E9E").s().p("AgwgTQARgOAMgPIBEAnQgZAjggAXg");
	this.shape_129.setTransform(12.925,13.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8A8A8A").s().p("AgsAAQAHgSACgTIBRgBQgEAogTAlg");
	this.shape_130.setTransform(16.95,5.525);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6E6E6E").s().p("AgxAVIAohFQAjAYAYAhIhFAoQgNgQgRgMg");
	this.shape_131.setTransform(12.925,-12.825);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7C7C7C").s().p("AgmATIgGgTIBFgnIANAmQAFAUACAUIhQABIgDgVg");
	this.shape_132.setTransform(16.9,-5.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B0B0B0").s().p("AgwgHIBDgoQAOAPAPAOIgoBCQgggVgYgig");
	this.shape_133.setTransform(-12.95,13);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BCBCBC").s().p("AgsgnIBPABQAEAUAGASIhCAoQgUgngDgog");
	this.shape_134.setTransform(-17.075,5.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CACACA").s().p("AgkgBQADgVAKgRIBEAnIgFATQgEALgCAKIhNAAQgBgUAIgVg");
	this.shape_135.setTransform(-17,-5.325);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#DDDDDD").s().p("AgwAJQAVghAkgZIAoBFQgQAMgNARg");
	this.shape_136.setTransform(-13.025,-12.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#313131").s().p("AgngXQAngSAngDIAABPQgTACgTAJg");
	this.shape_137.setTransform(-5.55,-16.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#444444").s().p("AgSAnQgLgBgJgEIAChOQASABATAGIACAAQAUAFAQAKIgmBDIgTgGg");
	this.shape_138.setTransform(5.35,-16.875);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A4A4A4").s().p("AgBAmQgUgEgSgKIAnhEQAJAEALADIAUAEIgBBOQgUAAgUgHg");
	this.shape_139.setTransform(-5.475,16.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#9E9E9E").s().p("AgngiQAVgDASgIIAoBEQgnATgoAEg");
	this.shape_140.setTransform(5.425,17.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8A8A8A").s().p("AgwgTQAQgMALgQIBGAoQgXAhgiAWg");
	this.shape_141.setTransform(12.9,13);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7C7C7C").s().p("AgtABIAIgUIAEgUIBPABIgHAoQgGAUgIARg");
	this.shape_142.setTransform(16.825,5.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6E6E6E").s().p("AghAnQgEgUgIgTIBEgnQATAnAEAog");
	this.shape_143.setTransform(16.875,-5.35);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#585858").s().p("AgvAUIAnhFQAiAYAXAiIhEApQgMgRgQgNg");
	this.shape_144.setTransform(12.85,-12.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},2).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},2).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},2).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},2).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},2).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},2).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},2).wait(2));

	// Layer 2
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB9AABXBYQBYBYAAB7QAAB8hYBYQhXBYh9AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get(this.shape_145).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.IconPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahfh2IC/B2Ii/B3g");
	this.shape.setTransform(3.55,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlay, new cjs.Rectangle(-6,-12,19.1,23.8), null);


(lib.IconCheckDark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Check.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_status_inprogress_top")).ss(5,1,1).p("Ah8AEIBWBWICjiz");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheckDark, new cjs.Rectangle(-15,-11.5,30,23), null);


(lib.IconCheck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_status_inprogress_top")).ss(5,1,1).p("Ah8AEIBWBWICjiz");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheck, new cjs.Rectangle(-15,-11.5,30,23), null);


(lib.IconCancelDark = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s(DBLColorManager.color("engagement_status_new_top")).ss(5,1,0,4).p("ABLhKIiVCV");
	this.shape.setTransform(0,0,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s(DBLColorManager.color("engagement_status_new_top")).ss(5,1,0,4).p("AhKhKICVCV");
	this.shape_1.setTransform(-0.03,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCancelDark, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.IconCancel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s(DBLColorManager.color("engagement_status_new_top")).ss(5,1,0,4).p("ABLhKIiVCV");
	this.shape.setTransform(0,0,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s(DBLColorManager.color("engagement_status_new_top")).ss(5,1,0,4).p("AhKhKICVCV");
	this.shape_1.setTransform(-0.03,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCancel, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.HelpButton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgYBjQgHgIAAgMQAAgMAIgJQAHgIALAAQAKAAAHAIQAIAJAAAMQAAAMgIAIQgHAIgKAAQgLAAgIgIgAgcAmIAAgTQAAgNADgFQADgEAKgDQAOgEALgKQAIgHAAgNQAAgLgGgHQgGgIgJAAQgKABgGAGQgGAIgBAMIgvgGQAGgeASgPQATgQAbAAQAgAAATATQAUATAAAdQAAAYgOAOQgIAHgTAJIgLAGIgBABIgBAIIAAAIg");
	this.shape.setTransform(-0.525,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton2, new cjs.Rectangle(-9.6,-21,19.299999999999997,40), null);


(lib.HelpButton_Selected = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_white_alpha_100).s().p("AgZBiQgIgIAAgMQAAgMAIgJQAIgHAMgBQALABAIAHQAIAJAAAMQAAAMgIAIQgIAIgLAAQgMgBgIgHgAgeAlIAAgTQAAgIACgGQABgEAEgCIAKgFQAJgCAGgEIAMgHQAFgEACgFQACgGAAgGQAAgLgGgIQgHgGgKgBQgKABgGAGQgHAIgBALIgwgFQAHgdASgPQATgPAdAAQAVAAAQAIQARAJAJAOQAJAOAAAUQAAAMgEAJQgDAKgHAHIgKAHIgRAJIgIAFIgEACIgBAEIAAAEIAAAIg");
	this.shape.setTransform(-0.325,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("Ah0B1QgwgxAAhEQAAhDAwgxQAwgwBEAAQBFAAAvAwQAxAxAABDQAABEgxAxQgvAwhFAAQhEAAgwgwg");
	this.shape_1.setTransform(0.0136,0.0045,1.0909,1.0909);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton_Selected, new cjs.Rectangle(-18,-21,36,40), null);


(lib.HelpButton_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgZBiQgIgIAAgMQAAgMAIgJQAIgHAMgBQALABAIAHQAIAJAAAMQAAAMgIAIQgIAIgLAAQgMgBgIgHgAgeAlIAAgTQAAgIACgGQABgEAEgCIAKgFQAJgCAGgEIAMgHQAFgEACgFQACgGAAgGQAAgLgGgIQgHgGgKgBQgKABgGAGQgHAIgBALIgwgFQAHgdASgPQATgPAdAAQAVAAAQAIQARAJAJAOQAJAOAAAUQAAAMgEAJQgDAKgHAHIgKAHIgRAJIgIAFIgEACIgBAEIAAAEIAAAIg");
	this.shape.setTransform(-0.325,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton_Over, new cjs.Rectangle(-7.6,-10.6,14.6,21.2), null);


(lib.HelpButton_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgZBiQgIgIAAgMQAAgMAIgJQAIgHAMgBQALABAIAHQAIAJAAAMQAAAMgIAIQgIAIgLAAQgMgBgIgHgAgeAlIAAgTQAAgIACgGQABgEAEgCIAKgFQAJgCAGgEIAMgHQAFgEACgFQACgGAAgGQAAgLgGgIQgHgGgKgBQgKABgGAGQgHAIgBALIgwgFQAHgdASgPQATgPAdAAQAVAAAQAIQARAJAJAOQAJAOAAAUQAAAMgEAJQgDAKgHAHIgKAHIgRAJIgIAFIgEACIgBAEIAAAEIAAAIg");
	this.shape.setTransform(-0.325,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton_Down, new cjs.Rectangle(-7.6,-10.6,14.6,21.2), null);


(lib.HelpButton_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgZBiQgIgIAAgMQAAgMAIgJQAIgHAMgBQALABAIAHQAIAJAAAMQAAAMgIAIQgIAIgLAAQgMgBgIgHgAgeAlIAAgTQAAgIACgGQABgEAEgCIAKgFQAJgCAGgEIAMgHQAFgEACgFQACgGAAgGQAAgLgGgIQgHgGgKgBQgKABgGAGQgHAIgBALIgwgFQAHgdASgPQATgPAdAAQAVAAAQAIQARAJAJAOQAJAOAAAUQAAAMgEAJQgDAKgHAHIgKAHIgRAJIgIAFIgEACIgBAEIAAAEIAAAIg");
	this.shape.setTransform(-0.325,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton_Disabled, new cjs.Rectangle(-7.6,-10.6,14.6,21.2), null);


(lib.HelpButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.platform_buttonsshared_help).s().p("AgZBiQgIgIAAgMQAAgMAIgJQAIgHAMgBQALABAIAHQAIAJAAAMQAAAMgIAIQgIAIgLAAQgMgBgIgHgAgeAlIAAgTQAAgIACgGQABgEAEgCIAKgFQAJgCAGgEIAMgHQAFgEACgFQACgGAAgGQAAgLgGgIQgHgGgKgBQgKABgGAGQgHAIgBALIgwgFQAHgdASgPQATgPAdAAQAVAAAQAIQARAJAJAOQAJAOAAAUQAAAMgEAJQgDAKgHAHIgKAHIgRAJIgIAFIgEACIgBAEIAAAEIAAAIg");
	this.shape.setTransform(-0.325,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpButton, new cjs.Rectangle(-7.6,-10.6,14.6,21.2), null);


(lib.HeaderButtonBackground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AjHDcIAAm3IGPAAIAAG3g");
	this.shape.setTransform(20,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeaderButtonBackground, new cjs.Rectangle(0,0,40,44), null);


(lib.geardisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAQBkQgQADgPgDIgSATIgbgLIABgaQgNgKgIgNIgbACIgMgcIAVgSQgDgPADgPIgUgSIALgbIAbAAQAJgNAMgIIAAgbIAbgLIASAUQAOgDARADIASgUIAbALIgBAbQANAJAJAMIAaAAIALAbIgTATQACAOgCAQIATATIgLAaIgbgBQgKANgLAJIAAAbIgbALgAgwgwQgVAVAAAcQAAAcAVAUQAUAVAcAAQAcAAAVgVQAUgUABgcQgBgcgUgVQgVgUgcAAQgcAAgUAUg");
	this.shape.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.geardisabled, new cjs.Rectangle(0,0,24,24), null);


(lib.gear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAQBkQgQADgPgDIgSATIgbgLIABgaQgNgKgIgNIgbACIgMgcIAVgSQgDgPADgPIgUgSIALgbIAbAAQAJgNAMgIIAAgbIAbgLIASAUQAOgDARADIASgUIAbALIgBAbQANAJAJAMIAaAAIALAbIgTATQACAOgCAQIATATIgLAaIgbgBQgKANgLAJIAAAbIgbALgAgwgwQgVAVAAAcQAAAcAVAUQAUAVAcAAQAcAAAVgVQAUgUABgcQgBgcgUgVQgVgUgcAAQgcAAgUAUg");
	this.shape.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gear, new cjs.Rectangle(0,0,24,24), null);


(lib.envelopeicon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOASIAGAEQADACAEgBIAGgDIAfgbIBZCYgAAVgTIB1hvIACABIgYD7IgGAIgAh9hmIAEgDIA9BbIhPBcgAhuh5IDrgaIAEAEIidCUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.envelopeicon, new cjs.Rectangle(-14,-14.7,28,29.5), null);


(lib.DBLAShellBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.BitmapShellBackground();
	this.instance.setTransform(-57,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAShellBackground, new cjs.Rectangle(-57,-1,1138,770), null);


(lib.DBLAPopupMessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.text = new cjs.Text("Do you want to quit?", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 396;
	this.text.parent = this;
	this.text.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPopupMessage, new cjs.Rectangle(-200,0,400,35.5), null);


(lib.DBLAPopupBackground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("EggLAO2QgoAAAAgoIAA8bQAAgoAoAAMBAXAAAQAoAAAAAoIAAcbQAAAogoAAg");
	this.shape.setTransform(210,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("EggMAO1QgeAAgIgXQAIADAKAAMBAXAAAQAoAAAAgoIAA8bQAAgKgDgIQAXAIAAAeIAAcbQAAAogoAAg");
	this.shape_1.setTransform(212.125,97.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPopupBackground, new cjs.Rectangle(0,0,422,192), null);


(lib.DBLAHighlightPersonalAvatar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_accent_top")).ss(3,1,0,3).p("An9pNIP7AAQBQAAAABQIAAP7QAABQhQAAIv7AAQhQAAAAhQIAAv7QAAhQBQAAg");
	this.shape.setTransform(59,58.9983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("An9JOQhQAAAAhQIAAv7QAAhQBQAAIP7AAQBQAAAABQIAAP7QAABQhQAAg");
	this.shape_1.setTransform(59,58.9983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAHighlightPersonalAvatar, new cjs.Rectangle(-1.5,-1.5,121,121), null);


(lib.SkipIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E6CBF").s().p("AgHAwIAhgmQg1g+hQA0QAUg0A1gOQA0gOAuAwIAegiIAOCIg");
	this.shape.setTransform(10.75,6.9907);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkipIcon, new cjs.Rectangle(0,0,21.5,14), null);


(lib.BackIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E6CBF").s().p("AgJgZIgmAhIgWhzICIANIgiAfQAwAugOA0QgOA1g1AUQA1hQg+g1g");
	this.shape.setTransform(7.0093,10.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackIcon, new cjs.Rectangle(0,0,14,21.5), null);


(lib.ConcentricAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(239,155,78,0)").ss(3,1,1).p("Ai8jZIF5AAQAdAAAAAdIAAF5QAAAdgdAAIl5AAQgdAAAAgdIAAl5QAAgdAdAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(239,155,78,0.071)").ss(3,1,1).p("Ajdi/QAAgeAeAAIF/AAQAeAAAAAeIAAF/QAAAegeAAIl/AAQgeAAAAgeg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(239,156,78,0.141)").ss(3,1,1).p("AjgjCQAAgeAeAAIGFAAQAeAAAAAeIAAGFQAAAegeAAImFAAQgeAAAAgeg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(239,156,77,0.216)").ss(2.9,1,1).p("AjkjFQAAgfAfAAIGLAAQAfAAAAAfIAAGLQAAAfgfAAImLAAQgfAAAAgfg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(240,156,77,0.286)").ss(2.9,1,1).p("AjnjIQAAgfAfAAIGRAAQAfAAAAAfIAAGRQAAAfgfAAImRAAQgfAAAAgfg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(240,156,77,0.357)").ss(2.8,1,1).p("AjrjLQAAggAgAAIGXAAQAgAAAAAgIAAGXQAAAgggAAImXAAQggAAAAggg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(240,157,77,0.427)").ss(2.8,1,1).p("AjujOQAAggAgAAIGdAAQAgAAAAAgIAAGdQAAAgggAAImdAAQggAAAAggg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(240,157,77,0.502)").ss(2.8,1,1).p("AjxjRQAAggAgAAIGjAAQAgAAAAAgIAAGjQAAAgggAAImjAAQggAAAAggg");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(240,157,76,0.573)").ss(2.7,1,1).p("Aj1jUQAAghAhAAIGpAAQAhAAAAAhIAAGpQAAAhghAAImpAAQghAAAAghg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(240,158,76,0.643)").ss(2.7,1,1).p("Aj4jXQAAghAhAAIGvAAQAhAAAAAhIAAGvQAAAhghAAImvAAQghAAAAghg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(240,158,76,0.714)").ss(2.7,1,1).p("Aj8jaQAAgiAiAAIG1AAQAiAAAAAiIAAG1QAAAigiAAIm1AAQgiAAAAgig");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(241,158,76,0.784)").ss(2.6,1,1).p("Aj/jdQAAgiAiAAIG7AAQAiAAAAAiIAAG7QAAAigiAAIm7AAQgiAAAAgig");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(241,158,75,0.859)").ss(2.6,1,1).p("AkDjgQAAgjAjAAIHBAAQAjAAAAAjIAAHBQAAAjgjAAInBAAQgjAAAAgjg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(241,159,75,0.929)").ss(2.6,1,1).p("AkGjjQAAgjAjAAIHHAAQAjAAAAAjIAAHHQAAAjgjAAInHAAQgjAAAAgjg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F19F4B").ss(2.5,1,1).p("AjmkKIHNAAQAkAAAAAkIAAHNQAAAkgkAAInNAAQgkAAAAgkIAAnNQAAgkAkAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(241,160,74,0.953)").ss(2.4,1,1).p("AkMjoQAAgkAkAAIHRAAQAkAAAAAkIAAHRQAAAkgkAAInRAAQgkAAAAgkg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(242,161,74,0.91)").ss(2.3,1,1).p("AkNjpQAAgkAkAAIHTAAQAkAAAAAkIAAHTQAAAkgkAAInTAAQgkAAAAgkg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(242,162,73,0.863)").ss(2.3,1,1).p("AkPjrQAAgkAkAAIHXAAQAkAAAAAkIAAHXQAAAkgkAAInXAAQgkAAAAgkg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(242,162,73,0.82)").ss(2.2,1,1).p("AkRjsQAAglAlAAIHZAAQAlAAAAAlIAAHZQAAAlglAAInZAAQglAAAAglg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(242,163,72,0.773)").ss(2.1,1,1).p("AkTjuQAAglAlAAIHdAAQAlAAAAAlIAAHdQAAAlglAAIndAAQglAAAAglg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(243,164,72,0.725)").ss(2,1,1).p("AkUjwQAAgkAlAAIHgAAQAkAAAAAkIAAHgQAAAlgkAAIngAAQglAAAAglg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(243,165,72,0.682)").ss(1.9,1,1).p("AkWjxQAAglAlAAIHjAAQAlAAAAAlIAAHjQAAAlglAAInjAAQglAAAAglg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(243,166,71,0.635)").ss(1.8,1,1).p("AkYjzQAAglAmAAIHmAAQAlAAAAAlIAAHmQAAAmglAAInmAAQgmAAAAgmg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(243,167,71,0.592)").ss(1.7,1,1).p("Akaj0QAAgmAmAAIHpAAQAmAAAAAmIAAHpQAAAmgmAAInpAAQgmAAAAgmg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(244,168,70,0.545)").ss(1.6,1,1).p("Akbj2QAAglAmAAIHsAAQAlAAAAAlIAAHsQAAAmglAAInsAAQgmAAAAgmg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(244,169,70,0.502)").ss(1.5,1,1).p("Akdj3QAAgmAmAAIHvAAQAmAAAAAmIAAHvQAAAmgmAAInvAAQgmAAAAgmg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(244,169,69,0.455)").ss(1.4,1,1).p("Akfj5QAAgmAmAAIHzAAQAmAAAAAmIAAHzQAAAmgmAAInzAAQgmAAAAgmg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(245,170,68,0.408)").ss(1.3,1,1).p("Akhj6QAAgnAnAAIH1AAQAnAAAAAnIAAH1QAAAngnAAIn1AAQgnAAAAgng");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(245,171,68,0.365)").ss(1.3,1,1).p("Akjj8QAAgnAnAAIH5AAQAnAAAAAnIAAH5QAAAngnAAIn5AAQgnAAAAgng");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(245,172,67,0.318)").ss(1.2,1,1).p("Akkj9QAAgnAnAAIH7AAQAnAAAAAnIAAH7QAAAngnAAIn7AAQgnAAAAgng");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(245,173,67,0.275)").ss(1.1,1,1).p("Akmj/QAAgnAnAAIH/AAQAnAAAAAnIAAH/QAAAngnAAIn/AAQgnAAAAgng");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(246,174,67,0.227)").ss(1,1,1).p("AkokBQAAgnAoAAIICAAQAnAAAAAnIAAICQAAAognAAIoCAAQgoAAAAgog");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(246,175,66,0.18)").ss(0.9,1,1).p("AkqkCQAAgoAoAAIIFAAQAoAAAAAoIAAIFQAAAogoAAIoFAAQgoAAAAgog");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(246,175,66,0.137)").ss(0.8,1,1).p("AkrkEQAAgnAoAAIIIAAQAnAAAAAnIAAIIQAAAognAAIoIAAQgoAAAAgog");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(246,176,65,0.09)").ss(0.7,1,1).p("AktkFQAAgoAoAAIILAAQAoAAAAAoIAAILQAAAogoAAIoLAAQgoAAAAgog");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(247,177,65,0.047)").ss(0.6,1,1).p("AkvkHQAAgoApAAIIOAAQAoAAAAAoIAAIOQAAApgoAAIoOAAQgpAAAAgpg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(247,178,64,0)").ss(0.5,1,1).p("AkIkxIIRAAQApAAAAApIAAIRQAAApgpAAIoRAAQgpAAAAgpIAAoRQAAgpApAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(19));

	// Layer_1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(239,155,78,0)").ss(3,1,1).p("Ai8jZIF5AAQAdAAAAAdIAAF5QAAAdgdAAIl5AAQgdAAAAgdIAAl5QAAgdAdAAg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(239,155,78,0.071)").ss(3,1,1).p("Ajdi/QAAgeAeAAIF/AAQAeAAAAAeIAAF/QAAAegeAAIl/AAQgeAAAAgeg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(239,156,78,0.141)").ss(3,1,1).p("AjgjCQAAgeAeAAIGFAAQAeAAAAAeIAAGFQAAAegeAAImFAAQgeAAAAgeg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(239,156,77,0.216)").ss(2.9,1,1).p("AjkjFQAAgfAfAAIGLAAQAfAAAAAfIAAGLQAAAfgfAAImLAAQgfAAAAgfg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(240,156,77,0.286)").ss(2.9,1,1).p("AjnjIQAAgfAfAAIGRAAQAfAAAAAfIAAGRQAAAfgfAAImRAAQgfAAAAgfg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(240,156,77,0.357)").ss(2.8,1,1).p("AjrjLQAAggAgAAIGXAAQAgAAAAAgIAAGXQAAAgggAAImXAAQggAAAAggg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(240,157,77,0.427)").ss(2.8,1,1).p("AjujOQAAggAgAAIGdAAQAgAAAAAgIAAGdQAAAgggAAImdAAQggAAAAggg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(240,157,77,0.502)").ss(2.8,1,1).p("AjxjRQAAggAgAAIGjAAQAgAAAAAgIAAGjQAAAgggAAImjAAQggAAAAggg");
	this.shape_44.setTransform(0.025,0.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(240,157,76,0.573)").ss(2.7,1,1).p("Aj1jUQAAghAhAAIGpAAQAhAAAAAhIAAGpQAAAhghAAImpAAQghAAAAghg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(240,158,76,0.643)").ss(2.7,1,1).p("Aj4jXQAAghAhAAIGvAAQAhAAAAAhIAAGvQAAAhghAAImvAAQghAAAAghg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(240,158,76,0.714)").ss(2.7,1,1).p("Aj8jaQAAgiAiAAIG1AAQAiAAAAAiIAAG1QAAAigiAAIm1AAQgiAAAAgig");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(241,158,76,0.784)").ss(2.6,1,1).p("Aj/jdQAAgiAiAAIG7AAQAiAAAAAiIAAG7QAAAigiAAIm7AAQgiAAAAgig");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(241,158,75,0.859)").ss(2.6,1,1).p("AkDjgQAAgjAjAAIHBAAQAjAAAAAjIAAHBQAAAjgjAAInBAAQgjAAAAgjg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(241,159,75,0.929)").ss(2.6,1,1).p("AkGjjQAAgjAjAAIHHAAQAjAAAAAjIAAHHQAAAjgjAAInHAAQgjAAAAgjg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F19F4B").ss(2.5,1,1).p("AjmkKIHNAAQAkAAAAAkIAAHNQAAAkgkAAInNAAQgkAAAAgkIAAnNQAAgkAkAAg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(241,160,74,0.953)").ss(2.4,1,1).p("AkMjoQAAgkAkAAIHRAAQAkAAAAAkIAAHRQAAAkgkAAInRAAQgkAAAAgkg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(242,161,74,0.91)").ss(2.3,1,1).p("AkNjpQAAgkAkAAIHTAAQAkAAAAAkIAAHTQAAAkgkAAInTAAQgkAAAAgkg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(242,162,73,0.863)").ss(2.3,1,1).p("AkPjrQAAgkAkAAIHXAAQAkAAAAAkIAAHXQAAAkgkAAInXAAQgkAAAAgkg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(242,162,73,0.82)").ss(2.2,1,1).p("AkRjsQAAglAlAAIHZAAQAlAAAAAlIAAHZQAAAlglAAInZAAQglAAAAglg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(242,163,72,0.773)").ss(2.1,1,1).p("AkTjuQAAglAlAAIHdAAQAlAAAAAlIAAHdQAAAlglAAIndAAQglAAAAglg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(243,164,72,0.725)").ss(2,1,1).p("AkUjwQAAgkAlAAIHgAAQAkAAAAAkIAAHgQAAAlgkAAIngAAQglAAAAglg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(243,165,72,0.682)").ss(1.9,1,1).p("AkWjxQAAglAlAAIHjAAQAlAAAAAlIAAHjQAAAlglAAInjAAQglAAAAglg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(243,166,71,0.635)").ss(1.8,1,1).p("AkYjzQAAglAmAAIHmAAQAlAAAAAlIAAHmQAAAmglAAInmAAQgmAAAAgmg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(243,167,71,0.592)").ss(1.7,1,1).p("Akaj0QAAgmAmAAIHpAAQAmAAAAAmIAAHpQAAAmgmAAInpAAQgmAAAAgmg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(244,168,70,0.545)").ss(1.6,1,1).p("Akbj2QAAglAmAAIHsAAQAlAAAAAlIAAHsQAAAmglAAInsAAQgmAAAAgmg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(244,169,70,0.502)").ss(1.5,1,1).p("Akdj3QAAgmAmAAIHvAAQAmAAAAAmIAAHvQAAAmgmAAInvAAQgmAAAAgmg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(244,169,69,0.455)").ss(1.4,1,1).p("Akfj5QAAgmAmAAIHzAAQAmAAAAAmIAAHzQAAAmgmAAInzAAQgmAAAAgmg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(245,170,68,0.408)").ss(1.3,1,1).p("Akhj6QAAgnAnAAIH1AAQAnAAAAAnIAAH1QAAAngnAAIn1AAQgnAAAAgng");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(245,171,68,0.365)").ss(1.3,1,1).p("Akjj8QAAgnAnAAIH5AAQAnAAAAAnIAAH5QAAAngnAAIn5AAQgnAAAAgng");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(245,172,67,0.318)").ss(1.2,1,1).p("Akkj9QAAgnAnAAIH7AAQAnAAAAAnIAAH7QAAAngnAAIn7AAQgnAAAAgng");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(245,173,67,0.275)").ss(1.1,1,1).p("Akmj/QAAgnAnAAIH/AAQAnAAAAAnIAAH/QAAAngnAAIn/AAQgnAAAAgng");

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(246,174,67,0.227)").ss(1,1,1).p("AkokBQAAgnAoAAIICAAQAnAAAAAnIAAICQAAAognAAIoCAAQgoAAAAgog");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(246,175,66,0.18)").ss(0.9,1,1).p("AkqkCQAAgoAoAAIIFAAQAoAAAAAoIAAIFQAAAogoAAIoFAAQgoAAAAgog");

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(246,175,66,0.137)").ss(0.8,1,1).p("AkrkEQAAgnAoAAIIIAAQAnAAAAAnIAAIIQAAAognAAIoIAAQgoAAAAgog");

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(246,176,65,0.09)").ss(0.7,1,1).p("AktkFQAAgoAoAAIILAAQAoAAAAAoIAAILQAAAogoAAIoLAAQgoAAAAgog");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(247,177,65,0.047)").ss(0.6,1,1).p("AkvkHQAAgoApAAIIOAAQAoAAAAAoIAAIOQAAApgoAAIoOAAQgpAAAAgpg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(247,178,64,0)").ss(0.5,1,1).p("AkIkxIIRAAQApAAAAApIAAIRQAAApgpAAIoRAAQgpAAAAgpIAAoRQAAgpApAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[]},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.CoinIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// $
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBcIAAgQQgNgCgKgHQgKgGgGgKQgGgKAAgKIAYgDQABAJAGAGQAGAHAIACIAAgwQgKgEgIgFQgIgGgEgIQgFgHAAgMQAAgMAFgIQAFgJAIgFQAIgFAJgBIAAgNIANAAIAAAOQAJABAIAFQAHAFAFAIQAFAJAAAKIgYADQAAgHgDgEQgDgEgEgCIAAAkIAAAAQALAFAKAGQAJAGAGAIQAFAJAAAMQAAAOgGAKQgFAKgKAFQgJAGgLACIAAAQgAAJAzQAHgCAFgFQAEgGABgJQAAgGgFgFQgFgEgHgEgAgNgwQgCAEAAAFQAAAGADAEQADAEAFACIAAgeQgGABgDAEg");
	this.shape.setTransform(-0.075,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CD04").s().p("AhcBcQglgmAAg2QAAg1AlgnQAnglA1AAQA2AAAmAlQAmAnAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// white
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBpQgrgqAAg/QAAg+ArgsQAsgrA+AAQA/AAAqArQAtAsAAA+QAAA/gtAqQgqAtg/AAQg+AAgsgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CoinIcon, new cjs.Rectangle(-15,-15,30,30), null);


(lib.CloseButton_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAjBaIgjg6IghA6Ig4AAIA9heIg2hVIA4AAIAbAyIAcgyIA2AAIg1BVIA8Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Over, new cjs.Rectangle(-9,-9,18,18), null);


(lib.CloseButton_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAjBaIgjg6IghA6Ig4AAIA9heIg2hVIA4AAIAbAyIAcgyIA2AAIg1BVIA8Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Down, new cjs.Rectangle(-9,-9,18,18), null);


(lib.CloseButton_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAjBaIgjg6IghA6Ig4AAIA9heIg2hVIA4AAIAbAyIAcgyIA2AAIg1BVIA8Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Disabled, new cjs.Rectangle(-9,-9,18,18), null);


(lib.CloseButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAjBaIgjg6IghA6Ig4AAIA9heIg2hVIA4AAIAbAyIAcgyIA2AAIg1BVIA8Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton, new cjs.Rectangle(-9,-9,18,18), null);


(lib.CheckMark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag3AVIAPgUIAaAUIAyhKIAUAOIhDBdg");
	this.shape.setTransform(5.575,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CheckMark, new cjs.Rectangle(0,0.5,11.2,10.8), null);


(lib.CheckBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CheckBox, new cjs.Rectangle(0,0,10,10), null);


(lib.AvatarOrnamentation_Silver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#98A4AA","#C6D2DA","#D7E0E6","#99A5AB"],[0,0.376,0.478,1],-15.2,-15.2,15.2,15.2).s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBaAAA+A/QA/A/AABYQAABZg/A/Qg+A/haAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarOrnamentation_Silver, new cjs.Rectangle(-21.5,-21.5,43,43), null);


(lib.AvatarOrnamentation_Gold = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBB117","#FDD81A","#FEED2B","#DAB117"],[0,0.376,0.478,1],-15.2,-15.2,15.2,15.2).s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBaAAA+A/QA/A/AABYQAABZg/A/Qg+A/haAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarOrnamentation_Gold, new cjs.Rectangle(-21.5,-21.5,43,43), null);


(lib.AvatarOrnamentation_Bronze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#906A21","#BE9637","#C7A33F","#996600"],[0,0.376,0.478,1],-15.2,-15.2,15.2,15.2).s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBaAAA+A/QA/A/AABYQAABZg/A/Qg+A/haAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarOrnamentation_Bronze, new cjs.Rectangle(-21.5,-21.5,43,43), null);


(lib.AvatarIconPlaceholder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,47,47,0)").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB9AABXBYQBYBYAAB7QAAB8hYBYQhXBYh9AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarIconPlaceholder, new cjs.Rectangle(-30,-30,60,60), null);


(lib.AvatarIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E9BB4").s().p("AhzBbQAEgIAHgIQAZgdAkAAIBXAAQAjAAAZAdQAHAJAFAIQgwAuhDAAQhEAAgwgvgAgwACQgUgXAAghQAAgjAUgYQAVgYAcAAQAcAAAVAYQAUAYAAAjQAAAhgUAXQgVAagcAAQgcAAgVgag");
	this.shape.setTransform(18.45,21.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E5165").s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2g");
	this.shape_1.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarIcon, new cjs.Rectangle(0,0,37,37), null);


(lib.SkipHelp_FlipAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {FlipSkipStart:0,FlipSkipStop:9,FlipHelpStart:18,FlipHelpStop:27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_27 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(18).call(this.frame_27).wait(4));

	// animation
	this.instance = new lib.HelpButton2();

	this.instance_1 = new lib.SkipButton_Brightness();
	this.instance_1.setTransform(0,10.05,1,0.2157);
	this.instance_1._off = true;

	this.instance_2 = new lib.SkipButton_Disabled();
	this.instance_2.setTransform(0,7.05,1,0.6078);
	this.instance_2._off = true;

	this.instance_3 = new lib.SkipButton();
	this.instance_3.setTransform(0,4.05);
	this.instance_3._off = true;

	this.instance_4 = new lib.HelpButton_Disabled();
	this.instance_4.setTransform(0,10.05,1,0.2157);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.05},2).to({scaleY:0.2157,y:10.05},2).to({_off:true},1).wait(18).to({_off:false,scaleY:1,y:4.05},2).to({y:0},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},1).to({_off:true,scaleY:0.6078,y:7.05},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},1).to({_off:true,scaleY:1,y:4.05},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},1).to({y:0},2).wait(9).to({y:4.05},2).to({scaleY:0.2157,y:10.05},2).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},1).to({_off:true,scaleY:1,y:4.05},2).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-21,21.5,44);


(lib.Scrim_White = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_14_13_500_296 = new lib.nineslice();
	this.nineslice_14_13_500_296.name = "nineslice_14_13_500_296";
	this.nineslice_14_13_500_296.setTransform(-0.2,1.4,4.6296,8.7058,0,0,0,53.8,17.1);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_14_13_500_296).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("EgofAYxQgoABAAgoMAAAgwTQAAgoAoABMBQ/AAAQAogBAAAoMAAAAwTQAAAogogBg");
	this.shape.setTransform(-0.8,-1.2558,1,1.0003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("EgoLAYuQgpgBgKgiMBQ/AAAQAfgBAAgiMAAAgwVQAfAMAAAuMAAAAvjQAAA+g2AAg");
	this.shape_1.setTransform(1.725,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scrim_White, new cjs.Rectangle(-264,-159.8,528,319.70000000000005), null);


(lib.Scrim_InsetGreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_10_10_470_144 = new lib.nineslice();
	this.nineslice_10_10_470_144.name = "nineslice_10_10_470_144";
	this.nineslice_10_10_470_144.setTransform(-1.75,0.45,4.3518,4.2355,0,0,0,53.6,17.1);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_10_10_470_144).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_3")).s().p("EgxNAQzQgyAAAAg2IAA/5QAAg2AyAAMBibAAAQAyAAAAA2IAAf5QAAA2gyAAg");
	this.shape.setTransform(0.0021,-0.0124,0.7656,0.7656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scrim_InsetGreen, new cjs.Rectangle(-245,-82.3,490,164.6), null);


(lib.RectangleBlueLighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(72,23.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleBlueLighter, new cjs.Rectangle(0.5,0.5,143,46), null);


(lib.RectangleBlueDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(72,23.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RectangleBlueDown, new cjs.Rectangle(0.5,0.5,143,46), null);


(lib.PersonalAvatarIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2g");
	mask.setTransform(18.4891,18.4818);

	// image
	this.image = new lib.AvatarIconPlaceholder();
	this.image.name = "image";
	this.image.setTransform(18.4,22.35,0.9101,0.9111,0,0,0,-0.1,0.2);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_avatar_bottom"),"#B7F3FF"],[0.039,1],0,-27.8,0,27.8).s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSg");
	this.shape.setTransform(18.4891,18.4818,0.6655,0.6655);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PersonalAvatarIcon, new cjs.Rectangle(0,0,37,37), null);


(lib.NotificationIconDisbled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(236,236,236,0.8)").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAdIghAXIALgoIghgYIAqgBIAMgnIAOAnIApABIggAZIALAog");
	this.shape_1.setTransform(0,-0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.instance = new lib.StickerNotification();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NotificationIconDisbled, new cjs.Rectangle(-9,-9,18,18), null);


(lib.NotificationIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAdIghAXIALgoIghgYIAqgBIAMgnIAOAnIApABIggAZIALAog");
	this.shape.setTransform(0,-0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.StickerNotification();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NotificationIcon, new cjs.Rectangle(-9,-9,18,18), null);


(lib.TextModal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lct_iconArt
	this.lct_iconArt = new lib.locator();
	this.lct_iconArt.name = "lct_iconArt";
	this.lct_iconArt.setTransform(-178.45,-5.45);

	this.timeline.addTween(cjs.Tween.get(this.lct_iconArt).wait(1));

	// txt_body01
	this.txt_body01 = new cjs.Text("This area is not currently available. \nCome back", "18px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_body01.name = "txt_body01";
	this.txt_body01.lineHeight = 24;
	this.txt_body01.lineWidth = 406;
	this.txt_body01.parent = this;
	this.txt_body01.setTransform(-107.4037,-48.3844,0.7827,0.7827);

	this.timeline.addTween(cjs.Tween.get(this.txt_body01).wait(1));

	// header
	this.txt_header = new cjs.Text("Check back soon!", "bold 36px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_title"));
	this.txt_header.name = "txt_header";
	this.txt_header.textAlign = "center";
	this.txt_header.lineHeight = 48;
	this.txt_header.lineWidth = 467;
	this.txt_header.parent = this;
	this.txt_header.setTransform(0.6,-136.05);

	this.timeline.addTween(cjs.Tween.get(this.txt_header).wait(1));

	// lct_closeBtn
	this.lctCloseBtn = new lib.locator();
	this.lctCloseBtn.name = "lctCloseBtn";
	this.lctCloseBtn.setTransform(246.2,-122,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.lctCloseBtn).wait(1));

	// ButtonLocators
	this.lctModalBtn02 = new lib.locator();
	this.lctModalBtn02.name = "lctModalBtn02";
	this.lctModalBtn02.setTransform(-4.8,125,1,1,0,0,0,-0.8,0);

	this.lctModalBtn03 = new lib.locator();
	this.lctModalBtn03.name = "lctModalBtn03";
	this.lctModalBtn03.setTransform(156.2,125,1,1,0,0,0,-0.8,0);

	this.lctModalBtn01 = new lib.locator();
	this.lctModalBtn01.name = "lctModalBtn01";
	this.lctModalBtn01.setTransform(-165,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctModalBtn01},{t:this.lctModalBtn03},{t:this.lctModalBtn02}]}).wait(1));

	// txt_copyright
	this.txt_copyright = new cjs.Text("Copyright 2022 Dreambox Learning. All rights Reserved.", "16px 'Montreal Serial'", DBLColorManager.platform_white_alpha_100);
	this.txt_copyright.name = "txt_copyright";
	this.txt_copyright.textAlign = "center";
	this.txt_copyright.lineHeight = 22;
	this.txt_copyright.lineWidth = 522;
	this.txt_copyright.parent = this;
	this.txt_copyright.setTransform(-0.95,175);

	this.timeline.addTween(cjs.Tween.get(this.txt_copyright).wait(1));

	// txt_screenReader
	this.txt_screenReader = new cjs.Text("Estoy usando tecnología de asistencia como un lector de pantalla.", "16px 'Arial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_screenReader.name = "txt_screenReader";
	this.txt_screenReader.lineHeight = 20;
	this.txt_screenReader.lineWidth = 452;
	this.txt_screenReader.parent = this;
	this.txt_screenReader.setTransform(-221.95,93.9);

	this.lct_SRCheckbox = new lib.locator();
	this.lct_SRCheckbox.name = "lct_SRCheckbox";
	this.lct_SRCheckbox.setTransform(-239.95,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lct_SRCheckbox},{t:this.txt_screenReader}]}).wait(1));

	// inset
	this.instance = new lib.Scrim_InsetGreen();
	this.instance.setTransform(-0.55,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.Scrim_White();
	this.instance_1.setTransform(0,7.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextModal, new cjs.Rectangle(-264,-152,528,349.1), null);


(lib.LockedModal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lct_iconArt
	this.instance = new lib.ImageLoader();
	this.instance.setTransform(-182.65,10.6,0.6815,0.6815,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// backer art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AkZFlIhAmKQgMhJA+gJIAPgDIgLhCQgNhMAug/QAtg/BNgNIBcgOQBLgNA/AtQA/AuAMBMIALBCIAdgEQA9gKAMBIIBAGLQAMBIg+AKIn4BSIgOABQgxAAgKhAgAgJlGIiEAWQhLALAOBaIALBDIEaguIgLhDQgNhPg8AAIgQACg");
	this.shape.setTransform(-182.575,1.0747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// txt_body04
	this.txt_body04 = new cjs.Text("and make DreamBox your own!", "24px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_body04.name = "txt_body04";
	this.txt_body04.lineHeight = 31;
	this.txt_body04.lineWidth = 462;
	this.txt_body04.parent = this;
	this.txt_body04.setTransform(-132.4037,23.0656,0.7827,0.7827);

	this.timeline.addTween(cjs.Tween.get(this.txt_body04).wait(1));

	// txt_body03
	this.txt_body03 = new cjs.Text("9h:17m", "bold 28px 'Montreal Serial'", DBLColorManager.color("engagement_accent_top"));
	this.txt_body03.name = "txt_body03";
	this.txt_body03.lineHeight = 37;
	this.txt_body03.lineWidth = 462;
	this.txt_body03.parent = this;
	this.txt_body03.setTransform(-132.3979,-4.9344,0.7827,0.7827);

	this.timeline.addTween(cjs.Tween.get(this.txt_body03).wait(1));

	// txt_body02
	this.txt_body02 = new cjs.Text("Come back", "24px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_body02.name = "txt_body02";
	this.txt_body02.lineHeight = 31;
	this.txt_body02.lineWidth = 462;
	this.txt_body02.parent = this;
	this.txt_body02.setTransform(-132.4037,-29.3844,0.7827,0.7827);

	this.timeline.addTween(cjs.Tween.get(this.txt_body02).wait(1));

	// txt_body01
	this.txt_body01 = new cjs.Text("This area is not currently available. ", "24px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.txt_body01.name = "txt_body01";
	this.txt_body01.lineHeight = 31;
	this.txt_body01.lineWidth = 462;
	this.txt_body01.parent = this;
	this.txt_body01.setTransform(-132.4037,-52.3844,0.7827,0.7827);

	this.timeline.addTween(cjs.Tween.get(this.txt_body01).wait(1));

	// header
	this.txt_header = new cjs.Text("Check back soon!", "bold 36px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_title"));
	this.txt_header.name = "txt_header";
	this.txt_header.textAlign = "center";
	this.txt_header.lineHeight = 48;
	this.txt_header.lineWidth = 467;
	this.txt_header.parent = this;
	this.txt_header.setTransform(0.6,-135.05);

	this.timeline.addTween(cjs.Tween.get(this.txt_header).wait(1));

	// lct_closeBtn
	this.lctCloseBtn = new lib.locator();
	this.lctCloseBtn.name = "lctCloseBtn";
	this.lctCloseBtn.setTransform(246.2,-121,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.lctCloseBtn).wait(1));

	// ButtonLocators
	this.lctModalBtn02 = new lib.locator();
	this.lctModalBtn02.name = "lctModalBtn02";
	this.lctModalBtn02.setTransform(-4.8,126,1,1,0,0,0,-0.8,0);

	this.lctModalBtn03 = new lib.locator();
	this.lctModalBtn03.name = "lctModalBtn03";
	this.lctModalBtn03.setTransform(156.2,126,1,1,0,0,0,-0.8,0);

	this.lctModalBtn01 = new lib.locator();
	this.lctModalBtn01.name = "lctModalBtn01";
	this.lctModalBtn01.setTransform(-165,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctModalBtn01},{t:this.lctModalBtn03},{t:this.lctModalBtn02}]}).wait(1));

	// txt_copyright
	this.txt_copyright = new cjs.Text("Copyright 2022 Dreambox Learning. All rights Reserved.", "16px 'Montreal Serial'", DBLColorManager.platform_white_alpha_100);
	this.txt_copyright.name = "txt_copyright";
	this.txt_copyright.textAlign = "center";
	this.txt_copyright.lineHeight = 22;
	this.txt_copyright.lineWidth = 522;
	this.txt_copyright.parent = this;
	this.txt_copyright.setTransform(-0.95,176);

	this.timeline.addTween(cjs.Tween.get(this.txt_copyright).wait(1));

	// inset
	this.instance_1 = new lib.Scrim_InsetGreen();
	this.instance_1.setTransform(-0.55,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.instance_2 = new lib.Scrim_White();
	this.instance_2.setTransform(0,8.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LockedModal, new cjs.Rectangle(-264,-151,528,349.1), null);


(lib.LockIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Lock();
	this.instance.setTransform(0,0,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.StickerLock();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LockIcon, new cjs.Rectangle(-9,-9,18,18), null);


(lib.KeyboardButton_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiLBfQgEAAgCgEQgEgDAAgEIAAioQAAgEAEgDQACgDAEAAIEXAAQADAAAEADQADADAAAEIAACoQAAAEgDADQgEAEgDAAgAh/BKID/AAIAAiUIj/AAgAhjA3IAAgeIDHAAIAAAegABFAPIAAgdIAfAAIAAAdgAAbAPIAAgdIAeAAIAAAdgAgPAPIAAgdIAdAAIAAAdgAg6APIAAgdIAeAAIAAAdgAhjAPIAAgdIAeAAIAAAdgABFgYIAAgeIAfAAIAAAegAAbgYIAAgeIAeAAIAAAegAgPgYIAAgeIAdAAIAAAegAg6gYIAAgeIAeAAIAAAegAhjgYIAAgeIAeAAIAAAeg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardButton_Over, new cjs.Rectangle(-20,-20,40,40), null);


(lib.KeyboardButton_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiLBfQgEAAgCgEQgEgDAAgEIAAioQAAgEAEgDQACgDAEAAIEXAAQADAAAEADQADADAAAEIAACoQAAAEgDADQgEAEgDAAgAh/BKID/AAIAAiUIj/AAgAhjA3IAAgeIDHAAIAAAegABFAPIAAgdIAfAAIAAAdgAAbAPIAAgdIAeAAIAAAdgAgPAPIAAgdIAdAAIAAAdgAg6APIAAgdIAeAAIAAAdgAhjAPIAAgdIAeAAIAAAdgABFgYIAAgeIAfAAIAAAegAAbgYIAAgeIAeAAIAAAegAgPgYIAAgeIAdAAIAAAegAg6gYIAAgeIAeAAIAAAegAhjgYIAAgeIAeAAIAAAeg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardButton_Down, new cjs.Rectangle(-20,-20,40,40), null);


(lib.KeyboardButton_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiLBfQgEAAgCgEQgEgDAAgEIAAioQAAgEAEgDQACgDAEAAIEXAAQADAAAEADQADADAAAEIAACoQAAAEgDADQgEAEgDAAgAh/BKID/AAIAAiUIj/AAgAhjA3IAAgeIDHAAIAAAegABFAPIAAgdIAfAAIAAAdgAAbAPIAAgdIAeAAIAAAdgAgPAPIAAgdIAdAAIAAAdgAg6APIAAgdIAeAAIAAAdgAhjAPIAAgdIAeAAIAAAdgABFgYIAAgeIAfAAIAAAegAAbgYIAAgeIAeAAIAAAegAgPgYIAAgeIAdAAIAAAegAg6gYIAAgeIAeAAIAAAegAhjgYIAAgeIAeAAIAAAeg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardButton_Disabled, new cjs.Rectangle(-20,-20,40,40), null);


(lib.KeyboardButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiLBfQgEAAgCgEQgEgDAAgEIAAioQAAgEAEgDQACgDAEAAIEXAAQADAAAEADQADADAAAEIAACoQAAAEgDADQgEAEgDAAgAh/BKID/AAIAAiUIj/AAgAhjA3IAAgeIDHAAIAAAegABFAPIAAgdIAfAAIAAAdgAAbAPIAAgdIAeAAIAAAdgAgPAPIAAgdIAdAAIAAAdgAg6APIAAgdIAeAAIAAAdgAhjAPIAAgdIAeAAIAAAdgABFgYIAAgeIAfAAIAAAegAAbgYIAAgeIAeAAIAAAegAgPgYIAAgeIAdAAIAAAegAg6gYIAAgeIAeAAIAAAegAhjgYIAAgeIAeAAIAAAeg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardButton, new cjs.Rectangle(-20,-20,40,40), null);


(lib.keyboardBtn_idleAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inverse
	this.instance = new lib.KeyboardButtonInverse();
	this.instance.setTransform(20,19.95);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({alpha:1},4,cjs.Ease.quadOut).to({alpha:0},35,cjs.Ease.quadOut).wait(1));

	// default
	this.instance_1 = new lib.KeyboardButton();
	this.instance_1.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.InfoButton_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgfCCIAAiyIA/AAIAACygAgahMQgKgJAAgNQAAgNAKgJQALgJAPAAQAQAAAKAJQALAJAAANQAAANgLAJQgKAJgQAAQgPAAgLgJg");
	this.shape.setTransform(-0.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InfoButton_Over, new cjs.Rectangle(-20,-20,40,40), null);


(lib.InfoButton_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgfCCIAAiyIA/AAIAACygAgahMQgKgJAAgNQAAgNAKgJQALgJAPAAQAQAAAKAJQALAJAAANQAAANgLAJQgKAJgQAAQgPAAgLgJg");
	this.shape.setTransform(-0.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InfoButton_Down, new cjs.Rectangle(-20,-20,40,40), null);


(lib.InfoButton_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgfCCIAAiyIA/AAIAACygAgahMQgKgJAAgNQAAgNAKgJQALgJAPAAQAQAAAKAJQALAJAAANQAAANgLAJQgKAJgQAAQgPAAgLgJg");
	this.shape.setTransform(-0.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InfoButton_Disabled, new cjs.Rectangle(-20,-20,40,40), null);


(lib.InfoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgfCCIAAiyIA/AAIAACygAgahMQgKgJAAgNQAAgNAKgJQALgJAPAAQAQAAAKAJQALAJAAANQAAANgLAJQgKAJgQAAQgPAAgLgJg");
	this.shape.setTransform(-0.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InfoButton, new cjs.Rectangle(-20,-20,40,40), null);


(lib.IconPlaceholder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 7
	this.instance = new lib.ImageLoader();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlaceholder, new cjs.Rectangle(-30,-30,60,60), null);


(lib.FeedbackNewButton_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_icon
	this.instance = new lib.NotificationIcon();
	this.instance.setTransform(15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance_1 = new lib.RectangleRounded();
	this.instance_1.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackNewButton_Over, new cjs.Rectangle(-20,-24,44,44), null);


(lib.FeedbackNewButton_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_icon
	this.instance = new lib.NotificationIcon();
	this.instance.setTransform(15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.instance_1 = new lib.RectangleRounded();
	this.instance_1.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackNewButton_Down, new cjs.Rectangle(-20,-24,44,44), null);


(lib.FeedbackNewButton_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_icon
	this.instance = new lib.NotificationIconDisbled();
	this.instance.setTransform(15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.instance_1 = new lib.RectangleRounded();
	this.instance_1.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackNewButton_Disabled, new cjs.Rectangle(-20,-24,44,44), null);


(lib.FeedbackButton_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackButton_Over, new cjs.Rectangle(-20,-20,40,40), null);


(lib.FeedbackButton_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackButton_Down, new cjs.Rectangle(-20,-20,40,40), null);


(lib.FeedbackButton_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackButton_Disabled, new cjs.Rectangle(-20,-20,40,40), null);


(lib.FeedbackButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AiFBmIgDgBIBShiIAOARIAGAFQADACAEgBIAGgDIAfgbIBZCXgAAVgSIB1hwIACABIgYD7IgGAHgAh9hmIAEgEIA9BbIhPBdgAhuh6IDrgZIAEAEIidCTg");
	this.shape.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.instance = new lib.RectangleRounded();
	this.instance.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackButton, new cjs.Rectangle(-20,-20,40,40), null);


(lib.envelopeidleanimation = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.envelopeicon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:10.0002},0).wait(2).to({rotation:-10.0002},0).wait(2).to({rotation:10.0002},0).wait(2).to({rotation:-10.0002},0).wait(2).to({rotation:10.0002},0).wait(2).to({rotation:-10.0002},0).wait(2).to({rotation:0},0).wait(58));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-17,32.7,34);


(lib.DBLAToolTip = function(mode,startPosition,loop,reversed) {
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
	this.contents = new cjs.Text("turn background music OFF", "12px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.contents.name = "contents";
	this.contents.textAlign = "center";
	this.contents.lineHeight = 17;
	this.contents.lineWidth = 92;
	this.contents.parent = this;
	this.contents.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.contents).wait(1));

	// Layer 1
	this.background = new lib.ToolTipBackground();
	this.background.name = "background";
	this.background.setTransform(53,26.5,1,1,0,0,0,53,26.5);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAToolTip, new cjs.Rectangle(-50,0,102,52), null);


(lib.DBLAPopupCheckbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// check
	this.check = new lib.CheckMark();
	this.check.name = "check";
	this.check.setTransform(6,10.3,1,1,0,0,0,5,5.3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#73FFD2","#06C9FF"],[0,1],0,5.5,0,-5.5).ss(1,1,0,3).p("AAyAyIhjAAIAAhjIBjAAg");
	this.shape.setTransform(5,12.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// down
	this.down = new lib.CheckBox();
	this.down.name = "down";
	this.down.setTransform(5,12.45,1,1,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.down).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_1.setTransform(5,12.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPopupCheckbox, new cjs.Rectangle(-1,5.5,13.2,13), null);


(lib.DBLAPopupButtonPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:5,Down:10,Disabled:15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.IconPlay();
	this.instance.setTransform(3.6,-0.1,1,1,0,0,0,3.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// base
	this.instance_1 = new lib.MSEBaseGreen();
	this.instance_1.setTransform(0,0,1.05,1);

	this.instance_2 = new lib.MSEBaseGreenOver();
	this.instance_2.setTransform(-0.05,-0.05,1.092,1.04);

	this.instance_3 = new lib.MSEBaseGreenDown();
	this.instance_3.setTransform(0.05,0.05,1.0079,0.96);

	this.instance_4 = new lib.MSEBaseGreenDisabled();
	this.instance_4.setTransform(0,0,1.05,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-20.3,103.69999999999999,40.6);


(lib.DBLAPersonalAvatarButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,Selected:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg");
	var mask_graphics_1 = new cjs.Graphics().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDkAAChChQChChAADjQAADkihChQihChjkAAQjjAAihihg");
	var mask_graphics_2 = new cjs.Graphics().p("Ak9E+QiEiEAAi6QAAi5CEiEQCEiEC5AAQC6AACECEQCECEAAC5QAAC6iECEQiECEi6AAQi5AAiEiEg");
	var mask_graphics_3 = new cjs.Graphics().p("Ak9E+QiEiEAAi6QAAi5CEiEQCEiEC5AAQC6AACECEQCECEAAC5QAAC6iECEQiECEi6AAQi5AAiEiEg");
	var mask_graphics_4 = new cjs.Graphics().p("Ak9E+QiEiEAAi6QAAi5CEiEQCEiEC5AAQC6AACECEQCECEAAC5QAAC6iECEQiECEi6AAQi5AAiEiEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.0129,y:-0.0018}).wait(1).to({graphics:mask_graphics_1,x:0.0057,y:0.023}).wait(1).to({graphics:mask_graphics_2,x:0.0183,y:0.0234}).wait(1).to({graphics:mask_graphics_3,x:0.0183,y:0.0234}).wait(1).to({graphics:mask_graphics_4,x:0.0183,y:0.0234}).wait(1));

	// image
	this.image = new lib.IconPlaceholder();
	this.image.name = "image";
	this.image.setTransform(-0.25,10.25,2.4598,2.4626,0,0,0,-0.1,0.1);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1).to({scaleX:2.7056,scaleY:2.7084},0).wait(1).to({scaleX:2.2132,scaleY:2.2127,x:-0.2,y:10.2},0).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_avatar_bottom"),"#B7F3FF"],[0.039,1],0,-27.8,0,27.8).s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSg");
	this.shape.setTransform(-0.0129,-0.0018,1.7986,1.7986);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({scaleX:1.9776,scaleY:1.9785,x:-0.0016,y:0.0231},0).wait(1).to({scaleX:1.6188,scaleY:1.6187,x:0.019,y:0.0234},0).wait(3));

	// highlight
	this.highlight = new lib.DBLAHighlightPersonalAvatar();
	this.highlight.name = "highlight";
	this.highlight.setTransform(-18,-14,1,1,0,0,0,41,45);
	this.highlight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(4).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-61.5,121,122);


(lib.DBLAHelpButtonCallout = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ring copy
	this.instance = new lib.OrangeRing();
	this.instance.setTransform(20.5,20.5,1,1,0,0,0,19,19);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({regX:18.9,regY:18.9,scaleX:1.35,scaleY:1.35,x:20.4,y:20.4,alpha:1},17).to({scaleX:1.7,scaleY:1.7,alpha:0},18).to({_off:true},1).wait(25));

	// ring
	this.instance_1 = new lib.OrangeRing();
	this.instance_1.setTransform(20.5,20.5,1,1,0,0,0,19,19);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:18.9,regY:18.9,scaleX:1.35,scaleY:1.35,x:20.4,y:20.4,alpha:1},17).to({scaleX:1.7,scaleY:1.7,x:20.35,y:20.35,alpha:0},19).to({_off:true},1).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.3,69.7,69.7);


(lib.DBLAGenericToolTipNoShadow = function(mode,startPosition,loop,reversed) {
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
	this.content = new cjs.Text("Streak of 200 correct answers in a \nrow.", "16px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.content.name = "content";
	this.content.textAlign = "center";
	this.content.lineHeight = 20;
	this.content.lineWidth = 141;
	this.content.parent = this;
	this.content.setTransform(0,-24.95);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	// background
	this.background = new lib.LabelBackground();
	this.background.name = "background";
	this.background.setTransform(-0.3,0.1,1,1,0,0,0,92.2,32.1);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAGenericToolTipNoShadow, new cjs.Rectangle(-92.5,-32,185,69.2), null);


(lib.DBLAGenericToolTip = function(mode,startPosition,loop,reversed) {
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
	this.content = new cjs.Text("Streak of 200 correct answers in a \nrow.", "14px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.content.name = "content";
	this.content.textAlign = "center";
	this.content.lineHeight = 18;
	this.content.lineWidth = 141;
	this.content.parent = this;
	this.content.setTransform(1.45,-25.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	// background
	this.background = new lib.Label();
	this.background.name = "background";
	this.background.setTransform(97.8,2.6,1.845,1.5365,0,0,0,53,1.7);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAGenericToolTip, new cjs.Rectangle(-92.2,-32.2,187.5,67), null);


(lib.DBLAButtonHelp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(6));

	// icon
	this.instance = new lib.HelpButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.HelpButton_Over();
	this.instance_1.setTransform(0,0.35,1.1,1.1);

	this.instance_2 = new lib.HelpButton_Down();
	this.instance_2.setTransform(0,0.05,0.92,0.92);

	this.instance_3 = new lib.HelpButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.instance_4 = new lib.HelpButton_Selected();
	this.instance_4.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	// background
	this.instance_5 = new lib.HeaderButtonBackground();
	this.instance_5.setTransform(0,0,1,1,0,0,0,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},20).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,40,44);


(lib.DBLAPopupButtonCancel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.IconCancel();
	this.instance.setTransform(0,-0.15,0.9,0.9,0,0,0,0,-0.1);

	this.instance_1 = new lib.IconCancelDark();
	this.instance_1.setTransform(0.05,-0.1,0.864,0.864,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.9,scaleY:0.9,x:0,y:-0.15}}]}).to({state:[{t:this.instance,p:{scaleX:0.936,scaleY:0.936,x:-0.05,y:-0.2}}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance,p:{scaleX:0.9,scaleY:0.9,x:0,y:-0.15}}]},5).wait(5));

	// background
	this.base = new lib.MSEBaseRed();
	this.base.name = "base";

	this.base_1 = new lib.MSEBaseRedOver();
	this.base_1.name = "base_1";
	this.base_1.setTransform(-0.05,-0.05,1.04,1.04);

	this.base_2 = new lib.MSEBaseRedDown();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0.05,0.05,0.96,0.96);

	this.base_3 = new lib.MSEBaseRedDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-20.3,98.8,40.6);


(lib.DBLAPopupButtonAccept = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.icon = new lib.IconCheck();
	this.icon.name = "icon";
	this.icon.setTransform(0.1,1.05,1,1,0,0,0,0.1,1.3);

	this.icon_1 = new lib.IconCheckDark();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(0.15,1,0.96,0.96,0,0,0,0.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,x:0.1}}]}).to({state:[{t:this.icon,p:{scaleX:1.04,scaleY:1.04,x:0.05}}]},5).to({state:[{t:this.icon_1}]},5).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,x:0.1}}]},5).wait(5));

	// background
	this.instance = new lib.MSEBaseGreen();
	this.instance.setTransform(0,0,1.05,1);

	this.instance_1 = new lib.MSEBaseGreenOver();
	this.instance_1.setTransform(-0.05,-0.05,1.092,1.04);

	this.instance_2 = new lib.MSEBaseGreenDown();
	this.instance_2.setTransform(0.05,0.05,1.0079,0.96);

	this.instance_3 = new lib.MSEBaseGreenDisabled();
	this.instance_3.setTransform(0,0,1.05,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-20.3,103.69999999999999,40.6);


(lib.SkiplinkContent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblDouble
	this.lblDouble = new cjs.Text("", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblDouble.name = "lblDouble";
	this.lblDouble.textAlign = "center";
	this.lblDouble.lineHeight = 22;
	this.lblDouble.lineWidth = 126;
	this.lblDouble.parent = this;
	this.lblDouble.setTransform(65,-16);

	this.timeline.addTween(cjs.Tween.get(this.lblDouble).wait(1));

	// lblSingle
	this.lblSingle = new cjs.Text("Skip to Content", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblSingle.name = "lblSingle";
	this.lblSingle.textAlign = "center";
	this.lblSingle.lineHeight = 22;
	this.lblSingle.lineWidth = 126;
	this.lblSingle.parent = this;
	this.lblSingle.setTransform(65,-8);

	this.timeline.addTween(cjs.Tween.get(this.lblSingle).wait(1));

	// icon
	this.instance = new lib.SkipIcon();
	this.instance.setTransform(143.8,0,1,1,0,0,0,10.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkiplinkContent, new cjs.Rectangle(0,-18,154.5,36), null);


(lib.BacklinkContent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblDouble
	this.lblDouble = new cjs.Text("", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblDouble.name = "lblDouble";
	this.lblDouble.textAlign = "center";
	this.lblDouble.lineHeight = 22;
	this.lblDouble.lineWidth = 126;
	this.lblDouble.parent = this;
	this.lblDouble.setTransform(65,-16);

	this.timeline.addTween(cjs.Tween.get(this.lblDouble).wait(1));

	// lblSingle
	this.lblSingle = new cjs.Text("Back to Content", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblSingle.name = "lblSingle";
	this.lblSingle.textAlign = "center";
	this.lblSingle.lineHeight = 22;
	this.lblSingle.lineWidth = 126;
	this.lblSingle.parent = this;
	this.lblSingle.setTransform(65,-8);

	this.timeline.addTween(cjs.Tween.get(this.lblSingle).wait(1));

	// icon
	this.instance = new lib.BackIcon();
	this.instance.setTransform(143.8,-3.75,1,1,0,0,0,10.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BacklinkContent, new cjs.Rectangle(0,-18,147,36), null);


(lib.ButtonTokensUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// coin
	this.instance = new lib.CoinIcon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonTokensUp, new cjs.Rectangle(-15,-15,30,30), null);


(lib.ButtonSkip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.SkipButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.SkipButton_Over();
	this.instance_1.setTransform(0,0.05,1.08,1.08);

	this.instance_2 = new lib.SkipButton_Down();
	this.instance_2.setTransform(0,0.05,0.92,0.92);

	this.instance_3 = new lib.SkipButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// background
	this.instance_4 = new lib.HeaderButtonBackground();
	this.instance_4.setTransform(0,0,1,1,0,0,0,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,40,44);


(lib.ButtonPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.PlayButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.PlayButton_Over();
	this.instance_1.setTransform(0,0.05,1.08,1.08);

	this.instance_2 = new lib.PlayButton_Down();
	this.instance_2.setTransform(0,0.05,0.92,0.92);

	this.instance_3 = new lib.PlayButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// background
	this.instance_4 = new lib.HeaderButtonBackground();
	this.instance_4.setTransform(0,0,1,1,0,0,0,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,40,44);


(lib.ButtonPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.gear();
	this.instance.setTransform(0,0,1,1,0,0,0,12,12);

	this.instance_1 = new lib.PauseButton();
	this.instance_1.setTransform(0,-0.05,0.5833,0.5816,0,0,0,0,-0.1);

	this.instance_2 = new lib.PauseButton_Over();
	this.instance_2.setTransform(0,0,0.7477,0.7248);

	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAQB0QgRAEgSgEIgWAWIgegOIABgeQgQgLgJgPIggAAIgMgfIAXgVQgDgSAEgRIgXgWIAOgeIAfABQALgQAPgJIAAggIAegMIAWAWQARgCASAEIAWgXIAeAOIgBAfQAQALAJAPIAgAAIAMAeIgXAWQADARgEASIAXAWIgOAeIgfgBQgLAOgPALIAAAfIgeANgAgehNQgfAMgPAgQgNAgANAfQANAgAfAOQAgAOAfgNQAfgNAPgfQANgggNggQgLgfghgOQgQgHgRAAQgOAAgQAGg");

	this.instance_3 = new lib.PauseButton_Down();
	this.instance_3.setTransform(0,0.1,0.5353,0.5332,0,0,0,0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAPBcQgNADgOgCIgRARIgZgKIAAgYQgLgJgJgLIgYABIgLgZIASgRQgCgOACgOIgSgQIAKgZIAYAAQAIgMAMgIIAAgZIAYgKIARARQAOgCAOACIARgRIAYAJIAAAZQAMAJAIALIAZgBIAKAZIgSARQACANgBAPIARAQIgKAZIgYAAQgIAMgMAIIABAZIgYAKgAgWg4QgYAKgKAYQgKAWALAXQAJAZAYAJQAYAJAWgKQAXgJALgYQAJgXgKgXQgKgYgYgJQgLgFgMAAQgLAAgLAFg");

	this.instance_4 = new lib.PauseButtonDisabled();
	this.instance_4.setTransform(0,-0.05,0.5833,0.5816,0,0,0,0,-0.1);

	this.instance_5 = new lib.geardisabled();
	this.instance_5.setTransform(0,0,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_2}]},5).to({state:[{t:this.shape_1},{t:this.instance_3}]},5).to({state:[{t:this.instance_5},{t:this.instance_4}]},5).wait(5));

	// background
	this.instance_6 = new lib.HeaderButtonBackground();
	this.instance_6.setTransform(0,0,1,1,0,0,0,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,40,44);


(lib.ButtonMyStuff_es = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQARAVASAAQAIAAAHgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQAAgTANgMQAOgNAUAAQANAAALAFQALAFAIAKIgPATQgOgPgNAAQgIAAgFAEQgFAGAAAHQAAAFAEAFIAGAEIANAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgXAAQgeAAgSgZg");
	this.shape.setTransform(44.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAmBIIgLgeIg1AAIgLAeIgfAAIA3iPIAcAAIA2CPgAATATIgPgsIgCgHIgCgRIgBARIgBADIgBAEIgQAsIAmAAg");
	this.shape_1.setTransform(33.55,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQAQAVATAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgQgHIgKgGQgNgLAAgRQAAgTAPgMQANgNAUAAQANAAALAFQAKAFAJAKIgPATQgNgPgOAAQgIAAgFAEQgGAGABAHQAAAFAEAFIAHAEIAMAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgWAAQgeAAgTgZg");
	this.shape_2.setTransform(21.75,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBBQgRgJgKgSQgKgRAAgVQAAgPAGgOQAGgOAKgKQAJgKAOgGQAOgFAPAAQAVAAARAJQARAKAKARQAKASAAAUQAAAQgGAOQgGAOgKAKQgKAKgNAFQgOAGgQAAQgUAAgRgKgAgfghQgNAOAAATQAAANAGALQAGALAKAGQALAHALAAQATAAANgOQANgOAAgUQAAgMgGgLQgGgLgKgGQgLgHgMAAQgSAAgNAOg");
	this.shape_3.setTransform(8.725,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBFQgNgFgJgKQgKgKgGgNQgFgOAAgQQAAgQAFgOQAGgOAKgJQAKgKAOgGQAOgGAOAAQAOAAAOAFIAJAEIALAIIgPAVIgEgCIgCgCQgLgGgOAAQgSAAgOAOQgNANAAATQAAAUANAOQAOAOASAAQALgBAIgDIAMgHIAOAVQgJAIgHACQgQAHgQAAQgPAAgOgGg");
	this.shape_4.setTransform(-5.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQARAVASAAQAIAAAHgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQAAgTANgMQAOgNAUAAQANAAALAFQALAFAIAKIgQATQgNgPgOAAQgGAAgGAEQgFAGgBAHQAAAFAGAFIAFAEIANAGIAPAGIALAGQAGAEAEAIQADAHAAAKQAAAUgOAOQgOANgXAAQgeAAgSgZg");
	this.shape_5.setTransform(-23.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBIIAAiPIAdAAIAACPg");
	this.shape_6.setTransform(-30.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA2BIIgJhMIgBgRIAAgIQgBAOgEAKIgdBNIgTAAIgdhNIgGgYIAAAEIAAACIABALIgBAIIgJBMIgdAAIATiPIAcAAIAgBVQADAJAAAPQABgPAEgJIAfhVIAcAAIATCPg");
	this.shape_7.setTransform(-41.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQARAWAUAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgPgFIgRgHIgKgGQgOgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJALIgRAUQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAGAFIAOAFIAPAHIAMAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgXAAQggAAgTgag");
	this.shape_8.setTransform(47.15,0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAoBMIgMgfIg3AAIgMAfIghAAIA6iXIAdAAIA5CXgAAUAUIgQguIgDgIQgBgIAAgJIgBARIgBAEIgBAEIgRAuIAoAAg");
	this.shape_9.setTransform(35.25,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQARAWAUAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgPgFIgRgHIgKgGQgOgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJALIgRAUQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAGAFIAOAFIAPAHIAMAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgXAAQggAAgTgag");
	this.shape_10.setTransform(22.85,0.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFQgSgLgKgRQgLgTAAgWQABgPAFgPQAHgPAKgKQAKgLAPgGQAOgGAQAAQAWAAATAKQARAKALATQAKASAAAVQAAAQgHAQQgFAOgLAKQgKALgPAGQgOAGgRAAQgVAAgSgKgAghgiQgOAPABATQAAAOAGAMQAHALALAHQAKAGAMAAQAUAAAOgOQANgPAAgVQAAgMgFgMQgHgLgLgIQgLgGgNAAQgTAAgOAPg");
	this.shape_11.setTransform(9.15,0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgLQgLgKgFgPQgGgOAAgRQAAgQAGgOQAGgPAKgKQAKgLAPgGQAOgGAQAAQAPAAANAFIAKAFIAMAHIgQAXIgDgCIgDgCQgLgHgOAAQgUAAgOAOQgPAPAAAUQAAAVAOAOQAOAPAUAAQALAAAJgEQAFgCAHgGIAQAXIgRALQgRAHgSAAQgPAAgOgGg");
	this.shape_12.setTransform(-5.775,0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQASAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgMgLAAgTQAAgUAOgNQAOgNAVAAQAOAAALAFQAMAFAIALIgQAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAGAFIAOAFIAQAHIAKAGQAHAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgWAAQghAAgTgag");
	this.shape_13.setTransform(-24.55,0.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBMIAAiXIAfAAIAACXg");
	this.shape_14.setTransform(-32.35,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA5BMIgJhQIgCgRIABgKQgCAPgEALIgeBRIgUAAIgfhRQgDgKgDgQIAAAEIABADIAAAMIAAAIIgLBQIgfAAIAViXIAdAAIAiBZQADAKAAAQQABgQAEgKIAhhZIAdAAIAVCXg");
	this.shape_15.setTransform(-43.875,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIANgUQARAUARAAQAIAAAHgFQAGgFAAgJQAAgGgGgEQgEgDgOgGIgQgHIgJgEQgLgLAAgQQgBgTANgMQANgMAUAAQANAAAKAEQAKAFAIAKIgPASQgMgOgNAAQgIAAgEAEQgGAFAAAGQAAAHAEAEIAGAEIANAFIAOAGQAGADAEADQAGAEAEAHQADAIABAIQgBAVgOANQgNAMgWAAQgdAAgSgYg");
	this.shape_16.setTransform(43.1,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAkBFIgKgcIgzAAIgLAcIgdAAIA0iJIAbAAIA0CJgAATASIgPgqIgDgHIgBgPIgBAPIgBADIgBAEIgPAqIAlAAg");
	this.shape_17.setTransform(32.225,-0.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAQAUARAAQAJAAAFgFQAHgFAAgJQAAgGgGgEQgEgDgPgGIgPgHIgJgEQgMgLAAgQQABgTANgMQANgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgGAAgFAEQgGAFAAAGQAAAHAFAEIAFAEIANAFIAPAGQAFADAEADQAHAEADAHQADAIAAAIQABAVgOANQgOAMgVAAQgeAAgSgYg");
	this.shape_18.setTransform(20.9,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgjA/QgRgJgJgRQgKgRAAgUQAAgOAFgNQAGgOAKgKQAJgJAOgFQANgHAOABQAUAAARAJQAQAJAKARQAJARAAATQAAAPgGANQgGAOgJAKQgKAJgNAGQgNAFgPABQgTAAgQgKgAgegfQgMANAAASQgBAMAHALQAFAKAKAHQAKAGALAAQASAAAMgNQAOgOAAgTQgBgLgFgLQgHgLgJgFQgKgHgMAAQgRAAgNAOg");
	this.shape_19.setTransform(8.4,-0.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBCQgNgEgJgKQgJgJgFgOQgGgNAAgQQAAgOAGgNQAFgNAKgLQAJgJANgFQANgGAOAAQAOAAANAEIAJAFIALAHIgPAUIgDgBIgCgCQgLgGgNAAQgSgBgNANQgNANAAATQAAAUANANQANANASAAQAKgBAIgDIALgHIAOAVQgJAHgGADQgPAGgRAAQgOAAgNgGg");
	this.shape_20.setTransform(-5.275,-0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvAwIAMgUQAQAUASAAQAIAAAHgFQAGgFAAgJQAAgGgFgEQgFgDgPgGIgOgHIgKgEQgMgLAAgQQAAgTAOgMQAMgMAUAAQANAAAKAEQAKAFAIAKIgPASQgMgOgNAAQgHAAgGAEQgFAFAAAGQAAAHAEAEIAHAEIALAFIAQAGQAFADAEADQAGAEAEAHQADAIAAAIQAAAVgNANQgOAMgVAAQgdAAgSgYg");
	this.shape_21.setTransform(-22.45,-0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAiJIAbAAIAACJg");
	this.shape_22.setTransform(-29.55,-0.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA1BFIgJhIIgBgQIAAgGIAAgBIAAgBIAAgBIAAABIAAABIAAABQgCAMgEAIIgcBKIgRAAIgchKQgDgIgEgPIABADIAAADIABALIgBAIIgJBIIgdAAIATiJIAbAAIAfBRQADAJAAAPQABgPADgJIAfhRIAbAAIATCJg");
	this.shape_23.setTransform(-40.1,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleWhite();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-24,147,47);


(lib.ButtonMyStuff_Active_es = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag2A3IAOgXQATAXAUAAQAJAAAIgGQAHgGAAgJQAAgIgGgFQgGgEgQgGIgSgHIgKgGQgNgMAAgTQAAgVAOgNQAPgOAXgBQAPABALAFQAMAFAJALIgRAVQgPgQgPAAQgIAAgFAFQgGAFgBAIQABAHAFAEIAHAFIANAFIARAHQAGAEAFAEQAHAEAFAIQADAJAAAKQABAXgRAPQgPAOgYAAQgiAAgUgbg");
	this.shape.setTransform(49.45,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AApBPIgLggIg7AAIgMAgIgiAAIA8idIAeAAIA9CdgAAAg0QAAAHgBAJIgBAEIgCAEIgRAwIArAAIgSgwIgCgIQgCgIAAgIIAAgBIAAABg");
	this.shape_1.setTransform(37,0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag2A3IAPgXQASAXAUAAQAJAAAIgGQAHgGAAgJQAAgIgGgFQgFgEgRgGIgRgHIgLgGQgNgMAAgTQgBgVAQgNQAPgOAWgBQAOABAMAFQAMAFAJALIgSAVQgOgQgPAAQgHAAgHAFQgFAFAAAIQAAAHAEAEIAIAFIANAFIARAHQAGAEAGAEQAHAEAEAIQADAJAAAKQAAAXgPAPQgRAOgXAAQgiAAgUgbg");
	this.shape_2.setTransform(24,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgpBIQgTgLgLgSQgKgUAAgXQAAgQAGgPQAGgQALgLQALgLAPgGQAQgHAQAAQAXAAATALQATAKAKATQALAUAAAWQAAASgGAPQgGAPgLALQgLALgQAHQgPAGgRAAQgWAAgTgLgAgigkQgPAQAAAUQAAAOAHAMQAHANALAGQALAIANgBQAVABAOgQQAPgQAAgVQAAgNgHgNQgHgLgLgIQgMgGgNgBQgUAAgOAQg");
	this.shape_3.setTransform(9.675,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgSBNQgPgHgKgKQgLgMgGgPQgGgPAAgSQAAgQAGgPQAHgQAKgLQALgLAPgGQAPgGAQgBQAQABAPAFIAKAEIAMAJIgRAYIgDgDIgCgCQgMgHgPAAQgWAAgOAPQgPAPAAAVQAAAWAPAPQAPAQAUgBQALAAAKgEQAEgCAIgGIAQAYQgKAIgHAEQgSAGgSAAQgQAAgPgFg");
	this.shape_4.setTransform(-6,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag2A3IAOgXQATAXAUAAQAJAAAIgGQAHgGAAgJQAAgIgGgFQgGgEgQgGIgSgHIgKgGQgNgMAAgTQAAgVAOgNQAPgOAXgBQAPABALAFQAMAFAJALIgRAVQgPgQgPAAQgIAAgGAFQgFAFgBAIQABAHAFAEIAHAFIANAFIARAHQAGAEAFAEQAHAEAFAIQADAJAAAKQABAXgRAPQgPAOgYAAQgiAAgUgbg");
	this.shape_5.setTransform(-25.7,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBPIAAidIAfAAIAACdg");
	this.shape_6.setTransform(-33.875,0.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA8BPIgKhTIgBgSIAAgKQgBAPgFALIggBVIgVAAIgfhVQgEgJgDgRIAAAEIAAACIABANIgBAJIgKBTIghAAIAWidIAeAAIAkBdQADAKAAARQACgRADgKIAjhdIAeAAIAWCdg");
	this.shape_7.setTransform(-46,0.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag5A6IAQgZQASAZAWAAQAKAAAIgHQAHgGAAgJQAAgJgHgFQgFgEgRgGIgTgIIgLgGQgOgNAAgTQAAgXAQgOQAQgPAXAAQAPABANAFQAMAGAKALIgTAWQgOgRgRAAQgIAAgGAGQgGAFAAAIQAAAHAFAFIAHAFIAPAGIASAHIALAHQAIAGAEAIQAEAJAAAKQAAAYgRARQgQAPgagBQgjABgVgdg");
	this.shape_8.setTransform(51.925,0.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAsBTIgNgiIg9AAIgNAiIgkAAIA/ilIAhAAIA+ClgAAXAWIgSgzIgDgJQgCgIAAgKIgBASIgBAFIgBAEIgSAzIAsAAg");
	this.shape_9.setTransform(38.85,0.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag5A6IAQgZQASAZAWAAQAKAAAIgHQAHgGAAgJQAAgJgHgFQgFgEgRgGIgTgIQgFgCgGgEQgOgNAAgTQAAgXAQgOQAQgPAXAAQAPABANAFQAMAGAKALIgTAWQgOgRgRAAQgIAAgGAGQgGAFAAAIQAAAHAFAFIAHAFIAPAGIASAHIALAHQAIAGAEAIQAEAJAAAKQAAAYgRARQgQAPgagBQgjABgVgdg");
	this.shape_10.setTransform(25.225,0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMQgUgMgLgTQgLgVAAgXQAAgSAGgQQAHgQALgMQAMgMAQgGQAQgHARAAQAZAAATALQAUALALAVQAMATAAAYQgBASgGAQQgHARgLALQgMALgQAIQgQAGgSAAQgXAAgUgLgAgkgmQgPAQAAAXQAAAOAHANQAHANAMAHQAMAHANAAQAWAAAPgQQAPgQAAgXQABgOgIgMQgGgNgNgIQgMgHgOAAQgVAAgPAQg");
	this.shape_11.setTransform(10.15,0.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgTBQQgQgGgLgLQgKgMgHgQQgHgQABgSQgBgSAHgQQAHgQALgLQAMgMAPgHQAQgGARgBQARABAPAFIALAFIAMAIIgRAaIgEgDIgCgCQgNgIgPABQgXAAgPAPQgPAPAAAXQAAAXAPAQQAPAQAWAAQAMAAAKgFQAFgCAIgGIARAZQgKAJgJADQgRAHgUAAQgRAAgQgGg");
	this.shape_12.setTransform(-6.3,0.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag5A6IAQgZQASAZAWAAQAKAAAIgHQAHgGAAgJQAAgJgHgFQgFgEgRgGIgTgIQgFgCgGgEQgOgNAAgTQAAgXAQgOQAQgPAXAAQAPABANAFQAMAGAKALIgTAWQgOgRgRAAQgIAAgGAGQgGAFAAAIQAAAHAFAFIAHAFIAPAGIASAHIALAHQAIAGAEAIQAEAJAAAKQAAAYgRARQgQAPgagBQgjABgVgdg");
	this.shape_13.setTransform(-26.975,0.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBTIAAilIAhAAIAAClg");
	this.shape_14.setTransform(-35.525,0.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA+BTIgKhXIgBgUIAAgKQgCAQgEAMIghBZIgXAAIghhZQgEgKgDgSIABAEIAAADIAAAOIAAAJIgMBXIghAAIAWilIAgAAIAlBiQAEAKAAASQABgSAEgKIAkhiIAhAAIAWClg");
	this.shape_15.setTransform(-48.25,0.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgWQARAWAUAAQAJAAAHgGQAHgGAAgJQAAgHgGgFQgFgDgQgGIgRgHQgEgCgGgEQgNgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJAKIgRAVQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIANAFIAQAHIALAGQAHAFADAIQAEAIAAAKQAAAWgPAOQgPAOgXAAQggAAgUgag");
	this.shape_16.setTransform(47.475,0.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAoBMIgLgfIg4AAIgMAfIghAAIA6iXIAdAAIA6CXgAAUAUIgQguIgCgIIgCgRIgBARIgBAEIgBAEIgRAuIAoAAg");
	this.shape_17.setTransform(35.525,0.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgWQARAWAUAAQAJAAAHgGQAHgGAAgJQAAgHgGgFQgFgDgQgGIgRgHQgEgCgGgEQgNgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJAKIgRAVQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIANAFIAQAHIALAGQAHAFADAIQAEAIAAAKQAAAWgPAOQgPAOgXAAQggAAgUgag");
	this.shape_18.setTransform(23.075,0.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBGQgSgLgLgSQgKgTAAgWQAAgQAHgOQAFgPALgLQALgKAOgHQAPgFAPgBQAXAAARALQATAKAKATQAKASAAAVQAAARgGAPQgGAOgLALQgKALgPAFQgOAHgRgBQgVABgSgKgAghgjQgNAQAAATQgBAOAHALQAGAMALAHQALAGAMABQAUAAAOgPQAOgPAAgVQAAgMgHgMQgGgMgLgHQgLgGgNAAQgSAAgPAOg");
	this.shape_19.setTransform(9.3,0.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgKQgKgLgHgOQgFgPgBgRQABgQAFgOQAHgPAKgLQAKgKAPgGQAOgGAQAAQAPAAAOAFIAKAEIAMAIIgRAXIgCgCIgEgCQgLgHgOAAQgUAAgOAOQgOAPgBAUQABAVAOAPQAOAOATAAQALAAAJgEIAMgIIAQAYQgJAHgIADQgRAHgRAAQgQAAgOgGg");
	this.shape_20.setTransform(-5.75,0.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgWQARAWAUAAQAJAAAHgGQAHgGAAgJQAAgHgGgFQgFgDgQgGIgRgHQgEgCgGgEQgNgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJAKIgRAVQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIANAFIAQAHIALAGQAHAFADAIQAEAIAAAKQAAAWgPAOQgPAOgXAAQggAAgUgag");
	this.shape_21.setTransform(-24.675,0.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBMIAAiXIAfAAIAACXg");
	this.shape_22.setTransform(-32.525,0.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA6BMIgKhQIgBgRIAAgJIAAgBIAAABQgBAPgFAKIgeBRIgUAAIgfhRIgHgaIABAEIAAACIABANIgBAIIgKBQIgfAAIAUiXIAeAAIAiBaQADAJAAAQQABgQAEgJIAhhaIAeAAIAUCXg");
	this.shape_23.setTransform(-44.125,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(0,0,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleBlueLighter();
	this.instance_1.setTransform(0,-0.05,1,1,0,0,0,72,23.5);

	this.instance_2 = new lib.RectangleBlueDown();
	this.instance_2.setTransform(0,-0.25,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-23.2,147,46.2);


(lib.ButtonMyStuff_Active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBIIAAiPIBLAAIAAAXIgtAAIAAAhIAnAAIAAAXIgnAAIAABAg");
	this.shape.setTransform(37.65,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBIIAAiPIBNAAIAAAXIguAAIAAAhIAnAAIAAAXIgnAAIAABAg");
	this.shape_1.setTransform(29.35,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgXBFQgLgEgIgIQgHgIgDgJQgDgKAAgRIAAhWIAeAAIAABUIABAPQAAAJAIAGQAGAFAKAAQAOAAAHgIQAEgEAAgFIACgSIAAhUIAdAAIAABWQAAAQgBAHQgEARgOALQgPAKgVAAQgNAAgLgFg");
	this.shape_2.setTransform(18.1,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBIIAAh2IghAAIAAgZIBfAAIAAAZIghAAIAAB2g");
	this.shape_3.setTransform(7.175,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQARAVASAAQAIAAAHgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQAAgTANgMQAOgNAUAAQANAAALAFQALAFAIAKIgPATQgOgPgOAAQgHAAgFAEQgFAGAAAHQAAAFAEAFIAGAEIANAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgXAAQgeAAgSgZg");
	this.shape_4.setTransform(-2.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBIIAAhAIgthPIAhAAIAWArQADAGAAANQABgMAEgHIAVgrIAhAAIgsBPIAABAg");
	this.shape_5.setTransform(-18.75,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA3BIIgKhMIgBgRIABgIQgCAOgEAKIgdBNIgSAAIgehNIgGgYIABAEIAAACIAAALIAAAIIgKBMIgdAAIATiPIAcAAIAfBVQAEAJAAAPQABgPADgJIAghVIAcAAIATCPg");
	this.shape_6.setTransform(-32.55,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgoBMIAAiXIBQAAIAAAZIgwAAIAAAiIAqAAIAAAYIgqAAIAABEg");
	this.shape_7.setTransform(39.55,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBMIAAiXIBQAAIAAAZIgyAAIAAAiIArAAIAAAYIgrAAIAABEg");
	this.shape_8.setTransform(30.85,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgYBJQgMgEgIgJQgIgIgDgKQgDgKAAgSIAAhbIAfAAIAABZIABAPQABAKAIAGQAHAFAKAAQAOAAAIgIQAEgFABgFIABgSIAAhZIAfAAIAABbQAAAQgCAIQgEASgPALQgPAKgWAAQgOABgLgFg");
	this.shape_9.setTransform(19.025,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAh7IgjAAIAAgcIBkAAIAAAcIgkAAIAAB7g");
	this.shape_10.setTransform(7.55,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQASAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgMgLAAgTQAAgUAOgNQAOgNAVAAQAOAAALAFQAMAFAIALIgQAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAGAFIANAFIARAHIALAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgWAAQggAAgUgag");
	this.shape_11.setTransform(-2.95,0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAhDIgvhUIAjAAIAWAuQAEAHAAAMQABgMAEgHIAWguIAjAAIgvBUIAABDg");
	this.shape_12.setTransform(-19.675,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA5BMIgJhQIgCgRIABgKQgCAPgEALIgeBRIgUAAIgfhRQgDgKgDgQIAAAEIABADIAAAMIAAAIIgLBQIgfAAIAViXIAdAAIAiBZQADAKAAAQQABgQAEgKIAhhZIAdAAIAVCXg");
	this.shape_13.setTransform(-34.175,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBFIAAiJIBJAAIAAAXIgtAAIAAAfIAnAAIAAAWIgnAAIAAA9g");
	this.shape_14.setTransform(36.175,-0.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBFIAAiJIBJAAIAAAXIgtAAIAAAfIAnAAIAAAWIgnAAIAAA9g");
	this.shape_15.setTransform(28.225,-0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgXBDQgKgFgHgHQgIgHgCgJQgDgKAAgQIAAhTIAcAAIAABRIABAOQABAJAHAFQAHAGAJAAQANgBAHgHQADgFABgEIABgRIAAhRIAdAAIAABTQAAAPgCAGQgDARgOAKQgPAKgUAAQgMAAgLgEg");
	this.shape_16.setTransform(17.425,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAhwIggAAIAAgZIBbAAIAAAZIggAAIAABwg");
	this.shape_17.setTransform(6.875,-0.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvAwIAMgUQAQAUASAAQAIAAAHgFQAGgFAAgJQAAgGgFgEQgFgDgPgGIgOgHIgKgEQgMgLAAgQQAAgTAOgMQAMgMAUAAQANAAAKAEQAKAFAIAKIgPASQgMgOgNAAQgHAAgGAEQgFAFAAAGQAAAHAEAEIAHAEIALAFIAQAGQAFADAEADQAGAEAEAHQADAIAAAIQAAAVgNANQgOAMgVAAQgdAAgSgYg");
	this.shape_18.setTransform(-2.65,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAg9IgrhMIAhAAIATApQAEAHABALQAAgLADgHIAUgpIAhAAIgrBMIAAA9g");
	this.shape_19.setTransform(-18,-0.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA0BFIgJhIIAAgQIAAgGIAAgBIAAgBIAAgBIAAABIAAABIAAABQgCAMgEAIIgcBKIgSAAIgchKQgCgIgEgPIABADIABADIAAALIAAAIIgKBIIgdAAIATiJIAbAAIAfBRQADAJAAAPQABgPAEgJIAdhRIAbAAIATCJg");
	this.shape_20.setTransform(-31.25,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// base
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleBlueLighter();
	this.instance_1.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_2 = new lib.RectangleBlueDown();
	this.instance_2.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-23.5,147,46);


(lib.ButtonMyStuff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBIIAAiPIBLAAIAAAXIgtAAIAAAhIAnAAIAAAXIgnAAIAABAg");
	this.shape.setTransform(37.65,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBIIAAiPIBNAAIAAAXIguAAIAAAhIAnAAIAAAXIgnAAIAABAg");
	this.shape_1.setTransform(29.35,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgXBFQgLgEgIgIQgHgIgDgJQgDgKAAgRIAAhWIAeAAIAABUIABAPQAAAJAIAGQAGAFAKAAQAOAAAHgIQAEgEAAgFIACgSIAAhUIAdAAIAABWQAAAQgBAHQgEARgOALQgPAKgVAAQgNAAgLgFg");
	this.shape_2.setTransform(18.1,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBIIAAh2IghAAIAAgZIBfAAIAAAZIghAAIAAB2g");
	this.shape_3.setTransform(7.175,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQARAVASAAQAIAAAHgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQAAgTANgMQAOgNAUAAQANAAALAFQALAFAIAKIgPATQgOgPgOAAQgHAAgFAEQgFAGAAAHQAAAFAEAFIAGAEIANAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgXAAQgeAAgSgZg");
	this.shape_4.setTransform(-2.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBIIAAhAIgthPIAhAAIAWArQADAGAAANQABgMAEgHIAVgrIAhAAIgsBPIAABAg");
	this.shape_5.setTransform(-18.75,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA3BIIgKhMIgBgRIABgIQgCAOgEAKIgdBNIgSAAIgehNIgGgYIABAEIAAACIAAALIAAAIIgKBMIgdAAIATiPIAcAAIAfBVQAEAJAAAPQABgPADgJIAghVIAcAAIATCPg");
	this.shape_6.setTransform(-32.55,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgoBMIAAiXIBQAAIAAAZIgwAAIAAAiIAqAAIAAAYIgqAAIAABEg");
	this.shape_7.setTransform(39.55,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBMIAAiXIBQAAIAAAZIgyAAIAAAiIArAAIAAAYIgrAAIAABEg");
	this.shape_8.setTransform(30.85,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgYBJQgMgEgIgJQgIgIgDgKQgDgKAAgSIAAhbIAfAAIAABZIABAPQABAKAIAGQAHAFAKAAQAOAAAIgIQAEgFABgFIABgSIAAhZIAfAAIAABbQAAAQgCAIQgEASgPALQgPAKgWAAQgOABgLgFg");
	this.shape_9.setTransform(19.025,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAh7IgjAAIAAgcIBkAAIAAAcIgkAAIAAB7g");
	this.shape_10.setTransform(7.55,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQASAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgMgLAAgTQAAgUAOgNQAOgNAVAAQAOAAALAFQAMAFAIALIgQAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAGAFIANAFIARAHIALAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgWAAQggAAgUgag");
	this.shape_11.setTransform(-2.95,0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAhDIgvhUIAjAAIAWAuQAEAHAAAMQABgMAEgHIAWguIAjAAIgvBUIAABDg");
	this.shape_12.setTransform(-19.675,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA5BMIgJhQIgCgRIABgKQgCAPgEALIgeBRIgUAAIgfhRQgDgKgDgQIAAAEIABADIAAAMIAAAIIgLBQIgfAAIAViXIAdAAIAiBZQADAKAAAQQABgQAEgKIAhhZIAdAAIAVCXg");
	this.shape_13.setTransform(-34.175,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBFIAAiJIBJAAIAAAXIgtAAIAAAfIAnAAIAAAWIgnAAIAAA9g");
	this.shape_14.setTransform(36.175,-0.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBFIAAiJIBJAAIAAAXIgtAAIAAAfIAnAAIAAAWIgnAAIAAA9g");
	this.shape_15.setTransform(28.225,-0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgXBDQgKgFgHgHQgIgHgCgJQgDgKAAgQIAAhTIAcAAIAABRIABAOQABAJAHAFQAHAGAJAAQANgBAHgHQADgFABgEIABgRIAAhRIAdAAIAABTQAAAPgCAGQgDARgOAKQgPAKgUAAQgMAAgLgEg");
	this.shape_16.setTransform(17.425,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAhwIggAAIAAgZIBbAAIAAAZIggAAIAABwg");
	this.shape_17.setTransform(6.875,-0.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvAwIAMgUQAQAUASAAQAIAAAHgFQAGgFAAgJQAAgGgFgEQgFgDgPgGIgOgHIgKgEQgMgLAAgQQAAgTAOgMQAMgMAUAAQANAAAKAEQAKAFAIAKIgPASQgMgOgNAAQgHAAgGAEQgFAFAAAGQAAAHAEAEIAHAEIALAFIAQAGQAFADAEADQAGAEAEAHQADAIAAAIQAAAVgNANQgOAMgVAAQgdAAgSgYg");
	this.shape_18.setTransform(-2.65,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAg9IgrhMIAhAAIATApQAEAHABALQAAgLADgHIAUgpIAhAAIgrBMIAAA9g");
	this.shape_19.setTransform(-18,-0.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA0BFIgJhIIAAgQIAAgGIAAgBIAAgBIAAgBIAAABIAAABIAAABQgCAMgEAIIgcBKIgSAAIgchKQgCgIgEgPIABADIABADIAAALIAAAIIgKBIIgdAAIATiJIAbAAIAfBRQADAJAAAPQABgPAEgJIAdhRIAbAAIATCJg");
	this.shape_20.setTransform(-31.25,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleWhite();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleSurface();
	this.instance_1.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-24,147,47);


(lib.ButtonMyLessons_es = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgyAyIAPgVQAQAVASAAQAIAAAHgGQAHgFAAgIQAAgHgGgEQgFgEgPgFIgQgHIgJgGQgMgLAAgRQgBgTAOgMQAOgNAUAAQAOAAAKAFQAKAFAJAKIgQATQgNgPgOAAQgGAAgGAEQgFAGgBAHQAAAFAGAFIAFAEIANAGIAQAGIAKAGQAGAEAEAIQAEAHgBAKQAAAUgOAOQgPANgVAAQgeAAgUgZg");
	this.shape.setTransform(44.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgoBIIAAiPIBQAAIAAAXIgzAAIAAAhIArAAIAAAXIgrAAIAAAoIA1AAIAAAYg");
	this.shape_1.setTransform(34.55,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAlBIIhBhWQgEgGgHgRIABAFIACAHIACANIAABUIgeAAIAAiPIAdAAIA/BVQAFAGAGARIgDgaIAAhSIAdAAIAACPg");
	this.shape_2.setTransform(22.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBBQgRgJgKgSQgKgRAAgVQAAgPAGgOQAGgOAKgKQAJgKAOgGQAOgFAPAAQAVAAARAJQARAKAKARQAKASAAAUQAAAQgGAOQgGAOgKAKQgKAKgNAFQgOAGgQAAQgUAAgRgKgAgfghQgNAOAAATQAAANAGALQAGALAKAGQALAHALAAQATAAANgOQANgOAAgUQAAgMgGgLQgGgLgKgGQgLgHgMAAQgSAAgNAOg");
	this.shape_3.setTransform(6.725,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBIIAAiPIAdAAIAACPg");
	this.shape_4.setTransform(-3.65,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBFQgNgFgJgKQgKgKgGgNQgFgOAAgQQAAgQAFgOQAGgOAKgJQAKgKAOgGQAOgGAOAAQAOAAAOAFIAJAEIALAIIgPAVIgEgCIgCgCQgLgGgOAAQgSAAgOAOQgNANAAATQAAAUANAOQAOAOASAAQALgBAIgDIAMgHIAOAVQgJAIgHACQgQAHgQAAQgPAAgOgGg");
	this.shape_5.setTransform(-12.25,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBFQgOgFgKgKQgJgKgGgNQgFgOAAgQQAAgQAFgOQAGgOAKgJQAKgKAOgGQANgGAPAAQAPAAAMAFIAKAEIALAIIgPAVIgEgCIgCgCQgLgGgOAAQgSAAgNAOQgOANAAATQAAAUANAOQAOAOASAAQALgBAIgDIAMgHIAOAVQgJAIgGACQgRAHgQAAQgPAAgNgGg");
	this.shape_6.setTransform(-25.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgoBIIAAiPIBQAAIAAAXIgzAAIAAAhIArAAIAAAXIgrAAIAAAoIA0AAIAAAYg");
	this.shape_7.setTransform(-36.45,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBIIAAiPIAeAAIAAB1IArAAIAAAag");
	this.shape_8.setTransform(-45.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAPgXQAQAWAUAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgPgFIgRgHIgKgGQgNgLgBgTQAAgUAPgNQAOgNAVAAQAOAAAMAFQAKAFAKALIgRAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAHAFIAMAFIAQAHIALAGQAIAFADAIQAEAIAAAJQAAAWgQAPQgOAOgXAAQggAAgUgag");
	this.shape_9.setTransform(46.5,0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgqBMIAAiXIBTAAIAAAZIg1AAIAAAiIAuAAIAAAYIguAAIAAArIA4AAIAAAZg");
	this.shape_10.setTransform(36.3,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAnBMIhEhbQgFgGgHgRIABAFIABAGIADAPIAABYIgfAAIAAiXIAeAAIBDBaQAFAGAGASIgEgcIAAhWIAfAAIAACXg");
	this.shape_11.setTransform(23.225,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFQgSgLgKgRQgLgTAAgWQAAgPAHgPQAFgPALgKQALgLAOgGQAOgGAQAAQAWAAASAKQASAKAKATQALASAAAVQgBAQgFAQQgHAOgKAKQgKALgPAGQgOAGgRAAQgVAAgSgKgAghgiQgNAPAAATQgBAOAHAMQAGALALAHQALAGAMAAQAUAAAOgOQANgPAAgVQABgMgHgMQgGgLgLgIQgLgGgNAAQgSAAgPAPg");
	this.shape_12.setTransform(7.05,0.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBMIAAiXIAeAAIAACXg");
	this.shape_13.setTransform(-3.85,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgLQgLgKgFgPQgGgOAAgRQAAgQAGgOQAGgPAKgKQAKgLAPgGQAOgGAQAAQAPAAANAFIAKAFIAMAHIgQAXIgDgCIgDgCQgLgHgOAAQgUAAgOAOQgPAPAAAUQAAAVAOAOQAOAPAUAAQALAAAJgEQAFgCAHgGIAQAXIgRALQgRAHgSAAQgPAAgOgGg");
	this.shape_14.setTransform(-12.875,0.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgLQgLgKgFgPQgGgOAAgRQAAgQAGgOQAGgPAKgKQAKgLAPgGQAOgGAQAAQAPAAANAFIAKAFIAMAHIgQAXIgDgCIgDgCQgLgHgOAAQgUAAgOAOQgPAPAAAUQAAAVAOAOQAOAPAUAAQALAAAJgEQAFgCAHgGIAQAXIgRALQgRAHgSAAQgPAAgOgGg");
	this.shape_15.setTransform(-26.375,0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgqBMIAAiXIBTAAIAAAZIg1AAIAAAiIAuAAIAAAYIguAAIAAArIA3AAIAAAZg");
	this.shape_16.setTransform(-38.25,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBMIAAiXIAfAAIAAB7IAuAAIAAAcg");
	this.shape_17.setTransform(-47.45,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvAwIAMgUQARAUARAAQAIAAAHgFQAGgFAAgJQAAgGgFgEQgFgDgOgGIgPgHIgKgEQgLgLAAgQQAAgTAMgMQANgMAUAAQANAAAKAEQAKAFAIAKIgPASQgMgOgNAAQgHAAgGAEQgFAFAAAGQAAAHAEAEIAGAEIAMAFIAPAGQAGADAEADQAHAEADAHQAEAIAAAIQAAAVgPANQgNAMgWAAQgdAAgRgYg");
	this.shape_18.setTransform(42.55,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFIAAiJIBNAAIAAAXIgxAAIAAAfIAqAAIAAAWIgqAAIAAAmIAzAAIAAAXg");
	this.shape_19.setTransform(33.2,-0.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAkBFIg/hSQgEgGgGgQIAAAEIACAHIACANIAABQIgcAAIAAiJIAbAAIA9BRQAFAGAFARIgDgaIAAhOIAcAAIAACJg");
	this.shape_20.setTransform(21.275,-0.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkA/QgQgJgKgRQgJgRAAgUQAAgOAGgNQAFgOAKgKQAJgJAOgFQANgHAOABQAUAAAQAJQARAJAJARQAKARAAATQAAAPgGANQgFAOgKAKQgJAJgOAGQgNAFgPABQgTAAgRgKgAgegfQgNANAAASQABAMAGALQAFAKAKAHQAKAGALAAQASAAANgNQANgOAAgTQAAgLgHgLQgFgLgKgFQgKgHgMAAQgRAAgNAOg");
	this.shape_21.setTransform(6.45,-0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAiJIAbAAIAACJg");
	this.shape_22.setTransform(-3.5,-0.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBCQgNgEgJgKQgJgJgFgOQgGgNAAgQQAAgOAGgNQAFgNAKgLQAJgJANgFQANgGAOAAQAOAAANAEIAJAFIALAHIgPAUIgDgBIgCgCQgLgGgNAAQgSgBgNANQgNANAAATQAAAUANANQANANASAAQAKgBAIgDIALgHIAOAVQgJAHgGADQgPAGgRAAQgOAAgNgGg");
	this.shape_23.setTransform(-11.775,-0.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBCQgNgEgJgKQgJgJgFgOQgGgNAAgQQAAgOAGgNQAFgNAKgLQAJgJANgFQANgGAOAAQAOAAANAEIAJAFIALAHIgPAUIgDgBIgCgCQgLgGgNAAQgSgBgNANQgNANAAATQAAAUANANQANANASAAQAKgBAIgDIALgHIAOAVQgJAHgGADQgPAGgRAAQgOAAgNgGg");
	this.shape_24.setTransform(-24.075,-0.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFIAAiJIBNAAIAAAXIgxAAIAAAfIAqAAIAAAWIgqAAIAAAmIAyAAIAAAXg");
	this.shape_25.setTransform(-35,-0.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgiBFIAAiJIAbAAIAABwIArAAIAAAZg");
	this.shape_26.setTransform(-43.35,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleWhite();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-24,147,47);


(lib.ButtonMyLessons_Active_es = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag2A3IAPgXQASAXAUAAQAJAAAIgGQAHgGAAgJQAAgIgGgFQgFgEgRgGIgRgHIgLgGQgNgMAAgTQgBgVAQgNQAPgOAWgBQAOABAMAFQAMAFAJALIgSAVQgOgQgPAAQgHAAgHAFQgFAFAAAIQAAAHAEAEIAIAFIANAFIARAHQAGAEAGAEQAHAEAEAIQADAJAAAKQAAAXgPAPQgRAOgXAAQgiAAgUgbg");
	this.shape.setTransform(48.75,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgsBPIAAidIBYAAIAAAaIg4AAIAAAjIAwAAIAAAaIgwAAIAAAsIA6AAIAAAag");
	this.shape_1.setTransform(38,0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AApBPIhIhfQgFgGgHgSIABAFIABAHIADAPIAABcIghAAIAAidIAgAAIBGBdQAFAHAHATIgEgdIAAhaIAgAAIAACdg");
	this.shape_2.setTransform(24.35,0.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgpBIQgTgLgLgSQgKgUAAgXQAAgQAGgPQAGgQALgLQALgLAPgGQAQgHAQAAQAXAAATALQATAKAKATQALAUAAAWQAAASgGAPQgGAPgLALQgLALgQAHQgPAGgRAAQgWAAgTgLgAgigkQgPAQAAAUQAAAOAHAMQAHANALAGQALAIANgBQAVABAOgQQAPgQAAgVQAAgNgHgNQgHgLgLgIQgMgGgNgBQgUAAgOAQg");
	this.shape_3.setTransform(7.425,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBPIAAidIAfAAIAACdg");
	this.shape_4.setTransform(-4.025,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgSBNQgPgHgKgKQgLgMgGgPQgGgPAAgSQAAgQAGgPQAHgQAKgLQALgLAPgGQAPgGAQgBQAQABAOAFIALAEIAMAJIgRAYIgDgDIgDgCQgLgHgQAAQgVAAgPAPQgOAPAAAVQAAAWAOAPQAPAQAVgBQAMAAAJgEQAFgCAHgGIARAYQgLAIgHAEQgRAGgTAAQgQAAgPgFg");
	this.shape_5.setTransform(-13.5,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgSBNQgPgHgLgKQgKgMgGgPQgGgPAAgSQAAgQAGgPQAGgQALgLQALgLAPgGQAPgGARgBQAPABAOAFIALAEIAMAJIgQAYIgEgDIgDgCQgMgHgPAAQgUAAgQAPQgOAPAAAVQAAAWAOAPQAPAQAVgBQAMAAAIgEQAGgCAIgGIAQAYQgKAIgIAEQgRAGgTAAQgQAAgPgFg");
	this.shape_6.setTransform(-27.65,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgtBPIAAidIBZAAIAAAaIg4AAIAAAjIAwAAIAAAaIgwAAIAAAsIA5AAIAAAag");
	this.shape_7.setTransform(-40.15,0.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgoBPIAAidIAhAAIAACBIAwAAIAAAcg");
	this.shape_8.setTransform(-49.725,0.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag5A6IAQgZQASAZAWAAQAKAAAIgHQAHgGAAgJQAAgJgHgFQgFgEgRgGIgTgIQgFgCgGgEQgOgNAAgTQAAgXAQgOQAQgPAXAAQAPABANAFQAMAGAKALIgTAWQgOgRgRAAQgIAAgGAGQgGAFAAAIQAAAHAFAFIAHAFIAPAGIASAHIALAHQAIAGAEAIQAEAJAAAKQAAAYgRARQgQAPgagBQgjABgVgdg");
	this.shape_9.setTransform(51.175,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvBTIAAilIBdAAIAAAbIg6AAIAAAmIAyAAIAAAaIgyAAIAAAvIA8AAIAAAbg");
	this.shape_10.setTransform(39.925,0.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AArBTIhLhjQgGgHgHgTIABAFIACAIIADAPIAABhIgjAAIAAilIAhAAIBKBiQAFAHAHAUIgEgeIAAhfIAiAAIAAClg");
	this.shape_11.setTransform(25.55,0.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMQgUgMgLgTQgMgVABgXQAAgSAGgQQAHgQALgMQAMgMAQgGQAQgHARAAQAYAAAUALQAUALALAVQAMATAAAYQgBASgGAQQgHARgLALQgMALgPAIQgQAGgTAAQgXAAgUgLgAgkgmQgPAQAAAXQAAAOAHANQAHANAMAHQAMAHANAAQAWAAAPgQQAQgQAAgXQAAgOgIgMQgGgNgNgIQgMgHgOAAQgVAAgPAQg");
	this.shape_12.setTransform(7.8,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgQBTIAAilIAhAAIAAClg");
	this.shape_13.setTransform(-4.225,0.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgSBQQgRgGgKgLQgLgMgHgQQgGgQAAgSQAAgSAGgQQAHgQALgLQALgMARgHQAPgGARgBQARABAPAFIALAFIANAIIgRAaIgFgDIgCgCQgNgIgPABQgXAAgPAPQgPAPAAAXQAAAXAPAQQAPAQAWAAQAMAAAJgFQAGgCAJgGIAQAZQgLAJgIADQgSAHgTAAQgRAAgPgGg");
	this.shape_14.setTransform(-14.2,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgSBQQgRgGgKgLQgLgMgHgQQgGgQAAgSQAAgSAGgQQAHgQALgLQALgMARgHQAPgGARgBQARABAPAFIALAFIANAIIgRAaIgFgDIgCgCQgNgIgPABQgXAAgPAPQgPAPAAAXQAAAXAPAQQAPAQAWAAQAMAAAJgFQAGgCAJgGIAQAZQgLAJgIADQgSAHgTAAQgRAAgPgGg");
	this.shape_15.setTransform(-29.05,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgvBTIAAilIBdAAIAAAbIg6AAIAAAmIAyAAIAAAaIgyAAIAAAvIA8AAIAAAbg");
	this.shape_16.setTransform(-42.175,0.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgqBTIAAilIAjAAIAACHIAyAAIAAAeg");
	this.shape_17.setTransform(-52.225,0.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgWQARAWAUAAQAJAAAHgGQAHgGAAgJQAAgHgGgFQgFgDgQgGIgRgHQgEgCgGgEQgNgLAAgTQAAgUAPgNQAOgNAVAAQAPAAALAFQALAFAJAKIgRAVQgNgQgPAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIANAFIAQAHIALAGQAHAFADAIQAEAIAAAKQAAAWgPAOQgPAOgXAAQggAAgUgag");
	this.shape_18.setTransform(46.825,0.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMIAAiXIBVAAIAAAZIg1AAIAAAiIAtAAIAAAZIgtAAIAAAqIA3AAIAAAZg");
	this.shape_19.setTransform(36.475,0.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAnBMIhEhbQgFgGgHgRIABAEIACAHIACAPIAABYIggAAIAAiXIAfAAIBDBaQAFAGAHASIgFgbIAAhXIAgAAIAACXg");
	this.shape_20.setTransform(23.35,0.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBGQgSgLgKgSQgLgTAAgWQAAgQAGgOQAHgPAKgLQAKgKAPgHQAPgFAPgBQAXAAASALQARAKALATQAKASAAAVQAAARgGAPQgGAOgKALQgLALgOAFQgPAHgRgBQgVABgSgKgAgggjQgOAQgBATQABAOAGALQAGAMALAHQALAGAMABQAUAAAOgPQAOgPAAgVQAAgMgGgMQgHgMgLgHQgLgGgNAAQgTAAgNAOg");
	this.shape_21.setTransform(7.1,0.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgPBMIAAiXIAfAAIAACXg");
	this.shape_22.setTransform(-3.825,0.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgKQgKgLgHgOQgFgPgBgRQABgQAFgOQAHgPAKgLQAKgKAPgGQAOgGAQAAQAPAAAOAFIAKAEIAMAIIgRAXIgCgCIgEgCQgLgHgOAAQgUAAgOAOQgOAPgBAUQABAVAOAPQAOAOATAAQALAAAJgEIAMgIIAQAYQgJAHgIADQgRAHgRAAQgQAAgOgGg");
	this.shape_23.setTransform(-12.95,0.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgRBJQgOgGgKgKQgLgLgGgOQgFgPgBgRQABgQAFgOQAHgPAKgLQAKgKAPgGQAOgGAQAAQAPAAAOAFIAKAEIAMAIIgQAXIgDgCIgEgCQgLgHgOAAQgUAAgPAOQgOAPABAUQgBAVAOAPQAOAOAUAAQALAAAJgEIANgIIAPAYQgKAHgHADQgRAHgRAAQgQAAgOgGg");
	this.shape_24.setTransform(-26.55,0.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMIAAiXIBVAAIAAAZIg1AAIAAAiIAtAAIAAAZIgtAAIAAAqIA3AAIAAAZg");
	this.shape_25.setTransform(-38.525,0.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBMIAAiXIAfAAIAAB8IAuAAIAAAbg");
	this.shape_26.setTransform(-47.725,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(0,0,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleBlueLighter();
	this.instance_1.setTransform(0,0.4,1,1,0,0,0,72,23.5);

	this.instance_2 = new lib.RectangleBlueDown();
	this.instance_2.setTransform(0,-0.25,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-23.2,147,46.599999999999994);


(lib.ButtonMyLessons_Active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIAOgVQAQAVASAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQgBgTAOgMQAOgNAUAAQAOAAAKAFQALAFAIAKIgQATQgNgPgOAAQgGAAgGAEQgFAGgBAHQAAAFAGAFIAFAEIANAGIAQAGIAKAGQAGAEAEAIQAEAHgBAKQAAAUgOAOQgOANgXAAQgeAAgSgZg");
	this.shape.setTransform(51.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAlBIIhBhWQgFgGgGgRIABAFIABAHIADANIAABUIgeAAIAAiPIAcAAIBABVQAFAGAGARIgEgaIAAhSIAeAAIAACPg");
	this.shape_1.setTransform(38.95,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBBQgRgJgKgSQgKgRAAgVQAAgPAGgOQAGgOAKgKQAJgKAOgGQAOgFAPAAQAVAAARAJQARAKAKARQAKASAAAUQAAAQgGAOQgGAOgKAKQgKAKgNAFQgOAGgQAAQgUAAgRgKgAgfghQgNAOAAATQAAANAGALQAGALAKAGQALAHALAAQATAAANgOQANgOAAgUQAAgMgGgLQgGgLgKgGQgLgHgMAAQgSAAgNAOg");
	this.shape_2.setTransform(23.575,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQAQAVATAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgQgHIgKgGQgNgLAAgRQAAgTAPgMQANgNAUAAQANAAALAFQAKAFAJAKIgPATQgNgPgOAAQgIAAgFAEQgGAGABAHQAAAFAEAFIAHAEIAMAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgWAAQgeAAgTgZg");
	this.shape_3.setTransform(10.05,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgyAyIAPgVQAQAVASAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgPgFIgPgHIgKgGQgNgLAAgRQABgTAOgMQANgNAUAAQAOAAAKAFQAKAFAJAKIgPATQgNgPgOAAQgIAAgFAEQgGAGAAAHQABAFAEAFIAHAEIAMAGIAQAGIAKAGQAGAEAEAIQAEAHAAAKQAAAUgPAOQgPANgVAAQgeAAgUgZg");
	this.shape_4.setTransform(-0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgpBIIAAiPIBQAAIAAAXIgyAAIAAAhIArAAIAAAXIgrAAIAAAoIA0AAIAAAYg");
	this.shape_5.setTransform(-10.25,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBIIAAiPIAeAAIAAB1IArAAIAAAag");
	this.shape_6.setTransform(-19,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBIIAAhAIgthPIAhAAIAWArQADAGAAANQABgMAEgHIAVgrIAhAAIgsBPIAABAg");
	this.shape_7.setTransform(-34.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA3BIIgKhMIgBgRIABgIQgCAOgEAKIgdBNIgSAAIgehNIgGgYIABAEIAAACIAAALIAAAIIgKBMIgdAAIATiPIAcAAIAfBVQAEAJAAAPQABgPADgJIAghVIAcAAIATCPg");
	this.shape_8.setTransform(-48.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAPgXQARAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgNgLABgTQAAgUAOgNQAOgNAVAAQAPAAAKAFQALAFAKALIgRAUQgOgQgOAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIAMAFIARAHIAKAGQAIAFADAIQAEAIAAAJQAAAWgQAPQgOAOgXAAQghAAgTgag");
	this.shape_9.setTransform(53.95,0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAnBMIhEhbQgFgGgHgRIABAFIABAGIADAPIAABYIgfAAIAAiXIAeAAIBDBaQAFAGAGASIgEgcIAAhWIAfAAIAACXg");
	this.shape_10.setTransform(40.925,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFQgSgLgKgRQgKgTAAgWQAAgPAFgPQAHgPAKgKQAKgLAPgGQAPgGAPAAQAWAAATAKQARAKAKATQALASgBAVQAAAQgFAQQgGAOgKAKQgLALgPAGQgPAGgQAAQgVAAgSgKgAgggiQgOAPgBATQABAOAGAMQAHALALAHQALAGALAAQAUAAAOgOQAOgPAAgVQAAgMgHgMQgGgLgLgIQgLgGgNAAQgSAAgOAPg");
	this.shape_11.setTransform(24.75,0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQASAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgMgLAAgTQAAgUAOgNQAOgNAVAAQAOAAALAFQAMAFAIALIgQAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAGAFIANAFIARAHIALAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgWAAQggAAgUgag");
	this.shape_12.setTransform(10.55,0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAPgXQARAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgNgLABgTQAAgUAOgNQAOgNAVAAQAPAAAKAFQALAFAKALIgRAUQgOgQgOAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIAMAFIARAHIAKAGQAIAFADAIQAEAIAAAJQAAAWgQAPQgOAOgXAAQghAAgTgag");
	this.shape_13.setTransform(-0.5,0.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMIAAiXIBVAAIAAAZIg1AAIAAAiIAtAAIAAAYIgtAAIAAArIA3AAIAAAZg");
	this.shape_14.setTransform(-10.75,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBMIAAiXIAfAAIAAB7IAuAAIAAAcg");
	this.shape_15.setTransform(-19.9,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAhDIgvhUIAjAAIAWAuQAEAHAAAMQABgMAEgHIAWguIAjAAIgvBUIAABDg");
	this.shape_16.setTransform(-36.225,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA5BMIgJhQIgCgRIABgKQgCAPgEALIgeBRIgUAAIgfhRQgDgKgDgQIAAAEIABADIAAAMIAAAIIgLBQIgfAAIAViXIAdAAIAiBZQADAKAAAQQABgQAEgKIAhhZIAdAAIAVCXg");
	this.shape_17.setTransform(-50.725,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAQAUARAAQAJAAAFgFQAHgFAAgJQAAgGgGgEQgEgDgPgGIgOgHIgKgEQgMgLAAgQQABgTANgMQANgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgHAAgEAEQgGAFAAAGQAAAHAFAEIAGAEIAMAFIAPAGQAFADAEADQAHAEADAHQAEAIgBAIQABAVgOANQgPAMgUAAQgdAAgTgYg");
	this.shape_18.setTransform(49.35,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAkBFIg/hSQgEgGgGgQIAAAEIACAHIACANIAABQIgcAAIAAiJIAbAAIA9BRQAFAGAFARIgDgaIAAhOIAcAAIAACJg");
	this.shape_19.setTransform(37.425,-0.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkA/QgQgJgKgRQgJgRAAgUQAAgOAGgNQAFgOAKgKQAJgJAOgFQANgHAOABQAUAAAQAJQARAJAJARQAKARAAATQAAAPgGANQgFAOgKAKQgJAJgOAGQgNAFgPABQgTAAgRgKgAgegfQgNANAAASQABAMAFALQAGAKAKAHQAKAGALAAQASAAANgNQANgOAAgTQAAgLgHgLQgFgLgKgFQgKgHgMAAQgRAAgNAOg");
	this.shape_20.setTransform(22.65,-0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAQAUARAAQAJAAAFgFQAHgFAAgJQAAgGgGgEQgEgDgPgGIgPgHIgJgEQgMgLAAgQQABgTANgMQANgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgGAAgFAEQgGAFAAAGQAAAHAFAEIAFAEIANAFIAPAGQAFADAEADQAHAEADAHQADAIAAAIQABAVgOANQgOAMgVAAQgeAAgSgYg");
	this.shape_21.setTransform(9.65,-0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAPAUASAAQAIAAAHgFQAGgFAAgJQAAgGgGgEQgEgDgOgGIgQgHIgJgEQgLgLAAgQQgBgTANgMQAOgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgGAAgFAEQgGAFAAAGQAAAHAFAEIAFAEIANAFIAOAGQAGADAEADQAGAEAEAHQADAIABAIQgBAVgOANQgOAMgVAAQgdAAgSgYg");
	this.shape_22.setTransform(-0.45,-0.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFIAAiJIBNAAIAAAXIgxAAIAAAfIAqAAIAAAWIgqAAIAAAmIAzAAIAAAXg");
	this.shape_23.setTransform(-9.8,-0.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgjBFIAAiJIAcAAIAABwIAqAAIAAAZg");
	this.shape_24.setTransform(-18.2,-0.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAg9IgrhMIAhAAIATApQAEAHABALQAAgLADgHIAUgpIAhAAIgrBMIAAA9g");
	this.shape_25.setTransform(-33.1,-0.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA0BFIgJhIIgBgQIABgGIAAgBIAAgBIAAgBIAAABIAAABIAAABQgCAMgDAIIgcBKIgTAAIgchKQgDgIgCgPIAAADIABADIAAALIAAAIIgKBIIgcAAIATiJIAbAAIAeBRQADAJAAAPQABgPADgJIAehRIAbAAIATCJg");
	this.shape_26.setTransform(-46.35,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleBlue();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleBlueLighter();
	this.instance_1.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_2 = new lib.RectangleBlueDown();
	this.instance_2.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-23.5,147,46);


(lib.ButtonMyLessons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIAOgVQAQAVASAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgRgHIgJgGQgMgLAAgRQgBgTAOgMQAOgNAUAAQAOAAAKAFQALAFAIAKIgQATQgNgPgOAAQgGAAgGAEQgFAGgBAHQAAAFAGAFIAFAEIANAGIAQAGIAKAGQAGAEAEAIQAEAHgBAKQAAAUgOAOQgOANgXAAQgeAAgSgZg");
	this.shape.setTransform(51.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAlBIIhBhWQgFgGgGgRIABAFIABAHIADANIAABUIgeAAIAAiPIAcAAIBABVQAFAGAGARIgEgaIAAhSIAeAAIAACPg");
	this.shape_1.setTransform(38.95,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AglBBQgRgJgKgSQgKgRAAgVQAAgPAGgOQAGgOAKgKQAJgKAOgGQAOgFAPAAQAVAAARAJQARAKAKARQAKASAAAUQAAAQgGAOQgGAOgKAKQgKAKgNAFQgOAGgQAAQgUAAgRgKgAgfghQgNAOAAATQAAANAGALQAGALAKAGQALAHALAAQATAAANgOQANgOAAgUQAAgMgGgLQgGgLgKgGQgLgHgMAAQgSAAgNAOg");
	this.shape_2.setTransform(23.575,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgxAyIANgVQAQAVATAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgOgFIgQgHIgKgGQgNgLAAgRQAAgTAPgMQANgNAUAAQANAAALAFQAKAFAJAKIgPATQgNgPgOAAQgIAAgFAEQgGAGABAHQAAAFAEAFIAHAEIAMAGIAPAGIAKAGQAIAEADAIQADAHABAKQAAAUgPAOQgOANgWAAQgeAAgTgZg");
	this.shape_3.setTransform(10.05,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgyAyIAPgVQAQAVASAAQAJAAAGgGQAHgFAAgIQAAgHgGgEQgFgEgPgFIgPgHIgKgGQgNgLAAgRQABgTAOgMQANgNAUAAQAOAAAKAFQAKAFAJAKIgPATQgNgPgOAAQgIAAgFAEQgGAGAAAHQABAFAEAFIAHAEIAMAGIAQAGIAKAGQAGAEAEAIQAEAHAAAKQAAAUgPAOQgPANgVAAQgeAAgUgZg");
	this.shape_4.setTransform(-0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgpBIIAAiPIBQAAIAAAXIgyAAIAAAhIArAAIAAAXIgrAAIAAAoIA0AAIAAAYg");
	this.shape_5.setTransform(-10.25,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkBIIAAiPIAeAAIAAB1IArAAIAAAag");
	this.shape_6.setTransform(-19,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBIIAAhAIgthPIAhAAIAWArQADAGAAANQABgMAEgHIAVgrIAhAAIgsBPIAABAg");
	this.shape_7.setTransform(-34.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA3BIIgKhMIgBgRIABgIQgCAOgEAKIgdBNIgSAAIgehNIgGgYIABAEIAAACIAAALIAAAIIgKBMIgdAAIATiPIAcAAIAfBVQAEAJAAAPQABgPADgJIAghVIAcAAIATCPg");
	this.shape_8.setTransform(-48.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAPgXQARAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgNgLABgTQAAgUAOgNQAOgNAVAAQAPAAAKAFQALAFAKALIgRAUQgOgQgOAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIAMAFIARAHIAKAGQAIAFADAIQAEAIAAAJQAAAWgQAPQgOAOgXAAQghAAgTgag");
	this.shape_9.setTransform(53.95,0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAnBMIhEhbQgFgGgHgRIABAFIABAGIADAPIAABYIgfAAIAAiXIAeAAIBDBaQAFAGAGASIgEgcIAAhWIAfAAIAACXg");
	this.shape_10.setTransform(40.925,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFQgSgLgKgRQgKgTAAgWQAAgPAFgPQAHgPAKgKQAKgLAPgGQAPgGAPAAQAWAAATAKQARAKAKATQALASgBAVQAAAQgFAQQgGAOgKAKQgLALgPAGQgPAGgQAAQgVAAgSgKgAgggiQgOAPgBATQABAOAGAMQAHALALAHQALAGALAAQAUAAAOgOQAOgPAAgVQAAgMgHgMQgGgLgLgIQgLgGgNAAQgSAAgOAPg");
	this.shape_11.setTransform(24.75,0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAOgXQASAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgMgLAAgTQAAgUAOgNQAOgNAVAAQAOAAALAFQAMAFAIALIgQAUQgOgQgOAAQgHAAgGAFQgGAFAAAHQAAAHAFAEIAGAFIANAFIARAHIALAGQAGAFAEAIQAEAIAAAJQAAAWgPAPQgQAOgWAAQggAAgUgag");
	this.shape_12.setTransform(10.55,0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("Ag0A1IAPgXQARAWATAAQAJAAAHgFQAHgGAAgJQAAgIgGgEQgFgEgQgFIgRgHIgKgGQgNgLABgTQAAgUAOgNQAOgNAVAAQAPAAAKAFQALAFAKALIgRAUQgOgQgOAAQgIAAgFAFQgGAFAAAHQAAAHAFAEIAHAFIAMAFIARAHIAKAGQAIAFADAIQAEAIAAAJQAAAWgQAPQgOAOgXAAQghAAgTgag");
	this.shape_13.setTransform(-0.5,0.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgrBMIAAiXIBVAAIAAAZIg1AAIAAAiIAtAAIAAAYIgtAAIAAArIA3AAIAAAZg");
	this.shape_14.setTransform(-10.75,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgmBMIAAiXIAfAAIAAB7IAuAAIAAAcg");
	this.shape_15.setTransform(-19.9,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgOBMIAAhDIgvhUIAjAAIAWAuQAEAHAAAMQABgMAEgHIAWguIAjAAIgvBUIAABDg");
	this.shape_16.setTransform(-36.225,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA5BMIgJhQIgCgRIABgKQgCAPgEALIgeBRIgUAAIgfhRQgDgKgDgQIAAAEIABADIAAAMIAAAIIgLBQIgfAAIAViXIAdAAIAiBZQADAKAAAQQABgQAEgKIAhhZIAdAAIAVCXg");
	this.shape_17.setTransform(-50.725,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAQAUARAAQAJAAAFgFQAHgFAAgJQAAgGgGgEQgEgDgPgGIgOgHIgKgEQgMgLAAgQQABgTANgMQANgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgHAAgEAEQgGAFAAAGQAAAHAFAEIAGAEIAMAFIAPAGQAFADAEADQAHAEADAHQAEAIgBAIQABAVgOANQgPAMgUAAQgdAAgTgYg");
	this.shape_18.setTransform(49.35,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AAkBFIg/hSQgEgGgGgQIAAAEIACAHIACANIAABQIgcAAIAAiJIAbAAIA9BRQAFAGAFARIgDgaIAAhOIAcAAIAACJg");
	this.shape_19.setTransform(37.425,-0.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgkA/QgQgJgKgRQgJgRAAgUQAAgOAGgNQAFgOAKgKQAJgJAOgFQANgHAOABQAUAAAQAJQARAJAJARQAKARAAATQAAAPgGANQgFAOgKAKQgJAJgOAGQgNAFgPABQgTAAgRgKgAgegfQgNANAAASQABAMAFALQAGAKAKAHQAKAGALAAQASAAANgNQANgOAAgTQAAgLgHgLQgFgLgKgFQgKgHgMAAQgRAAgNAOg");
	this.shape_20.setTransform(22.65,-0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAQAUARAAQAJAAAFgFQAHgFAAgJQAAgGgGgEQgEgDgPgGIgPgHIgJgEQgMgLAAgQQABgTANgMQANgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgGAAgFAEQgGAFAAAGQAAAHAFAEIAFAEIANAFIAPAGQAFADAEADQAHAEADAHQADAIAAAIQABAVgOANQgOAMgVAAQgeAAgSgYg");
	this.shape_21.setTransform(9.65,-0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgwAwIAOgUQAPAUASAAQAIAAAHgFQAGgFAAgJQAAgGgGgEQgEgDgOgGIgQgHIgJgEQgLgLAAgQQgBgTANgMQAOgMASAAQAOAAAKAEQAKAFAIAKIgPASQgMgOgOAAQgGAAgFAEQgGAFAAAGQAAAHAFAEIAFAEIANAFIAOAGQAGADAEADQAGAEAEAHQADAIABAIQgBAVgOANQgOAMgVAAQgdAAgSgYg");
	this.shape_22.setTransform(-0.45,-0.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgnBFIAAiJIBNAAIAAAXIgxAAIAAAfIAqAAIAAAWIgqAAIAAAmIAzAAIAAAXg");
	this.shape_23.setTransform(-9.8,-0.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgjBFIAAiJIAcAAIAABwIAqAAIAAAZg");
	this.shape_24.setTransform(-18.2,-0.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AgNBFIAAg9IgrhMIAhAAIATApQAEAHABALQAAgLADgHIAUgpIAhAAIgrBMIAAA9g");
	this.shape_25.setTransform(-33.1,-0.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AA0BFIgJhIIgBgQIABgGIAAgBIAAgBIAAgBIAAABIAAABIAAABQgCAMgDAIIgcBKIgTAAIgchKQgDgIgCgPIAAADIABADIAAALIAAAIIgKBIIgcAAIATiJIAbAAIAeBRQADAJAAAPQABgPADgJIAehRIAbAAIATCJg");
	this.shape_26.setTransform(-46.35,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// background
	this.instance = new lib.RectangleWhite();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.instance_1 = new lib.RectangleSurface();
	this.instance_1.setTransform(0,-0.5,1,1,0,0,0,72,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-24,147,47);


(lib.ButtonKeyboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,Idle:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(6));

	// button
	this.instance = new lib.KeyboardButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.KeyboardButton_Over();
	this.instance_1.setTransform(0,0.05,1.04,1.04);

	this.instance_2 = new lib.KeyboardButton_Down();
	this.instance_2.setTransform(0,0.05,0.96,0.96);

	this.instance_3 = new lib.KeyboardButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.inst_idleAnim = new lib.keyboardBtn_idleAnim();
	this.inst_idleAnim.name = "inst_idleAnim";
	this.inst_idleAnim.setTransform(0,0.1,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.inst_idleAnim}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.7,41.599999999999994,41.599999999999994);


(lib.ButtonInfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// button
	this.instance = new lib.InfoButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.InfoButton_Over();
	this.instance_1.setTransform(0,0.05,1.04,1.04);

	this.instance_2 = new lib.InfoButton_Down();
	this.instance_2.setTransform(0,0.05,0.96,0.96);

	this.instance_3 = new lib.InfoButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.7,41.599999999999994,41.599999999999994);


(lib.ButtonFeedback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// asset
	this.instance = new lib.FeedbackButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.FeedbackButton_Over();
	this.instance_1.setTransform(0,0.05,1.04,1.04);

	this.instance_2 = new lib.FeedbackButton_Down();
	this.instance_2.setTransform(0,0.05,0.96,0.96);

	this.instance_3 = new lib.FeedbackButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.7,41.599999999999994,41.599999999999994);


(lib.ButtonClose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// icon
	this.instance = new lib.CloseButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.CloseButton_Over();
	this.instance_1.setTransform(0,0.05,1.08,1.08);

	this.instance_2 = new lib.CloseButton_Down();
	this.instance_2.setTransform(0,0.05,0.92,0.92);

	this.instance_3 = new lib.CloseButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// background
	this.instance_4 = new lib.HeaderButtonBackground();
	this.instance_4.setTransform(0,0,1,1,0,0,0,20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,40,44);


(lib.Header = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// coin
	this.tokensButton = new lib.ButtonTokensUp();
	this.tokensButton.name = "tokensButton";
	this.tokensButton.setTransform(389,23);

	this.timeline.addTween(cjs.Tween.get(this.tokensButton).wait(1));

	// logo
	this.instance = new lib.Logo();
	this.instance.setTransform(79,22.1,1,1,0,0,0,69,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("EhP/ADrIAAnVMCf/AAAIAAHVg");
	this.shape.setTransform(512,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("EhP/ADrIAAnVMCf/AAAIAAHVg");
	this.shape_1.setTransform(512,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(0,0,1024,50.5), null);


(lib.FeedbackNewButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notification_icon
	this.instance = new lib.NotificationIcon();
	this.instance.setTransform(15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// envelope_anim
	this.instance_1 = new lib.envelopeidleanimation();
	this.instance_1.setTransform(0,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// concentric_anim
	this.instance_2 = new lib.ConcentricAnimation();
	this.instance_2.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// background
	this.instance_3 = new lib.RectangleRounded();
	this.instance_3.setTransform(0,0,1.3333,1.3333,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackNewButton, new cjs.Rectangle(-23.3,-24,47.3,47.4), null);


(lib.DBLAShellHeader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// close
	this.closeButton = new lib.ButtonClose();
	this.closeButton.name = "closeButton";
	this.closeButton.setTransform(998,24);

	this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1));

	// play
	this.playButton = new lib.ButtonPlay();
	this.playButton.name = "playButton";
	this.playButton.setTransform(948,24);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	// pause
	this.pauseButton = new lib.ButtonPause();
	this.pauseButton.name = "pauseButton";
	this.pauseButton.setTransform(948,24);

	this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(1));

	// flip animation
	this.flipSkipHelp = new lib.SkipHelp_FlipAnimation();
	this.flipSkipHelp.name = "flipSkipHelp";
	this.flipSkipHelp.setTransform(900.5,24);

	this.timeline.addTween(cjs.Tween.get(this.flipSkipHelp).wait(1));

	// skip
	this.skipButton = new lib.ButtonSkip();
	this.skipButton.name = "skipButton";
	this.skipButton.setTransform(898,24);

	this.timeline.addTween(cjs.Tween.get(this.skipButton).wait(1));

	// help
	this.helpButton = new lib.DBLAButtonHelp();
	this.helpButton.name = "helpButton";
	this.helpButton.setTransform(898,24);

	this.timeline.addTween(cjs.Tween.get(this.helpButton).wait(1));

	// label_tokencount
	this.tokenCount = new cjs.Text("943,712", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.tokenCount.name = "tokenCount";
	this.tokenCount.lineHeight = 28;
	this.tokenCount.lineWidth = 116;
	this.tokenCount.parent = this;
	this.tokenCount.setTransform(410,8);

	this.timeline.addTween(cjs.Tween.get(this.tokenCount).wait(1));

	// notification
	this.myStuffNotification = new lib.NotificationIcon();
	this.myStuffNotification.name = "myStuffNotification";
	this.myStuffNotification.setTransform(793,12);

	this.timeline.addTween(cjs.Tween.get(this.myStuffNotification).wait(1));

	// locked
	this.myStuffLocked = new lib.LockIcon();
	this.myStuffLocked.name = "myStuffLocked";
	this.myStuffLocked.setTransform(793,12);

	this.timeline.addTween(cjs.Tween.get(this.myStuffLocked).wait(1));

	// active_es
	this.myStuffActive_es = new lib.ButtonMyStuff_Active_es();
	this.myStuffActive_es.name = "myStuffActive_es";
	this.myStuffActive_es.setTransform(745,24);

	this.myLessonsActive_es = new lib.ButtonMyLessons_Active_es();
	this.myLessonsActive_es.name = "myLessonsActive_es";
	this.myLessonsActive_es.setTransform(601,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myLessonsActive_es},{t:this.myStuffActive_es}]}).wait(1));

	// active
	this.myStuffActive = new lib.ButtonMyStuff_Active();
	this.myStuffActive.name = "myStuffActive";
	this.myStuffActive.setTransform(745,24);

	this.myLessonsActive = new lib.ButtonMyLessons_Active();
	this.myLessonsActive.name = "myLessonsActive";
	this.myLessonsActive.setTransform(601,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myLessonsActive},{t:this.myStuffActive}]}).wait(1));

	// stuff_es
	this.myStuffButton_es = new lib.ButtonMyStuff_es();
	this.myStuffButton_es.name = "myStuffButton_es";
	this.myStuffButton_es.setTransform(745,24);

	this.timeline.addTween(cjs.Tween.get(this.myStuffButton_es).wait(1));

	// stuff
	this.myStuffButton = new lib.ButtonMyStuff();
	this.myStuffButton.name = "myStuffButton";
	this.myStuffButton.setTransform(745,24);

	this.timeline.addTween(cjs.Tween.get(this.myStuffButton).wait(1));

	// lessons_es
	this.myLessonsButton_es = new lib.ButtonMyLessons_es();
	this.myLessonsButton_es.name = "myLessonsButton_es";
	this.myLessonsButton_es.setTransform(601,24);

	this.timeline.addTween(cjs.Tween.get(this.myLessonsButton_es).wait(1));

	// lessons
	this.myLessonsButton = new lib.ButtonMyLessons();
	this.myLessonsButton.name = "myLessonsButton";
	this.myLessonsButton.setTransform(601,24);

	this.timeline.addTween(cjs.Tween.get(this.myLessonsButton).wait(1));

	// label_name
	this.studentName = new cjs.Text("jenny saunders", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.studentName.name = "studentName";
	this.studentName.lineHeight = 28;
	this.studentName.lineWidth = 301;
	this.studentName.parent = this;
	this.studentName.setTransform(209,8);

	this.timeline.addTween(cjs.Tween.get(this.studentName).wait(1));

	// avatar
	this.studentAvatar = new lib.AvatarIcon();
	this.studentAvatar.name = "studentAvatar";
	this.studentAvatar.setTransform(164.5,5);

	this.timeline.addTween(cjs.Tween.get(this.studentAvatar).wait(1));

	// ornamntG
	this.ornamentationGold = new lib.AvatarOrnamentation_Gold();
	this.ornamentationGold.name = "ornamentationGold";
	this.ornamentationGold.setTransform(182.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.ornamentationGold).wait(1));

	// ornamntS
	this.ornamentationSilver = new lib.AvatarOrnamentation_Silver();
	this.ornamentationSilver.name = "ornamentationSilver";
	this.ornamentationSilver.setTransform(182.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.ornamentationSilver).wait(1));

	// ornamntB
	this.ornamentationBronze = new lib.AvatarOrnamentation_Bronze();
	this.ornamentationBronze.name = "ornamentationBronze";
	this.ornamentationBronze.setTransform(182.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.ornamentationBronze).wait(1));

	// background
	this.background = new lib.Header();
	this.background.name = "background";
	this.background.setTransform(495,25,1,1,0,0,0,495,25);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAShellHeader, new cjs.Rectangle(0,0,1024,50.5), null);


(lib.DBLAShellDialog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.rightButton = new lib.DBLAPopupButtonCancel();
	this.rightButton.name = "rightButton";
	this.rightButton.setTransform(94,20);

	this.leftButton = new lib.DBLAPopupButtonAccept();
	this.leftButton.name = "leftButton";
	this.leftButton.setTransform(-94,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftButton},{t:this.rightButton}]}).wait(1));

	// text
	this.message = new lib.DBLAPopupMessage();
	this.message.name = "message";
	this.message.setTransform(0,-37.1,1,1,0,0,0,0,16.9);

	this.timeline.addTween(cjs.Tween.get(this.message).wait(1));

	// background
	this.box = new lib.RectangleRoundedWhite_ShellDialog();
	this.box.name = "box";
	this.box.setTransform(-153.5,-12.5,1,0.9804,0,0,0,50.8,51.5);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAShellDialog, new cjs.Rectangle(-204.3,-63,415,147.1), null);


(lib.DBLAKeyboardTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.infoButton = new lib.ButtonKeyboard();
	this.infoButton.name = "infoButton";
	this.infoButton.setTransform(27,-26);

	this.timeline.addTween(cjs.Tween.get(this.infoButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAKeyboardTab, new cjs.Rectangle(7,-45.9,40,40), null);


(lib.DBLAInfoTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.infoButton = new lib.ButtonInfo();
	this.infoButton.name = "infoButton";
	this.infoButton.setTransform(27,-26);

	this.timeline.addTween(cjs.Tween.get(this.infoButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAInfoTab, new cjs.Rectangle(7,-45.9,40,40), null);


(lib.DBLAInfoScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titletext
	this.versionText = new cjs.Text("Version: %%%%%", "22px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.versionText.name = "versionText";
	this.versionText.textAlign = "center";
	this.versionText.lineHeight = 30;
	this.versionText.lineWidth = 586;
	this.versionText.parent = this;
	this.versionText.setTransform(298,28);

	this.timeline.addTween(cjs.Tween.get(this.versionText).wait(1));

	// bodytext
	this.copyrightLine = new cjs.Text("Copyright © NNNN Discovery Education, Inc. All Rights Reserved.", "18px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.copyrightLine.name = "copyrightLine";
	this.copyrightLine.textAlign = "center";
	this.copyrightLine.lineHeight = 25;
	this.copyrightLine.lineWidth = 586;
	this.copyrightLine.parent = this;
	this.copyrightLine.setTransform(298,72);

	this.timeline.addTween(cjs.Tween.get(this.copyrightLine).wait(1));

	// button
	this.backButton = new lib.DBLAPopupButtonAccept();
	this.backButton.name = "backButton";
	this.backButton.setTransform(300,136);

	this.timeline.addTween(cjs.Tween.get(this.backButton).wait(1));

	// background
	this.instance = new lib.RectangleRoundedWhite_Info();
	this.instance.setTransform(50.1,50,1,1,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAInfoScreen, new cjs.Rectangle(0,0,605,200), null);


(lib.DBLAFeedbackTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.feedbackButton = new lib.ButtonFeedback();
	this.feedbackButton.name = "feedbackButton";
	this.feedbackButton.setTransform(-27,-26);

	this.timeline.addTween(cjs.Tween.get(this.feedbackButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAFeedbackTab, new cjs.Rectangle(-47,-45.9,40,40), null);


(lib.SkiplinkUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// content
	this.instance = new lib.SkiplinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");
	this.shape_2.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkiplinkUp, new cjs.Rectangle(-90,-22,180,46), null);


(lib.SkiplinkOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.149)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.SkiplinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkiplinkOver, new cjs.Rectangle(-90,-22,180,44), null);


(lib.SkiplinkDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AtHDcQg8AAAAg8IAAk/QAAg8A8AAIaPAAQA8AAAAA8IAAE/QAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.SkiplinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkiplinkDown, new cjs.Rectangle(-90,-22,180,44), null);


(lib.SkiplinkDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.SkiplinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SkiplinkDisabled, new cjs.Rectangle(-90,-22,180,44), null);


(lib.BacklinkUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// content
	this.instance = new lib.BacklinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");
	this.shape_2.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BacklinkUp, new cjs.Rectangle(-90,-22,180,46), null);


(lib.BacklinkOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.149)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.BacklinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BacklinkOver, new cjs.Rectangle(-90,-22,180,44), null);


(lib.BacklinkDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AtHDcQg8AAAAg8IAAk/QAAg8A8AAIaPAAQA8AAAAA8IAAE/QAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.BacklinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BacklinkDown, new cjs.Rectangle(-90,-22,180,44), null);


(lib.BacklinkDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// content
	this.instance = new lib.BacklinkContent();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AszDIQg8AAAAg8IAAkXQAAg8A8AAIZnAAQA8AAAAA8IAAEXQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6CBF").s().p("AszDcQhQAAAAhQIAAkXQAAhQBQAAIZnAAQBQAAAABQIAAEXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BacklinkDisabled, new cjs.Rectangle(-90,-22,180,44), null);


(lib.DBLAButtonSkiplink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// states
	this.instance = new lib.SkiplinkUp();

	this.instance_1 = new lib.SkiplinkOver();
	this.instance_1.setTransform(0,0,1.1001,1.1007);

	this.instance_2 = new lib.SkiplinkDown();
	this.instance_2.setTransform(0,0,0.9001,0.9194);

	this.instance_3 = new lib.SkiplinkDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-24.2,198,48.4);


(lib.DBLAButtonBacklink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// states
	this.instance = new lib.BacklinkUp();

	this.instance_1 = new lib.BacklinkOver();
	this.instance_1.setTransform(0,0,1.1001,1.1007);

	this.instance_2 = new lib.BacklinkDown();
	this.instance_2.setTransform(0,0,0.9001,0.9194);

	this.instance_3 = new lib.BacklinkDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-24.2,198,48.4);


(lib.ButtonFeedbackNew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// button
	this.instance = new lib.FeedbackNewButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.FeedbackNewButton_Over();
	this.instance_1.setTransform(0,0.05,1.04,1.04);

	this.instance_2 = new lib.FeedbackNewButton_Down();
	this.instance_2.setTransform(0,0.05,0.96,0.96);

	this.instance_3 = new lib.FeedbackNewButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-24.8,48.2,48.2);


(lib.DBLAFeedbackNewTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.feedbackButton = new lib.ButtonFeedbackNew();
	this.feedbackButton.name = "feedbackButton";
	this.feedbackButton.setTransform(-27,-26);

	this.timeline.addTween(cjs.Tween.get(this.feedbackButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAFeedbackNewTab, new cjs.Rectangle(-50.3,-49.9,47.3,47.3), null);


// stage content:
(lib.DBLAShellcolor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text modal
	this.instance = new lib.LockedModal();
	this.instance.setTransform(3315.6,188.95,1,1,0,0,0,264,174.5);

	this.instance_1 = new lib.TextModal();
	this.instance_1.setTransform(3315.6,605.2,1,1,0,0,0,264,174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// scrim
	this.scrim_dark = new lib.scrim_dark();
	this.scrim_dark.name = "scrim_dark";
	this.scrim_dark.setTransform(511.95,383.9,1,1,0,0,0,511.9,383.9);

	this.timeline.addTween(cjs.Tween.get(this.scrim_dark).wait(1));

	// info
	this.instance_2 = new lib.DBLAInfoScreen();
	this.instance_2.setTransform(512,384,1,1,0,0,0,300,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// popups
	this.shellDialog = new lib.DBLAShellDialog();
	this.shellDialog.name = "shellDialog";
	this.shellDialog.setTransform(512,300);

	this.timeline.addTween(cjs.Tween.get(this.shellDialog).wait(1));

	// buttons
	this.instance_3 = new lib.DBLAFeedbackNewTab();
	this.instance_3.setTransform(1024,768);

	this.instance_4 = new lib.DBLAKeyboardTab();
	this.instance_4.setTransform(0,718);

	this.instance_5 = new lib.DBLAInfoTab();
	this.instance_5.setTransform(0,768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// shell
	this.shellHeader = new lib.DBLAShellHeader();
	this.shellHeader.name = "shellHeader";
	this.shellHeader.setTransform(512,25.2,1,1,0,0,0,512,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shellHeader).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,247.5,2803.6,520.5);
// library properties:
lib.properties = {
	id: '3BF393CA05DD402FAD1F7888A4B37F4A',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/BitmapShellBackground.jpg", id:"BitmapShellBackground"}
	],
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
an.compositions['3BF393CA05DD402FAD1F7888A4B37F4A'] = {
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