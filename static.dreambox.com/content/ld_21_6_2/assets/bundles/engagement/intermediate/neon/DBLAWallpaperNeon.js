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


(lib.DBLAWallpaperNeon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhY5A8AMAAAhdLIAA60MCxzAAAMAAAB3/g");
	mask.setTransform(569,384);

	// diamonds_top
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("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");
	this.shape.setTransform(571.2768,404.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// diamonds_fade
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_accent_top_alpha_30")).s().p("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");
	this.shape_1.setTransform(571.2747,404.5334);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// clouds_1_overlay
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf([DBLColorManager.color("wallpaper_primary_4"),"rgba(105,41,175,0)"],[0,1],0,-76.1,0,76.2).s().p("EhfPAS1MAAAglpQC8AjCuBDQAqAQAqASQF1CjE3E3QD7D7CaEjQC8hJDaAAQDmAADFBRQBHhfBYhZQHUnTKVAAQKVAAHTHTQB7B8BbCHQCmgkC2AAQIAAAGGEkQAkAbAjAeQBcglBjgUQBxgWB6AAQB7AABxAWQA2ALAzAQIANgbQBpjaC5i5QGumtJfAAQJfAAGtGtQCjCiBlC9QDkiNEfAAQBeAABXAPQCRllEoknQIOoPLUgyIBOgDMAAAAkYg");
	this.shape_2.setTransform(550.625,705.675);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// clouds_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf([DBLColorManager.color("wallpaper_primary_3"),DBLColorManager.color("wallpaper_primary_1")],[0,1],0.1,-111.4,0.1,111.5).s().p("EhfPAS1MAAAglpQC8AjCuBDQAqAQAqASQF1CjE3E3QD7D7CaEjQC8hJDaAAQDmAADFBRQBHhfBYhZQHUnTKVAAQKVAAHTHTQB7B8BbCHQCmgkC2AAQIAAAGGEkQAkAbAjAeQBcglBjgUQBxgWB6AAQB7AABxAWQA2ALAzAQIANgbQBpjaC5i5QGumtJfAAQJfAAGtGtQCjCiBlC9QDkiNEfAAQBeAABXAPQCRllEoknQIOoPLUgyIBOgDMAAAAkYg");
	this.shape_3.setTransform(550.625,705.675);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// clouds_2_overlay
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf([DBLColorManager.color("wallpaper_primary_4"),"rgba(105,41,175,0)"],[0,1],-6.1,-255,-6.1,-7).s().p("EAvtAT4QksksAAmoQAAicAoiMQBGjuC+i9QEsksGoAAQCoAACVAvQAgj7C7i7QDjjiFAAAQFAAADiDiQDiDjAAFAQAAE/jiDiIgcAaQjaDIksAAQggAAgfgCQAEAwAAAyQAAGoksEsQksEsmoAAQmoAAksksgEhA4AR7QhVhVg+hgQi+BljoAAQl5AAkLkKQjojpgek8QgEguAAgxQAAl4EKkKQELkLF5AAQF5AAEKELQAhAhAdAjQEBi4FMAAQFuAAESDfQgZCIAACSQAAC2AnCmQBKE/DYEFQhMCsiPCPQksEtmpAAQmoAAktktgEglMAOyQg3g4gwg6QBRi8AAjdQAAhYgNhTQgxk7jujuQgpgpgsgkQBOmwFJlJQGwmwJjAAQJjAAGwGwQElEkBdF3QC5iRD1AAQCTAAB9A1QBDiLB1h1QEPkPF/AAQF/AAEPEPQEPEPAAF/QAADlhiC9QhAB+htBtQkPEPl/AAQlNAAj4jNIgfAhQjODOkkAAQkkAAjPjOIgegiQhqDVi1C1QmwGwpjAAQpjAAmwmwgEgmzANAIAAAAg");
	this.shape_4.setTransform(564.275,709.175);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// clouds_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf([DBLColorManager.color("wallpaper_primary_3"),DBLColorManager.color("wallpaper_primary_1")],[0,1],0,-133,0,133).s().p("EAvtAT4QksksAAmoQAAicAoiMQBGjuC+i9QEsksGoAAQCoAACVAvQAgj7C7i7QDjjiFAAAQFAAADiDiQDiDjAAFAQAAE/jiDiIgcAaQjaDIksAAQggAAgfgCQAEAwAAAyQAAGoksEsQksEsmoAAQmoAAksksgEhA4AR7QhVhVg+hgQi+BljoAAQl5AAkLkKQjojpgek8QgEguAAgxQAAl4EKkKQELkLF5AAQF5AAEKELQAhAhAdAjQEBi4FMAAQFuAAESDfQgZCIAACSQAAC2AnCmQBKE/DYEFQhMCsiPCPQksEtmpAAQmoAAktktgEglMAOyQg3g4gwg6QBRi8AAjdQAAhYgNhTQgxk7jujuQgpgpgsgkQBOmwFJlJQGwmwJjAAQJjAAGwGwQElEkBdF3QC5iRD1AAQCTAAB9A1QBDiLB1h1QEPkPF/AAQF/AAEPEPQEPEPAAF/QAADlhiC9QhAB+htBtQkPEPl/AAQlNAAj4jNIgfAhQjODOkkAAQkkAAjPjOIgegiQhqDVi1C1QmwGwpjAAQpjAAmwmwgEgmzANAIAAAAg");
	this.shape_5.setTransform(564.275,709.175);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// clouds_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf([DBLColorManager.color("wallpaper_primary_3"),DBLColorManager.color("wallpaper_primary_1")],[0,1],367.9,-101.8,367.9,0.7).s().p("EA+cANWQghghgdgjQg+AOhDAAQjmAAijiiQhXhXgohqIgCgFIgRAFQhLAVhUAAQhUAAhMgVQh7gjhlhbQigBbjGAAQkxAAjXjXQjXjWAAkxQAAkwDXjYQDXjXExAAQEwAADXDXQBQBQAyBcQAtgHAwAAQDtAACoCnQBjBkApB7QBIgUBRAAQA8AAA3ALQAjgsApgpQEAkAFrAAQFqAAEAEAQEBEBAAFpQAABugYBkQg2DmizCzQkAEAlqAAQlrAAkAkAgAC/JXQhIhIgzhSQh1i+AAjvQAAlVDwjyQDyjyFWAAQFWAADyDyQDyDyAAFVQAADvh3C+QgyBShJBIQjyDylWAAQlWAAjyjygEhOLAG9QiqgmiDiDQiZiZgajMQgGgrAAgtQAAgtAGgrQAajNCZiYQC4i5EFAAQEFAAC5C5QB3B3AqCWQAZidB1h2QCWiVDTAAQCXAAB3BMQAqgiA5AAIARAAQAxhjBUhUQDIjHEZAAQEaAADHDHQDHDHAAEaQAAEZjHDGQjHDIkaAAQkZAAjIjIQgkgkgdglQgjBCg6A6QiVCVjUAAQjTAAiWiVQhXhXgkhrQgXDUidCdQiDCDiqAmQhFAPhMAAQhLAAhFgPg");
	this.shape_6.setTransform(534.025,689.925);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// background_arcs
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.color("engagement_surface_1_alpha_40")).s().p("EhZsAPWUBSKgDyBhPgeQIAADkUhj/Ae2hPaAC/g");
	this.shape_7.setTransform(570.15,198.4125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.color("engagement_surface_1_alpha_50")).s().p("EAWVA4yQBoi4B3ivUATkgcuAsVgLIIAAFqUghaAHngQCAalQhpCthdC6gEAKNA4yQiYi5ioiuUgecgfjhAdgJfIAAldUBAdALHAljAjYQC5CvCvC4gEhZsgXgUBSkgDEBg1geNIAAFgUhhPAeShSKADyg");
	this.shape_8.setTransform(570.15,406.8625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.color("engagement_surface_1_alpha_60")).s().p("EAlLA7zQBdi5BpitUAQCgalAhagHnIAAIaQ5GEXrNVbQhZCrhLC7gEADRA7zQh9i6iRisUgYogc+hAHgFeIAAmnUBAdAJfAecAfkQCoCuCYC4gEhZsgcFUBPpgBABjwgetIAAGDUhg1AeNhSkADDg");
	this.shape_9.setTransform(570.15,387.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.color("engagement_surface_1_alpha_70")).s().p("EAy2A8zQBLi8BZirQLN1bZGkXIAAEgQy3DeooR0QhSCqhDC9gEgD3A8zQh+i8iRirUgXngbqg5/AAPIAAnAUBAHAFeAYoAc9QCRCtB9C6gEhZsgjnUBGfADCBkQgcNIIqAAIAAB/UhjwAeuhPpABAg");
	this.shape_10.setTransform(570.15,381.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.color("engagement_surface_1_alpha_90")).s().p("EA75A8zQBDi9BSiqQIox0S3jeIAAa5gEhZsA8zMAAAghCUA5/gAPAXnAbqQCRCrB+C8gEhZsgjnIAA5LMCqvAAAUhahAZehCQAAAQnIAAm2gTg");
	this.shape_11.setTransform(570.15,381.15);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// background_fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf([DBLColorManager.color("wallpaper_primary_5"),DBLColorManager.color("wallpaper_primary_2")],[0,1],324.6,-417.9,-324.6,418).s().p("EhZsA8zMAAAh5lMCzZAAAMAAAB5lg");
	this.shape_12.setTransform(570.15,381.15);

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DBLAWallpaperNeon, new cjs.Rectangle(0,0,1138,768), null);


// stage content:
(lib.DBLAWallpaperNeoncolor = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DBLAWallpaperNeon();
	this.instance.setTransform(550.6,429.2,1,1,0,0,0,550.6,429.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(510,376.1,650.3,490.29999999999995);
// library properties:
lib.properties = {
	id: '813CFB568CDA4DB6A416F1444732F944',
	width: 1138,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
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
an.compositions['813CFB568CDA4DB6A416F1444732F944'] = {
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