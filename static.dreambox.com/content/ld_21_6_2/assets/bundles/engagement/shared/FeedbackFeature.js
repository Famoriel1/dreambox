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


(lib.TitleLbl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,Highlight:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.title = new cjs.Text("What did you think of this lesson?", "bold 24px 'Montreal Serial'", "#040404");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 22;
	this.title.lineWidth = 366;
	this.title.parent = this;
	this.title.setTransform(185,2);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1).to({color:"#FFFFFF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,33.4);


(lib.SubmitLbl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.submit = new cjs.Text("Submit", "28px 'Montreal Serial Medium'", "#FFFFFF");
	this.submit.name = "submit";
	this.submit.textAlign = "center";
	this.submit.lineHeight = 25;
	this.submit.lineWidth = 156;
	this.submit.parent = this;
	this.submit.setTransform(80,13);

	this.timeline.addTween(cjs.Tween.get(this.submit).wait(1).to({color:"#16B4EF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11,160,29.5);


(lib.RadioLbl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.radio = new cjs.Text("Definitely No", "14px 'Montreal Serial'", "#040404");
	this.radio.name = "radio";
	this.radio.textAlign = "center";
	this.radio.lineHeight = 13;
	this.radio.lineWidth = 100;
	this.radio.parent = this;
	this.radio.setTransform(52,2);

	this.timeline.addTween(cjs.Tween.get(this.radio).wait(1).to({color:"#FFFFFF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,20);


(lib.QuestionLbl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.question = new cjs.Text("The lesson tasks and hints were clear", "18px 'Montreal Serial Medium'", "#040404");
	this.question.name = "question";
	this.question.lineHeight = 16;
	this.question.lineWidth = 327;
	this.question.parent = this;
	this.question.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.question).wait(1).to({color:"#FFFFFF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330.7,25.9);


(lib.AnswerLbl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.answer = new cjs.Text("Definitely Yes", "14px 'Montreal Serial'", "#040404");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 13;
	this.answer.lineWidth = 90;
	this.answer.parent = this;
	this.answer.setTransform(47,2);

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(1).to({color:"#FFFFFF"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,18.8);


(lib.SkipBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:1,Down:2,Disabled:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape.setTransform(19,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB1BSIh2gYQgDAAgBgDQgBgCACgDIAdgiQADgDgDgEQg4g/hTAwQgEACgCgCQgDgDABgDQALgWAQgOQAVgVAggIQA8gQA0A0QAEAEAEgEIAYgbQACgCADABQADABAAADIANCOQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgBAAg");
	this.shape_1.setTransform(17.9946,19.8156,0.9352,0.9352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAyQgxAyhHAAQhGAAgxgyg");
	this.shape_2.setTransform(19,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape_3.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Down
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#555555").s().p("AB1BSIh2gYQgDAAgBgDQgBgCACgDIAdgiQADgDgDgEQg4g/hTAwQgEACgCgCQgDgDABgDQALgWAQgOQAVgVAggIQA8gQA0A0QAEAEAEgEIAYgbQACgCADABQADABAAADIANCOQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgBAAg");
	this.shape_4.setTransform(18.0309,19.3102,0.8609,0.8609);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5A5A5").s().p("AhpBqQgsgrAAg/QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtAsQgrAsg+AAQg+AAgrgsg");
	this.shape_5.setTransform(19,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B7B7").s().p("Ah3B5QgygyAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAzQgxAxhHAAQhGAAgxgxg");
	this.shape_6.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},1).wait(1));

	// Over
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AB1BSIh2gYQgDAAgBgDQgBgCACgDIAdgiQADgDgDgEQg4g/hTAwQgEACgCgCQgDgDABgDQALgWAQgOQAVgVAggIQA8gQA0A0QAEAEAEgEIAYgbQACgCADABQADABAAADIANCOQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgBAAg");
	this.shape_7.setTransform(18.0149,18.8747,1.0223,1.0223);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECECEC").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA0g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhLAAgzg0g");
	this.shape_8.setTransform(19,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiNCOQg6g7AAhTQAAhSA6g6QA7g7BSAAQBSAAA7A7QA7A7AABRQAABTg7A7Qg6A6hTAAQhTAAg6g6g");
	this.shape_9.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Up
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AB1BSIh2gYQgDAAgBgDQgBgCACgDIAdgiQADgDgDgEQg4g/hTAwQgEACgCgCQgDgDABgDQALgWAQgOQAVgVAggIQA8gQA0A0QAEAEAEgEIAYgbQACgCADABQADABAAADIANCOQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgBAAg");
	this.shape_10.setTransform(17.9946,19.8156,0.9352,0.9352);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECECEC").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAyQgxAyhHAAQhGAAgxgyg");
	this.shape_11.setTransform(19,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape_12.setTransform(19,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.302)").s().p("Ah+CAQg1g0AAhMQAAhJA1g0QA1g2BJAAQBLAAA0A2QA1A1AABIQAABLg1A1Qg0A0hLAAQhKAAg0g0g");
	this.shape_13.setTransform(20,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40,40);


(lib.HighlightBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape.setTransform(19,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040404").s().p("AgVBjIgvgsQgEgDgDAAIgdAAQgFAAgCgDQgDgDAAgEIAAhPQAAgEADgDQACgDAFAAIAdAAQAEAAADgDIAvgsQAFgEAGACQAGADAAAHIAACyQAAAGgGADIgEABQgEAAgDgDgABDBhQgGgHAFgIQAdgkAAguQAAgvgeglQgCgDgBgEQAAgEADgDQAEgDADAAQAFAAACADQAkArAAA3QAAA2gjAqQgCADgFABQgDAAgDgDgAAdA7QgDgDAAgFQAAgEADgDQAQgTAAgZQAAgZgRgUQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQAYAZAAAjQAAAhgWAaQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(19.5,19.0696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAyQgxAyhHAAQhGAAgxgyg");
	this.shape_2.setTransform(19,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape_3.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Down
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#555555").s().p("AgVBYIgogmQgDgCgEAAIgYAAQgEAAgDgDQgDgDAAgEIAAhFQAAgEADgDQADgDAEAAIAYAAQAEAAADgDIAoglQAFgFAGADQAGADAAAGIAACaQAAAHgGADIgEAAQgEAAgDgCgAA7BXQgHgHAHgHQAYgfAAgqQAAgogZggQgGgIAGgHQADgCAEAAQAFAAACADQAfAmAAAwQAAAygeAlQgCADgFAAQgEAAgDgDgAAaA2QgDgDAAgFQAAgEACgDQAOgRAAgWQAAgUgOgSQgDgDAAgEQAAgFADgDQACgDAEAAQAEAAADADQAVAXAAAeQAAAegUAYQgCADgEAAQgFgBgCgCg");
	this.shape_4.setTransform(19.475,18.9946);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5A5A5").s().p("AhpBqQgsgrAAg/QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtAsQgrAsg+AAQg+AAgrgsg");
	this.shape_5.setTransform(19,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B7B7").s().p("Ah3B5QgygyAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAzQgxAxhHAAQhGAAgxgxg");
	this.shape_6.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},1).wait(1));

	// Over
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#040404").s().p("AgVBjIgvgsQgEgDgDAAIgdAAQgKAAAAgKIAAhPQAAgKAKAAIAdAAQAEAAADgDIAvgsQAFgEAGACQAGADAAAHIAACyQAAAGgGADIgEABQgEAAgDgDgABDBhQgGgHAFgIQAdgkAAguQAAgvgeglQgCgDgBgEQAAgEADgDQAEgDADAAQAFAAACADQAkArAAA3QAAA2gjAqQgCADgFABQgDAAgDgDgAAdA7QgDgDAAgFQAAgEADgDQAQgTAAgZQAAgZgRgUQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQAYAZAAAjQAAAhgWAaQgDADgEAAQgEAAgDgDg");
	this.shape_7.setTransform(19.0974,18.8623,1.0435,1.0442);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECECEC").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA0g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A1Qg0A0hLAAQhLAAgzg0g");
	this.shape_8.setTransform(19,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiNCOQg6g7AAhTQAAhSA6g6QA7g7BSAAQBSAAA7A7QA7A7AABRQAABTg7A7Qg6A6hTAAQhTAAg6g6g");
	this.shape_9.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Up
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#040404").s().p("AgVBjIgvgsQgEgDgDAAIgdAAQgFAAgCgDQgDgDAAgEIAAhPQAAgEADgDQACgDAFAAIAdAAQAEAAADgDIAvgsQAFgEAGACQAGADAAAHIAACyQAAAGgGADIgEABQgEAAgDgDgABDBhQgGgHAFgIQAdgkAAguQAAgvgeglQgCgDgBgEQAAgEADgDQAEgDADAAQAFAAACADQAkArAAA3QAAA2gjAqQgCADgFABQgDAAgDgDgAAdA7QgDgDAAgFQAAgEADgDQAQgTAAgZQAAgZgRgUQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQAYAZAAAjQAAAhgWAaQgDADgEAAQgEAAgDgDg");
	this.shape_10.setTransform(19.5,19.0696);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECECEC").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAzAABEQAABGgyAyQgxAyhHAAQhGAAgxgyg");
	this.shape_11.setTransform(19,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiFCHQg4g4AAhPQAAhOA4g3QA3g4BOAAQBOAAA4A4QA4A4AABNQAABPg4A4Qg3A3hPAAQhPAAg2g3g");
	this.shape_12.setTransform(19,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.302)").s().p("Ah+CAQg1g0AAhMQAAhJA1g0QA1g2BJAAQBLAAA0A2QA1A1AABIQAABLg1A1Qg0A0hLAAQhKAAg0g0g");
	this.shape_13.setTransform(20,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40,40);


(lib.ExitBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(4,4,4,0.498)").s().p("AhDBLIgHgHQgDgDAAgEQAAgEADgDIA2g2Ig1g1QgCgCgBgFQABgEACgDIAHgHQAIgGAHAGIA0A1IAzgzQADgDAEgBQAEABAEADIAHAHQACADAAADQAAAFgCACIg0A0IA1A1QADACAAAFQAAADgDADIgHAHQgDADgEAAQgFAAgDgDIg0g1Ig2A3QgCADgFAAQgEAAgDgDg");
	this.shape.setTransform(8.0108,8.0101,1.0256,1.0256);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Down
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040404").s().p("AhDBLIgHgHQgDgDAAgEQAAgEADgDIA2g2Ig1g1QgCgCgBgFQABgEACgDIAHgHQAIgGAHAGIA0A1IAzgzQADgDAEgBQAEABAEADIAHAHQACADAAADQAAAFgCACIg0A0IA1A1QADACAAAFQAAADgDADIgHAHQgDADgEAAQgFAAgDgDIg0g1Ig2A3QgCADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(8.0011,8.0078,0.8974,0.8974);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Over
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#040404").s().p("AhDBLIgHgHQgDgDAAgEQAAgEADgDIA2g2Ig1g1QgCgCgBgFQABgEACgDIAHgHQAIgGAHAGIA0A1IAzgzQADgDAEgBQAEABAEADIAHAHQACADAAADQAAAFgCACIg0A0IA1A1QADACAAAFQAAADgDADIgHAHQgDADgEAAQgFAAgDgDIg0g1Ig2A3QgCADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(7.9872,8.0114,1.1538,1.1538);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Up
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040404").s().p("AhDBLIgHgHQgDgDAAgEQAAgEADgDIA2g2Ig1g1QgCgCgBgFQABgEACgDIAHgHQAIgGAHAGIA0A1IAzgzQADgDAEgBQAEABAEADIAHAHQACADAAADQAAAFgCACIg0A0IA1A1QADACAAAFQAAADgDADIgHAHQgDADgEAAQgFAAgDgDIg0g1Ig2A3QgCADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(8.0108,8.0101,1.0256,1.0256);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

	// hitArea
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0)").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_4.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,30,30);


(lib.TitleHighlightAst = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0088BB").s().p("A8CC2Qg8AAAAg7IAAj0QAAg9A8ABMA4FAAAQA8gBAAA9IAAD0QAAA7g8AAg");
	this.shape.setTransform(185.525,18.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TitleHighlightAst, new cjs.Rectangle(0,0,371.1,36.5), null);


(lib.AnswerHighlightAst = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0088BB").s().p("AnVDSIAAlnQAAg8A8AAIMzAAQA8AAAAA8IAAFng");
	this.shape.setTransform(47,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AnswerHighlightAst, new cjs.Rectangle(0,0,94,42), null);


(lib.SubmitBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,"Highlight":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.lblSubmit = new lib.SubmitLbl();
	this.lblSubmit.name = "lblSubmit";
	this.lblSubmit.setTransform(52,5.7,1,1,0,0,0,52,14.7);

	this.timeline.addTween(cjs.Tween.get(this.lblSubmit).wait(1).to({scaleX:1.0249,scaleY:1.0801,x:51.3,y:4.9},0).wait(1).to({scaleX:1,scaleY:1,x:52,y:6.7},0).wait(1).to({x:54,y:5.7},0).wait(1).to({x:52},0).wait(1));

	// Disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aolj5IRLAAQBoAABJBJQBJBKAABmQAABohJBJQhJBJhoAAIxLAAQhoAAhJhJQhJhJAAhoQAAhmBJhKQBJhJBoAAg");
	this.shape.setTransform(82,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7CC5E4").s().p("AolD6QhoAAhJhKQhJhIAAhoQAAhmBJhKQBJhJBoAAIRLAAQBoAABIBJQBKBKAABmQAABohKBIQhIBKhoAAg");
	this.shape_1.setTransform(82,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// Down
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AobjwIQ3AAQBjAABHBHQBHBGAABjIAAAAQAABkhHBGQhHBHhjAAIw3AAQhjAAhHhHQhHhGAAhkIAAAAQAAhjBHhGQBHhHBjAAg");
	this.shape_2.setTransform(80.0102,25.0164,0.9997,0.9979);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#115577").s().p("AobDxQhjAAhHhHQhHhGAAhkIAAAAQAAhjBHhGQBHhHBjAAIQ3AAQBkAABGBHQBHBGAABjIAAAAQAABkhHBGQhGBHhkAAg");
	this.shape_3.setTransform(80.0102,25.0164,0.9997,0.9979);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.298)").ss(0.1,1,1).p("Aobj5IQ3AAQBnAABKBJQBJBKAABmQAABnhJBKQhKBKhnAAIw3AAQhnAAhKhKQhJhKAAhnQAAhmBJhKQBKhJBnAAg");
	this.shape_4.setTransform(82.9849,27.9894,0.9997,0.9979);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("AobD7QhnAAhKhKQhJhJAAhoQAAhmBJhKQBKhKBnAAIQ3AAQBnAABKBKQBJBKAABmQAABohJBJQhKBKhnAAg");
	this.shape_5.setTransform(82.9849,27.9894,0.9997,0.9979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[]},1).wait(2));

	// Over
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ao4kCIRyAAQBnAABJBJQBKBJAABoIAAARQAABohKBJQhJBJhnAAIxyAAQhoAAhJhJQhJhJAAhoIAAgRQAAhoBJhJQBJhJBoAAg");
	this.shape_6.setTransform(80.991,24.9984,1.0003,1.0008);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099DD").s().p("Ao5EDQhnAAhKhJQhIhJgBhoIAAgRQABhoBIhJQBKhJBnAAIRzAAQBnAABJBJQBJBJAABoIAAARQAABohJBJQhJBJhnAAg");
	this.shape_7.setTransform(80.991,24.9984,1.0003,1.0008);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.298)").ss(0.1,1,1).p("Ao5kNIRzAAQBrAABMBMQBNBNAABrIAAATQAABrhNBMQhMBNhrAAIxzAAQhrAAhNhNQhMhMAAhrIAAgTQAAhrBMhNQBNhMBrAAg");
	this.shape_8.setTransform(84.0163,28.0492,1.0003,1.0008);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.298)").s().p("Ao5EOQhrAAhNhNQhMhMAAhrIAAgTQAAhrBMhNQBNhMBrAAIRzAAQBrAABMBMQBNBNAABrIAAATQAABrhNBMQhMBNhrAAg");
	this.shape_9.setTransform(84.0163,28.0492,1.0003,1.0008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(3));

	// Up
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aolj5IRLAAQBoAABJBJQBJBKAABmQAABohJBJQhJBJhoAAIxLAAQhoAAhJhJQhJhJAAhoQAAhmBJhKQBJhJBoAAg");
	this.shape_10.setTransform(80,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0088BB").s().p("AolD6QhoAAhJhKQhJhIAAhoQAAhmBJhKQBJhJBoAAIRLAAQBoAABIBJQBKBKAABmQAABohKBIQhIBKhoAAg");
	this.shape_11.setTransform(80,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.298)").ss(0.1,1,1).p("AolkDIRLAAQBsAABMBMQBMBMAABrQAABshMBMQhMBMhsAAIxLAAQhsAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBsAAg");
	this.shape_12.setTransform(83,28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AolEEQhsAAhMhMQhMhNAAhrQAAhrBMhMQBMhMBsAAIRLAAQBsAABLBMQBNBMAABrQAABrhNBNQhLBMhsAAg");
	this.shape_13.setTransform(83,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0088BB").ss(3,1,1).p("Aolj5IRLAAQBoAABJBJQBJBKAABmQAABohJBJQhJBJhoAAIxLAAQhoAAhJhJQhJhJAAhoQAAhmBJhKQBJhJBoAAg");
	this.shape_14.setTransform(80,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AolD6QhoAAhJhKQhJhIAAhoQAAhmBJhKQBJhJBoAAIRLAAQBoAABIBJQBKBKAABmQAABohKBIQhIBKhoAAg");
	this.shape_15.setTransform(80,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_15},{t:this.shape_14}]},3).wait(1));

	// hitArea
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("Aolj5IRLAAQBoAABJBJQBJBJAABnQAABohJBJQhJBJhoAAIxLAAQhoAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBoAAg");
	this.shape_16.setTransform(80,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.004)").s().p("AolD6QhnAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBnAAIRLAAQBoAABIBJQBKBKAABmQAABnhKBKQhIBJhoAAg");
	this.shape_17.setTransform(80,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.4,170.5,58.5);


(lib.RadioBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,Selected:2,SelectAnimation:3,DeselectAnimation:14,StartAnimation:3,EndAnimation:13,"StartAnimation":14,"EndAnimation":24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.play();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.play();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(10).call(this.frame_13).wait(1).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// Text
	this.lblRadio = new lib.RadioLbl();
	this.lblRadio.name = "lblRadio";
	this.lblRadio.setTransform(17.5,46,1,1,0,0,0,52,10);
	this.lblRadio.alpha = 0.5;
	this.lblRadio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lblRadio).wait(1).to({_off:false},0).wait(1).to({x:17.85,alpha:1},0).wait(1).to({x:17.5,alpha:0},0).to({alpha:1},10,cjs.Ease.cubicInOut).wait(1).to({alpha:0},10).wait(1));

	// Ring
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhlhlQgrAqAAA7QAAA8ArAqQAqArA7AAQA8AAAqgrQArgqAAg8QAAg7grgqQgqgrg8AAQg7AAgqArg");
	this.shape.setTransform(17.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,136,187,0)").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,136,187,0.004)").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_2.setTransform(17.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhkhkQgqAqAAA6QAAA7AqAqQAqAqA6AAQA7AAAqgqQAqgqAAg7QAAg6gqgqQgqgqg7AAQg6AAgqAqg");
	this.shape_3.setTransform(17.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,136,187,0.031)").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_4.setTransform(17.5,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhhhhQgoApAAA4QAAA6AoAoQApAoA4AAQA6AAAogoQAogoAAg6QAAg4gogpQgogog6AAQg4AAgpAog");
	this.shape_5.setTransform(17.5,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,136,187,0.11)").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_6.setTransform(17.5,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhahaQgmAlAAA1QAAA1AmAmQAlAmA1AAQA1AAAmgmQAmgmAAg1QAAg1gmglQgmgmg1AAQg1AAglAmg");
	this.shape_7.setTransform(17.5,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,136,187,0.255)").s().p("AgjAkQgPgOgBgWQABgUAPgPQAPgQAUAAQAWAAAOAQQAQAPAAAUQAAAWgQAOQgOAQgWAAQgUAAgPgQg");
	this.shape_8.setTransform(17.5,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhQhQQgiAiAAAuQAAAwAiAhQAiAiAuAAQAwAAAhgiQAighAAgwQAAgugigiQghgigwAAQguAAgiAig");
	this.shape_9.setTransform(17.5,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,136,187,0.502)").s().p("AgrAtQgTgTAAgaQAAgYATgTQASgTAZAAQAaAAATATQARATABAYQgBAagRATQgTARgaABQgZgBgSgRg");
	this.shape_10.setTransform(17.5,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhGhGQgeAdABApQgBAqAeAdQAdAeApgBQAqABAdgeQAegdgBgqQABgpgegdQgdgegqABQgpgBgdAeg");
	this.shape_11.setTransform(17.5,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,136,187,0.745)").s().p("AgzA0QgWgVABgfQgBgeAWgVQAVgWAeABQAfgBAVAWQAWAVgBAeQABAfgWAVQgVAWgfgBQgeABgVgWg");
	this.shape_12.setTransform(17.5,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAg/g/QgbAbAAAkQAAAmAbAaQAbAbAkAAQAmAAAagbQAbgaAAgmQAAgkgbgbQgagbgmAAQgkAAgbAbg");
	this.shape_13.setTransform(17.5,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,136,187,0.89)").s().p("Ag3A4QgYgWAAgiQAAggAYgXQAXgYAgAAQAiAAAWAYQAYAXAAAgQAAAigYAWQgWAYgiAAQggAAgXgYg");
	this.shape_14.setTransform(17.5,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAg9g9QgZAaAAAjQAAAkAZAaQAaAZAjAAQAkAAAagZQAZgaAAgkQAAgjgZgaQgagZgkAAQgjAAgaAZg");
	this.shape_15.setTransform(17.5,17.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,136,187,0.969)").s().p("Ag6A7QgYgYAAgjQAAghAYgZQAZgYAhAAQAjAAAYAYQAZAZgBAhQABAjgZAYQgYAZgjgBQghABgZgZg");
	this.shape_16.setTransform(17.5,17.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,136,187,0.996)").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_17.setTransform(17.5,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_18.setTransform(17.5,17.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0088BB").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_19.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_18},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.shape_1}]},1).wait(1));

	// Shadow
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#97A8C9").s().p("Ah7B8Qgzg0AAhIQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABIgzA0QgzAzhJAAQhIAAgzgzgAh0h0QgwAxAABDQAABEAwAwQAxAxBDAAQBFAAAwgxQAwgwAAhEQAAhDgwgxQgwgwhFAAQhDAAgxAwg");
	this.shape_20.setTransform(17.5,18.5);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(3).to({_off:false},0).wait(22));

	// Active
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0088BB").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_21.setTransform(17.5,17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_22.setTransform(17.5,17.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#97A8C9").s().p("Ah7B8Qgzg0AAhIQAAhIAzgzQA0gzBHAAQBJAAAzAzQAzAzAABIQAABIgzA0QgzAzhJAAQhHAAg0gzgAh0h0QgwAxAABDQAABEAwAwQAxAxBDAAQBFAAAwgxQAwgwAAhEQAAhDgwgxQgwgwhFAAQhDAAgxAwg");
	this.shape_23.setTransform(17.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[]},1).wait(22));

	// Down
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QAzgzBIAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhIAAgzgzgAhQhQQgiAhAAAvQAAAvAiAiQAhAiAvAAQAwAAAhgiQAigiAAgvQAAgvgighQghgigwAAQgvAAghAig");
	this.shape_24.setTransform(17.5,17.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#97A8C9").s().p("Ah7B8Qgzg0AAhIQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABIgzA0QgzAzhJAAQhIAAgzgzgAh0h0QgwAxAABDQAABEAwAwQAxAxBDAAQBFAAAwgxQAwgwAAhEQAAhDgwgxQgwgwhFAAQhDAAgxAwg");
	this.shape_25.setTransform(17.5,18.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099DD").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_26.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[]},1).wait(22));

	// Up
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzgAhlhlQgrAqAAA7QAAA8ArAqQAqArA7AAQA8AAAqgrQArgqAAg8QAAg7grgqQgqgrg8AAQg7AAgqArg");
	this.shape_27.setTransform(17.5,17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#97A8C9").s().p("Ah7B8Qgzg0AAhIQAAhIAzgzQA0gzBHAAQBJAAAzAzQAzAzAABIQAABIgzA0QgzAzhJAAQhHAAg0gzgAh0h0QgwAxAABDQAABEAwAwQAxAxBDAAQBFAAAwgxQAwgwAAhEQAAhDgwgxQgwgwhFAAQhDAAgxAwg");
	this.shape_28.setTransform(17.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[]},1).to({state:[]},2).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,0,104.4,56);


(lib.TitleAst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.lblTitle = new lib.TitleLbl();
	this.lblTitle.name = "lblTitle";
	this.lblTitle.setTransform(187.1,24.35,1,1,0,0,0,185,16.7);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(2));

	// highlight
	this.astTitleHighlight = new lib.TitleHighlightAst();
	this.astTitleHighlight.name = "astTitleHighlight";
	this.astTitleHighlight.setTransform(185.5,22.6,1,1,0,0,0,185.5,18.2);
	this.astTitleHighlight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.astTitleHighlight).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.4,372.1,36.7);


(lib.QuestionFrameAst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// RadioBtn
	this.btnRadio4 = new lib.RadioBtn();
	this.btnRadio4.name = "btnRadio4";
	this.btnRadio4.setTransform(721.5,28,1,1,0,0,0,17.5,18);

	this.btnRadio3 = new lib.RadioBtn();
	this.btnRadio3.name = "btnRadio3";
	this.btnRadio3.setTransform(614.5,28,1,1,0,0,0,17.5,18);

	this.btnRadio2 = new lib.RadioBtn();
	this.btnRadio2.name = "btnRadio2";
	this.btnRadio2.setTransform(507.5,28,1,1,0,0,0,17.5,18);

	this.btnRadio1 = new lib.RadioBtn();
	this.btnRadio1.name = "btnRadio1";
	this.btnRadio1.setTransform(399.5,28,1,1,0,0,0,17.5,18);

	this.RadioBtn4 = new lib.RadioBtn();
	this.RadioBtn4.name = "RadioBtn4";
	this.RadioBtn4.setTransform(721.5,28,1,1,0,0,0,17.5,18);

	this.RadioBtn3 = new lib.RadioBtn();
	this.RadioBtn3.name = "RadioBtn3";
	this.RadioBtn3.setTransform(614.5,28,1,1,0,0,0,17.5,18);

	this.RadioBtn2 = new lib.RadioBtn();
	this.RadioBtn2.name = "RadioBtn2";
	this.RadioBtn2.setTransform(507.5,28,1,1,0,0,0,17.5,18);

	this.RadioBtn1 = new lib.RadioBtn();
	this.RadioBtn1.name = "RadioBtn1";
	this.RadioBtn1.setTransform(399.5,28,1,1,0,0,0,17.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnRadio1},{t:this.btnRadio2},{t:this.btnRadio3},{t:this.btnRadio4}]}).to({state:[{t:this.RadioBtn1},{t:this.RadioBtn2},{t:this.RadioBtn3},{t:this.RadioBtn4}]},1).wait(1));

	// Text
	this.lblQuestion = new lib.QuestionLbl();
	this.lblQuestion.name = "lblQuestion";
	this.lblQuestion.setTransform(163.8,34.75,1,1,0,0,0,147.4,12.9);

	this.timeline.addTween(cjs.Tween.get(this.lblQuestion).wait(2));

	// QuestionTile
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Eg77AGQQgbAAgSgTQgTgSAAgbIAAqfQAAgbATgSQASgTAbAAMB33AAAQAaAAATATQATATAAAaIAAKfQAAAbgTASQgTATgaAAg");
	this.shape.setTransform(390,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0088BB").s().p("Eg4UAF3QgZAAgSgRQgRgSAAgZIAAp1QAAgZARgSQASgRAZAAMBwpAAAQAZAAASARQARATAAAYIAAJ1QAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(389.9934,39.9994,1.0641,1.0667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,780,80);


(lib.AnswerAst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Default":0,"Highlight":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.lblAnswer = new lib.AnswerLbl();
	this.lblAnswer.name = "lblAnswer";
	this.lblAnswer.setTransform(24.5,13.2,1,1,0,0,0,36.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.lblAnswer).wait(2));

	// Highlight
	this.astAnswerHighlight = new lib.AnswerHighlightAst();
	this.astAnswerHighlight.name = "astAnswerHighlight";
	this.astAnswerHighlight.setTransform(29.8,-6,1.0425,1,0,0,0,42,9.9);
	this.astAnswerHighlight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.astAnswerHighlight).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-15.9,98,42);


(lib.FeedbackModalAst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// QuestionBlocks
	this.astQuestionFrame1 = new lib.QuestionFrameAst();
	this.astQuestionFrame1.name = "astQuestionFrame1";
	this.astQuestionFrame1.setTransform(400,141,1,1,0,0,0,390,45);

	this.astQuestionFrame2 = new lib.QuestionFrameAst();
	this.astQuestionFrame2.name = "astQuestionFrame2";
	this.astQuestionFrame2.setTransform(376.5,223.5,1,1,0,0,0,366.5,37.5);

	this.astQuestionFrame4 = new lib.QuestionFrameAst();
	this.astQuestionFrame4.name = "astQuestionFrame4";
	this.astQuestionFrame4.setTransform(376.5,403.5,1,1,0,0,0,366.5,37.5);

	this.astQuestionFrame3 = new lib.QuestionFrameAst();
	this.astQuestionFrame3.name = "astQuestionFrame3";
	this.astQuestionFrame3.setTransform(376.5,313.5,1,1,0,0,0,366.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astQuestionFrame3},{t:this.astQuestionFrame4},{t:this.astQuestionFrame2},{t:this.astQuestionFrame1}]}).wait(1));

	// SubmitBtn
	this.btnSubmit = new lib.SubmitBtn();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.setTransform(417.5,480.5,1,1,0,0,0,97.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// ExitBtn
	this.btnExit = new lib.ExitBtn();
	this.btnExit.name = "btnExit";
	this.btnExit.setTransform(781.8,16.8,1,1,0,0,0,7.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.btnExit).wait(1));

	// HighlightBtn
	this.btnSkip = new lib.SkipBtn();
	this.btnSkip.name = "btnSkip";
	this.btnSkip.setTransform(610.9,28.45,1,1,0,0,0,17,17);

	this.btnHighlight = new lib.HighlightBtn();
	this.btnHighlight.name = "btnHighlight";
	this.btnHighlight.setTransform(610.9,28.45,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnHighlight},{t:this.btnSkip}]}).wait(1));

	// AnswerLabels
	this.astAnswer4 = new lib.AnswerAst();
	this.astAnswer4.name = "astAnswer4";
	this.astAnswer4.setTransform(733.5,78.95,1,1,0,0,0,36.5,9.2);

	this.astAnswer3 = new lib.AnswerAst();
	this.astAnswer3.name = "astAnswer3";
	this.astAnswer3.setTransform(625.5,78.95,1,1,0,0,0,36.5,9.2);

	this.astAnswer2 = new lib.AnswerAst();
	this.astAnswer2.name = "astAnswer2";
	this.astAnswer2.setTransform(517.5,78.95,1,1,0,0,0,36.5,9.2);

	this.astAnswer1 = new lib.AnswerAst();
	this.astAnswer1.name = "astAnswer1";
	this.astAnswer1.setTransform(409.5,78.95,1,1,0,0,0,36.5,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astAnswer1},{t:this.astAnswer2},{t:this.astAnswer3},{t:this.astAnswer4}]}).wait(1));

	// TitleLabel
	this.astTitle = new lib.TitleAst();
	this.astTitle.name = "astTitle";
	this.astTitle.setTransform(401.1,31.4,1,1,0,0,0,186.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.astTitle).wait(1));

	// Scrim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9fAooQgbAAgSgSQgTgSAAgaMAAAhPUQAAgZATgSQASgSAbAAMB6/AAAQAbAAASASQATASAAAZMAAABPUQAAAagTASQgSASgbAAg");
	this.shape.setTransform(400,260);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("Eg54AnxQgZAAgSgSQgRgRAAgZMAAAhNpQAAgZARgSQASgRAZAAMBzxAAAQAZAAARARQASATAAAYMAAABNpQAAAZgSARQgRASgZAAg");
	this.shape_1.setTransform(376.5,256.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeedbackModalAst, new cjs.Rectangle(0,0,800,520), null);


// stage content:
(lib.FeedbackFeature = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Stage
	this.astFeedbackModal = new lib.FeedbackModalAst();
	this.astFeedbackModal.name = "astFeedbackModal";
	this.astFeedbackModal.setTransform(512,410,1,1,0,0,0,400,280);

	this.timeline.addTween(cjs.Tween.get(this.astFeedbackModal).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(624,514,288,136);
// library properties:
lib.properties = {
	id: '05C0A6E504E0B541BF1F2E54664B3257',
	width: 1024,
	height: 768,
	fps: 30,
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
an.compositions['05C0A6E504E0B541BF1F2E54664B3257'] = {
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