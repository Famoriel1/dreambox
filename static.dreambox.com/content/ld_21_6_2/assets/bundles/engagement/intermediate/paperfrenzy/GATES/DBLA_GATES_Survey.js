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
	this.shape.graphics.beginLinearGradientFill(["#669900","#4A7000"],[0,1],0,-17,0,17).beginStroke().moveTo(-42,18).curveTo(-46,18,-46,14).lineTo(-46,-14).curveTo(-46,-18,-42,-18).lineTo(42,-18).curveTo(46,-18,46,-14).lineTo(46,14).curveTo(46,18,42,18).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shape_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.2)").beginStroke().moveTo(-43.5,20.5).curveTo(-48.5,20.5,-48.5,15.5).lineTo(-48.5,-15.5).curveTo(-48.5,-20.5,-43.5,-20.5).lineTo(43.5,-20.5).curveTo(48.5,-20.5,48.5,-15.5).lineTo(48.5,15.5).curveTo(48.5,20.5,43.5,20.5).closePath();
	this.shape_2.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("rgba(0,0,0,0.098)").setStrokeStyle(2,1,1).moveTo(-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).lineTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).closePath();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenOver, new cjs.Rectangle(-50.5,-22.5,101.5,45.5), null);


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
	this.shape.graphics.beginLinearGradientFill(["#335800","#274400"],[0,1],0,-17,0,17).beginStroke().moveTo(-42,18).curveTo(-46,18,-46,14).lineTo(-46,-14).curveTo(-46,-18,-42,-18).lineTo(42,-18).curveTo(46,-18,46,-14).lineTo(46,14).curveTo(46,18,42,18).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shape_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.2)").beginStroke().moveTo(-43.5,20.5).curveTo(-48.5,20.5,-48.5,15.5).lineTo(-48.5,-15.5).curveTo(-48.5,-20.5,-43.5,-20.5).lineTo(43.5,-20.5).curveTo(48.5,-20.5,48.5,-15.5).lineTo(48.5,15.5).curveTo(48.5,20.5,43.5,20.5).closePath();
	this.shape_2.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("rgba(0,0,0,0.098)").setStrokeStyle(2,1,1).moveTo(-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).lineTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).closePath();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenDown, new cjs.Rectangle(-50.5,-22.5,101.5,45.5), null);


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

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.698)").beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#DADADA","#BEBEBE"],[0,1],0,-17,0,17).beginStroke().moveTo(-42,18).curveTo(-46,18,-46,14).lineTo(-46,-14).curveTo(-46,-18,-42,-18).lineTo(42,-18).curveTo(46,-18,46,-14).lineTo(46,14).curveTo(46,18,42,18).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shape_copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.047)").beginStroke().moveTo(-43.5,20.5).curveTo(-48.5,20.5,-48.5,15.5).lineTo(-48.5,-15.5).curveTo(-48.5,-20.5,-43.5,-20.5).lineTo(43.5,-20.5).curveTo(48.5,-20.5,48.5,-15.5).lineTo(48.5,15.5).curveTo(48.5,20.5,43.5,20.5).closePath();
	this.shape_3.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("rgba(0,0,0,0.047)").setStrokeStyle(2,1,1).moveTo(-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).lineTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).closePath();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreenDisabled, new cjs.Rectangle(-50.5,-22.5,101.5,45.5), null);


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
	this.shape.graphics.beginLinearGradientFill(["#4F7700","#3A5700"],[0,1],0,-17,0,17).beginStroke().moveTo(-42,18).curveTo(-46,18,-46,14).lineTo(-46,-14).curveTo(-46,-18,-42,-18).lineTo(42,-18).curveTo(46,-18,46,-14).lineTo(46,14).curveTo(46,18,42,18).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shape_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.2)").beginStroke().moveTo(-43.5,20.5).curveTo(-48.5,20.5,-48.5,15.5).lineTo(-48.5,-15.5).curveTo(-48.5,-20.5,-43.5,-20.5).lineTo(43.5,-20.5).curveTo(48.5,-20.5,48.5,-15.5).lineTo(48.5,15.5).curveTo(48.5,20.5,43.5,20.5).closePath();
	this.shape_2.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("rgba(0,0,0,0.098)").setStrokeStyle(2,1,1).moveTo(-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).lineTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).closePath();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#FFFFFF","#D4D4D4"],[0,1],-3.5,-20.5,-3.5,13.5).beginStroke().moveTo(-44.5,21.5).curveTo(-49.5,21.5,-49.5,16.5).lineTo(-49.5,-16.5).curveTo(-49.5,-21.5,-44.5,-21.5).lineTo(44.5,-21.5).curveTo(49.5,-21.5,49.5,-16.5).lineTo(49.5,16.5).curveTo(49.5,21.5,44.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSEBaseGreen, new cjs.Rectangle(-50.5,-22.5,101.5,45.5), null);


(lib.DBLAemote4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gub
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#633221").beginStroke().moveTo(-94.4,29.8).curveTo(-95.5,28.3,-95.2,26.5).curveTo(-94.9,24.6,-93.3,23.5).curveTo(-53.4,-5.3,1.5,-19.4).curveTo(43.1,-30.1,90.6,-31.7).curveTo(92.5,-31.7,93.8,-30.5).curveTo(95.2,-29.2,95.2,-27.3).curveTo(95.3,-25.5,94,-24.1).curveTo(92.8,-22.7,90.9,-22.7).curveTo(44.6,-21.1,4,-10.7).curveTo(-49.4,3,-88.1,30.8).curveTo(-89.3,31.7,-90.7,31.7).curveTo(-93,31.7,-94.4,29.8).closePath();
	this.shape.setTransform(61.0207,35.2832,0.0876,0.0878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#633221").beginStroke().moveTo(-87,12.5).curveTo(-88.2,11.7,-88.6,10.3).curveTo(-89.2,8.5,-88.4,6.9).curveTo(-87.5,5.2,-85.8,4.6).curveTo(-44.9,-8.7,-1.4,-12.2).curveTo(42.1,-15.6,85.1,-9).curveTo(86.9,-8.7,88,-7.2).curveTo(89.1,-5.7,88.8,-3.8).curveTo(88.5,-2,87,-0.9).curveTo(85.5,0.2,83.7,-0.1).curveTo(41.8,-6.6,-0.6,-3.2).curveTo(-43.1,0.2,-83,13.2).curveTo(-83.6,13.4,-84.4,13.4).curveTo(-85.8,13.4,-87,12.5).closePath();
	this.shape_1.setTransform(37.4862,40.4836,0.0876,0.0878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C6684D").beginStroke().moveTo(-50.6,38.5).curveTo(-64.3,31.2,-75.6,21.1).curveTo(-85.8,11.9,-90.8,3.5).curveTo(-91.3,0.4,-70.9,-9.8).curveTo(-49.5,-20.6,-21.7,-30.5).curveTo(10.9,-42.2,38.3,-47.4).curveTo(71.1,-53.7,90.8,-49.5).curveTo(84.8,-9.3,68.8,13.6).curveTo(50.5,39.8,16,48.6).curveTo(6.1,51.2,-4,51.2).curveTo(-26.7,51.2,-50.6,38.5).closePath();
	this.shape_2.setTransform(61.0161,37.3411,0.0876,0.0878);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#C6684D").beginStroke().moveTo(-64.9,20.5).curveTo(-75.6,8.6,-82.1,-6.5).curveTo(-87.6,-19.5,-88.3,-30.3).curveTo(-7.1,-58.2,88.3,-43.6).curveTo(83.3,-17.8,71.1,3.8).curveTo(47.5,45.3,7,48.3).curveTo(2.9,48.6,-1.1,48.6).curveTo(-39.5,48.6,-64.9,20.5).closePath();
	this.shape_3.setTransform(37.4972,44.0642,0.0876,0.0878);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#633221").beginStroke().moveTo(-89.9,10.3).curveTo(-92.4,9.8,-93.7,7.8).curveTo(-95.1,5.7,-94.6,3.3).curveTo(-94.1,0.8,-92,-0.5).curveTo(-90,-1.9,-87.5,-1.4).curveTo(-51.1,6,-3.6,2.3).curveTo(43.9,-1.5,86.9,-15.2).curveTo(89.3,-15.9,91.5,-14.8).curveTo(93.7,-13.6,94.5,-11.3).curveTo(95.2,-8.9,94.1,-6.7).curveTo(92.9,-4.5,90.6,-3.7).curveTo(61.2,5.6,28.7,10.5).curveTo(-3.3,15.4,-33.8,15.4).curveTo(-65,15.4,-89.9,10.3).closePath();
	this.shape_4.setTransform(37.2636,30.3583,0.0876,0.0878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#633221").beginStroke().moveTo(-85.4,83.6).curveTo(-86.9,82.6,-87.6,80.8).curveTo(-88.4,78.4,-87.4,76.2).curveTo(-86.4,73.9,-84,73.1).curveTo(-43.2,58.1,17.7,-6.8).curveTo(39.8,-30.4,57.8,-53.6).curveTo(74.1,-74.4,76.2,-80.6).curveTo(77,-83,79.2,-84.1).curveTo(81.5,-85.2,83.8,-84.4).curveTo(86.2,-83.6,87.3,-81.4).curveTo(88.4,-79.1,87.6,-76.8).curveTo(84.6,-68.1,65.1,-43.3).curveTo(46.7,-20.1,26.4,1.6).curveTo(-8.7,39,-38.7,60.9).curveTo(-61.5,77.6,-79.9,84.3).curveTo(-80.9,84.7,-82,84.7).curveTo(-83.8,84.7,-85.4,83.6).closePath();
	this.shape_5.setTransform(55.6213,20.6664,0.0876,0.0878);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#C6684D").beginStroke().moveTo(-88.9,61.4).curveTo(-90.9,32.9,-87.3,6.8).curveTo(-78.2,-60.3,-35.9,-94.4).curveTo(-8.3,-116.7,36,-95.2).curveTo(52.2,-87.3,68.4,-74.6).curveTo(81.4,-64.3,89.6,-55).curveTo(84.3,-37.1,59.4,-9.2).curveTo(38.3,14.2,6,41.8).curveTo(-21.5,65.3,-48.6,84.7).curveTo(-73.8,102.7,-82.3,105.8).curveTo(-87.3,85.2,-88.9,61.4).closePath();
	this.shape_6.setTransform(55.1815,18.6292,0.0876,0.0878);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#C6684D").beginStroke().moveTo(-42.6,60.6).curveTo(-75.2,60.3,-93.9,55.8).curveTo(-81.7,3.3,-62.7,-23.2).curveTo(-39.9,-55.3,-1.2,-60.2).curveTo(16,-62.4,33,-53.4).curveTo(48.3,-45.2,61.8,-28.8).curveTo(74.2,-13.6,82.8,5.7).curveTo(91.2,24.5,93.9,42.3).curveTo(93,46.2,71,50.7).curveTo(49.6,55.1,19,57.9).curveTo(-11.3,60.7,-38.1,60.6).lineTo(-42.6,60.6).closePath();
	this.shape_7.setTransform(37.206,25.8186,0.0876,0.0878);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#2F673A").beginStroke().moveTo(-46.2,-3.8).curveTo(-50.3,-39.3,-26.4,-47.2).lineTo(-20.7,-49.1).curveTo(-16.7,-50.5,-10.4,-50).curveTo(-3.7,-49.4,3.1,-46.9).curveTo(19.8,-40.6,26.5,-26.9).curveTo(38.3,-8.3,46.8,15.6).curveTo(42.5,15.2,38,15.2).curveTo(27.5,15.2,17.2,17.7).curveTo(13.4,8.1,8.8,-1).curveTo(5.2,-9.2,-1.5,-13.9).curveTo(-7.2,-18,-10.4,-17).lineTo(-12.4,-16.3).curveTo(-20.5,-13.6,-16.1,6.6).curveTo(-13,17.9,-9.1,29.4).curveTo(-21.8,37.9,-30.8,50.1).curveTo(-40.4,25.3,-46.2,-3.8).closePath();
	this.shape_8.setTransform(54.3061,28.867,0.0876,0.0878);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#6FB371").beginStroke().moveTo(-29.1,20.7).curveTo(-36.6,9.1,-43.5,-8.6).curveTo(-34.5,-20.8,-21.8,-29.3).curveTo(-16.4,-13.7,-11,-3.2).curveTo(-1,14.6,7.1,11.9).lineTo(9.1,11.3).curveTo(13.3,9.9,14.2,2.7).curveTo(15.1,-3.8,13.4,-13.3).curveTo(10.4,-26.2,4.5,-41).curveTo(14.8,-43.5,25.3,-43.5).curveTo(29.8,-43.5,34.1,-43.1).curveTo(41,-23.7,43.3,-6.7).curveTo(44.4,10,39.3,22.2).curveTo(33.6,35.8,21.3,39.9).lineTo(15.6,41.8).curveTo(10.4,43.5,5.4,43.5).curveTo(-12.8,43.5,-29.1,20.7).closePath();
	this.shape_9.setTransform(55.4188,34.0179,0.0876,0.0878);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#2F673A").beginStroke().moveTo(-34.6,-8.2).curveTo(-25.1,-38.1,-1.1,-37.2).lineTo(4.7,-36.9).curveTo(17.7,-36.4,26.7,-28.4).curveTo(35.7,-20.3,40,-5.1).curveTo(41.2,13.7,40.5,30).curveTo(29.6,25.9,17.6,24.5).lineTo(17.5,24.5).curveTo(17.7,15.1,17.5,5.7).curveTo(15.8,-4.5,11.9,-9.8).curveTo(8.1,-15.1,2.4,-15.3).lineTo(-0.1,-15.5).curveTo(-10.5,-15.9,-15,4.3).curveTo(-16.9,16.6,-17.7,27.4).curveTo(-29.9,30.8,-40.7,37.2).curveTo(-39.8,15.7,-34.6,-8.2).closePath();
	this.shape_10.setTransform(41.3314,34.6458,0.0876,0.0878);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#6FB371").beginStroke().moveTo(-1.4,37.4).lineTo(-7.1,37.1).curveTo(-31,36.2,-38.8,6.3).curveTo(-41.3,-6.6,-40.5,-24.7).curveTo(-29.6,-31.2,-17.5,-34.6).curveTo(-18.8,-17.4,-17.5,-6.1).curveTo(-14.5,13.8,-4.1,14.3).lineTo(-1.6,14.4).curveTo(3.8,14.6,8.3,8.3).curveTo(12.2,2.7,14.7,-6.7).curveTo(17.3,-19.4,17.7,-37.4).lineTo(17.8,-37.4).curveTo(29.7,-36.1,40.7,-31.9).curveTo(39.8,-9.3,35.2,6.6).curveTo(29.9,20.4,21,28.6).curveTo(11.4,37.4,-0.1,37.4).lineTo(-1.4,37.4).closePath();
	this.shape_11.setTransform(41.2953,40.0779,0.0876,0.0878);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D4E6E9").beginStroke().moveTo(-55.2,140.7).curveTo(-91.6,97.7,-115.2,16.5).curveTo(-124.4,-15.3,-123.7,-48.4).curveTo(-123,-80.3,-113.4,-108.3).curveTo(-103.7,-136.3,-86.8,-155.3).curveTo(-69.1,-175.1,-46.6,-181.7).curveTo(-28.6,-186.9,-4.3,-176.3).curveTo(18.7,-166.3,42.4,-144.5).curveTo(66,-122.7,84,-94.9).curveTo(103,-65.5,111.1,-36.2).curveTo(121.1,0.2,123.2,35.4).curveTo(125.5,72.2,118.6,101.9).curveTo(111.3,133.7,94.4,153.7).curveTo(75.9,175.3,47.4,181.2).curveTo(36.6,183.4,26.2,183.4).curveTo(-19,183.4,-55.2,140.7).closePath();
	this.shape_12.setTransform(58.1714,25.4437,0.0876,0.0878);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#D4E6E9").beginStroke().moveTo(-0,154.1).curveTo(-60,149.9,-81.3,100.8).curveTo(-90.2,80.5,-93.5,50.2).curveTo(-96.1,27.6,-96.1,-8.3).curveTo(-96.1,-38,-88.5,-65.1).curveTo(-81.2,-91.3,-68,-111.5).curveTo(-54.7,-131.7,-37.4,-142.8).curveTo(-19.5,-154.2,-0,-154.2).curveTo(19.6,-154.2,37.4,-142.8).curveTo(54.7,-131.7,67.9,-111.5).curveTo(81.3,-91.3,88.5,-65.1).curveTo(96.1,-38,96.1,-8.3).curveTo(96.1,23,90.4,51.8).curveTo(84.4,82.2,73,104.9).curveTo(60.6,129.5,43.1,142).curveTo(26,154.2,5.1,154.2).curveTo(2.6,154.2,-0,154.1).closePath();
	this.shape_13.setTransform(37.4709,34.4772,0.0876,0.0878);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#633221").beginStroke().moveTo(-174.5,101.5).curveTo(-184.1,98.5,-191.8,91.8).curveTo(-199.5,85.1,-203.2,76.6).curveTo(-209.1,62.9,-203.4,45.3).curveTo(-197.7,27.7,-181.1,8.5).curveTo(-166,-9.1,-144.1,-25.4).curveTo(-122.2,-41.6,-97.5,-53.7).curveTo(-66.7,-68.8,-20.8,-83.4).curveTo(35.8,-101.3,72.2,-103.2).curveTo(107.5,-105,137,-96.9).curveTo(173,-86.9,190.4,-64).curveTo(197.8,-54.3,202.4,-37.7).curveTo(207.9,-18.1,205.4,-1).curveTo(202.1,21.3,185.4,33.5).curveTo(167.8,46.2,137.3,36.6).curveTo(119.6,31.1,84.2,11.7).curveTo(65.6,1.4,58.3,-1.8).curveTo(34.7,-12.3,7,-11.9).curveTo(-20.7,-11.6,-46.2,-0.5).curveTo(-69.8,9.6,-89.4,27.9).curveTo(-109.1,46.2,-122.3,70.2).lineTo(-124.2,73.6).curveTo(-129.2,82.8,-132.3,87.2).curveTo(-137.5,94.3,-143.9,98.3).curveTo(-152,103.5,-162.1,103.5).curveTo(-168.2,103.5,-174.5,101.5).closePath().moveTo(72.7,-93.2).curveTo(39.5,-91.5,-14.2,-74.9).curveTo(-61.1,-60.4,-93.1,-44.8).curveTo(-117.6,-32.8,-138.8,-16.9).curveTo(-159.2,-1.6,-173.4,14.9).curveTo(-187.6,31.4,-193,46.2).curveTo(-198.7,61.6,-194,72.6).curveTo(-191.1,79.2,-185.1,84.4).curveTo(-179.1,89.6,-171.5,91.9).curveTo(-165.4,93.9,-159.6,93.3).curveTo(-153.8,92.8,-149.2,89.9).curveTo(-144.3,86.8,-140,80.8).curveTo(-137.4,77.1,-133,68.8).lineTo(-131.1,65.4).curveTo(-117,39.9,-96.1,20.5).curveTo(-75.3,1.1,-50.2,-9.7).curveTo(-22.8,-21.6,7.1,-21.9).curveTo(36.9,-22.2,62.3,-10.9).curveTo(70.7,-7.2,89.1,2.9).curveTo(121.7,20.9,137.8,26.3).curveTo(165.3,35.6,179.5,25.4).curveTo(192.8,15.7,195.5,-2.5).curveTo(197.6,-17,192.9,-34.4).curveTo(188.8,-49.6,182.4,-58).curveTo(172.3,-71.2,152.7,-80.4).curveTo(124.9,-93.5,85.7,-93.5).curveTo(79.3,-93.5,72.7,-93.2).closePath();
	this.shape_14.setTransform(52.6073,55.4428,0.0876,0.0878);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#221F20").beginStroke().moveTo(-176.2,95.6).curveTo(-192.3,89.1,-198.6,74.6).curveTo(-204,61.9,-198,45.1).curveTo(-192.4,29.3,-177.3,11.7).curveTo(-162.6,-5.3,-141.4,-21.2).curveTo(-119.9,-37.3,-95.3,-49.3).curveTo(-63.8,-64.7,-17.2,-79.2).curveTo(37.8,-96.4,72.5,-98.2).curveTo(107.1,-99.9,135.7,-92).curveTo(170,-82.5,186.4,-61).curveTo(191.3,-54.5,195.3,-43.5).curveTo(199.8,-31.1,200.9,-18.6).curveTo(203.7,14,182.4,29.4).curveTo(163,43.5,122.3,25.6).curveTo(110.3,20.3,89.2,8.7).curveTo(67.9,-3,60.3,-6.4).curveTo(35.4,-17.4,6.1,-16.9).curveTo(-22.2,-16.4,-48.2,-5.1).curveTo(-73.1,5.6,-93.7,25.1).curveTo(-113.4,43.7,-126.7,67.8).curveTo(-133.2,79.6,-135,82.3).curveTo(-140.3,90.2,-146.5,94.1).curveTo(-153,98.2,-161,98.4).lineTo(-162.2,98.5).curveTo(-169.1,98.5,-176.2,95.6).closePath();
	this.shape_15.setTransform(52.6084,55.4425,0.0876,0.0878);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E27759").beginStroke().moveTo(-109.4,344.6).curveTo(-150.9,336.4,-183.8,321.8).curveTo(-210.9,309.7,-234.9,276.5).curveTo(-257.4,245.4,-267.6,209.7).curveTo(-276.9,176.7,-289,115.5).curveTo(-301.3,52.9,-311.8,-16.2).curveTo(-337.3,-184.1,-335,-266.9).curveTo(-334.7,-279.1,-326.6,-288.7).curveTo(-318.6,-298.1,-306,-301.5).curveTo(-167.8,-338.7,-13.9,-349.4).curveTo(133.6,-359.7,297.4,-345.7).curveTo(310.1,-344.6,319.3,-336.3).curveTo(328.5,-328,330.1,-316).curveTo(335.7,-275.6,335.1,-199.1).curveTo(334.6,-128.7,329.1,-41.8).curveTo(323.8,42.1,315.4,118).curveTo(306.7,196.2,297.1,242.6).curveTo(292.8,263.6,276.5,280.1).curveTo(262.9,294,245.4,301).curveTo(113.9,353.7,-10.8,353.8).lineTo(-11.9,353.8).curveTo(-63.2,353.8,-109.4,344.6).closePath();
	this.shape_16.setTransform(49.4495,61.4485,0.0876,0.0878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gubstroke
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#A8A9AC").beginStroke().moveTo(-11.3,498.2).curveTo(-62.3,498.2,-109.4,489.4).curveTo(-156.5,480.6,-193.7,464.1).curveTo(-210,456.8,-225.5,443.3).curveTo(-241.1,429.7,-254.7,410.8).curveTo(-266.8,394,-276.2,374.8).curveTo(-285.6,355.6,-291.1,336.3).curveTo(-300.6,302.6,-312.8,240.4).curveTo(-325.3,176.9,-335.9,106.7).curveTo(-361.8,-63.6,-359.5,-147.7).curveTo(-358.9,-168,-345.9,-183.8).curveTo(-332.9,-199.7,-312.3,-205.2).curveTo(-285.6,-212.4,-256.3,-219.1).curveTo(-253.4,-249.6,-243.2,-276.7).curveTo(-233,-303.7,-216.7,-323.9).curveTo(-200.3,-344.4,-179.7,-355.3).curveTo(-159,-366.2,-136.8,-366.2).curveTo(-114.6,-366.2,-94,-355.4).curveTo(-73.5,-344.6,-57.1,-324.4).curveTo(-52,-318.1,-47.4,-311).curveTo(-49.8,-336,-47.1,-360.3).curveTo(-44.4,-384.7,-36.9,-406.7).curveTo(-25,-440.9,-3.3,-464.2).curveTo(18.5,-487.4,46.2,-495.6).curveTo(61.9,-500.2,80.3,-496.9).curveTo(98.7,-493.6,118.4,-482.6).curveTo(136.5,-472.5,154.6,-456.6).curveTo(172.6,-440.6,188.2,-420.9).curveTo(204.7,-400.1,216.5,-377.7).curveTo(228.2,-355.3,234.3,-333.1).curveTo(245.4,-293.1,247.5,-254.1).curveTo(273.1,-252.5,299.5,-250.2).curveTo(320.9,-248.4,336.3,-234.2).curveTo(351.6,-220.1,354.4,-199.5).curveTo(360.1,-158.2,359.7,-81).curveTo(359.3,-9.8,353.8,77.7).curveTo(348.5,162.8,340,239.6).curveTo(331.1,319.1,321.2,367.4).curveTo(315.5,395,294.9,416.4).curveTo(277.5,434.5,254.6,443.6).curveTo(187,470.7,120.3,484.4).curveTo(53.7,498.2,-10.7,498.2).closePath().moveTo(-179.2,-354.4).curveTo(-199.7,-343.6,-216,-323.3).curveTo(-232.2,-303.2,-242.3,-276.2).curveTo(-252.5,-249.2,-255.3,-218.7).lineTo(-255.3,-218.3).lineTo(-255.7,-218.2).curveTo(-284,-211.8,-312.1,-204.3).curveTo(-332.4,-198.8,-345.2,-183.2).curveTo(-357.9,-167.6,-358.5,-147.7).curveTo(-360.8,-63.6,-335,106.5).curveTo(-324.3,176.7,-311.9,240.2).curveTo(-299.7,302.4,-290.1,336).curveTo(-284.6,355.2,-275.3,374.3).curveTo(-266,393.5,-253.9,410.2).curveTo(-240.3,429,-224.9,442.5).curveTo(-209.4,456,-193.3,463.1).curveTo(-156.2,479.6,-109.2,488.4).curveTo(-62.2,497.2,-11.3,497.2).lineTo(-10.7,497.2).curveTo(53.6,497.2,120.2,483.5).curveTo(186.7,469.8,254.2,442.7).curveTo(276.9,433.6,294.2,415.7).curveTo(314.6,394.5,320.2,367.2).curveTo(330.1,319,339,239.5).curveTo(347.5,162.6,352.8,77.7).curveTo(358.3,-9.7,358.7,-81).curveTo(359.2,-158.1,353.5,-199.4).curveTo(350.7,-219.6,335.6,-233.5).curveTo(320.5,-247.4,299.4,-249.2).curveTo(274,-251.4,247,-253.1).lineTo(246.5,-253.2).lineTo(246.5,-253.6).curveTo(244.4,-292.6,233.4,-332.8).curveTo(227.3,-355,215.6,-377.3).curveTo(203.9,-399.5,187.4,-420.3).curveTo(171.9,-439.9,153.9,-455.8).curveTo(136,-471.6,117.9,-481.7).curveTo(98.4,-492.6,80.2,-495.9).curveTo(62,-499.2,46.5,-494.6).curveTo(19,-486.6,-2.6,-463.5).curveTo(-24.1,-440.4,-35.9,-406.3).curveTo(-43.6,-384,-46.3,-359.2).curveTo(-48.9,-334.4,-46.2,-309).lineTo(-46,-306.8).lineTo(-47.1,-308.6).curveTo(-52,-316.5,-57.9,-323.8).curveTo(-74.1,-343.8,-94.5,-354.5).curveTo(-114.8,-365.2,-136.8,-365.2).curveTo(-158.8,-365.2,-179.2,-354.4).closePath();
	this.shape_17.setTransform(49.2621,50.5347,0.0911,0.0912);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.3,497.7).curveTo(-62.3,497.7,-109.3,488.9).curveTo(-156.3,480.1,-193.5,463.6).curveTo(-209.7,456.4,-225.2,442.9).curveTo(-240.7,429.3,-254.3,410.5).curveTo(-266.4,393.7,-275.8,374.6).curveTo(-285.1,355.3,-290.6,336.1).curveTo(-300.1,302.5,-312.3,240.3).curveTo(-324.8,176.8,-335.4,106.6).curveTo(-361.3,-63.5,-359,-147.7).curveTo(-358.4,-167.8,-345.5,-183.5).curveTo(-332.6,-199.3,-312.2,-204.7).curveTo(-284.2,-212.3,-255.8,-218.7).curveTo(-252.9,-249.8,-242.6,-277).curveTo(-232.4,-303.7,-216.4,-323.6).curveTo(-200.2,-343.7,-180.1,-354.5).curveTo(-159.4,-365.7,-136.8,-365.7).curveTo(-114.7,-365.7,-94.3,-354.9).curveTo(-73.8,-344.2,-57.5,-324.1).curveTo(-51.9,-317.2,-46.7,-308.9).curveTo(-49.4,-334.2,-46.8,-359).curveTo(-44.1,-384.1,-36.4,-406.5).curveTo(-24.6,-440.6,-2.9,-463.8).curveTo(18.7,-487,46.3,-495.1).curveTo(62,-499.7,80.3,-496.4).curveTo(98.5,-493.1,118.1,-482.2).curveTo(136.3,-472,154.3,-456.2).curveTo(172.3,-440.3,187.8,-420.6).curveTo(204.3,-399.8,216,-377.5).curveTo(227.7,-355.2,233.9,-332.9).curveTo(245,-292.6,247,-253.6).curveTo(273.4,-252,299.5,-249.7).curveTo(320.7,-247.9,335.9,-233.9).curveTo(351.1,-219.8,353.9,-199.4).curveTo(359.6,-158.2,359.2,-81).curveTo(358.8,-9.8,353.3,77.7).curveTo(348,162.7,339.5,239.5).curveTo(330.6,319,320.7,367.3).curveTo(315.1,394.7,294.5,416.1).curveTo(277.2,434,254.4,443.2).curveTo(186.8,470.2,120.3,484).curveTo(53.7,497.7,-10.7,497.7).closePath();
	this.shape_18.setTransform(49.2621,50.5343,0.0911,0.0912);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// FlashAICB
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginLinearGradientFill(["#E27759","#9C523B"],[0.439,1],0,69.5,0,-69.5).beginStroke().moveTo(-43.5,69).curveTo(-45.3,69,-46.6,67.7).curveTo(-48,66.4,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.3,-46.6,-67.7).curveTo(-45.3,-69,-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.3,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).closePath();
	this.shape_19.setTransform(48.0015,69.0021,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAemote4, new cjs.Rectangle(0,0,96,138), null);


(lib.DBLAemote3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gub
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#61411F").beginStroke().moveTo(-140.7,56.3).curveTo(-142.7,54.8,-143.2,52.4).curveTo(-143.9,49.6,-142.4,47.1).curveTo(-140.9,44.7,-138.1,44).curveTo(-99.6,34.7,-62,15.3).curveTo(-40.1,4,-4.4,-19.3).curveTo(25.3,-38.7,39.5,-45.7).curveTo(62.6,-57.1,82,-57.7).curveTo(96.3,-58.1,108,-54.1).curveTo(119.7,-50,128,-41.8).curveTo(135.6,-34.3,139.6,-24.1).curveTo(143.7,-13.8,143.4,-2.6).curveTo(143.4,0.3,141.3,2.3).curveTo(139.2,4.3,136.3,4.3).curveTo(133.4,4.2,131.4,2.2).curveTo(129.4,0.1,129.4,-2.8).curveTo(129.6,-11.2,126.6,-18.8).curveTo(123.7,-26.4,118.2,-31.9).curveTo(105.5,-44.4,82.4,-43.7).curveTo(65.6,-43.2,44.8,-32.8).curveTo(32,-26.4,3.3,-7.6).curveTo(-33.3,16.3,-56,28).curveTo(-94.7,47.9,-134.8,57.6).lineTo(-136.4,57.8).curveTo(-138.8,57.8,-140.7,56.3).closePath();
	this.shape.setTransform(51.1339,47.16,0.13,0.1253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#633221").beginStroke().moveTo(-65.6,22.1).curveTo(-66.6,20.8,-66.4,19.2).curveTo(-66.1,17.5,-64.8,16.5).curveTo(-37.2,-4.4,0.7,-14.7).curveTo(29.5,-22.5,62.2,-23.7).curveTo(63.9,-23.7,65.1,-22.6).curveTo(66.3,-21.5,66.4,-19.8).curveTo(66.4,-18.2,65.3,-17).curveTo(64.2,-15.7,62.5,-15.7).curveTo(30.9,-14.6,3.1,-7.1).curveTo(-33.5,2.8,-60,22.9).curveTo(-61,23.7,-62.4,23.7).curveTo(-64.4,23.7,-65.6,22.1).closePath();
	this.shape_1.setTransform(61.5718,34.4656,0.13,0.1253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#633221").beginStroke().moveTo(-60.3,9.7).curveTo(-61.4,9,-61.8,7.7).curveTo(-62.3,6.2,-61.6,4.7).curveTo(-60.9,3.2,-59.3,2.7).curveTo(-31.1,-7,-1,-9.6).curveTo(29,-12.1,58.6,-7.2).curveTo(60.3,-7,61.2,-5.6).curveTo(62.2,-4.3,61.9,-2.7).curveTo(61.7,-1,60.3,-0).curveTo(59,0.9,57.3,0.6).curveTo(28.7,-4.1,-0.4,-1.6).curveTo(-29.4,0.8,-56.7,10.2).curveTo(-57.3,10.4,-58,10.4).curveTo(-59.3,10.4,-60.3,9.7).closePath();
	this.shape_2.setTransform(37.5469,39.852,0.13,0.1253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DCAE69").beginStroke().moveTo(-34.7,28).curveTo(-44.1,22.7,-51.9,15.3).curveTo(-59,8.6,-62.4,2.5).curveTo(-62.7,0.3,-48.7,-7.1).curveTo(-34,-14.9,-14.9,-22.1).curveTo(36.8,-41.6,62.4,-35.9).curveTo(58.4,-6.7,47.3,9.9).curveTo(34.7,28.9,11,35.3).curveTo(4.2,37.2,-2.8,37.2).curveTo(-18.4,37.2,-34.7,28).closePath();
	this.shape_3.setTransform(61.5635,36.5907,0.13,0.1253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DCAE69").beginStroke().moveTo(-44.6,14.8).curveTo(-52,6.2,-56.4,-4.7).curveTo(-60.2,-14.2,-60.7,-22).curveTo(-4.8,-42.2,60.7,-31.6).curveTo(57.4,-13.1,48.9,2.8).curveTo(32.7,32.9,4.8,35).curveTo(1.9,35.3,-0.8,35.3).curveTo(-27.2,35.3,-44.6,14.8).closePath();
	this.shape_4.setTransform(37.5587,43.5603,0.13,0.1253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#633221").beginStroke().moveTo(-60.9,11.7).curveTo(-63.4,11.6,-65,9.7).curveTo(-66.7,7.9,-66.6,5.4).curveTo(-66.4,2.9,-64.6,1.2).curveTo(-62.7,-0.4,-60.2,-0.3).curveTo(-1.5,3.3,59.1,-12.2).curveTo(61.5,-12.8,63.7,-11.5).curveTo(65.8,-10.2,66.4,-7.8).curveTo(67,-5.4,65.8,-3.3).curveTo(64.5,-1.2,62.1,-0.5).curveTo(11.3,12.4,-38.6,12.4).curveTo(-50.2,12.4,-60.9,11.7).closePath();
	this.shape_5.setTransform(37.2329,29.4749,0.13,0.1253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#633221").beginStroke().moveTo(-70.9,42.5).curveTo(-72.5,41.3,-73.1,39.4).curveTo(-73.8,37,-72.7,34.8).curveTo(-71.5,32.6,-69.1,31.9).curveTo(-35.3,21.6,-2.9,3.5).curveTo(29.5,-14.6,63.6,-42.3).curveTo(65.5,-43.9,68,-43.6).curveTo(70.5,-43.4,72.1,-41.5).curveTo(73.7,-39.5,73.4,-37.1).curveTo(73.1,-34.6,71.2,-33).curveTo(36.2,-4.6,2.8,14.1).curveTo(-30.6,32.8,-65.6,43.4).curveTo(-66.6,43.6,-67.4,43.6).curveTo(-69.3,43.6,-70.9,42.5).closePath();
	this.shape_6.setTransform(58.2738,22.5911,0.13,0.1253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#AB86AF").beginStroke().moveTo(-11.8,29.2).curveTo(-24.2,19.2,-32.2,0.3).curveTo(-22.9,-6,-13,-12.4).curveTo(-8.7,1.2,-4.2,8.2).curveTo(0.8,16,5.5,14.6).curveTo(15.5,11.5,5.8,-24).curveTo(16.1,-30.2,25.1,-35.3).lineTo(27.4,-36.6).lineTo(28.1,-34).curveTo(35,-9.6,30.3,10.8).curveTo(25.6,31.2,12.1,35.6).curveTo(9.1,36.6,5.9,36.6).curveTo(-2.6,36.6,-11.8,29.2).closePath();
	this.shape_7.setTransform(56.6442,32.5758,0.13,0.1253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#AB86AF").beginStroke().moveTo(-21.9,13.3).curveTo(-31.1,-1.3,-31.6,-22.4).curveTo(-21.3,-22.2,-11.7,-22.7).curveTo(-12.2,-8.4,-10,-0.2).curveTo(-7.5,9.1,-1.7,9.6).curveTo(4.7,10,8,0.2).curveTo(10.8,-7.8,11.5,-23.4).lineTo(11.6,-24.8).curveTo(20.6,-25.8,31.5,-27.9).lineTo(31.6,-24.6).curveTo(31.6,-2.9,22.3,12.6).curveTo(13.1,27.9,-0,27.9).curveTo(-12.7,27.9,-21.9,13.3).closePath();
	this.shape_8.setTransform(40.7405,38.0503,0.13,0.1253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DCAE69").beginStroke().moveTo(-70.1,65.7).curveTo(-76.4,42.7,-75.9,18.7).curveTo(-75.4,-4.4,-68.8,-24.7).curveTo(-62.1,-45.1,-50.5,-58.8).curveTo(-38.4,-73.2,-22.9,-78).curveTo(-12.4,-81.2,1.5,-76.1).curveTo(14.6,-71.2,28.7,-59.6).curveTo(42.6,-48.2,54.9,-32.4).curveTo(67.5,-16.2,75.9,1.6).curveTo(45.1,27.7,8.8,47.5).curveTo(-26.9,67,-66.1,79.2).curveTo(-68.4,71.9,-70.1,65.7).closePath();
	this.shape_9.setTransform(57.4048,17.5293,0.13,0.1253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#DCAE69").beginStroke().moveTo(-63.1,39.5).curveTo(-57.7,4.6,-40,-17.9).curveTo(-22,-40.7,1,-40.7).curveTo(22.2,-40.7,39.3,-21.1).curveTo(56.1,-1.9,63.1,28.9).curveTo(15.1,40.7,-32.9,40.7).curveTo(-48,40.7,-63.1,39.5).closePath();
	this.shape_10.setTransform(37.4807,24.8969,0.13,0.1253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.3,14).curveTo(-15.1,11.5,-16,7).curveTo(-16.9,2.5,-14.4,-1.3).curveTo(-9.3,-9.1,-0.3,-14.3).curveTo(3.6,-16.6,8,-15.4).curveTo(12.4,-14.2,14.7,-10.3).curveTo(17,-6.3,15.8,-1.9).curveTo(14.7,2.4,10.7,4.7).curveTo(6.2,7.4,4,10.8).curveTo(2.4,13.2,-0.1,14.5).curveTo(-2.5,15.8,-5.2,15.8).curveTo(-8.5,15.8,-11.3,14).closePath();
	this.shape_11.setTransform(51.2204,22.9985,0.13,0.1253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#57316B").beginStroke().moveTo(-11.3,49.2).curveTo(-25.7,35,-32.5,10.5).curveTo(-39.3,-14,-34.7,-34.4).curveTo(-30,-54.8,-16.5,-59.1).curveTo(-3,-63.4,11.3,-49.2).curveTo(25.7,-35,32.5,-10.5).curveTo(39.4,13.9,34.7,34.3).curveTo(30,54.8,16.5,59.1).curveTo(13.4,60.1,10.2,60.1).curveTo(-0.3,60.1,-11.3,49.2).closePath().moveTo(-10.6,-35.3).curveTo(-16.1,-33.7,-15.6,-22).curveTo(-15.2,-12.1,-10.5,4.7).curveTo(-6,21.1,-0.9,29.8).curveTo(4.7,39.8,9.9,38.1).curveTo(20.1,34.9,9.8,-1.9).curveTo(5.2,-18.2,0.2,-27).curveTo(-4.6,-35.5,-9.2,-35.5).curveTo(-9.9,-35.5,-10.6,-35.3).closePath();
	this.shape_12.setTransform(56.0762,29.6277,0.13,0.1253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#57316B").beginStroke().moveTo(-22.4,37.2).curveTo(-31.6,21.8,-31.6,0).curveTo(-31.6,-21.7,-22.4,-37.1).curveTo(-13.1,-52.5,-0,-52.5).curveTo(13.1,-52.5,22.3,-37.1).curveTo(31.6,-21.7,31.6,0).curveTo(31.6,21.8,22.3,37.2).curveTo(13.1,52.5,-0,52.5).curveTo(-13.1,52.5,-22.4,37.2).closePath().moveTo(-7.7,-23.7).curveTo(-10.9,-15,-11.6,0).curveTo(-12.4,15.1,-10.2,23.8).curveTo(-7.7,33.7,-1.7,34.2).curveTo(4.7,34.7,8,24.9).curveTo(10.8,16.8,11.5,1.2).curveTo(13.2,-32.1,1.6,-33).lineTo(1.1,-33).curveTo(-4.4,-33,-7.7,-23.7).closePath();
	this.shape_13.setTransform(40.7405,34.9639,0.13,0.1253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#D4E6E9").beginStroke().moveTo(-37.9,102.1).curveTo(-63,70.8,-79.2,11.9).curveTo(-85.5,-11.1,-85,-35.1).curveTo(-84.6,-58.2,-77.9,-78.5).curveTo(-71.3,-98.9,-59.6,-112.6).curveTo(-47.5,-127,-32,-131.8).curveTo(-19.7,-135.6,-3,-127.9).curveTo(12.9,-120.6,29.2,-104.8).curveTo(45.4,-89,57.8,-68.8).curveTo(70.8,-47.5,76.4,-26.2).curveTo(83.3,0.2,84.7,25.7).curveTo(86.3,52.3,81.6,73.9).curveTo(76.6,97,64.9,111.5).curveTo(52.2,127.2,32.6,131.4).curveTo(25.1,133,18,133).curveTo(-13.1,133,-37.9,102.1).closePath();
	this.shape_14.setTransform(58.7363,24.5186,0.13,0.1253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#D4E6E9").beginStroke().moveTo(-0,111.8).curveTo(-41.3,108.7,-55.9,73.1).curveTo(-62,58.4,-64.3,36.5).curveTo(-66.1,20.1,-66.1,-6).curveTo(-66.1,-49.9,-46.7,-80.9).curveTo(-37.6,-95.5,-25.7,-103.6).curveTo(-13.5,-111.9,-0,-111.9).curveTo(13.4,-111.9,25.7,-103.6).curveTo(37.6,-95.5,46.7,-80.9).curveTo(66.1,-49.8,66.1,-6).curveTo(66.1,42.9,50.2,76.1).curveTo(33.1,111.9,3.7,111.9).lineTo(-0,111.8).closePath();
	this.shape_15.setTransform(37.6074,33.8762,0.13,0.1253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#F4C575").beginStroke().moveTo(-141.1,237.6).curveTo(-161,231.2,-178.2,206.4).curveTo(-194.8,182.3,-198.7,156.3).curveTo(-209.3,85.8,-219.2,-11.8).curveTo(-231.9,-137.3,-230.4,-194.7).curveTo(-230.2,-203.5,-224.6,-210.5).curveTo(-219.1,-217.3,-210.5,-219.8).curveTo(-24.9,-272.6,204.3,-251.9).curveTo(213.1,-251.1,219.4,-245.1).curveTo(225.8,-239,226.8,-230.3).curveTo(232.5,-183.7,229.6,-57.4).curveTo(228.1,9.5,221.4,174.9).curveTo(220.8,190,208.5,202.3).curveTo(199.3,211.5,185.8,217.3).curveTo(95.1,255.6,1.4,257.6).lineTo(-8.6,257.7).curveTo(-78.4,257.7,-141.1,237.6).closePath();
	this.shape_16.setTransform(49.7757,60.2864,0.13,0.1253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gubstroke
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-101.1,385).curveTo(-135.4,379.2,-166.8,369.6).curveTo(-181.3,365.1,-195.3,354.1).curveTo(-209.2,343.1,-220.8,326.9).curveTo(-231.5,312,-238.6,295.3).curveTo(-245.6,278.6,-248.2,262.2).curveTo(-259.8,187.3,-271.1,81.2).curveTo(-286.2,-60.2,-284.4,-125.5).curveTo(-284,-142.8,-273,-156.3).curveTo(-262.1,-169.8,-244.8,-174.6).curveTo(-222.7,-180.6,-200.8,-185.7).curveTo(-196.7,-207.8,-187.7,-226.9).curveTo(-178.8,-245.6,-166.3,-259.2).curveTo(-153.6,-273,-138.5,-280.3).curveTo(-123,-287.8,-106.1,-287.8).curveTo(-89.5,-287.8,-73.9,-280.3).curveTo(-58.3,-272.8,-45.5,-258.7).curveTo(-43.5,-256.5,-41.3,-253.8).curveTo(-41.7,-270.4,-39.4,-286.6).curveTo(-37,-302.7,-32.1,-317.3).curveTo(-22.5,-345.3,-4.9,-364.4).curveTo(12.7,-383.5,35.3,-390.2).curveTo(48.2,-394,63.2,-391.5).curveTo(78.2,-388.9,94,-380).curveTo(108.7,-371.8,123.2,-359).curveTo(137.7,-346.1,150.2,-330.1).curveTo(163.4,-313.2,172.8,-295).curveTo(182.2,-276.8,187.1,-258.7).curveTo(193.2,-236.2,195.9,-213.3).curveTo(216.6,-211.9,233.7,-210.4).curveTo(251.7,-208.8,264.9,-196.5).curveTo(278,-184.1,280.2,-166.7).curveTo(286.5,-115.8,283.8,14.7).curveTo(282.1,92.1,275,262.6).lineTo(274.2,279.9).curveTo(273.7,292.6,268.2,304.2).curveTo(262.6,315.8,252.5,325.6).curveTo(244.6,333.2,234.2,339.3).curveTo(227.1,343.6,219.5,346.7).curveTo(112.8,390.2,2.1,392.4).curveTo(-3.5,392.5,-9.2,392.5).curveTo(-55.8,392.5,-101.1,385).closePath().moveTo(-244.7,-174.3).curveTo(-262,-169.6,-272.8,-156.1).curveTo(-283.7,-142.7,-284.2,-125.5).curveTo(-285.9,-60.2,-270.9,81.1).curveTo(-259.6,187.2,-248,262.1).curveTo(-245.4,278.5,-238.3,295.2).curveTo(-231.3,311.8,-220.6,326.7).curveTo(-209.1,342.9,-195.1,353.9).curveTo(-181.2,364.9,-166.8,369.3).curveTo(-135.4,379,-101,384.7).curveTo(-55.8,392.3,-9.2,392.3).curveTo(-3.5,392.3,2.1,392.1).curveTo(112.7,389.9,219.4,346.4).curveTo(226.9,343.4,234.1,339.1).curveTo(244.5,333,252.4,325.4).curveTo(262.5,315.7,268,304.1).curveTo(273.5,292.5,274,279.9).lineTo(274.7,262.6).curveTo(281.9,92.1,283.5,14.7).curveTo(286.3,-115.8,279.9,-166.7).curveTo(277.7,-184,264.7,-196.3).curveTo(251.6,-208.6,233.7,-210.1).curveTo(213.2,-211.9,195.8,-213).lineTo(195.7,-213).lineTo(195.7,-213.1).curveTo(192.9,-236.2,186.8,-258.7).curveTo(182,-276.7,172.6,-294.9).curveTo(163.2,-313,150,-329.9).curveTo(137.5,-345.9,123,-358.8).curveTo(108.5,-371.6,93.9,-379.8).curveTo(78.1,-388.6,63.1,-391.2).curveTo(48.2,-393.8,35.3,-389.9).curveTo(12.8,-383.2,-4.8,-364.2).curveTo(-22.4,-345.1,-31.9,-317.2).curveTo(-36.8,-302.6,-39.2,-286.4).curveTo(-41.5,-270.1,-41.1,-253.5).lineTo(-41.1,-253.1).lineTo(-41.3,-253.4).lineTo(-45.7,-258.6).curveTo(-58.4,-272.6,-74,-280).curveTo(-89.6,-287.5,-106.1,-287.5).curveTo(-122.9,-287.5,-138.4,-280).curveTo(-153.3,-272.9,-166.1,-259.1).curveTo(-178.7,-245.4,-187.5,-226.8).curveTo(-196.4,-207.9,-200.6,-185.5).lineTo(-200.6,-185.4).lineTo(-200.7,-185.4).curveTo(-224.2,-180,-244.7,-174.3).closePath();
	this.shape_17.setTransform(49.9809,50.2601,0.1159,0.116);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-100.7,384.9).curveTo(-135.2,379.2,-166.8,369.4).curveTo(-181.3,365,-195.2,354).curveTo(-209.1,342.9,-220.7,326.8).curveTo(-231.4,311.9,-238.5,295.2).curveTo(-245.5,278.5,-248.1,262.1).curveTo(-259.7,187.7,-271,81.1).curveTo(-286.1,-60.2,-284.3,-125.5).curveTo(-283.8,-142.8,-272.9,-156.2).curveTo(-262,-169.8,-244.8,-174.5).curveTo(-222,-180.7,-200.7,-185.6).curveTo(-192.2,-230.8,-166.2,-259.1).curveTo(-139.9,-287.7,-106.1,-287.7).curveTo(-89.6,-287.7,-74,-280.2).curveTo(-58.3,-272.7,-45.6,-258.6).curveTo(-44.1,-257,-41.2,-253.5).curveTo(-42.1,-287.4,-32,-317.2).curveTo(-22.4,-345.2,-4.9,-364.3).curveTo(12.7,-383.4,35.3,-390.1).curveTo(48.2,-393.9,63.2,-391.3).curveTo(78.1,-388.7,94,-379.9).curveTo(108.6,-371.7,123.1,-358.9).curveTo(137.6,-346,150.1,-330).curveTo(163.3,-313.1,172.7,-294.9).curveTo(182.1,-276.8,187,-258.7).curveTo(193.2,-235.7,195.8,-213.2).curveTo(216.3,-211.8,233.7,-210.3).curveTo(251.7,-208.7,264.8,-196.4).curveTo(277.9,-184.1,280.1,-166.7).curveTo(286.4,-115.8,283.7,14.7).curveTo(282,91.5,274.8,262.6).lineTo(274.1,279.9).curveTo(273.6,292.5,268.1,304.1).curveTo(262.6,315.7,252.5,325.5).curveTo(244.6,333.1,234.2,339.2).curveTo(227,343.5,219.5,346.6).curveTo(112.6,390.1,2.1,392.3).lineTo(-9.2,392.4).curveTo(-55.7,392.4,-100.7,384.9).closePath();
	this.shape_18.setTransform(49.9809,50.2582,0.1159,0.116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// bgcolor
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill().beginStroke("#DCAF69").setStrokeStyle(1,0,0,4).moveTo(-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.3,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).lineTo(-43.5,69).curveTo(-45.4,69,-46.6,67.7).curveTo(-48,66.3,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.3,-46.6,-67.7).curveTo(-45.4,-69,-43.5,-69).closePath();
	this.shape_19.setTransform(48,69,1,1,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginLinearGradientFill(["#EABC6F","#BF8C41"],[0.533,1],0,69.5,0,-69.5).beginStroke().moveTo(-43.5,69).curveTo(-45.3,69,-46.6,67.7).curveTo(-48,66.3,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.4,-46.6,-67.7).curveTo(-45.3,-69,-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.4,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).closePath();
	this.shape_20.setTransform(48,69,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAemote3, new cjs.Rectangle(-1,-1,98,140), null);


(lib.DBLAemote2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gub
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E37758").beginStroke().moveTo(-18.2,19.9).curveTo(-25.4,15.2,-29.5,4.5).curveTo(-28.8,3.3,-27.7,2).curveTo(-21.9,-5.3,-11,-10.7).curveTo(-7.5,-1.2,-0.5,-2.1).curveTo(3.6,-2.6,5.7,-7).curveTo(7.6,-11.1,8,-18.6).curveTo(19.7,-22.6,29.5,-24.1).curveTo(29.6,-2.7,23.9,8.7).curveTo(17.3,22,2.1,23.7).curveTo(-0.5,24.1,-3,24.1).curveTo(-12,24.1,-18.2,19.9).closePath();
	this.shape.setTransform(59.3085,32.8695,0.1265,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E37758").beginStroke().moveTo(-0.3,16).curveTo(-11.7,15.3,-19.4,9.3).curveTo(-26.3,3.8,-30.3,-6.4).curveTo(-22.3,-9.5,-13.8,-11.4).lineTo(-5.9,-13.2).curveTo(-3.3,-10.6,0.3,-10.2).curveTo(5.4,-9.7,8.6,-15.8).curveTo(25.9,-17.6,30.2,-9).curveTo(26.2,3.4,19,9.8).curveTo(11.9,16.1,1.9,16.1).lineTo(-0.3,16).closePath();
	this.shape_1.setTransform(42.0598,37.9028,0.1265,0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C1DBEA").beginStroke().moveTo(2.6,37.1).curveTo(-0.9,37,-5.3,36.2).lineTo(-13.1,34.6).lineTo(-23.5,32.1).curveTo(-29.2,30.5,-33.6,28.8).curveTo(-46,23.9,-50.1,15.8).curveTo(-53.2,9.8,-51.9,2.4).curveTo(-50.6,-4.5,-46.1,-10.2).curveTo(-42.1,-15.2,-35.7,-19.3).curveTo(-30.7,-22.5,-23.3,-25.7).curveTo(-4.5,-33.7,9.6,-36).curveTo(28.7,-39.1,43.3,-33).curveTo(48.8,-30.7,51,-23.8).curveTo(52.8,-18.1,52,-10.8).curveTo(50.9,-1.3,47,7.3).curveTo(43,16.3,36.5,22.9).curveTo(29.8,29.7,21,33.5).curveTo(12.6,37.1,4,37.1).lineTo(2.6,37.1).closePath();
	this.shape_2.setTransform(61.6389,34.4054,0.1266,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#C1DBEA").beginStroke().moveTo(-3.9,35.8).curveTo(-16.1,35.1,-24.6,32.6).curveTo(-35.5,29.4,-42.3,22.8).curveTo(-47,18.3,-48.3,13.3).curveTo(-49.9,7.4,-46.9,0.8).curveTo(-44.4,-4.8,-39.1,-10).curveTo(-23.4,-25.4,3.3,-31.2).lineTo(16.6,-34.2).curveTo(25.5,-35.9,31.6,-35.9).curveTo(48.8,-35.9,48.8,-21.6).curveTo(48.8,-9.1,39.9,5.7).curveTo(32.2,18.5,21.3,27.8).curveTo(15,33.2,9.5,34.9).curveTo(6,35.9,0.5,35.9).lineTo(-3.9,35.8).closePath();
	this.shape_3.setTransform(39.9083,40.3861,0.1266,0.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15.4,11.4).curveTo(-18.4,8,-18.1,3.4).curveTo(-17.8,-1.1,-14.3,-4.1).curveTo(-6.1,-11.2,3.5,-14.5).curveTo(7.8,-16,11.9,-14).curveTo(16,-12,17.5,-7.7).curveTo(19,-3.4,17,0.7).curveTo(14.9,4.8,10.6,6.3).curveTo(5.1,8.2,0.1,12.5).curveTo(-3,15.2,-7.1,15.2).curveTo(-12.1,15.2,-15.4,11.4).closePath();
	this.shape_4.setTransform(56.2066,20.3149,0.1266,0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15.4,11.4).curveTo(-18.4,7.9,-18.1,3.4).curveTo(-17.7,-1.1,-14.3,-4.1).curveTo(-6.1,-11.3,3.5,-14.5).curveTo(7.8,-16,12,-14).curveTo(16.1,-12,17.5,-7.7).curveTo(19,-3.4,17,0.7).curveTo(15,4.8,10.7,6.3).curveTo(4.9,8.3,0.1,12.5).curveTo(-2.9,15.2,-7.1,15.2).curveTo(-12.1,15.2,-15.4,11.4).closePath();
	this.shape_5.setTransform(39.2671,26.4602,0.1266,0.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#244966").beginStroke().moveTo(-117.1,24.2).curveTo(-149.3,19.1,-181.5,5.6).curveTo(-191.7,1.3,-200.8,-3.4).curveTo(-205,-5.5,-208.6,-7.6).curveTo(-211.1,-9.1,-211.8,-11.9).curveTo(-212.5,-14.7,-211,-17.2).curveTo(-209.6,-19.7,-206.7,-20.4).curveTo(-203.9,-21.1,-201.4,-19.6).lineTo(-194.5,-15.9).curveTo(-185.8,-11.4,-176.1,-7.4).curveTo(-145.2,5.5,-115,10.4).curveTo(-94.7,13.6,-58,13.8).curveTo(-17.5,14.1,25.7,10.5).curveTo(136.5,1.2,202.2,-27.1).curveTo(204.9,-28.3,207.6,-27.2).curveTo(210.3,-26.1,211.4,-23.5).curveTo(212.6,-20.8,211.5,-18.1).curveTo(210.4,-15.4,207.8,-14.3).curveTo(169.6,2.2,115.3,12.6).curveTo(74.1,20.5,26.4,24.5).curveTo(-14.1,27.8,-54.2,27.8).curveTo(-94.7,27.8,-117.1,24.2).closePath();
	this.shape_6.setTransform(50.388,48.6286,0.1266,0.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D5E6EA").beginStroke().moveTo(-33.1,40.8).curveTo(-44.2,35.4,-46.5,19.3).curveTo(-47.8,10.1,-46.1,-9.9).curveTo(-57.3,9.3,-70.1,17.1).curveTo(-83.6,25.4,-98.3,20.9).curveTo(-109.9,17.3,-115,7.1).curveTo(-122.2,-6.9,-115.6,-31.5).curveTo(-49.7,-23.1,5,-25.7).curveTo(63,-28.5,118.8,-44.1).curveTo(116.8,-33,111.1,-18.9).curveTo(107.8,-10.7,99.5,6.7).curveTo(93.2,20.2,81.6,28.3).curveTo(69.4,36.9,58,34.5).curveTo(47.6,32.3,42.8,17).curveTo(40,8,38.5,-9.9).curveTo(32.9,4.7,28.7,10.8).curveTo(25.3,15.8,14.6,26.6).curveTo(3.4,37.9,-8,41.9).curveTo(-14,44.1,-19.6,44.1).curveTo(-26.6,44.1,-33.1,40.8).closePath();
	this.shape_7.setTransform(48.2849,54.3241,0.1266,0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#B15234").beginStroke().moveTo(0,60.2).curveTo(-19.7,58.9,-28.2,41.9).curveTo(-35.2,27.7,-35.2,-0).curveTo(-35.2,-23.8,-23.1,-42.8).curveTo(-17.9,-51,-11.7,-55.7).curveTo(-5.5,-60.4,0,-60.3).curveTo(5.9,-60.2,12.1,-55.4).curveTo(18.3,-50.7,23.5,-42.5).curveTo(35.2,-23.9,35.2,-0).curveTo(35.2,27.5,27.3,43.2).curveTo(18.8,60.3,2.2,60.3).lineTo(0,60.2).closePath().moveTo(-7.7,-23.1).curveTo(-12,-12.6,-12,0.6).curveTo(-12,15.9,-9.5,23.8).curveTo(-6.5,33.3,0.6,34).curveTo(7.2,34.6,10.5,24.6).curveTo(13.3,15.8,13.3,0.6).curveTo(13.3,-12.7,9.1,-23).curveTo(5.1,-32.8,0.6,-32.9).lineTo(0.5,-32.9).curveTo(-3.7,-32.9,-7.7,-23.1).closePath();
	this.shape_8.setTransform(42.0303,32.3823,0.1266,0.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#B15234").beginStroke().moveTo(-24.1,51.8).curveTo(-27.7,43.7,-29.9,30.1).curveTo(-31.3,21.9,-33.2,3.2).curveTo(-36.1,-25.7,-28.7,-46.7).curveTo(-21.2,-67.9,-7.2,-69.2).curveTo(6.8,-70.4,18.3,-51.2).curveTo(29.7,-32.2,32.6,-3.4).curveTo(35.9,29.5,31.4,45.9).curveTo(25.8,66.7,6.6,69).curveTo(4.1,69.3,1.8,69.3).curveTo(-16.4,69.3,-24.1,51.8).closePath().moveTo(-4.2,-38.7).curveTo(-9.1,-38.4,-11.2,-26).curveTo(-13.3,-13.8,-11.6,3.4).curveTo(-9.4,24.9,-7.2,32.3).curveTo(-3.7,44.2,4,43.2).curveTo(10.8,42.3,12.2,30.1).curveTo(13.4,20.6,11.4,1).curveTo(9.7,-16,5.3,-27.5).curveTo(0.9,-38.7,-3.8,-38.7).lineTo(-4.2,-38.7).closePath();
	this.shape_9.setTransform(58.7474,27.2213,0.1266,0.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D5E6E9").beginStroke().moveTo(-54,101.3).curveTo(-71.4,67.9,-74.8,4).curveTo(-76.3,-24.2,-71.6,-51).curveTo(-67.1,-76.5,-57.5,-96.7).curveTo(-48,-116.9,-35.3,-128).curveTo(-22.2,-139.6,-7.7,-139.6).curveTo(7.4,-139.5,21.7,-129.2).curveTo(35.7,-119.1,47.1,-100.7).curveTo(58.5,-82.1,65.6,-57.7).curveTo(72.9,-32.3,74.4,-4).curveTo(77.9,60.6,64.3,96.1).curveTo(48.1,138.5,7.3,139.6).lineTo(5.1,139.6).curveTo(-34,139.6,-54,101.3).closePath();
	this.shape_10.setTransform(61.8651,25.403,0.1266,0.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D5E6E9").beginStroke().moveTo(-54.1,85.6).curveTo(-72,52.9,-72,0).curveTo(-72,-24.1,-65.1,-47.1).curveTo(-58.9,-68.3,-47.7,-85.6).curveTo(-37.1,-102.1,-24.5,-111.6).curveTo(-11.7,-121.1,0,-121.1).curveTo(12.9,-121.1,25.9,-111.6).curveTo(38.7,-102.3,49.1,-85.6).curveTo(59.6,-68.6,65.7,-47.1).curveTo(72,-24.3,72,0).curveTo(72,53.5,54.8,85.6).curveTo(35.7,121.1,0,121.1).curveTo(-34.7,121.1,-54.1,85.6).closePath();
	this.shape_11.setTransform(39.1986,32.4028,0.1266,0.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#82B4E0").beginStroke().moveTo(-7.6,259.8).curveTo(-78,259.7,-137.7,249.4).curveTo(-155.8,246.2,-169.3,233.6).curveTo(-182.7,221,-187.2,203.1).curveTo(-212.8,98.8,-225,11.9).curveTo(-239,-89.1,-236.5,-177).curveTo(-235.8,-200.5,-220.6,-218.2).curveTo(-205.3,-236,-182.3,-240.2).curveTo(-85.2,-257.8,3.6,-259.6).curveTo(101.5,-261.5,191.7,-244.3).curveTo(210.6,-240.7,223.1,-226).curveTo(235.6,-211.4,236.2,-192.1).curveTo(238.9,-106.9,231.2,-10.5).curveTo(224,79.1,207.5,180.7).curveTo(203,208.7,182.4,228.3).curveTo(161.8,247.9,133.6,251.1).curveTo(57.8,259.8,-6.8,259.8).lineTo(-7.6,259.8).closePath();
	this.shape_12.setTransform(49.9856,60.4098,0.1266,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gubstroke
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill().beginStroke("#A8A9AC").moveTo(262.2,-113.1).curveTo(261.7,-126.8,256.7,-139.7).curveTo(251.8,-152.6,242.9,-163).curveTo(234,-173.4,222,-180.4).curveTo(210.1,-187.3,196.6,-189.9).lineTo(194.9,-190.3).curveTo(194.8,-195.2,194.3,-205.5).curveTo(192.6,-236.4,184.6,-264.5).curveTo(176.5,-292.6,163.1,-314.4).curveTo(147.9,-339.1,128.1,-352.4).curveTo(108.2,-365.6,86.2,-365.7).lineTo(86,-365.7).curveTo(72.3,-365.7,59.4,-359.6).curveTo(46.5,-353.6,35.4,-341.9).curveTo(18.2,-323.9,7.2,-294).curveTo(-3.8,-264.5,-6.5,-229.8).curveTo(-20.5,-258.3,-41.3,-274.7).curveTo(-62.3,-291.2,-85.2,-291.2).curveTo(-100.5,-291.2,-115.7,-282.7).curveTo(-130.9,-274.2,-144.2,-258.3).curveTo(-156,-244.2,-164.8,-225.9).curveTo(-173.5,-207.7,-178.3,-187.4).lineTo(-186.9,-185.9).curveTo(-202.5,-183.1,-216.3,-175.1).curveTo(-230,-167.3,-240.3,-155.3).curveTo(-250.6,-143.3,-256.4,-128.5).curveTo(-262.1,-113.7,-262.5,-97.9).curveTo(-264.9,-13.7,-252.7,80.7).curveTo(-240.5,175.3,-212.4,289.2).curveTo(-206.2,314.6,-187,332.5).curveTo(-167.9,350.4,-142.2,354.9).curveTo(-80.2,365.7,-6.9,365.7).curveTo(59.4,365.7,136.5,356.9).curveTo(173.3,352.7,200.3,326.9).curveTo(227.3,301.2,233.2,264.7).curveTo(250.5,157.6,257.7,64.1).curveTo(264.9,-29.5,262.2,-113.1).closePath();
	this.shape_13.setTransform(50.0277,50.4719,0.125,0.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-142.2,354.9).curveTo(-167.9,350.4,-187,332.5).curveTo(-206.2,314.6,-212.4,289.2).curveTo(-240.5,175.3,-252.7,80.7).curveTo(-264.9,-13.7,-262.5,-97.9).curveTo(-262.1,-113.7,-256.4,-128.5).curveTo(-250.6,-143.3,-240.3,-155.3).curveTo(-230,-167.3,-216.3,-175.1).curveTo(-202.5,-183.1,-186.9,-185.9).lineTo(-178.3,-187.4).curveTo(-173.5,-207.7,-164.8,-225.9).curveTo(-156,-244.2,-144.2,-258.3).curveTo(-130.9,-274.2,-115.7,-282.7).curveTo(-100.5,-291.2,-85.2,-291.2).curveTo(-62.3,-291.2,-41.3,-274.7).curveTo(-20.5,-258.3,-6.5,-229.8).curveTo(-3.8,-264.5,7.2,-294).curveTo(18.2,-323.9,35.4,-341.9).curveTo(46.5,-353.6,59.4,-359.6).curveTo(72.3,-365.7,86,-365.7).lineTo(86.2,-365.7).curveTo(108.2,-365.6,128.1,-352.4).curveTo(147.9,-339.1,163.1,-314.4).curveTo(176.5,-292.6,184.6,-264.5).curveTo(192.6,-236.4,194.3,-205.5).curveTo(194.8,-195.2,194.9,-190.3).lineTo(196.6,-189.9).curveTo(210.1,-187.3,222,-180.4).curveTo(234,-173.4,242.9,-163).curveTo(251.8,-152.6,256.7,-139.7).curveTo(261.7,-126.8,262.2,-113.1).curveTo(264.9,-29.5,257.7,64.1).curveTo(250.5,157.6,233.2,264.7).curveTo(227.3,301.2,200.3,326.9).curveTo(173.3,352.7,136.5,356.9).curveTo(59.4,365.7,-6.9,365.7).curveTo(-80.2,365.7,-142.2,354.9).closePath();
	this.shape_14.setTransform(50.0277,50.4719,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// bgcolor
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#557FA5").setStrokeStyle(1,0,0,4).moveTo(-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.3,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).lineTo(-43.5,69).curveTo(-45.4,69,-46.7,67.7).curveTo(-48,66.4,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.3,-46.7,-67.7).curveTo(-45.4,-69,-43.5,-69).closePath();
	this.shape_15.setTransform(48,69,1,1,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginLinearGradientFill(["#6EA2D0","#527A9E"],[0.631,1],0,69.5,0,-69.5).beginStroke().moveTo(-43.5,69).curveTo(-45.4,69,-46.7,67.7).curveTo(-48,66.4,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.4,-46.7,-67.7).curveTo(-45.4,-69,-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.4,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).closePath();
	this.shape_16.setTransform(48,69,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAemote2, new cjs.Rectangle(-1,-1,98,140), null);


(lib.DBLAemote1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gub
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#33633A").beginStroke().moveTo(-127.9,57.1).curveTo(-157.2,51.1,-182.3,39.8).curveTo(-184.6,38.8,-185.5,36.5).curveTo(-186.4,34.2,-185.4,31.9).curveTo(-184.4,29.6,-182,28.7).curveTo(-179.7,27.9,-177.4,28.9).curveTo(-138.3,46.4,-92,50.1).curveTo(-45.7,53.8,-9.6,42.4).curveTo(10.5,36,32,27.8).curveTo(65.2,15.3,92.5,1.7).curveTo(124.2,-14,145.2,-29.7).curveTo(166.1,-45.4,174.8,-60).curveTo(176,-62.1,178.4,-62.7).curveTo(180.8,-63.3,183,-62.1).curveTo(185.1,-60.8,185.7,-58.4).curveTo(186.4,-56,185.1,-53.8).curveTo(164.2,-18.6,87.1,17.6).curveTo(43,38.3,-5.9,53.8).curveTo(-34.7,62.9,-70.6,62.9).curveTo(-99.2,62.9,-127.9,57.1).closePath();
	this.shape.setTransform(48.2615,44.4816,0.1299,0.1297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D5E6EA").beginStroke().moveTo(-26.5,58.8).curveTo(-38.3,54.7,-42.6,38.7).curveTo(-45,29.7,-45.6,9.2).curveTo(-54.7,29.9,-66.7,39.3).curveTo(-79.3,49.2,-94.6,46.4).curveTo(-106.7,44.3,-113.2,34.6).curveTo(-122.1,21.2,-118.4,-4.4).curveTo(-55.4,8.1,6.9,-8.7).curveTo(59.4,-22.9,119.4,-60.7).curveTo(118.7,-49.3,114.7,-34.4).curveTo(112.3,-25.8,106,-7.1).curveTo(101.2,7.2,90.5,16.8).curveTo(79.2,26.9,67.4,25.8).curveTo(56.7,24.9,50,10.1).curveTo(46.1,1.3,42.5,-16.6).curveTo(37.2,3.9,33.6,13.4).curveTo(28,28.5,19.9,38.8).curveTo(10,51.5,-1,56.9).curveTo(-8.5,60.7,-16,60.7).curveTo(-21.2,60.7,-26.5,58.8).closePath();
	this.shape_1.setTransform(47.1657,52.7829,0.1299,0.1297);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#221F20").beginStroke().moveTo(-10.7,131.8).curveTo(-63,128.7,-90.8,88.9).curveTo(-100.2,75.5,-108.4,55.3).curveTo(-116.2,34.2,-119.6,26.4).curveTo(-123.7,17.3,-128.8,3.9).lineTo(-137.1,-17.9).curveTo(-147.5,-44.1,-161,-64.8).curveTo(-97.1,-40.3,-20.6,-54.6).curveTo(63.1,-70.1,161,-132).curveTo(160.2,-127.7,145.2,-82.6).curveTo(128.8,-33.4,123.1,-11.5).curveTo(118.1,7.6,109.4,28.3).curveTo(97.8,55.7,83.1,76.8).curveTo(44.8,132,-5.3,132).curveTo(-8,132,-10.7,131.8).closePath();
	this.shape_2.setTransform(47.1421,58.2363,0.1299,0.1297);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.4,14).curveTo(-15.2,11.5,-16.1,7.1).curveTo(-17,2.6,-14.5,-1.2).curveTo(-9.2,-9.1,-0.2,-14.4).curveTo(3.7,-16.7,8.1,-15.5).curveTo(12.5,-14.3,14.8,-10.4).curveTo(17.1,-6.4,15.9,-2).curveTo(14.8,2.4,10.8,4.7).curveTo(6.2,7.3,3.9,10.9).curveTo(2.3,13.3,-0.2,14.6).curveTo(-2.6,15.9,-5.3,15.9).curveTo(-8.6,15.9,-11.4,14).closePath();
	this.shape_3.setTransform(50.5874,20.3038,0.1298,0.1297);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15.5,11.4).curveTo(-18.5,8,-18.2,3.4).curveTo(-17.8,-1.1,-14.4,-4.1).curveTo(-6.2,-11.3,3.7,-14.6).curveTo(8,-16.1,12.1,-14.1).curveTo(16.2,-12.1,17.6,-7.8).curveTo(19.1,-3.5,17.1,0.6).curveTo(15.1,4.7,10.8,6.2).curveTo(5,8.1,0,12.5).curveTo(-3.1,15.2,-7.2,15.2).curveTo(-12.2,15.2,-15.5,11.4).closePath();
	this.shape_4.setTransform(38.2275,28.8068,0.1298,0.1297);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#A374AC").beginStroke().moveTo(-12.4,18.9).curveTo(-18.6,17.2,-24.7,12.5).curveTo(-23.5,6.9,-19.7,2).curveTo(-16.8,-1.6,-12.5,-4.6).curveTo(-9.2,-1.6,-5.9,-2.4).curveTo(-0.8,-3.5,0.3,-11.6).lineTo(0.7,-11.8).curveTo(14,-17.5,24.7,-19.9).curveTo(23.4,-4.5,17,6).curveTo(10.4,16.8,0.2,19.3).curveTo(-2.6,19.9,-5.4,19.9).curveTo(-8.8,19.9,-12.4,18.9).closePath();
	this.shape_5.setTransform(56.413,32.1174,0.1298,0.1297);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#4C2866").beginStroke().moveTo(-11.5,50).curveTo(-26.1,35.6,-33.1,10.7).curveTo(-40,-14.2,-35.2,-34.9).curveTo(-30.5,-55.6,-16.8,-60).curveTo(-3.1,-64.5,11.5,-50).curveTo(26.1,-35.5,33,-10.7).curveTo(40,14.2,35.2,34.9).curveTo(30.5,55.7,16.8,60).curveTo(13.6,61.1,10.3,61.1).curveTo(-0.3,61.1,-11.5,50).closePath().moveTo(-10.8,-35.9).curveTo(-16.3,-34.3,-15.9,-22.5).curveTo(-15.5,-12.3,-10.7,4.8).curveTo(-6.1,21.4,-1,30.3).curveTo(4.8,40.4,10,38.7).curveTo(20.4,35.5,9.9,-1.9).curveTo(5.3,-18.5,0.2,-27.4).curveTo(-4.7,-36.1,-9.4,-36.1).curveTo(-10.1,-36.1,-10.8,-35.9).closePath();
	this.shape_6.setTransform(54.6131,26.7114,0.1298,0.1297);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#A374AC").beginStroke().moveTo(-17.5,11.9).curveTo(-25.8,1.9,-29,-14.2).curveTo(-23.5,-16,-17.3,-17.4).lineTo(-10.4,-19).curveTo(-9.5,2.8,-0.3,3.5).curveTo(5.4,3.9,8.6,-3.4).curveTo(11.4,-9.8,12.6,-22.2).curveTo(29,-21.6,29,-7.6).curveTo(29,-6.1,28.7,-3).curveTo(24.4,8.5,17.3,15.3).curveTo(9.9,22.2,1.4,22.2).curveTo(-9.1,22.2,-17.5,11.9).closePath();
	this.shape_7.setTransform(40.5052,38.3798,0.1298,0.1297);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#4C2866").beginStroke().moveTo(-22.7,37.7).curveTo(-32.1,22.1,-32.1,0).curveTo(-32.1,-22.1,-22.7,-37.7).curveTo(-13.3,-53.4,0,-53.4).curveTo(13.3,-53.4,22.7,-37.7).curveTo(32.1,-22.1,32.1,0).curveTo(32.1,22.1,22.7,37.7).curveTo(13.3,53.4,0,53.4).curveTo(-13.3,53.4,-22.7,37.7).closePath().moveTo(-7.8,-24.1).curveTo(-11,-15.3,-11.8,-0).curveTo(-12.5,15.4,-10.3,24.2).curveTo(-7.8,34.3,-1.7,34.7).curveTo(4.8,35.2,8.2,25.3).curveTo(11,17.1,11.8,1.2).curveTo(13.4,-32.6,1.7,-33.5).lineTo(1.1,-33.5).curveTo(-4.4,-33.5,-7.8,-24.1).closePath();
	this.shape_8.setTransform(40.6869,34.3336,0.1298,0.1297);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#C1DBEA").beginStroke().moveTo(2.4,33.2).curveTo(-0.8,33.1,-4.7,32.4).curveTo(-7.1,32,-11.7,31).curveTo(-23.8,28.2,-30,25.8).curveTo(-41.1,21.5,-44.9,14.2).curveTo(-47.6,8.8,-46.4,2.2).curveTo(-45.3,-4,-41.2,-9.2).curveTo(-37.7,-13.7,-32,-17.3).curveTo(-27.5,-20.2,-20.8,-23).curveTo(-4,-30.2,8.7,-32.3).curveTo(25.8,-35.1,38.8,-29.5).curveTo(43.7,-27.4,45.6,-21.3).curveTo(47.3,-16.2,46.6,-9.7).curveTo(45.6,-1.1,42.1,6.6).curveTo(38.5,14.6,32.7,20.5).curveTo(26.7,26.6,18.8,30).curveTo(11.2,33.2,3.5,33.2).lineTo(2.4,33.2).closePath();
	this.shape_9.setTransform(59.221,33.5762,0.1298,0.1297);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#C1DBEA").beginStroke().moveTo(-4,36.4).curveTo(-16.3,35.7,-24.9,33.1).curveTo(-36,29.8,-42.9,23.1).curveTo(-47.7,18.5,-49.1,13.5).curveTo(-50.7,7.5,-47.6,0.8).curveTo(-45,-4.9,-39.7,-10.1).curveTo(-23.7,-25.8,3.3,-31.7).lineTo(17,-34.7).curveTo(26,-36.5,32.1,-36.5).curveTo(49.7,-36.4,49.7,-21.9).curveTo(49.7,-9.2,40.6,5.8).curveTo(32.8,18.8,21.7,28.2).curveTo(15.3,33.8,9.7,35.4).curveTo(6.1,36.5,0.4,36.5).lineTo(-4,36.4).closePath();
	this.shape_10.setTransform(37.8326,40.2448,0.1298,0.1297);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D5E4E9").beginStroke().moveTo(-2.5,120.7).curveTo(-17,114,-30.4,98.8).curveTo(-43.7,83.6,-53.9,62.4).curveTo(-64.3,40.4,-69.8,15).curveTo(-75.2,-10.4,-74.7,-34.7).curveTo(-74.2,-58.2,-68.3,-77.5).curveTo(-62.3,-96.9,-51.9,-109).curveTo(-41,-121.6,-26.8,-124.7).curveTo(-12.6,-127.7,2.5,-120.7).curveTo(17,-113.9,30.4,-98.8).curveTo(43.7,-83.6,53.9,-62.3).curveTo(64.3,-40.3,69.7,-15).curveTo(75.2,10.4,74.7,34.7).curveTo(74.2,58.3,68.3,77.6).curveTo(62.3,96.9,51.9,109.1).curveTo(41,121.7,26.8,124.7).curveTo(22.5,125.6,18.1,125.6).curveTo(8.1,125.6,-2.5,120.7).closePath();
	this.shape_11.setTransform(57.2608,24.6938,0.1299,0.1297);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D5E4E9").beginStroke().moveTo(-24.4,107.1).curveTo(-57.2,97.1,-65.7,58.3).curveTo(-73.1,24.9,-61.7,-22.2).curveTo(-51.8,-62.8,-26.4,-88.7).curveTo(-15.1,-100.3,-3.1,-105.8).curveTo(8.9,-111.4,19.2,-109.8).curveTo(30.3,-108.1,40.3,-97.2).curveTo(50.1,-86.6,57.1,-69.3).curveTo(64.2,-51.7,67,-30.7).curveTo(69.9,-8.4,67.4,14.2).curveTo(65,36.3,57.8,55.3).curveTo(50.4,75.1,38.9,88.3).curveTo(26.7,102.5,11.3,107.5).curveTo(3.3,110.1,-5.3,110.1).curveTo(-14.5,110.1,-24.4,107.1).closePath();
	this.shape_12.setTransform(37.6014,32.8766,0.1299,0.1297);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#9ECC9D").beginStroke().moveTo(-136,224.9).curveTo(-150.7,220.3,-161.5,209.4).curveTo(-172.3,198.5,-176.7,183.9).curveTo(-197.8,112.7,-211,33.8).curveTo(-223.4,-40.2,-230.6,-132).curveTo(-232.9,-161.4,-215.3,-185.1).curveTo(-197.6,-208.8,-168.8,-214.9).curveTo(-77,-234.2,6.2,-241).curveTo(96,-248.2,179,-241.1).curveTo(201.3,-239.1,216.2,-222.5).curveTo(231.2,-206,230.8,-183.6).curveTo(229.3,-102.2,218.5,-7.6).curveTo(209.7,70.1,191.5,181.2).curveTo(189,196.3,178.8,207.7).curveTo(168.5,219,153.7,222.9).curveTo(74.1,243.8,3.5,244.6).lineTo(-2.9,244.6).curveTo(-72.9,244.6,-136,224.9).closePath();
	this.shape_13.setTransform(48.7728,61.6407,0.1299,0.1297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gubstroke
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#A7A9AB").beginStroke().moveTo(-144.5,334.9).curveTo(-166.1,328.2,-181.8,312.3).curveTo(-197.6,296.3,-204,274.9).curveTo(-225,204.2,-238.2,126.8).curveTo(-251.4,49.4,-259,-46.9).curveTo(-260.5,-66.3,-255.1,-85).curveTo(-249.7,-103.7,-238.1,-119.3).curveTo(-226.4,-134.9,-210.1,-145.4).curveTo(-193.7,-155.9,-174.6,-159.9).lineTo(-170.8,-160.7).lineTo(-169.2,-167.7).curveTo(-157.8,-214.6,-128.1,-246.1).curveTo(-113.9,-261,-97.9,-269.1).curveTo(-81.5,-277.5,-65.2,-277.5).curveTo(-60.8,-277.5,-56.3,-276.8).curveTo(-41.9,-274.6,-29.2,-265).curveTo(-27.4,-276.7,-24,-287.9).curveTo(-16.3,-312.9,-1.9,-329.6).curveTo(6.5,-339.3,16.8,-345.7).curveTo(27.2,-352,38.7,-354.5).curveTo(45.8,-356,53.3,-356).curveTo(73.1,-356,92.4,-345.2).curveTo(111.7,-334.3,128,-314).curveTo(142.2,-296.1,152.9,-272.6).curveTo(163.5,-249.1,169.2,-222.9).curveTo(173,-204.9,174.2,-187.2).lineTo(181.5,-186.6).curveTo(197.6,-185.2,212.1,-178).curveTo(226.5,-170.9,237.4,-158.8).curveTo(248.3,-146.7,254,-131.6).curveTo(259.6,-116.5,259.3,-100.3).curveTo(257.8,-17.4,247,77.6).curveTo(238.1,155.7,219.6,268.7).curveTo(215.8,292.1,199.8,309.7).curveTo(183.8,327.3,160.9,333.3).curveTo(74.1,356,-2.7,356).curveTo(-77.1,356,-144.5,334.9).closePath().moveTo(-97.6,-268.2).curveTo(-113.4,-260.1,-127.5,-245.3).curveTo(-156.9,-214.1,-168.3,-167.5).lineTo(-170,-159.8).lineTo(-174.4,-158.9).curveTo(-193.3,-154.9,-209.5,-144.5).curveTo(-225.8,-134.1,-237.3,-118.7).curveTo(-248.8,-103.2,-254.1,-84.7).curveTo(-259.5,-66.2,-258,-47).curveTo(-250.4,49.2,-237.2,126.6).curveTo(-224,204,-203,274.6).curveTo(-196.7,295.8,-181.1,311.6).curveTo(-165.5,327.3,-144.2,334).curveTo(-76.8,355,-2.7,355).curveTo(74.2,355,160.7,332.4).curveTo(183.3,326.4,199.1,309).curveTo(214.9,291.6,218.7,268.5).curveTo(237.2,155.4,246,77.5).curveTo(256.8,-17.5,258.3,-100.3).curveTo(258.6,-116.3,253,-131.3).curveTo(247.4,-146.2,236.6,-158.2).curveTo(225.9,-170.1,211.6,-177.1).curveTo(197.4,-184.2,181.4,-185.6).lineTo(173.3,-186.3).lineTo(173.3,-186.7).curveTo(172.1,-204.7,168.2,-222.7).curveTo(162.5,-248.8,152,-272.2).curveTo(141.4,-295.6,127.2,-313.3).curveTo(111.1,-333.5,92,-344.3).curveTo(72.9,-355,53.3,-355).curveTo(46,-355,39,-353.5).curveTo(27.6,-351,17.4,-344.8).curveTo(7.1,-338.5,-1.1,-328.9).curveTo(-15.4,-312.3,-23,-287.6).curveTo(-26.5,-276.5,-28.4,-264).lineTo(-28.5,-263.2).lineTo(-29.2,-263.7).curveTo(-41.9,-273.5,-56.4,-275.8).curveTo(-61.1,-276.5,-65.2,-276.5).curveTo(-81.3,-276.5,-97.6,-268.2).closePath();
	this.shape_14.setTransform(48.4919,50.4753,0.1292,0.1291);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-144.4,334.4).curveTo(-165.8,327.7,-181.5,311.9).curveTo(-197.1,296.1,-203.5,274.7).curveTo(-224.5,204.1,-237.7,126.7).curveTo(-250.9,49.3,-258.5,-46.9).curveTo(-260,-66.2,-254.6,-84.8).curveTo(-249.2,-103.4,-237.7,-119).curveTo(-226.1,-134.5,-209.8,-144.9).curveTo(-193.5,-155.4,-174.5,-159.4).lineTo(-170.4,-160.3).lineTo(-168.7,-167.6).curveTo(-157.4,-214.4,-127.8,-245.7).curveTo(-113.6,-260.6,-97.8,-268.7).curveTo(-81.4,-277,-65.2,-277).curveTo(-61,-277,-56.4,-276.3).curveTo(-41.9,-274.1,-28.9,-264.1).curveTo(-26.8,-277,-23.5,-287.7).curveTo(-15.9,-312.7,-1.5,-329.3).curveTo(6.8,-338.9,17.1,-345.2).curveTo(27.4,-351.5,38.8,-354).curveTo(46,-355.5,53.3,-355.5).curveTo(73,-355.5,92.2,-344.7).curveTo(111.4,-333.9,127.6,-313.6).curveTo(141.8,-295.8,152.4,-272.4).curveTo(163.1,-249,168.7,-222.8).curveTo(172.6,-204.6,173.8,-186.7).lineTo(181.4,-186.1).curveTo(197.5,-184.7,211.8,-177.6).curveTo(226.2,-170.4,237,-158.5).curveTo(247.9,-146.5,253.5,-131.5).curveTo(259.1,-116.4,258.8,-100.3).curveTo(257.3,-17.4,246.5,77.6).curveTo(237.6,155.5,219.2,268.6).curveTo(215.3,291.9,199.5,309.4).curveTo(183.6,326.9,160.8,332.8).curveTo(74.4,355.5,-2.7,355.5).curveTo(-77,355.5,-144.4,334.4).closePath();
	this.shape_15.setTransform(48.4919,50.4753,0.1292,0.1291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// bgcolor
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#678F67").setStrokeStyle(1,0,0,4).moveTo(-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.3,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).lineTo(-43.5,69).curveTo(-45.4,69,-46.7,67.7).curveTo(-48,66.4,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.3,-46.7,-67.7).curveTo(-45.4,-69,-43.5,-69).closePath();
	this.shape_16.setTransform(48,69,1,1,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginLinearGradientFill(["#9ECC9D","#628962"],[0.349,1],0.3,69.5,-0.2,-69.5).beginStroke().moveTo(-43.5,69).curveTo(-45.4,69,-46.7,67.7).curveTo(-48,66.4,-48,64.5).lineTo(-48,-64.5).curveTo(-48,-66.4,-46.7,-67.7).curveTo(-45.4,-69,-43.5,-69).lineTo(43.5,-69).curveTo(45.4,-69,46.7,-67.7).curveTo(48,-66.4,48,-64.5).lineTo(48,64.5).curveTo(48,66.4,46.7,67.7).curveTo(45.4,69,43.5,69).closePath();
	this.shape_17.setTransform(48,69,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAemote1, new cjs.Rectangle(-1,-1,98,140), null);


(lib.ButtonShadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("rgba(0,0,0,0.302)").beginStroke().moveTo(-12.5,12.6).curveTo(-17.8,7.4,-17.8,0).curveTo(-17.8,-7.3,-12.5,-12.5).curveTo(-7.3,-17.8,0,-17.8).curveTo(7.4,-17.8,12.6,-12.5).curveTo(17.8,-7.3,17.8,0).curveTo(17.8,7.4,12.6,12.6).curveTo(7.4,17.8,0,17.8).curveTo(-7.3,17.8,-12.5,12.6).closePath();
	this.shape.setTransform(0.475,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.141)").beginStroke().moveTo(-13.6,13.6).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-7.9,-19.2,0,-19.2).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.6).curveTo(7.9,19.2,0,19.2).curveTo(-7.9,19.2,-13.6,13.6).closePath().moveTo(-12.6,-12.6).curveTo(-17.8,-7.4,-17.8,0).curveTo(-17.8,7.4,-12.6,12.6).curveTo(-7.4,17.7,0,17.8).curveTo(7.4,17.7,12.6,12.6).curveTo(17.7,7.4,17.8,0).curveTo(17.7,-7.4,12.6,-12.6).curveTo(7.4,-17.8,0,-17.8).curveTo(-7.4,-17.8,-12.6,-12.6).closePath();
	this.shape_1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonShadow, new cjs.Rectangle(-18.7,-18.7,38.5,38.5), null);


(lib.DBLASurveyButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:1,Down:2,Disabled:3,Selected:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#A8A9AC").setStrokeStyle(1,0,0,4).moveTo(-48.5,-79.5).lineTo(48.5,-79.5).curveTo(52.5,-79.5,55.2,-76.7).curveTo(58,-74,58,-70).lineTo(58,70).curveTo(58,73.9,55.2,76.7).curveTo(52.5,79.5,48.5,79.5).lineTo(-48.5,79.5).curveTo(-52.5,79.5,-55.2,76.7).curveTo(-58,73.9,-58,70).lineTo(-58,-70).curveTo(-58,-74,-55.2,-76.7).curveTo(-52.5,-79.5,-48.5,-79.5).closePath();
	this.shape.setTransform(59,79.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(255,255,255,0.2)").beginStroke().moveTo(-48.5,79.5).curveTo(-52.5,79.5,-55.2,76.7).curveTo(-58,74,-58,70).lineTo(-58,-70).curveTo(-58,-73.9,-55.2,-76.7).curveTo(-52.5,-79.5,-48.5,-79.5).lineTo(48.5,-79.5).curveTo(52.4,-79.5,55.2,-76.7).curveTo(58,-73.9,58,-70).lineTo(58,70).curveTo(58,74,55.2,76.7).curveTo(52.4,79.5,48.5,79.5).closePath();
	this.shape_1.setTransform(59,79.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.098)").beginStroke().moveTo(-44.5,74).curveTo(-48.4,74,-51.2,71.2).curveTo(-54,68.4,-54,64.5).lineTo(-54,-64.5).curveTo(-54,-68.5,-51.2,-71.2).curveTo(-48.4,-74,-44.5,-74).lineTo(44.5,-74).curveTo(48.4,-74,51.2,-71.2).curveTo(54,-68.5,54,-64.5).lineTo(54,64.5).curveTo(54,68.4,51.2,71.2).curveTo(48.4,74,44.5,74).closePath();
	this.shape_2.setTransform(59,79.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.149)").beginStroke().moveTo(-47,77.5).curveTo(-51,77.5,-53.7,74.7).curveTo(-56.5,71.9,-56.5,68).lineTo(-56.5,-68).curveTo(-56.5,-72,-53.7,-74.7).curveTo(-51,-77.5,-47,-77.5).lineTo(47,-77.5).curveTo(51,-77.5,53.7,-74.7).curveTo(56.5,-72,56.5,-68).lineTo(56.5,68).curveTo(56.5,71.9,53.7,74.7).curveTo(51,77.5,47,77.5).closePath();
	this.shape_3.setTransform(58,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// txt
	this.lblText = new cjs.Text("Strongly\nDisagree", "16px 'Cooper Black'", "#FFFFFF");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 17;
	this.lblText.lineWidth = 100;
	this.lblText.parent = this;
	this.lblText.setTransform(59,108.2);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(5));

	// lct_emote
	this.lctEmote = new lib.locator();
	this.lctEmote.name = "lctEmote";
	this.lctEmote.setTransform(9,10.45);

	this.timeline.addTween(cjs.Tween.get(this.lctEmote).wait(5));

	// FlashAICB
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#A8A9AC").setStrokeStyle(1,0,0,4).moveTo(-47,-77.5).lineTo(47,-77.5).curveTo(51,-77.5,53.7,-74.7).curveTo(56.5,-72,56.5,-68).lineTo(56.5,68).curveTo(56.5,71.9,53.7,74.7).curveTo(51,77.5,47,77.5).lineTo(-47,77.5).curveTo(-51,77.5,-53.7,74.7).curveTo(-56.5,71.9,-56.5,68).lineTo(-56.5,-68).curveTo(-56.5,-72,-53.7,-74.7).curveTo(-51,-77.5,-47,-77.5).closePath();
	this.shape_4.setTransform(59,79.5,1,1,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#FFFFFF","#D5D5D5"],[0.459,1],0,78,0,-78).beginStroke().moveTo(-47,77.5).curveTo(-50.9,77.5,-53.7,74.7).curveTo(-56.5,72,-56.5,68).lineTo(-56.5,-68).curveTo(-56.5,-71.9,-53.7,-74.7).curveTo(-50.9,-77.5,-47,-77.5).lineTo(47,-77.5).curveTo(50.9,-77.5,53.7,-74.7).curveTo(56.5,-71.9,56.5,-68).lineTo(56.5,68).curveTo(56.5,72,53.7,74.7).curveTo(50.9,77.5,47,77.5).closePath();
	this.shape_5.setTransform(59,79.5,1,1,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#A8A9AC").setStrokeStyle(1,0,0,4).moveTo(-48.5,-79.5).lineTo(48.5,-79.5).curveTo(52.5,-79.5,55.2,-76.7).curveTo(58,-74,58,-70).lineTo(58,70).curveTo(58,73.9,55.2,76.7).curveTo(52.5,79.5,48.5,79.5).lineTo(-48.5,79.5).curveTo(-52.5,79.5,-55.2,76.7).curveTo(-58,73.9,-58,70).lineTo(-58,-70).curveTo(-58,-74,-55.2,-76.7).curveTo(-52.5,-79.5,-48.5,-79.5).closePath();
	this.shape_6.setTransform(59,79.5,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginLinearGradientFill(["#FFFFFF","#D5D5D5"],[0.459,1],0,80,0,-79.9).beginStroke().moveTo(-48.5,79.5).curveTo(-52.4,79.5,-55.2,76.7).curveTo(-58,74,-58,70).lineTo(-58,-70).curveTo(-58,-73.9,-55.2,-76.7).curveTo(-52.4,-79.5,-48.5,-79.5).lineTo(48.5,-79.5).curveTo(52.4,-79.5,55.2,-76.7).curveTo(58,-73.9,58,-70).lineTo(58,70).curveTo(58,74,55.2,76.7).curveTo(52.4,79.5,48.5,79.5).closePath();
	this.shape_7.setTransform(59,79.5,1,1,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#A8A9AC").setStrokeStyle(1,0,0,4).moveTo(-44.5,-74).lineTo(44.5,-74).curveTo(48.5,-74,51.2,-71.2).curveTo(54,-68.5,54,-64.5).lineTo(54,64.5).curveTo(54,68.4,51.2,71.2).curveTo(48.5,74,44.5,74).lineTo(-44.5,74).curveTo(-48.5,74,-51.2,71.2).curveTo(-54,68.4,-54,64.5).lineTo(-54,-64.5).curveTo(-54,-68.5,-51.2,-71.2).curveTo(-48.5,-74,-44.5,-74).closePath();
	this.shape_8.setTransform(59,79.5,1,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginLinearGradientFill(["#FFFFFF","#D5D5D5"],[0.459,1],0,74.5,0,-74.5).beginStroke().moveTo(-44.5,74).curveTo(-48.4,74,-51.2,71.2).curveTo(-54,68.4,-54,64.5).lineTo(-54,-64.5).curveTo(-54,-68.4,-51.2,-71.2).curveTo(-48.4,-74,-44.5,-74).lineTo(44.5,-74).curveTo(48.4,-74,51.2,-71.2).curveTo(54,-68.4,54,-64.5).lineTo(54,64.5).curveTo(54,68.4,51.2,71.2).curveTo(48.4,74,44.5,74).closePath();
	this.shape_9.setTransform(59,79.5,1,1,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#A8A9AC").setStrokeStyle(1,0,0,4).moveTo(-45.5,-75.5).lineTo(45.5,-75.5).curveTo(49.5,-75.5,52.2,-72.7).curveTo(55,-69.9,55,-66).lineTo(55,66).curveTo(55,69.9,52.2,72.7).curveTo(49.5,75.5,45.5,75.5).lineTo(-45.5,75.5).curveTo(-49.5,75.5,-52.2,72.7).curveTo(-55,69.9,-55,66).lineTo(-55,-66).curveTo(-55,-69.9,-52.2,-72.7).curveTo(-49.5,-75.5,-45.5,-75.5).closePath();
	this.shape_10.setTransform(59,79.5,1,1,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginLinearGradientFill(["#FFFFFF","#D5D5D5"],[0.459,1],0,76,0,-76).beginStroke().moveTo(-45.5,75.5).curveTo(-49.4,75.5,-52.2,72.7).curveTo(-55,70,-55,66).lineTo(-55,-66).curveTo(-55,-69.9,-52.2,-72.7).curveTo(-49.4,-75.5,-45.5,-75.5).lineTo(45.5,-75.5).curveTo(49.5,-75.5,52.2,-72.7).curveTo(55,-69.9,55,-66).lineTo(55,66).curveTo(55,70,52.2,72.7).curveTo(49.5,75.5,45.5,75.5).closePath();
	this.shape_11.setTransform(59,79.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:59}},{t:this.shape_4,p:{x:59}}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_5,p:{x:58}},{t:this.shape_4,p:{x:58}}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// FlashAICB
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(0,0,0,0.149)").beginStroke().moveTo(-47,77.5).curveTo(-51,77.5,-53.7,74.7).curveTo(-56.5,72,-56.5,68).lineTo(-56.5,-68).curveTo(-56.5,-72,-53.7,-74.7).curveTo(-51,-77.5,-47,-77.5).lineTo(47,-77.5).curveTo(51,-77.5,53.7,-74.7).curveTo(56.5,-72,56.5,-68).lineTo(56.5,68).curveTo(56.5,72,53.7,74.7).curveTo(51,77.5,47,77.5).closePath();
	this.shape_12.setTransform(59,83.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(0,0,0,0.149)").beginStroke().moveTo(-48.7,80.2).curveTo(-52.8,80.2,-55.6,77.3).curveTo(-58.5,74.5,-58.5,70.4).lineTo(-58.5,-70.4).curveTo(-58.5,-74.5,-55.6,-77.4).curveTo(-52.8,-80.2,-48.7,-80.2).lineTo(48.7,-80.2).curveTo(52.8,-80.2,55.6,-77.4).curveTo(58.5,-74.5,58.5,-70.4).lineTo(58.5,70.4).curveTo(58.5,74.5,55.6,77.3).curveTo(52.8,80.2,48.7,80.2).closePath();
	this.shape_13.setTransform(59.05,82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#39516E").setStrokeStyle(1,0,0,4).moveTo(-49.5,-79.5).lineTo(49.5,-79.5).curveTo(53.5,-79.5,56.2,-76.7).curveTo(59,-74,59,-70).lineTo(59,70).curveTo(59,73.9,56.2,76.7).curveTo(53.5,79.5,49.5,79.5).lineTo(-49.5,79.5).curveTo(-53.5,79.5,-56.2,76.7).curveTo(-59,73.9,-59,70).lineTo(-59,-70).curveTo(-59,-74,-56.2,-76.7).curveTo(-53.5,-79.5,-49.5,-79.5).closePath();
	this.shape_14.setTransform(59,79.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#85CBE2").beginStroke().moveTo(-49.5,79.5).curveTo(-53.4,79.5,-56.2,76.7).curveTo(-59,74,-59,70).lineTo(-59,-70).curveTo(-59,-73.9,-56.2,-76.7).curveTo(-53.4,-79.5,-49.5,-79.5).lineTo(49.5,-79.5).curveTo(53.5,-79.5,56.2,-76.7).curveTo(59,-73.9,59,-70).lineTo(59,70).curveTo(59,74,56.2,76.7).curveTo(53.5,79.5,49.5,79.5).closePath();
	this.shape_15.setTransform(59,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,120,163.8);


(lib.btnSubmit = function(mode,startPosition,loop,reversed) {
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

	// txtLabel
	this.lblText = new cjs.Text("Submit", "24px 'Cooper Black'", "#FFFFFF");
	this.lblText.name = "lblText";
	this.lblText.textAlign = "center";
	this.lblText.lineHeight = 31;
	this.lblText.lineWidth = 112;
	this.lblText.parent = this;
	this.lblText.setTransform(-0.75,-15);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(20));

	// Layer_2
	this.instance = new lib.MSEBaseGreen();
	this.instance.setTransform(0,0,1.3,1);

	this.instance_1 = new lib.MSEBaseGreenOver();
	this.instance_1.setTransform(-0.05,-0.05,1.352,1.04);

	this.instance_2 = new lib.MSEBaseGreenDown();
	this.instance_2.setTransform(0.05,0.05,1.248,0.96);

	this.instance_3 = new lib.MSEBaseGreenDisabled();
	this.instance_3.setTransform(0,0,1.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-23.4,137.2,47.3);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,7.8).lineTo(3.5,7.7).lineTo(3.2,7.5).lineTo(-0.1,1.8).lineTo(-3.3,7.5).lineTo(-3.6,7.7).lineTo(-4.1,7.8).lineTo(-5.1,7.8).lineTo(-6.1,7.8).curveTo(-6.5,7.7,-6.6,7.5).curveTo(-6.6,7.5,-6.7,7.5).curveTo(-6.7,7.4,-6.7,7.4).curveTo(-6.7,7.3,-6.7,7.3).curveTo(-6.7,7.2,-6.6,7.2).lineTo(-6.3,6.4).lineTo(-2.4,-0.2).lineTo(-6,-6.4).lineTo(-6.3,-7.2).curveTo(-6.4,-7.3,-6.4,-7.3).curveTo(-6.4,-7.4,-6.4,-7.4).curveTo(-6.4,-7.5,-6.4,-7.5).curveTo(-6.3,-7.6,-6.3,-7.6).curveTo(-6.1,-7.8,-5.7,-7.8).lineTo(-4.6,-7.8).lineTo(-3.7,-7.8).lineTo(-3.1,-7.7).lineTo(-2.8,-7.5).lineTo(0.2,-2.4).lineTo(3.2,-7.5).lineTo(3.4,-7.7).lineTo(3.9,-7.8).lineTo(4.8,-7.8).lineTo(5.8,-7.8).curveTo(6.3,-7.8,6.3,-7.6).curveTo(6.4,-7.6,6.4,-7.5).curveTo(6.4,-7.5,6.4,-7.4).curveTo(6.4,-7.4,6.4,-7.3).curveTo(6.4,-7.2,6.4,-7.2).lineTo(6.1,-6.4).lineTo(2.5,-0.2).lineTo(6.4,6.4).lineTo(6.7,7.2).curveTo(6.7,7.2,6.7,7.3).curveTo(6.7,7.3,6.7,7.4).curveTo(6.7,7.4,6.6,7.5).curveTo(6.6,7.5,6.6,7.5).lineTo(6,7.8).lineTo(4.9,7.8).lineTo(4,7.8).closePath();
	this.shape.setTransform(-0.1033,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#669900","#4A7000"],[0,1],447,-13.6,447,13.5).beginStroke().moveTo(-9.9,9.9).curveTo(-14,5.8,-14,0).curveTo(-14,-5.8,-9.9,-9.9).curveTo(-5.8,-14,0,-14).curveTo(5.8,-14,9.9,-9.9).curveTo(14,-5.8,14,0).curveTo(14,5.8,9.9,9.9).curveTo(5.8,14,0,14).curveTo(-5.8,14,-9.9,9.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#FFFFFF","#DDDDDD"],[0,1],-12.3,-12.3,12.4,12.4).beginStroke().moveTo(-12.4,12.3).curveTo(-17.5,7.2,-17.5,0).curveTo(-17.5,-7.2,-12.4,-12.4).curveTo(-7.2,-17.5,0,-17.5).curveTo(7.2,-17.5,12.3,-12.4).curveTo(17.5,-7.2,17.5,0).curveTo(17.5,7.2,12.3,12.3).curveTo(7.2,17.5,0,17.5).curveTo(-7.2,17.5,-12.4,12.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.instance = new lib.ButtonShadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Over, new cjs.Rectangle(-18.7,-18.7,38.5,38.5), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,7.8).lineTo(3.5,7.7).lineTo(3.2,7.5).lineTo(-0.1,1.8).lineTo(-3.3,7.5).lineTo(-3.6,7.7).lineTo(-4.1,7.8).lineTo(-5.1,7.8).lineTo(-6.1,7.8).curveTo(-6.5,7.7,-6.6,7.5).curveTo(-6.6,7.5,-6.7,7.5).curveTo(-6.7,7.4,-6.7,7.4).curveTo(-6.7,7.3,-6.7,7.3).curveTo(-6.7,7.2,-6.6,7.2).lineTo(-6.3,6.4).lineTo(-2.4,-0.2).lineTo(-6,-6.4).lineTo(-6.3,-7.2).curveTo(-6.4,-7.3,-6.4,-7.3).curveTo(-6.4,-7.4,-6.4,-7.4).curveTo(-6.4,-7.5,-6.4,-7.5).curveTo(-6.3,-7.6,-6.3,-7.6).curveTo(-6.1,-7.8,-5.7,-7.8).lineTo(-4.6,-7.8).lineTo(-3.7,-7.8).lineTo(-3.1,-7.7).lineTo(-2.8,-7.5).lineTo(0.2,-2.4).lineTo(3.2,-7.5).lineTo(3.4,-7.7).lineTo(3.9,-7.8).lineTo(4.8,-7.8).lineTo(5.8,-7.8).curveTo(6.3,-7.8,6.3,-7.6).curveTo(6.4,-7.6,6.4,-7.5).curveTo(6.4,-7.5,6.4,-7.4).curveTo(6.4,-7.4,6.4,-7.3).curveTo(6.4,-7.2,6.4,-7.2).lineTo(6.1,-6.4).lineTo(2.5,-0.2).lineTo(6.4,6.4).lineTo(6.7,7.2).curveTo(6.7,7.2,6.7,7.3).curveTo(6.7,7.3,6.7,7.4).curveTo(6.7,7.4,6.6,7.5).curveTo(6.6,7.5,6.6,7.5).lineTo(6,7.8).lineTo(4.9,7.8).lineTo(4,7.8).closePath();
	this.shape.setTransform(-0.1033,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#335800","#274400"],[0,1],447,-13.6,447,13.5).beginStroke().moveTo(-9.9,9.9).curveTo(-14,5.8,-14,0).curveTo(-14,-5.8,-9.9,-9.9).curveTo(-5.8,-14,0,-14).curveTo(5.8,-14,9.9,-9.9).curveTo(14,-5.8,14,0).curveTo(14,5.8,9.9,9.9).curveTo(5.8,14,0,14).curveTo(-5.8,14,-9.9,9.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#FFFFFF","#DDDDDD"],[0,1],-12.3,-12.3,12.4,12.4).beginStroke().moveTo(-12.4,12.3).curveTo(-17.5,7.2,-17.5,0).curveTo(-17.5,-7.2,-12.4,-12.4).curveTo(-7.2,-17.5,0,-17.5).curveTo(7.2,-17.5,12.3,-12.4).curveTo(17.5,-7.2,17.5,0).curveTo(17.5,7.2,12.3,12.3).curveTo(7.2,17.5,0,17.5).curveTo(-7.2,17.5,-12.4,12.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.instance = new lib.ButtonShadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Down, new cjs.Rectangle(-18.7,-18.7,38.5,38.5), null);


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

	// disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.698)").beginStroke().moveTo(-12.4,12.3).curveTo(-17.5,7.2,-17.5,0).curveTo(-17.5,-7.2,-12.4,-12.4).curveTo(-7.2,-17.5,0,-17.5).curveTo(7.2,-17.5,12.3,-12.4).curveTo(17.5,-7.2,17.5,0).curveTo(17.5,7.2,12.3,12.3).curveTo(7.2,17.5,0,17.5).curveTo(-7.2,17.5,-12.4,12.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,7.8).lineTo(3.5,7.7).lineTo(3.2,7.5).lineTo(-0.1,1.8).lineTo(-3.3,7.5).lineTo(-3.6,7.7).lineTo(-4.1,7.8).lineTo(-5.1,7.8).lineTo(-6.1,7.8).curveTo(-6.5,7.7,-6.6,7.5).curveTo(-6.6,7.5,-6.7,7.5).curveTo(-6.7,7.4,-6.7,7.4).curveTo(-6.7,7.3,-6.7,7.3).curveTo(-6.7,7.2,-6.6,7.2).lineTo(-6.3,6.4).lineTo(-2.4,-0.2).lineTo(-6,-6.4).lineTo(-6.3,-7.2).curveTo(-6.4,-7.3,-6.4,-7.3).curveTo(-6.4,-7.4,-6.4,-7.4).curveTo(-6.4,-7.5,-6.4,-7.5).curveTo(-6.3,-7.6,-6.3,-7.6).curveTo(-6.1,-7.8,-5.7,-7.8).lineTo(-4.6,-7.8).lineTo(-3.7,-7.8).lineTo(-3.1,-7.7).lineTo(-2.8,-7.5).lineTo(0.2,-2.4).lineTo(3.2,-7.5).lineTo(3.4,-7.7).lineTo(3.9,-7.8).lineTo(4.8,-7.8).lineTo(5.8,-7.8).curveTo(6.3,-7.8,6.3,-7.6).curveTo(6.4,-7.6,6.4,-7.5).curveTo(6.4,-7.5,6.4,-7.4).curveTo(6.4,-7.4,6.4,-7.3).curveTo(6.4,-7.2,6.4,-7.2).lineTo(6.1,-6.4).lineTo(2.5,-0.2).lineTo(6.4,6.4).lineTo(6.7,7.2).curveTo(6.7,7.2,6.7,7.3).curveTo(6.7,7.3,6.7,7.4).curveTo(6.7,7.4,6.6,7.5).curveTo(6.6,7.5,6.6,7.5).lineTo(6,7.8).lineTo(4.9,7.8).lineTo(4,7.8).closePath();
	this.shape_1.setTransform(-0.1033,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#4F7700","#3A5700"],[0,1],447,-13.6,447,13.5).beginStroke().moveTo(-9.9,9.9).curveTo(-14,5.8,-14,0).curveTo(-14,-5.8,-9.9,-9.9).curveTo(-5.8,-14,0,-14).curveTo(5.8,-14,9.9,-9.9).curveTo(14,-5.8,14,0).curveTo(14,5.8,9.9,9.9).curveTo(5.8,14,0,14).curveTo(-5.8,14,-9.9,9.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#FFFFFF","#DDDDDD"],[0,1],-12.3,-12.3,12.4,12.4).beginStroke().moveTo(-12.4,12.3).curveTo(-17.5,7.2,-17.5,0).curveTo(-17.5,-7.2,-12.4,-12.4).curveTo(-7.2,-17.5,0,-17.5).curveTo(7.2,-17.5,12.3,-12.4).curveTo(17.5,-7.2,17.5,0).curveTo(17.5,7.2,12.3,12.3).curveTo(7.2,17.5,0,17.5).curveTo(-7.2,17.5,-12.4,12.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// shadow
	this.instance = new lib.ButtonShadow();
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton_Disabled, new cjs.Rectangle(-18.7,-18.7,38.5,38.5), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,7.8).lineTo(3.5,7.7).lineTo(3.2,7.5).lineTo(-0.1,1.8).lineTo(-3.3,7.5).lineTo(-3.6,7.7).lineTo(-4.1,7.8).lineTo(-5.1,7.8).lineTo(-6.1,7.8).curveTo(-6.5,7.7,-6.6,7.5).curveTo(-6.6,7.5,-6.7,7.5).curveTo(-6.7,7.4,-6.7,7.4).curveTo(-6.7,7.3,-6.7,7.3).curveTo(-6.7,7.2,-6.6,7.2).lineTo(-6.3,6.4).lineTo(-2.4,-0.2).lineTo(-6,-6.4).lineTo(-6.3,-7.2).curveTo(-6.4,-7.3,-6.4,-7.3).curveTo(-6.4,-7.4,-6.4,-7.4).curveTo(-6.4,-7.5,-6.4,-7.5).curveTo(-6.3,-7.6,-6.3,-7.6).curveTo(-6.1,-7.8,-5.7,-7.8).lineTo(-4.6,-7.8).lineTo(-3.7,-7.8).lineTo(-3.1,-7.7).lineTo(-2.8,-7.5).lineTo(0.2,-2.4).lineTo(3.2,-7.5).lineTo(3.4,-7.7).lineTo(3.9,-7.8).lineTo(4.8,-7.8).lineTo(5.8,-7.8).curveTo(6.3,-7.8,6.3,-7.6).curveTo(6.4,-7.6,6.4,-7.5).curveTo(6.4,-7.5,6.4,-7.4).curveTo(6.4,-7.4,6.4,-7.3).curveTo(6.4,-7.2,6.4,-7.2).lineTo(6.1,-6.4).lineTo(2.5,-0.2).lineTo(6.4,6.4).lineTo(6.7,7.2).curveTo(6.7,7.2,6.7,7.3).curveTo(6.7,7.3,6.7,7.4).curveTo(6.7,7.4,6.6,7.5).curveTo(6.6,7.5,6.6,7.5).lineTo(6,7.8).lineTo(4.9,7.8).lineTo(4,7.8).closePath();
	this.shape.setTransform(-0.1033,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#4F7700","#3A5700"],[0,1],447,-13.6,447,13.5).beginStroke().moveTo(-9.9,9.9).curveTo(-14,5.8,-14,0).curveTo(-14,-5.8,-9.9,-9.9).curveTo(-5.8,-14,0,-14).curveTo(5.8,-14,9.9,-9.9).curveTo(14,-5.8,14,0).curveTo(14,5.8,9.9,9.9).curveTo(5.8,14,0,14).curveTo(-5.8,14,-9.9,9.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#FFFFFF","#DDDDDD"],[0,1],-12.3,-12.3,12.4,12.4).beginStroke().moveTo(-12.4,12.3).curveTo(-17.5,7.2,-17.5,0).curveTo(-17.5,-7.2,-12.4,-12.4).curveTo(-7.2,-17.5,0,-17.5).curveTo(7.2,-17.5,12.3,-12.4).curveTo(17.5,-7.2,17.5,0).curveTo(17.5,7.2,12.3,12.3).curveTo(7.2,17.5,0,17.5).curveTo(-7.2,17.5,-12.4,12.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.instance = new lib.ButtonShadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseButton, new cjs.Rectangle(-18.7,-18.7,38.5,38.5), null);


(lib.DBLAButtonClose = function(mode,startPosition,loop,reversed) {
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

	// asset
	this.instance = new lib.CloseButton();
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.CloseButton_Over();
	this.instance_1.setTransform(0,0.05,1.08,1.08);

	this.instance_2 = new lib.CloseButton_Down();
	this.instance_2.setTransform(0,0.05,0.92,0.92);

	this.instance_3 = new lib.CloseButton_Disabled();
	this.instance_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.008)").beginStroke().moveTo(-20,22).lineTo(-20,-22).lineTo(20,-22).lineTo(20,22).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-22,41.599999999999994,44);


(lib.DBLASurveyModal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_submit
	this.btnSubmit = new lib.btnSubmit();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.setTransform(304.85,327,1,1,0,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// btn_locator
	this.lctSelection4 = new lib.locator();
	this.lctSelection4.name = "lctSelection4";
	this.lctSelection4.setTransform(513.1,198.3,1,1,0,0,0,64,90);

	this.lctSelection3 = new lib.locator();
	this.lctSelection3.name = "lctSelection3";
	this.lctSelection3.setTransform(380.05,199.3,1,1,0,0,0,64,90);

	this.lctSelection2 = new lib.locator();
	this.lctSelection2.name = "lctSelection2";
	this.lctSelection2.setTransform(247,198.3,1,1,0,0,0,64,90);

	this.lctSelection1 = new lib.locator();
	this.lctSelection1.name = "lctSelection1";
	this.lctSelection1.setTransform(46.95,108.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lctSelection1},{t:this.lctSelection2},{t:this.lctSelection3},{t:this.lctSelection4}]}).wait(1));

	// txt_question
	this.lblText = new cjs.Text("I feel more confident about math after this lesson.", "20px 'Cooper Black'", "#1C236F");
	this.lblText.name = "lblText";
	this.lblText.lineHeight = 26;
	this.lblText.lineWidth = 506;
	this.lblText.parent = this;
	this.lblText.setTransform(44.85,66.65);

	this.timeline.addTween(cjs.Tween.get(this.lblText).wait(1));

	// txt_title
	this.lblText_1 = new cjs.Text("What do you think?", "24px 'Cooper Black'", "#1C236F");
	this.lblText_1.name = "lblText_1";
	this.lblText_1.textAlign = "center";
	this.lblText_1.lineHeight = 31;
	this.lblText_1.lineWidth = 333;
	this.lblText_1.parent = this;
	this.lblText_1.setTransform(308.5,8.85);

	this.timeline.addTween(cjs.Tween.get(this.lblText_1).wait(1));

	// btn_x
	this.btnClose = new lib.DBLAButtonClose();
	this.btnClose.name = "btnClose";
	this.btnClose.setTransform(585,24.05);

	this.timeline.addTween(cjs.Tween.get(this.btnClose).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(200,200,200,0.247)").beginStroke().moveTo(-273.5,121.5).curveTo(-277.6,121.5,-280.5,118.6).curveTo(-283.5,115.7,-283.5,111.5).lineTo(-283.5,-111.5).curveTo(-283.5,-115.6,-280.5,-118.5).curveTo(-277.6,-121.5,-273.5,-121.5).lineTo(273.5,-121.5).curveTo(277.7,-121.5,280.6,-118.5).curveTo(283.5,-115.6,283.5,-111.5).lineTo(283.5,111.5).curveTo(283.5,115.7,280.6,118.6).curveTo(277.7,121.5,273.5,121.5).closePath();
	this.shape.setTransform(305.5,171.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-287.5,178.9).curveTo(-292.4,178.9,-296,175.4).curveTo(-299.5,171.9,-299.5,166.9).lineTo(-299.5,-149.9).curveTo(-299.5,-154.8,-296,-158.4).curveTo(-292.4,-161.9,-287.5,-161.9).lineTo(-165.6,-161.9).lineTo(-165.6,-166.9).curveTo(-165.7,-171.8,-162.1,-175.4).curveTo(-158.6,-178.9,-153.7,-178.9).lineTo(159.5,-178.9).curveTo(164.5,-178.9,168,-175.4).curveTo(171.5,-171.8,171.5,-166.9).lineTo(171.5,-161.9).lineTo(287.5,-161.9).curveTo(292.5,-161.9,296,-158.4).curveTo(299.5,-154.8,299.5,-149.9).lineTo(299.5,166.9).curveTo(299.5,171.9,296,175.4).curveTo(292.5,178.9,287.5,178.9).closePath();
	this.shape_1.setTransform(305.5,183.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// scrim
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(2,2,2,0.149)").beginStroke().moveTo(-293,9.2).curveTo(-297.9,9.2,-301.5,5.7).curveTo(-305,2.2,-305,-2.8).lineTo(-305,-9.2).curveTo(-304.8,-4.5,-301.5,-1.1).curveTo(-297.9,2.4,-293,2.4).lineTo(293,2.4).curveTo(298,2.4,301.5,-1.1).curveTo(304.8,-4.5,305,-9.2).lineTo(305,-2.8).curveTo(305,2.2,301.5,5.7).curveTo(298,9.2,293,9.2).closePath();
	this.shape_2.setTransform(305.5,367.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(255,255,255,0.4)").beginStroke().moveTo(-293,184.2).curveTo(-297.9,184.2,-301.4,180.7).curveTo(-305,177.2,-305,172.2).lineTo(-305,-172.2).curveTo(-305,-177.1,-301.5,-180.6).curveTo(-298,-184.2,-293,-184.2).lineTo(293,-184.2).curveTo(298,-184.2,301.5,-180.6).curveTo(305,-177.1,305,-172.2).lineTo(305,172.2).curveTo(305,177.2,301.5,180.7).curveTo(298,184.2,293,184.2).closePath();
	this.shape_3.setTransform(305.575,184.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLASurveyModal, new cjs.Rectangle(0.5,0.6,610.1,375.7), null);


// stage content:
(lib.DBLA_GATES_Survey = function(mode,startPosition,loop,reversed) {
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
	this.DBLASurveyModal = new lib.DBLASurveyModal();
	this.DBLASurveyModal.name = "DBLASurveyModal";
	this.DBLASurveyModal.setTransform(506.05,385.75,1,1,0,0,0,308.8,185.9);

	this.timeline.addTween(cjs.Tween.get(this.DBLASurveyModal).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(709.8,584.5,98.10000000000002,-8.399999999999977);
// library properties:
lib.properties = {
	id: '98BE15A1D5A447AD9BB60B6D88DCDA57',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FF00FF",
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
an.compositions['98BE15A1D5A447AD9BB60B6D88DCDA57'] = {
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