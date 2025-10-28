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


(lib.SpeakerDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AgDCBIiaAAIAAkGICdAAICeiJIAAIdg");
	this.shape.setTransform(16.825,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SpeakerDisabled, new cjs.Rectangle(1,3,31.700000000000003,54.2), null);


(lib.Speaker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgDCBIiaAAIAAkGICdAAICeiJIAAIdg");
	this.shape.setTransform(16.825,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D4766").ss(3,1,1).p("ACeEPIihiOIiaAAIAAkGICdAAICeiJg");
	this.shape_1.setTransform(16.825,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4866").s().p("AgDCBIiaAAIAAkFICdAAICeiKIAAIdg");
	this.shape_2.setTransform(16.075,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speaker, new cjs.Rectangle(-0.5,0,34.7,58.7), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00BA00").s().p("AhLBLQgkgVgVgDIAEgGIAygvIAzAxQAQgsAYgrQAbgzAagcIBCArIABABQgsApgoA0QguA7gRArQgWgWgngXg");
	this.shape.setTransform(13.3,11.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// referenceCircle_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#697D8C").s().p("AieCfQhChBAAheQAAhcBChCQBChCBcAAQBeAABBBCQBCBCAABcQAABehCBBQhBBCheAAQhcAAhChCgAiXiXQg/BAAABXQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhXg/hAQg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape_1.setTransform(12.6,13.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAADXQhYAAg/g/Qg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/BAAABXQAABZg/A/Qg/A/hZAAIAAAAg");
	this.shape_2.setTransform(12.6,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#697D8C").s().p("AieCfQhChBAAheQAAhcBChCQBChCBcAAQBeAABBBCQBCBCAABcQAABehCBBQhBBCheAAQhcAAhChCgAiXiXQg/BAAABXQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhXg/hAQg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape_3.setTransform(12.6,13.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RowScaffoldCheckmarkDone, new cjs.Rectangle(-10.4,-9.5,46,46), null);


(lib.PrinterPage = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8FCC6").s().p("AgpAmQgRgQAAgWQAAgVARgQQARgQAYAAQAZAAARAQQARAQAAAVQAAAWgRAQQgRAQgZAAQgYAAgRgQg");
	this.shape.setTransform(29.675,19.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94C932").s().p("ABaAcIAAATQgOgFgWgOQgYgOgOgFQAGATgWAOQgUAPgBgKQgVgqglALQg0AOgVgLIAAglQgbAVgYgEIAPgIQAlgTA4gsIErBkQgIASgWAbIgEAAQgyAAgegtg");
	this.shape_1.setTransform(39.35,9.2023);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#71F6E1").s().p("AkEhJQAPAAAagFQAzgJA0gbQAZAFAagVIAAAlQAWALAygNQAlgMAWAqQAAALAVgPQAWgPgGgSQAOAFAYAOQAXAOANAEIAAgTQAfAvA1gCQg1A+hdAzQgqAYhNATQgnAJgfAFgAgyguQgSAQAAAXQAAAUASAQQARAQAYAAQAYAAASgQQARgQAAgUQAAgXgRgQQgSgPgYAAQgYAAgRAPg");
	this.shape_2.setTransform(30.625,20.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8FBD3").s().p("AjiAhIg9hDIgcgfQARAEAggEQA/gJBDgmQA3gfA+goIFPB2QgDAOgJAPQgJASgPASQg5BLhmAmQgyATg9AUIhjAggAhvhkIgPAHQg0AbgzAJQgaAFgPAAIC6DMQAfgFAngJQBNgTAqgYQBdgzA1g+QAWgaAIgSIkqhmQg5AtglATg");
	this.shape_3.setTransform(31.625,18.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B2B2").s().p("AgIBWQA8gUAygTQBmgnA5hJQAPgUAJgRIAoALQhZBXgaAPQhSA0hmAogAlEhbIASgJIA9BEg");
	this.shape_4.setTransform(33.525,24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrinterPage, new cjs.Rectangle(0,0,66.1,36.7), null);


(lib.ButtonBase_SmlSquare_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_SmlSquare_Over, new cjs.Rectangle(-25,-23,50,46.1), null);


(lib.ButtonBase_SmlSquare_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_SmlSquare_Down, new cjs.Rectangle(-25,-23,50,46.1), null);


(lib.ButtonBase_SmlRect_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AkIDmQgkgBgYgYQgZgYAAgkIAAkhQAAgkAZgZQAYgYAkAAIIRAAQAkAAAYAYQAZAZAAAkIAAEhQgBAkgYAYQgYAZgkAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_SmlRect_Over, new cjs.Rectangle(-35,-23,70,46.1), null);


(lib.ButtonBase_SmlRect_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AkIDmQgkgBgYgYQgZgYAAgkIAAkhQAAgkAZgZQAYgYAkAAIIRAAQAkAAAYAYQAZAZAAAkIAAEhQgBAkgYAYQgYAZgkAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_SmlRect_Down, new cjs.Rectangle(-35,-23,70,46.1), null);


(lib.ButtonBase_BlueSquareSmall_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ah4C+QggAAgYgXQgXgYAAggIAAjdQAAggAXgXQAYgYAgAAIDxAAQAgAAAXAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAirihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIDxAAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIjxAAQgeAAgVAVg");
	this.shape.setTransform(0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAgAjTjAQgTAUAAAcIAAEhQAAAcATASQAUAUAbAAIFJAAQAcAAATgUQATgSAAgcIAAkhQAAgcgTgUQgUgTgbAAIlJAAQgbAAgUATg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhmCrQgdAAgVgVQgVgUAAgcIAAjLQAAgcAVgVQAVgUAdAAIDNAAQAdAAAVAUQAVAVAAAcIAADLQAAAcgVAUQgUAVgeAAg");
	this.shape_2.setTransform(-0.225,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ah4C6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIDxAAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAiZifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIDNAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAIjNAAQgdAAgVAUg");
	this.shape_3.setTransform(-0.125,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AjNDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIFJAAQAeAAAVAUIAFAbQgDAYglgLQigBuhRBlIg0BCQgbAhghAWQANAfgaACg");
	this.shape_4.setTransform(-1.35,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AikDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIFJAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_5.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueSquareSmall_Disabled, new cjs.Rectangle(-25,-23,50,46.1), null);


(lib.ButtonBase_BlueSquareSmall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ah4C+QggAAgYgXQgXgYAAggIAAjdQAAggAXgXQAYgYAgAAIDxAAQAgAAAXAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAirihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIDxAAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIjxAAQgeAAgVAVg");
	this.shape.setTransform(0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAgAjTjAQgTAUAAAcIAAEhQAAAcATASQAUAUAbAAIFJAAQAcAAATgUQATgSAAgcIAAkhQAAgcgTgUQgUgTgbAAIlJAAQgbAAgUATg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("Ah4C6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIDxAAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAiZifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIDNAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAIjNAAQgdAAgVAUg");
	this.shape_2.setTransform(-0.125,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D87C9").s().p("AhmCrQgdAAgVgVQgVgUAAgcIAAjLQAAgcAVgVQAVgUAdAAIDNAAQAdAAAVAUQAVAVAAAcIAADLQAAAcgVAUQgUAVgeAAg");
	this.shape_3.setTransform(-0.225,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AjNDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIFJAAQAeAAAVAUIAFAbQgDAYglgLQigBuhRBlIg0BCQgbAhghAWQANAfgaACg");
	this.shape_4.setTransform(-1.35,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AikDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIFJAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_5.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("ADhjNQgYgYgkAAIlJAAQgkAAgYAYQgZAZAAAkIAAEhQAAAkAZAYQAYAYAkABIFJAAQAkAAAYgZQAYgYABgkIAAkhQAAglgZgYg");
	this.shape_6.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueSquareSmall, new cjs.Rectangle(-26,-24,52,48.1), null);


(lib.ButtonBase_BlueRectSmall_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjcC+QgfAAgZgXQgXgYAAggIAAjdQAAggAXgXQAZgYAfAAIG5AAQAhAAAWAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAkPihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIG5AAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIm5AAQgeAAgVAVg");
	this.shape.setTransform(0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AkIDmQgkgBgYgYQgZgYAAgkIAAkhQAAgkAZgZQAYgYAkAAIIRAAQAkAAAYAYQAZAZAAAkIAAEhQgBAkgYAYQgYAZgkAAgAk3jAQgTAUAAAcIAAEhQAAAbATATQAUAUAbAAIIRAAQAbAAAUgUQATgSAAgcIAAkhQAAgcgTgUQgVgTgaAAIoRAAQgbAAgUATg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AjcC6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIG5AAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAj9ifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIGVAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAImVAAQgdAAgVAUg");
	this.shape_2.setTransform(-0.125,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AjKCrQgdAAgVgVQgVgTAAgdIAAjLQAAgcAVgVQAVgUAdAAIGVAAQAdAAAVAUQAVAVAAAcIAADLQAAAdgVATQgUAVgeAAg");
	this.shape_3.setTransform(-0.225,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AkxDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIIRAAQAdAAAWAUQAGAPgBAMQgDAYgmgLQiOBijZBxQinBXgaAiQANAfgbACg");
	this.shape_4.setTransform(-1.3429,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AkIDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIIRAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_5.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueRectSmall_Disabled, new cjs.Rectangle(-35,-23,70,46.1), null);


(lib.ButtonBase_BlueRectSmall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjcC+QgfAAgZgXQgXgYAAggIAAjdQAAggAXgXQAZgYAfAAIG5AAQAhAAAWAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAkPihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIG5AAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIm5AAQgeAAgVAVg");
	this.shape.setTransform(0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AkIDmQgkgBgYgYQgZgYAAgkIAAkhQAAgkAZgZQAYgYAkAAIIRAAQAkAAAYAYQAZAZAAAkIAAEhQgBAkgYAYQgYAZgkAAgAk3jAQgTAUAAAcIAAEhQAAAbATATQAUAUAbAAIIRAAQAbAAAUgUQATgSAAgcIAAkhQAAgcgTgUQgVgTgaAAIoRAAQgbAAgUATg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("AjcC6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIG5AAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAj9ifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIGVAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAImVAAQgdAAgVAUg");
	this.shape_2.setTransform(-0.125,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D87C9").s().p("AjKCrQgdAAgVgVQgVgTAAgdIAAjLQAAgcAVgVQAVgUAdAAIGVAAQAdAAAVAUQAVAVAAAcIAADLQAAAdgVATQgUAVgeAAg");
	this.shape_3.setTransform(-0.225,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AkxDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIIRAAQAdAAAWAUQAGAPgBAMQgDAYgmgLQiOBijZBxQinBXgaAiQANAfgbACg");
	this.shape_4.setTransform(-1.3429,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AkIDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIIRAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_5.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// white
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("AFFjNQgYgYgkAAIoRAAQgkAAgYAYQgZAZAAAkIAAEhQAAAkAZAYQAYAYAkABIIRAAQAkAAAYgZQAYgYABgkIAAkhQAAgkgZgZg");
	this.shape_6.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueRectSmall, new cjs.Rectangle(-36,-24,72,48.1), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6F08").s().p("AgWCXQgDAAgEgDQgDgDAAgEIAAgvQAAgFADgCQAEgDADAAIAtAAQAEAAADADQADACAAAFIAAAvQAAAEgDADQgDADgEAAgAgWAwQgEAAgDgDQgDgDAAgEIgKixQABgEABgCQABgCADgBIAEgCIBAAAIAGACIADADIABAGIgJCxQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(4.25,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrimaryAlert, new cjs.Rectangle(0,0,8.5,30.2), null);


(lib.IconXDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AgHBdIhzB/IhghTICAiQIh5iOIBmhWIBsCGIB1h6IBnBsIiLBxICFCTIhsBbg");
	this.shape.setTransform(0.35,1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconXDisabled, new cjs.Rectangle(-21.5,-22.5,43.7,47.3), null);


(lib.IconX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBdIhzB/IhghTICAiQIh5iOIBmhWIBsCGIB1h6IBnBsIiLBxICFCTIhsBbg");
	this.shape.setTransform(0.35,1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B50100").ss(2,1,1).p("ADbhzIiLBxICFCTIhsBbIhwiPIhzB/IhghTICBiQIh6iOIBmhWIBtCGIB1h6g");
	this.shape_1.setTransform(0.35,1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B50100").s().p("AgHBdIhzB/IhfhTICAiQIh6iOIBnhWIBsCGIB1h6IBlBsIiKBxICFCTIhsBbg");
	this.shape_2.setTransform(-0.15,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconX, new cjs.Rectangle(-22.5,-25,45.7,50.8), null);


(lib.IconWorkspace = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AAhCnQgTgBgBgTIAChGIFFACIgCBGQAAAUgTAAgABgB6IAgAgIABgPIAhAAIACgcIghgDIAAgRgAAkBmQgHAGABAIIAAAKQgBAIAHAGQAGAGAHAAIANAAQAIAAAGgGQAGgGAAgIIAAgKQAAgIgGgGQgGgGgIAAIgNAAQgHAAgGAGgAk+CnQgUgBAAgTIgBhIIE9ACIgBBGQAAATgUABgAkdBrIghADIACAdIAgAAIACANIAggeIgjghgAh8gfIA4gzIAAArIg4AzgAh8h1IA4gzIAAArIg4Azg");
	this.shape.setTransform(-0.35,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AA4A0IiogPIAAgqICoAOIAAArIA4gzIAAAoIg4AzgAA4AJgAA4AJIAAgqIiogPIAAgrICoAPIAAArIA4gzIAAArIg4Ayg");
	this.shape_1.setTransform(-18.45,-0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlmD2QgUAAAAgUIgHnGQAAgUAUAAILbAAQAUAAAAAUIgMHJQAAAUgUAAgAAZjAQgFAFAAAKIgFEtIgBBGQAAAUAUAAIEdACQAUAAAAgUIAChGIAHlIQAAgUgUAAIhvgCQgUAAAAAUIAAAKIidgDQgKAAgFAFgAlZiuIAGEoIABBIQAAAUAUAAIETAAQAUAAAAgUIAChGIAGlDQAAgUgUAAIhhgCQgUAAAAAUIAAAJIitgCQgUAAAAAUgAC5BeQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEgAkkBTIAAgnICoAPIAAAngABOAsQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgADnAnQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgFgFgAkkABIAAgrICoAPIAAArgACugBQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEADgGAAQgGAAgFgDgAEFgnQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAB6g0QgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAkkhUIA4g0ICpAPIg5A0gADdhqQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_2.setTransform(-0.375,-1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0C2E4C").ss(2,1,1).p("AFVB+IAHlIQAAgUgUAAIhvgCQgUAAAAAUIAAAKIidgDQgKAAgFAFQgFAFAAAKIgFEtIgBBGQAAAUAUAAIEdACQAUAAAAgUgAFuj4IrbAAQgUAAAAAUIAHHGQAAAUAUAAILIADQAUAAAAgUIAMnJQAAgUgUAAgAgVB8IAGlDQAAgUgUAAIhhgCQgUAAAAAUIAAAJIitgCQgUAAAAAUIAGEoIABBIQAAAUAUAAIETAAQAUAAAAgUg");
	this.shape_3.setTransform(-0.375,-1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconWorkspace, new cjs.Rectangle(-40,-27,79.3,51.8), null);


(lib.iconSpeakerSmall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AggBGIgxAAIAAiIIAxAAIBxhgIAAFFg");
	this.shape.setTransform(0.35,0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4967").s().p("AhQArIAwAAIBxheIAAAJIhuBcIgsAAQgEAAgDACg");
	this.shape_1.setTransform(-0.375,-11.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4867").s().p("ABOCyIhvhaIgsAAQgEAAgDgCQgDgDAAgFIAAgIQgHgBAAgIIAAiHQAAgKAKAAIAsAAIBuhdQACgDAFAAIAEACQAGACAAAHIAAAGIACAAQAGADAAAGIAAFFQAAAFgGAEIgEABQgEgBgDgCgAhNBOIAwAAIByBdIAAlFIhyBgIgwAAgAhUhBQADgDAEABIAsAAIBuhdIAAgJIhxBfIgwAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconSpeakerSmall, new cjs.Rectangle(-9.4,-18,18.9,36.1), null);


(lib.IconSpeakerDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AilCCIibAAIAAkGICfAAICeiKIAAIdgACUCkQgMgNAAgSQAAgRAMgNQAMgMASAAQARAAANAMQAMANAAARQAAASgMANQgNAMgRAAQgSAAgMgMgACIBLIgHhYIAggBQAlgEAZgJQAPgGgEgZQgFgagZgLQglgQgjAYIgcAaIgchkIAfgKQAlgKAhgCQCJgEAHB3QAEBDg3ARQgSAFgVABIgSgBIgCA7g");
	this.shape.setTransform(0.3419,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSpeakerDisabled, new cjs.Rectangle(-31.7,-27,64.2,54.2), null);


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

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilCCIibAAIAAkGICfAAICeiKIAAIdgACUCkQgMgNAAgSQAAgRAMgNQAMgMASAAQARAAANAMQAMANAAARQAAASgMANQgNAMgRAAQgSAAgMgMgACIBLIgHhYIAggBQAlgEAZgJQAPgGgEgZQgFgagZgLQglgQgjAYIgcAaIgchkIAfgKQAlgKAhgCQCJgEAHB3QAEBDg3ARQgSAFgVABIgSgBIgCA7g");
	this.shape.setTransform(0.3419,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D4766").ss(3,1,1).p("ABMiiIAcBlIAcgbQAjgXAlAPQAZAMAFAaQAEAZgPAGQgZAJglAEIggABIAHBYIBLAFIACg7IASABQAVAAASgGQA3gRgEhDQgHh4iJAFQghACglAKgADcCGQAAARgMANQgNAMgRAAQgSAAgMgMQgMgNAAgRQAAgSAMgMQAMgNASAAQARAAANANQAMAMAAASgAgDkOIAAIdIiiiNIibAAIAAkHICfAAg");
	this.shape_1.setTransform(0.3419,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4866").s().p("AilCCIibAAIAAkHICfAAICeiJIAAIdgACUCjQgMgMAAgSQAAgRAMgMQAMgNASAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAQgSAAgMgNgACIBLIgHhYIAggBQAlgEAZgJQAPgGgEgZQgFgbgZgKQglgQgjAXIgcAbIgchlIAfgJQAlgKAhgBQCJgFAHB3QAEBDg3ARQgSAGgVAAIgSgBIgCA7g");
	this.shape_2.setTransform(-0.4081,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSpeaker, new cjs.Rectangle(-33.2,-30,67.2,58.7), null);


(lib.iconSound = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLB7IAKgJQAbgfAJgoQAFgUAAgXQAAgigMgeQgKgagUgXIgJgIIAUgWIAKAJQAcAgANAmQAKAeAAAiQAAAXgFAUQgKA0gkAoIgKAIgAhFBHIANgLQAHgHAFgKQAKgSAAgZQAAgigWgZIgMgKIARgYQAJAHAHAGQAHAIAFAIQATAdAAAjQAAAYgHATQgJAVgPAQIgQAPg");
	this.shape.setTransform(0.4,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4967").s().p("AAECBIAJgJQAVgYALgdQAHgTACgUQAAAUgFATQgJAkgZAcIgFAFgAg1BOIANgMQAQgSAEgYQABAZgMASIgIAKIgIAHgAg0g9IAQgZIAJAHIgCAAQgDABgDADIgMARgAAEhyIAUgUIAHAGQgDABgCACIgRARg");
	this.shape_1.setTransform(-2,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4867").s().p("AAGCeIgUgUQgDgDAAgEIABgEIgHgHQgDgDAAgEQAAgFADgCIAJgJQASgUAKgaQALgcAAgfQAAgZgHgXQgDgKgEgJQgIgMgIgLIgJgIQgDgEAAgDIABgEIgHgGQgDgCAAgFQAAgEADgDIAVgUQACgDAEAAQAEAAADADIAKAJQAUAWANAZQANAVAHAYQAJAfAAAhQAAAXgEAUQgKA4gnArIgKAIQgDADgEAAQgEAAgDgDgAgHhxIAIAIQAUAXALAaQAMAeAAAiQAAAXgFAUQgKAogcAfIgIAJIAUAUIAJgIQAlgoAKg0QAEgUAAgXQAAgigJgeQgNgmgdggIgJgJgAAZAzQgLAdgVAYIgJAJIAHAHIAEgFQAYgcAKgkQAEgTABgUQgCAUgHATgAgQiCIAGAGIAQgRQACgCADgBIgHgGgAg2BtIgTgXQgCgDAAgFIABgCIgHgIIgBgCIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIABgBIALgLQAUgVAAgeQAAgPgFgNIgHgJIgKgHIgDgEIgBgDQgBgDACgDIgFgEIgCgBQgCgDAAgDIAAgEIABgDIARgZQADgDAEgBIABAAQAEAAACACIARAPIABAAQAPASAJATIABACQAQAeAAAiQAAAXgHAUQgHAYgSAUIgBAAIgQAPQgEACgCABQgFgBgDgDgAhAg9IALAKQAXAZAAAiQAAAZgKASQgFAKgHAHIgNALIASAYIAQgPQAPgQAIgVQAIgTAAgYQAAgjgTgdQgFgIgHgIQgHgGgJgHgAg8AyIgNAMIAFAGIAJgHIAHgKQAMgSAAgZQgEAYgQASgAhIhNIAFADIAMgRQACgDAEgBIACAAIgJgHg");
	this.shape_2.setTransform(0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconSound, new cjs.Rectangle(-8.3,-16.1,16.700000000000003,32.3), null);


(lib.IconSortRowSmallGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAsBzIgDgBIgBgDIAAgYIABgEIADgBIBrAAIADABIABAEIAAAYIgBADIgDABgAgcByIgpgpQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAIAZAAIAAiwIABgDIADgBIAZAAIADABIABADIAACwIAXAAIADABIABADIgBADIgoApIgDABgAh5BzIgDgBIgBgDIAAiwIgZAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAIApgpIADgBIADABIApApIABADIgBADIgDABIgYAAIAACwIgBADIgDABgAAtAxIgDgBIgCgDIAAgZIACgCIADgBIBpAAIAEABIABACIAAAZIgBADIgEABgAAvgQIgFgBIgCgCIAAgZIACgDIAFgBIBlAAIAGABIABADIAAAZIgBACIgGABgAA0hRIgJgBIgDgEIAAgYIADgDIAJgBIBbAAIAIABIAEADIAAAYIgEAEIgIABg");
	this.shape.setTransform(-0.3167,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSortRowSmallGray, new cjs.Rectangle(-15.8,-12,31,23), null);


(lib.IconSortRowSmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBzIgDgBIgBgDIAAgYIABgEIADgBIBrAAIADABIABAEIAAAYIgBADIgDABgAgcByIgpgpQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAIAZAAIAAiwIABgDIADgBIAZAAIADABIABADIAACwIAXAAIADABIABADIgBADIgoApIgDABgAh5BzIgDgBIgBgDIAAiwIgZAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAIApgpIADgBIADABIApApIABADIgBADIgDABIgYAAIAACwIgBADIgDABgAAtAxIgDgBIgCgDIAAgZIACgCIADgBIBpAAIAEABIABACIAAAZIgBADIgEABgAAvgQIgFgBIgCgCIAAgZIACgDIAFgBIBlAAIAGABIABADIAAAZIgBACIgGABgAA0hRIgJgBIgDgEIAAgYIADgDIAJgBIBbAAIAIABIAEADIAAAYIgEAEIgIABg");
	this.shape.setTransform(-0.3167,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D4766").ss(3,1,1).p("ACXhxIgIgBIhbAAIgJABIgDADIAAAYIADADIAJABIBbAAIAIgBIAEgDIAAgYgACagvIgGgBIhlAAIgFABIgCACIAAAZIACADIAFABIBlAAIAGgBIABgDIAAgZgACaASIgEgBIhpAAIgDABIgCADIAAAZIACACIADACIBpAAIAEgCIABgCIAAgZgACaBUIgDgBIhrAAIgDABIgBADIAAAYIABADIADABIBrAAIADgBIABgDIAAgYgAASBDIgDgBIgXAAIAAiwIgBgDIgDgBIgZAAIgDABIgBADIAACwIgZAAQgDAAgBADQgBACACACIApApIADABIADgBIAogpIABgDgAhBhCIgDABIgYAAIAACwIgBADIgDABIgZAAIgDgBIgBgDIAAiwIgZAAQgDAAgBgDQgBgCACgCIApgpIADgBIADABIApApIABADg");
	this.shape_1.setTransform(-0.3167,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// glyph copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("ABcDwIgGgDIgDgFIAAg0IADgGIAGgCIDfAAIAGACIACAGIAAA0IgCAFIgGADgAg7DtIhWhVQgEgEACgFQADgGAFAAIA0AAIAAlwIACgGIAGgCIA0AAIAGACIACAGIAAFwIAzAAIAGACIACAHIgCAHIhVBUIgGADgAj+DwIgGgDIgCgFIAAlwIg0AAQgFgBgDgFQgCgEAEgFIBWhWIAGgCIAGACIBWBWIACAHIgCAFIgGADIg0AAIAAFwIgCAFIgGADgABeBnIgHgCIgEgHIAAgzIAEgGIAHgCIDbAAIAHACIADAGIAAAzIgDAHIgHACgABigiIgKgBIgFgHIAAg0IAFgFIAKgDIDSAAIAMADIADAFIAAA0IgDAHIgMABgABriqIgRgCIgHgHIAAg0IAHgGIARgCIC/AAIARACIAIAGIAAA0IgIAHIgRACg");
	this.shape_2.setTransform(-0.766,-1.42,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconSortRowSmall, new cjs.Rectangle(-17.3,-13.5,34,26), null);


(lib.IconRotate2Active = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFE9").s().p("AiaB8QgzgzAAhHQAAhHAzgzIAAAAIAAAAQAygzBIABQBGAAAzAyQAyAyABBGIBCADIhpB7IhaiFIBFAEQgCgrgfggQghgggugBQgvABghAgQghAiAAAuQAAAuAhAiQAhAgAvABIgCAEIgVAjIgMASQgygLglglg");
	this.shape.setTransform(4.35,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotate2Active, new cjs.Rectangle(-16.2,-17.3,41.2,34.3), null);


(lib.IconRotate2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiaB8QgzgzAAhHQAAhHAzgzIAAAAIAAAAQAygzBIABQBGAAAzAyQAyAyABBGIBCADIhpB7IhaiFIBFAEQgCgrgfggQghgggugBQgvABghAgQghAiAAAuQAAAuAhAiQAhAgAvABIgCAEIgVAjIgMASQgygLglglg");
	this.shape.setTransform(4.35,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#010032").ss(2,1,1).p("AiaB8QAlAmAyAKQAGgJAGgJQAKgRAKgSQABgCACgCQgvAAghghQghghAAgvQAAgvAhghQAhghAvAAQAuAAAhAhQAfAgACAsIhFgEIBaCEIBph6IhCgEQgBhGgygxQgyg0hHAAQhIAAgyAzIAAABIgBAAQgyAyAABHQAABHAzAzg");
	this.shape_1.setTransform(4.35,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRotate2, new cjs.Rectangle(-23.3,-23.3,55.2,46.7), null);


(lib.IconRiverBoxesLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#346195").ss(1,1,1).p("AA6CqIB2AAIAAlTIh2AAAg6CqIh1AAIAAlTIB1AAIB0AAIAAFTgAg6ipIAAFT");
	this.shape.setTransform(17.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7CqIAAlTIAAFTIh0AAIAAlTIB0AAIB1AAIAAFTgAivCqIAAlTIB2AAIAAFTgAg5ipg");
	this.shape_1.setTransform(17.6,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("AivCqIAAlTIFfAAIAAFTg");
	this.shape_2.setTransform(16.05,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRiverBoxesLeft, new cjs.Rectangle(-1.5,-1.3,37.7,36.3), null);


(lib.IconRiverBoxesDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AA6CqIB2AAIAAlTIh2AAAg6CqIh1AAIAAlTIB1AAgAA6CqIh0AAAg6ipIB0AAIAAFT");
	this.shape.setTransform(17.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AA7CqIAAlTIAAFTIh0AAIAAlTIB0AAIB1AAIAAFTgAivCqIAAlTIB2AAIAAFTg");
	this.shape_1.setTransform(17.6,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconRiverBoxesDisabled, new cjs.Rectangle(-1,-1,37.2,36), null);


(lib.IconResetDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AlhgNIBhgDIAEinIJeAOIgXFUIliADIAAhrIEOABIAAgfIABBDIADiyIgEAAIAAgGImPgGIACBCIBsAFIidDGg");
	this.shape.setTransform(0.025,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconResetDisabled, new cjs.Rectangle(-35.4,-17.2,70.9,36.7), null);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhgNIBhgDIAEinIJeAOIgXFUIliADIAAhrIEOABIAAgfIABBDIADiyIgEAAIAAgGImPgGIACBCIBsAFIidDGg");
	this.shape.setTransform(0.025,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CD844E").ss(2,1,1).p("AD7hKIgDCyIgBhDIAAAgIkOgCIAABsIFigFIAXlTIpegOIgECnIhhAEICaDEICdjHIhsgFIgChCIGPAGIAAAGg");
	this.shape_1.setTransform(0.025,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,51,0,0.498)").s().p("AlhgNIBhgDIADinIJfAOIgXFUIliADIAAhrIENABIABgfIABBDIACiyIgDAAIAAgMImPAAIADBBIBaAIIiMDEg");
	this.shape_2.setTransform(-2.6,-1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconReset, new cjs.Rectangle(-38,-19.4,74.5,39.9), null);


(lib.IconPrinter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8E12E").s().p("AgIAKQgDgEAAgGQAAgFADgEQAEgEAEAAIADABQAEABACACQAEAEgBAFQABAGgEAEQgCACgEABIgDABQgEAAgEgEg");
	this.shape.setTransform(46.3,22.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FEE57").s().p("AgIAKQgDgEgBgGQABgFADgEQAEgEAEAAIAEABQADABACACQADAEABAFQgBAGgDAEQgCACgDABIgEABQgEAAgEgEg");
	this.shape_1.setTransform(42.3,20.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FBD56").s().p("AgHANQADgBADgCQACgEAAgGQAAgFgCgEQgDgCgDgBIAEgBQADAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgDAAIgEgBg");
	this.shape_2.setTransform(43.45,20.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8341B").s().p("AgBAOQgEgBgDgDQgDgEgBgGQABgEADgFQAEgEAEAAQAEAAADADIACABQADAFABAEQgBAGgDAEQgEAEgFAAIgBAAg");
	this.shape_3.setTransform(51.3,24.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2A320").s().p("AgHANQADgBACgCQADgEAAgGQAAgFgDgEQgCgCgDgBIADgBQAFAAADAEQAEAEAAAFQAAAGgEAEQgDAEgFAAIgDgBg");
	this.shape_4.setTransform(47.45,22.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8E0DE").s().p("ACUBQIk4h+IADgBIBFglIAcAKIDlBYIgCAuIgBAag");
	this.shape_5.setTransform(33.7,28.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F341B").s().p("AgJALIACABQAFAAADgEQAEgFAAgEQAAgGgEgEIgBgCQAEABACADQAEAEAAAFQAAAGgEAEQgDAEgFAAQgEAAgDgDg");
	this.shape_6.setTransform(52.075,24.3875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7B2B2").s().p("AAVBeIAOAGIABgaIgBAagAB3AYICphlIACgBIAAAGIgCACIipBmgAkhgjIAAhAIBhAnIgbgKIhGAlg");
	this.shape_7.setTransform(46.425,26.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkvA7IAAgLIFQCjIgBABIAAAOgAEUCxIhpg0IAZgTIAAgRIABgaIABguIjlhYIhhgnIAABAIgXANIgTgKIgEhMQgDhOADgGQAFgNALgHIAAAAIADgBIAGgCIHCCiIADABQgFADgFAEQgLAKgCAOQgCAMgBAbIAAAJIgBA+IACBkgADIgtQgDAFAAAFQAAAGADAEQADAEAEAAQADADAEgBQAGAAADgDQAEgFAAgFQAAgGgEgEQgCgDgEgBQgEgCgEAAQgFAAgEADgACmglQAGgBADgDQAEgFAAgFQAAgGgEgEQgDgEgGAAIgDAAIgEAAQgFAAgEAEQgDAEAAAGQAAAFADAFQAEADAFABIAEgBIADABgAB+g2QAFAAAEgEQAEgEAAgGQAAgFgEgEQgEgFgFAAIgDABIgEgBQgFAAgEAFQgDAEAAAFQAAAGADAEQAEAEAFAAIAEgBIADABg");
	this.shape_8.setTransform(30.375,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D5D7DB").s().p("AjSC6IAAgPIACgBICih5IAAAQIgZATIiLBqgAAiCIIACABIgBhkIABg9IAAgIQABgdABgMQACgOALgJQAFgFAFgCIgDgBICZhVIgFA8IipBnIAAAIICphoIgJBsIijCag");
	this.shape_9.setTransform(54.625,31.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3EEEA").s().p("Al6BRICYhRIAXgNIAAADIgDABIE5B+IAOAGIiiB5gAjgjAICxgzIGpCAIiYBVgAjpi+IADAAIgDABg");
	this.shape_10.setTransform(37.85,24.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#016500").ss(2,1,1).p("AjgjKICwgzIGrCAIgFA8AF1g6IgIBrIijCbIAAgEIhqg0IiKBqIAAgEIlQioIAAgLICYhRIgTgJQgCgmgCgnQgDhOADgHQAFgNALgF");
	this.shape_11.setTransform(37.85,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// flash7.ai
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AgqD6IlQioIAAgLICYhRIgTgKIAAAAIgLizIgDgBIDTg1IGrCAIgFA8IABgBIAAAAIABAAIAAAGIgDACIgIBqIAAAAIikCcIAAgEIhpg0IiKBqg");
	this.shape_12.setTransform(39.875,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPrinter, new cjs.Rectangle(-1,-1,78.8,55), null);


(lib.IconPlayDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AiWjFIEtDDIktDIg");
	this.shape.setTransform(5.025,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlayDisabled, new cjs.Rectangle(-10.1,-18.5,30.299999999999997,39.6), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWjFIEtDDIktDIg");
	this.shape.setTransform(5.025,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("ACXgCIktDIIAAmLg");
	this.shape_1.setTransform(5.025,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#306D43").s().p("AiWjFIEtDDIktDIg");
	this.shape_2.setTransform(3.125,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPlay, new cjs.Rectangle(-12,-22,33.2,44.1), null);


(lib.IconPauseDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AA2C+IgHl7IBvAAIgPF7gAiWC+IgHl7IBnAAIgHF7g");
	this.shape.setTransform(1.525,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPauseDisabled, new cjs.Rectangle(-14.2,-18.1,31.5,38.1), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2C+IgHl7IBvAAIgPF7gAiWC+IgHl7IBnAAIgHF7g");
	this.shape.setTransform(1.525,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("ACei+IgPF9IhZAAIgHl9gAg2i+IgHF9IhZAAIgHl9g");
	this.shape_1.setTransform(1.525,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AA3C+IgIl7IBvAAIgPF7gAiWC+IgHl7IBnAAIgHF7g");
	this.shape_2.setTransform(-0.975,-0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconPause, new cjs.Rectangle(-16.7,-20,35,41), null);


(lib.IconObjectRotationDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EAEAEA").s().p("AAXAoIgugmQAAgBgBAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAugmQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAABLIgBACIAAAAIgBAAg");
	this.shape.setTransform(1.3875,-11.4625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AgBAYIgmguQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIBLAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgmAuIgCABIgBgBg");
	this.shape_1.setTransform(10.9375,-1.9625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EAEAEA").ss(3).p("Ag2gqIAjAAQAYAAARASQASARAAAZIAAAo");
	this.shape_2.setTransform(6.975,-7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("Ag7B4IAAjvIB3AAIAADvg");
	this.shape_3.setTransform(-8.95,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFCFCF").s().p("Ag7B4IAAjvIB3AAIAADvg");
	this.shape_4.setTransform(-2.95,9.5,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconObjectRotationDisabled, new cjs.Rectangle(-14.9,-15.5,29.9,31), null);


(lib.IconObjectRotation = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiUCbIAAjvIB3AAIAAB3IAAB4gABrAEIgmguQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAXAAIAAgKQABgSgNgOQgOgNgTAAIgKAAIAAAXIgBACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgugmQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABgBIAugmQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAXIAKAAQAgAAAWAWQAVAWAAAfIAAAKIAXAAIACABQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgmAuIgBACIgDgCg");
	this.shape.setTransform(0,0.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92B9E0").s().p("Ag7A8IAAh3IB3AAIAAB3g");
	this.shape_1.setTransform(3.05,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D4766").s().p("AiVClQgEAAgDgDQgDgDAAgEIAAjvQAAgEADgDQADgDAEAAIB4AAQAFAAACADQADADAAAEIAABtIBtAAQAFAAACADQADADAAAEIAAB4QAAAEgDADQgCADgFAAgABuAQQgEABgGgFIAAgBIgmguIgCgDQgDgIAFgDQACgFAHAAIANAAQAAgOgKgKQgKgLgPABIAAAAIAAANQAAAFgEADQgDAEgFAAQgDAAgEgDIgsglQgHgEABgGQgBgEAFgFIABgBIAtgmIADgCQAIgDADAFQAFACAAAIIAAANIAAAAQAkAAAYAZQAZAYAAAjIANAAQAHAAADAEQADADgBAFQABADgDAEIglAtQgDAGgGAAIgBAAg");
	this.shape_2.setTransform(0.0066,-0.0016);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconObjectRotation, new cjs.Rectangle(-15.9,-16.5,31.9,33), null);


(lib.IconNotEqualDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AiODEIAshNIhMAAIAAhIIB0AAIA0hbIioAAIAAhIIDPAAIAqhPIBCAAIgsBPIBOAAIAABIIh2AAIg0BbICqAAIAABIIjQAAIgrBNg");
	this.shape.setTransform(0,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconNotEqualDisabled, new cjs.Rectangle(-17.5,-20,35,39.3), null);


(lib.IconNotEqual = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiODEIAshNIhMAAIAAhIIB0AAIA0hbIioAAIAAhIIDPAAIAqhPIBCAAIgsBPIBOAAIAABIIh2AAIg0BbICqAAIAABIIjQAAIgrBNg");
	this.shape.setTransform(0,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("ABih1IBNAAIAABIIh2AAIgzBbICpAAIAABJIjRAAIgqBOIhDAAIAthOIhMAAIAAhJIB0AAIAzhbIinAAIAAhIIDPAAIAqhPIBDAAg");
	this.shape_1.setTransform(0,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AiPDEIAthNIhMAAIAAhIIB1AAIAyhcIinAAIAAhIIDPAAIAqhOIBCAAIgsBOIBOAAIAABIIh2AAIgzBcICpAAIAABIIjRAAIgqBNg");
	this.shape_2.setTransform(-2,-2.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconNotEqual, new cjs.Rectangle(-19.5,-22,38,42.3), null);


(lib.IconNextDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AApCUIlpAFIACksIFiAMIALhkIESDxIkSDmg");
	this.shape.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconNextDisabled, new cjs.Rectangle(-30,-23,64.3,47.3), null);


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

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApCUIlpAFIACksIFiAMIALhkIESDxIkSDmg");
	this.shape.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("AAkiHIljgMIgCEsIFqgFIAGBYIETjmIkTjxg");
	this.shape_1.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AApCUIlqAFIACksIFjAMIALhkIESDxIkSDmg");
	this.shape_2.setTransform(0.65,-1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconNext, new cjs.Rectangle(-31.5,-25.5,66.8,50.8), null);


(lib.iconNarration_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AhUCRIAhgOQAUgHANgRQACgCgCgDQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgZAAQgwAAgigiQgigiAAgvQAAgrAcghQAdghArgFIBegNQAZgEAYAIQAYAHATAQQAnAiAAA1IAAANQAAAvgiAiQghAigxAAIgLAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgKATgRAMQgSAMgVAAgABDgVQgIAIABAKQgBAKAIAIQAIAIALAAQAKAAAIgIQAIgIgBgKQABgKgIgIQgIgIgKAAQgLAAgIAIgAgQgVQgHAIAAAKQAAAKAHAIQAIAIAKAAQALAAAHgIQAIgIAAgKQAAgKgIgIQgHgIgLAAQgKAAgIAIgAhmgVQgIAIAAAKQAAAKAIAIQAHAIALAAQAKAAAJgIQAHgIAAgKQAAgKgHgIQgJgIgKAAQgLAAgHAIg");
	this.shape.setTransform(0.5,0.5443);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconNarration_Disabled, new cjs.Rectangle(-15.8,-13.9,32.6,28.9), null);


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
	this.shape.graphics.f("#1B4867").s().p("ABJAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFgAgKAMQgFgFAAgHQAAgGAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgGgFgAhhAMQgFgFAAgHQAAgGAFgFQAGgFAHAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgHAAgGgFg");
	this.shape.setTransform(0.525,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4967").s().p("AhgCaQgDAAgBgEQgBgEADgCIA4gVIAIgEIAKAAIAPAAQgJAJgNAGIg0AUgAh6BIQglglAAgyQAAgvAggjQAegjAugHIBfgNQAagDAaAHQAaAIAVASQAJAIAIAKIgIgHQgUgRgagIQgagIgbAEIheANQguAGgeAjQgfAkAAAuQAAAvAfAiIgFgFg");
	this.shape_1.setTransform(-1.75,-0.5557);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4867").s().p("AhsCaQgEAAgBgEQAAgEADgBIAEgCIA0gUQAOgGAJgJIgQAAIgJAAQgugDggghIgGgGQgfgiAAgvQAAguAfgkQAfgjAugGIBegNQAbgEAZAIQAaAIAUARIAIAHQAPAQAJAUQALAYAAAbIAAANQAAAzglAkQgkAkg0AAIgIAAQgLAVgUAMQgSANgXAAgAAgiOIheANQgrAFgdAhQgcAhAAArQAAAvAiAiQAiAiAvAAIAZAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABADgBACQgNARgUAHIgiAOIA0AAQAVAAARgMQASgMAJgTQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIALAAQAwAAAigiQAigiAAgvIAAgNQAAg1gogiQgSgQgYgHQgRgGgQAAIgQACgABDAPQgIgIAAgKQAAgKAIgIQAHgIALAAQALAAAIAIQAHAIAAAKQAAAKgHAIQgIAIgLAAQgLAAgHgIgABJgPQgFAFAAAHQAAAGAFAGQAFAFAHAAQAHAAAGgFQAFgGAAgGQAAgHgFgFQgGgFgHAAQgHAAgFAFgAgQAPQgHgIAAgKQAAgKAHgIQAIgIAKAAQAKAAAIAIQAIAIAAAKQAAAKgIAIQgIAIgKAAQgKAAgIgIgAgKgPQgFAFAAAHQAAAGAFAGQAGAFAGAAQAHAAAFgFQAFgGAAgGQAAgHgFgFQgFgFgHAAQgGAAgGAFgAhnAPQgIgIAAgKQAAgKAIgIQAIgIALAAQAKAAAIAIQAIAIAAAKQAAAKgIAIQgIAIgKAAQgLAAgIgIgAhhgPQgFAFAAAHQAAAGAFAGQAGAFAHAAQAHAAAFgFQAFgGAAgGQAAgHgFgFQgFgFgHAAQgHAAgGAFg");
	this.shape_2.setTransform(0.525,0.5467);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUCRIAhgOQAUgHANgRQACgCgCgDQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgZAAQgwAAgigiQgigiAAgvQAAgrAcghQAdghArgFIBegNQAZgEAYAIQAYAHATAQQAnAiAAA1IAAANQAAAvgiAiQghAigxAAIgLAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgKATgRAMQgSAMgVAAgABDgVQgIAIABAKQgBAKAIAIQAIAIALAAQAKAAAIgIQAIgIgBgKQABgKgIgIQgIgIgKAAQgLAAgIAIgAgQgVQgHAIAAAKQAAAKAHAIQAIAIAKAAQALAAAHgIQAIgIAAgKQAAgKgIgIQgHgIgLAAQgKAAgIAIgAhmgVQgIAIAAAKQAAAKAIAIQAHAIALAAQAKAAAJgIQAHgIAAgKQAAgKgHgIQgJgIgKAAQgLAAgHAIg");
	this.shape_3.setTransform(0.5,0.5443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconNarration, new cjs.Rectangle(-17.7,-15.9,35.4,31.8), null);


(lib.IconLTDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ai6AfIAAg/IF1ifIAABGIkoB5IEoB6IAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconLTDisabled, new cjs.Rectangle(-18.7,-19.1,37.5,38.3), null);


(lib.IconLT = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai6AfIAAg/IF1ifIAABGIkoB5IEoB6IAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("AC8i/Il3CeIAABAIF3ChIAAhFIkph7IEph6g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Ai6AfIAAg/IF1ifIAABGIkoB5IEoB7IAABFg");
	this.shape_2.setTransform(-1,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconLT, new cjs.Rectangle(-19.7,-21.1,39.5,41.3), null);


(lib.iconListDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AgnCjQgJAAgHgHQgGgHgBgKIAAgWQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAWQAAAKgGAHQgHAHgKAAgAifCZIgEgEQgGgKgBgLQAAgOALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAACQABAOgLALQgKAKgPAAQgOAAgKgKgAgnAjQgJAAgHgHIgDgEQgEgGAAgHIAAgVQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAVQAAAKgGAHQgHAHgKAAgAifAZIgEgEQgGgJgBgMQAAgNALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAABQABAPgLAKQgKAKgPAAQgOAAgKgKgAgnhcQgJAAgHgHIgDgFQgEgFAAgGIAAgXQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAXQAAAJgGAHQgIAHgJAAgAifhmIgEgEQgGgJgBgMQAAgOALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAACQABAPgLAKQgKAKgPAAQgOAAgKgKg");
	this.shape.setTransform(-0.55,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconListDisabled, new cjs.Rectangle(-17.6,-15.3,34.1,32.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgnCjQgJAAgHgHQgGgHgBgKIAAgWQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAWQAAAKgGAHQgHAHgKAAgAifCZIgEgEQgGgKgBgLQAAgOALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAACQABAOgLALQgKAKgPAAQgOAAgKgKgAgnAjQgJAAgHgHIgDgEQgEgGAAgHIAAgVQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAVQAAAKgGAHQgHAHgKAAgAifAZIgEgEQgGgJgBgMQAAgNALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAABQABAPgLAKQgKAKgPAAQgOAAgKgKgAgnhcQgJAAgHgHIgDgFQgEgFAAgGIAAgXQABgKAGgHQAHgHAJAAIC6AAQAKAAAHAHQAGAHAAAKIAAAXQAAAJgGAHQgIAHgJAAgAifhmIgEgEQgGgJgBgMQAAgOALgLQAKgKAOAAQAPAAAKAKQAKAKAAANIAAACQABAPgLAKQgKAKgPAAQgOAAgKgKg");
	this.shape.setTransform(-0.55,0.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4867").s().p("AgnCsQgNAAgJgKQgJgIgBgMIAAgDIAAgWQAAgOAKgJQAJgKANAAIC6AAQANAAAKAKIADAEQAGAIAAALIAAAWQAAAOgJAJQgKAKgNAAgAg3BkQgHAHAAAKIAAAWQAAAKAHAHQAHAHAJAAIC6AAQAKAAAGgHQAHgHAAgKIAAgWQAAgKgHgHQgGgHgKAAIi6AAQgJAAgHAHgAilCfQgLgKgCgOIAAgHQAAgSANgNQAMgNASAAQASAAANANIAHAJQAGAKAAAMQAAASgNANQgNANgSAAQgSAAgMgNgAifBnQgLALAAAOQAAALAHAKIAEAEQAKAKAOAAQAPAAAKgKQAKgLAAgOIAAgCQAAgNgKgKQgKgKgPAAQgOAAgKAKgAgnAsQgNAAgJgKQgJgIgBgMIAAgDIAAgVQAAgOAKgJQAJgKANAAIC6AAQANAAAKAKIADAEQAGAIAAALIAAAVQAAAOgJAJQgKAKgNAAgAg3gbQgHAHAAAKIAAAVQAAAHAEAGIADAEQAHAHAJAAIC6AAQAKAAAGgHQAHgHAAgKIAAgVQAAgKgHgHQgGgHgKAAIi6AAQgJAAgHAHgAilAfQgLgKgCgOIAAgHQAAgRANgNQAMgNASAAQASAAANANIAHAJQAGAKAAALQAAASgNANQgNANgSAAQgSAAgMgNgAifgYQgLALAAANQAAAMAHAJIAEAEQAKAKAOAAQAPAAAKgKQAKgKAAgPIAAgBQAAgNgKgKQgKgKgPAAQgOAAgKAKgAgnhTQgNAAgJgKQgJgJgBgLIAAgCIAAgXQAAgOAKgJQAJgKANAAIC6AAQANAAAKAKIADAEQAGAIAAALIAAAXQAAANgJAJQgKAKgNAAgAg3ibQgHAHAAAKIAAAXQAAAGAEAFIADAFQAHAHAJAAIC6AAQAJAAAHgHQAHgHAAgJIAAgXQAAgKgHgHQgGgHgKAAIi6AAQgJAAgHAHgAilhgQgLgKgCgOIAAgHQAAgSANgNQAMgNASAAQASAAANANIAHAJQAGAKAAAMQAAASgNANQgNANgSAAQgSAAgMgNgAifiYQgLALAAAOQAAAMAHAJIAEAEQAKAKAOAAQAPAAAKgKQAKgKAAgPIAAgCQAAgNgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_1.setTransform(-0.525,0.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C4967").s().p("AhHCSIAAgYQAAgNAKgJQAJgKAOAAIC5AAQAOAAAJAKQAKAJAAANIgEgEQgJgJgOAAIi5AAQgNAAgKAJQgJAKAAANIAAAWIAAADQgHgJAAgLgAizCGQAAgSANgNQANgNASAAQATAAANANQALALACAQIgHgJQgNgNgSABQgSgBgNANQgNANAAASIABAHQgIgLAAgOgAhHASIAAgXQAAgNAKgJQAJgKAOAAIC5AAQAOAAAJAKQAKAJAAANIgEgEQgJgJgOAAIi5AAQgNAAgKAJQgJAJAAANIAAAXIAAACQgHgIAAgMgAizAGQAAgRANgNQANgNASAAQATAAANANQALALACAPIgHgIQgNgMgSAAQgSAAgNAMQgNAMAAATIABAGQgIgLAAgOgAhHhtIAAgXQAAgOAKgKQAJgJAOAAIC5AAQAOAAAJAJQAJAJABAOIgEgEQgJgKgOAAIi5AAQgNAAgKAKQgJAKAAANIAAAXIAAACQgHgJAAgLgAizh5QAAgSANgNQANgNASAAQATAAANANQALAMACAQIgHgJQgNgOgSAAQgSAAgNAOQgNAMAAASIABAHQgIgLAAgOg");
	this.shape_2.setTransform(-1.175,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconList, new cjs.Rectangle(-19.1,-18.1,36.5,36.2), null);


(lib.IconJumpDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AgYBjQhDhdhTgMQhBgLhXAcQgrAPgeARQAWgXAlgYQBJgxBLgFQBWgGBKBJQAjAmAUAmQAhhDAxgvQBAhBBGgGIgJhYICqBuIiNCHIgJhaQhPADhJBgQgZAggwBbQgRgsgggug");
	this.shape.setTransform(-1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconJumpDisabled, new cjs.Rectangle(-41,-17.4,80,37.7), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBjQhDhdhTgMQhBgLhXAcQgrAPgeARQAWgXAlgYQBJgxBLgFQBWgGBKBJQAjAmAUAmQAhhDAxgvQBAhBBGgGIgJhYICqBuIiNCHIgJhaQhPADhJBgQgZAggwBbQgRgsgggug");
	this.shape.setTransform(-1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#256099").ss(2,1,1).p("ADmi8IAKBXQhGAHhBBAQgwAwgiBDQgUgngkglQhJhJhWAGQhLAFhJAxQglAXgWAYQAegRArgPQBWgcBCALQBTAMBDBdQAhAuAQAsQAxhbAYggQBJhgBPgDIAKBbICMiIg");
	this.shape_1.setTransform(-1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#246198").s().p("AgiBjQhIhmhTgNQhCgKhPAlQgnAUgaAWQAVgaAjgbQBHg1BLgFQBXgGBIBCQAlAiASAiQAdg4ArgoQA9g6BGgGIgKhrIC+B9IiRBzIgKhbQhOADhKBtQgYAigYAvIgZA2QgTgxgjgzg");
	this.shape_2.setTransform(-1,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconJump, new cjs.Rectangle(-42,-20,82,41.3), null);


(lib.IconHintDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,0,1).p("ABggVIApAhAiIAWIAugi");
	this.shape.setTransform(0.4965,7.9921);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(4,0,1).p("AB9gCIBLgEAh4AHIhPgH");
	this.shape_1.setTransform(-0.0362,-1.4773);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(5,0,1).p("ABYArIAwgsAAAAQIgGhZAhVA5Igzgt");
	this.shape_2.setTransform(-0.497,-14.6306);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgeCHQgGgEgBgGQAAgGADgEIADgCQgFgEgBgGQAAgGADgEQAFgFAGAAIA6gCQAGAAAFAEQAGAEAAAGQABAGgEAFIgCACQAFADAAAGQABAGgEAFQgEAEgGAAIg5ACIgCABQgFAAgFgFgAgoAbQgJgRgIgIQgMgQgFgLQgHgOgCgPQgCgnAYgXQAYgXAqAAQAiAAAWAXQAXAXAAAiQAAAUgFAPQgEAOgLAPQgLARgFALQgGAOgDATIhCACQgBgRgMgYgAgsg2QAEgRAPgPQAHgIAHgFIgIgSQgPAFgLAMQgRARgBAVIAAADIABAAQAHAAALAFg");
	this.shape_3.setTransform(-0.0618,4.8025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(3,0,1).p("ABggVIApAhAiIAWIAugi");
	this.shape_4.setTransform(1.4965,9.4921);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(5,0,1).p("ABYArIAwgsAhVA5IgzgtAAAAQIgGhZ");
	this.shape_5.setTransform(0.503,-13.1306);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(4,0,1).p("AB9gCIBLgEAh4AHIhPgH");
	this.shape_6.setTransform(0.9638,0.0227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgeCHQgGgEgBgGQAAgGADgEIADgCQgFgEgBgGQAAgGADgEQAFgFAGAAIA6gCQAGAAAFAEQAGAEAAAGQABAGgEAFIgCACQAFADAAAGQABAGgEAFQgEAEgGAAIg5ACIgCABQgFAAgFgFgAgoAbQgJgRgIgIQgMgQgFgLQgHgOgCgPQgCgnAYgXQAYgXAqAAQAiAAAWAXQAXAXAAAiQAAAUgFAPQgEAOgLAPQgLARgFALQgGAOgDATIhCACQgBgRgMgYgAgsg2QAEgRAPgPQAHgIAHgFIgIgSQgPAFgLAMQgRARgBAVIAAADIABAAQAHAAALAFg");
	this.shape_7.setTransform(0.9382,6.3025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconHintDisabled, new cjs.Rectangle(-22,-24.5,45,44.8), null);


(lib.IconHint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfDJQgFgEgBgGQgBgGAEgFIADgCQgFgEgBgFQgBgGAEgFQAFgEAGgBIA5gCQAGAAAFAFQAGADABAGQABAGgEAFIgDADQAFADABAFQABAGgEAFQgEAFgGAAIg6ACIgBAAQgFAAgGgEgAgpBdQgJgRgHgIQgNgRgFgMQgHgOgBgPQgDglAYgXQAZgXAqAAQAhAAAXAXQAXAXAAAhQAAATgFAQQgFAOgKAQQgMAQgFALQgGAPgCASIhCADQgBgSgNgXgAgsALQADgQAPgQQAHgIAHgFIgIgRQgPAFgLALQgRASAAATIAAAEIABAAQAGAAAMAFgAiMBrIAugjIASAYIgtAjgABbBWIATgXIApAiIgTAXgAjIAXIADgnIBPAGIgEAngAB8gUIBLgDIACAnIhLADgAidhhIAhgmIAzAtIghAlgABDhoIAwgsIAiAkIgwAtgAgkjIIAxgEIAHBaIgxAEg");
	this.shape.setTransform(-0.0375,-1.7225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#029802").ss(2,1,1).p("ABziUIgwAsIAiAlIAwgtgAgkjIIAHBaIAxgEIgHhagABUAGQAAATgFAQQgFAOgKAQQgMAQgFALQgGAPgCASQglACgdABQgBgSgNgXQgJgRgHgIQgNgRgFgMQgHgOgBgPQgDglAYgXQAZgXAqAAQAhAAAXAXQAXAXAAAhgADHgXIhLADIACAnIBLgDgACXBhIgpgiIgTAXIApAigAAtCcQAGADABAGQABAGgEAFQgBACgCABQAFADABAFQABAGgEAFQgEAFgGAAIg6ACQgGAAgGgEQgFgEgBgGQgBgGAEgFQABgBACgBQgFgEgBgFQgBgGAEgFQAFgEAGgBIA5gCQAGAAAFAFgAidhhIAzAsIAhglIgzgtgAjIAXIBOAGIAEgnIhPgGgAgagVQAHgIAHgFQgEgHgEgKQgPAFgLALQgRASAAATQAAACAAACQAGgBANAGQADgQAPgQgAheBIIguAjIATAYIAtgjg");
	this.shape_1.setTransform(-0.0375,-1.7225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(3,0,1).p("ABggVIApAhAiIAWIAugi");
	this.shape_2.setTransform(1.4965,8.9921);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#009900").ss(4,0,1).p("AB9gCIBLgEAh4AHIhPgH");
	this.shape_3.setTransform(0.9638,-0.4773);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#009900").ss(5,0,1).p("ABYArIAwgsAhVA5IgzgtAAAAQIgGhZ");
	this.shape_4.setTransform(0.503,-13.6306);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgeCHQgGgEgBgGQAAgGADgEIADgCQgFgEgBgGQAAgGADgEQAFgFAGAAIA6gCQAGAAAFAEQAGAEAAAGQABAGgEAFIgCACQAFADAAAGQABAGgEAFQgEAEgGAAIg5ACIgCABQgFAAgFgFgAgoAbQgJgRgIgIQgMgQgFgLQgHgOgCgPQgCgnAYgXQAYgXAqAAQAiAAAWAXQAXAXAAAiQAAAUgFAPQgEAOgLAPQgLARgFALQgGAOgDATIhCACQgBgRgMgYgAgsg2QAEgRAPgPQAHgIAHgFIgIgSQgPAFgLAMQgRARgBAVIAAADIABAAQAHAAALAFg");
	this.shape_5.setTransform(0.9382,5.8025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconHint, new cjs.Rectangle(-21.1,-23.5,44.1,43.3), null);


(lib.IconGTDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ai6B6IEoh6Ikoh5IAAhGIF1CfIAAA/Il1Chg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconGTDisabled, new cjs.Rectangle(-18.7,-19.1,37.5,38.3), null);


(lib.IconGT = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai6B6IEoh6Ikoh5IAAhGIF1CfIAAA/Il1Chg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("AC8AfIl3ChIAAhFIEph7Ikph6IAAhFIF3Ceg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Ai6B6IEoh6Ikoh6IAAhEIF1CdIAABAIl1Cgg");
	this.shape_2.setTransform(-1,-2.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconGT, new cjs.Rectangle(-19.7,-22,39.5,42.2), null);


(lib.IconForwardDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AApCUIlpAFIACksIFiAMIALhkIESDxIkSDmg");
	this.shape.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconForwardDisabled, new cjs.Rectangle(-30,-23,64.3,47.3), null);


(lib.IconForward = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApCUIlpAFIACksIFiAMIALhkIESDxIkSDmg");
	this.shape.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#346195").ss(2,1,1).p("AAkiHIljgMIgCEsIFqgFIAGBYIETjmIkTjxg");
	this.shape_1.setTransform(2.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("AApCUIlqAFIACksIFjAMIALhkIESDxIkSDmg");
	this.shape_2.setTransform(0.65,-1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconForward, new cjs.Rectangle(-31.5,-25.5,66.8,50.8), null);


(lib.IconExitDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ah2irIDthYIgNGeIjaBpgAhQiGIAEFRICThLIAJk+g");
	this.shape.setTransform(18.625,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhPiMICgg4IgJE+IiUBLg");
	this.shape_1.setTransform(18.55,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// flash0.ai copy 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAOBAIi0ANIgLh9IC3gGIAJhIICjB5IiXCEg");
	this.shape_2.setTransform(-16.3,-1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// flash0.ai
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgDBdIjEAXIgMi4IDCgHIAHhdIDfCmIjNCrg");
	this.shape_3.setTransform(-15.5,-1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// flash0.ai copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ai7jVIF3AEIgOGeIlYAJgAiDCmIEKgIIAFlDIkfgJg");
	this.shape_4.setTransform(11.75,-3.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AiPiqIEfAJIgEFDIkKAIg");
	this.shape_5.setTransform(11.325,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconExitDisabled, new cjs.Rectangle(-36.7,-24.7,67.2,52.8), null);


(lib.IconExit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EC2727").s().p("AhPiMICgg4IgJE+IiUBLg");
	this.shape.setTransform(18.55,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2irIDthYIgNGeIjaBpgAhQiGIAEFRICThLIAJk+g");
	this.shape_1.setTransform(18.625,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// flash0.ai copy 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7F7F").s().p("AAOBAIi0ANIgLh9IC3gGIAJhIICjB5IiXCEg");
	this.shape_2.setTransform(-16.3,-1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// flash0.ai
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBdIjEAXIgMi4IDCgHIAHhdIDfCmIjNCrg");
	this.shape_3.setTransform(-15.5,-1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// flash0.ai copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B40000").s().p("AiPiqIEfAJIgEFDIkKAIg");
	this.shape_4.setTransform(11.325,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai7jVIF3AEIgOGeIlYAJgAiDCmIEKgIIAFlDIkfgJg");
	this.shape_5.setTransform(11.75,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B50100").ss(2,1,1).p("Aggh+IgGiJIF2AEIAAAEIgNGaIjcAFIACBoIDahpIANmeIAAAAIjtBYIAEFHIh8ADIgEhnIgHi6IB5BbIhyBfIhZBMIgNhMIjDAXIgNi4IDCgHIAHhdg");
	this.shape_6.setTransform(-3.125,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B50100").s().p("ABnCgIh8ADIgEhnIhZBMIgNhMIjDAXIgNi4IDCgHIAHhdIBmBMIgGiKIF2AEIAAAEIgNGeIjaBpg");
	this.shape_7.setTransform(-4.375,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconExit, new cjs.Rectangle(-38,-27,69.5,56.1), null);


(lib.IconEqualDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiuB0IAAhIIFdAAIAABIgAiugrIAAhIIFdAAIAABIg");
	this.shape.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEqualDisabled, new cjs.Rectangle(-17,-11,35,23.2), null);


(lib.IconEqual = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuB0IAAhIIFdAAIAABIgAiugrIAAhIIFdAAIAABIg");
	this.shape.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("ACvgrIldAAIAAhIIFdAAgAiuAsIFdAAIAABIIldAAg");
	this.shape_1.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AiuB0IAAhIIFdAAIAABIgAiugrIAAhIIFdAAIAABIg");
	this.shape_2.setTransform(-1.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEqual, new cjs.Rectangle(-19,-13,38,26.2), null);


(lib.IconContinueDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("ACLA/IgvgDIgIhzIA3gJIAGhhIDhCjIjnCggAg7ArQgPgPAAgWQAAgVAPgPQAPgQAVAAQAVAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgVAAQgVAAgPgQgAjPArQgPgPAAgWQAAgVAPgPQAPgQAVAAQAWAAAOAQQAQAPAAAVQAAAWgQAPQgOAQgWAAQgVAAgPgQgAljArQgOgPAAgWQAAgVAOgPQAPgQAVAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(0.075,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconContinueDisabled, new cjs.Rectangle(-36.9,-15.9,74,32.4), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLA/IgvgDIgIhzIA3gJIAGhhIDhCjIjnCggAg7ArQgPgPAAgWQAAgVAPgPQAPgQAVAAQAVAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgVAAQgVAAgPgQgAjPArQgPgPAAgWQAAgVAPgPQAPgQAVAAQAWAAAOAQQAQAPAAAVQAAAWgQAPQgOAQgWAAQgVAAgPgQgAljArQgOgPAAgWQAAgVAOgPQAPgQAVAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(0.075,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("ACRihIDhCjIjnCgIAAhjIgvgDIgIhzIA3gJgAANArQgPAQgVAAQgVAAgPgQQgPgOAAgXQAAgVAPgPQAPgQAVAAQAVAAAPAQQAPAPAAAVQAAAXgPAOgAirguQAWAAAOAQQAQAPAAAVQAAAXgQAOQgOAQgWAAQgVAAgPgQQgPgOAAgXQAAgVAPgPQAPgQAVAAgAkageQAPAPAAAVQAAAXgPAOQgPAQgWAAQgVAAgPgQQgOgOAAgXQAAgVAOgPQAPgQAVAAQAWAAAPAQg");
	this.shape_1.setTransform(0.075,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("ACHBSIg1gDIgOiBIA5gNIAGhiID8CoIj3CbgAhGA7QgQgQAAgZQgBgXARgQQAPgRAXgBQAYABAPARQARAQAAAXQAAAZgQAQQgQAQgXABQgXgBgQgQgAjZA7QgQgQAAgZQgBgXAQgQQARgRAXgBQAXABAQARQARAQAAAXQAAAZgRAQQgPAQgYABQgWgBgRgQgAluA7QgQgQAAgZQgBgXAQgQQARgRAWgBQAZABAPARQAQAQABAXQAAAZgQAQQgQAQgYABQgXgBgQgQg");
	this.shape_2.setTransform(0.3242,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconContinue, new cjs.Rectangle(-38,-18.1,76.7,35.6), null);


(lib.IconCheckmarkDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AiLCLQhDgmgngHIBkhjIBfBbQAehSArhQQAzhdAvgzIB9BQQhQBNhMBiQhTBrgjBPQgogphHgpg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheckmarkDisabled, new cjs.Rectangle(-24.6,-22.1,49.3,44.3), null);


(lib.IconCheckmark = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiLCLQhDgmgngHIBkhjIBfBbQAehSArhQQAzhdAvgzIB9BQQhQBNhMBiQhTBrgjBPQgogphHgpg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("AAXhMQgrBQgeBSIhfhbIhkBjQAnAHBDAmQBHApAoApQAjhPBThrQBMhiBQhNIh9hQQgvAzgzBdg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AiOCQQhIgmgpgHIBphtIBfBbQAehRArhRQAzhdAvgzICMBaQhSBPhNBgQhWBsgiBOQgngohQgqg");
	this.shape_2.setTransform(0.025,-1.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCheckmark, new cjs.Rectangle(-25.6,-24.4,51.3,47.599999999999994), null);


(lib.IconChart = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjHDyQgTgBgIgIQgHgHgBgUIgNmhQAEgkAngGIGiAMQASgBAIALQAJALgCAbIgYGWQgDAogoABgAgrDRICMAFIACg2IiNgEgAjMDMICGAEIAAg2IiJgDgACBBYIAAAaQAAATATAAIAkACQATAAAAgUIAAgZQAAgUgTAAIgkgBQgTAAAAATgAgoCAICMAEIADg7IiOgEgAjMB8ICFAFIgBg9IiHgFgACCAeIAcAXIAzgqIgOgRIgkAnIgOgTgAgpAuICNACIACg5IiOgHgAjQAmICIAGIgBg6IiJgFgAjRixIADBHQAAAdAcAAIFeAMQAcAAAAgdIAAhEQAAgdgcAAIlggPQgdAAAAAdg");
	this.shape.setTransform(0.0113,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AiuA6QgcAAAAgdIgChFQAAgeAdAAIFgAPQAcAAAAAdIAABDQAAAegcAAg");
	this.shape_1.setTransform(-0.45,-13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0C2E4C").ss(2,1,1).p("AD3jBIgYGWQgDAogoABIl7gMQgTgBgIgIQgHgHgBgUIgNmhQAEgkAngGIGiAMQASgBAIALQAJALgCAbg");
	this.shape_2.setTransform(0.0113,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconChart, new cjs.Rectangle(-25.7,-26.4,51.5,52.9), null);


(lib.IconCard2NumbergramDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgYgYQgIAJAAAMQAAAMAIAIQAJAJAMAAQAMAAAIgJQAJgIAAgMQAAgMgJgJQgIgJgMAAQgMAAgJAJg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2NumbergramDisabled, new cjs.Rectangle(-17,-11.9,34,23.9), null);


(lib.IconCard2Numbergram = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#346195").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJg");
	this.shape.setTransform(-0.35,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0C2E4C").ss(2,1,1).p("AiFh3IELAAQAkAAAAAiIAACrQAAAigkAAIkLAAQgkAAAAgiIAAirQAAgiAkAAg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1 copy 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#346195").s().p("AiFB4QgkAAAAgiIAAirQAAgiAkAAIEKAAQAlAAAAAiIAACrQAAAiglAAg");
	this.shape_3.setTransform(0.7,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2Numbergram, new cjs.Rectangle(-18,-13.3,36,26.3), null);


(lib.IconCard2Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQgAgfAuIBEAAIAAgVIgWAAIAAhNIgPAAIgeARIAAAXIAUgMIAAAxIgVAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2Disabled, new cjs.Rectangle(-17,-11.9,34,23.9), null);


(lib.IconCard2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// font breakapart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#346195").s().p("AgiAyIAAgVIAWAAIAAgxIgUALIAAgWIAegSIAPAAIAABOIAVAAIAAAVg");
	this.shape.setTransform(0.25,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEB4QglAAAAgiIAAirQAAgiAlAAIEJAAQAlAAAAAiIAACrQAAAiglAAgAiJBXIETAAIAAiuIkTAAgAh5BIIAAiQIDzAAIAACQg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0C2E4C").ss(2,1,1).p("AiFh3IELAAQAkAAAAAiIAACrQAAAigkAAIkLAAQgkAAAAgiIAAirQAAgiAkAAg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1 copy 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#346195").s().p("AiFB4QgkAAAAgiIAAirQAAgiAkAAIEKAAQAlAAAAAiIAACrQAAAiglAAg");
	this.shape_3.setTransform(0.7,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCard2, new cjs.Rectangle(-18,-13.3,36,26.3), null);


(lib.IconCancelDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ai3CyQhMhKAAhoQAAg7AZgyQARgjAfgeIADgEQBMhIBrgBQBsABBMBIQBMBKAABoQAABIgkA6QgQAYgYAYIgZAVQhEA1hbgBQhrAAhMhJgAi0AAQAABJA0AzQA2AzBKAAQA2AAApgZIkJjRQgKAcAAAfgAh7h/IEbDRQAWglAAgtQAAhIg2g0Qg1gyhLAAQhHgBg0Awg");
	this.shape.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCancelDisabled, new cjs.Rectangle(-26,-25,52,50.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ai3CyQhMhKAAhoQAAg7AZgyQARgjAfgeIADgEQBMhIBrgBQBsABBMBIQBMBKAABoQAABIgkA6QgQAYgYAYIgZAVQhEA1hbgBQhrAAhMhJgAi0AAQAABJA0AzQA2AzBKAAQA2AAApgZIkJjRQgKAcAAAfgAh7h/IEbDRQAWglAAgtQAAhIg2g0Qg1gyhLAAQhHgBg0Awg");
	this.shape.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B50100").ss(2,1,1).p("AC4iyQBMBKAABoQAABIgkA6QgQAZgYAXQgMALgMAKQhFA1hbAAQhrAAhMhKQhMhKAAhoQAAg7AZgyQARgjAegeQACgCACgCQBMhJBrAAQBsAABMBJgACAh8QA2A0AABIQAAAtgVAmIkdjTQA0guBIAAQBLAAA1AygAAACvQhKAAg2gzQg0gzAAhJQAAgfAKgcIEKDRQgqAZg2AAg");
	this.shape_1.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B50100").s().p("Ai3CyQhMhKAAhoQAAg7AZgyQASgjAegeIADgEQBMhIBrgBQBsABBMBIQBMBLAABnQAABIgkA5QgQAZgYAYIgZAVQhEA0hbABQhrgBhMhJgAi0AAQAABIA0A0QA2AzBKAAQA2AAAqgZIkKjRQgKAcAAAfgAh7h/IEbDRQAWglAAgtQAAhIg2g0Qg1gzhLAAQhIAAgzAwg");
	this.shape_2.setTransform(-1,-1.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconCancel, new cjs.Rectangle(-27,-27,54,53.3), null);


(lib.IconBackwardDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AlBgFIETjmIAGBXIFqgEIgCErIljgLIgLBkg");
	this.shape.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBackwardDisabled, new cjs.Rectangle(-32,-23,64.3,47.3), null);


(lib.IconBackward = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AlBgFIETjmIAGBXIFqgEIgCErIljgLIgLBkg");
	this.shape.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#346195").ss(2,1,1).p("AFCiYIlqAEIgFhXIkUDmIEUDxIAKhkIFjALg");
	this.shape_1.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#346195").s().p("AlBgFIEUjmIAFBXIFqgEIgCErIljgLIgKBkg");
	this.shape_2.setTransform(-0.85,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBackward, new cjs.Rectangle(-33,-25,66.3,50.3), null);


(lib.IconBackDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AlBgFIETjmIAGBXIFqgEIgCErIljgLIgLBkg");
	this.shape.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBackDisabled, new cjs.Rectangle(-32,-23,64.3,47.3), null);


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

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlBgFIETjmIAGBXIFqgEIgCErIljgLIgLBkg");
	this.shape.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#016500").ss(2,1,1).p("AFCiYIlqAEIgFhXIkUDmIEUDxIAKhkIFjALg");
	this.shape_1.setTransform(0.15,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AlBgFIEUjmIAFBXIFqgEIgCErIljgLIgKBkg");
	this.shape_2.setTransform(-0.85,-1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBack, new cjs.Rectangle(-33,-25,66.3,50.3), null);


(lib.ear_icon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D4766").s().p("Ah7EIQgkAAgSgJIAAAAQgUgKgNgcIAAAAQgVgvgDg0IAAAAQgBgUgDgRIgIgiIAAAAIgKgvIAAAAQgGghgCgcIAAAAQgBgmAEgdQAGgmARgeIAAgBQATghAkgSQAhgQArAAQBaABAxA4QAwA0AABVQAABBgqA/IgBABIgiAvIAAAAQgRAZgIASQgOAegTAuIgBACQgWAlgsABIgBgBgAiwjqQggAPgRAeQgQAcgFAkQgEAbABAkQACAbAFAgIALAvIAHAiQAEASABAVQADAxAUAtQAKAWAQAJQAPAHAgAAQAkABASgfQATguAOgeQAIgTAUgbIAgguQApg8AAg9QAAhPgsgwQgug0hSAAQgnAAgeAPgAiECVQgOgBgKgKQgJgLgJgRQgJgRAFgVQAFgXAXAIQAXAHAMgCQAVgEgBgTQgBgVgOgHQgNgFgXAGQgUAHgPgQQgNgLgEgTQgGgXAGgmQAGgnAUgYQATgZAWgKQAWgJAZAAQAYACAYAOQAYANAOAVQAPAUgRARQgRAPgRgTQgSgXgJgGQgNgIgYAAQgYAAgTAYQgRAYgBAdQAAANAFAMQAEAMAHAEQATAKALgaQALgZASABQATABAMAJIAOAMQAQARAGARQAIAagUAZQgPAUgSAQQgSAPAAAWQAAAXgTAJQgRAIgOAAIgCAAgAiiBGIgBAEIAAABQgEAQAHAMIAAABQAHAOAIAKIABAAQAFAGAIAAQALAAAPgHIAAAAQALgFgBgNQAAgdAYgUQAQgOAOgTIABAAQAPgSgGgUQgFgNgNgOIgBgBIgMgKQgJgGgNgCQgJACgGAOIAAAAQgIATgMAGQgNAIgSgJIgBgBQgKgGgHgRIAAgBQgGgOAAgRQACghATgbIAAgBQAYgfAfABQAeAAAQALQAJAGAVAZIAAAAQAGAIAHgGIAAAAQAHgHgHgJIAAAAQgNgTgVgMQgVgLgUgBIgBAAQgVgBgTAIQgSAJgRAVQgRAWgGAiIAAAAQgGAjAFAUIAAAAQAEAPAJAKQAJAIALgDIABAAQAdgJARAJIABAAQAVAIACAfIAAAAQACAggjAGIABAAQgPAEgbgJIgBAAIgFgBIgCAAgADEBpIAAAAIhUgyIAAAAQgLgHgEgNIAAgBQgDgNAGgLIAAgBQAIgMANgCQANgDALAGIABAAIBUAyQAMAHADANIgBAAQAEANgGAMIgBABQgHALgNAEIgIABQgJAAgIgFgAB8AJQgHABgEAHQgDAGABAIQACAHAHAEIBUAyQAGAEAHgCQAHgCAEgGQAEgHgCgHQgCgIgGgEIhUgyQgEgCgFAAIgFABgADogoIhhAAQgNAAgKgKQgJgJgBgPQAAgNAKgKIAAAAQAKgKANAAIBhAAQANAAAKAKIABAAQAJAKAAANQAAAOgJAKIgBABQgKAJgMAAIgBAAgAB7hXQgGAGAAAHQAAAIAGAGQAFAFAHAAIBhAAQAHAAAGgFQAFgGAAgIQAAgHgFgGQgGgFgHAAIhhAAQgHAAgFAFgAB4iNQgMgDgHgMIgBgBQgGgLADgMIAAgBQAEgOALgHIAAAAIBUgyIAAAAQAMgHANAEIAAAAIABAAQAMADAHAMIABABQAGAMgEANIABgBQgDANgMAIIhUAyIgBABQgIAEgHAAIgKgCgADMjvIhUAyQgHAEgCAHQgBAIADAGQAEAHAHACQAHACAHgEIBUgyQAGgEACgHQACgIgEgHQgEgGgHgCIgFAAQgEAAgEACg");
	this.shape.setTransform(25.0052,24.9503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfD5QgfAAgQgIQgQgIgKgWQgUgtgDgxQgBgVgDgSIgIgjIgKguQgGgggBgbQgCgkAEgcQAGgjAPgcQARgeAggPQAegPAoAAQBRAAAuAzQAsAxAABPQAAA9goA8IgiAuQgTAbgJASQgOAfgSAuQgSAegiAAIgCAAgAhVBHQgFAWAJARQAIARAKALQAJAKAPABQAOAAATgIQASgJAAgXQAAgWASgQQASgPAPgUQAUgZgJgaQgFgRgQgRIgPgMQgMgJgSgCQgSAAgLAZQgKAagTgKQgHgEgFgMQgFgMABgOQABgcARgYQASgYAZAAQAXAAANAIQAIAGATAXQAQATASgQQASgQgPgUQgQgVgYgOQgYgNgXgCQgYAAgWAJQgWAKgUAZQgTAYgGAnQgHAmAGAWQAFAUAMALQAQAQATgHQAXgGAOAFQANAHACAVQAAATgVADQgMADgXgHQgFgCgFAAQgOAAgDAQg");
	this.shape_1.setTransform(15.7545,24.9504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAXCmIhTgyQgGgEgCgHQgCgIAEgGQAEgHAHgCQAHgCAGAEIBTAyQAHAEABAHQACAIgDAHQgEAGgHACIgFABQgEAAgFgDgAgsASQgIAAgFgFQgFgGAAgHQAAgHAFgGQAFgFAIAAIBgAAQAHAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgHAAgAg3hRQgHgCgEgHQgEgGACgIQACgHAGgEIBTgyQAHgEAHACQAHACAEAGQADAHgCAIQgBAHgHAEIhTAyQgEACgEAAIgFAAg");
	this.shape_2.setTransform(43.0525,17.5853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_icon, new cjs.Rectangle(-1.5,-1.5,53,52.9), null);


(lib.CircleIconXDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ai4CAIBsh6IiAhtIBMhQICABpIBoh3IBLA6IhoB8ICCBtIhOBcIh+hwIhmB8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ai4CAIBsh6IiAhtIBMhQICABoIBoh2IBLA6IhoB8ICCBsIhOBdIh+hxIhmB9g");
	this.shape_1.setTransform(1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleIconXDisabled, new cjs.Rectangle(-20.5,-19.8,42,42.6), null);


(lib.CircleIconX = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai4CAIBsh6IiAhtIBMhQICABpIBoh3IBLA6IhoB8ICCBtIhOBcIh+hwIhmB8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(2,1,1).p("ACziLIhLg6IhoB2IiAhoIhMBQICABtIhsB6IBTBGIBmh8IB+BwIBOhcIiChug");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("Ai4CAIBsh6IiAhtIBMhQICABoIBoh2IBLA6IhoB8ICCBsIhOBdIh+hxIhmB9g");
	this.shape_2.setTransform(1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleIconX, new cjs.Rectangle(-21.5,-20.8,43,43.6), null);


(lib.CircleIconHelpDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ag+C0IAAg0IBbABIgCAzgAg2BHQAAglAIgLQAEgHAKgEQAKgFASgDQAUgEAHgEQAIgEAAgJQAAgngFgcQgDgUgFgKQgGgNgJAAQgJAAgHAHQgHAGgEALQgHAUAAAhIAAAYIhMABIgBgcQAAgcAEgUQAGgYAMgQQAOgSAXgJQAMgFAPgDQAPgDASAAQAQAAANAFQANAEAKAJQAKAHAIAMIAMAYQAJAXAEAgIADA4QAAAVgNAKQgKAIgXAEQgrAHAAAPIABApIgYAAQgaAAgZADg");
	this.shape.setTransform(-1.375,-1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag+C0IAAg0IBbABIgCAzgAg2BHQAAglAIgLQAEgHAKgEQAKgFASgDQAUgEAHgEQAIgEAAgJQAAgngFgcQgDgUgFgKQgGgNgJAAQgJAAgHAHQgHAGgEALQgHAUAAAhIAAAYIhMABIgBgcQAAgcAEgUQAGgYAMgQQAOgSAXgJQAMgFAPgDQAPgDASAAQAQAAANAFQANAEAKAJQAKAHAIAMIAMAYQAJAXAEAgIADA4QAAAVgNAKQgKAIgXAEQgrAHAAAPIABApIgYAAQgaAAgZADg");
	this.shape_1.setTransform(-2.375,-3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleIconHelpDisabled, new cjs.Rectangle(-24.5,-37,46,53.9), null);


(lib.CircleIconHelp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag+C0IAAg0IBbABIgCAzgAg2BHQAAglAIgLQAEgHAKgEQAKgFASgDQAUgEAHgEQAIgEAAgJQAAgngFgcQgDgUgFgKQgGgNgJAAQgJAAgHAHQgHAGgEALQgHAUAAAhIAAAYIhMABIgBgcQAAgcAEgUQAGgYAMgQQAOgSAXgJQAMgFAPgDQAPgDASAAQAQAAANAFQANAEAKAJQAKAHAIAMIAMAYQAJAXAEAgIADA4QAAAVgNAKQgKAIgXAEQgrAHAAAPIABApIgYAAQgaAAgZADg");
	this.shape.setTransform(-1.375,-1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CD6501").ss(2,1,1).p("Ag2BmQAZgDAaAAIAYAAIgBgpQAAgPArgHQAXgEAKgIQANgKAAgVIgDg4QgEgggJgXIgMgYQgIgMgKgHQgKgJgNgEQgNgFgQAAQgSAAgPADQgPADgMAFQgXAJgOASQgMAQgGAYQgEAUAAAcIABAcIBMgBIAAgYQAAghAHgUQAEgLAHgGQAHgHAJAAQAJAAAGANQAFAKADAUQAFAcAAAnQAAAJgIAEQgHAEgUAEQgSADgKAFQgKAEgEAHQgIALAAAlgAg+C0IBZAAIACgzIhbgBg");
	this.shape_1.setTransform(-1.375,-1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Ag+C0IAAg0IBbABIgCAzgAg2BHQAAglAIgLQAEgHAKgEQAKgFASgDQAUgEAHgEQAIgEAAgJQAAgngFgcQgDgUgFgKQgGgNgJAAQgJAAgHAHQgHAGgEALQgHAUAAAhIAAAYIhMABIgBgcQAAgcAEgUQAGgYAMgQQAOgSAXgJQAMgFAPgDQAPgDASAAQAQAAANAFQANAEAKAJQAKAHAIAMIAMAYQAJAXAEAgIADA4QAAAVgNAKQgKAIgXAEQgrAHAAAPIABApIgYAAQgaAAgZADg");
	this.shape_2.setTransform(-2.375,-3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleIconHelp, new cjs.Rectangle(-24.5,-37,46,54.9), null);


(lib.CircleButtonBase_Red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EC2727").s().p("AiwCyQhKhKAAhoQAAhnBKhKQBJhJBnAAQBoAABJBJQBKBKAABnQAABohKBKQhJBJhoAAQhnAAhJhJg");
	this.shape.setTransform(-1.55,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6gAkPkQIgBABQhwBxAACeQAACfBwBxQByBxCeAAQCfAABxhxIAAAAQBxhxAAifQAAiehxhyQhxhwifAAQieAAhxBwg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A1644").s().p("AjnDoQhghgAAiIQAAiHBghgIAAAAQBghgCHAAQCIAABgBgQBgBgAACHQAACIhgBgIAAAAQhgBgiIAAQiHAAhghggAjSjSIAAAAQhXBYAAB6QAAB8BXBXQBXBXB7AAQB7AABXhXIABgBQBXhXAAh7QAAh7hXhXQhXhXh8AAQh6AAhYBXg");
	this.shape_2.setTransform(-0.025,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B40000").s().p("AAAEqQh7AAhXhXQhXhXAAh8QAAh6BXhYIAAAAQBYhXB6AAQB8AABXBXQBXBXAAB7QAAB7hXBXIgBABQhWBXh8AAIAAAAg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AlFDvQBFAIgJhGQhbhcAAh/QAAiCBchcQBchcCCAAQB4AABYBQQBEgCgJg9IAOAOQB2B1AACmQAACkh2B1Qh1B2ikAAQimAAh1h2g");
	this.shape_4.setTransform(4.325,4.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AjZFVQh1h1AAimQAAikB1h2QB2h1CkAAQCcAABxBoQAJA8hFADQhYhQh5AAQiBAAhcBbQhbBcAACBQAACBBaBbQAJBAg3AAIgOgBg");
	this.shape_5.setTransform(-6.5227,-5.8342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AGfAAQAAirh6h5Qh5h6isAAQirAAh5B5IgBABQh5B5AACrQAACsB6B5QB5B6CrAAQCsAAB5h6IAAAAQB6h5AAisg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Red, new cjs.Rectangle(-43.5,-43.5,87,87), null);


(lib.CircleButtonBase_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Over, new cjs.Rectangle(-41.5,-41.5,83,83), null);


(lib.CircleButtonBase_Orange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D96000").s().p("AiwCyQhKhKAAhoQAAhnBKhKQBJhJBnAAQBoAABJBJQBKBKAABnQAABohKBKQhJBJhoAAQhnAAhJhJg");
	this.shape.setTransform(-1.55,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994201").s().p("AAAEqQh7AAhXhXQhXhXAAh8QAAh6BXhYIAAAAQBYhXB6AAQB8AABXBXQBXBXAAB7QAAB7hXBXIgBABQhWBXh8AAIAAAAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6gAkPkQIgBABQhwBxAACeQAACfBwBxQByBxCeAAQCfAABxhxIAAAAQBxhxAAifQAAiehxhyQhxhwifAAQieAAhxBwg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1644").s().p("AjnDoQhghgAAiIQAAiHBghgIAAAAQBghgCHAAQCIAABgBgQBgBgAACHQAACIhgBgIAAAAQhgBgiIAAQiHAAhghggAjSjSIAAAAQhXBYAAB6QAAB8BXBXQBXBXB7AAQB7AABXhXIABgBQBXhXAAh7QAAh7hXhXQhXhXh8AAQh6AAhYBXg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AlFDvQBFAIgJhGQhbhcAAh/QAAiCBchcQBchcCCAAQB4AABYBQQBEgCgJg9IAOAOQB2B1AACmQAACkh2B1Qh1B2ikAAQimAAh1h2g");
	this.shape_4.setTransform(4.325,4.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AjZFVQh1h1AAimQAAikB1h2QB2h1CkAAQCcAABxBoQAJA8hFADQhYhQh5AAQiBAAhcBbQhbBcAACBQAACBBaBbQAJBAg3AAIgOgBg");
	this.shape_5.setTransform(-6.5227,-5.8342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AGfAAQAAirh6h5Qh5h6isAAQirAAh5B5IgBABQh5B5AACrQAACsB6B5QB5B6CrAAQCsAAB5h6IAAAAQB6h5AAisg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Orange, new cjs.Rectangle(-43.5,-43.5,87,87), null);


(lib.CircleButtonBase_GreySmall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7g");
	this.shape.setTransform(-1.225,-1.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AjqDrQhhhiAAiJQAAiIBhhiQBihhCIAAQCJAABiBhQBhBiAACIQAACJhhBiIAAAAQhiBhiJAAQiIAAhihhgAjZjZIAAAAQhaBbAAB+QAAB/BaBbQBaBaB/AAQB/AABbhaQBahbAAh/QAAh/hahaQhbhah/AAQh+AAhbBag");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A1644").s().p("Ai5C5QhNhMAAhtQAAhsBNhNQBNhNBsAAQBtAABMBNQBOBNAABsQAABthNBMIgBABQhMBNhtAAQhsAAhNhOgAioioQhGBGAABiQAABjBGBGQBGBGBiAAQBjAABGhGQBGhGAAhjQAAhihGhGQhGhGhjAAQhiAAhGBGg");
	this.shape_2.setTransform(-0.025,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AioCpQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBGQhGBGhjAAQhiAAhGhGg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AkEC/QA3AHgHg4QhJhJAAhmQAAhpBKhJQBJhKBpAAQBfAABHBAQA2gCgGgvIAKAKQBfBeAACFQAACDhfBdQhdBfiDAAQiFAAhehfg");
	this.shape_4.setTransform(3.45,3.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AitERQheheAAiEQAAiEBeheQBehdCDAAQB9AABaBTQAHAwg3ACQhGhAhhAAQhnAAhJBJQhKBKAABnQAABnBJBJQAGAygsAAIgKAAg");
	this.shape_5.setTransform(-5.2105,-4.6665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFMAAQAAiIhhhiQhihhiJAAQiIAAhiBhQhhBiAACIQAACJBhBiQBiBhCIAAQCJAABihhIAAAAQBhhiAAiJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_GreySmall, new cjs.Rectangle(-35.2,-35.2,70.4,70.4), null);


(lib.CircleButtonBase_Grey_Tiny = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000033").s().p("AiMCNQg7g7AAhSQAAhSA7g6QA6g7BSAAQBSAAA7A7QA7A6AABSQAABSg7A7IAAAAQg7A7hSAAQhSAAg6g7gAiCiCIAAAAQg2A2AABMQAABNA2A2QA2A3BMgBQBNABA2g3QA3g2gBhNQABhMg3g2Qg2g2hNAAQhMAAg2A2g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A1644").s().p("AhvBwQguguAAhCQAAhAAugvQAvguBAAAQBCAAAuAuQAuAvAABAQAABCguAuIAAAAQguAuhCAAQhAAAgvgugAhkhlIgBABQgqAqAAA6QAAA8AqAqQAqAqA7AAQA8AAAqgqQAqgqAAg8QAAg7gqgqQgqgqg8AAQg6AAgqAqg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhVBVQgkgjABgyQgBgxAkgkQAkgkAxAAQAyAAAkAkQAkAkAAAxQAAAygkAjQgkAlgygBQgxABgkglg");
	this.shape_2.setTransform(-0.85,-1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhlBmQgqgqAAg8QAAg7AqgqIAAAAQAqgqA7AAQA8AAAqAqQAqAqAAA7QAAA8gqAqQgqAqg8AAQg7AAgqgqgAhchfQgkAkAAAyQAAAxAkAjQAjAkAzAAQAxAAAkgkQAjgjAAgxQAAgygjgkQgkgkgxAAQgzAAgjAkg");
	this.shape_3.setTransform(-0.125,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AidBzQAiAEgEgiQgsgsAAg9QAAg/AsgsQAsgsA/AAQA6AAAqAmQAggBgDgdIAGAGQA5A5AABQQAABPg5A4Qg4A5hPAAQhQAAg5g5g");
	this.shape_4.setTransform(2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AhoCkQg4g4AAhQQAAhPA4g4QA5g5BPAAQBLAAA2AyQAEAeghABQgqgng6AAQg+AAgsAsQgsAtAAA9QAAA+ArAsQAEAfgaAAIgHgBg");
	this.shape_5.setTransform(-3.1534,-2.8289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADNAAQAAhUg8g8Qg8g8hVAAQhUAAg8A8Qg8A8AABUQAABVA8A8QA8A8BUAAQBVAAA8g8IAAAAQA8g8AAhVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Grey_Tiny, new cjs.Rectangle(-22.5,-22.5,45,45), null);


(lib.CircleButtonBase_Grey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("AiwCyQhKhKAAhoQAAhnBKhKQBJhJBnAAQBoAABJBJQBKBKAABnQAABohKBKQhJBJhoAAQhnAAhJhJg");
	this.shape.setTransform(-1.55,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6gAkPkQIgBABQhwBxAACeQAACfBwBxQByBxCeAAQCfAABxhxIAAAAQBxhxAAifQAAiehxhyQhxhwifAAQieAAhxBwg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A1644").s().p("AjnDoQhghgAAiIQAAiHBghgIAAAAQBghgCHAAQCIAABgBgQBgBgAACHQAACIhgBgIAAAAQhgBgiIAAQiHAAhghggAjSjSIAAAAQhXBYAAB6QAAB8BXBXQBXBXB7AAQB7AABXhXIABgBQBXhXAAh7QAAh7hXhXQhXhXh8AAQh6AAhYBXg");
	this.shape_2.setTransform(-0.025,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAAEqQh7AAhXhXQhXhXAAh8QAAh6BXhYIAAAAQBYhXB6AAQB8AABXBXQBXBXAAB7QAAB7hXBXIgBABQhWBXh8AAIAAAAg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AlFDvQBFAIgJhGQhbhcAAh/QAAiCBchcQBchcCCAAQB4AABYBQQBEgCgJg9IAOAOQB2B1AACmQAACkh2B1Qh1B2ikAAQimAAh1h2g");
	this.shape_4.setTransform(4.325,4.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AjZFVQh1h1AAimQAAikB1h2QB2h1CkAAQCcAABxBoQAJA8hFADQhYhQh5AAQiBAAhcBbQhbBcAACBQAACBBaBbQAJBAg3AAIgOgBg");
	this.shape_5.setTransform(-6.5227,-5.8342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AGfAAQAAirh6h5Qh5h6isAAQirAAh5B5IgBABQh5B5AACrQAACsB6B5QB5B6CrAAQCsAAB5h6IAAAAQB6h5AAisg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Grey, new cjs.Rectangle(-43.5,-43.5,87,87), null);


(lib.CircleButtonBase_Green_Tiny = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00A100").s().p("AhZBaQgmglAAg1QAAg0AmglQAlgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAglgmg");
	this.shape.setTransform(-0.375,-0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007000").s().p("AhlBmQgqgqAAg8QAAg6AqgqIABgBQAqgqA6AAQA8AAAqAqQAqAqAAA7QAAA8gqAqQgqAqg8AAQg7AAgqgqg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AiMCNQg7g7AAhSQAAhSA7g6QA6g7BSAAQBSAAA7A7QA7A6AABSQAABSg7A7IAAAAQg7A7hSAAQhSAAg6g7gAiCiCIAAAAQg2A2AABMQAABNA2A2QA2A3BMgBQBNABA2g3QA3g2gBhNQABhMg3g2Qg2g2hNAAQhMAAg2A2g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1644").s().p("AhvBwQguguAAhCQAAhAAugvQAvguBAAAQBCAAAuAuQAuAvAABAQAABCguAuIAAAAQguAuhCAAQhAAAgvgugAhkhlIgBABQgqAqAAA6QAAA8AqAqQAqAqA7AAQA8AAAqgqQAqgqAAg8QAAg7gqgqQgqgqg8AAQg6AAgqAqg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AidBzQAiAEgEgiQgsgsAAg9QAAg/AsgsQAsgsA/AAQA6AAAqAmQAggBgDgdIAGAGQA5A5AABQQAABPg5A4Qg4A5hPAAQhQAAg5g5g");
	this.shape_4.setTransform(2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AhoCkQg4g4AAhQQAAhPA4g4QA5g5BPAAQBLAAA2AyQAEAeghABQgqgng6AAQg+AAgsAsQgsAtAAA9QAAA+ArAsQAEAfgaAAIgHgBg");
	this.shape_5.setTransform(-3.1534,-2.8289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADEAAQAAhQg6g6Qg5g5hRAAQhQAAg6A5Qg5A6AABQQAABRA5A5QA6A6BQAAQBRAAA5g5IABgBQA5g5AAhRg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Green_Tiny, new cjs.Rectangle(-21.6,-21.6,43.2,43.2), null);


(lib.CircleButtonBase_Green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00A100").s().p("Ai6C8QhOhOAAhuQAAhtBOhNQBNhOBtAAQBuAABOBOQBNBNAABtQAABuhNBOQhOBNhuAAQhtAAhNhNg");
	this.shape.setTransform(-0.775,-1.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007000").s().p("AAAEqQh7AAhXhXQhXhXAAh8QAAh6BXhYIAAAAQBYhXB6AAQB8AABXBXQBXBXAAB7QAAB7hXBXIgBABQhWBXh8AAIAAAAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6gAkPkQIgBABQhwBxAACeQAACfBwBxQByBxCeAAQCfAABxhxIAAAAQBxhxAAifQAAiehxhyQhxhwifAAQieAAhxBwg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1644").s().p("AjnDoQhghgAAiIQAAiHBghgIAAAAQBghgCHAAQCIAABgBgQBgBgAACHQAACIhgBgIAAAAQhgBgiIAAQiHAAhghggAjSjSIAAAAQhXBYAAB6QAAB8BXBXQBXBXB7AAQB7AABXhXIABgBQBXhXAAh7QAAh7hXhXQhXhXh8AAQh6AAhYBXg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AlFDvQBFAIgJhGQhbhcAAh/QAAiCBchcQBchcCCAAQB4AABYBQQBEgCgJg9IAOAOQB2B1AACmQAACkh2B1Qh1B2ikAAQimAAh1h2g");
	this.shape_4.setTransform(4.325,4.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AjZFVQh1h1AAimQAAikB1h2QB2h1CkAAQCcAABxBoQAJA8hFADQhYhQh5AAQiBAAhcBbQhbBcAACBQAACBBaBbQAJBAg3AAIgOgBg");
	this.shape_5.setTransform(-6.5227,-5.8342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AGfAAQAAirh6h5Qh5h6isAAQirAAh5B5IgBABQh5B5AACrQAACsB6B5QB5B6CrAAQCsAAB5h6IAAAAQB6h5AAisg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Green, new cjs.Rectangle(-43.5,-43.5,87,87), null);


(lib.CircleButtonBase_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AkkElQh6h5AAisQAAirB5h5IABgBQB5h5CrAAQCsAAB5B6QB6B5AACrQAACsh6B5IAAAAQh5B6isAAQirAAh5h6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_Down, new cjs.Rectangle(-41.5,-41.5,83,83), null);


(lib.CircleButtonBase_BlueSmallSelected = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#004770").s().p("AieCfQhChCAAhcQAAhdBChCQBChCBcAAQBdAABCBCQBCBCAABdQAABchCBCQhCBChdAAQhcAAhChCg");
	this.shape.setTransform(-0.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004770").s().p("AioCpQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBGQhGBGhjAAQhiAAhGhGg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AjqDrQhhhiAAiJQAAiIBhhiQBihhCIAAQCJAABiBhQBhBiAACIQAACJhhBiIAAAAQhiBhiJAAQiIAAhihhgAjZjZIAAAAQhaBbAAB+QAAB/BaBbQBaBaB/AAQB/AABbhaQBahbAAh/QAAh/hahaQhbhah/AAQh+AAhbBag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1644").s().p("Ai5C5QhNhMAAhtQAAhsBNhNQBNhNBsAAQBtAABMBNQBOBNAABsQAABthNBMIgBABQhMBNhtAAQhsAAhNhOgAioioQhGBGAABiQAABjBGBGQBGBGBiAAQBjAABGhGQBGhGAAhjQAAhihGhGQhGhGhjAAQhiAAhGBGg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFE9").s().p("AitERQheheAAiEQAAiEBeheQBehdCDAAQB9AABaBTQAHAwg3ACQhGhAhhAAQhnAAhJBJQhKBKAABnQAABnBJBJQAGAygsAAIgKAAg");
	this.shape_4.setTransform(-5.2105,-4.6665);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFE9").s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQB8AABbBTIALAKQBeBeAACEQAACFheBdQhdBeiFAAQiEAAheheg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFMAAQAAiIhhhiQhihhiJAAQiIAAhiBhQhhBiAACIQAACJBhBiQBiBhCIAAQCJAABihhIAAAAQBhhiAAiJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_BlueSmallSelected, new cjs.Rectangle(-35.2,-35.2,70.4,70.4), null);


(lib.CircleButtonBase_BlueSmall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4D87C9").s().p("AieCfQhChCAAhcQAAhdBChCQBChCBcAAQBdAABCBCQBCBCAABdQAABchCBCQhCBChdAAQhcAAhChCg");
	this.shape.setTransform(-0.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#346195").s().p("AioCpQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBGQhGBGhjAAQhiAAhGhGg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AjqDrQhhhiAAiJQAAiIBhhiQBihhCIAAQCJAABiBhQBhBiAACIQAACJhhBiIAAAAQhiBhiJAAQiIAAhihhgAjZjZIAAAAQhaBbAAB+QAAB/BaBbQBaBaB/AAQB/AABbhaQBahbAAh/QAAh/hahaQhbhah/AAQh+AAhbBag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1644").s().p("Ai5C5QhNhMAAhtQAAhsBNhNQBNhNBsAAQBtAABMBNQBOBNAABsQAABthNBMIgBABQhMBNhtAAQhsAAhNhOgAioioQhGBGAABiQAABjBGBGQBGBGBiAAQBjAABGhGQBGhGAAhjQAAhihGhGQhGhGhjAAQhiAAhGBGg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AkEC/QA3AHgHg4QhJhJAAhmQAAhpBKhJQBJhKBpAAQBfAABHBAQA2gCgGgvIAKAKQBfBeAACFQAACDhfBdQhdBfiDAAQiFAAhehfg");
	this.shape_4.setTransform(3.45,3.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AitERQheheAAiEQAAiEBeheQBehdCDAAQB9AABaBTQAHAwg3ACQhGhAhhAAQhnAAhJBJQhKBKAABnQAABnBJBJQAGAygsAAIgKAAg");
	this.shape_5.setTransform(-5.2105,-4.6665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFMAAQAAiIhhhiQhihhiJAAQiIAAhiBhQhhBiAACIQAACJBhBiQBiBhCIAAQCJAABihhIAAAAQBhhiAAiJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleButtonBase_BlueSmall, new cjs.Rectangle(-35.2,-35.2,70.4,70.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AghAhIgHgDIABAAQgKgFgIgCIAXgWIAWAWIABgBIAAAAQAHgUAKgTQAMgWALgMIAcATQgTASgSAWQgTAZgIATQgJgKgRgJg");
	this.shape.setTransform(6.05,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F50").s().p("AgHA2QgKgJgRgKQgDgCgDgBIAAAAQgMgHgHgBIgBgBIAAgBIABAAIAXgXIABAAIABAAIAWAUQAHgTAKgSQAMgXALgMIABgBIABAAIAeAUIABAAIAAABIgBABQgTASgTAYQgUAZgHATIgBAAIAAABgAghAhQARAJAJAKQAIgTAUgZQASgXATgSIgcgSQgMAMgMAWQgJATgIATIAAABIgBAAIgWgWIgWAWQAHACAKAGIAAAAIAGADg");
	this.shape_1.setTransform(6.0125,5.4125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CheckMark, new cjs.Rectangle(-0.1,-0.1,12.2,11), null);


(lib.ButtonUpBlue_Selected = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B4AEAE").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAJAIAJAGQAWANAbABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcIgDgCQgbgZgkAAItJAAQgnAAgcAbg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0C9C9").s().p("AmkFrQgbgBgWgNQgJgGgJgIQgbgbAAgnIAAoZQAAgnAbgbQAcgcAnAAINJAAQAkAAAbAZIADADQAbAbABAnIAAIZQgBAngbAbQgbAbgnABg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonUpBlue_Selected, new cjs.Rectangle(-54.1,-38.9,108.30000000000001,77.9), null);


(lib.ButtonBase_Red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAcAbAnABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcQgbgbgnAAItJAAQgnAAgcAbgAlvFQQg0AAgigpQgXgbgCggIgBgNIAAm1QADhCA5ghQAZgOAbAAILMAAQAvABAgAhQAhAfAAAwIAAG1QABAwghAgQgYAYghAHIgLABIgMABgAnEkPQgTAZABAgIAAG1QgBAVAJAUQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgOQAFgJADgJIACgKIACgVIAAm1QAAgyglgeQgdgXglAAIrMAAQg3ADgeArg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// red
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B40000").s().p("AFmFGIrLAAQgnABgdgYIgIgIQggggAAgsIAAm2QABgbAMgXIAFgJQAhguA5gCILLAAIAMABQAlAEAbAbIANARQATAagBAgIAAG2IgCAWQgFAfgYAXIgIAHIgJAGIgSALQgQAIgSAAIgHgBgAmAkzQgXAMgOAVQgSAYABAeIAAGdQAAAlAXAaQAeAjAwAAIKZAAIAVgBIAJgCQAOgEANgJIAPgNQAfgbgBgqIAAmdQAAgdgRgZQgfgrg2gBIqZAAIgCAAQgYAAgVALg");
	this.shape_1.setTransform(-0.8997,0.4107);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC2727").s().p("AlMExQgwAAgfgjQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQA1ABAfArQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_2.setTransform(-1.3491,-0.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// lights
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnVFnQgIgCgHgFQgIgGgGgJQgCgDgBgFIgCgKIgDgIIAApcQAdgoAZgQQAbgRAbAFINfACQAVAHASAPQAHAUgLAVQgFAOgNADQgRAGgRgCItkJOQAMAVgMARQgEAFgHACIgSADQgKgBgKgDg");
	this.shape_3.setTransform(-2.235,-1.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// blue
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AmkF4QgsAAgfggQgggfAAgtIAAoYQAAgsAgggQAfgfAsAAINJAAQAtAAAfAfQAfAgAAAsIAAIYQAAAtgfAfQgfAggtAAg");
	this.shape_4.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// white
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AH6liQgjgjgyAAItJAAQgyAAgjAjQgkAkAAAyIAAIZQAAAyAkAjQAjAjAyABINJAAQAygBAjgjQAjgjABgyIAAoZQgBgygjgkg");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Red, new cjs.Rectangle(-56.1,-40.9,112.30000000000001,81.9), null);


(lib.ButtonBase_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Over, new cjs.Rectangle(-54.1,-38.9,108.30000000000001,77.9), null);


(lib.ButtonBase_Orange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAcAbAnABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcQgbgbgnAAItJAAQgnAAgcAbgAlvFQQg0AAgigpQgXgbgCggIgBgNIAAm1QADhCA5ghQAZgOAbAAILMAAQAvABAgAhQAhAfAAAwIAAG1QABAwghAgQgYAYghAHIgLABIgMABgAnEkPQgTAZABAgIAAG1QgBAVAJAUQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgOQAFgJADgJIACgKIACgVIAAm1QAAgyglgeQgdgXglAAIrMAAQg3ADgeArg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// orange
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994201").s().p("AFmFGIrLAAQgnABgdgYIgIgIQggggAAgsIAAm2QABgbAMgXIAFgJQAhguA5gCILLAAIAMABQAlAEAbAbIANARQATAagBAgIAAG2IgCAWQgFAfgYAXIgIAHIgJAGIgSALQgQAIgSAAIgHgBgAmAkzQgXAMgOAVQgSAYABAeIAAGdQAAAlAXAaQAeAjAwAAIKZAAIAVgBIAJgCQAOgEANgJIAPgNQAfgbgBgqIAAmdQAAgdgRgZQgfgrg2gBIqZAAIgCAAQgYAAgVALg");
	this.shape_1.setTransform(-0.8997,0.4107);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D96000").s().p("AlMExQgwAAgfgjQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQA1ABAfArQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_2.setTransform(-1.3491,-0.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// lights
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnVFnQgIgCgHgFQgIgGgGgJQgCgDgBgFIgCgKIgDgIIAApcQAdgoAZgQQAbgRAbAFINfACQAVAHASAPQAHAUgLAVQgFAOgNADQgRAGgRgCItkJOQAMAVgMARQgEAFgHACIgSADQgKgBgKgDg");
	this.shape_3.setTransform(-2.235,-1.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// blue
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AmkF4QgsAAgfggQgggfAAgtIAAoYQAAgsAgggQAfgfAsAAINJAAQAtAAAfAfQAfAgAAAsIAAIYQAAAtgfAfQgfAggtAAg");
	this.shape_4.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// white
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AH6liQgjgjgyAAItJAAQgyAAgjAjQgkAkAAAyIAAIZQAAAyAkAjQAjAjAyABINJAAQAygBAjgjQAjgjABgyIAAoZQgBgygjgkg");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Orange, new cjs.Rectangle(-56.1,-40.9,112.30000000000001,81.9), null);


(lib.ButtonBase_OK_Over = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AlJHNQhIgCgvgxQgzgxAAhGIAApFQAAhGAzgyQAwgxBHgBIKSAAQBJABAvAxQAyAwABBIIAAJFQgCBHgxAwQgvAxhJACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_OK_Over, new cjs.Rectangle(-50,-46,100,92.1), null);


(lib.ButtonBase_OK_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AlJHNQhIgCgvgxQgzgxAAhGIAApFQAAhGAzgyQAwgxBHgBIKSAAQBJABAvAxQAyAwABBIIAAJFQgCBHgxAwQgvAxhJACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_OK_Down, new cjs.Rectangle(-50,-46,100,92.1), null);


(lib.ButtonBase_OK_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjxF7Qg/AAgxgtQgugvAAhCIAAm5QAAhCAuguQAxguA/AAIHjAAQBAAAAvAuQAvAvAABBIAAG5QAABBgvAwQgwAtg/AAgAlXlCQgrAoAAA+IAAG5QAAA9ArApQArArA7AAIHjAAQA7AAArgrQArgpAAg9IAAm5QAAg+grgoQgqgqg8AAInjAAQg8AAgqAqg");
	this.shape.setTransform(0.125,-0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AlJHNQhIgCgvgxQgzgxAAhGIAApFQAAhGAzgyQAwgxBHgBIKSAAQBJABAvAxQAyAwABBIIAAJFQgCBHgxAwQgvAxhJACgAmomAQglAnAAA3IAAJFQAAA3AlAlQAoAnA3AAIKSAAQA5AAAmgnQAlglABg3IAApFQgBg2glgoQgogmg3AAIqSAAQg2AAgpAmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gray
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjNFWQg6AAgrgpQgqgpAAg5IAAmWQAAg3AqgrQArgoA6AAIGbAAQA7AAAqAoQAqArAAA3IAAGWQAAA5gqApQgqApg7AAg");
	this.shape_2.setTransform(-0.475,-2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjxF0Qg9AAgugrQgrgtAAg/IAAm4QAAg/ArgsQAugtA9AAIHjAAQA/AAArAtQAtAsAAA/IAAG4QAAA/gtAtQgrArg/AAgAkzk/QgqAqgBA3IAAGXQABA5AqAoQArApA5AAIGbAAQA7AAAqgpQAqgoAAg5IAAmXQAAg3gqgqQgqgpg7AAImbAAQg5AAgrApg");
	this.shape_3.setTransform(-0.3,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AmbGhIgFgEQgtgrAAhAIAApDQAAg+AtguQArgsBAAAIKTAAQA8AAAqApIAKA0QgGAxhLgXQk+DcikDMQgpAyg/BSQg2BBhBAtQAaA9g2AEg");
	this.shape_4.setTransform(-2.725,-2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AlJG6Qg/AAgrguQgtgrAAg/IAApEQAAg+AtgtQArgsA/AAIKTAAQBBAAApAsQAtAtAAA+IAAJEQAAA/gtArQgqAuhAAAg");
	this.shape_5.setTransform(-0.7,-1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_OK_Disabled, new cjs.Rectangle(-50,-46,100,92.1), null);


(lib.ButtonBase_OK = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjxF7Qg/AAgxgtQgugvAAhCIAAm5QAAgdAJgZQALggAagaQAxguA/AAIHjAAQBAAAAvAuQAaAbAMAfQAJAZAAAdIAAG5QAABBgvAwQgwAtg/AAgAlXlCQgXAVgLAbQgJAZAAAdIAAG5QAAA9ArApQArArA7AAIHjAAQA7AAArgrQArgpAAg9IAAm5QAAgdgKgZQgKgbgXgVQgqgqg8AAInjAAQg8AAgqAqg");
	this.shape.setTransform(0.125,-0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AlJHNQhIgCgvgxQgzgxAAhGIAApFQAAhGAzgyQAwgxBHgBIKSAAQBJABAvAxQAyAwABBIIAAJFQgCBHgxAwQgvAxhJACgAmomAQglAnAAA3IAAJFQAAA3AlAlQAoAnA3AAIKSAAQA5AAAmgnQAlglABg3IAApFQgBg2glgoQgogmg3AAIqSAAQg2AAgpAmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A400").s().p("AjNFWQg6AAgrgpQgqgpAAg5IAAmWQAAg3AqgrQArgoA6AAIGbAAQA7AAAqAoQAqArAAA3IAAGWQAAA5gqApQgqApg7AAg");
	this.shape_2.setTransform(-0.475,-2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007300").s().p("AjxF0Qg9AAgugrQgrgtAAg/IAAm4QAAg/ArgsQAugtA9AAIHjAAQA/AAArAtQAtAsAAA/IAAG4QAAA/gtAtQgrArg/AAgAkzk/QgqAqgBA3IAAGXQABA5AqAoQArApA5AAIGbAAQA7AAAqgpQAqgoAAg5IAAmXQAAg3gqgqQgqgpg7AAImbAAQg5AAgrApg");
	this.shape_3.setTransform(-0.3,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AmbGhIgFgEQgtgrAAhAIAApDQAAg+AtguQArgsBAAAIKTAAQA8AAAqApIAKA0QgGAxhLgXQk+DcikDMQgpAyg/BSQg2BBhBAtQAaA9g2AEg");
	this.shape_4.setTransform(-2.725,-2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHCmaQgwgyhJAAIqSAAQhHAAgxAyQgyAxAABHIAAJFQAABHAyAwQAwAxBIACIKSAAQBJgBAwgyQAwgvAChIIAApFQgBhJgxgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// blue
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336699").s().p("AlJG6Qg/AAgrguQgtgrAAg/IAApEQAAg+AtgtQArgsA/AAIKTAAQBBAAApAsQAtAtAAA+IAAJEQAAA/gtArQgqAuhAAAg");
	this.shape_6.setTransform(-0.7,-1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_OK, new cjs.Rectangle(-52,-48,104,96.1), null);


(lib.ButtonBase_Green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAcAbAnABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcQgbgbgnAAItJAAQgnAAgcAbgAlvFQQg0AAgigpQgXgbgCggIgBgNIAAm1QADhCA5ghQAZgOAbAAILMAAQAvABAgAhQAhAfAAAwIAAG1QABAwghAgQgYAYghAHIgLABIgMABgAnEkPQgTAZABAgIAAG1QgBAVAJAUQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgOQAFgJADgJIACgKIACgVIAAm1QAAgyglgeQgdgXglAAIrMAAQg3ADgeArg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// green
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009D00").s().p("AlMExQgwAAgfgjQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQA1ABAfArQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_1.setTransform(-1.3491,-0.951);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006D02").s().p("AFmFGIrLAAQgnABgdgYIgIgIQggggAAgsIAAm2QABgbAMgXIAFgJQAhguA5gCILLAAIAMABQAlAEAbAbIANARQATAagBAgIAAG2IgCAWQgFAfgYAXIgIAHIgJAGIgSALQgQAIgSAAIgHgBgAmAkzQgXAMgOAVQgSAYABAeIAAGdQAAAlAXAaQAeAjAwAAIKZAAIAVgBIAJgCQAOgEANgJIAPgNQAfgbgBgqIAAmdQAAgdgRgZQgfgrg2gBIqZAAIgCAAQgYAAgVALg");
	this.shape_2.setTransform(-0.8997,0.4107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// lights
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnVFnQgIgCgHgFQgIgGgGgJQgCgDgBgFIgCgKIgDgIIAApcQAdgoAZgQQAbgRAbAFINfACQAVAHASAPQAHAUgLAVQgFAOgNADQgRAGgRgCItkJOQAMAVgMARQgEAFgHACIgSADQgKgBgKgDg");
	this.shape_3.setTransform(-2.235,-1.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// blue
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AmkF4QgsAAgfggQgggfAAgtIAAoYQAAgsAgggQAfgfAsAAINJAAQAtAAAfAfQAfAgAAAsIAAIYQAAAtgfAfQgfAggtAAg");
	this.shape_4.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// white
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AH6liQgjgjgyAAItJAAQgyAAgjAjQgkAkAAAyIAAIZQAAAyAkAjQAjAjAyABINJAAQAygBAjgjQAjgjABgyIAAoZQgBgygjgkg");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Green, new cjs.Rectangle(-56.1,-40.9,112.30000000000001,81.9), null);


(lib.ButtonBase_Down = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Down, new cjs.Rectangle(-54.1,-38.9,108.30000000000001,77.9), null);


(lib.ButtonBase_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AllFMQgvgBggggQgighAAgvIAAm1QAAgvAiggQAggiAvAAILLAAQAvAAAgAiQAiAgAAAvIAAG1QAAAvgiAhQggAggvABgAmukjQgeAdgBAsIAAG1QABArAeAeQAeAeArABILLAAQAqgBAfgeQAegeABgrIAAm1QgBgsgegdQgegegrAAIrLAAQgrAAgeAeg");
	this.shape.setTransform(-0.9,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAcAbAnABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcQgbgbgnAAItJAAQgnAAgcAbg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gray
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AlMExQgqAAgdgdQgfgdAAgoIAAmdQAAgpAfgdQAdgcAqAAIKZAAQAqAAAdAcQAfAdAAApIAAGdQAAAogfAdQgdAdgqAAg");
	this.shape_2.setTransform(-1.35,-0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AllFGQgtAAgfgeQggggABgtIAAm1QgBgtAggfQAfggAtABILLAAQAtgBAfAgQAgAfgBAtIAAG1QABAtggAgQgfAegtAAgAmYkhQgeAdAAAoIAAGdQAAApAeAcQAeAdApAAIKaAAQApAAAegdQAegcAAgpIAAmdQAAgogegdQgegcgpAAIqaAAQgpAAgeAcg");
	this.shape_3.setTransform(-0.9,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AnVFnQgIgCgHgFQgIgGgGgJQgCgDgBgFIgCgKIgDgIIAApcQAdgoAZgQQAbgRAbAFINfACQAVAHASAPQAHAUgLAVQgFAOgNADQgRAGgRgCItkJOQAMAVgMARQgEAFgHACIgSADQgKgBgKgDg");
	this.shape_4.setTransform(-2.235,-1.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AmkF4QgsAAgfggQgggfAAgtIAAoYQAAgsAgggQAfgfAsAAINJAAQAtAAAfAfQAfAgAAAsIAAIYQAAAtgfAfQgfAggtAAg");
	this.shape_5.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Disabled, new cjs.Rectangle(-54.1,-38.9,108.30000000000001,77.9), null);


(lib.ButtonBase_BlueSquareSmallDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ah4C+QggAAgYgXQgXgYAAggIAAjdQAAggAXgXQAYgYAgAAIDxAAQAgAAAXAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAirihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIDxAAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIjxAAQgeAAgVAVg");
	this.shape.setTransform(0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C2F4C").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAgAjTjAQgTAUAAAcIAAEhQAAAcATASQAUAUAbAAIFJAAQAcAAATgUQATgSAAgcIAAkhQAAgcgTgUQgUgTgbAAIlJAAQgbAAgUATg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhmCrQgdAAgVgVQgVgUAAgcIAAjLQAAgcAVgVQAVgUAdAAIDNAAQAdAAAVAUQAVAVAAAcIAADLQAAAcgVAUQgUAVgeAAg");
	this.shape_2.setTransform(-0.225,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ah4C6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIDxAAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAiZifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIDNAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAIjNAAQgdAAgVAUg");
	this.shape_3.setTransform(-0.125,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// lights
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("AjNDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIFJAAQAeAAAVAUIAFAbQgDAYglgLQigBuhRBlIg0BCQgbAhghAWQANAfgaACg");
	this.shape_4.setTransform(-1.35,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// blue
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336699").s().p("AikDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIFJAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_5.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueSquareSmallDisabled, new cjs.Rectangle(-25,-23,50,46.1), null);


(lib.ButtonBase_BlueSquareSmall_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah4C+QggAAgYgXQgXgYAAggIAAjdQAAggAXgXQAYgYAgAAIDxAAQAgAAAXAYQAYAXAAAgIAADdQAAAggYAYQgXAXggAAgAirihQgWAUAAAfIAADdQAAAeAWAVQAVAVAeAAIDxAAQAdAAAWgVQAVgVAAgeIAAjdQAAgfgVgUQgVgVgeAAIjxAAQgeAAgVAVg");
	this.shape_7.setTransform(0.075,-0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C2F4C").s().p("AikDmQgkgBgXgYQgagYAAgkIAAkhQAAgkAagZQAXgYAkAAIFJAAQAkAAAYAYQAZAYAAAlIAAEhQgBAkgYAYQgYAZgkAAgAjTjAQgTAUAAAcIAAEhQAAAcATASQAUAUAbAAIFJAAQAcAAATgUQATgSAAgcIAAkhQAAgcgTgUQgUgTgbAAIlJAAQgbAAgUATg");
	this.shape_8.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// green
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#346195").s().p("Ah4C6QgfAAgWgWQgWgWAAgfIAAjcQAAggAWgVQAWgXAfAAIDxAAQAfAAAWAXQAWAVAAAgIAADcQAAAfgWAWQgWAWgfAAgAiZifQgVAVAAAbIAADLQAAAdAVAUQAVAVAdAAIDNAAQAeAAAUgVQAVgUAAgdIAAjLQAAgbgVgVQgVgUgdAAIjNAAQgdAAgVAUg");
	this.shape_9.setTransform(-0.125,-0.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D87C9").s().p("AhmCrQgdAAgVgVQgVgUAAgcIAAjLQAAgcAVgVQAVgUAdAAIDNAAQAdAAAVAUQAVAVAAAcIAADLQAAAcgVAUQgUAVgeAAg");
	this.shape_10.setTransform(-0.225,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// lights
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6699CC").s().p("AjNDRIgDgDQgWgVAAggIAAkhQAAgfAWgXQAWgWAgAAIFJAAQAeAAAVAUIAFAbQgDAYglgLQigBuhRBlIg0BCQgbAhghAWQANAfgaACg");
	this.shape_11.setTransform(-1.35,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// blue
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#336699").s().p("AikDdQggAAgVgXQgXgVABggIAAkhQgBggAXgWQAVgWAgAAIFJAAQAgAAAVAWQAWAWAAAgIAAEhQAAAggWAVQgVAXggAAg");
	this.shape_12.setTransform(-0.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// outerstroke
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiVD6Qh4AAAAh4IAAkDQAAh4B4AAIErAAQB4AAAAB4IAAEDQAAB4h4AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_BlueSquareSmall_1, new cjs.Rectangle(-27,-25,54,50), null);


(lib.ButtonBase_Blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#346195").s().p("AFnFCIrMAAIgKAAIgUgEQgOgEgMgIQgagTgOgcQgIgTABgVIAAm2QgBgfASgZQAfgsA3gCILMAAQAlAAAcAXQAmAeAAAxIAAG2IgDAVIgCAKQgDAJgEAIQgIAPgKAKQgdAegqAAIgCAAgAmAkzQgWAMgPAVQgRAYAAAeIAAGdQABAlAWAaQAJAJAJAHQAaATAjAAIKZAAIAUgBIAKgCQAOgEAMgJIAPgNQAfgbgBgqIAAmdQABgdgSgZIgCgDQgfgogzgBIqZAAIgDAAQgYAAgVALg");
	this.shape.setTransform(-0.9053,0.4266);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D87C9").s().p("AlMExQgjAAgagTQgJgHgJgJQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQAzABAfAoIACADQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_1.setTransform(-1.3491,-0.951);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABgAnnlPQgbAcAAAnIAAIYQAAAoAbAbQAJAIAJAGQAWANAbABINJAAQAngBAbgbQAbgbABgoIAAoYQgBgngbgcIgDgCQgbgZgkAAItJAAQgnAAgcAbgAlvFQQgpAAgegaQgIgHgHgIQgXgbgCggIgBgNIAAm1QADhCA5ghQAZgOAbAAILMAAQAvABAgAhIAFAEQAcAfAAAsIAAG1QABAwghAgQgYAYghAHIgLABIgMABgAnEkPQgTAZABAgIAAG1QgBAVAJAUQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgOQAFgJADgJIACgKIACgVIAAm1QAAgyglgeQgdgXglAAIrMAAQg3ADgeArg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnYFWQgbgbAAgoIAAoYQAAgnAbgcQAcgbAnAAINJAAQAkAAAbAZQABANgHAOQgFAOgNADQgOAFgNgBIgFgEQggghgvgBIrMAAQgbAAgZAOQg5AhgDBCIAAG1IABANQACAgAXAbQAHAIAIAHQAFAQgKANQgEAFgGACIgQADQgJgGgJgIg");
	this.shape_3.setTransform(-1.4983,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("Am6FfQgcgBgVgNIAPgDQAHgCAEgFQAJgNgEgQQAdAaAqAAILMAAIAMgBIALgBQAhgHAXgYQAhggAAgwIAAm1QgBgsgbgfQANABANgFQANgDAFgOQAHgOAAgNIADACQAbAcAAAnIAAIYQAAAogbAbQgbAbgoABg");
	this.shape_4.setTransform(2.275,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D87C9").s().p("AmkGGQgygBgjgjQgkgjAAgzIAAoYQAAgyAkgkQAjgiAygBINJAAQAyABAjAiQAjAkABAyIAAIYQgBAzgjAjQgjAjgyABg");
	this.shape_5.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// white
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmkGaQg7gBgpgpQgpgpAAg7IAAoYQAAg6ApgqQApgoA7gBINJAAQA6ABApAoIAAABQApApABA6IAAIZQgBA6gpApIAAAAQgpApg6ABgAnrlTQgeAdAAAqIAAIYQAAAqAeAeQAdAdAqABINJAAQApgBAegdIAAAAQAdgeABgqIAAoYQgBgqgdgdIAAAAQgegegpAAItJAAQgqAAgdAeg");
	this.shape_6.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Blue, new cjs.Rectangle(-56.1,-40.9,112.30000000000001,81.9), null);


(lib.Audiowave3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhZD2QgDgIADgIQADgHAHgDQA9gaAlg7QAng9AAhKQAAhJgog9Qglg8g/gZQgHgDgDgHQgDgIADgIQACgIAHgDQAHgDAHADQBIAdAtBGQAuBHAABWQAABXgtBHQgsBFhHAeIgGABQgNAAgEgMg");
	this.shape.setTransform(11.3182,25.8558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4866").s().p("AhZD2QgDgIADgIQADgHAHgDQA+gaAkg7QAng8AAhKQAAhKgog9Qglg8g+gZQgHgDgEgHQgDgIADgHQACgIAHgEQAHgDAHADIADABQBGAeAsBEQAuBHAABXQAABWgtBHQgrBDhEAfIgEABQgDACgDAAQgNAAgEgNg");
	this.shape_1.setTransform(9.4182,25.9308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Audiowave3, new cjs.Rectangle(0,0,20.8,51.8), null);


(lib.Audiowave2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhKC4QgDgIADgIQAEgHAHgDQAugSAbgrQAegrgBg2QABg0gegsQgcgrgugSQgHgCgEgIQgDgHADgIQACgIAIgDQAHgEAHADQA4AWAkA1QAkA2AABBQAABCgkA3QgjA0g4AXIgGABQgNAAgFgNg");
	this.shape.setTransform(9.6182,19.6479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4866").s().p("AhKC4QgDgIAEgHQADgIAHgDQAugSAcgqQAdgsAAg1QAAg1gegsQgbgrgvgRQgHgDgEgIQgDgHADgIQACgIAIgDQAHgEAHADIADABQA2AWAjA0QAkA2AABCQAABCgkA2QgiAyg1AXIgEACIgGABQgOAAgEgNg");
	this.shape_1.setTransform(7.7182,19.6979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Audiowave2, new cjs.Rectangle(0,0,17.4,39.4), null);


(lib.Audiowave1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BxQgCgIADgHQAEgHAIgCQAegJASgYQATgZAAgfQAAgegTgYQgSgZgdgIQgIgDgEgHQgDgHACgIQACgHAIgEQAHgEAIADQAoAMAbAjQAbAiAAArQAAAsgbAjQgbAigpANIgGABQgOAAgFgOg");
	this.shape.setTransform(7.9636,12.6479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C4866").s().p("Ag7BwQgCgHADgHQAEgHAIgDQAegIASgZQATgYAAgfQAAgegTgZQgRgYgegJQgIgCgEgHQgDgHACgIQACgIAIgDQAHgEAIACIADABQAnAOAZAgQAbAjAAArQAAArgbAjQgaAhgmANIgEABIgGABQgOAAgFgOg");
	this.shape_1.setTransform(6.0636,12.7136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Audiowave1, new cjs.Rectangle(0,0,14.1,25.4), null);


(lib.ArrowRDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AkngeIAzAXQAbgzArglQBKg9BrgEIALgBQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIABQhUADg5AvQgfAagVAlIA+AcIikByg");
	this.shape.setTransform(0,0.025,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArrowRDisabled, new cjs.Rectangle(-29.6,-16.1,59.2,32.3), null);


(lib.ArrowR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AkngeIAzAXQAbgzArglQBKg9BrgEIALgBQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIABQhUADg5AvQgfAagVAlIA+AcIikByg");
	this.shape.setTransform(0,1.175,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AkngeIAzAXQAbgzArglQBKg+BrgEIALAAQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIAAQhUAEg5AvQgfAagVAlIA+AcIikByg");
	this.shape_1.setTransform(0,-1.175,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArrowR, new cjs.Rectangle(-29.6,-17.3,59.2,34.7), null);


(lib.ArrowLDisabled = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AkngeIAzAXQAbgzArglQBKg9BrgEIALgBQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIABQhUADg5AvQgfAagVAlIA+AcIikByg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArrowLDisabled, new cjs.Rectangle(-29.6,-16.1,59.2,32.3), null);


(lib.ArrowL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AkngeIAzAXQAbgzArglQBKg9BrgEIALgBQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIABQhUADg5AvQgfAagVAlIA+AcIikByg");
	this.shape.setTransform(0,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AkngeIAzAXQAbgzArglQBKg+BrgEIALAAQB0ABBRBVQBRBUAAB1IhDAAQgBgsgQgpQgQgogdgdQgegfgmgRQgngSgqAAIgIAAQhUAEg5AvQgfAagVAlIA+AcIikByg");
	this.shape_1.setTransform(0,-1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArrowL, new cjs.Rectangle(-29.6,-17.3,59.2,34.7), null);


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

	// Layer_2
	this.instance = new lib.PrimaryAlert();
	this.instance.setTransform(11.5,10.1,1,1,0,0,0,3.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// referenceCircle_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC6F08").s().p("AieCfQhChBAAheQAAhcBChCQBChCBcAAQBeAABBBCQBCBCAABcQAABehCBBQhBBCheAAQhcAAhChCgAiXiXQg/BAAABXQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhXg/hAQg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape.setTransform(12.6,13.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADXQhYAAg/g/Qg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/BAAABXQAABZg/A/Qg/A/hZAAIAAAAg");
	this.shape_1.setTransform(12.6,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RowScaffoldExclamationDone, new cjs.Rectangle(-10.4,-9.5,46,46), null);


(lib.IconSpeakerPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ButtonAudioLoopStart:0,ButtonAudioLoopEnd:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.Speaker();
	this.instance.setTransform(-16.4,-1.45,1,1,0,0,0,16.3,28.6);

	this.instance_1 = new lib.Audiowave1();
	this.instance_1.setTransform(9.7,-0.65,1,1,0,0,0,7,12.7);

	this.instance_2 = new lib.Audiowave2();
	this.instance_2.setTransform(17.35,-0.5,1,1,0,0,0,8.7,19.7);

	this.instance_3 = new lib.Audiowave3();
	this.instance_3.setTransform(25.25,-0.55,1,1,0,0,0,10.3,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},4).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.instance},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.instance},{t:this.instance_3},{t:this.instance_2}]},4).to({state:[{t:this.instance},{t:this.instance_3}]},3).to({state:[{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-30,68.9,58.7);


(lib.IconFlipNumbergramDisabled = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconCard2NumbergramDisabled();
	this.icon.name = "icon";
	this.icon.setTransform(57.95,13);

	this.icon_1 = new lib.IconCard2Disabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(17,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_1},{t:this.icon}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhIhAICRAHIhPB6g");
	this.shape.setTransform(28.55,29.6,1,1,0,0,0,1.2,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhQBAIBXiIIBKCQg");
	this.shape_1.setTransform(48.0047,-7.7099,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0)","#CCCCCC"],[0,1],-14.8,-3,8.3,1.4).s().p("AiWBXQgMgGgEgMQgFgMAGgMQARgjAdgcIABAAQBHhHBjAAQBBAAA0AdQgQAcgSAZQgmgTgtAAQhJAAg1AzIAAABQgWAVgMAaQgGALgMAEQgGACgFAAQgHAAgGgDg");
	this.shape_2.setTransform(32.3286,-3.0237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(204,204,204,0)","#CCCCCC"],[0.004,1],15.9,2.8,-7.1,-0.2).s().p("AilA+IAIgNIAWgrQAlATAtAAQBKAAA0gzIAAAAQAVgVAMgYQAGgLANgEQAMgEAMAHQAMAGADAMQAEAMgGAMQgRAggbAaIAAABQhHBGhkAAQg9AAgzgag");
	this.shape_3.setTransform(43.3762,28.8138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipNumbergramDisabled, new cjs.Rectangle(0,-14.2,75,53.599999999999994), null);


(lib.IconFlipNumbergram = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconCard2Numbergram();
	this.icon.name = "icon";
	this.icon.setTransform(57.95,13);

	this.icon_1 = new lib.IconCard2();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(17,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_1},{t:this.icon}]}).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],15.9,2.8,-7.1,-0.2).s().p("AilA+IAIgNIAWgrQAlATAtAAQBKAAA0gzIAAAAQAVgVAMgYQAGgLANgEQAMgEAMAHQAMAGADAMQAEAMgGAMQgRAggbAaIAAABQhHBGhkAAQg9AAgzgag");
	this.shape.setTransform(43.3762,28.8138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-14.8,-3,8.3,1.4).s().p("AiWBXQgMgGgEgMQgFgMAGgMQARgjAdgcIABAAQBHhHBjAAQBBAAA0AdQgQAcgSAZQgmgTgtAAQhJAAg1AzIAAABQgWAVgMAaQgGALgMAEQgGACgFAAQgHAAgGgDg");
	this.shape_1.setTransform(32.3286,-3.0237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIhAICRAHIhPB6g");
	this.shape_2.setTransform(28.55,29.6,1,1,0,0,0,1.2,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIA6IBPh6IBCCBg");
	this.shape_3.setTransform(48,-7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipNumbergram, new cjs.Rectangle(-1,-14.2,77,54), null);


(lib.IconFlipCard2Selected = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconRotate2Active();
	this.icon.name = "icon";
	this.icon.setTransform(-2.45,0.25,1,1,0,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipCard2Selected, new cjs.Rectangle(-18.5,-17.1,41.2,34.3), null);


(lib.IconFlipCard2 = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconRotate2();
	this.icon.name = "icon";
	this.icon.setTransform(-1.65,0.25,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconFlipCard2, new cjs.Rectangle(-18.8,-18.1,43.2,36.3), null);


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
	this.check.setTransform(15.6,9.8,2.1754,2.1845,0,0,0,5.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F50").s().p("AhiBHIAAiLQAAgeAeAAICLAAQAWAAAGARQgGgCgHAAIiLAAQgeAAAAAeIAACLQAAAHACAGQgRgGAAgWg");
	this.shape.setTransform(12.425,12.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// down
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#294960").s().p("AhFBkQgeAAAAgeIAAiLQAAgeAeAAICLAAQAeAAAAAeIAACLQAAAegeAAg");
	this.shape_1.setTransform(12.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBkQgeAAAAgeIAAiLQAAgeAeAAICLAAQAeAAAAAeIAACLQAAAegeAAg");
	this.shape_2.setTransform(12.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// frame
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5799D1","#25619A"],[0.365,0.471],-3,-3,3,3).s().p("AhFB9Qg3AAAAg3IAAiLQAAg3A3AAICLAAQA3AAAAA3IAACLQAAA3g3AAg");
	this.shape_3.setTransform(12.5,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002F50").s().p("AhFCHQhBAAAAhBIAAiLQAAhBBBAAICLAAQBBAAAABBIAACLQAABBhBAAg");
	this.shape_4.setTransform(12.5185,13.0222,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAPopupCheckbox, new cjs.Rectangle(-1.5,-2,32.3,29), null);


(lib.DBLACircleButtonX_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.CircleButtonBase_Over();
	this.instance.setTransform(0,0,1.05,1.05);

	this.instance_1 = new lib.CircleButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.CircleIconX();
	this.icon.name = "icon";

	this.icon_1 = new lib.CircleIconXDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.CircleButtonBase_Red();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBase_Grey();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-45.6,91.30000000000001,91.30000000000001);


(lib.DBLACircleButtonHint_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.CircleButtonBase_Over();
	this.instance.setTransform(0,0,0.93,0.93);

	this.instance_1 = new lib.CircleButtonBase_Down();
	this.instance_1.setTransform(0,0,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// Layer 5
	this.icon = new lib.IconHint();
	this.icon.name = "icon";
	this.icon.setTransform(-0.1,-1.2,1,1,0,0,0,-0.1,-1.2);

	this.icon_1 = new lib.IconHintDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.1,-1.2,1,1,0,0,0,-0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.CircleButtonBase_Green();
	this.base.name = "base";
	this.base.setTransform(0,0,0.875,0.875);

	this.base_1 = new lib.CircleButtonBase_Grey();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:0.875,scaleY:0.875}}]}).to({state:[{t:this.base,p:{scaleX:0.93,scaleY:0.93}}]},5).to({state:[{t:this.base,p:{scaleX:0.84,scaleY:0.84}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-40.4,80.9,80.9);


(lib.DBLACircleButtonHelp_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.CircleButtonBase_Over();
	this.instance.setTransform(0,0,1.05,1.05);

	this.instance_1 = new lib.CircleButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.CircleIconHelp();
	this.icon.name = "icon";

	this.icon_1 = new lib.CircleIconHelpDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.CircleButtonBase_Orange();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBase_Grey();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-45.6,91.30000000000001,91.30000000000001);


(lib.DBLACircleButtonCheck_Tiny = function(mode,startPosition,loop,reversed) {
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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// highlights
	this.instance = new lib.CircleButtonBase_Over();
	this.instance.setTransform(0,0,0.4728,0.4728);

	this.instance_1 = new lib.CircleButtonBase_Down();
	this.instance_1.setTransform(0,0,0.4362,0.4362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// Layer 5
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";
	this.icon.setTransform(-0.05,-1.25,0.3944,0.3944,0,0,0,0,-1.2);

	this.icon_1 = new lib.IconCheckmarkDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.05,-1.3,0.39,0.39,0,0,0,0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{regY:-1.2,scaleX:0.3944,scaleY:0.3944,y:-1.25}}]}).to({state:[{t:this.icon,p:{regY:-1.4,scaleX:0.4095,scaleY:0.4095,y:-1.25}}]},5).to({state:[{t:this.icon,p:{regY:-1.4,scaleX:0.3705,scaleY:0.3705,y:-1.3}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.CircleButtonBase_Green_Tiny();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBase_Grey_Tiny();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.DBLAButtonUndo_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CD854E").ss(2,1,1).p("AE+iIIhtAAIlFgFIgEhhIjFCbIDICLIAFhaIFDgMIAAAHIADAAIgOCsImjgCIAABsIH3gEg");
	this.shape.setTransform(-0.175,-0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjeB/IGkACIANisIgDAAIAAgHIlHAGIgDBZIjAiEIDAiTIADBhIFGgCIBsAAIghFzIn4ADg");
	this.shape_1.setTransform(0.1,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CD854E").ss(2,1,1).p("AFWiQIh1AAIlegFIgEhnIjUCkIDWCTIAGhfIFcgNIAAAIIAEAAIgPC2InEgCIAAByIIegEg");
	this.shape_2.setTransform(-0.125,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjvCHIHEACIAPi2IgEAAIAAgIIlfAGIgEBfIjQiMIDPicIAEBnIFfgCIB1AAIgkGIIofAEg");
	this.shape_3.setTransform(0.15,-0.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AjeB/IGkACIANisIgDAAIAAgHIlHAGIgDBZIjAiEIDAiTIADBhIGygCIghFzIn4ADg");
	this.shape_4.setTransform(0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_4}]},5).wait(5));

	// shad
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,54,32,0.498)").s().p("AjrCJIGkABIAOitIgDAAIAAgLIk4AQIgIA8IjFh3IDFiaIAEBhIG6AMIg1F2In4AEg");
	this.shape_5.setTransform(-0.925,-3.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,54,32,0.498)").s().p("Aj9CRIHEABIAPi3IgDAAIAAgMIlQARIgJA/IjUh9IDUikIAEBnIHcANIg4GMIofAFg");
	this.shape_6.setTransform(-0.95,-3.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},5).to({state:[{t:this.shape_5}]},5).to({state:[]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Orange();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonSortRowSmall_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_SmlSquare_Over();
	this.instance.setTransform(0,0,1.05,1.05);

	this.instance_1 = new lib.ButtonBase_SmlSquare_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconSortRowSmall();
	this.icon.name = "icon";
	this.icon.setTransform(-0.5,-0.5,1,1,0,0,0,-0.1,-0.1);

	this.icon_1 = new lib.IconSortRowSmallGray();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,x:-0.5,y:-0.5}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05,x:-0.45,y:-0.45}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95,x:-0.5,y:-0.5}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_BlueSquareSmall();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.base_1 = new lib.ButtonBase_BlueSquareSmall_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1,y:0.05}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05,y:0.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95,y:0}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-25.1,54.6,50.400000000000006);


(lib.DBLAButtonSortRowMed_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_SmlRect_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_SmlRect_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconSortRowSmall();
	this.icon.name = "icon";
	this.icon.setTransform(-0.5,-0.5,1,1,0,0,0,-0.1,-0.1);

	this.icon_1 = new lib.IconSortRowSmallGray();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,x:-0.5,y:-0.5}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05,x:-0.45,y:-0.45}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95,x:-0.5,y:-0.5}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_BlueRectSmall();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.base_1 = new lib.ButtonBase_BlueRectSmall_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1,y:0.05}}]}).to({state:[{t:this.base,p:{scaleX:1.0499,scaleY:1.0499,y:0}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95,y:0}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-25.2,75.6,50.5);


(lib.DBLAButtonSlideArrowRight_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.ArrowR();
	this.icon.name = "icon";
	this.icon.setTransform(-0.2,-0.35,1,1,0,0,0,-0.2,-0.1);

	this.icon_1 = new lib.ArrowRDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.2,0.9,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,y:-0.35}}]}).to({state:[{t:this.icon,p:{scaleX:1.1,scaleY:1.1,y:-0.3}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95,y:-0.3}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonSlideArrowLeft_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.ArrowL();
	this.icon.name = "icon";
	this.icon.setTransform(-0.2,-0.1,1,1,0,0,0,-0.2,-0.1);

	this.icon_1 = new lib.ArrowLDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.2,0.9,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.1,scaleY:1.1}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonReset_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconReset();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconResetDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Orange();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonPVChart_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,Selected:20};
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(10));

	// icon
	this.icon = new lib.IconChart();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.3984},0).wait(10));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.instance_2 = new lib.ButtonUpBlue_Selected();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonPrinter_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.instance_2 = new lib.IconPrinter();
	this.instance_2.setTransform(0.05,-0.1,1.132,1.1473,0,0,0,38.9,26.9);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-3,-3,83,59);

	this.instance_3 = new lib.PrinterPage();
	this.instance_3.setTransform(-17.75,9.6,1,1,0,0,0,33,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:38.9,regY:26.9,scaleX:1.132,scaleY:1.1473,x:0.05,y:-0.1}}]}).to({state:[{t:this.instance_2,p:{regX:39,regY:27,scaleX:1.3499,scaleY:1.3681,x:0.2,y:0.05}},{t:this.instance_3}]},5).to({state:[{t:this.instance_2,p:{regX:38.9,regY:26.9,scaleX:1.0853,scaleY:1.1,x:0,y:-0.1}}]},5).to({state:[{t:this.instance_2,p:{regX:38.9,regY:26.9,scaleX:1.132,scaleY:1.1473,x:0.05,y:-0.1}}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(10).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(5).to(new cjs.ColorFilter(0.5,0.5,0.5,1,76.5,76.5,76.5,0), 0).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:5, endFrame:5, x:-3, y:-3, w:83, h:59});
	this.filterCacheList.push({instance: this.instance_2, startFrame:10, endFrame:10, x:-3, y:-3, w:83, h:59});
	this.filterCacheList.push({instance: this.instance_2, startFrame:15, endFrame:15, x:-3, y:-3, w:83, h:59});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonPlayNarration_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,Play:20};
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

	// Layer 5
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.186);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,1.073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(10));

	// IconNarration
	this.icon = new lib.iconNarration();
	this.icon.name = "icon";
	this.icon.setTransform(20.15,0);

	this.icon_1 = new lib.iconNarration_Disabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(20.15,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).to({state:[]},5).wait(5));

	// iconSpeaker
	this.icon_2 = new lib.Speaker();
	this.icon_2.name = "icon_2";
	this.icon_2.setTransform(-36.35,-30);

	this.icon_3 = new lib.SpeakerDisabled();
	this.icon_3.name = "icon_3";
	this.icon_3.setTransform(-36.35,-30);

	this.icon_4 = new lib.IconSpeakerPlay();
	this.icon_4.name = "icon_4";
	this.icon_4.setTransform(-3.85,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_2,p:{scaleX:1,scaleY:1,x:-36.35,y:-30}}]}).to({state:[{t:this.icon_2,p:{scaleX:1.1,scaleY:1.1,x:-40.3,y:-32.95}}]},5).to({state:[{t:this.icon_2,p:{scaleX:0.95,scaleY:0.95,x:-34.3,y:-28.95}}]},5).to({state:[{t:this.icon_3}]},5).to({state:[{t:this.icon_4}]},5).wait(5));

	// Layer 1
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";
	this.base.setTransform(0,0,1,1.1297);

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1,1.1297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base}]},5).to({state:[{t:this.base}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.base).wait(5).to({scaleX:1.05,scaleY:1.1861},0).wait(5).to({scaleX:0.95,scaleY:1.0732},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1,scaleY:1.1297},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-48.5,117.9,97.1);


(lib.DBLAButtonPlayList_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Play":20};
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

	// Layer 5
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.186);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,1.073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(10));

	// IconNarration
	this.icon = new lib.iconList();
	this.icon.name = "icon";
	this.icon.setTransform(20.15,0);

	this.icon_1 = new lib.iconListDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(20.15,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).to({state:[]},5).wait(5));

	// iconSpeaker
	this.icon_2 = new lib.Speaker();
	this.icon_2.name = "icon_2";
	this.icon_2.setTransform(-36.35,-30);

	this.icon_3 = new lib.SpeakerDisabled();
	this.icon_3.name = "icon_3";
	this.icon_3.setTransform(-36.35,-30);

	this.icon_4 = new lib.IconSpeakerPlay();
	this.icon_4.name = "icon_4";
	this.icon_4.setTransform(-3.85,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon_2,p:{scaleX:1,scaleY:1,x:-36.35,y:-30}}]}).to({state:[{t:this.icon_2,p:{scaleX:1.1,scaleY:1.1,x:-40.3,y:-32.95}}]},5).to({state:[{t:this.icon_2,p:{scaleX:0.95,scaleY:0.95,x:-34.3,y:-28.95}}]},5).to({state:[{t:this.icon_3}]},5).to({state:[{t:this.icon_4}]},5).wait(5));

	// Layer 1
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";
	this.base.setTransform(0,0,1,1.1297);

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1,1.1297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base}]},5).to({state:[{t:this.base}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.base).wait(5).to({scaleX:1.05,scaleY:1.1861},0).wait(5).to({scaleX:0.95,scaleY:1.0732},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1,scaleY:1.1297},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-48.5,117.9,97.1);


(lib.DBLAButtonPlayAudioSmall_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Selected":20};
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

	// highlights
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Aj2D2QhlhmAAiQQAAiPBlhnQBnhlCPAAQCQAABmBlQBnBngBCPQAACQhlBmIgBABQhmBliQAAQiPABhnhng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AkWEWQhzhzAAijQAAiiBzh0QB0hzCiAAQCjAABzBzQB0B0AACiQAACjhzBzIgBABQhzBzijAAQiiAAh0h0g");
	this.shape_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).to({state:[]},5).wait(10));

	// icon copy
	this.instance = new lib.iconSound();
	this.instance.setTransform(10.55,0.35,0.9882,0.9882,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.0376,scaleY:1.0376},0).wait(5).to({scaleX:0.9388,scaleY:0.9388},0).wait(5).to({scaleX:0.9882,scaleY:0.9882,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// icon
	this.instance_1 = new lib.iconSpeakerSmall();
	this.instance_1.setTransform(-8.8,-1,0.954,0.9555,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:1.0017,scaleY:1.0033},0).wait(5).to({scaleX:0.9063,scaleY:0.9077},0).wait(5).to({scaleX:0.954,scaleY:0.9555,alpha:0.5},0).wait(5).to({alpha:1},0).wait(5));

	// button
	this.base = new lib.CircleButtonBase_BlueSmall();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBase_GreySmall();
	this.base_1.name = "base_1";

	this.base_2 = new lib.CircleButtonBase_BlueSmallSelected();
	this.base_2.name = "base_2";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


(lib.DBLAButtonPlay_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconPlay();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconPlayDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonPause_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconPause();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconPauseDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonPackingWorkspace_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Selected":20};
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(10));

	// icon
	this.icon = new lib.IconWorkspace();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.3984},0).wait(10));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.instance_2 = new lib.ButtonUpBlue_Selected();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonOK_Up = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// button
	this.base = new lib.ButtonBase_OK();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonOK_Up, new cjs.Rectangle(-52,-48,104,96.1), null);


(lib.DBLAButtonOK_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_OK_Over();
	this.instance.setTransform(0,0,1.05,1.05);

	this.instance_1 = new lib.ButtonBase_OK_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconCheckmarkDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_OK();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.base_1 = new lib.ButtonBase_OK_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-50.4,109.2,100.9);


(lib.DBLAButtonOK_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.instance = new lib.ButtonBase_OK_Over();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// button
	this.base = new lib.ButtonBase_OK();
	this.base.name = "base";

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonOK_Over, new cjs.Rectangle(-52,-48,104,96.1), null);


(lib.DBLAButtonOK_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.instance = new lib.ButtonBase_OK_Down();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// button
	this.base = new lib.ButtonBase_OK();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonOK_Down, new cjs.Rectangle(-52,-48,104,96.1), null);


(lib.DBLAButtonOK_Disabled = function(mode,startPosition,loop,reversed) {
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
	this.icon = new lib.IconCheckmarkDisabled();
	this.icon.name = "icon";

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// button
	this.base = new lib.ButtonBase_OK_Disabled();
	this.base.name = "base";
	this.base.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAButtonOK_Disabled, new cjs.Rectangle(-50,-46,100,92.1), null);


(lib.DBLAButtonObjectRotation_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":4,"Down":9,"Disabled":14,Highlight:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AjPEiQgugBgdgfQgggfAAgsIAAltQAAgtAgggQAegeAtAAIGeAAQAuAAAeAeQAgAfAAAuIAAFtQgBAtgfAeQgeAfguABg");
	this.shape.setTransform(-0.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("Ai7EFQgpgBgbgcQgcgbAAgoIAAlJQAAgoAcgdQAcgbAogBIF2AAQAqABAbAbQAcAcAAApIAAFJQgBAogbAbQgbAcgqABg");
	this.shape_1.setTransform(-0.025,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},5).to({state:[]},5).wait(10));

	// Icon
	this.instance = new lib.IconObjectRotation();
	this.instance.setTransform(1.15,-1.15);

	this.instance_1 = new lib.IconObjectRotationDisabled();
	this.instance_1.setTransform(1.1,-1.1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95,x:1.1,y:-1.1},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1,scaleY:1,x:1.15,y:-1.15},0).wait(5));

	// ButtonBase_BlueSquareSmall
	this.instance_2 = new lib.ButtonBase_BlueSquareSmall_1();
	this.instance_2.setTransform(0,0,1.2,1.1998);

	this.instance_3 = new lib.ButtonBase_BlueSquareSmallDisabled();
	this.instance_3.setTransform(0,0,1.2,1.1998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_2}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:1.26,scaleY:1.2597},0).wait(5).to({scaleX:1.1371,scaleY:1.1369},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1.2,scaleY:1.1998},0).wait(5));

	// Highlight
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B87700").ss(1,0,1).p("Ai4lSIFxAAQC0AAAAC0IAAE9QAAC0i0AAIlxAAQi0AAAAi0IAAk9QAAi0C0AAg");
	this.shape_2.setTransform(-0.0059,0.0034,0.9584,0.9725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFE00").s().p("Ai4FTQi0AAAAi0IAAk9QAAi0C0AAIFxAAQC0AAAAC0IAAE9QAAC0i0AAg");
	this.shape_3.setTransform(-0.0059,0.0034,0.9584,0.9725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},19).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-34,72,68);


(lib.DBLAButtonNotEqual_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconNotEqual();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconNotEqualDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonNext_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconNext();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconNextDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonMoveRight_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.instance_2 = new lib.IconRiverBoxesLeft();
	this.instance_2.setTransform(-29.5,0.35,0.7137,0.7137,0,0,180,17.7,16.9);

	this.icon = new lib.IconBackward();
	this.icon.name = "icon";
	this.icon.setTransform(13.85,0.2,0.7623,0.7623,0,0,180,-0.1,-0.1);

	this.instance_3 = new lib.IconRiverBoxesDisabled();
	this.instance_3.setTransform(-28.6,0.35,0.7137,0.7137,0,0,180,17.7,16.9);

	this.icon_1 = new lib.IconBackDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(14.75,0.2,0.7623,0.7623,0,0,180,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{regX:-0.1,scaleX:0.7623,scaleY:0.7623,x:13.85,regY:-0.1,y:0.2}},{t:this.instance_2,p:{scaleX:0.7137,scaleY:0.7137,x:-29.5,y:0.35,regX:17.7}}]}).to({state:[{t:this.icon,p:{regX:-0.2,scaleX:0.8188,scaleY:0.8188,x:15.1,regY:-0.1,y:0.2}},{t:this.instance_2,p:{scaleX:0.7666,scaleY:0.7666,x:-31.4,y:0.4,regX:17.7}}]},5).to({state:[{t:this.icon,p:{regX:-0.1,scaleX:0.7199,scaleY:0.7199,x:12.85,regY:0,y:0.25}},{t:this.instance_2,p:{scaleX:0.674,scaleY:0.674,x:-28.05,y:0.4,regX:17.8}}]},5).to({state:[{t:this.icon_1},{t:this.instance_3}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(-0.25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonMoveLeft_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.instance_2 = new lib.IconRiverBoxesLeft();
	this.instance_2.setTransform(26.5,0.35,0.7137,0.7137,0,0,0,17.7,16.9);

	this.icon = new lib.IconBackward();
	this.icon.name = "icon";
	this.icon.setTransform(-16.85,0.2,0.7623,0.7623,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.IconRiverBoxesDisabled();
	this.instance_3.setTransform(26.6,0.35,0.7137,0.7137,0,0,0,17.7,16.9);

	this.icon_1 = new lib.IconBackDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-16.75,0.2,0.7623,0.7623,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{regX:-0.1,scaleX:0.7623,scaleY:0.7623,x:-16.85,regY:-0.1,y:0.2}},{t:this.instance_2,p:{scaleX:0.7137,scaleY:0.7137,x:26.5,y:0.35,regX:17.7}}]}).to({state:[{t:this.icon,p:{regX:-0.2,scaleX:0.8188,scaleY:0.8188,x:-18,regY:-0.1,y:0.2}},{t:this.instance_2,p:{scaleX:0.7666,scaleY:0.7666,x:28.5,y:0.4,regX:17.7}}]},5).to({state:[{t:this.icon,p:{regX:-0.1,scaleX:0.7199,scaleY:0.7199,x:-16.05,regY:0,y:0.25}},{t:this.instance_2,p:{scaleX:0.674,scaleY:0.674,x:24.85,y:0.4,regX:17.8}}]},5).to({state:[{t:this.icon_1},{t:this.instance_3}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(-0.25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonLT_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconLT();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconLTDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonJump_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconJump();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconJumpDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonGT_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconGT();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconGTDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonForward_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconForward();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconForwardDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonFlipAllnumbergram_P = function(mode,startPosition,loop,reversed) {
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

	// Layer 5
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// Layer 4
	this.instance_2 = new lib.IconFlipNumbergram();
	this.instance_2.setTransform(-0.25,-1.4,1,1,0,0,0,39,12.7);

	this.instance_3 = new lib.IconFlipNumbergramDisabled();
	this.instance_3.setTransform(-0.25,-1.4,1,1,0,0,0,39,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,regY:12.7,x:-0.25,y:-1.4}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.05,scaleY:1.05,regY:12.7,x:-0.25,y:-1.4}}]},5).to({state:[{t:this.instance_2,p:{scaleX:0.95,scaleY:0.95,regY:12.6,x:-0.2,y:-1.45}}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// Layer 1
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonFlip_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Selected":20};
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

	// highlights
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Aj2D2QhlhmAAiQQAAiPBlhnQBnhlCPAAQCQAABmBlQBnBngBCPQAACQhlBmIgBABQhmBliQAAQiPABhnhng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AkWEWQhzhzAAijQAAiiBzh0QB0hzCiAAQCjAABzBzQB0B0AACiQAACjhzBzIgBABQhzBzijAAQiiAAh0h0g");
	this.shape_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).to({state:[]},5).wait(10));

	// icon
	this.instance = new lib.IconFlipCard2();
	this.instance.setTransform(0,-1.6);

	this.instance_1 = new lib.IconFlipCard2Selected();
	this.instance_1.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.05,scaleY:1.05,y:-1.55},0).wait(5).to({scaleX:0.95,scaleY:0.95,y:-1.6},0).wait(5).to({scaleX:1,scaleY:1,alpha:0.5},0).to({_off:true},5).wait(5));

	// button
	this.base = new lib.CircleButtonBase_BlueSmall();
	this.base.name = "base";

	this.base_1 = new lib.CircleButtonBase_GreySmall();
	this.base_1.name = "base_1";

	this.base_2 = new lib.CircleButtonBase_BlueSmallSelected();
	this.base_2.name = "base_2";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base_2}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


(lib.DBLAButtonExit_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconExit();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconExitDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Red();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonEqual_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconEqual();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconEqualDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonDone_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconCheckmark();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconCheckmarkDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonContinue_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconContinue();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconContinueDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonClose_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconX();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconXDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Red();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonCancel_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconCancel();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconCancelDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Red();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonBackward_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconBackward();
	this.icon.name = "icon";
	this.icon.setTransform(-2.9,-0.1,0.9694,0.9694,0,0,0,-0.1,-0.1);

	this.icon_1 = new lib.IconBackwardDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-2.3,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:0.9694,scaleY:0.9694,x:-2.9,y:-0.1}}]}).to({state:[{t:this.icon,p:{scaleX:1.1232,scaleY:1.1232,x:-0.15,y:0.3}}]},5).to({state:[{t:this.icon,p:{scaleX:0.9499,scaleY:0.9499,x:-0.2,y:0.25}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonBack_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.05);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.IconBack();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconBackDisabled();
	this.icon_1.name = "icon_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Green();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonAudioReplay_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Highlight":20,"Play":25};
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAVCTIhJgsQgHgEgBgGQgBgHACgGQAEgGAGgBQAHgCAFADIBKAtQAFADABAGQADAHgEAGQgDAGgHACIgDAAQgFAAgDgCgAgnAQQgGAAgFgFQgFgFAAgGQAAgGAFgFQAFgFAGAAIBVAAQAGAAAFAFQAFAFgBAGQABAGgFAFQgFAFgGAAgAgxhIQgGgBgEgGQgCgGABgHQABgGAHgEIBJgsQAFgDAGACQAHABADAGQAEAGgDAHQgBAGgFADIhKAtQgDACgEAAIgFgBg");
	this.shape.setTransform(15.85,-7.503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.shape}]},5).to({state:[]},5).wait(10));

	// icon
	this.instance_2 = new lib.ear_icon();
	this.instance_2.setTransform(-0.1,-0.15,0.8799,0.8816,0,0,0,24.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:0.96,scaleY:0.9618,y:-0.1},0).wait(5).to({regX:25.9,regY:24.9,scaleX:0.84,scaleY:0.8417,x:-0.25,y:-0.05},0).wait(5).to({regX:24.9,regY:25.9,scaleX:0.8799,scaleY:0.8816,x:-0.1,y:-0.15,alpha:0.2813},0).wait(5).to({alpha:1},0).wait(10));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base}]},5).to({state:[{t:this.base}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base}]},5).to({state:[{t:this.base}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.base).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(5).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1,scaleY:1},0).wait(10));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmkGpQhBgBgtgtQguguAAhBIAAoYQAAhAAuguQAtgtBBgBINJAAQBAAAAuAtIAAABQAtAuABBAIAAIZQgBBAgtAuIAAAAQguAthAABg");
	this.shape_1.setTransform(0.025,0);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonAudio_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":5,"Down":10,"Disabled":15,"Play":20};
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

	// Layer 5
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.186);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,1.073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(10));

	// Layer 4
	this.icon = new lib.IconSpeaker();
	this.icon.name = "icon";

	this.icon_1 = new lib.IconSpeakerDisabled();
	this.icon_1.name = "icon_1";

	this.icon_2 = new lib.IconSpeakerPlay();
	this.icon_2.name = "icon_2";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).to({state:[{t:this.icon_2}]},5).wait(5));

	// Layer 1
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";
	this.base.setTransform(0,0,1,1.1297);

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";
	this.base_1.setTransform(0,0,1,1.1297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).to({state:[{t:this.base}]},5).to({state:[{t:this.base}]},5).to({state:[{t:this.base_1}]},5).to({state:[{t:this.base}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.base).wait(5).to({scaleX:1.05,scaleY:1.1861},0).wait(5).to({scaleX:0.95,scaleY:1.0732},0).to({_off:true},5).wait(5).to({_off:false,scaleX:1,scaleY:1.1297},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-48.5,117.9,97.1);


(lib.DBLAButtonAddArrowRight_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.ArrowR();
	this.icon.name = "icon";
	this.icon.setTransform(-0.2,-0.35,1,1,0,0,0,-0.2,-0.1);

	this.icon_1 = new lib.ArrowRDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.2,0.9,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1,y:-0.35}}]}).to({state:[{t:this.icon,p:{scaleX:1.1,scaleY:1.1,y:-0.3}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95,y:-0.3}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


(lib.DBLAButtonAddArrowLeft_P = function(mode,startPosition,loop,reversed) {
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

	// highlights
	this.instance = new lib.ButtonBase_Over();
	this.instance.setTransform(0,0,1.0499,1.0499);

	this.instance_1 = new lib.ButtonBase_Down();
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// icon
	this.icon = new lib.ArrowL();
	this.icon.name = "icon";
	this.icon.setTransform(-0.2,-0.1,1,1,0,0,0,-0.2,-0.1);

	this.icon_1 = new lib.ArrowLDisabled();
	this.icon_1.name = "icon_1";
	this.icon_1.setTransform(-0.2,0.9,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.icon,p:{scaleX:1.1,scaleY:1.1}}]},5).to({state:[{t:this.icon,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.icon_1}]},5).wait(5));

	// button
	this.base = new lib.ButtonBase_Blue();
	this.base.name = "base";

	this.base_1 = new lib.ButtonBase_Disabled();
	this.base_1.name = "base_1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.base,p:{scaleX:1.05,scaleY:1.05}}]},5).to({state:[{t:this.base,p:{scaleX:0.95,scaleY:0.95}}]},5).to({state:[{t:this.base_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-43,117.9,86);


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
	this.inst_correctIcon.setTransform(10.35,10.25,1.3287,1.3287,0,0,0,23.1,22.9);
	this.inst_correctIcon.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.inst_correctIcon).to({scaleX:0.9365,scaleY:0.9365,alpha:0.9297},8,cjs.Ease.quartIn).to({scaleX:1.0457,scaleY:1.0457,x:10.3,alpha:1},1).to({scaleX:1,scaleY:1,y:10.2},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-32.2,59.9,59.900000000000006);


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
	this.inst_correctIcon.setTransform(10.35,10.25,1.3287,1.3287,0,0,0,23.1,22.9);
	this.inst_correctIcon.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.inst_correctIcon).to({scaleX:0.9365,scaleY:0.9365,alpha:0.9297},8,cjs.Ease.quartIn).to({scaleX:1.0457,scaleY:1.0457,x:10.3,alpha:1},1).to({scaleX:1,scaleY:1,y:10.2},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-32.2,59.9,59.900000000000006);


// stage content:
(lib.PrimaryButtons = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DBLAButtonAddArrowRight_P();
	this.instance.setTransform(588.85,367.5);

	this.instance_1 = new lib.DBLAButtonAddArrowLeft_P();
	this.instance_1.setTransform(458.1,367.5);

	this.instance_2 = new lib.DBLACircleButtonCheck_Tiny();
	this.instance_2.setTransform(682.1,-43.8);

	this.instance_3 = new lib.DBLAButtonSlideArrowLeft_P();
	this.instance_3.setTransform(458.1,462.8);

	this.instance_4 = new lib.DBLAButtonSlideArrowRight_P();
	this.instance_4.setTransform(582.55,462.8);

	this.instance_5 = new lib.DBLACircleButtonX_P();
	this.instance_5.setTransform(424.8,-30.55);

	this.instance_6 = new lib.DBLACircleButtonHint_P();
	this.instance_6.setTransform(335,-35.75);

	this.instance_7 = new lib.DBLACircleButtonHelp_P();
	this.instance_7.setTransform(520.8,-30.55);

	this.instance_8 = new lib.DBLAButtonUndo_P();
	this.instance_8.setTransform(584.55,71.65);

	this.instance_9 = new lib.DBLAButtonReset_P();
	this.instance_9.setTransform(584.55,172.1);

	this.instance_10 = new lib.DBLAButtonPVChart_P();
	this.instance_10.setTransform(210.6,73.65);

	this.instance_11 = new lib.DBLAButtonPrinter_P();
	this.instance_11.setTransform(584.55,273);

	this.instance_12 = new lib.DBLAButtonPlayList_P();
	this.instance_12.setTransform(334.65,179.4);

	this.instance_13 = new lib.DBLAButtonPlayNarration_P();
	this.instance_13.setTransform(334.65,78.55);

	this.instance_14 = new lib.DBLAButtonPlayAudioSmall_P();
	this.instance_14.setTransform(251.75,-38.85);

	this.instance_15 = new lib.DBLAButtonPlay_P();
	this.instance_15.setTransform(336.65,382.9);

	this.instance_16 = new lib.DBLAButtonPause_P();
	this.instance_16.setTransform(212.6,382.9);

	this.instance_17 = new lib.DBLAButtonPackingWorkspace_P();
	this.instance_17.setTransform(210.6,275);

	this.instance_18 = new lib.DBLAButtonOK_P();
	this.instance_18.setTransform(340.85,482.65);

	this.instance_19 = new lib.DBLAButtonObjectRotation_P();
	this.instance_19.setTransform(70.55,-29.45);

	this.instance_20 = new lib.DBLAButtonNotEqual_P();
	this.instance_20.setTransform(81.7,593.9);

	this.instance_21 = new lib.DBLAButtonNext_P();
	this.instance_21.setTransform(73.55,489.8);

	this.instance_22 = new lib.DBLAButtonMoveRight_P();
	this.instance_22.setTransform(79.7,75.65);

	this.instance_23 = new lib.DBLAButtonMoveLeft_P();
	this.instance_23.setTransform(-55.45,75.65);

	this.instance_24 = new lib.DBLAButtonLT_P();
	this.instance_24.setTransform(-67.6,382.9);

	this.instance_25 = new lib.DBLAButtonJump_P();
	this.instance_25.setTransform(-177.95,75.65);

	this.instance_26 = new lib.DBLAButtonGT_P();
	this.instance_26.setTransform(73.55,382.9);

	this.instance_27 = new lib.DBLAButtonForward_P();
	this.instance_27.setTransform(79.7,174.25);

	this.instance_28 = new lib.DBLAButtonFlipAllnumbergram_P();
	this.instance_28.setTransform(-177.95,275);

	this.instance_29 = new lib.DBLAButtonFlip_P();
	this.instance_29.setTransform(611.85,-38.85);

	this.instance_30 = new lib.DBLAButtonExit_P();
	this.instance_30.setTransform(460.1,73.65);

	this.instance_31 = new lib.DBLAButtonEqual_P();
	this.instance_31.setTransform(224.3,593.9);

	this.instance_32 = new lib.DBLAButtonDone_P();
	this.instance_32.setTransform(212.6,480.9);

	this.instance_33 = new lib.DBLAButtonContinue_P();
	this.instance_33.setTransform(-57.45,593.9);

	this.instance_34 = new lib.DBLAButtonClose_P();
	this.instance_34.setTransform(460.1,172.25);

	this.instance_35 = new lib.DBLAButtonCancel_P();
	this.instance_35.setTransform(460.1,273);

	this.instance_36 = new lib.DBLAButtonBackward_P();
	this.instance_36.setTransform(-55.45,174.1);

	this.instance_37 = new lib.DBLAButtonBack_P();
	this.instance_37.setTransform(-67.6,480.9);

	this.instance_38 = new lib.DBLAButtonAudioReplay_P();
	this.instance_38.setTransform(210.6,174.25);

	this.instance_39 = new lib.DBLAButtonAudio_P();
	this.instance_39.setTransform(334.65,280.3);

	this.instance_40 = new lib.DBLAButtonSortRowSmall_P();
	this.instance_40.setTransform(-1.45,-36.5);

	this.instance_41 = new lib.DBLAButtonSortRowMed_P();
	this.instance_41.setTransform(-77.5,-36.5);

	this.instance_42 = new lib.DBLAPopupCheckbox();
	this.instance_42.setTransform(879.4,170.9,1,1,0,0,0,5.8,11.7);

	this.instance_43 = new lib.DBLAAnimatedIncorrectSticker();
	this.instance_43.setTransform(874.85,74.85,1,1,0,0,0,-13.3,-12.2);

	this.instance_44 = new lib.DBLAAnimatedCorrectSticker();
	this.instance_44.setTransform(800.6,74.85,1,1,0,0,0,-13.3,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.instance_11.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(40.9,126,873.6,508.9);
// library properties:
lib.properties = {
	id: '3B047CC1E01B4F76813838FE1500A055',
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
an.compositions['3B047CC1E01B4F76813838FE1500A055'] = {
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