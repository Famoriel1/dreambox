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



(lib.longpress_ring = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACpABQAABGgxAxQgxAyhHAAQhFAAgygyQgxgxAAhGQAAhGAxgyQAygxBFAAQBHAAAxAxQAxAyAABGgAC+AAQAABPg4A3Qg3A4hPAAQhOAAg4g4Qg3g3AAhPQAAhOA3g4QA4g3BOAAQBPAAA3A3QA4A4AABOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#014A54").s().p("AiGCGQg3g3AAhPQAAhOA3g4QA4g3BOAAQBPAAA3A3QA4A4AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4gAh3h3QgxAyAABGQAABFAxAyQAyAxBFAAQBGAAAygxQAxgyAAhFQAAhGgxgyQgygxhGABQhFgBgyAxg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiGCGQg3g3AAhPQAAhOA3g4QA4g3BOAAQBPAAA3A3QA4A4AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4gAh3h3QgxAyAABGQAABFAxAyQAyAxBFAAQBGAAAygxQAxgyAAhFQAAhGgxgyQgygxhGABQhFgBgyAxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgOAAgKgKQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOg");
	this.shape.setTransform(3.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004B55").s().p("AgYAYQgKgKAAgOQAAgOAKgJQALgLANAAQAOAAALALQAKAJAAAOQAAAOgKAKQgLALgOAAQgNAAgLgLg");
	this.shape_1.setTransform(3.5,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgOAKgJQALgLANAAQAOAAALALQAKAJAAAOQAAAOgKAKQgLALgOAAQgNAAgLgLg");
	this.shape_2.setTransform(3.5,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9,9);


(lib.LongPressFX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// longpress_circle_copy_copy
	this.instance = new lib.circle("single",1);
	this.instance.setTransform(19,-0.2,1.9286,1.9286,0,0,0,3.5,3.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:3.5,scaleX:1,scaleY:1,guide:{path:[19,0.1,20.9,0.1,22.7,0.4]},alpha:1},2,cjs.Ease.get(0.98)).to({guide:{path:[22.8,0.5,28.3,1.5,32.5,5.6,38.1,11.2,38.1,19.1,38.1,26.9,32.4,32.4,26.9,38,19,38]}},4,cjs.Ease.get(-1)).to({guide:{path:[19.1,38.1,19.1,38.1,19.1,38.1,17.1,38.1,15.2,37.7]}},1).to({guide:{path:[15.2,37.6,9.7,36.6,5.6,32.4,0.1,26.9,0.1,19,0.1,11.2,5.6,5.6,11.1,0.1,19,0.1,19,0.1,19,0.1]},alpha:0},4,cjs.Ease.get(1)).to({startPosition:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// longpress_circle_copy
	this.instance_1 = new lib.circle("single",1);
	this.instance_1.setTransform(19,-0.2,1.9286,1.9286,0,0,0,3.5,3.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:3.5,scaleX:1,scaleY:1,guide:{path:[19,0.1,20.9,0.1,22.7,0.4]},alpha:1},2,cjs.Ease.get(0.98)).to({guide:{path:[22.8,0.5,28.3,1.5,32.5,5.6,38.1,11.2,38.1,19.1,38.1,26.9,32.4,32.4,26.9,38,19,38]}},4,cjs.Ease.get(-1)).to({guide:{path:[19.1,38.1,19.1,38.1,19.1,38.1,17.1,38.1,15.2,37.7]},startPosition:0},1).to({guide:{path:[15.2,37.6,9.7,36.6,5.6,32.4,0.1,26.9,0.1,19,0.1,11.2,5.6,5.6,11.1,0.1,19,0.1,19,0.1,19,0.1]}},4,cjs.Ease.get(1)).to({alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// longpress_ring_copy
	this.instance_2 = new lib.longpress_ring("single",1);
	this.instance_2.setTransform(19,19);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:0.7534,scaleY:0.7534,x:19.1,y:19.1,alpha:0},8).wait(5).to({alpha:1},0).to({regX:0.1,regY:0.1,scaleX:1.1725,scaleY:1.1725,x:19.2,y:19.2,alpha:0},4).wait(1));

	// longpress_ring
	this.instance_3 = new lib.longpress_ring("single",0);
	this.instance_3.setTransform(19,19);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleX:0.7534,scaleY:0.7534,x:19.1,y:19.1,alpha:1},8).wait(5).to({alpha:0},0).to({regX:0.1,regY:0.1,scaleX:1.1725,scaleY:1.1725,x:19.2,y:19.2},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-7.7,46.8,50.2);


// stage content:
(lib.DBLALongPressFX = function(mode,startPosition,loop,reversed) {
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
	id: '5E80F31894E944C59154784069472A2C',
	width: 640,
	height: 480,
	fps: 30,
	color: "#000000",
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
an.compositions['5E80F31894E944C59154784069472A2C'] = {
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