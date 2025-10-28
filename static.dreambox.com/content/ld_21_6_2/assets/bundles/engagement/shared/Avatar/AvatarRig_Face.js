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


(lib.pelvis = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AKoAAQAADbjHCbQjHCckaAAQkZAAjHicQjHibAAjbQAAjbDHibQDHibEZAAQEaAADHCbQDHCbAADbg");
	this.shape.setTransform(192.5,95.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A+2UUMAAAgonMA9tAAAMAAAAongArZldQAADcDHCaQDHCcEaAAQEZAADHicQDHiaAAjcQAAjbjHicQjHiakZgBQkaABjHCaQjHCcAADbIAAAAgAoSAZQjHiaAAjcQAAjbDHicQDHiaEagBQEZABDHCaQDHCcAADbQAADcjHCaQjHCckZAAQkaAAjHicgAJ2ldIAAAAg");
	this.shape_1.setTransform(197.5,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pelvis, new cjs.Rectangle(0,0,395,260), null);


(lib.neck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AikknQAAgCAAgCQAAhEAwgxQAtgtA+gCQAFgBAEAAQBEAAAxAwQAwAxAABEQAAACAAADQgCBCguAuQgxAwhEAAQgEAAgFAAQg+gDgtgtQgvgvgBhCgADBDwQACANAAARQAABRg5A5Qg5A5hRAAIgEAAQhOgCg3g3Qg5g5AAhRQAAgfAIgaQANgtAkgkQA3g2BOgDIAEAAQBRAAA5A5QAuAuAJA+gAClkmIAcIWAi6DVIAWn8");
	this.shape.setTransform(76.5,63.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("Ar8KZIAA0xIX5AAIAAUxgAjCDwQAABRA5A5QA3A4BOACIAEAAQBRAAA5g6QA5g5AAhRQAAgQgCgNQACANAAAQQAABRg5A5Qg5A6hRAAIgEAAQhOgCg3g4Qg5g5AAhRQAAgfAIgaQANgtAkgjQA3g3BOgDIAEAAQBRABA5A5QAuAuAJA+IgcoXIAcIXQgJg+guguQg5g5hRgBIgEAAQhOADg3A3QgkAjgNAtIAWn7IgWH7QgIAaAAAfIAAAAgAh0jUQAtAtA+ADIAJAAQBFABAvgxQAvguAChCIAAgEQAAhFgxgwQgvgxhFAAIgJABQg+ADgtAtQgwAwAABFIAAAEQACBCAuAugAi6C3gAgJikQg+gDgtgtQgugugChCIAAgEQAAhFAwgwQAtgtA+gDIAJgBQBFAAAvAxQAxAwAABFIAAAEQgCBCgvAuQgvAxhFgBIgJAAgAiklEIAAAAg");
	this.shape_1.setTransform(76.5,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neck, new cjs.Rectangle(0,0,153,133), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AovhIQJCEjIdkj");
	this.shape.setTransform(295.5,439.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKApfMAAAhS9MBcVAAAMAAABS9gAIwaCQkOCRkYAAQkXAAkiiRQEiCREXAAQEYAAEOiRg");
	this.shape_1.setTransform(295.5,265.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,591,531), null);


(lib.head = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("ASWiyQgPHph8DWQAnDYgbB1QgcB1lSCaQlRCamEgSQmFgSkriAQkqiAgRh9QgSh9gBkAQhUiugWncQgWndFhk8QFhk8HrAJQHsAIFaEmQFbEmgOHrg");
	this.shape.setTransform(303.0608,362.0206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKApfMAAAhS9MBcVAAAMAAABS9gEABwAi4QFQAAEoiEIAEgCIAEgBIAFgDQFSiZAbh2QAMgwAAhCQAAhcgXh/IAEgGQB4jXAOnjQgOHjh4DXIgEAGQAXB/AABcQAABCgMAwQgbB2lSCZIgFADIgEABIgEACQkoCElQAAIgBAAIAAAAQgkAAglgCIAAAAIgDAAIAAAAIgFAAQmEgSkqiAQkqh/gRh+QgSh9gBj/QhUivgWndIgCg5QABm3FLkpIASgOIAAAAQFSkkHOAAIABAAIAAAAIAWAAIADAAQHsAIFbElQFNEbAAHQIgBAmIABgmQAAnQlNkbQlbklnsgIIgDAAIgWAAIAAAAIgBAAQnOAAlSEkIAAAAIgSAOQlLEpgBG3IACA5QAWHdBUCvQABD/ASB9QARB+EqB/QEqCAGEASIAFAAIAAAAIADAAIAAAAQAlACAkAAIAAAAIABAAg");
	this.shape_1.setTransform(295.5,265.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,591,531), null);


(lib.hairfront = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF9900").ss(0.1,1,1).p("Av1htQP0vGPHPGIhkSlQGGk2Buu1QjVtQyYg0Q1rBvAvN5QBdOlFvCcg");
	this.shape.setTransform(304.425,322.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKAtPMAAAhadMBcVAAAMAAABadgAO7V9QGGk2Buu2QjUtPyag0Q09BsABNDIABA4QBeOnFuCbIhuxgIBuRgQluibheunIgBg4QgBtDU9hsQSaA0DUNPQhuO2mGE2IBkymQvHvFv0PFQP0vFPHPFg");
	this.shape_1.setTransform(295.5,289.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hairfront, new cjs.Rectangle(0,0,591,579), null);


(lib.hairback = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF9900").ss(0.1,1,1).p("AW0AAQAAJdmrGsQmsGrpdAAQpcAAmsmrQjwjxhpkpQhSjmAAkJQAApcGrmsQGsmrJcAAQJdAAGsGrQDHDIBqDuQB6EQAAFCg");
	this.shape.setTransform(303,345);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKAtPMAAAhadMBcVAAAMAAABadgA1oIrQAAEJBSDmQBpEpDwDxQGsGrJcAAQJdAAGsmrQGrmsAApdQAAlDh6kPQhqjujHjIQmsmrpdAAQpcAAmsGrQmrGsAAJcIAAAAgAu9Y0QjwjxhpkpQhSjmAAkJQAApcGrmsQGsmrJcAAQJdAAGsGrQDHDIBqDuQB6EPAAFDQAAJdmrGsQmsGrpdAAQpcAAmsmrgAX/IrIAAAAg");
	this.shape_1.setTransform(295.5,289.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hairback, new cjs.Rectangle(0,0,591,579), null);


(lib.forearm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("Ak+ifQgagyAAg+QAAhoBJhJQBKhJBnAAQBnAABJBJQAgAgASAnQAXAwAAA6QAABnhJBJQgQAQgRAMQAAAAABAAQB7AABWBWQA3A3AUBGQAJAgACAiQAAAJAAAIQAAB7hWBWQhWBWh7AAQh5AAhXhWQhKhLgKhmQgCgPAAgRQAAgQACgPQAJhmBLhLQAYgXAbgSQhfgEhFhFQgdgdgSgjgACEl5QCrESAfD3AAxhDQg+AuhRAAQgHAAgGgBQBFgsBXgBgAjyEDQABgfgBggQgGiyhGix");
	this.shape.setTransform(83.05,81.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AwoN6IAA7zMAhRAAAIAAbzgAneCbQAAAQABAQQAKBmBKBLQBYBWB5AAQB7AABVhWQBWhXAAh6IAAgRQgCgigIggQggj4ipkSQgSgmghghQhJhJhoAAQhnAAhJBJQhKBKAABnQAAA+AaAzQgagzAAg+QAAhnBKhKQBJhJBnAAQBoAABJBJQAhAhASAmQAWAxAAA5QABBohKBJQgQAQgRAMIABAAQB7AABVBWQA4A3AUBGQAIAgACAiIAAARQAAB6hWBXQhVBWh7AAQh5AAhYhWQhKhLgKhmIABggIgBggQAKhlBKhLQAZgXAbgSIAMABQBSAAA+guQhXAAhFAtQhggEhEhFQgegdgSgjQASAjAeAdQBEBFBgAEQgbASgZAXQhKBLgKBlQgGiwhGiyQBGCyAGCwQgBAQAAAQIAAAAgAndC7QgBgQAAgQQAAgQABgQIABAgIgBAgIAAAAgAAYg1QhVhWh7AAIgBAAQARgMAQgQQBKhJgBhoQAAg5gWgxQCpESAgD4QgUhGg4g3gAlVheQBFgtBXAAQg+AuhSAAIgMgBgAhlnCIAAAAg");
	this.shape_1.setTransform(106.5,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forearm, new cjs.Rectangle(0,0,213,178), null);


(lib.eyes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AKyAAQAABHgyAxQgxAyhHAAQhHAAgygyQgxgxAAhHQAAhGAxgyQAygxBHAAQBHAAAxAxQAyAyAABGgAldAAQAABHgyAxQgxAyhHAAQhHAAgygyQgxgxAAhHQAAhGAxgyQAygxBHAAQBHAAAxAxQAyAyAABGg");
	this.shape.setTransform(304,395.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKApfMAAAhS9MBcVAAAMAAABS9gAGzUYQAABHAyAyQAxAxBHAAQBGAAAygxQAygyAAhHQAAhGgygyQgygxhGAAQhHAAgxAxQgyAyAABGIAAAAgApcUYQAABHAxAyQAzAxBGAAQBHAAAxgxQAygyAAhHQAAhGgygyQgxgxhHAAQhGAAgzAxQgxAyAABGIAAAAgAHlWRQgygyAAhHQAAhGAygyQAxgxBHAAQBGAAAyAxQAyAyAABGQAABHgyAyQgyAxhGAAQhHAAgxgxgAorWRQgxgyAAhHQAAhGAxgyQAzgxBGAAQBHAAAxAxQAyAyAABGQAABHgyAyQgxAxhHAAQhGAAgzgxgAMHUYIAAAAgAkIUYIAAAAg");
	this.shape_1.setTransform(295.5,265.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,591,531), null);


(lib.eyebrows = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AkDBlQiNjAlTADADIBbQDTjVFJAY");
	this.shape.setTransform(301,319.9294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKApfMAAAhS9MBcVAAAMAAABS9gAjMKFIgEgFQiLi5lFAAIAAAAIAAAAIgMAAIAMAAIAAAAIAAAAQFFAACLC5IAEAFIAAAAgAD/J7IAGgFQC8i7EYAAIABAAIAAAAQAeAAAfACIAEAAIgEAAQgfgCgeAAIAAAAIgBAAQkYAAi8C7IgGAFg");
	this.shape_1.setTransform(295.5,265.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows, new cjs.Rectangle(0,0,591,531), null);


(lib.ear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AETBKQgsCmhxBgQhwBfhxgeQhygfgxiKQgxiLAtilQAsinBwhfQBwhgBxAeQByAfAxCLQAyCLgtClg");
	this.shape.setTransform(51.0694,118.0779);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AwURqMAAAgjTMAgpAAAMAAAAjTgApJHLQBSAABShDIAGgFQBwhgAtimQgtCmhwBgIgGAFQhSBDhSAAIgBAAIAAAAQgaAAgagHIgCAAIgBgBQhygegxiLQgahIAAhQQAAhJAWhOQAsinBwhgQBVhIBWAAIAAAAIAAAAQAcAAAbAHQByAeAxCMQAaBJAABRQAABHgVBPQAVhPAAhHQAAhRgahJQgxiMhygeQgbgHgcAAIAAAAIAAAAQhWAAhVBIQhwBggsCnQgWBOAABJQAABQAaBIQAxCLByAeIABABIACAAQAaAHAaAAIAAAAIABAAg");
	this.shape_1.setTransform(104.5,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear, new cjs.Rectangle(0,0,209,226), null);


(lib.chest = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("AosmqQEqiGEVABQESABEJCEIBZJ/Qp9K3qQq3g");
	this.shape.setTransform(173.275,128.295);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A7GU8MAAAgp3MA2NAAAMAAAAp3gAqJCcQFJFbFDAAQFDAAE/lbIhZp/QkJiEkSgBIgCgBIgCAAIgBAAQkQABklCCIgBABIgFACIAFgCIABgBQEliCEQgBIABAAIACAAIACABQESABEJCEIBZJ/Qk/FblDAAQlDAAlJlbIBap/IhaJ/g");
	this.shape_1.setTransform(173.5,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chest, new cjs.Rectangle(0,0,347,268), null);


(lib.c_pelvis = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AKoAAQAADbjHCbQjHCckaAAQkZAAjHicQjHibAAjbQAAjbDHibQDHibEZAAQEaAADHCbQDHCbAADbg");
	this.shape.setTransform(192.5,95.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A+2UUMAAAgonMA9tAAAMAAAAongArZldQAADcDHCaQDHCcEaAAQEZAADHicQDHiaAAjcQAAjbjHicQjHiakZgBQkaABjHCaQjHCcAADbIAAAAgAoSAZQjHiaAAjcQAAjbDHicQDHiaEagBQEZABDHCaQDHCcAADbQAADcjHCaQjHCckZAAQkaAAjHicgAJ2ldIAAAAg");
	this.shape_1.setTransform(197.5,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_pelvis, new cjs.Rectangle(0,0,395,260), null);


(lib.c_forearm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("Ak+ifQgagyAAg+QAAhoBJhJQBKhJBnAAQBnAABJBJQAgAgASAnQAXAwAAA6QAABnhJBJQgQAQgRAMQAAAAABAAQB7AABWBWQA3A3AUBGQAJAgACAiQAAAJAAAIQAAB7hWBWQhWBWh7AAQh5AAhXhWQhKhLgKhmQABgfgBggQAJhmBLhLQAYgXAbgSQBFgsBXgBQg+AuhRAAQgHAAgGgBQhfgEhFhFQgdgdgSgjgACEl5QCrESAfD3AjyEDQgCgPAAgRQAAgQACgPQgGiyhGix");
	this.shape.setTransform(83.05,81.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AwoN6IAA7zMAhRAAAIAAbzgAndC7QAKBmBKBLQBYBWB5AAQB7AABVhWQBWhXAAh6IAAgRQgCgigIggQggj4ipkSQgSgmghghQhJhJhoAAQhnAAhJBJQhKBKAABnQAAA+AaAzQgagzAAg+QAAhnBKhKQBJhJBnAAQBoAABJBJQAhAhASAmQAWAxAAA5QABBohKBJQgQAQgRAMQg+AuhSAAIgMgBQBFgtBXAAQhXAAhFAtQhggEhEhFQgegdgSgjQBGCyAGCwQgBAQAAAQQAAAQABAQQgBgQAAgQQAAgQABgQIABAgIgBAgIAAAAgAmJFsQhKhLgKhmIABggIgBggQAKhlBKhLQAZgXAbgSIAMABQBSAAA+guIABAAQB7AABVBWQA4A3AUBGQAIAgACAiIAAARQAAB6hWBXQhVBWh7AAQh5AAhYhWgAopjnQASAjAeAdQBEBFBgAEQgbASgZAXQhKBLgKBlQgGiwhGiygAAYg1QhVhWh7AAIgBAAQARgMAQgQQBKhJgBhoQAAg5gWgxQCpESAgD4QgUhGg4g3gAopjnIAAAAgAhlnCIAAAAg");
	this.shape_1.setTransform(106.5,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_forearm, new cjs.Rectangle(0,0,213,178), null);


(lib.c_eyeacc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AiaAAIE1AAIAApIIPKAAIAASRIvKAAIAApJAiaAAIAAJJIvKAAIAAyRIPKAAg");
	this.shape.setTransform(304.5,378.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EguKApfMAAAhS9MBcVAAAMAAABS9gAD1ayIPKAAIAAySIvKAAIAAJJIAAJJgAwKayIPKAAIAApJIE1AAIk1AAIAApJIvKAAIAASSgAD1ayIAApJIAApJIPKAAIAASSgAwKayIAAySIPKAAIAAJJIAAJJgAD1Rpg");
	this.shape_1.setTransform(295.5,265.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_eyeacc, new cjs.Rectangle(0,0,591,531), null);


(lib.c_chest = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AosmqQEqiGEVABQESABEJCEIBZJ/Qp9K3qQq3g");
	this.shape.setTransform(173.275,128.295);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A7GU8MAAAgp3MA2NAAAMAAAAp3gAqJCcQFJFbFDAAQFDAAE/lbIhZp/QkJiEkSgBIgCgBIgCAAIgBAAQkQABklCCIgBABIgFACIAFgCIABgBQEliCEQgBIABAAIACAAIACABQESABEJCEIBZJ/Qk/FblDAAQlDAAlJlbIBap/IhaJ/g");
	this.shape_1.setTransform(173.5,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_chest, new cjs.Rectangle(0,0,347,268), null);


(lib.c_arm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AixmZQAHAGAIAHQAtAvAABBQAABBgtAuQguAuhCAAQg4AAgqghQgGgGgHgHQgvguAAhBQAAhBAvgvQAuguBBAAQA3AAAqAhQEzCPDbExQAIAHAJAIQBDBDAABeQAABehDBCQhDBEheAAQheAAhDhEQgSgSgOgVQgig1AAhEQAAheBChDQBDhCBeAAQBSAAA+AzAAMFQImAnw");
	this.shape.setTransform(67.3,105.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AtbOsIAA9XIa3AAIAAdXgAiuHCQAOAUASASQBDBEBdAAQBeAABDhEQBChCAAheQAAhehChDIgRgPQjakxk1iPQgpghg3AAQhBAAguAuQgvAvAABBQAABCAvAtIAOANQApAhA4AAQBCABAtgvQAvgtgBhCQABhBgvgvIgPgNQE1CPDaExQg9g0hTAAQhdAAhDBDQhCBDAABeQAABEAiA2ImAnxIGAHxIAAAAgAiOHoQgSgSgOgUQgig2AAhEQAAheBChDQBDhDBdAAQBTAAA9A0IARAPQBCBDAABeQAABehCBCQhDBEheAAQhdAAhDhEgAiuHCgAougvIgOgNQgvgtAAhCQAAhBAvgvQAuguBBAAQA3AAApAhIAPANQAvAvgBBBQABBCgvAtQgtAvhCgBQg4AAgpghgAltkoIAAAAg");
	this.shape_1.setTransform(86,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_arm, new cjs.Rectangle(0,0,172,188), null);


(lib.arm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF00FF").ss(0.1,1,1).p("Al0igQgGgGgHgHQgvguAAhBQAAhBAvgvQAuguBBAAQA3AAAqAhQAHAGAIAHQAtAvAABBQAABBgtAuQguAuhCAAQg4AAgqghgAAMFQQgig1AAhEQAAheBChDQBDhCBeAAQBSAAA+AzQAIAHAJAIQBDBDAABeQAABehDBCQhDBEheAAQheAAhDhEQgSgSgOgVImAnwAixmZQEzCPDbEx");
	this.shape.setTransform(67.3,105.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AtbOsIAA9XIa3AAIAAdXgAiuHCQAOAUASASQBDBEBdAAQBeAABDhEQBChCAAheQAAhehChDIgRgPQjakxk1iPQgpghg3AAQhBAAguAuQgvAvAABBQAABCAvAtIAOANIgOgNQgvgtAAhCQAAhBAvgvQAuguBBAAQA3AAApAhIAPANQAvAvgBBBQABBCgvAtQgtAvhCgBQg4AAgpghgAiOHoQgSgSgOgUQgig2AAhEQAAheBChDQBDhDBdAAQBTAAA9A0IARAPQBCBDAABeQAABehCBCQhDBEheAAQhdAAhDhEgAougvQApAhA4AAQBCABAtgvQAvgtgBhCQABhBgvgvIgPgNQE1CPDaExQg9g0hTAAQhdAAhDBDQhCBDAABeQAABEAiA2gAltkoIAAAAg");
	this.shape_1.setTransform(86,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(0,0,172,188), null);


(lib.AvatarFrame_Ring = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().rs(["#2FEDFF","#146AF3"],[0,1],-16.3,-110.5,0,-16.3,-110.5,244.7).ss(12,1,1).p("ATiAAQAAIGluFuQgHAHgHAHQlqFgn8AAQoFAAluluQgugugogwQkYlRAAnFQAAoFFuluQFuluIFAAQIGAAFuFuQFuFuAAIFg");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarFrame_Ring, new cjs.Rectangle(-6,-6,262,262), null);


(lib.AvatarFrame_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Effect
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)"],[0,1],0,0,0,0,0,126.6).s().p("AtzN0QgtgugogwQkZlRAAnFQAAoEFulvQFvluIEAAQIGAAFuFuQFuFvAAIEQAAIGluFuIgOAOQlqFgn8AAQoEAAlvlug");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AtzN0QgtgugogwQkZlRAAnFQAAoEFulvQFvluIEAAQIGAAFuFuQFuFvAAIEQAAIGluFuIgOAOQlqFgn8AAQoEAAlvlug");
	this.shape_1.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarFrame_BG, new cjs.Rectangle(0,0,250,250), null);


(lib.Clothes_Pelvis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c_pelvis();
	this.instance.setTransform(197.5,130,1,1,0,0,0,197.5,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clothes_Pelvis, new cjs.Rectangle(0,0,395,260), null);


(lib.Clothes_Forearm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c_forearm();
	this.instance.setTransform(106.5,89,1,1,0,0,0,106.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clothes_Forearm, new cjs.Rectangle(0,0,213,178), null);


(lib.Clothes_EyeAccessory = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c_eyeacc();
	this.instance.setTransform(295.5,265.5,1,1,0,0,0,295.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clothes_EyeAccessory, new cjs.Rectangle(0,0,591,531), null);


(lib.Clothes_Chest = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c_chest();
	this.instance.setTransform(173.5,134,1,1,0,0,0,173.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clothes_Chest, new cjs.Rectangle(0,0,347,268), null);


(lib.Clothes_Arm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c_arm();
	this.instance.setTransform(86,94,1,1,0,0,0,86,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clothes_Arm, new cjs.Rectangle(0,0,172,188), null);


(lib.Avatar_Pelvis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pelvis();
	this.instance.setTransform(197.5,130,1,1,0,0,0,197.5,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Pelvis, new cjs.Rectangle(0,0,395,260), null);


(lib.Avatar_Neck = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.neck();
	this.instance.setTransform(76.5,66.5,1,1,0,0,0,76.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Neck, new cjs.Rectangle(0,0,153,133), null);


(lib.Avatar_Mouth = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mouth();
	this.instance.setTransform(295.5,265.5,1,1,0,0,0,295.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Mouth, new cjs.Rectangle(0,0,591,531), null);


(lib.Avatar_Head = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.head();
	this.instance.setTransform(295.5,265.5,1,1,0,0,0,295.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Head, new cjs.Rectangle(0,0,591,531), null);


(lib.Avatar_HairFront = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hairfront();
	this.instance.setTransform(295.5,289.5,1,1,0,0,0,295.5,289.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_HairFront, new cjs.Rectangle(0,0,591,579), null);


(lib.Avatar_HairBack = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hairback();
	this.instance.setTransform(295.5,289.5,1,1,0,0,0,295.5,289.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_HairBack, new cjs.Rectangle(0,0,591,579), null);


(lib.Avatar_Forearm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.forearm();
	this.instance.setTransform(106.5,89,1,1,0,0,0,106.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Forearm, new cjs.Rectangle(0,0,213,178), null);


(lib.Avatar_Eyes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.eyes();
	this.instance.setTransform(295.5,265.5,1,1,0,0,0,295.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Eyes, new cjs.Rectangle(0,0,591,531), null);


(lib.Avatar_Eyebrows = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.eyebrows();
	this.instance.setTransform(295.5,265.5,1,1,0,0,0,295.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Eyebrows, new cjs.Rectangle(0,0,591,531), null);


(lib.Avatar_Ear = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ear();
	this.instance.setTransform(104.5,113,1,1,0,0,0,104.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Ear, new cjs.Rectangle(0,0,209,226), null);


(lib.Avatar_Chest = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.chest();
	this.instance.setTransform(173.5,134,1,1,0,0,0,173.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Chest, new cjs.Rectangle(0,0,347,268), null);


(lib.Avatar_Arm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arm();
	this.instance.setTransform(86,94,1,1,0,0,0,86,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avatar_Arm, new cjs.Rectangle(0,0,172,188), null);


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

	// Clothes_EyeAccessory
	this.Clothes_EyeAccessory = new lib.Clothes_EyeAccessory();
	this.Clothes_EyeAccessory.name = "Clothes_EyeAccessory";
	this.Clothes_EyeAccessory.setTransform(315,418.7,1,1,0,0,0,304.5,378.4);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_EyeAccessory).wait(23));

	// Clothes_Chest
	this.Clothes_Chest = new lib.Clothes_Chest();
	this.Clothes_Chest.name = "Clothes_Chest";
	this.Clothes_Chest.setTransform(307.85,626.8,1,1,0,0,0,173.6,168.1);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Chest).wait(23));

	// Clothes_Pelvis
	this.Clothes_Pelvis = new lib.Clothes_Pelvis();
	this.Clothes_Pelvis.name = "Clothes_Pelvis";
	this.Clothes_Pelvis.setTransform(305.1,663,1,1,0,0,0,189.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Pelvis).wait(23));

	// Clothes_Forearm_Right
	this.Clothes_Forearm_Right = new lib.Clothes_Forearm();
	this.Clothes_Forearm_Right.name = "Clothes_Forearm_Right";
	this.Clothes_Forearm_Right.setTransform(208.15,607.25,1,1,0,0,180,72.2,52);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Forearm_Right).wait(23));

	// Clothes_Arm_Right
	this.Clothes_Arm_Right = new lib.Clothes_Arm();
	this.Clothes_Arm_Right.name = "Clothes_Arm_Right";
	this.Clothes_Arm_Right.setTransform(254.4,557.25,1,1,0,0,180,39.9,74.1);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Arm_Right).wait(23));

	// Clothes_Forearm_Left
	this.Clothes_Forearm_Left = new lib.Clothes_Forearm();
	this.Clothes_Forearm_Left.name = "Clothes_Forearm_Left";
	this.Clothes_Forearm_Left.setTransform(403.55,609.75,1,1,0,0,0,74,54);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Forearm_Left).wait(23));

	// Clothes_Arm_Left
	this.Clothes_Arm_Left = new lib.Clothes_Arm();
	this.Clothes_Arm_Left.name = "Clothes_Arm_Left";
	this.Clothes_Arm_Left.setTransform(354.3,558.25,1,1,0,0,0,39,75.1);

	this.timeline.addTween(cjs.Tween.get(this.Clothes_Arm_Left).wait(23));

	// Avatar_HairFront
	this.Avatar_HairFront = new lib.Avatar_HairFront();
	this.Avatar_HairFront.name = "Avatar_HairFront";
	this.Avatar_HairFront.setTransform(314.6,281.75,1,1,0,0,0,304,241);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_HairFront).wait(23));

	// Avatar_Eyebrows
	this.Avatar_Eyebrows = new lib.Avatar_Eyebrows();
	this.Avatar_Eyebrows.name = "Avatar_Eyebrows";
	this.Avatar_Eyebrows.setTransform(311,352.7,1,1,0,0,0,301,319.9);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Eyebrows).wait(23));

	// Avatar_Eyes
	this.Avatar_Eyes = new lib.Avatar_Eyes();
	this.Avatar_Eyes.name = "Avatar_Eyes";
	this.Avatar_Eyes.setTransform(314,428.7,1,1,0,0,0,304,395.9);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Eyes).wait(23));

	// Avatar_Mouth
	this.Avatar_Mouth = new lib.Avatar_Mouth();
	this.Avatar_Mouth.name = "Avatar_Mouth";
	this.Avatar_Mouth.setTransform(305.5,469.35,1,1,0,0,0,295.5,439.2);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Mouth).wait(23));

	// Avatar_Head
	this.Avatar_Head = new lib.Avatar_Head();
	this.Avatar_Head.name = "Avatar_Head";
	this.Avatar_Head.setTransform(305.1,495.3,1,1,0,0,0,302.1,467.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Head).wait(23));

	// Avatar_Ear_Right
	this.Avatar_Ear_Right = new lib.Avatar_Ear();
	this.Avatar_Ear_Right.name = "Avatar_Ear_Right";
	this.Avatar_Ear_Right.setTransform(207.4,443.85,1,1,0,0,180,21.4,118.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Ear_Right).wait(23));

	// Avatar_Ear_Left
	this.Avatar_Ear_Left = new lib.Avatar_Ear();
	this.Avatar_Ear_Left.name = "Avatar_Ear_Left";
	this.Avatar_Ear_Left.setTransform(405.3,439.65,1,1,0,0,0,21.5,118.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Ear_Left).wait(23));

	// Avatar_Chest
	this.Avatar_Chest = new lib.Avatar_Chest();
	this.Avatar_Chest.name = "Avatar_Chest";
	this.Avatar_Chest.setTransform(307.75,626.8,1,1,0,0,0,173.5,168.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Chest).wait(23));

	// Avatar_Neck
	this.Avatar_Neck = new lib.Avatar_Neck();
	this.Avatar_Neck.name = "Avatar_Neck";
	this.Avatar_Neck.setTransform(305.1,550.55,1,1,0,0,0,76.1,91.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Neck).wait(23));

	// Avatar_Pelvis
	this.Avatar_Pelvis = new lib.Avatar_Pelvis();
	this.Avatar_Pelvis.name = "Avatar_Pelvis";
	this.Avatar_Pelvis.setTransform(307.9,646.9,1,1,0,0,0,192.3,111.4);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Pelvis).wait(23));

	// Avatar_Forearm_Right
	this.Avatar_Forearm_Right = new lib.Avatar_Forearm();
	this.Avatar_Forearm_Right.name = "Avatar_Forearm_Right";
	this.Avatar_Forearm_Right.setTransform(203.45,613.25,1,1,0,0,180,76.9,58);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Forearm_Right).wait(23));

	// Avatar_Arm_Right
	this.Avatar_Arm_Right = new lib.Avatar_Arm();
	this.Avatar_Arm_Right.name = "Avatar_Arm_Right";
	this.Avatar_Arm_Right.setTransform(254.3,557.25,1,1,0,0,180,40,74.1);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Arm_Right).wait(23));

	// Avatar_Forearm_Left
	this.Avatar_Forearm_Left = new lib.Avatar_Forearm();
	this.Avatar_Forearm_Left.name = "Avatar_Forearm_Left";
	this.Avatar_Forearm_Left.setTransform(290.55,510.75,1,1,0,0,0,-39,-45);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Forearm_Left).wait(23));

	// Avatar_Arm_Left
	this.Avatar_Arm_Left = new lib.Avatar_Arm();
	this.Avatar_Arm_Left.name = "Avatar_Arm_Left";
	this.Avatar_Arm_Left.setTransform(272.3,463.25,1,1,0,0,0,-43,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_Arm_Left).wait(23));

	// Avatar_HairBack
	this.Avatar_HairBack = new lib.Avatar_HairBack();
	this.Avatar_HairBack.name = "Avatar_HairBack";
	this.Avatar_HairBack.setTransform(305.6,304.75,1,1,0,0,0,294,261);

	this.timeline.addTween(cjs.Tween.get(this.Avatar_HairBack).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,28.2,599.6,767.3);


// stage content:
(lib.AvatarRig_Face = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {AvatarPose:9,ActionWave:13,ActionWin:18};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Frame
	this.instance = new lib.AvatarFrame_Ring();
	this.instance.setTransform(156.3,166.5,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtzN0QgtgugpgwQkYlRAAnFQAAoFFuluQDUjTEGhZQC/hCDaAAQDbAADABCQEGBZDTDTQFuFuAAIFQAAIGluFuIgOAOQlqFgn8AAQoFAAlulug");
	mask.setTransform(156.3,166.5);

	// Avatar
	this.instance_1 = new lib.Avatar();
	this.instance_1.setTransform(154,220.9,0.4835,0.4835,0,0,0,300.1,456.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23));

	// BG
	this.instance_2 = new lib.AvatarFrame_BG();
	this.instance_2.setTransform(156.3,166.5,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(345.3,275.5,-58,22);
// library properties:
lib.properties = {
	id: 'C4C49EDCD4124A42A4A9F644E86FCCC6',
	width: 640,
	height: 480,
	fps: 30,
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
an.compositions['C4C49EDCD4124A42A4A9F644E86FCCC6'] = {
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