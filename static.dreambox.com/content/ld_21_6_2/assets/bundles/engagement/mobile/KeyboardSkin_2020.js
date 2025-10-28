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


(lib.DBLA_Squared_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:9,Down:19,Disabled:29,Highlight:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Squared
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("AA2BmIhrAAQgEAAgDgDQgDgDAAgEIAAi3QAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEIAAC3QAAAEgDADQgDADgEAAg");
	this.shape.setTransform(19.375,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AghAzQACgLAFgIQAFgKARgPQAMgLADgEQADgHAAgFQAAgHgDgDQgDgDgGAAQgGAAgDADQgDAEgCAIIgSgCQABgPAJgIQAKgHAMAAQAPAAAIAJQAJAHAAANQAAAFgDAIQgCAFgFAGIgYAZIgDAFIAlAAIAAASg");
	this.shape_1.setTransform(33.15,12.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:33.15,y:12.975}},{t:this.shape,p:{scaleX:1,scaleY:1,x:19.375,y:26.1}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.0536,scaleY:1.0703,x:33.6912,y:12.4735}},{t:this.shape,p:{scaleX:1.0536,scaleY:1.0703,x:19.1782,y:26.5211}}]},9).to({state:[{t:this.shape_1,p:{scaleX:0.9432,scaleY:0.9505,x:32.4304,y:13.2187}},{t:this.shape,p:{scaleX:0.9432,scaleY:0.9505,x:19.4381,y:25.6938}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:33.15,y:12.975}},{t:this.shape,p:{scaleX:1,scaleY:1,x:19.375,y:26.1}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:33.15,y:12.975}},{t:this.shape,p:{scaleX:1,scaleY:1,x:19.375,y:26.1}}]},10).wait(11));

	// inset
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_2}]},10).wait(11));

	// base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_6.setTransform(25,25.0037,1,1.0009);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_7.setTransform(25,25.0106,1,1.0019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_8.setTransform(25,24.9957,1,0.9998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_6}]},10).wait(11));

	// highlight
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_12.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},39).wait(11));

	// shdw
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_13.setTransform(27,27.0037,1,1.0009);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_SqRoot_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SqRoot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("AB2B1IhdAAQgDAAgEgDQgDgDAAgEIAAigQAAgEADgCQAEgEADAAIBdAAQAEAAADAEQADACAAAEIAACgQAAAEgDADQgDADgEAAgACfhzIjGAAIgkDhIgHAAIglhwIgnAA");
	this.shape.setTransform(24.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({scaleX:1.0536,scaleY:1.0703,x:24.5309,y:25.1192},0).wait(10).to({scaleX:0.9432,scaleY:0.9505,x:24.6252,y:24.4156},0).wait(10).to({scaleX:1,scaleY:1,x:24.9,y:24.8},0).wait(21));

	// inset
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_1}]},10).wait(11));

	// base
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_5.setTransform(25,25.0037,1,1.0009);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_6.setTransform(25,25.0106,1,1.0019);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_7.setTransform(25,24.9957,1,0.9998);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_5}]},10).wait(11));

	// highlight
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_11.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},39).wait(11));

	// shdw
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_13.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},9).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_12}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_14.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Parentheses_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Parentheses
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A3A").s().p("AASCWQgXgdgQgoQgQgnAAgqQAAgkAMgiQAOgoAdgnIAUAAQgTAggGAOQgKAWgEAXQgHAdAAAdQAABLAuBLg");
	this.shape.setTransform(9.725,24.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AglCWQAuhLAAhLQAAgcgHgdQgEgYgKgVQgGgOgTghIAUAAQAdAnAOAoQAMAiAAAkQAAAqgQAnQgRAogWAdg");
	this.shape_1.setTransform(41.525,24.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3A3A3A").ss(2).p("ABBB4IiBAAQgEAAgDgDQgDgDAAgEIAAjbQAAgEADgDQADgDAEAAICBAAQAEAAADADQADADAAAEIAADbQAAAEgDADQgDADgEAAg");
	this.shape_2.setTransform(25.25,24.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AATChQgYgggRgqQgRgqAAgtQAAgnANglQAPgqAegqIAVAAQgUAjgHAPQgKAXgEAZQgHAgAAAeQAABQAwBRg");
	this.shape_3.setTransform(8.975,25.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3A3A").s().p("AgnChQAwhRAAhQQAAgfgHgfQgEgZgKgWQgHgPgUgkIAVAAQAeAqAPAqQANAlAAAnQAAAtgRAqQgRAqgYAgg");
	this.shape_4.setTransform(42.425,25.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3A3A").s().p("AARCPQgWgcgOgmQgPglgBgoQAAgiALghQAOglAbgmIATAAQgSAfgGANQgJAVgEAWQgGAcgBAbQABBHArBIg");
	this.shape_5.setTransform(10.3,24.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A3A3A").s().p("AgjCPQAshIgBhHQAAgbgGgbQgEgXgJgUQgGgNgSggIATAAQAbAmANAlQALAhAAAiQABAogPAlQgQAmgVAcg");
	this.shape_6.setTransform(40.3,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.25,y:24.45}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{scaleX:1.0536,scaleY:1.0703,x:24.8576,y:24.7149}},{t:this.shape_4},{t:this.shape_3}]},9).to({state:[{t:this.shape_2,p:{scaleX:0.9432,scaleY:0.9505,x:24.9471,y:24.0835}},{t:this.shape_6},{t:this.shape_5}]},10).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.25,y:24.45}},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.25,y:24.45}},{t:this.shape_1},{t:this.shape}]},10).wait(11));

	// inset
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_7.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_8.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_9.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_10.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// base
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(25,25.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_12.setTransform(25,25.0106,1,1.0019);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_13.setTransform(25,24.9957,1,0.9998);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_11}]},10).wait(11));

	// highlight
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_15.setTransform(25,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_16.setTransform(25,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_17.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},39).wait(11));

	// shdw
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_18.setTransform(27,27.0037,1,1.0009);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_19.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},9).to({state:[{t:this.shape_18}]},10).to({state:[{t:this.shape_18}]},10).to({state:[{t:this.shape_18}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_20.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Or_ES_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A3A").s().p("AglBAQgQgIgJgRQgIgQAAgXQAAgVAIgRQAJgQAQgKQAQgJAVAAQAVAAARAJQAQAKAJAQQAIAQABAWQgBAXgIAQQgJARgRAIQgPAJgWAAQgVAAgQgJgAgagiQgKAMAAAWQAAAYAKALQAKAMAQgBQASABAJgMQAJgLAAgYQAAgWgJgMQgJgLgSAAQgQAAgKALg");
	this.shape.setTransform(24.15,26.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AgnBDQgSgJgIgRQgJgRAAgYQAAgXAJgRQAIgRASgKQAQgJAXAAQAWAAASAJQARAKAIARQAKARAAAXQAAAYgKARQgIARgSAJQgRAKgWAAQgXAAgQgKgAgcgjQgKAMAAAXQAAAZAKAMQAKAMASAAQASAAAKgMQAJgMAAgZQAAgXgJgMQgKgMgSAAQgSAAgKAMg");
	this.shape_1.setTransform(24,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AgkBAQgQgKgIgPQgJgQAAgXQAAgVAJgQQAIgQAQgJQAQgJAUAAQAWAAAQAJQAPAJAJAQQAIAQAAAVQAAAXgIAQQgJAPgQAKQgPAIgWAAQgUAAgQgIgAgZggQgKAKAAAWQAAAXAKALQAJAMAQAAQASAAAJgMQAIgLABgXQgBgWgIgKQgJgMgSAAQgQAAgJAMg");
	this.shape_2.setTransform(24.5,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AglBAQgQgJgJgQQgIgQAAgXQAAgVAIgRQAJgRAQgIQAQgJAVAAQAVAAARAJQAQAIAJASQAJAQAAAVQAAAXgJAQQgJAQgRAJQgPAKgWAAQgVAAgQgKgAgagiQgKAMAAAWQAAAXAKAMQAKALAQAAQASAAAJgLQAJgMAAgXQAAgWgJgMQgJgLgSAAQgQAAgKALg");
	this.shape_3.setTransform(25.15,26.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3A3A").s().p("AglBAQgQgIgJgRQgIgQAAgXQAAgVAIgRQAJgQAQgKQAQgJAVAAQAVAAARAJQAQAKAJAQQAJAQAAAWQAAAXgJAQQgJARgRAIQgPAJgWAAQgVAAgQgJgAgagiQgKAMAAAWQAAAYAKALQAKAMAQgBQASABAJgMQAJgLAAgYQAAgWgJgMQgJgLgSAAQgQAAgKALg");
	this.shape_4.setTransform(25.15,26.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// inset
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_7.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_8.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_5}]},10).wait(11));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(25,25.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_10.setTransform(25,25.0106,1,1.0019);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_11.setTransform(25,24.9957,1,0.9998);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_9}]},10).wait(11));

	// highlight
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_13.setTransform(25,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},39).wait(11));

	// shdw
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_16.setTransform(27,27.0037,1,1.0009);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_17.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},9).to({state:[{t:this.shape_16}]},10).to({state:[{t:this.shape_16}]},10).to({state:[{t:this.shape_16}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_18.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Or_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A3A").s().p("AhhBAQgRgIgIgRQgJgQAAgXQAAgVAJgRQAIgQARgKQAQgJAWAAQAVAAARAJQAQAKAHAQQAJAQAAAWQAAAXgJAQQgHARgRAIQgQAJgVAAQgWAAgQgJgAhWgiQgKAMAAAWQAAAYAKALQAJAMASgBQARABAKgMQAJgLAAgYQAAgWgJgMQgKgLgRAAQgSAAgJALgAApBHIgCiMIAhAAIADAZQAEgMAJgHQANgJAQAAIAIAAIAHACIgBAgQgIgEgKAAQgNAAgIAFQgIAFgEAJQgEAIAAALIAABLg");
	this.shape.setTransform(25.175,26.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AhhBBQgRgKgIgQQgJgQAAgXQAAgWAJgQQAIgRARgJQAQgIAWgBQAVABARAIQAQAKAHAQQAJAQAAAWQAAAXgJAQQgHAQgRAKQgQAIgVABQgWgBgQgIgAhWghQgKALAAAWQAAAYAKALQAJAMASAAQARAAAKgMQAJgLAAgYQAAgWgJgLQgKgMgRAAQgSAAgJAMgAApBHIgCiMIAhAAIADAZQAEgMAJgHQANgJAQAAIAIAAIAHACIgBAgQgIgEgKAAQgNAAgIAFQgIAGgEAIQgEAJAAAKIAABLg");
	this.shape_1.setTransform(26.175,27.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({scaleX:1.0247,scaleY:1.0204,x:24.9958,y:25.9876},0).wait(10).to({scaleX:0.9525,scaleY:0.9524,x:25.5303,y:25.9951},0).to({_off:true},10).wait(10).to({_off:false,scaleX:1,scaleY:1,x:25.175,y:26.35},0).wait(11));

	// inset
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_2}]},10).wait(11));

	// base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_6.setTransform(25,25.0037,1,1.0009);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_7.setTransform(25,25.0106,1,1.0019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_8.setTransform(25,24.9957,1,0.9998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_6}]},10).wait(11));

	// highlight
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_12.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},39).wait(11));

	// shdw
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_13.setTransform(27,27.0037,1,1.0009);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.nineslice_14_14_46_46 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AjlDmIAAnLIHLAAIAAHLg");
	this.shape.setTransform(23,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nineslice_14_14_46_46, new cjs.Rectangle(0,0,46,46), null);


(lib.lower_keys_icon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#404040").s().p("AgDCVIg6g9IgDgEQgCgEAHAAIB2AAQALAAgJAIIg6A9IgDABIgDgBgAifAoQgKAAAAgKIAAipQAAgKAKAAIE/AAQAKAAAAAKIAACpQAAAKgKAAgAiLgPIAAAUQAAAFAFAAIENAAQAFAAAAgFIAAgUQAAgEgFAAIkNAAQgFAAAAAEgABuhBIAAAVQAAAFAEAAIAVAAQAFAAAAgFIAAgVQAAgEgFAAIgVAAQgEAAAAAEgAA8hBIAAAVQAAAFAFAAIAVAAQAEAAAAgFIAAgVQAAgEgEAAIgVAAQgFAAAAAEgAAKhBIAAAVQAAAFAEAAIAVAAQAFAAAAgFIAAgVQAAgEgFAAIgVAAQgEAAAAAEgAgnhBIAAAVQAAAFAEAAIAWAAQAEAAAAgFIAAgVQAAgEgEAAIgWAAQgEAAAAAEgAhZhBIAAAVQAAAFAFAAIAUAAQAFAAAAgFIAAgVQAAgEgFAAIgUAAQgFAAAAAEgAiLhBIAAAVQAAAFAEAAIAWAAQAEAAAAgFIAAgVQAAgEgEAAIgWAAQgEAAAAAEgAiLhzIAAAWQAAAEAEAAIAWAAQAEAAAAgEIAAgWQAAgEgEAAIgWAAQgEAAAAAEgABuhzIAAAVQAAAFAEAAIAVAAQAFAAAAgFIAAgVQAAgEgFAAIgVAAQgEAAAAAEgAA8hzIAAAVQAAAFAFAAIAVAAQAEAAAAgFIAAgVQAAgEgEAAIgVAAQgFAAAAAEgAAKhzIAAAVQAAAFAEAAIAVAAQAFAAAAgFIAAgVQAAgEgFAAIgVAAQgEAAAAAEgAgnhzIAAAVQAAAFAEAAIAWAAQAEAAAAgFIAAgVQAAgEgEAAIgWAAQgEAAAAAEgAhZhyIAAAUQAAAFAFAAIAVAAQAEAAAAgFIAAgUQAAgFgEAAIgVAAQgFAAAAAFg");
	this.shape.setTransform(17,15.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lower_keys_icon, new cjs.Rectangle(0,0,34,30), null);


(lib.DBLAKeyPadBackground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AAKIAAgTMCf/AAAIAAATg");
	this.shape.setTransform(512,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("EhP/AMgIAA4/MCf/AAAIAAY/g");
	this.shape_1.setTransform(512,80);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAKeyPadBackground, new cjs.Rectangle(0,0,1024,160), null);


(lib.DBLA_KeyBase_xl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AovDmQhGAAAAhGIAAk/QAAhGBGAAIRfAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape.setTransform(65,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("ApDD6QhGAAAAhGIAAlnQAAhGBGAAISHAAQBGAAAABGIAAFnQAABGhGAAg");
	this.shape_1.setTransform(65,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("AolDSQg8AAAAg8IAAkrQAAg8A8AAIRLAAQA8AAAAA8IAAErQAAA8g8AAg");
	this.shape_2.setTransform(65,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("AovDmQhGAAAAhGIAAk/QAAhGBGAAIRfAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape_3.setTransform(66,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(65,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApNENQhQAAAAhQIAAl6QAAhQBQAAISbAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(65,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AolDmQhQAAAAhQIAAkrQAAhQBQAAIRLAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(65,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(66,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// shdw
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.298)").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(67,27.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.2)").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(67,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:67,y:27.0037}}]}).to({state:[{t:this.shape_9}]},9).to({state:[]},10).to({state:[{t:this.shape_8,p:{x:66,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,255,0,0)").s().p("AqJD6IAAnzIUTAAIAAHzg");
	this.shape_10.setTransform(65,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},29).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,134,54);


(lib.DBLA_KeyBase_sm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_KeyBase_med = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(34.9568,24.9967,1,1.4013,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkhENQhQAAAAhQIAAl6QAAhQBQAAIJDAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(35,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// shdw
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(37,27.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(37,27.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_10.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_8,p:{x:36,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_11.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},29).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,74,54);


(lib.DBLA_KeyBase_lg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AnLDmQhGAAAAhGIAAk/QAAhGBGAAIOXAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape.setTransform(55,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AnfD6QhGAAAAhGIAAlnQAAhGBGAAIO/AAQBGAAAABGIAAFnQAABGhGAAg");
	this.shape_1.setTransform(55,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("AnBDSQg8AAAAg8IAAkrQAAg8A8AAIODAAQA8AAAAA8IAAErQAAA8g8AAg");
	this.shape_2.setTransform(55,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("AnLDmQhGAAAAhGIAAk/QAAhGBGAAIOXAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape_3.setTransform(56,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(55,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnpENQhQAAAAhQIAAl6QAAhQBQAAIPTAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(55,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBDmQhQAAAAhQIAAkrQAAhQBQAAIODAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(55,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(56,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// shdw
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.298)").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(57,27.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.2)").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(57,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:57,y:27.0037}}]}).to({state:[{t:this.shape_9}]},9).to({state:[]},10).to({state:[{t:this.shape_8,p:{x:56,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,255,0,0)").s().p("AolD6IAAnzIRLAAIAAHzg");
	this.shape_10.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},29).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,114,54);


(lib.KeyBase_smglyph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":50,"Up":0,"Over":9,"Down":19,"Disabled":29,Selected:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// InputFlyout
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("ABAB4Ih/AAQgEAAgDgDQgDgDAAgEIAAjbQAAgEADgDQADgDAEAAIB/AAQAEAAADADQADADAAAEIAADbQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(26.125,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#232021").s().p("AAoANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAaAAIAAAZg");
	this.shape_1.setTransform(38.525,43.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3A3A3A").ss(2).p("ABFCAIiJAAQgEAAgDgDQgDgDAAgEIAAjrQAAgEADgDQADgDAEAAICJAAQAEAAADADQADADAAAEIAADrQAAAEgDADQgDADgEAAg");
	this.shape_2.setTransform(25.85,24.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232021").s().p("AArAOIAAgbIAbAAIAAAbgAgMAOIAAgbIAaAAIAAAbgAhFAOIAAgbIAbAAIAAAbg");
	this.shape_3.setTransform(39.075,45.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#3A3A3A").ss(2).p("AA+ByIh6AAQgEAAgDgDQgDgDAAgDIAAjRQAAgEADgCQADgDAEAAIB6AAQADAAADADQADACAAAEIAADRQAAADgDADQgDADgDAAg");
	this.shape_4.setTransform(25.825,24.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232021").s().p("AAmAMIAAgXIAZAAIAAAXgAgLAMIAAgXIAXAAIAAAXgAg9AMIAAgXIAYAAIAAAXg");
	this.shape_5.setTransform(37.65,42.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#3A3A3A").ss(2).p("ABBB4IiBAAQgEAAgDgDQgDgDAAgEIAAjbQAAgEADgDQADgDAEAAICBAAQAEAAADADQADADAAAEIAADbQAAAEgDADQgDADgEAAg");
	this.shape_6.setTransform(26.2,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#232021").s().p("AApANIAAgZIAZAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAZAAIAAAZg");
	this.shape_7.setTransform(38.725,43.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#3A3A3A").ss(2).p("ABBB4IiAAAQgEAAgDgDQgDgDAAgEIAAjbQAAgEADgDQADgDAEAAICAAAQAEAAACADQADADAAAEIAADbQAAAEgDADQgCADgEAAg");
	this.shape_8.setTransform(26.125,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:38.525}},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).to({state:[{t:this.shape_7},{t:this.shape_6}]},10).to({state:[{t:this.shape_1,p:{x:38.625}},{t:this.shape_8}]},10).to({state:[{t:this.shape_1,p:{x:38.525}},{t:this.shape}]},11).wait(11));

	// inset
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_9.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_10.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_11.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_12.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0E0E0").s().p("AipDwQg8AAAAg8IAAmjIHLAAIAAGjQAAA8g8AAg");
	this.shape_13.setTransform(25,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_9}]},11).wait(11));

	// base
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(25,25.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_15.setTransform(25,25.0106,1,1.0019);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_16.setTransform(25,24.9957,1,0.9998);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_17.setTransform(26,26.0037,1,1.0009);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAmjIHzAAIAAGjQAABQhQAAg");
	this.shape_18.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_16}]},10).to({state:[{t:this.shape_17}]},10).to({state:[{t:this.shape_18}]},10).to({state:[{t:this.shape_14}]},11).wait(11));

	// highlight
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_19.setTransform(25,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_20.setTransform(25,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_21.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},50).wait(11));

	// shdw
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_22.setTransform(27,27.0037,1,1.0009);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_23.setTransform(27,27.0037,1,1.0009);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.298)").s().p("AipDwQghAAgYgXQgXgYAAghIAAmPIHzAAIAAGPQAAAhgXAYQgYAXghAAg");
	this.shape_24.setTransform(27,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:1,scaleY:1.0009,x:27,y:27.0037}}]}).to({state:[{t:this.shape_23}]},9).to({state:[{t:this.shape_22,p:{scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111}}]},10).to({state:[{t:this.shape_22,p:{scaleX:1,scaleY:1.0009,x:26,y:26.0037}}]},10).to({state:[{t:this.shape_24}]},10).to({state:[{t:this.shape_22,p:{scaleX:1,scaleY:1.0009,x:27,y:27.0037}}]},11).wait(11));

	// hit
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_25.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).to({_off:true},29).wait(21).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_InputFlyout_Active = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("ABBB4IiAAAQgEAAgDgDQgDgDAAgEIAAjbQAAgEADgDQADgDAEAAICAAAQAEAAACADQADADAAAEIAADbQAAAEgDADQgCADgEAAg");
	this.shape.setTransform(26.125,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#232021").s().p("AAoANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAaAAIAAAZg");
	this.shape_1.setTransform(38.625,43.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// inset
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AipDwQg8AAAAg8IAAmjIHLAAIAAGjQAAA8g8AAg");
	this.shape_2.setTransform(25,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAmjIHzAAIAAGjQAABQhQAAg");
	this.shape_3.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AipDwQghAAgYgXQgXgYAAghIAAmPIHzAAIAAGPQAAAhgXAYQgYAXghAAg");
	this.shape_4.setTransform(27,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLA_InputFlyout_Active, new cjs.Rectangle(0,0,52,52), null);


(lib.IconTab = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#404040").s().p("AhNCBIhphBIgCgCIAAgEIACgDIBpg/IAEgBIADABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAgIEMAAQAFAAADADQADADAAAFIAAArQAAAEgDAEQgDADgFAAIkMAAIAAAgQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDACIgBAAIgDgBgABKAKIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgfIkLAAQgGAAgCgDQgEgEAAgEIAAgsQAAgFAEgDQACgCAGAAIELAAIAAghQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIBpBBIACACIAAAEIgCADIhpA/IgCABIgBAAg");
	this.shape.setTransform(21,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconTab, new cjs.Rectangle(0,0,42,26), null);


(lib.IconEnvelope = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#404040").s().p("AiDBpIgGgFIBRhvIASAVQAEADAEAAQAFABADgDIAigcIBeCiIgEAFgAAcgaIB0hoIAFAFIgXD6IgJAKgAiVBYIAQjAIAGgIIA/BXIhRB0gAh0h5IABgDIDxgZIAHAIIiiCHg");
	this.shape.setTransform(14.95,14.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconEnvelope, new cjs.Rectangle(0,0,29.9,30), null);


(lib.IconBackspace = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#404040").s().p("Ag5B9Iich9ICch8IDnAAQAoAAAAAoIAACpQAAAogoAAgAB7BPIAbgbIg5g0IA5gyIgbgbIg7A1Ig6g1IgaAbIA4AyIg4A0IAaAbIA6g2g");
	this.shape.setTransform(21.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconBackspace, new cjs.Rectangle(0,0,42.8,26.4), null);


(lib.DBLA_InputFlyout_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fraction
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("ABJBIIiRAAQgDAAgDgDQgEgDAAgEIAAh7QAAgEAEgDQADgDADAAICRAAQADAAADADQAEADAAAEIAAB7QAAAEgEADQgDADgDAAg");
	this.shape.setTransform(25.1,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3A3A3A").ss(2).p("ABJBIIiRAAQgDAAgDgDQgEgDAAgEIAAh7QAAgEAEgDQADgDADAAICRAAQADAAADADQAEADAAAEIAAB7QAAAEgEADQgDADgDAAg");
	this.shape_1.setTransform(25.1,37.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AiCAIIAAgOIEFAAIAAAOg");
	this.shape_2.setTransform(25.1,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.1,y:25.3}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:25.1,y:37.45}},{t:this.shape,p:{scaleX:1,scaleY:1,x:25.1,y:13.2}}]}).to({state:[{t:this.shape_2,p:{scaleX:1.0536,scaleY:1.0703,x:25.0932,y:25.6446}},{t:this.shape_1,p:{scaleX:1.0533,scaleY:1.0699,x:25.0986,y:38.6193}},{t:this.shape,p:{scaleX:1.0533,scaleY:1.0699,x:25.0986,y:12.6734}}]},9).to({state:[{t:this.shape_2,p:{scaleX:0.9432,scaleY:0.9505,x:24.8582,y:24.933}},{t:this.shape_1,p:{scaleX:0.9429,scaleY:0.9503,x:24.8579,y:36.4363}},{t:this.shape,p:{scaleX:0.9429,scaleY:0.9503,x:24.8579,y:13.3922}}]},10).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.1,y:25.3}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:25.1,y:37.45}},{t:this.shape,p:{scaleX:1,scaleY:1,x:25.1,y:13.2}}]},10).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.1,y:25.3}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:25.1,y:37.45}},{t:this.shape,p:{scaleX:1,scaleY:1,x:25.1,y:13.2}}]},10).wait(11));

	// inset
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(25,25.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_8.setTransform(25,25.0106,1,1.0019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(25,24.9957,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(11));

	// shdw
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_15.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_FormulasFlyout_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":50,"Up":0,"Over":9,"Down":19,"Disabled":29,"Selected":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FormulasFlyout
	this.lblText = new cjs.Text("a+b", "italic bold 18px 'PT Serif'", "#007DC4");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 31;
	this.lblText.parent = this;
	this.lblText.setTransform(25.15,11.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DC4").s().p("AAoANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAaAAIAAAZg");
	this.shape.setTransform(38.525,43.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#409CD2").s().p("AAuAOIAAgbIAcAAIAAAbgAgNAOIAAgbIAbAAIAAAbgAhJAOIAAgbIAcAAIAAAbg");
	this.shape_1.setTransform(40.05,45.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007DC4").s().p("AAlAMIAAgXIAXAAIAAAXgAgLAMIAAgXIAXAAIAAAXgAg7AMIAAgXIAXAAIAAAXg");
	this.shape_2.setTransform(37.575,42.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#447D9D").s().p("AAoANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAaAAIAAAZg");
	this.shape_3.setTransform(38.525,43.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.lblText,p:{scaleX:1,scaleY:1,x:25.15,y:11.95,font:"italic bold 18px 'PT Serif'",lineHeight:25.25,lineWidth:31,color:"#007DC4"}}]}).to({state:[{t:this.shape_1},{t:this.lblText,p:{scaleX:1.1266,scaleY:1.1266,x:24.95,y:9.5,font:"italic bold 19px 'PT Serif'",lineHeight:26.6,lineWidth:34,color:"#007DC4"}}]},9).to({state:[{t:this.shape_2},{t:this.lblText,p:{scaleX:0.9195,scaleY:0.9195,x:25.25,y:13.25,font:"italic bold 18px 'PT Serif'",lineHeight:25.25,lineWidth:31,color:"#007DC4"}}]},10).to({state:[{t:this.shape_3},{t:this.lblText,p:{scaleX:1,scaleY:1,x:25.15,y:12.45,font:"italic bold 18px 'PT Serif'",lineHeight:25.25,lineWidth:31,color:"#447D9D"}}]},10).to({state:[{t:this.shape},{t:this.lblText,p:{scaleX:1,scaleY:1,x:25.15,y:11.95,font:"italic bold 18px 'PT Serif'",lineHeight:25.25,lineWidth:31,color:"#007DC4"}}]},10).to({state:[{t:this.shape},{t:this.lblText,p:{scaleX:1,scaleY:1,x:25.15,y:11.95,font:"italic bold 18px 'PT Serif'",lineHeight:25.25,lineWidth:31,color:"#007DC4"}}]},11).wait(11));

	// inset
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_7.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0E0E0").s().p("AipDwQg8AAAAg8IAAmjIHLAAIAAGjQAAA8g8AAg");
	this.shape_8.setTransform(25,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_4}]},11).wait(11));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(25,25.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_10.setTransform(25,25.0106,1,1.0019);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_11.setTransform(25,24.9957,1,0.9998);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(26,26.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAmjIHzAAIAAGjQAABQhQAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_9}]},11).wait(11));

	// highlight
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_15.setTransform(25,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},50).wait(11));

	// shdw
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_17.setTransform(27,27.0037,1,1.0009);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_18.setTransform(27,27.0037,1,1.0009);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.298)").s().p("AipDwQghAAgYgXQgXgYAAghIAAmPIHzAAIAAGPQAAAhgXAYQgYAXghAAg");
	this.shape_19.setTransform(27,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17,p:{scaleX:1,scaleY:1.0009,x:27,y:27.0037}}]}).to({state:[{t:this.shape_18}]},9).to({state:[{t:this.shape_17,p:{scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111}}]},10).to({state:[{t:this.shape_17,p:{scaleX:1,scaleY:1.0009,x:26,y:26.0037}}]},10).to({state:[{t:this.shape_19}]},10).to({state:[{t:this.shape_17,p:{scaleX:1,scaleY:1.0009,x:27,y:27.0037}}]},11).wait(11));

	// hit
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_20.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).to({_off:true},29).wait(21).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_FormulasFlyout_Active = function(mode,startPosition,loop,reversed) {
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
	this.lblText = new cjs.Text("a+b", "italic bold 18px 'PT Serif'", "#007DC4");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 25;
	this.lblText.lineWidth = 31;
	this.lblText.parent = this;
	this.lblText.setTransform(25.15,11.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007DC4").s().p("AAoANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhBANIAAgZIAaAAIAAAZg");
	this.shape.setTransform(38.525,43.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.lblText}]}).wait(1));

	// inset
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("AipDwQg8AAAAg8IAAmjIHLAAIAAGjQAAA8g8AAg");
	this.shape_1.setTransform(25,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAmjIHzAAIAAGjQAABQhQAAg");
	this.shape_2.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AipDwQghAAgYgXQgXgYAAghIAAmPIHzAAIAAGPQAAAhgXAYQgYAXghAAg");
	this.shape_3.setTransform(27,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLA_FormulasFlyout_Active, new cjs.Rectangle(0,0,52,52), null);


(lib.DBLA_PerimRectangle_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.text = new cjs.Text("w", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text.lineHeight = 34;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(67.6,11.8);

	this.text_1 = new cjs.Text(")", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 8;
	this.text_1.parent = this;
	this.text_1.setTransform(84.5,12);

	this.text_2 = new cjs.Text("+", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 13;
	this.text_2.parent = this;
	this.text_2.setTransform(48.6,12);

	this.text_3 = new cjs.Text("l", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text_3.lineHeight = 34;
	this.text_3.lineWidth = 7;
	this.text_3.parent = this;
	this.text_3.setTransform(35.9,11.8);

	this.text_4 = new cjs.Text("2(", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_4.lineHeight = 33;
	this.text_4.lineWidth = 21;
	this.text_4.parent = this;
	this.text_4.setTransform(15,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4,p:{x:15,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#007DC4"}},{t:this.text_3,p:{x:35.9,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.text_2,p:{x:48.6,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#007DC4"}},{t:this.text_1,p:{x:84.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#007DC4"}},{t:this.text,p:{x:67.6,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:17,color:"#007DC4"}}]}).to({state:[{t:this.text_4,p:{x:13,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:23,color:"#007DC4"}},{t:this.text_3,p:{x:34.9,y:10.6,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,color:"#007DC4"}},{t:this.text_2,p:{x:48.1,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:14,color:"#007DC4"}},{t:this.text_1,p:{x:85.6,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,color:"#007DC4"}},{t:this.text,p:{x:68.2,y:10.6,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:18,color:"#007DC4"}}]},9).to({state:[{t:this.text_4,p:{x:14.1,y:11.8,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:21,color:"#007DC4"}},{t:this.text_3,p:{x:33.9,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,color:"#007DC4"}},{t:this.text_2,p:{x:46,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:13,color:"#007DC4"}},{t:this.text_1,p:{x:80.3,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,color:"#007DC4"}},{t:this.text,p:{x:64.3,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:17,color:"#007DC4"}}]},10).to({state:[{t:this.text_4,p:{x:15,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#447D9D"}},{t:this.text_3,p:{x:35.9,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#447D9D"}},{t:this.text_2,p:{x:48.6,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#447D9D"}},{t:this.text_1,p:{x:84.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#447D9D"}},{t:this.text,p:{x:67.6,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:17,color:"#447D9D"}}]},10).to({state:[{t:this.text_4,p:{x:15,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#007DC4"}},{t:this.text_3,p:{x:35.9,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.text_2,p:{x:48.6,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#007DC4"}},{t:this.text_1,p:{x:84.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#007DC4"}},{t:this.text,p:{x:67.6,y:11.8,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:17,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AnLDmQhGAAAAhGIAAk/QAAhGBGAAIOXAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape.setTransform(55,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AnfD6QhGAAAAhGIAAlnQAAhGBGAAIO/AAQBGAAAABGIAAFnQAABGhGAAg");
	this.shape_1.setTransform(55,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("AnBDSQg8AAAAg8IAAkrQAAg8A8AAIODAAQA8AAAAA8IAAErQAAA8g8AAg");
	this.shape_2.setTransform(55,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("AnLDmQhGAAAAhGIAAk/QAAhGBGAAIOXAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape_3.setTransform(56,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(55,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnpENQhQAAAAhQIAAl6QAAhQBQAAIPTAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(55,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBDmQhQAAAAhQIAAkrQAAhQBQAAIODAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(55,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(56,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("AnUkSIOpAAQBpAAAABpIAAFTQAABphpAAIupAAQhpAAAAhpIAAlTQAAhpBpAAg");
	this.shape_8.setTransform(56.025,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AnUETQhpAAAAhpIAAlTQAAhpBpAAIOpAAQBpAAAABpIAAFTQAABphpAAgAokipIAAFTQAABQBQAAIOpAAQBQAAAAhQIAAlTQAAhQhQAAIupAAQhQAAAABQg");
	this.shape_9.setTransform(56.025,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.298)").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(57,27.0037,1,1.0009);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.2)").s().p("AnVD6QhQAAAAhQIAAlTQAAhQBQAAIOrAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(57,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{x:57,y:27.0037}}]}).to({state:[{t:this.shape_11}]},9).to({state:[]},10).to({state:[{t:this.shape_10,p:{x:56,y:26.0037}}]},10).to({state:[{t:this.shape_10,p:{x:56,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,255,0,0)").s().p("AolD6IAAnzIRLAAIAAHzg");
	this.shape_12.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.5,116.7,57);


(lib.DBLA_PerimCircumference2_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.text = new cjs.Text("r", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text.lineHeight = 34;
	this.text.lineWidth = 10;
	this.text.parent = this;
	this.text.setTransform(42.75,11.65);

	this.text_1 = new cjs.Text("2π", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 27;
	this.text_1.parent = this;
	this.text_1.setTransform(16,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:16,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:27,color:"#007DC4"}},{t:this.text,p:{x:42.75,y:11.65,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}}]}).to({state:[{t:this.text_1,p:{x:15,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:35,color:"#007DC4"}},{t:this.text,p:{x:43,y:10.6,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,color:"#007DC4"}}]},9).to({state:[{t:this.text_1,p:{x:16,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:27,color:"#007DC4"}},{t:this.text,p:{x:41.5,y:11.65,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,color:"#007DC4"}}]},10).to({state:[{t:this.text_1,p:{x:16,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:27,color:"#447D9D"}},{t:this.text,p:{x:42.75,y:11.65,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#447D9D"}}]},10).to({state:[{t:this.text_1,p:{x:16,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:27,color:"#007DC4"}},{t:this.text,p:{x:42.75,y:11.65,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(34.9568,24.9967,1,1.4013,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkhENQhQAAAAhQIAAl6QAAhQBQAAIJDAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(35,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("AEOkcIobAAQhzAAAABzIAAFTQAABzBzAAIIbAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(36,26.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AkNEdQhzAAAAhzIAAlTQAAhzBzAAIIbAAQBzAAAABzIAAFTQAABzhzAAgAk6ipIAAFTQAAAtAtAAIIbAAQAtAAAAgtIAAlTQAAgtgtAAIobAAQgtAAAAAtg");
	this.shape_9.setTransform(36,26.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkNDXQgtAAAAgtIAAlTQAAgtAtAAIIbAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(37,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(37,27.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_13.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_14.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,79,59);


(lib.DBLA_PerimCircumference_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("d", "italic bold 22px 'PT Serif'", "#007DC4");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 34;
	this.lblText.parent = this;
	this.lblText.setTransform(25.6,11.6);

	this.lblText_1 = new cjs.Text("π", "bold 22px 'DBLMuli'", "#007DC4");
	this.lblText_1.name = "lblText_1";
	this.lblText_1.lineHeight = 33;
	this.lblText_1.parent = this;
	this.lblText_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lblText_1,p:{x:12,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#007DC4"}},{t:this.lblText,p:{x:25.6,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:13,color:"#007DC4"}}]}).to({state:[{t:this.lblText_1,p:{x:11,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:14,color:"#007DC4"}},{t:this.lblText,p:{x:25.2,y:10.6,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:13,color:"#007DC4"}}]},9).to({state:[{t:this.lblText_1,p:{x:13,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:13,color:"#007DC4"}},{t:this.lblText,p:{x:26,y:11.6,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:12,color:"#007DC4"}}]},10).to({state:[{t:this.lblText_1,p:{x:12,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#447D9D"}},{t:this.lblText,p:{x:25.6,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:13,color:"#447D9D"}}]},10).to({state:[{t:this.lblText_1,p:{x:12,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#007DC4"}},{t:this.lblText,p:{x:25.6,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:13,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_AreaTriangle_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblTex
	this.text = new cjs.Text("bh", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text.lineHeight = 34;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(32.85,11.7);

	this.text_1 = new cjs.Text("½", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 21;
	this.text_1.parent = this;
	this.text_1.setTransform(12,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:12,y:11.7,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#007DC4"}},{t:this.text,p:{x:32.85,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:25,color:"#007DC4"}}]}).to({state:[{t:this.text_1,p:{x:11,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:22,color:"#007DC4"}},{t:this.text,p:{x:32.95,y:10.85,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:27,color:"#007DC4"}}]},9).to({state:[{t:this.text_1,p:{x:12,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:22,color:"#007DC4"}},{t:this.text,p:{x:31.9,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:27,color:"#007DC4"}}]},10).to({state:[{t:this.text_1,p:{x:12,y:11.7,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#447D9D"}},{t:this.text,p:{x:32.85,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:25,color:"#447D9D"}}]},10).to({state:[{t:this.text_1,p:{x:12,y:11.7,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:21,color:"#007DC4"}},{t:this.text,p:{x:32.85,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:25,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(34.9568,24.9967,1,1.4013,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkhENQhQAAAAhQIAAl6QAAhQBQAAIJDAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(35,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("AEOkcIobAAQhzAAAABzIAAFTQAABzBzAAIIbAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(36,26.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AkNEdQhzAAAAhzIAAlTQAAhzBzAAIIbAAQBzAAAABzIAAFTQAABzhzAAgAk6ipIAAFTQAAAtAtAAIIbAAQAtAAAAgtIAAlTQAAgtgtAAIobAAQgtAAAAAtg");
	this.shape_9.setTransform(36,26.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkNDXQgtAAAAgtIAAlTQAAgtAtAAIIbAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(37,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(37,27.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_13.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_14.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,79,59);


(lib.DBLA_AreaTrapezoid_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("+", "bold 22px 'DBLMuli'", "#007DC4");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 33;
	this.lblText.parent = this;
	this.lblText.setTransform(62.5,12);

	this.lblText_1 = new cjs.Text("h", "italic bold 22px 'PT Serif'", "#007DC4");
	this.lblText_1.name = "lblText_1";
	this.lblText_1.lineHeight = 34;
	this.lblText_1.lineWidth = 14;
	this.lblText_1.parent = this;
	this.lblText_1.setTransform(110.05,11.7);

	this.lblText_2 = new cjs.Text("b", "italic bold 22px 'PT Serif'", "#007DC4");
	this.lblText_2.name = "lblText_2";
	this.lblText_2.lineHeight = 34;
	this.lblText_2.lineWidth = 14;
	this.lblText_2.parent = this;
	this.lblText_2.setTransform(81.2,11.7);

	this.lblText_3 = new cjs.Text(")", "bold 22px 'DBLMuli'", "#007DC4");
	this.lblText_3.name = "lblText_3";
	this.lblText_3.lineHeight = 33;
	this.lblText_3.parent = this;
	this.lblText_3.setTransform(102.3,12);

	this.lblText_4 = new cjs.Text("2", "bold 14px 'DBLMuli'", "#007DC4");
	this.lblText_4.name = "lblText_4";
	this.lblText_4.lineHeight = 23;
	this.lblText_4.lineWidth = 8;
	this.lblText_4.parent = this;
	this.lblText_4.setTransform(93.65,21.8);

	this.lblText_5 = new cjs.Text("1", "bold 14px 'DBLMuli'", "#007DC4");
	this.lblText_5.name = "lblText_5";
	this.lblText_5.lineHeight = 23;
	this.lblText_5.lineWidth = 8;
	this.lblText_5.parent = this;
	this.lblText_5.setTransform(48.15,21.65);

	this.lblText_6 = new cjs.Text("b", "italic bold 22px 'PT Serif'", "#007DC4");
	this.lblText_6.name = "lblText_6";
	this.lblText_6.lineHeight = 34;
	this.lblText_6.lineWidth = 14;
	this.lblText_6.parent = this;
	this.lblText_6.setTransform(35.55,11.7);

	this.lblText_7 = new cjs.Text("½(", "bold 22px 'DBLMuli'", "#007DC4");
	this.lblText_7.name = "lblText_7";
	this.lblText_7.lineHeight = 33;
	this.lblText_7.parent = this;
	this.lblText_7.setTransform(7,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0)").s().p("Ao3C7IAAl1IRvAAIAAF1g");
	this.shape.setTransform(65.1,25.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lblText_7,p:{x:7,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:29,color:"#007DC4"}},{t:this.lblText_6,p:{x:35.55,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText_5,p:{x:48.15,y:21.65,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_4,p:{x:93.65,y:21.8,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_3,p:{x:102.3,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#007DC4"}},{t:this.lblText_2,p:{x:81.2,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText_1,p:{x:110.05,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText,p:{x:62.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#007DC4"}}]}).to({state:[{t:this.shape},{t:this.lblText_7,p:{x:5,y:10.85,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:30,color:"#007DC4"}},{t:this.lblText_6,p:{x:35.05,y:10.55,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,color:"#007DC4"}},{t:this.lblText_5,p:{x:48.05,y:21,font:"bold 15px 'DBLMuli'",lineHeight:23.9,lineWidth:9,color:"#007DC4"}},{t:this.lblText_4,p:{x:95.6,y:21,font:"bold 15px 'DBLMuli'",lineHeight:23.9,lineWidth:9,color:"#007DC4"}},{t:this.lblText_3,p:{x:104.4,y:10.95,font:"bold 23px 'DBLMuli'",lineHeight:33.95,color:"#007DC4"}},{t:this.lblText_2,p:{x:82.45,y:10.7,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,color:"#007DC4"}},{t:this.lblText_1,p:{x:112.65,y:10.55,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,color:"#007DC4"}},{t:this.lblText,p:{x:62.6,y:11,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:14,color:"#007DC4"}}]},9).to({state:[{t:this.shape},{t:this.lblText_7,p:{x:9,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:28,color:"#007DC4"}},{t:this.lblText_6,p:{x:36.5,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,color:"#007DC4"}},{t:this.lblText_5,p:{x:48.2,y:20.75,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_4,p:{x:91.6,y:20.95,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_3,p:{x:99.9,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,color:"#007DC4"}},{t:this.lblText_2,p:{x:79.95,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,color:"#007DC4"}},{t:this.lblText_1,p:{x:107.4,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,color:"#007DC4"}},{t:this.lblText,p:{x:61.75,y:12,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:13,color:"#007DC4"}}]},10).to({state:[{t:this.shape},{t:this.lblText_7,p:{x:7,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:29,color:"#447D9D"}},{t:this.lblText_6,p:{x:35.55,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#447D9D"}},{t:this.lblText_5,p:{x:48.15,y:21.65,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#447D9D"}},{t:this.lblText_4,p:{x:93.65,y:21.8,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#447D9D"}},{t:this.lblText_3,p:{x:102.3,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#447D9D"}},{t:this.lblText_2,p:{x:81.2,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#447D9D"}},{t:this.lblText_1,p:{x:110.05,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#447D9D"}},{t:this.lblText,p:{x:62.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#447D9D"}}]},10).to({state:[{t:this.shape},{t:this.lblText_7,p:{x:7,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:29,color:"#007DC4"}},{t:this.lblText_6,p:{x:35.55,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText_5,p:{x:48.15,y:21.65,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_4,p:{x:93.65,y:21.8,font:"bold 14px 'DBLMuli'",lineHeight:22.65,lineWidth:8,color:"#007DC4"}},{t:this.lblText_3,p:{x:102.3,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,color:"#007DC4"}},{t:this.lblText_2,p:{x:81.2,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText_1,p:{x:110.05,y:11.7,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,color:"#007DC4"}},{t:this.lblText,p:{x:62.5,y:12,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:13,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AovDmQhGAAAAhGIAAk/QAAhGBGAAIRfAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape_1.setTransform(65,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9F9F9").s().p("ApDD6QhGAAAAhGIAAlnQAAhGBGAAISHAAQBGAAAABGIAAFnQAABGhGAAg");
	this.shape_2.setTransform(65,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBFBF").s().p("AolDSQg8AAAAg8IAAkrQAAg8A8AAIRLAAQA8AAAAA8IAAErQAAA8g8AAg");
	this.shape_3.setTransform(65,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E5E5").s().p("AovDmQhGAAAAhGIAAk/QAAhGBGAAIRfAAQBGAAAABGIAAE/QAABGhGAAg");
	this.shape_4.setTransform(66,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// base
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_5.setTransform(65,25.0037,1,1.0009);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApNENQhQAAAAhQIAAl6QAAhQBQAAISbAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_6.setTransform(65,25.0106,1,1.0019);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AolDmQhQAAAAhQIAAkrQAAhQBQAAIRLAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_7.setTransform(65,24.9957,1,0.9998);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(66,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_8}]},10).wait(11));

	// highlight
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B87700").ss(1,1,1).p("Ao4kSIRxAAQBpAAAABpIAAFTQAABphpAAIxxAAQhpAAAAhpIAAlTQAAhpBpAAg");
	this.shape_9.setTransform(66.025,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("Ao4ETQhpAAAAhpIAAlTQAAhpBpAAIRxAAQBpAAAABpIAAFTQAABphpAAgAqIipIAAFTQAABQBQAAIRxAAQBQAAAAhQIAAlTQAAhQhQAAIxxAAQhQAAAABQg");
	this.shape_10.setTransform(66.025,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(67,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("Ao5D6QhQAAAAhQIAAlTQAAhQBQAAIRzAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(67,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:67,y:27.0037}}]}).to({state:[{t:this.shape_12}]},9).to({state:[]},10).to({state:[{t:this.shape_11,p:{x:66,y:26.0037}}]},10).to({state:[{t:this.shape_11,p:{x:66,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("AqJD6IAAnzIUTAAIAAHzg");
	this.shape_13.setTransform(65,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.5,136.70000000000002,57);


(lib.DBLA_AreaRectangle_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.text = new cjs.Text("lw", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text.lineHeight = 34;
	this.text.parent = this;
	this.text.setTransform(12,11.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(9).to({x:11,y:10.85,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:25},0).wait(10).to({x:13,y:11.7,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:22},0).wait(10).to({x:12,font:"italic bold 22px 'PT Serif'",color:"#447D9D",lineHeight:33.55,lineWidth:24},0).wait(10).to({color:"#007DC4"},0).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_AreaParallelogram_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.lblText = new cjs.Text("bh", "italic bold 22px 'PT Serif'", "#007DC4");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 34;
	this.lblText.parent = this;
	this.lblText.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(9).to({x:11,y:11,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:27},0).wait(10).to({x:13,y:12,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:24},0).wait(10).to({x:12,font:"italic bold 22px 'PT Serif'",color:"#447D9D",lineHeight:33.55,lineWidth:25},0).wait(10).to({color:"#007DC4"},0).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_AreaCircle_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lblText
	this.text = new cjs.Text("2", "bold 14px 'DBLMuli'", "#007DC4");
	this.text.lineHeight = 23;
	this.text.parent = this;
	this.text.setTransform(33.3,12.1);

	this.text_1 = new cjs.Text("r", "italic bold 22px 'PT Serif'", "#007DC4");
	this.text_1.lineHeight = 34;
	this.text_1.parent = this;
	this.text_1.setTransform(23.7,11.6);

	this.text_2 = new cjs.Text("π", "bold 22px 'DBLMuli'", "#007DC4");
	this.text_2.lineHeight = 33;
	this.text_2.parent = this;
	this.text_2.setTransform(10,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{x:10,y:11.9,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#007DC4"}},{t:this.text_1,p:{x:23.7,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:10,color:"#007DC4"}},{t:this.text,p:{x:33.3,y:12.1,font:"bold 14px 'DBLMuli'",lineHeight:22.65,color:"#007DC4"}}]}).to({state:[{t:this.text_2,p:{x:9,y:11.1,font:"bold 23px 'DBLMuli'",lineHeight:33.95,lineWidth:14,color:"#007DC4"}},{t:this.text_1,p:{x:23,y:10.8,font:"italic bold 23px 'PT Serif'",lineHeight:34.85,lineWidth:10,color:"#007DC4"}},{t:this.text,p:{x:33.15,y:11,font:"bold 15px 'DBLMuli'",lineHeight:23.9,color:"#007DC4"}}]},9).to({state:[{t:this.text_2,p:{x:10,y:11.9,font:"bold 21px 'DBLMuli'",lineHeight:31.45,lineWidth:13,color:"#007DC4"}},{t:this.text_1,p:{x:22.9,y:11.5,font:"italic bold 21px 'PT Serif'",lineHeight:32.3,lineWidth:9,color:"#007DC4"}},{t:this.text,p:{x:31.85,y:11.8,font:"bold 14px 'DBLMuli'",lineHeight:22.65,color:"#007DC4"}}]},10).to({state:[{t:this.text_2,p:{x:10,y:11.9,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#447D9D"}},{t:this.text_1,p:{x:23.7,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:10,color:"#447D9D"}},{t:this.text,p:{x:33.3,y:12.1,font:"bold 14px 'DBLMuli'",lineHeight:22.65,color:"#447D9D"}}]},10).to({state:[{t:this.text_2,p:{x:10,y:11.9,font:"bold 22px 'DBLMuli'",lineHeight:32.7,lineWidth:14,color:"#007DC4"}},{t:this.text_1,p:{x:23.7,y:11.6,font:"italic bold 22px 'PT Serif'",lineHeight:33.55,lineWidth:10,color:"#007DC4"}},{t:this.text,p:{x:33.3,y:12.1,font:"bold 14px 'DBLMuli'",lineHeight:22.65,color:"#007DC4"}}]},10).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,26.5037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.FlyoutOverlay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(196,196,196,0.498)").s().p("EhP/AMgIAA4/MCf/AAAIAAY/g");
	this.shape.setTransform(512,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FlyoutOverlay, new cjs.Rectangle(0,0,1024,160), null);


(lib.DBLA_Exponent_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Exponent
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(1.5,0,1).p("AAcAsIg3AAIAAhXIA3AAg");
	this.shape.setTransform(33.2148,14,1.0088,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3A3A3A").ss(2).p("AA2BmIhrAAQgEAAgDgDQgDgDAAgEIAAi3QAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEIAAC3QAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(19.445,26.1,1.0088,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3A3A3A").ss(1.5,0,1).p("AAcAtIg3AAIAAhZIA3AAg");
	this.shape_2.setTransform(33.0978,13.5705,1.0536,1.0703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.0088,scaleY:1,x:19.445,y:26.1}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{scaleX:1.0536,scaleY:1.0703,x:18.7165,y:26.5211}},{t:this.shape_2,p:{scaleX:1.0536,scaleY:1.0703,x:33.0978,y:13.5705}}]},9).to({state:[{t:this.shape_1,p:{scaleX:0.9432,scaleY:0.9505,x:19.3947,y:25.6938}},{t:this.shape_2,p:{scaleX:0.9432,scaleY:0.9505,x:32.2691,y:14.193}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:19.375,y:26.1}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:33.025,y:14}}]},10).to({state:[{t:this.shape},{t:this.shape_1,p:{scaleX:1.0088,scaleY:1,x:19.445,y:26.1}}]},10).wait(11));

	// inset
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(25,25.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_8.setTransform(25,25.0106,1,1.0019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(25,24.9957,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(11));

	// shdw
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_15.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_CustomRoot_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CustomRoot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("ACfhzIjGAAIgkDhIgHAAIglhwIgnAAAB2B1IhdAAQgEAAgDgDQgDgDAAgEIAAigQAAgEADgCQADgEAEAAIBdAAQAEAAADAEQADACAAAEIAACgQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(24.9,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3A3A3A").ss(1.5,0,1).p("AAcAtIg3AAIAAhYIA3AAg");
	this.shape_1.setTransform(12.075,13.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:12.075,y:13.45}},{t:this.shape,p:{scaleX:1,scaleY:1,x:24.9,y:24.8}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.0536,scaleY:1.0703,x:11.0404,y:12.9713}},{t:this.shape,p:{scaleX:1.0536,scaleY:1.0703,x:24.5525,y:25.1192}}]},9).to({state:[{t:this.shape_1,p:{scaleX:0.9432,scaleY:0.9505,x:12.5059,y:13.6276}},{t:this.shape,p:{scaleX:0.9432,scaleY:0.9505,x:24.6021,y:24.4156}}]},10).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:24.9,y:24.8}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:12.075,y:13.45}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:12.075,y:13.45}},{t:this.shape,p:{scaleX:1,scaleY:1,x:24.9,y:24.8}}]},10).wait(11));

	// inset
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_2}]},10).wait(11));

	// base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_6.setTransform(25,25.0037,1,1.0009);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_7.setTransform(25,25.0106,1,1.0019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_8.setTransform(25,24.9957,1,0.9998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_6}]},10).wait(11));

	// highlight
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_12.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},39).wait(11));

	// shdw
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_13.setTransform(27,27.0037,1,1.0009);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Cubed_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cubed
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(2).p("AA2BmIhrAAQgEAAgDgDQgDgDAAgEIAAi3QAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEIAAC3QAAAEgDADQgDADgEAAg");
	this.shape.setTransform(19.4,26.2,1.0022,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AgWAsQgJgJgBgMIASgCQAAAGAFAFQAEAEAFAAQAGAAADgFQAFgFAAgHQAAgIgFgEQgDgEgGAAIgIABIADgOQAHAAAEgEQADgEAAgFQAAgGgCgDQgEgDgEAAQgDAAgFAEQgEAEAAAGIgSgDQABgJAEgGQAFgFAGgDQAIgEAHAAQANAAAJAKQAHAIAAAIQAAANgOAJQAIABAFAGQAFAHAAAJQABAMgKAKQgKAKgOAAQgNAAgJgIg");
	this.shape_1.setTransform(32.6539,13.175,1.0022,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.0022,scaleY:1,x:32.6539,y:13.175}},{t:this.shape,p:{scaleX:1.0022,scaleY:1,x:19.4,y:26.2}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.0536,scaleY:1.0703,x:33.1333,y:12.5805}},{t:this.shape,p:{scaleX:1.0536,scaleY:1.0703,x:19.1998,y:26.5211}}]},9).to({state:[{t:this.shape_1,p:{scaleX:0.9432,scaleY:0.9505,x:31.9386,y:13.3138}},{t:this.shape,p:{scaleX:0.9432,scaleY:0.9505,x:19.4651,y:25.6938}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:32.6,y:13.075}},{t:this.shape,p:{scaleX:1,scaleY:1,x:19.375,y:26.1}}]},10).to({state:[{t:this.shape_1,p:{scaleX:1.0022,scaleY:1,x:32.6539,y:13.175}},{t:this.shape,p:{scaleX:1.0022,scaleY:1,x:19.4,y:26.2}}]},10).wait(11));

	// inset
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_2}]},10).wait(11));

	// base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_6.setTransform(25,25.0037,1,1.0009);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_7.setTransform(25,25.0106,1,1.0019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_8.setTransform(25,24.9957,1,0.9998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_9.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_6}]},10).wait(11));

	// highlight
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_12.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},39).wait(11));

	// shdw
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_13.setTransform(27,27.0037,1,1.0009);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_13}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_ArrowR_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404040").s().p("AArBBIgDgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgeIitAAQgFAAgCgDQgEgDAAgEIAAgoQAAgDAEgDQACgDAFAAICtAAIAAgeQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIBiA8IACADIAAACIgCACIhiA8IgCABIgBAAg");
	this.shape.setTransform(25.5875,25.4771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404040").s().p("AAuBEIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgfIi4AAQgFAAgDgDQgDgEAAgEIAAgqQAAgEADgDQADgDAFAAIC4AAIAAggQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADgCQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIBoBAIACACIAAADIgCACIhoBAIgCABIgBgBg");
	this.shape_1.setTransform(25.5125,25.9021);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AApA+IgCgBQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgdIimAAQgEAAgDgDQgDgDAAgEIAAgmQAAgDADgDQADgDAEAAICmAAIAAgdQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIBeA6IACACIAAACIgCACIheA6IgCAAIgBAAg");
	this.shape_2.setTransform(25.5125,25.1771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:25.5875,y:25.4771}}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape,p:{x:26.5875,y:26.4771}}]},10).to({state:[{t:this.shape,p:{x:25.5875,y:25.4771}}]},10).wait(11));

	// inset
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(25,25.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_8.setTransform(25,25.0106,1,1.0019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(25,24.9957,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(11));

	// shdw
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_15.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_ArrowL_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404040").s().p("AgtBAIhig8IgCgCIAAgCIACgDIBig8QAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIADACQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIAAAeICtAAQAFAAACADQAEADAAADIAAAoQAAAEgEADQgCADgFAAIitAAIAAAeQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgBAAIgCgBg");
	this.shape.setTransform(24.5625,25.4771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404040").s().p("AgwBEIhng/IgDgDIAAgCIADgDIBng/QABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAIADADQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAgIC4AAQAFAAACADQAEADAAAEIAAAqQAAAEgEAEQgCADgFAAIi4AAIAAAgQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgDACIgBAAIgCgBg");
	this.shape_1.setTransform(24.5125,25.89);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AgrA9Iheg5IgCgDIAAgCIACgCIBeg5QAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADACIACACIAAAdICmAAQAEAAACADQAEACAAAEIAAAmQAAADgEAEQgCADgEAAIimAAIAAAcQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACIAAAAIgCgBg");
	this.shape_2.setTransform(25.0125,25.2021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:24.5625,y:25.4771}}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape,p:{x:25.5625,y:26.4771}}]},10).to({state:[{t:this.shape,p:{x:24.5625,y:25.4771}}]},10).wait(11));

	// inset
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(25,25.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_8.setTransform(25,25.0106,1,1.0019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(25,24.9957,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(11));

	// shdw
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_15.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_AbsValue_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// AbsVal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A3A").s().p("AgGCDIAAkFIANAAIAAEFg");
	this.shape.setTransform(41.7922,25.0146,1.1726,1.1726);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AgHCDIAAkFIAPAAIAAEFg");
	this.shape_1.setTransform(9.1351,25.0146,1.1726,1.1726);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3A3A3A").ss(2).p("AA2BmIhrAAQgEAAgDgDQgDgDAAgEIAAi3QAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEIAAC3QAAAEgDADQgDADgEAAg");
	this.shape_2.setTransform(25.2408,24.2829,1.1729,1.1729);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1.1729,scaleY:1.1729,x:25.2408,y:24.2829}},{t:this.shape_1,p:{scaleX:1.1726,scaleY:1.1726,x:9.1351,y:25.0146}},{t:this.shape,p:{scaleX:1.1726,scaleY:1.1726,x:41.7922,y:25.0146}}]}).to({state:[{t:this.shape_2,p:{scaleX:1.2272,scaleY:1.2554,x:25.2089,y:24.6113}},{t:this.shape_1,p:{scaleX:1.2269,scaleY:1.2549,x:8.0877,y:25.8343}},{t:this.shape,p:{scaleX:1.2269,scaleY:1.2549,x:42.2568,y:25.8343}}]},9).to({state:[{t:this.shape_2,p:{scaleX:1.1063,scaleY:1.1148,x:24.9764,y:23.9182}},{t:this.shape_1,p:{scaleX:1.1058,scaleY:1.1144,x:9.3419,y:24.6275}},{t:this.shape,p:{scaleX:1.1058,scaleY:1.1144,x:40.139,y:24.6275}}]},10).to({state:[{t:this.shape_2,p:{scaleX:1.1729,scaleY:1.1729,x:25.2408,y:24.2829}},{t:this.shape_1,p:{scaleX:1.1726,scaleY:1.1726,x:9.1351,y:25.0146}},{t:this.shape,p:{scaleX:1.1726,scaleY:1.1726,x:41.7922,y:25.0146}}]},10).to({state:[{t:this.shape_2,p:{scaleX:1.1729,scaleY:1.1729,x:25.2408,y:24.2829}},{t:this.shape_1,p:{scaleX:1.1726,scaleY:1.1726,x:9.1284,y:25.0643}},{t:this.shape,p:{scaleX:1.1726,scaleY:1.1726,x:41.7851,y:25.0643}}]},10).wait(11));

	// inset
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_4.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_5.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_6.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(25,25.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_8.setTransform(25,25.0106,1,1.0019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(25,24.9957,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_10.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_7}]},10).wait(11));

	// highlight
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_11.setTransform(25,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(11));

	// shdw
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_14.setTransform(27,27.0037,1,1.0009);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_15.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).to({state:[{t:this.shape_14}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_16.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Tab_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.IconTab();
	this.instance.setTransform(37.65,31.3,0.929,0.9238,0,0,0,24.4,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:21,regY:13.4,scaleX:1,scaleY:1.0006,x:34.5,y:26.4},0).wait(10).to({regX:24.4,regY:18.7,scaleX:0.8814,scaleY:0.8468,x:37.5,y:29.85},0).wait(10).to({scaleX:0.929,scaleY:0.9238,x:37.65,y:31.3},0).wait(21));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(35.9138,24.9967,1,1.4373,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkpENQhQAAAAhQIAAl6QAAhQBQAAIJTAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(35.8,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("AEOkcIobAAQhzAAAABzIAAFTQAABzBzAAIIbAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(35,25.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AkNEdQhzAAAAhzIAAlTQAAhzBzAAIIbAAQBzAAAABzIAAFTQAABzhzAAgAk6ipIAAFTQAAAtAtAAIIbAAQAtAAAAgtIAAlTQAAgtgtAAIobAAQgtAAAAAtg");
	this.shape_9.setTransform(35,25.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkNDXQgtAAAAgtIAAlTQAAgtAtAAIIbAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(35,25.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(37,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(37,27.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_13.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]},10).wait(11));

	// hit
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_14.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,79,59);


(lib.KeyBase_medcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {up:0,over:9,down:19,disabled:29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(11));

	// Layer_2
	this.instance = new lib.IconTab();
	this.instance.setTransform(37.65,31.3,0.929,0.9238,0,0,0,24.4,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.8814,scaleY:0.8468,x:37.5,y:29.85},0).wait(10).to({scaleX:0.929,scaleY:0.9238,x:37.65,y:31.3},0).wait(11));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_5.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_6.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).wait(11));

	// shdw
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(37,27.0037,1,1.0009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_8.setTransform(37,27.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_9.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_7,p:{x:36,y:26.0037}}]},10).wait(11));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_10.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},29).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,52);


(lib.DBLA_HideKeyboard_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.instance = new lib.lower_keys_icon();
	this.instance.setTransform(25,21.1,1,1,0,0,0,16.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regY:9.7,scaleX:1.0294,scaleY:1.0283,x:24.75,y:20.95},0).wait(10).to({regX:16.6,scaleX:0.9853,scaleY:0.985,x:24.6,y:21.55},0).wait(10).to({regX:16.5,regY:9.6,scaleX:1,scaleY:1,x:25,y:21.1},0).wait(21));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(25,24.9935,0.9999,1.0008,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_Feedback_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.instance = new lib.IconEnvelope();
	this.instance.setTransform(22.55,22.5,1.0033,1.0017,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:12.6,scaleX:1.1371,scaleY:1.1352,x:22.35,y:22.2},0).wait(10).to({scaleX:0.9364,scaleY:0.9349,x:22.8,y:22.7},0).wait(10).to({regX:12.5,scaleX:1.0033,scaleY:1.0017,x:22.55,y:22.5},0).wait(21));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(24.9969,25.0182,0.92,0.9218,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(24.9972,24.9967,1,1.0009,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(24.9591,24.988,0.84,0.8406,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(25.9969,26.0182,0.92,0.9218,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(25,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai9ENQhQAAAAhQIAAl6QAAhQBQAAIF7AAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(25,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiVDmQhQAAAAhQIAAkrQAAhQBQAAIErAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(25,24.9957,1,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(26,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("ACqkcIlTAAQhzAAAABzIAAFTQAABzBzAAIFTAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AipEdQhzAAAAhzIAAlTQAAhzBzAAIFTAAQBzAAAABzIAAFTQAABzhzAAgAjWipIAAFTQAAAtAtAAIFTAAQAtAAAAgtIAAlTQAAgtgtAAIlTAAQgtAAAAAtg");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipDXQgtAAAAgtIAAlTQAAgtAtAAIFTAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(27,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(27,27.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_11}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},9).wait(10).to({_off:false,scaleX:0.88,scaleY:0.8808,x:25.0305,y:25.0111},0).wait(10).to({scaleX:1,scaleY:1.0009,x:26,y:26.0037},0).wait(10).to({x:27,y:27.0037},0).wait(11));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,0,0)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_13.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,59,59);


(lib.DBLA_KeyboardFlyout = function(mode,startPosition,loop,reversed) {
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
	this.nineslice_14_14_46_46 = new lib.nineslice_14_14_46_46();
	this.nineslice_14_14_46_46.name = "nineslice_14_14_46_46";
	this.nineslice_14_14_46_46.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_14_14_46_46).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E0E0").s().p("Aj5FeQhkAAAAhkIAAnzQAAhkBkAAIHzAAQBkAAAABkIAAHzQAABkhkAAg");
	this.shape.setTransform(37,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj5FyQh4AAAAh4IAAnzQAAh4B4AAIHzAAQB4AAAAB4IAAHzQAAB4h4AAg");
	this.shape_1.setTransform(37,36.998,1,0.9993);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("Aj5FyQh4AAAAh4IAAnzQAAh4B4AAIHzAAQB4AAAAB4IAAHzQAAB4h4AAg");
	this.shape_2.setTransform(39,38.998,1,0.9993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLA_KeyboardFlyout, new cjs.Rectangle(0,0,76,76), null);


(lib.DBLA_Backspace_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":29,"Highlight":39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// glyph
	this.instance = new lib.IconBackspace();
	this.instance.setTransform(34,26.05,0.935,0.92,0,0,0,21.4,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:0.9817,scaleY:0.9999,y:25.1},0).wait(10).to({regX:21.5,regY:13.2,scaleX:0.8882,scaleY:0.84,x:34.1,y:26.05},0).wait(10).to({regX:21.4,regY:13.1,scaleX:0.935,scaleY:0.92,x:34},0).wait(21));

	// inset
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape.setTransform(34.9842,25.0182,0.92,1.3212,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_1.setTransform(35.4992,24.9967,1,1.4213,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_2.setTransform(34.5197,24.988,0.84,1.2211,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("Ai9D6Qg8AAAAg8IAAl7QAAg8A8AAIF7AAQA8AAAAA8IAAF7QAAA8g8AAg");
	this.shape_3.setTransform(35.9842,26.0182,0.92,1.3212,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape}]},10).wait(11));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_4.setTransform(35,25.0037,1,1.0009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkoENQhQAAAAhQIAAl6QAAhQBQAAIJSAAQBQAAAABQIAAF6QAABQhQAAg");
	this.shape_5.setTransform(35.75,25.0106,1,1.0019);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AjzDmQhQAAAAhQIAAkrQAAhQBQAAIHnAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_6.setTransform(34.4785,24.9957,1.0016,0.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_7.setTransform(36,26.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// highlight
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B87700").ss(1,1,1).p("AEOkcIobAAQhzAAAABzIAAFTQAABzBzAAIIbAAQBzAAAAhzIAAlTQAAhzhzAAg");
	this.shape_8.setTransform(35,25.0037,1,1.0009);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AkNEdQhzAAAAhzIAAlTQAAhzBzAAIIbAAQBzAAAABzIAAFTQAABzhzAAgAk6ipIAAFTQAAAtAtAAIIbAAQAtAAAAgtIAAlTQAAgtgtAAIobAAQgtAAAAAtg");
	this.shape_9.setTransform(35,25.0037,1,1.0009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkNDXQgtAAAAgtIAAlTQAAgtAtAAIIbAAQAtAAAAAtIAAFTQAAAtgtAAg");
	this.shape_10.setTransform(35,25.0037,1,1.0009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},39).wait(11));

	// shdw
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_11.setTransform(37,27.0037,1,1.0009);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AkND6QhQAAAAhQIAAlTQAAhQBQAAIIbAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_12.setTransform(37,27.0037,1,1.0009);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("Aj0DmQhQAAAAhQIAAkrQAAhQBQAAIHpAAQBQAAAABQIAAErQAABQhQAAg");
	this.shape_13.setTransform(34.5,24.9957,1,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},10).to({state:[{t:this.shape_11,p:{x:36,y:26.0037}}]},10).to({state:[{t:this.shape_11,p:{x:37,y:27.0037}}]},10).wait(11));

	// hit
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,255,0,0)").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_14.setTransform(35,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},29).wait(10).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,79,59);


(lib.DBLA_Feedback_btn_tmp = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DBLA_Feedback_btn();
	this.instance.setTransform(28.5,29.9,1,0.9998,0,0,0,28.5,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLA_Feedback_btn_tmp, new cjs.Rectangle(0,0,52,52), null);


// stage content:
(lib.KeyboardSkin_2020 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlyoutDetails
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(538.75,643.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_1.setTransform(578.5,616);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_2.setTransform(579.35,676);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_3.setTransform(598.75,644.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_4.setTransform(456.4,278.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_5.setTransform(447.275,280.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgDQACANAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgJQgFgHAAgKQAAgJAFgHQAEgIAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAEADAEQADAEAGACIATAGQAXAGAKAFQAJADAGAHQAFAIAAAMQAAALgGAJQgHAKgMAGQgNAGgPAAQgZAAgOgMg");
	this.shape_6.setTransform(435.475,280.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgDQACANAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgJQgFgHAAgKQAAgJAFgHQAEgIAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAEADAEQADAEAGACIATAGQAXAGAKAFQAJADAGAHQAFAIAAAMQAAALgGAJQgHAKgMAGQgNAGgPAAQgZAAgOgMg");
	this.shape_7.setTransform(424.425,280.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AA6BcIgVg4IhMAAIgUA4IgaAAIBHi3IAZAAIBLC3gAAeAQIgUgxIgMgnQgEASgGARIgUA1IA+AAg");
	this.shape_8.setTransform(411.3,278.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AgdBUQgNgIgIgQQgHgQAAgUQABgUAGgPQAHgQANgJQANgJAQAAQAMAAAJAFQAKAFAFAJIAAhCIAWAAIAAC2IgUAAIAAgRQgNAUgYAAQgQAAgNgJgAgXgOQgLAMABAaQAAAZAKANQALANAOAAQAOAAALgMQAKgMAAgZQAAgbgKgMQgLgNgPAAQgOAAgKAMg");
	this.shape_9.setTransform(392.95,278.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_10.setTransform(380.875,280.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_11.setTransform(372.15,278.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgJAEgJQAEgIAIgFQAHgDAJgDIAUgDQAagDANgFIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAGgEANIgWgCQADgOAHgKQAHgIANgFQANgEAQgBQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_12.setTransform(363.025,280.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgFgIAAQgIAAgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_13.setTransform(354.475,280.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_14.setTransform(343.775,280.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AAfBEIAAhQQABgOgDgGQgDgHgGgFQgHgDgJAAQgOgBgKAKQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAbAAQALAAALAEQAJAFAGAGQAEAIACAJQACAHAAAPIAABRg");
	this.shape_15.setTransform(331.3,280.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_16.setTransform(318.775,280.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AgnBTQgXgLgKgWQgMgWAAgbQAAgaAMgXQALgXAUgMQAVgLAbAAQAUAAAQAHQAQAGAKALQAIAMAFASIgVAHQgFgPgGgIQgGgIgLgEQgMgFgOAAQgPAAgMAFQgMAFgIAIQgIAIgEAKQgHARAAAUQAAAYAIAQQAJARAQAIQARAIARAAQAPAAAPgGQAPgGAIgHIAAgiIg2AAIAAgVIBOAAIAABDQgSAOgTAIQgTAHgUAAQgaAAgWgMg");
	this.shape_17.setTransform(303.35,278.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIADATQgJADgHAAQgNAAgGgEg");
	this.shape_18.setTransform(286.5,278.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AgdBAQgLgFgEgHQgFgHgCgJQgCgHAAgPIAAhRIAXAAIAABJQAAARABAHQACAJAHAEQAHAGAKAAQAJAAAJgGQAJgFAEgIQADgKAAgQIAAhHIAXAAIAACEIgUAAIAAgTQgQAWgZAAQgMAAgKgEg");
	this.shape_19.setTransform(277.325,280.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgRQARgPAYgBQAcABARARQARATAAAfQAAAZgHAOQgIAPgPAJQgOAHgSABQgbAAgRgSgAgbglQgLANAAAYQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_20.setTransform(264.875,280.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgwBaIgCgUQAHACAFAAQAIgBAEgCQAFgCACgFIAHgRIACgFIgyiEIAYAAIAcBMQAFAPAEAQQAEgPAFgPIAdhNIAWAAIgyCGQgJAWgEAIQgFALgIAGQgIAEgKAAQgHAAgIgDg");
	this.shape_21.setTransform(253.25,283.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_22.setTransform(245.625,278.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhjAAIAAA5IBVAAIAAAUIhVAAIAABUg");
	this.shape_23.setTransform(237.25,278.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKAAACQACADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_24.setTransform(972.15,487.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AgdBAQgLgFgEgHQgFgHgCgJQgCgHAAgPIAAhRIAXAAIAABJQAAARABAHQACAJAHAEQAHAGAKgBQAJABAJgGQAJgFAEgIQADgKAAgRIAAhGIAXAAIAACEIgUAAIAAgTQgQAWgZAAQgMAAgKgEg");
	this.shape_25.setTransform(962.975,489.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgRQARgPAYgBQAcABARARQARATAAAfQAAAZgHAOQgIAPgPAJQgOAHgSABQgbAAgRgSgAgbglQgLANAAAYQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_26.setTransform(950.525,489.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AgwBaIgCgUQAHACAFAAQAIgBAFgCQAEgCADgFIAGgRIADgFIgziEIAZAAIAbBMQAGAPADAQQAEgPAFgPIAdhNIAWAAIgyCGQgIAWgFAIQgFALgIAGQgIAEgKAAQgHAAgIgDg");
	this.shape_27.setTransform(938.9,492.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_28.setTransform(931.275,487.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_29.setTransform(927.275,486.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("AgdBUQgNgIgHgQQgIgQABgUQAAgUAGgPQAHgQANgJQANgJAQAAQALAAAKAFQAJAFAGAJIAAhCIAXAAIAAC2IgWAAIAAgRQgMAUgYAAQgPAAgOgJgAgXgOQgLAMAAAaQAAAZALANQALANANAAQAQAAAKgMQAKgMAAgZQAAgbgLgMQgKgNgQAAQgOAAgJAMg");
	this.shape_30.setTransform(911.95,487.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("AAgBEIAAhQQgBgOgCgGQgDgHgGgFQgHgDgJAAQgOgBgKAKQgKAJAAAaIAABHIgXAAIAAiEIAUAAIAAATQAPgWAaAAQAMAAALAEQAJAFAFAGQAGAIABAJQACAHAAAPIAABRg");
	this.shape_31.setTransform(899.9,489.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgJAEgJQAEgIAIgEQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAGgEANIgWgCQADgOAHgKQAHgIANgFQANgEAQgBQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_32.setTransform(887.375,489.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_33.setTransform(869.525,489.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgDQACANAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgHAAgKQAAgJAFgHQAEgIAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAEADAEQADAEAGACIATAGQAXAGAKAFQAJADAGAHQAFAIAAALQAAAMgGAJQgHAKgMAGQgNAGgPAAQgZAAgOgMg");
	this.shape_34.setTransform(857.725,489.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgJAEgJQAEgIAIgEQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAGgEANIgWgCQADgOAHgKQAHgIANgFQANgEAQgBQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_35.setTransform(845.975,489.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0000").s().p("AgkBKIAAAQIgVAAIAAi2IAXAAIAABBQAOgSAWAAQALAAALAFQAMAFAGAJQAIAJADANQAFALAAAPQgBAigRATQgQASgYAAQgXAAgNgTgAgZgNQgLAMAAAYQAAAYAGAKQALASASAAQAOAAALgNQAKgNAAgZQAAgZgKgNQgKgMgOAAQgPAAgKANg");
	this.shape_36.setTransform(833.85,487.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("AAaBCIgVhOIgFgXIgaBlIgXAAIgpiDIAXAAIAVBLIAIAdIAHgcIAVhMIAXAAIATBLIAHAaIAIgaIAWhLIAWAAIgpCDg");
	this.shape_37.setTransform(813.5,489.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0000").s().p("AgjBfIA0i9IATAAIg1C9g");
	this.shape_38.setTransform(802.525,487.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0000").s().p("AgkBKIAAAQIgVAAIAAi2IAXAAIAABBQAOgSAWAAQALAAALAFQAMAFAGAJQAHAJAFANQADALAAAPQAAAigRATQgQASgYAAQgXAAgNgTgAgZgNQgLAMAAAYQAAAYAGAKQALASASAAQAOAAALgNQALgNgBgZQAAgZgKgNQgKgMgOAAQgPAAgKANg");
	this.shape_39.setTransform(793.9,487.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgEQAJgGAMAAQARABANAIQANAJAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPAAQgLgBgJgFQgJgEgFgHIAABAgAgZg9QgLANAAAaQAAAYAKAMQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_40.setTransform(776.075,491.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgJAEgJQAEgIAIgEQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAGgEANIgWgCQADgOAHgKQAHgIANgFQANgEAQgBQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_41.setTransform(763.175,489.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_42.setTransform(754.975,487.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgFgIAAQgIAAgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_43.setTransform(750.725,489.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcAAgRgSgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_44.setTransform(740.025,489.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0000").s().p("AgJBCIgziDIAYAAIAcBOIAIAbIAIgZIAehQIAXAAIgyCDg");
	this.shape_45.setTransform(728.325,489.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgRQARgPAYgBQAcABARARQARATAAAfQAAAZgHAOQgIAPgPAJQgOAHgSABQgbAAgRgSgAgbglQgLANAAAYQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_46.setTransform(716.475,489.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0000").s().p("AAiBCIgbgpIgHgLIgiA0IgbAAIAwhDIgthAIAcAAIAVAfIAJAPIAJgPIAXgfIAbAAIguA+IAxBFg");
	this.shape_47.setTransform(699.425,489.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgEQAJgGAMAAQARABANAIQANAJAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPAAQgLgBgJgFQgJgEgFgHIAABAgAgZg9QgLANAAAaQAAAYAKAMQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_48.setTransform(687.975,491.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0000").s().p("AAQBcIAAgsIhPAAIAAgVIBTh2IASAAIAAB2IAZAAIAAAVIgZAAIAAAsgAgoAbIA4AAIAAhSg");
	this.shape_49.setTransform(674.7,487.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgDQACAMAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgHQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKAAQAPgBAMAFQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADADAGADIATAGQAXAGAKAFQAJACAGAIQAFAIAAALQAAALgGALQgHAJgMAGQgNAFgPABQgZAAgOgLg");
	this.shape_50.setTransform(698.725,853);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_51.setTransform(686.975,853);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_52.setTransform(678.775,850.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_53.setTransform(674.925,850.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_54.setTransform(670.45,850.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_55.setTransform(659.75,850.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgDQACAMAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgHQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKAAQAPgBAMAFQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADADAGADIATAGQAXAGAKAFQAJACAGAIQAFAIAAALQAAALgGALQgHAJgMAGQgNAFgPABQgZAAgOgLg");
	this.shape_56.setTransform(651.325,853);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgSgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_57.setTransform(639.575,853);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0000").s().p("ABEBEIAAhTQAAgNgCgGQgDgGgFgEQgGgDgIgBQgOAAgJAKQgJAJAAAVIAABMIgWAAIAAhVQAAgQgFgHQgGgIgMAAQgKAAgIAGQgJAEgDAKQgDAKAAASIAABEIgXAAIAAiEIAUAAIAAASQAHgJAJgGQALgGANAAQAPAAAKAGQAIAHAEALQAQgYAZAAQAUAAAKALQALALAAAXIAABag");
	this.shape_58.setTransform(623.6,852.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_59.setTransform(611.25,850.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0000").s().p("AAgBcIAAhVQgBgPgGgIQgIgIgOAAQgIAAgJAFQgJAGgEAIQgDAIAAAQIAABJIgXAAIAAi3IAXAAIAABCQAPgSAYAAQAOAAALAGQALAFAFALQAEAKAAASIAABVg");
	this.shape_60.setTransform(602.15,850.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0000").s().p("AgnBVQgOgMAAgVIAVAEQACAJAGAFQAIAGAQAAQAOAAAIgGQAJgGADgMQACgGAAgXQgPASgVAAQgcAAgOgUQgPgTgBgbQABgUAGgPQAHgRANgIQANgJASAAQAXAAAPATIAAgQIAUAAIAAByQAAAfgGANQgGANgOAHQgOAIgSAAQgYAAgPgKgAgYg/QgKAMAAAYQAAAbAKALQAKAMAPgBQAPABALgMQALgLAAgaQgBgZgKgMQgLgNgPAAQgOAAgLANg");
	this.shape_61.setTransform(589.25,855.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_62.setTransform(581.475,850.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgFgIABQgIgBgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_63.setTransform(577.175,852.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgSgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_64.setTransform(561.125,853);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0000").s().p("AAaBDIgVhPIgFgXIgaBmIgYAAIgoiEIAXAAIAVBLIAIAdIAHgbIAVhNIAWAAIAUBLIAHAaIAIgaIAWhLIAWAAIgqCEg");
	this.shape_65.setTransform(546.5,853);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKAAACQACADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_66.setTransform(535.65,850.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_67.setTransform(521.175,853);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC0000").s().p("AAfBcIAAhVQABgPgIgIQgHgIgOAAQgJAAgIAFQgJAGgEAIQgDAIgBAQIAABJIgWAAIAAi3IAWAAIAABCQAQgSAYAAQAOAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_68.setTransform(508.7,850.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_69.setTransform(499.95,850.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgOgCgGQgDgIgHgDQgGgFgJAAQgNABgLAIQgLAKAAAZIAABIIgWAAIAAiEIAUAAIAAATQAPgWAbAAQAMAAAJAFQALADAEAIQAFAGADALQABAFAAAQIAABRg");
	this.shape_70.setTransform(485.5,852.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_71.setTransform(472.975,853);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_72.setTransform(460.475,853);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0000").s().p("AAaBDIgVhPIgFgXIgaBmIgXAAIgpiEIAXAAIAVBLIAIAdIAHgbIAVhNIAXAAIATBLIAHAaIAIgaIAWhLIAWAAIgpCEg");
	this.shape_73.setTransform(445.85,853);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIADATQgJADgHAAQgNAAgGgEg");
	this.shape_74.setTransform(435,850.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_75.setTransform(425.875,853);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0000").s().p("AgkBKIAAAQIgVAAIAAi2IAXAAIAABBQAOgSAWAAQAMAAAKAFQAMAFAGAJQAHAJAFANQADALAAAPQAAAigRATQgQASgYAAQgXAAgNgTgAgZgNQgLAMAAAYQAAAYAGAKQALASATAAQANAAALgNQALgNAAgZQAAgZgLgNQgKgMgOAAQgOAAgLANg");
	this.shape_76.setTransform(413.75,850.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0000").s().p("AgcBUQgOgIgIgQQgGgQAAgUQgBgUAHgPQAGgQAOgJQANgJARAAQALAAAJAFQAJAFAGAJIAAhCIAWAAIAAC2IgVAAIAAgRQgMAUgYAAQgPAAgNgJgAgYgOQgKAMAAAaQAAAZALANQALANANAAQAQAAAKgMQAKgMAAgZQAAgbgKgMQgLgNgQAAQgNAAgLAMg");
	this.shape_77.setTransform(787.45,816.875);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_78.setTransform(775.375,819.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgFgIABQgIgBgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_79.setTransform(766.825,819.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_80.setTransform(756.125,819.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_81.setTransform(747.4,817.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgOgCgGQgDgIgGgDQgHgFgJAAQgNABgLAIQgLAKAAAZIAABIIgWAAIAAiEIAUAAIAAATQAPgWAbAAQALAAAKAFQAKADAGAIQAFAGACALQABAFAAAQIAABRg");
	this.shape_82.setTransform(738.3,819.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_83.setTransform(725.775,819.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0000").s().p("AgpAzQgQgRAAgiQAAgUAHgQQAHgRAPgIQAOgHAQAAQAXAAANALQAOALADATIgVAEQgEgOgHgGQgIgHgMAAQgQAAgKAMQgLANAAAZQAAAbAKAMQALAMAPAAQANAAAKgIQAIgJADgQIAWADQgEAWgPAOQgOAMgXABQgagBgRgSg");
	this.shape_84.setTransform(714.45,819.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_85.setTransform(700.65,817.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgDQACAMAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgHQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKAAQAPgBAMAFQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADADAGADIATAGQAXAGAKAFQAJACAGAIQAFAIAAALQAAALgGALQgHAJgMAGQgNAFgPABQgZAAgOgLg");
	this.shape_86.setTransform(692.225,819.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_87.setTransform(684.825,816.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0000").s().p("AAiBDIgbgqIgHgLIgiA1IgbAAIAwhFIgtg/IAcAAIAVAeIAJAQIAJgPIAXgfIAbAAIguA+IAxBGg");
	this.shape_88.setTransform(677.375,819.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_89.setTransform(665.525,819.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_90.setTransform(651.975,816.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_91.setTransform(648.075,816.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_92.setTransform(644.225,816.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0000").s().p("AAaBDIgVhPIgFgXIgaBmIgXAAIgpiEIAXAAIAVBLIAIAdIAHgbIAVhNIAXAAIATBLIAHAaIAHgaIAXhLIAWAAIgpCEg");
	this.shape_93.setTransform(633.85,819.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQABAKAAACQACADADACQACABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_94.setTransform(617.65,817.025);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0000").s().p("AgdA/QgLgEgEgHQgFgGgCgKQgCgHAAgOIAAhSIAXAAIAABJQAAARABAGQACAJAHAGQAHAEAKAAQAJAAAJgEQAJgGAEgJQADgIAAgSIAAhGIAXAAIAACEIgUAAIAAgTQgQAWgZAAQgMAAgKgFg");
	this.shape_95.setTransform(608.475,819.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgSgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_96.setTransform(596.025,819.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0000").s().p("AgwBaIgDgVQAIACAGAAQAHABAFgDQAEgDADgEIAGgRIADgFIgziEIAZAAIAbBMQAGAPADAQQAEgPAFgPIAchNIAXAAIgyCGQgJAVgDAJQgHALgHAFQgIAFgKABQgHAAgIgEg");
	this.shape_97.setTransform(584.4,821.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_98.setTransform(576.775,816.725);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_99.setTransform(572.775,816.575);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_100.setTransform(557.875,819.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC0000").s().p("AAfBcIAAhVQABgPgIgIQgHgIgNAAQgKAAgIAFQgJAGgEAIQgDAIAAAQIAABJIgXAAIAAi3IAXAAIAABCQAPgSAXAAQAPAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_101.setTransform(545.4,816.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQABAKAAACQACADADACQACABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_102.setTransform(536.65,817.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgFgIABQgIgBgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_103.setTransform(526.125,819.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgSgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_104.setTransform(515.425,819.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_105.setTransform(507.125,816.575);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CC0000").s().p("AgwBaIgCgVQAHACAFAAQAIABAEgDQAFgDACgEIAIgRIABgFIgyiEIAYAAIAcBMQAGAPADAQQAEgPAFgPIAdhNIAWAAIgyCGQgJAVgEAJQgFALgIAFQgIAFgKABQgHAAgIgEg");
	this.shape_106.setTransform(493.1,821.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_107.setTransform(481.175,819.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC0000").s().p("AAcBcIgrhEIgQAPIAAA1IgXAAIAAi3IAXAAIAABoIA0g1IAdAAIgyAwIA3BUg");
	this.shape_108.setTransform(470.25,816.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgSgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_109.setTransform(452.275,819.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgDQACAMAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgHQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKAAQAPgBAMAFQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADADAGADIATAGQAXAGAKAFQAJACAGAIQAFAIAAALQAAALgGALQgHAJgMAGQgNAFgPABQgZAAgOgLg");
	this.shape_110.setTransform(440.475,819.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgLAEgHQAEgIAIgGQAHgEAJgCIAUgDQAagEANgEIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAFgEAOIgWgDQADgOAHgIQAHgJANgFQANgFAQABQARAAALAEQALAEAFAFQAFAHACAJIABAUIAAAeQAAAfABAJQACAIAEAIIgYAAQgDgIgBgJQgNALgLAEQgLAEgNABQgWAAgMgLgAgFAIQgOACgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgJQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_111.setTransform(428.725,819.25);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CC0000").s().p("AhEBcIAAi3IBEAAQAUAAANAGQANAFAHAMQAHALAAANQAAAMgGAKQgGALgNAGQAQAFAJALQAJALAAARQAAAMgFAMQgGALgIAGQgIAGgMADQgMADgRAAgAgsBGIAtAAIAQgBQAIgBAGgEQAGgDADgHQAEgHAAgIQAAgLgFgHQgGgIgJgDQgJgDgRAAIgqAAgAgsgOIAoAAQAPAAAHgCQAJgDAFgGQAEgGAAgKQAAgJgEgHQgEgHgJgDQgIgCgSAAIglAAg");
	this.shape_112.setTransform(415.125,816.725);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_113.setTransform(805.85,616);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_114.setTransform(797.65,676);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_115.setTransform(843.8,644.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CC0000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape_116.setTransform(783.85,649.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaAAARASQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPAMgXAAQgcgBgRgRgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_117.setTransform(695.575,729.95);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CC0000").s().p("AgnBVQgPgMABgVIAVAEQACAJAGAFQAJAGAPABQAOgBAJgGQAIgGADgMQABgGAAgXQgOASgVAAQgcAAgPgUQgOgTAAgcQgBgSAHgQQAHgRANgIQANgJASAAQAWAAAPATIAAgQIAWAAIAAByQAAAfgHANQgGANgOAHQgOAIgSAAQgZAAgOgKgAgYg/QgLAMAAAYQAAAbALALQAKALAPABQAQgBAKgLQAKgLAAgaQABgYgMgNQgKgMgQAAQgNAAgLAMg");
	this.shape_118.setTransform(682.7,732.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CC0000").s().p("AgdBUQgNgIgIgQQgHgQAAgUQABgUAGgPQAHgQANgJQANgJAQAAQAMAAAJAFQAKAFAFAJIAAhCIAWAAIAAC2IgUAAIAAgRQgNAUgYAAQgQAAgNgJgAgXgOQgLAMABAaQAAAZAKANQALANAOAAQAOAAALgMQAKgMAAgZQAAgbgKgMQgLgNgPAAQgOAAgKAMg");
	this.shape_119.setTransform(670.15,727.575);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CC0000").s().p("AhEBcIAAi3ICEAAIAAAWIhsAAIAAA4IBlAAIAAAVIhlAAIAAA+IBxAAIAAAWg");
	this.shape_120.setTransform(657.05,727.425);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgSQARgPAYAAQAcAAARASQARATAAAfQAAAZgHAOQgIAPgPAJQgOAHgSABQgbgBgRgRgAgbglQgLANAAAYQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_121.setTransform(637.375,729.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_122.setTransform(628.65,727.725);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgTAbAAQAaAAARASQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPAMgXAAQgcgBgRgRgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_123.setTransform(614.175,729.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CC0000").s().p("AgnBVQgOgMAAgVIAVAEQACAJAHAFQAHAGAPABQAPgBAIgGQAJgGADgMQACgGAAgXQgPASgVAAQgbAAgPgUQgPgTgBgcQABgSAGgQQAHgRANgIQANgJASAAQAXAAAPATIAAgQIAUAAIAAByQAAAfgGANQgGANgOAHQgNAIgUAAQgXAAgPgKgAgYg/QgKAMAAAYQAAAbAKALQAKALAPABQAPgBALgLQALgLAAgaQgBgYgKgNQgLgMgPAAQgOAAgLAMg");
	this.shape_124.setTransform(601.3,732.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CC0000").s().p("AgcBUQgOgIgHgQQgIgQABgUQAAgUAGgPQAGgQAOgJQANgJAQAAQALAAAKAFQAKAFAFAJIAAhCIAXAAIAAC2IgWAAIAAgRQgMAUgYAAQgPAAgNgJgAgYgOQgJAMgBAaQAAAZALANQALANANAAQAPAAALgMQAKgMAAgZQAAgbgLgMQgKgNgQAAQgOAAgKAMg");
	this.shape_125.setTransform(588.75,727.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CC0000").s().p("AhEBcIAAi3ICEAAIAAAWIhrAAIAAA4IBkAAIAAAVIhkAAIAAA+IBvAAIAAAWg");
	this.shape_126.setTransform(575.65,727.425);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_127.setTransform(1037.825,737.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_128.setTransform(1029.675,734.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgEgIgBQgIABgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_129.setTransform(1025.375,737.15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgKAEgIQAEgHAIgFQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAGgEAOIgWgDQADgPAHgJQAHgIANgFQANgEAQgBQARABALADQALAFAFAGQAFAFACAKIABAVIAAAdQAAAfABAIQACAJAEAHIgYAAQgDgHgBgJQgNALgLAEQgLAFgNgBQgWABgMgLgAgFAJQgOABgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgLQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_130.setTransform(1014.675,737.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CC0000").s().p("AAgBEIAAhQQAAgNgDgIQgDgHgHgEQgGgDgJAAQgNAAgLAJQgLAJABAaIAABHIgXAAIAAiEIAUAAIAAATQAPgWAaAAQANAAAJAEQALAFAEAGQAFAHADAKQABAHAAAPIAABRg");
	this.shape_131.setTransform(1002.2,737.15);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_132.setTransform(989.675,737.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CC0000").s().p("AgpAzQgQgRAAghQAAgVAHgQQAHgRAPgHQAOgJAQAAQAXAAANALQAOALADAVIgVADQgDgNgIgHQgIgHgMAAQgPAAgLAMQgLAMAAAaQAAAbAKAMQALAMAPAAQANAAAKgIQAIgJACgQIAXACQgEAYgPANQgPAMgWAAQgaABgRgTg");
	this.shape_133.setTransform(978.35,737.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAAKgGAKQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_134.setTransform(966.825,737.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CC0000").s().p("AgwBbIgCgWQAHADAFAAQAIAAAFgDQAEgDADgEIAGgQIADgGIgziFIAZAAIAbBOQAGAOADAPQAEgOAFgPIAdhOIAWAAIgyCHQgJAVgEAJQgFALgIAGQgIAEgKAAQgHAAgIgCg");
	this.shape_135.setTransform(950.6,740);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_136.setTransform(942.975,734.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_137.setTransform(934.775,737.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CC0000").s().p("AAcBcIgrhEIgQAPIAAA1IgXAAIAAi3IAXAAIAABoIA0g1IAdAAIgyAwIA3BUg");
	this.shape_138.setTransform(923.85,734.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_139.setTransform(915.575,734.775);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_140.setTransform(911.625,734.775);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgKAEgIQAEgHAIgFQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAGgEAOIgWgDQADgPAHgJQAHgIANgFQANgEAQgBQARABALADQALAFAFAGQAFAFACAKIABAVIAAAdQAAAfABAIQACAJAEAHIgYAAQgDgHgBgJQgNALgLAEQgLAFgNgBQgWABgMgLgAgFAJQgOABgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgLQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_141.setTransform(898.075,737.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKACACQABADACACQADABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_142.setTransform(884,735.075);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_143.setTransform(874.875,737.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CC0000").s().p("AAwBcIhgiQIAACQIgXAAIAAi3IAZAAIBfCPIAAiPIAXAAIAAC3g");
	this.shape_144.setTransform(860.225,734.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CC0000").s().p("AAAAMQgJARgHAKIgPgKIAVgZIgegGIAGgRQATAHAJAFIgDgfIASAAIgDAfQANgHAQgFIAGARQgQAFgPABQAIAHAOASIgQAKIgQgbg");
	this.shape_145.setTransform(847.8,729.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKACACQABADACACQADABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_146.setTransform(1447.4,701.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CC0000").s().p("AgdA/QgLgEgEgHQgFgHgCgKQgCgGAAgPIAAhRIAXAAIAABJQAAARABAHQACAIAHAFQAHAGAKAAQAJAAAJgGQAJgFAEgIQADgKAAgQIAAhHIAXAAIAACEIgUAAIAAgUQgQAXgZAAQgMAAgKgFg");
	this.shape_147.setTransform(1438.225,703.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_148.setTransform(1425.775,703.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CC0000").s().p("AgwBbIgCgWQAHADAFAAQAIAAAEgDQAFgDACgEIAIgQIABgGIgyiFIAYAAIAcBOQAFAOAEAPQADgOAGgPIAdhOIAWAAIgzCHQgIAVgDAJQgGALgIAGQgIAEgLAAQgGAAgIgCg");
	this.shape_149.setTransform(1414.15,706.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_150.setTransform(1406.525,701.025);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_151.setTransform(1402.525,700.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_152.setTransform(1387.625,703.55);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CC0000").s().p("AAfBcIAAhVQAAgPgGgIQgIgIgOAAQgJAAgIAFQgJAGgEAIQgEAIAAAQIAABJIgWAAIAAi3IAWAAIAABCQAQgSAYAAQAOAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_153.setTransform(1375.15,701.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKACACQABADACACQADABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_154.setTransform(1366.4,701.325);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CC0000").s().p("AAgBEIAAhQQAAgNgDgIQgDgHgHgEQgGgDgJAAQgNAAgLAJQgKAJAAAaIAABHIgXAAIAAiEIAUAAIAAATQAPgWAaAAQANAAAKAEQAJAFAFAGQAGAHABAKQACAHAAAPIAABRg");
	this.shape_155.setTransform(1351.95,703.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_156.setTransform(1343.775,701.025);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKAAACQACADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_157.setTransform(1333.95,701.325);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CC0000").s().p("AAgBEIAAhQQAAgNgDgIQgDgHgHgEQgGgDgJAAQgNAAgLAJQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAaAAQANAAAJAEQALAFAEAGQAFAHADAKQABAHAAAPIAABRg");
	this.shape_158.setTransform(1324.85,703.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_159.setTransform(1312.325,703.55);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAAKgGAKQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_160.setTransform(1300.525,703.55);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_161.setTransform(1288.775,703.55);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgEgIgBQgIABgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_162.setTransform(1280.225,703.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#CC0000").s().p("Ag5BeIAAi4IAVAAIAAASQAHgLAJgEQAJgGAMAAQARAAANAJQANAJAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPgBQgLAAgJgEQgJgFgFgHIAABBgAgZg+QgLAOAAAaQAAAZAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLANg");
	this.shape_163.setTransform(1269.925,705.95);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAAKgGAKQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_164.setTransform(1252.375,703.55);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_165.setTransform(1244.975,701.025);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CC0000").s().p("AgwBbIgDgWQAIADAGAAQAHAAAEgDQAFgDACgEIAIgQIABgGIgyiFIAYAAIAcBOQAFAOAEAPQADgOAGgPIAchOIAXAAIgzCHQgHAVgEAJQgHALgHAGQgIAEgLAAQgGAAgIgCg");
	this.shape_166.setTransform(1232.25,706.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_167.setTransform(1220.325,703.55);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CC0000").s().p("AAbBcIgrhEIgPAPIAAA1IgXAAIAAi3IAXAAIAABoIA0g1IAdAAIgyAwIA3BUg");
	this.shape_168.setTransform(1209.4,701.025);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_169.setTransform(1191.425,703.55);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgNgCgIQgDgHgHgEQgGgDgJAAQgNAAgLAJQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAbAAQAMAAAJAEQALAFAFAGQAEAHADAKQABAHAAAPIAABRg");
	this.shape_170.setTransform(1178.95,703.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_171.setTransform(1166.425,703.55);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CC0000").s().p("AgwBbIgDgWQAIADAGAAQAHAAAEgDQAFgDADgEIAHgQIACgGIgziFIAYAAIAcBOQAFAOAEAPQADgOAGgPIAchOIAXAAIgzCHQgHAVgEAJQgHALgHAGQgIAEgLAAQgGAAgIgCg");
	this.shape_172.setTransform(1149.45,706.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_173.setTransform(1141.825,701.025);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgNgCgIQgDgHgGgEQgHgDgJAAQgOAAgKAJQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAbAAQALAAAKAEQAKAFAGAGQAEAHACAKQACAHAAAPIAABRg");
	this.shape_174.setTransform(1133.65,703.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_175.setTransform(1121.125,703.55);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_176.setTransform(1107.475,700.875);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_177.setTransform(1102.275,701.025);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CC0000").s().p("AgwBbIgCgWQAHADAFAAQAIAAAFgDQAEgDACgEIAHgQIACgGIgyiFIAZAAIAbBOQAGAOADAPQADgOAGgPIAdhOIAWAAIgyCHQgJAVgEAJQgFALgIAGQgIAEgKAAQgHAAgIgCg");
	this.shape_178.setTransform(1089.55,706.25);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_179.setTransform(1077.625,703.55);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CC0000").s().p("AAcBcIgrhEIgRAPIAAA1IgWAAIAAi3IAWAAIAABoIA1g1IAdAAIgyAwIA3BUg");
	this.shape_180.setTransform(1066.7,701.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_181.setTransform(1048.725,703.55);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAAKgGAKQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_182.setTransform(1036.925,703.55);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgKAEgIQAEgHAIgFQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAGgEAOIgWgDQADgPAHgJQAHgIANgFQANgEAQgBQARABALADQALAFAFAGQAFAFACAKIABAVIAAAdQAAAfABAIQACAJAEAHIgYAAQgDgHgBgJQgNALgLAEQgLAFgNgBQgWABgMgLgAgFAJQgOABgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgLQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_183.setTransform(1025.175,703.55);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CC0000").s().p("AgkBKIAAAQIgVAAIAAi2IAXAAIAABBQAOgSAWAAQALAAALAFQAMAFAGAJQAHAJAFANQAEALgBAPQAAAigRATQgQASgYAAQgXAAgNgTgAgZgNQgLAMAAAYQAAAYAGAKQALASASAAQAOAAALgNQALgNgBgZQAAgZgKgNQgKgMgOAAQgPAAgKANg");
	this.shape_184.setTransform(1013.05,701.175);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_185.setTransform(994.825,703.55);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CC0000").s().p("AAfBcIAAhVQABgPgIgIQgHgIgNAAQgKAAgIAFQgJAGgEAIQgDAIAAAQIAABJIgXAAIAAi3IAXAAIAABCQAPgSAXAAQAPAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_186.setTransform(982.35,701.025);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CC0000").s().p("AgCBXQgHgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIAEATQgKADgIAAQgMAAgFgEg");
	this.shape_187.setTransform(973.6,701.325);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CC0000").s().p("AAfBEIAAhQQABgNgDgIQgDgHgGgEQgHgDgJAAQgNAAgLAJQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAbAAQAMAAAJAEQAKAFAGAGQAEAHADAKQABAHAAAPIAABRg");
	this.shape_188.setTransform(959.15,703.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARARQARASAAAgQAAAZgHAOQgIAPgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALANQALANAQAAQARAAALgNQALgNAAgZQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_189.setTransform(946.625,703.55);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CC0000").s().p("AgdBUQgNgIgHgQQgIgQAAgUQABgUAGgPQAHgQANgJQANgJAQAAQAMAAAJAFQAJAFAGAJIAAhCIAXAAIAAC2IgVAAIAAgRQgNAUgYAAQgQAAgNgJgAgXgOQgKAMAAAaQAAAZAKANQALANAOAAQAOAAALgMQAKgMAAgZQAAgbgLgMQgKgNgPAAQgPAAgJAMg");
	this.shape_190.setTransform(928.35,701.175);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_191.setTransform(916.275,703.55);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgEgIgBQgIABgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_192.setTransform(907.725,703.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_193.setTransform(897.025,703.55);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_194.setTransform(888.3,701.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CC0000").s().p("AAgBEIAAhQQgBgNgCgIQgDgHgGgEQgHgDgJAAQgOAAgKAJQgKAJAAAaIAABHIgXAAIAAiEIAUAAIAAATQAPgWAaAAQAMAAALAEQAKAFAEAGQAGAHABAKQACAHAAAPIAABRg");
	this.shape_195.setTransform(879.2,703.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARARQARATAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPALgXAAQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_196.setTransform(866.675,703.55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CC0000").s().p("AgqBTQgTgMgKgXQgJgXAAgZQAAgdALgVQAKgWAVgLQAUgLAYAAQAbAAATAOQATAOAHAZIgYAGQgGgUgMgJQgNgJgSAAQgUAAgOAKQgPAKgGARQgFARAAASQAAAXAGARQAHASAPAIQAPAJAPAAQAUAAAOgMQAPgLAFgYIAYAHQgIAdgTAQQgVAQgcAAQgcAAgTgMg");
	this.shape_197.setTransform(852.25,701.025);

	this.InputFlyout_Active = new lib.DBLA_InputFlyout_Active();
	this.InputFlyout_Active.name = "InputFlyout_Active";
	this.InputFlyout_Active.setTransform(788.85,681);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CC0000").s().p("AAfBUQgLgMAAgZQAAgUAKgOQAKgNATAAQARAAALAMQAMAMAAAYQAAAXgMANQgLANgRAAQgRAAgLgNgAAtAWQgFAIAAATQAAARAFAIQAGAHAIAAQAJAAAFgHQAGgIAAgTQAAgSgGgHQgFgHgJAAQgIAAgGAHgAg7BhIBkjBIASAAIhjDBgAhXgLQgLgNAAgZQAAgTAKgOQAKgOATAAQARAAALAMQAMANAAAYQAAAXgMANQgLALgRAAQgRAAgLgLgAhJhJQgFAHAAATQAAASAFAHQAGAIAIAAQAJAAAGgIQAFgHAAgTQAAgSgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_198.setTransform(610.475,378.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgaAAgOgTgAgYg9QgMARABAsQgBAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_199.setTransform(593.65,378.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CC0000").s().p("AgpBQQgQgPgCgXIAWgDQAEATAKAIQAJAJANAAQAPAAALgLQALgLAAgQQAAgQgKgKQgKgKgQAAQgFAAgKACIADgSIADAAQAOAAALgIQAMgHAAgPQAAgNgJgIQgIgJgMABQgNgBgJAJQgJAIgDAQIgWgDQAEgXAPgMQAOgNAXAAQAOAAAMAGQAMAHAHALQAHALAAANQAAAMgHAJQgGAKgNAGQARAEAJALQAJAMAAARQAAAZgRAQQgSARgaAAQgYAAgQgOg");
	this.shape_200.setTransform(581.2,378.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAGgUAOgLQANgLATAAQAPAAALAGQALAGAHAMQAHALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgZAAgPgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQALgPgBgtQABgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_201.setTransform(563.3,378.475);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAHAMQAHALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgaAAgOgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_202.setTransform(550.8,378.475);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAFAQQAEAQAAAaQAAAhgHATQgGAUgOALQgNALgUAAQgaAAgPgTgAgYg9QgMARABAsQgBAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_203.setTransform(538.3,378.475);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAIAMQAHALAEAQQAEAQAAAaQAAAhgHATQgGAUgOALQgNALgUAAQgaAAgPgTgAgYg9QgLARAAAsQAAAtAKAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_204.setTransform(525.8,378.475);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAEAQQAFAQAAAaQAAAhgHATQgHAUgMALQgOALgUAAQgaAAgPgTgAgYg9QgLARAAAsQAAAtAKAPQAKAPAPAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_205.setTransform(513.3,378.475);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAGgUAOgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAEAQQAFAQAAAaQAAAhgHATQgGAUgNALQgOALgUAAQgaAAgPgTgAgYg9QgLARAAAsQAAAtAKAPQAKAPAPAAQAQAAAKgPQAKgPABgtQgBgsgKgPQgKgPgQAAQgPAAgJANg");
	this.shape_206.setTransform(500.8,378.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#CC0000").s().p("AAABfIALg1IgnAAIgLA1IgSAAIALg1IgWAAIAAgTIAaAAIAJgtIgjAAIAAgSIAmAAIALg2IATAAIgLA2IAnAAIALg2IATAAIgLA2IAVAAIAAASIgZAAIgKAtIAjAAIAAATIgmAAIgLA1gAgXAXIAlAAIAKgtIgmAAg");
	this.shape_207.setTransform(488.35,378.375);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#CC0000").s().p("AgNAVQAIgDADgGQACgGABgLIgMAAIAAgZIAYAAIAAAZQAAANgEAKQgGAIgJAFg");
	this.shape_208.setTransform(474.05,388.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_209.setTransform(468.9,378.675);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_210.setTransform(463.975,378.225);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARASQARASAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPAMgXgBQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_211.setTransform(454.425,380.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#CC0000").s().p("Ag4BcIAAi3IAYAAIAAChIBZAAIAAAWg");
	this.shape_212.setTransform(442.475,378.375);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CC0000").s().p("AgJA9IAAgzIgzAAIAAgUIAzAAIAAgyIATAAIAAAyIAzAAIAAAUIgzAAIAAAzg");
	this.shape_213.setTransform(429.15,378.525);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgNgCgIQgDgHgGgEQgHgDgJAAQgOAAgKAJQgKAJAAAaIAABHIgXAAIAAiEIAUAAIAAATQAPgWAaAAQAMAAALAEQAJAFAGAGQAEAHACAKQACAHAAAPIAABRg");
	this.shape_214.setTransform(416.25,380.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#CC0000").s().p("AAaBCIgVhOIgFgXIgaBlIgYAAIgoiEIAXAAIAVBNIAIAcIAHgcIAVhNIAWAAIAUBNIAHAZIAIgZIAWhNIAWAAIgqCEg");
	this.shape_215.setTransform(401.6,380.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARASQARARAAAgQAAAZgHAPQgIAOgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALAOQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_216.setTransform(386.975,380.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CC0000").s().p("AhLBcIAAi3IA/AAQAVAAALADQAQADALAKQAOAMAIATQAHATAAAZQAAAUgFAQQgFAQgIALQgHAKgJAGQgJAGgNAEQgNADgQAAgAgzBGIAoAAQARAAAKgDQAKgEAHgGQAIgIAFgPQAFgPAAgTQAAgdgKgQQgJgPgOgFQgJgEgVAAIgnAAg");
	this.shape_217.setTransform(372.725,378.375);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CC0000").s().p("AAiBCIgbgpIgHgLIgiA0IgbAAIAwhEIgthAIAcAAIAVAgIAJAOIAJgOIAXggIAbAAIguA/IAxBFg");
	this.shape_218.setTransform(353.175,380.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CC0000").s().p("Ag5BeIAAi4IAVAAIAAASQAHgLAJgEQAJgGAMAAQARAAANAKQANAIAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPgBQgLAAgJgEQgJgFgFgHIAABBgAgZg+QgLAOAAAaQAAAZAKAMQAKAMAPAAQAOAAALgMQALgOAAgZQAAgagLgMQgKgNgOAAQgOAAgLANg");
	this.shape_219.setTransform(341.725,383.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CC0000").s().p("Ag7BcQgBgIADgHQAFgNAKgMQAKgMATgQQAdgYALgNQAKgPAAgNQAAgNgJgJQgKgJgPAAQgPAAgKAJQgKAKAAARIgXgCQACgaAQgNQAPgOAZAAQAbAAAPAPQAQAOAAAWQAAALgFALQgEAKgLALQgKAMgZAUIgZAXIgJANIBZAAIAAAVg");
	this.shape_220.setTransform(328.5964,378.325);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CC0000").s().p("AgMBCIAAgZIAZAAIAAAZgAgMgoIAAgaIAZAAIAAAag");
	this.shape_221.setTransform(314.65,380.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CC0000").s().p("AAaBCIgVhOIgFgXIgaBlIgYAAIgoiEIAXAAIAVBNIAIAcIAHgcIAVhNIAWAAIAUBNIAHAZIAIgZIAWhNIAWAAIgqCEg");
	this.shape_222.setTransform(303.5,380.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CC0000").s().p("AgsAzQgRgRAAgiQAAgkAUgRQARgPAYgBQAcABARASQARARAAAgQAAAZgHAPQgIAOgPAJQgOAHgSAAQgbABgRgTgAgbglQgLAMAAAZQAAAZALAOQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_223.setTransform(288.875,380.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#CC0000").s().p("AgdBUQgNgIgIgQQgHgQAAgUQABgUAGgPQAHgQANgJQANgJAQAAQAMAAAJAFQAKAFAFAJIAAhCIAWAAIAAC2IgUAAIAAgRQgNAUgYAAQgQAAgNgJgAgXgOQgLAMABAaQAAAZAKANQALANAOAAQAOAAALgMQAKgMAAgZQAAgbgKgMQgLgNgPAAQgOAAgKAMg");
	this.shape_224.setTransform(275.95,378.525);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgKAEgIQAEgHAIgFQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEAQgBQARAAALAEQALAFAFAGQAFAFACAKIABAVIAAAdQAAAfABAIQACAJAEAHIgYAAQgDgHgBgJQgNALgLAEQgLAFgNgBQgWABgMgLgAgFAJQgOABgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgLQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_225.setTransform(263.875,380.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CC0000").s().p("AAfBcIAAhVQAAgPgGgIQgIgIgOAAQgJAAgIAFQgJAGgEAIQgEAIAAAQIAABJIgWAAIAAi3IAWAAIAABCQAQgSAYAAQAOAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_226.setTransform(251.4,378.375);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#CC0000").s().p("AgkBYQgRgIgJgOQgJgPgBgSIAXgCQABAOAHAIQAFAJANAGQANAFAOAAQAOAAAKgEQAMgEAEgHQAGgIAAgIQAAgJgFgGQgGgHgLgEIgfgJQgagGgKgEQgNgHgGgKQgHgLAAgMQAAgOAIgMQAIgMAPgHQAPgGASAAQAUAAAPAHQAQAGAJANQAIANABAQIgYACQgBgSgLgJQgLgJgVAAQgWAAgJAJQgKAIAAALQAAAKAGAGQAIAHAcAGQAeAHALAFQAQAGAIAMQAHALAAAPQAAAPgIANQgJAMgPAIQgQAHgTAAQgZAAgRgHg");
	this.shape_227.setTransform(237.4,378.375);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAGgUAOgLQANgLATAAQAPAAALAGQALAGAHAMQAHALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgZAAgPgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQALgPgBgtQABgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_228.setTransform(377,344.725);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CC0000").s().p("AhDBcIAAi3ICDAAIAAAWIhsAAIAAA4IBlAAIAAAVIhlAAIAAA+IBxAAIAAAWg");
	this.shape_229.setTransform(363.5,344.625);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAGgUAOgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAEAQQAFAQAAAaQAAAhgHATQgGAUgNALQgOALgUAAQgaAAgPgTgAgYg9QgLARAAAsQAAAtAKAPQAKAPAPAAQAQAAAKgPQAKgPAAgtQAAgsgKgPQgKgPgQAAQgPAAgJANg");
	this.shape_230.setTransform(349.15,344.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CC0000").s().p("AhEBcIAAi3ICEAAIAAAWIhsAAIAAA4IBlAAIAAAVIhlAAIAAA+IBxAAIAAAWg");
	this.shape_231.setTransform(335.65,344.625);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAHAMQAHALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgaAAgOgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_232.setTransform(321.3,344.725);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#CC0000").s().p("AhDBcIAAi3ICDAAIAAAWIhrAAIAAA4IBkAAIAAAVIhkAAIAAA+IBvAAIAAAWg");
	this.shape_233.setTransform(307.8,344.625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CC0000").s().p("AAABfIALg1IgnAAIgLA1IgSAAIALg1IgWAAIAAgTIAaAAIAJgtIgjAAIAAgSIAmAAIALg2IATAAIgLA2IAnAAIALg2IATAAIgLA2IAVAAIAAASIgZAAIgKAtIAjAAIAAATIgmAAIgLA1gAgXAXIAlAAIAKgtIgmAAg");
	this.shape_234.setTransform(293.5,344.625);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CC0000").s().p("AgMBCIAAgZIAZAAIAAAZgAgMgoIAAgaIAZAAIAAAag");
	this.shape_235.setTransform(279.3,347.15);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_236.setTransform(274.05,344.925);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARASQARASAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPAMgXgBQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_237.setTransform(264.925,347.15);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAALgGAJQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_238.setTransform(253.125,347.15);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#CC0000").s().p("AAfBEIAAhQQABgNgDgIQgDgHgGgEQgHgDgJAAQgNAAgLAJQgLAJAAAaIAABHIgWAAIAAiEIAUAAIAAATQAPgWAbAAQAMAAAJAEQAKAFAGAGQAEAHADAKQABAHAAAPIAABRg");
	this.shape_239.setTransform(241.4,347);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#CC0000").s().p("AgLBcIAAi3IAXAAIAAC3g");
	this.shape_240.setTransform(232.55,344.625);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhiAAIAAA5IBUAAIAAAUIhUAAIAABUg");
	this.shape_241.setTransform(381.35,310.875);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhjAAIAAA5IBWAAIAAAUIhWAAIAABUg");
	this.shape_242.setTransform(367.45,310.875);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhiAAIAAA5IBUAAIAAAUIhUAAIAABUg");
	this.shape_243.setTransform(353.55,310.875);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhjAAIAAA5IBWAAIAAAUIhWAAIAABUg");
	this.shape_244.setTransform(339.65,310.875);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhiAAIAAA5IBUAAIAAAUIhUAAIAABUg");
	this.shape_245.setTransform(325.75,310.875);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#CC0000").s().p("Ag9BcIAAi3IB7AAIAAAWIhjAAIAAA5IBWAAIAAAUIhWAAIAABUg");
	this.shape_246.setTransform(311.85,310.875);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CC0000").s().p("AAABfIALg1IgnAAIgKA1IgTAAIALg1IgVAAIAAgTIAYAAIAKgtIgiAAIAAgSIAmAAIAKg2IATAAIgKA2IAmAAIALg2IATAAIgMA2IAXAAIAAASIgaAAIgJAtIAjAAIAAATIgnAAIgLA1gAgXAXIAmAAIAJgtIgmAAg");
	this.shape_247.setTransform(298.15,310.875);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CC0000").s().p("AgMBCIAAgZIAZAAIAAAZgAgMgoIAAgaIAZAAIAAAag");
	this.shape_248.setTransform(283.95,313.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgTAbAAQAaABARASQARASAAAgIAAAGIhiAAQABAVALAMQALAMAQAAQANAAAIgGQAJgHAFgPIAYAEQgGAUgPALQgPAMgXgBQgcABgRgTgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_249.setTransform(274.925,313.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgEQACAOAIAHQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgFgFgIQgFgIAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgCAKgBQAPABAMAEQAMAEAFAJQAGAHACANIgWADQgBgKgIgGQgHgGgMAAQgQAAgGAFQgHAFAAAHQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJAEAGAHQAFAIAAAMQAAAKgGAKQgHALgMAFQgNAGgPgBQgZAAgOgLg");
	this.shape_250.setTransform(263.125,313.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgKAEgIQAEgHAIgFQAHgEAJgDIAUgDQAagDANgFIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEAQgBQARAAALAEQALAFAFAGQAFAFACAKIABAVIAAAdQAAAfABAIQACAJAEAHIgYAAQgDgHgBgJQgNALgLAEQgLAFgNgBQgWABgMgLgAgFAJQgOABgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgLQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_251.setTransform(251.375,313.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CC0000").s().p("AhEBcIAAi3IBEAAQAUAAANAGQANAFAHAMQAHALAAANQAAAMgGAKQgGALgNAGQAQAFAJALQAJALAAARQAAAMgFAMQgGALgIAGQgIAGgMADQgMADgRAAgAgsBGIAtAAIAQgBQAIgBAGgEQAGgDADgHQAEgHAAgIQAAgLgFgHQgGgIgJgDQgJgDgRAAIgqAAgAgsgOIAoAAQAPAAAHgCQAJgDAFgGQAEgGAAgKQAAgJgEgHQgEgHgJgDQgIgCgSAAIglAAg");
	this.shape_252.setTransform(237.775,310.875);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#CC0000").s().p("AgnBVQgPgMABgVIAVAEQACAJAGAFQAJAGAPAAQAOAAAJgGQAIgGADgMQABgGAAgXQgOASgVAAQgcAAgPgUQgOgTAAgbQgBgUAHgPQAHgRANgIQANgJASAAQAWAAAPATIAAgQIAWAAIAAByQAAAfgHANQgGANgOAHQgOAIgSAAQgZAAgOgKgAgYg/QgLAMAAAYQAAAbALALQAKAMAPAAQAQAAAKgMQAKgLAAgaQABgZgMgMQgKgNgQAAQgNAAgLANg");
	this.shape_253.setTransform(357.35,555.75);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgOgCgGQgDgIgGgDQgHgFgJAAQgOAAgKAJQgLAKAAAZIAABIIgWAAIAAiEIAUAAIAAATQAPgWAbAAQALAAAKAEQAKAFAGAHQAEAGACALQACAFAAAQIAABRg");
	this.shape_254.setTransform(345.25,553.05);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_255.setTransform(337.075,550.675);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#CC0000").s().p("AgoA0QgRgSAAgiQAAgUAHgQQAIgRAOgIQAPgHAPgBQAXAAANAMQAOAKADAUIgVAEQgDgOgIgGQgIgHgLAAQgRAAgKANQgLAMAAAZQAAAbAKAMQAKAMAQAAQANAAAKgIQAJgIABgRIAXACQgEAXgOANQgQANgWABQgagBgQgRg");
	this.shape_256.setTransform(330,553.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgLAEgHQAEgIAIgGQAHgDAJgDIAUgDQAagEANgEIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAFgEAOIgWgDQADgNAHgKQAHgIANgFQANgFAQAAQARABALAEQALAEAFAFQAFAGACAKIABAUIAAAeQAAAfABAJQACAIAEAIIgYAAQgDgIgBgJQgNALgLAEQgLAEgNABQgWAAgMgLgAgFAIQgOACgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgJQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_257.setTransform(317.775,553.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgFQAJgEAMgBQARABANAIQANAJAHAQQAHAQAAATQAAAUgIAQQgHAQgOAJQgOAJgPAAQgLAAgJgGQgJgEgFgHIAABAgAgZg9QgLANAAAZQAAAaAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_258.setTransform(305.675,555.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#CC0000").s().p("AgkBYQgRgIgJgOQgJgPgBgSIAXgCQABAOAGAIQAHAJAMAGQANAFAOAAQAOAAAKgEQAMgEAEgHQAGgIAAgIQAAgJgFgGQgGgHgLgEIgfgJQgagGgKgEQgNgHgGgKQgHgLAAgMQAAgOAIgMQAIgMAPgHQAPgGASAAQAUAAAPAHQAQAGAJANQAIANABAQIgYACQgCgSgKgJQgLgJgVAAQgWAAgJAJQgLAIAAALQABAKAGAGQAIAHAcAGQAeAHALAFQAQAGAHAMQAIALAAAPQAAAPgIANQgJAMgPAIQgQAHgTAAQgZAAgRgHg");
	this.shape_259.setTransform(291.3,550.675);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CC0000").s().p("AAiBDIgbgqIgHgLIgiA1IgbAAIAwhEIgthAIAcAAIAVAeIAJAQIAJgPIAXgfIAbAAIguA+IAxBGg");
	this.shape_260.setTransform(272.875,553.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgFQAJgEAMgBQARABANAIQANAJAHAQQAHAQAAATQAAAUgIAQQgHAQgOAJQgOAJgPAAQgLAAgJgGQgJgEgFgHIAABAgAgZg9QgLANAAAZQAAAaAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_261.setTransform(261.425,555.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#CC0000").s().p("AgpBLQgSgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAIAMQAGALAFAQQAEAQAAAaQAAAhgHATQgGAUgOALQgNALgUAAQgaAAgPgTgAgYg9QgMARABAsQgBAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_262.setTransform(248.5,550.775);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#CC0000").s().p("AALBcIAAiOQgIAHgMAIQgNAIgLAEIAAgWQATgJAOgNQANgMAGgMIAPAAIAAC3g");
	this.shape_263.setTransform(235.125,550.625);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#CC0000").s().p("AAiBCIgbgpIgHgLIgiA0IgbAAIAwhEIgthAIAcAAIAVAgIAJAOIAJgOIAXggIAbAAIguA/IAxBFg");
	this.shape_264.setTransform(608.725,703.55);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#CC0000").s().p("Ag5BeIAAi4IAVAAIAAASQAHgLAJgEQAJgGAMAAQARAAANAJQANAJAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPgBQgLAAgJgEQgJgFgFgHIAABBgAgZg+QgLAOAAAaQAAAZAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLANg");
	this.shape_265.setTransform(597.275,705.95);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CC0000").s().p("AgoBSQgNgMgDgWIAWgCQACAQAIAGQAIAHAMAAQAKAAAHgEQAIgFAFgIQAFgIAEgOQADgNAAgOIAAgFQgHALgMAHQgLAHgNAAQgXAAgPgRQgQgQgBgbQAAgcARgRQARgRAZAAQARAAAOAKQAPAKAIASQAHARABAiQgBAigHAVQgIAVgPALQgPALgUAAQgVAAgOgMgAgZg+QgLANAAATQAAASALALQAKAKAPAAQAPAAALgKQAJgLABgUQAAgTgLgMQgLgLgOAAQgOAAgLAMg");
	this.shape_266.setTransform(584.4,701.125);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#CC0000").s().p("AALBcIAAiOQgIAHgMAIQgNAIgLAEIAAgWQATgJAOgNQANgMAGgMIAPAAIAAC3g");
	this.shape_267.setTransform(570.975,700.975);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKAAACQACADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_268.setTransform(187.35,580.325);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_269.setTransform(182.425,579.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CC0000").s().p("AgrA0QgRgSAAghQAAghARgSQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAWALAMQALALAQAAQANAAAIgHQAJgGAFgOIAYACQgGAVgPALQgPALgXABQgcgBgRgRgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_270.setTransform(172.875,582.55);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CC0000").s().p("Ag4BcIAAi3IAYAAIAAChIBZAAIAAAWg");
	this.shape_271.setTransform(160.925,580.025);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CC0000").s().p("AgjBfIA0i9IATAAIg1C9g");
	this.shape_272.setTransform(151.525,580.025);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgKAJgGQAJgEAMAAQARAAANAJQANAIAHAQQAHAQAAATQAAAUgIAQQgHAQgOAJQgOAIgPAAQgLABgJgGQgJgEgFgIIAABBgAgZg9QgLANAAAZQAAAZAKANQAKAMAPAAQAOAAALgMQALgNAAgaQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_273.setTransform(142.925,584.95);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgRgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_274.setTransform(130.025,582.55);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CC0000").s().p("AgLBcIAAihIg9AAIAAgWICRAAIAAAWIg9AAIAAChg");
	this.shape_275.setTransform(119.775,580.025);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIADATQgJADgHAAQgNAAgGgEg");
	this.shape_276.setTransform(731.55,580.325);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CC0000").s().p("AAfBcIAAhVQABgPgIgIQgHgIgOAAQgJAAgIAFQgJAGgEAIQgDAIgBAQIAABJIgWAAIAAi3IAWAAIAABCQAQgSAYAAQAOAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_277.setTransform(722.45,580.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CC0000").s().p("AgnBUQgPgLABgVIAWAEQABAJAHAFQAHAGAPAAQAPAAAJgGQAIgGADgMQABgGAAgXQgOASgVAAQgbAAgPgUQgQgTABgbQAAgUAGgPQAHgRANgIQANgJASAAQAWAAAQATIAAgQIAVAAIAAByQgBAfgGANQgGANgOAHQgNAIgUAAQgYAAgOgLgAgYg/QgLAMAAAYQAAAbALALQAKAMAPgBQAPABALgMQALgLAAgaQAAgZgMgMQgKgNgQAAQgOAAgKANg");
	this.shape_278.setTransform(709.55,585.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_279.setTransform(701.775,580.025);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#CC0000").s().p("AAyBcIgYgmIgRgaQgHgJgFgDQgFgEgGgBIgNgBIgdAAIAABSIgYAAIAAi3IBRAAQAYAAANAFQANAFAHANQAIAMAAAPQAAAUgMANQgNANgbADQAKAFAFAEQAKAKAKAPIAgAygAg4gKIA0AAQAQAAAJgDQAKgEAFgHQAFgIAAgJQAAgNgKgIQgJgJgUAAIg6AAg");
	this.shape_280.setTransform(692.3,580.025);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#CC0000").s().p("AgjBfIA0i9IATAAIg1C9g");
	this.shape_281.setTransform(680.425,580.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#CC0000").s().p("ABEBEIAAhTQAAgNgDgGQgCgGgFgEQgGgDgIgBQgOAAgKAKQgIAJgBAVIAABMIgVAAIAAhVQAAgQgGgHQgFgIgNAAQgJAAgIAGQgJAEgDAKQgEAKABASIAABEIgXAAIAAiEIAUAAIAAASQAGgJAKgGQALgGAOAAQAOAAAKAGQAIAHAEALQAQgYAZAAQAUAAAKALQALALAAAWIAABbg");
	this.shape_282.setTransform(667.95,582.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgRgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_283.setTransform(651.825,582.55);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_284.setTransform(643.1,580.325);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIADATQgJADgIAAQgMAAgGgEg");
	this.shape_285.setTransform(637.75,580.325);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CC0000").s().p("AgsA0QgRgTAAghQAAgkAUgSQARgOAYAAQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSAAQgbgBgRgRgAgbglQgLAMAAAZQAAAaALANQALAMAQAAQARAAALgNQALgMAAgaQAAgZgLgMQgLgNgRAAQgQAAgLANg");
	this.shape_286.setTransform(628.625,582.55);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#CC0000").s().p("AhEBcIAAi3IBEAAQAUAAANAGQANAFAHAMQAHALAAANQAAAMgGAKQgGALgNAGQAQAFAJALQAJALAAARQAAAMgFAMQgGALgIAGQgIAGgMADQgMADgRAAgAgsBGIAtAAIAQgBQAIgBAGgEQAGgDADgHQAEgHAAgIQAAgLgFgHQgGgIgJgDQgJgDgRAAIgqAAgAgsgOIAoAAQAPAAAHgCQAJgDAFgGQAEgGAAgKQAAgJgEgHQgEgHgJgDQgIgCgSAAIglAAg");
	this.shape_287.setTransform(615.025,580.025);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#CC0000").s().p("AAgBEIAAhQQgBgOgCgGQgDgIgHgDQgGgFgJAAQgOAAgKAJQgKAKAAAZIAABIIgXAAIAAiEIAUAAIAAATQAPgWAaAAQAMAAALAEQAJAFAFAHQAGAGABALQACAFAAAQIAABRg");
	this.shape_288.setTransform(642.4,553.05);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_289.setTransform(634.225,550.675);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#CC0000").s().p("AgnBVQgOgMAAgVIAVAEQACAJAHAFQAHAGAPAAQAPAAAIgGQAJgGADgMQACgGAAgXQgPASgVAAQgbAAgPgUQgPgTgBgbQABgUAGgPQAHgRANgIQANgJASAAQAXAAAPATIAAgQIAUAAIAAByQAAAfgGANQgGANgOAHQgNAIgUAAQgXAAgPgKgAgYg/QgKAMAAAYQgBAbALALQAKAMAPAAQAPAAALgMQALgLAAgaQgBgZgKgMQgLgNgPAAQgOAAgLANg");
	this.shape_290.setTransform(625.6,555.75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgFgIABQgIgBgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_291.setTransform(617.425,553.05);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgLAEgHQAEgIAIgGQAHgDAJgDIAUgDQAagEANgEIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAFgEAOIgWgDQADgNAHgKQAHgIANgFQANgFAQAAQARABALAEQALAEAFAFQAFAGACAKIABAUIAAAeQAAAfABAJQACAIAEAIIgYAAQgDgIgBgJQgNALgLAEQgLAEgNABQgWAAgMgLgAgFAIQgOACgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgJQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_292.setTransform(606.725,553.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#CC0000").s().p("ABABcIAAiZIg1CZIgVAAIg1icIAACcIgYAAIAAi3IAlAAIArCBIAIAbIAKgdIAsh/IAhAAIAAC3g");
	this.shape_293.setTransform(590.725,550.675);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#CC0000").s().p("AAiBDIgbgqIgHgLIgiA1IgbAAIAwhEIgthAIAcAAIAVAeIAJAQIAJgPIAXgfIAbAAIguA+IAxBGg");
	this.shape_294.setTransform(570.075,553.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgFQAJgEAMgBQARABANAIQANAJAHAQQAHAQAAATQAAAUgIAQQgHAQgOAJQgOAJgPAAQgLAAgJgGQgJgEgFgHIAABAgAgZg9QgLANAAAZQAAAaAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_295.setTransform(558.625,555.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CC0000").s().p("AgrBOQgQgQAAgYQAAgSAJgMQAIgLASgFQgPgFgHgJQgGgKAAgNQAAgUAOgOQAPgOAXAAQAXAAAPAOQAPAOAAAUQAAANgHAKQgGAJgOAFQAQAGAJALQAKAMgBARQAAAYgRAQQgQAQgbAAQgbAAgQgQgAgaALQgLALAAAQQAAAJAFAJQAFAJAIAFQAJAFAKAAQAQAAALgKQALgKAAgQQAAgRgMgKQgKgLgQAAQgPAAgLAKgAgVhCQgIAIAAAMQAAANAIAIQAJAJAMAAQANAAAJgJQAHgIABgMQAAgMgJgJQgIgIgNAAQgMAAgJAIg");
	this.shape_296.setTransform(545.75,550.775);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(204,0,0,0.298)").s().p("AheEEIAAoHIC9AAIAAIHg");
	this.shape_297.setTransform(522.3,691.9029,1,1.5042);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(204,0,0,0.298)").s().p("AheEEIAAoHIC9AAIAAIHg");
	this.shape_298.setTransform(553.3,691.8427,1,1.5093);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#CC0000").s().p("AglA6QgOgKgDgVIAWgDQACAMAIAIQAJAHAOAAQAQAAAHgGQAIgHAAgIQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgJQgFgHAAgKQAAgJAFgHQAEgIAHgFQAFgEAJgDQAJgDAKAAQAPABAMAEQAMAFAFAHQAGAIACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAEADAEQADAEAGACIATAGQAXAGAKAFQAJADAGAHQAFAIAAALQAAAMgGAJQgHAKgMAGQgNAGgPAAQgZAAgOgMg");
	this.shape_299.setTransform(65.775,585.85);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#CC0000").s().p("AgdBAQgLgFgEgHQgFgHgCgJQgCgHAAgPIAAhRIAXAAIAABJQAAARABAHQACAJAHAEQAHAGAKgBQAJABAJgGQAJgFAEgIQADgKAAgRIAAhGIAXAAIAACEIgUAAIAAgTQgQAWgZAAQgMAAgKgEg");
	this.shape_300.setTransform(53.975,586);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_301.setTransform(45.875,583.325);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#CC0000").s().p("AgcBUQgOgIgIgQQgGgQgBgUQAAgUAHgPQAGgQAOgJQANgJARAAQALAAAJAFQAJAFAGAJIAAhCIAWAAIAAC2IgUAAIAAgRQgNAUgYAAQgPAAgNgJgAgYgOQgKAMAAAaQAAAZALANQALANANAAQAQAAAKgMQAKgMAAgZQAAgbgKgMQgLgNgPAAQgOAAgLAMg");
	this.shape_302.setTransform(37.2,583.475);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgRQAAgJAEgJQAEgIAIgFQAHgDAJgDIAUgDQAagDANgFIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAGgEANIgWgCQADgOAHgKQAHgIANgFQANgEAQgBQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYAEg");
	this.shape_303.setTransform(25.125,585.85);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CC0000").s().p("AAzBcIgZgmIgSgaQgGgJgEgDQgGgEgGgBIgNgBIgcAAIAABSIgZAAIAAi3IBQAAQAZAAANAFQAMAFAJANQAHAMAAAPQAAAUgNANQgNANgaADQAKAFAFAEQAKAKAKAPIAgAygAg3gKIA0AAQAPAAAKgDQAJgEAFgHQAFgIAAgJQAAgNgJgIQgKgJgVAAIg4AAg");
	this.shape_304.setTransform(11.4,583.325);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CC0000").s().p("AAiBCIgbgpIgHgLIgiA0IgbAAIAwhDIgthAIAcAAIAVAeIAJAQIAJgPIAXgfIAbAAIguA+IAxBFg");
	this.shape_305.setTransform(-8.675,585.85);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgEQAJgGAMAAQARABANAIQANAJAHAQQAHAQAAATQAAAVgIAPQgHAQgOAJQgOAJgPAAQgLgBgJgFQgJgEgFgHIAABAgAgZg9QgLANAAAZQAAAZAKAMQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_306.setTransform(-20.125,588.25);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#CC0000").s().p("Ag7BcQgBgIADgHQAFgNAKgMQAKgMATgQQAdgYALgNQAKgPAAgNQAAgNgJgJQgKgJgPAAQgPAAgKAJQgKAKAAARIgXgCQACgaAQgNQAPgOAZAAQAbAAAPAPQAQAOAAAWQAAALgFALQgEAKgLALQgKAMgZAUIgZAXIgJANIBZAAIAAAVg");
	this.shape_307.setTransform(-33.2536,583.275);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CC0000").s().p("AALBcIAAiOQgIAHgMAIQgNAIgLAEIAAgWQATgJAOgNQANgMAGgMIAPAAIAAC3g");
	this.shape_308.setTransform(-46.425,583.275);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#CC0000").s().p("AAfBEIAAhQQAAgOgCgGQgDgIgHgDQgGgFgJAAQgNAAgLAJQgLAKAAAZIAABIIgWAAIAAiEIAUAAIAAATQAPgWAbAAQAMAAAJAEQALAFAEAHQAFAGADALQABAFAAAQIAABRg");
	this.shape_309.setTransform(160.6,553.05);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_310.setTransform(152.425,550.675);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CC0000").s().p("AgnBVQgOgMAAgVIAWAEQABAJAHAFQAHAGAPAAQAPAAAJgGQAIgGADgMQACgGgBgXQgOASgVAAQgbAAgQgUQgPgTABgbQAAgUAGgPQAHgRANgIQANgJASAAQAWAAAPATIAAgQIAWAAIAAByQgBAfgGANQgGANgOAHQgNAIgUAAQgYAAgOgKgAgYg/QgLAMAAAYQAAAbALALQAKAMAPAAQAPAAALgMQALgLgBgaQAAgZgLgMQgKgNgQAAQgNAAgLANg");
	this.shape_311.setTransform(143.8,555.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgFgIABQgIgBgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_312.setTransform(135.625,553.05);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgLAEgHQAEgIAIgGQAHgDAJgDIAUgDQAagEANgEIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAFgEAOIgWgDQADgNAHgKQAHgIANgFQANgFAQAAQARABALAEQALAEAFAFQAFAGACAKIABAUIAAAeQAAAfABAJQACAIAEAIIgYAAQgDgIgBgJQgNALgLAEQgLAEgNABQgWAAgMgLgAgFAIQgOACgFADQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgJQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_313.setTransform(124.925,553.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#CC0000").s().p("ABABcIAAiZIg1CZIgVAAIg1icIAACcIgYAAIAAi3IAlAAIArCBIAIAbIAKgdIAsh/IAhAAIAAC3g");
	this.shape_314.setTransform(108.925,550.675);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#CC0000").s().p("AAiBDIgbgqIgHgLIgiA1IgbAAIAwhEIgthAIAcAAIAVAeIAJAQIAJgPIAXgfIAbAAIguA+IAxBGg");
	this.shape_315.setTransform(88.275,553.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#CC0000").s().p("Ag5BdIAAi2IAVAAIAAARQAHgLAJgFQAJgEAMgBQARABANAIQANAJAHAQQAHAQAAATQAAAUgIAQQgHAQgOAJQgOAJgPAAQgLAAgJgGQgJgEgFgHIAABAgAgZg9QgLANAAAZQAAAaAKALQAKANAPAAQAOAAALgNQALgNAAgZQAAgagLgMQgKgNgOAAQgOAAgLAOg");
	this.shape_316.setTransform(76.825,555.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAHgUANgLQANgLATAAQAPAAALAGQALAGAHAMQAHALAFAQQAEAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgaAAgOgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQALgPAAgtQAAgsgLgPQgLgPgPAAQgPAAgJANg");
	this.shape_317.setTransform(63.9,550.775);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#CC0000").s().p("AALBcIAAiOQgIAHgMAIQgNAIgLAEIAAgWQATgJAOgNQANgMAGgMIAPAAIAAC3g");
	this.shape_318.setTransform(50.525,550.625);

	this.InputFlyout_Active_1 = new lib.DBLA_InputFlyout_Active();
	this.InputFlyout_Active_1.name = "InputFlyout_Active_1";
	this.InputFlyout_Active_1.setTransform(512.75,681);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#CC0000").ss(2,1,1).p("AopF2IAArsAnFF2IAArsEgj7AAZIAAmPEglfAAZIAAmPEgllABdIjtjtEAoDAAZIAAmPEApTAAZIAAmP");
	this.shape_319.setTransform(339.875,601.45);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(204,0,0,0.4)").s().p("AkDAUIAAgnIIHAAIAAAng");
	this.shape_320.setTransform(640,469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_320},{t:this.shape_319},{t:this.InputFlyout_Active_1},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.InputFlyout_Active},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Overlay_Details
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_321.setTransform(-166.525,820.35);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#CC0000").s().p("AgJBDIgziFIAYAAIAcBPIAIAbIAIgaIAehQIAXAAIgyCFg");
	this.shape_322.setTransform(-178.225,820.35);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_323.setTransform(-185.725,817.825);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#CC0000").s().p("AgCBXQgIgEgCgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKAAACQACADACACQADABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_324.setTransform(-190.2,818.125);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#CC0000").s().p("AgpAzQgQgRAAghQAAgVAHgQQAHgRAPgHQAPgJAPABQAXgBANAMQAOALADATIgVAEQgEgNgHgHQgIgHgMAAQgQAAgKAMQgLAMAAAaQAAAaAKANQALAMAPAAQANAAAKgIQAIgJADgQIAWADQgEAWgPAOQgOANgXgBQgaABgRgTg");
	this.shape_325.setTransform(-198.15,820.35);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgKAEgIQAEgJAIgEQAHgFAJgCIAUgDQAagEANgEIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAFgEAPIgWgEQADgOAHgIQAHgJANgFQANgFAQABQARAAALADQALAEAFAGQAFAHACAJIABAUIAAAeQAAAfABAIQACAJAEAIIgYAAQgDgIgBgJQgNAKgLAFQgLAFgNgBQgWAAgMgKgAgFAIQgOADgFACQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgKQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_326.setTransform(-210.375,820.35);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgEQACANAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgIQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgDAKABQAPgBAMAFQAMAEAFAJQAGAHACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADADAGADIATAGQAXAGAKAEQAJADAGAIQAFAIAAAMQAAAKgGALQgHAKgMAFQgNAFgPAAQgZABgOgLg");
	this.shape_327.setTransform(-227.525,820.35);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_328.setTransform(-234.925,817.825);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#CC0000").s().p("AgCBXQgHgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_329.setTransform(248.2,784.375);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#CC0000").s().p("AgdA/QgLgEgEgHQgFgGgCgLQgCgGAAgOIAAhSIAXAAIAABJQAAASABAFQACAKAHAEQAHAFAKABQAJgBAJgFQAJgFAEgJQADgIAAgRIAAhHIAXAAIAACEIgUAAIAAgUQgQAXgZAAQgMAAgKgFg");
	this.shape_330.setTransform(239.025,786.75);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#CC0000").s().p("AgsAzQgRgSAAghQAAgkAUgSQARgPAYABQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSgBQgbABgRgTgAgbglQgLANAAAYQAAAaALANQALAMAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_331.setTransform(226.575,786.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#CC0000").s().p("AgwBbIgDgWQAIACAGAAQAHAAAFgCQAEgDADgEIAGgQIADgGIgziFIAZAAIAbBOQAGAOADAPQAEgOAFgPIAchOIAXAAIgyCHQgJAVgDAJQgHALgHAFQgIAGgKAAQgHAAgIgDg");
	this.shape_332.setTransform(214.95,789.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_333.setTransform(207.325,784.075);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#CC0000").s().p("AgSBdIAAhyIgUAAIAAgSIAUAAIAAgOQAAgNACgHQAEgJAIgFQAHgFAPAAQAJAAAMACIgDATIgOgBQgKAAgEAFQgFAEAAAMIAAAMIAaAAIAAASIgaAAIAAByg");
	this.shape_334.setTransform(203.325,783.925);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_335.setTransform(188.425,786.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#CC0000").s().p("AAfBcIAAhVQABgPgIgIQgHgIgNAAQgKAAgIAFQgJAGgEAIQgDAIAAAQIAABJIgXAAIAAi3IAXAAIAABCQAPgSAXAAQAPAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_336.setTransform(175.95,784.075);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#CC0000").s().p("AgCBXQgHgEgDgHQgDgGAAgUIAAhMIgQAAIAAgRIAQAAIAAghIAVgOIAAAvIAXAAIAAARIgXAAIAABNQAAAKABACQACADADACQACABAFAAIAKAAIAEATQgKADgHAAQgNAAgFgEg");
	this.shape_337.setTransform(167.2,784.375);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#CC0000").s().p("AAfBEIAAhQQABgNgDgIQgDgGgGgEQgHgEgJgBQgNABgLAIQgLAKAAAZIAABIIgWAAIAAiEIAUAAIAAATQAPgWAbAAQALAAAKAFQAKADAGAIQAEAHADAKQABAFAAAQIAABRg");
	this.shape_338.setTransform(152.75,786.45);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_339.setTransform(140.225,786.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#CC0000").s().p("AAfBcIAAhVQAAgPgGgIQgIgIgOAAQgIAAgJAFQgJAGgEAIQgEAIAAAQIAABJIgWAAIAAi3IAWAAIAABCQAQgSAYAAQAOAAALAGQALAFAEALQAFAKAAASIAABVg");
	this.shape_340.setTransform(127.75,784.075);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#CC0000").s().p("AAaBDIgVhPIgFgXIgaBmIgXAAIgpiFIAXAAIAVBNIAIAcIAHgbIAVhOIAXAAIATBNIAHAZIAHgZIAYhNIAVAAIgpCFg");
	this.shape_341.setTransform(113.1,786.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#CC0000").s().p("ABDBEIAAhTQAAgNgBgGQgDgGgFgEQgGgEgIAAQgOAAgJAKQgKAJABAVIAABMIgWAAIAAhVQAAgQgFgHQgGgIgMAAQgKABgIAEQgIAFgEAKQgDAKgBASIAABEIgWAAIAAiEIAUAAIAAATQAHgKAKgGQAKgGANAAQAPAAAJAGQAJAHAEALQAQgYAZAAQAUAAAKALQALALAAAWIAABbg");
	this.shape_342.setTransform(89.65,786.45);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#CC0000").s().p("AgKBcIAAiEIAVAAIAACEgAgKhBIAAgaIAVAAIAAAag");
	this.shape_343.setTransform(77.875,784.075);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgEgIAAQgIAAgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_344.setTransform(73.575,786.45);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#CC0000").s().p("AgoAzQgRgRAAghQAAgVAHgQQAIgRAOgHQAPgJAPABQAXgBANAMQAOALADATIgVAEQgDgNgIgHQgIgHgLAAQgRAAgKAMQgLAMAAAaQAAAaAKANQAKAMAQAAQANAAAKgIQAJgJABgQIAXADQgEAWgOAOQgQANgWgBQgaABgQgTg");
	this.shape_345.setTransform(64.05,786.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgEQACANAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgIQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgDAKABQAPgBAMAFQAMAEAFAJQAGAHACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJADAGAIQAFAIAAAMQAAAKgGALQgHAKgMAFQgNAFgPAAQgZABgOgLg");
	this.shape_346.setTransform(52.525,786.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#CC0000").s().p("AgdBUQgNgIgHgQQgIgQAAgUQABgUAGgPQAHgQANgJQANgJAQAAQALAAAKAFQAJAFAGAJIAAhCIAXAAIAAC2IgWAAIAAgRQgMAUgYAAQgQAAgNgJgAgXgOQgKAMAAAaQgBAZALANQALANAOAAQAPAAAKgMQAKgMAAgZQAAgbgLgMQgKgNgQAAQgOAAgJAMg");
	this.shape_347.setTransform(35,784.225);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgEgIAAQgIAAgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_348.setTransform(26.875,786.45);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgKAEgIQAEgJAIgEQAHgFAJgCIAUgDQAagEANgEIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAFgEAPIgWgEQADgOAHgIQAHgJANgFQANgFAQABQARAAALADQALAEAFAGQAFAHACAJIABAUIAAAeQAAAfABAIQACAJAEAIIgYAAQgDgIgBgJQgNAKgLAFQgLAFgNgBQgWAAgMgKgAgFAIQgOADgFACQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgKQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_349.setTransform(16.175,786.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#CC0000").s().p("AgsAzQgRgSAAghQAAgkAUgSQARgPAYABQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSgBQgbABgRgTgAgbglQgLANAAAYQAAAaALANQALAMAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_350.setTransform(3.675,786.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#CC0000").s().p("AgkBKIAAAQIgVAAIAAi2IAXAAIAABBQAOgSAWAAQAMAAAKAFQAMAFAGAJQAHAJAFANQADALAAAPQAAAigRATQgQASgYAAQgXAAgNgTgAgZgNQgLAMAAAYQAAAYAGAKQALASASAAQAOAAALgNQALgNgBgZQAAgZgKgNQgKgMgOAAQgPAAgKANg");
	this.shape_351.setTransform(-8.45,784.225);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#CC0000").s().p("AgwBbIgCgWQAHACAFAAQAIAAAEgCQAFgDACgEIAIgQIABgGIgyiFIAYAAIAcBOQAGAOADAPQADgOAGgPIAdhOIAWAAIgzCHQgIAVgEAJQgFALgIAFQgIAGgLAAQgGAAgIgDg");
	this.shape_352.setTransform(-20.45,789.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_353.setTransform(-32.375,786.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#CC0000").s().p("AAbBcIgqhEIgQAPIAAA1IgXAAIAAi3IAXAAIAABoIA0g1IAdAAIgyAwIA3BUg");
	this.shape_354.setTransform(-43.3,784.075);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_355.setTransform(-61.275,786.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#CC0000").s().p("AAgBcIAAhVQgBgPgGgIQgIgIgOAAQgIAAgJAFQgJAGgEAIQgDAIAAAQIAABJIgXAAIAAi3IAXAAIAABCQAPgSAXAAQAPAAALAGQALAFAFALQAEAKAAASIAABVg");
	this.shape_356.setTransform(-73.75,784.075);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#CC0000").s().p("AgDBXQgGgEgDgHQgDgGAAgUIAAhMIgRAAIAAgRIARAAIAAghIAWgOIAAAvIAWAAIAAARIgWAAIAABNQAAAKABACQABADACACQADABAFAAIAKAAIADATQgJADgHAAQgNAAgGgEg");
	this.shape_357.setTransform(-82.5,784.375);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#CC0000").s().p("AglA7QgOgLgDgVIAWgEQACANAIAIQAJAHAOAAQAQAAAHgHQAIgFAAgJQAAgIgHgEQgEgDgTgFQgYgGgJgEQgKgEgFgIQgFgJAAgJQAAgJAFgIQAEgHAHgFQAFgEAJgDQAJgDAKABQAPgBAMAFQAMAEAFAJQAGAHACANIgWADQgBgLgIgFQgHgGgMAAQgQAAgGAFQgHAGAAAGQAAAFADADQADAEAGACIATAGQAXAGAKAEQAJADAGAIQAFAIAAAMQAAAKgGALQgHAKgMAFQgNAFgPAAQgZABgOgLg");
	this.shape_358.setTransform(-96.275,786.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgEgIAAQgIAAgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_359.setTransform(-104.075,786.45);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_360.setTransform(-114.775,786.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#CC0000").s().p("AgJBDIgziFIAYAAIAcBPIAIAbIAIgaIAehQIAXAAIgyCFg");
	this.shape_361.setTransform(-126.475,786.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#CC0000").s().p("AgsAzQgRgSAAghQAAgkAUgSQARgPAYABQAcgBARATQARARAAAgQAAAZgHAPQgIAOgPAIQgOAJgSgBQgbABgRgTgAgbglQgLANAAAYQAAAaALANQALAMAQAAQARAAALgNQALgNAAgZQAAgYgLgNQgLgNgRAAQgQAAgLANg");
	this.shape_362.setTransform(-138.325,786.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#CC0000").s().p("AgpAzQgQgRAAghQAAgVAHgQQAHgRAPgHQAPgJAPABQAXgBANAMQAOALAEATIgWAEQgEgNgHgHQgIgHgMAAQgQAAgKAMQgLAMAAAaQAAAaAKANQALAMAPAAQAOAAAIgIQAKgJACgQIAWADQgEAWgPAOQgOANgXgBQgaABgRgTg");
	this.shape_363.setTransform(-149.65,786.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#CC0000").s().p("AgwBbIgDgWQAIACAGAAQAHAAAEgCQAFgDACgEIAIgQIABgGIgyiFIAYAAIAcBOQAFAOAEAPQADgOAGgPIAchOIAXAAIgzCHQgHAVgEAJQgHALgHAFQgIAGgLAAQgGAAgIgDg");
	this.shape_364.setTransform(-166.35,789.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgKAEgIQAEgJAIgEQAHgFAJgCIAUgDQAagEANgEIAAgGQAAgNgGgGQgJgIgQAAQgQAAgHAGQgIAFgEAPIgWgEQADgOAHgIQAHgJANgFQANgFAQABQARAAALADQALAEAFAGQAFAHACAJIABAUIAAAeQAAAfABAIQACAJAEAIIgYAAQgDgIgBgJQgNAKgLAFQgLAFgNgBQgWAAgMgKgAgFAIQgOADgFACQgGADgDAEQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgFAEgKQAEgIAAgPIAAgIQgMAFgYADg");
	this.shape_365.setTransform(-178.275,786.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_366.setTransform(-186.475,784.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgEQAFgFAIAAQALAAAMAHIgIAVQgIgEgIAAQgIAAgEAEQgGAEgDAIQgEAMAAAPIAABEg");
	this.shape_367.setTransform(-190.725,786.45);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#CC0000").s().p("AgrAzQgRgRAAghQAAggARgTQARgSAbAAQAagBARATQARASAAAgIAAAGIhiAAQABAVALANQALALAQAAQANAAAIgHQAJgGAFgPIAYADQgGAVgPALQgPALgXAAQgcABgRgTgAAlgMQgBgRgHgIQgLgNgRAAQgPAAgKAKQgLALgBARIBJAAIAAAAg");
	this.shape_368.setTransform(-201.425,786.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#CC0000").s().p("AgJBDIgziFIAYAAIAcBPIAIAbIAIgaIAehQIAXAAIgyCFg");
	this.shape_369.setTransform(-213.125,786.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#CC0000").s().p("AgtBSQgVgMgKgVQgLgXAAgYQAAgsAZgaQAYgaAmAAQAZAAAVAMQAUANALAVQALAWAAAaQAAAcgMAXQgLAVgUAMQgVALgYAAQgZAAgUgNgAgrg3QgTASAAAoQAAAhASATQASAUAagBQAbAAASgTQASgTAAgkQAAgVgIgRQgHgQgPgKQgPgJgSAAQgZAAgSASg");
	this.shape_370.setTransform(-227.725,784.05);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#CC0000").s().p("AAfBUQgLgMAAgZQAAgUAKgOQAKgNATAAQARAAALAMQAMAMAAAYQAAAXgMANQgLANgRAAQgRAAgLgNgAAtAWQgFAIAAATQAAARAFAIQAGAHAIAAQAJAAAFgHQAGgIAAgTQAAgSgGgHQgFgHgJAAQgIAAgGAHgAg7BhIBkjBIASAAIhjDBgAhXgLQgLgNAAgZQAAgTAKgOQAKgOATAAQARAAALAMQAMANAAAYQAAAXgMANQgLALgRAAQgRAAgLgLgAhJhJQgFAHAAATQAAASAFAHQAGAIAIAAQAJAAAGgIQAFgHAAgTQAAgSgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_371.setTransform(-21.625,749.225);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#CC0000").s().p("AgoBLQgTgXAAg0QAAgfAHgUQAGgUAOgLQANgLATAAQAPAAALAGQALAGAHAMQAIALADAQQAFAQAAAaQAAAhgHATQgHAUgNALQgNALgUAAQgZAAgPgTgAgYg9QgMARAAAsQAAAtALAPQALAPAOAAQAPAAALgPQAKgPAAgtQAAgsgKgPQgLgPgPAAQgPAAgJANg");
	this.shape_372.setTransform(-38.45,749.125);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#CC0000").s().p("AgpBOQgRgOgCgXIAYgCQADARAJAJQAKAIANAAQAQABAKgMQAMgNAAgUQAAgUgLgJQgLgMgQAAQgLAAgJAFQgJAFgEAHIgWgDIAShdIBaAAIAAAVIhIAAIgKAyQARgMARAAQAYABAQAQQARAQAAAaQAAAYgOATQgTAWgdAAQgZAAgPgOg");
	this.shape_373.setTransform(-50.85,749.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#CC0000").s().p("AAQBcIAAgsIhPAAIAAgVIBTh2IASAAIAAB2IAZAAIAAAVIgZAAIAAAsgAgoAbIA4AAIAAhSg");
	this.shape_374.setTransform(-69.15,749.025);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#CC0000").s().p("AgqBTQgTgMgKgXQgJgXAAgZQAAgdALgVQALgWAUgLQAUgLAYAAQAbAAATAOQATAOAHAZIgYAGQgHgUgMgJQgMgJgSAAQgUAAgOAKQgOAKgHARQgFARAAASQAAAXAHARQAGASAPAIQAPAJAPAAQAUAAAOgMQAPgLAFgYIAYAHQgIAdgUAQQgTAQgdAAQgdAAgSgMg");
	this.shape_375.setTransform(-83.2,749.025);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#CC0000").s().p("AAQBcIAAgsIhPAAIAAgVIBTh2IASAAIAAB2IAZAAIAAAVIgZAAIAAAsgAgoAbIA4AAIAAhSg");
	this.shape_376.setTransform(-98.4,749.025);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#CC0000").s().p("AgqBTQgTgMgKgXQgJgXAAgZQAAgdALgVQALgWAUgLQAUgLAYAAQAbAAATAOQATAOAHAZIgYAGQgHgUgMgJQgMgJgSAAQgUAAgOAKQgOAKgHARQgFARAAASQAAAXAHARQAGASAPAIQAPAJAPAAQAUAAAOgMQAPgLAFgYIAYAHQgIAdgUAQQgTAQgdAAQgdAAgSgMg");
	this.shape_377.setTransform(-112.45,749.025);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#CC0000").s().p("AAQBcIAAgsIhPAAIAAgVIBTh2IASAAIAAB2IAZAAIAAAVIgZAAIAAAsgAgoAbIA4AAIAAhSg");
	this.shape_378.setTransform(-127.65,749.025);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#CC0000").s().p("AgqBTQgTgMgKgXQgJgXAAgZQAAgdALgVQALgWAUgLQAUgLAYAAQAbAAATAOQATAOAHAZIgYAGQgHgUgMgJQgMgJgSAAQgUAAgOAKQgOAKgHARQgFARAAASQAAAXAHARQAGASAPAIQAPAJAPAAQAUAAAOgMQAPgLAFgYIAYAHQgIAdgUAQQgTAQgdAAQgdAAgSgMg");
	this.shape_379.setTransform(-141.7,749.025);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#CC0000").s().p("AgMBCIAAgZIAZAAIAAAZgAgMgoIAAgZIAZAAIAAAZg");
	this.shape_380.setTransform(-158.2,751.55);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#CC0000").s().p("AgwBaIgDgUQAIABAGAAQAHAAAEgCQAFgCACgFIAIgRIABgFIgyiEIAYAAIAcBMQAFAPAEAQQADgPAGgPIAchNIAXAAIgzCGQgHAWgEAIQgHALgHAGQgIAEgLAAQgGAAgIgDg");
	this.shape_381.setTransform(-166.35,754.25);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#CC0000").s().p("AgxA7QgLgLAAgQQAAgLAEgHQAEgJAIgFQAHgDAJgDIAUgDQAagEANgEIAAgGQAAgOgGgFQgJgIgQAAQgQAAgHAGQgIAFgEAOIgWgCQADgOAHgKQAHgIANgFQANgFAQAAQARAAALAFQALADAFAHQAFAFACAKIABAVIAAAdQAAAfABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgLAFQgLAEgNABQgWAAgMgLgAgFAIQgOADgFACQgGACgDAFQgDAFAAAGQAAAJAGAGQAHAGANAAQAMAAALgGQAKgGAEgKQAEgHAAgPIAAgIQgMAFgYADg");
	this.shape_382.setTransform(-178.275,751.55);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#CC0000").s().p("AgKBcIAAi3IAVAAIAAC3g");
	this.shape_383.setTransform(-186.475,749.025);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#CC0000").s().p("AgjBEIAAiEIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgIAVQgIgFgIAAQgIAAgEAFQgGAEgDAIQgEAMAAAOIAABFg");
	this.shape_384.setTransform(-190.725,751.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#CC0000").s().p("AgrA0QgRgTAAggQAAghARgSQARgSAbgBQAaAAARASQARATAAAgIAAAGIhiAAQABAWALALQALAMAQAAQANAAAIgGQAJgHAFgOIAYADQgGAUgPALQgPAMgXAAQgcgBgRgRgAAlgMQgBgQgHgJQgLgNgRAAQgPAAgKALQgLAKgBARIBJAAIAAAAg");
	this.shape_385.setTransform(-201.425,751.55);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#CC0000").s().p("AgJBCIgziDIAYAAIAcBOIAIAbIAIgZIAehQIAXAAIgyCDg");
	this.shape_386.setTransform(-213.125,751.55);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#CC0000").s().p("AgtBTQgVgNgKgWQgLgWAAgXQAAgtAZgaQAYgaAmAAQAZAAAVANQAUALALAWQALAWAAAbQAAAcgMAVQgLAXgUALQgVALgYAAQgZAAgUgMgAgrg3QgTARAAApQAAAhASAUQASASAaABQAbAAASgUQASgTAAgjQAAgWgIgRQgHgRgPgIQgPgKgSAAQgZAAgSASg");
	this.shape_387.setTransform(-227.725,749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321}]},1).wait(1));

	// Overlay
	this.astFlyoutOverlay = new lib.FlyoutOverlay();
	this.astFlyoutOverlay.name = "astFlyoutOverlay";
	this.astFlyoutOverlay.setTransform(512,688,1,1,0,0,0,512,80);
	this.astFlyoutOverlay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.astFlyoutOverlay).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(272.3,539,1179,328.1);
// library properties:
lib.properties = {
	id: '43CEFE15D3A24C02A4222525BEF72831',
	width: 1024,
	height: 768,
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
an.compositions['43CEFE15D3A24C02A4222525BEF72831'] = {
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