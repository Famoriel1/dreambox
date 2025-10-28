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


(lib.thumbnailproxy = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.TabLabel_Selected = function(mode,startPosition,loop,reversed) {
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
	this.title = new cjs.Text("Text", "bold 16px 'Montreal Serial'", DBLColorManager.color("engagement_accent_top"));
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 20;
	this.title.lineWidth = 70;
	this.title.parent = this;
	this.title.setTransform(47,2);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabLabel_Selected, rect = new cjs.Rectangle(10,0,74,24.4), [rect]);


(lib.TabLabel = function(mode,startPosition,loop,reversed) {
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
	this.title = new cjs.Text("Text", "bold 16px 'Montreal Serial'", DBLColorManager.platform_white_alpha_100);
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 20;
	this.title.lineWidth = 70;
	this.title.parent = this;
	this.title.setTransform(47,2);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabLabel, rect = new cjs.Rectangle(10,0,74,24.4), [rect]);


(lib.Color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB17B").s().p("AmVGWQipioAAjuQAAjtCpioQCoipDtAAQDuAACpCpQCoCoAADtQAADuioCoQipCpjuAAQjtAAioipg");
	this.shape.setTransform(10.9965,11.0222,0.1913,0.1913);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color, rect = new cjs.Rectangle(0,0,22,22), [rect]);


(lib.AvatarEditorBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax9YEQhQAAAAhQMAAAgtnQAAhQBQAAMAj7AAAQBQAAAABQMAAAAtnQAABQhQAAg");
	mask.setTransform(123,154);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_white_alpha_40).s().p("Ax9YEQhQAAAAhQMAAAgtnQAAhQBQAAMAj7AAAQBQAAAABQMAAAAtnQAABQhQAAg");
	this.shape.setTransform(123,154);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AGFIpIsrAAQhFAAgkghQglggARgwQBfkbBQlkQAOg6Azg0QA0gzA6gOQFkhQEZheQAwgQAhAlQAgAkABBEIAAMsQABBFgxAwQgvAvhDAAIgDAAg");
	this.shape_1.setTransform(258.4512,289.3347,0.3352,0.3372);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AofFdQhGAAgmgPQgogPALgZQBBiQA6klQAJgwA9gnQA+gnBMgEQHIgcGygtQBIgIAoAhQApAggPA0QhdE8hrDCQgSAhg+AWQg9AVhFAAg");
	this.shape_2.setTransform(184.1107,296.2346,0.3352,0.3372);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlGEvQhGAAg2gOQg6gQgLgZQhFiTg7klQgKgwAwghQAxghBNAEQHJAVHgAFQBPABA5AjQA5AjAAAvQAADCADDcQAAAWgwANQguAMhGAAg");
	this.shape_3.setTransform(100.282,297.764,0.3352,0.3372);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AmVGTQg8ghgQgwQhekchRljQgNg7AighQAigiA+AMQFuBGGkA2QBGAKA8AsQA9AtAPA0QBdE8BsDGQATAigiAVQgiAWhFAAIssAAIgCAAQhEAAg7ggg");
	this.shape_4.setTransform(22.0676,293.3171,0.3352,0.3372);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ApJJOQgoghAOg6QBQlUBAmvQAKhHA6g6QA6g6BHgKQGug/FThQQA5gNAiAoQAhAngJBGQg4GuhGFmQgLA/g0AzQg0A0g+AMQlpBFmqA4QgOABgNAAQgzAAgfgag");
	this.shape_5.setTransform(231.6262,262.2389,0.3352,0.3372);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqPH8Qg4gkgBg3IgCr0QgBhIA+g0QA+g1BXgBQIFgDIAgXQBVgEA4AxQA3AwgHBIQgmG3gxFBQgJA3g9AoQg8AohPAEQnVAUnVADIgCAAQhOAAg3gkg");
	this.shape_6.setTransform(145.8157,270.084,0.3352,0.3372);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIaJCQnCgcm1gwQhJgHg8gtQg8gugOg6QhRlTg/mvQgKhHAtgtQAtgtBKAJQG2A0H3AiQBSAGBAA4QA/A3AGBIQAoG0A0FEQAIA3gwAjQgqAdg/AAIgTAAg");
	this.shape_7.setTransform(53.5649,267.3773,0.3352,0.3372);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AE9KRQlihPkbhfQgwgQghg8Qghg7ABhGIAAsrQAAhFAWgiQAVgjAhASIAAABQDDBpE+BeQA0AOAsA9QAtA8AJBGQA1GhBIFzQAMA+ghAiQgZAYglAAQgPAAgQgDg");
	this.shape_8.setTransform(-16.4417,254.57,0.3352,0.3372);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlDKNQghgpAIhHQAumlAenTQAEhMAng9QAng9AwgJQEig6CUhDQAYgLAQAoQAPAmAABFIAAMsQAABGgVA8QgWA+giASQjIBsk5BbQgOAEgNAAQgiAAgXgdg");
	this.shape_9.setTransform(265.2564,216.3779,0.3352,0.3372);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqVKYQg3gyAGhMQAgnEAUoMQADhWBAhAQBBhABWgDQIegWG2geQBNgGAyA3QAyA3gGBTQghH3g0G5QgJBLg7A6Qg7A7hLAIQnCA0nxAgIgQABQhIAAgygtg");
	this.shape_10.setTransform(194.5585,227.1106,0.3352,0.3372);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIhK8QoHgEn8gZQhVgEg/g4QhAg5gGhMQghm8gVoSQgEhXA8g7QA8g8BYADQImAPITADQBcABBBA/QBCA+AABYQAAINABHMQAABNg9A1Qg9A0hVAAIgDAAg");
	this.shape_11.setTransform(96.5114,229.0051,0.3352,0.3372);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AGpK9Qmug/lThQQg6gOgtg8Qgtg8gIhIQgvm1gcnDQgFhNAigvQAigwA3AIQE/AxG3AoQBHAGA4A/QA3BAAGBSQAhHvA1G/QAJBKgsAuQgkAkg2AAQgMAAgNgBg");
	this.shape_12.setTransform(9.231,222.755,0.3352,0.3372);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AnyKZQgwg4AEhUQAYnxAFoSQABhXA0g+QA0g+BIAAILyAAQA2ABAlA4QAkA3gBBQQgEHngVHCQgEBOgnA9QgpA9g3AIQk/Aym3AnIgPABQg9AAgsgxg");
	this.shape_13.setTransform(239.3762,178.0648,0.3352,0.3372);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ArBLFQhChAAAhaIgBxLQAAheBDhCQBChDBdAAIROAAQBaAAA/BCQBABBgBBdQgCIfgPIbQgDBZhABAQhBBAhYADQoSAOoqACIgBAAQhbABhAg/g");
	this.shape_14.setTransform(147.6395,180.0088,0.3352,0.3372);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHwLzQoDgVnKghQhMgGg4g/Qg4g/gEhVQgZoJgEn6QAAhXA0g+QA1g9BNgBIPXAAQBXAAA/BCQA/BBAABcQADIoAPIRQADBYg8A9Qg3A4hPAAIgLAAg");
	this.shape_15.setTransform(47.2852,179.4482,0.3352,0.3372);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AC/KHQkjg6iShDQgZgLgQg5QgOg2AAhHIAAsrQAAhHAMgtQANgxAWAAIGdAAQAvAAAjA4QAjA4ABBPQADHUAWHWQADBNghAxQgbAogmAAQgIAAgIgBg");
	this.shape_16.setTransform(-20.8716,175.8542,0.3352,0.3372);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AjwJRQgjg5gBhPQgEnmgVnDQgDhOAhgwQAhgxAwAKQEiA6CTBCQAZAMAQA5QAPA2gBBGIAAMsQAABGgMAuQgNAwgWAAImdAAIgBAAQguAAgjg3g");
	this.shape_17.setTransform(266.8778,132.1483,0.3352,0.3372);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AnXL0QhYAAg/hBQg/hBAAhdQgCoegQocQgChZA8g9QA8g8BWAEQIeAVG2AfQBNAFA5BAQA5A/AEBVQAYH5AEIOQABBXg2A+Qg1A+hOAAg");
	this.shape_18.setTransform(196.5428,128.513,0.3352,0.3372);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AoqMDQhaAAg/hBQg/hBAAhcQADopAPoQQADhZBAhAQBAhABZgDQIkgPIVgDQBcgBBBA/QBBA/AABaIgBRMQAABehCBCQhCBCheAAg");
	this.shape_19.setTransform(95.9279,127.9936,0.3352,0.3372);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AFSLKIrzAAQg2AAgkg4Qgkg4AAhPQAEnbAWnPQADhOAog8QAog9A3gJIAAAAQE/gxG3goQBHgGAxA3QAxA3gFBUQgZILgDH4QgBBXg0A+Qg0A+hHAAIgBAAg");
	this.shape_20.setTransform(6.6145,129.9377,0.3352,0.3372);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHKK9Qk/gxm3goQhIgGg3g/Qg4hAgFhTQghnug1m/QgJhLAsgtQAsgtBHAKQGuA/FTBQQA6AOAtA8QAtA8AIBIQAtGkAeHUQAFBNgiAvQgdApgtAAIgPgBg");
	this.shape_21.setTransform(236.7751,85.2556,0.3352,0.3372);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AImK8QoSgPopgCQhcAAhCg/QhBg/ABhXQAAoNABnNQAAhNA+g1QA+g1BXABIAAgBQINAEH4AXQBVAEBAA4QA/A4AGBNQAgHEAUILQAEBXg9A7Qg6A6hUAAIgHAAg");
	this.shape_22.setTransform(147.1314,78.9557,0.3352,0.3372);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqXKTQgxg3AGhTQAhnvA1m+QAJhLA7g6QA6g7BLgJQHCg2HqggQBTgFA2AxQA3AxgGBNQghG7gVITQgEBWhABAQhABAhWADQoKAWnCAgIgOABQhDAAgtgyg");
	this.shape_23.setTransform(49.319,81.0519,0.3352,0.3372);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlPKLQgPgmAAhFIAAssQAAhGAVg8QAWg+AigSQDGhrE6hcQA1gPAgAoQAhApgIBHQgwG3gcHBQgFBMgnA+QgmA8gwAKQkiA5iUBDQgFACgFAAQgSAAgMgfg");
	this.shape_24.setTransform(-19.2503,91.6363,0.3352,0.3372);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AFmKOQjIhsk5hbQg0gPgsg9Qgtg8gJhGQg3mrhGloQgMg+AigiQAhgjA7ANQFkBQEZBeQAwAQAhA8QAhA7gBBFIAAMsQAABFgVAiQgPAXgTAAQgKAAgLgGg");
	this.shape_25.setTransform(262.4486,53.4405,0.3352,0.3372);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIjI/Qm4gyn6ghQhTgFhAg4Qg/g3gGhIQgmmtgylLQgIg3AwgiQAwgiBOAEQHJAcGxAtQBIAIA9AtQA8AtAOA5QBQFSA/GxQAKBHgtAsQgmAmg7AAIgYgCg");
	this.shape_26.setTransform(190.4151,40.4417,0.3352,0.3372);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqZH1Qg3gxAHhHQAom0AzlFQAJg3A9goQA8goBPgEQHHgVHigFQBQAAA3AkQA4AkAAA2IgCL1QAABIg+A0Qg+A1hYABQoLAFn3AZIgNAAQhMAAgzgtg");
	this.shape_27.setTransform(97.9595,37.9943,0.3352,0.3372);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ApNJKQghgnAJhGQA1mfBIl1QAMg/A0gzQA0g0A+gMQFphFGqg4QBGgIAnAhQAoAhgOA6QhQFUhAGvQgKBHg6A6Qg6A6hHAKQmuA/lTBQQgOADgNAAQgnAAgZgeg");
	this.shape_28.setTransform(14.3797,45.772,0.3352,0.3372);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIcGwQluhGmkg2QhGgKg8gsQg9gtgPg0Qhdk9hsjFQgTgiAjgVQAhgWBFgBIMsAAQBFAAA7AhQA9AhAPAwQBfEaBRFlQANA7giAhQgZAagoAAQgPAAgQgEg");
	this.shape_29.setTransform(223.9316,14.6853,0.3352,0.3372);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHhEuQnWgVnUgDQhPAAg5gkQg3gjAAguQABjCACjcQABgWAwgNQAugNBHAAIMrAAQBGAAA3APQA4APAMAZQBBCQA5ElQAKAwgxAhQgtAehDAAIgPAAg");
	this.shape_30.setTransform(143.7102,10.1878,0.3352,0.3372);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqNFGQgoghAPg0QBek/BsjEQASghA+gXQA8gVBGAAIMsAAQBFAAAmAPQAnAQgLAYQhECTg8ElQgJAwg9AnQg+AnhMAFQm8Acm6AvQgPACgNAAQg0AAgggag");
	this.shape_31.setTransform(60.0179,11.8693,0.3352,0.3372);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AoHIRQghgkAAhFIAAssQgBhFAwgwQAwgwBFAAIMsAAQBFABAkAhQAkAggRAwQheEahRFlQgNA6g0A0Qg0A0g6ANQlhBPkcBfQgPAFgNAAQgeAAgWgZg");
	this.shape_32.setTransform(-12.4526,18.6724,0.3352,0.3372);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf([DBLColorManager.color("engagement_surface_avatar_top"),DBLColorManager.color("engagement_surface_avatar_bottom")],[0,1],0,0,0,0,0,215.2).s().p("A2zYEQhQAAAAhQMAAAgtnQAAhQBQAAMAtnAAAQBQAAAABQMAAAAtnQAABQhQAAg");
	this.shape_33.setTransform(123,154);

	var maskedShapeInstanceList = [this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AvatarEditorBackground, rect = new cjs.Rectangle(0,0,246,308), [rect]);


(lib.thumbnail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// proxy
	this.prxThumb = new lib.thumbnailproxy();
	this.prxThumb.name = "prxThumb";

	this.timeline.addTween(cjs.Tween.get(this.prxThumb).wait(1));

	// thumbnail_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("ApIJJIAAyRISRAAIAASRg");
	this.shape.setTransform(58.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thumbnail, rect = new cjs.Rectangle(0,0,117,117), [rect]);


(lib.TabButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Up:0,Over:1,Down:2,Disabled:3,Selected:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf([DBLColorManager.platform_black_alpha_10,DBLColorManager.platform_black_alpha_0],[0,1],-37.8,-12.2,-37.8,12.8).s().p("AojB9IAAj5IRHAAIAAD5g");
	this.shape.setTransform(54.825,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},4).wait(1));

	// overlay
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AnTDcQhQAAAAhQIAAlnIRHAAIAAFnQAABQhQAAg");
	this.shape_1.setTransform(54.825,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_black_alpha_20).s().p("AnTDcQhQAAAAhQIAAlnIRHAAIAAFnQAABQhQAAg");
	this.shape_2.setTransform(54.825,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(2));

	// label
	this.lblTab = new lib.TabLabel();
	this.lblTab.name = "lblTab";
	this.lblTab.setTransform(54.8,22,1,1,0,0,0,47,12.2);

	this.lblTab_Selected = new lib.TabLabel_Selected();
	this.lblTab_Selected.name = "lblTab_Selected";
	this.lblTab_Selected.setTransform(54.8,22,1,1,0,0,0,47,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lblTab}]}).to({state:[{t:this.lblTab}]},1).to({state:[{t:this.lblTab}]},1).to({state:[{t:this.lblTab}]},1).to({state:[{t:this.lblTab_Selected}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.lblTab).wait(1).to({regX:43.5,regY:11.3,scaleX:1.0811,scaleY:1.0799,x:51.05,y:20.95},0).wait(1).to({regX:49.7,regY:13,scaleX:0.946,scaleY:0.9447,x:57.35,y:23.1},0).wait(1).to({regX:47,regY:12.2,scaleX:1,scaleY:1,x:54.8,y:22},0).to({_off:true},1).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("AnJDXQhQAAAAhQIAAldIQzAAIAAFdQAABQhQAAg");
	this.shape_3.setTransform(54.825,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_surface_2")).s().p("AnTDcQhQAAAAhQIAAlnIRHAAIAAFnQAABQhQAAg");
	this.shape_4.setTransform(54.825,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_surface_3")).s().p("AnTDcQhQAAAAhQIAAlnIRHAAIAAFnQAABQhQAAg");
	this.shape_5.setTransform(54.825,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,109.7,43);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,109.7,44), rect, rect, rect];


(lib.ItemSkinColorButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,"Selected":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_white_alpha_20).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape.setTransform(33.0055,33.0208,3.7582,5.9572);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_20).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_1.setTransform(32.9864,33.02,3.4899,5.532);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// fill
	this.color = new lib.Color();
	this.color.name = "color";
	this.color.setTransform(18.1,18.1,2.3636,2.3636,0,0,0,4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.color).wait(1).to({regX:4.9,regY:4.9,scaleX:2.4545,scaleY:2.4545,x:18.05,y:18.05},0).wait(1).to({regX:4.4,regY:4.4,scaleX:2.2727,scaleY:2.2727,x:18,y:18},0).wait(1).to({regX:4.7,regY:4.7,scaleX:2.3636,scaleY:2.3636,x:18.05,y:18.05},0).wait(2));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_white_alpha_100).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_2.setTransform(33.053,32.9873,3.6222,5.7471);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({scaleX:3.7582,scaleY:5.9572,x:33.0055,y:33.0208},0).wait(1).to({scaleX:3.4899,scaleY:5.532,x:32.9864,y:33.02},0).wait(1).to({scaleX:3.6241,scaleY:5.7446,x:32.9968,y:32.9962},0).wait(2));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.platform_black_alpha_40).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_3.setTransform(33.9968,33.9962,3.6241,5.7446);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(4));

	// selection
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_surface_stroke")).s().p("AhvBlQgugpAAg8QAAg6AugqQAvgqBAgBQBBABAuAqQAuAqAAA6QAAA8guApQguAqhBABQhAgBgvgqg");
	this.shape_4.setTransform(32.9432,32.9948,1.8412,2.0195);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhvBlQgugpAAg8QAAg6AugqQAvgqBAgBQBBABAuAqQAuAqAAA6QAAA8guApQguAqhBABQhAgBgvgqg");
	this.shape_5.setTransform(32.9913,33.0514,2.0952,2.2996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.1,6,55,55);
p.frameBounds = [rect, new cjs.Rectangle(5,5,56,56), new cjs.Rectangle(7,7,52,52), new cjs.Rectangle(6,6,54,54), new cjs.Rectangle(0,0.1,66,66)];


(lib.ItemColorButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,"Selected":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_white_alpha_20).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape.setTransform(17.9932,18.0091,1.7449,2.7659);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_20).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_1.setTransform(18.0212,18.0045,1.4765,2.3404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// fill
	this.color = new lib.Color();
	this.color.name = "color";
	this.color.setTransform(18,18,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get(this.color).wait(1).to({regX:11.1,regY:11.1,scaleX:1.0909,scaleY:1.0909,x:18.1,y:18.1},0).wait(1).to({regX:11,regY:11,scaleX:0.9091,scaleY:0.9091,x:18,y:18},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	// stroke
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.platform_white_alpha_100).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_2.setTransform(17.9824,17.9819,1.6107,2.5532);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({scaleX:1.7449,scaleY:2.7659,x:17.9932,y:18.0091},0).wait(1).to({scaleX:1.4765,scaleY:2.3404,x:18.0213,y:18.0045},0).wait(1).to({scaleX:1.6107,scaleY:2.5532,x:17.9824,y:17.9819},0).wait(2));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.platform_black_alpha_40).s().p("Ag0AhQgWgNABgUQgBgTAWgOQAWgNAeAAQAfAAAVANQAXAOgBATQABAUgXANQgVAOgfAAQgeAAgWgOg");
	this.shape_3.setTransform(18.9824,18.9819,1.6107,2.5532);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(4));

	// selection
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.color("engagement_surface_stroke")).s().p("AhvBlQgugpAAg8QAAg6AugqQAvgqBAgBQBBABAuAqQAuAqAAA6QAAA8guApQguAqhBABQhAgBgvgqg");
	this.shape_4.setTransform(18.016,17.9945,0.8889,0.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("AhvBlQgugpAAg8QAAg6AugqQAvgqBAgBQBBABAuAqQAuAqAAA6QAAA8guApQguAqhBABQhAgBgvgqg");
	this.shape_5.setTransform(18.0142,17.9878,1.1429,1.2543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6,6,25,25);
p.frameBounds = [rect, new cjs.Rectangle(5,5,26,26), new cjs.Rectangle(7,7,22,22), new cjs.Rectangle(6,6,24,24), new cjs.Rectangle(0,0,36,36)];


(lib.ItemButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Up":0,"Over":1,"Down":2,"Disabled":3,"Selected":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// overlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("An4JxQh4AAAAh4IAAvxQAAh4B4AAIPxAAQB4AAAAB4IAAPxQAAB4h4AAg");
	this.shape.setTransform(62.5,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(DBLColorManager.platform_black_alpha_30).s().p("AnuJTQhkAAAAhkIAAvdQAAhkBkAAIPdAAQBkAAAABkIAAPdQAABkhkAAg");
	this.shape_1.setTransform(62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// mask_selection (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("An4KZQigAAAAigIAAvxQAAigCgAAIPxAAQCgAAAACgIAAPxQAACgigAAgApwn4IAAPxQAAB4B4AAIPxAAQB4AAAAh4IAAvxQAAh4h4AAIvxAAQh4AAAAB4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:62.5,y:62.5}).wait(1));

	// selection
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(DBLColorManager.color("engagement_accent_top")).s().p("An4KZQigAAAAigIAAvxQAAigCgAAIPxAAQCgAAAACgIAAPxQAACgigAAg");
	this.shape_2.setTransform(62.5,62.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// thumbnailmask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AnkJdQhQAAAAhQIAAvxQAAhQBQAAIPxAAQBQAAAABQIAAPxQAABQhQAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AnVJYQhQAAAAhQIAAvdQAAhQBQAAIPdAAQBQAAAABQIAAPdQAABQhQAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AnkJdQhQAAAAhQIAAvxQAAhQBQAAIPxAAQBQAAAABQIAAPxQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:60.5,y:60.5}).wait(2).to({graphics:mask_1_graphics_2,x:60,y:60}).wait(1).to({graphics:mask_1_graphics_3,x:60.5,y:60.5}).wait(2));

	// thumbnail
	this.containerThumb = new lib.thumbnail();
	this.containerThumb.name = "containerThumb";
	this.containerThumb.setTransform(62.5,62.5,1,1,0,0,0,58.5,58.5);

	var maskedShapeInstanceList = [this.containerThumb];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.containerThumb).wait(2).to({regX:58.6,regY:58.6,scaleX:0.9829,scaleY:0.9829,x:62.6,y:62.6},0).wait(1).to({regX:58.5,regY:58.5,scaleX:1,scaleY:1,x:62.5,y:62.5},0).wait(2));

	// mask_fill (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AnkJdQhQAAAAhQIAAvxQAAhQBQAAIPxAAQBQAAAABQIAAPxQAABQhQAAg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AnVJYQhQAAAAhQIAAvdQAAhQBQAAIPdAAQBQAAAABQIAAPdQAABQhQAAg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AnkJdQhQAAAAhQIAAvxQAAhQBQAAIPxAAQBQAAAABQIAAPxQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:60.5,y:60.5}).wait(2).to({graphics:mask_2_graphics_2,x:60,y:60}).wait(1).to({graphics:mask_2_graphics_3,x:60.5,y:60.5}).wait(2));

	// checkers
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AGFIpIsrAAQhFAAgkghQglggARgwQBfkbBQlkQAOg6Azg0QA0gzA6gOQFkhQEZheQAwgQAhAlQAgAkABBEIAAMsQABBFgxAwQgvAvhDAAIgDAAg");
	this.shape_3.setTransform(113.9459,113.9147,0.1273,0.1281);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AofFdQhGAAgmgPQgogPALgZQBBiQA6klQAJgwA9gnQA+gnBMgEQHIgcGygtQBIgIAoAhQApAggPA0QhdE8hrDCQgSAhg+AWQg9AVhFAAg");
	this.shape_4.setTransform(85.7082,116.5359,0.1273,0.1281);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlGEvQhGAAg2gOQg6gQgLgZQhFiTg7klQgKgwAwghQAxghBNAEQHJAVHgAFQBPABA5AjQA5AjAAAvQAADCADDcQAAAWgwANQguAMhGAAg");
	this.shape_5.setTransform(53.8665,117.1169,0.1273,0.1281);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AmVGTQg8ghgQgwQhekchRljQgNg7AighQAigiA+AMQFuBGGkA2QBGAKA8AsQA9AtAPA0QBdE8BsDGQATAigiAVQgiAWhFAAIssAAIgCAAQhEAAg7ggg");
	this.shape_6.setTransform(24.1573,115.4276,0.1273,0.1281);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ApJJOQgoghAOg6QBQlUBAmvQAKhHA6g6QA6g6BHgKQGug/FThQQA5gNAiAoQAhAngJBGQg4GuhGFmQgLA/g0AzQg0A0g+AMQlpBFmqA4QgOABgNAAQgzAAgfgag");
	this.shape_7.setTransform(103.7566,103.6213,0.1273,0.1281);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqPH8Qg4gkgBg3IgCr0QgBhIA+g0QA+g1BXgBQIFgDIAgXQBVgEA4AxQA3AwgHBIQgmG3gxFBQgJA3g9AoQg8AohPAEQnVAUnVADIgCAAQhOAAg3gkg");
	this.shape_8.setTransform(71.1621,106.6016,0.1273,0.1281);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIaJCQnCgcm1gwQhJgHg8gtQg8gugOg6QhRlTg/mvQgKhHAtgtQAtgtBKAJQG2A0H3AiQBSAGBAA4QA/A3AGBIQAoG0A0FEQAIA3gwAjQgqAdg/AAIgTAAg");
	this.shape_9.setTransform(36.1213,105.5733,0.1273,0.1281);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AE9KRQlihPkbhfQgwgQghg8Qghg7ABhGIAAsrQAAhFAWgiQAVgjAhASIAAABQDDBpE+BeQA0AOAsA9QAtA8AJBGQA1GhBIFzQAMA+ghAiQgZAYglAAQgPAAgQgDg");
	this.shape_10.setTransform(9.5298,100.708,0.1273,0.1281);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlDKNQghgpAIhHQAumlAenTQAEhMAng9QAng9AwgJQEig6CUhDQAYgLAQAoQAPAmAABFIAAMsQAABGgVA8QgWA+giASQjIBsk5BbQgOAEgNAAQgiAAgXgdg");
	this.shape_11.setTransform(116.5308,86.1993,0.1273,0.1281);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqVKYQg3gyAGhMQAgnEAUoMQADhWBAhAQBBhABWgDQIegWG2geQBNgGAyA3QAyA3gGBTQghH3g0G5QgJBLg7A6Qg7A7hLAIQnCA0nxAgIgQABQhIAAgygtg");
	this.shape_12.setTransform(89.6767,90.2765,0.1273,0.1281);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIhK8QoHgEn8gZQhVgEg/g4QhAg5gGhMQghm8gVoSQgEhXA8g7QA8g8BYADQImAPITADQBcABBBA/QBCA+AABYQAAINABHMQAABNg9A1Qg9A0hVAAIgDAAg");
	this.shape_13.setTransform(52.4342,90.9962,0.1273,0.1281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AGpK9Qmug/lThQQg6gOgtg8Qgtg8gIhIQgvm1gcnDQgFhNAigvQAigwA3AIQE/AxG3AoQBHAGA4A/QA3BAAGBSQAhHvA1G/QAJBKgsAuQgkAkg2AAQgMAAgNgBg");
	this.shape_14.setTransform(19.2814,88.6219,0.1273,0.1281);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AnyKZQgwg4AEhUQAYnxAFoSQABhXA0g+QA0g+BIAAILyAAQA2ABAlA4QAkA3gBBQQgEHngVHCQgEBOgnA9QgpA9g3AIQk/Aym3AnIgPABQg9AAgsgxg");
	this.shape_15.setTransform(106.7004,71.6446,0.1273,0.1281);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ArBLFQhChAAAhaIgBxLQAAheBDhCQBChDBdAAIROAAQBaAAA/BCQBABBgBBdQgCIfgPIbQgDBZhABAQhBBAhYADQoSAOoqACIgBAAQhbABhAg/g");
	this.shape_16.setTransform(71.8549,72.3832,0.1273,0.1281);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHwLzQoDgVnKghQhMgGg4g/Qg4g/gEhVQgZoJgEn6QAAhXA0g+QA1g9BNgBIPXAAQBXAAA/BCQA/BBAABcQADIoAPIRQADBYg8A9Qg3A4hPAAIgLAAg");
	this.shape_17.setTransform(33.736,72.1702,0.1273,0.1281);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AC/KHQkjg6iShDQgZgLgQg5QgOg2AAhHIAAsrQAAhHAMgtQANgxAWAAIGdAAQAvAAAjA4QAjA4ABBPQADHUAWHWQADBNghAxQgbAogmAAQgIAAgIgBg");
	this.shape_18.setTransform(7.8472,70.8049,0.1273,0.1281);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AjwJRQgjg5gBhPQgEnmgVnDQgDhOAhgwQAhgxAwAKQEiA6CTBCQAZAMAQA5QAPA2gBBGIAAMsQAABGgMAuQgNAwgWAAImdAAIgBAAQguAAgjg3g");
	this.shape_19.setTransform(117.1467,54.2015,0.1273,0.1281);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AnXL0QhYAAg/hBQg/hBAAhdQgCoegQocQgChZA8g9QA8g8BWAEQIeAVG2AfQBNAFA5BAQA5A/AEBVQAYH5AEIOQABBXg2A+Qg1A+hOAAg");
	this.shape_20.setTransform(90.4304,52.8205,0.1273,0.1281);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AoqMDQhaAAg/hBQg/hBAAhcQADopAPoQQADhZBAhAQBAhABZgDQIkgPIVgDQBcgBBBA/QBBA/AABaIgBRMQAABehCBCQhCBCheAAg");
	this.shape_21.setTransform(52.2126,52.6232,0.1273,0.1281);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AFSLKIrzAAQg2AAgkg4Qgkg4AAhPQAEnbAWnPQADhOAog8QAog9A3gJIAAAAQE/gxG3goQBHgGAxA3QAxA3gFBUQgZILgDH4QgBBXg0A+Qg0A+hHAAIgBAAg");
	this.shape_22.setTransform(18.2876,53.3617,0.1273,0.1281);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHKK9Qk/gxm3goQhIgGg3g/Qg4hAgFhTQghnug1m/QgJhLAsgtQAsgtBHAKQGuA/FTBQQA6AOAtA8QAtA8AIBIQAtGkAeHUQAFBNgiAvQgdApgtAAIgPgBg");
	this.shape_23.setTransform(105.7124,36.3876,0.1273,0.1281);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AImK8QoSgPopgCQhcAAhCg/QhBg/ABhXQAAoNABnNQAAhNA+g1QA+g1BXABIAAgBQINAEH4AXQBVAEBAA4QA/A4AGBNQAgHEAUILQAEBXg9A7Qg6A6hUAAIgHAAg");
	this.shape_24.setTransform(71.6619,33.9943,0.1273,0.1281);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqXKTQgxg3AGhTQAhnvA1m+QAJhLA7g6QA6g7BLgJQHCg2HqggQBTgFA2AxQA3AxgGBNQghG7gVITQgEBWhABAQhABAhWADQoKAWnCAgIgOABQhDAAgtgyg");
	this.shape_25.setTransform(34.5086,34.7906,0.1273,0.1281);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AlPKLQgPgmAAhFIAAssQAAhGAVg8QAWg+AigSQDGhrE6hcQA1gPAgAoQAhApgIBHQgwG3gcHBQgFBMgnA+QgmA8gwAKQkiA5iUBDQgFACgFAAQgSAAgMgfg");
	this.shape_26.setTransform(8.4631,38.8115,0.1273,0.1281);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AFmKOQjIhsk5hbQg0gPgsg9Qgtg8gJhGQg3mrhGloQgMg+AigiQAhgjA7ANQFkBQEZBeQAwAQAhA8QAhA7gBBFIAAMsQAABFgVAiQgPAXgTAAQgKAAgLgGg");
	this.shape_27.setTransform(115.4643,24.3014,0.1273,0.1281);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIjI/Qm4gyn6ghQhTgFhAg4Qg/g3gGhIQgmmtgylLQgIg3AwgiQAwgiBOAEQHJAcGxAtQBIAIA9AtQA8AtAOA5QBQFSA/GxQAKBHgtAsQgmAmg7AAIgYgCg");
	this.shape_28.setTransform(88.1029,19.3633,0.1273,0.1281);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqZH1Qg3gxAHhHQAom0AzlFQAJg3A9goQA8goBPgEQHHgVHigFQBQAAA3AkQA4AkAAA2IgCL1QAABIg+A0Qg+A1hYABQoLAFn3AZIgNAAQhMAAgzgtg");
	this.shape_29.setTransform(52.9843,18.4336,0.1273,0.1281);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("ApNJKQghgnAJhGQA1mfBIl1QAMg/A0gzQA0g0A+gMQFphFGqg4QBGgIAnAhQAoAhgOA6QhQFUhAGvQgKBHg6A6Qg6A6hHAKQmuA/lTBQQgOADgNAAQgnAAgZgeg");
	this.shape_30.setTransform(21.2371,21.3882,0.1273,0.1281);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AIcGwQluhGmkg2QhGgKg8gsQg9gtgPg0Qhdk9hsjFQgTgiAjgVQAhgWBFgBIMsAAQBFAAA7AhQA9AhAPAwQBfEaBRFlQANA7giAhQgZAagoAAQgPAAgQgEg");
	this.shape_31.setTransform(100.8338,9.5788,0.1273,0.1281);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AHhEuQnWgVnUgDQhPAAg5gkQg3gjAAguQABjCACjcQABgWAwgNQAugNBHAAIMrAAQBGAAA3APQA4APAMAZQBBCQA5ElQAKAwgxAhQgtAehDAAIgPAAg");
	this.shape_32.setTransform(70.3623,7.8702,0.1273,0.1281);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AqNFGQgoghAPg0QBek/BsjEQASghA+gXQA8gVBGAAIMsAAQBFAAAmAPQAnAQgLAYQhECTg8ElQgJAwg9AnQg+AnhMAFQm8Acm6AvQgPACgNAAQg0AAgggag");
	this.shape_33.setTransform(38.5725,8.509,0.1273,0.1281);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f(DBLColorManager.platform_white_alpha_30).s().p("AoHIRQghgkAAhFIAAssQgBhFAwgwQAwgwBFAAIMsAAQBFABAkAhQAkAggRAwQheEahRFlQgNA6g0A0Qg0A0g6ANQlhBPkcBfQgPAFgNAAQgeAAgWgZg");
	this.shape_34.setTransform(11.0451,11.0934,0.1273,0.1281);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(5));

	// fill
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf([DBLColorManager.color("engagement_surface_avatar_top"),DBLColorManager.color("engagement_surface_avatar_bottom")],[0,1],0,0,0,0,0,80.1).s().p("An4JJQhQAAAAhQIAAvxQAAhQBQAAIPxAAQBQAAAABQIAAPxQAABQhQAAg");
	this.shape_35.setTransform(62.5,62.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf([DBLColorManager.color("engagement_surface_avatar_top"),DBLColorManager.color("engagement_surface_avatar_bottom")],[0,1],1,1,0,1,1,80.1).s().p("AnuI/QhQAAAAhQIAAvdQAAhQBQAAIPdAAQBQAAAABQIAAPdQAABQhQAAg");
	this.shape_36.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// stroke
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f(DBLColorManager.color("engagement_surface_stroke")).s().p("An4JdQhkAAAAhkIAAvxQAAhkBkAAIPxAAQBkAAAABkIAAPxQAABkhkAAg");
	this.shape_37.setTransform(62.5,62.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f(DBLColorManager.color("engagement_surface_stroke")).s().p("An4JxQh4AAAAh4IAAvxQAAh4B4AAIPxAAQB4AAAAB4IAAPxQAAB4h4AAg");
	this.shape_38.setTransform(62.5,62.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f(DBLColorManager.color("engagement_surface_stroke")).s().p("AnuJTQhkAAAAhkIAAvdQAAhkBkAAIPdAAQBkAAAABkIAAPdQAABkhkAAg");
	this.shape_39.setTransform(62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).wait(1));

	// shadow
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f(DBLColorManager.platform_black_alpha_40).s().p("An4JdQhkAAAAhkIAAvxQAAhkBkAAIPxAAQBkAAAABkIAAPxQAABkhkAAg");
	this.shape_40.setTransform(64.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2,2,123,123);
p.frameBounds = [rect, new cjs.Rectangle(0,0,125,125), new cjs.Rectangle(3,3,119,119), new cjs.Rectangle(2,2,123,123), new cjs.Rectangle(-4,-4,133,133)];


// stage content:
(lib.DBLAAvatarEditorcolor = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AvatarEditorBackground();
	this.instance.setTransform(450,169.15,1,1,0,0,0,123,154);

	this.instance_1 = new lib.ItemSkinColorButton();
	this.instance_1.setTransform(152.9,66.9,1,1,0,0,0,18.5,18.5);

	this.instance_2 = new lib.TabButton();
	this.instance_2.setTransform(271.7,43.15,1,1,0,0,0,46.5,22);

	this.instance_3 = new lib.ItemColorButton();
	this.instance_3.setTransform(142.15,20.6,1,1,0,0,0,18.5,18.5);

	this.instance_4 = new lib.ItemButton();
	this.instance_4.setTransform(58.5,58.5,1,1,0,0,0,58.5,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(514,386,602,321.2);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '99268BB68F9910409D63B7678D2F6A5C',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#999999",
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