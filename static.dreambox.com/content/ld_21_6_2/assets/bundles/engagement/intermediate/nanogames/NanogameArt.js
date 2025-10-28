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



(lib.closeButtonGraphic_paperfrenzy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7CAA2B").s().p("AAaA+IgTgcIgEgIIgDgKIgCAJIgFAJIgTAcIgrAAIAxhAIgtg7IAsAAIAQAYIADAHIACAJIACgJIAEgHIAQgYIArAAIgsA7IAxBAg");
	this.shape.setTransform(12.6,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape_1.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.closeButtonGraphic_neon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#73FFF0").s().p("AAaA+IgTgcIgEgIIgDgKIgCAJIgFAJIgTAcIgrAAIAxhAIgtg7IAsAAIAQAYIADAHIACAJIACgJIAEgHIAQgYIArAAIgsA7IAxBAg");
	this.shape.setTransform(12.6,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110024").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape_1.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.closeButtonGraphic_coolfrost = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#18BBFE").s().p("AAaA+IgTgcIgEgIIgDgKIgCAJIgFAJIgTAcIgrAAIAxhAIgtg7IAsAAIAQAYIADAHIACAJIACgJIAEgHIAQgYIArAAIgsA7IAxBAg");
	this.shape.setTransform(12.6,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape_1.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.DBLANanoShellCloseButton_paperfrenzy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:9,Down:19,Disabled:27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.closeButtonGraphic_paperfrenzy();
	this.instance.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,29,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.05,scaleY:1.05},0).wait(10).to({scaleX:0.95,scaleY:0.95},0).wait(8).to({scaleX:1,scaleY:1},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(9).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 0).wait(10).to(new cjs.ColorFilter(0.83,0.83,0.83,1,0,0,0,0), 0).wait(8).to(new cjs.ColorFilter(0.2,0.2,0.2,1,40.8,40.8,40.8,0), 0).wait(8));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:9, endFrame:9, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:19, endFrame:19, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:27, endFrame:27, x:-2, y:-2, w:29, h:29});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,26.3,26.3);


(lib.DBLANanoShellCloseButton_neon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.closeButtonGraphic_neon();
	this.instance.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,29,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.05,scaleY:1.05},0).wait(10).to({scaleX:0.95,scaleY:0.95},0).wait(8).to({scaleX:1,scaleY:1},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(9).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 0).wait(10).to(new cjs.ColorFilter(0.83,0.83,0.83,1,0,0,0,0), 0).wait(8).to(new cjs.ColorFilter(0.2,0.2,0.2,1,40.8,40.8,40.8,0), 0).wait(8));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:9, endFrame:9, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:19, endFrame:19, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:27, endFrame:27, x:-2, y:-2, w:29, h:29});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,26.3,26.3);


(lib.DBLANanoShellCloseButton_coolfrost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":9,"Down":19,"Disabled":27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.closeButtonGraphic_coolfrost();
	this.instance.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,29,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.05,scaleY:1.05},0).wait(10).to({scaleX:0.95,scaleY:0.95},0).wait(8).to({scaleX:1,scaleY:1},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(9).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 0).wait(10).to(new cjs.ColorFilter(0.83,0.83,0.83,1,0,0,0,0), 0).wait(8).to(new cjs.ColorFilter(0.2,0.2,0.2,1,40.8,40.8,40.8,0), 0).wait(8));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:9, endFrame:9, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:19, endFrame:19, x:-2, y:-2, w:29, h:29});
	this.filterCacheList.push({instance: this.instance, startFrame:27, endFrame:27, x:-2, y:-2, w:29, h:29});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,26.3,26.3);


// stage content:
(lib.NanogameArt = function(mode,startPosition,loop,reversed) {
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

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '526B9EC93D8F4B3A86250B1E74222B55',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/DBLAGameOverSound.mp3", id:"DBLAGameOverSound"},
		{src:"sounds/DBLAInstructionsSound.mp3", id:"DBLAInstructionsSound"},
		{src:"sounds/DBLATimerBeepSound.mp3", id:"DBLATimerBeepSound"},
		{src:"sounds/DBLAVictorySound.mp3", id:"DBLAVictorySound"}
	],
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
an.compositions['526B9EC93D8F4B3A86250B1E74222B55'] = {
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