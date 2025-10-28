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


(lib.NinesliceErrorBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinesliceErrorBackground, new cjs.Rectangle(0,0,80,80), null);


(lib.DBLAErrorBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.nineslice_50_45_80_80 = new lib.NinesliceErrorBackground();
	this.nineslice_50_45_80_80.parent = this;
	this.nineslice_50_45_80_80.setTransform(90,85,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_50_45_80_80).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699CC").s().p("ArtNYQhJgBg0gpIAAgBIAAAAQg4guABhAIAA19QgBhBA4gtQA0grBJAAIXcAAQBJAAAzArQA4AtgBBBIAAV9QABBAg4AuQg0ArhIAAgAtBr5QgeAYAAAjIAAV9QAAAiAfAZQAiAcAxAAIXcAAQAwAAAjgcIgBAAQAfgZAAgiIAA19QAAgjgegYIgBAAQgigcgwAAI3cAAIAAAAQgxAAgjAcg");
	this.shape.setTransform(89.7,82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("AtAL6QgfgZAAgiIAA19QAAgjAegYQAjgcAxAAIXcAAQAwAAAiAcIABAAQAeAYAAAjIAAV9QAAAigfAZIABAAQgjAcgwAAI3cAAIgCAAQgvAAgigcg");
	this.shape_1.setTransform(89.7,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.459)").s().p("ArtM3Qg9AAgrgjQgrgjAAgyIAA19QAAgxArgjQArgkA9AAIXbAAQA9AAArAkQArAjAAAxIAAV9QAAAygrAjQgrAjg9AAg");
	this.shape_2.setTransform(103.9,97.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLAErrorBackground, new cjs.Rectangle(-3.3,-3.3,196.9,183.3), null);


// stage content:
(lib.Error = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash7.ai
	this.instance = new lib.DBLAErrorBackground();
	this.instance.parent = this;
	this.instance.setTransform(271.2,203.1,1,1,0,0,0,95.2,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447.7,311.4,196.9,183.3);
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




})(assets_bundles_engagement_primary_Error = assets_bundles_engagement_primary_Error||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var assets_bundles_engagement_primary_Error, images, createjs, ss, AdobeAn;