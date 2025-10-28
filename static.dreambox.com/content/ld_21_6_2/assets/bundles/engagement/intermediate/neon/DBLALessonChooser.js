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



(lib.BitmapBlue = function() {
	this.initialize(img.BitmapBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.BitmapGreen = function() {
	this.initialize(img.BitmapGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);// helper functions:

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


(lib.UnitFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AvJWMQgeAAAAgeMAAAgrbQAAgeAeAAIeTAAQAeAAAAAeMAAAArbQAAAegeAAg");
	this.shape.setTransform(-13.7,10.4381,0.867,0.8318);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.161)").s().p("AtISdQgaAAAAgZIaZAAQAaAAAAgZMAAAgkHQASAEAAAUMAAAAkIQAAAZgaAAg");
	this.shape_1.setTransform(-11.95,12.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitFrame, new cjs.Rectangle(-100.4,-107.7,175.2,238.7), null);


(lib.UnitBaseNanoDoor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArtRGMAAAgiLIXbAAMAAAAiLg");
	this.shape.setTransform(0.55,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtJSYMAAAgkvIaTAAMAAAAkvg");
	this.shape_1.setTransform(0.4,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitBaseNanoDoor, new cjs.Rectangle(-83.8,-125,168.39999999999998,235.2), null);


(lib.UnitBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ArtRGMAAAgiLIXbAAMAAAAiLg");
	this.shape.setTransform(0.55,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.yOffset = new cjs.Text("60", "16px 'Montreal Serial Medium'", "#CCCCCC");
	this.yOffset.name = "yOffset";
	this.yOffset.textAlign = "center";
	this.yOffset.lineHeight = 19;
	this.yOffset.lineWidth = 76;
	this.yOffset.alpha = 0.00000000;
	this.yOffset.parent = this;
	this.yOffset.setTransform(3,-103.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtJSYMAAAgkvIaTAAMAAAAkvg");
	this.shape_1.setTransform(0.4,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.yOffset}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitBase, new cjs.Rectangle(-83.8,-125,168.39999999999998,235.2), null);


(lib.UnitBanner = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ar3EvIAApdIXvAAIAAJdg");
	this.shape.setTransform(74.4,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitBanner, new cjs.Rectangle(-1.6,-3.2,152,60.6), null);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(221,221,221,0.847)").s().p("AhgCcQgDgBgCgDQgBgCgBgDIgEhgIg2hPQgBgCgBgDQABgDABgDQACgCADgBIBZgjIA7hKQACgDADgBQADgBACABQADABACADIA8BJIBaAhQADABACADQABACAAAEQABADgCACIg0BPIgDBgQAAADgCADQgCACgDABQgDABgDAAIhdgaIhbAbIgDAAIgDAAgAg0g+IgFACIhQAfIAwBHIABAFIAFBWIBSgYQACgBACABIBUAXIAEhXIABgFIAuhGIhQgeIgEgDIg2hCg");
	this.shape.setTransform(0.0004,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// star_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.847)").s().p("AhXAuIgCgFIgwhHIBQgfIAFgDIA0hDIA2BCIAEAEIBQAdIguBHIgBAFIgEBWIhTgXQgDAAgCABIhSAYg");
	this.shape_1.setTransform(0,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-16.3,-15.6,32.7,31.2), null);


(lib.SparkleWhiteBase = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AhUBBIlthBIFthAIBUmBIBVGBIFtBAIltBBIhVGBg");
	this.shape.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleWhiteBase, new cjs.Rectangle(0,0,90,90), null);


(lib.SparkleShineWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(255,255,255,0.749)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.216,0.733],0,0,0,0,0,26.6).s().p("AiuCuQhIhHAAhnQAAhlBIhJQBJhIBlAAQBnAABHBIQBIBJAABlQAABnhIBHQhHBIhnAAQhlAAhJhIg");
	this.shape.setTransform(18.65,18.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleShineWhite, new cjs.Rectangle(-6,-6,49.3,49.3), null);


(lib.SparkleGreenShine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(255,255,255,0.749)","rgba(181,227,112,0.451)","rgba(196,211,173,0)"],[0.267,0.51,1],0,0,0,0,0,26.6).s().p("AiuCuQhIhHAAhnQAAhlBIhJQBJhIBlAAQBnAABHBIQBIBJAABlQAABnhIBHQhHBIhnAAQhlAAhJhIg");
	this.shape.setTransform(18.65,18.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleGreenShine, new cjs.Rectangle(-6,-6,49.3,49.3), null);


(lib.SparkleGreenBase = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(153,255,0,0.451)").s().p("AhAAtIi0gtIC+gsIA2jIIBADIIC1AsIi1AtIhADIgAg1ghIhRAhIBRAiIA1BlIA1hlIBSgiIhSghIg1hlg");
	this.shape.setTransform(45,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("Ag1AiIhRgiIBRghIA1hlIA1BlIBSAhIhSAiIg1Blg");
	this.shape_1.setTransform(45,45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,255,0,0.149)").s().p("AhUBBIlthBIFthAIBUmBIBVGBIFtBAIltBBIhVGBgAg2gnIi+AsIC0AtIBADIIBAjIIC1gtIi1gsIhAjIg");
	this.shape_2.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleGreenBase, new cjs.Rectangle(0,0,90,90), null);


(lib.MysteryDoorDepthShadows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AroQxMAAAghhIXRAAMAAAAhhgAqFPOIUDAAIAAgBIAA+II0DAAIAAAAg");
	this.shape.setTransform(74.525,107.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.651)").s().p("AqBPFIAA+JIAAAAIASAVIgBAAIAAdfITiAAIAAgCIAQAWIAAABg");
	this.shape_1.setTransform(74.15,108.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.302)").s().p("AJyOvIAA9eIzhAAIgSgUIUDAAIAAeHgAH1B+IAAkhIBTAAIAAEhg");
	this.shape_2.setTransform(74.1625,108.1125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.502)").s().p("Ag0CcIAAk3IAXAAIAAEhIBSAAIAAAWg");
	this.shape_3.setTransform(127.3,107.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MysteryDoorDepthShadows, new cjs.Rectangle(0,0,149.1,214.6), null);


(lib.MessageBase3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow_surface
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_black_alpha_10).s().p("Egl4AMJIAA4RUAkVALlAncgLlIAAYRg");
	this.shape.setTransform(0,64.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls([DBLColorManager.color("engagement_status_inprogress_top"),DBLColorManager.color("engagement_status_inprogress_bottom")],[0,1],0,-156,0,156).ss(8,1,1).p("EglzgXbMBLnAAAQBQAAAABQMAAAAsXQAABQhQAAMhLnAAAQhQAAAAhQMAAAgsXQAAhQBQAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("EglzAXcQhQAAAAhQMAAAgsXQAAhQBQAAMBLnAAAQBQAAAABQMAAAAsXQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s(DBLColorManager.platform_black_alpha_30).ss(8,1,1).p("EglLgXbMBKXAAAQB4AAAAB4MAAAArHQAAB4h4AAMhKXAAAQh4AAAAh4MAAAgrHQAAh4B4AAg");
	this.shape_3.setTransform(6,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("EglLAXcQh4AAAAh4MAAAgrHQAAh4B4AAMBKXAAAQB4AAAAB4MAAAArHQAAB4h4AAg");
	this.shape_4.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MessageBase3, new cjs.Rectangle(-254,-154,514,314), null);


(lib.IconInProgress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0088BB").s().p("AAABRIihAAQAAhDAvgvQAwgvBCAAQBDAAAwAvQAvAvAABDg");
	this.shape.setTransform(26.9857,19.9791,0.864,0.864,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0088BB").ss(4,1,1).p("ADrAAQAABihEBFQhFBFhiAAQhhAAhFhFQhFhFAAhiQAAhhBFhFQBFhEBhAAQBiAABFBEQBEBFAABhg");
	this.shape_1.setTransform(19.9915,20.009,0.8492,0.8492);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconInProgress, new cjs.Rectangle(-2,-2,44,44), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6BC91A").s().p("AiLAcIA6gzIA2BLQB9iRAqgpIAABlQhbBNhMBbQgnhAhJgrg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheck, new cjs.Rectangle(-14,-13,28,27), null);


(lib.GübM04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACgAAQAAASgKANQgKANgOAAQgOAAgKgNQgKgNAAgSQAAgRAKgNQAKgNAOAAQAOAAAKANQAKANAAARgAhbAAQAAASgKANQgKANgOAAQgOAAgKgNQgKgNAAgSQAAgRAKgNQAKgNAOAAQAOAAAKANQAKANAAARg");
	this.shape.setTransform(7.875,-10.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABmAfQgKgNAAgSQAAgRAKgNQAKgNAOAAQAOAAAKANQAKANAAARQAAASgKANQgKANgOAAQgOAAgKgNgAiVAfQgKgNAAgSQAAgRAKgNQAKgNAOAAQAOAAAKANQAKANAAARQAAASgKANQgKANgOAAQgOAAgKgNg");
	this.shape_1.setTransform(7.875,-10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAUh8QAABBgkAuQgkAtgzAAQg0AAgkgtQgkguAAhBQAAhBAkguQAkgtA0AAQAzAAAkAtQAkAuAABBgAEHh9QAAA3gcAnQgPAUgRAJQgQAJgTAAQgoAAgcgmQgcgnAAg3QAAg3AcgnQAcgmAoAAQAnAAAcAmQAcAnAAA3gAj+AVQBSBDAyATQAyATBbAAQAGAAAEAAQA/gBAvgUQApgRAtgnAhyENQA3AMAIAAQARAAASgJQAQgJACgHAkGAVQACACACACQAfAjAfAsQASAaAdAqQAtBAAuAAQAYAAARgKQARgKAIgUQAOgwAHgR");
	this.shape_2.setTransform(3.6,7.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjQBuQgkgtAAhBQAAhAAkguQAkgtA0AAQAzAAAkAtQAkAuAABAQAABBgkAtQgkAvgzgBQg0ABgkgvgABTBcQgcgmAAg2QAAg3AcgnQAcgnAnAAQAoAAAbAnQAcAnAAA3QAAA2gcAmQgOAVgRAJQgRAKgTAAQgnAAgcgog");
	this.shape_3.setTransform(5.325,-5.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgiAsIgvhEQgggsgegjIAEgDQBSBDAyASQAxAUBcgBIAKAAIAAAFQgHAQgOAwQgJAVgRAKQgRAJgYABQgugBgsg/g");
	this.shape_4.setTransform(-7.8875,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AFymeQgJgtgDgHQAAgBAAgHQAAgMARgIQAQgIASAAQAgAAAHAYQAAACABABQADARABAuAGalbQANAAAYADQACAAADgBQALgBAFgIQAEgHABgQQAAgCAAgDQAAgKgUgKQgCAAgBgBQgUgJgWAAQgLAAgVAEQgDAAgCAAIAAAAQgTAEgHACIADBMQAVgPAkA+QAAAggGAjQgGAjgNAlQgTA4gGATQgBACAAACQAAAAAAAAAl+kIQARBsASBFQAGAWAGATQAKAcAOAhQAGAOAHAPIAAABQABABAAABQAAgBAAgCIAAAAQgCgQAAgOQABgaAHgUQAYhJBlgJQCVgNBlACQBmABBBgHQBCgGAcBKAHFnfIATgJQAUgJADAAQAYAAAOATQAAAGgCAKQAAADgBADQgGAdgQA3IgXAAQAAgCgFAAAo9lKQAAABAOAZQABABAAABQABABAAAAQAEAHAEAIQAJARAcApIBZAHQAYBWAPA6QAAAAAAAAQAYBWAGAZQADANADAMQAaB4AAB3QAAAKgBA3QgCBCgCAYIAAAyIKvgKQAHlIAIhUQAGhKAKg+QAHgqAIgmQAIgmAKghIAAAAQALgoAOggQABgCAAgBQAGgEAHgCQASgEAXASQAbgXAYg4QAGgOAGgPQACgEgCgIIgBABQgDAEgDAEIgVAZIgEAFQgCAAgKgFQgKgFAAAAAITnOQAiAFANAMQAHAHAAAIQAAALgSAaAnIm4QAMgXAHgEQADgCAPAAQAcAAANAeQADAHALAwAoCmCQgIgaAAgFQAAgNASgHQADgBACgBQAQgFATAAQAEAAAEAEQAPAOARA/QgmAMAAAIQAAANAJANQAAABABACQALAPAJAAQAMAAAOgHQAAAAABgBQAHgDALgHAoCmCQgNgIgSAAQgSAAgLAMQgKALAAANQAAANAGAFQABABAEAJQAKAGALAQQABABAAABQABABABABQAJAJAKALQAHAHAFAAQAIAAAGgBQAIgBAEgDQAKgGAAgRQAAgMgBgKIAAAAQgDgagLgQQgDgFgEgEQgFgFgFgDgAl+kNQAfgSATgKQADgDAAgTQAAgQgIgWQgIgWgHAAQgEAAgHABIAAAAQgRACggAJQgHACgFACAnFk9QgDAAgCAAQgGAAgEgCQgDgCgGgG");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3CB").s().p("AlHHFIAEhaIABhBQAAh3gbh4IgFgZIgehvIAAAAIgniQIhZgHQgcgpgJgRIgIgPIgBgBIgBgCIAIgEIAAACIACACIATAUQAHAHAFAAIAOgBQAIgBAEgDQAKgGAAgRIgBgVIAAgBQgDgagLgQIgHgJQgFgFgFgDQAFADAFAFIAHAJQALAQADAaIAAABIABAVQAAARgKAGQgEADgIABIgOABQgFAAgHgHIgTgUIgCgCIAAgCQgMgQgKgGIgFgKQgGgFAAgNQAAgNAKgLQALgMASAAQASAAANAIQgIgaAAgFQAAgNASgHIAFgCQAQgFATAAQAEAAAEAEQAMgXAHgEQADgCAPAAQAcAAANAeQADAHALAwIABAGQgRACggAJIgMAEIAMgEQAggJARgCIAAAAIALgBQAHAAAIAWQAIAWAAAQQAAATgDADIgyAcIAAAFQARBsASBEIAMAqQAKAcAOAhIANAdIAAAAIABADIAAgDIAAAAQgCgQAAgOQABgaAHgUQAYhJBlgJQCVgNBlACQBmABBBgHQBCgGAcBKIAJACIAAAAIABgEIAZhLQANglAGgjQAGgjAAggQgkg+gVAPIgDhMQAHgCATgDIAAAAIAFgBQAVgEALAAQAWAAAUAJIADABQAUAKAAAKIAAAFQgBAQgEAHQgFAIgLACIgFAAQgYgDgNAAQANAAAYADIAFAAQALgCAFgIQAEgHABgQIAAgFQAAgKgUgKIgDgBQgUgJgWAAQgLAAgVAEIgFABIAAAAIgBgHQgJgtgDgHIAAgIQAAgMARgIQAQgIASAAQAgAAAHAYIABADQADARABAuQgBgugDgRIgBgDIAFgBIATgJQAUgJADAAQAYAAAOATIgCAQIgBAGQgGAdgQA3IgXAAQAAgCgFAAQAFAAAAACIAXAAQAQg3AGgdIABgGQAiAFANAMQAHAHAAAIQAAALgTAbIAAAAIgGAIIgVAZIgEAFIgMgFIgKgFIAKAFIAMAFIAEgFIAQAGIAAAAIAAABQgYA4gbAXQgXgSgSAEQgHACgGAEIgBADQgOAggLAoIAAAAQgKAhgIAmQgIAmgHAqQgKA+gGBKQgIBUgHFIIqvAKgAnFk9IABADQALAPAJAAQAMAAAOgHIABgBIASgKIgSAKIgBABQgOAHgMAAQgJAAgLgPIgBgDQgJgNAAgNQAAgIAmgMQgRg/gPgOQAPAOARA/QgmAMAAAIQAAANAJANIgFAAQgGAAgEgCIgJgIIAJAIQAEACAGAAIAFAAIAAAAgAnFk9IAAAAgAmolrIAAAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübM04, new cjs.Rectangle(-59.5,-51.2,119.1,102.5), null);


(lib.GübM03d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACegXQADARgHALQgFANgMACQgKABgJgKQgKgKgDgPQgCgPAGgNQAGgMAKgCQALgCAKAKQAJAKADAPgAhpAOQACAQgGAMQgFANgLACQgLACgKgLQgJgKgCgQQgDgPAGgLQAFgNAMgBQAKgCAKAKQAJAJADAPg");
	this.shape.setTransform(-13.5917,-56.0573);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AiSAwQgJgKgCgQQgDgPAGgLQAFgNAMgBQAKgCAKAKQAJAJADAPQACAQgGAMQgFANgLACIgCAAQgKAAgJgJgAB2ALQgKgKgDgPQgCgPAGgNQAGgMAKgCQALgCAKAKQAJAKADAPQADARgHALQgFANgMACIgCAAQgJAAgIgJg");
	this.shape_1.setTransform(-13.5917,-56.0573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADVhCQAHA8gjAvQghAwg2AGQg2AGgsgmQgqgngHg8QgIg+AhgvQAigxA2gGQA3gGAqAnQAtAnAHA+gAD9BKQADAJAAAGQAAANgFAKAC/CLQAGgCAFgCQAcgLAWgIQABAAAAAAQAfgLAWgGAEyBhQACgNAAgFQAAgSgRgJQgOgIgWAAQgjAAgUAfQgPAXgCAdIAAAMIAIAAABHDKQAngdBKgfQADgBAEgCAhygJQAHA1gYArQgNAWgRALQgPAKgTACQgbAEgYgQQgLgHgKgLQghgkgGg2QgGg1AXgqQAYgpAogGQAogEAgAkQAhAjAGA2g");
	this.shape_2.setTransform(-2.286,-50.9209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C885B9").s().p("Ag+AwIAAgNQACgcAPgXQAVgfAhAAQAWAAAOAIQASAJgBASIgCARIAAACQgWAGgfALIAAAAIgyATIgLAFgAAFAUQAFgKAAgMQAAgGgDgIQADAIAAAGQAAAMgFAKg");
	this.shape_3.setTransform(22.3,-41.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjHCbQgLgHgKgLQghgkgGg3QgGg1AXgpQAYgqAogFQAogEAgAjQAhAjAGA2QAHA2gYAqQgNAWgRAMQgPAKgTACIgJAAQgWAAgUgMgAAuBhQgqgngGg8QgIg+AggvQAjgwA2gGQA3gHAqAoQAtAmAHA+QAHA8gjAwQghAvg2AHIgPAAQgtAAgnghg");
	this.shape_4.setTransform(-6.9777,-54.3647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AD8kUQABAPABAQQAHCtAiDQQAlAtApAjQAZAVCXBnQAngKAuACQApAFAOASQAKANA7BAQA2BBAUAcQAUAdgGADQgHADgvgHQgwgIgsgJQg1gKgZgSQgMgJgagjQgdgngrg4Qhbg2g5gmQgRgLgQgJQhUg1hcgpQgCAAgCAAQhGgNgcADQg+AIgLABQgmAFiSAnQgCABgCAAQgEACgDACQhLA0hlBJQhzBUgjBSQgNAdgFAUQgFAUgmgDQglgEhog+Qhng+AAhAQACgLAAgCQAjAFBSAYQA+ASAuAAQA7AABRg2QBOg0BSh2QgzhsgDgIQgBgCgBgDQgFgMgFgNQgGgOgGgOQgBgEgCgEQAAAAAAgBQgBgBAAgBQgQgmgMglQAAgBAAgBQgOgrgKgmQgEgTgDgTQAAgBAAgBIAAAAQAAgBgBgCQgBgCAAgDQgIg2gEgYQgGg2gCgYQgBgEAAgEIgDglQADgJgEgTQAAgUAxgfQBYgeBYgPQBtgUB2gJQBigIB+AAQAsAKAHAcQAFgCgBAqQgBAoAEA1QAAAGABAbADslpQAGgBAGgBQAQgBAVAAQBYAABVAdQArAPBGAYQArAAAGAAQAaAAAXACQAiAEAaAJQARAGANAJQAbASAIAYQACAKAAAKQAAAGAAAEQgCAMgFADQgHAFgdAAQg0AAgFggQgDgVgBgCQgFgKgQAAQgCAAgKADQgKACgFAAIgUAFQAHBAAAAKQAAALgPAIQgSAKggAAQgSAAgHgFQgHgGAAgRQAAgFAEgSQADgSAAgJQAAgLgHgiADgkIQAHgFAVgHQAQgFAYgGQA4gOAXAAQAuAAA+ASQAgAKAXAJQAAADgDACALZkcIASAAQAIACAIABQAgAIAOAPQANAOAAAbQAAAPgBABQgBABgQAG");
	this.shape_5.setTransform(10.9119,-4.0221);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3CB").s().p("ApaI4QglgEhog+Qhng+AAhAIACgNQAjAFBSAYQA+ASAuAAQA7AABRg2QBOg0BSh2Ig2h0IgCgFIgKgZIgMgcIgDgIIAAgBIgBgCQgQgmgMglIAAgCQgOgrgKgmIgHgmIAAgCIAAAAIgBgDIgBgFIgMhOQgGg2gCgYIgBgIIgDglQADgJgEgTQAAgUAxgfQBYgeBYgPQBtgUB2gJQBigIB+AAQAsAKAHAcQAFgCgBAqQgBAoAEA1IABAhIgMACIAMgCIAlgBQBYAABVAdIBxAnIAxAAQAaAAAXACQAiAEAaAJQARAGANAJQAbASAIAYQACAKAAAKIAAAKIAAgKQAAgKgCgKQgIgYgbgSIAEgPIgEAPQgNgJgRgGIAAgDIASAAIAQADQAgAIAOAPQANAOAAAbQAAAPgBABIgRAHIgIAAQgCAMgFADQgHAFgdAAQg0AAgFggIgEgXQgFgKgQAAIgMADQgKACgFAAIgUAFQAHBAAAAKQAAALgPAIQgSAKggAAQgSAAgHgFQgHgGAAgRQAAgFAEgSQADgSAAgJQAAgLgHgiIgDgKQADgCAAgDQgXgJgggKQg+gSguAAQgXAAg4AOIgoALQgVAHgHAFQAHgFAVgHIACAfQAHCtAiDQQAlAtApAjQAZAVCXBnQAngKAuACQApAFAOASQAKANA7BAQA2BBAUAcQAUAdgGADQgHADgvgHQgwgIgsgJQg1gKgZgSQgMgJgagjIhIhfQhbg2g5gmIghgUQhUg1hcgpIgEAAQhGgNgcADIhJAJQgmAFiSAnIgEABIgHAEQhLA0hlBJQhzBUgjBSQgNAdgFAUQgEARgcAAIgLAAgAL3kKIAAAAg");
	this.shape_6.setTransform(10.9119,-4.0221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AhUjlQgZgGgSAEQgPAEgGAKQgJAQAFAWQAFATAKAGQAHAEAWgHQAYgLALAHQACAOANAJQABABAgARQAEAyAGAtQANBcAWBKQAUA/BVC3QACguAJhpQgmg2gahEQgahEgIgiQgIghgBh9QAWghAwgNQAugNAEgHQAJgRgGgXQgHgcgWgLQgagPgdANQgMAFgIAIQgHAGgFAIQgBACgDAOQgCAIAAAEQgTgEgGAEQgDABgDAIAArkcQgGgWgJgwQgEgVgJgFQgOgIgaACQgeADgIANQgJARAVAeQAXAegCANAgjkSQgMgPgsgZQgUgLgIABQgKAAgJASQgKARAFARQADAOAKAFQAJAGAPADQARAFAIAD");
	this.shape_7.setTransform(-44.1976,-60.3375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3A3CB").s().p("AAUCNQgWhKgNhcQgGgtgEgyIghgSQgNgJgCgOQgLgHgYALQgWAHgHgEQgKgGgFgTQgFgWAJgQQAGgKAPgEQASgEAZAGIADgHIgZgIQgPgDgJgGQgKgFgDgOQgFgRAKgRQAJgSAKAAQAIgBAUALQAsAZAMAPIAFgGQACgNgXgeQgVgeAJgRQAIgNAegDQAagCAOAIQAJAFAEAVQAJAwAGAWIAFAEQgHAGgFAIQgBACgDAOIgCAMIgBAAIgDAAIgCgBIgHgBIgDAAIgBAAQgFAAgDACQgDABgDAIQADgIADgBQADgCAFAAIABAAIADAAIAHABIACABIADAAIABAAIACgMQADgOABgCQAFgIAHgGQAIgIAMgFQAdgNAaAPQAWALAHAcQAGAXgJARQgEAHguANQgwANgWAhQABB9AIAhQAIAiAaBEQAaBEAmA2QgJBpgCAuQhVi3gUg/g");
	this.shape_8.setTransform(-44.1976,-60.3375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübM03d, new cjs.Rectangle(-74.8,-100,171.5,153.8), null);


(lib.GübM03c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACegXQADARgHALQgFANgMACQgKABgJgKQgKgKgDgPQgCgPAGgNQAGgMAKgCQALgCAKAKQAJAKADAPgAhpAOQACAQgGAMQgFANgLACQgLACgKgLQgJgKgCgQQgDgPAGgLQAFgNAMgBQAKgCAKAKQAJAJADAPg");
	this.shape.setTransform(-13.5917,-56.0573);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AiSAwQgJgKgCgQQgDgPAGgLQAFgNAMgBQAKgCAKAKQAJAJADAPQACAQgGAMQgFANgLACIgCAAQgKAAgJgJgAB2ALQgKgKgDgPQgCgPAGgNQAGgMAKgCQALgCAKAKQAJAKADAPQADARgHALQgFANgMACIgCAAQgJAAgIgJg");
	this.shape_1.setTransform(-13.5917,-56.0573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADVhCQAHA8gjAvQghAwg2AGQg2AGgsgmQgqgngHg8QgIg+AhgvQAigxA2gGQA3gGAqAnQAtAnAHA+gAEyBhQACgNAAgFQAAgSgRgJQgOgIgWAAQgjAAgUAfQgPAXgCAdIAAAMIAIAAQAGgCAFgCQAcgLAWgIQABAAAAAAQAfgLAWgGAD9BKQADAJAAAGQAAANgFAKABHDKQAngdBKgfQADgBAEgCAhygJQAHA1gYArQgNAWgRALQgPAKgTACQgbAEgYgQQgLgHgKgLQghgkgGg2QgGg1AXgqQAYgpAogGQAogEAgAkQAhAjAGA2g");
	this.shape_2.setTransform(-2.286,-50.9209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C885B9").s().p("Ag+AwIAAgNQACgcAPgXQAVgfAhAAQAWAAAOAIQASAJgBASIgCARIAAACQgWAGgfALIAAAAIgyATIgLAFgAAFAUQAFgKAAgMQAAgGgDgIQADAIAAAGQAAAMgFAKg");
	this.shape_3.setTransform(22.3,-41.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjHCbQgLgHgKgLQghgkgGg3QgGg1AXgpQAYgqAogFQAogEAgAjQAhAjAGA2QAHA2gYAqQgNAWgRAMQgPAKgTACIgJAAQgWAAgUgMgAAuBhQgqgngGg8QgIg+AggvQAjgwA2gGQA3gHAqAoQAtAmAHA+QAHA8gjAwQghAvg2AHIgPAAQgtAAgnghg");
	this.shape_4.setTransform(-6.9777,-54.3647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AlilAQgHg1gCgZQAAgEAAgDIgDglQADgKgEgSQAAgVAxgeQBYgeBXgQQBugUB0gIQBkgJB+AAQArALAHAcQAGgCgBApQgCAoAEA2QABANACAqAE8lKQAVgVAggaQAPgNASgPQA1grAFAAQAaAABfBfQAeAeASAHQAMAFAZgCQAyAHAMgBQADgBALAAQAUAAAMANQAHAIAAAGQAAAGgFAGQgFAHgIACAFXjhQAQghAOgYQAbgtAOgNQAOgNAgAAQAKAAAJABQA6AaAHAHQAHAHAAASQAAAXgdAOQgdANAAATQAAASASAOQAOANALAAQAGAAARgKQAPgKACgDQAgADAAAFQAmAMgDApQgBASAEAGQAIAKAaAAQAOAAAWgRQAWgSAAgNQAAgQgEgNQgFgOgJgLQgVgdgzgVAKpkWQA3AGAVAQQABAAAAAAQASAOAAAYQAAAOgKALQgKAKgNAAQAAgBgBgBQgBgBAAgCAlilAQhHghg2g7QgegiguhtQAEgoAjgiQAigiAAgIQAAgTgSgSQgTgUgZAAQgeAAgSAZQgIALgEAKQgDAJAAAJQAAADAEANQADAIABAEQgSAGgEAGQgBACAAAJApiqrQgQgQgfglQgOgRgKAAQgQAAgXAPQgZARAAAQQAAATAhAPQAkAQAEAMAqip8QgSgHgyAAQgXAAgHAFQgIAGAAATQAAAUANANQAKAKAKAAQALAAAQgEQAQgFAIgBAq3o9QgZAIgNAMQgMALAAAMQAAASAPARQAOAPALAAQAJAAAPgSQAQgVANABQAJALAPACQACAAAkAAQBUB+BUBQQAwAtAZAUIAAAAQABABAAAAAF1kaQAHCtACDGQgUAEgUAEQAmBJAlBQQAjA7APAAQAPAAAKgJQAJgJAWgKQBTB3AUBhQATBgADATQADATgUgBQgUAAg/hhQhAhgg4hMQgjg8glg5QhJhwgugXQghAEgfAEQhAAHgLABQglAFiSAoQgCAAgCABQgDACgEACQA1CNBJBKQBJBHAzgMIAAgDQAqgMAIAAQAPAAAOAgQAIAUAZA8QAMAYAfBWQAeBUAAAGQAAAFgBAAQAAABgCACQgWAEg6g+Qh8iCgmgtQgQgChkhxQhvh9hCiDQg0htgDgHQgBgCgBgDQgFgMgFgNQgGgNgFgOQgCgEgCgFQAAAAAAAAQAAgBgBgCQgQgngLgkQgBgBAAgBQgNgrgKgnQgFgTgDgSQAAgBAAgBIAAgBQAAgBAAgBQgBgDAAgDQgJg2gDgY");
	this.shape_5.setTransform(-1.025,-0.3628);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3CB").s().p("AEAK4Qh8iCgmgtQgQgChkhxQhvh9hCiDIg3h0IgCgFIgKgZIgLgbIgEgJIAAAAIgBgDQgQgngLgkIgBgCQgNgrgKgnIgHglIgBgCIAAgBIAAgCIgBgGIgMhOIAMBOIABAGIAAACIAAABIgGAAIgCgBIAAAAQgZgUgwgtQhUhQhUh+IgmAAQgPgCgJgLQgNgBgQAVQgPASgJAAQgLAAgOgPQgPgRAAgSQAAgMAMgLQANgMAZgIIgBgHIgYAGQgQAEgLAAQgKAAgKgKQgNgNAAgUQAAgTAIgGQAHgFAXAAQAyAAASAHIACgHQgEgMgkgQQghgPAAgTQAAgQAZgRQAXgPAQAAQAKAAAOARQAfAlAQAQIAGABQgDAJAAAJQAAADAEANIAEAMQgSAGgEAGQgBACAAAJQAAgJABgCQAEgGASgGIgEgMQgEgNAAgDQAAgJADgJQAEgKAIgLQASgZAeAAQAZAAATAUQASASAAATQAAAIgiAiQgjAigEAoQAuBtAeAiQA2A7BHAhQgHg1gCgZIAAgHIgDglQADgKgEgSQAAgVAxgeQBYgeBXgQQBugUB0gIQBkgJB+AAQArALAHAcQAGgCgBApQgCAoAEA2IADA3QggAagVAVQAVgVAggaIAhgcQA1grAFAAQAaAABfBfQAeAeASAHQAMAFAZgCQAyAHAMgBIAOgBQAUAAAMANQAHAIAAAGQAAAGgFAGQgFAHgIACIgFAEIgBAAQgVgQg3gGQA3AGAVAQIABAAQASAOAAAYQAAAOgKALQgKAKgNAAIgBgCQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgHADQgFgOgJgLQgVgdgzgVQAzAVAVAdQAJALAFAOQAEANAAAQQAAANgWASQgWARgOAAQgaAAgIgKQgEgGABgSQADgpgmgMQAAgFgggDQgCADgPAKQgRAKgGAAQgLAAgOgNQgSgOAAgSQAAgTAdgNQAdgOAAgXQAAgSgHgHQgHgHg6gaIgTgBQggAAgOANQgOANgbAtQgOAYgQAhQAQghAOgYQAHCtACDGIgoAIQAmBJAlBQQAjA7APAAQAPAAAJgJQAKgJAWgKQBTB3AUBhIAWBzQADATgUgBQgUAAg/hhQhAhgg4hMQgjg8glg5QhJhwgugXIhAAIIhLAIQglAFiSAoIgEABIgHAEQA1CNBJBKQBJBHAzgMIAAgDQAqgMAIAAQAPAAAOAgIAhBQQAMAYAfBWQAeBUAAAGIgDAIIgDAAQgWAAg3g6g");
	this.shape_6.setTransform(-1.025,-0.3628);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübM03c, new cjs.Rectangle(-80.1,-76.7,158.2,152.7), null);


(lib.GübF09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADBAAQAAANgJAKQgIAKgMAAQgMAAgJgKQgIgKAAgNQAAgNAIgKQAJgJAMAAQAMAAAIAJQAJAKAAANgAiGAAQAAANgIAKQgJAKgMAAQgMAAgIgKQgJgKAAgNQAAgNAJgKQAIgJAMAAQAMAAAJAJQAIAKAAANg");
	this.shape.setTransform(2.575,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ACPAXQgIgKAAgNQAAgMAIgKQAJgKAMAAQAMAAAIAKQAJAKAAAMQAAANgJAKQgIAKgMAAQgMAAgJgKgAi3AXQgJgKAAgNQAAgMAJgKQAIgKAMAAQAMAAAJAKQAIAKAAAMQAAANgIAKQgJAKgMAAQgMAAgIgKg");
	this.shape_1.setTransform(2.575,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AEcAAQAABCgnAvQgnAvg3AAQg3AAgngvQgmgvAAhCQAAhBAmgwQAnguA3AAQA3AAAnAuQAnAwAABBgAhBAJQAAAyggAkQggAjgtAAQgtAAgggjQgggkAAgyQAAgyAggkQAggjAtAAQAtAAAgAjQAgAkAAAyg");
	this.shape_2.setTransform(3.425,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5BxQgmgvAAhCQAAhBAmgwQAnguA3AAQA3AAAnAuQAnAwAABBQAABCgnAvQgnAvg3AAQg3AAgngvgAj7BeQgggjAAgyQAAgyAggkQAggjAtAAQAtAAAgAjQAgAkAAAyQAAAyggAjQggAkgtAAQgtAAgggkg");
	this.shape_3.setTransform(3.425,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhZhaQA7gSA9ABQAVABASACQBFAJAqAhQAKAHAKAMIhNCXICWAAQgghpgpguAAxBsIBLAAABGhoIgVDUAjOgZQAWgXAdgPQAhgRAhgKIA2DGIBUAAAjOgZQgwAwgTBVICRAAIBdAAAjOgZIBOCF");
	this.shape_4.setTransform(0.425,-1.0315);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB8BsIBNiXQApAuAgBpgAB8BsIhLAAIAVjUIgVDUIhUAAIg2jGIA2DGIhdAAIhOiFIBOCFIiRAAQAThVAwgwQAWgXAdgPQAhgRAhgKQA7gSA9ABQAVABASACQBFAJAqAhQAKAHAKAMIhNCXg");
	this.shape_5.setTransform(0.425,-1.0315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AGkn2QgcD/gHBkQgHBlgMBHQgMBIgGASQgFATgVAJQgfAQi8AAQgxAAgpAAQgBAAAAAAQiygBg8gEQhKgFgUgtQgVgtgbiuQgbiwgYjFINDgPAASEcQABg6gCgXQgDgWgBgKQAAgGAAgBAA1FuIANAJQAPAKAEABIAXAAQACgMAAgZQAAgbgFgNQgHgUgVAAQgIAAgDABQgFABgDAFAAAErQAAABAAABQAAAkAGAPIAAAAQABABAAABQAHAMAPAAQAGAAAFgCQABgBABgBQAEgFACgIQAAgVAAgGQAAgQgBgIQgBgGgBgBQgDgDgYACQgHAAgIABAAeFzQAIBTgMAXQgEAJgjASAAAFiQgWAcgIAHQgHAHgHAAQgWAAgJgvQAAgbAMgQQAMgPATAAQAKAAAEACQAEACALAG");
	this.shape_6.setTransform(-0.0125,17.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6FC27F").s().p("AhcAGQAAgaAMgPQAMgPATAAQAKAAAEACIAPAIIAEAAIAAACQAAAiAGAOIAAAAIgHABQgWAcgIAIQgHAHgHAAQgWAAgJgwgABEAsQgEgCgPgJIgNgJIgLgFIgCACQgEADgHAAQgOAAgHgNIgBgBIAAAAQgGgOAAgiIAAgCIAAgDIADgHIAPgBQAYgCACACQABABABAGIABAZIAAAZQgBAJgFAEQAFgEABgJIAAgZIgBgZIALgBQADgFAFgCIALgBQAVAAAHAUQAFANAAAaQAAAZgCANg");
	this.shape_7.setTransform(1.675,51.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3A3CB").s().p("AANFLIgBAAQiygBg8gEQhKgFgUgsQgVgtgbiwQgbivgYjEINDgPIAEAAQgcD/gHBkQgHBkgMBIQgMBIgGATQgFASgVAKQgfAPi8AAIhaAAg");
	this.shape_8.setTransform(-0.0125,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübF09, new cjs.Rectangle(-43,-34,86,102.8), null);


(lib.GübF08c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAeAqQAFgHADgGQADgIgFgqQgFgrACgFQAHgQAmgIQAjgHAMAFQARAHADARQABACAAAcQAbgPAWgGQATgEALAFQAdAMAMAaQAJAWgFAMQgEAKgIAGQgHAFgGAAIgBACQACABANADQAYAKACASQABAJgHARQgFAOgJAHQgJAHgJgDQADAMADAMQABAGgEAJQgKAYgyAFQg2AGgzgWQgTgIgKgRQgIgVgHgPQg8gNgugEQgagBgpgBQgLgBgoAEQgkAEgGgDQgHgigLgrQgVhRgSgsIAAgBQgBgEgBgCQgBABABACQABACABABAjfi5QAKAxAMBHQAMBHAgAOQAfAOA9AIQA8AHAfgG");
	this.shape.setTransform(2.6729,30.2155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3A3CB").s().p("ABWCtQgUgIgKgRIgOgkQg9gOgtgDIhDgDQgLAAgpAEQgkADgFgCIgShOQgVhQgSgtIgBgBIgCgGIAEgBQgEgEAAgMQgBgLAEgJQAGgPALgJQAOgLAagEIACAHQAKAxAMBIQAMBGAfAOQAgAPA8AIQA8AHAggGIADgBQAGgIACgGQADgHgEgrQgGgrADgFQAGgQAngHQAjgHAMAFQARAHADAQIAAAeQAbgPAWgFQAUgEAKAEQAdAMAMAbQAKAVgGANQgEAKgIAFQgHAGgFgBIgBADIAOADQAYAKADASQABAKgHARQgGAOgJAGQgIAHgJgDIAFAYQACAHgEAIQgKAYgzAFIgXACQgqAAgngRg");
	this.shape_1.setTransform(2.6463,29.8655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AC8ANQgBANgJAJQgJAIgMgBQgNAAgIgJQgHgJAAgNQAAgMAIgIQAKgIAMAAQANABAHAJQAJAHAAANgAhygCQgBAOgLALQgLAKgPAAQgPgBgLgLQgKgMABgOQABgQALgKQALgLAPABQAPAAALAMQAKALgBAQg");
	this.shape_2.setTransform(13.7955,-23.7706);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACdAqQgNAAgIgJQgHgJAAgNQAAgMAIgIQAKgIAMAAQANABAHAJQAJAHAAANQgBANgJAJQgIAHgLAAIgCAAgAiYAhQgPgBgLgLQgKgMABgOQABgQALgKQALgLAPABQAPAAALAMQAKALgBAQQgBAOgLALQgKAKgPAAIgBAAg");
	this.shape_3.setTransform(13.7955,-23.7706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AEkgjQgCA3giAnQghAmgsgCQgtgCgegpQgdgpACg3QACg4AigmQAhgnAsACQAtACAeApQAdApgCA4gAgEgwQgDBEgtAuQgrAvg7gDQg6gDgpgxQgngyADhDQADhFAsgvQAsguA7ACQA7ADAnAyQAoAygDBEgAkjBmQARAxBmAkQBcAhBVAAQBeAAA8gcQAqgTA7g1");
	this.shape_4.setTransform(8.9313,-11.9814);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibClQg6gDgpgyQgngyADhDQADhEAsgvQAsgvA7ADQA7ADAnAyQAoAygDBDQgDBEgtAvQgpAsg3AAIgGAAgACyCWQgtgCgegpQgdgpACg4QACg3AigmQAhgnAsACQAtABAeAqQAdApgCA3QgCA4giAmQgfAlgrAAIgDAAg");
	this.shape_5.setTransform(9.0238,-17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AH9rAQABgegOglQgOgmAAgPQAAgUAUgNQAUgMAeAAQAzAAAJAjQAAArAAAPQACAVAAAJAJGoPQgnADgPgNQgSgYgVgVQgCgDgDgCQgHgGgIgGQgQgKgVgJQgcgMAAgMQAAgQAPgQQAVgXAlAAQAQAAAPAEIAAAAQAMADALAGQACABACACQAEACADACQAVARAEASAI8qEQAXgHAQgBIAQAAAJprrQATgsAPgNQAUgSASAAQAaAAAOAcQAKASAAAOQAAAMgJAKQgDACgDADQgUAOgFAJQATgBAKgDQAMgDAGAAQAjAAALARQAFAIAAAVQAAAkgbAIQgQAEgxgEQgEAYgDASQgJAngLAIQgHAFgcAGQAAAAgBAAIACAFQgIAggJAmQgUBQgaBtQgaBsgNBJQgBAEgBAEIAAABQgBAEAAAEIAAABQgBAAAAABQAAACAAABQgCAJgDAKQgCgLgBgKIAAAAQgBgJgBgJQgGgqgHgnQAAgBAAgBQgHglgIghQgHgcgHgZQhWgfhMgPQhLgPgogDQgXgCgSgCQgNgBgKgBQgCAAgDAAIgTgCIgFABQgVgBgUAAQgRgBgRAAQgrgBguABQhvAEhAAgQAAAwABAuQAAAtgDAjQAAACAAACQgBARgIBkQgHBjhdFcQAAAAAAABIA+AcACyoQQASgUAQgNQAOgLAFABQAOAAAEAaQAEATgCAZQgDAggGANQgHAPgMgBQgLAAgLgKQgSgOgCgCACboXQgJgqgIgOQgOgageAAQhBAAg4BEQgiApgJAJQgYAWgaAGAConPQAFgEABgIQABgSgDgeIgUgBIgBgBQgKACgGACQg3gvgIgBQgMgBgKAWQgJASgBAQQgDAiALAUQAJAPANACQANABAKgFQAGgDAogOQANACAKAAQADgBADAAIAAAAACHoJQAEAVACALQAAAHgCASACinHQAEAVABAYQAAADABACQgBACAAABQABAVABAOAJLoPQAAASABATIABATQAAABAAABQAABCglBSQgnBrgEgXAGEHuQACgDAZgEQAGgCAHgBQAJgBAMgCQAPgDAUgDQAggGAsgJQADhIgHiOQAAgDAAgEQgDg3gFhAQgBgIAAgGQgBgHAAgHQgBgGAAgGQgCgagCgYQgBgLgBgLQgBgCAAgBQAAgEgBgEQAAgFAAgEQgBgDAAgDQgCgNgBgMAELH5QALgBALgBIABAAQACAAABAAQABAAACAAQADgBADAAQACAAACAAQABAAABAAQAcgDA0gFQg7A1g8AyQhNBBg3AYAELH5QgdAvgwAnQhQBDh4AGQgKAEgCAEQgBACAAAKQAAAjAiBGQAoBQAlAAQA7ACA5gCQBugFAsADQghgigrgIQg1gIgTgHQhWgbANhhQgRAHgOAEAhdHuQgSgDgXgCQgYgCgdgCQhVgEhxAAQhqAAg4ALQg4ALgjAbQgdAXghA0QgVAfg3BYQgNgJgEgiQgDgSAAgtQAAheBEhWQA8hLAoAAQAHAAALAOQARAUAKAJQAwAqBfAAQBSgEA6ABQAPAAANABAhOHwIALABQAcAEAdACQCKANCLgLAhdHuQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAFABAFABQgGgBgFgBQgCAAgCAAQgBgBgBAAQgNgBgLgCQgGgBgFgBQgCAAgCgBQgbgEgZgGQgGgCgGgBQgQgFgOgEIgBgBQgEgBgDgBIgkgQ");
	this.shape_6.setTransform(-7.125,14.0694);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5FCC99").s().p("ABOBBQgLgBgMgJIgUgQIgMAFIAAgBIgBAAIgGABQgKABgLgDIABgZIgGgfIAPgDIACAAIATABQADAUAAAQIgBAMQgBAIgFADQAFgDABgIIABgMQAAgQgDgUIAGgEQASgVAQgNQAOgKAFAAQAOABAFAaQADASgCAYQgCAggHAOQgGAOgLAAIgBAAgAhKA/QgNgBgKgQQgKgTACghQABgQAKgSQAJgWAMABQAJABA2AuIAGAfIgBAZIgvARQgIAEgKAAIgEAAgAgKgOIAAAAg");
	this.shape_7.setTransform(7.4123,-36.673);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3A3CB").s().p("ABYNlQglAAgohQQgihGAAgjQAAgKABgCQACgEAKgEQB4gGBQhDQAwgnAdgvQiLALiKgNIg5gGIgLgBIgKgCIgBAAIgCAAIgBAAIgBAAIgCgBIgYgDIgLgCIgEgBQgbgEgZgGIgMgDIgegJIgBgBIgHgCIgkgQIAkAQIAHACIABABIAeAJIAMADIgBAIQhVgEhxAAQhqAAg4ALQg4ALgjAbQgdAXghA0QgVAfg3BYQgNgJgEgiQgDgSAAgtQAAheBEhWQA8hLAoAAQAHAAALAOQARAUAKAJQAwAqBfAAQBSgEA6ABIAcABIg+gcIAAgBQBdlcAHhjIAJh1IAAgEQADgjAAgtIgBheQBAggBvgEQAugBArABIAiABIApABIAFgBIATACIAFAAIAXACIApAEQAoADBLAPQBMAPBWAfIAOA1QAIAhAHAlIAAACIANBRIACASIgCgSIgNhRIAAgCQgHglgIghIAJgCQAEAXAnhrQAlhSAAhCIAAgCIgBgTIgBglIgFAAQgnADgPgNQgSgYgVgVIgFgFIgPgMQgQgKgVgJQgcgMAAgMQAAgQAPgQQAVgXAlAAQAQAAAPAEIAAAAIABgLQABgegOglQgOgmAAgPQAAgUAUgNQAUgMAeAAQAzAAAJAjIAAA6IACAeIADgBQATgsAPgNQAUgSASAAQAaAAAOAcQAKASAAAOQAAAMgJAKIgGAFQgUAOgFAJQATgBAKgDQAMgDAGAAQAjAAALARQAFAIAAAVQAAAkgbAIQgQAEgxgEIgHAqQgJAngLAIQgHAFgcAGIgBAAIACAFIgRBGIguC9QgaBsgNBJIgCAIIAAABIgBAIIAAABIgBABIgHABIgBAAIAAAAIADAVIADAZIABAGIAAAJIABAIIABADIACAWIAEAyIABAMIABAOIABAOIAIB3IAAAHQAHCOgDBIIhMAPIgjAGIgVADIgNADQgZAEgCADIhQAIIgCAAIgEAAIgGABIgDAAIgDAAIgBAAIgWACIAWgCIABAAIADAAIADAAIAGgBIAEAAIACAAIBQgIQg7A1g8AyQhNBBg3AYQgRAHgOAEQAOgEARgHQgNBhBWAbQATAHA1AIQArAIAhAiQgsgDhuAFIhAABIg0gBgAITqsIAEADIAHAEQAVARAEASQgEgSgVgRIgHgEIgEgDQgLgGgMgDQAMADALAGgAI8qEQAXgHAQgBIAQAAIgQAAQgQABgXAHgACJKuIAAAAgAi6HdIAAAAgACMlmgAB5loIAwgHIgDABQgeAIAEAAg");
	this.shape_8.setTransform(-7.125,14.0694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübF08c, new cjs.Rectangle(-87.8,-73.9,161.39999999999998,176), null);


(lib.GübF08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AC7gYQACANgIAKQgIAJgMABQgMACgKgIQgJgHgBgMQgCgNAHgKQAHgJANgCQAMgBAJAHQAKAHACANgAhxAJQABAPgJANQgJAMgPACQgPACgMgKQgMgKgCgPQgCgQAJgLQAKgMAPgCQAPgCAMAKQAMAJACAPg");
	this.shape.setTransform(7.0937,-26.8208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AisArQgMgKgCgPQgCgQAJgLQAKgMAPgCQAPgCAMAKQAMAJACAPQABAPgJANQgJAMgPACIgFAAQgMAAgKgIgACLADQgJgHgBgMQgCgNAHgKQAHgJANgCQAMgBAJAHQAKAHACANQACANgIAKQgIAJgMABIgEAAQgKAAgIgGg");
	this.shape_1.setTransform(7.0937,-26.8208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AEhhQQAHA3gaArQgbArgsAFQgsAGgkgkQgkgkgHg2QgHg4AbgrQAagrAsgGQAsgFAlAkQAjAjAHA4gAkCCNQAaAvBmAMQAgADCGAAQAwAABBgJQA6gJAIABIAAgFAgFgsQAIBDgkA1QgjA1g6AHQg7AHgwgrQgugqgJhDQgIhEAjg1QAkg2A7gHQA6gHAvArQAwArAIBEg");
	this.shape_2.setTransform(1.641,-21.3364);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjpCGQgugrgJhEQgIhDAjg1QAkg1A7gHQA6gHAvArQAwAqAIBEQAIBDgkA1QgjA1g6AHIgRABQgxAAgpgkgAB3BGQgkgkgHg3QgHg3AbgrQAagsAsgFQAsgGAlAkQAjAkAHA3QAHA3gaArQgbArgsAGIgMAAQglAAgfgeg");
	this.shape_3.setTransform(1.641,-24.662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgosGQAOgXAOgPQAMgNAEAAQAOgCAJAZQAGASACAYQADAggEAPQgEAQgMABQgLABgMgHQgUgLgDgCAgsq8QAHAVAFAXQABADABACQAAACAAABQAEAUADAOAF/l3Qgmh8gqhZQhagQhNgDQhNgCgoADQgnAEgZACQgCAAgCAAIAAAAIgUACIgEABQgWADgTACQgSACgQADQgsAGgtAJQhtAWg5AqQAIAwAIAtQAHAsADAjQABACAAACQABARACASQABAJAAAKQgBAAgCAAQgXgDghgEQg4gHgpABQgEApgIAuQgFAcAAAXQAAAWAGAhQAGAgAAADQg9AzgkAOQgUAIgcAIQgUAGgGAOQgJAQAAApQAAAPAGAHQAHAHAUACAF/l3QAMgDASgIQAKgDAhgDQAeA0ARArQAOAlACAWQA3APAlgBQAVgBAhgDQAZgBALAIQANAKAAAcQAAAkgPAOQgOAMggAAQgWAAgFgRQgIgagHgHQgZANglABQgjgBgFAAQgEAcgDAXQgEAfgUAAQgHAAgOgCAF/l3QAIAdAJAfQAJgEABAAQACgBAEAAQAfAAARBXAg5sJQgJgcgXgQQgXgQghAAQgnAAhGBGQgtAtgXAhAgorEQAFgEgBgJQgBgSgIgdIgUACIgCAAQgJADgGADQAIAUADAKQACAIABARQAOABAJgCQADgBACgBIABAAAhSr4Qg9glgJAAQgLABgHAYQgGATACAQQADAiAOARQALAOANgBQANgBAJgGQAGgEAlgVAlvjGQgGgDgIgDQghgOgLAAQgoAAgPAlQgKAZAAAsQAAAVAAAEQACALAHAEAlrg+QABgBgBAAQABgYgBgUQgBgogDgzAnehCQAOAIAKACQADAAAQAAQALAAAcgDQAcgEABAAQACAAACABQAJAGAYAXQAjAhAAASQAAAOggAOQgZAKgRACAlHiwQgOgLgagLAlHkRQgPgCgegDAkfEPQg4gKg1gUQANgXALh9QACgSABgRQgDAAgCAAQgWAAgJgLQgKgRgIgOApMAGQgcAVgoALQgRAEAAAfQAAAcAFAWQABAGACAHQAJAfARAAQAJAAALgFQASgJADgBQAAgFgCgDAoGgBQgUAPgsAZQgaAOAAANQAAAZAPAqQACAEABAEQANAkAJAAQAhAAAbgcQAXgXAAgQQAAgTgFgQQgFgOgFgDAn3AyQAdgJASgJQASgKAIgEAinEXQgBABAAAAQgFAEgEACQgBAAAAABQhvA1hkCqQhgCigDBrQABABgBAxQgrAdgUg7QgTg6AAg9QAAhFAWhDQAVg+ASAAQA+AAAlgiQAjgiBYiPQAzAIA2AAQACAAACAAQAGAAAFAAQDOgCDHg0QBDgRBDgYQATgHAigMQAfgLArgQQgKhIgeiKQgBgDgBgDAHQjkQgEASgLAHQgMAFgHADQAPA/AMA2AGQk7QAOAyANA5QACAGABAHAGpClQBGgGAdAAQAgAAAGABQAPACAJAKQgbAeg8A7Qg7A7gJAJADuDhIDFgVQASAAAGADQAHADAAAMQAAAUhWBKQhWBLAAADQAAARAtAVQAwAWAwAAQBcAABahZQA2g3AZgwIAAgDQAAAAgBAAQhUAYg7AQQhiAagXAEQgDAAgCAA");
	this.shape_4.setTransform(3.75,29.5919);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FCC99").s().p("AhXA/QgOgRgDgiQgCgPAGgTQAHgYALgBQAJAAA9AlIALAdIACAZIgqAZQgJAGgNABIgCAAQgMAAgKgNgABAAvIgXgNIgLAIIAAgBIgBAAIgGACQgJACgNgBIgCgZIgLgdIAOgGIABAAIAVgCQAIAcABASIAAACQAAAHgEAEQAEgEAAgHIAAgCQgBgSgIgcIAFgGQAOgXAOgPQAMgNAFAAQANgCAJAZQAHASACAYQADAfgEAPQgEAQgMABIgDAAQgKAAgLgGgAABAsIAAAAg");
	this.shape_5.setTransform(-3.2007,-45.426);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3CB").s().p("AomKwQgUg7AAg9QAAhFAWhDQAWg+ARAAQA/AAAkgiQAkgiBXiPQg4gKg1gUQANgXALh8IADgjIgFAAQgWAAgJgLIgSgfIgHACIgaAOQgSAJgdAJIADAIQAFADAFAOQAFAQAAATQAAAPgWAXQgcAcghAAQgJAAgNgkIgDgIQgOgpAAgZQAAgNAZgOQAsgZAVgQQgVAQgsAZQgZAOAAANQAAAZAOApIgHALQADADAAAFIgWAKQgLAFgJAAQgRAAgJgfIgDgNQgFgUAAgdQAAgfARgEQAogLAdgVQgdAVgoALQgRAEAAAfQAAAdAFAUIgMADQgTgCgHgHQgHgGABgPQAAgpAIgQQAGgOAVgGQAcgIATgIQAkgPA+gzIgHgjQgGghAAgWQAAgXAFgcQAIguAEgpQApgBA4AHIA4AHIAEAAIgCgTIgDgjIgBgEQgDgjgHgsIgQhdQA6gqBtgWQAsgJAtgGIAhgFIApgFIAEgBIAvgQQgiAPAHgBIgUACIAUgCIAAAAIAEAAIBAgGQAogDBMACQBNADBbAQQAqBZAmB9IARA7QAOAzANA4IADANIATgIQALgHAEgSIAAgFQgRhXgfAAIgGABIgKAEIgRg7QAMgEASgIQAJgDAigDQAeA0ARArQAOAlACAWQA3APAlgBIA2gEQAZgBALAIQAMAKAAAcQAAAkgOAOQgOAMggAAQgXAAgEgRQgJgagGgHQgZANgmABIgngBIgHAzQgEAfgVAAIgUgCIACAHQAeCLAKBGIhKAbQBFgGAdAAQAhAAAGABQAPACAJAKQgbAeg8A7IhEBEQAXgEBigaICPgnIABACQgZAwg2A3QhaBZhcAAQgwAAgwgWQgugVABgRQgBgDBXhLQBWhKAAgUQAAgMgIgDQgFgDgSAAIjFAVQBDgRBDgYIA1gTIg1ATQhDAYhDARQjHA0jOACIgLAAIgEAAQg2AAgzgIQAzAIA2AAIAEAIQhvA1hkCqQhgCigCBrIAAAyQgPAKgLAAQgYAAgNgngAGqDZIAFAAIgFAAgAlHhBQgZALgRABQARgBAZgLQAhgOgBgOQAAgSgjgiQgYgXgIgFIAAgCIAAgrIgFhcQAaALAOALQgOgLgagLIgNgGQgigOgLAAQgoAAgPAlQgKAZAAAsIABAZQABALAHAFIADAFQAOAIALACIASAAQALAAAcgDIAdgEIAFACQAIAFAYAXQAjAiAAASQABAOghAOgAHJi+Igbh1IAbB1gAlHmBIgsgFIAsAFgAF/nmIAAAAg");
	this.shape_6.setTransform(3.75,40.7669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübF08, new cjs.Rectangle(-68.6,-55.2,144.7,169.7), null);


(lib.GübF02a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADXADQAAANgJAJQgJAKgNAAQgNAAgKgKQgJgJAAgNQAAgNAJgKQAKgJANAAQANAAAJAJQAJAKAAANgAiNAAQAAAPgLALQgLAMgPAAQgPAAgLgMQgKgLAAgPQAAgPAKgLQALgLAPAAQAPAAALALQALALAAAPg");
	this.shape.setTransform(-2.925,-24.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjMAaQgKgLAAgPQAAgOAKgMQALgLAPAAQAPAAALALQALAMAAAOQAAAPgLALQgLALgPAAQgPAAgLgLgAChAZQgJgJAAgOQAAgMAJgJQAKgKANAAQANAAAJAKQAJAJAAAMQAAAOgJAJQgJAKgNAAQgNAAgKgKg");
	this.shape_1.setTransform(-2.925,-24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AE3g8QAAA8giAqQghAqgwAAQgvAAgigqQgigqAAg8QAAg8AigqQAigrAvAAQAwAAAhArQAiAqAAA8gAkfB9QAgA2BaAdQBJAXBRAAQB+AABjg/QAygfAigjAgZhBQAABEgqAwQgqAwg7AAQg7AAgqgwQgpgwAAhEQAAhFApgwQAqgwA7AAQA7AAAqAwQAqAwAABFg");
	this.shape_2.setTransform(-3.825,-16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNB0QgpgwAAhEQAAhEApgwQAqgwA7AAQA7AAAqAwQAqAwAABEQAABEgqAwQgqAxg7AAQg7AAgqgxgABzBrQgigqAAg8QAAg7AigrQAigqAvAAQAwAAAhAqQAiArAAA7QAAA8giAqQghArgwAAQgvAAgigrg");
	this.shape_3.setTransform(-3.825,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AGJquQgBgGgNgzQgNgzAAgHQAAgRAZgPQAZgPAaAAQAUAAAOAMQAMALAAAMQAAAKgIAXQgJAXAAALQACANAAAHAHgrSQAHgSAbgUQAbgVAMAAQAVAAAWAaQALANAGAOQAAAGgVARQgIAGgGAEQgPAMgCACQAGAAARgGQASgGAJAAQAYAAALAWQAHAPAAARQAAAPgUANQgTAMgTAAQgLAAgIgCQgHgDgGgFQgHgHAAgFQAAgKAHgKAGTovQgWgLgZgIQgfgKgBAAQgXgJAAgqQAAgRARgMQAUgPAhAAQAMAAAJADIAAAAQAJAEAEAIQAAABAIAmQAHgDARABQAVAAAFAHAGTolQABAPANAKQAGAGAIAEAAHn7QAQgWAQgOQANgLAFAAQANAAAHAZQAFASAAAZQAAAhgFAOQgGAPgMAAQgLAAgMgIQgTgNgDgCAmehhQAFgRADgVQABgDAAgDQAMiBACgaQAAAAAAgBQBagWB8gNQAtgFAsgDQAigCAhgBQAEAAAEgBQACABABgBQASAAATAAQANAAAOABQA9ADBXAPQA3ALBIAPQAAACAAADQgCATgBBbQAkglAYg1QAlhOAIicAgsnnQAFAjADAGQAEAHASAAQABAAABAAIABAAQAKAAADgDQAFgDAAgIQAAgTgFgeIgQAAQACgHACgFQAGgSAAgHQAAgSgbgBQgcgBAAgUQAAgTAZgOQAEgDAYgJAI7pPQgPBFgQALQgGAEgSAGIgVAEAkLIEQA4ACB6AEQBxACBtgNQAEAAADgBQAJgBAJgBQACgBACAAQAMgBAMgCQAAAAABAAIAAAAIAQgDQAVgFARgCIAAAAQABAAAAAAIAAAAQAGgBAFgBQABAAAAAAQAEgCADgBQAEgCAEgCQAJgEAHgCQAagJAcgLQAvgSA1gaQgbgxgkiPQgEgOgDgOQgHgcgHgjQgHgqgLhTQgBgCAAgCQABgJADgLQALg1AlhjQBDi1ApiPAEMHmQgNANgLANQgdAlgNAsQgFATgDASQgEAcADAYACNIDQAMAeAAATQAAAigLAgQgEANgHANQgKATgOATQgMAOgUAXQgOARAAAJQAAAVBGAbQAIADAIADQBFAaA3AKQABAAACAAADEKsQArAnA0AZQAlARAAAQQAAAQgXAbQgMAPgPAFAgOn2IgFAAQgMADgGADQgDABgBABAgunuQgtgtgKAAQgMAAgIAWQgIATAAAQQAAAiANATQAKAPANAAQANAAAKgGQAGgDASgLAgVliQACgPAEgiQABgKABgHQAAgFABgDQAAgCABgCAo4B5QAOABAEAEQAHAGADAZAnbDUQgeApgHAHQgLAMgNAAQgrAAgkgUQglgVAAgdQAAgtARgUQAQgRAhAAQAJAAAHAAQABAAABABAmmhgQhcAwiIA1QABAOAnAwQAhAlAHAKIAAAAQACACAAAEIAAABAkLIEQgJAAgIAAQgOgBgZgEQgBAAAAAAQgEgBgEAAQAAAAAAAAQgXgEgfgGIAAAAQg3gLhPgTQAXh/AciCQAGgcAGgcQACgIACgIAmzgJQh1ATAAAaQAAAXAvAqQAvAmAFACQANg+AOhXAi+MAQAFgFgEgJQgDgHgTgSQgSgUgJgRQgIgSgHgWQgGgTgEgWQgCgJgBgIQgBgIgBgIQgEggAFgdQAAgBAAAAAlYH9QAcAvADAPQADAPADAWQADAWgCAQQgCAPhBA4QhAA4AAABQAAAcBwAvQAQAAAogUQAkgSArgl");
	this.shape_4.setTransform(0.325,2.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FCC99").s().p("AhcA3QgNgTAAgiQAAgOAIgUQAIgWAMAAQAKAAAtAtIAFAAIAEgCIARgGIAFAAIARAAQAFAeAAASQAAAJgFADQAFgDAAgJQAAgSgFgeIAFgEQAQgWAQgOQANgMAFAAQANAAAHAZQAFASAAAaQAAAegFAPQgGAPgMAAQgLAAgMgIIgWgPIgLAHIgBgBQgEACgKAAIgBAAIgCAAQgRAAgEgHQgDgGgFghQAFAhADAGIgKAMIgYAOQgKAGgNAAQgNAAgKgPg");
	this.shape_5.setTransform(-2.075,-45.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3CB").s().p("Am1MGQAAgBBAg4QBBg4ACgPQACgQgDgWIgGglQgDgPgcgwIAUADIgIgBIAAAAIg2gKIAAAAQg3gLhPgTQAXh/AciCIgGgBQgeApgHAHQgLAMgNAAQgrAAgkgUQglgVAAgdQAAgtARgUQAQgSAhAAIASABQAOACAEAEQAHAGADAZQgDgZgHgGQgEgEgOgCIAAgBQAAgDgCgCIAAAAIgogvQgngxgBgOQCIg0BcgwIAIgBQAFgRADgVIABgGQAMiBACgaIAAAAQBagXB8gNQAtgFAsgDIBDgDIAIAAIADAAIAlgBIAbABQA9ADBXAQIB/AZIAAAFQgCATgBBbQAkglAYg1QAlhOAIidIAAgEQgIgFgGgFQgNgLgBgOIAAgKQgWgMgZgHIgggKQgXgKAAgpQAAgRARgNQAUgQAhABQAMAAAIADIACgGIgOg6QgNgyAAgHQAAgSAZgPQAZgOAaAAQAUAAAOAMQAMALAAANQAAAJgIAXQgJAXAAALQACAMAAAIIAHAEQAHgSAbgUQAbgVAMAAQAVAAAWAaQALAOAGANQAAAGgVARIgOAKIgRAOQAGAAARgGQASgGAJAAQAYgBALAXQAHAPAAASQAAAOgUANQgTAMgTAAQgLAAgIgCQgHgDgGgFQgHgGAAgGQAAgKAHgKQgHAKAAAKQAAAGAHAGQAGAFAHADIgFAKQgPBFgQALQgGAEgSAGIgVAFIABADQgpCPhDC1QglBjgLA1IgHgCIADAWIABAEQALBTAHAqQAHAjAHAcIAHAcQAkCPAbAxQg1AZgvATIg2AUIgQAGIgIAEIgGADIgCAAIgKACIgBAAIgBAAIAAAAIgmAHIgQADIAAAAIgBAAIgXADIgFABIgSACIgHABQhtANhxgCIiygGIgRgBQgOAAgZgEIgBAAIABAAQAZAEAOAAIARABIAAABQgFAdAEAgIACAQIADARQAEAWAGATQAHAWAIASQAJARASAUQATASADAHQAEAJgFAFIAAAGQgrAlgkASQgoAUgQAAQhwgvAAgcgAnJCdIgMA4IAMg4IAEgQQANg+AOhXIgJgBQh1ASAAAbQAAAXAvApQAvAmAFADIgEAQgAG1p3QAVAAAFAIQgFgIgVAAIgCAAIgCAAIgBAAIAAAAQgMAAgGACIgBAAIgIgmQgEgJgJgEIgBAAIABAAQAJAEAEAJIAIAmIABAAQAGgCAMAAIAAAAIABAAIACAAIACAAIAAAAgAEPNPQg3gLhFgZIgQgGQhGgcAAgUQAAgKAOgRIAggkQAOgTAKgTQAHgNAEgNQALggAAgiQAAgUgMgeIgBgEIASgCIAFgBIAXgDIABAAIAAAAIAQgDIAmgHIAAAAIABAAIABAAIAKgCIACAAIAGgDIAIgEIgBABQgNANgLANQgdAlgNAsQgFATgDASQgEAbADAZIADACQArAnA0AZQAlARAAAQQAAAPgXAdQgMANgPAHIgEACIgDAAg");
	this.shape_6.setTransform(0.325,2.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.11)").s().p("AgvgUQANAAAJgFIAYgPIAKgMQAEAHARAAIADAAIAAAAQAKAAAEgCIABABIgPAJIAAADIgCAIIgCARIgGAwIAAALIhBADg");
	this.shape_7.setTransform(-4.225,-36.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübF02a, new cjs.Rectangle(-66,-83.3,132.7,171.89999999999998), null);


(lib.Gub2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABwhpQgCAQgKALQgJAKgNgBQgMgCgIgNQgHgMACgRQACgQAKgLQAKgKANABQAMACAHANQAHAMgCARgACzgvQgJAvgfAbQggAcglgGQglgGgUgmQgTglAIgvQAIgvAfgdQAggcAlAHQAlAGAUAmQAUAlgIAwgAgphgQgHAkgaAWQgZAWgdgGQgdgGgOgeQgOgfAHgkQAIgkAagVQAZgWAdAGQAcAGAPAeQAOAegIAkgAhVC8QAXAMAZAAQALAAASgFQAPgFAIgFAhHBbQA7AOCigQQglATgqATQhUAmgbAAQgsAAgVggIhHiDQAuBLA7AOgAhaiOQgBANgIAKQgIAJgKgBQgLAAgHgKQgGgLABgNQAAgOAIgJQAIgKAKABQAKAAAHALQAHAKAAAOg");
	this.shape.setTransform(7.0614,-9.1393);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGB8QglgGgUgmQgTgmAIguQAIgvAfgdQAggcAlAHQAlAGAUAmQAUAlgIAvQgJAvgfAcQgaAXgeAAIgNgBgABBhBQgKALgCAQQgCARAHAMQAIAMAMACQANABAJgJQAKgLACgQQACgRgHgMQgHgNgMgCIgDAAQgLAAgJAJgAiAA0QgdgGgOgeQgOgeAHgkQAIgkAagVQAZgWAdAGQAcAGAPAeQAOAegIAkQgHAjgaAWQgUARgVAAIgNgBgAiEhdQgIAJAAAOQgBANAGALQAHAKALAAQAKABAIgJQAIgKABgNQAAgOgHgKQgHgLgKAAIgBAAQgKAAgHAJg");
	this.shape_1.setTransform(7.0614,-16.6363);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcCLIhHiCQAvBKA6AOQA6AOCkgQQglATgrAUQhUAmgaAAQgtAAgVghgABcg/QgNgBgIgNQgHgNACgQQACgRAKgKQALgLAMACQANABAGANQAIANgCAQQgCARgLAKQgIAJgKAAIgDAAgAhohoQgKgBgHgKQgHgKABgOQABgOAHgJQAIgJALAAQAKABAHAKQAHAKgBAOQgBAOgIAJQgHAJgKAAIgBAAg");
	this.shape_2.setTransform(5.725,-9.7762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AgQAWQgUAJgKACQgLABgJgHQgIgGAFgZQAEgbAKgPQAJgPAIADQAJACALAPQAMAPABAFQgEACgDAFQgDAEgDAHQgDAGACAJQACAJABABQAEAFAGACQAFACAEgEAAOgOQALgIAOgFQANgFALACQALABgDAXQgDAVgHASQgHASgGAFQgFAGgKgFQgLgEgIgJQgIgIgDgJQACgBAFgGQAGgGABgNQAAgMgDgDQgEgGgPgB");
	this.shape_3.setTransform(9.2564,-31.0481);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5FCC99").s().p("AAhA5QgLgEgIgJQgIgIgDgJIAHgHQAGgGABgNIAAgCQAAgKgDgDQALgIAOgFQANgFALACQALABgDAXQgDAVgHASQgHASgGAFQgCAEgFAAQgDAAgFgDgAhCAbQgIgGAFgZQAEgbAKgPQAJgPAIADQAJACALAPQAMAPABAFQgEACgDAFQgDAEgDAHQgCADAAAGIABAGIADAKQgUAJgKACIgDAAQgJAAgIgGgAgGAdQgGgCgEgFIgDgKIgBgGQAAgGACgDQADgHADgEQADgFAEgCQAPABAEAGQADADAAAKIAAACQgBANgGAGIgHAHQgDADgDAAIgDgBgAADAbIAAAAgAgFgVIAAAAg");
	this.shape_4.setTransform(9.2564,-31.0481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.5,1,1).p("Ag9BgQAKg1ASg3QAahTAUAAQAGAAAIAKQAHAKAGAAQANAAAJgU");
	this.shape_5.setTransform(12.075,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AkxDwQALhWA8ibQAth3Aeg5QAkhEAoAHQAoAGAxALQAyALBJATQADABBVAUQBVAbAEAfQACALggByQgjCBgFBig");
	this.shape_6.setTransform(0.0284,-0.0077);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3A3CB").s().p("AkxDwQALhWA8ibQAth3Aeg5QAkhEAoAHQAoAGAxALQAyALBJATIBYAVQBVAbAEAfQACALggByQgjCBgFBig");
	this.shape_7.setTransform(0.0284,-0.0077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gub2, new cjs.Rectangle(-31.6,-39,63.3,64), null);


(lib.Gub1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ACliJQAAAQgIAMQgJAMgNAAQgMAAgJgMQgJgMAAgQQAAgRAJgLQAJgMAMAAQANAAAJAMQAIALAAARgADNhhQAAAvgXAhQgYAhghAAQghAAgXghQgYghAAgvQAAgvAYgiQAXghAhAAQAhAAAYAhQAXAiAAAvgAAEB5QANgJAGgUQAJghAWAAQAXgBANAjQAKAaAAAgQAAAZgLASQgLASgUAAQgTAAgGgeAA9CxQgLgcAAgbQAAgQAEgKAAFg+QAAA3geAnQgfAngrAAQgsAAgegnQgfgnAAg3QAAg4AfgnQAegnAsAAQArAAAfAnQAeAnAAA4gAgshwQAAASgKAOQgLANgOAAQgPAAgKgNQgKgOAAgSQAAgTAKgNQAKgNAPAAQAOAAALANQAKANAAATg");
	this.shape.setTransform(-1.5,-10.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitBmQgfgnAAg3QAAg3AfgnQAegnAsAAQArAAAfAnQAeAnAAA3QAAA3geAnQgfAogrAAQgsAAgegogAhohJQgKANAAASQAAATAKAOQAKAMAPgBQAPABAKgMQAKgOAAgTQAAgSgKgNQgKgOgPAAQgPAAgKAOgABEA1QgXgiAAgtQAAgwAXghQAYghAhgBQAhABAXAhQAYAhAAAwQAAAtgYAiQgXAighgBQghABgYgigAByhfQgJAMAAAQQAAARAJAMQAJAMAMAAQANAAAIgMQAJgMAAgRQAAgQgJgMQgIgMgNABQgMgBgJAMg");
	this.shape_1.setTransform(-1.5,-17.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AiBAqQgKgOAAgSQAAgRAKgOQAKgNAPAAQAPAAAKANQAKAOAAARQAAASgKAOQgKANgPAAQgPAAgKgNgABZAOQgJgMAAgQQAAgRAJgLQAJgMAMAAQANAAAIAMQAJALAAARQAAAQgJAMQgIALgNAAQgMAAgJgLg");
	this.shape_2.setTransform(1,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AkkhaQAAhHAkgYQARgMBrgeQAcgIBKgNQBYgPA0gEQBbgFAbBBQAKAZAGAtQADAbAGA7QACALAQCUQAKBeAMBCIoiAAQgnk1AAgxg");
	this.shape_3.setTransform(0,0.0037);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3A3CB").s().p("Aj9EMQgnk1AAgxQAAhHAkgYQASgMBqgeQAdgIBJgNQBYgPA0gEQBbgFAbBBQAKAZAGAtIAJBWIASCfQAJBeANBCg");
	this.shape_4.setTransform(0,0.0037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gub1, new cjs.Rectangle(-30.3,-32.4,60.6,60.2), null);


(lib.GreenAppBackground = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BitmapGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.FancyCheckmark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sheen
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-11.1,-27.5,14.3,6.5).s().p("AgtiWIBbhxIAAG1IhTBaIgImeg");
	this.shape.setTransform(-0.6126,31.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-10.6,-21.6,4.8,13.6).s().p("AgfjIIA/hGIgHHuIgzAvIgFnXgAAgkOIAAAAIAAAAg");
	this.shape_1.setTransform(46.7002,-18.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-5.2,-12.2,6,19.7).s().p("Ag2i5IBth4IgFIHIhgBcIgInrgAA3kxIAAAAIAAAAg");
	this.shape_2.setTransform(59.7001,-32.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],7.8,-21.3,-2.2,19.9).s().p("AgFDEIgImtIAbAmIAAGtgAgNjpIAAAAIAAAAg");
	this.shape_3.setTransform(-37.1129,21.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],5.9,-24.2,-4.1,17).s().p("AgYCoIgImtIBABeIAAGtgAggkFIAAAAIAAAAg");
	this.shape_4.setTransform(-43.2377,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gradient sheen drk5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(150,108,12,0)","rgba(183,114,12,0.149)"],[0.008,1],5.7,12.8,-56.1,39.5).s().p("AnSGpIOlwXIh+GTIsnNKg");
	this.shape_5.setTransform(30.475,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// gradient sheen drk4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(114,77,25,0)","rgba(101,60,11,0.298)"],[0,1],-8.2,25.6,-73.6,33.9).s().p("AnNE+QgBgCGWmpIGWmpIB6B/Qn7Ghm0INIAKjZg");
	this.shape_6.setTransform(30.4489,19.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// gradient sheen drk3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(114,77,25,0)","rgba(101,60,11,0.298)"],[0,1],23.5,5.2,-7.5,-38.1).s().p("AE3E3IAAABIAAgBgADaC9QhxiLhchTQhWhQiChXIhrhJIEMgmIFcGMQAEDeABAEQgmg1g3hFg");
	this.shape_7.setTransform(-47.375,42.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// gradient sheen drk2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(114,77,25,0)","rgba(101,60,11,0.298)"],[0,1],16.7,-9.4,-55,-37.8).s().p("AsVgyIEdgqIFcGJIMwtUIgCAFICECIIAAAJQoGGzmvIGQjdlomZjyg");
	this.shape_8.setTransform(-0.825,19.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// gradient sheen drk1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(190,110,22,0)","rgba(184,135,16,0.298)"],[0.012,1],24.1,1.5,-24.1,-7.2).s().p("AimhHQgCAAAijtQABACEsGmIgEDBgAiGk0IAAAAIAAAAg");
	this.shape_9.setTransform(-33.4584,16.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// inner glo
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0.749,1],4.8,-13.6,0,4.8,-13.6,56.8).s().p("AsYCfIFLkjIExGoQLHs6DtjlIAAI+QoFGzmvIGQjelqmejzg");
	this.shape_10.setTransform(-1.1,-1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// gradient sheen lite3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0.294,0.612,1],-4.7,20.7,12.7,-25.2).s().p("ACdiJQACAAgUByQgVBwgBAAIkRAxIE5kTg");
	this.shape_11.setTransform(-63.3615,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// gradient sheen lite2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.502)"],[0,1],-46.7,1,45.3,1).s().p("AnSGpIBMhVINZvCIiBGXIrYL2IhMBQg");
	this.shape_12.setTransform(30.475,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// gradient sheen lite1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)","rgba(255,255,255,0)","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,0.259,0.529,0.78,1],-61.6,38.6,60.8,-37.3).s().p("AqID0IAuj7IEwGnQLDs0DwjoIiAGmIswNUg");
	this.shape_13.setTransform(13.05,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// top bevel
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEF572").s().p("AilCQIFKkiIgpD7IkbAqIgGgDg");
	this.shape_14.setTransform(-63.8,-0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// right bevel
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2C21D").s().p("Ag+CIIB6mkIACI5g");
	this.shape_15.setTransform(71.9,-49.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// btm bevel
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0B216").s().p("AsVgvIEdgqIFcGJIM3taIB7CcQimCZjJDDQmTGGizDXQjdlomZjyg");
	this.shape_16.setTransform(-0.825,19.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// shape
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9EB0A").s().p("AsYCfIFLkjIExGoQLHs6DtjlIAAI+QoFGzmvIGQjelqmejzg");
	this.shape_17.setTransform(-1.1,-1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// shdw
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.502)").s().p("AsoClIFLknIEuGoQFHl8EckzQDrj/CKiEIAAI/QkLDhj7D3QkJEFjSD9QjsmEmEjkg");
	this.shape_18.setTransform(2,5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FancyCheckmark, new cjs.Rectangle(-80.3,-78,163.2,161.4), null);


(lib.DreamboxLogoWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AyPdtQnhnSAAqYIAAgqQAFgLAAgMQAUmBEfkaIAAAAQE+kuG6AAQHAAAE9EuIABAAQBpBoBGB2QighujNAAQkIAAi+C4IgBABQi/CyAAEBIABAdIAAACIAAABIAAABIAAABQALHTFdFSQFgFWH4ABQHJAAFSkaQhWB4hwBuIAAAAQnoHTqoAAQqtAAninTgAi8XlQhshohIh4QChBwDPAAQELAAC9i4QC5izAAkHIAAgJIAAgDIAAgZIAAgCIAA3xIAAgIIAAoNQAAm1E5ktIAAgBQEhkcGWgWMAAAAxCQAAAzgDAyIAAABIAAABIAAABIAAABIAAABQglFskPEMIgBAAQk+EwnAAAIgBAAQm/AAk3kwgAEfg8IAAgBQlmlWn5AAQnFAAlSEbQBWh5ByhvQHinSKtAAQDyAAEDBNIAAO+QhSiWiEh/g");
	this.shape.setTransform(164.925,236.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DreamboxLogoWhite, new cjs.Rectangle(0,0,329.9,473.6), null);


(lib.DBLAVortexEffect = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AAvXcIhdAAIAAgBIgTAAIgCAAIgOAAIAAgBIgMgBQhEgEg+gKQh1gShoggQhngghagsQhcgqhSg1QhSg2hKg9QhIg/hBhFQhBhGg5hPQg3hPguhZQgvhXgkhkQgkhjgYhvQgXhwgFiCIAAgBQACgHgDgDIAAgCIAAhPQADgEgCgKIAAgBIAAgBIAAgLIAAgBIAAgUQAJh/AYhvQAXhuAmhiQAlhiAwhXQAwhYA3hOQA6hOBBhFQBBhGBKg8QBLg+BSg0QBTg0BcgqQBcgsBogfQBogfB3gQQBCgIBJgFIAQAAIAAgBIBdAAIACAAQAIADALgCIACAAQCBAHBvAWQBwAZBiAkQBjAkBYAvQBWAwBPA5QBPA3BHBAQBGBBA+BJQA9BKA1BSQA1BSAsBcQAqBcAfBoQAfBnASB1QAKBLAEBSIAAANIABAAIAABdIAAACIgBAAIAAAMIAAACQgFBRgKBLQgRB0ggBnQgfBogrBdQgrBag1BTQg0BTg9BKQg+BJhGBBQhHBAhPA3QhPA5hWAwQhYAvhjAkQhjAkhvAZQhvAWiBAHIgCAAIgRAAIAAABIgCAAgA2MgVIABAAQACCDAYBwQAYBvAkBhQAlBjAyBVQAxBWA7BNQA6BLBEBEQBEBDBOA5QBPA4BYAvQBYAuBkAjQBkAjBzAVQBSAOBfADQAHACAJgBIABAAIA+AAIABAAIARAAIAAgBQCDgEBtgZQBvgZBggmQBggnBVgxQBWgzBLg7QBKg8BChFQBChFA5hOQA2hQAvhYQAuhaAihlQAihlATh0QALhEAChNQACgDgBgHIAAgCIAAgBIAAhfIAAgBQABgKgCgDQgChRgLhFQgUh0ghhlQgkhlgthYQguhbg5hNQg4hOhChGQhChFhMg7QhLg8hWgwQhWgyhgglQhggnhwgYQhugYiCgGIAAAAIgUgBIgBAAIgsAAIgBAAIgSAAIAAABQhOADhFALQh2ARhnAhQhlAhhaAtQhZAthRA3QhPA4hFBBQhGA/g9BLQg8BLgzBVQgzBUgnBgQgnBfgYBtQgbBugIB/IAAAqIAAACIgBAAIAAAxgAhVRlIhaAAIAAgBQgGgBgGAAQhPgDhGgMQhygUhigkQhjglhVgxQhVgyhLg8QhKg+hAhGQhAhGg1hSQg3hRgqhdQgphegbhtQgbhqgGiBIACgCQABgHgDgDIAAgDIAAg5QADgFgBgKIgCgBIAAgCIAAgKIAAgBIAAgTQALh/AchrQAchrAqhbQAphdA4hRQA1hRBChFQBChFBMg8QBMg6BXgwQBWgwBjgjQBkgkB1gTQA9gJBEgCIALgBIBTAAIACAAQADADAIgCIABAAQCBAFBrAcQBsAbBdAqQBdApBSA2QBRA1BHBBQBGBAA7BLQA8BMAxBVQAwBXAlBjQAkBiAUB0QANBOABBZIAAA2IAAADQgBBXgNBNQgUBzgjBkQgjBkgwBVQgxBXg8BKQg8BMhGBBQhGBBhRA2QhQA3heAqQhcAphsAcQhrAbiAAGIgBAAIgNAAIAAACIgBAAgA0CicIAAADIABBEIAAAAQAGCBAdBrQAdBqArBaQArBdA6BNQA5BNBEBDQBFBCBRA2QBQA3BeAqQBdAoBwAZQBQASBfAEQAFADAIgBIABAAIBPAAIABAAIAOgBIAAgBQCBgGBngdQBrgeBagsQBaguBOg5QBNg6BChEQBChFA2hSQA2hRAoheQAohdAYhyQAQhIAEhWQABgCAAgIIAAgBIAAgCIAAgbIABAAQACgWgDgUQgBhzgWhdQgXhwgqheQgqhdg2hRQg3hRhChEQhChEhOg5QhOg6hagsQhbgshqgdQhogdiDgFIAAgCIgOAAIgCAAIg0AAIgDAAIgOAAIAAACQhcAChNAQQhwAYhfAoQhfAohSA1QhRA1hHBCQhEBBg8BMQg5BOguBZQgtBZgeBqQgdBogKB+IAAAVIAAADIgBAAIAAAKgAkmMyQh/gHhnggQhngfhXgxQhWgvhKg+QhKg9g8hLQg7hKgvhaQguhYgehqQgbhhgFh6IAAgDIAAg8IAAgDIAAgMIAAgBIAAgTQAJh+AghmQAhhoAwhWQAxhVA/hJQA+hKBLg7QBLg8BYguQBaguBpgdQBpgdCEgDQCIgBBsAaQBsAbBbAsQBbAsBNA6QBMA7BABHQBABHAyBTQAyBWAkBjQAjBkAMB7QALBzgQBqQgPB2gmBjQgmBgg1BTQgzBThCBFQhBBFhQA5QhOA4heApQhdAohwAXQhXAShkAAQgeAAgfgCgAyPjKIAAABQABCGAdBpQAdBpAxBYQAvBXA+BIQBABIBMA5QBOA6BcAqQBeAqByAVQBnASB1gJQB9gLBhgkQBjgkBTg1QBSg1BChEQBEhDA1hTQA0hRAkhkQAkhhAMh8QAEg9gDhCQgIh/gjhkQghhlg0hTQg0hThChFQhChFhSg2QhRg1hhglQhiglh5gNQg/gFhEACQiAAGhmAhQhlAihUAzQhTAzhGBCQhEBCg3BPQg4BRgmBhQgmBggPB5QgEAhAAAnIgBAAIAAATgAkmJBIhDAAIAAgCIgMAAQhLgFhBgQQhqgbhYgxQhWgwhHhAQhGhAg2hRQg3hRgjhjQgkhjgFiAIAAgDIAAg0IAAgBIAAgNIAAgBIAAgMQACgDgBgIIAAgBIAAgCIAAgKQAOh5AmhhQAnhgA4hPQA4hPBJg+QBIg/BZgtQBaguBvgWQA9gNBHgCIApAAIACAAQCCAFBkAjQBjAiBSA0QBSA2BBBGQBBBGAxBVQAyBWAcBsQATBKAFBbIABAQIABAAIAAAgIAAACIgCAAIAAAOIAAADQgDBNgQBDQgZBrgvBZQgwBYhABGQg/BIhQA3QhPA3hjAjQhiAlh/AJIgBAAIgMAAIAAACIgBAAgAw4kRIAAABQgDCKAiBlQAhBlA3BRQA2BQBGBAQBIBBBaArQBbAtBzASQAmAHAqABQADADAGgBIACAAIAbAAIADAAIAOgBIAAgBQCCgFBfgnQBigmBMg6QBNg6A7hLQA7hMAphdQAoheANh7IABgpQABgTgBgQQgBgXgCgVQgMh6gphfQgphdg7hLQg9hKhOg7QhLg4hjgnQhggliDgEIAAgCIgqAAIAAACQiCAEhgAlQhiAnhOA5QhNA6g8BKQg9BJgpBfQgpBegNB5IAAAUIAAABIgCAAIAAAPgApBFiQhnghhPg3QhQg3g8hKQg8hLgohfQgmhggEiEIAAgCIAAgLIAAgBIAAgiQAMh7AqheQAphcA/hIQA+hJBTgzQBUg1BsgbQA3gNBBgDIAOgBIAgAAIACAAQAGACAJgBIACAAQB/AJBdAqQBdAoBIA/QBIA/A2BRQA1BRAcBsQAVBQgEBpIAAAAIAAAKIAAACQgFA7gMAzQgbBrgzBSQg0BUhHBAQhHA+heArQhcAqh9AJIgCAAIgKAAIAAACIgQAAQhvAAhWgZgAvtkMIABAAQAGCBArBbQArBbBBBGQBCBFBZAvQBXAvB6ANQBAAGBBgJQB1gQBYgvQBWgwBBhGQBAhGArhdQAphdACiDQABhjgYhOQgihlg6hMQg5hMhRg3QhQg3hrgcQgzgOg9gCIAAgBIgOAAIgBAAIgXAAIgBAAIgLAAIAAABIgNAAQh9ALhZAtQhZAthEBDQhEBDguBaQgsBagMB7IAAAVIAAABIgCAAIABAmgAm+DaIgQAAIAAgBIgRgBQhVgEg/gZQhjgkhHhAQhJg+gvhYQgwhWgIh+IAAgCIAAg4IAAgCIAAgMQAOh6AwhWQAxhXBIg/QBIg/BlgjQA7gUBOgEIAPgBIAAgBIAaAAIABAAQADADAIgBIABAAIASABQB6ANBVAxQBWAxBABIQA8BIAkBlQAaBKgBBlQgBBigcBJQgmBhhABGQhBBGhXAvQhZAvh9AJIgCAAIgQAAIAAACIgBAAgAo2sQQhvAZhNA5QhNA6g0BTQgzBUgMB7QgDCKAsBaQAsBcBHBAQBHBABkAiQAyAQA+AEQAEADAHgBIADAAIAhAAIABAAIANgBIAAgBQB7gKBUg0QBUgzA6hMQA5hNAZhwQAGgeABgmQACgHAAgLIAAgCIAAgBIAAgHIAAgBQAAgMgCgHQgBgjgHgeQgYhvg5hNQg6hNhTg0QhUg0h7gLIAAgBIgOgBIgLAAQg0AAgsAJgAoeBTQg8gFgxgTQhigmhAhGQhBhGgehoQgLgngDgwIAAgBIAAgyIAAgCIAAgRQARh1A4hQQA3hQBWgyQA+gkBZgOQA/gIBAAKQByAUBLA6QBMA8AuBZQAjBCAHBdQAHBmgcBKQgmBihEBCQhGBBhlAgQg1ARg/AAQgZAAgagCgAuClGIAAACIABAJQAOB4A7BMQA7BMBcArQBEAfBmgBQBRgCA6gbQBdgpA6hNQA8hMAMh4QAFgggFgjQgLh3g6hNQg6hNhdgsQgvgVg6gFQh2gNhUAmQhdApg8BLQg7BMgSB1IAAAPIAAABIgBAAQgBAaACAVgAoMgUIgbAAIgRgBQh1gPhJg/QgkgfgdgoQg4hNAAiHQANh7A8hJQA+hLBigjQApgPA1gCIAeAAIACAAQB9AKBJA9QBLA8AlBjQAOAnADAzIAAALIABABIAAAUIAAACIgBAAIAAALIAAABQgLBvg0BFQgeAmglAeQhJA+h+AJIgCAAgAtTloIABAAQAFBgApA8QA3BQBjAlQAkAOAwABQBlABBAglQBVgxArhdQAPgiAGgsQALhoglhJQgthahYgvQhCgkhmAHQg/AEgsAYQgtAXgjAgQhEBFgQB1IAAAWIAAACIgCAAIABASgAqDh+Qhnghg0hSQgegvgGhFQgDgXACgbQARh1BKg+QA1guBWgOQAvgIAtALQBuAYA5BNQArA6AGBdQADAygNAmQgiBlhUAzQgzAghPAEIgOAAQgqAAgggLgAsnl7IAAABQABAlAKAbQAlBiBgApQAyATBDgJQBJgKAugnQA2gtAThRQAPg/gSg4QgihkhfgqQgvgVhDAGQg9AGgqAZQhSA2gWBxIAAAOIAAACIgCAAQAAAMACALgAp5jPQgogJgfgUQhQgzgBiDQAUhyBbguQAvgVBEAIQAjAFAcAPQBZAtAPB2QADAagFAVQgZBthiAnQgeAMgjAAQgZAAgagGgAr8mBIABAAQATB0BpAbQAwALAqgMQBogfAPh3IABAAQABgLgCgHQAAgPgCgJQgbhuhugWQghgGgeAHQhsAZgXBwIAAAKIAAABIgCAAIABAhgAqXkRQhKgigMheIAAgBIAAgQIAAgBIAAgNQAWhpBvgMQAjgDAaAIQBYAfAEBtQABAQgEAOQgYBkh1AJIgJAAQgcAAgTgIgArdmrQABB6BwANIABAAQAGADAHgDIABAAQBSgLAZhDQAHgPAAgTQgBhhhMgaQgKgFgNAAIgMAAQhwAAgSBpgAp/k/QhTgOABhmQARhIBOgMIABgBIALAAIABAAQA9AHAWAqQAIAOACASQAJBUg5AdQgTAKgZAAQgNAAgOgDgArBmfIAAAAQACAfAPASQAPATAZAGQA6AOAeglQAMgPADgVQALhCgtgaQgMgGgPgCQhPgJgUBHIAAAJIAAACIgBAAIABAMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D6D6").s().p("AgBAJIAAgSIABAAIAAABQADAMgEAGIAAgBg");
	this.shape_1.setTransform(-116.6937,-21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B7").s().p("AAAAZIAAgCQgBgWABgZIAAAAIABAxg");
	this.shape_2.setTransform(-89.9167,-34.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939393").s().p("AABALQgBgLAAgLIABAAIAAAVIAAACIAAgBg");
	this.shape_3.setTransform(-80.9,-39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5A5A5A").s().p("AAAAZIAAgxIAAAAIAAAwIAAABg");
	this.shape_4.setTransform(-92.35,-33.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#777777").s().p("AAAAFIAAgKIABAAIAAACQABAFgCAEIAAgBg");
	this.shape_5.setTransform(-19.3607,-34.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#717171").s().p("AAAAJIAAgBIAAgQQACAHgCAKg");
	this.shape_6.setTransform(-43.0306,-40.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#929292").s().p("AgHAAIAOAAIABAAIAAAAIgPAAIAAAAg");
	this.shape_7.setTransform(-5.675,-149.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#545454").s().p("AAAAdIAAg5IABAAIAAA3IAAACg");
	this.shape_8.setTransform(-97.45,-30.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#808080").s().p("AnXGeIAAgMQADADgBAHIgCACgAHLmcIAOAAIAAABIgBAAIgDABQgGAAgEgCg");
	this.shape_9.setTransform(-87.4,-45.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0B0B0").s().p("AAAghIABAAIAABDIgBhDg");
	this.shape_10.setTransform(-128.25,-12.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C1C1C1").s().p("AAAAHIAAgOIAAAAIAAACQADAJgDAEIAAgBg");
	this.shape_11.setTransform(-107.9769,-28.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#919191").s().p("ABADCIANAAIACAAIAAABIgPABIAAgCgAhOjDIANAAIABAAIAAAAIgOACIAAgCg");
	this.shape_12.setTransform(-21.55,77.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727272").s().p("AorIEIAAgLIABAAIAAABQABAHgCAEIAAgBgAIqHlIAAgSIACAAIAAACQABALgDAHIAAgCgAFxGbIAAgMQACAEgBAHIAAABIgBAAgAHaoEIAMAAIAAACIgBAAIgEAAQgEAAgDgCg");
	this.shape_13.setTransform(-56.3357,-78.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#898989").s().p("AAAAHIAAgCIAAgLIABAAIAAALIAAACIgBAAg");
	this.shape_14.setTransform(149.95,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B9B9B").s().p("AAIABIgQAAIAAgBIAQAAIACAAIAAABIgCAAg");
	this.shape_15.setTransform(5.8,149.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B8B8B").s().p("AmhEzIALAAIACAAIAAABIgNABIAAgCgAGgkDIAAgOIACAAIAAABQAAAJgCAGIAAgCgADDkqIAAgKIABAAIAAABQABAHgCAEIAAgCg");
	this.shape_16.setTransform(5.28,7.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#767676").s().p("AAAAHIAAgDIAAgKIABAAIAAAKIAAADg");
	this.shape_17.setTransform(-128.25,-16.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E8E8E").s().p("AB4LmIAMABIAAABIgCAAIgDAAQgFAAgCgCgAh4lhIgLAAIAAgBIAMABIAAAAIgBAAgABDrnIAMAAIACAAIgOABg");
	this.shape_18.setTransform(-49.375,-16.7357);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#888888").s().p("AgyFpIANAAIACAAIAAACIgPABIAAgDgAyxieIAAgCIAAgKIABAAIAAAKIAAACIgBAAgASwivIAAgKIABAAIAAABQABAHgCADIAAgBgAMAlbIgBgQQACAGAAAJIAAABIgBAAg");
	this.shape_19.setTransform(-29.8437,11.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E7E7E").s().p("AmUQWIARABIAAABIgBAAIgGAAQgGAAgEgCgAlEQWIAPAAIABAAIAAABIgQABIAAgCgArphqIALAAIACAAIAAACIgNAAIAAgCgAPfjxIAAgLIABAAIAAACQABAHgCADIAAgBgAvfqdIgBgNIACAAIAAAMIAAABgArpwXIAOAAIAAABIgBABIgDAAQgGAAgEgCg");
	this.shape_20.setTransform(28.5667,25.4643);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#979797").s().p("AAAAHIAAgNIABAAIAAALIAAACg");
	this.shape_21.setTransform(-104.3,-26.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#848484").s().p("AAAAGIAAgCIAAgJIAAAAIAAAJIAAACIAAAAg");
	this.shape_22.setTransform(-134.6,-13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#565656").s().p("AAAAbIAAg1IABAAIAAAzIAAACg");
	this.shape_23.setTransform(-112.075,-21.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("AAAAGIAAgNIAAAAIABACQABAIgCAFIAAgCg");
	this.shape_24.setTransform(-134.5214,-12.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7D7D7D").s().p("ACKTrQAGAAAFACIAAAAIgBAAIgCABQgGAAgCgDgAKohcIAAgiQACAQgCATIAAgBgAqoiEIAAgmIABAAIAAAlIAAABgAE+i9IgBgVQACAIgBAMIAAABgAmnkJIgBgRIABAAIAAAQIAAABgAEVztIAUABIAAABIgCAAIgHABQgGAAgFgDg");
	this.shape_25.setTransform(-32.575,-13.6458);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#878787").s().p("AAUABIgpAAIAAgBIAqAAIAAABIgBAAg");
	this.shape_26.setTransform(-32.75,-101.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8A8A8A").s().p("AgFAAIALAAIAAABIgBAAIgEAAQgEAAgCgBg");
	this.shape_27.setTransform(-43.275,-82.8607);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858585").s().p("ADgSzIAMABIAAABIgBAAIgDAAQgGAAgCgCgAjqk5IAbAAIACAAIAAAAIgOABQgIAAgHgBgAjNvnIgeAAIAAgBIAgABIAAAAIgCAAgAg9y0IARAAIABABIgCAAIgFAAIgLgBg");
	this.shape_28.setTransform(-31.725,29.3792);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7A7A7A").s().p("AgGAAIANAAIAAABIgBAAIgEAAQgFAAgDgBg");
	this.shape_29.setTransform(-15.375,-121.8875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#787878").s().p("AyKA+IAAgxIABAAIAAAwIAAABgASJgVIAAgpQADAUgCAWIgBAAIAAgBg");
	this.shape_30.setTransform(-25.8432,-8.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8F8F8F").s().p("AIYNuIgSAAIAAgBIAUAAIAAABIgCAAgAoZtfIAAgBIAAgNIADAAIAAANIAAABIgDAAg");
	this.shape_31.setTransform(-58.425,62.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#757575").s().p("AgGAAIAMAAIABAAIAAAAIgNABIAAgBg");
	this.shape_32.setTransform(-47.375,-82.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7F7F7F").s().p("AjAMmIARABIAAABIgBAAIgDAAQgIAAgFgCgACusnIASAAIABAAIAAABIgTAAIAAgBg");
	this.shape_33.setTransform(-28.675,-58.9958);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A1A1A1").s().p("AAAARIAAggIABAAIAAAdIAAADg");
	this.shape_34.setTransform(-76.525,-40.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C4C4C").s().p("AAAAgIAAg/IABAAIAAA8IAAADg");
	this.shape_35.setTransform(-122.375,-15.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#838383").s().p("AGcFPQAFAAAGACIAAABIgCAAIgDAAQgEAAgCgDgAmmlDIAAgCIAAgMIACAAIAAAMIAAACIgCAAg");
	this.shape_36.setTransform(-80.175,13.6361);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C7C7C").s().p("AgGAAIALAAIACAAIgBAAIgGABQgDAAgDgBg");
	this.shape_37.setTransform(-61.3,-29.2558);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#868686").s().p("AgFAAIAKAAIABAAIAAAAIgLABIAAgBg");
	this.shape_38.setTransform(-44.5,-86.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#969696").s().p("AgJAAIASAAIABAAIAAAAIgBAAIgIABQgFAAgFgBg");
	this.shape_39.setTransform(5.7,-149.9219);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#797979").s().p("AgIAAIAPAAIADAAIgBAAIgRABIAAgBg");
	this.shape_40.setTransform(-43.7,21.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B7B7B").s().p("AATABIgnAAIAAgBIApAAIAAABIgCAAg");
	this.shape_41.setTransform(-36.325,-96.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#818181").s().p("AK9S8IAMAAIABAAIAAABIgNABIAAgCgAEWDtIANABIAAABIgCAAIgEAAQgEAAgDgCgArKCUIAAgBIAAgLQADADgCAIIAAABIgBAAgAIpxqIAPAAIACAAIAAAAIgRACIAAgCgAJYy9IALAAIABAAIgMACg");
	this.shape_42.setTransform(-78.55,-8.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#414141").s().p("AAAAGIAAgMIAAAAIAAABQACAIgCAEIAAgBg");
	this.shape_43.setTransform(-149.9219,-4.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#828282").s().p("AtnIdIANAAIAAACIgBAAIgEAAQgFAAgDgCgANonXIgBgNIABAAIAAAMIAAABIAAAAgAHFnmIAAgCIAAg2QADAagCAegAKKoHIgBgNQACADgBAJIAAABg");
	this.shape_44.setTransform(62.775,42.4375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#747474").s().p("AAAAJIAAgRIABAAIAAAQIAAABg");
	this.shape_45.setTransform(-85.225,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAVortexEffect, new cjs.Rectangle(-150,-150,300,300), null);


(lib.DBLAPlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBoQgCgCAAgDIAAjEQAAgEACgBQACgCADACICxBjQADACAAABQAAADgDABIixBjIgDABIgCAAg");
	this.shape.setTransform(35.925,34.2879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj4C6QgOAAgLgLQgKgKAAgPIAAkrQAAgPAKgKQALgLAOAAIHxAAQAOAAALALQAKAKAAAPIAAErQAAAPgKAKQgLALgOAAgADLBoQgEAFAAAFIAAAdQAAAFAEAFQAFAEAFAAIAcAAQAGAAAEgEQAFgEAAgGIAAgdQAAgFgFgFQgEgEgGAAIgcAAQgFAAgFAEgAiuCdIFdAAIAAk/IldAAgAj6BoQgFAFAAAFIAAAdQAAAGAFAEQAEAEAGAAIAcAAQAFAAAFgEQAEgFAAgFIAAgdQAAgFgEgFQgFgEgFAAIgcAAQgGAAgEAEgADLATQgEAEAAAGIAAAcQAAAGAEAEQAEAFAGAAIAcAAQAHAAADgFQAFgDAAgHIAAgcQAAgGgFgEQgDgFgHAAIgcAAQgGAAgEAFgAj6ATQgFAEAAAGIAAAcQAAAHAFADQAEAFAGAAIAcAAQAGAAAEgFQAEgEAAgGIAAgcQAAgGgEgEQgEgFgGAAIgcAAQgGAAgEAFgADLhCQgEAEAAAGIAAAdQAAAFAEAFQAFAEAFAAIAcAAQAGAAAEgEQAFgFAAgFIAAgdQAAgGgFgEQgDgEgHAAIgcAAQgGAAgEAEgAj6hCQgFAEAAAGIAAAdQAAAFAFAFQAEAEAGAAIAcAAQAFAAAFgEQAEgFAAgFIAAgdQAAgGgEgEQgEgEgGAAIgcAAQgGAAgEAEgADLiYQgEAFAAAFIAAAdQAAAGAEAEQAEAEAGAAIAcAAQAHAAADgEQAFgEAAgGIAAgdQAAgFgFgFQgEgEgGAAIgcAAQgFAAgFAEgAj6iYQgFAFAAAFIAAAdQAAAGAFAEQAEAEAGAAIAcAAQAGAAAEgEQAEgEAAgGIAAgdQAAgFgEgFQgFgEgFAAIgcAAQgGAAgEAEg");
	this.shape_1.setTransform(35.175,34.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AGGAAQAAChhyByQhzBzihAAQihAAhyhzQhyhyAAihQAAihByhyQByhyChAAQChAABzByQByByAAChg");
	this.shape_2.setTransform(35.1487,35.1434,1.0256,1.0256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AkTEUQhyhyAAiiQAAihByhyQBzhyCgAAQCiAABxByQBzByAAChQAACihzByQhxByiiAAQigAAhzhyg");
	this.shape_3.setTransform(35.1487,35.1434,1.0256,1.0256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPlayButton, new cjs.Rectangle(-5.8,-5.8,82,82), null);


(lib.DBLAInProgressSash_Span = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// In Progress
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgKgKAAgQQAAgPAKgLQALgKAPAAQAQABAKAKQALAKAAAPQAAAQgLAKQgKAKgQAAQgPAAgLgKgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHgBQAHABAGgGQAFgGAAgIQAAgIgFgFQgGgFgHAAQgHAAgFAFg");
	this.shape.setTransform(108.7,15.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAhQgGgDgFgIIAKgMQAGAKAJgBQADAAADgBQACgCAAgEQAAgCgCgCIgDgBIgFgCIgLgFQgEgCgCgEQgCgEAAgEQAAgKAIgFQAGgHALAAQAOAAAJAKIgKAMIgFgFQgDgBgDAAQgDAAgCABQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQgBADADACIAIADIADAAIACABIACABIABAAIABABIABABIACABQAHADAAAKQAAAMgIAGQgIAIgLgBQgJAAgGgDg");
	this.shape_1.setTransform(101.6,15.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAbQgKgKAAgQQAAgPAKgLQALgKAOAAQAQAAAKAKQAKAKAAAQIAAACIAAADIgzAAQABAHAFAFQAEAEAGAAQAEAAAGgDQAFgDADgFIAPAKQgIAIgHAEQgIADgKAAQgQAAgKgJgAAQgGQgBgHgEgEQgEgEgHAAQgFAAgEAEQgEAEgCAHIAfAAIAAAAg");
	this.shape_2.setTransform(95,15.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAVAAIAAAMQABgGAEgEQAFgDAIAAIAGABIgEATIgHgBQgHAAgEAFIgCAFIAAAHIAAAhg");
	this.shape_3.setTransform(89.15,15.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAuQgHgEgFgFIALgOQAJAKANAAQAHAAAFgEQAFgEAAgFIAAgGQgDAEgFADQgFACgGAAQgOAAgJgKQgJgKAAgPQAAgQAIgLQAJgKAOAAQAOAAAGALIAAgJIAUAAIAABAQAAAQgJAIQgKAIgSABQgMAAgJgEgAgLgbQgFAGAAAJQAAAJAFAEQAFAGAGgBQAIABAFgGQAEgEAAgJQAAgIgEgHQgFgFgIAAQgGAAgFAFg");
	this.shape_4.setTransform(82.025,16.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAaQgKgKAAgQQAAgPAKgLQAKgKAQAAQAQABAKAKQALAKAAAPQAAAQgLAKQgKAKgQAAQgQAAgKgKgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHgBQAHABAGgGQAFgGAAgIQAAgIgFgFQgGgFgHAAQgHAAgFAFg");
	this.shape_5.setTransform(73.95,15.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAUAAIAAAMQACgGAEgEQAFgDAHAAIAHABIgDATIgHgBQgIAAgEAFIgCAFIgBAHIAAAhg");
	this.shape_6.setTransform(67.95,15.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAyIAAhkIAfAAIALABQAKACAGAIQAHAJAAAMQAAAOgIAHQgJAIgPAAIgMAAIAAAngAgLgFIAIAAQAHAAAEgDQAEgFAAgGQAAgHgEgEQgEgDgGAAIgJAAg");
	this.shape_7.setTransform(61.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAjIAAglIAAgHQgBgEgDgCQgDgDgEAAQgFAAgEAFQgDAEAAAIIAAAkIgUAAIAAhEIAUAAIAAALQADgGAGgDQAEgDAHAAQAGAAAFACQAEACADADQADAEABAEIABAMIAAAqg");
	this.shape_8.setTransform(49.85,15.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAyIAAhkIA4AAIAAARIgjAAIAAAXIAeAAIAAAPIgeAAIAAAdIAkAAIAAAQg");
	this.shape_9.setTransform(42.75,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(104,146,25,0.698)","rgba(104,146,25,0.698)","rgba(104,146,25,0.698)","rgba(73,86,92,0.698)"],[0,0,0,1],-75.5,0,75.6,0).s().p("AryBkIAAjIIXlAAIAADIg");
	this.shape_10.setTransform(75.5227,10.0653,0.9997,1.0025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAInProgressSash_Span, new cjs.Rectangle(0,0,151,93.2), null);


(lib.DBLAInProgressSash_En = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// In Progress
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAhQgHgDgEgIIAKgMQAHAKAIgBQADAAADgBQACgCAAgEQAAgCgCgCIgDgBIgFgCIgMgFQgDgCgCgEQgCgEAAgEQAAgKAHgFQAIgHAJAAQAQAAAIAKIgJAMIgGgFQgDgBgDAAQgEAAgBABQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAADACACIAIADIACAAIADABIACABIABAAIABABIABABIABABQAIADAAAKQAAAMgIAGQgIAIgLgBQgJAAgGgDg");
	this.shape.setTransform(106.8,15.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAhQgGgDgFgIIAKgMQAGAKAJgBQADAAACgBQADgCAAgEQAAgCgDgCIgCgBIgFgCIgMgFQgDgCgCgEQgCgEAAgEQAAgKAHgFQAIgHAJAAQAQAAAIAKIgJAMIgGgFQgDgBgEAAQgDAAgBABQgBAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQABADACACIAIADIADAAIABABIACABIACAAIABABIACABIABABQAHADAAAKQAAAMgIAGQgHAIgMgBQgJAAgGgDg");
	this.shape_1.setTransform(101.1,15.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAbQgKgKAAgQQAAgPAKgLQAKgKAPAAQAPAAAKAKQAKAKgBAQIAAACIAAADIgyAAQABAHAEAFQAFAEAGAAQAEAAAGgDQAFgDADgFIAOAKQgGAIgIAEQgHADgLAAQgQAAgJgJgAAQgGQgBgHgEgEQgEgEgGAAQgGAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_2.setTransform(94.5,15.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAUAAIAAAMQACgGAEgEQAFgDAHAAIAHABIgDATIgHgBQgIAAgEAFIgCAFIgBAHIAAAhg");
	this.shape_3.setTransform(88.65,15.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAuQgHgEgFgFIALgOQAJAKANAAQAHAAAFgEQAFgEAAgFIAAgGQgDAEgFADQgFACgGAAQgOAAgJgKQgJgKAAgPQAAgQAIgLQAJgKAOAAQAOAAAGALIAAgJIAUAAIAABAQAAAQgJAIQgKAIgSABQgMAAgJgEgAgLgbQgFAGAAAJQAAAJAFAEQAFAGAGgBQAIABAFgGQAEgEAAgJQAAgIgEgHQgFgFgIAAQgGAAgFAFg");
	this.shape_4.setTransform(81.525,16.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAaQgLgKAAgQQAAgPALgLQAJgKAQAAQAQABALAKQAKAKAAAPQAAAQgKAKQgLAKgQAAQgQAAgJgKgAgMgNQgFAFAAAIQAAAJAFAFQAFAGAHgBQAIABAFgGQAFgGAAgIQAAgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_5.setTransform(73.45,15.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAVAAIAAAMQABgGAEgEQAFgDAIAAIAGABIgEATIgHgBQgHAAgEAFIgCAFIAAAHIAAAhg");
	this.shape_6.setTransform(67.45,15.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAyIAAhkIAeAAIAMABQALACAFAIQAHAJAAAMQAAAOgJAHQgHAIgQAAIgNAAIAAAngAgMgFIAJAAQAHAAAEgDQAEgFAAgGQAAgHgEgEQgEgDgHAAIgJAAg");
	this.shape_7.setTransform(61.2,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAjIAAglIgBgHQAAgEgDgCQgDgDgEAAQgFAAgDAFQgEAEAAAIIAAAkIgUAAIAAhEIAUAAIAAALQADgGAFgDQAFgDAIAAQAFAAAFACQAEACAEADQACAEABAEIABAMIAAAqg");
	this.shape_8.setTransform(49.35,15.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAyIAAhkIATAAIAABkg");
	this.shape_9.setTransform(43.825,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(104,146,25,0.698)","rgba(73,86,92,0.698)"],[0,1],-75.5,0,75.6,0).s().p("AryBkIAAjIIXlAAIAADIg");
	this.shape_10.setTransform(75.5227,10.0653,0.9997,1.0025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAInProgressSash_En, new cjs.Rectangle(0,0,151,92.8), null);


(lib.DBLACompleteCornerBack = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyDUQhbglhFhHQhFhFgfhZQgdhTAAhqIAAgEIHfAAIAAHvQhlgBhZgjg");
	this.shape.setTransform(24.025,24.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLACompleteCornerBack, new cjs.Rectangle(0,0,48.1,49.6), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CoinIcon, new cjs.Rectangle(-16,-16,32,32), null);


(lib.CalendarDesignOngoing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYE2QghgogcgxICig5QAmBGAsA2IAAAAIARATIiPA7QgYgQghgogAA0EIIgBgBIgXgaIAAABQgjgtgfg4ICtg9QAkBFArA0IABAAIAIAKIihBDIgKgKgAEjCjIgPgRQgjgqgeg3ICDgvQAQAgARAcQAZAsASAUIh0AwIgLgLgAlIBuQgSgxgQguICjgvQAOApASAsIAQAnIihA5IgQgngAhdAXQgQgngOgnIC3g2IAWBBIAAAAIATAvIiwA+IgSgqgACdhHIABAAIgVg9ICGgnIAKAdQAOAmAOAiIiEAvIgUgwgAmOhtQgOg1gFgdIChgsIALAxIAAgBQAJAnAMAoIihAvIgNgwgAinjNIAAAAIgLgwIgBgDIC9g0IAHAjIAAAAQAJAsAMAsIi5A3QgLgngJgkgABfkhIAAAAIgHglIAAAAIgBgEICCgjQAMA4ASA+IiEAnQgLgogJgpg");
	this.shape.setTransform(2.2,11.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// calendar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkNJTIi/BNIhZguIiOvaIBOgSIAAgGQgGg6APgtIAAAAQAYhMA0gCQAzgMAsBCQAXAiAMAwIA2gMIgBgFQgFg7AOgtIABAAQAXhNA0gCQAzgMAsBCQAYAjAMAxIAAAAIA1gMIgBgHQgEgzAMgqIABgBQAYhLAzgCQAygNAtBCQAVAgALAqIAAABIAPgDICUARIAIgDQAHAwAQBOQAgCdAuCXQA8DDB3B+QA8A+AvAXItZGDQgtgYg7hCgAnziLQAHAoASBFQAjCKA3CSQAvCABcB6QAuA+AlAjILmlAQgcgPgmgtQhLhYg0iOQgphvgdiAQgOg/gHgqgAnHEdIgBAAIAAABIArElIAAABQACACBkglIAAgBIABgBIgBgBIgBABIgBAAQhRhqg6iSIgBgFIgBgBIAAgBIgBABgAmblKQgQADgJARQgJARADAVQADAWAOANQANAOAQgDQAPgCAKgRQAJgQgEgWQgDgVgNgOQgMgMgNAAIgEAAgAiKmKQgPACgJARQgKARADAWQADAWAOAMQAOAOAPgCQAQgCAJgRQAJgRgDgVQgDgWgNgNQgMgNgOAAIgEABgABwnBQgQACgJARQgJASADAVQADAWANANQAOANAQgCQAPgCAJgRQAJgQgDgWQgDgVgNgOQgMgMgNAAIgEAAgAoLnOQgJAdADAjIAwgLQgIgggPgXQgIgMgEgEIgHASgAkEnMIAwgMQgIghgQgXIABAAQgIgNgFgEIgHAUIAAgBQgIAdADAlgAAMpBQgHAZABAeIAugLQgIgbgOgVIABAAQgIgMgEgEIgHAUg");
	this.shape_1.setTransform(0.025,-0.0063);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarDesignOngoing, new cjs.Rectangle(-69.2,-68.4,138.5,136.9), null);


(lib.CalendarDesign2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBaIi+hSIC4hdIAUjQICSCTIDJgtIhdC4IBrCxIjPggIiHCcg");
	this.shape.setTransform(0.025,13.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// calendar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkNJTIi/BNIhZguIiOvaIBOgSIAAgGQgGg6APgtIAAAAQAYhMA0gCQAzgMAsBCQAXAiAMAwIA2gMIgBgFQgFg7AOgtIABAAQAXhNA0gCQAzgMAsBCQAYAjAMAxIAAAAIA1gMIgBgHQgEgzAMgqIABgBQAYhLAzgCQAygNAtBCQAVAgALAqIAAABIAPgDICUARIAIgDQAHAwAQBOQAgCdAuCXQA8DDB3B+QA8A+AvAXItZGDQgtgYg7hCgAnziLQAHAoASBFQAjCKA3CSQAvCABcB6QAuA+AlAjILmlAQgcgPgmgtQhLhYg0iOQgphvgdiAQgOg/gHgqgAnHEdIgBAAIAAABIArElIAAABQACACBkglIAAgBIABgBIgBgBIgBABIgBAAQhRhqg6iSIgBgFIgBgBIAAgBIgBABgAmblKQgQADgJARQgJARADAVQADAWAOANQANAOAQgDQAPgCAKgRQAJgQgEgWQgDgVgNgOQgMgMgNAAIgEAAgAiKmKQgPACgJARQgKARADAWQADAWAOAMQAOAOAPgCQAQgCAJgRQAJgRgDgVQgDgWgNgNQgMgNgOAAIgEABgABwnBQgQACgJARQgJASADAVQADAWANANQAOANAQgCQAPgCAJgRQAJgQgDgWQgDgVgNgOQgMgMgNAAIgEAAgAoLnOQgJAdADAjIAwgLQgIgggPgXQgIgMgEgEIgHASgAkEnMIAwgMQgIghgQgXIABAAQgIgNgFgEIgHAUIAAgBQgIAdADAlgAAMpBQgHAZABAeIAugLQgIgbgOgVIABAAQgIgMgEgEIgHAUg");
	this.shape_1.setTransform(0.025,-0.0063);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarDesign2, new cjs.Rectangle(-69.2,-68.4,138.5,136.9), null);


(lib.BlueAppBackground = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BitmapBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.UnitLabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 5
	this.instance = new lib.UnitBanner();
	this.instance.setTransform(75,25,1,1,0,0,0,75,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitLabel, new cjs.Rectangle(-1.6,-3.2,152,60.6), null);


(lib.StarAnimation = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.star();
	this.instance.setTransform(0,-0.05,0.3,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,y:0},8).wait(1).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:0.3,scaleY:0.3,y:-0.05},11).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18,37.6,36);


(lib.SparkleWhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SparkleShineWhite
	this.instance = new lib.SparkleShineWhite();
	this.instance.setTransform(44.65,45.1,1,1,0,0,0,18.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.6,regY:18.6,scaleX:0.9811,scaleY:0.9728,x:44.8,y:45.35},0).wait(1).to({scaleX:0.9603,scaleY:0.9444},0).wait(1).to({scaleX:0.9381,scaleY:0.9153},0).wait(1).to({scaleX:0.9146,scaleY:0.8853,y:45.3},0).wait(1).to({scaleX:0.8898,scaleY:0.8545,y:45.35},0).wait(1).to({scaleX:0.8637,scaleY:0.823,y:45.3},0).wait(1).to({scaleX:0.8362,scaleY:0.7907},0).wait(1).to({scaleX:0.8074,scaleY:0.7575},0).wait(1).to({scaleX:0.7771,scaleY:0.7235},0).wait(1).to({scaleX:0.7453,scaleY:0.6885,x:44.75,y:45.25},0).wait(1).to({scaleX:0.7119,scaleY:0.6526,x:44.8,y:45.3},0).wait(1).to({scaleX:0.6767,scaleY:0.6155,y:45.25},0).wait(1).to({scaleX:0.6397,scaleY:0.5773,x:44.75},0).wait(1).to({scaleX:0.6005,scaleY:0.5378},0).wait(1).to({scaleX:0.5591,scaleY:0.4969},0).wait(1).to({scaleX:0.5151,scaleY:0.4543,y:45.2},0).wait(1).to({scaleX:0.4683,scaleY:0.4099,y:45.15},0).wait(1).to({scaleX:0.4182,scaleY:0.3634,y:45.2},0).wait(1).to({scaleX:0.3643,scaleY:0.3143,y:45.15},0).wait(1).to({scaleX:0.3059,scaleY:0.2622,y:45.2},0).wait(1).to({scaleX:0.242,scaleY:0.2063,x:44.7,y:45.15},0).wait(1).to({scaleX:0.1714,scaleY:0.1455,y:45.1},0).wait(1).to({scaleX:0.0918,scaleY:0.0779},0).wait(1).to({scaleX:0,scaleY:0,x:-44.7,y:-45.1},0).to({_off:true},1).wait(28));

	// sparkleWhiteBase
	this.instance_1 = new lib.SparkleWhiteBase();
	this.instance_1.setTransform(45,45,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.986,scaleY:0.9813,rotation:15,x:44.95,y:45.05},0).wait(1).to({scaleX:0.9696,scaleY:0.9607,rotation:30,x:45,y:45},0).wait(1).to({scaleX:0.9515,scaleY:0.9385,rotation:45,x:44.95},0).wait(1).to({scaleX:0.9316,scaleY:0.915,rotation:60,y:45.05},0).wait(1).to({scaleX:0.9102,scaleY:0.8901,rotation:75,y:45},0).wait(1).to({scaleX:0.8871,scaleY:0.8638,rotation:90,x:45,y:44.95},0).wait(1).to({scaleX:0.8623,scaleY:0.8362,rotation:105,x:44.95,y:45},0).wait(1).to({scaleX:0.8358,scaleY:0.8071,rotation:120,x:45,y:44.95},0).wait(1).to({scaleX:0.8075,scaleY:0.7765,rotation:135,y:45},0).wait(1).to({scaleX:0.7774,scaleY:0.7443,rotation:150,x:44.95},0).wait(1).to({scaleX:0.7452,scaleY:0.7104,rotation:165,x:45},0).wait(1).to({scaleX:0.7108,scaleY:0.6747,rotation:180,x:44.95},0).wait(1).to({scaleX:0.6742,scaleY:0.6372,rotation:195,y:44.95},0).wait(1).to({scaleX:0.635,scaleY:0.5974,rotation:210,x:45},0).wait(1).to({scaleX:0.593,scaleY:0.5554,rotation:225,x:44.95,y:45},0).wait(1).to({scaleX:0.5479,scaleY:0.5109,rotation:240,y:44.95},0).wait(1).to({scaleX:0.4995,scaleY:0.4635,rotation:255,x:45,y:45},0).wait(1).to({scaleX:0.4471,scaleY:0.4128,rotation:270},0).wait(1).to({scaleX:0.3902,scaleY:0.3585,rotation:285},0).wait(1).to({scaleX:0.3282,scaleY:0.2999,rotation:300,y:44.95},0).wait(1).to({scaleX:0.2599,scaleY:0.2361,rotation:315,x:44.95,y:45},0).wait(1).to({scaleX:0.184,scaleY:0.1661,rotation:330,y:44.95},0).wait(1).to({scaleX:0.0984,scaleY:0.0882,rotation:345,x:45,y:45},0).wait(1).to({scaleX:0,scaleY:0,rotation:360,x:-45,y:-45},0).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.SparkleGreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SparkleShine
	this.instance = new lib.SparkleGreenShine();
	this.instance.setTransform(44.65,45.1,1,1,0,0,0,18.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.6,regY:18.6,scaleX:0.9811,scaleY:0.9728,x:44.8,y:45.35},0).wait(1).to({scaleX:0.9603,scaleY:0.9444},0).wait(1).to({scaleX:0.9381,scaleY:0.9153},0).wait(1).to({scaleX:0.9146,scaleY:0.8853,y:45.3},0).wait(1).to({scaleX:0.8898,scaleY:0.8545,y:45.35},0).wait(1).to({scaleX:0.8637,scaleY:0.823,y:45.3},0).wait(1).to({scaleX:0.8362,scaleY:0.7907},0).wait(1).to({scaleX:0.8074,scaleY:0.7575},0).wait(1).to({scaleX:0.7771,scaleY:0.7235},0).wait(1).to({scaleX:0.7453,scaleY:0.6885,x:44.75,y:45.25},0).wait(1).to({scaleX:0.7119,scaleY:0.6526,x:44.8,y:45.3},0).wait(1).to({scaleX:0.6767,scaleY:0.6155,y:45.25},0).wait(1).to({scaleX:0.6397,scaleY:0.5773,x:44.75},0).wait(1).to({scaleX:0.6005,scaleY:0.5378},0).wait(1).to({scaleX:0.5591,scaleY:0.4969},0).wait(1).to({scaleX:0.5151,scaleY:0.4543,y:45.2},0).wait(1).to({scaleX:0.4683,scaleY:0.4099,y:45.15},0).wait(1).to({scaleX:0.4182,scaleY:0.3634,y:45.2},0).wait(1).to({scaleX:0.3643,scaleY:0.3143,y:45.15},0).wait(1).to({scaleX:0.3059,scaleY:0.2622,y:45.2},0).wait(1).to({scaleX:0.242,scaleY:0.2063,x:44.7,y:45.15},0).wait(1).to({scaleX:0.1714,scaleY:0.1455,y:45.1},0).wait(1).to({scaleX:0.0918,scaleY:0.0779},0).wait(1).to({scaleX:0,scaleY:0,x:-44.7,y:-45.1},0).to({_off:true},1).wait(28));

	// sparkleGreenBase
	this.instance_1 = new lib.SparkleGreenBase();
	this.instance_1.setTransform(45,45,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.986,scaleY:0.9813,rotation:15,x:44.95,y:45.05},0).wait(1).to({scaleX:0.9696,scaleY:0.9607,rotation:30,x:45,y:45},0).wait(1).to({scaleX:0.9515,scaleY:0.9385,rotation:45,x:44.95},0).wait(1).to({scaleX:0.9316,scaleY:0.915,rotation:60,y:45.05},0).wait(1).to({scaleX:0.9102,scaleY:0.8901,rotation:75,y:45},0).wait(1).to({scaleX:0.8871,scaleY:0.8638,rotation:90,x:45,y:44.95},0).wait(1).to({scaleX:0.8623,scaleY:0.8362,rotation:105,x:44.95,y:45},0).wait(1).to({scaleX:0.8358,scaleY:0.8071,rotation:120,x:45,y:44.95},0).wait(1).to({scaleX:0.8075,scaleY:0.7765,rotation:135,y:45},0).wait(1).to({scaleX:0.7774,scaleY:0.7443,rotation:150,x:44.95},0).wait(1).to({scaleX:0.7452,scaleY:0.7104,rotation:165,x:45},0).wait(1).to({scaleX:0.7108,scaleY:0.6747,rotation:180,x:44.95},0).wait(1).to({scaleX:0.6742,scaleY:0.6372,rotation:195,y:44.95},0).wait(1).to({scaleX:0.635,scaleY:0.5974,rotation:210,x:45},0).wait(1).to({scaleX:0.593,scaleY:0.5554,rotation:225,x:44.95,y:45},0).wait(1).to({scaleX:0.5479,scaleY:0.5109,rotation:240,y:44.95},0).wait(1).to({scaleX:0.4995,scaleY:0.4635,rotation:255,x:45,y:45},0).wait(1).to({scaleX:0.4471,scaleY:0.4128,rotation:270},0).wait(1).to({scaleX:0.3902,scaleY:0.3585,rotation:285},0).wait(1).to({scaleX:0.3282,scaleY:0.2999,rotation:300,y:44.95},0).wait(1).to({scaleX:0.2599,scaleY:0.2361,rotation:315,x:44.95,y:45},0).wait(1).to({scaleX:0.184,scaleY:0.1661,rotation:330,y:44.95},0).wait(1).to({scaleX:0.0984,scaleY:0.0882,rotation:345,x:45,y:45},0).wait(1).to({scaleX:0,scaleY:0,rotation:360,x:-45,y:-45},0).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.ParticlesWhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SparkleWhite
	this.instance = new lib.SparkleWhite("synched",0);
	this.instance.setTransform(-0.2,4.35,1.213,1.2126,0,0,0,44.5,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45,regY:45,scaleX:1.1358,scaleY:1.1356,x:13.6,y:-9.4,startPosition:1},0).wait(1).to({scaleX:1.0587,scaleY:1.0584,x:26.8,y:-24.25,startPosition:2},0).wait(1).to({scaleX:0.9815,scaleY:0.9813,x:40,y:-39.15,startPosition:3},0).wait(1).to({scaleX:0.9043,scaleY:0.9042,x:53.15,y:-54,startPosition:4},0).wait(1).to({scaleX:0.8272,scaleY:0.8271,x:66.3,y:-68.9,startPosition:5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:79.55,y:-83.7,startPosition:6},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,x:81.65,y:-86.35,startPosition:7},0).wait(1).to({scaleX:0.7728,scaleY:0.7728,x:83.85,y:-88.95,startPosition:8},0).wait(1).to({scaleX:0.7842,scaleY:0.7841,x:85.95,y:-91.55,startPosition:9},0).wait(1).to({scaleX:0.7956,scaleY:0.7955,x:88.1,y:-94.15,startPosition:10},0).wait(1).to({scaleX:0.807,scaleY:0.8069,x:90.2,y:-96.8,startPosition:11},0).wait(1).to({scaleX:0.8184,scaleY:0.8183,x:92.4,y:-99.4,startPosition:12},0).wait(1).to({scaleX:0.8298,scaleY:0.8297,x:94.5,y:-102,startPosition:13},0).wait(1).to({scaleX:0.8411,scaleY:0.841,x:96.65,y:-104.6,startPosition:14},0).wait(1).to({scaleX:0.8525,scaleY:0.8524,x:98.75,y:-107.25,startPosition:15},0).wait(1).to({scaleX:0.8639,scaleY:0.8638,x:100.95,y:-109.85,startPosition:16},0).wait(1).to({scaleX:0.8753,scaleY:0.8752,x:103.05,y:-112.45,startPosition:17},0).wait(1).to({scaleX:0.8867,scaleY:0.8866,x:105.2,y:-115.05,startPosition:18},0).wait(1).to({scaleX:0.8981,scaleY:0.8979,x:107.3,y:-117.7,startPosition:19},0).wait(1).to({scaleX:0.9095,scaleY:0.9093,x:109.5,y:-120.3,startPosition:20},0).wait(1).to({scaleX:0.9209,scaleY:0.9207,x:111.6,y:-122.9,startPosition:21},0).wait(1).to({scaleX:0.9323,scaleY:0.9321,x:113.75,y:-125.5,startPosition:22},0).wait(1).to({scaleX:0.9437,scaleY:0.9435,x:115.85,y:-128.15,startPosition:23},0).wait(1).to({scaleX:0.9551,scaleY:0.9548,x:118,y:-130.75,startPosition:24},0).wait(1).to({scaleX:0.9665,scaleY:0.9662,x:120.15,y:-133.35,startPosition:25},0).wait(1).to({scaleX:0.9779,scaleY:0.9776,x:122.25,y:-135.95,startPosition:26},0).wait(1).to({scaleX:0.9893,scaleY:0.989,x:124.4,y:-138.6,startPosition:27},0).wait(1).to({scaleX:1.0007,scaleY:1.0004,x:126.55,y:-141.2,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_1 = new lib.SparkleWhite("synched",0);
	this.instance_1.setTransform(2.85,8.1,0.4043,0.4042,0,0,0,44.4,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:45,regY:45,scaleX:0.4091,scaleY:0.409,rotation:-2.0829,x:15.7,y:2.75,startPosition:1},0).wait(1).to({scaleX:0.4139,scaleY:0.4138,rotation:-4.1658,x:28.25,y:-3.65,startPosition:2},0).wait(1).to({scaleX:0.4186,scaleY:0.4186,rotation:-6.2487,x:40.95,y:-10.05,startPosition:3},0).wait(1).to({scaleX:0.4234,scaleY:0.4234,rotation:-8.3317,x:53.5,y:-16.4,startPosition:4},0).wait(1).to({scaleX:0.4282,scaleY:0.4281,rotation:-10.4146,x:66.15,y:-22.8,startPosition:5},0).wait(1).to({scaleX:0.433,scaleY:0.4329,rotation:-12.4975,x:78.7,y:-29.15,startPosition:6},0).wait(1).to({scaleX:0.4378,scaleY:0.4377,x:80.85,y:-30.15,startPosition:7},0).wait(1).to({scaleX:0.4426,scaleY:0.4425,x:82.95,y:-31.25,startPosition:8},0).wait(1).to({scaleX:0.4474,scaleY:0.4473,x:85.1,y:-32.3,startPosition:9},0).wait(1).to({scaleX:0.4521,scaleY:0.452,x:87.2,y:-33.4,startPosition:10},0).wait(1).to({scaleX:0.4569,scaleY:0.4568,x:89.3,y:-34.45,startPosition:11},0).wait(1).to({scaleX:0.4617,scaleY:0.4616,x:91.45,y:-35.45,startPosition:12},0).wait(1).to({scaleX:0.4665,scaleY:0.4664,x:93.55,y:-36.55,startPosition:13},0).wait(1).to({scaleX:0.4713,scaleY:0.4712,x:95.65,y:-37.6,startPosition:14},0).wait(1).to({scaleX:0.4761,scaleY:0.4759,x:97.75,y:-38.65,startPosition:15},0).wait(1).to({scaleX:0.4808,scaleY:0.4807,x:99.9,y:-39.75,startPosition:16},0).wait(1).to({scaleX:0.4856,scaleY:0.4855,x:102,y:-40.75,startPosition:17},0).wait(1).to({scaleX:0.4904,scaleY:0.4903,x:104.05,y:-41.8,startPosition:18},0).wait(1).to({scaleX:0.4952,scaleY:0.4951,x:106.2,y:-42.85,startPosition:19},0).wait(1).to({scaleX:0.5,scaleY:0.4998,x:108.3,y:-43.9,startPosition:20},0).wait(1).to({scaleX:0.5048,scaleY:0.5046,x:110.45,y:-45,startPosition:21},0).wait(1).to({scaleX:0.5096,scaleY:0.5094,x:112.55,y:-46,startPosition:22},0).wait(1).to({scaleX:0.5143,scaleY:0.5142,x:114.65,y:-47.05,startPosition:23},0).wait(1).to({scaleX:0.5191,scaleY:0.519,x:116.75,y:-48.15,startPosition:24},0).wait(1).to({scaleX:0.5239,scaleY:0.5237,x:118.85,y:-49.2,startPosition:25},0).wait(1).to({scaleX:0.5287,scaleY:0.5285,x:121,y:-50.3,startPosition:26},0).wait(1).to({scaleX:0.5335,scaleY:0.5333,x:123.1,y:-51.3,startPosition:27},0).wait(1).to({scaleX:0.5383,scaleY:0.5381,x:125.25,y:-52.35,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_2 = new lib.SparkleWhite("synched",0);
	this.instance_2.setTransform(-5.35,2.3,0.8087,0.8084,0,0,0,43.4,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:45,regY:45,scaleX:0.8184,scaleY:0.8181,x:-8.3,y:-15.55,startPosition:1},0).wait(1).to({scaleX:0.828,scaleY:0.8277,x:-12.6,y:-34.15,startPosition:2},0).wait(1).to({scaleX:0.8377,scaleY:0.8374,x:-16.9,y:-52.75,startPosition:3},0).wait(1).to({scaleX:0.8473,scaleY:0.847,x:-21.15,y:-71.35,startPosition:4},0).wait(1).to({scaleX:0.857,scaleY:0.8567,x:-25.45,y:-89.95,startPosition:5},0).wait(1).to({scaleX:0.8667,scaleY:0.8663,x:-29.75,y:-108.55,startPosition:6},0).wait(1).to({scaleX:0.8763,scaleY:0.8759,x:-30.4,y:-111.65,startPosition:7},0).wait(1).to({scaleX:0.886,scaleY:0.8856,x:-31.15,y:-114.7,startPosition:8},0).wait(1).to({scaleX:0.8956,scaleY:0.8952,x:-31.8,y:-117.8,startPosition:9},0).wait(1).to({scaleX:0.9053,scaleY:0.9048,x:-32.45,y:-120.9,startPosition:10},0).wait(1).to({scaleX:0.9149,scaleY:0.9145,x:-33.2,y:-123.95,startPosition:11},0).wait(1).to({scaleX:0.9246,scaleY:0.9241,x:-33.85,y:-127.05,startPosition:12},0).wait(1).to({scaleX:0.9342,scaleY:0.9338,x:-34.55,y:-130.15,startPosition:13},0).wait(1).to({scaleX:0.9439,scaleY:0.9434,x:-35.25,y:-133.2,startPosition:14},0).wait(1).to({scaleX:0.9535,scaleY:0.953,x:-35.9,y:-136.3,startPosition:15},0).wait(1).to({scaleX:0.9632,scaleY:0.9627,x:-36.6,y:-139.4,startPosition:16},0).wait(1).to({scaleX:0.9728,scaleY:0.9723,x:-37.25,y:-142.5,startPosition:17},0).wait(1).to({scaleX:0.9825,scaleY:0.982,x:-38,y:-145.55,startPosition:18},0).wait(1).to({scaleX:0.9921,scaleY:0.9916,x:-38.65,y:-148.65,startPosition:19},0).wait(1).to({scaleX:1.0018,scaleY:1.0012,x:-39.35,y:-151.75,startPosition:20},0).wait(1).to({scaleX:1.0115,scaleY:1.0109,x:-40.05,y:-154.8,startPosition:21},0).wait(1).to({scaleX:1.0211,scaleY:1.0205,x:-40.7,y:-157.9,startPosition:22},0).wait(1).to({scaleX:1.0308,scaleY:1.0302,x:-41.4,y:-161,startPosition:23},0).wait(1).to({scaleX:1.0404,scaleY:1.0398,x:-42.1,y:-164.05,startPosition:24},0).wait(1).to({scaleX:1.0501,scaleY:1.0494,x:-42.8,y:-167.15,startPosition:25},0).wait(1).to({scaleX:1.0597,scaleY:1.0591,x:-43.45,y:-170.25,startPosition:26},0).wait(1).to({scaleX:1.0694,scaleY:1.0687,x:-44.15,y:-173.3,startPosition:27},0).wait(1).to({scaleX:1.079,scaleY:1.0784,x:-44.85,y:-176.4,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_3 = new lib.SparkleWhite("synched",0);
	this.instance_3.setTransform(-4.85,2.3,0.8087,0.8084,0,0,0,43.9,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:45,regY:45,scaleX:0.8184,scaleY:0.8181,x:-16.8,y:-3.4,startPosition:1},0).wait(1).to({scaleX:0.828,scaleY:0.8277,x:-29.75,y:-9.8,startPosition:2},0).wait(1).to({scaleX:0.8377,scaleY:0.8374,x:-42.65,y:-16.2,startPosition:3},0).wait(1).to({scaleX:0.8473,scaleY:0.847,x:-55.55,y:-22.65,startPosition:4},0).wait(1).to({scaleX:0.857,scaleY:0.8567,x:-68.5,y:-29.05,startPosition:5},0).wait(1).to({scaleX:0.8667,scaleY:0.8663,x:-81.4,y:-35.5,startPosition:6},0).wait(1).to({scaleX:0.8763,scaleY:0.8759,x:-83.5,y:-36.55,startPosition:7},0).wait(1).to({scaleX:0.886,scaleY:0.8856,x:-85.7,y:-37.6,startPosition:8},0).wait(1).to({scaleX:0.8956,scaleY:0.8952,x:-87.8,y:-38.6,startPosition:9},0).wait(1).to({scaleX:0.9053,scaleY:0.9048,x:-89.9,y:-39.7,startPosition:10},0).wait(1).to({scaleX:0.9149,scaleY:0.9145,x:-92.05,y:-40.7,startPosition:11},0).wait(1).to({scaleX:0.9246,scaleY:0.9241,x:-94.15,y:-41.75,startPosition:12},0).wait(1).to({scaleX:0.9342,scaleY:0.9338,x:-96.25,y:-42.85,startPosition:13},0).wait(1).to({scaleX:0.9439,scaleY:0.9434,x:-98.4,y:-43.85,startPosition:14},0).wait(1).to({scaleX:0.9535,scaleY:0.953,x:-100.5,y:-44.9,startPosition:15},0).wait(1).to({scaleX:0.9632,scaleY:0.9627,x:-102.6,y:-45.95,startPosition:16},0).wait(1).to({scaleX:0.9728,scaleY:0.9723,x:-104.75,y:-47,startPosition:17},0).wait(1).to({scaleX:0.9825,scaleY:0.982,x:-106.9,y:-48.05,startPosition:18},0).wait(1).to({scaleX:0.9921,scaleY:0.9916,x:-109,y:-49.1,startPosition:19},0).wait(1).to({scaleX:1.0018,scaleY:1.0012,x:-111.1,y:-50.15,startPosition:20},0).wait(1).to({scaleX:1.0115,scaleY:1.0109,x:-113.25,y:-51.15,startPosition:21},0).wait(1).to({scaleX:1.0211,scaleY:1.0205,x:-115.35,y:-52.25,startPosition:22},0).wait(1).to({scaleX:1.0308,scaleY:1.0302,x:-117.45,y:-53.3,startPosition:23},0).wait(1).to({scaleX:1.0404,scaleY:1.0398,x:-119.6,y:-54.3,startPosition:24},0).wait(1).to({scaleX:1.0501,scaleY:1.0494,x:-121.7,y:-55.4,startPosition:25},0).wait(1).to({scaleX:1.0597,scaleY:1.0591,x:-123.85,y:-56.4,startPosition:26},0).wait(1).to({scaleX:1.0694,scaleY:1.0687,x:-126,y:-57.45,startPosition:27},0).wait(1).to({scaleX:1.079,scaleY:1.0784,x:-128.1,y:-58.5,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_4 = new lib.SparkleWhite("synched",0);
	this.instance_4.setTransform(-13,9.1,0.8087,0.8084,0,0,0,45.4,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:45,regY:45,scaleX:0.8184,scaleY:0.8181,x:-27.7,y:18.1,startPosition:1},0).wait(1).to({scaleX:0.828,scaleY:0.8277,x:-42.15,y:25.95,startPosition:2},0).wait(1).to({scaleX:0.8377,scaleY:0.8374,x:-56.6,y:33.8,startPosition:3},0).wait(1).to({scaleX:0.8473,scaleY:0.847,x:-71,y:41.55,startPosition:4},0).wait(1).to({scaleX:0.857,scaleY:0.8567,x:-85.5,y:49.45,startPosition:5},0).wait(1).to({scaleX:0.8667,scaleY:0.8663,x:-99.9,y:57.3,startPosition:6},0).wait(1).to({scaleX:0.8763,scaleY:0.8759,x:-102.3,y:58.6,startPosition:7},0).wait(1).to({scaleX:0.886,scaleY:0.8856,x:-104.75,y:59.9,startPosition:8},0).wait(1).to({scaleX:0.8956,scaleY:0.8952,x:-107.1,y:61.25,startPosition:9},0).wait(1).to({scaleX:0.9053,scaleY:0.9048,x:-109.5,y:62.55,startPosition:10},0).wait(1).to({scaleX:0.9149,scaleY:0.9145,x:-111.95,y:63.85,startPosition:11},0).wait(1).to({scaleX:0.9246,scaleY:0.9241,x:-114.3,y:65.2,startPosition:12},0).wait(1).to({scaleX:0.9342,scaleY:0.9338,x:-116.7,y:66.5,startPosition:13},0).wait(1).to({scaleX:0.9439,scaleY:0.9434,x:-119.15,y:67.8,startPosition:14},0).wait(1).to({scaleX:0.9535,scaleY:0.953,x:-121.55,y:69.15,startPosition:15},0).wait(1).to({scaleX:0.9632,scaleY:0.9627,x:-123.9,y:70.45,startPosition:16},0).wait(1).to({scaleX:0.9728,scaleY:0.9723,x:-126.3,y:71.75,startPosition:17},0).wait(1).to({scaleX:0.9825,scaleY:0.982,x:-128.75,y:73.1,startPosition:18},0).wait(1).to({scaleX:0.9921,scaleY:0.9916,x:-131.1,y:74.4,startPosition:19},0).wait(1).to({scaleX:1.0018,scaleY:1.0012,x:-133.5,y:75.7,startPosition:20},0).wait(1).to({scaleX:1.0115,scaleY:1.0109,x:-135.95,y:77.05,startPosition:21},0).wait(1).to({scaleX:1.0211,scaleY:1.0205,x:-138.35,y:78.35,startPosition:22},0).wait(1).to({scaleX:1.0308,scaleY:1.0302,x:-140.7,y:79.65,startPosition:23},0).wait(1).to({scaleX:1.0404,scaleY:1.0398,x:-143.15,y:81,startPosition:24},0).wait(1).to({scaleX:1.0501,scaleY:1.0494,x:-145.55,y:82.3,startPosition:25},0).wait(1).to({scaleX:1.0597,scaleY:1.0591,x:-147.95,y:83.65,startPosition:26},0).wait(1).to({scaleX:1.0694,scaleY:1.0687,x:-150.35,y:84.95,startPosition:27},0).wait(1).to({scaleX:1.079,scaleY:1.0784,x:-152.75,y:86.3,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_5 = new lib.SparkleWhite("synched",0);
	this.instance_5.setTransform(-7.35,18.25,0.8087,0.8084,0,0,0,44,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:45,regY:45,scaleX:0.8184,scaleY:0.8181,x:2.7,y:31.65,startPosition:1},0).wait(1).to({scaleX:0.828,scaleY:0.8277,x:11.85,y:43.75,startPosition:2},0).wait(1).to({scaleX:0.8377,scaleY:0.8374,x:21.05,y:55.85,startPosition:3},0).wait(1).to({scaleX:0.8473,scaleY:0.847,x:30.25,y:67.95,startPosition:4},0).wait(1).to({scaleX:0.857,scaleY:0.8567,x:39.35,y:80.1,startPosition:5},0).wait(1).to({scaleX:0.8667,scaleY:0.8663,x:48.6,y:92.2,startPosition:6},0).wait(1).to({scaleX:0.8763,scaleY:0.8759,x:50.15,y:94.2,startPosition:7},0).wait(1).to({scaleX:0.886,scaleY:0.8856,x:51.65,y:96.25,startPosition:8},0).wait(1).to({scaleX:0.8956,scaleY:0.8952,x:53.2,y:98.3,startPosition:9},0).wait(1).to({scaleX:0.9053,scaleY:0.9048,x:54.75,y:100.3,startPosition:10},0).wait(1).to({scaleX:0.9149,scaleY:0.9145,x:56.25,y:102.35,startPosition:11},0).wait(1).to({scaleX:0.9246,scaleY:0.9241,x:57.8,y:104.45,startPosition:12},0).wait(1).to({scaleX:0.9342,scaleY:0.9338,x:59.35,y:106.45,startPosition:13},0).wait(1).to({scaleX:0.9439,scaleY:0.9434,x:60.85,y:108.5,startPosition:14},0).wait(1).to({scaleX:0.9535,scaleY:0.953,x:62.4,y:110.55,startPosition:15},0).wait(1).to({scaleX:0.9632,scaleY:0.9627,x:63.95,y:112.55,startPosition:16},0).wait(1).to({scaleX:0.9728,scaleY:0.9723,x:65.5,y:114.6,startPosition:17},0).wait(1).to({scaleX:0.9825,scaleY:0.982,x:67,y:116.65,startPosition:18},0).wait(1).to({scaleX:0.9921,scaleY:0.9916,x:68.55,y:118.65,startPosition:19},0).wait(1).to({scaleX:1.0018,scaleY:1.0012,x:70.1,y:120.7,startPosition:20},0).wait(1).to({scaleX:1.0115,scaleY:1.0109,x:71.6,y:122.75,startPosition:21},0).wait(1).to({scaleX:1.0211,scaleY:1.0205,x:73.2,y:124.75,startPosition:22},0).wait(1).to({scaleX:1.0308,scaleY:1.0302,x:74.75,y:126.8,startPosition:23},0).wait(1).to({scaleX:1.0404,scaleY:1.0398,x:76.25,y:128.85,startPosition:24},0).wait(1).to({scaleX:1.0501,scaleY:1.0494,x:77.8,y:130.85,startPosition:25},0).wait(1).to({scaleX:1.0597,scaleY:1.0591,x:79.35,y:132.9,startPosition:26},0).wait(1).to({scaleX:1.0694,scaleY:1.0687,x:80.85,y:134.95,startPosition:27},0).wait(1).to({scaleX:1.079,scaleY:1.0784,x:82.4,y:137,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_6 = new lib.SparkleWhite("synched",0);
	this.instance_6.setTransform(-3.55,18.9,1.6174,1.6169,0,0,0,44.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:45,regY:45,scaleX:1.6367,scaleY:1.6362,x:-3.15,y:35.15,startPosition:1},0).wait(1).to({scaleX:1.656,scaleY:1.6555,x:-3.4,y:50.7,startPosition:2},0).wait(1).to({scaleX:1.6753,scaleY:1.6747,x:-3.65,y:66.2,startPosition:3},0).wait(1).to({scaleX:1.6946,scaleY:1.694,x:-3.9,y:81.75,startPosition:4},0).wait(1).to({scaleX:1.7139,scaleY:1.7133,x:-4.2,y:97.3,startPosition:5},0).wait(1).to({scaleX:1.7332,scaleY:1.7326,x:-4.4,y:112.8,startPosition:6},0).wait(1).to({scaleX:1.7525,scaleY:1.7518,x:-4.45,y:115.45,startPosition:7},0).wait(1).to({scaleX:1.7718,scaleY:1.7711,y:118,startPosition:8},0).wait(1).to({scaleX:1.7911,scaleY:1.7904,x:-4.5,y:120.6,startPosition:9},0).wait(1).to({scaleX:1.8104,scaleY:1.8097,x:-4.55,y:123.25,startPosition:10},0).wait(1).to({scaleX:1.8297,scaleY:1.829,y:125.8,startPosition:11},0).wait(1).to({scaleX:1.849,scaleY:1.8482,x:-4.6,y:128.4,startPosition:12},0).wait(1).to({scaleX:1.8683,scaleY:1.8675,x:-4.65,y:131,startPosition:13},0).wait(1).to({scaleX:1.8876,scaleY:1.8868,y:133.6,startPosition:14},0).wait(1).to({scaleX:1.9069,scaleY:1.9061,x:-4.7,y:136.2,startPosition:15},0).wait(1).to({scaleX:1.9262,scaleY:1.9254,y:138.8,startPosition:16},0).wait(1).to({scaleX:1.9455,scaleY:1.9446,x:-4.75,y:141.4,startPosition:17},0).wait(1).to({scaleX:1.9648,scaleY:1.9639,x:-4.8,y:144,startPosition:18},0).wait(1).to({scaleX:1.9841,scaleY:1.9832,y:146.6,startPosition:19},0).wait(1).to({scaleX:2.0034,scaleY:2.0025,x:-4.85,y:149.15,startPosition:20},0).wait(1).to({scaleX:2.0228,scaleY:2.0217,x:-4.9,y:151.8,startPosition:21},0).wait(1).to({scaleX:2.0421,scaleY:2.041,y:154.4,startPosition:22},0).wait(1).to({scaleX:2.0614,scaleY:2.0603,x:-4.95,y:156.95,startPosition:23},0).wait(1).to({scaleX:2.0807,scaleY:2.0796,y:159.6,startPosition:24},0).wait(1).to({scaleX:2.1,scaleY:2.0989,x:-5,y:162.15,startPosition:25},0).wait(1).to({scaleX:2.1193,scaleY:2.1181,x:-5.05,y:164.75,startPosition:26},0).wait(1).to({scaleX:2.1386,scaleY:2.1374,y:167.35,startPosition:27},0).wait(1).to({scaleX:2.1579,scaleY:2.1567,x:-5.1,y:169.95,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_7 = new lib.SparkleWhite("synched",0);
	this.instance_7.setTransform(2.25,4.75,1.6174,1.6169,0,0,0,45.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:45,regY:45,scaleX:1.6367,scaleY:1.6362,x:-16.25,y:8.7,startPosition:1},0).wait(1).to({scaleX:1.656,scaleY:1.6555,x:-33.95,y:11.9,startPosition:2},0).wait(1).to({scaleX:1.6753,scaleY:1.6747,x:-51.6,y:15.1,startPosition:3},0).wait(1).to({scaleX:1.6946,scaleY:1.694,x:-69.3,y:18.4,startPosition:4},0).wait(1).to({scaleX:1.7139,scaleY:1.7133,x:-87.05,y:21.6,startPosition:5},0).wait(1).to({scaleX:1.7332,scaleY:1.7326,x:-104.7,y:24.8,startPosition:6},0).wait(1).to({scaleX:1.7525,scaleY:1.7518,x:-107.65,y:25.4,startPosition:7},0).wait(1).to({scaleX:1.7718,scaleY:1.7711,x:-110.6,y:25.9,startPosition:8},0).wait(1).to({scaleX:1.7911,scaleY:1.7904,x:-113.6,y:26.45,startPosition:9},0).wait(1).to({scaleX:1.8104,scaleY:1.8097,x:-116.55,y:27,startPosition:10},0).wait(1).to({scaleX:1.8297,scaleY:1.829,x:-119.5,y:27.55,startPosition:11},0).wait(1).to({scaleX:1.849,scaleY:1.8482,x:-122.5,y:28.05,startPosition:12},0).wait(1).to({scaleX:1.8683,scaleY:1.8675,x:-125.45,y:28.6,startPosition:13},0).wait(1).to({scaleX:1.8876,scaleY:1.8868,x:-128.4,y:29.15,startPosition:14},0).wait(1).to({scaleX:1.9069,scaleY:1.9061,x:-131.4,y:29.65,startPosition:15},0).wait(1).to({scaleX:1.9262,scaleY:1.9254,x:-134.3,y:30.25,startPosition:16},0).wait(1).to({scaleX:1.9455,scaleY:1.9446,x:-137.3,y:30.75,startPosition:17},0).wait(1).to({scaleX:1.9648,scaleY:1.9639,x:-140.25,y:31.35,startPosition:18},0).wait(1).to({scaleX:1.9841,scaleY:1.9832,x:-143.2,y:31.85,startPosition:19},0).wait(1).to({scaleX:2.0034,scaleY:2.0025,x:-146.2,y:32.35,startPosition:20},0).wait(1).to({scaleX:2.0228,scaleY:2.0217,x:-149.15,y:32.95,startPosition:21},0).wait(1).to({scaleX:2.0421,scaleY:2.041,x:-152.1,y:33.45,startPosition:22},0).wait(1).to({scaleX:2.0614,scaleY:2.0603,x:-155.1,y:34,startPosition:23},0).wait(1).to({scaleX:2.0807,scaleY:2.0796,x:-158,y:34.55,startPosition:24},0).wait(1).to({scaleX:2.1,scaleY:2.0989,x:-161,y:35.1,startPosition:25},0).wait(1).to({scaleX:2.1193,scaleY:2.1181,x:-164,y:35.6,startPosition:26},0).wait(1).to({scaleX:2.1386,scaleY:2.1374,x:-166.9,y:36.2,startPosition:27},0).wait(1).to({scaleX:2.1579,scaleY:2.1567,x:-169.9,y:36.7,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_8 = new lib.SparkleWhite("synched",0);
	this.instance_8.setTransform(4.2,4.75,1.6174,1.6169,0,0,0,45.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:45,regY:45,scaleX:1.6367,scaleY:1.6362,x:-10.65,y:-10.5,startPosition:1},0).wait(1).to({scaleX:1.656,scaleY:1.6555,x:-25.4,y:-26.45,startPosition:2},0).wait(1).to({scaleX:1.6753,scaleY:1.6747,x:-40.1,y:-42.45,startPosition:3},0).wait(1).to({scaleX:1.6946,scaleY:1.694,x:-54.85,y:-58.35,startPosition:4},0).wait(1).to({scaleX:1.7139,scaleY:1.7133,x:-69.55,y:-74.3,startPosition:5},0).wait(1).to({scaleX:1.7332,scaleY:1.7326,x:-84.25,y:-90.3,startPosition:6},0).wait(1).to({scaleX:1.7525,scaleY:1.7518,x:-86.8,y:-93,startPosition:7},0).wait(1).to({scaleX:1.7718,scaleY:1.7711,x:-89.3,y:-95.75,startPosition:8},0).wait(1).to({scaleX:1.7911,scaleY:1.7904,x:-91.8,y:-98.55,startPosition:9},0).wait(1).to({scaleX:1.8104,scaleY:1.8097,x:-94.35,y:-101.25,startPosition:10},0).wait(1).to({scaleX:1.8297,scaleY:1.829,x:-96.85,y:-104,startPosition:11},0).wait(1).to({scaleX:1.849,scaleY:1.8482,x:-99.35,y:-106.8,startPosition:12},0).wait(1).to({scaleX:1.8683,scaleY:1.8675,x:-101.9,y:-109.5,startPosition:13},0).wait(1).to({scaleX:1.8876,scaleY:1.8868,x:-104.4,y:-112.25,startPosition:14},0).wait(1).to({scaleX:1.9069,scaleY:1.9061,x:-106.9,y:-115.05,startPosition:15},0).wait(1).to({scaleX:1.9262,scaleY:1.9254,x:-109.4,y:-117.75,startPosition:16},0).wait(1).to({scaleX:1.9455,scaleY:1.9446,x:-111.95,y:-120.5,startPosition:17},0).wait(1).to({scaleX:1.9648,scaleY:1.9639,x:-114.5,y:-123.25,startPosition:18},0).wait(1).to({scaleX:1.9841,scaleY:1.9832,x:-116.95,y:-126,startPosition:19},0).wait(1).to({scaleX:2.0034,scaleY:2.0025,x:-119.5,y:-128.75,startPosition:20},0).wait(1).to({scaleX:2.0228,scaleY:2.0217,x:-122.05,y:-131.5,startPosition:21},0).wait(1).to({scaleX:2.0421,scaleY:2.041,x:-124.5,y:-134.25,startPosition:22},0).wait(1).to({scaleX:2.0614,scaleY:2.0603,x:-127.05,y:-137,startPosition:23},0).wait(1).to({scaleX:2.0807,scaleY:2.0796,x:-129.55,y:-139.75,startPosition:24},0).wait(1).to({scaleX:2.1,scaleY:2.0989,x:-132.05,y:-142.5,startPosition:25},0).wait(1).to({scaleX:2.1193,scaleY:2.1181,x:-134.6,y:-145.25,startPosition:26},0).wait(1).to({scaleX:2.1386,scaleY:2.1374,x:-137.1,y:-148,startPosition:27},0).wait(1).to({scaleX:2.1579,scaleY:2.1567,x:-139.65,y:-150.75,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_9 = new lib.SparkleWhite("synched",0);
	this.instance_9.setTransform(-0.4,5.95,1.6174,1.6169,0,0,0,45.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:45,regY:45,scaleX:1.6367,scaleY:1.6362,x:10.15,y:-16.45,startPosition:1},0).wait(1).to({scaleX:1.656,scaleY:1.6555,x:20.8,y:-39.6,startPosition:2},0).wait(1).to({scaleX:1.6753,scaleY:1.6747,x:31.5,y:-62.75,startPosition:3},0).wait(1).to({scaleX:1.6946,scaleY:1.694,x:42.15,y:-85.85,startPosition:4},0).wait(1).to({scaleX:1.7139,scaleY:1.7133,x:52.8,y:-109,startPosition:5},0).wait(1).to({scaleX:1.7332,scaleY:1.7326,x:63.5,y:-132.15,startPosition:6},0).wait(1).to({scaleX:1.7525,scaleY:1.7518,x:65.25,y:-135.85,startPosition:7},0).wait(1).to({scaleX:1.7718,scaleY:1.7711,x:67.05,y:-139.65,startPosition:8},0).wait(1).to({scaleX:1.7911,scaleY:1.7904,x:68.85,y:-143.45,startPosition:9},0).wait(1).to({scaleX:1.8104,scaleY:1.8097,x:70.6,y:-147.15,startPosition:10},0).wait(1).to({scaleX:1.8297,scaleY:1.829,x:72.4,y:-150.95,startPosition:11},0).wait(1).to({scaleX:1.849,scaleY:1.8482,x:74.15,y:-154.75,startPosition:12},0).wait(1).to({scaleX:1.8683,scaleY:1.8675,x:75.9,y:-158.45,startPosition:13},0).wait(1).to({scaleX:1.8876,scaleY:1.8868,x:77.7,y:-162.25,startPosition:14},0).wait(1).to({scaleX:1.9069,scaleY:1.9061,x:79.5,y:-166.05,startPosition:15},0).wait(1).to({scaleX:1.9262,scaleY:1.9254,x:81.3,y:-169.75,startPosition:16},0).wait(1).to({scaleX:1.9455,scaleY:1.9446,x:83.05,y:-173.55,startPosition:17},0).wait(1).to({scaleX:1.9648,scaleY:1.9639,x:84.8,y:-177.25,startPosition:18},0).wait(1).to({scaleX:1.9841,scaleY:1.9832,x:86.6,y:-181.05,startPosition:19},0).wait(1).to({scaleX:2.0034,scaleY:2.0025,x:88.35,y:-184.85,startPosition:20},0).wait(1).to({scaleX:2.0228,scaleY:2.0217,x:90.1,y:-188.55,startPosition:21},0).wait(1).to({scaleX:2.0421,scaleY:2.041,x:91.9,y:-192.35,startPosition:22},0).wait(1).to({scaleX:2.0614,scaleY:2.0603,x:93.65,y:-196.15,startPosition:23},0).wait(1).to({scaleX:2.0807,scaleY:2.0796,x:95.45,y:-199.85,startPosition:24},0).wait(1).to({scaleX:2.1,scaleY:2.0989,x:97.2,y:-203.65,startPosition:25},0).wait(1).to({scaleX:2.1193,scaleY:2.1181,x:98.95,y:-207.45,startPosition:26},0).wait(1).to({scaleX:2.1386,scaleY:2.1374,x:100.75,y:-211.15,startPosition:27},0).wait(1).to({scaleX:2.1579,scaleY:2.1567,x:102.5,y:-214.95,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_10 = new lib.SparkleWhite("synched",0);
	this.instance_10.setTransform(2.1,3.85,1.6174,1.6169,0,0,0,45.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:45,regY:45,scaleX:1.6367,scaleY:1.6362,x:18.6,y:11.6,startPosition:1},0).wait(1).to({scaleX:1.656,scaleY:1.6555,x:35.25,y:18.65,startPosition:2},0).wait(1).to({scaleX:1.6753,scaleY:1.6747,x:51.9,y:25.7,startPosition:3},0).wait(1).to({scaleX:1.6946,scaleY:1.694,x:68.55,y:32.8,startPosition:4},0).wait(1).to({scaleX:1.7139,scaleY:1.7133,x:85.1,y:39.85,startPosition:5},0).wait(1).to({scaleX:1.7332,scaleY:1.7326,x:101.8,y:46.9,startPosition:6},0).wait(1).to({scaleX:1.7525,scaleY:1.7518,x:104.55,y:48.1,startPosition:7},0).wait(1).to({scaleX:1.7718,scaleY:1.7711,x:107.35,y:49.2,startPosition:8},0).wait(1).to({scaleX:1.7911,scaleY:1.7904,x:110.1,y:50.35,startPosition:9},0).wait(1).to({scaleX:1.8104,scaleY:1.8097,x:112.85,y:51.5,startPosition:10},0).wait(1).to({scaleX:1.8297,scaleY:1.829,x:115.65,y:52.65,startPosition:11},0).wait(1).to({scaleX:1.849,scaleY:1.8482,x:118.4,y:53.75,startPosition:12},0).wait(1).to({scaleX:1.8683,scaleY:1.8675,x:121.15,y:54.95,startPosition:13},0).wait(1).to({scaleX:1.8876,scaleY:1.8868,x:123.95,y:56.05,startPosition:14},0).wait(1).to({scaleX:1.9069,scaleY:1.9061,x:126.75,y:57.2,startPosition:15},0).wait(1).to({scaleX:1.9262,scaleY:1.9254,x:129.55,y:58.35,startPosition:16},0).wait(1).to({scaleX:1.9455,scaleY:1.9446,x:132.3,y:59.5,startPosition:17},0).wait(1).to({scaleX:1.9648,scaleY:1.9639,x:135.05,y:60.65,startPosition:18},0).wait(1).to({scaleX:1.9841,scaleY:1.9832,x:137.85,y:61.8,startPosition:19},0).wait(1).to({scaleX:2.0034,scaleY:2.0025,x:140.6,y:62.9,startPosition:20},0).wait(1).to({scaleX:2.0228,scaleY:2.0217,x:143.35,y:64.1,startPosition:21},0).wait(1).to({scaleX:2.0421,scaleY:2.041,x:146.15,y:65.2,startPosition:22},0).wait(1).to({scaleX:2.0614,scaleY:2.0603,x:148.9,y:66.35,startPosition:23},0).wait(1).to({scaleX:2.0807,scaleY:2.0796,x:151.7,y:67.5,startPosition:24},0).wait(1).to({scaleX:2.1,scaleY:2.0989,x:154.45,y:68.65,startPosition:25},0).wait(1).to({scaleX:2.1193,scaleY:2.1181,x:157.2,y:69.75,startPosition:26},0).wait(1).to({scaleX:2.1386,scaleY:2.1374,x:160,y:70.95,startPosition:27},0).wait(1).to({scaleX:2.1579,scaleY:2.1567,x:162.75,y:72.05,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_11 = new lib.SparkleWhite("synched",0);
	this.instance_11.setTransform(1.05,5.4,0.7278,0.7275,0,0,0,44.1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:14.95,y:-6.35,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:28.2,y:-19.35,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:41.3,y:-32.3,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:54.55,y:-45.25,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:67.75,y:-58.2,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:81,y:-71.2,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:83.15,y:-73.5,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:85.35,y:-75.75,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:87.5,y:-78,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:89.65,y:-80.25,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:91.85,y:-82.5,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:94.05,y:-84.8,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:96.2,y:-87.05,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:98.35,y:-89.3,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:100.55,y:-91.55,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:102.7,y:-93.8,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:104.9,y:-96.05,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:107.1,y:-98.35,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:109.25,y:-100.65,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:111.4,y:-102.9,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:113.6,y:-105.15,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:115.75,y:-107.4,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:117.95,y:-109.7,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:120.15,y:-111.95,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:122.25,y:-114.2,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:124.45,y:-116.45,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:126.65,y:-118.7,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:128.8,y:-121,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_12 = new lib.SparkleWhite("synched",0);
	this.instance_12.setTransform(2.65,6.15,0.7278,0.7275,0,0,0,44.1,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:4,y:-19.6,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:4.7,y:-46.5,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:5.35,y:-73.35,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:6,y:-100.2,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:6.7,y:-127.05,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:7.4,y:-153.9,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:7.55,y:-158.35,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:7.75,y:-162.7,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:7.9,y:-167.1,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:8.1,y:-171.5,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:8.3,y:-175.85,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:8.5,y:-180.3,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:8.7,y:-184.7,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:8.8,y:-189.05,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:9,y:-193.45,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:9.2,y:-197.85,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:9.4,y:-202.2,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:9.6,y:-206.65,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:9.8,y:-211.05,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:9.9,y:-215.4,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:10.1,y:-219.8,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:10.3,y:-224.2,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:10.5,y:-228.6,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:10.7,y:-233,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:10.85,y:-237.4,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:11.05,y:-241.75,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:11.2,y:-246.15,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:11.4,y:-250.6,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_13 = new lib.SparkleWhite("synched",0);
	this.instance_13.setTransform(2.45,-0.6,0.7278,0.7275,0,0,0,44.3,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:26.6,y:-2.05,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:50.15,y:-3.5,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:73.75,y:-4.9,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:97.35,y:-6.35,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:121,y:-7.75,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:144.6,y:-9.15,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:148.6,y:-9.45,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:152.55,y:-9.7,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:156.45,y:-9.95,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:160.45,y:-10.2,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:164.4,y:-10.45,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:168.35,y:-10.7,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:172.35,y:-10.95,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:176.25,y:-11.2,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:180.2,y:-11.45,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:184.2,y:-11.7,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:188.15,y:-11.95,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:192.15,y:-12.2,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:196.1,y:-12.45,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:200,y:-12.7,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:204,y:-12.95,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:207.95,y:-13.2,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:211.9,y:-13.45,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:215.9,y:-13.7,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:219.8,y:-13.95,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:223.75,y:-14.2,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:227.75,y:-14.45,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:231.7,y:-14.75,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_14 = new lib.SparkleWhite("synched",0);
	this.instance_14.setTransform(4.75,9,0.7278,0.7275,0,0,0,45.5,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:-9.55,y:-2.25,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:-23.5,y:-14.65,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:-37.5,y:-26.95,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:-51.45,y:-39.3,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:-65.4,y:-51.6,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:-79.35,y:-63.95,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:-81.75,y:-66.2,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:-84.2,y:-68.35,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:-86.7,y:-70.55,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:-89.1,y:-72.75,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:-91.55,y:-74.9,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:-93.95,y:-77.15,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:-96.4,y:-79.35,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:-98.85,y:-81.5,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:-101.3,y:-83.7,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:-103.7,y:-85.9,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:-106.15,y:-88.05,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:-108.55,y:-90.3,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:-111,y:-92.5,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:-113.5,y:-94.7,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:-115.9,y:-96.85,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:-118.35,y:-99.05,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:-120.75,y:-101.3,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:-123.2,y:-103.45,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:-125.65,y:-105.65,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:-128.1,y:-107.85,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:-130.5,y:-110,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:-132.95,y:-112.25,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_15 = new lib.SparkleWhite("synched",0);
	this.instance_15.setTransform(0.65,13.1,0.7278,0.7275,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:-8.45,y:29.4,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:-17.75,y:45.45,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:-27.05,y:61.55,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:-36.35,y:77.7,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:-45.65,y:93.8,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:-54.9,y:109.95,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:-56.5,y:112.6,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:-58.15,y:115.3,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:-59.8,y:118,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:-61.4,y:120.7,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:-63,y:123.4,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:-64.65,y:126.05,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:-66.25,y:128.75,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:-67.9,y:131.45,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:-69.5,y:134.15,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:-71.15,y:136.85,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:-72.75,y:139.55,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:-74.35,y:142.2,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:-75.95,y:144.9,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:-77.65,y:147.6,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:-79.25,y:150.3,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:-80.85,y:153,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:-82.45,y:155.65,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:-84.05,y:158.35,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:-85.75,y:161.05,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:-87.35,y:163.75,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:-88.95,y:166.45,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:-90.55,y:169.1,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_16 = new lib.SparkleWhite("synched",0);
	this.instance_16.setTransform(8.65,11.35,0.7278,0.7275,0,0,0,45.7,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:11.8,y:30.75,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:15.45,y:48.9,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:19.05,y:67.15,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:22.65,y:85.45,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:26.3,y:103.7,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:29.95,y:121.95,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:30.6,y:124.95,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:31.2,y:128.05,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:31.8,y:131.1,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:32.45,y:134.15,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:33.1,y:137.2,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:33.75,y:140.25,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:34.35,y:143.3,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:34.95,y:146.35,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:35.6,y:149.4,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:36.25,y:152.45,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:36.9,y:155.55,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:37.5,y:158.55,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:38.15,y:161.6,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:38.75,y:164.65,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:39.4,y:167.75,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:40,y:170.8,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:40.65,y:173.8,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:41.3,y:176.85,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:41.9,y:179.9,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:42.55,y:183,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:43.15,y:186.05,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:43.75,y:189.05,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_17 = new lib.SparkleWhite("synched",0);
	this.instance_17.setTransform(1.25,1.2,0.7278,0.7275,0,0,0,44,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:14.65,y:15.1,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:27.25,y:28.8,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:39.75,y:42.5,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:52.35,y:56.25,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:64.95,y:70,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:77.6,y:83.75,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:79.7,y:86,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:81.8,y:88.3,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:83.85,y:90.6,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:85.95,y:92.9,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:88.05,y:95.2,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:90.15,y:97.5,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:92.25,y:99.8,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:94.3,y:102.1,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:96.45,y:104.4,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:98.55,y:106.7,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:100.65,y:109,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:102.75,y:111.25,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:104.85,y:113.55,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:106.9,y:115.85,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:109,y:118.15,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:111.1,y:120.5,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:113.2,y:122.75,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:115.3,y:125.05,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:117.35,y:127.35,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:119.5,y:129.65,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:121.6,y:131.95,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:123.7,y:134.2,startPosition:28},0).wait(1));

	// SparkleWhite
	this.instance_18 = new lib.SparkleWhite("synched",0);
	this.instance_18.setTransform(5.45,6.4,0.7278,0.7275,0,0,0,43.9,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:45,regY:45,scaleX:0.7365,scaleY:0.7362,x:-11.6,y:23,startPosition:1},0).wait(1).to({scaleX:0.7451,scaleY:0.7449,x:-29.45,y:38.4,startPosition:2},0).wait(1).to({scaleX:0.7538,scaleY:0.7536,x:-47.35,y:53.95,startPosition:3},0).wait(1).to({scaleX:0.7625,scaleY:0.7623,x:-65.2,y:69.45,startPosition:4},0).wait(1).to({scaleX:0.7712,scaleY:0.7709,x:-83.05,y:85,startPosition:5},0).wait(1).to({scaleX:0.7799,scaleY:0.7796,x:-100.9,y:100.5,startPosition:6},0).wait(1).to({scaleX:0.7886,scaleY:0.7883,x:-103.9,y:103.05,startPosition:7},0).wait(1).to({scaleX:0.7973,scaleY:0.797,x:-106.85,y:105.65,startPosition:8},0).wait(1).to({scaleX:0.806,scaleY:0.8056,x:-109.9,y:108.25,startPosition:9},0).wait(1).to({scaleX:0.8146,scaleY:0.8143,x:-112.85,y:110.8,startPosition:10},0).wait(1).to({scaleX:0.8233,scaleY:0.823,x:-115.85,y:113.4,startPosition:11},0).wait(1).to({scaleX:0.832,scaleY:0.8316,x:-118.8,y:115.95,startPosition:12},0).wait(1).to({scaleX:0.8407,scaleY:0.8403,x:-121.8,y:118.55,startPosition:13},0).wait(1).to({scaleX:0.8494,scaleY:0.849,x:-124.8,y:121.15,startPosition:14},0).wait(1).to({scaleX:0.8581,scaleY:0.8577,x:-127.8,y:123.7,startPosition:15},0).wait(1).to({scaleX:0.8668,scaleY:0.8663,x:-130.75,y:126.3,startPosition:16},0).wait(1).to({scaleX:0.8754,scaleY:0.875,x:-133.75,y:128.9,startPosition:17},0).wait(1).to({scaleX:0.8841,scaleY:0.8837,x:-136.75,y:131.45,startPosition:18},0).wait(1).to({scaleX:0.8928,scaleY:0.8924,x:-139.7,y:134.05,startPosition:19},0).wait(1).to({scaleX:0.9015,scaleY:0.901,x:-142.75,y:136.6,startPosition:20},0).wait(1).to({scaleX:0.9102,scaleY:0.9097,x:-145.7,y:139.2,startPosition:21},0).wait(1).to({scaleX:0.9189,scaleY:0.9184,x:-148.7,y:141.8,startPosition:22},0).wait(1).to({scaleX:0.9276,scaleY:0.9271,x:-151.65,y:144.35,startPosition:23},0).wait(1).to({scaleX:0.9363,scaleY:0.9357,x:-154.65,y:146.95,startPosition:24},0).wait(1).to({scaleX:0.9449,scaleY:0.9444,x:-157.65,y:149.55,startPosition:25},0).wait(1).to({scaleX:0.9536,scaleY:0.9531,x:-160.65,y:152.1,startPosition:26},0).wait(1).to({scaleX:0.9623,scaleY:0.9618,x:-163.6,y:154.7,startPosition:27},0).wait(1).to({scaleX:0.971,scaleY:0.9704,x:-166.6,y:157.25,startPosition:28},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.6,-233.3,398,417.8);


(lib.GübSet8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(10.3,-15.15,1.104,1.104,9.0002,0,0,0.1,-0.1);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-2.65,22.3,0.7812,0.7812,8.9983,0,0,0,0.1);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-27.15,-1.95,0.9374,0.9374,-25.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübM04();
	this.instance_3.setTransform(-29.15,92.9,0.8,0.8);

	this.instance_4 = new lib.GübF09();
	this.instance_4.setTransform(51.85,-61.8,0.75,0.75,89.9942,0,0,0,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet8, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(-32.3,-72.65,0.7019,0.7019,88.0005);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-53.7,-50.15,0.5538,0.5538,-18.0001);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-59.95,-77.05,0.8637,0.8637,39.1925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübM03d();
	this.instance_3.setTransform(40.6,-42.5,0.6497,0.6497,-9.0597,0,0,11,-23.2);

	this.instance_4 = new lib.GübF08c();
	this.instance_4.setTransform(-46.55,61.6,0.6291,0.6291,-25.2928,0,0,-7.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet7, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(-34.8,-76.65,0.8,0.8,-29.9981);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-60.2,-52.15,0.7,0.7,14.9984);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-61.45,-84.05,0.9,0.9,14.9976);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübM03c();
	this.instance_3.setTransform(18.45,29.05,0.75,0.75,3.0007,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet6, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(51,-60,0.7998,0.7998,44.9969);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(29,-38,0.7,0.7,14.9984);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(17,-71,1,1,-14.9983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübF08();
	this.instance_3.setTransform(-20.4,34,0.75,0.75,-13.9992,0,0,3.6,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet5, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(11.9,-50.85,0.9598,0.9598,-19.998);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-13.35,-25.7,0.7193,0.7193,19.9972,0,0,-0.1,-0.1);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-21.7,-60.45,1.0783,1.0783,9.9979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübF08c();
	this.instance_3.setTransform(53,90.3,0.849,0.849,0,22.085,-157.915,-2.6,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet4, new cjs.Rectangle(-165.9,-192,347,396.7), null);


(lib.GübSet3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(36,-40.15,0.7783,0.7783,-8.2219,0,0,0.3,-0.1);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(7,-22.5,0.7192,0.7192,-17.9652);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(5.85,-64.35,1.0782,1.0782,21.7736,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübM04();
	this.instance_3.setTransform(-32.95,64.35,0.8999,0.8999,0,89.9825,-90.0175,-2.6,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet3, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(-19,-60,0.7999,0.7999,-19.9992);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-40,-39,0.5994,0.5994,19.9992);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-47,-68,0.8986,0.8986,9.9985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.GübF02a();
	this.instance_3.setTransform(-0.1,17.45,0.8,0.8,0,0,0,-2.6,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE+Ii3K1ICIqnIkBKCIDdqfIlbJoIEtpuImZIuIGApXInrIDIHAoSIoZG4IIHnjIpaF3II1mSIplEdIAAgBIJelKIpQC7IgCgFII1jaIo8BrIAAgEIACgEIJEiSIo7AgIACgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIyBNIo5i7IgBgHIJSCcIpSkfIAAgDIJYD0IpKl1IJqFXIocnIIIsGcInYn6IIFHqImepDIG3IdIlOpkIF4JVIj+qTIEhJ2IiqqgIDZKjIhSqtIABAAIB5KcIACqkIABAAIAoKuIBcqwIABAAIgwKkICoqHIABAAIiDKiIEKqSIjbKRIFPpeIkyKCIGno7Il5JFIHcn4InFIhIIlm/In9HVIJKlxIo/GeIJHkMIgBAFIomEoIIzi2IAAAHIo0DdII2hoIAAAJIoaCFIIeggIAAAJIorBEIItAmIgGAKIoYgFIIjBqIgBAIIo9hKII5C9IgBAHIoxiVIJCERIAAAEIpmj2IJWGCIpblTIITG8Io8mkIHhIJInzndIGVIwInDolIFSJyIlupLID8KDIksqHICrK0IjPqRIBUKsIiCq8IgGLBIgBAAIgjqpIhZKsg");
	this.shape.setTransform(-0.275,6.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet2, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.GübSet1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.instance = new lib.star();
	this.instance.setTransform(22.65,-40.7,1.072,1.072,12.9997);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-0.6,-9.3,0.938,0.938,8.9986);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-19.7,-47.95,1.34,1.34,-12.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// gübs
	this.instance_3 = new lib.Gub2();
	this.instance_3.setTransform(47,92);

	this.instance_4 = new lib.Gub1();
	this.instance_4.setTransform(-49,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// starburst
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgxE/Ii3K1ICIqoIkCKDIDeqgIlbJpIEtpwImZIvIGApXInsIDIHAoSIoYG4IIHnjIpbF3II1mSIpkEdIAAgBIJelKIpQC7IgCgFII1jbIo8BsIAAgEIACgEIJDiSIo5AgIABgJIIjhAIowgkIAAgIIJGADIo+hyIABgIIIxBNIo4i7IgBgHIJSCcIpRkeIAAgEIJWD1IpJl3IJqFXIocnHIIsGcInYn6IIFHqImepEIG2IeIlNplIF3JWIj9qTIEhJ2IirqfIDZKjIhSquIACAAIB5KcIACqkIABAAIAoKuIBcqvIABAAIgwKjICnqGIACgBIiDKjIEKqSIjbKQIFPpeIkyKDIGmo9Il5JHIHdn4InFIfIIlm+In+HWIJKlyIo+GfIJGkNIAAAEIonEoII0i1IAAAIIo0DcII2hnIAAAIIobCGIIeghIABAJIorBEIItAmIgGAKIoZgEIIjBpIAAAIIo+hKII6C+IgBAHIoxiXIJBETIAAADIpmj2IJXGDIpblUIITG7Io8mjIHgIJInyndIGVIxInDomIFRJxIltpKID8KCIktqFICrKzIjOqSIBUKtIiDq7IgFLAIgBABIgjqrIhZKsg");
	this.shape.setTransform(-0.25,-8.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GübSet1, new cjs.Rectangle(-165.9,-192,347,373.1), null);


(lib.DreamBoxGreen102 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfBaIAAhTQAAgNgEgHQgGgLgQABQgNAAgLAJQgLAKAAAZIAABFIgWAAIAAizIAWAAIAABDQAIgKAGgEQAKgHAPAAQAdAAAKAUQAFALAAASIAABUg");
	this.shape.setTransform(72.525,75.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBNQgGgIAAgNIAAhVIgRAAIAAgSIARAAIAAgkIAVAAIAAAkIAVAAIAAASIgVAAIAABUQAAAHAFACQADACAGgBIADAAIAEAAIAAARIgHACIgJAAQgPABgFgIg");
	this.shape_1.setTransform(61.275,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA6QgMgLAAgRQAAgSAMgKQALgJASgCIAigEQAIgBADgGQABgDAAgFQAAgLgIgFQgIgGgOAAQgRAAgHAKQgEAFgBAKIgVAAQABgYAPgKQAPgJAUAAQAWAAAOAJQAOAIAAATIAABKQAAAEACACQABACAFAAIADAAIAEgBIAAAQIgIACIgHABQgMAAgFgIQgCgFgBgIQgHAJgNAHQgLAGgPAAQgTAAgLgLgAAPADIgMACIgNACQgMABgGAEQgKAGAAAMQAAAJAHAGQAHAFAKAAQALAAAKgFQASgJAAgUIAAgRIgKAEg");
	this.shape_2.setTransform(50.475,77.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABBBDIAAhaQAAgNgHgFQgGgFgKAAQgMAAgJAJQgKAIAAAVIAABLIgVAAIAAhVQAAgNgEgGQgEgJgOAAQgNAAgJAKQgLAJAAAZIAABFIgWAAIAAiCIAWAAIAAATQAHgKAHgEQALgIAOAAQAPAAAKAIQAEAEAFAJQAHgLAKgFQAKgFAMAAQAbAAAJATQAFAKAAASIAABWg");
	this.shape_3.setTransform(32.15,77.575);

	this.instance = new lib.DreamboxLogoWhite();
	this.instance.setTransform(51,38,0.11,0.11,0,0,0,165,236.4);

	this.instance_1 = new lib.GreenAppBackground("synched",0);
	this.instance_1.setTransform(51,51,0.51,0.51,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.DreamBoxBlue102 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfBaIAAhTQAAgNgEgHQgGgLgQABQgNAAgLAJQgLAKAAAZIAABFIgWAAIAAizIAWAAIAABDQAIgKAGgEQAKgHAPAAQAdAAAKAUQAFALAAASIAABUg");
	this.shape.setTransform(72.525,75.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBNQgGgIAAgNIAAhVIgRAAIAAgSIARAAIAAgkIAVAAIAAAkIAVAAIAAASIgVAAIAABUQAAAHAFACQADACAGgBIADAAIAEAAIAAARIgHACIgJAAQgPABgFgIg");
	this.shape_1.setTransform(61.275,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA6QgMgLAAgRQAAgSAMgKQALgJASgCIAigEQAIgBADgGQABgDAAgFQAAgLgIgFQgIgGgOAAQgRAAgHAKQgEAFgBAKIgVAAQABgYAPgKQAPgJAUAAQAWAAAOAJQAOAIAAATIAABKQAAAEACACQABACAFAAIADAAIAEgBIAAAQIgIACIgHABQgMAAgFgIQgCgFgBgIQgHAJgNAHQgLAGgPAAQgTAAgLgLgAAPADIgMACIgNACQgMABgGAEQgKAGAAAMQAAAJAHAGQAHAFAKAAQALAAAKgFQASgJAAgUIAAgRIgKAEg");
	this.shape_2.setTransform(50.475,77.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABBBDIAAhaQAAgNgHgFQgGgFgKAAQgMAAgJAJQgKAIAAAVIAABLIgVAAIAAhVQAAgNgEgGQgEgJgOAAQgNAAgJAKQgLAJAAAZIAABFIgWAAIAAiCIAWAAIAAATQAHgKAHgEQALgIAOAAQAPAAAKAIQAEAEAFAJQAHgLAKgFQAKgFAMAAQAbAAAJATQAFAKAAASIAABWg");
	this.shape_3.setTransform(32.15,77.575);

	this.instance = new lib.DreamboxLogoWhite();
	this.instance.setTransform(51,38.05,0.11,0.11,0,0,0,165,236.8);

	this.instance_1 = new lib.BlueAppBackground("synched",0);
	this.instance_1.setTransform(51,51,0.51,0.51,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.DBLALockedIcon_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet8();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_8, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet7();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_7, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet6();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_6, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet5();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_5, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet4();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_4, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet3();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_3, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet2();
	this.instance.setTransform(3.15,-10.35,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_2, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALockedIcon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,1],-2,0.3,-2,118.8).s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_tint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,215,220,0.6)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_1.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// hash_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,59,62,0.149)").s().p("ALISNIB2h2IAAAOIhoBogAJbSNIDjjjIAAAOIjVDVgAHuSNIFQlQIAAAOIlCFCgAGBSNIG9m9IAAAOImvGvgAEUSNIIqoqIAAAOIocIcgACnSNIKXqXIAAAOIqJKJgAA6SNIMEsEIAAAOIr2L2gAgxSNINvtwIAAAOIthNigAieSNIPcvdIAAAOIvOPPgAkLSNIRJxKIAAAOIw7Q8gAl4SNIS2y2IAAAOIyoSogAnlSNIUj0jIAAAOI0VUVgApSSNIWQ2QIAAAOI2CWCgAq/SNIX939IAAAOI3vXvgAsnSHIZl5kIAAAOI5aZbIgLgFgAs9QxIZ757IAAAOI57Z7gAs9PEIZ757IAAAOI57Z7gAs9NYIZ757IAAAOI57Z7gAs9LrIZ757IAAAOI57Z7gAs9J+IZ757IAAAOI57Z7gAs9IRIZ656IABANI57Z7gAs9GkIYw4wIAOAAI4+Y+gAs9E3IXD3DIAOAAI3RXRgAs9DKIVW1WIAOAAI1kVkgAs9BdITpzpIAOAAIz3T3gAs9gPIR8x9IAOAAIyKSLgAs9h7IQQwRIAOAAIweQfgAs9joIOjukIAOAAIuxOygAs9lVIM3s3IANAAItENFgAs9nCILKrKIAOAAIrYLYgAs9ovIJdpdIAOAAIprJrgAs9qcIHwnwIAOAAIn+H+gAs9sJIGDmDIAOAAImRGRgAs9t2IEWkWIAOAAIkkEkgAs9vjICpipIAOAAIi3C3gAs9xPIA9g9IANAAIhKBKg");
	this.shape_2.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// güb_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsLR+QgjAAAAgjMAAAgi1QAAgjAjAAIYXAAQAjAAAAAjMAAAAi1QAAAjgjAAg");
	mask.setTransform(1.4,-7.65);

	// güb_sets
	this.instance = new lib.GübSet1();
	this.instance.setTransform(3.15,4.65,1,1,0,0,0,1.5,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,215,220,0.247)").s().p("AsLSNQgyAAAAgyMAAAgi1QAAgyAyAAIYXAAQAyAAAAAyMAAAAi1QAAAygyAAg");
	this.shape_3.setTransform(1.4,-7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// frame_guide
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALockedIcon_1, new cjs.Rectangle(-90.4,-133.1,185.7,253), null);


(lib.DBLALessonButtonCore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titleSmall
	this.unitTitleSmall = new cjs.Text("Sumar-Restar: Máquina de Operaciones Matemáticas", "14px 'Montreal Serial Medium'");
	this.unitTitleSmall.name = "unitTitleSmall";
	this.unitTitleSmall.textAlign = "center";
	this.unitTitleSmall.lineHeight = 19;
	this.unitTitleSmall.lineWidth = 146;
	this.unitTitleSmall.parent = this;
	this.unitTitleSmall.setTransform(0,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.unitTitleSmall).wait(1));

	// title
	this.unitTitle = new cjs.Text("Sumar-Restar: Máquina de Operaciones", "16px 'Montreal Serial Medium'");
	this.unitTitle.name = "unitTitle";
	this.unitTitle.textAlign = "center";
	this.unitTitle.lineHeight = 21;
	this.unitTitle.lineWidth = 146;
	this.unitTitle.parent = this;
	this.unitTitle.setTransform(0,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.unitTitle).wait(1));

	// banner
	this.banner = new lib.UnitLabel();
	this.banner.name = "banner";
	this.banner.setTransform(14.1,-94,1,1,0,0,0,87.5,23);

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(1));

	// frame
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(15.7,-19.45,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// background
	this.background = new lib.UnitBase();
	this.background.name = "background";
	this.background.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALessonButtonCore, new cjs.Rectangle(-90.7,-133.6,185.7,253), null);


(lib.DBLAInProgressIcon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconInProgress();
	this.instance.setTransform(35.6,19.6,0.8,0.8,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjCjCIGFAAQAACihzBxQhwByiiAAg");
	this.shape.setTransform(27.5092,27.5058,1.411,1.4109,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAInProgressIcon, new cjs.Rectangle(0,0,55,55), null);


(lib.DBLADoor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AroQxMAAAghhIXRAAMAAAAhhg");
	mask.setTransform(84.725,118.525);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6F7FF").s().p("AgnAYQgQgKAAgOQAAgNAQgKQARgKAWAAQAXAAARAKQAQAKAAANQAAAOgQAKQgRAKgXAAQgWAAgRgKg");
	this.shape.setTransform(64.0749,109.5353,1.1116,0.9044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6F7FF").s().p("AgRAZQgGgKgBgPQABgOAGgKQAIgLAJAAQAKAAAHALQAIAKAAAOQAAAPgIAKQgHALgKAAQgJAAgIgLg");
	this.shape_1.setTransform(100.6865,117.4745,1.13,0.92,0,-17.6301,-13.7127);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6F7FF").s().p("AgbAbIAAg3IA0AHIADAyg");
	this.shape_2.setTransform(55.0556,139.6362,1,1,-37.6461);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#06AAE7").s().p("AgaAbQgLgMABgPQgBgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLAKgPABQgOgBgMgKg");
	this.shape_3.setTransform(63.55,112.1,1.5832,2.774,0,-89.3378,-90.9515,0,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06AAE7").s().p("AgaAbQgLgMABgPQgBgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLAKgPABQgOgBgMgKg");
	this.shape_4.setTransform(99.7,118.2,1.7774,1.8908,0,-2.6707,3.0467,0,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#06AAE7").s().p("AgaAbQgLgMABgPQgBgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLAKgPABQgOgBgMgKg");
	this.shape_5.setTransform(82.4,124.25,1.0242,1.1259,0,-2.6707,3.0464,0.1,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#06AAE7").s().p("AgaAbQgLgMABgPQgBgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLAKgPABQgOgBgMgKg");
	this.shape_6.setTransform(72.25,128.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#06AAE7").s().p("AgGAxIg+AoIgzhQIA9gbIglg5IBAghIArA5IBDgdIApAxIg+AnIApAzIg/Ayg");
	this.shape_7.setTransform(55.2,140.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A8E6FB").s().p("AkWE1QhjhPgphWQguhfAJh5QAJiKBThBQgDg9AggRQAkgTAZgDQAvgHArAgQB3gZBPAOQAvAIBfApQAxAVA+A6QA8A3AxBEQB1Cgg0A3QgpAshVgmIhQgmQgzgXgngIQhVgRgzArQgmAiAAArQAAALAEAmQAEApgEAdQgMBahWAVQgIACgJAAQg0AAhXhEg");
	this.shape_8.setTransform(79.6384,136.8676);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 2
	this.instance = new lib.MysteryDoorDepthShadows();
	this.instance.setTransform(84.7,118.45,1,1,0,0,0,74.5,107.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12B8EC").s().p("AE0QxIoGxaID7RaIlGAAIAowAIk+QAIi1AAIAAm+IH1p7IgCA5IAchZIgBABIoOGHIAAjpIHBiyInBhBIAAjAIIMDhIABABIAAAAIAbALIgGgFIlwvcIDvAAICiQDIAAAAIABADIAAgDIABgBIABAAIgBAAIOMsOIAAGEIuKGKIOKGXIAAEPItxqDIMuQ8gAihguIOKi5IAAErgAg3wwIDFAAIkxQBIgBAAgAGEwwIEKAAIsxQAgArooCIAAkWIH5Kkg");
	this.shape_9.setTransform(84.725,118.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#46C3F3").s().p("AKmQxIsuw8INxKDIAAG5gAApQxIj7xaIIGRagAozQxIE+wAIgoQAgAroFgIIOmHIABgBIgcBZIACg5In1J7gAihguIOKByIAAElgAroh8IHBBBInBCygAikgvIAAABIgBABIiiwDIEQAAIhtQBIABAAIExwBID2AAIonQAIMxwAIBbAAIAAD0IuMMOIAAAAIgBABgAihguIOKmKIAADRIuKC5gAjbhaIAAAAIgBgBIoMjhIAAjGIH5GOIn5qkIAAkYICyAAIFwPcIAGAFg");
	this.shape_10.setTransform(84.725,118.525);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 8
	this.background = new lib.UnitBaseNanoDoor();
	this.background.name = "background";
	this.background.setTransform(83.8,125);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLADoor, new cjs.Rectangle(-41.1,-4.6,219.6,239.79999999999998), null);


(lib.DBLACoin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.instance = new lib.CoinIcon();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLACoin, new cjs.Rectangle(-14.4,-14.4,28.8,28.8), null);


(lib.DBLACheckComplete = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {sparkle:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(20));

	// SparkleGreen
	this.instance = new lib.SparkleGreen("synched",0);
	this.instance.setTransform(16.25,13.9,0.5304,0.5304,0,0,0,44.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45,regY:45,scaleX:0.567,scaleY:0.567,x:20.9,y:10.1,startPosition:1},0).wait(1).to({scaleX:0.6036,scaleY:0.6036,x:25.3,y:5.2,startPosition:2},0).wait(1).to({scaleX:0.6402,scaleY:0.6402,x:29.65,y:0.3,startPosition:3},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:34.05,y:-4.6,startPosition:4},0).wait(1).to({scaleX:0.7134,scaleY:0.7134,x:38.45,y:-9.5,startPosition:5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:42.85,y:-14.4,startPosition:6},0).wait(1).to({x:43.55,y:-15.25,startPosition:7},0).wait(1).to({x:44.25,y:-16.1,startPosition:8},0).wait(1).to({x:45,y:-16.95,startPosition:9},0).wait(1).to({x:45.7,y:-17.8,startPosition:10},0).wait(1).to({x:46.4,y:-18.65,startPosition:11},0).wait(1).to({x:47.15,y:-19.5,startPosition:12},0).wait(1).to({x:47.85,y:-20.3,startPosition:13},0).wait(1).to({x:48.55,y:-21.15,startPosition:14},0).wait(1).to({x:49.3,y:-22,startPosition:15},0).wait(1).to({x:50,y:-22.85,startPosition:16},0).wait(1).to({x:50.75,y:-23.7,startPosition:17},0).wait(1).to({x:51.45,y:-24.55,startPosition:18},0).wait(1).to({x:52.15,y:-25.4,startPosition:19},0).wait(1).to({x:52.9,y:-26.2,startPosition:20},0).wait(1).to({x:53.6,y:-27.05,startPosition:21},0).wait(1).to({x:54.3,y:-27.9,startPosition:22},0).wait(1).to({x:55.05,y:-28.75,startPosition:23},0).wait(1).to({x:55.75,y:-29.6,startPosition:24},0).wait(1).to({x:56.45,y:-30.45,startPosition:25},0).wait(1).to({x:57.2,y:-31.3,startPosition:26},0).wait(1).to({x:57.9,y:-32.15,startPosition:27},0).wait(1).to({x:58.65,y:-32.95,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_1 = new lib.SparkleGreen("synched",0);
	this.instance_1.setTransform(17.25,15.05,0.1768,0.1768,0,0,0,45.2,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:45,rotation:-2.0829,x:21.35,y:12.9,startPosition:1},0).wait(1).to({rotation:-4.1658,x:25.55,y:10.8,startPosition:2},0).wait(1).to({rotation:-6.2487,x:29.7,y:8.7,startPosition:3},0).wait(1).to({rotation:-8.3317,x:33.85,y:6.65,startPosition:4},0).wait(1).to({rotation:-10.4146,x:38.05,y:4.5,startPosition:5},0).wait(1).to({rotation:-12.4975,x:42.2,y:2.45,startPosition:6},0).wait(1).to({x:42.9,y:2.1,startPosition:7},0).wait(1).to({x:43.6,y:1.75,startPosition:8},0).wait(1).to({x:44.3,y:1.4,startPosition:9},0).wait(1).to({x:45,y:1.05,startPosition:10},0).wait(1).to({x:45.7,y:0.7,startPosition:11},0).wait(1).to({x:46.4,y:0.35,startPosition:12},0).wait(1).to({x:47.1,y:0,startPosition:13},0).wait(1).to({x:47.8,y:-0.35,startPosition:14},0).wait(1).to({x:48.5,y:-0.75,startPosition:15},0).wait(1).to({x:49.2,y:-1.1,startPosition:16},0).wait(1).to({x:49.9,y:-1.45,startPosition:17},0).wait(1).to({x:50.6,y:-1.8,startPosition:18},0).wait(1).to({x:51.3,y:-2.15,startPosition:19},0).wait(1).to({x:52,y:-2.5,startPosition:20},0).wait(1).to({x:52.7,y:-2.85,startPosition:21},0).wait(1).to({x:53.4,y:-3.2,startPosition:22},0).wait(1).to({x:54.1,y:-3.55,startPosition:23},0).wait(1).to({x:54.8,y:-3.9,startPosition:24},0).wait(1).to({x:55.5,y:-4.25,startPosition:25},0).wait(1).to({x:56.2,y:-4.6,startPosition:26},0).wait(1).to({x:56.9,y:-4.95,startPosition:27},0).wait(1).to({x:57.6,y:-5.3,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_2 = new lib.SparkleGreen("synched",0);
	this.instance_2.setTransform(14.55,13.15,0.3536,0.3536,0,0,0,42.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:45,regY:45,x:14.2,y:7.25,startPosition:1},0).wait(1).to({x:12.85,y:1.2,startPosition:2},0).wait(1).to({x:11.45,y:-4.85,startPosition:3},0).wait(1).to({x:10.1,y:-10.9,startPosition:4},0).wait(1).to({x:8.75,y:-16.95,startPosition:5},0).wait(1).to({x:7.35,y:-23.05,startPosition:6},0).wait(1).to({x:7.15,y:-24.05,startPosition:7},0).wait(1).to({x:6.9,y:-25.05,startPosition:8},0).wait(1).to({x:6.7,y:-26.05,startPosition:9},0).wait(1).to({x:6.45,y:-27.05,startPosition:10},0).wait(1).to({x:6.25,y:-28.05,startPosition:11},0).wait(1).to({x:6,y:-29.1,startPosition:12},0).wait(1).to({x:5.8,y:-30.1,startPosition:13},0).wait(1).to({x:5.55,y:-31.1,startPosition:14},0).wait(1).to({x:5.35,y:-32.1,startPosition:15},0).wait(1).to({x:5.1,y:-33.1,startPosition:16},0).wait(1).to({x:4.9,y:-34.15,startPosition:17},0).wait(1).to({x:4.65,y:-35.15,startPosition:18},0).wait(1).to({x:4.45,y:-36.15,startPosition:19},0).wait(1).to({x:4.2,y:-37.15,startPosition:20},0).wait(1).to({x:4,y:-38.15,startPosition:21},0).wait(1).to({x:3.75,y:-39.15,startPosition:22},0).wait(1).to({x:3.55,y:-40.2,startPosition:23},0).wait(1).to({x:3.3,y:-41.2,startPosition:24},0).wait(1).to({x:3.1,y:-42.2,startPosition:25},0).wait(1).to({x:2.85,y:-43.2,startPosition:26},0).wait(1).to({x:2.65,y:-44.2,startPosition:27},0).wait(1).to({x:2.4,y:-45.25,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_3 = new lib.SparkleGreen("synched",0);
	this.instance_3.setTransform(14.75,13.15,0.3536,0.3536,0,0,0,42.3,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:45,regY:45,x:11.5,y:11.25,startPosition:1},0).wait(1).to({x:7.25,y:9.15,startPosition:2},0).wait(1).to({x:3.05,y:7.1,startPosition:3},0).wait(1).to({x:-1.2,y:5,startPosition:4},0).wait(1).to({x:-5.4,y:2.95,startPosition:5},0).wait(1).to({x:-9.65,y:0.85,startPosition:6},0).wait(1).to({x:-10.35,y:0.5,startPosition:7},0).wait(1).to({x:-11.05,y:0.15,startPosition:8},0).wait(1).to({x:-11.75,y:-0.2,startPosition:9},0).wait(1).to({x:-12.45,y:-0.55,startPosition:10},0).wait(1).to({x:-13.15,y:-0.9,startPosition:11},0).wait(1).to({x:-13.85,y:-1.25,startPosition:12},0).wait(1).to({x:-14.55,y:-1.6,startPosition:13},0).wait(1).to({x:-15.25,y:-1.95,startPosition:14},0).wait(1).to({x:-15.95,y:-2.3,startPosition:15},0).wait(1).to({x:-16.65,y:-2.65,startPosition:16},0).wait(1).to({x:-17.4,y:-3,startPosition:17},0).wait(1).to({x:-18.1,y:-3.35,startPosition:18},0).wait(1).to({x:-18.8,y:-3.7,startPosition:19},0).wait(1).to({x:-19.5,y:-4.05,startPosition:20},0).wait(1).to({x:-20.2,y:-4.4,startPosition:21},0).wait(1).to({x:-20.9,y:-4.75,startPosition:22},0).wait(1).to({x:-21.6,y:-5.1,startPosition:23},0).wait(1).to({x:-22.3,y:-5.45,startPosition:24},0).wait(1).to({x:-23,y:-5.8,startPosition:25},0).wait(1).to({x:-23.7,y:-6.15,startPosition:26},0).wait(1).to({x:-24.4,y:-6.5,startPosition:27},0).wait(1).to({x:-25.15,y:-6.85,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_4 = new lib.SparkleGreen("synched",0);
	this.instance_4.setTransform(12.1,15.4,0.3536,0.3536,0,0,0,42.3,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:45,regY:45,x:8.3,y:18.5,startPosition:1},0).wait(1).to({x:3.5,y:21.1,startPosition:2},0).wait(1).to({x:-1.3,y:23.7,startPosition:3},0).wait(1).to({x:-6.1,y:26.3,startPosition:4},0).wait(1).to({x:-10.9,y:28.9,startPosition:5},0).wait(1).to({x:-15.7,y:31.45,startPosition:6},0).wait(1).to({x:-16.45,y:31.9,startPosition:7},0).wait(1).to({x:-17.25,y:32.35,startPosition:8},0).wait(1).to({x:-18.05,y:32.8,startPosition:9},0).wait(1).to({x:-18.85,y:33.2,startPosition:10},0).wait(1).to({x:-19.65,y:33.65,startPosition:11},0).wait(1).to({x:-20.45,y:34.1,startPosition:12},0).wait(1).to({x:-21.25,y:34.5,startPosition:13},0).wait(1).to({x:-22.05,y:34.95,startPosition:14},0).wait(1).to({x:-22.85,y:35.4,startPosition:15},0).wait(1).to({x:-23.65,y:35.8,startPosition:16},0).wait(1).to({x:-24.45,y:36.25,startPosition:17},0).wait(1).to({x:-25.2,y:36.7,startPosition:18},0).wait(1).to({x:-26,y:37.1,startPosition:19},0).wait(1).to({x:-26.8,y:37.55,startPosition:20},0).wait(1).to({x:-27.6,y:38,startPosition:21},0).wait(1).to({x:-28.4,y:38.4,startPosition:22},0).wait(1).to({x:-29.2,y:38.85,startPosition:23},0).wait(1).to({x:-30,y:39.3,startPosition:24},0).wait(1).to({x:-30.8,y:39.7,startPosition:25},0).wait(1).to({x:-31.6,y:40.15,startPosition:26},0).wait(1).to({x:-32.4,y:40.6,startPosition:27},0).wait(1).to({x:-33.2,y:41,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_5 = new lib.SparkleGreen("synched",0);
	this.instance_5.setTransform(13.95,18.4,0.3536,0.3536,0,0,0,42.3,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:45,regY:45,x:17.9,y:22.4,startPosition:1},0).wait(1).to({x:20.95,y:26.4,startPosition:2},0).wait(1).to({x:24,y:30.4,startPosition:3},0).wait(1).to({x:27.05,y:34.45,startPosition:4},0).wait(1).to({x:30.1,y:38.45,startPosition:5},0).wait(1).to({x:33.15,y:42.45,startPosition:6},0).wait(1).to({x:33.7,y:43.15,startPosition:7},0).wait(1).to({x:34.2,y:43.8,startPosition:8},0).wait(1).to({x:34.7,y:44.5,startPosition:9},0).wait(1).to({x:35.2,y:45.15,startPosition:10},0).wait(1).to({x:35.7,y:45.85,startPosition:11},0).wait(1).to({x:36.2,y:46.5,startPosition:12},0).wait(1).to({x:36.7,y:47.15,startPosition:13},0).wait(1).to({x:37.25,y:47.85,startPosition:14},0).wait(1).to({x:37.75,y:48.5,startPosition:15},0).wait(1).to({x:38.25,y:49.2,startPosition:16},0).wait(1).to({x:38.75,y:49.85,startPosition:17},0).wait(1).to({x:39.25,y:50.5,startPosition:18},0).wait(1).to({x:39.75,y:51.2,startPosition:19},0).wait(1).to({x:40.25,y:51.85,startPosition:20},0).wait(1).to({x:40.8,y:52.55,startPosition:21},0).wait(1).to({x:41.3,y:53.2,startPosition:22},0).wait(1).to({x:41.8,y:53.85,startPosition:23},0).wait(1).to({x:42.3,y:54.55,startPosition:24},0).wait(1).to({x:42.8,y:55.2,startPosition:25},0).wait(1).to({x:43.3,y:55.9,startPosition:26},0).wait(1).to({x:43.8,y:56.55,startPosition:27},0).wait(1).to({x:44.3,y:57.2,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_6 = new lib.SparkleGreen("synched",0);
	this.instance_6.setTransform(15.1,18.7,0.7072,0.7072,0,0,0,43.7,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:45,regY:45,x:15.95,y:25,startPosition:1},0).wait(1).to({x:15.85,y:30.15,startPosition:2},0).wait(1).to({x:15.8,y:35.25,startPosition:3},0).wait(1).to({x:15.7,y:40.4,startPosition:4},0).wait(1).to({x:15.65,y:45.55,startPosition:5},0).wait(1).to({x:15.55,y:50.7,startPosition:6},0).wait(1).to({y:51.6,startPosition:7},0).wait(1).to({y:52.45,startPosition:8},0).wait(1).to({y:53.3,startPosition:9},0).wait(1).to({x:15.5,y:54.15,startPosition:10},0).wait(1).to({y:55,startPosition:11},0).wait(1).to({y:55.9,startPosition:12},0).wait(1).to({x:15.45,y:56.75,startPosition:13},0).wait(1).to({y:57.6,startPosition:14},0).wait(1).to({y:58.45,startPosition:15},0).wait(1).to({x:15.4,y:59.3,startPosition:16},0).wait(1).to({y:60.15,startPosition:17},0).wait(1).to({y:61.05,startPosition:18},0).wait(1).to({x:15.35,y:61.9,startPosition:19},0).wait(1).to({y:62.75,startPosition:20},0).wait(1).to({y:63.6,startPosition:21},0).wait(1).to({x:15.3,y:64.45,startPosition:22},0).wait(1).to({y:65.35,startPosition:23},0).wait(1).to({y:66.2,startPosition:24},0).wait(1).to({x:15.25,y:67.05,startPosition:25},0).wait(1).to({y:67.9,startPosition:26},0).wait(1).to({y:68.75,startPosition:27},0).wait(1).to({x:15.2,y:69.6,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_7 = new lib.SparkleGreen("synched",0);
	this.instance_7.setTransform(17,13.95,0.7072,0.7072,0,0,0,44.9,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:45,regY:45,x:11.2,y:16.15,startPosition:1},0).wait(1).to({x:5.3,y:17.2,startPosition:2},0).wait(1).to({x:-0.6,y:18.25,startPosition:3},0).wait(1).to({x:-6.5,y:19.35,startPosition:4},0).wait(1).to({x:-12.4,y:20.4,startPosition:5},0).wait(1).to({x:-18.3,y:21.45,startPosition:6},0).wait(1).to({x:-19.25,y:21.65,startPosition:7},0).wait(1).to({x:-20.25,y:21.8,startPosition:8},0).wait(1).to({x:-21.2,y:22,startPosition:9},0).wait(1).to({x:-22.2,y:22.15,startPosition:10},0).wait(1).to({x:-23.15,y:22.35,startPosition:11},0).wait(1).to({x:-24.15,y:22.5,startPosition:12},0).wait(1).to({x:-25.1,y:22.7,startPosition:13},0).wait(1).to({x:-26.1,y:22.85,startPosition:14},0).wait(1).to({x:-27.05,y:23.05,startPosition:15},0).wait(1).to({x:-28.05,y:23.2,startPosition:16},0).wait(1).to({x:-29.05,y:23.35,startPosition:17},0).wait(1).to({x:-30,y:23.55,startPosition:18},0).wait(1).to({x:-31,y:23.7,startPosition:19},0).wait(1).to({x:-31.95,y:23.9,startPosition:20},0).wait(1).to({x:-32.95,y:24.05,startPosition:21},0).wait(1).to({x:-33.9,y:24.25,startPosition:22},0).wait(1).to({x:-34.9,y:24.4,startPosition:23},0).wait(1).to({x:-35.85,y:24.6,startPosition:24},0).wait(1).to({x:-36.85,y:24.75,startPosition:25},0).wait(1).to({x:-37.8,y:24.95,startPosition:26},0).wait(1).to({x:-38.8,y:25.1,startPosition:27},0).wait(1).to({x:-39.8,y:25.25,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_8 = new lib.SparkleGreen("synched",0);
	this.instance_8.setTransform(17.85,14.2,0.7072,0.7072,0,0,0,44.9,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:45,regY:45,x:13.05,y:10,startPosition:1},0).wait(1).to({x:8.15,y:4.7,startPosition:2},0).wait(1).to({x:3.25,y:-0.6,startPosition:3},0).wait(1).to({x:-1.6,y:-5.9,startPosition:4},0).wait(1).to({x:-6.5,y:-11.2,startPosition:5},0).wait(1).to({x:-11.4,y:-16.5,startPosition:6},0).wait(1).to({x:-12.2,y:-17.35,startPosition:7},0).wait(1).to({x:-13,y:-18.25,startPosition:8},0).wait(1).to({x:-13.8,y:-19.1,startPosition:9},0).wait(1).to({x:-14.6,y:-20,startPosition:10},0).wait(1).to({x:-15.4,y:-20.9,startPosition:11},0).wait(1).to({x:-16.25,y:-21.75,startPosition:12},0).wait(1).to({x:-17.05,y:-22.65,startPosition:13},0).wait(1).to({x:-17.85,y:-23.55,startPosition:14},0).wait(1).to({x:-18.65,y:-24.4,startPosition:15},0).wait(1).to({x:-19.45,y:-25.3,startPosition:16},0).wait(1).to({x:-20.3,y:-26.2,startPosition:17},0).wait(1).to({x:-21.1,y:-27.05,startPosition:18},0).wait(1).to({x:-21.9,y:-27.95,startPosition:19},0).wait(1).to({x:-22.7,y:-28.8,startPosition:20},0).wait(1).to({x:-23.5,y:-29.7,startPosition:21},0).wait(1).to({x:-24.3,y:-30.6,startPosition:22},0).wait(1).to({x:-25.15,y:-31.45,startPosition:23},0).wait(1).to({x:-25.95,y:-32.35,startPosition:24},0).wait(1).to({x:-26.75,y:-33.25,startPosition:25},0).wait(1).to({x:-27.55,y:-34.1,startPosition:26},0).wait(1).to({x:-28.35,y:-35,startPosition:27},0).wait(1).to({x:-29.2,y:-35.9,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_9 = new lib.SparkleGreen("synched",0);
	this.instance_9.setTransform(16.25,14.65,0.7072,0.7072,0,0,0,45.2,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:45,regY:45,x:19.7,y:7.7,startPosition:1},0).wait(1).to({x:23.3,y:0.15,startPosition:2},0).wait(1).to({x:26.85,y:-7.45,startPosition:3},0).wait(1).to({x:30.45,y:-15,startPosition:4},0).wait(1).to({x:34,y:-22.55,startPosition:5},0).wait(1).to({x:37.55,y:-30.15,startPosition:6},0).wait(1).to({x:38.15,y:-31.35,startPosition:7},0).wait(1).to({x:38.75,y:-32.6,startPosition:8},0).wait(1).to({x:39.35,y:-33.85,startPosition:9},0).wait(1).to({x:39.9,y:-35.1,startPosition:10},0).wait(1).to({x:40.5,y:-36.35,startPosition:11},0).wait(1).to({x:41.1,y:-37.6,startPosition:12},0).wait(1).to({x:41.7,y:-38.85,startPosition:13},0).wait(1).to({x:42.25,y:-40.1,startPosition:14},0).wait(1).to({x:42.85,y:-41.35,startPosition:15},0).wait(1).to({x:43.45,y:-42.6,startPosition:16},0).wait(1).to({x:44,y:-43.85,startPosition:17},0).wait(1).to({x:44.6,y:-45.05,startPosition:18},0).wait(1).to({x:45.2,y:-46.3,startPosition:19},0).wait(1).to({x:45.8,y:-47.55,startPosition:20},0).wait(1).to({x:46.35,y:-48.8,startPosition:21},0).wait(1).to({x:46.95,y:-50.05,startPosition:22},0).wait(1).to({x:47.55,y:-51.3,startPosition:23},0).wait(1).to({x:48.15,y:-52.55,startPosition:24},0).wait(1).to({x:48.7,y:-53.8,startPosition:25},0).wait(1).to({x:49.3,y:-55.05,startPosition:26},0).wait(1).to({x:49.9,y:-56.3,startPosition:27},0).wait(1).to({x:50.45,y:-57.55,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_10 = new lib.SparkleGreen("synched",0);
	this.instance_10.setTransform(17,13.7,0.7072,0.7072,0,0,0,44.9,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:45,regY:45,x:22.6,y:17.15,startPosition:1},0).wait(1).to({x:28.1,y:19.5,startPosition:2},0).wait(1).to({x:33.6,y:21.85,startPosition:3},0).wait(1).to({x:39.1,y:24.2,startPosition:4},0).wait(1).to({x:44.65,y:26.55,startPosition:5},0).wait(1).to({x:50.15,y:28.85,startPosition:6},0).wait(1).to({x:51.1,y:29.25,startPosition:7},0).wait(1).to({x:52,y:29.65,startPosition:8},0).wait(1).to({x:52.95,y:30,startPosition:9},0).wait(1).to({x:53.85,y:30.4,startPosition:10},0).wait(1).to({x:54.8,y:30.75,startPosition:11},0).wait(1).to({x:55.7,y:31.15,startPosition:12},0).wait(1).to({x:56.6,y:31.5,startPosition:13},0).wait(1).to({x:57.55,y:31.85,startPosition:14},0).wait(1).to({x:58.45,y:32.2,startPosition:15},0).wait(1).to({x:59.4,y:32.6,startPosition:16},0).wait(1).to({x:60.3,y:32.95,startPosition:17},0).wait(1).to({x:61.2,y:33.35,startPosition:18},0).wait(1).to({x:62.15,y:33.75,startPosition:19},0).wait(1).to({x:63.05,y:34.1,startPosition:20},0).wait(1).to({x:64,y:34.5,startPosition:21},0).wait(1).to({x:64.9,y:34.85,startPosition:22},0).wait(1).to({x:65.8,y:35.25,startPosition:23},0).wait(1).to({x:66.75,y:35.6,startPosition:24},0).wait(1).to({x:67.65,y:36,startPosition:25},0).wait(1).to({x:68.6,y:36.35,startPosition:26},0).wait(1).to({x:69.5,y:36.75,startPosition:27},0).wait(1).to({x:70.4,y:37.1,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_11 = new lib.SparkleGreen("synched",0);
	this.instance_11.setTransform(16.75,14.4,0.3182,0.3182,0,0,0,45.2,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:45,x:21,y:10.05,startPosition:1},0).wait(1).to({x:25.35,y:5.7,startPosition:2},0).wait(1).to({x:29.75,y:1.3,startPosition:3},0).wait(1).to({x:34.1,y:-3.05,startPosition:4},0).wait(1).to({x:38.5,y:-7.4,startPosition:5},0).wait(1).to({x:42.85,y:-11.8,startPosition:6},0).wait(1).to({x:43.6,y:-12.5,startPosition:7},0).wait(1).to({x:44.35,y:-13.25,startPosition:8},0).wait(1).to({x:45.05,y:-13.95,startPosition:9},0).wait(1).to({x:45.8,y:-14.7,startPosition:10},0).wait(1).to({x:46.5,y:-15.4,startPosition:11},0).wait(1).to({x:47.25,y:-16.15,startPosition:12},0).wait(1).to({x:48,y:-16.85,startPosition:13},0).wait(1).to({x:48.7,y:-17.6,startPosition:14},0).wait(1).to({x:49.45,y:-18.3,startPosition:15},0).wait(1).to({x:50.15,y:-19.05,startPosition:16},0).wait(1).to({x:50.9,y:-19.8,startPosition:17},0).wait(1).to({x:51.65,y:-20.5,startPosition:18},0).wait(1).to({x:52.35,y:-21.25,startPosition:19},0).wait(1).to({x:53.1,y:-21.95,startPosition:20},0).wait(1).to({x:53.8,y:-22.7,startPosition:21},0).wait(1).to({x:54.55,y:-23.4,startPosition:22},0).wait(1).to({x:55.3,y:-24.15,startPosition:23},0).wait(1).to({x:56,y:-24.85,startPosition:24},0).wait(1).to({x:56.75,y:-25.6,startPosition:25},0).wait(1).to({x:57.45,y:-26.3,startPosition:26},0).wait(1).to({x:58.2,y:-27.05,startPosition:27},0).wait(1).to({x:58.9,y:-27.8,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_12 = new lib.SparkleGreen("synched",0);
	this.instance_12.setTransform(17.15,14.45,0.3182,0.3182,0,0,0,45.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:45,regY:45,x:17.3,y:5.7,startPosition:1},0).wait(1).to({x:17.6,y:-3.05,startPosition:2},0).wait(1).to({x:17.9,y:-11.8,startPosition:3},0).wait(1).to({x:18.2,y:-20.55,startPosition:4},0).wait(1).to({x:18.5,y:-29.3,startPosition:5},0).wait(1).to({x:18.8,y:-38.05,startPosition:6},0).wait(1).to({x:18.85,y:-39.5,startPosition:7},0).wait(1).to({x:18.9,y:-40.95,startPosition:8},0).wait(1).to({x:18.95,y:-42.4,startPosition:9},0).wait(1).to({x:19,y:-43.85,startPosition:10},0).wait(1).to({x:19.05,y:-45.3,startPosition:11},0).wait(1).to({x:19.1,y:-46.75,startPosition:12},0).wait(1).to({x:19.15,y:-48.2,startPosition:13},0).wait(1).to({x:19.2,y:-49.7,startPosition:14},0).wait(1).to({x:19.25,y:-51.15,startPosition:15},0).wait(1).to({x:19.3,y:-52.6,startPosition:16},0).wait(1).to({x:19.35,y:-54.05,startPosition:17},0).wait(1).to({x:19.4,y:-55.5,startPosition:18},0).wait(1).to({x:19.45,y:-56.95,startPosition:19},0).wait(1).to({x:19.5,y:-58.4,startPosition:20},0).wait(1).to({x:19.55,y:-59.9,startPosition:21},0).wait(1).to({x:19.6,y:-61.35,startPosition:22},0).wait(1).to({x:19.65,y:-62.8,startPosition:23},0).wait(1).to({x:19.7,y:-64.25,startPosition:24},0).wait(1).to({x:19.75,y:-65.7,startPosition:25},0).wait(1).to({x:19.8,y:-67.15,startPosition:26},0).wait(1).to({x:19.85,y:-68.6,startPosition:27},0).wait(1).to({x:19.9,y:-70.1,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_13 = new lib.SparkleGreen("synched",0);
	this.instance_13.setTransform(17.1,12.2,0.3182,0.3182,0,0,0,45.4,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:45,regY:45,x:24.75,y:12.05,startPosition:1},0).wait(1).to({x:32.6,y:11.55,startPosition:2},0).wait(1).to({x:40.4,y:11.1,startPosition:3},0).wait(1).to({x:48.25,y:10.6,startPosition:4},0).wait(1).to({x:56.1,y:10.15,startPosition:5},0).wait(1).to({x:63.9,y:9.65,startPosition:6},0).wait(1).to({x:65.25,y:9.6,startPosition:7},0).wait(1).to({x:66.55,y:9.5,startPosition:8},0).wait(1).to({x:67.85,y:9.45,startPosition:9},0).wait(1).to({x:69.15,y:9.35,startPosition:10},0).wait(1).to({x:70.5,y:9.25,startPosition:11},0).wait(1).to({x:71.8,y:9.2,startPosition:12},0).wait(1).to({x:73.1,y:9.1,startPosition:13},0).wait(1).to({x:74.4,y:9,startPosition:14},0).wait(1).to({x:75.75,y:8.95,startPosition:15},0).wait(1).to({x:77.05,y:8.85,startPosition:16},0).wait(1).to({x:78.35,y:8.75,startPosition:17},0).wait(1).to({x:79.65,y:8.7,startPosition:18},0).wait(1).to({x:80.95,y:8.6,startPosition:19},0).wait(1).to({x:82.3,y:8.55,startPosition:20},0).wait(1).to({x:83.6,y:8.45,startPosition:21},0).wait(1).to({x:84.9,y:8.35,startPosition:22},0).wait(1).to({x:86.2,y:8.3,startPosition:23},0).wait(1).to({x:87.55,y:8.2,startPosition:24},0).wait(1).to({x:88.85,y:8.1,startPosition:25},0).wait(1).to({x:90.15,y:8.05,startPosition:26},0).wait(1).to({x:91.45,y:7.95,startPosition:27},0).wait(1).to({x:92.75,y:7.85,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_14 = new lib.SparkleGreen("synched",0);
	this.instance_14.setTransform(17.85,15.35,0.3182,0.3182,0,0,0,45.4,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:45,x:13.1,y:11.25,startPosition:1},0).wait(1).to({x:8.45,y:7.15,startPosition:2},0).wait(1).to({x:3.85,y:3.05,startPosition:3},0).wait(1).to({x:-0.8,y:-1.05,startPosition:4},0).wait(1).to({x:-5.4,y:-5.15,startPosition:5},0).wait(1).to({x:-10.05,y:-9.25,startPosition:6},0).wait(1).to({x:-10.8,y:-9.9,startPosition:7},0).wait(1).to({x:-11.55,y:-10.6,startPosition:8},0).wait(1).to({x:-12.35,y:-11.3,startPosition:9},0).wait(1).to({x:-13.1,y:-11.95,startPosition:10},0).wait(1).to({x:-13.9,y:-12.65,startPosition:11},0).wait(1).to({x:-14.65,y:-13.35,startPosition:12},0).wait(1).to({x:-15.4,y:-14.05,startPosition:13},0).wait(1).to({x:-16.2,y:-14.7,startPosition:14},0).wait(1).to({x:-16.95,y:-15.4,startPosition:15},0).wait(1).to({x:-17.75,y:-16.1,startPosition:16},0).wait(1).to({x:-18.5,y:-16.8,startPosition:17},0).wait(1).to({x:-19.25,y:-17.45,startPosition:18},0).wait(1).to({x:-20.05,y:-18.15,startPosition:19},0).wait(1).to({x:-20.8,y:-18.85,startPosition:20},0).wait(1).to({x:-21.6,y:-19.5,startPosition:21},0).wait(1).to({x:-22.35,y:-20.2,startPosition:22},0).wait(1).to({x:-23.1,y:-20.9,startPosition:23},0).wait(1).to({x:-23.9,y:-21.6,startPosition:24},0).wait(1).to({x:-24.65,y:-22.25,startPosition:25},0).wait(1).to({x:-25.45,y:-22.95,startPosition:26},0).wait(1).to({x:-26.2,y:-23.65,startPosition:27},0).wait(1).to({x:-27,y:-24.35,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_15 = new lib.SparkleGreen("synched",0);
	this.instance_15.setTransform(16.65,16.85,0.3182,0.3182,0,0,0,45.1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:45,x:13.55,y:22.15,startPosition:1},0).wait(1).to({x:10.45,y:27.5,startPosition:2},0).wait(1).to({x:7.35,y:32.85,startPosition:3},0).wait(1).to({x:4.3,y:38.2,startPosition:4},0).wait(1).to({x:1.2,y:43.55,startPosition:5},0).wait(1).to({x:-1.9,y:48.9,startPosition:6},0).wait(1).to({x:-2.4,y:49.8,startPosition:7},0).wait(1).to({x:-2.9,y:50.7,startPosition:8},0).wait(1).to({x:-3.45,y:51.6,startPosition:9},0).wait(1).to({x:-3.95,y:52.5,startPosition:10},0).wait(1).to({x:-4.45,y:53.4,startPosition:11},0).wait(1).to({x:-5,y:54.3,startPosition:12},0).wait(1).to({x:-5.5,y:55.2,startPosition:13},0).wait(1).to({x:-6,y:56.1,startPosition:14},0).wait(1).to({x:-6.55,y:57,startPosition:15},0).wait(1).to({x:-7.05,y:57.9,startPosition:16},0).wait(1).to({x:-7.6,y:58.75,startPosition:17},0).wait(1).to({x:-8.1,y:59.65,startPosition:18},0).wait(1).to({x:-8.6,y:60.55,startPosition:19},0).wait(1).to({x:-9.15,y:61.45,startPosition:20},0).wait(1).to({x:-9.65,y:62.35,startPosition:21},0).wait(1).to({x:-10.15,y:63.25,startPosition:22},0).wait(1).to({x:-10.7,y:64.15,startPosition:23},0).wait(1).to({x:-11.2,y:65.05,startPosition:24},0).wait(1).to({x:-11.7,y:65.95,startPosition:25},0).wait(1).to({x:-12.25,y:66.85,startPosition:26},0).wait(1).to({x:-12.75,y:67.75,startPosition:27},0).wait(1).to({x:-13.3,y:68.6,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_16 = new lib.SparkleGreen("synched",0);
	this.instance_16.setTransform(19.3,16.3,0.3182,0.3182,0,0,0,45.4,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:45,x:20.35,y:22.35,startPosition:1},0).wait(1).to({x:21.55,y:28.4,startPosition:2},0).wait(1).to({x:22.75,y:34.45,startPosition:3},0).wait(1).to({x:23.95,y:40.5,startPosition:4},0).wait(1).to({x:25.15,y:46.55,startPosition:5},0).wait(1).to({x:26.35,y:52.6,startPosition:6},0).wait(1).to({x:26.6,y:53.65,startPosition:7},0).wait(1).to({x:26.8,y:54.65,startPosition:8},0).wait(1).to({x:27,y:55.65,startPosition:9},0).wait(1).to({x:27.2,y:56.65,startPosition:10},0).wait(1).to({x:27.45,y:57.65,startPosition:11},0).wait(1).to({x:27.65,y:58.65,startPosition:12},0).wait(1).to({x:27.85,y:59.65,startPosition:13},0).wait(1).to({x:28.05,y:60.7,startPosition:14},0).wait(1).to({x:28.3,y:61.7,startPosition:15},0).wait(1).to({x:28.5,y:62.7,startPosition:16},0).wait(1).to({x:28.7,y:63.7,startPosition:17},0).wait(1).to({x:28.9,y:64.7,startPosition:18},0).wait(1).to({x:29.1,y:65.7,startPosition:19},0).wait(1).to({x:29.35,y:66.7,startPosition:20},0).wait(1).to({x:29.55,y:67.75,startPosition:21},0).wait(1).to({x:29.75,y:68.75,startPosition:22},0).wait(1).to({x:29.95,y:69.75,startPosition:23},0).wait(1).to({x:30.2,y:70.75,startPosition:24},0).wait(1).to({x:30.4,y:71.75,startPosition:25},0).wait(1).to({x:30.6,y:72.75,startPosition:26},0).wait(1).to({x:30.8,y:73.75,startPosition:27},0).wait(1).to({x:31,y:74.75,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_17 = new lib.SparkleGreen("synched",0);
	this.instance_17.setTransform(16.85,13,0.3182,0.3182,0,0,0,45.2,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:45,regY:45,x:20.9,y:18.55,startPosition:1},0).wait(1).to({x:25.05,y:23.1,startPosition:2},0).wait(1).to({x:29.25,y:27.65,startPosition:3},0).wait(1).to({x:33.4,y:32.2,startPosition:4},0).wait(1).to({x:37.6,y:36.75,startPosition:5},0).wait(1).to({x:41.75,y:41.3,startPosition:6},0).wait(1).to({x:42.45,y:42.1,startPosition:7},0).wait(1).to({x:43.15,y:42.85,startPosition:8},0).wait(1).to({x:43.85,y:43.6,startPosition:9},0).wait(1).to({x:44.55,y:44.35,startPosition:10},0).wait(1).to({x:45.25,y:45.15,startPosition:11},0).wait(1).to({x:45.95,y:45.9,startPosition:12},0).wait(1).to({x:46.65,y:46.65,startPosition:13},0).wait(1).to({x:47.3,y:47.4,startPosition:14},0).wait(1).to({x:48,y:48.2,startPosition:15},0).wait(1).to({x:48.7,y:48.95,startPosition:16},0).wait(1).to({x:49.4,y:49.7,startPosition:17},0).wait(1).to({x:50.1,y:50.45,startPosition:18},0).wait(1).to({x:50.8,y:51.2,startPosition:19},0).wait(1).to({x:51.5,y:52,startPosition:20},0).wait(1).to({x:52.15,y:52.75,startPosition:21},0).wait(1).to({x:52.85,y:53.5,startPosition:22},0).wait(1).to({x:53.55,y:54.25,startPosition:23},0).wait(1).to({x:54.25,y:55.05,startPosition:24},0).wait(1).to({x:54.95,y:55.8,startPosition:25},0).wait(1).to({x:55.65,y:56.55,startPosition:26},0).wait(1).to({x:56.35,y:57.3,startPosition:27},0).wait(1).to({x:57,y:58.05,startPosition:28},0).to({_off:true},1).wait(51));

	// SparkleGreen
	this.instance_18 = new lib.SparkleGreen("synched",0);
	this.instance_18.setTransform(18.05,14.5,0.3182,0.3182,0,0,0,45.1,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:45,regY:45,x:12.05,y:19.55,startPosition:1},0).wait(1).to({x:6.05,y:24.7,startPosition:2},0).wait(1).to({x:0.05,y:29.8,startPosition:3},0).wait(1).to({x:-5.95,y:34.95,startPosition:4},0).wait(1).to({x:-11.95,y:40.1,startPosition:5},0).wait(1).to({x:-17.95,y:45.2,startPosition:6},0).wait(1).to({x:-18.95,y:46.1,startPosition:7},0).wait(1).to({x:-19.95,y:46.95,startPosition:8},0).wait(1).to({x:-20.95,y:47.8,startPosition:9},0).wait(1).to({x:-21.95,y:48.65,startPosition:10},0).wait(1).to({x:-22.95,y:49.5,startPosition:11},0).wait(1).to({x:-23.95,y:50.35,startPosition:12},0).wait(1).to({x:-24.95,y:51.2,startPosition:13},0).wait(1).to({x:-25.95,y:52.1,startPosition:14},0).wait(1).to({x:-26.95,y:52.95,startPosition:15},0).wait(1).to({x:-27.95,y:53.8,startPosition:16},0).wait(1).to({x:-28.95,y:54.65,startPosition:17},0).wait(1).to({x:-29.95,y:55.5,startPosition:18},0).wait(1).to({x:-30.95,y:56.35,startPosition:19},0).wait(1).to({x:-31.95,y:57.2,startPosition:20},0).wait(1).to({x:-32.95,y:58.1,startPosition:21},0).wait(1).to({x:-33.95,y:58.95,startPosition:22},0).wait(1).to({x:-34.95,y:59.8,startPosition:23},0).wait(1).to({x:-35.95,y:60.65,startPosition:24},0).wait(1).to({x:-36.95,y:61.5,startPosition:25},0).wait(1).to({x:-37.95,y:62.35,startPosition:26},0).wait(1).to({x:-38.95,y:63.2,startPosition:27},0).wait(1).to({x:-40,y:64.05,startPosition:28},0).to({_off:true},1).wait(51));

	// checkmark
	this.sashComplete = new lib.IconCheck();
	this.sashComplete.name = "sashComplete";
	this.sashComplete.setTransform(14.25,15.1);

	this.timeline.addTween(cjs.Tween.get(this.sashComplete).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,-64.3,134.3,143.39999999999998);


(lib.DBLAAppDoorGreen = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AioNmQirAAAAirIAApWQAAiqCrAAIJVAAQCrAAAACqIAAJWQAACrirAAg");
	mask.setTransform(60.0124,87.0125);

	// app icon
	this.instance = new lib.DreamBoxGreen102("synched",0);
	this.instance.setTransform(73,127,0.9216,0.9216,0,0,0,51,51);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B8D2B3").ss(2,1,1).p("Ak/oHIJ/AAQDIAAAADIIAAJ/QAADIjIAAIp/AAQjIAAAAjIIAAp/QAAjIDIAAg");
	this.shape.setTransform(73,127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/IIQjIAAAAjIIAAp/QAAjIDIAAIJ/AAQDIAAAADIIAAJ/QAADIjIAAg");
	this.shape_1.setTransform(73,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// app border1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(162,198,154,0.6)").s().p("AlDH4QhGAAg3g3Qg3g2AAhHIAAqHQAAhNA1gzQA0g0BLAAIKHAAQBKAAA2A1QA0A1AABKIAAKHQAABKg0A1Qg2A1hKAAg");
	this.shape_2.setTransform(73.45,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// hinges2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_3.setTransform(-7.5065,167.5175,0.7143,0.9149);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_4.setTransform(-7.5065,43.4675,0.7143,0.9149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// hinges
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_5.setTransform(-6.5,168);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBEBEB").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_6.setTransform(-6.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// handle hilite
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.702)").s().p("AgNCQQgGgGAAgIIAAkDQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAEDQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_7.setTransform(146.9498,126.55,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// handle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E0E0E0","#F4F4F4"],[0,1],0,30.1,0,-26).s().p("AgdDhQgUAAAAgUIAAmZQAAgUAUAAIA7AAQAUAAAAAUIAAGZQAAAUgUAAg");
	this.shape_8.setTransform(146.9498,133.05,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// handle area
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D9D9").s().p("AgxEJQgUAAAAgUIAAnpQAAgUAUAAIBjAAQAUAAAAAUIAAHpQAAAUgUAAg");
	this.shape_9.setTransform(146.9498,136.025,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// plate2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxGIIhtgmQgigKAAgnIAAphQAAgoAigJIBtgmQAugNAAAwIAALIQAAAngdAAQgIAAgJgDg");
	this.shape_10.setTransform(145.6,138.2239);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// stripes
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AJbQxICOiOIAABVIg5A5gAGWQxIFTlTIAABVIj+D+gADSQxIIXoXIAABVInCHCgAANQxILcrcIAABVIqHKHgAi3QxIOguhIAABVItLNMgAl7QxIRkxkIAABUIwPQQgApAQxIUp0pIAABVIzUTUgAroQxIAAgcIXR3RIAABVI2YWYgAroNQIXR3RIAABVI3RXRgAroKMIXR3RIAABVI3RXRgAroHHIXR3RIAABVI3RXRgAroECIUy0yIBVAAI2HWHgAroA+IRuxuIBVAAIzDTDgAroiGIOpuqIBVAAIv+P/gArolKILmrmIBUAAIs6M7gArooPIIhohIBVAAIp2J2gArorTIFdldIBVAAImyGygArouYICYiYIBVAAIjtDtgArowwIAoAAIgoAog");
	this.shape_11.setTransform(74.525,107.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D6E0D5","#C4D0C3"],[0,1],20.9,100.3,-49.5,-10).s().p("AroQxMAAAghhIXRAAMAAAAhhgAikguIgBABIAAAAIABADIAAgDIAAgCgAijguIABAAIgBAAg");
	this.shape_12.setTransform(74.525,107.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// base
	this.background = new lib.UnitBaseNanoDoor();
	this.background.name = "background";
	this.background.setTransform(73.6,113.75);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAAppDoorGreen, new cjs.Rectangle(-10.2,-11.2,168.39999999999998,235.2), null);


(lib.DBLAAppDoorBlue = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AioNmQirAAAAirIAApWQAAiqCrAAIJVAAQCrAAAACqIAAJWQAACrirAAg");
	mask.setTransform(60.0124,87.0125);

	// app icon
	this.instance = new lib.DreamBoxBlue102("synched",0);
	this.instance.setTransform(73,127,0.9216,0.9216,0,0,0,51,51);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B8D2B3").ss(2,1,1).p("Ak/oHIJ/AAQDIAAAADIIAAJ/QAADIjIAAIp/AAQjIAAAAjIIAAp/QAAjIDIAAg");
	this.shape.setTransform(73,127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/IIQjIAAAAjIIAAp/QAAjIDIAAIJ/AAQDIAAAADIIAAJ/QAADIjIAAg");
	this.shape_1.setTransform(73,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// app border1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(162,198,154,0.6)").s().p("AlDH4QhGAAg3g3Qg3g2AAhHIAAqHQAAhNA1gzQA0g0BLAAIKHAAQBKAAA2A1QA0A1AABKIAAKHQAABKg0A1Qg2A1hKAAg");
	this.shape_2.setTransform(73.45,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// hinges2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_3.setTransform(-7.5065,167.5175,0.7143,0.9149);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_4.setTransform(-7.5065,43.4675,0.7143,0.9149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// hinges
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_5.setTransform(-6.5,168);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBEBEB").s().p("AgiDrIAAnVIBFAAIAAHVg");
	this.shape_6.setTransform(-6.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// handle hilite
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.702)").s().p("AgNCQQgGgGAAgIIAAkDQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAEDQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_7.setTransform(146.9498,126.55,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// handle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E0E0E0","#F4F4F4"],[0,1],0,30.1,0,-26).s().p("AgdDhQgUAAAAgUIAAmZQAAgUAUAAIA7AAQAUAAAAAUIAAGZQAAAUgUAAg");
	this.shape_8.setTransform(146.9498,133.05,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// handle area
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D9D9").s().p("AgxEJQgUAAAAgUIAAnpQAAgUAUAAIBjAAQAUAAAAAUIAAHpQAAAUgUAAg");
	this.shape_9.setTransform(146.9498,136.025,0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// plate2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxGIIhtgmQgigKAAgnIAAphQAAgoAigJIBtgmQAugNAAAwIAALIQAAAngdAAQgIAAgJgDg");
	this.shape_10.setTransform(145.6,138.2239);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// stripes
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.149)").s().p("AJbQxICOiOIAABVIg5A5gAGWQxIFTlTIAABVIj+D+gADSQxIIXoXIAABVInCHCgAANQxILcrcIAABVIqHKHgAi3QxIOguhIAABVItLNMgAl7QxIRkxkIAABUIwPQQgApAQxIUp0pIAABVIzUTUgAroQxIAAgcIXR3RIAABVI2YWYgAroNQIXR3RIAABVI3RXRgAroKMIXR3RIAABVI3RXRgAroHHIXR3RIAABVI3RXRgAroECIUy0yIBVAAI2HWHgAroA+IRuxuIBVAAIzDTDgAroiGIOpuqIBVAAIv+P/gArolKILmrmIBUAAIs6M7gArooPIIhohIBVAAIp2J2gArorTIFdldIBVAAImyGygArouYICYiYIBVAAIjtDtgArowwIAoAAIgoAog");
	this.shape_11.setTransform(74.525,107.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D6E0D5","#C4D0C3"],[0,1],20.9,100.3,-49.5,-10).s().p("AroQxMAAAghhIXRAAMAAAAhhgAikguIgBABIAAAAIABADIAAgDIAAgCgAijguIABAAIgBAAg");
	this.shape_12.setTransform(74.525,107.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// base
	this.background = new lib.UnitBaseNanoDoor();
	this.background.name = "background";
	this.background.setTransform(73.6,113.75);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAAppDoorBlue, new cjs.Rectangle(-10.2,-11.2,168.39999999999998,235.2), null);


(lib.CalendarOngoingCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon2
	this.instance = new lib.CalendarDesignOngoing();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(17,0,36,0.6)").s().p("Ag1C9QgKgFgMgMIgkANIgBAAIgHABQgEAAgEgCIgWgMIgCgBIgEgFIgBAAIAAgBQgDgDgBgEIAAgBIAAgBIgej2IAAAAQgBgIAFgGIAAAAQAEgGAGgBIACgBIAEgBIACgNIABgEIAAAAIABgBQALghAaABQARgEAPAQQALgaAWgBQATgEAQARQAMgZAUABQAXgGAUAdIAAABIAFAJIAYAEQAEgBAEAAIAAAAQAGABAFAFIABABQADAFABAGIAFAeQAHAmAKAkIAAABIABAEQAMApAaAcIABACIABAAQAKALAJAFQAHADADAIIAAAAIAAADQACAGgDAGIAAABQgDAGgHADIgCABIjWBbIABAAQgFACgEAAQgFAAgEgCg");
	this.shape.setTransform(-0.6052,0.5555);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarOngoingCF, new cjs.Rectangle(-19.7,-18.5,38.3,38.2), null);


(lib.CalendarImageOngoingCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// calendar
	this.instance = new lib.CalendarOngoingCF();
	this.instance.setTransform(3.5,-2.45,1.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AkRESQhzhxAAihQAAigBzhxQBxhzCgAAQChAABxBzQBzBxAACgQAAChhzBxQhxBzihAAQigAAhxhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// outr starburst2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9DE99D").s().p("AgfHTIhEAvIguhFIhPAcIgchOIhTAIIgHhTIhUgMIAPhSIhOghIAjhMIhDgzIA0hCIg0hAIBDgyIgjhOIBOggIgPhTIBUgMIAHhTIBTAJIAchPIBPAcIAuhFIBEAwIA+g4IA3A/IBKgmIAmBLIBSgUIAQBSIBVADIgFBTIBRAWIgYBQIBJAqIgrBIIA7A5Ig7A7IArBIIhJAqIAYBQIhRAWIAFBTIhVADIgQBRIhSgUIgmBMIhKgnIg3A/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// outr starburst1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],0,-56.3,0,56.4).s().p("AghH5IhKAyIgyhKIhVAfIgehVIhaAJIgIhaIhagNIAQhZIhTgjIAlhSIhJg4IA4hHIg4hFIBJg3IglhTIBTgjIgQhZIBagNIAIhaIBaAJIAehVIBVAeIAyhKIBKAzIBCg8IA8BEIBQgpIApBRIBYgVIASBYIBbADIgEBaIBXAYIgbBXIBPAtIguBNIBAA+IhABAIAuBNIhPAtIAbBXIhXAZIAEBaIhbACIgSBYIhYgWIgpBRIhQgpIg8BEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarImageOngoingCF, new cjs.Rectangle(-57.7,-56.7,120,120), null);


(lib.CalendarIconOngoingCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// calendar
	this.instance = new lib.CalendarOngoingCF();
	this.instance.setTransform(3.5,-2.45,1.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AkRESQhzhxAAihQAAigBzhxQBxhzCgAAQChAABxBzQBzBxAACgQAAChhzBxQhxBzihAAQigAAhxhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// outr starburst2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8CD7F4","#42A5CB","#1A90BD","#42A5CB","#8CD7F4"],[0,0.267,0.51,0.773,1],-18.4,-48.2,18.5,48.4).s().p("AgfHTIhEAvIguhFIhPAcIgchOIhTAIIgHhTIhUgMIAPhSIhOghIAjhMIhDgzIA0hCIg0hAIBDgyIgjhOIBOggIgPhTIBUgMIAHhTIBTAJIAchPIBPAcIAuhFIBEAwIA+g4IA3A/IBKgmIAmBLIBSgUIAQBSIBVADIgFBTIBRAWIgYBQIBJAqIgrBIIA7A5Ig7A7IArBIIhJAqIAYBQIhRAWIAFBTIhVADIgQBRIhSgUIgmBMIhKgnIg3A/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// outr starburst1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjIYIhPA3Ig1hQIhaAiIgghbIhgAKIgIhgIhggOIAQhfIhZglIAohYIhNg6IA8hMIg8hKIBNg6IgohYIBZglIgQhgIBggNIAIhgIBgAKIAghbIBaAhIA1hPIBPA2IBGhAIA/BJIBWgtIAsBXIBdgXIATBeIBhADIgEBgIBdAZIgcBdIBTAwIgxBSIBEBCIhEBEIAxBSIhTAxIAcBcIhdAaIAEBfIhhADIgTBdIhdgXIgsBXIhWgtIg/BJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// starburst shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AgjIYIhPA3Ig1hQIhaAhIgghaIhgAKIgIhgIhggOIAQhfIhZglIAohXIhNg7IA8hMIg8hKIBNg6IgohYIBZglIgQhgIBggNIAIhgIBgAKIAghbIBaAhIA1hQIBPA3IBGhAIA/BIIBWgsIAsBXIBdgXIATBeIBhADIgEBgIBdAZIgcBdIBTAwIgxBSIBEBCIhEBEIAxBSIhTAxIAcBcIhdAaIAEBfIhhADIgTBdIhdgWIgsBWIhWgtIg/BJg");
	this.shape_3.setTransform(2.25,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarIconOngoingCF, new cjs.Rectangle(-60,-60,122.3,123.3), null);


(lib.CalendarCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon2
	this.instance = new lib.CalendarDesign2();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("Ag1C9QgKgFgMgMIgkANIgBAAIgHABQgEAAgEgCIgWgMIgCgBIgEgFIgBAAIAAgBQgDgDgBgEIAAgBIAAgBIgej2IAAAAQgBgIAFgGIAAAAQAEgGAGgBIACgBIAEgBIACgNIABgEIAAAAIABgBQALghAaABQARgEAPAQQALgaAWgBQATgEAQARQAMgZAUABQAXgGAUAdIAAABIAFAJIAYAEQAEgBAEAAIAAAAQAGABAFAFIABABQADAFABAGIAFAeQAHAmAKAkIAAABIABAEQAMApAaAcIABACIABAAQAKALAJAFQAHADADAIIAAAAIAAADQACAGgDAGIAAABQgDAGgHADIgCABIjWBbIABAAQgFACgEAAQgFAAgEgCg");
	this.shape.setTransform(-0.6052,0.5555);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarCF, new cjs.Rectangle(-19.7,-18.5,38.3,38.2), null);


(lib.DBLAAssignedLessonIcon_Ongoing = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CalendarIconOngoingCF();
	this.instance.setTransform(7.95,-8.65,0.8,0.8,0,0,0,1.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAAssignedLessonIcon_Ongoing, new cjs.Rectangle(-41,-58,97.8,98.6), null);


(lib.DBLAAssignedLessonComplete_Ongoing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("SFXChimes");
	}
	this.frame_5 = function() {
		playSound("SFXWoosh");
	}
	this.frame_14 = function() {
		playSound("SFXCymbal");
	}
	this.frame_95 = function() {
		playSound("SFXSlide");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(9).call(this.frame_14).wait(81).call(this.frame_95).wait(16));

	// particles
	this.instance = new lib.ParticlesWhite("synched",0,false);
	this.instance.setTransform(29.95,-32.75,1,1,0,0,0,31,-32.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},108).wait(1));

	// Layer 4
	this.instance_1 = new lib.StarAnimation("synched",0,false);
	this.instance_1.setTransform(-53.5,-42.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({_off:true},51).wait(10));

	// Layer 3
	this.instance_2 = new lib.StarAnimation("synched",0,false);
	this.instance_2.setTransform(33.5,-45.45,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({_off:true},63).wait(10));

	// sparklz
	this.instance_3 = new lib.StarAnimation("synched",0,false);
	this.instance_3.setTransform(54.95,-101.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({_off:true},69).wait(10));

	// check
	this.instance_4 = new lib.FancyCheckmark();
	this.instance_4.setTransform(103.7,-83.05,1.5,1.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,x:38.7,y:-6},3).wait(1).to({x:31.7,y:0},0).to({x:38.7,y:-6},2).wait(85).to({alpha:0},3).to({_off:true},1).wait(6));

	// ICON
	this.instance_5 = new lib.CalendarImageOngoingCF();
	this.instance_5.setTransform(0,-33.05,0.8,0.8,0,0,0,1,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({scaleX:2.3,scaleY:2.3},3).to({scaleX:2,scaleY:2},2).wait(92).to({alpha:0},3).to({_off:true},1).wait(6));

	// text
	this.assignmentCompleteText = new cjs.Text("Assignment Complete!", "bold 36px 'Montreal Serial Xbold'", DBLColorManager.color("engagement_status_inprogress_top"));
	this.assignmentCompleteText.name = "assignmentCompleteText";
	this.assignmentCompleteText.textAlign = "center";
	this.assignmentCompleteText.lineHeight = 48;
	this.assignmentCompleteText.lineWidth = 370;
	this.assignmentCompleteText.parent = this;
	this.assignmentCompleteText.setTransform(-0.0122,68.75,1.35,1.35);
	this.assignmentCompleteText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.assignmentCompleteText).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:74.45},2).wait(1).to({scaleX:0.8,scaleY:0.8,x:-0.0186,y:77.7},0).to({scaleX:1,scaleY:1,x:0,y:74.45},3).to({_off:true},81).wait(10));

	// message base
	this.instance_6 = new lib.MessageBase3();
	this.instance_6.setTransform(0,0,0.2,0.2,0,0,0,3.5,3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(1).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:1,scaleY:1},2).wait(92).to({alpha:0},3).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.2,-233.9,565.4,432.9);


(lib.CalendarImageCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// calendar
	this.instance = new lib.CalendarCF();
	this.instance.setTransform(3.5,-2.45,1.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_status_inprogress_bottom")).s().p("AkRESQhzhxAAihQAAigBzhxQBxhzCgAAQChAABxBzQBzBxAACgQAAChhzBxQhxBzihAAQigAAhxhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// starburst_fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_status_correct_fill).s().p("AgfHTIhEAvIguhFIhPAcIgchOIhTAIIgHhTIhUgMIAPhSIhOghIAjhMIhDgzIA0hCIg0hAIBDgyIgjhOIBOggIgPhTIBUgMIAHhTIBTAJIAchPIBPAcIAuhFIBEAwIA+g4IA3A/IBKgmIAmBLIBSgUIAQBSIBVADIgFBTIBRAWIgYBQIBJAqIgrBIIA7A5Ig7A7IArBIIhJAqIAYBQIhRAWIAFBTIhVADIgQBRIhSgUIgmBMIhKgnIg3A/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// starburst_stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf([DBLColorManager.color("engagement_status_inprogress_top"),DBLColorManager.color("engagement_status_inprogress_bottom")],[0,1],0,-56.4,0,56.4).s().p("AghH5IhKAyIgyhKIhVAfIgehVIhaAJIgIhaIhagNIAQhZIhTgjIAlhSIhJg4IA4hHIg4hFIBJg3IglhTIBTgjIgQhZIBagNIAIhaIBaAJIAehVIBVAeIAyhKIBKAzIBCg8IA8BEIBQgpIApBRIBYgVIASBYIBbADIgEBaIBXAYIgbBXIBPAtIguBNIBAA+IhABAIAuBNIhPAtIAbBXIhXAZIAEBaIhbACIgSBYIhYgWIgpBRIhQgpIg8BEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarImageCF, new cjs.Rectangle(-56.4,-56.4,112.8,112.8), null);


(lib.CalendarIconCF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// calendar
	this.instance = new lib.CalendarCF();
	this.instance.setTransform(3.5,-2.45,1.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,136,176,0.349)").s().p("AkRESQhzhxAAihQAAigBzhxQBxhzCgAAQChAABxBzQBzBxAACgQAAChhzBxQhxBzihAAQigAAhxhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// outr starburst2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1797C8","#72C7E7","#90D5EF","#72C7E7","#1797C8"],[0,0.267,0.51,0.773,1],-18.4,-48.2,18.5,48.4).s().p("AgfHTIhEAvIguhFIhPAcIgchOIhTAIIgHhTIhUgMIAPhSIhOghIAjhMIhDgzIA0hCIg0hAIBDgyIgjhOIBOggIgPhTIBUgMIAHhTIBTAJIAchPIBPAcIAuhFIBEAwIA+g4IA3A/IBKgmIAmBLIBSgUIAQBSIBVADIgFBTIBRAWIgYBQIBJAqIgrBIIA7A5Ig7A7IArBIIhJAqIAYBQIhRAWIAFBTIhVADIgQBRIhSgUIgmBMIhKgnIg3A/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// outr starburst1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjIYIhPA3Ig1hQIhaAiIgghbIhgAKIgIhgIhggOIAQhfIhZglIAohYIhNg6IA8hMIg8hKIBNg6IgohYIBZglIgQhgIBggNIAIhgIBgAKIAghbIBaAhIA1hPIBPA2IBGhAIA/BJIBWgtIAsBXIBdgXIATBeIBhADIgEBgIBdAZIgcBdIBTAwIgxBSIBEBCIhEBEIAxBSIhTAxIAcBcIhdAaIAEBfIhhADIgTBdIhdgXIgsBXIhWgtIg/BJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// starburst shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AgjIYIhPA3Ig1hQIhaAhIgghaIhgAKIgIhgIhggOIAQhfIhZglIAohXIhNg7IA8hMIg8hKIBNg6IgohYIBZglIgQhgIBggNIAIhgIBgAKIAghbIBaAhIA1hQIBPA3IBGhAIA/BIIBWgsIAsBXIBdgXIATBeIBhADIgEBgIBdAZIgcBdIBTAwIgxBSIBEBCIhEBEIAxBSIhTAxIAcBcIhdAaIAEBfIhhADIgTBdIhdgWIgsBWIhWgtIg/BJg");
	this.shape_3.setTransform(2.25,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CalendarIconCF, new cjs.Rectangle(-60,-60,122.3,123.3), null);


(lib.DBLAAssignedLessonIcon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CalendarIconCF();
	this.instance.setTransform(7.95,-8.65,0.8,0.8,0,0,0,1.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAAssignedLessonIcon, new cjs.Rectangle(-41,-58,97.8,98.6), null);


(lib.DBLAAssignedLessonComplete = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("SFXChimes");
	}
	this.frame_5 = function() {
		playSound("SFXWoosh");
	}
	this.frame_14 = function() {
		playSound("SFXCymbal");
	}
	this.frame_95 = function() {
		playSound("SFXSlide");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(9).call(this.frame_14).wait(81).call(this.frame_95).wait(16));

	// particles
	this.instance = new lib.ParticlesWhite("synched",0,false);
	this.instance.setTransform(29.95,-32.75,1,1,0,0,0,31,-32.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},108).wait(1));

	// Layer 4
	this.instance_1 = new lib.StarAnimation("synched",0,false);
	this.instance_1.setTransform(-53.5,-42.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({_off:true},51).wait(10));

	// Layer 3
	this.instance_2 = new lib.StarAnimation("synched",0,false);
	this.instance_2.setTransform(33.5,-45.45,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({_off:true},63).wait(10));

	// sparklz
	this.instance_3 = new lib.StarAnimation("synched",0,false);
	this.instance_3.setTransform(54.95,-101.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({_off:true},69).wait(10));

	// check
	this.instance_4 = new lib.FancyCheckmark();
	this.instance_4.setTransform(103.7,-83.05,1.5,1.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,x:38.7,y:-6},3).wait(1).to({x:31.7,y:0},0).to({x:38.7,y:-6},2).wait(85).to({alpha:0},3).to({_off:true},1).wait(6));

	// ICON
	this.instance_5 = new lib.CalendarImageCF();
	this.instance_5.setTransform(0,-33.05,0.8,0.8,0,0,0,1,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({scaleX:2.3,scaleY:2.3},3).to({scaleX:2,scaleY:2},2).wait(92).to({alpha:0},3).to({_off:true},1).wait(6));

	// text
	this.assignmentCompleteText = new cjs.Text("Assignment Complete!", "bold 36px 'Montreal Serial Xbold'", DBLColorManager.color("engagement_status_inprogress_top"));
	this.assignmentCompleteText.name = "assignmentCompleteText";
	this.assignmentCompleteText.textAlign = "center";
	this.assignmentCompleteText.lineHeight = 48;
	this.assignmentCompleteText.lineWidth = 370;
	this.assignmentCompleteText.parent = this;
	this.assignmentCompleteText.setTransform(-0.0122,68.75,1.35,1.35);
	this.assignmentCompleteText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.assignmentCompleteText).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:74.45},2).wait(1).to({scaleX:0.8,scaleY:0.8,x:-0.0186,y:77.7},0).to({scaleX:1,scaleY:1,x:0,y:74.45},3).to({_off:true},81).wait(10));

	// message base
	this.instance_6 = new lib.MessageBase3();
	this.instance_6.setTransform(0,0,0.2,0.2,0,0,0,3.5,3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(1).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:1,scaleY:1},2).wait(92).to({alpha:0},3).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.2,-233.9,565.4,432.9);


(lib.DBLALessonButtonForPlacement = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// play
	this.playButton = new lib.DBLAPlayButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(-0.1,-7.1,1,1,0,0,0,34.9,34.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxCGIAJhxQgLgHgIgIQgXgVgBgjQABgjAXgZQAZgXAiAAQAjAAAYAXQAZAZAAAjQAAAjgZAVQgJAIgJAHIAJBxg");
	this.shape.setTransform(-0.45,4.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.playButton}]}).wait(1));

	// recommended
	this.recommended = new lib.DBLACoin();
	this.recommended.name = "recommended";
	this.recommended.setTransform(91,112,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.recommended).wait(1));

	// complete
	this.complete = new lib.DBLACheckComplete();
	this.complete.name = "complete";
	this.complete.setTransform(43,-58);

	this.timeline.addTween(cjs.Tween.get(this.complete).wait(1));

	// completeBack
	this.completeBack = new lib.DBLACompleteCornerBack();
	this.completeBack.name = "completeBack";
	this.completeBack.setTransform(28,-60);

	this.timeline.addTween(cjs.Tween.get(this.completeBack).wait(1));

	// assigned
	this.assigned = new lib.DBLAAssignedLessonIcon();
	this.assigned.name = "assigned";
	this.assigned.setTransform(-70.6,97.35);

	this.timeline.addTween(cjs.Tween.get(this.assigned).wait(1));

	// InProgressSash_En
	this.InProgressSashEn = new lib.DBLAInProgressSash_En();
	this.InProgressSashEn.name = "InProgressSashEn";
	this.InProgressSashEn.setTransform(-75,-60);

	this.timeline.addTween(cjs.Tween.get(this.InProgressSashEn).wait(1));

	// InProgressSash_Span
	this.InProgressSashSpan = new lib.DBLAInProgressSash_Span();
	this.InProgressSashSpan.name = "InProgressSashSpan";
	this.InProgressSashSpan.setTransform(-75,-60);

	this.timeline.addTween(cjs.Tween.get(this.InProgressSashSpan).wait(1));

	// InprogressIcon
	this.InProgressIcon = new lib.DBLAInProgressIcon();
	this.InProgressIcon.name = "InProgressIcon";
	this.InProgressIcon.setTransform(21.25,-60.2);

	this.timeline.addTween(cjs.Tween.get(this.InProgressIcon).wait(1));

	// door
	this.door = new lib.DBLADoor();
	this.door.name = "door";
	this.door.setTransform(-83,-126);

	this.timeline.addTween(cjs.Tween.get(this.door).wait(1));

	// titleSmall
	this.unitTitleSmall = new cjs.Text("Sumar-Restar: Máquina de Operaciones Matemáticas", "14px 'Montreal Serial Medium'");
	this.unitTitleSmall.name = "unitTitleSmall";
	this.unitTitleSmall.textAlign = "center";
	this.unitTitleSmall.lineHeight = 17;
	this.unitTitleSmall.lineWidth = 146;
	this.unitTitleSmall.parent = this;
	this.unitTitleSmall.setTransform(0,-113);

	this.timeline.addTween(cjs.Tween.get(this.unitTitleSmall).wait(1));

	// title
	this.unitTitle = new cjs.Text("Sumar-Restar: Máquina de Operaciones", "16px 'Montreal Serial Medium'");
	this.unitTitle.name = "unitTitle";
	this.unitTitle.textAlign = "center";
	this.unitTitle.lineHeight = 19;
	this.unitTitle.lineWidth = 146;
	this.unitTitle.parent = this;
	this.unitTitle.setTransform(0,-116);

	this.timeline.addTween(cjs.Tween.get(this.unitTitle).wait(1));

	// banner
	this.banner = new lib.UnitLabel();
	this.banner.name = "banner";
	this.banner.setTransform(14.5,-94,1,1,0,0,0,87.5,23);

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(1));

	// frame
	this.frame = new lib.UnitFrame();
	this.frame.name = "frame";
	this.frame.setTransform(16,-19,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// background
	this.background = new lib.UnitBase();
	this.background.name = "background";

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLALessonButtonForPlacement, new cjs.Rectangle(-111.6,-133.1,219.2,271.1), null);


// stage content:
(lib.DBLALessonChoosercolor = function(mode,startPosition,loop,reversed) {
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

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '92405555EC6147CD9457158A24537199',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/BitmapBlue.png", id:"BitmapBlue"},
		{src:"images/BitmapGreen.png", id:"BitmapGreen"},
		{src:"sounds/SFXChimes.mp3", id:"SFXChimes"},
		{src:"sounds/SFXComplete.mp3", id:"SFXComplete"},
		{src:"sounds/SFXCymbal.mp3", id:"SFXCymbal"},
		{src:"sounds/SFXExtraLockFlips.mp3", id:"SFXExtraLockFlips"},
		{src:"sounds/SFXKeySwish.mp3", id:"SFXKeySwish"},
		{src:"sounds/SFXMysteryDoorClose.mp3", id:"SFXMysteryDoorClose"},
		{src:"sounds/SFXMysteryDoorOpen.mp3", id:"SFXMysteryDoorOpen"},
		{src:"sounds/SFXSlide.mp3", id:"SFXSlide"},
		{src:"sounds/SFXUnlock.mp3", id:"SFXUnlock"},
		{src:"sounds/SFXWoosh.mp3", id:"SFXWoosh"}
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
an.compositions['92405555EC6147CD9457158A24537199'] = {
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