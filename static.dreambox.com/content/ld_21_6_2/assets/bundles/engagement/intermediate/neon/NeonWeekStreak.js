(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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


(lib.WeekStreakNodeFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],0,7.6,0,-7.7).s().p("AgvAvQgUgTABgcQgBgbAUgUQAUgTAbgBQAcABAUATQATAUABAbQgBAcgTATQgUAVgcgBQgbABgUgVg");
	this.shape.setTransform(0.0345,0.0065,1.4815,1.4815);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WeekStreakNodeFill, rect = new cjs.Rectangle(-10,-10,20,20), [rect]);


(lib.WeekStreakNode = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,StartAnimation:1,EndAnimation:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.stop();
		this.dispatchEvent('nodeEndAnimation');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],0,9.7,0,-10).s().p("AhGBGQgdgdAAgpQAAgpAdgdQAegdAoAAQApAAAeAdQAdAdAAApQAAApgdAdIAAABQgeAdgpAAQgoAAgegegAgzgzIAAAAQgWAWAAAdQAAAfAWAVQAVAWAeAAQAeAAAWgWQAWgWAAgeQAAgegWgVQgWgWgeAAQgdAAgWAWg");
	this.shape.setTransform(20,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],1.8,10,1.8,-9.9).s().p("AgpAPQgGAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAGAAIBiAAIAAAdg");
	this.shape_1.setTransform(5.7,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],0,9.7,0,-10).s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAeAdQAdAdAAApQAAAqgdAdIAAAAQgeAdgpAAQgoAAgegdgAgzg0IAAABQgWAVAAAeQAAAfAWAVQAVAWAeAAQAeAAAWgWQAWgVAAgfQAAgegWgWQgWgVgeAAQgdAAgWAVg");
	this.shape_2.setTransform(20,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},8).wait(1));

	// fill
	this.instance = new lib.WeekStreakNodeFill();
	this.instance.setTransform(20.45,10.45,0.045,0.045,0,0,0,10,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:10.1,regY:10.1,scaleX:0.86,scaleY:0.86,x:28.7,y:18.7},8,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,30,20);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.WeekStreakLayout = function(mode,startPosition,loop,reversed) {
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
	this.lblLessonsComplete = new cjs.Text("99", "16px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblLessonsComplete.name = "lblLessonsComplete";
	this.lblLessonsComplete.textAlign = "right";
	this.lblLessonsComplete.lineHeight = 22;
	this.lblLessonsComplete.lineWidth = 19;
	this.lblLessonsComplete.parent = this;
	this.lblLessonsComplete.setTransform(172,25.55);

	this.lblSubtitle = new cjs.Text("Lessons completed this week:", "16px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblSubtitle.name = "lblSubtitle";
	this.lblSubtitle.textAlign = "right";
	this.lblSubtitle.lineHeight = 22;
	this.lblSubtitle.lineWidth = 267;
	this.lblSubtitle.parent = this;
	this.lblSubtitle.setTransform(147.05,25.55);

	this.astWeekStreak_4 = new lib.WeekStreakNode();
	this.astWeekStreak_4.name = "astWeekStreak_4";
	this.astWeekStreak_4.setTransform(166.2,10,1,1,0,0,0,22.2,10);

	this.astWeekStreak_3 = new lib.WeekStreakNode();
	this.astWeekStreak_3.name = "astWeekStreak_3";
	this.astWeekStreak_3.setTransform(130.2,10,1,1,0,0,0,22.2,10);

	this.astWeekStreak_2 = new lib.WeekStreakNode();
	this.astWeekStreak_2.name = "astWeekStreak_2";
	this.astWeekStreak_2.setTransform(94.2,10,1,1,0,0,0,22.2,10);

	this.astWeekStreak_1 = new lib.WeekStreakNode();
	this.astWeekStreak_1.name = "astWeekStreak_1";
	this.astWeekStreak_1.setTransform(58.2,10,1,1,0,0,0,22.2,10);

	this.astWeekStreak_0 = new lib.WeekStreakNode();
	this.astWeekStreak_0.name = "astWeekStreak_0";
	this.astWeekStreak_0.setTransform(22.2,10,1,1,0,0,0,22.2,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astWeekStreak_0},{t:this.astWeekStreak_1},{t:this.astWeekStreak_2},{t:this.astWeekStreak_3},{t:this.astWeekStreak_4},{t:this.lblSubtitle},{t:this.lblLessonsComplete}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WeekStreakLayout, rect = new cjs.Rectangle(-121.9,0,296,69.8), [rect]);


// stage content:
(lib.NeonWeekStreakcolor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background_layer
	this.instance = new lib.WeekStreakLayout();
	this.instance.setTransform(814.9,224.05,1,1,0,0,0,16,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1189,598.1,295.9,69.8);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '99268BB68F9910409D63B7678D2F6A5C',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#333333",
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
an.compositions['99268BB68F9910409D63B7678D2F6A5C'] = {
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