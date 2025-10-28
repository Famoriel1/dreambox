(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.starcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4DA41").s().p("AAAA6IhEAvIAZhQIhDgxIBTgDIAbhNIAcBOIBTADIhDAxIAYBPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0C240").s().p("AAAA6IhEAvIAZhPIhCgzIBTgBIAahPIAcBPIBSACIhBAyIAXBQg");
	this.shape_1.setTransform(-0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.starcopy, new cjs.Rectangle(-11.6,-11,22.7,21.6), null);


(lib.pigbank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD93B6").s().p("AghADQgZgaAVgEQAVgDAhAFQARACANADQgLAPgQAMIgbAWQgPgMgLgOg");
	this.shape.setTransform(0.2,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A22450").s().p("AgPAHIAYgOIAAABIABgBIAEAKIACAEIAAABg");
	this.shape_1.setTransform(-3.8,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC6CA3").s().p("AATAIQgNgHgNABIgggBIAAgBIgCgDIgEgLIAsAAQAMgBATAFIASAEIgTAVQgEgEgGgDgAgvgOIACAAIgBABg");
	this.shape_2.setTransform(1.8,-13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C2F4C").s().p("AgTgDQABgFAEgCQgHAJAEAMQABAEADACQgKgFAEgPgAAPgJQgCgFACgCQAHAJAAALQAAAFgEABQACgKgFgJg");
	this.shape_3.setTransform(13.7,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC6CA3").s().p("AgZAgQgOgJgDgRQgCgPAKgOQALgNASgDQARgCAOAJQAPAKACAQQADAQgMANQgKANgSADIgHABQgNAAgLgIgAgMAAQgEAPAKAFQgDgCgBgFQgEgMAHgIQgEACgBAFgAAWgGQAFAJgCAJQAEAAAAgFQAAgMgHgIQgCACACAFg");
	this.shape_4.setTransform(13,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAUQgFgHgBgLQgBgKADgIQAEgJAGgBQAFAAAFAHQAGAIABAKQABAKgEAIQgDAJgGAAIgBABQgFAAgFgHg");
	this.shape_5.setTransform(13.9,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAUQgFgHgBgLQgBgJADgJQAEgJAGAAQAFgBAFAIQAFAHACALQABAJgEAJQgDAIgGABIgBAAQgFAAgFgHg");
	this.shape_6.setTransform(6.7,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC2D5").s().p("AAhBdIgKABQhAAIgyggIgFgDIgYArIgugaIAfg4QgKgSgCgVQgGg0ApgpQAqgqBCgHQBAgIAyAfQAyAfAGA0QAGAygqAqQgTATgYAMIATA/Ig2AQg");
	this.shape_7.setTransform(-0.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FD93B6").s().p("AgMAQQgSgJgPgLQAMgGAQgGQAfgMAUgCQAVgBgRAfQgIAQgMAPg");
	this.shape_8.setTransform(13,-10.7,1,1,0,0,0,0.2,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC6CA3").s().p("AgwAiIAvhdIAyAZIgwBeg");
	this.shape_9.setTransform(-7.8,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC6CA3").s().p("AgvgjIAygYIAtBgIgzAXg");
	this.shape_10.setTransform(8.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pigbank, new cjs.Rectangle(-17.3,-15.5,34.8,31.1), null);


(lib.avataroverlayhighlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6EADC7").s().p("AEYCjQgHhohMhJQhRhSh0AAQhzAAhSBSQhLBJgGBoIgBAJIgJgCQgggHghgJQAJiBBehdQBohnCSgBQCTABBnBnQBfBdAJCBIg/AQIgLADg");
	this.shape.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.avataroverlayhighlight, new cjs.Rectangle(-35.4,-17.6,70.8,34.5), null);


(lib.avataroverlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578BB5").s().p("AEYCjQgHhohMhJQhRhSh0AAQhzAAhSBSQhLBJgGBoIgBAJIgJgCQgggHghgJQAJiBBehdQBohnCSgBQCTABBnBnQBfBdAJCBIg/AQIgLADg");
	this.shape.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.avataroverlay, new cjs.Rectangle(-35.4,-17.6,70.8,34.5), null);


(lib.LessonsCompletedIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(231,138,65,0.498)").s().p("AhHAiIgXAbIgWgQIAjgpIAyAyIBth/IAmAvIgIAIIgUgYIhzB0g");
	this.shape.setTransform(27.2,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBAD46").s().p("Ah0AYIAjgnIAyAwIBth+IAmAvIiQCMg");
	this.shape_1.setTransform(27.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8DC55").s().p("AgLC2IiuBLIAcinIACgYIh4iTIC8gZIBhinIBRCwIC5AuIiLCGIAPC/g");
	this.shape_2.setTransform(27.6,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBAD46").s().p("ACbBKIgOi+IAcAXIAODSgAi2A5ICuhKIAIAkIitBMg");
	this.shape_3.setTransform(27.3,47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E78A41").s().p("AgLBlIgJglICjBcIAbArgACAgiICLiHIASArIiABzgAkLiRIgRg1IB4CTIgCAZg");
	this.shape_4.setTransform(28.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LessonsCompletedIcon, new cjs.Rectangle(0,0,57,59), null);


(lib.fallingcard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EDC6").s().p("AkBgIIDlhyIEeCCIjxBzg");
	this.shape.setTransform(9.5,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EDC6").s().p("AjTgnICJg/IEeB9IiPBQg");
	this.shape_1.setTransform(-13.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7DCB4").s().p("AnBAoIIOkHIF2CmIoEEZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fallingcard, new cjs.Rectangle(-45,-22.3,90.1,44.8), null);


(lib.cardstack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EDC6").s().p("AkBgIIDlhzIEeCDIjxB0g");
	this.shape.setTransform(8.3,-24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EDC6").s().p("AjTgnICJg/IEeB9IiPBRg");
	this.shape_1.setTransform(-14.7,-11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2BC98").s().p("AnCAoIIQkHIF0CnIoDEYg");
	this.shape_2.setTransform(-1.2,-17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7EDC6").s().p("AkBgHIDlh0IEeCEIjxByg");
	this.shape_3.setTransform(8.6,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7EDC6").s().p("AjTgnICKg/IEeB9IiQBQg");
	this.shape_4.setTransform(-14.3,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7DCB4").s().p("AnCAoIIQkHIF0CnIoDEYg");
	this.shape_5.setTransform(-0.8,-12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7EDC6").s().p("AkBgIIDlhyIEeCDIjxByg");
	this.shape_6.setTransform(9,-14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7EDC6").s().p("AjTgnICJg/IEeB9IiPBQg");
	this.shape_7.setTransform(-13.9,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2BC98").s().p("AnBAoIIOkHIF2CnIoEEYg");
	this.shape_8.setTransform(-0.4,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7EDC6").s().p("AkBgHIDlhzIEeCCIjxBzg");
	this.shape_9.setTransform(9.4,-8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7EDC6").s().p("AjTgnICJhAIEeB+IiPBQg");
	this.shape_10.setTransform(-13.6,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7DCB4").s().p("AnCAoIIPkHIF2CnIoEEYg");
	this.shape_11.setTransform(-0.1,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7EDC6").s().p("AkBgIIDlhyIEeCDIjxByg");
	this.shape_12.setTransform(9.6,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7EDC6").s().p("AjTgnICJhAIEfB+IiQBQg");
	this.shape_13.setTransform(-13.3,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2BC98").s().p("AnCAoIIQkHIF0CnIoDEYg");
	this.shape_14.setTransform(0.2,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D7EDC6").s().p("AkBgIIDlhzIEeCEIjxBzg");
	this.shape_15.setTransform(9.9,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7EDC6").s().p("AjTgnICJg/IEeB9IiPBQg");
	this.shape_16.setTransform(-13,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D7DCB4").s().p("AnBAoIIOkHIF2CnIoEEYg");
	this.shape_17.setTransform(0.5,7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7EDC6").s().p("AkBgIIDlhyIEeCDIjxByg");
	this.shape_18.setTransform(10.4,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7EDC6").s().p("AjTgnICJg/IEeB9IiPBQg");
	this.shape_19.setTransform(-12.6,18.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D2BC98").s().p("AnBAoIIOkHIF2CnIoEEYg");
	this.shape_20.setTransform(0.9,12.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D7EDC6").s().p("AkBgHIDmh0IEdCEIjxByg");
	this.shape_21.setTransform(10.7,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D7EDC6").s().p("AjTgnICKg/IEdB9IiPBRg");
	this.shape_22.setTransform(-12.3,24.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D7DCB4").s().p("AnCAoIIPkHIF2CnIoEEYg");
	this.shape_23.setTransform(1.2,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cardstack, new cjs.Rectangle(-46.2,-40.2,92.6,80.5), null);


(lib.back1smalltint4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AjlDiQhghegBiEQABiDBgheQBfhdCGAAQCHAABgBdQBgBeAACDQAACEhgBeQhgBdiHAAQiGAAhfhdg");
	this.shape.setTransform(32.7,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1smalltint4, new cjs.Rectangle(0,0,65.3,63.8), null);


(lib.back1smalltint3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjlDiQhghegBiEQABiDBgheQBfhdCGAAQCHAABgBdQBgBeAACDQAACEhgBeQhgBdiHAAQiGAAhfhdg");
	this.shape.setTransform(32.7,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1smalltint3, new cjs.Rectangle(0,0,65.3,63.8), null);


(lib.back1smalltint2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AjlDiQhghegBiEQABiDBgheQBfhdCGAAQCHAABgBdQBgBeAACDQAACEhgBeQhgBdiHAAQiGAAhfhdg");
	this.shape.setTransform(32.7,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1smalltint2, new cjs.Rectangle(0,0,65.3,63.8), null);


(lib.back1smalltint1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699FF").s().p("AjlDiQhghegBiEQABiDBgheQBfhdCGAAQCHAABgBdQBgBeAACDQAACEhgBeQhgBdiHAAQiGAAhfhdg");
	this.shape.setTransform(32.7,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1smalltint1, new cjs.Rectangle(0,0,65.3,63.8), null);


(lib.back1small = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0A1644").ss(1.8,0,0,4).p("AE9AAQAACBhcBaQheBbiDAAQiDAAhdhbQhdhaAAiBQAAiABdhbQBdhaCDAAQCDAABeBaQBcBbAACAg");
	this.shape.setTransform(31.8,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A1644").s().p("AjgDbQhdhaAAiBQAAiABdhaQBdhbCDAAQCEAABcBbQBeBaAACAQAACBheBaQhcBbiEAAQiDAAhdhbg");
	this.shape_1.setTransform(31.8,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1small, new cjs.Rectangle(-1,-1,65.5,64), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgsCwQgDgSACgbQABgdAGgVQAJgCAYABQAXAAAKgCQADgiAAgdQAAgegDghQglAAgdgDIAAgwQAYgfBBgnQAXgHBMgBQABBagBAoQgCBOACAtIBEAAQAGAWgBAbQgBAOgEAlQhWAChCAAQhCAAgsgCgAiMBuQgKAAgJgEQgKgEgIgHIgBg/IgogBQAAgMgDgWQgCgUAHgQIAjAAIgChBIAWgKQAKgDAJAAQANAAAcAOIgCBAIAoAAQAGAXAAAQQAAAQgGAVIgqgCIgCBEQgRAHgOAAIgCAAg");
	this.shape.setTransform(16.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsCwQgDgSACgbQABgdAGgVQAJgCAYABQAXAAAKgCQADgiAAgdQAAgegDghQglAAgdgDIAAgwQAYgfBBgnQAXgHBMgBQABBagBAoQgCBOACAtIBEAAQAGAWgBAbQgBAOgEAlQhWAChCAAQhCAAgsgCgAiMBuQgKAAgJgEQgKgEgIgHIgBg/IgogBQAAgMgDgWQgCgUAHgQIAjAAIgChBIAWgKQAKgDAJAAQANAAAcAOIgCBAIAoAAQAGAXAAAQQAAAQgGAVIgqgCIgCBEQgRAHgOAAIgCAAg");
	this.shape_1.setTransform(17.4,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(-8.9,0,52.4,58.4), null);


(lib.AvatarHolderOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E3A57").ss(2,0,1).p("ADCjCQBRBRAABxQAAByhRBRQhQBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABQBQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E3A57").s().p("AjBDCQhRhRAAhxQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAABxhRBRQhQBRhyAAQhxAAhQhRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.instance = new lib.avataroverlayhighlight();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F7CA3").s().p("Aj6D7QhohpAAiSQAAiSBohoQBohoCSAAQCTAABnBoQBpBoAACSQAACShpBpQhnBoiTAAQiSAAhohogAjFjFQhSBSAABzQAAB0BSBSQBSBSBzAAQB0AABRhSQBThSAAh0QAAhzhThSQhRhSh0AAQhzAAhSBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E3A57").s().p("AkJEJQhthuAAibQAAibBthuQBuhtCbAAQCbAABuBtQBuBuAACbQAACbhuBuQhuBuibAAQibAAhuhug");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.AvatarHolderOver, new cjs.Rectangle(-37.5,-37.5,75,75), null);


(lib.AvatarHolderDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#142C44").ss(2,0,1).p("ADCjCQBRBRAABxQAAByhRBRQhQBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABQBQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.avataroverlay();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.9);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E6485").s().p("Aj6D7QhohpAAiSQAAiSBohoQBohoCSAAQCTAABnBoQBpBoAACSQAACShpBpQhnBoiTAAQiSAAhohogAjFjFQhSBSAABzQAAB0BSBSQBSBSBzAAQB0AABRhSQBThSAAh0QAAhzhThSQhRhSh0AAQhzAAhSBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#142C44").s().p("AkJEJQhthuAAibQAAibBthuQBuhtCbAAQCbAABuBtQBuBuAACbQAACbhuBuQhuBuibAAQibAAhuhug");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.AvatarHolderDisabled, new cjs.Rectangle(-37.5,-37.5,75,75), null);


(lib.AvatarHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#142C44").ss(2,0,1).p("ADCjCQBRBRAABxQAAByhRBRQhQBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABQBQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.avataroverlay();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D6485").s().p("Aj6D7QhohpAAiSQAAiSBohoQBohoCSAAQCTAABnBoQBpBoAACSQAACShpBpQhnBoiTAAQiSAAhohogAjFjFQhSBSAABzQAAB0BSBSQBSBSBzAAQB0AABRhSQBThSAAh0QAAhzhThSQhRhSh0AAQhzAAhSBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#142C44").s().p("AkJEJQhthuAAibQAAibBthuQBuhtCbAAQCbAABuBtQBuBuAACbQAACbhuBuQhuBuibAAQibAAhuhug");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.AvatarHolder, new cjs.Rectangle(-37.5,-37.5,75,75), null);


(lib.DBLoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.starcopy();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-8,1.727,1.472,0,-12.5,-6.1,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AhaCiQg6gKgygYQgvgXghgiQAhAfAtAVQAwAWA3AJQB7AVBqguQBrguAahUQANgsgNgrQgNgrgkgkQAoAlAPAsQAPAugOAtQgaBWhqAtQhKAghRAAQgkAAgngGg");
	this.shape.setTransform(0.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97732B").s().p("AkOBXQgPguANgtQAahVBrguQBqguB7AUQA7AKAxAYQAwAXAhAiQghgfgtgVQgwgWg3gJQh7gVhrAuQhqAugaBVQgNArANAsQANAqAjAkQgnglgPgsg");
	this.shape_1.setTransform(-5.3,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7ED56").s().p("AhBDaQhSgOg6gjQglgWgcgeQhJhPAbhZQAchaBwgxQBwgwCDAWQBfAPBAAuQAYARAUAWQBKBPgcBaQgbBahwAwQhNAhhXAAQgmAAgogGgAj0B6QgjglgMgqQgOgrAOgrQAZhVBqguQBrguB7AUQA4AJAvAXQAuAVAgAeQggghgxgXQgxgYg7gKQh6gVhrAuQhqAugaBWQgOAtAPAtQAPAtAnAlIAAAAg");
	this.shape_2.setTransform(-2.5,-7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A5D3B").s().p("Ah0C8QhcgPhAgrQA7AjBRANQCEAWBvgwQBwgxAbhaQAchZhKhPQgUgWgYgRQAhAVAaAcQBKBPgcBZQgbBahwAxQhNAhhVAAQgnAAgpgHg");
	this.shape_3.setTransform(4.1,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#635F03").s().p("AgSgaIAlgKIgDAwIgBAKIABAAIgdAPg");
	this.shape_4.setTransform(-14.6,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#989107").s().p("Ah3DeIgDgBIAEgNQACgIgBgCIgBgBIABgJIADgyIgmAKIAFBAQgsgQglgcQhfhFAAhjQAAhiBfhGQBfhFCFAAQCGAABfBFQBfBGAABiQAABjhfBFQhfBGiGAAQg/AAg4gQg");
	this.shape_5.setTransform(-1.2,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLoon, new cjs.Rectangle(-34.9,-29.6,66.3,51), null);


(lib.SCACharacterButtonStatus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Up:0,Over:6,Down:12,Disabled:19});

	// Layer 7
	this.instance = new lib.AvatarHolder();
	this.instance.parent = this;
	this.instance.setTransform(46.8,45,1.12,1.12);

	this.instance_1 = new lib.AvatarHolderOver();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.8,45,1.12,1.12);

	this.instance_2 = new lib.AvatarHolderDisabled();
	this.instance_2.parent = this;
	this.instance_2.setTransform(46.8,45,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_2}]},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,3,84,84);


(lib.SCACharacterButtonReward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{FindFriend1Start:1,FindFriend1Done:28,FindFriend2Start:41,FindFriend2Done:69,FindFriend3Start:82,FindFriend3Done:109,FindFriend4Start:121,FindFriend4Done:150,FindTokenStart:168,FindTokenDone:205,LessonCompletedStart:219,LessonCompletedDone:250});

	// timeline functions:
	this.frame_1 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_9 = function() {
		this.dispatchEvent("ShowFriendFace");
	}
	this.frame_28 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}
	this.frame_41 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_50 = function() {
		this.dispatchEvent("ShowFriendFace");
	}
	this.frame_69 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}
	this.frame_82 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_91 = function() {
		this.dispatchEvent("ShowFriendFace");
	}
	this.frame_109 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}
	this.frame_121 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_130 = function() {
		this.dispatchEvent("ShowFriendFace");
	}
	this.frame_150 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}
	this.frame_168 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_205 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}
	this.frame_219 = function() {
		this.dispatchEvent("Start");
	}
	this.frame_250 = function() {
		this.dispatchEvent("Done");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(19).call(this.frame_28).wait(13).call(this.frame_41).wait(9).call(this.frame_50).wait(19).call(this.frame_69).wait(13).call(this.frame_82).wait(9).call(this.frame_91).wait(18).call(this.frame_109).wait(12).call(this.frame_121).wait(9).call(this.frame_130).wait(20).call(this.frame_150).wait(18).call(this.frame_168).wait(37).call(this.frame_205).wait(14).call(this.frame_219).wait(31).call(this.frame_250).wait(7));

	// coin animation
	this.instance = new lib.DBLoon();
	this.instance.parent = this;
	this.instance.setTransform(34.1,13.7,0.484,0.484);
	this.instance._off = true;

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.6,28.6,0.515,0.515,0,0,0,17.2,25.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).to({scaleX:0.18,scaleY:0.18,x:30.7,y:17.2},5).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(196).to({_off:false},0).to({scaleX:1,scaleY:1,x:30.9,y:31},6).to({_off:true},3).wait(52));

	// animation
	this.instance_2 = new lib.fallingcard();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45,8.1,0.168,0.147,56.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.pigbank();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.3,32.8,0.506,0.506);
	this.instance_3._off = true;

	this.instance_4 = new lib.LessonsCompletedIcon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.9,29.7,0.292,0.292,0,0,0,28.6,29.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:0.42,scaleY:0.42,rotation:0.5,x:28,y:26.2},4).to({_off:true},1).wait(35).to({_off:false,scaleX:0.17,scaleY:0.15,rotation:56.4,x:45,y:8.1},0).to({scaleX:0.42,scaleY:0.42,rotation:0.5,x:28,y:26.2},4).to({_off:true},1).wait(36).to({_off:false,scaleX:0.17,scaleY:0.15,rotation:56.4,x:45,y:8.1},0).to({scaleX:0.42,scaleY:0.42,rotation:0.5,x:28,y:26.2},4).to({_off:true},1).wait(34).to({_off:false,scaleX:0.17,scaleY:0.15,rotation:56.4,x:45,y:8.1},0).to({scaleX:0.42,scaleY:0.42,rotation:0.5,x:28,y:26.2},4).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170).to({_off:false},0).to({scaleX:1.19,scaleY:1.19,y:33.2},6).wait(5).to({scaleX:1.19,scaleY:1.19,rotation:-13.3,x:32.7,y:33.9},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:13.6,x:26.3,y:32.4},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:-13.3,x:33.8,y:32.6},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:13.6,x:32.9,y:32},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:-13.3,x:33.6,y:32.4},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:13.6,x:32.5,y:32},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:-13.3,x:34.1,y:33.1},0).wait(2).to({scaleX:1.19,scaleY:1.19,rotation:0,x:32.7,y:32.8},0).to({_off:true},3).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(221).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,rotation:-15},4).wait(2).to({regX:28.7,regY:29.7,rotation:0,x:33,y:29.8},0).wait(1).to({rotation:15},0).wait(2).to({regX:28.8,rotation:0,x:33.1},0).wait(1).to({regX:28.6,regY:29.6,rotation:-15,x:32.9,y:29.7},0).wait(2).to({regX:28.7,regY:29.7,rotation:0,x:33,y:29.8},0).wait(1).to({rotation:15},0).wait(2).to({regX:28.8,rotation:0,x:33.1},0).wait(1).to({regX:28.6,regY:29.6,rotation:-15,x:32.9,y:29.7},0).wait(2).to({regX:28.7,regY:29.7,rotation:0,x:33,y:29.8},0).wait(4).to({regY:29.8,scaleX:0.33,scaleY:0.33},4).to({_off:true},1).wait(9));

	// card bottom
	this.instance_5 = new lib.cardstack();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32.5,32.7,0.364,0.364);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:34.1,y:33.2,alpha:1},2).to({_off:true},6).wait(32).to({_off:false,x:32.5,y:32.7,alpha:0},0).to({x:34.1,y:33.2,alpha:1},2).to({_off:true},6).wait(33).to({_off:false,x:32.5,y:32.7,alpha:0},0).to({x:34.1,y:33.2,alpha:1},2).to({_off:true},6).wait(31).to({_off:false,x:32.5,y:32.7,alpha:0},0).to({x:34.1,y:33.2,alpha:1},2).to({_off:true},6).wait(128));

	// background tint
	this.instance_6 = new lib.back1smalltint1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(31.7,31,1,1,0,0,0,32.6,31.9);

	this.instance_7 = new lib.back1smalltint2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(31.7,31,1,1,0,0,0,32.6,31.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.back1smalltint3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(31.7,31,1,1,0,0,0,32.6,31.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.back1smalltint4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(31.7,31,1,1,0,0,0,32.6,31.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({alpha:0},5).to({_off:true},19).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({_off:false},0).wait(16).to({alpha:0},6).to({_off:true},19).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).wait(16).to({alpha:0},5).to({_off:true},18).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({_off:false},0).wait(18).to({alpha:0},5).wait(113));

	// background
	this.instance_10 = new lib.back1small();
	this.instance_10.parent = this;
	this.instance_10.setTransform(41.9,40.1,1,1,0,0,0,41.9,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:true},38).wait(13).to({_off:false},0).to({_off:true},31).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,65.3,63.8);


// stage content:
(lib.CharacterButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(assets_bundles_engagement_primary_CharacterButton = assets_bundles_engagement_primary_CharacterButton||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var assets_bundles_engagement_primary_CharacterButton, images, createjs, ss, AdobeAn;