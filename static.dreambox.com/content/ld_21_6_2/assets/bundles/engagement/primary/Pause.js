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


(lib.NineslicePausedBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.NineslicePausedBackground, new cjs.Rectangle(0,0,80,80), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar+bZQAIhdBywLQA4n4AYjrQgagKghAIQgsAKhDAwQg0Avg5BFIibC7QAnBWBhBIQALAJCNBWQAsAbALAQQALAOgEAQIAAAAQgcBmhCBRQhJBahcAeQAthLAohNQAnhOAMgSQhCAugvgTQAFgCBbhBQApgdAngDIgNgGQirhYgZgPQhyhMhGhzQAshMBSidQA2hZBFhLIgIgLQAYggAcgiQhRh8gyiVQAUCAAZB9Qh4i+gWjGQgOiZAqjsIABgIQhAChgUCRQgYCwAbDfQiykyBhnEQAoi3BQiiQAshXAug/QBqiiCNhEQCNhDDrADQDiAEBiAmQBuApAqBpIAXgCQAuAMAmBHQAjBIAKA3QAEAZgCANQAdAxAFAXQAJAxgDAiQgHBihBBSQANDiA6C8QBND1CBBxQgugFg6geQhtg6gjh0QgSDSgRBAQgdBzhXBzQAch2ADhYQADhEgPhvQgxCagPAZQglBKhGBEQAiAkA6A+QB6CBAZANQB1iBCNhfQCjhwB8h0IADgJQAYghAngNQArgNAighQAABAhPArQBZAoA3AIIBvACQBJgEAdggQAWAigVAbQgLAOg1AkQgpAQgNADQghAIg0ABQhMADhKgnQgwgdgWgbQh8BmiqCiQikCchXA7QiAg6hRhCIhwhpIgIAJQhHg2gxgaQAiFLBMHgQCAMxBZDOQjNBWjNAIIgwABQjuAAiuhzg");
	this.shape.setTransform(120.4,186.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,240.9,373.6), null);


(lib.DBLAPauseTitle_es = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvFKIACgaQgWAPgdAKQgdAKgcABQgjgBgSgPQgRgPgGgUQgFgUABgRIABhjIADhoIAChgIgBhDIgBhHIAAg7IAaADIAgABIAbgBIAVgCIgEDFIgCB9IgBBFIAAA7QAAAWAIAGQAHAGAJgBQAKAAANgGQAOgGANgJQAIgFACgGQACgGAAgMIAAgXIAAgeIABh7IABinIAAguIgCgsIAeABIAYABIAegBIAZgCIgCBKIgCBmIgDBxIgBBvIgBBbIAABqIgfABIgpACQgTABgPACIADgdgAMeFbIgTgBIgdAAIghACIABgLIABgRIAAgNQggASgZAIQgZAIgXAAQggABgUgWQgWgVgBgvIABgcIACgjIADggQACgeALgZQAKgaAZgTQAZgTAtgMIA5gQQAAglgDghQgDgigEgeQgCgOgDgHQgDgHgFAAQgKABgIAVQgJAVgGAfQgGAggEAfIgtgFQgVgDgdAAQAFg8ARgzQAPgzAegfQAegfAtgBQAlAAAWASQAWASALAeQALAfAFAlQADAcADAoIAEBTIADBRIABA+IAAA7IgBBuIgYgCgAKyBuQgZAJgJAPQgJAQgCAYIgBAbIgBAVQAAAMAEAFQAFAEAHAAQAKAAAQgHQARgHATgLIAAh2gAjkFbIgSgBIgdAAIghACIABgLIABgRIAAgNQggASgZAIQgZAIgXAAQggABgUgWQgWgVgBgvIABgcIACgjIADggQACgeALgZQAKgaAZgTQAYgTAugMIA5gQQAAglgDghQgDgigEgeQgCgOgDgHQgDgHgFAAQgKABgIAVQgJAVgGAfQgGAggEAfIgtgFQgVgDgdAAQAFg8ARgzQAPgzAegfQAegfAtgBQAlAAAWASQAWASALAeQALAfAFAlQADAcADAoIAEBTIADBRIABA+IAAA7IgBBuIgZgCgAlPBuQgZAJgJAPQgJAQgCAYIgBAbIgBAVQAAAMAEAFQAFAEAHAAQAKAAAQgHQARgHATgLIAAh2gAE+FOQgSgHgOgNQgWgSgQgfQgPgfgJgmQgIglAAgmIAPACIAYABIAhgCQAQgBAMgCQACAkAGAbQAFAcAJATQADAHAEAEQAEADAFAAQAEAAAFgDQAEgDADgGQAIgQAFgWQAGgVADgWQACgWAAgPQABgJgEgHQgDgHgOgCIhcgOQgigEgQgTQgRgSAAgkQAAgvAMg1QANg0AfgtQAPgVAWgOQAVgNAYAAQAUAAASAHQATAHAQAPQAhAeAPAtQAPAsACA6IgVAAIgaABIgcACIgXAEQgDgkgFgYQgGgXgJgWQgEgHgEgEQgEgEgDAAQgFABgEAEIgHALQgNAagGAeQgFAdAAAWQgBAIAFAHQADAHANACIBaANQAoAGARATQARATAAAiQgBBGgTA7QgUA8gjAjQgRAQgTAJQgSAJgRAAQgSAAgRgHgAs0EuIAAgzIABg7IAAhpIAAh8IAAiAIABhwIAAhRQAhAAAoACQApACApAFQA8AIAgAXQAgAXAMAjQAMAkgBAsIAAAhIgBAyIgCA1IgCAmQgEAogQAaQgQAagZAQQgZAQgfAKIgmANIgmALIABA3IAAAzIgBAoIgBAgIgdAAIgpABQgWABgOACIABgggArJA3IAbgHQAOgEAKgFQARgIAJgLQAIgMACgVQACgNABgbIAAg6IAAgyQABgggHgYQgHgYgZgLQgKgDgPgCIgbgCg");
	this.shape.setTransform(93.1,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003399").ss(7,0,0,3).p("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");
	this.shape_1.setTransform(92.7,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AAsFZIACgbQgXAQgdAKQgfALgeAAQgkgBgTgPQgRgQgGgVQgGgVABgRIABhoIAEhtIABhkIAAhFIgBhLIgBg9IAbADIAiABIAcgBIAWgCIgEDNIgCCDIgBBIIAAA+QAAAWAIAHQAHAGAKgBQAKAAANgGQAPgGAOgKQAIgFACgGQACgGAAgNIABgZIAAgeIABiBIABiuIAAgwIgCguIAfABIAaABIAegBIAagCIgCBNIgDBqIgBB2IgCB0IgBBfIAABvIghABIgpACIgkADIACgegAMnFrIgUgBIgeAAIghABIAAgLIABgRIAAgOQghATgbAIQgaAJgYAAQggABgWgXQgXgWgBgxIABgeIACgkIADgiQADgfALgbQAKgaAagUQAagUAwgNIA7gQIgDhKQgDgjgEgfQgCgPgEgHQgDgHgFAAQgLABgIAWQgJAWgGAgQgHAhgEAgIgugFQgXgDgeAAQAFg+ARg1QARg2AfggQAfghAwgBQAmABAXASQAXATALAfQAMAgAFAnQAEAdACAqIAFBXIACBVIABBBIAAA9IgBByIgZgBgAK3BzQgbAJgJAQQgJARgCAZIgCAcIgBAWQAAANAGAFQAEAFAHAAQAKgBASgIQARgHAUgLIAAh7gAjpFrIgUgBIgeAAIgiABIAAgLIABgRIABgOQgiATgaAIQgaAJgYAAQghABgWgXQgWgWgBgxIABgeIABgkIADgiQADgfALgbQALgaAagUQAZgUAwgNIA8gQIgDhKQgDgjgFgfQgCgPgDgHQgEgHgFAAQgKABgJAWQgJAWgGAgQgGAhgEAgIgvgFQgWgDgfAAQAGg+ARg1QARg2AfggQAfghAvgBQAmABAXASQAXATAMAfQAMAgAEAnQAEAdADAqIAEBXIADBVIABBBIAAA9IgBByIgZgBgAlZBzQgbAJgJAQQgKARgBAZIgDAcIAAAWQAAANAFAFQAFAFAHAAQAKgBARgIQASgHAUgLIAAh7gAFBFeQgSgIgPgNQgYgUgQggQgQgggJgnQgIgoAAgnIAQABIAYABIAigBQASgBAMgCQADAlAFAdQAGAdAIAUIAIALQAEAEAFAAQAFAAAEgEQAFgDADgHQAIgQAGgXQAGgWADgXQADgXAAgQQAAgJgEgIQgDgGgOgCIhhgPQgigFgSgTQgRgUAAglQgBgxANg3QANg3AhgvQAQgVAXgPQAWgNAYgBQAVAAATAIQAUAHARAPQAiAgAQAvQAQAuACA8IgWAAIgcABIgdADQgQACgHACQgEgmgFgZQgGgYgKgXQgDgIgFgDQgEgEgEAAQgFAAgDAFIgIALQgOAcgGAeQgFAfAAAXQgBAIAFAIQAEAHANACIBeANQApAGASAVQASAUAAAjQgBBJgUA+QgVA+gkAlQgSARgUAJQgTAKgSAAQgSAAgSgHgAs/E8IABg1IABg+IAAhuIAAiCIAAiFIABh1IAAhVQAiAAAqADQAqACArAFQA/AIAiAYQAhAZAMAkQANAlgBAuIAAAiIgBA2IgCA3IgCAoQgEApgRAbQgRAbgaARQgaARghAKIgnANQgTAHgVAFIABA5IAAA1IgBAqIgBAiIgfAAIgqACQgXAAgPACIABghgArPA6IAdgIQAOgEAKgFQASgIAJgMQAJgMACgWQACgOAAgcIABg9IAAg0QABghgHgZQgHgZgbgMQgKgDgPgCIgdgCg");
	this.shape_2.setTransform(92.8,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6699CC").ss(16,1,1).p("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");
	this.shape_3.setTransform(92.8,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AAsFZIACgbQgXAQgdAKQgfALgeAAQgkgBgTgPQgRgQgGgVQgGgVABgRIABhoIAEhtIABhkIAAhFIgBhLIgBg9IAbADIAiABIAcgBIAWgCIgEDNIgCCDIgBBIIAAA+QAAAWAIAHQAHAGAKgBQAKAAANgGQAPgGAOgKQAIgFACgGQACgGAAgNIABgZIAAgeIABiBIABiuIAAgwIgCguIAfABIAaABIAegBIAagCIgCBNIgDBqIgBB2IgCB0IgBBfIAABvIghABIgpACIgkADIACgegAMnFrIgUgBIgeAAIghABIAAgLIABgRIAAgOQghATgbAIQgaAJgYAAQggABgWgXQgXgWgBgxIABgeIACgkIADgiQADgfALgbQAKgaAagUQAagUAwgNIA7gQIgDhKQgDgjgEgfQgCgPgEgHQgDgHgFAAQgLABgIAWQgJAWgGAgQgHAhgEAgIgugFQgXgDgeAAQAFg+ARg1QARg2AfggQAfghAwgBQAmABAXASQAXATALAfQAMAgAFAnQAEAdACAqIAFBXIACBVIABBBIAAA9IgBByIgZgBgAK3BzQgbAJgJAQQgJARgCAZIgCAcIgBAWQAAANAGAFQAEAFAHAAQAKgBASgIQARgHAUgLIAAh7gAjpFrIgUgBIgeAAIgiABIAAgLIABgRIABgOQgiATgaAIQgaAJgYAAQghABgWgXQgWgWgBgxIABgeIABgkIADgiQADgfALgbQALgaAagUQAZgUAwgNIA8gQIgDhKQgDgjgFgfQgCgPgDgHQgEgHgFAAQgKABgJAWQgJAWgGAgQgGAhgEAgIgvgFQgWgDgfAAQAGg+ARg1QARg2AfggQAfghAvgBQAmABAXASQAXATAMAfQAMAgAEAnQAEAdADAqIAEBXIADBVIABBBIAAA9IgBByIgZgBgAlZBzQgbAJgJAQQgKARgBAZIgDAcIAAAWQAAANAFAFQAFAFAHAAQAKgBARgIQASgHAUgLIAAh7gAFBFeQgSgIgPgNQgYgUgQggQgQgggJgnQgIgoAAgnIAQABIAYABIAigBQASgBAMgCQADAlAFAdQAGAdAIAUIAIALQAEAEAFAAQAFAAAEgEQAFgDADgHQAIgQAGgXQAGgWADgXQADgXAAgQQAAgJgEgIQgDgGgOgCIhhgPQgigFgSgTQgRgUAAglQgBgxANg3QANg3AhgvQAQgVAXgPQAWgNAYgBQAVAAATAIQAUAHARAPQAiAgAQAvQAQAuACA8IgWAAIgcABIgdADQgQACgHACQgEgmgFgZQgGgYgKgXQgDgIgFgDQgEgEgEAAQgFAAgDAFIgIALQgOAcgGAeQgFAfAAAXQgBAIAFAIQAEAHANACIBeANQApAGASAVQASAUAAAjQgBBJgUA+QgVA+gkAlQgSARgUAJQgTAKgSAAQgSAAgSgHgAs/E8IABg1IABg+IAAhuIAAiCIAAiFIABh1IAAhVQAiAAAqADQAqACArAFQA/AIAiAYQAhAZAMAkQANAlgBAuIAAAiIgBA2IgCA3IgCAoQgEApgRAbQgRAbgaARQgaARghAKIgnANQgTAHgVAFIABA5IAAA1IgBAqIgBAiIgfAAIgqACQgXAAgPACIABghgArPA6IAdgIQAOgEAKgFQASgIAJgMQAJgMACgWQACgOAAgcIABg9IAAg0QABghgHgZQgHgZgbgMQgKgDgPgCIgdgCg");
	this.shape_4.setTransform(92.8,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLAPauseTitle_es, new cjs.Rectangle(1.5,4.4,182.7,90.9), null);


(lib.DBLAPauseTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGF1IACgbQgXAQgfALQgfAKgeABQglgBgTgQQgSgQgGgVQgGgVABgRQAAgyACg3IADhuIAChmIgBhGIgBhLIgBg+IAcADIAiABIAcgBIAXgCIgEDPIgDCFIAABJIAAA+QAAAWAIAHQAIAGAJAAQAKAAAOgHQAQgGAOgJQAHgFADgHQACgGAAgNIAAgZIABgfIABiCIAAiwIAAgxIgBguIAgABIAZABIAfgBIAagCIgCBOIgDBrIgCB4IgBB0IgBBhIAABwIghABIgrACQgVABgPACIADgfgAOOF5IAAggQgWASgbAMQgcAOgcAAQgjAAgUgUQgVgUgIgkQgJgkABguIAAhOQACgyAEhCQAEhAAJhGQAJg9AdgeQAdgdA2gJIAagFIAcgDQAGgBAEgDQADgDAAgIIgBhIIgChKIAygCIBAgGIgCBZIgCB+IgECTIgCCTIgCCGIgBBlIgBAyQgmABgYACQgYACgWAEIABgXgAN8iJQgNAEgNAGQgMAGgGALQgFALgCAQQgHAtgEAzIgFBkIgCBTIAAAOIABAPQACAjAEAMQAFAKAKgBQAKAAAOgIQANgJAPgMQAKgIACgHQADgIAAgJIABg2IADhNIAChMIABgwIAAgaIAAghIgBgeQAAgGgBgFQgDgEgEAAQgGAAgMACgAmeGHIgUgBIgfABIgiABIABgLIAAgSIABgNQgiASgaAJQgbAJgYAAQghAAgWgXQgXgWgBgxIABgfIACgkIADgiQADggALgbQALgaAagVQAZgUAxgNIA8gQIgDhLQgDgjgFggQgCgPgDgHQgEgHgEAAQgLABgJAWQgJAWgGAhQgHAhgDAgIgwgFQgXgDgeAAQAGg+AQg2QASg2AfghQAfghAwgBQAnABAXATQAXATAMAfQAMAgAFAoQADAdAEAqIADBYIADBWIABBBIAAA+IgBB0IgZgCgAoPCNQgbAKgKAQQgKAQAAAaIgDAcIgBAWQABANAFAFQAEAFAHAAQALAAARgIQASgIAUgLIAAh8gAGYE1QgnhNAAiZQAAhfAQhHQAQhHAignQAignA0gBQApABAcAWQAdAXARAmQASAmAHAwQAJAwgBAzIAAAcIgBAbIjDALQACBVANAxQAOAxAQABQAPAAANgjQAOgjAGhJQAYABAZgDQAZgDAcgHQgEBagVA5QgWA5ggAcQghAbgoAAQhEAAgohNgAIJiGQgRAAgNApQgMAogFBLIBagJQgChMgNgkQgOgjgOAAIAAAAgACMF6QgSgHgOgOQgZgUgQggQgRghgIgnQgJgoAAgoIAQACIAZABIAjgCQARgBAMgCQADAmAFAdQAHAdAIAUIAIALQAEAEAGAAQAEAAAFgDQADgEAEgGQAJgQAGgYQAFgWADgYQADgWAAgRQAAgJgDgIQgEgHgOgBIhigPQgjgFgRgUQgSgTAAgnQAAgxANg3QANg3AhgwQAQgWAXgOQAXgOAYgBQAVAAAUAIQATAIASAPQAiAfARAwQAQAvACA9IgXAAIgcABIgdADQgQABgIADQgDgngGgZQgGgYgKgYQgEgIgEgDQgEgEgEAAQgFABgDAEQgEAFgEAGQgOAcgGAfQgFAfAAAXQgBAIAEAHQAEAIANACIBgAOQApAGATAVQASAUAAAkQgBBKgVA+QgVA/gkAmQgTARgTAJQgUAKgSAAQgSAAgTgIgAwFFYIABg2IAAg+IAAhvIABiDIAAiHIAAh2IAAhWQAjAAAqADQArACAsAFQA/AIAiAZQAiAYANAlQAMAmAAAuIgBAiIgBA2IgCA4IgCAnQgEArgSAcQgQAbgbARQgaARghALIgoANQgTAGgVAFIABA6IAAA2IgBAqIgBAiIggABIgqABQgXABgQACIACgigAuUBUIAdgJQAPgDAKgFQASgJAJgMQAJgMABgYQACgMABgdIABg9IAAg1QABghgHgaQgIgZgagMQgLgDgPgCIgdgCg");
	this.shape.setTransform(111.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003399").ss(7,0,0,3).p("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");
	this.shape_1.setTransform(111.7,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AiRFyIACgbQgYAPgdALQgfAKgeABQgkgBgTgPQgRgQgHgVQgFgWABgQIABhoIADhtIAChkIgBhGIAAhKIgBg9IAbACIAiABIAcgBIAWgCIgEDOIgCCDIgBBIIAAA+QAAAWAIAHQAHAFAKAAQAKAAAOgGQAPgHANgJQAJgFABgGQADgHAAgMIABgZIAAgfIABiBIABitIAAgxIgCguIAfACIAZAAIAfgBIAZgBIgCBNIgCBpIgBB3IgDBzIAABgIAABvIghAAIgqADIgkACIADgdgAOHF1IAAgfQgVARgbANQgcANgbAAQgkAAgUgUQgUgUgIgjQgJgkAAgtIABhNQACgyAEhBQAEhAAJhEQAIg9AegdQAdgeA1gIIAagFIAcgEQAGAAADgEQADgDgBgHIAAhIIgChJIAxgCQAfgBAhgFIgCBYIgCB9IgECRIgCCSIgCCFIgBBjIgBAzQglAAgYACQgZACgUAEIAAgXgAN2iHQgNADgNAHQgNAFgFALQgGALgBAQQgGAsgFAzIgFBjIgBBSIAAAPIABAOQABAjAEALQAGALAJgBQAKgBAOgIQANgJAPgMQAJgHADgHQACgIAAgJIACg1IAChNIAChLIABgvIAAgaIAAghIgBgdQAAgGgBgFQgCgEgFgBQgGABgLACgAmoGEIgUgBIgdAAIgiABIAAgLIABgRIAAgOQghASgaAJQgaAJgZAAQggABgWgXQgWgXgCgwIACgeIABglIADghQADgfALgbQALgbAagUQAZgTAwgNIA7gQIgDhKQgDgjgEgfQgCgQgDgGQgEgIgFABQgLABgIAVQgJAWgGAhQgGAhgEAfIgvgFQgXgDgeAAQAGg+AQg0QARg2AgghQAeggAwgBQAmABAXASQAXATAMAfQAMAgAEAnQAEAdACAqIAFBXIACBUIABBBIAAA9IgBBzIgZgBgAoYCMQgaAJgJAQQgKARgBAZIgDAcIgBAVQAAAOAGAEQAFAFAGABQALgBARgIQARgHAVgLIAAh7gAGSEyQgnhMgBiYQAAheARhGQAQhGAhgnQAhgnA0AAQAoAAAcAWQAdAXARAmQARAlAIAwQAIAvAAAzIAAAbIgCAbIjAALQACBUANAxQANAwAQACQAPgBANgiQANgjAHhIQAYAAAYgCQAZgDAcgHQgFBZgUA4QgWA5ggAbQggAbgoAAQhDAAgnhMgAIBiEQgRAAgNAoQgMAngEBLIBZgJQgChMgNgiQgOgkgOAAIAAABgACCF2QgRgHgPgNQgYgUgQggQgRghgIgnQgJgnAAgoIAQACIAZABIAigBQARgBANgDQADAlAFAeQAGAdAIATIAIALQAEAFAFAAQAFAAAEgEQAEgDAEgHQAIgQAGgXQAFgXAEgWQACgXAAgQQAAgJgDgIQgDgGgOgCIhhgQQgigEgSgUQgSgTAAgmQAAgxANg2QANg3AhgvQAPgVAXgPQAXgNAYgBQAVAAATAHQATAIASAPQAiAgAQAvQAQAuABA8IgVAAIgcABIgdADQgQACgHACQgEgmgFgZQgGgYgKgXQgEgIgEgDQgFgFgDAAQgFABgEAFIgHALQgOAcgGAeQgGAfABAXQgBAIAEAGQAFAIAMACIBfAOQApAGASAVQASATgBAkQAABJgUA+QgVA+glAlQgSARgTAJQgUAKgRAAQgSAAgTgIgAv9FUIABg0IAAg+IAAhvIABiBIAAiFIAAh2IAAhUQAjAAAqACQAqADArAFQA/AIAhAYQAiAZAMAkQAMAlAAAuIgBAiIgBA1IgBA3IgCAoQgFAqgRAbQgQAbgaAQQgbARggALIgnANQgTAHgWAFIABA5IAAA1IAAAqIgCAiIgeAAIgrACQgWAAgPACIABgigAuOBTIAegIQAOgEAKgFQASgIAJgMQAIgMADgXQABgNABgdIABg9IAAgzQABghgIgaQgGgZgcgLQgJgEgPgBIgegDg");
	this.shape_2.setTransform(111.7,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// stroke2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6699CC").ss(16,1,1).p("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");
	this.shape_3.setTransform(111.7,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AiRFyIACgbQgYAPgdALQgfAKgeABQgkgBgTgPQgRgQgHgVQgFgWABgQIABhoIADhtIAChkIgBhGIAAhKIgBg9IAbACIAiABIAcgBIAWgCIgEDOIgCCDIgBBIIAAA+QAAAWAIAHQAHAFAKAAQAKAAAOgGQAPgHANgJQAJgFABgGQADgHAAgMIABgZIAAgfIABiBIABitIAAgxIgCguIAfACIAZAAIAfgBIAZgBIgCBNIgCBpIgBB3IgDBzIAABgIAABvIghAAIgqADIgkACIADgdgAOHF1IAAgfQgVARgbANQgcANgbAAQgkAAgUgUQgUgUgIgjQgJgkAAgtIABhNQACgyAEhBQAEhAAJhEQAIg9AegdQAdgeA1gIIAagFIAcgEQAGAAADgEQADgDgBgHIAAhIIgChJIAxgCQAfgBAhgFIgCBYIgCB9IgECRIgCCSIgCCFIgBBjIgBAzQglAAgYACQgZACgUAEIAAgXgAN2iHQgNADgNAHQgNAFgFALQgGALgBAQQgGAsgFAzIgFBjIgBBSIAAAPIABAOQABAjAEALQAGALAJgBQAKgBAOgIQANgJAPgMQAJgHADgHQACgIAAgJIACg1IAChNIAChLIABgvIAAgaIAAghIgBgdQAAgGgBgFQgCgEgFgBQgGABgLACgAmoGEIgUgBIgdAAIgiABIAAgLIABgRIAAgOQghASgaAJQgaAJgZAAQggABgWgXQgWgXgCgwIACgeIABglIADghQADgfALgbQALgbAagUQAZgTAwgNIA7gQIgDhKQgDgjgEgfQgCgQgDgGQgEgIgFABQgLABgIAVQgJAWgGAhQgGAhgEAfIgvgFQgXgDgeAAQAGg+AQg0QARg2AgghQAeggAwgBQAmABAXASQAXATAMAfQAMAgAEAnQAEAdACAqIAFBXIACBUIABBBIAAA9IgBBzIgZgBgAoYCMQgaAJgJAQQgKARgBAZIgDAcIgBAVQAAAOAGAEQAFAFAGABQALgBARgIQARgHAVgLIAAh7gAGSEyQgnhMgBiYQAAheARhGQAQhGAhgnQAhgnA0AAQAoAAAcAWQAdAXARAmQARAlAIAwQAIAvAAAzIAAAbIgCAbIjAALQACBUANAxQANAwAQACQAPgBANgiQANgjAHhIQAYAAAYgCQAZgDAcgHQgFBZgUA4QgWA5ggAbQggAbgoAAQhDAAgnhMgAIBiEQgRAAgNAoQgMAngEBLIBZgJQgChMgNgiQgOgkgOAAIAAABgACCF2QgRgHgPgNQgYgUgQggQgRghgIgnQgJgnAAgoIAQACIAZABIAigBQARgBANgDQADAlAFAeQAGAdAIATIAIALQAEAFAFAAQAFAAAEgEQAEgDAEgHQAIgQAGgXQAFgXAEgWQACgXAAgQQAAgJgDgIQgDgGgOgCIhhgQQgigEgSgUQgSgTAAgmQAAgxANg2QANg3AhgvQAPgVAXgPQAXgNAYgBQAVAAATAHQATAIASAPQAiAgAQAvQAQAuABA8IgVAAIgcABIgdADQgQACgHACQgEgmgFgZQgGgYgKgXQgEgIgEgDQgFgFgDAAQgFABgEAFIgHALQgOAcgGAeQgGAfABAXQgBAIAEAGQAFAIAMACIBfAOQApAGASAVQASATgBAkQAABJgUA+QgVA+glAlQgSARgTAJQgUAKgRAAQgSAAgTgIgAv9FUIABg0IAAg+IAAhvIABiBIAAiFIAAh2IAAhUQAjAAAqACQAqADArAFQA/AIAhAYQAiAZAMAkQAMAlAAAuIgBAiIgBA1IgBA3IgCAoQgFAqgRAbQgQAbgaAQQgbARggALIgnANQgTAHgWAFIABA5IAAA1IAAAqIgCAiIgeAAIgrACQgWAAgPACIABgigAuOBTIAegIQAOgEAKgFQASgIAJgMQAIgMADgXQABgNABgdIABg9IAAgzQABghgIgaQgGgZgcgLQgJgEgPgBIgegDg");
	this.shape_4.setTransform(111.7,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DBLAPauseTitle, new cjs.Rectangle(1.4,-1,220.7,95.9), null);


(lib.SCAPausedBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.nineslice_50_45_80_80 = new lib.NineslicePausedBackground();
	this.nineslice_50_45_80_80.parent = this;
	this.nineslice_50_45_80_80.setTransform(90,85,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_50_45_80_80).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("ALMMWI2XAAQgwAAgjgcQgegZgBgiIAA19QABgjAegYQAigcAxAAIWXAAQAxAAAiAcIAAAAQAeAYABAjIAAV9QgBAigeAZIAAAAQgiAcgvAAIgCAAg");
	this.shape.setTransform(89.6,85.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("ArLNYQhIgBg0gpIAAgBIgBAAQg3guAAhAIAA19QAAhBA4gtQAzgrBJAAIWXAAQBKAAAzArQA3AtAABBIAAV9QAABAg3AuQg0AqhJABgALMMWQAxAAAigcIAAAAQAegZABgiIAA19QgBgjgegYIAAAAQgigcgxAAI2XAAQgxAAgiAcQgeAYgBAjIAAV9QABAiAeAZQAjAcAwAAg");
	this.shape_1.setTransform(89.6,85.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.459)").s().p("ArLM3Qg9AAgrgjQgrgjAAgyIAA19QAAgyArgjQArgjA9AAIWXAAQA9AAArAjQArAjAAAyIAAV9QAAAygrAjQgrAjg9AAg");
	this.shape_2.setTransform(103.7,101);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.SCAPausedBackground, new cjs.Rectangle(0,0,190,183.3), null);


(lib.ClipGroup0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwLTsQguAAghghQggghAAguMAAAgj3QAAgvAgggQAhghAuAAMArSAAAQAvAAAhAhQAhAgAAAvMAAAAj3QAAAughAhQghAhgvAAg");
	mask.setTransform(184.8,126);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663433").s().p("AiGAKIhEgzIBhAIQBiAJAagCQA4gDCAgcQgYAXgsAiQhNA3grADIgJAAQg9AAhPgwg");
	this.shape.setTransform(184.4,109.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB6273").s().p("AgTBHQg0gQhIg+Ig9g7IGZgHQgnAwgqAiQhMBBgwAAQgKAAgJgDg");
	this.shape_1.setTransform(183.4,110.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6BCAB").s().p("AirBaIhFgfQgdgbgEggQgEgYALgiQAIgaAygRQAkgMAogGQApgGBSAfQBcAjAcABQBjAFAYAFQBBAOgmAsQhcBvizAAQhNAAhUgfg");
	this.shape_2.setTransform(179.7,107.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD8F81").s().p("AANAiQhIgFhfgfIhMgfQENAVDAgSQhJAqg3AOQgjAIgiAAIgVAAg");
	this.shape_3.setTransform(182.2,107.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4AE4E").s().p("AAABIQgFgEgEAAIgEAAQgIgbgGgaQgNg3ANgOQARgXAiAFIgFA1QgDA0AIANIALATQgVAJgJAAQgEAAgBgCg");
	this.shape_4.setTransform(114.8,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6BCAB").s().p("AAFBfQhEgUgcgsQgzhTArgpQArgpA5BAIB2C0IgHAAQg6AAgxgPg");
	this.shape_5.setTransform(101.9,94.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3086").s().p("AmzQXQAMh+BuvpQBouoAJiGIAGgCIAFgJIAfC3IC7AJQALgNAbidQARAPgCACQAKF0B9MaQCBMyBaDNQjPBWjNAIIgvABQjuAAiuhzg");
	this.shape_6.setTransform(163.8,288.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1EBEA").s().p("AB+CMQgPAFgTASQgTASgTAEQg3AJgtgZQgsgjgUgMQgkgXgsAKQg4AOhdBJIhXh8QBbiAB5hUIBUg3QAsgbAVgWQAlAwA9ARQBIAPBAgqQAoA3BYBiQBNBaA2BxIhjBfQiXhyg0AJg");
	this.shape_7.setTransform(153.6,195.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6BCAB").s().p("AgSDAQg9gQgmgxQASgSAQgcQAmhLAQg/QAPg8gDhOICCAfQhNDIAkA9IAtBEQgvAfgzAAQgTAAgSgEg");
	this.shape_8.setTransform(158.8,158.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4203B").s().p("AhjE/QgPidAuj1QhBCfgVCYQgYCsAbDiQiykyBhnCQAoi3BQiiQBMiaBVhNIDaAMQkrDJgFIVQgCD6BQGhQh3i/gVjFg");
	this.shape_9.setTransform(103.2,123.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4203B").s().p("Ao8CwQB4jfCshTQCMhDDrADQDiAFBjAlQBuApArBpQhiAWiWAwQirA3haAYQjLA0jGAAQh2AAh1gTg");
	this.shape_10.setTransform(153.7,50.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9A99C").s().p("AgyA3QgRgVADgiQADggAVgWQAVgXAaAAQAZAAATAXQARAXgDAfQgEAigTAVQgVAXgZAAQgaAAgUgXg");
	this.shape_11.setTransform(218.6,93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9A99C").s().p("AgyA7QgYgTgCgiQgDgfAVgYQAUgZAigCQAegDAaAWQAYAVABAgQACAegUAaQgXAZgfABIgFAAQgbAAgXgTg");
	this.shape_12.setTransform(136.1,97.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#827874").s().p("Ageg4QBCg+BJBJQhKgthOBTQgcAcgUAiIgRAeQAchfAygug");
	this.shape_13.setTransform(206.8,66.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#827874").s().p("ABDgHQiqhJhvAyQBdhDCCAoQBzAiBbBgQg/gthVgjg");
	this.shape_14.setTransform(139.6,67.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#28120E").s().p("AhLBPIgagKIBMgGQBPgWAVhQQgogLgtAUQhAAagbBJQAQheBFgqQBGgpAwA6QgYB8hbAKIgPABQgWAAgZgGg");
	this.shape_15.setTransform(213.6,75.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#327245").s().p("AgRA1QgNgDgkgZQAcg5AqgLIAxgLQAPAMgBAbQgBAMgKAiQgeAYgbAAQgIAAgIgCg");
	this.shape_16.setTransform(210.8,76);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#28120E").s().p("Aiwg0QB+hHBlA4QA3AgBABUQgug4hJgaQhVgehoAVQA2BfCIANQBDAHA6gNQg/AfhPACIgHAAQiUAAg4iRg");
	this.shape_17.setTransform(140.2,77.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#327245").s().p("Ag1AvQgdgPgOgfQgLgbAHgdQBggSBrBLQgkAjg5AWIgNABQgbAAgXgNg");
	this.shape_18.setTransform(141.5,76.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BCA999").s().p("AgGASQgkgHgSgZIAvAGQAyAEAYgOQgWAlgkAAIgJgBg");
	this.shape_19.setTransform(186.1,96.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AApBMQiCgChEh8QBqgvBZAqQA/AdA5BOQgxAYg/AAIgFAAg");
	this.shape_20.setTransform(142.2,78.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhBBCIgXgGQAehRA1gfQA0gfAqAjQgWBihPAPQgNADgOAAQgNAAgNgCg");
	this.shape_21.setTransform(212.3,76.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D6BCAB").s().p("AiOFxQl9hYhti8QgegxgIg7QgLhIAPhPQARhMArhDQE+A1ERgyQCmgfEphSQAvA4BOBwQBXCAAJApQAIAugCAkQgLCkizB5QhLAyjEBVQijgGjBgtg");
	this.shape_22.setTransform(162.8,90.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC9B85").s().p("AhjBFQgDhMgKhcIDhAbQgmA+gtBtg");
	this.shape_23.setTransform(167,131.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4203B").s().p("AAeBzQhfgQgkgWQgkgXAnhaIAwhXIAmgCQAtALAmBIQAjBFAKA5QAFAcgDAOQgsgEgsgHg");
	this.shape_24.setTransform(214.5,62.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4203B").s().p("ABILQQgUgMg7g0Qh0hkg7AWQgxgag7AIQgcADhHAXQg5ATgggBQgsgDgegqQjBkSgZmCQgTkqBTlPISzB6QgUGABcEkQBND1CBBxQgxgGg3gdQhvg7gihzQgSDTgRA/QgcByhXB0QAch6ADhUQABhJgOhqQgwCagPAZQg7BziKBlQgJAIgMAAQgRAAgYgPg");
	this.shape_25.setTransform(173.4,143.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D6BCAB").s().p("ACMGIQAOgQAOgaIgPgHQimhWgdgRQhzhNhFhyQAuhQBQiYQBYiRBzhhQAOAPAbAaIBGBAQhPAwhoB+IiaC6QAnBWBgBIQAOALCKBUQAsAaALARQAQAUgQAWQgeAjgqALQgIACgGAAQgUAAAbgig");
	this.shape_26.setTransform(109.4,238.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D0BAA6").s().p("AgsAIQAnhLALgUQhAAvgwgTIBhhEQA1gmA1AGIAhASQgcBlhDBRQhGBZhdAeQAthLAnhNg");
	this.shape_27.setTransform(119.1,289.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D0BAA6").s().p("AiLBeQg+glgVglIARg5QAYghAmgNQArgMAjgiQAABAhPArQBbAnA1AIIBuADQBJgEAdggQAWAigVAaQgLAOg1AkQgnAQgPAEQggAHg1ABIgKAAQhIAAhDgkg");
	this.shape_28.setTransform(295,190.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D6BCAB").s().p("Ak0CZIidiSIBQhtQARALB7CEQB2B/AdAOQB1iCCMhdQCmhzCAh4IANA4Qh+Bli9C0QijCchXA8QiBg6hQhCg");
	this.shape_29.setTransform(229.6,214.3);

	this.text = new cjs.Text("", "43px 'CCZoinks'");
	this.text.lineHeight = 56;
	this.text.parent = this;
	this.text.setTransform(114.6,62.6);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(201.3,222.9,1,1,0,0,0,120.4,186.8);
	this.instance.alpha = 0.379;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.text,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup0, new cjs.Rectangle(76.5,31.3,245.2,220.8), null);


(lib.SCAPauseStella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup0();
	this.instance.parent = this;
	this.instance.setTransform(109.3,196,1,1,0,0,0,188.3,204.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SCAPauseStella, new cjs.Rectangle(-9,-8.8,299.5,409.7), null);


// stage content:
(lib.Pause = function(mode,startPosition,loop) {
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




})(assets_bundles_engagement_primary_Pause = assets_bundles_engagement_primary_Pause||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var assets_bundles_engagement_primary_Pause, images, createjs, ss, AdobeAn;