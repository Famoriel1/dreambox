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


(lib.NinesliceInfoBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinesliceInfoBackground, new cjs.Rectangle(0,0,80,80), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmRgGIFYkgIAGBtIHFgGIgCF3Im8gOIgNB9g");
	this.shape.setTransform(40.2,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,80.4,59.1), null);


(lib.circlebuttonhighlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578BB5").s().p("AjxECQgwhPgBhiQAAiMBkhjQBkhkCMAAQCMAABjBkIACABQgJAwgwAIIgBAAQhMhNhrAAQhqAAhNBNIAAAAQhNBMABBqQgBBLAmA8QgMArgpAAIgQgBg");
	this.shape.setTransform(29.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circlebuttonhighlight, new cjs.Rectangle(0,0,58.1,51.8), null);


(lib.circlebuttonglare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(160,221,255,0.149)").s().p("AjmA3QANhDA0g0IAAAAQBFhFBgAAQBhAABFBFQA1A0AMBDQhzBPh0AAQhzAAhzhPg");
	this.shape.setTransform(0,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circlebuttonglare, new cjs.Rectangle(-23.1,0,46.2,26.9), null);


(lib.ButtonBase_Disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgkAAgyIAAoYQAAgyAkgjQAjgkAyAAINJAAQAyAAAjAkQAjAjABAyIAAIYQgBAygjAkQgjAjgyABgAnnlOQgbAbAAAnIAAIYQAAAnAbAbQAcAcAnABINJAAQAngBAbgcQAbgaABgoIAAoYQgBgngbgbQgbgcgnAAItJAAQgnAAgcAcgAlvFQQg0AAgigpQgXgagCgiIgBgMIAAm2QADhCA5ggQAZgNAbAAILMAAQAvAAAgAhQAhAgAAAuIAAG2QABAwghAgQgYAZghAFIgLACIgMABgAnEkPQgTAZABAfIAAG2QgBAWAJATQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgPQAFgIADgJIACgKIACgVIAAm2QAAgwglgfQgdgXglAAIrMAAQg3ADgeArg");
	this.shape.setTransform(54.2,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// green
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AFmFGIrMAAQglABgegYIgIgIQggggAAgsIAAm2QABgbAMgXIAFgJQAhguA4gCILMAAIALABQAmAEAbAbIANARQATAagBAgIAAG2IgCAWQgFAfgYAXIgIAHIgIAGIgSALQgRAIgSAAIgHgBgAmAkzQgXAMgOAVQgSAYABAeIAAGdQABAlAWAaQAeAjAxAAIKZAAIAUgBIAJgCQAPgEAMgJIAPgNQAfgbgBgqIAAmdQAAgdgRgZQgggrg0gBIqZAAIgDAAQgYAAgVALg");
	this.shape_1.setTransform(53.3,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AlMExQgwAAgfgjQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQA1ABAfArQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_2.setTransform(52.8,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// lights
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnVFnQgIgCgHgFQgIgGgGgJQgCgDgBgFIgCgKIgDgIIAApcQAdgoAZgQQAbgRAbAFINfACQAVAHASAPQAHAUgLAVQgFAOgNADQgRAGgRgCItkJOQAMAVgMARQgEAFgHACIgSADQgKgBgKgDg");
	this.shape_3.setTransform(51.9,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// blue
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AmkF4QgsAAgfggQgggfAAgtIAAoYQAAgsAgggQAfgfAsAAINJAAQAtAAAfAfQAfAgAAAsIAAIYQAAAtgfAfQgfAggtAAg");
	this.shape_4.setTransform(54.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonBase_Disabled, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.ButtonUpBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#346195").s().p("AFnFCIrMAAIgKAAIgUgEQgOgEgMgIQgagTgOgcQgIgTABgVIAAm2QgBgfASgZQAfgsA3gCILMAAQAlAAAcAXQAmAeAAAxIAAG2IgDAVIgCAKQgDAJgEAIQgIAPgKAKQgdAegqAAIgCAAgAmAkzQgWAMgPAVQgRAYAAAeIAAGdQABAlAWAaQAIAJAKAHQAaATAjAAIKZAAIAUgBIAKgCQAOgEAMgJIAPgNQAfgbgBgqIAAmdQABgdgSgZIgCgDQgfgogzgBIqZAAIgDAAQgYAAgVALg");
	this.shape.setTransform(53.2,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D87C9").s().p("AlMExQgjAAgagTQgJgHgJgJQgWgagBglIAAmdQAAgeARgYQAPgVAWgMQAWgLAaAAIKZAAQAzAAAfApIACADQASAZgBAdIAAGdQABAqgfAbIgPANQgMAJgOAEIgKACIgUABg");
	this.shape_1.setTransform(52.8,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C2F4C").s().p("AmkGGQgygBgjgjQgkgkAAgyIAAoYQAAgyAkgjQAjgkAyAAINJAAQAyAAAjAkQAjAjABAyIAAIYQgBAygjAkQgjAjgyABgAnnlOQgbAbAAAnIAAIYQAAAnAbAbQAJAJAJAGQAWANAbABINJAAQAngBAbgcQAbgaABgoIAAoYQgBgngbgbIgDgEQgbgYgkAAItJAAQgnAAgcAcgAlvFQQgpgBgegZQgIgGgHgJQgXgagCgiIgBgMIAAm2QADhCA5ggQAZgNAbAAILMAAQAvAAAgAhIAFAEQAcAfAAArIAAG2QABAwghAgQgYAZghAFIgLACIgMABgAnEkPQgTAZABAfIAAG2QgBAWAJATQANAcAaASQAMAJAPADIATAFIAKAAILMAAQAsABAdggQAKgKAIgPQAFgIADgJIACgKIACgVIAAm2QAAgwglgfQgdgXglAAIrMAAQg3ADgeArg");
	this.shape_2.setTransform(54.2,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AnXFWQgbgbAAgnIAAoZQAAgnAbgbQAbgcAoAAINIAAQAlAAAaAYQABAOgHAOQgFAOgNADQgNAEgOAAIgEgEQghghguAAIrMAAQgcAAgYANQg5AhgDBCIAAG2IABAMQACAhAWAaQAHAJAIAGQAFAQgJANQgEAFgHACIgQADQgJgGgIgIg");
	this.shape_3.setTransform(52.6,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("Am6FfQgcgBgVgNIAPgDQAHgCAEgFQAKgNgFgQQAdAaAqAAILMAAIAMgBIALgBQAhgGAXgYQAhghAAgvIAAm2QgBgsgbgfQANAAANgEQANgDAFgOQAHgOAAgOIADAEQAbAbAAAnIAAIZQAAAngbAbQgbAbgoABg");
	this.shape_4.setTransform(56.4,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonUpBlue, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.CircleBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inner
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#142C44").s().p("AioCpQhHhGAAhjQAAhiBHhGIAAAAQBHhHBhAAQBjAABHBHQBGBGAABiQAABjhGBGQhHBHhjAAQhhAAhHhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// inner padding
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#142C44").s().p("Ai3C4QhMhNAAhrQAAhqBMhMIAAgBQBNhMBqAAQBsAABMBMQBMBNAABqQAABrhMBNQhMBMhsAAQhqAAhNhMgAioioIAAAAQhHBGAABiQAABjBHBGQBHBHBhAAQBjAABHhHQBGhGAAhjQAAhihGhGQhHhHhjAAQhhAAhHBHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// glare
	this.instance = new lib.circlebuttonhighlight();
	this.instance.parent = this;
	this.instance.setTransform(-4.9,-8.1,1,1,0,0,0,29.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#142C44").ss(2,0,1).p("AD3j3QBnBnAACQQAACRhnBmQhmBniRAAQiQAAhnhnQhmhmAAiRQAAiQBmhnQBnhmCQAAQCRAABmBmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E6485").s().p("Aj3D3QhmhmAAiRQAAiQBmhnQBohmCPAAQCRAABmBmQBnBnAACQQAACRhnBmQhmBniRAAQiPAAhohng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CircleBase, new cjs.Rectangle(-36,-36,72,72), null);


(lib.ButtonDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.ButtonBase_Disabled();
	this.instance.parent = this;
	this.instance.setTransform(54.1,39,1,1,0,0,0,54.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonDisabled, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.ButtonBack_Disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AlBgFIALgJIEDjYIAGgFIADA+IACAZIFigEIAIAAIgDErIligLIgKBkg");
	this.shape.setTransform(50.7,39.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.ButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(54.1,38.9,1,1,0,0,0,54.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonBack_Disabled, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.ButtonBack_Blue_Over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AmkGGQgygBgjgjQgkgkAAgyIAAoYQAAgyAkgjQAjgkAyAAINJAAQAyAAAjAkQAjAjABAyIAAIYQgBAygjAkQgjAjgyABg");
	this.shape.setTransform(54.2,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 87
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,39.7,0.8,0.8,0,0,0,-23.6,29.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,37.2,0.8,0.8,0,0,0,-23.7,29.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 52, 97, 149, 0)];
	this.instance_1.cache(-2,-2,84,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.ButtonUpBlue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.1,39,1,1,0,0,0,54.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonBack_Blue_Over, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.ButtonBack_Blue_Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AmkGGQgygBgjgjQgkgkAAgyIAAoYQAAgyAkgjQAjgkAyAAINJAAQAyAAAjAkQAjAjABAyIAAIYQgBAygjAkQgjAjgyABg");
	this.shape.setTransform(54.2,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 87
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,39.7,0.8,0.8,0,0,0,-23.6,29.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,37.2,0.8,0.8,0,0,0,-23.7,29.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 52, 97, 149, 0)];
	this.instance_1.cache(-2,-2,84,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.ButtonUpBlue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.1,39,1,1,0,0,0,54.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonBack_Blue_Down, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.ButtonBack_Blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 87
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,39.7,0.8,0.8,0,0,0,-23.6,29.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,37.2,0.8,0.8,0,0,0,-23.7,29.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 52, 97, 149, 0)];
	this.instance_1.cache(-2,-2,84,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.ButtonUpBlue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.1,39,1,1,0,0,0,54.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonBack_Blue, new cjs.Rectangle(0,0,108.4,77.9), null);


(lib.DBLAInfoIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glare
	this.instance = new lib.circlebuttonglare();
	this.instance.parent = this;
	this.instance.setTransform(35,25,1,1,0,0,0,0,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// i
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62A3BC").s().p("AgwCBIgChAIgBhAQAAgeACgZIBbgaQgFAUgGAfIgMBBIgKBFIgJA7IgwARQABgWgBgegAgXhZQgNgBgGgHQgJgMABgMQABgNAJgOQANgSAQgHQAPgIAPABQAPAAAIAHQALALgBARQAAARgTARQgNALgQAGQgMAFgLAAIgEAAg");
	this.shape.setTransform(35.4,35.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// base
	this.instance_1 = new lib.CircleBase();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLAInfoIcon, new cjs.Rectangle(-1,-1,72,72), null);


(lib.DBLAInfoBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.nineslice_45_35_80_80 = new lib.NinesliceInfoBackground();
	this.nineslice_45_35_80_80.parent = this;
	this.nineslice_45_35_80_80.setTransform(85,75,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_45_35_80_80).wait(1));

	// rect
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63A5C3").s().p("ArILpQh4AAADhgIAA0SQgDhfB4AAIWSAAQB3AAgDBfIAAUSQADBgh3AAgAsBqJIAAUSQAEAkA1AAIWSAAQA0AAAEgkIAA0SQgEgjg0AAI2SAAQg1AAgEAjg");
	this.shape.setTransform(83,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04376D").s().p("ArIKtQg1AAgEgkIAA0SQAEgjA1AAIWSAAQA0AAAEAjIAAUSQgEAkg0AAg");
	this.shape_1.setTransform(83,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.459)").s().p("ArILLQhXAAAAhBIAA0TQAAhBBXAAIWSAAQBWAAAABBIAAUTQAABBhWAAg");
	this.shape_2.setTransform(93,85.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLAInfoBackground, new cjs.Rectangle(0,0,173,157), null);


(lib.DBLAButtonBack_Blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Up:0,Over:5,Down:10,Disabled:15});

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
	this.instance = new lib.ButtonBack_Blue();
	this.instance.parent = this;
	this.instance.setTransform(-51.4,0.1,1,1,0,0,0,2.7,39);

	this.instance_1 = new lib.ButtonBack_Blue_Over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.4,0.1,1,1,0,0,0,2.7,39);

	this.instance_2 = new lib.ButtonBack_Blue_Down();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.4,0.1,1,1,0,0,0,2.7,39);

	this.instance_3 = new lib.ButtonBack_Disabled();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-51.4,0.1,1,1,0,0,0,2.7,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-38.9,108.4,77.9);


// stage content:
(lib.Info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DBLAInfoBackground();
	this.instance.parent = this;
	this.instance.setTransform(253.6,192.6,1,1,0,0,0,101,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(427.6,304.6,173,157);
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




})(assets_bundles_engagement_primary_Info = assets_bundles_engagement_primary_Info||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var assets_bundles_engagement_primary_Info, images, createjs, ss, AdobeAn;