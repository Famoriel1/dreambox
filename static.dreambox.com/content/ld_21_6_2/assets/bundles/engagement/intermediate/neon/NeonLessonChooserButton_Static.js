(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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


(lib.TitleLabel_Vertical = function(mode,startPosition,loop,reversed) {
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
	this.lblTitle = new cjs.Text("Identificar números como primos, compuestos o ninguno de los dos", "bold 15px 'Montreal Serial'", "#FFFFFF");
	this.lblTitle.name = "lblTitle";
	this.lblTitle.textAlign = "center";
	this.lblTitle.lineHeight = 21;
	this.lblTitle.lineWidth = 174;
	this.lblTitle.parent = this;
	this.lblTitle.setTransform(89,12);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TitleLabel_Vertical, rect = new cjs.Rectangle(0,10,178,65.5), [rect]);


(lib.TitleLabel_Horizontal = function(mode,startPosition,loop,reversed) {
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
	this.lblTitle = new cjs.Text("Identificar números como primos, compuestos o ninguno de los dos", "bold 15px 'Montreal Serial'", "#FFFFFF");
	this.lblTitle.name = "lblTitle";
	this.lblTitle.lineHeight = 21;
	this.lblTitle.lineWidth = 178;
	this.lblTitle.parent = this;
	this.lblTitle.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TitleLabel_Horizontal, rect = new cjs.Rectangle(0,0,182,65.5), [rect]);


(lib.SparkleBlueShine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(255,255,255,0.749)","rgba(118,208,226,0.447)","rgba(118,208,226,0)"],[0.361,0.702,1],0,0,0,0,0,24.4).s().p("AiuCuQhIhHAAhnQAAhlBIhJQBJhIBlAAQBnAABHBIQBIBJAABlQAABnhIBHQhHBIhnAAQhlAAhJhIg");
	this.shape.setTransform(18.65,18.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleBlueShine, rect = new cjs.Rectangle(-6,-6,49.3,49.3), [rect]);


(lib.SparkleBlueBase = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,204,255,0.451)").s().p("AhAAtIi0gtIC+gsIA2jIIBBDIIC0AsIi0AtIhBDIgAg0ghIhSAhIBSAiIA0BlIA1hlIBSgiIhSghIg1hlg");
	this.shape.setTransform(45,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,255,0.149)").s().p("AhUBBIlthBIFthAIBUmBIBVGBIFtBAIltBBIhVGBgAg2gnIi+AsIC0AtIBADIIBBjIIC0gtIi0gsIhBjIg");
	this.shape_1.setTransform(45,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("Ag0AiIhSgiIBSghIA0hlIA1BlIBSAhIhSAiIg1Blg");
	this.shape_2.setTransform(45,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SparkleBlueBase, rect = new cjs.Rectangle(0,0,90,90), [rect]);


(lib.NanogameIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sparkle_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAhggAsAAQAuAAAfAgQAhAgAAAtQAAAtghAhQgfAgguAAQgsAAghgggAgigZIgjAiQgCACAAAEQAAAFACACIAjAiQACADAFAAQADAAADgDIAhgiQADgCAAgFQAAgEgDgCIghgiQgDgDgDAAQgFAAgCADgAAlgqIgWAVQgDAEAAADQAAAFADADIAWAUQADADAEAAQAEAAADgDIAWgUQACgDAAgFQAAgDgCgEIgWgVQgDgDgEAAQgEAAgDADg");
	this.shape.setTransform(11,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NanogameIcon, rect = new cjs.Rectangle(0,0,22,22), [rect]);


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

}).prototype = getMCSymbolPrototype(lib.LessonIconProxy, rect = new cjs.Rectangle(0,0,80,80), [rect]);


(lib.CompleteCheckmark = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00FF01").ss(7,1,1).p("AihAIIB0BqIDPjj");
	this.shape.setTransform(33.6,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF01").ss(3,1,1).p("AFGAAQAACHhgBfQhfBgiHAAQiGAAhfhgQhghfAAiHQAAiGBghfQBfhgCGAAQCHAABfBgQBgBfAACGg");
	this.shape_1.setTransform(32.55,32.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F0028").s().p("AjlDmQhfhfgBiHQABiGBfhfQBfhfCGgBQCHABBfBfQBfBfAACGQAACHhfBfQhfBfiHAAQiGAAhfhfgAgjB0IDPjiIjPDiIh0hqIB0Bqg");
	this.shape_2.setTransform(32.55,32.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,68.1,68.1);
p.frameBounds = [rect];


(lib.BlueBallcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","#4AD4F2","rgba(206,255,243,0)"],[0.533,0.937,1],0,0,0,0,0,93.1).s().p("AqMKMQkOkOAAl+QAAl9EOkPQEPkOF9AAQF+AAEOEOQEPEPgBF9QABF+kPEOQkOEOl+AAQl9AAkPkOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlueBallcopy, rect = new cjs.Rectangle(-92.2,-92.2,184.5,184.5), [rect]);


(lib.TagBadge_Default = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.TagIcon_Video = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BFQgFgDAAgFIABh5QAAgFAFgDQAFgDAFADIBoA8QAFADAAAFQAAAGgFADIhoA8IgFACIgGgCg");
	this.shape.setTransform(11.006,11.0082,1.4352,1.2732);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bounds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_1.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_Video, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.TagIcon_New = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#110024").s().p("Ag2B4IgmAQIgSgKIgdjGIAQgEIAAgBQgBgMADgJQAEgPALgBQALgCAIANQAFAHADAKIALgDIgBgBQgBgMADgJQAFgPALgBQAJgCAKANQAEAHADAKIALgCIgBgCQgBgKADgIIAAgBQAFgPAKAAQAJgDAKANQAEAHACAIIAAABIADgBIAeADIABAAIAGAZQAGAgAJAfQAMAmAZAaQAMAMAJAFIisBOQgKgFgMgNgAhkgcIAFAWQAHAcALAdQAKAaATAZQAJAMAHAHICWhAQgHgEgHgJQgPgRgLgcQgIgXgGgaIgEgVgAhcA6IAJA7IAAAAIAVgHIAAgBIgBABQgQgWgMgdIAAgBIAAgBIgBAAgAhThCQgCAAgCAEQgCADABAFQAAAEADADQADACADAAQADgBACgDQACgDgBgFQAAgEgDgDQgDgCgDAAIgBAAgAgbhPQgDAAgCAEQgCADABAFQAAAEADACQADADADAAQADgBACgDQACgDgBgFQgBgEgCgDQgDgCgCAAIgBAAgAAXhaQgDAAgDAEQgBADAAAEQABAFADACQACADADAAQAEgBACgDQACgDgBgFQgBgEgCgDQgDgCgDAAIAAAAgAhphdQgCAGABAHIAKgCQgCgHgDgEIgCgEIgCAEgAgyhqQgCAGAAAHIAKgCQgCgHgDgEIAAAAIgCgEIgBAEgAADh0QgCAFAAAGIAKgCQgCgGgDgEIAAAAIgCgDIgBAEgAgnBWQgGgIgFgKIAggLQAIAOAIALIADADIgcAMQgFgDgHgIgAAPBNIgFgGQgHgJgGgLIAjgMQAHAOAJAKIABACIggAOIgCgCgABAA4IgEgDQgHgJgGgLIAbgJIAGAMIAJANIgXAKIgCgDgAg9AtIgHgTIAhgJIAGARIAEAIIghALIgDgIgAgNAcIgHgQIAkgLIAFANIAEAKIgjAMIgDgIgAAlAJIgFgLIAbgJIACAGIAGAOIgbAJIgDgJgAhMABIgDgQIAggJIADAKIgBAAIAFAPIghAKIgDgKgAgdgRIgCgKIAAgBIAlgKIACAHIAEASIgkALIgFgPgAAYgiIgCgIIAAgBIAbgHIAGAYIgbAIIgEgQg");
	this.shape.setTransform(11.0214,11.0514,0.6429,0.6499);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bounds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_1.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_New, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.TagIcon_InProgress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#110024").s().p("Ag9CCIgtAMIgWgWIABiOIgBhIIAPgCIAAgDQAAgPAHgKQAIgNAMgBQALgBAJAOQAHAKAAANIApgEIAAgCQAAgLAGgLQAJgNAKAAQANAAAHANQAGAIAAAKIAAAAIAHAAIAeAIIADABQgBAAAAAhIAFAwIABALQAGApAXAiQAMARAKAIIiwA3IgOgOgAhBBKIAHAPQAFAJAHAKIApgKIgHgLQgGgLgEgKgAhjBqIAPgEIgEgHQgEgKgBgGQgEgOgDglgAgHA+IAHARIAKAPIAogKQgFgFgFgKIgIgOgABNAuIgcAGIAOAZIADADIAegHQgFgFgEgKIgHgOIgDACgAhRAUIACAJIACAJIAFAVIArgJQgEgJgDgRIgCgKgAgWALQAAAFABADQACALAGARIAmgIQgGgQgDgPIAAgCgAAgAEQAFAUAFALIAfgHIACAAQgEgNgCgKIgBgFgAhVghIAAAKIABAFIABAUIAqgFIgEgcIAAgHgAgdgmIABAHIAAAJIACATIAogGIgFghgAAZgtIACAWIABALIAkgFIgBgGIgBgOIgBgMgAhEhKQgDADAAAEQAAADADADQACADADAAQAEAAACgDQADgDgBgDQABgDgDgEQgBgCgFAAQgEAAgBACgAgVhOQgCACAAAEQAAAEACACQACACADAAQAFAAABgCQACgCAAgEQAAgEgCgCQgBgCgFgBQgDABgCACgAAYhSQgCACAAAEQAAAEACACQACADAEAAQACgBADgCQACgCAAgEQAAgEgCgCQgCgCgDgBQgFABgBACgAhchzQgEAHAAAJIAUgCQAAgGgEgIQgDgFgDAAQgDAAgDAFgAABh4QgCAGAAAGIATgCIgDgKQgEgFgDABQgEgBgDAFg");
	this.shape.setTransform(11.0001,11,0.7004,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bounds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_1.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_InProgress, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.TagIcon_DueSoon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#110024").s().p("Ag9CCIgtAMIgWgWIABiOIgBhIIAPgCIAAgDQAAgPAHgKQAIgNAMgBQALgBAJAOQAHAKAAANIApgEIAAgCQAAgLAGgLQAJgNAKAAQANAAAHANQAGAIAAAKIAAAAIAHAAIAeAIIADABQgBAAAAAhIAFAwIABALQAGApAXAiQAMARAKAIIiwA3IgOgOgAhBBKIAHAPQAFAJAHAKIApgKIgHgLQgGgLgEgKgAhjBqIAPgEIgEgHQgEgKgBgGQgEgOgDglgAgHA+IAHARIAKAPIAogKQgFgFgFgKIgIgOgABNAuIgcAGIAOAZIADADIAegHQgFgFgEgKIgHgOIgDACgAhRAUIACAJIACAJIAFAVIArgJQgEgJgDgRIgCgKgAgWALQAAAFABADQACALAGARIAmgIQgGgQgDgPIAAgCgAAgAEQAFAUAFALIAfgHIACAAQgEgNgCgKIgBgFgAhVghIAAAKIABAFIABAUIAqgFIgEgcIAAgHgAgdgmIABAHIAAAJIACATIAogGIgFghgAAZgtIACAWIABALIAkgFIgBgGIgBgOIgBgMgAhEhKQgDADAAAEQAAADADADQACADADAAQAEAAACgDQADgDgBgDQABgDgDgEQgBgCgFAAQgEAAgBACgAgVhOQgCACAAAEQAAAEACACQACACADAAQAFAAABgCQACgCAAgEQAAgEgCgCQgBgCgFgBQgDABgCACgAAYhSQgCACAAAEQAAAEACACQACADAEAAQACgBADgCQACgCAAgEQAAgEgCgCQgCgCgDgBQgFABgBACgAhchzQgEAHAAAJIAUgCQAAgGgEgIQgDgFgDAAQgDAAgDAFgAABh4QgCAGAAAGIATgCIgDgKQgEgFgDABQgEgBgDAFg");
	this.shape.setTransform(11.0001,11,0.7004,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bounds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_1.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_DueSoon, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.TagIcon_AssignedSpot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#110024").s().p("AgTAUIgqgSIApgUIAEguIAfAhIAsgKIgUAoIAXAmIgugHIgcAjg");
	this.shape.setTransform(11.0054,12.6975,0.593,0.5999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110024").s().p("Ag6CDIgqAQIgUgKIgfjXIARgEIAAgBQgBgNADgKQAFgQAMgBQALgCAKAOQAFAIACAKIAMgDIAAgBQgBgNADgKIAAAAQAFgQAMgBQALgDAJAPQAGAIACAKIAMgCIAAgCQgBgLADgJQAFgRAKAAQALgDAKAOQAFAHACAKIADgBIAhAEIACgBIAFAcQAHAiAKAhQANAqAaAcQANAOALAFIi8BUQgJgFgNgOgAhtgdIAGAXQAHAeAMAgQALAcAUAbQAKANAIAIICihGQgGgEgIgJQgRgUgLgeQgJgYgHgcIgEgXgAhjA/IAJBAQABABAVgIIAAgBQgSgXgNggIAAgBIAAgBIAAABgAhahHQgDAAgCAEQgCAEABAEQAAAFADADQADADAEAAQADgBACgEQACgDgBgFQAAgFgDgDQgDgDgDAAIgBABgAgehVQgDAAgCAEQgCAEABAEQAAAFADADQADADAEgBQADAAACgEQACgDgBgFQAAgFgDgDQgDgDgDAAIgBABgAAYhhQgDAAgCAEQgCAEABAEQAAAFADADQADADAEgBQADAAACgEQACgDgBgFQAAgFgDgDQgDgDgDAAIgBABgAhyhkQgCAGABAIIAKgDQgCgHgDgFIgDgDIgBAEgAg3hyQgCAGABAIIAKgCQgCgIgDgFIAAAAIgDgDIgBAEgAACh9QgBAFAAAHIAKgDQgBgGgEgEIABAAIgDgEIgCAFg");
	this.shape_1.setTransform(11.0223,10.9894,0.5931,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bounds
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_2.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_AssignedSpot, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.TagIcon_AssignedGoal = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#110024").s().p("Ag2B4IgmAQIgSgKIgdjGIAQgEIAAgBQgBgMADgJQAEgPALgBQALgCAIANQAFAHADAKIALgDIgBgBQgBgMADgJQAFgPALgBQAJgCAKANQAEAHADAKIALgCIgBgCQgBgKADgIIAAgBQAFgPAKAAQAJgDAKANQAEAHACAIIAAABIADgBIAeADIABAAIAGAZQAGAgAJAfQAMAmAZAaQAMAMAJAFIisBOQgKgFgMgNgAhkgcIAFAWQAHAcALAdQAKAaATAZQAJAMAHAHICWhAQgHgEgHgJQgPgRgLgcQgIgXgGgaIgEgVgAhcA6IAJA7IAAAAIAVgHIAAgBIgBABQgQgWgMgdIAAgBIAAgBIgBAAgAhThCQgCAAgCAEQgCADABAFQAAAEADADQADACADAAQADgBACgDQACgDgBgFQAAgEgDgDQgDgCgDAAIgBAAgAgbhPQgDAAgCAEQgCADABAFQAAAEADACQADADADAAQADgBACgDQACgDgBgFQgBgEgCgDQgDgCgCAAIgBAAgAAXhaQgDAAgDAEQgBADAAAEQABAFADACQACADADAAQAEgBACgDQACgDgBgFQgBgEgCgDQgDgCgDAAIAAAAgAhphdQgCAGABAHIAKgCQgCgHgDgEIgCgEIgCAEgAgyhqQgCAGAAAHIAKgCQgCgHgDgEIAAAAIgCgEIgBAEgAADh0QgCAFAAAGIAKgCQgCgGgDgEIAAAAIgCgDIgBAEgAgnBWQgGgIgFgKIAggLQAIAOAIALIADADIgcAMQgFgDgHgIgAAPBNIgFgGQgHgJgGgLIAjgMQAHAOAJAKIABACIggAOIgCgCgABAA4IgEgDQgHgJgGgLIAbgJIAGAMIAJANIgXAKIgCgDgAg9AtIgHgTIAhgJIAGARIAEAIIghALIgDgIgAgNAcIgHgQIAkgLIAFANIAEAKIgjAMIgDgIgAAlAJIgFgLIAbgJIACAGIAGAOIgbAJIgDgJgAhMABIgDgQIAggJIADAKIgBAAIAFAPIghAKIgDgKgAgdgRIgCgKIAAgBIAlgKIACAHIAEASIgkALIgFgPgAAYgiIgCgIIAAgBIAbgHIAGAYIgbAIIgEgQg");
	this.shape.setTransform(11.0214,11.0514,0.6429,0.6499);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bounds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape_1.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_AssignedGoal, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.PulseAnimation_Vertical = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {PulseStartAnimation:0,PulseEndAnimation:11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_11 = function() {
		this.stop();
		this.dispatchEvent('pulseEndAnimation');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C7EC").s().p("As9OOQhQAAAAhQIAA57QAAhQBQAAIZ7AAQBQAAAABQIAAZ7QAABQhQAAg");
	this.shape.setTransform(91,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0.91)").s().p("As9OXQhZAAAAhZIAA57QAAhZBZAAIZ7AAQBZAAAABZIAAZ7QAABZhZAAg");
	this.shape_1.setTransform(91,91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(148,199,236,0.82)").s().p("As9OgQhiAAAAhiIAA57QAAhiBiAAIZ7AAQBiAAAABiIAAZ7QAABihiAAg");
	this.shape_2.setTransform(91,91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(148,199,236,0.725)").s().p("As9OqQhsgBAAhrIAA57QAAhsBsAAIZ7AAQBrAAABBsIAAZ7QgBBrhrABg");
	this.shape_3.setTransform(91,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(148,199,236,0.635)").s().p("As9OzQh1AAAAh1IAA57QAAh1B1AAIZ7AAQB1AAAAB1IAAZ7QAAB1h1AAg");
	this.shape_4.setTransform(91,91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(148,199,236,0.545)").s().p("As9O8Qh9AAgBh+IAA57QABh9B9gBIZ7AAQB+ABAAB9IAAZ7QAAB+h+AAg");
	this.shape_5.setTransform(91,91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(148,199,236,0.455)").s().p("As9PFQiHgBAAiGIAA57QAAiHCHAAIZ7AAQCGAAABCHIAAZ7QgBCGiGABg");
	this.shape_6.setTransform(91,91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(148,199,236,0.365)").s().p("As9POQiQAAAAiQIAA57QAAiQCQAAIZ7AAQCQAAAACQIAAZ7QAACQiQAAg");
	this.shape_7.setTransform(91,91);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(148,199,236,0.275)").s().p("As9PXQiYAAgBiZIAA57QABiYCYgBIZ7AAQCZABAACYIAAZ7QAACZiZAAg");
	this.shape_8.setTransform(91,91);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(148,199,236,0.18)").s().p("As9PgQiiAAAAiiIAA57QAAiiCiAAIZ7AAQCiAAAACiIAAZ7QAACiiiAAg");
	this.shape_9.setTransform(91,91);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(148,199,236,0.09)").s().p("As9PpQirAAAAirIAA57QAAirCrAAIZ7AAQCrAAAACrIAAZ7QAACrirAAg");
	this.shape_10.setTransform(91,91);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(148,199,236,0)").s().p("As9PyQi0AAAAi0IAA57QAAi0C0AAIZ7AAQC0AAAAC0IAAZ7QAAC0i0AAg");
	this.shape_11.setTransform(91,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,182,182);
p.frameBounds = [rect, new cjs.Rectangle(-0.9,-0.9,183.8,183.8), new cjs.Rectangle(-1.8,-1.8,185.6,185.6), new cjs.Rectangle(-2.7,-2.7,187.5,187.5), new cjs.Rectangle(-3.6,-3.6,189.3,189.3), new cjs.Rectangle(-4.5,-4.5,191.1,191.1), new cjs.Rectangle(-5.4,-5.4,192.9,192.9), new cjs.Rectangle(-6.3,-6.3,194.7,194.7), new cjs.Rectangle(-7.2,-7.2,196.5,196.5), new cjs.Rectangle(-8.2,-8.2,198.4,198.4), new cjs.Rectangle(-9.1,-9.1,200.2,200.2), new cjs.Rectangle(-10,-10,202,202)];


(lib.PluseAnimation_Horizontal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"PulseStartAnimation":0,"PulseEndAnimation":11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_11 = function() {
		this.stop();
		this.dispatchEvent('pulseEndAnimation');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C7EC").s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184.0088,92,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(148,199,236,0.91)").s().p("A7fOhQhZAAAAhZIAA6PQAAhZBZAAMA2/AAAQBZAAAABZIAAaPQAABZhZAAg");
	this.shape_1.setTransform(184,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(148,199,236,0.82)").s().p("A7fOqQhiAAAAhiIAA6PQAAhiBiAAMA2/AAAQBiAAAABiIAAaPQAABihiAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(148,199,236,0.725)").s().p("A7fO0QhsAAAAhsIAA6PQAAhsBsAAMA2/AAAQBrAAAABsIAAaPQAABshrAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(148,199,236,0.635)").s().p("A7fO8Qh1AAAAh0IAA6PQAAh1B1AAMA2/AAAQB1AAgBB1IAAaPQABB0h1AAg");
	this.shape_4.setTransform(184,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(148,199,236,0.545)").s().p("A7fPGQh9gBgBh9IAA6PQABh9B9gBMA2/AAAQB9ABAAB9IAAaPQAAB9h9ABg");
	this.shape_5.setTransform(184,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(148,199,236,0.455)").s().p("A7fPOQiHABAAiHIAA6PQAAiHCHAAMA2/AAAQCGAAAACHIAAaPQAACHiGgBg");
	this.shape_6.setTransform(184,92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(148,199,236,0.365)").s().p("A7fPXQiQAAAAiPIAA6PQAAiQCQAAMA2/AAAQCQAAgBCQIAAaPQABCPiQAAg");
	this.shape_7.setTransform(184,92);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(148,199,236,0.275)").s().p("A7fPhQiYgBgBiYIAA6PQABiYCYgBMA2/AAAQCYABAACYIAAaPQAACYiYABg");
	this.shape_8.setTransform(184,92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(148,199,236,0.18)").s().p("A7fPqQiiAAAAiiIAA6PQAAiiCiAAMA2/AAAQCiAAAACiIAAaPQAACiiiAAg");
	this.shape_9.setTransform(184,92);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(148,199,236,0.09)").s().p("A7fPzQirAAAAirIAA6PQAAirCrAAMA2/AAAQCrAAAACrIAAaPQAACrirAAg");
	this.shape_10.setTransform(184,92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(148,199,236,0)").s().p("A7fP8Qi0AAAAi0IAA6PQAAi0C0AAMA2/AAAQC0AAAAC0IAAaPQAAC0i0AAg");
	this.shape_11.setTransform(184,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, new cjs.Rectangle(-0.9,-0.9,369.8,185.8), new cjs.Rectangle(-1.8,-1.8,371.6,187.6), new cjs.Rectangle(-2.7,-2.7,373.5,189.5), new cjs.Rectangle(-3.6,-3.6,375.3,191.3), new cjs.Rectangle(-4.5,-4.5,377.1,193.1), new cjs.Rectangle(-5.4,-5.4,378.9,194.9), new cjs.Rectangle(-6.3,-6.3,380.7,196.7), new cjs.Rectangle(-7.2,-7.2,382.5,198.5), new cjs.Rectangle(-8.2,-8.2,384.4,200.4), new cjs.Rectangle(-9.1,-9.1,386.2,202.2), new cjs.Rectangle(-10,-10,388,204)];


(lib.VerticalBackgroundPanel_New = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,OverStartAnimation:1,OverEndAnimation:5,Down:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF35CD","#FF8975"],[0,1],-12,-85,-12,75).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF35CD","#FF8975"],[0,1],-13.4,81.1,-13.4,241.1).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(92,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF35CD","#FF8975"],[0,1],-13,-2.2,-13,157.8).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(92,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF35CD","#FF8975"],[0,1],-12.7,-85.4,-12.7,74.6).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(92,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF35CD","#FF8975"],[0,1],-12.3,-168.7,-12.3,-8.7).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(92,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF35CD","#FF8975"],[0,1],-11.9,-251.9,-11.9,-91.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.VerticalBackgroundPanel_InProgress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-12,-85,-12,75).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-18.9,81,-18.9,241).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(92,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-17.2,-3.2,-17.2,156.8).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(92,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-15.4,-87.4,-15.4,72.6).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(92,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-13.7,-171.7,-13.7,-11.7).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(92,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-12,-255.9,-12,-95.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.VerticalBackgroundPanel_DueSoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF8D02","#FFD859"],[0,1],-12,-85,-12,75).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF8D02","#FFD859"],[0,1],-14,82,-14,242).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(92,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF8D02","#FFD859"],[0,1],-14.5,-1.7,-14.5,158.3).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(92,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF8D02","#FFD859"],[0,1],-15,-85.4,-15,74.6).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(92,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF8D02","#FFD859"],[0,1],-15.5,-169.2,-15.5,-9.2).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(92,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8D02","#FFD859"],[0,1],-16,-252.9,-16,-92.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.VerticalBackgroundPanel_Default = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":33,"Down":34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(32).call(this.frame_33).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42,-92,-42,8).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42,-92.1,-42,7.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(92,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42,-92.5,-42,7.5).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(92,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42,-93.7,-42,6.3).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(92,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42.1,-96.3,-42.1,3.7).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(92,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42.2,-100.9,-42.2,-0.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(92,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42.5,-108.5,-42.5,-8.5).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_6.setTransform(92,92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-42.8,-120.2,-42.8,-20.2).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_7.setTransform(92,92);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-43.3,-137.2,-43.3,-37.2).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_8.setTransform(92,92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-44,-160.9,-44,-60.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_9.setTransform(92,92);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-44.9,-192.9,-44.9,-92.9).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_10.setTransform(92,92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-35.2,-115.7,-35.2,-10).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_11.setTransform(92,92);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#06C9FF","#73FFD2"],[0,1],37.8,197.7,37.8,92).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_12.setTransform(92,92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#06C9FF","#73FFD2"],[0,1],36.6,147.1,36.6,41.4).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_13.setTransform(92,92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#06C9FF","#73FFD2"],[0,1],35.6,101.3,35.6,-4.4).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_14.setTransform(92,92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#06C9FF","#73FFD2"],[0,1],34.6,60.3,34.6,-45.4).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_15.setTransform(92,92);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#06C9FF","#73FFD2"],[0,1],33.8,24.1,33.8,-81.6).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_16.setTransform(92,92);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#06C9FF","#73FFD2"],[0,1],33,-7.2,33,-112.9).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_17.setTransform(92,92);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#06C9FF","#73FFD2"],[0,1],32.4,-33.7,32.4,-139.4).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_18.setTransform(92,92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#06C9FF","#73FFD2"],[0,1],31.9,-55.4,31.9,-161.1).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_19.setTransform(92,92);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#06C9FF","#73FFD2"],[0,1],31.5,-72.3,31.5,-178).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_20.setTransform(92,92);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#06C9FF","#73FFD2"],[0,1],31.2,-84.4,31.2,-190.1).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_21.setTransform(92,92);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#06C9FF","#73FFD2"],[0,1],31.1,-91.6,31.1,-197.3).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_22.setTransform(92,92);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#06C9FF","#73FFD2"],[0,1],31,-94,31,-199.7).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_23.setTransform(92,92);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-34.4,93.1,-34.4,198.8).s().p("As7OYQhcAAAAhUIAA6GQAAhVBcAAIZ3AAQBcAAAABVIAAaGQAABUhcAAg");
	this.shape_24.setTransform(92,92);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-35.9,57,-35.9,161.6).s().p("As+OYQhZAAAAhTIAA6IQAAhUBZAAIZ9AAQBZAAAABUIAAaIQAABThZAAg");
	this.shape_25.setTransform(92,92);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-37.3,22.3,-37.3,125.8).s().p("AtAOYQhXAAAAhTIAA6JQAAhTBXAAIaAAAQBYAAAABTIAAaJQAABThYAAg");
	this.shape_26.setTransform(92,92);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-38.6,-9.7,-38.6,92.8).s().p("AtBOYQhWAAAAhSIAA6LQAAhSBWAAIaDAAQBWAAAABSIAAaLQAABShWAAg");
	this.shape_27.setTransform(92,92);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-39.8,-37.7,-39.8,63.9).s().p("AtDOYQhUAAAAhRIAA6MQAAhSBUAAIaIAAQBTAAAABSIAAaMQAABRhTAAg");
	this.shape_28.setTransform(92,92);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-40.7,-60.7,-40.7,40.2).s().p("AtFOYQhSAAAAhRIAA6NQAAhRBSAAIaLAAQBSAAAABRIAAaNQAABRhSAAg");
	this.shape_29.setTransform(92,92);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-41.4,-77.9,-41.4,22.5).s().p("AtGOYQhRAAAAhRIAA6OQAAhQBRAAIaNAAQBRAAAABQIAAaOQAABRhRAAg");
	this.shape_30.setTransform(92,92);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-41.8,-88.4,-41.8,11.7).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_31.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:true},1).wait(30).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.VerticalBackgroundPanel_Assigned = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-12,-85,-12,75).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-13,82,-13,242).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(92,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-12.7,40.3,-12.7,200.3).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(92,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-12.5,-1.5,-12.5,158.5).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(92,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-12.2,-43.2,-12.2,116.8).s().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.HoriztonalBackgroundPanel_InProgress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-32.9,-170,-32.9,132).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184.0088,92,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-40.9,52,-40.9,354).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(184.0088,92,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-39.7,-59,-39.7,243).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-38.5,-169.9,-38.5,132.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-37.2,-280.9,-37.2,21.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(184,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1AFF00","#C9FB00","#FFF600"],[0,0.482,1],-35.9,-391.9,-35.9,-89.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(184.0088,92,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.HoriztonalBackgroundPanel_DueSoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF8D02","#FFD859"],[0,1],-103.9,-85,-103.9,75).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184.0088,92,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF8D02","#FFD859"],[0,1],-105.9,82,-105.9,242).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(184.0088,92,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF8D02","#FFD859"],[0,1],-106.5,-1.7,-106.5,158.3).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF8D02","#FFD859"],[0,1],-107,-85.4,-107,74.6).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF8D02","#FFD859"],[0,1],-107.5,-169.2,-107.5,-9.2).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(184,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8D02","#FFD859"],[0,1],-107.9,-252.9,-107.9,-92.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(184.0088,92,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.HoriztonalBackgroundPanel_Default = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":33,"Down":34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(32).call(this.frame_33).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-92,-134,8).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-92.1,-134,7.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(184,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-92.5,-134,7.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-93.7,-134,6.3).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.1,-96.3,-134.1,3.7).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(184,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.2,-100.9,-134.2,-0.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(184,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.5,-108.5,-134.5,-8.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_6.setTransform(184,92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.8,-120.2,-134.8,-20.2).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_7.setTransform(184,92);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-135.3,-137.2,-135.3,-37.2).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_8.setTransform(184,92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-136,-160.9,-136,-60.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_9.setTransform(184,92);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-136.9,-192.9,-136.9,-92.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_10.setTransform(184,92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-70.5,-115.7,-70.5,-10).s().p("A53OYQi4AAAAhUIAA6GQAAhVC4AAMAzvAAAQC4AAAABVIAAaGQAABUi4AAg");
	this.shape_11.setTransform(184,92);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#06C9FF","#73FFD2"],[0,1],134.9,194.1,134.9,94.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_12.setTransform(184,92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#06C9FF","#73FFD2"],[0,1],134.2,144.1,134.2,44.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_13.setTransform(184,92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#06C9FF","#73FFD2"],[0,1],133.6,98.9,133.6,-1.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_14.setTransform(184,92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#06C9FF","#73FFD2"],[0,1],133,58.4,133,-41.6).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_15.setTransform(184,92);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#06C9FF","#73FFD2"],[0,1],132.5,22.7,132.5,-77.3).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_16.setTransform(184,92);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#06C9FF","#73FFD2"],[0,1],132.1,-8.2,132.1,-108.2).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_17.setTransform(184,92);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#06C9FF","#73FFD2"],[0,1],131.7,-34.4,131.7,-134.4).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_18.setTransform(184,92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#06C9FF","#73FFD2"],[0,1],131.4,-55.8,131.4,-155.8).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_19.setTransform(184,92);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#06C9FF","#73FFD2"],[0,1],131.2,-72.5,131.2,-172.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_20.setTransform(184,92);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#06C9FF","#73FFD2"],[0,1],131.1,-84.4,131.1,-184.4).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_21.setTransform(184,92);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#06C9FF","#73FFD2"],[0,1],131,-91.5,131,-191.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_22.setTransform(184,92);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#06C9FF","#73FFD2"],[0,1],130.9,-93.9,130.9,-193.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_23.setTransform(184,92);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.8,94.1,-134.8,194.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_24.setTransform(184,92);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.7,57.8,-134.7,157.8).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_25.setTransform(184,92);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.5,22.9,-134.5,122.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_26.setTransform(184,92);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.4,-9.3,-134.4,90.7).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_27.setTransform(184,92);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.2,-37.5,-134.2,62.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_28.setTransform(184,92);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134.1,-60.6,-134.1,39.4).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_29.setTransform(184,92);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-77.8,-134,22.2).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_30.setTransform(184,92);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#06C9FF","#73FFD2"],[0,1],-134,-88.4,-134,11.6).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_31.setTransform(184,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_11},{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:true},1).wait(30).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.HorizontalBackgroundPanel_New = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF35CD","#FF8975"],[0,1],-103.9,-85,-103.9,75).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184.0088,92,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF35CD","#FF8975"],[0,1],-105.4,81.1,-105.4,241.1).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(184.0088,92,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF35CD","#FF8975"],[0,1],-105,-2.2,-105,157.8).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF35CD","#FF8975"],[0,1],-104.7,-85.4,-104.7,74.6).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF35CD","#FF8975"],[0,1],-104.3,-168.7,-104.3,-8.7).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(184,92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF35CD","#FF8975"],[0,1],-103.9,-251.9,-103.9,-91.9).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_5.setTransform(184.0088,92,1.0001,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF35CD","#FF8975"],[0,1],-104,-85,-104,75).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_6.setTransform(184,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.HorizontalBackgroundPanel_Assigned = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"OverStartAnimation":1,"OverEndAnimation":5,"Down":6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-103.9,-85,-103.9,75).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape.setTransform(184.0088,92,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-104.9,82,-104.9,242).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_1.setTransform(184.0088,92,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-104.7,40.3,-104.7,200.3).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_2.setTransform(184,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-104.5,-1.5,-104.5,158.5).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_3.setTransform(184,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B823C9","#895CDF","#45ADFF"],[0,0.51,1],-104.2,-43.2,-104.2,116.8).s().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAg");
	this.shape_4.setTransform(184,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.SparkleBlue = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SparkleBlueShine();
	this.instance.setTransform(44.65,45.1,1,1,0,0,0,18.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9811,scaleY:0.9727},0).wait(1).to({regX:18.5,scaleX:0.9603,scaleY:0.9444,x:44.7},0).wait(1).to({regX:18.4,scaleX:0.9381,scaleY:0.9152,x:44.65},0).wait(1).to({regX:18.5,scaleX:0.9146,scaleY:0.8853,x:44.7},0).wait(1).to({regX:18.4,scaleX:0.8898,scaleY:0.8545,x:44.65},0).wait(1).to({scaleX:0.8636,scaleY:0.823},0).wait(1).to({regX:18.5,scaleX:0.8362,scaleY:0.7907,x:44.7},0).wait(1).to({regX:18.4,scaleX:0.8074,scaleY:0.7575,x:44.65},0).wait(1).to({scaleX:0.7771,scaleY:0.7235},0).wait(1).to({scaleX:0.7453,scaleY:0.6885},0).wait(1).to({scaleX:0.7119,scaleY:0.6526,x:44.7},0).wait(1).to({scaleX:0.6767,scaleY:0.6155,x:44.65},0).wait(1).to({regY:18.4,scaleX:0.6396,scaleY:0.5773},0).wait(1).to({regX:18.5,regY:18.3,scaleX:0.6005,scaleY:0.5378,x:44.7},0).wait(1).to({regX:18.4,scaleX:0.5591,scaleY:0.4969},0).wait(1).to({regX:18.6,regY:18.2,scaleX:0.5151,scaleY:0.4543,x:44.75,y:45.05},0).wait(1).to({regX:18.4,regY:18.3,scaleX:0.4682,scaleY:0.4099,x:44.65,y:45.1},0).wait(1).to({scaleX:0.4182,scaleY:0.3634,x:44.7},0).wait(1).to({regX:18.6,regY:18.4,scaleX:0.3643,scaleY:0.3143},0).wait(1).to({regX:18.3,regY:18.3,scaleX:0.3059,scaleY:0.2622},0).wait(1).to({regX:18.4,regY:18.2,scaleX:0.242,scaleY:0.2063},0).wait(1).to({scaleX:0.1714,scaleY:0.1455},0).wait(1).to({regX:18.5,regY:17.9,scaleX:0.0918,scaleY:0.0779},0).wait(1).to({regX:20,regY:20,scaleX:0.01,scaleY:0.01},0).to({_off:true},1).wait(28));

	// sparkleGreenBase
	this.instance_1 = new lib.SparkleBlueBase();
	this.instance_1.setTransform(45,45,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:45.1,scaleX:0.986,scaleY:0.9813,rotation:14.9991,x:45.1},0).wait(1).to({regX:45,scaleX:0.9696,scaleY:0.9607,rotation:29.9996,x:45.05},0).wait(1).to({regX:45.1,scaleX:0.9515,scaleY:0.9385,rotation:45,x:45.15,y:45.05},0).wait(1).to({regX:45,scaleX:0.9316,scaleY:0.915,rotation:59.9995,x:45},0).wait(1).to({scaleX:0.9102,scaleY:0.8901,rotation:74.9994,y:45},0).wait(1).to({scaleX:0.8871,scaleY:0.8638,rotation:90},0).wait(1).to({scaleX:0.8623,scaleY:0.8362,rotation:104.9999},0).wait(1).to({scaleX:0.8358,scaleY:0.807,rotation:119.9991},0).wait(1).to({scaleX:0.8075,scaleY:0.7765,rotation:135},0).wait(1).to({scaleX:0.7774,scaleY:0.7442,rotation:149.9993},0).wait(1).to({scaleX:0.7452,scaleY:0.7104,rotation:164.9999,y:44.95},0).wait(1).to({scaleX:0.7108,scaleY:0.6747,rotation:180,y:45},0).wait(1).to({regX:45.1,scaleX:0.6742,scaleY:0.6371,rotation:195.0001,x:44.95,y:44.95},0).wait(1).to({regX:45,regY:45.1,scaleX:0.635,scaleY:0.5974,rotation:209.999,x:45},0).wait(1).to({regY:45,scaleX:0.593,scaleY:0.5554,rotation:225,y:45.1},0).wait(1).to({regX:45.1,scaleX:0.5479,scaleY:0.5109,rotation:240.0004,y:44.95},0).wait(1).to({regX:45,regY:45.1,scaleX:0.4995,scaleY:0.4635,rotation:255.0025,x:45.05,y:45.05},0).wait(1).to({scaleX:0.4471,scaleY:0.4128,rotation:270,x:45,y:45},0).wait(1).to({regX:44.9,scaleX:0.3903,scaleY:0.3585,rotation:285.0004,y:45.05},0).wait(1).to({regX:45.1,scaleX:0.3282,scaleY:0.2999,rotation:300.0002,x:45.05,y:44.95},0).wait(1).to({regX:44.9,regY:44.9,scaleX:0.2599,scaleY:0.2361,rotation:315,x:44.95},0).wait(1).to({regX:45.1,regY:44.8,scaleX:0.1839,scaleY:0.1661,rotation:330.0012,x:45,y:45},0).wait(1).to({regX:45.4,regY:45.2,scaleX:0.0984,scaleY:0.0882,rotation:344.9977,x:45.05,y:45.05},0).wait(1).to({regX:45,regY:45,scaleX:0.01,scaleY:0.01,rotation:360,x:45,y:45},0).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-9.2,-9.1,108.6,108.3), new cjs.Rectangle(-14.4,-14.2,118.8,118.6), new cjs.Rectangle(-15.1,-15.1,120.3,120.3), new cjs.Rectangle(-11.6,-11.8,113.2,113.8), new cjs.Rectangle(-4.3,-4.9,98.6,99.9), new cjs.Rectangle(6.1,5.1,77.8,79.9), new cjs.Rectangle(-1.4,-2.2,92.8,94.5), new cjs.Rectangle(-5.2,-5.7,100.5,101.5), new cjs.Rectangle(-5.4,-5.4,100.8,100.8), new cjs.Rectangle(-2,-1.5,94.1,93), new cjs.Rectangle(4.3,5.4,81.4,79.1), new cjs.Rectangle(13.1,14.6,64,60.7), new cjs.Rectangle(8.3,9.4,73.5,71.1), new cjs.Rectangle(6.8,7.5,76.4,75.1), new cjs.Rectangle(8.5,8.5,73.1,73.1), new cjs.Rectangle(12.8,12.2,64.5,65.7), new cjs.Rectangle(19,18,52,54.2), new cjs.Rectangle(26.4,24.9,37.2,40.2), new cjs.Rectangle(24.9,23.8,40.2,42.3), new cjs.Rectangle(26,25.4,38.1,39.1), new cjs.Rectangle(29.2,29.2,31.6,31.6), new cjs.Rectangle(34.1,34.4,21.8,21.3), new cjs.Rectangle(39.7,40.1,10.6,10), new cjs.Rectangle(44.5,44.6,1,0.9), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.OdometerSparkle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SparkleBlue("synched",0);
	this.instance.setTransform(-0.85,-1.7,0.2492,0.2492,0,0,0,44.6,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45.1,regY:45,scaleX:0.3974,scaleY:0.3974,x:-0.65,y:-0.25,startPosition:1},0).wait(1).to({scaleX:0.5457,scaleY:0.5457,x:-0.55,y:-0.1,startPosition:2},0).wait(1).to({scaleX:0.694,scaleY:0.694,x:-0.45,y:0.1,startPosition:3},0).wait(1).to({scaleX:0.8422,scaleY:0.8422,x:-0.35,y:0.25,startPosition:4},0).wait(1).to({scaleX:0.9905,scaleY:0.9905,x:-0.3,y:0.4,startPosition:5},0).wait(1).to({scaleX:1.1388,scaleY:1.1388,x:-0.2,y:0.6,startPosition:6},0).wait(1).to({scaleX:1.287,scaleY:1.287,x:-0.1,y:0.75,startPosition:7},0).wait(1).to({scaleX:1.4353,scaleY:1.4353,x:0,y:0.95,startPosition:8},0).wait(1).to({scaleX:1.6998,scaleY:1.6998,x:0.1,y:1.7,startPosition:9},0).wait(1).to({scaleX:1.9643,scaleY:1.9643,x:0.25,y:2.45,startPosition:10},0).wait(1).to({scaleX:2.2288,scaleY:2.2288,x:0.4,y:3.2,startPosition:11},0).wait(1).to({scaleX:2.4933,scaleY:2.4933,x:0.55,y:3.9,startPosition:12},0).wait(1).to({scaleX:2.1598,scaleY:2.1598,x:0.35,y:2.3,startPosition:13},0).wait(1).to({scaleX:1.8263,scaleY:1.8263,x:0.15,y:0.7,startPosition:14},0).wait(1).to({scaleX:1.4928,scaleY:1.4928,x:0,y:-0.9,startPosition:15},0).wait(1).to({alpha:0.8889,startPosition:16},0).wait(1).to({alpha:0.7778,startPosition:17},0).wait(1).to({alpha:0.6667,startPosition:18},0).wait(1).to({alpha:0.5556,startPosition:19},0).wait(1).to({alpha:0.4444,startPosition:20},0).wait(1).to({alpha:0.3333,startPosition:21},0).wait(1).to({alpha:0.2222,startPosition:22},0).wait(1).to({alpha:0.1111,startPosition:23},0).wait(1).to({alpha:0,startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).to({_off:true},1).wait(10));

	// Layer_2
	this.instance_1 = new lib.BlueBallcopy();
	this.instance_1.setTransform(-0.25,0,0.051,0.032);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.0742,scaleY:0.0582},0).wait(1).to({scaleX:0.0975,scaleY:0.0845},0).wait(1).to({scaleX:0.1207,scaleY:0.1107},0).wait(1).to({scaleX:0.1439,scaleY:0.1369},0).wait(1).to({scaleX:0.1671,scaleY:0.1631},0).wait(1).to({scaleX:0.1903,scaleY:0.1893},0).wait(1).to({scaleX:0.2136,scaleY:0.2155},0).wait(1).to({scaleX:0.2368,scaleY:0.2417},0).wait(1).to({scaleX:0.2863,scaleY:0.2795,alpha:0.8333},0).wait(1).to({scaleX:0.3357,scaleY:0.3174,alpha:0.6667},0).wait(1).to({scaleX:0.3852,scaleY:0.3552,alpha:0.5},0).wait(1).to({scaleX:0.4347,scaleY:0.393,alpha:0.3333},0).wait(1).to({scaleX:0.4842,scaleY:0.4308,alpha:0.1667},0).wait(1).to({scaleX:0.5336,scaleY:0.4686,alpha:0},0).to({_off:true},1).wait(24));

	// Layer_4_copy_3
	this.instance_2 = new lib.SparkleBlue("synched",0,false);
	this.instance_2.setTransform(0.1,-2.2,0.324,0.324,0,0,0,36.6,37.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(1).to({regX:45.1,regY:45,x:-5.55,y:-4.45,startPosition:1},0).wait(1).to({x:-10.5,y:-8.6,startPosition:2},0).wait(1).to({x:-13.5,y:-12.45,startPosition:3},0).wait(1).to({x:-15.3,y:-16.1,startPosition:4},0).wait(1).to({x:-16.2,y:-19.6,startPosition:5},0).wait(1).to({x:-16.5,y:-23,startPosition:6},0).wait(1).to({x:-16.25,y:-26.3,startPosition:7},0).wait(1).to({x:-15.6,y:-29.55,startPosition:8},0).wait(1).to({x:-14.65,y:-32.75,startPosition:9},0).wait(1).to({x:-13.45,y:-35.85,startPosition:10},0).wait(1).to({x:-12,y:-38.95,startPosition:11},0).wait(1).to({x:-10.4,y:-42,startPosition:12},0).wait(1).to({x:-8.65,y:-45.05,startPosition:13},0).wait(1).to({x:-6.85,y:-48.05,startPosition:14},0).wait(1).to({x:-4.95,y:-51,startPosition:15},0).wait(1).to({x:-3,y:-54,startPosition:16},0).wait(1).to({x:-1.05,y:-56.95,startPosition:17},0).wait(1).to({x:0.9,y:-59.9,startPosition:18},0).wait(1).to({x:2.75,y:-62.85,startPosition:19},0).wait(1).to({x:4.5,y:-65.75,startPosition:20},0).wait(1).to({x:6.1,y:-68.7,startPosition:21},0).wait(1).to({x:7.5,y:-71.7,startPosition:22},0).wait(1).to({x:8.6,y:-74.65,startPosition:23},0).wait(1).to({x:9.2,y:-77.7,startPosition:24},0).wait(1).to({y:-80.75,startPosition:25},0).wait(1).to({x:8.1,y:-83.95,startPosition:26},0).wait(1).to({x:4.95,y:-87.35,startPosition:27},0).wait(1));

	// Layer_4_copy
	this.instance_3 = new lib.SparkleBlue("synched",0,false);
	this.instance_3.setTransform(0,-1.15,0.1868,0.1868,0,0,0,38.6,43.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1).to({regX:45.1,regY:45,x:7.45,y:-5.75,startPosition:1},0).wait(1).to({x:11,y:-9.35,startPosition:2},0).wait(1).to({x:13.15,y:-12.15,startPosition:3},0).wait(1).to({x:14.4,y:-14.45,startPosition:4},0).wait(1).to({x:15.05,y:-16.45,startPosition:5},0).wait(1).to({x:15.25,y:-18.15,startPosition:6},0).wait(1).to({x:15.05,y:-19.7,startPosition:7},0).wait(1).to({x:14.65,y:-21.05,startPosition:8},0).wait(1).to({x:14,y:-22.3,startPosition:9},0).wait(1).to({x:13.25,y:-23.5,startPosition:10},0).wait(1).to({x:12.35,y:-24.6,startPosition:11},0).wait(1).to({x:11.4,y:-25.65,startPosition:12},0).wait(1).to({x:10.4,y:-26.65,startPosition:13},0).wait(1).to({x:9.35,y:-27.65,startPosition:14},0).wait(1).to({x:8.4,y:-28.65,startPosition:15},0).wait(1).to({x:7.5,y:-29.65,startPosition:16},0).wait(1).to({x:6.6,y:-30.65,startPosition:17},0).wait(1).to({x:5.9,y:-31.7,startPosition:18},0).wait(1).to({x:5.3,y:-32.85,startPosition:19},0).wait(1).to({x:4.95,y:-34.05,startPosition:20},0).wait(1).to({x:4.85,y:-35.35,startPosition:21},0).wait(1).to({x:5.1,y:-36.8,startPosition:22},0).wait(1).to({x:5.85,y:-38.45,startPosition:23},0).wait(1).to({x:7.2,y:-40.4,startPosition:24},0).wait(1).to({x:9.5,y:-42.7,startPosition:25},0).wait(1).to({x:13.25,y:-45.7,startPosition:26},0).wait(1).to({x:19.75,y:-49.85,startPosition:27},0).wait(1));

	// Layer_4_copy_2
	this.instance_4 = new lib.SparkleBlue("synched",0,false);
	this.instance_4.setTransform(-5.25,-1.15,0.4564,0.4472,0,0,0,43,44);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(1).to({regX:45.1,regY:45,x:0.2,y:-6.95,startPosition:1},0).wait(1).to({x:2.4,y:-11.5,startPosition:2},0).wait(1).to({x:3.3,y:-15.2,startPosition:3},0).wait(1).to({x:3.4,y:-18.25,startPosition:4},0).wait(1).to({x:2.9,y:-20.9,startPosition:5},0).wait(1).to({x:2,y:-23.25,startPosition:6},0).wait(1).to({x:0.75,y:-25.4,startPosition:7},0).wait(1).to({x:-0.75,y:-27.3,startPosition:8},0).wait(1).to({x:-2.45,y:-29.05,startPosition:9},0).wait(1).to({x:-4.3,y:-30.7,startPosition:10},0).wait(1).to({x:-6.3,y:-32.2,startPosition:11},0).wait(1).to({x:-8.4,y:-33.65,startPosition:12},0).wait(1).to({x:-10.6,y:-35.05,startPosition:13},0).wait(1).to({x:-12.8,y:-36.35,startPosition:14},0).wait(1).to({x:-15.1,y:-37.65,startPosition:15},0).wait(1).to({x:-17.35,y:-38.9,startPosition:16},0).wait(1).to({x:-19.6,y:-40.15,startPosition:17},0).wait(1).to({x:-21.85,y:-41.4,startPosition:18},0).wait(1).to({x:-24,y:-42.7,startPosition:19},0).wait(1).to({x:-26.1,y:-44,startPosition:20},0).wait(1).to({x:-28.05,y:-45.35,startPosition:21},0).wait(1).to({x:-29.8,y:-46.85,startPosition:22},0).wait(1).to({x:-31.3,y:-48.45,startPosition:23},0).wait(1).to({x:-32.5,y:-50.2,startPosition:24},0).wait(1).to({x:-33.15,y:-52.25,startPosition:25},0).wait(1).to({x:-32.95,y:-54.8,startPosition:26},0).wait(1).to({x:-31.25,y:-58.2,startPosition:27},0).wait(1));

	// Layer_4
	this.instance_5 = new lib.SparkleBlue("synched",0,false);
	this.instance_5.setTransform(5,0,0.2889,0.2889,0,0,0,38.5,38.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).wait(1).to({regX:45.1,regY:45,x:0.35,y:-6.6,startPosition:1},0).wait(1).to({x:-3.45,y:-12.45,startPosition:2},0).wait(1).to({x:-5.85,y:-16.85,startPosition:3},0).wait(1).to({x:-7.2,y:-20.4,startPosition:4},0).wait(1).to({x:-7.9,y:-23.25,startPosition:5},0).wait(1).to({x:-8.1,y:-25.65,startPosition:6},0).wait(1).to({x:-7.95,y:-27.65,startPosition:7},0).wait(1).to({x:-7.4,y:-29.35,startPosition:8},0).wait(1).to({x:-6.65,y:-30.85,startPosition:9},0).wait(1).to({x:-5.7,y:-32.15,startPosition:10},0).wait(1).to({x:-4.6,y:-33.3,startPosition:11},0).wait(1).to({x:-3.35,y:-34.3,startPosition:12},0).wait(1).to({x:-2,y:-35.25,startPosition:13},0).wait(1).to({x:-0.6,y:-36.1,startPosition:14},0).wait(1).to({x:0.9,y:-36.95,startPosition:15},0).wait(1).to({x:2.4,y:-37.7,startPosition:16},0).wait(1).to({x:3.9,y:-38.5,startPosition:17},0).wait(1).to({x:5.35,y:-39.35,startPosition:18},0).wait(1).to({x:6.8,y:-40.2,startPosition:19},0).wait(1).to({x:8.15,y:-41.15,startPosition:20},0).wait(1).to({x:9.35,y:-42.25,startPosition:21},0).wait(1).to({x:10.35,y:-43.55,startPosition:22},0).wait(1).to({x:11.15,y:-45.05,startPosition:23},0).wait(1).to({x:11.55,y:-46.9,startPosition:24},0).wait(1).to({x:11.4,y:-49.3,startPosition:25},0).wait(1).to({x:10.4,y:-52.55,startPosition:26},0).wait(1).to({x:7.7,y:-57.4,startPosition:27},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.9,-11.7,22.4,22.4);
p.frameBounds = [rect, new cjs.Rectangle(-17.6,-17.2,34.1,33.9), new cjs.Rectangle(-21.2,-20.5,41.3,40.9), new cjs.Rectangle(-21.4,-20.9,42,42), new cjs.Rectangle(-30.5,-30.2,60.1,61.2), new cjs.Rectangle(-38.7,-38.8,76.7,78.4), new cjs.Rectangle(-44.7,-44.8,88.6,90.9), new cjs.Rectangle(-47,-47.4,93.6,96.5), new cjs.Rectangle(-45.4,-45.7,90.3,93.5), new cjs.Rectangle(-43.8,-42,87.4,87.4), new cjs.Rectangle(-59.5,-54.6,119,114), new cjs.Rectangle(-72.1,-65.8,144.4,137.6), new cjs.Rectangle(-79.5,-71.8,159.5,151.4), new cjs.Rectangle(-63.1,-57.6,126.6,119.6), new cjs.Rectangle(-49.5,-43.2,98.5,86.5), new cjs.Rectangle(-28.3,-34.4,56.4,61.7), new cjs.Rectangle(-29.8,-38.5,59.5,69.5), new cjs.Rectangle(-30.2,-41,60.2,72.6), new cjs.Rectangle(-27.9,-42.1,55.5,71.2), new cjs.Rectangle(-25.7,-41.8,48.8,66.2), new cjs.Rectangle(-22.9,-41,41.7,59.1), new cjs.Rectangle(-23.2,-45.2,42.1,56.5), new cjs.Rectangle(-22.5,-48.9,40.9,57.7), new cjs.Rectangle(-23.1,-51.7,40.5,56.7), new cjs.Rectangle(-24,-54,39.9,53.8), new cjs.Rectangle(-24.1,-55.5,38.1,32.3), new cjs.Rectangle(-23.7,-57.1,35.7,32), new cjs.Rectangle(-26.5,-60.8,37.7,35.2), new cjs.Rectangle(-28.8,-63.9,39.2,37.3), new cjs.Rectangle(-30.4,-66.4,41.2,38.5), new cjs.Rectangle(-31.2,-68.2,42.5,38.6), new cjs.Rectangle(-31.5,-69.8,43,38.2), new cjs.Rectangle(-31.8,-71.3,43.6,37.5), new cjs.Rectangle(-33.1,-73.7,45.5,38.2), new cjs.Rectangle(-33.3,-75.8,45.7,38.2), new cjs.Rectangle(-32.8,-77.8,44.4,37.5), rect=null, rect, rect];


(lib.TagContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// layer_1
	this.prxTag = new lib.TagBadge_Default();
	this.prxTag.name = "prxTag";
	this.prxTag.setTransform(45,18,1,1,0,0,0,45,18);

	this.timeline.addTween(cjs.Tween.get(this.prxTag).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagContainer, rect = null, [rect]);


(lib.TagBadge_Video = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Vídeo", "bold 14px 'Montreal Serial'", "#FFFFFF");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 66;
	this.lblTag.parent = this;
	this.lblTag.setTransform(78.85,9.6);

	this.instance = new lib.TagIcon_Video();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AjvBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIHfAAQAuAAAfAgQAhAgAAAtQAAAtghAhQgfAgguAAg");
	this.shape.setTransform(78.85,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_Video, rect = new cjs.Rectangle(0,0,113.9,29.6), [rect]);


(lib.TagBadge_New = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Nuevo", "bold 14px 'Montreal Serial'");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 51;
	this.lblTag.parent = this;
	this.lblTag.setTransform(72.5,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF95F3").s().p("AikBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIFJAAQAtAAAhAgQAgAgAAAtQAAAtggAhQghAggtAAg");
	this.shape.setTransform(72.5,18);

	this.instance = new lib.TagIcon_New();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_New, rect = new cjs.Rectangle(0,0,100,29), [rect]);


(lib.TagBadge_InProgress = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("En curso", "bold 14px 'Montreal Serial'", "#110024");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 71;
	this.lblTag.parent = this;
	this.lblTag.setTransform(82.5,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DE99D").s().p("AkIBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIIRAAQAuAAAgAgQAgAgAAAtQAAAtggAhQggAgguAAg");
	this.shape.setTransform(82.5,18);

	this.instance = new lib.TagIcon_InProgress();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_InProgress, rect = new cjs.Rectangle(0,0,120,29), [rect]);


(lib.TagBadge_DueSoon = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Caduca pronto", "bold 14px 'Montreal Serial'", "#110024");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 106;
	this.lblTag.parent = this;
	this.lblTag.setTransform(100,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0AB5D").s().p("Am3BuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAINvAAQAtAAAhAgQAgAgAAAtQAAAtggAhQghAggtAAg");
	this.shape.setTransform(100,18);

	this.instance = new lib.TagIcon_DueSoon();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_DueSoon, rect = new cjs.Rectangle(0,0,155,29), [rect]);


(lib.TagBadge_AssignedSpot = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Asignado", "bold 14px 'Montreal Serial'", "#110024");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 76;
	this.lblTag.parent = this;
	this.lblTag.setTransform(83.85,9.6);

	this.instance = new lib.TagIcon_AssignedSpot();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C7EC").s().p("AkhBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIJDAAQAuAAAfAgQAhAgAAAtQAAAtghAhQgfAgguAAg");
	this.shape.setTransform(83.85,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_AssignedSpot, rect = new cjs.Rectangle(0,0,123.9,29.6), [rect]);


(lib.TagBadge_AssignedGoal = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Asignado", "bold 14px 'Montreal Serial'", "#110024");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 76;
	this.lblTag.parent = this;
	this.lblTag.setTransform(83.85,9.75);

	this.instance = new lib.TagIcon_AssignedGoal();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C7EC").s().p("AkhBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIJDAAQAuAAAfAgQAhAgAAAtQAAAtghAhQgfAgguAAg");
	this.shape.setTransform(83.85,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_AssignedGoal, rect = new cjs.Rectangle(0,0,123.9,29.6), [rect]);


(lib.Tag_Content = function(mode,startPosition,loop,reversed) {
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
	this.icnTag = new lib.TagIcon_AssignedGoal();
	this.icnTag.name = "icnTag";
	this.icnTag.setTransform(23.1,18,1,1,0,0,0,18.1,18);

	this.timeline.addTween(cjs.Tween.get(this.icnTag).wait(1));

	// label
	this.lblTag = new cjs.Text("Vence en 24 horas", "bold 14px 'Montreal Serial'", "#110024");
	this.lblTag.name = "lblTag";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 135;
	this.lblTag.parent = this;
	this.lblTag.setTransform(29,2);

	this.timeline.addTween(cjs.Tween.get(this.lblTag).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tag_Content, rect = new cjs.Rectangle(5,0,161,22), [rect]);


(lib.TagIcon_BrainBreak = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.NanogameIcon();
	this.instance.setTransform(9.45,9.45,0.8177,0.8177,0,0,0,9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(148,199,236,0)").s().p("AiVC0QgeAAAAgeIAAkrQAAgeAeAAIErAAQAeAAAAAeIAAErQAAAegeAAg");
	this.shape.setTransform(11.0042,11.0042,0.6113,0.6113);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagIcon_BrainBreak, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.LessonCompleteAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {CompleteAnimationStart:0,CompleteAnimationEnd:58};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_58 = function() {
		this.stop();
		this.dispatchEvent('completeEndAnimation');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));

	// checkmark
	this.instance = new lib.CompleteCheckmark("synched",0,false);
	this.instance.setTransform(0,0,0.0307,0.0307,0,0,0,32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.0759,scaleY:0.0759},0).wait(1).to({scaleX:0.1387,scaleY:0.1387},0).wait(1).to({scaleX:0.2249,scaleY:0.2249},0).wait(1).to({scaleX:0.3426,scaleY:0.3426},0).wait(1).to({scaleX:0.5042,scaleY:0.5042,x:-0.05,y:-0.05},0).wait(1).to({scaleX:0.7296,scaleY:0.7296,x:-0.15,y:-0.15},0).wait(1).to({scaleX:1.0525,scaleY:1.0525,x:-0.2,y:-0.2},0).wait(1).to({regX:32.4,regY:32.4,scaleX:1.5361,scaleY:1.5361,x:-0.25,y:-0.25},0).to({regX:32.5,regY:32.5,scaleX:0.9985,scaleY:0.9985,x:-0.05,y:-0.05},4).wait(47));

	// sparkle
	this.instance_1 = new lib.OdometerSparkle("synched",0,false);
	this.instance_1.setTransform(-1.25,-0.8,1.5924,1.5924,0,0,0,-0.8,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-2,4,4);
p.frameBounds = [rect, new cjs.Rectangle(-3.4,-3.4,7,7), new cjs.Rectangle(-5.5,-5.5,11.1,11.1), new cjs.Rectangle(-8.3,-8.3,16.7,16.7), new cjs.Rectangle(-12.2,-12.2,24.3,24.3), new cjs.Rectangle(-17.5,-17.5,34.8,34.8), new cjs.Rectangle(-24.9,-24.9,49.7,49.7), new cjs.Rectangle(-35.9,-35.9,71.6,71.6), new cjs.Rectangle(-52.3,-52.3,104.6,104.6), new cjs.Rectangle(-47.7,-47.7,95.5,95.5), new cjs.Rectangle(-43,-43,86.3,86.3), new cjs.Rectangle(-38.4,-38.4,77.2,77.2), rect=new cjs.Rectangle(-34,-34,68,68), rect, rect, new cjs.Rectangle(-34.2,-34,68.2,68), new cjs.Rectangle(-48.5,-48.2,95.7,97.4), new cjs.Rectangle(-61.7,-61.7,122.1,124.8), new cjs.Rectangle(-71.1,-71.4,141,144.8), new cjs.Rectangle(-74.9,-75.4,149,153.7), new cjs.Rectangle(-72.2,-72.8,143.8,148.9), new cjs.Rectangle(-69.7,-66.8,139.1,139.1), new cjs.Rectangle(-94.7,-86.9,189.5,181.5), new cjs.Rectangle(-114.7,-104.7,229.9,219.2), new cjs.Rectangle(-126.5,-114.4,254,241.1), new cjs.Rectangle(-100.6,-91.8,201.6,190.5), new cjs.Rectangle(-78.7,-68.8,156.8,137.6), new cjs.Rectangle(-45.1,-54.8,89.7,98.4), new cjs.Rectangle(-47.4,-61.3,94.7,110.7), new cjs.Rectangle(-48.1,-65.3,95.8,115.6), new cjs.Rectangle(-44.4,-67.1,88.4,113.4), new cjs.Rectangle(-40.9,-66.6,77.8,105.4), new cjs.Rectangle(-36.4,-65.3,70.5,99.4), new cjs.Rectangle(-36.9,-72,71,106.1), new cjs.Rectangle(-35.6,-77.8,69.7,111.9), new cjs.Rectangle(-36.7,-82.4,70.7,116.5), new cjs.Rectangle(-38.2,-85.9,72.2,120), new cjs.Rectangle(-38.4,-88.3,72.4,122.4), new cjs.Rectangle(-37.8,-90.8,71.8,124.8), new cjs.Rectangle(-42.1,-96.9,76.1,131), new cjs.Rectangle(-45.9,-101.8,80,135.8), new cjs.Rectangle(-48.3,-105.7,82.4,139.7), new cjs.Rectangle(-49.6,-108.7,83.6,142.7), new cjs.Rectangle(-50.1,-111.2,84.1,145.2), new cjs.Rectangle(-50.7,-113.6,84.8,147.6), new cjs.Rectangle(-52.7,-117.4,86.8,151.4), new cjs.Rectangle(-52.9,-120.7,87,154.8), new cjs.Rectangle(-52.2,-123.8,86.3,157.9), rect=new cjs.Rectangle(-34,-34,68,68), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.LessonButton_Vertical = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,Over:1,"Down":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// badge
	this.astTag = new lib.TagContainer();
	this.astTag.name = "astTag";
	this.astTag.setTransform(62.9,24,1,1,0,0,0,56.9,18);

	this.timeline.addTween(cjs.Tween.get(this.astTag).wait(3));

	// title
	this.astTitle = new lib.TitleLabel_Vertical();
	this.astTitle.name = "astTitle";
	this.astTitle.setTransform(80,140,1,1,0,0,0,77,23);

	this.timeline.addTween(cjs.Tween.get(this.astTitle).wait(3));

	// lessoniconmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AtqJJIAAxBQAAgyAyAAIaPAAQAyAAAAAyIAARBg");
	var mask_graphics_1 = new cjs.Graphics().p("As9JJIAAxBQAAgUAUAAIaPAAQAUAAAAAUIAARBg");
	var mask_graphics_2 = new cjs.Graphics().p("AtqJJIAAxBQAAgyAyAAIaPAAQAyAAAAAyIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:90.5,y:58.5}).wait(1).to({graphics:mask_graphics_1,x:89,y:58.5}).wait(1).to({graphics:mask_graphics_2,x:90.5,y:58.5}).wait(1));

	// lessoniconproxy
	this.prxLessonIcon = new lib.LessonIconProxy();
	this.prxLessonIcon.name = "prxLessonIcon";
	this.prxLessonIcon.setTransform(92.2,60.15,2.2249,1.425,0,0,0,40.1,40.1);

	var maskedShapeInstanceList = [this.prxLessonIcon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.prxLessonIcon).wait(3));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AtHN6QgyAAAAgyIAA6PQAAgyAyAAIaPAAQAyAAAAAyIAAaPQAAAygyAAg");
	this.shape.setTransform(92,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110024").s().p("AtHNcQgUAAAAgUIAA6PQAAgUAUAAIaPAAQAUAAAAAUIAAaPQAAAUgUAAg");
	this.shape_1.setTransform(92,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// strokeMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAgAt5tHIAAaPQAAAyAyAAIaPAAQAyAAAAgyIAA6PQAAgygyAAI6PAAQgyAAAAAyg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAgAtbtHIAAaPQAAAUAUAAIaPAAQAUAAAAgUIAA6PQAAgUgUAAI6PAAQgUAAAAAUg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AtHOYQhQAAAAhQIAA6PQAAhQBQAAIaPAAQBQAAAABQIAAaPQAABQhQAAgAt5tHIAAaPQAAAyAyAAIaPAAQAyAAAAgyIAA6PQAAgygyAAI6PAAQgyAAAAAyg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:92,y:92}).wait(1).to({graphics:mask_1_graphics_1,x:92,y:92}).wait(1).to({graphics:mask_1_graphics_2,x:92,y:92}).wait(1));

	// stroke
	this.pnlBackground = new lib.VerticalBackgroundPanel_Default();
	this.pnlBackground.name = "pnlBackground";
	this.pnlBackground.setTransform(80,87,1,1,0,0,0,80,87);

	var maskedShapeInstanceList = [this.pnlBackground];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.pnlBackground).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,184,192.5);
p.frameBounds = [rect, rect, rect];


(lib.LessonButton_Horizontal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// badge
	this.astTag = new lib.TagContainer();
	this.astTag.name = "astTag";
	this.astTag.setTransform(62.9,24,1,1,0,0,0,56.9,18);

	this.timeline.addTween(cjs.Tween.get(this.astTag).wait(3));

	// title
	this.astTitle = new lib.TitleLabel_Horizontal();
	this.astTitle.name = "astTitle";
	this.astTitle.setTransform(259,85,1,1,0,0,0,77,23);

	this.timeline.addTween(cjs.Tween.get(this.astTitle).wait(3));

	// lessoniconmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsaOJQgyAAAAgyIAA6PQAAgyAyAAIaFAAIAAbzg");
	var mask_graphics_1 = new cjs.Graphics().p("AspN6QgUAAAAgUIAA6PQAAgUAUAAIajAAIAAa3g");
	var mask_graphics_2 = new cjs.Graphics().p("AsaOJQgyAAAAgyIAA6PQAAgyAyAAIaFAAIAAbzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:87.5,y:90.5}).wait(1).to({graphics:mask_graphics_1,x:89,y:89}).wait(1).to({graphics:mask_graphics_2,x:87.5,y:90.5}).wait(1));

	// lessoniconproxy
	this.prxLessonIcon = new lib.LessonIconProxy();
	this.prxLessonIcon.name = "prxLessonIcon";
	this.prxLessonIcon.setTransform(89.2,92.15,2.15,2.225,0,0,0,40.1,40.1);

	var maskedShapeInstanceList = [this.prxLessonIcon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.prxLessonIcon).wait(3));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("A7fN6QgyAAAAgyIAA6PQAAgyAyAAMA2/AAAQAyAAAAAyIAAaPQAAAygyAAg");
	this.shape.setTransform(184,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110024").s().p("A7fNcQgUAAAAgUIAA6PQAAgUAUAAMA2/AAAQAUAAAAAUIAAaPQAAAUgUAAg");
	this.shape_1.setTransform(184,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// strokeMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAgA8RtHIAAaPQAAAyAyAAMA2/AAAQAyAAAAgyIAA6PQAAgygyAAMg2/AAAQgyAAAAAyg");
	var mask_1_graphics_1 = new cjs.Graphics().p("A79OYQgyAAAAgyIAA7LQAAgyAyAAMA37AAAQAyAAAAAyIAAbLQAAAygyAAgA7ztHIAAaPQAAAUAUAAMA2/AAAQAUAAAAgUIAA6PQAAgUgUAAMg2/AAAQgUAAAAAUg");
	var mask_1_graphics_2 = new cjs.Graphics().p("A7fOYQhQAAAAhQIAA6PQAAhQBQAAMA2/AAAQBQAAAABQIAAaPQAABQhQAAgA8RtHIAAaPQAAAyAyAAMA2/AAAQAyAAAAgyIAA6PQAAgygyAAMg2/AAAQgyAAAAAyg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:184,y:92}).wait(1).to({graphics:mask_1_graphics_1,x:184,y:92}).wait(1).to({graphics:mask_1_graphics_2,x:184,y:92}).wait(1));

	// stroke
	this.pnlBackground = new lib.HoriztonalBackgroundPanel_Default();
	this.pnlBackground.name = "pnlBackground";
	this.pnlBackground.setTransform(80,87,1,1,0,0,0,80,87);

	var maskedShapeInstanceList = [this.pnlBackground];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.pnlBackground).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,368,184);
p.frameBounds = [rect, rect, rect];


(lib.TagBadge_Nanogame = function(mode,startPosition,loop,reversed) {
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
	this.lblTag = new cjs.Text("Pausa Mental", "bold 14px 'Montreal Serial'", "#FFFFFF");
	this.lblTag.name = "lblTag";
	this.lblTag.textAlign = "center";
	this.lblTag.lineHeight = 20;
	this.lblTag.lineWidth = 96;
	this.lblTag.parent = this;
	this.lblTag.setTransform(93.85,9.6);

	this.instance = new lib.TagIcon_BrainBreak();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110024").s().p("AmFBuQguAAggggQggghAAgtQAAgtAgggQAgggAuAAIMLAAQAtAAAhAgQAgAgAAAtQAAAtggAhQghAggtAAg");
	this.shape.setTransform(93.85,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.lblTag}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TagBadge_Nanogame, rect = new cjs.Rectangle(0,0,143.9,29.6), [rect]);


// stage content:
(lib.NeonLessonChooserButton_Staticcolor = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LessonCompleteAnimation();
	this.instance.setTransform(406,523.35);

	this.instance_1 = new lib.PulseAnimation_Vertical();
	this.instance_1.setTransform(160.05,143.45,1,1,0,0,0,80,87);

	this.instance_2 = new lib.PluseAnimation_Horizontal();
	this.instance_2.setTransform(356.1,141.45,1,1,0,0,0,80,87);

	this.instance_3 = new lib.LessonButton_Horizontal();
	this.instance_3.setTransform(356.1,336.45,1,1,0,0,0,80,87);

	this.instance_4 = new lib.LessonButton_Vertical();
	this.instance_4.setTransform(160.05,336.45,1,1,0,0,0,80,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(592.1,438.5,564.1,470);
p.frameBounds = [rect];
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