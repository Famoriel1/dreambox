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


(lib.SectionTitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.lblTitle = new cjs.Text("PANEL TITLE", "bold 16px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_title"));
	this.lblTitle.name = "lblTitle";
	this.lblTitle.lineHeight = 20;
	this.lblTitle.lineWidth = 137;
	this.lblTitle.parent = this;
	this.lblTitle.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.lblTitle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SectionTitle, new cjs.Rectangle(0,0,141,24.6), null);


(lib.SectionSubtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.lblSubtitle = new cjs.Text("Section Subtitle", "16px 'Montreal Serial'", DBLColorManager.color("engagement_on_surface_body"));
	this.lblSubtitle.name = "lblSubtitle";
	this.lblSubtitle.textAlign = "right";
	this.lblSubtitle.lineHeight = 20;
	this.lblSubtitle.lineWidth = 220;
	this.lblSubtitle.parent = this;
	this.lblSubtitle.setTransform(222,2);

	this.timeline.addTween(cjs.Tween.get(this.lblSubtitle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SectionSubtitle, new cjs.Rectangle(0,0,224,24.1), null);


(lib.nineslice_12_12_176_76 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("EgsSAdxMAAAg7hMBYlAAAMAAAA7hg");
	this.shape.setTransform(283.5,190.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nineslice_12_12_176_76, new cjs.Rectangle(0,0,567,381), null);


(lib.nineslice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC6666").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nineslice, new cjs.Rectangle(0,0,100,100), null);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhqAAIC9i9IAZAZIilCkIClClIgZAZg");
	this.shape.setTransform(-3.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("AhqAAIC9i8IAZAZIilCjIClCkIgZAag");
	this.shape_1.setTransform(-3.05,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-13.8,-20.4,21.5,39.4), null);


(lib.LineAst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_8_8_84_84 = new lib.nineslice();
	this.nineslice_8_8_84_84.name = "nineslice_8_8_84_84";
	this.nineslice_8_8_84_84.setTransform(50.1,50.1,0.84,0.84,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_8_8_84_84).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AmjHWQgyAAAAgyIAAtHQAAgyAyAAINHAAQAyAAAAAyIAANHQAAAygyAAg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf([DBLColorManager.color("engagement_accent_top"),DBLColorManager.color("engagement_accent_bottom")],[0,1],112.4,123.4,112.4,123.4).s().p("AmjH0QhQAAAAhQIAAtHQAAhQBQAAINHAAQBQAAAABQIAANHQAABQhQAAg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LineAst, new cjs.Rectangle(0,0,100,100), null);


(lib.FlexScrim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ninesliced
	this.nineslice_26_26_12_12 = new lib.nineslice_12_12_176_76();
	this.nineslice_26_26_12_12.name = "nineslice_26_26_12_12";
	this.nineslice_26_26_12_12.setTransform(25.2,25.15,0.0459,0.0682,0,0,0,287.8,192.8);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_26_26_12_12).wait(1));

	// scrim
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(DBLColorManager.color("engagement_surface_1")).ss(0.1,1,1).p("Aipj5IFTAAQBQAAAABQIAAFTQAABQhQAAIlTAAQhQAAAAhQIAAlTQAAhQBQAAg");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.color("engagement_surface_1")).s().p("AipD6QhQAAAAhQIAAlTQAAhQBQAAIFTAAQBQAAAABQIAAFTQAABQhQAAg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FlexScrim, new cjs.Rectangle(-1,-1,52,52), null);


(lib.CarouselGradient_Right_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(22.55,18.5,0.1198,0.1799,0,0,0,88.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_1_alpha_0"),DBLColorManager.color("engagement_surface_1")],[0,1],-18,1,18,1).s().p("AizDwIAAnfIFnAAIAAHfg");
	this.shape.setTransform(18,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Right_Over, new cjs.Rectangle(0,0,36,48), null);


(lib.CarouselGradient_Right_Editor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(6,15,0.1198,0.1799);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_3_alpha_0"),DBLColorManager.color("engagement_surface_3")],[0,1],-12,1,12,1).s().p("Ah3DwIAAnfIDvAAIAAHfg");
	this.shape.setTransform(12,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Right_Editor, new cjs.Rectangle(0,0,24,48), null);


(lib.CarouselGradient_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(6,15,0.1198,0.1799);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_1_alpha_0"),DBLColorManager.color("engagement_surface_1")],[0,1],-12,1,12,1).s().p("Ah3DwIAAnfIDvAAIAAHfg");
	this.shape.setTransform(12,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Right, new cjs.Rectangle(0,0,24,48), null);


(lib.CarouselGradient_Left_Over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(22.55,18.5,0.1198,0.1799,0,0,0,88.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_1_alpha_0"),DBLColorManager.color("engagement_surface_1")],[0,1],18,-1,-18,-1).s().p("AizDwIAAnfIFnAAIAAHfg");
	this.shape.setTransform(18,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Left_Over, new cjs.Rectangle(0,0,36,48), null);


(lib.CarouselGradient_Left_Editor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(16.55,18.5,0.1198,0.1799,0,0,0,88.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_3_alpha_0"),DBLColorManager.color("engagement_surface_3")],[0,1],18,-1,-18,-1).s().p("AizDwIAAnfIFnAAIAAHfg");
	this.shape.setTransform(12.0168,24,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Left_Editor, new cjs.Rectangle(0,0,24,48), null);


(lib.CarouselGradient_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nineslice
	this.nineslice_12_15_12_18 = new lib.nineslice();
	this.nineslice_12_15_12_18.name = "nineslice_12_15_12_18";
	this.nineslice_12_15_12_18.setTransform(16.55,18.5,0.1198,0.1799,0,0,0,88.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.nineslice_12_15_12_18).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.color("engagement_surface_1_alpha_0"),DBLColorManager.color("engagement_surface_1")],[0,1],18,-1,-18,-1).s().p("AizDwIAAnfIFnAAIAAHfg");
	this.shape.setTransform(12.0168,24,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CarouselGradient_Left, new cjs.Rectangle(0,0,24,48), null);


(lib.ArrowButton_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:1,Down:2,Disabled:3,Highlight:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Arrow();
	this.instance.setTransform(0,0,0.8223,0.8232,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_black_alpha_10).s().p("AhRCNIgHgFICBiCIAHgGIiBiAIgHgHIAVgUICbCbIgGAGIiVCWg");
	this.shape.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9489,scaleY:0.95},0).wait(1).to({scaleX:0.7491,scaleY:0.75},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.8223,scaleY:0.8232},0).wait(1));

	// highlight
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_highlight_inner).s().p("AhDCwQgJAAgFgGIgOgOIABAAIgHgGQgEgDgCgGQgBgFABgGQABgFAEgEIB5h5IhyhyIAAAAIgHgGQgFgGAAgJQAAgIAFgGIAVgUQAGgGAIAAQAIAAAGAGICcCcQAFAGABAHQAAAIgGAGIgGAGIAAAAIiWCWQgGAGgIAAIAAAAg");
	this.shape_1.setTransform(2.4944,0.0001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_highlight_outer).s().p("AhDC6IAAAAQgNAAgIgJIgBAAIgOgOIgBgCIgEgDIAAAAQgGgGgCgIIAAAAQgDgIACgIQACgIAGgGIByhyIhqhpIgBgCIgHgGIAAAAQgJgJABgNQgBgMAJgJIAAAAIAVgUIAAAAQAJgJAMAAQAMAAAJAJICcCcQAIAJABALQAAAMgJAJIAAAAIgGAGIgCACIiUCUQgJAJgMAAIAAAAg");
	this.shape_2.setTransform(2.4948,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-18.6,23.700000000000003,38.1);


(lib.ArrowButton_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,"Highlight":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Arrow();
	this.instance.setTransform(0,0,0.8223,0.8232,0,180,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_black_alpha_10).s().p("AhRAGIgGgGICbibIAVAUIgHAHIiBCAIAHAGICBCCIgHAFIgOAPg");
	this.shape.setTransform(-2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.8223,scaleY:0.8232}}]}).to({state:[{t:this.instance,p:{scaleX:0.9489,scaleY:0.95}}]},1).to({state:[{t:this.instance,p:{scaleX:0.7491,scaleY:0.75}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.8223,scaleY:0.8232}}]},1).wait(1));

	// highlight
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_highlight_inner).s().p("AA2CqIiWiWIAAAAIgGgGQgGgGAAgIQABgHAFgGICcicQAGgGAIAAQAIAAAGAGIAVAUQAFAGAAAIQAAAJgFAGIgHAGIAAAAIhyByIB5B5QAEAEABAFQABAGgBAFQgCAGgEADIgHAGIABAAIgOAOQgFAGgJAAIAAAAQgIAAgGgGg");
	this.shape_1.setTransform(-2.4944,0.0001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_highlight_outer).s().p("AAvCxIiUiUIgCgCIgGgGIAAAAQgJgJAAgMQABgLAIgJICcicQAJgJAMAAQAMAAAJAJIAAAAIAVAUIAAAAQAJAJgBAMQABANgJAJIAAAAIgHAGIgBACIhqBpIByByQAGAGACAIQACAIgDAIIAAAAQgCAIgGAGIAAAAIgEADIgBACIgOAOQgJAJgNAAIAAAAIAAAAQgMAAgJgJg");
	this.shape_2.setTransform(-2.4948,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-18.6,23.700000000000003,38.1);


// stage content:
(lib.FlexBoxcolor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Header
	this.instance = new lib.FlexScrim();
	this.instance.setTransform(341.05,225.5,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ScientificEditor
	this.instance_1 = new lib.LineAst();
	this.instance_1.setTransform(600,261.05,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(828,584.5,-178,-273.4);
// library properties:
lib.properties = {
	id: 'D780E703AF1D0448979262F22D7E1329',
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
an.compositions['D780E703AF1D0448979262F22D7E1329'] = {
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