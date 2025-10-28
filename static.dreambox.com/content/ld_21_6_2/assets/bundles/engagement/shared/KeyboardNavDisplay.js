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


(lib.txt_Small = function(mode,startPosition,loop,reversed) {
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
	this.lblText = new cjs.Text("and", "bold 18px 'DBLMuli'", "#004770");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 53;
	this.lblText.parent = this;
	this.lblText.setTransform(28.5,2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Small, new cjs.Rectangle(0,0,57.1,26.6), null);


(lib.txt_Medium = function(mode,startPosition,loop,reversed) {
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
	this.lblText = new cjs.Text("to interact with something.", "bold 18px 'DBLMuli'", "#004770");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 323;
	this.lblText.parent = this;
	this.lblText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Medium, new cjs.Rectangle(0,0,326.6,26.6), null);


(lib.txt_Long = function(mode,startPosition,loop,reversed) {
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
	this.lblText = new cjs.Text("blah blah blah balh balh ablh a", "bold 18px 'DBLMuli'", "#004770");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 719;
	this.lblText.parent = this;
	this.lblText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Long, new cjs.Rectangle(0,0,723.2,26.6), null);


(lib.ToolHelpPopupBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg87AnEQhkAAAAhkMAAAhK/QAAhkBkAAMB53AAAQBkAAAABkMAAABK/QAABkhkAAg");
	this.shape.setTransform(399.9833,250,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shdw
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("EgtTAfQQhkAAAAhkMAAAg7XQAAhkBkAAMBanAAAQBkAAAABkMAAAA7XQAABkhkAAg");
	this.shape_1.setTransform(304.991,205,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolHelpPopupBase, new cjs.Rectangle(0,0,800,500), null);


(lib.speakerblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#004770").ss(1.5,1,1).p("AgKhNQAJAGAIAJQAZAbAAAjQAAAlgZAZQgIAKgJAGAgfglQADACACABQAPAPAAATQAAATgPAOQgCACgDAC");
	this.shape.setTransform(8.4,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AABAvIhJAAIAAheIBJgBIA0gvIAUgSIAADjg");
	this.shape_1.setTransform(-4.275,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speakerblue, new cjs.Rectangle(-11.5,-11.4,24.1,22.8), null);


(lib.UnitMarkerInput = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#004770").s().p("AD4BBIghghIggAhQgEADgEAAQgFAAgDgDIgPgPQgDgDAAgFQAAgFADgDIAgggIggggQgDgDAAgFQAAgEADgEIAPgOQADgEAFAAQAEAAAEAEIAgAgIAhggQADgEAFAAQAEAAADAEIAPAOQADAEABAEQgBAFgDADIggAgIAgAgQADADABAFQgBAFgDADIgPAPQgDADgEAAQgFAAgDgDgAjeA9Ig3g3QgEgDAAgEQAAgEAEgEIAPgOQADgEAEAAQAFAAADAEIAhAfIBJhIQADgDAFAAQAEAAADADIAPAPQADAEAAAEQAAAEgDAEIhgBeQgDADgEABQgFgBgDgDg");
	this.shape.setTransform(142.65,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004770").ss(2,2,1).p("AC0AAQAABLg1A0Qg0A1hLAAQhJAAg2g1Qg0g0AAhLQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKg");
	this.shape_1.setTransform(164.1,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+B/Qg1g0AAhLQAAhJA1g2QA0g0BKAAQBKAAA1A0QA1A2AABJQAABLg1A0Qg1A1hKAAQhKAAg0g1g");
	this.shape_2.setTransform(164.1,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004770").ss(2,2,1).p("AC0AAQAABLg1A0Qg0A1hLAAQhJAAg2g1Qg0g0AAhLQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKg");
	this.shape_3.setTransform(123.1,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah+B/Qg1g0AAhLQAAhJA1g2QA0g0BKAAQBKAAA1A0QA1A2AABJQAABLg1A0Qg1A1hKAAQhKAAg0g1g");
	this.shape_4.setTransform(123.1,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// input
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004770").ss(2,2,1).p("ApDifISHAAQAUAAAAAUIAAEXQAAAUgUAAIyHAAQgUAAAAgUIAAkXQAAgUAUAAg");
	this.shape_5.setTransform(35.1,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApDCgQgUAAAAgUIAAkXQAAgUAUAAISHAAQAUAAAAAUIAAEXQAAAUgUAAg");
	this.shape_6.setTransform(35.1,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_1 copy
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#004770").ss(2,2,1).p("ApNh5IH0AAIBZicIBbCcIHzAAQA8AAAAA8IAAEXQAAA8g8AAIybAAQg8AAAAg8IAAkXQAAg8A8AAg");
	this.shape_7.setTransform(35,12.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6DEE2").s().p("ApNEWQg8AAAAg8IAAkXQAAg8A8AAIH0AAIBZicIBbCcIHzAAQA8AAAAA8IAAEXQAAA8g8AAg");
	this.shape_8.setTransform(35,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitMarkerInput, new cjs.Rectangle(-31,-17,214.1,58), null);


(lib.UnitMarker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#004770").ss(2,2,1).p("Akhh5IDIAAIBZicIBbCcIDHAAQA8AAAAA8IAAEXQAAA8g8AAIpDAAQg8AAAAg8IAAkXQAAg8A8AAg");
	this.shape.setTransform(35,12.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkhEWQg8AAAAg8IAAkXQAAg8A8AAIDIAAIBZicIBbCcIDHAAQA8AAAAA8IAAEXQAAA8g8AAg");
	this.shape_1.setTransform(35,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnitMarker, new cjs.Rectangle(-1,-17,72,58), null);


(lib.FadeDisplayRect = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D6DEE2").s().p("Eg+fAZAMAAAgx/MB8/AAAMAAAAx/g");
	this.shape.setTransform(400,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FadeDisplayRect, new cjs.Rectangle(0,0,800,320), null);


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


(lib.KeyBaseMedium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E6","#FFFFFF"],[0,0.361],-25,0,25,0).s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(-0.2598,-1.5818,0.92,1.321,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_1.setTransform(0.1,-1.5963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_2.setTransform(0.1,-0.3963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shdw
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_3.setTransform(-0.1,1.6037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyBaseMedium, new cjs.Rectangle(-35.1,-26.6,70.2,53.2), null);


(lib.KeyBaseLarge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E6","#FFFFFF"],[0,0.361],-25,0,25,0).s().p("AjUD6QglAAAAglIAAmpQAAglAlAAIGpAAQAlAAAAAlIAAGpQAAAlglAAg");
	this.shape.setTransform(-0.1384,-1.5818,0.92,2.1216,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_1.setTransform(0.2,-1.5963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_2.setTransform(0.2,-0.3963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shdw
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_3.setTransform(0,1.6037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyBaseLarge, new cjs.Rectangle(-55,-26.6,110.2,53.2), null);


(lib.KeyBaseExtraLarge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E6","#FFFFFF"],[0,0.361],-25,0,25,0).s().p("AjcD6QgdAAAAgdIAAm5QAAgdAdAAIG6AAQAcAAAAAdIAAG5QAAAdgcAAg");
	this.shape.setTransform(-0.3161,-1.5818,0.92,3.1234,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArPD6QhQAAAAhQIAAlTQAAhQBQAAIWfAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_1.setTransform(0.1,-1.5963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("ArPD6QhQAAAAhQIAAlTQAAhQBQAAIWfAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_2.setTransform(0.1,-0.3963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shdw
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("ArPD6QhQAAAAhQIAAlTQAAhQBQAAIWfAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_3.setTransform(-0.1,1.6037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyBaseExtraLarge, new cjs.Rectangle(-80.1,-26.6,160.2,53.2), null);


(lib.KeyBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E6","#FFFFFF"],[0,0.361],-25,0,25,0).s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(0.1451,-1.5818,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_1.setTransform(0.1,-1.5963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_2.setTransform(0.1,-0.3963,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shdw
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_3.setTransform(-0.1,1.6037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KeyBase, new cjs.Rectangle(-25.1,-26.6,50.2,53.2), null);


(lib.img_Spacer = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(64,64,64,0)").s().p("AhKCFIAAkJICVAAIAAEJg");
	this.shape.setTransform(7.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_Spacer, new cjs.Rectangle(0,0,15,26.6), null);


(lib.img_Plus = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#404040").s().p("AgHAsIAAgkIgkAAIAAgPIAkAAIAAgkIAPAAIAAAkIAkAAIAAAPIgkAAIAAAkg");
	this.shape.setTransform(7.325,13.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(64,64,64,0)").s().p("AhKCFIAAkJICVAAIAAEJg");
	this.shape_1.setTransform(7.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_Plus, new cjs.Rectangle(0,0,15,26.6), null);


(lib.img_FocusGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#004770").s().p("AiJB3ICJjuICKDug");
	this.shape.setTransform(99.7,13.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AiJB3ICJjtICKDtg");
	this.shape_1.setTransform(59.7,13.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004770").s().p("AiJB3ICJjuICKDug");
	this.shape_2.setTransform(19.6,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004B55").ss(3,1,1).p("AiIikIERAAQAlAAAAAlIAAD/QAAAlglAAIkRAAQglAAAAglIAAj/QAAglAlAAg");
	this.shape_3.setTransform(99.7,14.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AiCikIEFAAQAoAAAAAoIAAD5QAAAogoAAIkFAAQgoAAAAgoIAAj5QAAgoAoAAg");
	this.shape_4.setTransform(99.7356,14.3079,1.1098,1.0897);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004B55").ss(1,1,1).p("ApDjgISHAAQAeAAAAAeIAAGFQAAAegeAAIyHAAQgeAAAAgeIAAmFQAAgeAeAAg");
	this.shape_5.setTransform(62.55,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApDjrISHAAQAoAAAAAoIAAGHQAAAogoAAIyHAAQgoAAAAgoIAAmHQAAgoAoAAg");
	this.shape_6.setTransform(62.5,14.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AAAB8IAAj3");
	this.shape_7.setTransform(0,13.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(64,64,64,0)").s().p("ApfCFQgMAAAAgJIAAj2IAAgCQABgIALAAITAAAQALAAAAAKIAAD1QAAAKgLAAg");
	this.shape_8.setTransform(62,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_FocusGroup, new cjs.Rectangle(-1,-10.1,126.5,49.2), null);


(lib.DBLAToolHelpTextInstructions = function(mode,startPosition,loop,reversed) {
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
	this.TextInstructions = new cjs.Text("Text instructions.", "bold 20px 'Corbel'", "#004770");
	this.TextInstructions.name = "TextInstructions";
	this.TextInstructions.textAlign = "center";
	this.TextInstructions.lineHeight = 22;
	this.TextInstructions.parent = this;
	this.TextInstructions.setTransform(77.65,2);

	this.timeline.addTween(cjs.Tween.get(this.TextInstructions).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAToolHelpTextInstructions, new cjs.Rectangle(0,0,155.3,24), null);


(lib.DBLAButtonPageDot_Up = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgkgjQgigjAAgyQAAgxAigjQAkgjAxAAQAyAAAjAjQAjAjAAAxg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CA3C2").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Up, new cjs.Rectangle(-1.5,-1.5,27,27), null);


(lib.DBLAButtonPageDot_SelectedHighlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgkgjQgigjAAgyQAAgxAigjQAkgjAxAAQAyAAAjAjQAjAjAAAxg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("ACXAAQAAA/gsAsQgsAsg/AAQg+AAgtgsQgrgsAAg/QAAg9ArgtQAtgsA+AAQA/AAAsAsQAsAtAAA9g");
	this.shape_2.setTransform(12.075,12.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004770").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_3.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_SelectedHighlight, new cjs.Rectangle(-5.5,-5.5,35.2,35.2), null);


(lib.DBLAButtonPageDot_Selected = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgkgjQgigjAAgyQAAgxAigjQAkgjAxAAQAyAAAjAjQAjAjAAAxg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Selected, new cjs.Rectangle(-1.5,-1.5,27,27), null);


(lib.DBLAButtonPageDot_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AhiBhQgogoAAg5QAAg4AogqQApgoA5AAQA5AAAoAoQApAqABA4QgBA5gpAoQgoApg5ABQg5gBgpgpg");
	this.shape.setTransform(12.05,12.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB+AAQAAA1glAkQgkAlg1AAQg0AAglglQgkgkAAg1QAAgzAkgmQAlgkA0AAQA1AAAkAkQAlAmAAAzg");
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CA3C2").s().p("AhZBZQgkgkAAg1QAAgzAkglQAlglA0AAQA1AAAkAlQAlAlAAAzQAAA1glAkQgkAlg1AAQg0AAglglg");
	this.shape_2.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Over, new cjs.Rectangle(-2.1,-2.1,28.200000000000003,28.200000000000003), null);


(lib.DBLAButtonPageDot_Highlighted = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgkgjQgigjAAgyQAAgxAigjQAkgjAxAAQAyAAAjAjQAjAjAAAxg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CA3C2").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("ACXAAQAAA/gsAsQgsAsg/AAQg+AAgtgsQgrgsAAg/QAAg9ArgtQAtgsA+AAQA/AAAsAsQAsAtAAA9g");
	this.shape_2.setTransform(12.075,12.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004770").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_3.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Highlighted, new cjs.Rectangle(-5.5,-5.5,35.2,35.2), null);


(lib.DBLAButtonPageDot_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AhcBdQgngnABg2QgBg1AngnQAmgnA2ABQA2gBAnAnQAmAnAAA1QAAA2gmAnQgnAmg2AAQg2AAgmgmg");
	this.shape.setTransform(12.05,12.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AByAAQAAAwghAhQghAhgwAAQgvAAghghQghghAAgwQAAguAhgiQAhghAvAAQAwAAAhAhQAhAiAAAug");
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CA3C2").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAiAhQAhAiAAAuQAAAvghAiQgiAhgvAAQguAAgighg");
	this.shape_2.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Down, new cjs.Rectangle(-1.1,-1.1,26.3,26.3), null);


(lib.DBLAButtonPageDot_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(236,236,236,0.8)").s().p("AhhBiQgngpAAg5QAAg4AngpQApgnA4AAQA5AAApAnQAoApgBA4QABA5goApQgpAog5gBQg4ABgpgog");
	this.shape.setTransform(12.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgkgjQgigjAAgyQAAgxAigjQAkgjAxAAQAyAAAjAjQAjAjAAAxg");
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CA3C2").s().p("AhVBVQgigjAAgyQAAgwAigkQAkgjAxAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgxAAgkgjg");
	this.shape_2.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonPageDot_Disabled, new cjs.Rectangle(-1.6,-1.6,27.5,27.5), null);


(lib.DBLAButtonCloseHelpTool_Up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// X
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape.setTransform(13.3667,13.516,1,1,0,44.9994,-135.0006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_1.setTransform(13.4333,13.516,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FC6F08").ss(5,1,1).p("ACGAAQAAA3gnAnQgoAog3AAQg3AAgngoQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2g");
	this.shape_2.setTransform(13.425,13.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBeQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg3AAgngog");
	this.shape_3.setTransform(13.425,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonCloseHelpTool_Up, new cjs.Rectangle(-2.5,-2.5,31.9,31.8), null);


(lib.DBLAButtonCloseHelpTool_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AAACfQhBAAgvgvQguguAAhCQAAhAAugvIAAgBQAvguBBAAQBBAAAvAuIABAAQAuAvAABBQAABCgvAuIABAAQgvAvhCAAIAAAAg");
	this.shape.setTransform(13.4686,13.4236,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// X
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_1.setTransform(13.3531,13.5192,1.0499,1.0499,0,44.9994,-135.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_2.setTransform(13.4969,13.5192,1.0499,1.0499,-44.9994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FC6F08").ss(5,1,1).p("ACGAAQAAA3gnAnQgoAog3AAQg3AAgngoQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2g");
	this.shape_3.setTransform(13.4686,13.4236,1.05,1.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBeQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg3AAgngog");
	this.shape_4.setTransform(13.4686,13.4236,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonCloseHelpTool_Over, new cjs.Rectangle(-3.2,-3.2,33.4,33.300000000000004), null);


(lib.DBLAButtonCloseHelpTool_Highlighted = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// X
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape.setTransform(13.3667,13.516,1,1,0,44.9994,-135.0006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_1.setTransform(13.4333,13.516,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FC6F08").ss(5,1,1).p("ACGAAQAAA3gnAnQgoAog3AAQg3AAgngoQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2g");
	this.shape_2.setTransform(13.425,13.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBeQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg3AAgngog");
	this.shape_3.setTransform(13.425,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// base copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(5,1,1).p("ABwBwQAvguAAhCQAAhBgvgvIAAAAQgvguhBAAQhBAAgvAuIAAABQguAvAABAQAABCAuAuQAvAvBBAAQBCAAAugvg");
	this.shape_4.setTransform(13.425,13.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AAACfQhBAAgvgvQguguAAhCQAAhAAugvIAAgBQAvguBBAAQBBAAAvAuIABAAQAuAvAABBQAABCgvAuIABAAQgvAvhCAAIAAAAg");
	this.shape_5.setTransform(13.425,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonCloseHelpTool_Highlighted, new cjs.Rectangle(-5,-5,36.9,36.8), null);


(lib.DBLAButtonCloseHelpTool_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// base copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(83,83,83,0.098)").s().p("AAACfQhBAAgvgvQguguAAhCQAAhAAugvIAAgBQAvguBBAAQBBAAAvAuIABAAQAuAvAABBQAABCgvAuIABAAQgvAvhCAAIAAAAg");
	this.shape.setTransform(13.4312,13.3762,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// X
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_1.setTransform(13.3315,13.4627,0.9499,0.9499,0,44.9993,-135.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_2.setTransform(13.4185,13.4627,0.9499,0.9499,-44.9993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FC6F08").ss(5,1,1).p("ACGAAQAAA3gnAnQgoAog3AAQg3AAgngoQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2g");
	this.shape_3.setTransform(13.4312,13.3762,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBeQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg3AAgngog");
	this.shape_4.setTransform(13.4312,13.3762,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonCloseHelpTool_Down, new cjs.Rectangle(-1.8,-1.8,30.5,30.400000000000002), null);


(lib.DBLAButtonCloseHelpTool_Disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// filter
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(236,236,236,0.8)").s().p("AAACfQhBAAgvgvQguguAAhCQAAhAAugvIAAgBQAvguBBAAQBBAAAvAuIABAAQAuAvAABBQAABCgvAuIABAAQgvAvhCAAIAAAAg");
	this.shape.setTransform(13.425,13.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// X
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_1.setTransform(13.3667,13.516,1,1,0,44.9994,-135.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC6F08").s().p("AhGAdIAAg5ICNAAIAAA5g");
	this.shape_2.setTransform(13.4333,13.516,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FC6F08").ss(5,1,1).p("ACGAAQAAA3gnAnQgoAog3AAQg3AAgngoQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2g");
	this.shape_3.setTransform(13.425,13.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBeQgngnAAg3QAAg2AngoQAngnA3AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg3AAgngog");
	this.shape_4.setTransform(13.425,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonCloseHelpTool_Disabled, new cjs.Rectangle(-2.5,-2.5,31.9,31.8), null);


(lib.ToolHelpSpeaker = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.speakerblue();
	this.instance.setTransform(0.4,0,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("ADcAAQAABbhABBQhBBAhbAAQhaAAhAhAQhBhBAAhbQAAhaBBhBQBAhABaAAQBbAABBBAQBABBAABag");
	this.shape.setTransform(-0.0182,-0.0227,0.9091,0.9091);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCDFE2").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape_1.setTransform(-0.0182,-0.0227,0.9091,0.9091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/IAAAAQg/A/hZAAQhYAAg/g/g");
	this.shape_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ToolHelpSpeaker, new cjs.Rectangle(-21.5,-21.5,45,45), null);


(lib.img_KeySmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("X", "bold 18px 'DBLMuli'", "#404040");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 46;
	this.lblText.parent = this;
	this.lblText.setTransform(25,1.9);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(5));

	// base
	this.instance = new lib.KeyBase();
	this.instance.setTransform(25,14,1,0.9508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-11.3,50.2,50.599999999999994);


(lib.img_KeyMedium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("X", "bold 18px 'DBLMuli'", "#404040");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 66;
	this.lblText.parent = this;
	this.lblText.setTransform(35,2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(5));

	// base
	this.instance = new lib.KeyBaseMedium();
	this.instance.setTransform(35.1,14,1,0.9508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.3,70.2,50.599999999999994);


(lib.img_KeyLarge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("enter", "bold 18px 'DBLMuli'", "#404040");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 106;
	this.lblText.parent = this;
	this.lblText.setTransform(54.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(5));

	// base
	this.instance = new lib.KeyBaseLarge();
	this.instance.setTransform(54.75,14,1,0.9508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-11.3,110.2,50.599999999999994);


(lib.img_KeyExtraLarge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("space bar", "bold 18px 'DBLMuli'", "#404040");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 156;
	this.lblText.parent = this;
	this.lblText.setTransform(80.1,2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(5));

	// base
	this.instance = new lib.KeyBaseExtraLarge();
	this.instance.setTransform(80.1,14,1,0.9508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.3,160.2,50.599999999999994);


(lib.HelpDemo_Template = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fade
	this.instance = new lib.FadeDisplayRect();
	this.instance.setTransform(300,127,1,1,0,0,0,300,127);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({_off:false},0).to({alpha:1},4).wait(24));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004770").s().p("AgLBYIgCgBIAAgVIACgBIATAAIABABIAAAVIgBABgAgIAtIgCgCIAAgkIACgCIAPgCQAJgCAFgGQAGgIAAgLIAAgRQAAgNgHgHQgIgHgMAAQgMAAgHAHQgIAHAAANIgBABIgRgEIgBgBQAAgUAOgLQANgLATAAQAUAAANALQAOALAAAUIAAAZQAAASgMALQgLALgSACIgBAVIgBACg");
	this.shape.setTransform(399.825,147.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AguBSIgBgBIgDgKQAAgGAEgGQADgGAFgGIANgMIAOgNIANgNIAMgNQAGgHADgIQADgIAAgHQAAgNgIgIQgIgIgMAAQgSAAgOATIgCAAIgMgJIgBgCIABgBIADgEIAFgFIAGgGIAJgFIALgEIANgBQAIAAAIADQAJACAHAGQAHAFAEAKQAFAJAAAMQAAAJgEAKQgEAKgGAHIgOAQIgQAPIgNANIgLAKQgFAFgBADIBNAAIABACIgEAPIgCABg");
	this.shape_1.setTransform(449.175,147.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004770").s().p("AALBRIAAgrIhCAAIgCgCIgEgLIBKhnIABgBIAPgCIACABIAABkIAeAAIABABIgFAPIgCACIgYAAIAAApIgCABIgRACgAAIgmIgoA2IgDAEIAuAAIAAg5IAAgIg");
	this.shape_2.setTransform(449.85,148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004770").s().p("AALBRIAAgrIhCAAIgBgCIgFgLIBKhnIACgBIAOgCIACABIAABkIAeAAIABABIgFAPIgCACIgYAAIAAApIgCABIgRACgAAIgmIgoA2IgEAEIAvAAIAAg5IAAgIg");
	this.shape_3.setTransform(406.85,148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},24).to({state:[{t:this.shape_1,p:{x:449.175}}]},23).to({state:[{t:this.shape_1,p:{x:436.625}},{t:this.shape_2}]},12).to({state:[{t:this.shape_1,p:{x:393.625}},{t:this.shape_3}]},79).wait(60));

	// marker
	this.instance_1 = new lib.UnitMarker();
	this.instance_1.setTransform(400,151,1,1,0,0,0,35,20);

	this.instance_2 = new lib.UnitMarkerInput();
	this.instance_2.setTransform(400,151,1,1,0,0,0,35,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_1}]},114).wait(60));

	// NL
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["rgba(0,71,112,0)","#004770","#004770","rgba(0,71,112,0)"],[0,0.137,0.871,1],-146.4,0,146.5,0).ss(3,2,1).p("A4NAAMAwbAAA");
	this.shape_4.setTransform(400.025,113);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(198));

	// orange focus
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC6F08").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_5.setTransform(488.1057,150.9989,1.0222,1.0222);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(76).to({_off:false},0).wait(24).to({x:529.1557},0).wait(19).to({x:488.1057},0).to({_off:true},19).wait(60));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6DEE2").s().p("Eg+fAZAMAAAgx/MB8/AAAMAAAAx/g");
	this.shape_6.setTransform(400,160);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(198));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,320);


(lib.DBLAToolHelpMainModule = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// QuestionMarkOrangeShape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6F08").s().p("Ah4B5QgzgyABhHQgBhGAzgyQAygyBGAAQBHAAAyAyQAzAygBBGQABBHgzAyQgyAzhHAAQhGAAgygzgAgbBBIAAArQgBAGAIAAIApAAQAIAAgBgGIAAgrQABgIgIAAIgpAAQgIAAABAIgAAUg4QAIAHAAAHQAAAPgTAIQgNAHgLALQgMAOAAAPIAAAIQgBAHAIAAIApAAQAIAAgBgHQABgFAEgGQAFgHAHgFQATgKAIgIQAOgOAAgWQAAgegagWQgZgUgeAAQg2AAgdAvQgDAFAGAFIAdAWIAEACQAEAAACgDQAMgQAHgFQAHgFALAAQAKAAAJAFg");
	this.shape.setTransform(30.2,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Tool Help English
	this.ToolHelpText = new cjs.Text("Keyboard Navigation Controls", "bold 24px 'Corbel'", "#FC6F08");
	this.ToolHelpText.name = "ToolHelpText";
	this.ToolHelpText.lineHeight = 26;
	this.ToolHelpText.parent = this;
	this.ToolHelpText.setTransform(54.05,15.1);

	this.timeline.addTween(cjs.Tween.get(this.ToolHelpText).wait(1));

	// locator
	this.lct_line06 = new lib.locator();
	this.lct_line06.name = "lct_line06";
	this.lct_line06.setTransform(41.05,400.7);

	this.lct_line05 = new lib.locator();
	this.lct_line05.name = "lct_line05";
	this.lct_line05.setTransform(41.05,339.35);

	this.lct_line04 = new lib.locator();
	this.lct_line04.name = "lct_line04";
	this.lct_line04.setTransform(41.05,278.2);

	this.lct_line03 = new lib.locator();
	this.lct_line03.name = "lct_line03";
	this.lct_line03.setTransform(41.05,217.05);

	this.lct_line02 = new lib.locator();
	this.lct_line02.name = "lct_line02";
	this.lct_line02.setTransform(41.05,155.9);

	this.lct_line01 = new lib.locator();
	this.lct_line01.name = "lct_line01";
	this.lct_line01.setTransform(41.05,94.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lct_line01},{t:this.lct_line02},{t:this.lct_line03},{t:this.lct_line04},{t:this.lct_line05},{t:this.lct_line06}]}).wait(1));

	// AudioTextInstructionsBar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6DEE2").s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape_1.setTransform(400,255);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// ToolHelpPopupBase
	this.instance = new lib.ToolHelpPopupBase();
	this.instance.setTransform(300,200,1,1,0,0,0,300,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAToolHelpMainModule, new cjs.Rectangle(0,0,842,500), null);


(lib.DBLAButtonToolHelpAudio_Up = function(mode,startPosition,loop,reversed) {
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
	this.playAudio = new lib.ToolHelpSpeaker();
	this.playAudio.name = "playAudio";
	this.playAudio.setTransform(20.5,20.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.playAudio).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonToolHelpAudio_Up, new cjs.Rectangle(-2,-2,45.5,45.5), null);


(lib.DBLAButtonToolHelpAudio_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape.setTransform(19.9158,19.9169,1.0223,1.0223);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// speakerblue
	this.instance = new lib.speakerblue();
	this.instance.setTransform(20.3,20,1.05,1.05,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,2,1).p("ADcAAQAABbhABBQhBBAhbAAQhaAAhAhAQhBhBAAhbQAAhaBBhBQBAhABaAAQBbAABBBAQBABBAABag");
	this.shape_1.setTransform(19.9158,19.9135,0.9545,0.9545);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCDFE2").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape_2.setTransform(19.9158,19.9135,0.9545,0.9545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AieCfQhDhCAAhdQAAhcBDhCQBChDBcAAQBdAABCBDQBDBBAABdQAABdhCBCIgBABQhCBChdAAQhdAAhBhDg");
	this.shape_3.setTransform(22.025,22.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonToolHelpAudio_Over, new cjs.Rectangle(-2.6,-2.6,47.2,47.2), null);


(lib.DBLAButtonToolHelpAudio_Highlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// speakerblue
	this.instance = new lib.speakerblue();
	this.instance.setTransform(20.4,20,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("ADcAAQAABbhABBQhBBAhbAAQhaAAhAhAQhBhBAAhbQAAhaBBhBQBAhABaAAQBbAABBBAQBABBAABag");
	this.shape.setTransform(19.9818,19.9772,0.9091,0.9091);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCDFE2").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape_1.setTransform(19.9818,19.9772,0.9091,0.9091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("ACcCdQBChCAAhbQAAhbhChBQhBhBhbAAQhbAAhBBBQhBBBAABbQAABbBBBBQBBBCBbAAQBbAABBhBg");
	this.shape_2.setTransform(20.025,20.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAAAIAAAA");
	this.shape_3.setTransform(35.175,35.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/IAAAAQg/A/hZAAQhYAAg/g/g");
	this.shape_4.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonToolHelpAudio_Highlight, new cjs.Rectangle(-4.6,-4.6,49.300000000000004,49.300000000000004), null);


(lib.DBLAButtonToolHelpAudio_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape.setTransform(19.9327,19.929,0.9263,0.9263);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.playAudio = new lib.ToolHelpSpeaker();
	this.playAudio.name = "playAudio";
	this.playAudio.setTransform(20.55,20.05,0.95,0.95,0,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.playAudio).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonToolHelpAudio_Down, new cjs.Rectangle(-0.9,-0.9,43.199999999999996,43.199999999999996), null);


(lib.DBLAButtonToolHelpAudio_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(236,236,236,0.8)").s().p("AibCbQhAhAAAhbQAAhaBAhAQBBhBBaAAQBbAABBBBQBABAAABaQAABbhABAQhBBBhbAAQhaAAhBhBg");
	this.shape.setTransform(19.9423,19.9414,0.9805,0.9805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.playAudio = new lib.ToolHelpSpeaker();
	this.playAudio.name = "playAudio";
	this.playAudio.setTransform(20.5,20.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.playAudio).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonToolHelpAudio_Disabled, new cjs.Rectangle(-2,-2,45.5,45.5), null);


(lib.DBLAButtonToolHelpAudio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:5,Down:10,Disabled:15,Highlighted:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// asset
	this.instance = new lib.DBLAButtonToolHelpAudio_Up();
	this.instance.setTransform(20.8,20.8,1,1,0,0,0,20.8,20.8);

	this.instance_1 = new lib.DBLAButtonToolHelpAudio_Over();
	this.instance_1.setTransform(20.8,20.8,1,1,0,0,0,20.8,20.8);

	this.instance_2 = new lib.DBLAButtonToolHelpAudio_Down();
	this.instance_2.setTransform(20.8,20.8,1,1,0,0,0,20.8,20.8);

	this.instance_3 = new lib.DBLAButtonToolHelpAudio_Disabled();
	this.instance_3.setTransform(20.8,20.8,1,1,0,0,0,20.8,20.8);

	this.instance_4 = new lib.DBLAButtonToolHelpAudio_Highlight();
	this.instance_4.setTransform(20.8,20.8,1,1,0,0,0,20.8,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-4.6,49.300000000000004,49.300000000000004);


(lib.DBLAButtonPageDot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlighted":20,Selected:25,"Selected Highlight":30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// asset
	this.instance = new lib.DBLAButtonPageDot_Up();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_1 = new lib.DBLAButtonPageDot_Over();
	this.instance_1.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_2 = new lib.DBLAButtonPageDot_Down();
	this.instance_2.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_3 = new lib.DBLAButtonPageDot_Disabled();
	this.instance_3.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_4 = new lib.DBLAButtonPageDot_Highlighted();
	this.instance_4.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_5 = new lib.DBLAButtonPageDot_Selected();
	this.instance_5.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_6 = new lib.DBLAButtonPageDot_SelectedHighlight();
	this.instance_6.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,35.2,35.2);


(lib.DBLAButtonCloseHelpTool = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,Highlight:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.DBLAButtonCloseHelpTool_Up();
	this.instance.setTransform(15.85,15.9,1,1,0,0,0,13.4,13.3);

	this.instance_1 = new lib.DBLAButtonCloseHelpTool_Over();
	this.instance_1.setTransform(15.85,15.9,1,1,0,0,0,13.4,13.3);

	this.instance_2 = new lib.DBLAButtonCloseHelpTool_Down();
	this.instance_2.setTransform(15.85,15.9,1,1,0,0,0,13.4,13.3);

	this.instance_3 = new lib.DBLAButtonCloseHelpTool_Disabled();
	this.instance_3.setTransform(15.85,15.9,1,1,0,0,0,13.4,13.3);

	this.instance_4 = new lib.DBLAButtonCloseHelpTool_Highlighted();
	this.instance_4.setTransform(15.85,15.9,1,1,0,0,0,13.4,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.4,36.8,36.8);


// stage content:
(lib.KeyboardNavDisplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// x
	this.instance = new lib.DBLAButtonCloseHelpTool();
	this.instance.setTransform(774,26,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_15
	this.DBLAToolHelpMainModule = new lib.DBLAToolHelpMainModule();
	this.DBLAToolHelpMainModule.name = "DBLAToolHelpMainModule";
	this.DBLAToolHelpMainModule.setTransform(400,282.9,1,1,0,0,0,400,282.9);

	this.timeline.addTween(cjs.Tween.get(this.DBLAToolHelpMainModule).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,282.5,400,217.5);
// library properties:
lib.properties = {
	id: '183BCCAFE9C7444FA64BD377632CD134',
	width: 800,
	height: 565,
	fps: 24,
	color: "#666666",
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
an.compositions['183BCCAFE9C7444FA64BD377632CD134'] = {
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