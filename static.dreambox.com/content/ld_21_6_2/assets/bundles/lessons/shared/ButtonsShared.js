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


(lib.ToolButtonDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(236,236,236,0.6)").s().p("Ah+CAQg1g1AAhLQAAhKA1g0QA0g1BKAAQBLAAA0A1QA1A0AABKQAABLg1A1Qg0A0hLAAQhKAAg0g0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB4h3QAyAxAABGQAABHgyAyQgxAxhHAAQhGAAgxgxQgygyAAhHQAAhGAygxQAxgyBGAAQBHAAAxAyg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B5QgygzAAhGQAAhGAygxQAxgyBGAAQBHAAAxAyQAyAxAABGQAABGgyAzQgxAxhHAAQhGAAgxgxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.047)").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhJAAg1g0g");
	this.shape_3.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolButtonDisabled, new cjs.Rectangle(-18,-18,37,38), null);


(lib.ToolButtonDarker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Ah+CAQg1g1AAhLQAAhKA1g0QA0g1BKAAQBLAAA0A1QA1A0AABKQAABLg1A1Qg0A0hLAAQhKAAg0g0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB4h3QAyAxAABGQAABHgyAyQgxAxhHAAQhGAAgxgxQgygyAAhHQAAhGAygxQAxgyBGAAQBHAAAxAyg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B5QgygzAAhGQAAhGAygxQAxgyBGAAQBHAAAxAyQAyAxAABGQAABGgyAzQgxAxhHAAQhGAAgxgxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhJAAg1g0g");
	this.shape_3.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolButtonDarker, new cjs.Rectangle(-18,-18,37,38), null);


(lib.ToolButtonBrighter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Ah+CAQg1g1AAhLQAAhKA1g0QA0g1BKAAQBLAAA0A1QA1A0AABKQAABLg1A1Qg0A0hLAAQhKAAg0g0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB4h3QAyAxAABGQAABHgyAyQgxAxhHAAQhGAAgxgxQgygyAAhHQAAhGAygxQAxgyBGAAQBHAAAxAyg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B5QgygzAAhGQAAhGAygxQAxgyBGAAQBHAAAxAyQAyAxAABGQAABGgyAzQgxAxhHAAQhGAAgxgxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhJAAg1g0g");
	this.shape_3.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolButtonBrighter, new cjs.Rectangle(-18,-18,37,38), null);


(lib.ToolButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB4h3QAyAxAABGQAABHgyAyQgxAxhHAAQhGAAgxgxQgygyAAhHQAAhGAygxQAxgyBGAAQBHAAAxAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB4h3QAyAxAABGQAABHgyAyQgxAxhHAAQhGAAgxgxQgygyAAhHQAAhGAygxQAxgyBGAAQBHAAAxAyg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B5QgygzAAhGQAAhGAygxQAxgyBGAAQBHAAAxAyQAyAxAABGQAABGgyAzQgxAxhHAAQhGAAgxgxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhJAAg1g0g");
	this.shape_3.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolButton, new cjs.Rectangle(-18,-18,37,38), null);


(lib.TextToolFrameLight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Egw0AEsIAApXMBhpAAAIAAJXg");
	this.shape.setTransform(316.5,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah8iVID5CVIj5CWg");
	this.shape_1.setTransform(639.5,33.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("EgynAEsIAApXMBhpAAAIAACeIDmB/IjmCOIAACsg");
	this.shape_2.setTransform(331,37);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextToolFrameLight, new cjs.Rectangle(4,4,651,63), null);


(lib.soundonicon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AAABaQACgDADgCQAggjAAgyQAAgwgggkQgDgCgCgDAgoA4QAFgEAFgEQASgUAAgcQAAgbgSgUQgFgEgFgE");
	this.shape.setTransform(7.1877,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAwIggAAIAAhcIAgAAIBNhBIAADbg");
	this.shape_1.setTransform(-5.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.soundonicon, new cjs.Rectangle(-10.9,-11,22.8,22), null);


(lib.SmallCircleButtonBaseGrayed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(236,236,236,0.698)").s().p("AibCcQhAhBAAhbQAAhaBAhBQBBhABaAAQBbAABBBAQBABBAABaQAABbhABBQhBBAhbAAQhaAAhBhAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(0.0159,-0.0105,2.0764,2.0764);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(-0.0126,0.0099,2.1858,2.1858);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_3.setTransform(-0.019,0.0011,2.4044,2.4042);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallCircleButtonBaseGrayed, new cjs.Rectangle(-22,-22,44,44), null);


(lib.SmallCircleButtonBaseDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape.setTransform(-0.019,0.0011,2.4044,2.4042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(0.0159,-0.0105,2.0764,2.0764);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(-0.0126,0.0099,2.1858,2.1858);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_3.setTransform(-0.019,0.0011,2.4044,2.4042);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallCircleButtonBaseDarker, new cjs.Rectangle(-22,-22,44,44), null);


(lib.SmallCircleButtonBaseBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape.setTransform(-0.0034,0.0127,2.7322,2.7321);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(-0.0183,0.001,2.4043,2.4043);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(0.0032,0.0214,2.5136,2.5136);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_3.setTransform(-0.0034,0.0127,2.7322,2.7321);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallCircleButtonBaseBrighter, new cjs.Rectangle(-25,-25,50,50), null);


(lib.SmallCircleButtonBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape.setTransform(0.0159,-0.0105,2.0764,2.0764);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// inner stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(-0.0126,0.0099,2.1858,2.1858);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(-0.019,0.0011,2.4044,2.4042);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_3.setTransform(1.981,2.0011,2.4044,2.4042);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallCircleButtonBase, new cjs.Rectangle(-22,-22,46,46), null);


(lib.Signpost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0EED9").s().p("AgEBzIAAgPQACgHAAgRIgBgvIgBgFIABgBIgBABIACAPQAAAKACAFIAAArIAAACIAAAQIgCAAgAgEhuQAEgEAEAAIABACQAAACgGABg");
	this.shape.setTransform(10.2,11.8975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#724327").s().p("ABHgeIAIAGIAAAyIgJAFgAA+AeIhnAAIgEAAIgCAAIgEgBIgDABIgEgDIgLgLQgJgJAAgCIAAgBIABAAIABAAIABABQAEADAIAIIACACQAHAFAIAEIADAAIAQgBIAIgBQAFgIAcgMIApgPIgnASQgZALgJAGIAUgBIAIAAIAKAAIARgIQASgIAHgCQgdAMgKAGIAdAAIALgFIAEABIgGAEIgBAAIAEABIgBAAIgCAAQAFAAAAADQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAApAXQACgCAMgFIAPgGQgDADgMAFQgKAFgEAAIAAAAgAAyAFQgEADgPAGIgSAIQADgEAigNg");
	this.shape_1.setTransform(9.95,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB9170").s().p("AAKAZQAHgIANgIQANgIAGABIAAABIgmAXgAgUATQAVgSAvgQIhYACQgEACgFAEIgIAFIgLAGIgBAAIAAgBQAHgIAHgFQAIgHAFgBIgFAEIAAAAIACgBIACgCIABAAIAAAAIABAAIAdgDIAhgCIAPAAQALAAARgCQAGgBAAADQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBABIgEAAIgDACIAAAAIgDABIgBAAIAAAAQgmAPglAUgAgogNIACgBIgBAAIgBABgAABAPQAAgDAcgMQAagLAGgCIAAAAIg8AcIAAAAIAAAAg");
	this.shape_2.setTransform(9.1,5.7464);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A36D4F").s().p("AhHAGIAYgXIB3gHIAAAxIh7AAg");
	this.shape_3.setTransform(9.075,5.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#935B35").s().p("AAmAiIhdAAIgegfIAegbIBCgEIADgBIAFAAIATgBIAPgBIAagCIAAABIADADIABAAIADAEIAAA0IgLAHg");
	this.shape_4.setTransform(9.475,5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBC4BB").s().p("AgDBzIAAhlIABAAIACBhQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgAgDhnIgFAAIgBAAIAAgCQAAgGAHgCQAAAAABAAQABgBAAAAQAAAAABABQAAAAAAAAIAEAAIACAAIACAAIAAADIAAAFQgBADgFAAQgEAAgCgBg");
	this.shape_5.setTransform(10.15,11.6986);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A152A").s().p("AgLBsQAAABgBAAQAAAAAAAAQAAAAAAgBQAAgBAAgBIABgCIAXAAIAAADIABAAIgBABIAAAAIgBAAQgFADgEAAQgJAAgEgDgAAABMIAAgcQAAguAEgjIgJAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIADgBIgEAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAKgDAHABIAAABIAAABIAAABIABABIgBABIAAA/IAAAdQAAAdgCAPIgBACQgDgLAAgRgAgHhqIAEAAIgFgBIAAgDIAIAAQAGgBABABIAAACIgDABIAAABQgCACgDAAIgGgCg");
	this.shape_6.setTransform(10.675,13.1667);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C807B").s().p("AgBBxIgBAAIgBh4IAEAAQAAgBABAAQABAAAAAAQABAAAAABQAAAAABAAIAABQIAAAogAgChgIAAgCQgEgBgDgCQgDgDAAgDQACgBAFAAIACAAIADgEIAAAAIACAAIABAAIAAAAIAEADIAAABIAFAAIABAAIAAADQAAADgFACIgBAAIAAADIgBABgAgDhmIAAAAIAAgBIgBAAg");
	this.shape_7.setTransform(9.9969,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B4F56").s().p("AgJB2IgBAAIAAgEIABgBIAAAAIAGAAQAEgCAAgCIgBgBIAAhuIgCgDQgEgDgDACIAAgDIAAAAQABgDgBgEIAAgLIgBgEIAAAAIABAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADABIAIgBIACABIABABIgBABIgBAGIABAMIAAB2IAAAAIACAIQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgBABIgCAAIgIABIgEgBgAAAgFIAAgBIAAAAgAgHheIgCgBIAAAAIgCgBIAAgDIABgBIgDgEIgBAAQACgBAEABIAGAAIAFgBIABgDIAAgGIgCgEIABABIAAgBIACAAIAAACIAAABIABAAQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAAgCQAIABgBADQAAAJgGADIAAABIgBAAIgBABIgBAAIgDAAIgDABIgBAAIgBABg");
	this.shape_8.setTransform(10.6,12.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#71676A").s().p("AgNALQgFgEAAgHQAAgFAFgEQAGgFAHAAQAIAAAFAFQAGAEAAAFQAAAHgGAEQgFAEgIAAQgHAAgGgEg");
	this.shape_9.setTransform(10.375,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#71676A").s().p("AgLB3IAAjlQAAgEAEgDQADgDAEAAIAAAAQAFAAAEADQADADAAAEIAADlQAAACgMAAQgLAAAAgCg");
	this.shape_10.setTransform(10.375,12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D4A48").s().p("AgWAFQgIgCAAgDQAAgBAIgCQAKgCAMAAQAOAAAIACQAJABAAACQAAACgJADQgIABgOAAQgMAAgKgBg");
	this.shape_11.setTransform(10.35,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Signpost, new cjs.Rectangle(0.9,-0.2,17.200000000000003,25), null);


(lib.RadioButton_Display_Highlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B87700").ss(1,1,1).p("AKdkNI06AAQh4AAAAB5IAAEpQAAB5B4AAIU6AAQB5AAAAh5IAAkpQAAh5h5AAg");
	this.shape_2.setTransform(75,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AKdEOI06AAQh4AAAAh5IAAkoQAAh6B4AAIU6AAQB5AAAAB6IAAEoQAAB5h4AAIgBAAg");
	this.shape_3.setTransform(75,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Display_Highlight, new cjs.Rectangle(-5,-5,160,56), null);


(lib.RadioButton_Display = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Display, new cjs.Rectangle(-1.5,-1.5,153,49), null);


(lib.RadioButton_base = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-10.6,19.9,-10.6,-24.6).s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_base, new cjs.Rectangle(-1.5,-1.5,153,49), null);


(lib.DBLARadioButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Incorrect:5,Selected:10,Disabled:15,Disabled_Incorrect:19,Display:24,Highlight:29,HighlightDisplay:34,Over:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FC6F08").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(252,111,8,0.298)").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0087FF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape_2.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33EDFF").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_3.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(229,233,235,0.8)").s().p("AqdD1QhfAAAAhgIAAkpQAAhgBfAAIU6AAQBgAAAABgIAAEpQAABghgAAg");
	this.shape_4.setTransform(75,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E6955C").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape_5.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(252,111,8,0.149)").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_6.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape_7.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_8.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-10.6,19.9,-10.6,-24.6).s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_9.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqGjpIUNAAQBQAAAABQIAAEzQAABQhQAAI0NAAQhQAAAAhQIAAkzQAAhQBQAAg");
	this.shape_10.setTransform(74.9902,22.9941,1.1,1.1104);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F1F1").s().p("AqGDqQhQAAAAhQIAAkzQAAhQBQAAIUNAAQBQAAAABQIAAEzQAABQhQAAg");
	this.shape_11.setTransform(74.9902,22.9941,1.1,1.1104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_6},{t:this.shape_5}]},4).to({state:[{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_9},{t:this.shape_7}]},5).to({state:[{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).wait(5));

	// base
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape_12.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-10.6,19.9,-10.6,-24.6).s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_13.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(44));

	// shade
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AqEDjQhkAAAAhkIAAj9QAAhkBkAAIUJAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_14.setTransform(77.0244,25,1.0332,1.1033);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.098)").s().p("AqEDjQhkAAAAhkIAAj9QAAhkBkAAIUJAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_15.setTransform(77.0244,24.9896,1.0332,1.1033);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B87700").ss(1,1,1).p("AKdkNI06AAQh4AAAAB5IAAEpQAAB5B4AAIU6AAQB5AAAAh5IAAkpQAAh5h5AAg");
	this.shape_16.setTransform(75,23);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AKdEOI06AAQh4AAAAh5IAAkoQAAh6B4AAIU6AAQB5AAAAB6IAAEoQAAB5h4AAIgBAAg");
	this.shape_17.setTransform(75,23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.298)").s().p("AqwDsQhkgBAAhjIAAkOQAAhlBkAAIVhAAQBkAAAABlIAAEOQAABjhkABg");
	this.shape_18.setTransform(76.5095,26.0049,1.0332,1.1033);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[]},5).to({state:[{t:this.shape_15}]},10).to({state:[]},4).to({state:[{t:this.shape_17},{t:this.shape_16}]},10).to({state:[{t:this.shape_18}]},10).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5,164.5,57);


(lib.PrimaryAlert = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FC6F08").s().p("AgWCXQgDAAgEgDQgDgDAAgEIAAgvQAAgFADgCQAEgDADAAIAtAAQAEAAADADQADACAAAFIAAAvQAAAEgDADQgDADgEAAgAgWAwQgEAAgDgDQgDgDAAgEIgKixQABgEABgCQABgCADgBIAEgCIBAAAIAGACIADADIABAGIgJCxQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(4.25,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E3500").s().p("AAXChIgtAAQgIAAgFgGQgHgGAAgIIAAgvQAAgJAHgGQAFgGAIAAIAtAAQAIAAAGAGQAGAGAAAJIAAAvQAAAIgGAGQgGAGgIAAIAAAAgAgWA6QgIAAgFgFIgBgBQgGgGAAgHIgJiyQAAgGACgEQACgFAFgDQAFgDAFAAIBAAAQAGAAAFADQAEADADAEIAAABQADAEAAAGIgKCyQAAAHgGAGIAAABQgGAFgIAAg");
	this.shape_1.setTransform(4.25,15.0999);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrimaryAlert, new cjs.Rectangle(-1,-1,10.5,32.2), null);


(lib.ObjectRotationIcon_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C9ECF5").s().p("AAXAoIgugmQAAgBgBAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAugmQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAABLIgBACIAAAAIgBAAg");
	this.shape.setTransform(0.4549,-10.8567,0.9381,0.9388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9ECF5").s().p("AgBAYIgmguQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIBLAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgmAuIgCABIgBgBg");
	this.shape_1.setTransform(9.4233,-1.9229,0.9381,0.9388);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C9ECF5").ss(3).p("Ag2gqIAjAAQAYAAARASQASARAAAZIAAAo");
	this.shape_2.setTransform(5.6965,-6.8552,0.9381,0.9388);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9ECF5").s().p("Ag7B4IAAjvIB3AAIAADvg");
	this.shape_3.setTransform(-9.2007,2.9761,0.9381,0.9403);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCE4EE").s().p("Ag7B4IAAjvIB3AAIAADvg");
	this.shape_4.setTransform(-3.5752,8.545,0.9388,0.9381,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ObjectRotationIcon_Disabled, new cjs.Rectangle(-14.8,-14.6,28,28.9), null);


(lib.ObjectRotationIcon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AgogZIAKAAQAYAAAPARQARAPAAAYIAAAK");
	this.shape.setTransform(6.85,-7.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiOCLIAAjhIBxAAIAABvIAABxIAAABgABnAMIgjgrQAAgBgBAAQAAgBABAAQAAAAAAAAQABgBAAAAIAfAAIAoAAIACABQABABAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgkArIgBABIgCgBgAAfg/IgqgkQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAqgkQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAAkIAAAjIgBACIgBAAIgBAAg");
	this.shape_1.setTransform(-0.575,-0.4375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#76DCF4").s().p("Ag3A5IAAhxIBvAAIAABxg");
	this.shape_2.setTransform(2.1,7.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AiOCVQgEAAgDgDQgDgDAAgEIAAjgQAAgFADgCQADgDAEAAIBxAAQAEAAADADQADACAAAFIAABlIBmAAQAEAAADADQADACAAAFIAABxQAAAEgDADQgDACgEABIhtAAIgDAAgABpAXQgEABgFgFIgBgBIgjgrIgCgCQgDgHAEgEQACgFAIAAIAFAAQABgNgIgIIgCgCQgJgJgNAAIAAALQABAFgEADQgDAEgFAAQgDAAgEgDIgqgjQgGgDAAgHQAAgDAEgFIABgCIArgjIACgCQAIgDAEAFQAEACAAAIIAAAKQAjAAAXAYIABACQAWAXAAAhIAQAAQAHAAADAEQADADgBAEQABADgDAEIgjAqQgCAHgGAAIgCgBg");
	this.shape_3.setTransform(-0.5434,-0.4516);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ObjectRotationIcon, new cjs.Rectangle(-15.8,-15.3,30.5,29.8), null);


(lib.NinesliceDropGuide = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF6699").s().p("Ai9C+IAAl7IF7AAIAAF7g");
	this.shape.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NinesliceDropGuide, new cjs.Rectangle(0,0,38,38), null);


(lib.Nineslice_0_3_1024_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AkrAZIAAgxIJXAAIAAAxg");
	this.shape.setTransform(30,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nineslice_0_3_1024_8, new cjs.Rectangle(0,0,60,5), null);


(lib.MinimizeArrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdB5IAAiGIg9AAIBahrIBbBrIg9AAIAACGg");
	this.shape.setTransform(0,12.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAegOIA9AAIhbhqIhaBqIA9AAIAACHIA7AAg");
	this.shape_1.setTransform(0,12.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB5IAAiGIg9AAIBahrIBbBrIg9AAIAACGg");
	this.shape_2.setTransform(0,12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MinimizeArrow, new cjs.Rectangle(-10.1,-1,20.2,28.1), null);


(lib.MaximizeArrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhaAAIA9AAIAAhpIA7AAIAABpIA9AAIhbBqg");
	this.shape.setTransform(0,14.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAehpIg7AAIAABpIg9AAIBaBqIBbhqIg9AAg");
	this.shape_1.setTransform(0,14.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaAAIA9AAIAAhpIA7AAIAABpIA9AAIhbBqg");
	this.shape_2.setTransform(0,14.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaximizeArrow, new cjs.Rectangle(-10.1,0,20.2,27.1), null);


(lib.invisiblebox = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Am3DcIAAm3INvAAIAAG3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.invisiblebox, new cjs.Rectangle(-44,-22,88,44), null);


(lib.IconZoom = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjcBfIAAAAQgngnAAg4QAAg3AngoIAAAAQAognA4AAQA4AAAnAnQAWAWAIAaIA7gQIgFgTIC7gyIASBEIi7AyIgIgcIADAJIg8APIACASQAAA4gnAnIAAAAQgnAog4AAQg5AAgngogAh8hoQgsAAgeAeIgBAAQgeAfAAArQAAArAeAfIABAAQAeAfAsAAQArAAAegfIABAAQAfgfAAgrIgBgQQgCgLgEgJIAAgBQgHgUgRgRQgegegsAAIAAAAg");
	this.shape.setTransform(12.525,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(19,19,20,0.2)").ss(2,1,1).p("AA8g/Ig7AQQgIgagWgWQgngng4AAQg4AAgoAnIAAAAQgnAoAAA3QAAA4AnAnIAAAAQAnAoA5AAQA4AAAngoIAAAAQAngnAAg4QAAgJgBgJIA7gQIgCgIIAHAcIC7gyIgShEIi7Ayg");
	this.shape_1.setTransform(12.525,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcBfIAAAAQgngnAAg4QAAg3AngoIAAAAQAognA4AAQA4AAAnAnQAWAWAIAaIA7gQIgFgTIC7gyIASBEIi7AyIgIgcIADAJIg8APIACASQAAA4gnAnIAAAAQgnAog4AAQg5AAgngogAh8hoQgsAAgeAeIgBAAQgeAfAAArQAAArAeAfIABAAQAeAfAsAAQArAAAegfIABAAQAfgfAAgrIgBgQQgCgLgEgJIAAgBQgHgUgRgRQgegegsAAIAAAAg");
	this.shape_2.setTransform(12.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconZoom, new cjs.Rectangle(-14.5,-14.5,63,29), null);


(lib.IconZap = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag0ARIAVBBIj3heIClANIgUhJICvA9IgRhGID+BqIingRIAXBKg");
	this.shape.setTransform(-1.375,-0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAqgLIivg9IAUBJIilgNID3BeIgVhBIC7BBIgXhKICnARIj+hqg");
	this.shape_1.setTransform(-1.375,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0ARIAVBBIj3heIClANIgUhJICvA9IgRhGID+BqIingRIAXBKg");
	this.shape_2.setTransform(-1.375,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconZap, new cjs.Rectangle(-30.2,-9.6,57.7,18.5), null);


(lib.IconXBlue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#08385E").ss(2,1,1).p("AAvAAIBVhVIguguIhWBWIhVhWIguAuIBWBVIhWBWIAuAuIBVhVIBWBVIAugug");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgtIAuAtAgtAAIAtAu");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAvIgtgvIAtAvIhVBUIgtgtIBVhWIhVhVIAtgtIBVBVIBWhVIAtAtIhUBVIgvgtIAvAtIBUBWIgtAtgAAAAvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconXBlue, new cjs.Rectangle(-14.1,-14.1,28.299999999999997,28.299999999999997), null);


(lib.IconUnpackArrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrgkIAqAYQAGgNAOgOQAbgcAhgIQAsgJAdAbQAOANAGAPQgHgHgMgHQgYgMgeAGQgcAFgRAcQgJAOgFAMIAuAcIhpAog");
	this.shape.setTransform(10.75,7.8109);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#131314").ss(2,1,1).p("AAPhLQghAIgcAcQgNAOgHANIgpgYIAXByIBqgoIgtgcQADgMAJgOQATgcAagFQAfgGAYAMQAMAHAHAHQgGgPgOgNQgdgbgsAJg");
	this.shape_1.setTransform(10.75,7.8109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrgkIAqAYQAGgNAOgOQAbgcAhgIQAsgJAdAbQAOANAGAPQgHgHgMgHQgYgMgeAGQgcAFgRAcQgJAOgFAMIAuAcIhpAog");
	this.shape_2.setTransform(10.75,7.8109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconUnpackArrow, new cjs.Rectangle(-1,-1,23.5,17.6), null);


(lib.IconUndo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CMIAAg8ICJAAQAaAAAPgPIAAAAQAOgRAAgYQAAgbgNgTIAAABQgOgSgaAAIiKAAIAAAWIAAAXIiAhIICAhJIAAAoICKAAQA5AAAeApIAAAAQAaAgAAAyQAAAygeAfIAAAAQgfAig1ABg");
	this.shape.setTransform(-0.725,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AB1gWQANATAAAbQAAAYgOARIAAAAQgPAPgaAAIiJAAIAAA8ICKAAQA1gBAeghIABAAQAeggAAgyQAAgygaggIAAgBQgegog5AAIiKAAIAAgoIiABJICABJIAAgYIAAgWICKAAQAaAAAOARg");
	this.shape_1.setTransform(-0.725,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+CMIAAg8ICJAAQAaAAAPgPIAAAAQAOgRAAgYQAAgbgNgTIAAABQgOgSgaAAIiKAAIAAAWIAAAXIiAhIICAhJIAAAoICKAAQA5AAAeApIAAAAQAaAgAAAyQAAAygeAfIAAAAQgfAig1ABg");
	this.shape_2.setTransform(-0.725,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconUndo, new cjs.Rectangle(-20.7,-16,40,30), null);


(lib.IconTrash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABiCXIjCAAQgQgCgBgMIgPi3QAEgKALgCIDjAAQAMAAAEANIgQC2QAAAOgPAAIgBAAgAA5gcIAKCYQALAGALgGIAJiYQgBgJgKABIgTAAQgLAAAAAIgAhdgcIAKCYQAMAGAMgGIAJiYQgBgJgLABIgTAAQgKAAgCAIgAgSgcIALCYQAKAGALgGIAJiYQgBgJgKABIgRAAQgLAAgCAIgAiGhGIADggQACgEADgCQADgCAEAAIDtAAQAEAAADACQAGADAAADIAEAggAg7h4IAAgeIB3AAIAAAeg");
	this.shape.setTransform(0,-0.1242);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAYgcIgJCYQgMAGgLgGIgKiYQABgIALAAIASAAQALgBABAJgABjgcIgJCYQgMAGgLgGIgKiYQABgIALAAIASAAQALgBABAJgABzg6IjlAAQgKACgEAKIAOC3QABAMARACIDDAAQAPABABgPIAPi2QgEgNgLAAgAB+hsQgEgCgEAAIjtAAQgEAAgDACQgDACgDAEIgCAgIENAAIgEggQAAgDgFgDgAg7iWIB3AAIAAAeIh3AAgAgzgcIgJCYQgLAGgMgGIgKiYQABgIALAAIATAAQAKgBABAJg");
	this.shape_1.setTransform(0,-0.1242);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABiCXIjCAAQgQgCgBgMIgPi3QAEgKALgCIDjAAQAMAAAEANIgQC2QAAAOgPAAIgBAAgAA5gcIAKCYQALAGALgGIAJiYQgBgJgKABIgTAAQgLAAAAAIgAhdgcIAKCYQAMAGAMgGIAJiYQgBgJgLABIgTAAQgKAAgCAIgAgSgcIALCYQAKAGALgGIAJiYQgBgJgKABIgRAAQgLAAgCAIgAiGhGIADggQACgEADgCQADgCAEAAIDtAAQAEAAADACQAGADAAADIAEAggAg7h4IAAgeIB3AAIAAAeg");
	this.shape_2.setTransform(0,-0.1242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconTrash, new cjs.Rectangle(-14.5,-16.2,29,32.2), null);


(lib.IconSwapRowcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAtB7IgDgBIgBgDIAAgaIABgEIADgBIBzAAIADABIABAEIAAAaIgBADIgDABgAggB6IgsgsQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABAAQABgEADAAIAaAAIAAi8IACgDIADgBIAaAAIADABIACADIAAC8IAZAAIADABIACAEIgCADIgrAsIgDABgAh/B7IgEgBIgBgDIAAi9IgaAAQgEAAgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAtgtIACAAIAEAAIAsAtIABACIgBAEIgDABIgbAAIAAC9IgBADIgDABgAAuA1IgDgCIgCgDIAAgaIACgDIADgCIBxAAIAEACIABADIAAAaIgBADIgEACgAAwgRIgFgBIgCgDIAAgbIACgDIAFgBIBsAAIAFABIADADIAAAbIgDADIgFABgAA1hXIgIgBIgEgEIAAgaIAEgDIAIgBIBjAAIAIABIAEADIAAAaIgEAEIgIABg");
	this.shape.setTransform(-0.0167,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ACgh6IgIgBIhjAAIgIABIgEAEIAAAaIAEADIAIACIBjAAIAIgCIAEgDIAAgagAChgzIgFgBIhsAAIgFABIgCADIAAAbIACADIAFABIBsAAIAFgBIADgDIAAgbgACjATIgEgBIhxAAIgDABIgCADIAAAaIACADIADACIBxAAIAEgCIABgDIAAgagACjBaIgDgCIhzAAIgDACIgBADIAAAaIABAEIADABIBzAAIADgBIABgEIAAgagAARBIIgDgBIgZAAIAAi9IgCgEIgDgBIgaAAIgDABIgCAEIAAC9IgaAAQgDAAgBADQgBACACACIAsAtIADABIADgBIArgtIACgDgAhDhHIgDABIgbAAIAAC9IgBADIgDACIgaAAIgEgCIgBgDIAAi9IgaAAQgEAAgBgDQgBgCACgDIAtgsIACgBIAEABIAsAsIABADg");
	this.shape_1.setTransform(-0.0167,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtB7IgDgBIgBgDIAAgaIABgEIADgBIBzAAIADABIABAEIAAAaIgBADIgDABgAggB6IgsgsQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABAAQABgEADAAIAaAAIAAi8IACgDIADgBIAaAAIADABIACADIAAC8IAZAAIADABIACAEIgCADIgrAsIgDABgAh/B7IgEgBIgBgDIAAi9IgaAAQgEAAgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAtgtIACAAIAEAAIAsAtIABACIgBAEIgDABIgbAAIAAC9IgBADIgDABgAAuA1IgDgCIgCgDIAAgaIACgDIADgCIBxAAIAEACIABADIAAAaIgBADIgEACgAAwgRIgFgBIgCgDIAAgbIACgDIAFgBIBsAAIAFABIADADIAAAbIgDADIgFABgAA1hXIgIgBIgEgEIAAgaIAEgDIAIgBIBjAAIAIABIAEADIAAAaIgEAEIgIABg");
	this.shape_2.setTransform(-0.0167,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSwapRowcopy, new cjs.Rectangle(-17.4,-14.5,35.099999999999994,35), null);


(lib.IconStickerCheck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00BA00").s().p("AhMBLQgkgVgWgDIAFgFIAygvIA0AxQARguAXgrQAdgyAZgcIBDAqIABACQgrApgrA1QgsA7gTAqQgVgXgpgWg");
	this.shape.setTransform(13.5,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006A00").s().p("AgQCCQgDgBgCgCQgUgWgngVIAAAAQgjgUgUgDQgEgBgDgDQgCgDAAgEQAAgEADgCIA3g0QADgDAEAAQAEAAADADIAqAmQAPgmATgmIAAAAQAdgzAbgdQACgCAEgBQADAAADACIBEAqIADACIABAEIABADIAAAFIgDAEQgqAogqA0IgBAAQgsA6gSApQgBADgDACIgFABIgCAAg");
	this.shape_1.setTransform(13.4965,11.9908);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconStickerCheck, new cjs.Rectangle(-1,-1,29,26), null);


(lib.IconSpeakerWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhGApIgwAAIAAhRIAwAAIBHhDIAADXgAAuBWQgEgCgBgEQgBgEACgDQACgEAEgBQARgFANgOIABAAQAUgUAAgdQAAgcgUgVQgNgNgSgEQgEgBgCgEQgCgEABgDQABgEAEgDQADgCAEABQAXAGARARQAaAaAAAlQAAAmgaAaIAAAAQgRARgXAGIgCABIgFgCgAAcAyQgEgBgCgDQgCgEABgEQABgEAEgCQAFgDAFgEIAAAAQAKgKAAgPQAAgOgKgKIAAAAQgFgEgFgDQgDgBgCgEQgBgEACgEQABgEAEgBQAEgBAEABQAIAEAHAHIAAAAQAQAQAAAWQAAAXgQAQIAAAAQgHAHgIAEIgEABIgDgBg");
	this.shape.setTransform(0.475,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABdg/QgRgRgXgGQgEgBgDACQgEADgBADQgBAEACAEQACAEAEABQASAEANANQAUAVAAAcQAAAdgUAUIgBABQgNANgRAFQgEABgCAEQgCADABAEQABAEAEACQADACAFgBQAWgGARgRIAAAAQAagaAAgmQAAglgagagAAygmQgHgHgIgEQgEgBgEABQgEABgBAEQgCAEABAEQACAEADABQAFADAFAEIAAAAQAKAKAAAOQAAAPgKAKIAAAAQgFAEgFADQgEACgBAEQgBAEACAEQACADAEACQAEABAEgCQAHgEAHgHIAAAAQAQgQAAgXQAAgWgQgQgAhGApIgwAAIAAhRIAwAAIBHhDIAADXg");
	this.shape_1.setTransform(0.475,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AgXBWQgEgCgBgEQgBgEACgEQACgDAEgCQARgEANgOIAAAAQAUgUAAgdQAAgdgUgUQgMgNgSgFQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABQAWAGARARQAaAaAAAlQAAAlgaAaIAAAAQgRASgVAGIgDAAIgFgBgAgpAyQgEgBgCgEQgCgDABgEQABgEAEgCQAFgDAFgEIAAgBQAKgKAAgOQAAgOgKgKIAAAAQgEgEgFgDQgEgBgCgEQgBgEACgEQABgEAEgBQAEgCAEACQAIAEAHAHIAAgBQAQAQAAAXQAAAXgQAQIAAAAQgHAGgHAEIgFACIgDgBg");
	this.shape_2.setTransform(7.4718,0.0291);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLApIgwAAIAAhRIAwAAIBHhDIAADXg");
	this.shape_3.setTransform(-5.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSpeakerWhite, new cjs.Rectangle(-12.4,-11.8,25.8,23.6), null);


(lib.IconSpeaker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#555555").ss(2,1,1).p("AgmgoQAGADAGAGQANANAAASQAAATgNANQgGAFgGAEAgShMQATAFAPAPQAXAXAAAhQAAAhgXAXQgPAQgTAF");
	this.shape.setTransform(7.475,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#555555").s().p("AgLApIgwAAIAAhRIAwAAIBHhDIAADXg");
	this.shape_1.setTransform(-5.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSpeaker, new cjs.Rectangle(-11.4,-10.8,23.8,21.6), null);


(lib.IconSlice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA3AOQgFgGAAgIQAAgHAFgHQAHgFAIAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgIAAgHgGgAgOAOQgFgGAAgIQAAgHAFgHQAHgFAHAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgFAGgJAAQgHAAgHgGgAhTAOQgGgGAAgIQAAgHAGgHQAFgFAJAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgJAAgFgGg");
	this.shape.setTransform(11.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3B4QgYgGgMgVQgMgWAGgXQAGgYAWgMQAVgMAXAGQAQAEALAMIAlgWIglgUQgLALgQAEQgXAGgVgLQgWgNgGgXQgGgYAMgVQAMgWAYgGQAYgGAVAMQAVAMAHAYQADANgCAMIDRB4QgPANgPABQgPACgRgKIhcg1Ig3AgQACAMgDANQgHAYgVAMQgOAIgPAAQgIAAgIgCgAh4AiQgNAHgDANQgEAOAHAMQAHAMAOAEQANADAMgHQAMgHADgNQAFgOgHgMQgHgMgPgEIgIgBQgJAAgHAFgAhwheQgOADgHAMQgHAMAEAOQADANANAIQALAGANgDQAPgEAHgMQAHgMgFgOQgDgNgMgHQgIgFgJAAIgIACgAAUgaIBSgvQARgJAPABQAPABAPANIhrA+g");
	this.shape_1.setTransform(-6.6,0.1895);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABMABQAAAJgGAFQgFAGgJAAQgIAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAHgABwhDIgcAQIgxAdIgeARIgjgVIBQgvQASgJAOABQAPABAPANgACSABQAAAJgGAFQgFAGgJAAQgIAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAHgADYABQAAAJgGAFQgFAGgJAAQgIAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAHgAjVguQAGAXAWANQAVALAXgGQARgEAKgLIAlAUIglAWQgKgMgRgEQgXgGgVAMQgWAMgGAYQgGAXAMAWQANAVAWAGQAYAHAWgNQAVgMAGgYQAEgNgCgMIA5ggIBaA1QASAKAOgCQAPgBAPgNIjRh4QACgMgEgNQgGgYgVgMQgWgMgYAGQgWAGgNAWQgMAVAGAYgAikheQANgEAMAHQAMAHADANQAFAOgIAMQgGAMgPAEQgNADgMgGQgMgIgEgNQgDgOAHgMQAHgMAOgDgAitAiQgMAHgEANQgDAOAHAMQAHAMAOAEQANADAMgHQAMgHADgNQAFgOgIgMQgGgMgPgEQgNgDgMAHg");
	this.shape_2.setTransform(-1.4,0.1895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AirB4QgYgGgMgVQgMgWAGgXQAGgYAWgMQAVgMAXAGQAQAEALAMIAlgWIglgUQgLALgQAEQgXAGgVgLQgWgNgGgXQgGgYAMgVQAMgWAYgGQAYgGAVAMQAVAMAHAYQADANgCAMIDRB4QgPANgPABQgPACgRgKIhbg1Ig4AgQACAMgDANQgHAYgVAMQgOAIgPAAQgIAAgIgCgAisAiQgNAHgDANQgEAOAHAMQAHAMAOAEQANADAMgHQAMgHADgNQAFgOgHgMQgHgMgPgEIgIgBQgJAAgHAFgAikheQgOADgHAMQgHAMAEAOQADANANAIQALAGANgDQAPgEAHgMQAHgMgFgOQgDgNgMgHQgIgFgJAAIgIACgAC1APQgFgFAAgJQAAgHAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgIAAgHgGgABvAPQgFgFAAgJQAAgHAFgGQAHgGAIAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgIAAgHgGgAAqAPQgGgFAAgJQAAgHAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgJAAgFgGgAgfgaIBRgvQARgJAPABQAPABAPANIgcAQIgxAdIgeARg");
	this.shape_3.setTransform(-1.4,0.1895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSlice, new cjs.Rectangle(-24,-13,55.9,38.8), null);


(lib.iconSkip = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(1,2,2,0.2)").s().p("AjXCBQgFgCgBgGIgHiOQAAgGAEgDIAGgCIAEABIAdANQAVgiAdgZQA6gxBRgDIAJAAQBaAAA/BDQA/BBAABaQAAAFgDACQgDADgEAAIgyAAQgEAAgDgDQgDgDAAgEQAAgegMgdQgKgcgVgTQgTgVgbgNQgbgMgeAAIgFAAQg7ADgnAgQgSAOgNAUIAjAQQAGACAAAGQABAHgFACIh5BVIgGACIgEgBgAjTB4IB5hVIgtgVQAPgbAXgSQArgjA+gDIAFAAQAhAAAbANQAcAMAWAYQAXAWALAcQAMAfAAAgIAyAAQAAhYg8g8Qg8hAhWAAIgIAAQhOAEg3AtQghAbgUAmIglgRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjagWIAlARQAUgmAhgbQA3guBOgDIAIAAQBWAAA8BAQA8A9AABXIgyAAQAAgggMgfQgLgdgXgWQgWgXgbgMQgcgNghAAIgFAAQg+ADgrAiQgWATgQAbIAtAVIh5BVg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconSkip, new cjs.Rectangle(-22.9,-12.9,45.8,25.9), null);


(lib.IconRotateThreeD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibBqQgvgKgbgQQgdgRgBgSIAAg/QAAASAeARQAeAQAzALIADgiIBjBJIhwA7gABIA2QBSgHA0gUQA1gUABgZIAAA/IgBAAQgCAag1AVQg0AUhQAHgAhbAQIAAhoIBbg1IBZA1IAABoIhZA0gAALgbIAABCIA7gjIAAhCgAhHAEIA7AjIAAhCIg7gjgAg8hTIA7AkIABAAIA7gkIg7gjgABugkIAAgzQA9AJAkAQQAlASAAAUQAAAMgOALQgpgYhPgLgAj0gYQAAgUAmgSQAkgQA9gJIAAAzQhPALgpAYQgPgLAAgMg");
	this.shape.setTransform(0,0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ADmgBQgpgYhPgLIAAgzQA9AJAkAQQAlASAAAUQAAAMgOALgABIB3IAAhBQBSgHA1gUQA1gUAAgZIAAA/IAAAAQgCAag1AVQg0AUhRAHgABahYIhag1IhbA1IAABoIBbA0IBag0gAj0gYQAAgUAmgSQAkgQA9gJIAAAzQhQALgpAYQgOgLAAgMgAiUAsQg0gLgdgQQgegRAAgSIAAA/QABASAdARQAbAQAvAKIgDAkIBwg7IhjhJg");
	this.shape_1.setTransform(0,0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibBqQgvgKgbgQQgdgRgBgSIAAg/QAAASAeARQAeAQAzALIADgiIBjBJIhwA7gABIA2QBSgHA0gUQA1gUABgZIAAA/IgBAAQgCAag1AVQg0AUhQAHgAhbAQIAAhoIBbg1IBZA1IAABoIhZA0gAALgbIAABCIA7gjIAAhCgAhHAEIA7AjIAAhCIg7gjgAg8hTIA7AkIABAAIA7gkIg7gjgABugkIAAgzQA9AJAkAQQAlASAAAUQAAAMgOALQgpgYhPgLgAj0gYQAAgUAmgSQAkgQA9gJIAAAzQhPALgpAYQgPgLAAgMg");
	this.shape_2.setTransform(0,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotateThreeD, new cjs.Rectangle(-27,-15,54,31.1), null);


(lib.IconRotateRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACGCBQg4AMhGAAQhYABg/gUQg+gSgDgbIAAg2QABAaA8ATQA9ASBXABIANAAQA5AAAugJIgJgZIBlAVIhBBUgAhgAOIADhzIBkg4IBjA8IgDBzIhlA4gAARgfIgCBJIBDglIAChKgAhKACIBBAnIAChIIhBgpgAg8heIBAAoIACAAIBDgmIhCgogAjDARQAAgVA2gRIAAAqQgbAHgPAKQgMgKAAgLg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAHieIBjA8IgDB0IhlA4Ihig7IADh0gAABBYQhXgBg9gTQg8gTgBgZIAAA1QADAbA+ATQA/ATBYAAQBGAAA4gNIAKAeIBBhVIhlgVIAJAaQguAIg5ABgAjDASQAAgWA2gRIAAAqQgbAIgPAJQgMgJAAgLg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACGCBQg4AMhGAAQhYABg/gUQg+gSgDgbIAAg2QABAaA8ATQA9ASBXABIANAAQA5AAAugJIgJgZIBlAVIhBBUgAhgAOIADhzIBkg4IBjA8IgDBzIhlA4gAARgfIgCBJIBDglIAChKgAhKACIBBAnIAChIIhBgpgAg8heIBAAoIACAAIBDgmIhCgogAjDARQAAgVA2gRIAAAqQgbAHgPAKQgMgKAAgLg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotateRight, new cjs.Rectangle(-21.8,-16.8,43.7,33.7), null);


(lib.IconRotateLeft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjQBKIBlgVIgJAZQAuAJA5AAIANAAQBXgBA9gSQA8gTABgaIAAA2QgDAbg+ASQg/AUhYgBQhGAAg4gMIgKAdgAhmASIgDhzIBjg8IBkA4IADBzIhiA8gAhRAFIBDAlIgChJIhDgmgAAIgfIACBIIBBgnIgChKgAhIhcIBDAmIACAAIBAgoIhDgmgACOAVIAAgqQA2ARAAAVQAAALgMAKQgPgKgbgHg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAABYQBXgBA9gTQA8gTABgZIAAA1QgDAbg+ATQg/AThYAAQhGAAg4gNIgKAeIhBhVIBlgVIgJAaQAuAIA5ABgADEASQAAgWg2gRIAAAqQAbAIAPAJQAMgJAAgLgAgGieIhjA8IADB0IBlA4IBig7IgDh0g");
	this.shape_1.setTransform(-0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjQBKIBlgVIgJAZQAuAJA5AAIANAAQBXgBA9gSQA8gTABgaIAAA2QgDAbg+ASQg/AUhYgBQhGAAg4gMIgKAdgAhmASIgDhzIBjg8IBkA4IADBzIhiA8gAhRAFIBDAlIgChJIhDgmgAAIgfIACBIIBBgnIgChKgAhIhcIBDAmIACAAIBAgoIhDgmgACOAVIAAgqQA2ARAAAVQAAALgMAKQgPgKgbgHg");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotateLeft, new cjs.Rectangle(-21.9,-16.8,43.8,33.7), null);


(lib.IconRotate2AgeAg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#004770").s().p("AiUB2QgxgvAAhGQAAhEAxgwIAAAAIAAAAQAxgxBEAAQBEABAxAwQAwAwAABDIBAAEIhlB1IhXiAIBDAFQgCgqgegeQgggggsAAQgsAAggAgQggAfAAAsQAAAuAgAgQAgAfAsAAIgCAFQgKARgKAQIgLARQgvgKglglg");
	this.shape.setTransform(4.425,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotate2AgeAg, new cjs.Rectangle(-23.3,-23.3,55.2,46.7), null);


(lib.IconRotate = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhFB8QgvgcgPgyIgwAMIA1hjIBfA8IgvANQAKAcAbAQIABAAQAeARAggJIABAAQAegIARgcIAwAdQgdAvg0ANQgUAGgSAAQgjAAghgTgAAfgVIAugMQgKgbgbgPIABAAQgegRghAIIABAAQgiAJgQAdIgFgCIAAABIgsgZQAcgyA4gPQA3gOAxAcQAvAbAQAxIAxgOIg1Big");
	this.shape.setTransform(0,-0.0134);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABFh7Qgygcg3AOQg4APgcAyIAsAZIAAgBIAFACQAQgdAigJIgBAAQAigIAdARIAAAAQAaAPAKAbIguAMIBgA6IA1hiIgxAOQgPgxgvgbgAgpBMQgbgQgKgcIAvgNIhfg8Ig1BjIAwgMQAPAyAvAcQAyAdA4gQQA1gNAcgvIgvgdQgRAcgfAIIgBAAQghAJgegRg");
	this.shape_1.setTransform(0,-0.0134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFB8QgvgcgPgyIgwAMIA1hjIBfA8IgvANQAKAcAbAQIABAAQAeARAggJIABAAQAegIARgcIAwAdQgdAvg0ANQgUAGgSAAQgjAAghgTgAAfgVIAugMQgKgbgbgPIABAAQgegRghAIIABAAQgiAJgQAdIgFgCIAAABIgsgZQAcgyA4gPQA3gOAxAcQAvAbAQAxIAxgOIg1Big");
	this.shape_2.setTransform(0,-0.0134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotate, new cjs.Rectangle(-19,-15.2,38,31.3), null);


(lib.IconReset = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AB6CHIjBAAIAAg8IDAAAQAZgBATgWIAAAAQATgXAAgbQAAgdgSgXQgRgXgZgBIjDAAQgcAAgRAQIAAABQgPAPAAAZIAAANIA2AAIhTB6IhTh6IA0AAIAAgNQAAgzAggfIAAgBQAhgiA3AAIDDAAQA3gBAkAxQAdAnAAAxQAAAwghAoIAAAAQglAtgzAAIgBAAg");
	this.shape.setTransform(-0.5999,-0.5003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AC4ACQAAAbgTAXIAAAAQgTAWgZABIjAAAIAAA8IDBAAQA0AAAlgtIAAAAQAhgoAAgwQAAgxgegnQgjgxg4ABIjCAAQg3AAghAiIAAABQggAfAAAzIAAANIg0AAIBTB6IBTh6Ig2AAIAAgNQAAgZAPgPIAAAAQARgRAcAAIDCAAQAaABARAXQASAXAAAdg");
	this.shape_1.setTransform(-0.5999,-0.5003);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB6CHIjBAAIAAg8IDAAAQAZgBATgWIAAAAQATgXAAgbQAAgdgSgXQgRgXgZgBIjDAAQgcAAgRAQIAAABQgPAPAAAZIAAANIA2AAIhTB6IhTh6IA0AAIAAgNQAAgzAggfIAAgBQAhgiA3AAIDDAAQA3gBAkAxQAdAnAAAxQAAAwghAoIAAAAQglAtgzAAIgBAAg");
	this.shape_2.setTransform(-0.5999,-0.5003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconReset, new cjs.Rectangle(-26,-15,50.8,29), null);


(lib.IconQuestionMark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBxIAAgsIArAAIAAAsgAgiAiIAAgEIgBgEQAAgMAEgJQADgHAFgGQAFgHAGgEIATgOIAHgGIAEgHIACgJQAAgLgIgHQgIgHgRAAQgMAAgNADQgMADgKAFIAAggIAMgFIAagFIAOgBQAPAAANAEQANAEAJAHQAJAHAFALQAFAKAAANQAAAKgDAHQgCAHgDAGIgJAJIggAWQgEAFgDAGQgDAGAAAJIAAADg");
	this.shape.setTransform(9.775,15.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AA4hPQgFgLgJgHQgJgHgNgEQgNgEgPAAIgOABIgaAFIgMAFIAAAgQAKgFAMgDQANgDAMAAQARAAAIAHQAIAHAAALIgCAJIgEAHIgHAGIgTAOQgGAEgFAHQgFAGgDAHQgEAJAAAMIABAEIAAAEIAkAAIAAgDQAAgJADgGQADgGAEgFIAggWIAJgJQADgGACgHQADgHAAgKQAAgNgFgKgAglBxIArAAIAAgsIgrAAg");
	this.shape_1.setTransform(9.775,15.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBxIAAgsIArAAIAAAsgAgiAiIAAgEIgBgEQAAgMAEgJQADgHAFgGQAFgHAGgEIATgOIAHgGIAEgHIACgJQAAgLgIgHQgIgHgRAAQgMAAgNADQgMADgKAFIAAggIAMgFIAagFIAOgBQAPAAANAEQANAEAJAHQAJAHAFALQAFAKAAANQAAAKgDAHQgCAHgDAGIgJAJIggAWQgEAFgDAGQgDAGAAAJIAAADg");
	this.shape_2.setTransform(9.775,15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconQuestionMark, new cjs.Rectangle(2.7,3.7,14.2,24.6), null);


(lib.IconPlus = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWBGIAAgxIgvAAIAAgpIAvAAIAAgxIAsAAIAAAwIAwAAIAAAqIgwAAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlus, new cjs.Rectangle(-7,-7,14,14), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahfh2IC/B2Ii/B3g");
	this.shape.setTransform(3.55,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AhfB3IC/h3Ii/h2g");
	this.shape_1.setTransform(3.55,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ahfh2IC/B2Ii/B3g");
	this.shape_2.setTransform(3.55,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlay, new cjs.Rectangle(-7,-13,21.1,25.8), null);


(lib.IconPause = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAeBaIAAizIAyAAIAACzgAhPBaIAAizIAyAAIAACzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABQhZIAACzIgyAAIAAizgAgdhZIAACzIgyAAIAAizg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBaIAAizIAyAAIAACzgAhPBaIAAizIAyAAIAACzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPause, new cjs.Rectangle(-9,-10,18,20), null);


(lib.IconPack = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCQQgggHgdgJIgZgHQgBgUgBgZQABg0ALgZQAMgaATgZQAIgMAKgIIA0gMIgVgnIBggXIgdBFIA0APIAcAuIAKB9IgtAdQgRAEgYACQgWADgRAAQgVAAgPgDgAAoBlIgMg4IAxgfIg5gHIgOg2IgXA0Ig5gEIApAnIgUA1IAxgcIAsAkg");
	this.shape.setTransform(12.55,-0.681);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHCKQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAiFBrQgHgGAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAGQgHAIgKAAQgKAAgHgIgAgbBaQgHgGAAgKQAAgLAHgHQAHgGAKAAQAKAAAGAGQAHAHAAALQAAAKgHAGQgGAHgKAAQgKAAgHgHgAhHggQAMg8ApgNQAegKAbAHQAOADAHAGIAMgtIBFBoIhtAmIANgwQgHgGgNgFQgZgKgYAJQgXAHgRApQgIATgEATQgCgaAHgeg");
	this.shape_1.setTransform(-12.925,-0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABnh6IBhgXIgdBFIA0APIAbAuIAKB9IgtAdQgQAEgYACQguAFgfgFQgfgHgegJIgYgHQgCgUAAgZQABg0ALgZQAMgaASgZQAJgMAJgIIA0gMgAB1AGIg5gEIAqAnIgUA1IAxgcIAtAkIgMg4IAxgfIg5gHIgPg2gAg7hlQgHgGgNgDQgbgHggAKQgoANgNA8QgGAeACAaQAEgTAIgTQARgpAWgHQAZgJAZAKQANAFAIAGIgNAwIBsgmIhFhogAhxA2QAHAHAAALQAAAKgHAGQgGAHgLAAQgKAAgHgHQgGgGAAgKQAAgLAGgHQAHgGAKAAQALAAAGAGgAicBmQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHgAjbBpQgGAIgKAAQgKAAgIgIQgGgGAAgKQAAgKAGgHQAIgHAKAAQAKAAAGAHQAIAHAAAKQAAAKgIAGg");
	this.shape_2.setTransform(-1,-0.756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABiCRQgggHgdgJIgYgHQgCgUAAgZQABg0ALgZQALgaATgZQAJgMAJgIIA0gMIgUgnIBhgXIgeBFIA0APIAcAuIAKB9IgtAdQgQAEgYACQgWACgTAAQgUAAgQgCgACwBmIgMg4IAxgfIg5gHIgPg2IgYA0Ig5gEIAqAnIgVA1IAygcIAtAkgAi+CIQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAj9BpQgGgGAAgKQAAgKAGgHQAIgHAKAAQAKAAAGAHQAIAHAAAKQAAAKgIAGQgGAIgKAAQgKAAgIgIgAiTBYQgGgGAAgKQAAgLAGgHQAIgGAKAAQAKAAAHAGQAGAHABALQgBAKgGAGQgHAHgKAAQgKAAgIgHgAi/giQANg8AogNQAggKAbAHQANADAIAGIALgtIBFBoIhsAmIANgwQgIgGgMgFQgagKgZAJQgWAHgRApQgIATgEATQgCgaAGgeg");
	this.shape_3.setTransform(-1,-0.756);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPack, new cjs.Rectangle(-28,-16.5,63.8,35.2), null);


(lib.IconNext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABGAyIkDAAIAAhjIEDAAIAAg8IB4BtIh4Bug");
	this.shape.setTransform(-1,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABGhtIB4BtIh4BuIAAg8IkDAAIAAhjIEDAAg");
	this.shape_1.setTransform(-1,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABGAyIkDAAIAAhjIEDAAIAAg8IB4BtIh4Bug");
	this.shape_2.setTransform(-1,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconNext, new cjs.Rectangle(-23.5,-12,42.5,24), null);


(lib.iconNarration = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhABXIAhgMQALgFAHgJIgOAAQgdAAgVgVIgQgWQgEgMAAgPQAAgaARgUIAIgIIAFgEIAdgLIABAAIA4gIIABAAIAIAAQAdgBAUAVQALAKAGANIAEAbIAAAHQAAAdgUAUQgVAVgdAAIgHAAQgFAMgMAHQgKAIgOgBgAAogMQgFAEAAAHQAAAFAFAEQADAFAHAAQAGAAAFgFQAEgEABgFQgBgHgEgEQgFgFgGABQgHgBgDAFgAgJgMQgEAEAAAHQAAAFAEAEQAFAFAFAAQAGAAAFgFQAEgEAAgFQAAgHgEgEQgFgFgGABQgFgBgFAFgAg8gMQgFAEAAAHQAAAFAFAEQAEAFAHAAQAGAAAEgFQAFgEAAgFQAAgHgFgEQgEgFgGABQgHgBgEAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(1,2,2,0.2)").s().p("AhABhQgIAAgCgIQAAgIAHgDIAXgJQgbgFgTgXQgSgVAAgdQAAgeAVgWQATgYAegDIA3gIIALAAQAiAAAXAXQAYAYAAAhIAAAHQAAAhgYAYQgXAXgiAAIgBAAQgIAMgMAIQgMAGgPAAgAglhOIgBAAIgdALIgFAEIgJAIQgRAUAAAaQAAAOAFANIAQAWQAVAVAdAAIAOAAQgHAJgLAFIghAMIAsAAQAOABAKgIQAMgHAFgMIAHAAQAdAAAVgVQAUgUAAgdIAAgHIgEgbQgGgNgLgKQgUgVgdABIgIAAIgBAAgAAoAIQgFgEAAgFQAAgHAFgEQADgFAHABQAGgBAFAFQAEAEABAHQgBAFgEAEQgFAFgGAAQgHAAgDgFgAAtgBQAAAEAFAAQAGAAAAgEQAAgGgGABQgFgBAAAGgAgJAIQgEgEAAgFQAAgHAEgEQAFgFAFABQAGgBAFAFQAEAEAAAHQAAAFgEAEQgFAFgGAAQgFAAgFgFgAgEgBQABAEAEAAQAFAAAAgEQAAgGgFABQgEgBgBAGgAg8AIQgFgEAAgFQAAgHAFgEQAEgFAHABQAGgBAEAFQAFAEAAAHQAAAFgFAEQgEAFgGAAQgHAAgEgFgAg3gBQAAAEAGAAQAFAAAAgEQAAgGgFABQgGgBAAAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconNarration, new cjs.Rectangle(-10.8,-9.7,21.700000000000003,19.5), null);


(lib.iconList = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(1,2,2,0.2)").s().p("AgJBYQgLAAgIgIQgHgHAAgLQAAgKAHgIQAIgIALABIBJAAQAKgBAJAIQAHAIAAAKQAAALgHAHQgJAIgKAAgAgVAzQgEAFAAAGQAAAHAEAFQAFAEAHAAIBJAAQAHAAAEgEQAFgFAAgHQAAgGgFgFQgEgFgHABIhJAAQgHgBgFAFgAhSBQQgHgHAAgLQAAgKAHgIQAIgIAKABQALgBAIAIQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIgAhLAzQgEAFAAAGQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgGgEgFQgEgFgIABQgGgBgFAFgAgJAaQgLAAgIgHQgHgIAAgLQAAgJAHgIQAIgIALABIBJAAQAKgBAJAIQAHAIAAAJQAAALgHAIQgJAHgKAAgAgVgKQgEAFAAAFQAAAHAEAFQAFAEAHAAIBJAAQAHAAAEgEQAFgGAAgGQAAgFgFgFQgEgFgHABIhJAAQgHgBgFAFgAhSATQgHgIAAgLQAAgJAHgIQAIgIAKABQALgBAIAIQAHAIAAAJQAAALgHAIQgIAHgLAAQgKAAgIgHgAhLgKQgEAFAAAFQAAAGAEAGQAFAEAGAAQAIAAAEgEQAEgFAAgHQAAgFgEgFQgFgFgHABQgGgBgFAFgAgJgjQgLAAgIgHQgHgIAAgLQAAgKAHgIQAIgIALAAIBJAAQAKAAAJAIQAHAIAAAKQAAALgHAIQgJAHgKAAgAgVhIQgEAFAAAGQAAAHAEAFQAFAEAHAAIBJAAQAHAAAEgEQAFgFAAgHQAAgGgFgFQgEgFgHAAIhJAAQgHAAgFAFgAhSgqQgHgIAAgLQAAgKAHgIQAIgIAKAAQALAAAIAIQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgIgHgAhLhIQgEAFAAAGQAAAHAEAFQAFAEAGAAQAIAAAEgEQAEgFAAgHQAAgGgEgFQgFgFgHAAQgGAAgFAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBOQgHAAgFgEQgEgFAAgHQAAgGAEgFQAFgFAHABIBJAAQAHgBAEAFQAFAFAAAGQAAAHgFAFQgEAEgHAAgAhLBKQgEgFAAgHQAAgGAEgFQAFgFAGABQAIgBAEAFQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEgAgJAQQgHAAgFgEQgEgFAAgHQAAgFAEgFQAFgFAHABIBJAAQAHgBAEAFQAFAFAAAFQAAAGgFAGQgEAEgHAAgAhLAMQgEgGAAgGQAAgFAEgFQAFgFAGABQAHgBAFAFQAEAFAAAFQAAAHgEAFQgEAEgIAAQgGAAgFgEgAgJgtQgHAAgFgEQgEgFAAgHQAAgGAEgFQAFgFAHAAIBJAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAEgHAAgAhLgxQgEgFAAgHQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgEAEgIAAQgGAAgFgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconList, new cjs.Rectangle(-9,-8.8,18,17.6), null);


(lib.IconJump = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgrA0QhJhQhFgBQhFABhAAnQggAUgSATQAPgbAggbQA8g5BMAAQBKAABJBBQAkAhAUAgQARghAjgjQBFhHBcgMIAAgyICKBQIiKBPIAAgvQhhAGg/BAQgTAVgRAdIgTAhQgWgoglgpg");
	this.shape.setTransform(-0.1,-0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(19,19,20,0.2)").ss(2,1,1).p("ABGABQgjAjgQAiQgUghglghQhIhBhMAAQhLAAg9A5QgfAbgPAcQASgUAggUQBAgnBEAAQBGAABJBQQAlApAWAoQAKgSAJgPQARgdAUgVQA+hABigGIAAAvICJhPIiJhQIAAAyQhcAMhGBHg");
	this.shape_1.setTransform(-0.1,-0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA0QhJhQhFgBQhFABhAAnQggAUgSATQAPgbAggbQA8g5BMAAQBKAABJBBQAkAhAUAgQARghAjgjQBFhHBcgMIAAgyICKBQIiKBPIAAgvQhhAGg/BAQgTAVgRAdIgTAhQgWgoglgpg");
	this.shape_2.setTransform(-0.1,-0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconJump, new cjs.Rectangle(-38,-14.7,75.8,28.6), null);


(lib.IconImpossibleTextEs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 6 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAgIAIgRQALAMAKAAQAGAAACgCQAEgDAAgEQAAgDgDgCIgLgFQgLgDgFgEQgHgGAAgLQAAgMAJgIQAIgIAOAAQAPAAALAKIgJAQQgIgIgJAAQgDAAgDACQgCACgBADQABADACACIALAFQAKADAEAEQAJAFgBAMQABAOgKAIQgJAIgOAAQgSAAgMgNgAhLAgQgNgMAAgUQAAgSANgNQAMgNATAAQAUAAAMANQAMANAAASQAAAUgMAMQgMANgUAAQgTAAgMgNgAg7gQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAJAAAHgHQAGgHAAgKQAAgJgGgHQgHgHgJAAQgJAAgGAHgAD9ArIAAhVIAyAAIAAARIgcAAIAAAQIAZAAIAAAQIgZAAIAAATIAdAAIAAARgADDArIAAhVIAXAAIAABCIAZAAIAAATgAB3ArIAAhVIAeAAIALAAQAIACAFAFQAFAGAAAJQAAANgLAFQAHABAFAFQAFAFAAAJQAAANgKAHQgHAFgOAAgACMAaIAJAAQAMAAAAgKQAAgDgCgCQgCgDgEAAIgEgBIgJAAgACMgJIAHAAQAFAAACgCQADgCAAgEQAAgIgKAAIgHAAgABSArIAAhVIAWAAIAABVgAifArIAAhVIAeAAIALAAQAKACAGAHQAFAIAAALQAAAOgHAGQgIAHgOAAIgLAAIAAAegAiJgEIAGAAQAFAAAEgDQACgDAAgFQAAgJgLAAIgGAAgAjAArIgFgvIABgKQgBAMgDAFIgOAoIgNAAIgOgoIgFgRIACAPIgFAqIgWAAIALhVIAWAAIAPAqQACAGABANQABgOABgFIAQgqIAVAAIAKBVgAkvArIAAhVIAVAAIAABVg");
	this.shape.setTransform(-4.15,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconImpossibleTextEs, new cjs.Rectangle(-37.2,-5.3,66.4,14.899999999999999), null);


(lib.IconImpossibleTextEn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 6 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqAgIAIgRQALAMAKAAQAGAAACgCQADgDABgEQAAgDgDgCIgLgFQgLgDgFgEQgHgGgBgLQABgMAIgIQAKgIANAAQAPAAALAKIgIAQQgJgIgJAAQgDAAgDACQgCACAAADQAAADACACIAKAFQALADAEAEQAJAFgBAMQABAOgJAIQgKAIgOAAQgSAAgMgNgAgbAgIAIgRQAKAMALAAQAEAAADgCQAEgDAAgEQgBgDgCgCIgKgFQgLgDgEgEQgIgGAAgLQAAgMAJgIQAIgIANAAQAPAAALAKIgJAQQgJgIgIAAQgEAAgCACQgBACgBADQABADABACIALAFQAKADAEAEQAJAFgBAMQABAOgKAIQgIAIgPAAQgRAAgMgNgAhvAgQgMgMAAgUQAAgSAMgNQANgNAUAAQATAAAMANQAMANAAASQAAAUgMAMQgMANgTAAQgUAAgNgNgAhegQQgHAHAAAJQAAAKAHAHQAGAHAKAAQAIAAAHgHQAGgHAAgKQAAgJgGgHQgHgHgIAAQgKAAgGAHgAEgArIAAhVIAyAAIAAARIgcAAIAAAQIAZAAIAAAQIgZAAIAAATIAdAAIAAARgADmArIAAhVIAWAAIAABCIAaAAIAAATgACZArIAAhVIAfAAIALAAQAIACAFAFQAFAGAAAJQAAANgLAFQAHABAFAFQAFAFAAAJQAAANgKAHQgHAFgOAAgACwAaIAIAAQANAAgBgKQAAgDgBgCQgDgDgEAAIgEgBIgIAAgACwgJIAGAAQAEAAADgCQADgCAAgEQAAgIgKAAIgGAAgAB1ArIAAhVIAWAAIAABVgAjCArIAAhVIAeAAIALAAQAKACAFAHQAGAIAAALQAAAOgHAGQgIAHgOAAIgLAAIAAAegAisgEIAGAAQAGAAADgDQACgDAAgFQAAgJgLAAIgGAAgAjjArIgEgvIAAgKQgBAMgDAFIgOAoIgNAAIgOgoIgFgRIACAPIgFAqIgWAAIALhVIAWAAIAPAqQACAGABANQAAgOACgFIAQgqIAVAAIAKBVgAlSArIAAhVIAVAAIAABVg");
	this.shape.setTransform(-4.15,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconImpossibleTextEn, new cjs.Rectangle(-40.7,-5.3,73.4,14.899999999999999), null);


(lib.IconHelperArrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABVAvIkDAAIAAiEIAyAAIAABDIDRAAIAAgqIBaBIIhaBKg");
	this.shape.setTransform(17.525,8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconHelperArrow, new cjs.Rectangle(0,0,35.1,17.2), null);


(lib.IconHammer2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAdIALgOIgnguQgMgOgXAOIgFgGIgMAJIAJALIgYASQgcgRgLgdIAXgTIAIAJIAMgJIgEgGIABgCQAHgYAXgSQAhgYAyAFQAPAAANAEQgBADABADIgTAEQgRAFgIAMQgKALABAKIAAACQACAQAGAHIAmAvIAOgHIBbBrQgNAlgrAHg");
	this.shape.setTransform(-1.025,0.4895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAjgJIgmgvQgGgHgCgQQAAgBAAgBQgBgKAKgLQAIgMARgFQAEgBAPgDQgBgDABgDQgNgEgPAAQgygFghAYQgXASgHAYQgBABAAABIAEAGIgMAJIgIgJIgXATQALAdAcARIAYgSIgJgLIAMgJIAFAGQAXgOAMAOIAnAuIgLAOIBZBqQArgHANglIhbhrg");
	this.shape_1.setTransform(-1.025,0.4895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAdIALgOIgnguQgMgOgXAOIgFgGIgMAJIAJALIgYASQgcgRgLgdIAXgTIAIAJIAMgJIgEgGIABgCQAHgYAXgSQAhgYAyAFQAPAAANAEQgBADABADIgTAEQgRAFgIAMQgKALABAKIAAACQACAQAGAHIAmAvIAOgHIBbBrQgNAlgrAHg");
	this.shape_2.setTransform(-1.025,0.4895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconHammer2, new cjs.Rectangle(-16,-14,30,29), null);


(lib.IconGlossaryDark = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#505050").s().p("AiLB0IAAgPIEXAAIAAAPgAiLBeIAAgLIAAg9IAAgQIAAhgIAWAAQAJgCAIgDIAfgQQAegOAoAiQAogiAeAOIAfAQQAIADAJACIAVAAIAACtIAAALgAAIBLIAtAAIAFAAIAuAAIgJgEIgBgBIgcgPQgGgCgGAAQgUAAgaAWgAhmBLIAhAAIANAAIADAAIAJAAIAmAAQgigdgYAJIgdAPIAAABIgBAAIgIAEgABHApQAOAGARAKQAJAEALABIAAiIQgPAAgMgGIgBgBQgPgKgNgFQgYgKgiAdIAACDQAZgRAUAAQAKAAAIAEgAh4hKIAACIQALgBAJgEQARgKAOgGQAbgNAkAaIAAiDQgigdgYAKQgNAFgQAKIAAABIgBAAQgLAGgPAAg");
	this.shape.setTransform(0,-0.3792);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconGlossaryDark, new cjs.Rectangle(-17.3,-12.1,34.6,24.6), null);


(lib.IconGlossary = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AkxCAIAAjgIAdAAQAKgBALgFQAUgMARgIQAngSAzArQAzgrAmASQARAIAWAMIAGADQAXgUAgAAQAiAAAZAYQAZAZAAAjQAAARgGAPIAdAQIAGgLICEBMIgYAqIiFhMIAHgLIgegRIgFAHQgZAYgjABIAAgBIgOgBIAABSgAACBuIgLgFIAAAAIgBAAQgUgMgRgHQgdgMgqAkIB4AAIAAAAgAkCBuIB4AAQgqgkgeAMQgQAHgUAMIAAAAIgBAAIgLAFgAgnBDQARAIAWAMQALAGANABIAAg3QgMgGgKgKQgYgXABgjIgBAAQAAgbAPgVIgCgBIAAAAIgBAAQgUgMgRgHQgdgMgqAkIAACjQAegWAaAAQAMAAALAFgAkZhLIAACpQAOgBAMgGQAUgMARgIQAjgQAtAhIAAijQgqgkgeAMQgQAHgUAMIAAAAIgBAAQgQAIgSABgAA9hfQgZAAgSARQgRASAAAZQAAAZARAQQASASAZAAQAZAAASgSQARgQAAgZQAAgZgRgSQgSgRgZgBg");
	this.shape.setTransform(2.6,-1.1656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(19,19,20,0.2)").ss(2,1,1).p("AAAhmQgWgMgRgIQgmgSgzArQgzgrgnASQgRAIgVAMQgKAFgLABIgcAAIAADgIFfAAIAAhSQAHABAIAAIAAABQAjgBAYgYQADgDADgEIAeARIgGALICEBMIAYgqIiEhMIgGALIgdgQQAGgPAAgRQAAgjgZgZQgZgYgiAAQggAAgXAUQgEgBgCgCg");
	this.shape_1.setTransform(2.6,-1.1656);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkxCAIAAjgIAdAAQAKgBALgFQAUgMARgIQAngSAzArQAzgrAmASQARAIAWAMIAGADQAXgUAgAAQAiAAAZAYQAZAZAAAjQAAARgGAPIAdAQIAGgLICEBMIgYAqIiFhMIAHgLIgegRIgFAHQgZAYgjABIAAgBIgOgBIAABSgAh2BuIB4AAIgLgFIAAAAIgBAAQgUgMgRgHQgHgDgIAAQgZAAgfAbgAkCBuIB4AAQgqgkgeAMQgQAHgUAMIAAAAIgBAAIgLAFgAgnBDQARAIAWAMQALAGANABIAAg3QgMgGgKgKQgYgXABgjIgBAAQAAgbAPgVIgCgBIAAAAIgBAAQgUgMgRgHQgdgMgqAkIAACjQAegWAaAAQAMAAALAFgAkZhLIAACpQAOgBAMgGQAUgMARgIQAjgQAtAhIAAijQgqgkgeAMQgQAHgUAMIAAAAIgBAAQgQAIgSABgAA9hfQgZAAgSARQgRASAAAZQAAAZARAQQASASAZAAQAZAAASgSQARgQAAgZQAAgZgRgSQgSgRgZgBg");
	this.shape_2.setTransform(2.6,-1.1656);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconGlossary, new cjs.Rectangle(-30.1,-18.5,64.30000000000001,31.2), null);


(lib.IconFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BfQgXgYAAgkQAAgdAohBQAUghATgbQAUAbAUAiQAoBBAAAcQAAAjgXAZQgYAZghAAQggAAgYgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAAh3QAUAbAUAhQAoBCAAAcQAAAjgXAZQgYAZghAAQggAAgYgZQgXgYAAgkQAAgdAohBQATgiAUgag");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BfQgXgYAAgkQAAgdAohBQAUghATgbQAUAbAUAiQAoBBAAAcQAAAjgXAZQgYAZghAAQggAAgYgZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFill, new cjs.Rectangle(-9,-13,18,26), null);


(lib.IconEye_Purple_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8484E1").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8484E1").s().p("AAABkQhGAAgzgzQgWgWgNgbQANgaAWgXQAzgyBGAAQBHAAAzAyQAWAXANAaQgNAbgWAWQgzAzhHAAIAAAAgAhfgmQgUASgJAUQAJAVAUARQAoAlA4AAQA4AAAoglQATgRALgVQgLgUgTgSQgoglg4AAQg4AAgoAlg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglg");
	this.shape_3.setTransform(0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEye_Purple_Over, new cjs.Rectangle(-15.7,-10,31.4,20), null);


(lib.IconEye_Purple_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5454AA").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5454AA").s().p("AAABkQhGAAgzgzQgWgWgNgbQANgaAWgXQAzgyBGAAQBHAAAzAyQAWAXANAaQgNAbgWAWQgzAzhHAAIAAAAgAhfgmQgUASgJAUQAJAVAUARQAoAlA4AAQA4AAAoglQATgRALgVQgLgUgTgSQgoglg4AAQg4AAgoAlg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglg");
	this.shape_3.setTransform(0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEye_Purple_Down, new cjs.Rectangle(-15.7,-10,31.4,20), null);


(lib.IconEye_Purple_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8394DE").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8394DE").s().p("AAABkQhGAAgzgzQgWgWgNgbQANgaAWgXQAzgyBGAAQBHAAAzAyQAWAXANAaQgNAbgWAWQgzAzhHAAIAAAAgAhfgmQgUASgJAUQAJAVAUARQAoAlA4AAQA4AAAoglQATgRALgVQgLgUgTgSQgoglg4AAQg4AAgoAlg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglg");
	this.shape_3.setTransform(0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEye_Purple_Disabled, new cjs.Rectangle(-15.7,-10,31.4,20), null);


(lib.IconEye_Purple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglg");
	this.shape_2.setTransform(0.05,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6666CC").s().p("AAABkQhGAAgzgzQgWgWgNgbQANgaAWgXQAzgyBGAAQBHAAAzAyQAWAXANAaQgNAbgWAWQgzAzhHAAIAAAAgAhfgmQgUASgJAUQAJAVAUARQAoAlA4AAQA4AAAoglQATgRALgVQgLgUgTgSQgoglg4AAQg4AAgoAlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEye_Purple, new cjs.Rectangle(-15.7,-10,31.4,20), null);


(lib.IconEye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglgAgqgpQgSARAAAYQAAAaASARQARASAZAAQAZAAARgSQASgRAAgaQAAgYgSgRQgRgSgZAAQgZAAgRASgAgigFQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAGAGAAAJQAAAIgGAFQgFAGgIgBQgJABgGgGg");
	this.shape.setTransform(0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AB+AAQgKAVgUASQgnAkg5AAQg3AAgpgkQgTgSgKgVQAKgUATgRQApglA3AAQA5AAAnAlQAUARAKAUg");
	this.shape_1.setTransform(0.05,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgAmQgTgRgKgVQAKgUATgRQAoglA4AAQA5AAAoAlQATARAKAUQgKAVgTARQgoAlg5AAQg4AAgoglgAgqgpQgSARAAAYQAAAaASARQARASAZAAQAZAAARgSQASgRAAgaQAAgYgSgRQgRgSgZAAQgZAAgRASgAgigFQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAGAGAAAJQAAAIgGAFQgFAGgIgBQgJABgGgGg");
	this.shape_2.setTransform(0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEye, new cjs.Rectangle(-13.5,-8.5,27.2,17), null);


(lib.IconElipses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#555555").s().p("ABJASQgIgIAAgKQAAgKAIgGQAGgIALAAQAKAAAIAIQAHAGAAAKQAAAKgHAIQgIAHgKAAQgLAAgGgHgAgQASQgIgIAAgKQAAgKAIgGQAGgIAKAAQAKAAAIAIQAHAGAAAKQAAAKgHAIQgIAHgKAAQgKAAgGgHgAhqASQgIgIAAgKQAAgKAIgGQAGgIALAAQAKAAAIAIQAHAGAAAKQAAAKgHAIQgIAHgKAAQgLAAgGgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconElipses, new cjs.Rectangle(-11.5,-2.5,23,5), null);


(lib.IconDrag = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABSBBIihAAIAAAtIiMhuICMhtIAAAsIChAAIAAgsICKBtIiKBug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABShtICKBtIiKBuIAAgtIiiAAIAAAtIiLhuICLhtIAAAsICiAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSBBIihAAIAAAtIiMhuICMhtIAAAsIChAAIAAgsICKBtIiKBug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconDrag, new cjs.Rectangle(-23,-12,46,24), null);


(lib.IconDig = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhaCBIgCgBQghgZAHgsQAEgcAQgcIAXggIA0AjIA4hRIgagRIAZgvIBYA+IgjAmIgbgTIg5BRIAyAkQgeAyglAVQgTAKgSAAQgUAAgRgLgAAbhiIA3AmIAQgSIg8gpg");
	this.shape.setTransform(0.9888,-0.0056);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAHhcIAZgvIBYA+IgjAmIgbgTIg5BRIAyAkQgeAyglAVQgoAVgigWIgCgBQghgZAHgsQAEgcAQgcIAXggIA0AjIA4hRg");
	this.shape_1.setTransform(0.9888,-0.0056);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaCBIgCgBQghgZAHgsQAEgcAQgcIAXggIA0AjIA4hRIgagRIAZgvIBYA+IgjAmIgbgTIg5BRIAyAkQgeAyglAVQgTAKgSAAQgUAAgRgLgAAbhiIA3AmIAQgSIg8gpg");
	this.shape_2.setTransform(0.9888,-0.0056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconDig, new cjs.Rectangle(-12,-15,26,30), null);


(lib.IconContinue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABkhtIB4BtIh4BugAAAAZQgJgKAAgPQAAgNAJgLQALgKAOAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAKgOAAQgOAAgLgKgAhoAZQgKgKAAgPQAAgNAKgLQAKgKAPAAQAPAAAJAKQALALAAANQAAAPgLAKQgJAKgPAAQgPAAgKgKgAjRAZQgKgKAAgPQAAgNAKgLQAKgKAPAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgPAAgKgKg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAZgiQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgOAAgLgKQgJgKAAgPQAAgNAJgLQALgKAOAAgADcAAIh4BuIAAjbgAiggYQALALAAANQAAAPgLAKQgKAKgOAAQgPAAgKgKQgKgKAAgPQAAgNAKgLQAKgKAPAAQAOAAAKAKgAg3gYQALALAAANQAAAPgLAKQgKAKgOAAQgPAAgKgKQgKgKAAgPQAAgNAKgLQAKgKAPAAQAOAAAKAKg");
	this.shape_1.setTransform(0,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABkhtIB4BtIh4BugAAAAZQgJgKAAgPQAAgNAJgLQALgKAOAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAKgOAAQgOAAgLgKgAhoAZQgKgKAAgPQAAgNAKgLQAKgKAPAAQAPAAAJAKQALALAAANQAAAPgLAKQgJAKgPAAQgPAAgKgKgAjRAZQgKgKAAgPQAAgNAKgLQAKgKAPAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgPAAgKgKg");
	this.shape_2.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconContinue, new cjs.Rectangle(-23.5,-12,46.5,24), null);


(lib.IconCheckChoose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhsBOQgggXgjgJIA8g0QARAKAQAPQANANAUAZQAth0BghTIBUA7QhIAjg6BBQgtAygqBMQgkgrgfgWg");
	this.shape.setTransform(0.425,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABciOQhgBTgtB0QgUgZgNgNQgQgQgRgJIg8A0QAjAIAgAYQAfAWAkArQAqhMAtgzQA6hABIgkg");
	this.shape_1.setTransform(0.425,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBOQgggXgjgJIA8g0QARAKAQAPQANANAUAZQAth0BghTIBUA7QhIAjg6BBQgtAygqBMQgkgrgfgWg");
	this.shape_2.setTransform(0.425,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheckChoose, new cjs.Rectangle(-18.1,-14,37.1,30.6), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAoIA5gyQAiAUAkArQAqhtBbhOIBPA3QhDAig3A8QgsAwgoBIQhDhQhCgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ABbiGQhbBOgrBuQgjgsgjgUIg4AyQBCAPBDBQQAohIAsgvQA3g+BDghg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipAoIA5gyQAiAUAkArQAqhtBbhOIBPA3QhDAig3A8QgsAwgoBIQhDhQhCgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheck, new cjs.Rectangle(-18,-14.5,36,29), null);


(lib.IconCard2NumbergramAgAg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgYgYQgIAJAAAMQAAAMAIAIQAJAJAMAAQAMAAAIgJQAJgIAAgMQAAgMgJgJQgIgJgMAAQgMAAgJAJg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AiFh3IELAAQAkAAAAAiIAACrQAAAigkAAIkLAAQgkAAAAgiIAAirQAAgiAkAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgYgYQgIAJAAAMQAAAMAIAIQAJAJAMAAQAMAAAIgJQAJgIAAgMQAAgMgJgJQgIgJgMAAQgMAAgJAJg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2NumbergramAgAg, new cjs.Rectangle(-18,-12.9,36,25.9), null);


(lib.IconCard2AgeAg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgfAuIBEAAIAAgVIgWAAIAAhNIgPAAIgeARIAAAXIAUgMIAAAxIgVAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AiFh3IELAAQAkAAAAAiIAACrQAAAigkAAIkLAAQgkAAAAgiIAAirQAAgiAkAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgfAuIBEAAIAAgVIgWAAIAAhNIgPAAIgeARIAAAXIAUgMIAAAxIgVAAg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2AgeAg, new cjs.Rectangle(-18,-12.9,36,25.9), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAxIhJBJIgwgwIBJhJIhKhJIAwgwIBJBJIBKhKIAwAvIhKBKIBKBJIgwAxg");
	this.shape.setTransform(0.075,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AAwAAIBKhKIgwgvIhKBJIhJhIIgwAwIBKBJIhJBJIAwAwIBJhJIBJBJIAwgwg");
	this.shape_1.setTransform(0.075,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABAxIhJBJIgwgwIBJhJIhKhJIAwgwIBJBJIBKhKIAwAvIhKBKIBKBJIgwAxg");
	this.shape_2.setTransform(0.075,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCancel, new cjs.Rectangle(-23.5,-13.4,36.8,26.4), null);


(lib.IconBulbHintOver = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#E07400").ss(3,0,1).p("AAAhMIAAhDAB+AlIBCgHABfglIAlglABtBxIAcAQAh9AkIhCgHAhfglIgngnAhtBwIgiAU");
	this.shape.setTransform(0.025,-9.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E07400").s().p("AgqBvQgCgrgXggQgXghAAgcQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAcgXAhQgXAggCArgAgRhXQgTADgQASIAAAAQgRARACAiQAAAFADADQADADAFAAQAFAAADgDQADgEAAgFQAAgXAJgLIABgBQALgLAMgDQAEgBADgEQACgEgBgFQAAgEgFgDQgDgCgDAAIgCABg");
	this.shape_1.setTransform(0.025,-3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnQgEgEAAgEQgBgiARgQIgBAAQAQgSASgEQAFgBAEADQAEACABAFQABAEgDAEQgCAFgFAAQgMADgLAMIAAAAQgJALABAXQAAAFgDADQgEADgEABQgFAAgDgDg");
	this.shape_2.setTransform(-3.6168,-7.8393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E07400").s().p("AAhAcIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgBQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAFAFQAEAFAAAFQAAAHgEAEIgDACIADACQAEAEAAAGQAAAGgEAEQgFAFgGAAIgCAAg");
	this.shape_3.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AB6iHIglAlIAVAVIAlgkgAAPjCIgdAAIAABDIAdAAgABEhNQgZgZgrAAIAAAAQgqABgZAYQgXAYAAAkQAAAdAXAgQAXAhACArIBVAAQACgrAXghQAXggAAgdQAAgkgXgYgADCgFIgDgeIhDAHIADAdgACCBbIAPgaIgcgQIgPAagAAyCbQAAAGgFAEQgBACgBABQABAAABACQAFAEAAAGQAAAGgFAFQgEAEgGAAQgBAAgBAAIhBAAIAAAAQgBAAgBAAQgGAAgFgEQgEgFAAgGQAAgGAEgEQACgCABgBQgBgBgCgBQgEgEAAgGQAAgGAEgFQAFgEAGAAQABAAABgBIBBAAIAAABQABAAABAAQAGAAAEAEQAFAFAAAGgAiQh0IAnAnIAVgVIgngngAi+gkIgDAeIBDAGIADgdgAiWBEIAPAaIAigUIgPgZg");
	this.shape_4.setTransform(0.025,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhDDIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgCQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAEAFQAFAFAAAFQAAAHgFAEIgCADIACACQAFAEAAAGQAAAGgFAEQgEAFgGAAIgCAAgAgqB3QgCgqgXghQgXggAAgdQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAdgXAgQgXAhgCAqgAiWBEIAhgTIAQAZIgiAUgABmBLIAPgaIAcAQIgPAagAB8gcIBDgHIADAeIhDAGgAjBgGIADgeIBDAIIgDAcgABVhiIAlglIAVAWIglAkgAiQh0IAVgUIAnAmIgVAVgAgOh/IAAhDIAdAAIAABDg");
	this.shape_5.setTransform(0.025,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBulbHintOver, new cjs.Rectangle(-21.3,-25.5,42.7,43), null);


(lib.IconBulbHintDown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#9C5407").ss(3,0,1).p("AAAhMIAAhDAB+AlIBCgHABfglIAlglABtBxIAcAQAh9AkIhCgHAhfglIgngnAhtBwIgiAU");
	this.shape.setTransform(0.025,-9.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C5407").s().p("AgqBvQgCgrgXggQgXghAAgcQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAcgXAhQgXAggCArgAgRhXQgTADgQASIAAAAQgRARACAiQAAAFADADQADADAFAAQAFAAADgDQADgEAAgFQAAgXAJgLIABgBQALgLAMgDQAEgBADgEQACgEgBgFQAAgEgFgDQgDgCgDAAIgCABg");
	this.shape_1.setTransform(0.025,-3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnQgEgEAAgEQgBgiARgQIgBAAQAQgSASgEQAFgBAEADQAEACABAFQABAEgDAEQgCAFgFAAQgMADgLAMIAAAAQgJALABAXQAAAFgDADQgEADgEABQgFAAgDgDg");
	this.shape_2.setTransform(-3.6168,-7.8393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C5407").s().p("AAhAcIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgBQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAFAFQAEAFAAAFQAAAHgEAEIgDACIADACQAEAEAAAGQAAAGgEAEQgFAFgGAAIgCAAg");
	this.shape_3.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AB6iHIglAlIAVAVIAlgkgAAPjCIgdAAIAABDIAdAAgABEhNQgZgZgrAAIAAAAQgqABgZAYQgXAYAAAkQAAAdAXAgQAXAhACArIBVAAQACgrAXghQAXggAAgdQAAgkgXgYgADCgFIgDgeIhDAHIADAdgACCBbIAPgaIgcgQIgPAagAAyCbQAAAGgFAEQgBACgBABQABAAABACQAFAEAAAGQAAAGgFAFQgEAEgGAAQgBAAgBAAIhBAAIAAAAQgBAAgBAAQgGAAgFgEQgEgFAAgGQAAgGAEgEQACgCABgBQgBgBgCgBQgEgEAAgGQAAgGAEgFQAFgEAGAAQABAAABgBIBBAAIAAABQABAAABAAQAGAAAEAEQAFAFAAAGgAiQh0IAnAnIAVgVIgngngAi+gkIgDAeIBDAGIADgdgAiWBEIAPAaIAigUIgPgZg");
	this.shape_4.setTransform(0.025,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhDDIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgCQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAEAFQAFAFAAAFQAAAHgFAEIgCADIACACQAFAEAAAGQAAAGgFAEQgEAFgGAAIgCAAgAgqB3QgCgqgXghQgXggAAgdQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAdgXAgQgXAhgCAqgAiWBEIAhgTIAQAZIgiAUgABmBLIAPgaIAcAQIgPAagAB8gcIBDgHIADAeIhDAGgAjBgGIADgeIBDAIIgDAcgABVhiIAlglIAVAWIglAkgAiQh0IAVgUIAnAmIgVAVgAgOh/IAAhDIAdAAIAABDg");
	this.shape_5.setTransform(0.025,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBulbHintDown, new cjs.Rectangle(-21.3,-25.5,42.7,43), null);


(lib.IconBulbHintDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#F2B069").ss(3,0,1).p("AAAhMIAAhDAB+AlIBCgHABfglIAlglABtBxIAcAQAh9AkIhCgHAhfglIgngnAhtBwIgiAU");
	this.shape.setTransform(0.025,-9.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B069").s().p("AgqBvQgCgrgXggQgXghAAgcQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAcgXAhQgXAggCArgAgRhXQgTADgQASIAAAAQgRARACAiQAAAFADADQADADAFAAQAFAAADgDQADgEAAgFQAAgXAJgLIABgBQALgLAMgDQAEgBADgEQACgEgBgFQAAgEgFgDQgDgCgDAAIgCABg");
	this.shape_1.setTransform(0.025,-3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnQgEgEAAgEQgBgiARgQIgBAAQAQgSASgEQAFgBAEADQAEACABAFQABAEgDAEQgCAFgFAAQgMADgLAMIAAAAQgJALABAXQAAAFgDADQgEADgEABQgFAAgDgDg");
	this.shape_2.setTransform(-3.6168,-7.8393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2B069").s().p("AAhAcIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgBQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAFAFQAEAFAAAFQAAAHgEAEIgDACIADACQAEAEAAAGQAAAGgEAEQgFAFgGAAIgCAAg");
	this.shape_3.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AB6iHIglAlIAVAVIAlgkgAAPjCIgdAAIAABDIAdAAgABEhNQgZgZgrAAIAAAAQgqABgZAYQgXAYAAAkQAAAdAXAgQAXAhACArIBVAAQACgrAXghQAXggAAgdQAAgkgXgYgADCgFIgDgeIhDAHIADAdgACCBbIAPgaIgcgQIgPAagAAyCbQAAAGgFAEQgBACgBABQABAAABACQAFAEAAAGQAAAGgFAFQgEAEgGAAQgBAAgBAAIhBAAIAAAAQgBAAgBAAQgGAAgFgEQgEgFAAgGQAAgGAEgEQACgCABgBQgBgBgCgBQgEgEAAgGQAAgGAEgFQAFgEAGAAQABAAABgBIBBAAIAAABQABAAABAAQAGAAAEAEQAFAFAAAGgAiQh0IAnAnIAVgVIgngngAi+gkIgDAeIBDAGIADgdgAiWBEIAPAaIAigUIgPgZg");
	this.shape_4.setTransform(0.025,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhDDIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgCQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAEAFQAFAFAAAFQAAAHgFAEIgCADIACACQAFAEAAAGQAAAGgFAEQgEAFgGAAIgCAAgAgqB3QgCgqgXghQgXggAAgdQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAdgXAgQgXAhgCAqgAiWBEIAhgTIAQAZIgiAUgABmBLIAPgaIAcAQIgPAagAB8gcIBDgHIADAeIhDAGgAjBgGIADgeIBDAIIgDAcgABVhiIAlglIAVAWIglAkgAiQh0IAVgUIAnAmIgVAVgAgOh/IAAhDIAdAAIAABDg");
	this.shape_5.setTransform(0.025,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBulbHintDisabled, new cjs.Rectangle(-21.3,-25.5,42.7,43), null);


(lib.IconBulbHint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC6900").ss(3,0,1).p("ABfglIAlglAB+AlIBCgHAAAhMIAAhDABtBxIAcAQAhfglIgngnAh9AkIhCgHAhtBwIgiAU");
	this.shape.setTransform(0.025,-9.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6900").s().p("AgqBvQgCgrgXggQgXghAAgcQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAcgXAhQgXAggCArgAgRhXQgTADgQASIAAAAQgRARACAiQAAAFADADQADADAFAAQAFAAADgDQADgEAAgFQAAgXAJgLIABgBQALgLAMgDQAEgBADgEQACgEgBgFQAAgEgFgDQgDgCgDAAIgCABg");
	this.shape_1.setTransform(0.025,-3.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnQgEgEAAgEQgBgiARgQIgBAAQAQgSASgEQAFgBAEADQAEACABAFQABAEgDAEQgCAFgFAAQgMADgLAMIAAAAQgJALABAXQAAAFgDADQgEADgEABQgFAAgDgDg");
	this.shape_2.setTransform(-3.6168,-7.8393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6900").s().p("AAhAcIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgBQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAFAFQAEAFAAAFQAAAHgEAEIgDACIADACQAEAEAAAGQAAAGgEAEQgFAFgGAAIgCAAg");
	this.shape_3.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AB6iHIglAlIAVAVIAlgkgAAPjCIgdAAIAABDIAdAAgABEhNQgZgZgrAAIAAAAQgqABgZAYQgXAYAAAkQAAAdAXAgQAXAhACArIBVAAQACgrAXghQAXggAAgdQAAgkgXgYgADCgFIgDgeIhDAHIADAdgACCBbIAPgaIgcgQIgPAagAAyCbQAAAGgFAEQgBACgBABQABAAABACQAFAEAAAGQAAAGgFAFQgEAEgGAAQgBAAgBAAIhBAAIAAAAQgBAAgBAAQgGAAgFgEQgEgFAAgGQAAgGAEgEQACgCABgBQgBgBgCgBQgEgEAAgGQAAgGAEgFQAFgEAGAAQABAAABgBIBBAAIAAABQABAAABAAQAGAAAEAEQAFAFAAAGgAiQh0IAnAnIAVgVIgngngAi+gkIgDAeIBDAGIADgdgAiWBEIAPAaIAigUIgPgZg");
	this.shape_4.setTransform(0.025,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhDDIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgCQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAEAFQAFAFAAAFQAAAHgFAEIgCADIACACQAFAEAAAGQAAAGgFAEQgEAFgGAAIgCAAgAgqB3QgCgqgXghQgXggAAgdQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAdgXAgQgXAhgCAqgAiWBEIAhgTIAQAZIgiAUgABmBLIAPgaIAcAQIgPAagAB8gcIBDgHIADAeIhDAGgAjBgGIADgeIBDAIIgDAcgABVhiIAlglIAVAWIglAkgAiQh0IAVgUIAnAmIgVAVgAgOh/IAAhDIAdAAIAABDg");
	this.shape_5.setTransform(0.025,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBulbHint, new cjs.Rectangle(-21.3,-25.5,42.7,43), null);


(lib.IconBulb = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("AAAhMIAAhDAB+AlIBCgHABfglIAlglABtBxIAcAQAh9AkIhCgHAhfglIgngnAhtBwIgiAU");
	this.shape.setTransform(0.025,-9.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBvQgCgrgXggQgXghAAgcQAAglAXgXQAZgYAqgBIAAAAQArAAAZAZQAXAYAAAkQAAAcgXAhQgXAggCArgAgRhXQgTADgQASIAAAAQgRARACAiQAAAFADADQADADAFAAQAFAAADgDQADgEAAgFQAAgXAJgLIABgBQALgLAMgDQAEgBADgEQACgEgBgFQAAgEgFgDQgDgCgDAAIgCABg");
	this.shape_1.setTransform(0.025,-3.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhAcIhBAAIAAAAIgCAAQgGAAgFgFQgEgEAAgGQAAgGAEgEIADgDIgDgBQgEgEAAgHQAAgFAEgFQAFgFAGABIACgBIBBAAIAAABIACAAQAGgBAFAFQAEAFAAAFQAAAHgEAEIgDACIADACQAEAEAAAGQAAAGgEAEQgFAFgGAAIgCAAg");
	this.shape_2.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBulb, new cjs.Rectangle(-20.7,-25,41.5,40.8), null);


(lib.IconBack = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai9AAIB4htIAAA8IEDAAIAABjIkDAAIAAA8g");
	this.shape.setTransform(-1,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("Ai9AAIB4BuIAAg8IEDAAIAAhjIkDAAIAAg8g");
	this.shape_1.setTransform(-1,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai9AAIB4htIAAA8IEDAAIAABjIkDAAIAAA8g");
	this.shape_2.setTransform(-1,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBack, new cjs.Rectangle(-23.5,-12,42.5,24), null);


(lib.IconAddSignpostDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2B069").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F2B069").ss(4,1,1).p("AAggeIAAhFIhAAAIAABGIhDAAIAAA7IBDAAIAABGIBAAAIAAhGIBEAAIAAg8g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F39D35").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.047)").s().p("AggB4QgJAAgFgGQgGgFAAgJIAAgzIgvAAQgJAAgFgFQgGgGAAgIIAAg7QAAgIAGgGQAFgGAJAAIAvAAIAAgyQAAgJAGgFQAFgGAJAAIA/AAQAJAAAGAGQAGAFgBAJIAAAxIAxAAQAJAAAFAHQAGAFAAAIIAAA8QAAAIgGAHQgFAFgJAAIgxAAIAAAyQABAJgGAFQgGAGgJAAg");
	this.shape_3.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddSignpostDisabled, new cjs.Rectangle(-12,-12,25,25), null);


(lib.IconAddSignpost_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E07400").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E07400").ss(4,1,1).p("AAggeIAAhFIhAAAIAABGIhDAAIAAA7IBDAAIAABGIBAAAIAAhGIBEAAIAAg8g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E07400").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddSignpost_Over, new cjs.Rectangle(-12,-12,24,24), null);


(lib.IconAddSignpost_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9C5407").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9C5407").ss(4,1,1).p("AAggeIAAhFIhAAAIAABGIhDAAIAAA7IBDAAIAABGIBAAAIAAhGIBEAAIAAg8g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C5407").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddSignpost_Down, new cjs.Rectangle(-12,-12,24,24), null);


(lib.IconAddSignpost = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC6900").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC6900").ss(4,1,1).p("AAggeIAAhFIhAAAIAABGIhDAAIAAA7IBDAAIAABGIBAAAIAAhGIBEAAIAAg8g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6900").s().p("AggBkIAAhGIhDAAIAAg7IBDAAIAAhGIA/AAIAABFIBFAAIAAA8IhFAAIAABGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddSignpost, new cjs.Rectangle(-12,-12,24,24), null);


(lib.IconAccept = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#093E67").ss(2,1,1).p("AB3iDIihChIhChCIg4A2IBxByIDYjZg");
	this.shape.setTransform(1.475,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AikASIA4g2IBCBCIChigIAuAuIjYDYg");
	this.shape_1.setTransform(1.475,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAccept, new cjs.Rectangle(-16,-13,35,28.3), null);


(lib.HintBaseDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outer_circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjoDpQhhhgAAiIQAAiJBhhgQBghhCJAAQCIAABgBhQBhBgAACJQAACIhhBgQhgBhiIAAQiJAAhghhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("AjoDqQhhhiAAiHQAAiJBhhgQBghhCJAAQCHAABiBhQBgBgAACJQAACHhgBiQhiBgiHAAQiJAAhghgg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HintBaseDisabled, new cjs.Rectangle(-33,-33,68,68), null);


(lib.HintBase = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ADjjhQBdBeAACDQAACEhdBfQhfBdiEAAQiDAAhehdQhehfAAiEQAAiDBeheQBeheCDAAQCEAABfBeg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("ADjjhQBdBeAACDQAACEhdBfQhfBdiEAAQiDAAhehdQhehfAAiEQAAiDBeheQBeheCDAAQCEAABfBeg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjhDjQhehfAAiEQAAiDBeheQBeheCDAAQCEAABfBeQBdBeAACDQAACEhdBfQhfBdiEAAQiDAAhehdg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AjoDqQhhhiAAiHQAAiJBhhgQBghhCJAAQCHAABiBhQBgBgAACJQAACHhgBiQhiBgiHAAQiJAAhghgg");
	this.shape_3.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HintBase, new cjs.Rectangle(-33,-33,68,68), null);


(lib.GreenArrow_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#79A037").ss(2,1,1).p("ACPikIC0CkIi0ClIAAhZInRAAIAAhLIAAhLIHRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79A037").s().p("ACOBMInPAAIAAhLIAAhLIHPAAIAAhaIC0CkIi0Clg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenArrow_Over, new cjs.Rectangle(-33.2,-17.4,66.5,34.9), null);


(lib.GreenArrow_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5A762D").ss(2,1,1).p("ACPikIC0CkIi0ClIAAhZInRAAIAAhLIAAhLIHRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A762D").s().p("ACOBMInPAAIAAhLIAAhLIHPAAIAAhaIC0CkIi0Clg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenArrow_Down, new cjs.Rectangle(-33.2,-17.4,66.5,34.9), null);


(lib.GreenArrow_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#B3C398").ss(2,1,1).p("ACPikIC0CkIi0ClIAAhZInRAAIAAhLIAAhLIHRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3C398").s().p("ACOBMInPAAIAAhLIAAhLIHPAAIAAhaIC0CkIi0Clg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenArrow_Disabled, new cjs.Rectangle(-33.2,-17.4,66.5,34.9), null);


(lib.GreenArrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#678731").ss(2,1,1).p("ACPikIC0CkIi0ClIAAhZInRAAIAAhLIAAhLIHRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#678731").s().p("ACOBMInPAAIAAhLIAAhLIHPAAIAAhaIC0CkIi0Clg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenArrow, new cjs.Rectangle(-33.2,-17.4,66.5,34.9), null);


(lib.DBLAInput = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,"Selected":1,"Highlight":2,"Disabled":3,Correct:4,"Incorrect":5,"Display":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9B9B9").s().p("AIcgSIw3AAQg6AAgCA5IAAgSQAAg7A8AAIQ3AAQA8AAAAA7IAAASQgCg5g6AAg");
	this.shape.setTransform(64,7.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({_off:true},1).wait(1));

	// base
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F7F7").s().p("AobDhQg8AAAAg8IAAlJQAAg8A8AAIQ3AAQA8AAAAA8IAAFJQAAA8g8AAg");
	this.shape_1.setTransform(64,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AobDhQg8AAAAg8IAAlJQAAg8A8AAIQ3AAQA8AAAAA8IAAFJQAAA8g8AAg");
	this.shape_2.setTransform(64,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E7E7").s().p("AobDhQg8AAAAg8IAAlJQAAg8A8AAIQ3AAQA8AAAAA8IAAFJQAAA8g8AAg");
	this.shape_3.setTransform(64,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1FFD1").s().p("AobDhQg8AAAAg8IAAlJQAAg8A8AAIQ3AAQA8AAAAA8IAAFJQAAA8g8AAg");
	this.shape_4.setTransform(64,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEBD6").s().p("AobDhQg8AAAAg8IAAlJQAAg8A8AAIQ3AAQA8AAAAA8IAAFJQAAA8g8AAg");
	this.shape_5.setTransform(64,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// stroke
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AobD1QhQAAAAhQIAAlJQAAhQBQAAIQ3AAQBQAAAABQIAAFJQAABQhQAAg");
	this.shape_6.setTransform(64,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(7));

	// outerStroke
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004470").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_7.setTransform(64,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0087FF").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_8.setTransform(64,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#447D9D").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_9.setTransform(64,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00BA00").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_10.setTransform(64,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC6F08").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_11.setTransform(64,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AobEJQhkAAAAhkIAAlJQAAhkBkAAIQ3AAQBkAAAABkIAAFJQAABkhkAAg");
	this.shape_12.setTransform(64,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// contextStroke
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AobEnQiCAAAAiCIAAlJQAAiCCCAAIQ3AAQCCAAAACCIAAFJQAACCiCAAg");
	this.shape_13.setTransform(64,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B87700").s().p("AobExQiMAAAAiMIAAlJQAAiMCMAAIQ3AAQCMAAAACMIAAFJQAACMiMAAg");
	this.shape_14.setTransform(64,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,136,61);


(lib.CircleButtonBaseSelected = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33EDFF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape.setTransform(-0.0096,0.0033,2.9508,2.9508);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// inner stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0087FF").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(0.0121,0.0238,3.0601,3.0601);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjWDXIgBAAQhZhZAAh+QAAh9BZhaQBahZB9AAQB3AABWBPIAAAAIALALQBZBZAAB9QAAB+haBZIAAAAQhZBah+AAQh9AAhZhagAizizQhLBKAABpQAABqBKBKIABAAQBKBLBpAAQBqAABKhLIAAAAQBLhKAAhqQAAhphLhKIgBgBIgIgIIAAAAQhIhChjAAQhpAAhKBLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBaseSelected, new cjs.Rectangle(-30.5,-30.5,61,61), null);


(lib.CircleButtonBaseDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// overylay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(236,236,236,0.6)").s().p("AjWDXQhahZAAh+QAAh9BahZQBZhaB9AAQB2AABXBPIABABIAJAKQBaBZAAB9QAAB+haBZIAAAAQhZBah+AAQh9AAhZhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(-0.0096,0.0033,2.9508,2.9508);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(0.0121,0.0238,3.0601,3.0601);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AC8jPQAFAFAFAFQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQBtAABPBIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBaseDisabled, new cjs.Rectangle(-30.5,-30.5,61,61), null);


(lib.CircleButtonBaseDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AjWDXQhahZAAh+QAAh9BahZQBZhaB9AAQB2AABXBPIABABIAJAKQBaBZAAB9QAAB+haBZIAAAAQhZBah+AAQh9AAhZhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(-0.0096,0.0033,2.9508,2.9508);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(0.0121,0.0238,3.0601,3.0601);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AC8jPQAFAFAFAFQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQBtAABPBIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBaseDarker, new cjs.Rectangle(-30.5,-30.5,61,61), null);


(lib.CircleButtonBaseBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AjWDXQhahZAAh+QAAh9BahZQBZhaB9AAQB2AABXBPIABABIAJAKQBaBZAAB9QAAB+haBZIAAAAQhZBah+AAQh9AAhZhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(-0.0048,-0.0204,3.224,3.224);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// inner stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(0.017,0.0001,3.3333,3.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjoDpIAAgBQhhhfAAiJQAAiIBhhgQBghhCIAAQCAAABeBVIABABIAKAMQBhBgAACHQAACJhhBfIgBABQhfBhiJAAQiIAAhghhgAjFjFQhSBSAABzQAAB0BSBRIAAAAQBSBTBzAAQB0AABRhTIAAAAQBThRAAh0QAAhzhThSIgBgBIgJgJIABAAQhPhIhtAAQhzAAhSBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBaseBrighter, new cjs.Rectangle(-33,-33,66,66), null);


(lib.CircleButtonBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DCE1E6","#F3F3F3"],[0,1],-9.1,0,9.2,0).s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape.setTransform(-0.0096,0.0033,2.9508,2.9508);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// inner stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5C5C5").s().p("AhABAQgbgaABgmQgBglAbgbQAbgbAlAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(0.0121,0.0238,3.0601,3.0601);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjWDXIgBAAQhZhZAAh+QAAh9BZhaQBahZB9AAQB3AABWBPIAAAAIALALQBZBZAAB9QAAB+haBZIAAAAQhZBah+AAQh9AAhZhagAizizQhLBKAABpQAABqBKBKIABAAQBKBLBpAAQBqAABKhLIAAAAQBLhKAAhqQAAhphLhKIgBgBIgIgIIAAAAQhIhChjAAQhpAAhKBLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB0AABWBOIAAAAIAKAKQBYBYAAB7QAAB8hYBYIAAAAQhYBYh8AAQh7AAhYhYg");
	this.shape_3.setTransform(3.05,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase, new cjs.Rectangle(-30.5,-30.5,63.6,63.6), null);


(lib.CircleBase_Blue_Small_Up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B88A8").s().p("Ag8A9QgagZAAgkQAAgiAagaQAZgaAjAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAQgjAAgZgag");
	this.shape.setTransform(0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBMQgggfAAgtQAAgrAggfQAfggArAAQAsAAAgAgQAfAfAAArQAAAsgfAgQggAfgsAAQgrAAgfgfg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1_copy_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AhSBTQgjgiAAgxQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAxgjAiQgjAjgwAAQgvAAgjgjg");
	this.shape_2.setTransform(0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AhLBMQgfgfAAgtQAAgrAfgfQAgggArAAQAsAAAfAgQAgAfAAArQAAAtggAfQgfAfgsAAQgrAAgggfg");
	this.shape_3.setTransform(1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleBase_Blue_Small_Up, new cjs.Rectangle(-11.6,-11.6,24,24), null);


(lib.CircleBase_Blue_Small_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DA0C5").s().p("Ag8A9QgagZAAgkQAAgiAagaQAZgaAjAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAQgjAAgZgag");
	this.shape.setTransform(0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBMQgggfAAgtQAAgrAggfQAfggArAAQAsAAAgAgQAfAfAAArQAAAsgfAgQggAfgsAAQgrAAgfgfg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1_copy_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AhSBTQgjgiAAgxQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAxgjAiQgjAjgwAAQgvAAgjgjg");
	this.shape_2.setTransform(0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleBase_Blue_Small_Over, new cjs.Rectangle(-11.6,-11.6,23.6,23.6), null);


(lib.CircleBase_Blue_Small_Highlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0B88A8").s().p("Ag8A9QgagZAAgkQAAgiAagaQAZgaAjAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAQgjAAgZgag");
	this.shape.setTransform(0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1_copy_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBMQgggfAAgtQAAgrAggfQAfggArAAQAsAAAgAgQAfAfAAArQAAAsgfAgQggAfgsAAQgrAAgfgfg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1_copy_3_copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B87700").ss(1,1,1).p("ABnBoQArgrAAg9QAAg8grgqIAAABQgsgsg7AAQg7AAgqArQAAABgBAAQgrAqAAA7QAAA9AsArIgBgBQAqArA8AAQA7AAArgqQABAAAAAAg");
	this.shape_2.setTransform(0.175,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAACSQg8AAgpgrIAAABQgsgrAAg9QAAg7ArgqIABgBQAqgrA7AAQA7AAAsAsIAAgBQArAqAAA8QAAA9grAqIgBABQgrAqg7AAIAAAAgAhChDIgBABQgcAbAAAnQAAAoAdAcIAAAAQAbAcAnAAQAnAAAdgcIgBAAQAdgcAAgoQAAgngcgbIAAAAQgdgdgnAAIAAAAQgnAAgbAcg");
	this.shape_3.setTransform(0.175,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBEIAAAAQgdgcAAgoQAAgnAcgbIABgBQAbgcAnAAQAnAAAdAdIAAAAQAcAbAAAnQAAAogdAcIABAAQgdAcgnAAIAAAAQgnAAgbgcg");
	this.shape_4.setTransform(0.175,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleBase_Blue_Small_Highlight, new cjs.Rectangle(-15.4,-15.4,31.200000000000003,31.200000000000003), null);


(lib.CircleBase_Blue_Small_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A7894").s().p("Ag8A9QgagZAAgkQAAgiAagaQAZgaAjAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAQgjAAgZgag");
	this.shape.setTransform(0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBMQgggfAAgtQAAgrAggfQAfggArAAQAsAAAgAgQAfAfAAArQAAAsgfAgQggAfgsAAQgrAAgfgfg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1_copy_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AhSBTQgjgiAAgxQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAxgjAiQgjAjgwAAQgvAAgjgjg");
	this.shape_2.setTransform(0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleBase_Blue_Small_Down, new cjs.Rectangle(-11.6,-11.6,23.6,23.6), null);


(lib.CircleBase_Blue_Small_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#85C3D3").s().p("Ag8A9QgagZAAgkQAAgiAagaQAZgaAjAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAQgjAAgZgag");
	this.shape.setTransform(0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1_copy_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBMQgggfAAgtQAAgrAggfQAfggArAAQAsAAAgAgQAfAfAAArQAAAsgfAgQggAfgsAAQgrAAgfgfg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleBase_Blue_Small_Disabled, new cjs.Rectangle(-10.6,-10.6,21.4,21.4), null);


(lib.Chart_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#979797").ss(1,2,1).p("AkvB7IJdAAAkuBKIJdAAAkuAZIJdAAAkugYIJdAAAkthKIJdAAAkth6IJdAA");
	this.shape.setTransform(34.6,20.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#979797").ss(1,2,1).p("ACZgsIAAAsABnhjIAAAsADLAzIAAAsABnAzIAAAsACVBoIAAAsADiBoIAAAsABLBoIAAAsAC4ADIAAAtAA+ADIAAAtAABiTIAAAsAABgsIAAAsAhjhjIAAAsAiUgsIAAAsAjIAzIAAAsAjhBoIAAAsAiVBoIAAAsAhLBoIAAAsAABBoIAAAsAABAzIAAAsAhiAzIAAAsAizADIAAAtAg5ADIAAAt");
	this.shape_1.setTransform(34.425,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2E2E2").s().p("AkrCsIAAlXIJXAAIAAFXg");
	this.shape_2.setTransform(34.625,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#979797").s().p("Ak1C0IAAlnIJrAAIAAFng");
	this.shape_3.setTransform(34.5,20.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// OuterStroke
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYDSIAAmjIKxAAIAAGjg");
	this.shape_4.setTransform(34.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chart_Over, new cjs.Rectangle(0,0,69,42), null);


(lib.Chart_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D4D4D").ss(1,2,1).p("AkvB7IJdAAAkuBKIJdAAAkuAZIJdAAAkugYIJdAAAkthKIJdAAAkth6IJdAA");
	this.shape.setTransform(34.6,20.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D4D4D").ss(1,2,1).p("ACZgsIAAAsABnhjIAAAsADLAzIAAAsABnAzIAAAsACVBoIAAAsADiBoIAAAsABLBoIAAAsAC4ADIAAAtAA+ADIAAAtAABiTIAAAsAABgsIAAAsAhjhjIAAAsAiUgsIAAAsAjIAzIAAAsAjhBoIAAAsAiVBoIAAAsAhLBoIAAAsAABBoIAAAsAABAzIAAAsAhiAzIAAAsAizADIAAAtAg5ADIAAAt");
	this.shape_1.setTransform(34.425,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3A3A3").s().p("AkrCsIAAlXIJXAAIAAFXg");
	this.shape_2.setTransform(34.625,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("Ak1C0IAAlnIJrAAIAAFng");
	this.shape_3.setTransform(34.5,20.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// OuterStroke
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYDSIAAmjIKxAAIAAGjg");
	this.shape_4.setTransform(34.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chart_Down, new cjs.Rectangle(0,0,69,42), null);


(lib.Chart_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2A2A2").ss(1,2,1).p("AkvB7IJdAAAkuBKIJdAAAkuAZIJdAAAkugYIJdAAAkthKIJdAAAkth6IJdAA");
	this.shape.setTransform(34.6,20.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A2A2A2").ss(1,2,1).p("ACZgsIAAAsABnhjIAAAsADLAzIAAAsABnAzIAAAsACVBoIAAAsADiBoIAAAsABLBoIAAAsAC4ADIAAAtAA+ADIAAAtAABiTIAAAsAABgsIAAAsAhjhjIAAAsAiUgsIAAAsAjIAzIAAAsAjhBoIAAAsAiVBoIAAAsAhLBoIAAAsAABBoIAAAsAABAzIAAAsAhiAzIAAAsAizADIAAAtAg5ADIAAAt");
	this.shape_1.setTransform(34.425,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E9E9").s().p("AkrCsIAAlXIJXAAIAAFXg");
	this.shape_2.setTransform(34.625,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2A2A2").s().p("Ak1C0IAAlnIJrAAIAAFng");
	this.shape_3.setTransform(34.5,20.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// OuterStroke
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYDSIAAmjIKxAAIAAGjg");
	this.shape_4.setTransform(34.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chart_Disabled, new cjs.Rectangle(0,0,69,42), null);


(lib.Chart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#707070").ss(1,2,1).p("Akth6IJdAAAkthKIJdAAAkugYIJdAAAkuAZIJdAAAkuBKIJdAAAkvB7IJdAA");
	this.shape.setTransform(34.6,20.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#707070").ss(1,2,1).p("ACZgsIAAAsABnhjIAAAsADLAzIAAAsABnAzIAAAsACVBoIAAAsADiBoIAAAsABLBoIAAAsAC4ADIAAAtAA+ADIAAAtAABiTIAAAsAABgsIAAAsAhjhjIAAAsAiUgsIAAAsAjIAzIAAAsAjhBoIAAAsAiVBoIAAAsAABAzIAAAsAhiAzIAAAsAABBoIAAAsAhLBoIAAAsAg5ADIAAAtAizADIAAAt");
	this.shape_1.setTransform(34.425,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AkrCsIAAlXIJXAAIAAFXg");
	this.shape_2.setTransform(34.625,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("Ak1C0IAAlnIJrAAIAAFng");
	this.shape_3.setTransform(34.5,20.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// OuterStroke
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYDSIAAmjIKxAAIAAGjg");
	this.shape_4.setTransform(34.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chart, new cjs.Rectangle(0,0,69,42), null);


(lib.ButtonSignpostDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(206,206,206,0.6)").s().p("AmNFIQhAAAgigaQgggZAAgxIAAi5QAAg1AkgeQAlgfBDAAIEMAAQAThaBGhFQBehhCIAAQCIAABgBhQBgBfAACHQAACIhgBfQhJBKhgARQgMAGgTAAg");
	this.shape.setTransform(52.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AjVDWQhZhZAAh9QAAh8BZhZQBYhYB9AAQB+AABZBYQBYBZAAB8QAAB9hYBZQhZBYh+AAQh9AAhYhYg");
	this.shape_1.setTransform(72.85,7.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEE").s().p("AkXCvQg/AAgagWQgagVAAg0IAAiaQAAgsAagaQAdgeA3AAIJ/AAQAoAAAAAoIgKENQgJAYgNAJQgLAHgWAAg");
	this.shape_2.setTransform(42,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjmDnQhhhfAAiIQAAiHBhhfQBfhhCHAAQCIAABgBhQBgBfAACHQAACIhgBfQhgBhiIAAQiHAAhfhhg");
	this.shape_3.setTransform(72.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkfDIQhAAAghgaQghgZAAgxIAAi4QAAg2AkgeQAmgfBDAAIKDAAQAVAAAOAPQAPAPABAUIgKErQgKAbgOALQgOAMgcAAg");
	this.shape_4.setTransform(41.75,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.047)").s().p("AmNFIQhBAAghgaQgggaAAgwIAAi5QAAg2AkgeQAlgeBDAAIEMAAQAThaBGhGQBehgCJAAQCHAABgBgQBgBgAACHQAACIhgBfQhJBKhfASQgNAFgTAAg");
	this.shape_5.setTransform(54.8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonSignpostDisabled, new cjs.Rectangle(0,-25.6,107.6,67.6), null);


(lib.ButtonSignpost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADeEbIphAAQg2AAgWgRIgBgBQgSgRAAgoIAAibQAAgjAUgVQAYgXAuAAIEmAAQAHAAAFgFQAGgFABgHQANhZBDhDIAAAAQBShTB1AAQB2AABSBTIAAAAQBTBTAAB0QAAB0hTBTQhBBChYANIgFACQgHADgNAAIAAAAg");
	this.shape.setTransform(52.825,7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AjVDWQhZhZAAh9QAAh8BZhZQBYhYB9AAQB+AABZBYQBYBZAAB8QAAB9hYBZQhZBYh+AAQh9AAhYhYg");
	this.shape_1.setTransform(72.85,7.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEE").s().p("AkXCvQg/AAgagWQgagVAAg0IAAiaQAAgsAagaQAdgeA3AAIJ/AAQAoAAAAAoIgKENQgJAYgNAJQgLAHgWAAg");
	this.shape_2.setTransform(42,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjmDnQhhhfAAiIQAAiHBhhfQBfhhCHAAQCIAABgBhQBgBfAACHQAACIhgBfQhgBhiIAAQiHAAhfhhg");
	this.shape_3.setTransform(72.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkfDIQhAAAghgaQghgZAAgxIAAi4QAAg2AkgeQAmgfBDAAIKDAAQAVAAAOAPQAPAPABAUIgKErQgKAbgOALQgOAMgcAAg");
	this.shape_4.setTransform(41.75,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("AmNFIQhBAAghgaQgggaAAgwIAAi5QAAg2AkgeQAlgeBDAAIEMAAQAThaBGhGQBehgCJAAQCHAABgBgQBgBgAACHQAACIhgBfQhJBKhfASQgNAFgTAAg");
	this.shape_5.setTransform(54.8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonSignpost, new cjs.Rectangle(0,-25.6,107.6,67.6), null);


(lib.Box100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C170C").s().p("AAtA5QgIgGgGgMQgHgPAAgRQgBgPAHgHQAFgFAJAFQAFADAFAHQAHAKADAMQACAIAAAKQABAQgIAGQgDACgDAAQgEAAgEgCgAAoAJQAAANADAMQABAEACACQAEACAAgKIgDgXQgCgGgCgBIgBgBQgCAAAAAIgAgDAjQgIgFgGgNQgHgPAAgQQgBgRAHgFQAFgGAJAGQAEADAFAHQAHAKADAMQACAHAAAKQABARgIAFQgDACgDAAQgEAAgDgCgAgIgLQAAALADAMQABAFACABQADACAAgKIgCgWQgCgFgCgCIgBAAQgCAAAAAIgAgeAVQgGgBgJgGIgJgGIgJgIQgDgDAAgDIABgDQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEADQADACAAgIIAAgaIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIgDgBIgCgDIAAgDQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQALgBAMAIQADACACACIABAFIAAACIgCABQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAAkIABADIACAFIAEAEQAEADAAAEQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape.setTransform(7.1515,16.3882);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEE9CA").s().p("AhIAhIAAiJICRA5IAACYg");
	this.shape_1.setTransform(7.325,16.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMg4ICZgnIAACLIiZA0g");
	this.shape_2.setTransform(22.325,17.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCC79E").s().p("AhMAPICZgnIAAAKIiZAng");
	this.shape_3.setTransform(22.325,8.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A29963").s().p("AhIgXIAAgKICRA5IAAAKg");
	this.shape_4.setTransform(7.325,7.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6D2B0").s().p("AhMATICZgzIAAANIiZA0g");
	this.shape_5.setTransform(22.325,25.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E6D5").s().p("AhMAZIAAgBICZg0IAAAEIiZA1g");
	this.shape_6.setTransform(22.325,25.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5AD7B").s().p("AhIgdIAAgNICRBHIAAAOIAAAAg");
	this.shape_7.setTransform(7.325,24.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8D4B8").s().p("AhIgiIAAgEICRBJIAAAEg");
	this.shape_8.setTransform(7.325,24.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BCB58F").s().p("AhIgNIAAgJICRA4IAAAJgAhIghIAAgKICRA2IAAANg");
	this.shape_9.setTransform(7.325,7.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DAD6BC").s().p("AhMAZICZgnIAAAKIiZAmgAhMACICZgkIAAAKIiZAng");
	this.shape_10.setTransform(22.325,8.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CDC8A3").s().p("AiVgMICTgeICYAvIiYAlg");
	this.shape_11.setTransform(15,4.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ACWhfIAAAJIAAAKIAAAKIAACLIAAANIAAAEIiYA2IiThKIAAgEIAAgNIAAiJIAAgJIAAgKIAAgKICTgeg");
	this.shape_12.setTransform(15,14.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DAD6BC").s().p("AiVBGIAAgEIAAgNIAAiJIAAgJIAAgKIAAgKICTgeICYAwIAAAJIAAAKIAAAKIAACLIAAANIAAAEIiYA2g");
	this.shape_13.setTransform(15,14.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Box100, new cjs.Rectangle(-1,-1,32,30.9), null);


(lib.Box10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdAvQgMgFgHgNQgJgPAAgQQgBgSAJgGQAGgEAMAEQAHAEAFAHQAJAKAFAMQADALAAAHQAAARgKAGQgEACgEAAQgEAAgFgDgAAVAAQABALADANQACAEACACQAFACAAgKIgBgNIgDgKQgCgFgCgCIgCAAQgDAAAAAIgAgJAgQgNgEgGgDIgMgHIgLgIQgDgDAAgEIAAgDQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACACIADABQAEACAAgGQABgFgBgWIgBgFIgDgEIgFgBIgCgCIgBgEQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABgBQABAAAAAAQAOAAAQAHQAEACACACQACACAAAEIgBACIgCAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIAAAjIABAEIABAGIAHAEQADACAAAEQAAAEgDAAIgCAAg");
	this.shape.setTransform(6.5,15.3676);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMg9ICZgmIAACTIiZA1g");
	this.shape_1.setTransform(22.325,16.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1E1D4").s().p("AhMAHICZgkIAAAWIiZAlg");
	this.shape_2.setTransform(22.325,7.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5D9").s().p("AhIAtIAAgDICRBJIAAAFgAhIAcIAAiTICRA6IAACig");
	this.shape_3.setTransform(7.325,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDCDBD").s().p("AhIgSIAAgUICRA2IAAAXg");
	this.shape_4.setTransform(7.325,6.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DADACA").s().p("AhMATICZgzIAAANIiZA0g");
	this.shape_5.setTransform(22.325,25.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEEEE6").s().p("AhMAZIAAgBICZg0IAAAEIiZA1g");
	this.shape_6.setTransform(22.325,25.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C6B0").s().p("AhIgdIAAgNICRBHIAAAOIAAAAg");
	this.shape_7.setTransform(7.325,24.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6D6C3").s().p("AiVgMICTgeICYAvIiYAlg");
	this.shape_8.setTransform(15,4.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#131314").ss(2,1,1).p("ACWhfIAAAVIAACTIAAANIAAAEIiYA2IiThKIAAgEIAAgNIAAiTIAAgTICTgeg");
	this.shape_9.setTransform(15,14.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1E1D4").s().p("AiVBGIAAgEIAAgNIAAiTIAAgTICTgeICYAwIAAAVIAACTIAAANIAAAEIiYA2g");
	this.shape_10.setTransform(15,14.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Box10, new cjs.Rectangle(-1,-1,32,30.9), null);


(lib.BinRidges_Up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AinCuQgJgFgCgIIAAgFIgZkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQAJAGABAIQgNgIgIAAIlNAAQgPAAgLAIQgLAIAAAKIAYEzIACAIIgFgEgAhxCeIgCAAQgMgCgJgHIAAgBIAJgMIACABQAEAFAIABIAHAAQAJAAAFgFQAGgGAAgHIAAj3QAAgIgGgFIAAAAIALgKQAKAJAAAOIAAD3QAAANgKAKIgBABQgKAJgOAAgAB5CdIgBAAIgBAAIgCAAQgLAAgJgIIAAgBIgBgBIAJgMIADACQAEAFAHAAIABAAIABAAIADAAIAAAAQAFgBADgEQAEgFABgHIAKjFIADgzQAAgHgFgFIgBgBIALgKQAKAJAAAOIAAABIgOD4QAAALgHAKIgCABQgGAHgIABIgBABIgFAAIgBAAgAAACcQgKAAgHgFIgBgBIgDgCIAKgLIACABQAEADAFAAIAHAAIABAAIAEAAIAHgDQAFgEAAgEIAKkEQAAgDgCgCIAJgMQAJAIgBAJIgKEEQABALgMAJIgBABQgGADgGACIgDAAIgEAAIgBAAIgHAAIAAAAIAAAAg");
	this.shape.setTransform(20.35,17.7625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AidCvQgQAAgKgIIgEgDIAAgBQAHACAJAAIEdAAQAOABAKgHQALgHACgMIAXkzIgBgHQAHACADAFIAFAEIABAFIgZEzQABALgLAHQgLAIgPAAgAgsB7IAAAAIgLkDIAAgBQgBgKALgJIADgCQAHgEAJAAIACAAIAAAAIAbAAQAKAAAJAFIABABIACACIgJAMIgCgCQgFgDgGAAIgbAAIAAAAQgGAAgFADQgFADAAAEIAKEEQABADADADIgKAMQgJgIABgKgAiYCMQgJgJAAgMIgQj3IAAgBQAAgOALgKIAAAAQAKgJAOAAIAUAAQAPAAAKAJIAAAAIAAAAIgKALQgGgFgJAAIgUAAQgIAAgGAFQgFAGAAAHIAPD3QAAAGAEAFIgJAMIgBgBgABPCKIgBgBQgIgJAAgKIAAj4QAAgIAEgIIABAAIAFgHQAJgJANAAIARAAQALgBAJAJIgLALQgEgEgFAAIgRAAQgGAAgFAFIgDADQgDAEAAAFIAAD4QAAAFAEAEIABABIgJAMIgCgCg");
	this.shape_1.setTransform(21.9,18.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6900").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_2.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACnizIlNAAQgPAAgLAIQgLAIAAAKIAYEzQAAALALAHQALAIAPAAIEdAAQAQAAAKgIQALgHAAgLIAYkzQAAgKgLgIQgLgIgPAAg");
	this.shape_3.setTransform(20.375,17.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_4.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinRidges_Up, new cjs.Rectangle(-2,-2,44.8,40), null);


(lib.BinRidges_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AinCuQgJgFgCgIIAAgFIgZkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQAJAGABAIQgNgIgIAAIlNAAQgPAAgLAIQgLAIAAAKIAYEzIACAIIgFgEgAhxCeIgCAAQgMgCgJgHIAAgBIAJgMIACABQAEAFAIABIAHAAQAJAAAFgFQAGgGAAgHIAAj3QAAgIgGgFIAAAAIALgKQAKAJAAAOIAAD3QAAANgKAKIgBABQgKAJgOAAgAB5CdIgBAAIgBAAIgCAAQgLAAgJgIIAAgBIgBgBIAJgMIADACQAEAFAHAAIABAAIABAAIADAAIAAAAQAFgBADgEQAEgFABgHIAKjFIADgzQAAgHgFgFIgBgBIALgKQAKAJAAAOIAAABIgOD4QAAALgHAKIgCABQgGAHgIABIgBABIgFAAIgBAAgAAACcQgKAAgHgFIgBgBIgDgCIAKgLIACABQAEADAFAAIAHAAIABAAIAEAAIAHgDQAFgEAAgEIAKkEQAAgDgCgCIAJgMQAJAIgBAJIgKEEQABALgMAJIgBABQgGADgGACIgDAAIgEAAIgBAAIgHAAIAAAAIAAAAg");
	this.shape.setTransform(20.35,17.7625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AidCvQgQAAgKgIIgEgDIAAgBQAHACAJAAIEdAAQAOABAKgHQALgHACgMIAXkzIgBgHQAHACADAFIAFAEIABAFIgZEzQABALgLAHQgLAIgPAAgAgsB7IAAAAIgLkDIAAgBQgBgKALgJIADgCQAHgEAJAAIACAAIAAAAIAbAAQAKAAAJAFIABABIACACIgJAMIgCgCQgFgDgGAAIgbAAIAAAAQgGAAgFADQgFADAAAEIAKEEQABADADADIgKAMQgJgIABgKgAiYCMQgJgJAAgMIgQj3IAAgBQAAgOALgKIAAAAQAKgJAOAAIAUAAQAPAAAKAJIAAAAIAAAAIgKALQgGgFgJAAIgUAAQgIAAgGAFQgFAGAAAHIAPD3QAAAGAEAFIgJAMIgBgBgABPCKIgBgBQgIgJAAgKIAAj4QAAgIAEgIIABAAIAFgHQAJgJANAAIARAAQALgBAJAJIgLALQgEgEgFAAIgRAAQgGAAgFAFIgDADQgDAEAAAFIAAD4QAAAFAEAEIABABIgJAMIgCgCg");
	this.shape_1.setTransform(21.9,18.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E07400").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_2.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACnizIlNAAQgPAAgLAIQgLAIAAAKIAYEzQAAALALAHQALAIAPAAIEdAAQAQAAAKgIQALgHAAgLIAYkzQAAgKgLgIQgLgIgPAAg");
	this.shape_3.setTransform(20.375,17.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_4.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinRidges_Over, new cjs.Rectangle(-2,-2,44.8,40), null);


(lib.BinRidges_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AinCuQgJgFgCgIIAAgFIgZkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQAJAGABAIQgNgIgIAAIlNAAQgPAAgLAIQgLAIAAAKIAYEzIACAIIgFgEgAhxCeIgCAAQgMgCgJgHIAAgBIAJgMIACABQAEAFAIABIAHAAQAJAAAFgFQAGgGAAgHIAAj3QAAgIgGgFIAAAAIALgKQAKAJAAAOIAAD3QAAANgKAKIgBABQgKAJgOAAgAB5CdIgBAAIgBAAIgCAAQgLAAgJgIIAAgBIgBgBIAJgMIADACQAEAFAHAAIABAAIABAAIADAAIAAAAQAFgBADgEQAEgFABgHIAKjFIADgzQAAgHgFgFIgBgBIALgKQAKAJAAAOIAAABIgOD4QAAALgHAKIgCABQgGAHgIABIgBABIgFAAIgBAAgAAACcQgKAAgHgFIgBgBIgDgCIAKgLIACABQAEADAFAAIAHAAIABAAIAEAAIAHgDQAFgEAAgEIAKkEQAAgDgCgCIAJgMQAJAIgBAJIgKEEQABALgMAJIgBABQgGADgGACIgDAAIgEAAIgBAAIgHAAIAAAAIAAAAg");
	this.shape.setTransform(20.35,17.7625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AidCvQgQAAgKgIIgEgDIAAgBQAHACAJAAIEdAAQAOABAKgHQALgHACgMIAXkzIgBgHQAHACADAFIAFAEIABAFIgZEzQABALgLAHQgLAIgPAAgAgsB7IAAAAIgLkDIAAgBQgBgKALgJIADgCQAHgEAJAAIACAAIAAAAIAbAAQAKAAAJAFIABABIACACIgJAMIgCgCQgFgDgGAAIgbAAIAAAAQgGAAgFADQgFADAAAEIAKEEQABADADADIgKAMQgJgIABgKgAiYCMQgJgJAAgMIgQj3IAAgBQAAgOALgKIAAAAQAKgJAOAAIAUAAQAPAAAKAJIAAAAIAAAAIgKALQgGgFgJAAIgUAAQgIAAgGAFQgFAGAAAHIAPD3QAAAGAEAFIgJAMIgBgBgABPCKIgBgBQgIgJAAgKIAAj4QAAgIAEgIIABAAIAFgHQAJgJANAAIARAAQALgBAJAJIgLALQgEgEgFAAIgRAAQgGAAgFAFIgDADQgDAEAAAFIAAD4QAAAFAEAEIABABIgJAMIgCgCg");
	this.shape_1.setTransform(21.9,18.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C5407").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_2.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACnizIlNAAQgPAAgLAIQgLAIAAAKIAYEzQAAALALAHQALAIAPAAIEdAAQAQAAAKgIQALgHAAgLIAYkzQAAgKgLgIQgLgIgPAAg");
	this.shape_3.setTransform(20.375,17.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_4.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinRidges_Down, new cjs.Rectangle(-2,-2,44.8,40), null);


(lib.BinRidges_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AinCuQgJgFgCgIIAAgFIgZkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQAJAGABAIQgNgIgIAAIlNAAQgPAAgLAIQgLAIAAAKIAYEzIACAIIgFgEgAhxCeIgCAAQgMgCgJgHIAAgBIAJgMIACABQAEAFAIABIAHAAQAJAAAFgFQAGgGAAgHIAAj3QAAgIgGgFIAAAAIALgKQAKAJAAAOIAAD3QAAANgKAKIgBABQgKAJgOAAgAB5CdIgBAAIgBAAIgCAAQgLAAgJgIIAAgBIgBgBIAJgMIADACQAEAFAHAAIABAAIABAAIADAAIAAAAQAFgBADgEQAEgFABgHIAKjFIADgzQAAgHgFgFIgBgBIALgKQAKAJAAAOIAAABIgOD4QAAALgHAKIgCABQgGAHgIABIgBABIgFAAIgBAAgAAACcQgKAAgHgFIgBgBIgDgCIAKgLIACABQAEADAFAAIAHAAIABAAIAEAAIAHgDQAFgEAAgEIAKkEQAAgDgCgCIAJgMQAJAIgBAJIgKEEQABALgMAJIgBABQgGADgGACIgDAAIgEAAIgBAAIgHAAIAAAAIAAAAg");
	this.shape.setTransform(20.35,17.7625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AidCvQgQAAgKgIIgEgDIAAgBQAHACAJAAIEdAAQAOABAKgHQALgHACgMIAXkzIgBgHQAHACADAFIAFAEIABAFIgZEzQABALgLAHQgLAIgPAAgAgsB7IAAAAIgLkDIAAgBQgBgKALgJIADgCQAHgEAJAAIACAAIAAAAIAbAAQAKAAAJAFIABABIACACIgJAMIgCgCQgFgDgGAAIgbAAIAAAAQgGAAgFADQgFADAAAEIAKEEQABADADADIgKAMQgJgIABgKgAiYCMQgJgJAAgMIgQj3IAAgBQAAgOALgKIAAAAQAKgJAOAAIAUAAQAPAAAKAJIAAAAIAAAAIgKALQgGgFgJAAIgUAAQgIAAgGAFQgFAGAAAHIAPD3QAAAGAEAFIgJAMIgBgBgABPCKIgBgBQgIgJAAgKIAAj4QAAgIAEgIIABAAIAFgHQAJgJANAAIARAAQALgBAJAJIgLALQgEgEgFAAIgRAAQgGAAgFAFIgDADQgDAEAAAFIAAD4QAAAFAEAEIABABIgJAMIgCgCg");
	this.shape_1.setTransform(21.9,18.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B069").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_2.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACnizIlNAAQgPAAgLAIQgLAIAAAKIAYEzQAAALALAHQALAIAPAAIEdAAQAQAAAKgIQALgHAAgLIAYkzQAAgKgLgIQgLgIgPAAg");
	this.shape_3.setTransform(20.375,17.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AiOC0QgPAAgLgIQgLgHAAgLIgYkzQAAgKALgIQALgIAPAAIFNAAQAPAAALAIQALAIAAAKIgYEzQAAALgLAHQgKAIgQAAgAiMiJQgGAGAAAHIAPD3QAAAHAFAFQAFAFAHABIAIAAQAIAAAGgFQAGgGAAgHIAAj3QAAgIgGgFQgGgFgIAAIgVAAQgIAAgFAFgABqiJIgDADQgDAEAAAFIAAD4QAAAFAEAEIADADQAFAFAGAAIACAAIABAAIADAAIAAAAQAEgBAEgEQAEgFAAgHIALjFIADgzQAAgHgGgFQgEgFgFAAIgRAAQgHAAgFAFgAgUiLQgFADAAAEIALEEQAAAEAFAEQAEADAFAAIAHAAIABAAIADAAIAIgDQAFgEAAgEIAKkEQAAgEgFgDQgFgDgFAAIgbAAIgBAAQgGAAgFADg");
	this.shape_4.setTransform(20.375,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinRidges_Disabled, new cjs.Rectangle(-2,-2,44.8,40), null);


(lib.BinLidUp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AjDBrQgFgEABgIIgCg3QABgIAEgHQAEgIAGgBID/hIIABgBIBtgfQAGgBAHADQAGADAEAFQgHgEgGACIltBnQgGACgEAHQgEAHgBAJIACA2QgBAFACAEQgEAAgDgEgAhaghIgHgYQgDgLAFgBICNgpQADgBACADQADADABADIiMAoQgFACADALIAHAYIAAABIgCABIgBAAQgFAAgCgKg");
	this.shape.setTransform(20.1875,11.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AjVBrIgEgEIAFAAIGah1QAHgCACgGQACgHgEgGIgdgwIgCgDQAIAEAEAHIAdAvQAEAHgCAGQgCAHgHACImaB0IgEABQgEAAgDgEgAhsgfICLgoQACgBABgEQABgEgBgEIgHgYIgBgBIACgBQACgBADADQADADABAEIAHAYQABAFgBAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIiNApIgBAAIAAAAQgFAAgCgIg");
	this.shape_1.setTransform(22.0321,11.1161);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E07400").s().p("AjUBrQgFgEABgIIgCg3QABgIAEgHQAEgIAGgBIFthoQAGgBAHADQAIAEAEAHIAdAvQAFAHgDAGQgCAHgHACImaB0IgEABQgEAAgDgEgAhrghIgHgYQgDgLAFgBICNgpQADgBACADQADADABAEIAHAYQABAFgBAEQAAADgDABIiNApIgBAAQgFAAgCgKg");
	this.shape_2.setTransform(21.8946,11.1161);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADagPQADgGgFgHIgdgvQgEgHgIgEQgHgDgGABIltBoQgGABgEAIQgEAHgBAIIACA3QgBAIAFAEQAEAFAHgCIGah0QAHgCACgHgAAmhlIAHAYQABAFgBAEQAAADgDABIiNApQgFABgDgLIgHgYQgDgLAFgBICNgpQADgBACADQADADABAEg");
	this.shape_3.setTransform(21.8946,11.1161);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3CF43").s().p("AjUBrQgFgEABgIIgCg3QABgIAEgHQAEgIAGgBIFthoQAGgBAHADQAIAEAEAHIAdAvQAFAHgDAGQgCAHgHACImaB0IgEABQgEAAgDgEgAhrghIgHgYQgDgLAFgBICNgpQADgBACADQADADABAEIAHAYQABAFgBAEQAAADgDABIiNApIgBAAQgFAAgCgKg");
	this.shape_4.setTransform(21.8946,11.1161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinLidUp, new cjs.Rectangle(-2,-2,47.8,26.2), null);


(lib.BinLidDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AjNBCQgEgGADgHIANgyQADgHAFgFQAGgGAGAAIBwAAIACABICLAAIACgBIBqAAQAGAAAGAGQAGAEACAFQgGgFgGAAIlpAAQgGAAgGAFQgGAFgCAIIgNAyQgCAEABAEQgEgCgCgDgAhDgYQgFAAAAgLIAAgYQAAgLAFAAICMAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQACADAAAEIiKAAQgGAAAAALIAAAYIAAABg");
	this.shape.setTransform(22.2107,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AjLBHQgHAAgDgFIgCgFIACAAIGWAAQAHAAADgFQAEgGgDgHIgNgxIgDgGIAEACQAHAGACAHIANAyQADAHgEAGQgDAFgHAAgAhNgZQgDgCAAgIICHAAQACAAACgDQACgDAAgFIAAgXIAAgBIAEAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADIgCADg");
	this.shape_1.setTransform(23.0021,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B069").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_2.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADBgJQgGgGgGAAIlpAAQgGAAgGAGQgGAFgCAHIgNAyQgDAHAEAGQACAFAHAAIGWAAQAHAAAEgFQADgGgCgHIgOgyQgCgHgGgFgABHg7IAAAYQAAAEgCADQgBADgDAAIiLAAQgGAAAAgKIAAgYQAAgLAGAAICLAAQADAAABADQACADAAAFg");
	this.shape_3.setTransform(22.9878,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_4.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinLidDisabled, new cjs.Rectangle(-0.6,-2,47.2,18.2), null);


(lib.BinLid_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AjNBCQgEgGADgHIANgyQADgHAFgFQAGgGAGAAIBwAAIACABICLAAIACgBIBqAAQAGAAAGAGQAGAEACAFQgGgFgGAAIlpAAQgGAAgGAFQgGAFgCAIIgNAyQgCAEABAEQgEgCgCgDgAhDgYQgFAAAAgLIAAgYQAAgLAFAAICMAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQACADAAAEIiKAAQgGAAAAALIAAAYIAAABg");
	this.shape.setTransform(22.2107,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AjLBHQgHAAgDgFIgCgFIACAAIGWAAQAHAAADgFQAEgGgDgHIgNgxIgDgGIAEACQAHAGACAHIANAyQADAHgEAGQgDAFgHAAgAhNgZQgDgCAAgIICHAAQACAAACgDQACgDAAgFIAAgXIAAgBIAEAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADIgCADg");
	this.shape_1.setTransform(23.0021,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C5407").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_2.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADBgJQgGgGgGAAIlpAAQgGAAgGAGQgGAFgCAHIgNAyQgDAHAEAGQACAFAHAAIGWAAQAHAAAEgFQADgGgCgHIgOgyQgCgHgGgFgABHg7IAAAYQAAAEgCADQgBADgDAAIiLAAQgGAAAAgKIAAgYQAAgLAGAAICLAAQADAAABADQACADAAAFg");
	this.shape_3.setTransform(22.9878,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_4.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinLid_Down, new cjs.Rectangle(-0.6,-2,47.2,18.2), null);


(lib.BinLid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.259)").s().p("AjNBCQgEgGADgHIANgyQADgHAFgFQAGgGAGAAIBwAAIACABICLAAIACgBIBqAAQAGAAAGAGQAGAEACAFQgGgFgGAAIlpAAQgGAAgGAFQgGAFgCAIIgNAyQgCAEABAEQgEgCgCgDgAhDgYQgFAAAAgLIAAgYQAAgLAFAAICMAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQACADAAAEIiKAAQgGAAAAALIAAAYIAAABg");
	this.shape.setTransform(22.2107,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AjLBHQgHAAgDgFIgCgFIACAAIGWAAQAHAAADgFQAEgGgDgHIgNgxIgDgGIAEACQAHAGACAHIANAyQADAHgEAGQgDAFgHAAgAhNgZQgDgCAAgIICHAAQACAAACgDQACgDAAgFIAAgXIAAgBIAEAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADIgCADg");
	this.shape_1.setTransform(23.0021,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6900").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_2.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Stroke
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADBgJQgGgGgGAAIlpAAQgGAAgGAGQgGAFgCAHIgNAyQgDAHAEAGQACAFAHAAIGWAAQAHAAAEgFQADgGgCgHIgOgyQgCgHgGgFgABHg7IAAAYQAAAEgCADQgBADgDAAIiLAAQgGAAAAgKIAAgYQAAgLAGAAICLAAQADAAABADQACADAAAFg");
	this.shape_3.setTransform(22.9878,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BC36").s().p("AjLBHQgHAAgCgFQgEgGADgHIANgyQACgHAGgGQAGgFAGAAIFpAAQAGAAAGAFQAGAGACAHIAOAyQACAHgDAGQgEAFgHAAgAhKgYQgGAAAAgMIAAgXQAAgLAGAAICLAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQACAEAAAEIAAAXQAAAFgCADQgBAEgDAAg");
	this.shape_4.setTransform(22.9878,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinLid, new cjs.Rectangle(-0.6,-2,47.2,18.2), null);


(lib.BinBottom_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C5407").s().p("AiOCxQgOAAgKgHQgKgGAAgKIgYkzQAAgJAKgHQALgHANAAIFNAAQAOAAAKAHIABAAQAJAHAAAJIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape.setTransform(21.625,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AiOCxQgOAAgKgHQgKgGAAgKIgYkzQAAgJAKgHQALgHANAAIFNAAQAOAAAKAHIABAAQAJAHAAAJIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape_1.setTransform(23.875,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottom_Down, new cjs.Rectangle(1.6,0.3,42.4,38.2), null);


(lib.BinBottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6900").s().p("AiOCxQgOAAgKgHQgKgGAAgKIgYkzQAAgJAKgHQALgHANAAIFNAAQAOAAAKAHIABAAQAJAHAAAJIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape.setTransform(21.625,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AiOCxQgOAAgKgHQgKgGAAgKIgYkzQAAgJAKgHQALgHANAAIFNAAQAOAAAKAHIABAAQAJAHAAAJIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape_1.setTransform(23.875,20.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottom, new cjs.Rectangle(1.6,0.3,42.4,38.2), null);


(lib.Base_Bevels = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0,1],-7.4,-19,6.3,4.6).s().p("Ai3C0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAugzBAAAIHBAAQAoAAAhAUIn1AAIgKAAIAAABQg5gHgqAsQgvAzAABGQAAA/AlAvQAHAKAJALQAqAwA7ABg");
	this.shape.setTransform(-4.1125,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],5.2,18.4,-4.1,-16.4).s().p("Aj+C0Qg2AAgqgmQAiAUApABIG8AAQBAgBAsgxQAtgxAAhFIAAgFQAAhGgtgyQgsgwhAAAImzAAIAMgBIHCAAQBAAAAtAzQAtA1AABKIAAADQAABKgtA0QgtA0hAAAg");
	this.shape_1.setTransform(2.95,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Bevels, new cjs.Rectangle(-38,-18,76,36), null);


(lib.Base_Bevel_Wide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.259)","rgba(255,255,255,0)"],[0,1],-7.4,-19,6.3,4.6).s().p("Ak5C+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQArAAAeAUIr5AAIgKABQg5gHgrAtQgWAYgNAkQgLAiAAAkQAAAgAJAgQAKAgASAYQAGALAKAJQAqAyA6AAg");
	this.shape.setTransform(-4.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],5.2,18.4,-4.1,-16.4).s().p("Al/C7Qg4AAgogmQAiAVAnAAILCAAQA/AAAtgxQAWgYALgjQAMggAAgjIAAgFQAAgkgMggQgMgjgVgZQgmgpg7gEIAOgDQBBAAAtAzQAXAaALAjQAMAjAAAmIAAADQAAAmgMAiQgLAkgXAZQgtA0hBAAg");
	this.shape_1.setTransform(2.95,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Bevel_Wide, new cjs.Rectangle(-51,-19,102,38), null);


(lib.Base_Bevel_Red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.259)","rgba(255,255,255,0)"],[0,1],-8.2,-21.1,7,5.1).s().p("AjKDIQhHAAgzg7Qgyg5AAhSIAAgDQAAhSAyg6QAyg6BIAAIHwAAQAsAAAlAXIoqAAIgLAAQhAgHguAxQg0A4AABOQAABGApA0QAHAMAKALQAvA2BBABg");
	this.shape.setTransform(-4.525,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],5.8,20.4,-4.5,-18.2).s().p("AkYDIQg9AAgtgqQAkAWAuABIHrAAQBHAAAxg4QAyg2gBhNIAAgFQABhOgyg4Qgxg2hHAAInhAAIAOAAIHwAAQBHAAAyA6QAzA6AABSIAAADQAABSgzA5QgyA7hHAAg");
	this.shape_1.setTransform(3.25,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Bevel_Red, new cjs.Rectangle(-42,-20,84,40), null);


(lib.Base_Bevel_Orange2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(243,243,243,0.259)","rgba(255,255,255,0)"],[0,1],-11,-15.1,-7.3,2.5).s().p("AnFBmQgjgjAAgyQAAgwAjgkQAjgjAyAAIL3AAQAxAAAjAjQAIAIAGAJQgigigxAAIr3AAQgyAAgjAjQgjAjAAAxQAAAmAVAeIgBgBg");
	this.shape.setTransform(-1.0625,-1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0.004,1],3.7,13.7,-4.4,-16.6).s().p("AmSB4QgqAAgggZQATAHAWABIMLAAQAugBAgggQAgggAAgsQAAguggghQgggfgugBIsEAAQAMgCAOAAIL3AAQAxAAAjAjQAkAjAAAxQAAAxgkAkQgjAjgxAAg");
	this.shape_1.setTransform(2.3375,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Bevel_Orange2, new cjs.Rectangle(-50,-12,100,24), null);


(lib.Base_Bevel_DarkBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bevel_Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.259)","rgba(255,255,255,0)"],[0,1],-37.2,-47.4,-0.7,15.9).s().p("AnrDwQhkAAhGhHQhGhGAAhjQAAhiBGhHQBHhGBjAAIPkAAQBkAABGBGQAoAoARAyQgRgogighQhEhDhhAAIvSAAQhhAAhFBDQhEBEAABeQAABgBEBDQBCBBBdACg");
	this.shape.setTransform(-0.625,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel_Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AnyDwQhjAAhHhHQhGhGAAhjQAAhiBGhHQAkgkAtgRQgpAQgiAiQhEBEAABfQAABfBEBCQBFBEBhAAIPQAAQBhAABEhEQBFhDAAheQAAhfhFhEQhChAhcgDIAMAAQBjAABGBGQBHBHAABiQAABkhHBFQhFBHhkAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Bevel_DarkBlue, new cjs.Rectangle(-73.8,-24,147.7,48), null);


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


(lib.KeyboardIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// key
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E6CBF").ss(2,1,1).p("ABpAyIgjAAIgmAAIhFAAIgiAAIghAAIAAgiIAAgfIAAghIAgAAIAiAAIAkAAIAlAAIAlAAIAhAAIAAAhIAAAfg");
	this.shape.setTransform(10.975,7.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E6CBF").ss(1,1,1).p("AA2gPIASAAIAAghAgCgPIAAghAARgPIASAAIAAghAgCgPIATAAAAgAQIAAAiAARAQIAPAAIAWAAIAAgfABGAQIAAAiAA2AQIAQAAIAjAAAAjgPIATAAAARAQIAAgfAg4gPIASAAIAAghAhogPIAgAAIAQAAIAAAfIATAAIAAAiAhIgwIAAAhAhHAyIAAgiIAPAAAhoAQIAhAAAglAQIAPAAIAAgaAgmgPIAkAAAgWAQIAnAAABIgPIAhAA");
	this.shape_1.setTransform(10.975,7.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyboardIcon, new cjs.Rectangle(-0.5,1.1,23,11.9), null);


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


(lib.RowScaffoldExclamationDone = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PrimaryAlert();
	this.instance.setTransform(-0.05,-0.05,0.8823,0.9312,0,0,0,4.2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape.setTransform(0.0232,-0.0237,1.8518,1.8518);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape_1.setTransform(-0.0186,0.0186,2.037,2.037);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// outerStroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E3500").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape_2.setTransform(0.0101,-0.0101,2.1296,2.1296);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RowScaffoldExclamationDone, new cjs.Rectangle(-23,-23,46,46), null);


(lib.RowScaffoldCheckmarkDone = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconStickerCheck();
	this.instance.setTransform(0,0,1,1,0,0,0,13.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape.setTransform(0.0232,-0.0237,1.8518,1.8518);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00BA00").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape_1.setTransform(-0.0186,0.0186,2.037,2.037);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// outerStroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006A00").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAhggArAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgrAAghggg");
	this.shape_2.setTransform(0.0101,-0.0101,2.1296,2.1296);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RowScaffoldCheckmarkDone, new cjs.Rectangle(-23,-23,46,46), null);


(lib.RadioButton_Up = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#66FF00").ss(1,2,1,3,true).p("AjKAAIGVAA");
	this.shape.setTransform(28.25,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AqEDjQhkAAAAhkIAAj9QAAhkBkAAIUJAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_1.setTransform(77.0244,24.9896,1.0332,1.1033);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Up, new cjs.Rectangle(-2,-2,156,52), null);


(lib.RadioButton_Selected = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0087FF").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33EDFF").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Selected, new cjs.Rectangle(-2,-2,154,50), null);


(lib.RadioButton_Incorrect = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FC6F08").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(252,111,8,0.298)").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Incorrect, new cjs.Rectangle(-2,-2,154,50), null);


(lib.RadioButton_Highlight = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AKdkNI06AAQh4AAAAB5IAAEpQAAB5B4AAIU6AAQB5AAAAh5IAAkpQAAh5h5AAg");
	this.shape.setTransform(75,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AKdEOI06AAQh4AAAAh5IAAkoQAAh6B4AAIU6AAQB5AAAAB6IAAEoQAAB5h4AAIgBAAg");
	this.shape_1.setTransform(75,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AqEDjQhkAAAAhkIAAj9QAAhkBkAAIUJAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_2.setTransform(77.0244,24.9896,1.0332,1.1033);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Highlight, new cjs.Rectangle(-5,-5,160,56), null);


(lib.RadioButton_DisabledIncorrect = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(204,204,204,0.6)").s().p("AqdD1QhfAAAAhgIAAkpQAAhgBfAAIU6AAQBgAAAABgIAAEpQAABghgAAg");
	this.shape.setTransform(75,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FC6F08").ss(3,2,1).p("AqYjiIUxAAQBQAAAABQIAAElQAABQhQAAI0xAAQhQAAAAhQIAAklQAAhQBQAAg");
	this.shape_1.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(252,111,8,0.298)").s().p("AqYDjQhQAAAAhQIAAklQAAhQBQAAIUxAAQBQAAAABQIAAElQAABQhQAAg");
	this.shape_2.setTransform(75.0084,23.0045,1.0062,1.0148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_DisabledIncorrect, new cjs.Rectangle(-2,-2,154,50), null);


(lib.RadioButton_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(204,204,204,0.6)").s().p("AqdD1QhfAAAAhgIAAkpQAAhgBfAAIU6AAQBgAAAABgIAAEpQAABghgAAg");
	this.shape.setTransform(75,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.RadioButton_base();
	this.instance.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AqEDjQhkAAAAhkIAAj9QAAhkBkAAIUJAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_1.setTransform(77.0244,24.9896,1.0332,1.1033);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadioButton_Disabled, new cjs.Rectangle(-2,-2,156,52), null);


(lib.IconZoomOut = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconZoom();
	this.instance.setTransform(-12.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAUIAAgmICBgBIAAAmIgtAAIAAABg");
	this.shape.setTransform(-12.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconZoomOut, new cjs.Rectangle(-27,-14,54.1,29), null);


(lib.IconZoomIn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconZoom();
	this.instance.setTransform(-12.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBBIAAguIgtABIAAgmIAtAAIAAguIAnAAIAAAuIAtgBIAAAmIgtAAIAAAug");
	this.shape.setTransform(-12.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconZoomIn, new cjs.Rectangle(-27,-14,54.1,29), null);


(lib.IconUnpack100 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconUnpackArrow();
	this.instance.setTransform(4.4,-2.85,1.2,1.2,0,0,180,18,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Box100();
	this.instance_1.setTransform(-9.5,1.2,1,1,0,0,0,16.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconUnpack100, new cjs.Rectangle(-27,-15.2,54.2,31.1), null);


(lib.IconUnpack10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconUnpackArrow();
	this.instance.setTransform(4.4,-2.85,1.2,1.2,0,0,180,18,9.3);

	this.instance_1 = new lib.Box10();
	this.instance_1.setTransform(-9.6,1.2,1,1,0,0,0,16.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconUnpack10, new cjs.Rectangle(-27,-15.2,54.2,31.1), null);


(lib.IconSignpostDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgXBzIhYAAQg6AAAAg2IAAjqQAAg2A6AAIDfAAQA6AAAAA2IAADqQAAA2g6AAIhZAAIgYBxg");
	this.shape.setTransform(19.125,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.Signpost();
	this.instance.setTransform(16.05,20.05,1.05,1.05,0,0,0,6.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B069").s().p("AgJEIQgDgDgBgDIghiJIhPAAQhBAAAAg8IAAkKQAAg8BBAAID7AAQBBAAAAA8IAAEKQAAA8hBAAIhSAAIgkCJQgBADgDADQgDACgDAAQgEAAgDgCgAipi9IAADqQAAA2A6AAIBYAAIAWBxIAYhxIBZAAQA6AAAAg2IAAjqQAAg2g6AAIjfAAQg6AAAAA2g");
	this.shape_1.setTransform(19.125,26.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBzIhYAAQg6AAAAg2IAAjqQAAg2A6AAIDfAAQA6AAAAA2IAADqQAAA2g6AAIhZAAIgYBxg");
	this.shape_2.setTransform(19.125,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.047)").s().p("AgJEIQgDgDgBgDIghiJIhPAAQhBAAAAg8IAAkKQAAg8BBAAID7AAQBBAAAAA8IAAEKQAAA8hBAAIhSAAIgkCJQgBADgDADQgDACgDAAQgEAAgDgCg");
	this.shape_3.setTransform(20.225,27.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSignpostDisabled, new cjs.Rectangle(0,0,39.4,54.3), null);


(lib.IconSignpost_Over = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Signpost();
	this.instance.setTransform(16.05,20.05,1.05,1.05,0,0,0,6.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E07400").s().p("AgJEIQgDgDgBgDIghiJIhPAAQhBAAAAg8IAAkKQAAg8BBAAID7AAQBBAAAAA8IAAEKQAAA8hBAAIhSAAIgkCJQgBADgDADQgDACgDAAQgEAAgDgCgAipi9IAADqQAAA2A6AAIBYAAIAWBxIAYhxIBZAAQA6AAAAg2IAAjqQAAg2g6AAIjfAAQg6AAAAA2g");
	this.shape.setTransform(19.125,26.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBzIhYAAQg6AAAAg2IAAjqQAAg2A6AAIDfAAQA6AAAAA2IAADqQAAA2g6AAIhZAAIgYBxg");
	this.shape_1.setTransform(19.125,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSignpost_Over, new cjs.Rectangle(0,0,38.3,53.2), null);


(lib.IconSignpost_Down = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Signpost();
	this.instance.setTransform(16.05,20.05,1.05,1.05,0,0,0,6.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C5407").s().p("AgJEIQgDgDgBgDIghiJIhPAAQhBAAAAg8IAAkKQAAg8BBAAID7AAQBBAAAAA8IAAEKQAAA8hBAAIhSAAIgkCJQgBADgDADQgDACgDAAQgEAAgDgCgAipi9IAADqQAAA2A6AAIBYAAIAWBxIAYhxIBZAAQA6AAAAg2IAAjqQAAg2g6AAIjfAAQg6AAAAA2g");
	this.shape.setTransform(19.125,26.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBzIhYAAQg6AAAAg2IAAjqQAAg2A6AAIDfAAQA6AAAAA2IAADqQAAA2g6AAIhZAAIgYBxg");
	this.shape_1.setTransform(19.125,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSignpost_Down, new cjs.Rectangle(0,0,38.3,53.2), null);


(lib.IconSignpost = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Signpost();
	this.instance.setTransform(16.05,20.05,1.05,1.05,0,0,0,6.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6900").s().p("AgJEIQgDgDgBgDIghiJIhPAAQhBAAAAg8IAAkKQAAg8BBAAID7AAQBBAAAAA8IAAEKQAAA8hBAAIhSAAIgkCJQgBADgDADQgDACgDAAQgEAAgDgCgAipi9IAADqQAAA2A6AAIBYAAIAWBxIAYhxIBZAAQA6AAAAg2IAAjqQAAg2g6AAIjfAAQg6AAAAA2g");
	this.shape.setTransform(19.125,26.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBzIhYAAQg6AAAAg2IAAjqQAAg2A6AAIDfAAQA6AAAAA2IAADqQAAA2g6AAIhZAAIgYBxg");
	this.shape_1.setTransform(19.125,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSignpost, new cjs.Rectangle(0,0,38.3,53.2), null);


(lib.IconMinimize = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MinimizeArrow();
	this.instance.setTransform(9.6,-8.8,0.6891,0.6891,-135,0,0,0,14.7);

	this.instance_1 = new lib.MinimizeArrow();
	this.instance_1.setTransform(-9.5,-8.8,0.6891,0.6891,135,0,0,-0.1,14.6);

	this.instance_2 = new lib.MinimizeArrow();
	this.instance_2.setTransform(9.55,9.4,0.6891,0.6891,-45,0,0,-0.6,15.2);

	this.instance_3 = new lib.MinimizeArrow();
	this.instance_3.setTransform(-9.55,9.4,0.6891,0.6891,45,0,0,0.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconMinimize, new cjs.Rectangle(-19.6,-18.8,39.2,37.7), null);


(lib.IconMaximize = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MaximizeArrow();
	this.instance.setTransform(9.6,-8.8,0.6891,0.6891,-135,0,0,0,14.7);

	this.instance_1 = new lib.MaximizeArrow();
	this.instance_1.setTransform(-9.5,-8.8,0.6891,0.6891,135,0,0,-0.1,14.6);

	this.instance_2 = new lib.MaximizeArrow();
	this.instance_2.setTransform(9.55,9.4,0.6891,0.6891,-45,0,0,-0.6,15.2);

	this.instance_3 = new lib.MaximizeArrow();
	this.instance_3.setTransform(-9.55,9.4,0.6891,0.6891,45,0,0,0.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconMaximize, new cjs.Rectangle(-20,-19.2,40.1,38.5), null);


(lib.IconFlipNumbergramAgeAg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// card icons
	this.icon = new lib.IconCard2NumbergramAgAg();
	this.icon.name = "icon";
	this.icon.setTransform(40.6,18.55,0.7,0.7);

	this.icon_1 = new lib.IconCard2AgeAg();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(11.95,18.6,0.7,0.7,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_1},{t:this.icon}]}).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTBbIBJAEIgLASIgSAcIgLAQgAALheIAJgPIASgcIANgTIAhBBg");
	this.shape.setTransform(26.375,18.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-6.7,-1.6,4.9,0.6).s().p("AhDAsQgGgDgCgGQgDgGADgHQAJgRAPgOIAAAAQAkgkAyAAQAXAAATAIIgSAcQgLgEgNAAQglAAgbAZIAAABQgLALgGAMQgDAHgGABIgGACQgDAAgDgCg");
	this.shape_1.setTransform(22.4682,8.6568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],7.4,1.3,-4.1,-0.2).s().p("AhOAkIASgcQAOAFAPAAQAlAAAagZIAAAAQAKgLAHgMQADgGAGgCQAGgCAGAEQAGADACAGQACAGgDAGQgJAQgOANQgjAkgyAAQgZAAgWgJg");
	this.shape_2.setTransform(30.2025,29.0886);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipNumbergramAgeAg, new cjs.Rectangle(-0.7,-0.9,53.900000000000006,39.8), null);


(lib.IconFlipCard2AgeAg = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconRotate2AgeAg();
	this.icon.name = "icon";
	this.icon.setTransform(-2.45,0.35,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipCard2AgeAg, new cjs.Rectangle(-17.7,-16.4,39.599999999999994,32.9), null);


(lib.IconChoose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1 copy
	this.instance = new lib.IconCheckChoose();
	this.instance.setTransform(6.2,-3.05,0.9147,0.912,0,0,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLCMIAAkXID4AAQgOAOgMAPIjBAAIAADdIDdAAIAAhqIAJgIIAAAAQAKgMAKgKIAAClg");
	this.shape.setTransform(0,-0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// IconCheck
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ACMgZIAAClIkXAAIAAkXID4AAQgOAOgMAPIjBAAIAADdIDdAAIAAhqQAEgFAFgDIAAAAQAKgMAKgKg");
	this.shape_1.setTransform(0,-0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiLCMIAAkXID4AAQgOAOgMAPIjBAAIAADdIDdAAIAAhqIAJgIIAAAAQAKgMAKgKIAAClg");
	this.shape_2.setTransform(0,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconChoose, new cjs.Rectangle(-15,-16.9,44,47.9), null);


(lib.IconAddHelper_Small = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconHelperArrow();
	this.instance.setTransform(12.5,0.6,1,1,0,0,0,17.5,8.6);

	this.instance_1 = new lib.IconPlus();
	this.instance_1.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("ADNBWIBahKIhahIIAAAqIjRAAIAAhDIgyAAIAACEIEDAAgAjKhLIgtAAIAAAxIgvAAIAAApIAvAAIAAAxIAtAAIAAgxIAwAAIAAgpIgwAAg");
	this.shape.setTransform(0.525,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADNAvIkDAAIAAiEIAyAAIAABDIDRAAIAAgqIBaBIIhaBKgAj3BAIAAgxIgvAAIAAgpIAvAAIAAgxIAtAAIAAAxIAwAAIAAApIgwAAIAAAxg");
	this.shape_1.setTransform(0.525,0.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddHelper_Small, new cjs.Rectangle(-30,-9,61.1,19.2), null);


(lib.IconAddHelper = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconBulb();
	this.instance.setTransform(11,-0.6,0.8,0.8,0,0,0,0,-4.5);

	this.instance_1 = new lib.IconPlus();
	this.instance_1.setTransform(-18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AgOhaIAdAfIAVgVIgegfgACdg9QgUgUgiAAIgCAAQghABgUATQgSATAAAdQAAAWASAaQATAaABAjIBFAAQABgjATgaQASgaAAgWQAAgdgSgTgADGhtIgeAdIAVAVIAegegABXibIAAA2IAeAAIAAg2gAD+gfIg1AGIAEAdIA1gFgAilhDIgtAAIAAAxIgvAAIAAApIAvAAIAAAxIAtAAIAAgxIAwAAIAAgpIgwAAgAg0gBIA0AFIADgdIg0gGgADcAyIgXgNIgPAaIAWANgACBBwIABAAQAFAAAEADQADAEAAAFQAAAFgDADQgCABAAABQAAABACABQADADAAAFQAAAFgDAEQgEADgFAAIg2AAQgBAAgBAAQgFAAgDgDQgEgEAAgFQAAgFAEgDQABgBABgBQgBgBgBgBQgEgDAAgFQAAgFAEgEQADgDAFAAQABAAABgBIA1AAgAgEBOIAagQIgPgaIgaAQg");
	this.shape.setTransform(0.7875,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMCcIgCAAQgFAAgDgEQgEgDAAgFQAAgFAEgEIACgBIgCgCQgEgEAAgFQAAgEAEgEQADgEAFABIACgBIA1AAIAAABIABAAQAFgBAEAEQADAEAAAEQAAAFgDAEIgCACIACABQADAEAAAFQAAAFgDADQgEAEgFAAgABEBgQgBgjgTgaQgSgaAAgWQAAgdASgTQAUgUAhgBIACAAQAiAAAUAVQASATAAAdQAAAWgSAaQgTAagBAjgABYg/QgPADgNAOIAAAAQgNAOABAbQAAADADACQACADAEAAIACAAIAAgWIAIAAQACgJAEgGIAAAAQAIgIAIgCIAAgGIAJAAQABgDAAgDQgBgEgDgCIgFgBIgCAAgAgTA0IAagQIAPAaIgaAQgAC2A+IAPgaIAXAOIgQAagAjSBIIAAgxIgvAAIAAgpIAvAAIAAgxIAtAAIAAAwIAwAAIAAAqIgwAAIAAAxgADJgZIA1gGIAEAeIg1AFgAg0gBIADgeIA0AFIgDAegACohRIAegdIAVAVIgeAegAgOhaIAUgVIAeAeIgVAWgABXhlIAAg2IAeAAIAAA2g");
	this.shape_1.setTransform(0.7875,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconAddHelper, new cjs.Rectangle(-26,-17,53.6,33.4), null);


(lib.DBLASmallGlossaryButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,Down:10,"Disabled":15};
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
	this.icon = new lib.IconGlossaryDark();
	this.icon.name = "icon";
	this.icon.setTransform(0,-4.8,1,1,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08,alpha:0.8008},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:1},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.25},0).wait(5));

	// button
	this.base = new lib.SmallCircleButtonBase();
	this.base.name = "base";

	this.base_1 = new lib.SmallCircleButtonBaseBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.SmallCircleButtonBaseDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.SmallCircleButtonBaseGrayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,0.5453,1.0906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.DBLAPatternsInputValueEntered = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_66_24 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_66_24.name = "nineslice_0_0_66_24";
	this.nineslice_0_0_66_24.setTransform(45.05,22.25,1.7367,0.6315,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_66_24).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AldA1QhVAAAAhUIAAgVQACBQBTAAIK7AAQBTAAAChQIAAAVQAABUhVAAg");
	this.shape.setTransform(45,38.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AFegcIq7AAQhTAAgCBSIAAgXQAAhTBVAAIK7AAQBVAAAABTIAAAXQgChShTAAg");
	this.shape_1.setTransform(45,6.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_2.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// white_outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAgAmyB9QAABVBVAAIK7AAQBVAAAAhVIAAj5QAAhVhVAAIq7AAIK7AAQBVAAAABVIAAD5QAABVhVAAIq7AAQhVAAAAhVIAAj5QAAhVBVAAQhVAAAABVIAAD5g");
	this.shape_3.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// drk_outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0087FF").s().p("AldEJQiMAAAAiMIAAj5QAAiMCMAAIK7AAQCMAAAACMIAAD5QAACMiMAAg");
	this.shape_4.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputValueEntered, new cjs.Rectangle(-4,-4,98,53), null);


(lib.DBLAPatternsInputValid = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_66_24 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_66_24.name = "nineslice_0_0_66_24";
	this.nineslice_0_0_66_24.setTransform(45.05,22.25,1.7367,0.6315,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_66_24).wait(1));

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(232,237,240,0.698)").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAg");
	this.shape.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAgAmyh8IAAD5QAABVBVAAIK7AAQBVAAAAhVIAAj5QAAhVhVAAIq7AAQhVAAAABVg");
	this.shape_1.setTransform(45,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_2.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// color_outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00BA00").s().p("AldEJQiMAAAAiMIAAj5QAAiMCMAAIK7AAQCMAAAACMIAAD5QAACMiMAAgAmZh8IAAD5QAAA8A8AAIK7AAQA8AAAAg8IAAj5QAAg8g8AAIq7AAQg8AAAAA8g");
	this.shape_3.setTransform(45,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0087FF").s().p("AldC5Qg8AAAAg8IAAj5QAAg8A8AAIK7AAQA8AAAAA8IAAD5QAAA8g8AAg");
	this.shape_4.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputValid, new cjs.Rectangle(-4,-4,98,53), null);


(lib.DBLAPatternsInputIncorrect = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_66_24 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_66_24.name = "nineslice_0_0_66_24";
	this.nineslice_0_0_66_24.setTransform(45.05,22.25,1.7367,0.6315,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_66_24).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white_outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAgAmyB9QAABVBVAAIK7AAQBVAAAAhVIAAj5QAAhVhVAAIq7AAIK7AAQBVAAAABVIAAD5QAABVhVAAIq7AAQhVAAAAhVIAAj5QAAhVBVAAQhVAAAABVIAAD5g");
	this.shape_1.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// red_outline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AldEJQiMAAAAiMIAAj5QAAiMCMAAIK7AAQCMAAAACMIAAD5QAACMiMAAgAmZh8IAAD5QAAA8A8AAIK7AAQA8AAAAg8IAAj5QAAg8g8AAIq7AAQg8AAAAA8g");
	this.shape_2.setTransform(45,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E7E7").s().p("AldC5Qg8AAAAg8IAAj5QAAg8A8AAIK7AAQA8AAAAA8IAAD5QAAA8g8AAg");
	this.shape_3.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputIncorrect, new cjs.Rectangle(-4,-4,98,53), null);


(lib.DBLAPatternsInputEntered = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_66_24 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_66_24.name = "nineslice_0_0_66_24";
	this.nineslice_0_0_66_24.setTransform(45.05,22.25,1.7367,0.6315,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_66_24).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AldA1QhVAAAAhUIAAgVQACBQBTAAIK7AAQBTAAAChQIAAAVQAABUhVAAg");
	this.shape.setTransform(45,38.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AFegcIq7AAQhTAAgCBSIAAgXQAAhTBVAAIK7AAQBVAAAABTIAAAXQgChShTAAg");
	this.shape_1.setTransform(45,6.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_2.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// white_outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAgAmyB9QAABVBVAAIK7AAQBVAAAAhVIAAj5QAAhVhVAAIq7AAIK7AAQBVAAAABVIAAD5QAABVhVAAIq7AAQhVAAAAhVIAAj5QAAhVBVAAQhVAAAABVIAAD5g");
	this.shape_3.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// drk_outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06557B").s().p("AldEJQiMAAAAiMIAAj5QAAiMCMAAIK7AAQCMAAAACMIAAD5QAACMiMAAgAmZh8IAAD5QAAA8A8AAIK7AAQA8AAAAg8IAAj5QAAg8g8AAIq7AAQg8AAAAA8g");
	this.shape_4.setTransform(45,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7E7E7").s().p("AldC5Qg8AAAAg8IAAj5QAAg8A8AAIK7AAQA8AAAAA8IAAD5QAAA8g8AAg");
	this.shape_5.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputEntered, new cjs.Rectangle(-4,-4,98,53), null);


(lib.DBLAPatternsInputDisabled = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_66_24 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_66_24.name = "nineslice_0_0_66_24";
	this.nineslice_0_0_66_24.setTransform(45.05,22.25,1.7367,0.6315,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_66_24).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AldDwQhzAAAAhzIAAj5QAAhzBzAAIK7AAQBzAAAABzIAAD5QAABzhzAAgAmyh8IAAD5QAABVBVAAIK7AAQBVAAAAhVIAAj5QAAhVhVAAIq7AAQhVAAAABVg");
	this.shape.setTransform(45,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_1.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// color_outline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93AAC2").s().p("AldEJQiMAAAAiMIAAj5QAAiMCMAAIK7AAQCMAAAACMIAAD5QAACMiMAAgAmZh8IAAD5QAAA8A8AAIK7AAQA8AAAAg8IAAj5QAAg8g8AAIq7AAQg8AAAAA8g");
	this.shape_2.setTransform(45,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0087FF").s().p("AldC5Qg8AAAAg8IAAj5QAAg8A8AAIK7AAQA8AAAAA8IAAD5QAAA8g8AAg");
	this.shape_3.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputDisabled, new cjs.Rectangle(-4,-4,98,53), null);


(lib.DBLAPatternsInputButtonFrameIncorrect = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_118_25 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_118_25.name = "nineslice_0_0_118_25";
	this.nineslice_0_0_118_25.setTransform(69.95,22.3,3.1051,0.6579,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_118_25).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AldA1QhVAAAAhUIAAgVQACBQBTAAIK7AAQBTAAAChQIAAAVQAABUhVAAg");
	this.shape.setTransform(45,38.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AFegcIq7AAQhTAAgCBSIAAgXQAAhTBVAAIK7AAQBVAAAABTIAAAXQgChShTAAg");
	this.shape_1.setTransform(45,6.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_2.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// white_outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("ApXjgISvAAQBkAAAABkIAAD5QAABkhkAAIyvAAQhkAAAAhkIAAj5QAAhkBkAAg");
	this.shape_3.setTransform(70,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApXDhQhkAAAAhkIAAj5QAAhkBkAAISvAAQBkAAAABkIAAD5QAABkhkAAg");
	this.shape_4.setTransform(70,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// red_outline
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ApXEYQibAAAAibIAAj5QAAibCbAAISvAAQCbAAAACbIAAD5QAACbibAAgAqEh8IAAD5QAAAtAtAAISvAAQAtAAAAgtIAAj5QAAgtgtAAIyvAAQgtAAAAAtg");
	this.shape_5.setTransform(70.0321,22.5521,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputButtonFrameIncorrect, new cjs.Rectangle(-4.7,-5.1,149.5,55.4), null);


(lib.DBLAPatternsInputButtonFrame = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_0_118_25 = new lib.NinesliceDropGuide();
	this.nineslice_0_0_118_25.name = "nineslice_0_0_118_25";
	this.nineslice_0_0_118_25.setTransform(69.95,22.3,3.1051,0.6579,0,0,0,19.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_0_118_25).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AldA1QhVAAAAhUIAAgVQACBQBTAAIK7AAQBTAAAChQIAAAVQAABUhVAAg");
	this.shape.setTransform(45,38.1625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AFegcIq7AAQhTAAgCBSIAAgXQAAhTBVAAIK7AAQBVAAAABTIAAAXQgChShTAAg");
	this.shape_1.setTransform(45,6.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AldDSQhVAAAAhVIAAj5QAAhVBVAAIK7AAQBVAAAABVIAAD5QAABVhVAAg");
	this.shape_2.setTransform(45,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// white_outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApXDwQhzAAAAhzIAAj5QAAhzBzAAISvAAQBzAAAABzIAAD5QAABzhzAAg");
	this.shape_3.setTransform(70,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// drk_outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06557B").s().p("ApREVQiZAAAAiZIAAj3QAAiZCZAAISjAAQCaAAAACZIAAD3QAACZiaAAgAp9h7IAAD3QAAAtAsAAISjAAQAtAAAAgtIAAj3QAAgtgtAAIyjAAQgsAAAAAtg");
	this.shape_4.setTransform(70.05,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPatternsInputButtonFrame, new cjs.Rectangle(-4.7,-5.1,149.5,55.4), null);


(lib.DBLAFunctionGraphAudioButton = function(mode,startPosition,loop,reversed) {
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

	// Layer 2
	this.instance = new lib.IconSpeaker();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.06,scaleY:1.06,alpha:0.8516},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:1},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.3984},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.ToolButton();

	this.instance_2 = new lib.ToolButtonBrighter();
	this.instance_2.setTransform(0,0,1.06,1.06);

	this.instance_3 = new lib.ToolButtonDarker();
	this.instance_3.setTransform(0,0,0.94,0.94);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACDhsQAnAuAAA+QAABHgyAyQgxAxhHAAQhGAAgxgxQgvgvgDhBQAAgEAAgFQAAhGAygxQAxgyBGAAQBHAAAxAyQAGAFAFAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECECEC").s().p("Ah3B5QgvgwgChAIgBgJQAAhGAygxQAxgyBGAAQBHAAAxAyIALALQAnAuAAA+QAABGgyAzQgxAxhHAAQhGAAgxgxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,39.3,40.3);


(lib.DBLAButtonUnitConfirm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAvIgegeQgEgEAAgGQAAgHAEgDQAFgEAGAAQAGAAAEAEIATASIA8g8QAEgFAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAFIhGBHQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(-0.5164,0.2316,1.1971,1.1971);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({regX:0.3,regY:0.3,scaleX:1.366,scaleY:1.366,x:-0.15,y:0.65},0).wait(5).to({scaleX:1.1372,scaleY:1.1372,x:-0.1,y:0.55},0).wait(5).to({regX:0,regY:0,scaleX:1.1971,scaleY:1.1971,x:-0.5164,y:0.2316},0).wait(10));

	// btn_base
	this.instance = new lib.CircleBase_Blue_Small_Up();
	this.instance.setTransform(0.8,0.85,1.3467,1.3467,0,0,0,0.9,1.1);

	this.instance_1 = new lib.CircleBase_Blue_Small_Over();
	this.instance_1.setTransform(1.1,1.15,1.5367,1.5367,0,0,0,1,1.2);

	this.instance_2 = new lib.CircleBase_Blue_Small_Down();
	this.instance_2.setTransform(0.9,0.75,1.2793,1.2793,0,0,0,1,1.1);

	this.instance_3 = new lib.CircleBase_Blue_Small_Disabled();
	this.instance_3.setTransform(0.8,0.85,1.3467,1.3467,0,0,0,0.9,1.1);

	this.instance_4 = new lib.CircleBase_Blue_Small_Highlight();
	this.instance_4.setTransform(0.8,0.85,1.3467,1.3467,0,0,0,0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-20.7,40.599999999999994,40.599999999999994);


(lib.DBLAButtonShowText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("ACfieQhChChdAAQhcAAhCBCQhCBCAABcQAABdBCBCQBCBCBcAAQBdAABChCQBChCAAhdQAAhchChCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAADhQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAIAAAAgAh7h7QgzAzAABIQAABJAzAzQAzAzBIAAQBJAAAzgzQAzgzAAhJQAAhIgzgzQgzgzhJAAQhIAAgzAzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Layer 2
	this.instance = new lib.IconElipses();
	this.instance.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.06,scaleY:1.06,alpha:0.8008},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:1},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.3008},0).wait(5).to({alpha:1},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.ToolButton();

	this.instance_2 = new lib.ToolButtonBrighter();
	this.instance_2.setTransform(0,0,1.06,1.06);

	this.instance_3 = new lib.ToolButtonDarker();
	this.instance_3.setTransform(0,0,0.94,0.94);

	this.instance_4 = new lib.ToolButtonDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.5,47,47);


(lib.DBLAButtonPlayAudio = function(mode,startPosition,loop,reversed) {
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

	// Layer 2
	this.instance = new lib.IconSpeaker();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.06,scaleY:1.06,alpha:0.8008},0).wait(5).to({scaleX:0.94,scaleY:0.94},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.3008},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.ToolButton();

	this.instance_2 = new lib.ToolButtonBrighter();
	this.instance_2.setTransform(0,0,1.06,1.06);

	this.instance_3 = new lib.ToolButtonDarker();
	this.instance_3.setTransform(0,0,0.94,0.94);

	this.instance_4 = new lib.ToolButtonDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,39.3,40.3);


(lib.DBLAButtonFlip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Selected":20,"Highlight":25};
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
	this.frame_24 = function() {
		/* stop();*/
	}
	this.frame_29 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AD3j3QhmhmiRAAQiQAAhnBmQhmBnAACQQAACRBmBmQBnBnCQAAQCRAABmhnQBnhmAAiRQAAiQhnhng");
	this.shape.setTransform(0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAAFeQiQAAhnhnQhmhmAAiRQAAiQBmhnQBnhmCQAAQCRAABmBmQBnBnAACQQAACRhnBmQhmBniRAAIAAAAgAjTjTQhYBYAAB7QAAB8BYBYQBYBYB7AAQB8AABYhYQBYhYAAh8QAAh7hYhYQhYhYh8AAQh7AAhYBYg");
	this.shape_1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},25).wait(5));

	// icon
	this.icon = new lib.IconFlipCard2AgeAg();
	this.icon.name = "icon";
	this.icon.setTransform(0.55,-1.05);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({regX:0.1,scaleX:1.05,scaleY:1.05,x:0.6},0).wait(5).to({regX:0,scaleX:0.95,scaleY:0.95,x:0.55,y:-1},0).wait(5).to({scaleX:1,scaleY:1,y:-1.05,alpha:0.3516},0).wait(5).to({alpha:1},0).wait(10));

	// button
	this.base = new lib.CircleButtonBase();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBaseBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(-0.15,-0.15,1.05,1.05);

	this.base_2 = new lib.CircleButtonBaseDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0.1,0.1,0.95,0.95);

	this.base_3 = new lib.CircleButtonBaseDisabled();
	this.base_3.name = "base_3";

	this.base_4 = new lib.CircleButtonBaseSelected();
	this.base_4.name = "base_4";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base_4}]},5).to({state:[{t:this.base}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,72,72);


(lib.DBLAButtonAudioPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AhTBWQgkgjAAgzQAAgxAkgiQAigkAxAAQAxAAAkAkQAjAiAAAxQAAAygjAkQgkAigxAAQgxAAgigig");
	this.shape.setTransform(-0.05,0.05,1.366,1.366,0,0,0,-0.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AhTBWQgkgjAAgzQAAgxAkgiQAigkAxAAQAxAAAkAkQAjAiAAAxQAAAygjAkQgkAigxAAQgxAAgigig");
	this.shape_1.setTransform(-0.1,-0.05,1.1372,1.1372,0,0,0,-0.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.8)").s().p("AhTBWQgkgjAAgzQAAgxAkgiQAigkAxAAQAxAAAkAkQAjAiAAAxQAAAygjAkQgkAigxAAQgxAAgigig");
	this.shape_2.setTransform(-0.318,-0.568,1.1971,1.1971);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[]},5).wait(5));

	// icon
	this.instance = new lib.soundonicon();
	this.instance.setTransform(0.5,0,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.1009,scaleY:1.1,x:0.55},0).wait(5).to({regX:0.6,scaleX:0.7798,scaleY:0.7795,x:0.45},0).wait(5).to({regX:0.5,scaleX:0.8716,scaleY:0.8705,y:-0.05},0).wait(5).to({scaleX:1,scaleY:1,x:0.5,y:0},0).wait(5));

	// btn_base
	this.instance_1 = new lib.CircleBase_Blue_Small_Up();
	this.instance_1.setTransform(1.15,1.35,1.6646,1.6646,0,0,0,0.7,0.8);

	this.instance_2 = new lib.CircleBase_Blue_Small_Disabled();
	this.instance_2.setTransform(1.25,0.85,1.5898,1.5898,0,0,0,0.8,0.9);

	this.instance_3 = new lib.CircleBase_Blue_Small_Highlight();
	this.instance_3.setTransform(0.65,0.65,1.6567,1.6567,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:0.7,regY:0.8,scaleX:1.6646,scaleY:1.6646,x:1.15,y:1.35}}]}).to({state:[{t:this.instance_1,p:{regX:0.8,regY:1,scaleX:1.8298,scaleY:1.8298,x:1.45,y:1.85}}]},5).to({state:[{t:this.instance_1,p:{regX:0.8,regY:1,scaleX:1.4977,scaleY:1.4977,x:1.2,y:0.85}}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-24.7,50,50);


(lib.ButtonViewChartDisabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Chart_Disabled();
	this.instance.setTransform(92,20.75,0.5499,0.611,0,0,0,34.5,22.6);

	this.icon = new lib.IconEye_Purple_Disabled();
	this.icon.name = "icon";
	this.icon.setTransform(32.95,20.25,1.13,1.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon},{t:this.instance}]}).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApICbQgKAAAAgKIAAkhQAAgKAKAAISRAAQAKAAAAAKIAAEhQAAAKgKAAg");
	this.shape.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApIDNQg8AAAAg8IAAkhQAAg8A8AAISRAAQA8AAAAA8IAAEhQAAA8g8AAg");
	this.shape_1.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonViewChartDisabled, new cjs.Rectangle(0,0,129,41), null);


(lib.ButtonViewChartDarker = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Chart_Down();
	this.instance.setTransform(92,20.75,0.5499,0.611,0,0,0,34.5,22.6);

	this.icon = new lib.IconEye_Purple_Down();
	this.icon.name = "icon";
	this.icon.setTransform(32.95,20.25,1.13,1.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon},{t:this.instance}]}).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApICbQgKAAAAgKIAAkhQAAgKAKAAISRAAQAKAAAAAKIAAEhQAAAKgKAAg");
	this.shape.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("ApICvQgeAAAAgeIAAkhQAAgeAeAAISRAAQAeAAAAAeIAAEhQAAAegeAAg");
	this.shape_1.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApIDNQg8AAAAg8IAAkhQAAg8A8AAISRAAQA8AAAAA8IAAEhQAAA8g8AAg");
	this.shape_2.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonViewChartDarker, new cjs.Rectangle(0,0,129,41), null);


(lib.ButtonViewChartBrighter = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Chart_Over();
	this.instance.setTransform(92,20.75,0.5499,0.611,0,0,0,34.5,22.6);

	this.icon = new lib.IconEye_Purple_Over();
	this.icon.name = "icon";
	this.icon.setTransform(32.95,20.25,1.13,1.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon},{t:this.instance}]}).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApICbQgKAAAAgKIAAkhQAAgKAKAAISRAAQAKAAAAAKIAAEhQAAAKgKAAg");
	this.shape.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#949494").s().p("ApICvQgeAAAAgeIAAkhQAAgeAeAAISRAAQAeAAAAAeIAAEhQAAAegeAAg");
	this.shape_1.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApIDNQg8AAAAg8IAAkhQAAg8A8AAISRAAQA8AAAAA8IAAEhQAAA8g8AAg");
	this.shape_2.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonViewChartBrighter, new cjs.Rectangle(0,0,129,41), null);


(lib.ButtonViewChart = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Chart();
	this.instance.setTransform(92,20.75,0.5499,0.611,0,0,0,34.5,22.6);

	this.icon = new lib.IconEye_Purple();
	this.icon.name = "icon";
	this.icon.setTransform(32.95,20.25,1.13,1.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon},{t:this.instance}]}).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApICbQgKAAAAgKIAAkhQAAgKAKAAISRAAQAKAAAAAKIAAEhQAAAKgKAAg");
	this.shape.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#757575").s().p("ApICvQgeAAAAgeIAAkhQAAgeAeAAISRAAQAeAAAAAeIAAEhQAAAegeAAg");
	this.shape_1.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApIDNQg8AAAAg8IAAkhQAAg8A8AAISRAAQA8AAAAA8IAAEhQAAA8g8AAg");
	this.shape_2.setTransform(64.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("ApIDNQg8AAAAg8IAAkhQAAg8A8AAISRAAQA8AAAAA8IAAEhQAAA8g8AAg");
	this.shape_3.setTransform(66.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonViewChart, new cjs.Rectangle(0,0,131,43), null);


(lib.ButtonHintSmallDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(246,246,246,0.6)").s().p("AjeDzIgKgKQhhhgAAiIQAAiJBhhgQBghhCJAAQCIAABgBhIAKAKQBXBeAACBQAACIhhBgQhgBhiIAAQiBAAhehXg");
	this.shape.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHint();
	this.instance.setTransform(0,-2.1,0.8024,0.8,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBaseDisabled();
	this.instance_1.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintSmallDisabled, new cjs.Rectangle(-21.8,-21.8,45,45), null);


(lib.ButtonHintSmallDarker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AjeDzIgKgKQhhhgAAiIQAAiJBhhgQBghhCJAAQCIAABgBhIAKAKQBXBeAACBQAACIhhBgQhgBhiIAAQiBAAhehXg");
	this.shape.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHint();
	this.instance.setTransform(0,-2.1,0.8024,0.8,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();
	this.instance_1.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintSmallDarker, new cjs.Rectangle(-21.8,-21.8,45,45), null);


(lib.ButtonHintSmallBrighter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AjeDzIgKgKQhhhgAAiIQAAiJBhhgQBghhCJAAQCIAABgBhIAKAKQBXBeAACBQAACIhhBgQhgBhiIAAQiBAAhehXg");
	this.shape.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHint();
	this.instance.setTransform(0,-2.1,0.8,0.7976,0,0,0,0,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();
	this.instance_1.setTransform(0,0,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintSmallBrighter, new cjs.Rectangle(-21.8,-21.8,45,45), null);


(lib.ButtonHintSmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHint();
	this.instance.setTransform(0,-2.1,0.8,0.7976,0,0,0,0,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();
	this.instance_1.setTransform(0,0,0.6618,0.6618);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintSmall, new cjs.Rectangle(-21.8,-21.8,45,45), null);


(lib.ButtonHintDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHintDisabled();
	this.instance.setTransform(0,-2.1,1.0667,1.0635,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBaseDisabled();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintDisabled, new cjs.Rectangle(-33,-33,68,68), null);


(lib.ButtonHintDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHintDown();
	this.instance.setTransform(0,-2.1,1.0667,1.0635,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintDarker, new cjs.Rectangle(-32.9,-32.9,67.9,67.9), null);


(lib.ButtonHintBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHintOver();
	this.instance.setTransform(0,-2.1,1.0667,1.0635,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHintBrighter, new cjs.Rectangle(-32.9,-32.9,67.9,67.9), null);


(lib.ButtonHint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 copy 2
	this.instance = new lib.IconBulbHint();
	this.instance.setTransform(0,-2.1,1.0667,1.0635,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.HintBase();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonHint, new cjs.Rectangle(-32.9,-32.9,67.9,67.9), null);


(lib.ButtonContinuePopUpDisabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GreenArrow_Disabled();
	this.instance.setTransform(76.35,23.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFC+QgKAAAAgKIAAlnQAAgKAKAAIWLAAQAKAAAAAKIAAFnQAAAKgKAAg");
	this.shape.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArFDvQg8AAAAg8IAAllQAAg8A8AAIWLAAQA8AAAAA8IAAFlQAAA8g8AAg");
	this.shape_1.setTransform(77,24.0184,1,1.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonContinuePopUpDisabled, new cjs.Rectangle(0,0,154,48), null);


(lib.ButtonContinuePopUpDarker = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GreenArrow_Down();
	this.instance.setTransform(76.35,23.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFC+QgKAAAAgKIAAlnQAAgKAKAAIWLAAQAKAAAAAKIAAFnQAAAKgKAAg");
	this.shape.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4B4B4").s().p("ArFDSQgeAAAAgeIAAlnQAAgeAeAAIWLAAQAeAAAAAeIAAFnQAAAegeAAg");
	this.shape_1.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArFDvQg8AAAAg8IAAllQAAg8A8AAIWLAAQA8AAAAA8IAAFlQAAA8g8AAg");
	this.shape_2.setTransform(77,24.0184,1,1.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonContinuePopUpDarker, new cjs.Rectangle(0,0,154,48), null);


(lib.ButtonContinuePopUpBrighter = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GreenArrow_Over();
	this.instance.setTransform(76.35,23.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFC+QgKAAAAgKIAAlnQAAgKAKAAIWLAAQAKAAAAAKIAAFnQAAAKgKAAg");
	this.shape.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECECEC").s().p("ArFDSQgeAAAAgeIAAlnQAAgeAeAAIWLAAQAeAAAAAeIAAFnQAAAegeAAg");
	this.shape_1.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArFDvQg8AAAAg8IAAllQAAg8A8AAIWLAAQA8AAAAA8IAAFlQAAA8g8AAg");
	this.shape_2.setTransform(77,24.0184,1,1.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonContinuePopUpBrighter, new cjs.Rectangle(0,0,154,48), null);


(lib.ButtonContinuePopUp = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GreenArrow();
	this.instance.setTransform(76.35,23.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArFC+QgKAAAAgKIAAlnQAAgKAKAAIWLAAQAKAAAAAKIAAFnQAAAKgKAAg");
	this.shape.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// innerStroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C4C4").s().p("ArFDSQgeAAAAgeIAAlnQAAgeAeAAIWLAAQAeAAAAAeIAAFnQAAAegeAAg");
	this.shape_1.setTransform(77,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArFDvQg8AAAAg8IAAllQAAg8A8AAIWLAAQA8AAAAA8IAAFlQAAA8g8AAg");
	this.shape_2.setTransform(77,24.0184,1,1.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("ArJDtQg7AAAAg8IAAlhQAAg8A7AAIWTAAQA7AAAAA8IAAFhQAAA8g7AAg");
	this.shape_3.setTransform(79.35,25.8677,1,1.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonContinuePopUp, new cjs.Rectangle(0,0,156.7,49.7), null);


(lib.ButtonAddSignpostDarker = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconAddSignpost_Down();
	this.instance.setTransform(26,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Marker Signpost
	this.instance_1 = new lib.IconSignpost_Down();
	this.instance_1.setTransform(66.8,27.3,0.9411,0.9411,0,0,0,13.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.ButtonSignpost();
	this.instance_2.setTransform(54.5,46.6,1,1,0,0,0,54.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonAddSignpostDarker, new cjs.Rectangle(0,0,107.6,67.6), null);


(lib.ButtonAddSignpostBrighter = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconAddSignpost_Over();
	this.instance.setTransform(26,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Marker Signpost
	this.instance_1 = new lib.IconSignpost_Over();
	this.instance_1.setTransform(66.8,27.3,0.9411,0.9411,0,0,0,13.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.ButtonSignpost();
	this.instance_2.setTransform(54.5,46.6,1,1,0,0,0,54.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonAddSignpostBrighter, new cjs.Rectangle(0,0,107.6,67.6), null);


(lib.ButtonAddSignpost_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IconAddSignpostDisabled();
	this.instance.setTransform(27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Marker Signpost
	this.instance_1 = new lib.IconSignpostDisabled();
	this.instance_1.setTransform(66.8,27.3,0.9411,0.9411,0,0,0,13.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.ButtonSignpostDisabled();
	this.instance_2.setTransform(54.5,46.6,1,1,0,0,0,54.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonAddSignpost_Disabled, new cjs.Rectangle(0,0,107.6,67.6), null);


(lib.ButtonAddSignpost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon
	this.instance = new lib.IconSignpost();
	this.instance.setTransform(66.8,27.3,0.9411,0.9411,0,0,0,13.6,18.4);

	this.instance_1 = new lib.IconAddSignpost();
	this.instance_1.setTransform(26,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Button
	this.instance_2 = new lib.ButtonSignpost();
	this.instance_2.setTransform(54.5,46.6,1,1,0,0,0,54.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonAddSignpost, new cjs.Rectangle(0,0,107.6,67.6), null);


(lib.BinBottomFullDisabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinRidges_Disabled();
	this.instance.setTransform(21.6,17.9,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B069").s().p("AiOCxQgHAAgHgCQgFgBgFgEQgKgGAAgKIgYkzQAAgJAKgHQALgHANAAIFNAAQAOAAAKAHIABAAQAIAGABAJIAAABIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape.setTransform(20.725,17.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("AiaCwQgOAAgKgHQgJgGgBgJQAHACAHAAIEdAAQAPAAAKgHIAAAAQAJgGAAgKIAYkzIAAgBQAFACAFADIABAAQAJAHAAAJIgYEzQAAAKgJAGIAAAAQgKAHgPAAg");
	this.shape_1.setTransform(23.925,19.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottomFullDisabled, new cjs.Rectangle(-2,-2,44.8,40), null);


(lib.BinBottomFull_Over = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinRidges_Over();
	this.instance.setTransform(21.6,17.9,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.BinBottom();
	this.instance_1.setTransform(20.7,17.7,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottomFull_Over, new cjs.Rectangle(-2,-2,45.1,40.3), null);


(lib.BinBottomFull_Down = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinRidges_Down();
	this.instance.setTransform(21.6,17.9,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.BinBottom_Down();
	this.instance_1.setTransform(20.7,17.7,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottomFull_Down, new cjs.Rectangle(-2,-2,45.1,40.3), null);


(lib.BinBottomFull = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinRidges_Up();
	this.instance.setTransform(21.6,17.9,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.BinBottom();
	this.instance_1.setTransform(20.7,17.7,1,1,0,0,0,21.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BinBottomFull, new cjs.Rectangle(-2,-2,45.1,40.3), null);


(lib.Base_RedGrayed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.18)"],[0,0.882,1],11.9,0.3,0,11.9,0.3,19.4).s().p("AgZB9Qgug0AAhJQAAhJAugzQAoguA5gFIAAFfQg5gGgogtg");
	this.shape.setTransform(-32.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2A09D").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_RedGrayed, new cjs.Rectangle(-42,-20,84,40), null);


(lib.Base_RedDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.18)"],[0,0.882,1],11.9,0.3,0,11.9,0.3,19.4).s().p("AgZB9Qgug0AAhJQAAhJAugzQAoguA5gFIAAFfQg5gGgogtg");
	this.shape.setTransform(-32.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A72B26").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFyiOQgyg5hHAAInxAAQhHAAgzA5QgxA6AABTIAAADQAABTAxA5QAzA6BHAAIHxAAQBHAAAyg6QAyg5AAhTIAAgDQAAhTgyg6g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6413B").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("Aj4DIQhGAAgzg7Qgyg5AAhSIAAgDQAAhSAyg6QAyg6BHAAIHxAAQBHAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hHAAg");
	this.shape_4.setTransform(1.75,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_RedDarker, new cjs.Rectangle(-44,-22,88,45.3), null);


(lib.Base_RedBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.18)"],[0,0.882,1],11.9,0.3,0,11.9,0.3,19.4).s().p("AgZB9Qgug0AAhJQAAhJAugzQAoguA5gFIAAFfQg5gGgogtg");
	this.shape.setTransform(-32.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3655F").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFyiOQgyg5hHAAInxAAQhHAAgzA5QgxA6AABTIAAADQAABTAxA5QAzA6BHAAIHxAAQBHAAAyg6QAyg5AAhTIAAgDQAAhTgyg6g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6413B").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("Aj4DIQhGAAgzg7Qgyg5AAhSIAAgDQAAhSAyg6QAyg6BHAAIHxAAQBHAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hHAAg");
	this.shape_4.setTransform(1.75,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_RedBrighter, new cjs.Rectangle(-44,-22,88,45.3), null);


(lib.Base_Red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.18)"],[0,0.882,1],11.9,0.3,0,11.9,0.3,19.4).s().p("AgZB9Qgug0AAhJQAAhJAugzQAoguA5gFIAAFfQg5gGgogtg");
	this.shape.setTransform(-32.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Red();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6413B").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFyiOQgyg5hHAAInxAAQhHAAgzA5QgxA6AABTIAAADQAABTAxA5QAzA6BHAAIHxAAQBHAAAyg6QAyg5AAhTIAAgDQAAhTgyg6g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6413B").s().p("Aj3DIQhHAAg0g7Qgxg5AAhSIAAgDQAAhSAxg6QAzg6BIAAIHvAAQBIAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hIAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("Aj4DIQhGAAgzg7Qgyg5AAhSIAAgDQAAhSAyg6QAyg6BHAAIHxAAQBHAAAyA6QAyA6AABSIAAADQAABSgyA5QgyA7hHAAg");
	this.shape_4.setTransform(1.75,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Red, new cjs.Rectangle(-44,-22,88,45.3), null);


(lib.Base_OrangeDrker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C5407").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_OrangeDrker, new cjs.Rectangle(-53,-21,106,42), null);


(lib.Base_OrangeDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B069").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_OrangeDisabled, new cjs.Rectangle(-51,-19,102,38), null);


(lib.Base_OrangeBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E07400").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_OrangeBrighter, new cjs.Rectangle(-53,-21,106,42), null);


(lib.Base_Orange3_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B069").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange3_Disabled, new cjs.Rectangle(-38,-18,76,36), null);


(lib.Base_Orange3_Darker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C5407").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange3_Darker, new cjs.Rectangle(-40,-20,80,40), null);


(lib.Base_Orange3_Brighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E07400").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange3_Brighter, new cjs.Rectangle(-40,-20,80,40), null);


(lib.Base_Orange3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6900").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AjgC0QhAAAgug1QgtgzAAhKIAAgDQAAhKAtg1QAugzBAAAIHBAAQBAAAAtAzQAuA1AABKIAAADQAABKguAzQgtA1hAAAg");
	this.shape_4.setTransform(1.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange3, new cjs.Rectangle(-40,-20,80,42.3), null);


(lib.Base_Orange2Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],8.8,0.2,0,8.8,0.2,12.5).s().p("AgMBEQgbgcAAgoQAAgnAbgcQAWgXAegEIAAC9QgegEgWgXg");
	this.shape.setTransform(-43.675,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Orange2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B069").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange2Disabled, new cjs.Rectangle(-50,-12,100,24), null);


(lib.Base_Orange2Darker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],8.8,0.2,0,8.8,0.2,12.5).s().p("AgMBEQgbgcAAgoQAAgnAbgcQAWgXAegEIAAC9QgegEgWgXg");
	this.shape.setTransform(-43.675,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Orange2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C5407").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("Al7h3IL3AAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAIr3AAQgxAAgkgjQgjgjAAgyQAAgwAjgkQAkgjAxAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E07400").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange2Darker, new cjs.Rectangle(-52,-14,104,28), null);


(lib.Base_Orange2Brighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],8.8,0.2,0,8.8,0.2,12.5).s().p("AgMBEQgbgcAAgoQAAgnAbgcQAWgXAegEIAAC9QgegEgWgXg");
	this.shape.setTransform(-43.675,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Orange2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E07400").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("Al7h3IL3AAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAIr3AAQgxAAgkgjQgjgjAAgyQAAgwAjgkQAkgjAxAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E07400").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange2Brighter, new cjs.Rectangle(-52,-14,104,28), null);


(lib.Base_Orange2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],8.8,0.2,0,8.8,0.2,12.5).s().p("AgMBEQgbgcAAgoQAAgnAbgcQAWgXAegEIAAC9QgegEgWgXg");
	this.shape.setTransform(-43.675,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_Orange2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6900").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("Al7h3IL3AAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAIr3AAQgxAAgkgjQgjgjAAgyQAAgwAjgkQAkgjAxAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E07400").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("Al7B4QgyAAgjgkQgjgiAAgyQAAgwAjgkQAjgjAyAAIL3AAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAg");
	this.shape_4.setTransform(1.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange2, new cjs.Rectangle(-52,-14,104,30.5), null);


(lib.Base_Orange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6900").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AliC+QhAAAgug1QgWgZgMglQgLgiAAgnIAAgDQAAgnALgiQAMgmAWgZQAug0BAAAILFAAQBAAAAtA0QAXAZAMAmQALAiAAAnIAAADQAAAngLAiQgMAlgXAZQgtA1hAAAg");
	this.shape_4.setTransform(1.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Orange, new cjs.Rectangle(-53,-21,106,44.9), null);


(lib.Base_GreenDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3C398").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_GreenDisabled, new cjs.Rectangle(-38,-18,76,36), null);


(lib.Base_GreenDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A762D").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_GreenDarker, new cjs.Rectangle(-40,-20,80,40), null);


(lib.Base_GreenBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79A037").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_GreenBrighter, new cjs.Rectangle(-40,-20,80,40), null);


(lib.Base_Green2Grayed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3C398").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Green2Grayed, new cjs.Rectangle(-51,-19,102,38), null);


(lib.Base_Green2Darker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A762D").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Green2Darker, new cjs.Rectangle(-53,-21,106,42), null);


(lib.Base_Green2Brighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79A037").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Green2Brighter, new cjs.Rectangle(-53,-21,106,42), null);


(lib.Base_Green2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#678731").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AliC+QhAAAgug1QgWgZgMglQgLgiAAgnIAAgDQAAgnALgiQAMgmAWgZQAug0BAAAILFAAQBAAAAtA0QAXAZAMAmQALAiAAAnIAAADQAAAngLAiQgMAlgXAZQgtA1hAAAg");
	this.shape_4.setTransform(1.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Green2, new cjs.Rectangle(-53,-21,106,44.9), null);


(lib.Base_Green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#678731").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AjgC0QhAAAgug1QgtgzAAhKIAAgDQAAhKAtg1QAugzBAAAIHBAAQBAAAAtAzQAuA1AABKIAAADQAABKguAzQgtA1hAAAg");
	this.shape_4.setTransform(1.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Green, new cjs.Rectangle(-40,-20,80,42.3), null);


(lib.Base_DarkBlueDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.302)"],[0,0.859,1],17.4,0.1,0,17.4,0.1,26.9).s().p("AghCWQg8g+AAhYQAAhYA8g+QA1g3BKgFIAAGlQhKgHg1g2g");
	this.shape.setTransform(-60.6,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_DarkBlue();
	this.instance.setTransform(-0.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#95B9D5").s().p("AnzDwQhkAAhGhHQhGhGAAhjQAAhjBGhGQBGhGBkAAIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_DarkBlueDisabled, new cjs.Rectangle(-74,-24,148,48), null);


(lib.Base_DarkBlueDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.302)"],[0,0.859,1],17.4,0.1,0,17.4,0.1,26.9).s().p("AghCWQg8g+AAhYQAAhYA8g+QA1g3BKgFIAAGlQhKgHg1g2g");
	this.shape.setTransform(-60.6,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_DarkBlue();
	this.instance.setTransform(-0.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F78BD").s().p("AnzDwQhkAAhGhHQhGhGAAhjQAAhjBGhGQBGhGBkAAIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnzjvIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAIvnAAQhjAAhHhHQhGhGAAhjQAAhjBGhGQBHhGBjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_DarkBlueDarker, new cjs.Rectangle(-76,-26,152,52), null);


(lib.Base_DarkBlueBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.302)"],[0,0.859,1],17.4,0.1,0,17.4,0.1,26.9).s().p("AghCWQg8g+AAhYQAAhYA8g+QA1g3BKgFIAAGlQhKgHg1g2g");
	this.shape.setTransform(-60.6,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_DarkBlue();
	this.instance.setTransform(-0.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#288EDD").s().p("AnzDwQhkAAhGhHQhGhGAAhjQAAhjBGhGQBGhGBkAAIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnzjvIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAIvnAAQhjAAhHhHQhGhGAAhjQAAhjBGhGQBHhGBjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_DarkBlueBrighter, new cjs.Rectangle(-76,-26,152,52), null);


(lib.Base_DarkBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.302)"],[0,0.859,1],17.4,0.1,0,17.4,0.1,26.9).s().p("AghCWQg8g+AAhYQAAhYA8g+QA1g3BKgFIAAGlQhKgHg1g2g");
	this.shape.setTransform(-60.6,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevel
	this.instance = new lib.Base_Bevel_DarkBlue();
	this.instance.setTransform(-0.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F78BD").s().p("AnzDwQhkAAhGhHQhGhGAAhjQAAhjBGhGQBGhGBkAAIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnzjvIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAIvnAAQhjAAhHhHQhGhGAAhjQAAhjBGhGQBHhGBjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AnzDwQhkAAhGhHQhGhGAAhjQAAhjBGhGQBGhGBkAAIPnAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAg");
	this.shape_3.setTransform(2.75,4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_DarkBlue, new cjs.Rectangle(-76,-26,152.8,54.3), null);


(lib.Base_BlueDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C3D3").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_BlueDisabled, new cjs.Rectangle(-38,-18,76,36), null);


(lib.Base_BlueDarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A7894").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_BlueDarker, new cjs.Rectangle(-40,-20,80,40), null);


(lib.Base_BlueBrighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DA0C5").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AjgC0QhAAAgug1QgtgzAAhKIAAgDQAAhKAtg1QAugzBAAAIHBAAQBAAAAtAzQAuA1AABKIAAADQAABKguAzQgtA1hAAAg");
	this.shape_4.setTransform(1.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_BlueBrighter, new cjs.Rectangle(-40,-20,80,42.3), null);


(lib.Base_Blue2Grayed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C3D3").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Blue2Grayed, new cjs.Rectangle(-51,-19,102,38), null);


(lib.Base_Blue2Darker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A7894").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AliC+QhAAAgug1QgWgZgMglQgLgiAAgnIAAgDQAAgnALgiQAMgmAWgZQAug0BAAAILFAAQBAAAAtA0QAXAZAMAmQALAiAAAnIAAADQAAAngLAiQgMAlgXAZQgtA1hAAAg");
	this.shape_4.setTransform(1.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Blue2Darker, new cjs.Rectangle(-53,-21,106,44.9), null);


(lib.Base_Blue2Brighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DA0C5").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AliC+QhAAAgug1QgWgZgMglQgLgiAAgnIAAgDQAAgnALgiQAMgmAWgZQAug0BAAAILFAAQBAAAAtA0QAXAZAMAmQALAiAAAnIAAADQAAAngLAiQgMAlgXAZQgtA1hAAAg");
	this.shape_4.setTransform(1.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Blue2Brighter, new cjs.Rectangle(-53,-21,106,44.9), null);


(lib.Base_Blue2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],12.1,0.1,0,12.1,0.1,18.6).s().p("AgXB3QgpgyAAhFQAAhFApgxQAlgrAzgFIAAFMQgzgEglgrg");
	this.shape.setTransform(-42.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base_Bevel_Wide
	this.instance = new lib.Base_Bevel_Wide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B88A8").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHRiKQgtgzhBAAIrFAAQhBAAgtAzQgWAagMAlQgLAjAAAnIAAADQAAAnALAjQAMAlAWAZQAuA0BAAAILFAAQBBAAAtg0QAWgZAMglQALgjAAgnIAAgDQAAgngLgjQgMglgWgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA8015").s().p("AliC+QhAAAgug0QgWgZgMglQgLgkAAgmIAAgDQAAgmALgkQAMglAWgaQAugzBAAAILFAAQBBAAAsAzQAXAaAMAlQALAkAAAmIAAADQAAAmgLAkQgMAlgXAZQgsA0hBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AliC+QhAAAgug1QgWgZgMglQgLgiAAgnIAAgDQAAgnALgiQAMgmAWgZQAug0BAAAILFAAQBAAAAtA0QAXAZAMAmQALAiAAAnIAAADQAAAngLAiQgMAlgXAZQgtA1hAAAg");
	this.shape_4.setTransform(1.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Blue2, new cjs.Rectangle(-53,-21,106,44.9), null);


(lib.Base_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glare
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(241,241,241,0)","rgba(255,255,255,0.263)"],[0,0.882,1],13.5,0.1,0,13.5,0.1,20.9).s().p("AgZB5QgvgyAAhHQAAhGAvgzQApgsA5gEIAAFTQg5gFgpgsg");
	this.shape.setTransform(-28.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bevels
	this.instance = new lib.Base_Bevels();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B88A8").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFPiAQgtgzhBAAInBAAQhBAAgtAzQgtA1AABKIAAADQAABKAtA0QAuA0BAAAIHBAAQBBAAAtg0QAtg0AAhKIAAgDQAAhKgtg1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E8E").s().p("AjgC0QhAAAgug0Qgtg0AAhKIAAgDQAAhKAtg1QAtgzBBAAIHBAAQBAAAAuAzQAtA1AABKIAAADQAABKgtA0QguA0hAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AjgC0QhAAAgug1QgtgzAAhKIAAgDQAAhKAtg1QAugzBAAAIHBAAQBAAAAtAzQAuA1AABKIAAADQAABKguAzQgtA1hAAAg");
	this.shape_4.setTransform(1.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Base_Blue, new cjs.Rectangle(-40,-20,80,42.3), null);


(lib.DBLABackgroundScrim_Adjustable = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_0_3_1024_8 = new lib.Nineslice_0_3_1024_8();
	this.nineslice_0_3_1024_8.name = "nineslice_0_3_1024_8";
	this.nineslice_0_3_1024_8.setTransform(512,5.5,17.0667,1,0,0,0,30,2.5);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_0_3_1024_8).wait(1));

	// Scrim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AA3IAAgeMCf/AAAIAAAegEhP/gAYIAAgeMCf/AAAIAAAeg");
	this.shape.setTransform(512,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(239,240,243,0.498)","#EFF0F3","rgba(239,240,243,0.498)"],[0,0.498,1],-512,4,512,4).s().p("EhP/AAZIAAgxMCf/AAAIAAAxg");
	this.shape_1.setTransform(512,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLABackgroundScrim_Adjustable, new cjs.Rectangle(0,0,1024,11), null);


(lib.DBLAAnimatedIncorrectSticker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {icon_start:0,icon_stop:11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.inst_correctIcon = new lib.RowScaffoldExclamationDone();
	this.inst_correctIcon.name = "inst_correctIcon";
	this.inst_correctIcon.setTransform(0,0,1.3332,1.3332);
	this.inst_correctIcon.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.inst_correctIcon).to({scaleX:0.9365,scaleY:0.9365,alpha:0.9297},8,cjs.Ease.quartIn).to({scaleX:1.0457,scaleY:1.0457,alpha:1},1).to({scaleX:1,scaleY:1},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-30.7,61.3,61.4);


(lib.DBLAAnimatedCorrectSticker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"icon_start":0,"icon_stop":11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.inst_correctIcon = new lib.RowScaffoldCheckmarkDone();
	this.inst_correctIcon.name = "inst_correctIcon";
	this.inst_correctIcon.setTransform(0,0,1.3287,1.3287);
	this.inst_correctIcon.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.inst_correctIcon).to({scaleX:0.9365,scaleY:0.9365,alpha:0.9297},8,cjs.Ease.quartIn).to({scaleX:1.0457,scaleY:1.0457,alpha:1},1).to({scaleX:1,scaleY:1},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-30.6,61.1,61.2);


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
	this.lblDouble.lineHeight = 17;
	this.lblDouble.lineWidth = 126;
	this.lblDouble.parent = this;
	this.lblDouble.setTransform(65,-16);

	this.timeline.addTween(cjs.Tween.get(this.lblDouble).wait(1));

	// lblSingle
	this.lblSingle = new cjs.Text("Skip to Content", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblSingle.name = "lblSingle";
	this.lblSingle.textAlign = "center";
	this.lblSingle.lineHeight = 17;
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


(lib.DynamicContent = function(mode,startPosition,loop,reversed) {
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
	this.lblDouble.lineHeight = 17;
	this.lblDouble.lineWidth = 126;
	this.lblDouble.parent = this;
	this.lblDouble.setTransform(65,-16);

	this.timeline.addTween(cjs.Tween.get(this.lblDouble).wait(1));

	// lblSingle
	this.lblSingle = new cjs.Text("Text Goes Here", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblSingle.name = "lblSingle";
	this.lblSingle.textAlign = "center";
	this.lblSingle.lineHeight = 17;
	this.lblSingle.lineWidth = 126;
	this.lblSingle.parent = this;
	this.lblSingle.setTransform(65,-8);

	this.timeline.addTween(cjs.Tween.get(this.lblSingle).wait(1));

	// icon
	this.instance = new lib.KeyboardIcon();
	this.instance.setTransform(143.8,0,1,1,0,0,0,10.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DynamicContent, new cjs.Rectangle(0,-18,155.5,36), null);


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
	this.lblDouble.lineHeight = 17;
	this.lblDouble.lineWidth = 126;
	this.lblDouble.parent = this;
	this.lblDouble.setTransform(65,-16);

	this.timeline.addTween(cjs.Tween.get(this.lblDouble).wait(1));

	// lblSingle
	this.lblSingle = new cjs.Text("Back to Content", "16px 'Montreal Serial'", "#0E6CBF");
	this.lblSingle.name = "lblSingle";
	this.lblSingle.textAlign = "center";
	this.lblSingle.lineHeight = 17;
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


(lib.DBLARadioButton_stretchy = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_8_8_144_22 = new lib.NinesliceDropGuide();
	this.nineslice_8_8_144_22.name = "nineslice_8_8_144_22";
	this.nineslice_8_8_144_22.setTransform(8.35,8.1,3.5258,0.7892,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_8_8_144_22).wait(4));

	// Display
	this.inst_display = new lib.RadioButton_Display();
	this.inst_display.name = "inst_display";
	this.inst_display.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_display).wait(4));

	// Up
	this.inst_up = new lib.RadioButton_Up();
	this.inst_up.name = "inst_up";
	this.inst_up.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_up).wait(4));

	// Selected
	this.inst_selected = new lib.RadioButton_Selected();
	this.inst_selected.name = "inst_selected";
	this.inst_selected.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_selected).wait(4));

	// Incorrect
	this.inst_incorrect = new lib.RadioButton_Incorrect();
	this.inst_incorrect.name = "inst_incorrect";
	this.inst_incorrect.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_incorrect).wait(4));

	// Disabled
	this.inst_disabled = new lib.RadioButton_Disabled();
	this.inst_disabled.name = "inst_disabled";
	this.inst_disabled.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_disabled).wait(4));

	// Disabled_Incorrect
	this.inst_disabledIncorrect = new lib.RadioButton_DisabledIncorrect();
	this.inst_disabledIncorrect.name = "inst_disabledIncorrect";
	this.inst_disabledIncorrect.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_disabledIncorrect).wait(4));

	// Highlight
	this.inst_highlight = new lib.RadioButton_Highlight();
	this.inst_highlight.name = "inst_highlight";
	this.inst_highlight.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_highlight).wait(4));

	// Highlight_Display
	this.inst_highlightDisplay = new lib.RadioButton_Display_Highlight();
	this.inst_highlightDisplay.name = "inst_highlightDisplay";
	this.inst_highlightDisplay.setTransform(75,23,1,1,0,0,0,75,23);

	this.timeline.addTween(cjs.Tween.get(this.inst_highlightDisplay).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,159,55);


(lib.DBLATextDisplayToolLight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// close btn
	this.audioBtn = new lib.DBLAFunctionGraphAudioButton();
	this.audioBtn.name = "audioBtn";
	this.audioBtn.setTransform(590.5,30.2,1,1,0,0,0,0.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.audioBtn).wait(1));

	// missionText
	this.missionText = new cjs.Text("Use this text box parameters for font and hex colors.", "18px 'Helvetica'", "#555555");
	this.missionText.name = "missionText";
	this.missionText.lineHeight = 20;
	this.missionText.lineWidth = 556;
	this.missionText.parent = this;
	this.missionText.setTransform(12,7);

	this.timeline.addTween(cjs.Tween.get(this.missionText).wait(1));

	// bg
	this.instance = new lib.TextToolFrameLight();
	this.instance.setTransform(259.5,65.5,1,1,0,0,0,263.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLATextDisplayToolLight, new cjs.Rectangle(0,0,651,63), null);


(lib.DBLAImpossibleButtonEs = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconImpossibleTextEs();
	this.icon.name = "icon";
	this.icon.setTransform(4.55,-1.85);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:-0.35,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1,y:-0.25},0).wait(5));

	// button
	this.base = new lib.Base_Red();
	this.base.name = "base";

	this.base_1 = new lib.Base_RedBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_RedDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_RedGrayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-23.7,95,48.8);


(lib.DBLAImpossibleButtonEn = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconImpossibleTextEn();
	this.icon.name = "icon";
	this.icon.setTransform(4.55,-1.85);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:-0.35,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1,y:-0.25},0).wait(5));

	// button
	this.base = new lib.Base_Red();
	this.base.name = "base";

	this.base_1 = new lib.Base_RedBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_RedDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_RedGrayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-23.7,95,48.8);


(lib.DBLAButtonZoomOut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconZoomOut();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Blue2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Blue2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,1.08,1.08);

	this.base_3 = new lib.Base_Blue2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,49.8);


(lib.DBLAButtonZoomIn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconZoomIn();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Blue2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Blue2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Blue2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,49.8);


(lib.DBLAButtonZap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconZap();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonWatch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconEye();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1,y:1.6},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonViewChart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AHRjgIuhAAQhBAAAABBIAAE/QAABBBBAAIOhAAQBBAAAAhBIAAk/QAAhBhBAAg");
	this.shape.setTransform(0.0162,-3.75,1.2674,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnQDhQhBAAAAhBIAAk/QAAhBBBAAIOhAAQBBAAAABBIAAE/QAABBhBAAgAnfifIAAE/QAAAPAPAAIOhAAQAPAAAAgPIAAk/QAAgPgPAAIuhAAQgPAAAAAPg");
	this.shape_1.setTransform(0.0162,-3.75,1.2674,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Layer 1
	this.instance = new lib.ButtonViewChart();
	this.instance.setTransform(16.05,6.35,1,1,0,0,0,80.5,30.1);

	this.instance_1 = new lib.ButtonViewChartBrighter();
	this.instance_1.setTransform(16,6.3,1.05,1.05,0,0,0,80.5,30);

	this.instance_2 = new lib.ButtonViewChartDarker();
	this.instance_2.setTransform(16,6.35,0.95,0.95,0,0,0,80.5,30.1);

	this.instance_3 = new lib.ButtonViewChartDisabled();
	this.instance_3.setTransform(16.05,6.35,1,1,0,0,0,80.5,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,1.62,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-27.5,142.6,55);


(lib.DBLAButtonUnpack100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Highlight":20,"Up":0,"Over":5,"Down":10,"Disabled":15};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconUnpack100();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5},0).wait(5).to({scaleX:1,scaleY:1,y:1.6},0).wait(5).to({regY:0,y:0},0).wait(5));

	// button
	this.base = new lib.Base_Green2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Green2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Green2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Green2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,48);


(lib.DBLAButtonUnpack10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconUnpack10();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5},0).wait(5).to({scaleX:1,scaleY:1,y:1.6},0).wait(5).to({regY:0,y:0},0).wait(5));

	// button
	this.base = new lib.Base_Green2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Green2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Green2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Green2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,48);


(lib.DBLAButtonUndo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconUndo();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonUndo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconUndo();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Orange3();
	this.base.name = "base";

	this.base_1 = new lib.Base_Orange3_Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Orange3_Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Orange3_Disabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonTrash2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconTrash();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Orange3();
	this.base.name = "base";

	this.base_1 = new lib.Base_Orange3_Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Orange3_Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Orange3_Disabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonSortRow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconSwapRowcopy();
	this.icon.name = "icon";
	this.icon.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08,y:-0.45},0).wait(5).to({scaleX:0.94,scaleY:0.94,x:-0.15,y:-0.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,x:-0.2,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonSlice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconSlice();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1,y:1.6},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonSkipRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.iconSkip();
	this.icon.name = "icon";
	this.icon.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonSkipLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.iconSkip();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonRotateThreeD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconRotateThreeD();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonRotateRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconRotateRight();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonRotateLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconRotateLeft();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonRotate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconRotate();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonRetry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconUndo();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonReset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconReset();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.5},0).wait(5).to({scaleX:1,scaleY:1},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Orange3();
	this.base.name = "base";

	this.base_1 = new lib.Base_Orange3_Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Orange3_Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Orange3_Disabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonReject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AH0kSIvnAAQhyAAhRBQQhQBRAABxQAAByBQBRQBRBQByAAIPnAAQByAABQhQIABgBQBQhQAAhyQAAhxhQhRQhRhQhyAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnzETQhyAAhRhRQhQhQAAhyQAAhwBQhRQBRhRByAAIPnAAQByAABRBRQBQBQAABxQAABxhQBRIgBAAQhRBRhxAAgAqSieIgBAAQhBBCAABcQAABdBCBCQBCBCBdAAIPnAAQBdAABChCQBChCAAhdQAAhchChCQhChChdAAIvnAAQhdAAhCBCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconXBlue();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95},0).wait(5).to({scaleX:1,scaleY:1},0).wait(10));

	// button
	this.base = new lib.Base_DarkBlue();
	this.base.name = "base";

	this.base_1 = new lib.Base_DarkBlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.05,1.05);

	this.base_2 = new lib.Base_DarkBlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.95,0.95);

	this.base_3 = new lib.Base_DarkBlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.83,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-28.5,161,57);


(lib.DBLAButtonPlayNarration_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// flash0.ai
	this.instance = new lib.iconNarration();
	this.instance.setTransform(16.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.1111,scaleY:1.1108,x:18.05},0).wait(5).to({scaleX:0.8889,scaleY:0.8864,x:13.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,x:16.2,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// icon
	this.icon = new lib.IconSpeakerWhite();
	this.icon.name = "icon";
	this.icon.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance_1 = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonPlayList_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// flash0.ai
	this.instance = new lib.iconList();
	this.instance.setTransform(15.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.1111,scaleY:1.1108,x:17.05},0).wait(5).to({scaleX:0.8889,scaleY:0.8864,x:12.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,x:15.2,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// icon
	this.icon = new lib.IconSpeakerWhite();
	this.icon.name = "icon";
	this.icon.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance_1 = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonPlayAudio_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Layer_2
	this.instance = new lib.IconQuestionMark();
	this.instance.setTransform(15.6,2.95,1,1,0,0,0,9.7,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:9.8,scaleX:1.05,scaleY:1.05,x:16.9},0).wait(5).to({regX:9.7,regY:18.9,scaleX:0.95,scaleY:0.95,x:15.6,y:2.9,alpha:0.8008},0).wait(5).to({regY:19,scaleX:1,scaleY:1,y:2.95,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// icon
	this.icon = new lib.IconSpeakerWhite();
	this.icon.name = "icon";
	this.icon.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance_1 = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconPlay();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconPause();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonPack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconPack();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonObjectRotation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/////* stop();*/
	}
	this.frame_9 = function() {
		/////* stop();*/
	}
	this.frame_14 = function() {
		/////* stop();*/
	}
	this.frame_19 = function() {
		/////* stop();*/
	}
	this.frame_24 = function() {
		/////* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Icon
	this.instance = new lib.ObjectRotationIcon();
	this.instance.setTransform(1.6,0.35,1,0.9989,0,0,0,0,-0.1);

	this.instance_1 = new lib.ObjectRotationIcon_Disabled();
	this.instance_1.setTransform(1.6,0.35,1,0.9989,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:0.1,scaleX:1.05,scaleY:1.0488,x:1.65},0).wait(5).to({regX:0,regY:0,scaleX:0.95,scaleY:0.9489,x:1.6,y:0.4},0).to({_off:true},5).wait(5).to({_off:false,regY:-0.1,scaleX:1,scaleY:0.9989,y:0.35},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconNext();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonMinimize = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconMinimize();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonMaximize = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconMaximize();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonJump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconJump();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Blue2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Blue2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_Blue2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,49.8);


(lib.DBLAButtonHintSmall = function(mode,startPosition,loop,reversed) {
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

	// Layer 1
	this.instance = new lib.ButtonHintSmall();

	this.instance_1 = new lib.ButtonHintSmallBrighter();
	this.instance_1.setTransform(0,0,1.05,1.05);

	this.instance_2 = new lib.ButtonHintSmallDarker();
	this.instance_2.setTransform(0,0,0.95,0.95);

	this.instance_3 = new lib.ButtonHintSmallDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,0.852,1.7041);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.DBLAButtonHint = function(mode,startPosition,loop,reversed) {
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

	// Layer 1
	this.instance = new lib.ButtonHint();

	this.instance_1 = new lib.ButtonHintBrighter();
	this.instance_1.setTransform(0,0,1.05,1.05);

	this.instance_2 = new lib.ButtonHintDarker();
	this.instance_2.setTransform(0,0,0.95,0.95);

	this.instance_3 = new lib.ButtonHintDisabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,0.852,1.7041);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.DBLAButtonGlossary = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconGlossary();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Blue2Brighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_Blue2Darker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.9399,0.94);

	this.base_3 = new lib.Base_Blue2Grayed();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,49.8);


(lib.DBLAButtonFlipAllnumbergram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconFlipNumbergramAgeAg();
	this.icon.name = "icon";
	this.icon.setTransform(0,0,1,1,0,0,0,26.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,x:0.05,y:0.05,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,x:0,y:0,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonFill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconFill();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonDone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconCheck();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Green();
	this.base.name = "base";

	this.base_1 = new lib.Base_GreenBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_GreenDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_GreenDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48);


(lib.DBLAButtonDig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkuhzIABAAQgnAvAABDIAAADQAABCAmAvIABAAQAlAtA0AAIGpAAQA1AAAkgtIABAAQAmgvAAhCIAAgDQAAhDgngvIABAAQglgsg1AAImpAAQg1AAglAsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconDig();
	this.icon.name = "icon";
	this.icon.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.instance = new lib.Base_Blue();
	this.instance.setTransform(0,0,0.8888,0.8889);

	this.instance_1 = new lib.Base_BlueBrighter();
	this.instance_1.setTransform(0,0,0.9688,0.9689);

	this.instance_2 = new lib.Base_BlueDarker();
	this.instance_2.setTransform(0,0,0.8288,0.8289);

	this.instance_3 = new lib.Base_BlueDisabled();
	this.instance_3.setTransform(0,0,0.8888,0.8889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-24,88,48);


(lib.DBLAButtonContinuePopUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("ALakSI2zAAQhLAAAABLIAAGPQAABLBLAAIWzAAQBLAAAAhLIAAmPQAAhLhLAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ArZETQhLAAAAhLIAAmPQAAhLBLAAIWzAAQBLAAAABLIAAGPQAABLhLAAgAryjHIAAGPQAAAZAZAAIWzAAQAZAAAAgZIAAmPQAAgZgZAAI2zAAQgZAAAAAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Layer 1
	this.instance = new lib.ButtonContinuePopUp();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,77.4,23.9);

	this.instance_1 = new lib.ButtonContinuePopUpBrighter();
	this.instance_1.setTransform(0.05,0.05,1.05,1.05,0,0,0,77.4,23.9);

	this.instance_2 = new lib.ButtonContinuePopUpDarker();
	this.instance_2.setTransform(0.05,0.05,0.95,0.95,0,0,0,77.4,23.9);

	this.instance_3 = new lib.ButtonContinuePopUpDisabled();
	this.instance_3.setTransform(0.05,0.05,1,1,0,0,0,77.4,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,1.8899,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-28.5,166.3,57);


(lib.DBLAButtonContinue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconContinue();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonConfirm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/////* stop();*/
	}
	this.frame_9 = function() {
		/////* stop();*/
	}
	this.frame_14 = function() {
		/////* stop();*/
	}
	this.frame_19 = function() {
		/////* stop();*/
	}
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconCheck();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonChoose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconChoose();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonCancel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/////* stop();*/
	}
	this.frame_9 = function() {
		/////* stop();*/
	}
	this.frame_14 = function() {
		/////* stop();*/
	}
	this.frame_19 = function() {
		/////* stop();*/
	}
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconCancel();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonBreakWhole = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconHammer2();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconBack();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonAdjust = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AC+jlIl7AAQhZAAg/A/Qg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIF7AAQBZAAA/g/IAAAAQA/g/AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");
	this.shape.setTransform(0,0,1.0732,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai9DmQhZAAg/g/Qg/g/AAhZIAAgdQAAhYA/hAQA/g/BZAAIF7AAQBZAAA/A/QA/A/AABZIAAAdQAABYg/A/IgBABQg+A/hZAAgAkyiDIAAABQgwAwAABEIAAAdQAABEAwAwQAxAxBEAAIF7AAQBEAAAxgxQAwgwAAhEIAAgdQAAhEgwgwQgxgxhEAAIl7AAQhEAAgxAwg");
	this.shape_1.setTransform(0,0,1.0732,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconDrag();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({regY:1.6,scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,y:1.6,alpha:0.5},0).wait(5).to({regY:0,y:0,alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Blue();
	this.base.name = "base";

	this.base_1 = new lib.Base_BlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_BlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_BlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-24,88.9,48.1);


(lib.DBLAButtonAddSignpost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// hilite
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AHRkJQhuhuibAAQibAAhtBuQhEBDgZBVIj5AAQioAAAACkIAACgQAAClCoAAIJhgCQCZgBBthtQBuhuAAiaQAAichuhtg");
	this.shape.setTransform(1,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ao+DTIAAigQAAikCnAAID6AAQAZhVBEhDQBthuCbAAQCbAABuBuQBuBtAACcQAACahuBuQhtBtiZABIpiACQinAAAAilgAoMAzIAACgQAABzB1AAIJigCQCFgBBeheQBfhgAAiFQAAiHhfhfQhfhfiHAAQiHAAheBfQhBBBgUBTQgCAJgHAFQgHAFgJAAIkMAAQh1AAAAByg");
	this.shape_1.setTransform(1,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// Layer 1
	this.instance = new lib.ButtonAddSignpost();
	this.instance.setTransform(5.05,-2.4,1,1,0,0,0,56.8,30.4);

	this.instance_1 = new lib.ButtonAddSignpostBrighter();
	this.instance_1.setTransform(5.05,-2.45,1.05,1.05,0,0,0,56.8,30.4);

	this.instance_2 = new lib.ButtonAddSignpostDarker();
	this.instance_2.setTransform(5.05,-2.35,0.95,0.95,0,0,0,56.8,30.4);

	this.instance_3 = new lib.ButtonAddSignpost_Disabled();
	this.instance_3.setTransform(5.05,-2.4,1,1,0,0,0,56.8,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,1.33,1.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-38.8,118,77.19999999999999);


(lib.DBLAButtonAddHelper_SliceArray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AF3ipIrtAAQhGAAgyAyQgyAyAABFQAABGAyAyQAyAyBGAAILtAAQBGAAAygyQAygyAAhGQAAhFgygyQgygyhGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AF3CqIrtAAQhGAAgygyQgygyAAhGQAAhFAygyQAygyBGAAILtAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAIAAAAgAnLhUQgjAjAAAxQAAAyAjAjQAjAjAyAAILtAAQAyAAAjgjQAjgjAAgyQAAgxgjgjQgjgjgyAAIrtAAQgyAAgjAjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconAddHelper_Small();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Orange2();
	this.base.name = "base";

	this.base_1 = new lib.Base_Orange2Brighter();
	this.base_1.name = "base_1";

	this.base_2 = new lib.Base_Orange2Darker();
	this.base_2.name = "base_2";

	this.base_3 = new lib.Base_Orange2Disabled();
	this.base_3.name = "base_3";
	this.base_3.setTransform(-0.15,0,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-18,113.5,36);


(lib.DBLAButtonAddHelper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AFKjlIqTAAQhZAAg/A/IAAAAQg/A/AABZIAAAdQAABZA/A/QA/A/BZAAIKTAAQBZAAA+g/IABgBQA/g+AAhZIAAgdQAAhZg/g/Qg/g/hZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnhCnQg/g/AAhZIAAgdQAAhZA/g/IAAAAQA/g/BZAAIKTAAQBZAAA/A/QA/A/AABZIAAAdQAABZg/A+IAAABQg/A/hZAAIqTAAIAAAAQhZAAg/g/gAm+iDIAAAAQgwAxAABEIAAAdQAABEAwAwQAxAxBEAAIKTAAQBEAAAwgxIABAAQAwgwAAhEIAAgdQAAhEgxgxQgwgwhEAAIqTAAQhEAAgxAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconAddHelper();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.08,scaleY:1.08},0).wait(5).to({scaleX:0.94,scaleY:0.94,alpha:0.8008},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.Base_Orange();
	this.base.name = "base";

	this.base_1 = new lib.Base_OrangeBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.08,1.08);

	this.base_2 = new lib.Base_OrangeDrker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.94,0.94);

	this.base_3 = new lib.Base_OrangeDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.29,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24,114.5,48);


(lib.DBLAButtonAccept = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AH0kSIvnAAQhyAAhRBQQhQBRAABxQAAByBQBRQBRBQByAAIPnAAQByAABQhQIABgBQBQhQAAhyQAAhxhQhRQhRhQhyAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnzETQhyAAhRhRQhQhQAAhyQAAhwBQhRQBRhRByAAIPnAAQByAABRBRQBQBQAABxQAABxhQBRIgBAAQhRBRhxAAgAqSieIgBAAQhBBCAABcQAABdBCBCQBCBCBdAAIPnAAQBdAABChCQBChCAAhdQAAhchChCQhChChdAAIvnAAQhdAAhCBCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	// icon
	this.icon = new lib.IconAccept();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95},0).wait(5).to({scaleX:1,scaleY:1},0).wait(10));

	// button
	this.base = new lib.Base_DarkBlue();
	this.base.name = "base";

	this.base_1 = new lib.Base_DarkBlueBrighter();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1.05,1.05);

	this.base_2 = new lib.Base_DarkBlueDarker();
	this.base_2.name = "base_2";
	this.base_2.setTransform(0,0,0.95,0.95);

	this.base_3 = new lib.Base_DarkBlueDisabled();
	this.base_3.name = "base_3";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).to({state:[{t:this.base_3}]},5).to({state:[{t:this.base}]},5).wait(5));

	// hit box
	this.instance = new lib.invisiblebox();
	this.instance.setTransform(0,0,1.83,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-28.5,161,57);


(lib.ButtonTrash_Up = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinLid();
	this.instance.setTransform(-21.55,-11.3,1,1,0,0,0,1.4,14.2);

	this.instance_1 = new lib.BinBottomFull();
	this.instance_1.setTransform(0.45,7.5,1,1,0,0,0,20.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonTrash_Up, new cjs.Rectangle(-23.5,-27.5,47.1,55.4), null);


(lib.ButtonTrash_Over = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinLidUp();
	this.instance.setTransform(-0.1,-20.85,1,1,0,0,0,21.9,11.1);

	this.instance_1 = new lib.BinBottomFull_Over();
	this.instance_1.setTransform(0.6,13.05,1.05,1.05,0,0,0,20.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonTrash_Over, new cjs.Rectangle(-24,-33.9,48.5,68.3), null);


(lib.ButtonTrash_Down = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinLid_Down();
	this.instance.setTransform(-19.95,-10.15,0.9,0.9,0,0,0,0.8,14.2);

	this.instance_1 = new lib.BinBottomFull_Down();
	this.instance_1.setTransform(-0.05,6.75,0.9,0.9,0,0,0,20.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonTrash_Down, new cjs.Rectangle(-21.2,-24.7,42.5,49.8), null);


(lib.ButtonTrash_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BinLidDisabled();
	this.instance.setTransform(-21.55,-11.3,1,1,0,0,0,1.4,14.2);

	this.instance_1 = new lib.BinBottomFullDisabled();
	this.instance_1.setTransform(0.45,7.5,1,1,0,0,0,20.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonTrash_Disabled, new cjs.Rectangle(-23.5,-27.5,47.1,55.1), null);


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


(lib.DynamicUp = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DynamicContent();
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

}).prototype = getMCSymbolPrototype(lib.DynamicUp, new cjs.Rectangle(-90,-22,180,46), null);


(lib.DynamicOver = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DynamicContent();
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

}).prototype = getMCSymbolPrototype(lib.DynamicOver, new cjs.Rectangle(-90,-22,180,44), null);


(lib.DynamicDown = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DynamicContent();
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

}).prototype = getMCSymbolPrototype(lib.DynamicDown, new cjs.Rectangle(-90,-22,180,44), null);


(lib.DynamicDisabled = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DynamicContent();
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

}).prototype = getMCSymbolPrototype(lib.DynamicDisabled, new cjs.Rectangle(-90,-22,180,44), null);


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


(lib.DBLAButtonDynamic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DynamicUp();

	this.instance_1 = new lib.DynamicOver();
	this.instance_1.setTransform(0,0,1.1001,1.1007);

	this.instance_2 = new lib.DynamicDown();
	this.instance_2.setTransform(0,0,0.9001,0.9194);

	this.instance_3 = new lib.DynamicDisabled();

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


(lib.DBLAButtonTrash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20};
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
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.ButtonTrash_Up();

	this.instance_1 = new lib.ButtonTrash_Over();

	this.instance_2 = new lib.ButtonTrash_Down();

	this.instance_3 = new lib.ButtonTrash_Disabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(5));

	// hit box
	this.instance_4 = new lib.invisiblebox();
	this.instance_4.setTransform(0,0,0.58,1.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B87700").ss(1,1,1).p("AjND7QARAXACACQABAAABABQAMAMAYAAIE3AAQAVACAUgYQAIgKAFgJQACgFABgFIAUk2QABgFgCgFQgCgGgFgEIgDgDIALgDQAGgFACgIQADgHgDgHIgbhXQgCgHgHgFQgGgFgIgBIhhgEIgDgfQgBgKgHgGQgHgHgKAAIifAAQgKAAgHAHQgHAHgBAJIgCAcIhQAFQgHABgGAEQgGAFgDAHIggBWQgDAIADAIQACAIAHAFIANAIIgHAKQgFAHABAJIAaEwQABAIAEAFg");
	this.shape.setTransform(0.0109,-0.0925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ACjEhIk3AAQgYAAgMgMIgCgBIgTgZQgEgFgBgIIgakwQgBgJAFgHIAHgKIgNgIQgHgFgCgIQgDgIADgIIAghWQADgHAGgFQAGgEAHgBIBQgFIACgcQABgJAHgHQAHgHAKAAICfAAQAKAAAHAHQAHAGABAKIADAfIBhAEQAIABAGAFQAHAFACAHIAbBXQADAHgDAHQgCAIgGAFIgLADIADADQAFAEACAGQACAFgBAFIgUE2QgBAFgCAFQgFAJgIAKQgTAWgTAAIgDAAg");
	this.shape_1.setTransform(0.0109,-0.0925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-34.7,51.9,69.5);


// stage content:
(lib.ButtonsShared = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.instance = new lib.DBLAButtonSkiplink();
	this.instance.setTransform(663.55,-98.25,1,1,0,0,0,0,1);

	this.instance_1 = new lib.DBLAButtonDynamic();
	this.instance_1.setTransform(663.55,-157.25,1,1,0,0,0,0,1);

	this.instance_2 = new lib.DBLAButtonBacklink();
	this.instance_2.setTransform(663.55,-38.3,1,1,0,0,0,0,1);

	this.instance_3 = new lib.DBLAButtonPlayList_Blue();
	this.instance_3.setTransform(-135.85,415,1,1,0,0,0,0,0.1);

	this.instance_4 = new lib.DBLAButtonPlayNarration_Blue();
	this.instance_4.setTransform(-47.85,415,1,1,0,0,0,0,0.1);

	this.instance_5 = new lib.DBLAButtonSkipLeft();
	this.instance_5.setTransform(-138.35,366.5,1,1,0,0,0,0,0.1);

	this.instance_6 = new lib.DBLAButtonSkipRight();
	this.instance_6.setTransform(-50.35,366.5,1,1,0,0,0,0,0.1);

	this.instance_7 = new lib.DBLAImpossibleButtonEn();
	this.instance_7.setTransform(147.4,-37.95,1,1,0,0,0,0,0.6);

	this.instance_8 = new lib.DBLAImpossibleButtonEs();
	this.instance_8.setTransform(47.25,-37.95,1,1,0,0,0,0,0.6);

	this.instance_9 = new lib.DBLAInput();
	this.instance_9.setTransform(406,579.15,1,1,0,0,0,64,26.5);

	this.instance_10 = new lib.DBLAPatternsInputButtonFrame();
	this.instance_10.setTransform(253.5,649.75,1,1,0,0,0,70,22.6);

	this.instance_11 = new lib.DBLAPatternsInputButtonFrameIncorrect();
	this.instance_11.setTransform(253.5,580.4,1,1,0,0,0,70,22.6);

	this.instance_12 = new lib.DBLAPatternsInputDisabled();
	this.instance_12.setTransform(458,441.65,1,1,0,0,0,45,22.5);

	this.instance_13 = new lib.DBLAPatternsInputEntered();
	this.instance_13.setTransform(342.9,511,1,1,0,0,0,45,22.5);

	this.instance_14 = new lib.DBLAPatternsInputIncorrect();
	this.instance_14.setTransform(342.9,441.65,1,1,0,0,0,45,22.5);

	this.instance_15 = new lib.DBLAPatternsInputValid();
	this.instance_15.setTransform(227.8,511,1,1,0,0,0,45,22.5);

	this.instance_16 = new lib.DBLAPatternsInputValueEntered();
	this.instance_16.setTransform(227.8,441.65,1,1,0,0,0,45,22.5);

	this.instance_17 = new lib.DBLARadioButton();
	this.instance_17.setTransform(76,508.95,1,1,0,0,0,76,24);

	this.instance_18 = new lib.DBLARadioButton_stretchy();
	this.instance_18.setTransform(79,442.15,1,1,0,0,0,75,23);

	this.instance_19 = new lib.DBLASmallGlossaryButton();
	this.instance_19.setTransform(-107.9,311.9);

	this.instance_20 = new lib.DBLAAnimatedCorrectSticker();
	this.instance_20.setTransform(-110.05,30.55);

	this.instance_21 = new lib.DBLAAnimatedIncorrectSticker();
	this.instance_21.setTransform(-39.5,30.65);

	this.instance_22 = new lib.DBLAButtonAccept();
	this.instance_22.setTransform(654.05,207.1,1,1,0,0,0,0,0.4);

	this.instance_23 = new lib.DBLAButtonAddHelper();
	this.instance_23.setTransform(300,23,1,1,0,0,0,0,1);

	this.instance_24 = new lib.DBLAButtonAddHelper_SliceArray();
	this.instance_24.setTransform(300,72.95);

	this.instance_25 = new lib.DBLAButtonAddSignpost();
	this.instance_25.setTransform(676.05,377.3);

	this.instance_26 = new lib.DBLAButtonAdjust();
	this.instance_26.setTransform(491.15,248.15,1,1,0,0,0,0,0.1);

	this.instance_27 = new lib.DBLAButtonAudioPlay();
	this.instance_27.setTransform(-111.9,105.45,1,1,0,0,0,0.6,0.6);

	this.instance_28 = new lib.DBLAButtonBack();
	this.instance_28.setTransform(222.8,248.15,1,1,0,0,0,0,0.1);

	this.instance_29 = new lib.DBLAButtonBreakWhole();
	this.instance_29.setTransform(133.4,248.15,1,1,0,0,0,0,0.1);

	this.instance_30 = new lib.DBLAButtonCancel();
	this.instance_30.setTransform(222.8,189.05,1,1,0,0,0,0,0.1);

	this.instance_31 = new lib.DBLAButtonChoose();
	this.instance_31.setTransform(400,189.05,1,1,0,0,0,0,0.1);

	this.instance_32 = new lib.DBLAButtonConfirm();
	this.instance_32.setTransform(312,189.05,1,1,0,0,0,0,0.1);

	this.instance_33 = new lib.DBLAButtonContinue();
	this.instance_33.setTransform(491.15,307.25,1,1,0,0,0,0,0.1);

	this.instance_34 = new lib.DBLAButtonContinuePopUp();
	this.instance_34.setTransform(656.7,31.65);

	this.instance_35 = new lib.DBLAButtonDig();
	this.instance_35.setTransform(-138.35,462.9);

	this.instance_36 = new lib.DBLAButtonDone();
	this.instance_36.setTransform(491.15,129.95,1,1,0,0,0,0,0.1);

	this.instance_37 = new lib.DBLAButtonFill();
	this.instance_37.setTransform(222.8,129.95,1,1,0,0,0,0,0.1);

	this.instance_38 = new lib.DBLAButtonFlip();
	this.instance_38.setTransform(-110.15,249.9,1,1,0,0,0,1.2,1.2);

	this.instance_39 = new lib.DBLAButtonFlipAllnumbergram();
	this.instance_39.setTransform(133.4,189.05,1,1,0,0,0,0,0.1);

	this.instance_40 = new lib.DBLAButtonGlossary();
	this.instance_40.setTransform(180,73,1,1,0,0,0,0,1);

	this.instance_41 = new lib.DBLAButtonHint();
	this.instance_41.setTransform(-108.05,170.95);

	this.instance_42 = new lib.DBLAButtonHintSmall();
	this.instance_42.setTransform(-37.5,170.95);

	this.instance_43 = new lib.DBLAButtonJump();
	this.instance_43.setTransform(180,23,1,1,0,0,0,0,1);

	this.instance_44 = new lib.DBLAButtonMaximize();
	this.instance_44.setTransform(222.8,366.5,1,1,0,0,0,0,0.1);

	this.instance_45 = new lib.DBLAButtonMinimize();
	this.instance_45.setTransform(133.4,366.5,1,1,0,0,0,0,0.1);

	this.instance_46 = new lib.DBLAButtonNext();
	this.instance_46.setTransform(44,366.5,1,1,0,0,0,0,0.1);

	this.instance_47 = new lib.DBLAButtonObjectRotation();
	this.instance_47.setTransform(-48.25,463.4,1,1,0,0,0,0,1.2);

	this.instance_48 = new lib.DBLAButtonPack();
	this.instance_48.setTransform(312,307.25,1,1,0,0,0,0,0.1);

	this.instance_49 = new lib.DBLAButtonPause();
	this.instance_49.setTransform(312,129.95,1,1,0,0,0,0,0.1);

	this.instance_50 = new lib.DBLAButtonPlay();
	this.instance_50.setTransform(44,129.95,1,1,0,0,0,0,0.1);

	this.instance_51 = new lib.DBLAButtonPlayAudio();
	this.instance_51.setTransform(-41.8,103.45,1,1,0,0,0,0.5,1);

	this.instance_52 = new lib.DBLAButtonPlayAudio_Blue();
	this.instance_52.setTransform(400,307.25,1,1,0,0,0,0,0.1);

	this.instance_53 = new lib.DBLAButtonReject();
	this.instance_53.setTransform(654.05,146.5,1,1,0,0,0,0,0.4);

	this.instance_54 = new lib.DBLAButtonReset();
	this.instance_54.setTransform(491.15,366.5,1,1,0,0,0,0,0.1);

	this.instance_55 = new lib.DBLAButtonRetry();
	this.instance_55.setTransform(400,248.15,1,1,0,0,0,0,0.1);

	this.instance_56 = new lib.DBLAButtonRotate();
	this.instance_56.setTransform(312,248.15,1,1,0,0,0,0,0.1);

	this.instance_57 = new lib.DBLAButtonRotateLeft();
	this.instance_57.setTransform(222.8,307.25,1,1,0,0,0,0,0.1);

	this.instance_58 = new lib.DBLAButtonRotateRight();
	this.instance_58.setTransform(133.4,307.25,1,1,0,0,0,0,0.1);

	this.instance_59 = new lib.DBLAButtonRotateThreeD();
	this.instance_59.setTransform(44,307.25,1,1,0,0,0,0,0.1);

	this.instance_60 = new lib.DBLAButtonSlice();
	this.instance_60.setTransform(133.4,129.95,1,1,0,0,0,0,0.1);

	this.instance_61 = new lib.DBLAButtonSortRow();
	this.instance_61.setTransform(44,248.15,1,1,0,0,0,0,0.1);

	this.instance_62 = new lib.DBLAButtonTrash();
	this.instance_62.setTransform(599.05,278.95);

	this.instance_63 = new lib.DBLAButtonTrash2();
	this.instance_63.setTransform(400,366.5,1,1,0,0,0,0,0.1);

	this.instance_64 = new lib.DBLAButtonUndo();
	this.instance_64.setTransform(312,366.5,1,1,0,0,0,0,0.1);

	this.instance_65 = new lib.DBLAButtonUndo2();
	this.instance_65.setTransform(44,189.05,1,1,0,0,0,0,0.1);

	this.instance_66 = new lib.DBLAButtonUnitConfirm();
	this.instance_66.setTransform(-39.5,250,1,1,0,0,0,0.1,-0.1);

	this.instance_67 = new lib.DBLAButtonUnpack10();
	this.instance_67.setTransform(420,73,1,1,0,0,0,0,1);

	this.instance_68 = new lib.DBLAButtonUnpack100();
	this.instance_68.setTransform(420,23,1,1,0,0,0,0,1);

	this.instance_69 = new lib.DBLAButtonViewChart();
	this.instance_69.setTransform(644.85,91.1);

	this.instance_70 = new lib.DBLAButtonWatch();
	this.instance_70.setTransform(400,129.95,1,1,0,0,0,0,0.1);

	this.instance_71 = new lib.DBLAButtonZap();
	this.instance_71.setTransform(491.15,189.05,1,1,0,0,0,0,0.1);

	this.instance_72 = new lib.DBLAButtonZoomIn();
	this.instance_72.setTransform(60,73,1,1,0,0,0,0,1);

	this.instance_73 = new lib.DBLAButtonZoomOut();
	this.instance_73.setTransform(60,23,1,1,0,0,0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(92.7,19.8,660.9,657.6);
// library properties:
lib.properties = {
	id: 'EF72453DF3D044E7B764CF3C8086AD7D',
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
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
an.compositions['EF72453DF3D044E7B764CF3C8086AD7D'] = {
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