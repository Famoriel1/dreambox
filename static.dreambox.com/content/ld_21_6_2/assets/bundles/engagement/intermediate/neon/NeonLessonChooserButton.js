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


(lib.VideoPlayButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiEiZIEJCZIkJCag");
	this.shape.setTransform(13.3,15.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VideoPlayButton, new cjs.Rectangle(0,0,26.6,30.8), null);


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
	this.shape.graphics.f("#CC6666").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nineslice, new cjs.Rectangle(0,0,100,100), null);


(lib.LessonIconProxy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AlxGQQgeAAAAgeIAArjQAAgeAeAAILjAAQAeAAAAAeIAALjQAAAegeAAg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LessonIconProxy, new cjs.Rectangle(0,0,80,80), null);


(lib.LessonIconMask = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,149,243,0.498)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LessonIconMask, new cjs.Rectangle(0,0,50,50), null);


(lib.TagBadgeIconIconProxy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhABzQgyAAAAgyIAAiBQAAgyAyAAICBAAQAyAAAAAyIAACBQAAAygyAAg");
	this.shape.setTransform(11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconIconProxy, new cjs.Rectangle(0,0,23,23), null);


(lib.TagBadgeIconBackgroundProxy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AF71C2").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconBackgroundProxy, new cjs.Rectangle(0,0,36,36), null);


(lib.TagBadgeIconBackground_New = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AF71C2").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconBackground_New, new cjs.Rectangle(0,0,36,36), null);


(lib.TagBadgeIconBackground_InProgress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AF71C2").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconBackground_InProgress, new cjs.Rectangle(0,0,36,36), null);


(lib.TagBadgeIconBackground_DueSoon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AF71C2").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconBackground_DueSoon, new cjs.Rectangle(0,0,36,36), null);


(lib.TagBadgeIconBackground_Assigned = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AF71C2").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIconBackground_Assigned, new cjs.Rectangle(0,0,36,36), null);


(lib.BackgroundPanel_New = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nineslice();
	this.instance.setTransform(50.1,50.05,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF35CD","#FF8975"],[0,1],0,-50,0,50).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPanel_New, new cjs.Rectangle(0,0,100,100), null);


(lib.BackgroundPanel_InProgress = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nineslice();
	this.instance.setTransform(50.1,50.05,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],0,-50,0,50).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPanel_InProgress, new cjs.Rectangle(0,0,100,100), null);


(lib.BackgroundPanel_DueSoon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nineslice();
	this.instance.setTransform(50.1,50.05,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF8D02","#FFD859"],[0,1],0,-50,0,50).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPanel_DueSoon, new cjs.Rectangle(0,0,100,100), null);


(lib.BackgroundPanel_Default = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_8_8_84_84 = new lib.nineslice();
	this.nineslice_8_8_84_84.name = "nineslice_8_8_84_84";
	this.nineslice_8_8_84_84.setTransform(50.1,50.1,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_8_8_84_84).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#06C9FF","#73FFD2"],[0,1],0,-50,0,50).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPanel_Default, new cjs.Rectangle(0,0,100,100), null);


(lib.BackgroundPanel_Assigned = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nineslice();
	this.instance.setTransform(50.1,50.05,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],0,-50,0,50).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPanel_Assigned, new cjs.Rectangle(0,0,100,100), null);


(lib.TagBadgeLabelBackgroundProxy = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_11_0_11_22 = new lib.nineslice();
	this.nineslice_11_0_11_22.name = "nineslice_11_0_11_22";
	this.nineslice_11_0_11_22.setTransform(16.5,11,0.11,0.22,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_11_0_11_22).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF71C2").s().p("Ag2BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIBtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAg");
	this.shape.setTransform(16.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabelBackgroundProxy, new cjs.Rectangle(0,0,33,22), null);


(lib.TagBadgeLabelBackground_New = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_11_0_11_22 = new lib.nineslice();
	this.nineslice_11_0_11_22.name = "nineslice_11_0_11_22";
	this.nineslice_11_0_11_22.setTransform(16.5,11,0.11,0.22,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_11_0_11_22).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF95F3").s().p("Ag2BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIBtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAg");
	this.shape.setTransform(16.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabelBackground_New, new cjs.Rectangle(0,0,33,22), null);


(lib.TagBadgeLabelBackground_InProgress = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_11_0_11_22 = new lib.nineslice();
	this.nineslice_11_0_11_22.name = "nineslice_11_0_11_22";
	this.nineslice_11_0_11_22.setTransform(16.5,11,0.11,0.22,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_11_0_11_22).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DE99D").s().p("Ag2BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIBtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAg");
	this.shape.setTransform(16.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabelBackground_InProgress, new cjs.Rectangle(0,0,33,22), null);


(lib.TagBadgeLabelBackground_DueSoon = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_11_0_11_22 = new lib.nineslice();
	this.nineslice_11_0_11_22.name = "nineslice_11_0_11_22";
	this.nineslice_11_0_11_22.setTransform(16.5,11,0.11,0.22,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_11_0_11_22).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0AB5D").s().p("Ag2BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIBtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAg");
	this.shape.setTransform(16.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabelBackground_DueSoon, new cjs.Rectangle(0,0,33,22), null);


(lib.TagBadgeLabelBackground_Assigned = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_11_0_11_22 = new lib.nineslice();
	this.nineslice_11_0_11_22.name = "nineslice_11_0_11_22";
	this.nineslice_11_0_11_22.setTransform(16.5,11,0.11,0.22,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_11_0_11_22).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C7EC").s().p("Ag2BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIBtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAg");
	this.shape.setTransform(16.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabelBackground_Assigned, new cjs.Rectangle(0,0,33,22), null);


(lib.TagBadgeLabel = function(mode,startPosition,loop,reversed) {
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
	this.lblTagLabel = new cjs.Text("Tag Label", "6px 'DBLMuli'");
	this.lblTagLabel.name = "lblTagLabel";
	this.lblTagLabel.lineHeight = 9;
	this.lblTagLabel.lineWidth = 66;
	this.lblTagLabel.parent = this;
	this.lblTagLabel.setTransform(4.45,6);

	this.timeline.addTween(cjs.Tween.get(this.lblTagLabel).wait(1));

	// fill
	this.prxTagLabelBackground = new lib.TagBadgeLabelBackgroundProxy();
	this.prxTagLabelBackground.name = "prxTagLabelBackground";

	this.timeline.addTween(cjs.Tween.get(this.prxTagLabelBackground).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeLabel, new cjs.Rectangle(0,0,72.5,22), null);


(lib.TagBadgeIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// iconproxy
	this.prxTagIcon = new lib.TagBadgeIconIconProxy();
	this.prxTagIcon.name = "prxTagIcon";
	this.prxTagIcon.setTransform(18,18,1.2174,1.2174,0,0,0,11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.prxTagIcon).wait(1));

	// fill
	this.prxTagIconBackground = new lib.TagBadgeIconBackgroundProxy();
	this.prxTagIconBackground.name = "prxTagIconBackground";
	this.prxTagIconBackground.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get(this.prxTagIconBackground).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadgeIcon, new cjs.Rectangle(0,0,36,36), null);


(lib.layout_button_vertical = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// badgeIcon
	this.bdgTagIcon = new lib.TagBadgeIcon();
	this.bdgTagIcon.name = "bdgTagIcon";
	this.bdgTagIcon.setTransform(20.3,20.3,1,1,0,0,0,14.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.bdgTagIcon).wait(1));

	// badgeLabel
	this.bdgTagLabel = new lib.TagBadgeLabel();
	this.bdgTagLabel.name = "bdgTagLabel";
	this.bdgTagLabel.setTransform(85.2,21.5,1,1,0,0,0,36.2,11);

	this.timeline.addTween(cjs.Tween.get(this.bdgTagLabel).wait(1));

	// title
	this.lblTitle = new cjs.Text("TITLE", "bold 13px 'DBLMuli'", "#FFFFFF");
	this.lblTitle.name = "lblTitle";
	this.lblTitle.lineHeight = 18;
	this.lblTitle.lineWidth = 100;
	this.lblTitle.parent = this;
	this.lblTitle.setTransform(14.4,127);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(1));

	// playbutton
	this.imgVideoPlay = new lib.VideoPlayButton();
	this.imgVideoPlay.name = "imgVideoPlay";
	this.imgVideoPlay.setTransform(80,86.95,1,1,0,0,0,13.3,15.3);

	this.timeline.addTween(cjs.Tween.get(this.imgVideoPlay).wait(1));

	// lessoniconmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqEJIAAnzIHzAAIAAHzg");
	mask.setTransform(26.4924,26.5);

	// lessoniconproxy
	this.prxLessonIcon = new lib.LessonIconProxy();
	this.prxLessonIcon.name = "prxLessonIcon";
	this.prxLessonIcon.setTransform(43,43,1,1,0,0,0,40,40);

	var maskedShapeInstanceList = [this.prxLessonIcon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.prxLessonIcon).wait(1));

	// panel
	this.pnlBackground = new lib.BackgroundPanel_Default();
	this.pnlBackground.name = "pnlBackground";
	this.pnlBackground.setTransform(80,87,1.6,1.74,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.pnlBackground).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.layout_button_vertical, new cjs.Rectangle(0,0,160,174), null);


(lib.layout_button_horizontal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// badge
	this.bdgTagIcon = new lib.TagBadgeIcon();
	this.bdgTagIcon.name = "bdgTagIcon";
	this.bdgTagIcon.setTransform(20.3,20.3,1,1,0,0,0,14.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.bdgTagIcon).wait(1));

	// tag
	this.bdgTagLabel = new lib.TagBadgeLabel();
	this.bdgTagLabel.name = "bdgTagLabel";
	this.bdgTagLabel.setTransform(85.2,21.5,1,1,0,0,0,36.2,11);

	this.timeline.addTween(cjs.Tween.get(this.bdgTagLabel).wait(1));

	// title
	this.lblTitle = new cjs.Text("TITLE", "bold 13px 'DBLMuli'", "#FFFFFF");
	this.lblTitle.name = "lblTitle";
	this.lblTitle.lineHeight = 18;
	this.lblTitle.lineWidth = 100;
	this.lblTitle.parent = this;
	this.lblTitle.setTransform(152,23);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(1));

	// description
	this.lblDescription = new cjs.Text("Description", "bold 13px 'DBLMuli'", "#FFFFFF");
	this.lblDescription.name = "lblDescription";
	this.lblDescription.lineHeight = 18;
	this.lblDescription.lineWidth = 100;
	this.lblDescription.parent = this;
	this.lblDescription.setTransform(152,65);

	this.timeline.addTween(cjs.Tween.get(this.lblDescription).wait(1));

	// playbutton
	this.imgVideoPlay = new lib.VideoPlayButton();
	this.imgVideoPlay.name = "imgVideoPlay";
	this.imgVideoPlay.setTransform(62.3,78.3,1,1,0,0,0,13.3,15.3);

	this.timeline.addTween(cjs.Tween.get(this.imgVideoPlay).wait(1));

	// lessoniconmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqEJIAAnzIHzAAIAAHzg");
	mask.setTransform(26.4924,26.5);

	// lessoniconproxy
	this.prxLessonIcon = new lib.LessonIconProxy();
	this.prxLessonIcon.name = "prxLessonIcon";
	this.prxLessonIcon.setTransform(43,43,1,1,0,0,0,40,40);

	var maskedShapeInstanceList = [this.prxLessonIcon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.prxLessonIcon).wait(1));

	// panel
	this.pnlBackground = new lib.BackgroundPanel_Default();
	this.pnlBackground.name = "pnlBackground";
	this.pnlBackground.setTransform(151,73,3.02,1.46,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.pnlBackground).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.layout_button_horizontal, new cjs.Rectangle(0,0,302,146), null);


// stage content:
(lib.NeonLessonChooserButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background_layer
	this.instance = new lib.layout_button_horizontal();
	this.instance.setTransform(289.7,55,1,1,0,0,0,62.1,55);

	this.instance_1 = new lib.layout_button_vertical();
	this.instance_1.setTransform(62.1,55,1,1,0,0,0,62.1,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,17.600000000000023,-210);
// library properties:
lib.properties = {
	id: '99268BB68F9910409D63B7678D2F6A5C',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#333333",
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
an.compositions['99268BB68F9910409D63B7678D2F6A5C'] = {
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