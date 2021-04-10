(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"The_hungry_Bony_atlas_1", frames: [[0,0,1705,1297]]},
		{name:"The_hungry_Bony_atlas_2", frames: [[0,0,1705,1297]]},
		{name:"The_hungry_Bony_atlas_3", frames: [[0,0,1207,1297]]},
		{name:"The_hungry_Bony_atlas_4", frames: [[0,0,1166,1297]]},
		{name:"The_hungry_Bony_atlas_5", frames: [[0,0,1166,1297]]},
		{name:"The_hungry_Bony_atlas_6", frames: [[0,0,1166,1297]]},
		{name:"The_hungry_Bony_atlas_7", frames: [[0,0,1166,1297]]},
		{name:"The_hungry_Bony_atlas_8", frames: [[0,1299,1301,745],[0,0,1166,1297]]},
		{name:"The_hungry_Bony_atlas_9", frames: [[0,0,1287,745],[0,747,1287,745]]},
		{name:"The_hungry_Bony_atlas_10", frames: [[0,747,1251,745],[0,0,1281,745]]},
		{name:"The_hungry_Bony_atlas_11", frames: [[0,747,1201,745],[0,0,1225,745]]},
		{name:"The_hungry_Bony_atlas_12", frames: [[0,747,1145,745],[0,0,1171,745]]},
		{name:"The_hungry_Bony_atlas_13", frames: [[0,747,1071,745],[0,0,1121,745]]},
		{name:"The_hungry_Bony_atlas_14", frames: [[635,980,630,745],[1267,980,630,745],[0,0,1045,745],[1047,0,721,978],[0,980,633,846]]},
		{name:"The_hungry_Bony_atlas_15", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_16", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_17", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_18", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_19", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_20", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_21", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_22", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_23", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_24", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_25", frames: [[0,0,630,745],[0,747,630,745],[632,0,630,745],[1264,0,630,745],[632,747,630,745],[1264,747,630,745]]},
		{name:"The_hungry_Bony_atlas_26", frames: [[0,1496,1242,224],[0,1722,193,192],[195,1722,193,192],[390,1722,193,192],[585,1722,193,192],[780,1722,193,192],[975,1722,193,192],[0,0,628,746],[0,748,628,746],[630,0,628,746],[1260,0,628,746],[630,748,628,746],[1260,748,628,746]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_103 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_15"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_16"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_17"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_18"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_19"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_20"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_21"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_22"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_23"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_24"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_25"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["The_hungry_Bony_atlas_26"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQUHAQACAQAAAQQAADYkvCYQkuCZmrAAQiwAAibgaQjdglixhaQh3g8hIhGQgsADgtAAQlVAAjxibQjwiZAAjaQAAjZDwiZQBHgtBOggQgdhGAAhNQAAjYDkiYQDliZFDAAQDFAACjA5QBnAlBYA7QALAHAKAHQA5g1BUgvQEJiTF4AAQF3AAEJCTQEKCTAADQQAADPkKCTQgRAJgRAJQJnhghbHSQhcHSk7g2Qk7g3gpiZgAQOGdQAEARACAS");
	this.shape.setTransform(181.8369,100.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak9POQjdgkixhaQh3g8hIhGQgsADgtgBQlVABjxibQjwiaAAjZQAAjZDwiZQBHguBOgfQgdhGAAhNQAAjXDkiZQDliYFDAAQDFAACjA4QBnAlBYA7IAVAOQA5g1BUgvQEJiTF4AAQF3AAEJCTQEKCTAADQQAADPkKCTIgiASQJnhghbHSQhcHSk7g3Qk7g2gpiZQgCgSgEgRQAEARACASQACAQAAAQQAADYkvCYQkuCYmrAAQiwAAibgag");
	this.shape_1.setTransform(181.8369,100.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,365.7,202.1), null);


(lib.start = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#323232").s().p("AFxLZQgvgvAAhEQAAhDAvguQAvgwBDAAQBEAAAuAwQAvAuAABDQAABEgvAvQguAvhEgBQhDABgvgvgApxKeQgvgvAAhDQAAhEAvguQAvgvBDAAQBDAAAvAvQAvAuAABEQAABDgvAvQgvAvhDAAQhDAAgvgvgAhjEFQgugwgBhDQABhDAugvQAwguBCAAQBDAAAvAuQAuAvABBDQgBBDguAwQgvAuhDAAQhCAAgwgugAJaAaQgugtgBhEQABhEAuguQAwguBCgBQBEABAvAuQAvAuAABEQAABEgvAtQgvAvhEAAQhCAAgwgvgAs+iaQgugvAAhEQAAhDAuguQAvgvBDAAQBDAAAvAvQAvAuAABDQAABEgvAvQgvAuhDABQhDgBgvgugACGn0QguguAAhDQAAhEAugvQAwguBDAAQBDAAAvAuQAvAvAABEQAABDgvAuQgvAwhDAAQhDAAgwgwg");
	this.shape.setTransform(98.45,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("As0MzQlTlUAAnfQAAneFTlWQFWlTHeAAQHfAAFUFTQFVFWAAHeQAAHflVFUQlUFVnfAAQneAAlWlVgAHbHPQgwAuABBDQgBBEAwAvQAuAvBEgBQBDABAugvQAvgvAAhEQAAhDgvguQgugwhDAAQhEAAguAwgAoIGUQguAugBBEQABBDAuAvQAvAvBDAAQBEAAAvgvQAugvABhDQgBhEguguQgvgvhEAAQhDAAgvAvgAAGgFQguAuAABDQAABDAuAwQAvAuBDAAQBDAAAvguQAvgwAAhDQAAhDgvguQgvgvhDAAQhDAAgvAvgALEjvQgvAuAABEQAABEAvAuQAvAuBDAAQBEAAAuguQAvguAAhEQAAhEgvguQguguhEgBQhDABgvAugArUmkQgvAuAABDQAABEAvAvQAuAuBDABQBDgBAwguQAugvAAhEQAAhDguguQgwgvhDAAQhDAAguAvgADwr+QguAvAABEQAABDAuAuQAvAwBEAAQBDAAAugwQAwgugBhDQABhEgwgvQguguhDAAQhEAAgvAug");
	this.shape_1.setTransform(87.9,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-28.1,232,232);


(lib.Scene_1_bony_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bony_end
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(525.5,347.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(525.5,347.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(525.5,347.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(525.5,347.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(525.5,347.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(525.5,347.85,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Agh55QACAAABAAQBZAABQAOICIAlQA+AXBAAkQAGAEAGAEQBBAuA7BCQAYAcAWAgQAkAyAfAzIABgBQgBgDgBgCIACgEIA+hqQAGgBAHgBQAEAAAFgBQCDgZhfhJQgTgPgagQQghgUgtgWQgJgFgIgEIgBAAQgkgPgVgBQgigBABAfQABAZAVAuIgcAxQgOgRgOgPQgrgugygfQgGgEgGgDAM38kQgCgBgCgBQghgMgggHQgOgDgOgCQgagEgaAAQgHAAgGABQhYADhDAxQgOAJgNAMQguArgUA0QgPAoAAAtQAAAZADAgABu3kQB4g+BbB3ACL5rQBIANBAAYALm5jQAqhJAdgDQAIgBAGADAKLz8Qgjg5gqg3QgRgXgSgUIgCAEAXsiUQi+hhhDldQgBgEAAgFQgCgEAAgDQgHgkgFgmQhAnfABgEQg3nCh9hoQhKg+gzgbAOI5DQg1BagngTANq8OQgagNgZgJANx8SQgigSgYAAAYdiAQgXgIgWgKQgCgBgCgBANqn5QBFEBBvBAQCNBSCQAIQAZABAbAAQBOgIBggbAR1okQAYCaB3B5QBmBnCCAWALPx3QADAIAEAIQADAIAEAIQAJAMANAsQA8CMAcCRQARBUAGBcQACAiABAjQACAKADAKAKKzyQAlA9AgA+AKLzzQAmA9AeA/AH1riQgNAtgPAYAgh0BQD/gNC/COQBqBNBWB9QBTB4ArBhQAcBAAKA1QACAKACAMQAKBGAHCEQACA5ACBEQACBjAhB6QAvj5gCjSAIqqqQgWBQgfAMAFlzyQAdADAbAFQDwAsAfDlABus+QCYhwCXBfQANAIANAJAG9sNQgKAjgLAXAB4i8QgSAWAZAqQAaArgcgBQgcgBgXgDQgigGggAAQgSgBgSABQgGABgGABQgSAEgMABQgLABgIgGQgJgHANgpQAOgqgJgMQgJgMgLgYQgCgFgCgDQgNgZAhACQAIABAGgBQAMAAAegVQBghVAJA3QAKA2AZAAQAIABAKgBQApgCgQAZQgSAYgRAVgAmHg7QAXACAVAMQAHAEAEAEQAJAGAJAJQATASAMAVQADAGABAGQASAvgOA7QgNA7gwBJQgOATgYAnQgbAmgrA/QgVAfgFAaQgDAQADAOQAJAmA7AWASCkdQAEAEAFAEQBwCpEigUAItiiQgGADgFADQgVANgOARQgxAjgxAcQmADcmWjbQgCgBgCgBAItiiQACAJACAJIA/MkQArHyhBBdQgEAFgDAFQgRAWgYATQgvAlhJAYQgKADgLADQh2Ahi2ACQg0ABg5gCQg/gDg4gFQk2gchvhwQgVgUgNgXQgyhUArk4QhGgPgngfQglgdgVgqQg/iBAYi6QAai3CqihQATgTATgPQABgBAAAAQANgKANgJQABAAABgBQBIgyA5AGQABgHACgGQAAgBAAAAAItiiQB1heB0iIACjV7QAUApASAdQAdAuATApQAnBTgBA9QgCBcBGAbQAYAJAiAHQBBANBnAGQCcAJBphBQBphBiIghQiHgigrglQgjgfgNgqQgLggADgoQAIhvAViDAmXJBQAKAAALADQAzASAlAVQAmAVgNBKQgMBIg3AZQgmAPglAFQg+gBgxgGQgbgDgYgFAhzV4QgGAdgRAcQgdAvgTApQgmBSABA+QACBchFAaQhEAaiaAJQiaAJhnhBQhnhBCGghQCEghAqgmQAjgeANgqQAKghgDgnQgHhwgUhlAB22mQCDgeAzBpAgh55QBRDXhRChQjLANiNBNQhHAmg2A2QgZAYgWAcQgiArgdAtQinEKAkFJQBDBVBAA3QA3AuA3AmQAKAHBAAlIAhATQABABABAAQABABABAAIABABA4JhHQASgLARgNQCZh5A4lKQAFgeAEghQABgJABgKQA7negBgEQAql6BYiGQARgaATgRQALgKANgKQA6gsBUgdQAOgFAQgFQAigHAwgLIAigIQBQABA+AxQANAKAMAMQBKBKAABpQAAAZgEAYQAHgGAIgGQA7gtBCggQCYhJDAgBAs248IAjA8Att2wQgQgQgMgOAqM1HQgOARgNARQgrA5gkA8Ig/huQgGgBgHgBQgEgBgEgBQiCgYBehKQASgOAagQQAggUAtgXQAJgEAIgFIABAAQBZgmgBA1QgBAYgVAvIAcAwQAQgVARgUQAtg0AygpAqF1QQgCACgBABIgBADQgCABgBACAt5mnQgUhaABhdQAEjpBUjTQA5iPBdiGQAJgMAJgMAr/uKQAAgMABgMQAHheA1g9QACgCABgDQAxg3BZgbAn4rgQAYApAVAUAncsgQAygkAxgPQBzgiBzBVAohqpQAYArAWATApEplQAjA9AdAMAzSndQgRBLgQA6QgQA6gkAuQglAugNAMQgMAMgJAHQgPANhpBNQgFADgFAEA36g9QAFgGAFgEQgHAAgHAAQgGAAgFAAQgGAAgFgBQgEAAgEALQAJgFAKgFA36g9QgFAAgFAAA0Ui9QgyBHhKAgQgnASgvAFQgKABgKABAt5mnQhAEeieBEQivBKjggzQgCgBgDgBQgYgFgZgIArnlsQAPCDBDClQAQAmASAmQgdgdgZgdQiqjGgmivAis3UQiDg5hFBfAiT14QiDg6hGBf");
	this.shape.setTransform(682.525,534.2297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFFFF").s().p("ALuCtIgEgFIgBgCIgNgSIgEgFQhuiKhnA1QB1heBziIIAFB9QACBiAgB6gAsRiPQBDBVBAA2QA3AtA2AmQALAHBAAlIAhATIACACIACABIABAAIAAAAIAAABQivhHhgBMQhEikgOiCg");
	this.shape_1.setTransform(686.75,512.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AhqFuQicgqhSiLQgbgwgOgyQAyAGA9ABQAmgFAmgPQA2gZANhHQAMhKglgVQglgVgzgSQgMgDgJAAIAAgEQg7gWgIgmQAwhJBSgvIAAgBIATgJQAfgQAggKIAEALIAIARIAJANQAXAfAnALQACASAJASIAFAIQAbAxA2APQAoAKAlgMQANgFAOgHIAQgJIACgCIgHgHIAKgGQAMALAPAHQALAGANADQAoALAmgPIAKgGIACgBIACADIACADIACADQAsBNAIBSQADAigEAiQgDAhgJAiQgLAqgTAlQgHAPgKAPQgxBNhVAxQhcA0hiAAQg0AAg2gOgAB/CnQgKAHgDALQgDALAGAJQAGALALADQALADAKgGQALgGADgLQADgLgGgKQgGgKgLgDIgIgBQgHAAgHADgAjoBxQgKAGgDALQgDALAGAKQAGAKALADQALADAKgFQALgGADgLQADgLgHgLQgFgKgLgDIgIgBQgHAAgHAEgAgdA3QgKAGgDALQgDALAGAKQAGAKALADQAMADAJgGQAKgFADgMQADgLgHgKQgFgKgKgDIgHgBQgIAAgHAEgAClgZQgJAGgDALQgDAKAFAJQAGALALADQALADALgGQAKgGADgLQADgKgGgKQgGgKgLgDIgIgBQgHAAgHAEgAgTjHQgKAGgDALQgDAMAGAJQAGALALADQALADAJgGQAKgFADgMQADgLgFgKQgGgKgLgDIgHgCQgHAAgHAEg");
	this.shape_2.setTransform(668.3567,607.948);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AgRMOQg/gDg5gFQk2gchvhwQgUgUgOgXQgxhUArk4QAXAFAbADQAOAyAbAwQBSCLCcAqQCdAqCLhQQBVgxAxhNQAKgPAHgPQATglALgqQAJgiADghQAEgjgDgiQgIhRgshNIgCgDIgCgDIgCgDIgCABIgKAGQgmAPgogLQgNgDgLgGQgPgHgMgLIgKAGIAHAHIgCACIgQAJQgNAHgNAFQglAMgogKQg2gPgcgxIgFgIQgJgSgCgSQgngLgXgfIgJgNIgIgRIgEgLQggAKgfAQIgTAJIAAABQhSAvgwBJQgEgOAEgQQAFgaAVgfIBGhlQAXgnAOgTQAwhJAOg7QANg7gRgvQgCgGgDgGQgMgWgSgSQgJgJgKgGQgEgEgHgEQgVgMgXgCIADgNIAHAIIAEACQGWDcGBjdQAxgcAwgjIAvgkIADASIA/MkQArHyhBBdIgHAKQgRAWgYATQgvAlhJAYIgUAGQh3Ahi2ACIgVABQgqAAgtgCgAmeq5IgCgBIgigTQgkgWAFABIAYALQAZANATASIABAAIgCgBg");
	this.shape_3.setTransform(684.6899,596.305);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("ABjB9QgcgBgWgDQgigGgfAAQgUgBgSABIgMACIgdAFQgLABgJgGQgJgHAOgpQANgqgJgMQgIgMgLgXIgEgIQgOgZAhACIAPAAQAMAAAegVQBfhVAKA3QAJA2AZAAIATAAQApgCgRAZQgRAYgSAUQgRAWAZAqQAZAqgaAAIgCAAg");
	this.shape_4.setTransform(685.0658,513.4365);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC3A2").s().p("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");
	this.shape_5.setTransform(686.1821,563.004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AABNbQgLgDgGgLQgFgJADgLQADgLAKgHQAJgFALADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgHAAIgHgBgAlmMkQgMgDgGgKQgFgKADgLQADgLAJgGQALgGALADQALADAGAKQAGALgDALQgDALgKAGQgHADgHAAIgHgBgAibLqQgLgDgGgKQgGgKADgLQADgLAKgGQAKgGALADQAMADAFAKQAGAKgDALQgDAMgKAFQgHAEgHAAIgHgBgAAnKZQgLgDgGgLQgGgJADgLQADgLAKgGQAKgGALADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgHAAIgHgBgAiRHsQgMgDgGgLQgGgJADgMQADgLALgGQAKgFALADQALADAGAKQAGAKgDALQgDAMgKAFQgHAEgHAAIgHgBgAlEm4QgUgBgUgGIgKgDIgUgHIgLgGIgIgDIgBgBIgCgBIAAAAIgBgBIgigbIgCgCIAAAAIgCgCIgDgDQgJgKgIgMIgCgDIgGgJIgKgVIgFgMIgBgBIgDgMIgBgFIgDgLIgBgGIAAgBIgBgSIgBgDIAAgBIAAgCIAAgBIABgGIAAgTIAAgBIAAgBIABgCIABgHIACgKIACgHIgBgBIACgFIADgIIAEgNIADgFIAEgJIACgDIALgSIADgEIAUgWIACgEIAAAAIACgCIAAgBIABAAIABgBIAAAAIACgBIAKgIIAEgDIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABgBIABAAIAFAAIAAgBIADAAIATgBIADAAIADAAIABAAIAKAAIABAAIABAAIACAAIACABIABAAIADAAIAHAAIACABIAAAAIADAAIACABIABAAIAOAEIAEABIAFABIABAAIAEABIABABIACABIAEABIAGACIAOAIIADABIAPAIIAIAHIALAIIABABIABABIACABQALAKAKANIABABIADAEIABABIAAABIABABIAAAAIABAAIABADIABABIABABIABABIAAABIABABIAAAAIABACIABABIAAABIACAFQAIANAFAOIAEAJIAAAAIABACIAAABIABABIAAAAIADANIAAABIAAABIABABIAAADIACAMIABACIAAABQABAQAAAQIgBAIIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIAAACIAAAAIgBACIgFAMIgBADIAAABIgBABIAAABIgGALQgOAZgWAUIgFAFIgGAEIAAABIgEADIgCABIgEADIgHAEIgJAGIgIAFIgIADIgKAFQgSAHgRADIgLACIgQABIgFAAIgIAAIgIAAgAlHnvIABAAIABAAIADABIAGAAIABAAIABAAIACgBIABAAIAQgFQAjgNATgoQAOgngFgpIgCgOQgCgOgFgMQgLgcgWgTQgSgPgUgDIgBgBIgFAAIgBAAIgWAEQgJADgIAGIgDABQgTASgLAaIgCAFIgIAXIgCAHQgHAdAHAhQAKAvAfAaIATALIAAACIABABIABAAIABgCIANAEgAEHnbQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBgBIgigcQgRgRgOgXIgLgWIgFgNIgEgMIAAgFIgDgLIgBgDIAAgCIAAgCIgCgVIABgcIgBgBIABgCIACgJIADgRIAAgBIACgEQADgMAEgJIAHgOIABgEIALgRIADgEIAXgaIAAgBIACgCIABgBIABAAIACgCIAJgHIAFgEIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABAAIABAAIAFgBIABAAIADAAIATgCIACAAIADAAIABAAIABAAIAJAAIABAAIABABIACAAIADAAIABAAIADABIAHAAIABABIABgBIACABIACAAIACABIANADIAFABIAFACIAAAAIAEABIABAAIADABIADACIAHACIAOAHIACABIANAIIALAHIAKAIIABABIABABIACACQAMAKALAOIACADIABACIAAABIABAAIABAAIACAEIAAAAIACADIACADIABACIABABIACAFQAHANAFANIAEAJIAAABIABADIABABIADANIAAAAIAAABIABACIADARIAAAAQABAQAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIgGAQIgBAEIAAAAIgBACIAAAAIgFALQgPAagWAUIgFAFIgGAEIAAABIgEADIgCABIgLAIIgJAFIgQAIQgWALgXAEIgLABIgUABIgJAAQgYAAgYgGgAE2oOIABAAIABAAIADABIAFAAIACAAIABAAIACgBIABAAIAPgFQAkgNASgoQALgfAAgfIAAgBQAAgPgDgQQgDgOgFgMQgLgcgWgTQgSgPgTgDIgCgBIgEAAIgCAAIgWAEQgJADgIAGIgCABQgUASgKAaIgDAFIgIAXQgDANgBANIgBAJQAAAQADASQALAvAfAaIASALIABACIABABIAAAAIACgCIANAEg");
	this.shape_6.setTransform(681.7313,543.9349);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("Ar/BQIgNgCIgIgBQiCgZBehIQASgPAagQQAggUAtgWIARgJIABgBQBZglgBA0QgBAZgVAuIAcAwIgDADIgBACIgDAEIgbAiQgrA5gkA7gAJ0ACQgRgVgSgVIAcgwQgVgvgBgYQgBgdAdgBQAVABAkAOIABAAIARAJQAtAXAhAUQAaAQATAOQBfBKiDAXIgJACIgNACIg+BqQgjg6gqg3g");
	this.shape_7.setTransform(677.1449,395.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AO5NJIAQAAIAAAJIgQgJgAgHJ9IALgGIguAjQAPgRAUgMgAshI/IAAAAIAAAAgAtsGLIgCAAIgFAAIgDAAIgBAAIgBAAIgNgEIgCABIAAAAIgBgBIgBgBIgSgMQgfgZgLgvQgGgiAHgdIABgHIAIgWIADgGQAKgaAUgRIACgBQAIgGAJgDIAWgFIACAAIAEABIACAAQATADASAPQAWATALAdQAFAMADAOIACAOQAEApgOAmQgSAogkAOIgPAFIgBAAIgCAAIgBAAgAjvFsIgBAAIgGAAIgDAAIgBAAIgBAAIgNgEIgBABIgBAAIgBgBIAAgBIgTgMQgfgZgKgvQgEgSABgQIAAgJQABgOAEgNIAIgWIACgGQALgaATgRIADgBQAIgGAJgDIAWgFIABAAIAFABIABAAQAUADASAPQAWATALAdQAFAMACAOQADAPABAPIAAABQAAAggLAeQgTAogjAOIgQAFIgBAAIgCAAIgBAAgAmdtRQBHAMBAAYg");
	this.shape_8.setTransform(737.8724,454.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B251C").s().p("AqpNqQiqjGgmiuQgThUAAhXIAAgNQAEjoBUjTQA5iPBdiFIASgYIADgEIABgDIADgCQAQgWARgUQAtg0AygoQgyAogtA0QgRAUgQAWIgcgxQAVguABgZQABg0hZAlIgBABIgRAIQgtAXggAUQgaAQgSAOQheBKCCAZIAIABIANACIA/BuQAkg7Arg5IAbgiIgSAYQhdCFg5CPQhUDTgEDoIAAANQAABXATBUQhAEdieBEQivBLjgg0IgFgBQgYgGgZgIIATgKQASgLARgNQCZh5A4lKIAJg/IACgTQA7ndgBgEQAql5BYiGQARgbATgRIAYgTQA6gsBUgdIBwgdIAigIQBQACA+AwQANAKAMAMQBKBLAABoQAAAZgEAZIAPgMQA7guBCggQCYhJDAAAIADAAQBZgBBQAOICIAlQA+AXBAAkIAMAJQBBAtA7BCQAYAdAWAfQAkAzAfAyQAlA9AgA/QgehAgmg9IgCgEIACgFIA+hqIANgCIAJgBQCDgZhfhJQgTgOgagQQghgVgtgWIgRgJIgBAAQgkgPgVgBQgigBABAgQABAYAVAvIgcAwIgcggQgrgugygeIgMgIQgDggAAgZQAAgtAPgoQAUg0AugqQANgMAOgKQBDgxBYgDIANAAQAaAAAaAEIAcAFQAgAGAhANIAEABQAZAJAaANQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQAzAaBKA+QB9BoA3HCQgBAFBAHdQAFAmAHAkIACAIIABAIQBDFdC+BhQiCgWhmhmQh3h5gYibQAYCbB3B5QBmBmCCAWIAEACQAWALAXAHIgCAAQgeACgcAAIAAAAIgBAAQjxAAhkiXIgJgIIABABIAIAHQBkCXDxAAIABAAIAAAAQAcAAAegCIACAAQhgAchOAHIg0gBQiQgIiNhSQhvhAhFkAIgFgVIgDhFQgGhcgRhUQgciRg8iKQgNgsgJgNIgHgQIgHgPIAHAPIAHAQQAJANANAsQA8CKAcCRQARBUAGBcIADBFIAFAVQACDRgvD5Qghh6gChjIgEh9QgHiDgKhHIgEgVQgKg2gchAQgrhghTh4QhWh8hqhOQi/iNj/AMQAohRAAhdQAAhegohrQAoBrAABeQAABdgoBRQjLANiNBNQhHAmg2A2QgZAYgWAcQgiAsgdAsQinEKAkFJQAPCCBDClIgDADQgBAAAmBKQguhDgIAIgA36NfIgKAAIAKAAQAFgGAFgEIgOAAIgLAAIALAAIAOAAQgFAEgFAGgA2QNGQgnASgvAFIgUACIAUgCQAvgFAngSQBKggAyhGQgyBGhKAggAzzJFQgQA6gkAtQglAugNAMIgVAUQgPAMhpBNIgKAIIAKgIQBphNAPgMIAVgUQANgMAlguQAkgtAQg6QAQg7ARhLQgRBLgQA7gAq/ikIgDAEQg1A9gHBeIgBAXIABgXQAHheA1g9IADgEQAxg3BZgbQhZAbgxA3gAGdlNQDwAsAfDmQgfjmjwgsQgbgFgdgDQAdADAbAFgAlcm1IADgEQArg4BBAAIAAAAIAAAAQAmAAAuAUIABAAIABAAIACABIABABIABAAIgBAAIgBgBIgCgBIgBAAIgBAAQgugUgmAAIAAAAIAAAAQhBAAgrA4IgDAEgAEsm+IgBgCIAAAAQgohPhXAAIAAAAIAAAAQgXAAgZAFIAAAAIgFABIgBAAIABAAIAFgBIAAAAQAZgFAXAAIAAAAIAAAAQBXAAAoBPIAAAAIABACIAAAAgAFBoOIgCgDQg7hLhGAAIgBAAIAAAAQglAAgoAUIAAABIgCAAIACAAIAAgBQAogUAlAAIAAAAIABAAQBGAAA7BLIACADgAl0oRIABgBIACgDQAqg3BBAAIAAAAIAAAAQAlAAAsASIABAAIACABIABAAIABABIACABIABAAIABAAIgBAAIgBAAIgCgBIgBgBIgBAAIgCgBIgBAAQgsgSglAAIAAAAIAAAAQhBAAgqA3IgCADIgBABgAttoTQgQgPgMgOQAMAOAQAPgAM7pcQAeAAAmg7IABgBIAAgBIABgBIADgFIABgBIAAgBIACgCIABgDIgBADIgCACIAAABIgBABIgDAFIgBABIAAABIgBABQgmA7geAAIgBAAIAAAAQgHAAgHgDIAAAAIAAAAQAHADAHAAIAAAAIABAAgAsTpjIgjg8gAMtsSQgdADgqBJQAqhJAdgDIADAAIAAAAIABAAIABAAQAEAAAEACIABAAIgBAAQgEgCgEAAIgBAAIgBAAIAAAAIgDAAgATtE6QgHgkgFgmQhAndABgFQg3nCh9hoQhKg+gzgaQAPgJBuBcQB9BoA3HDQgBADBAHeQAGArAHAmIgBgCgAghlkIAAAAg");
	this.shape_9.setTransform(682.525,441.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Agh55QACAAABAAQBZAABQAOQBIANBAAYQA+AXBAAkAKLz8IA+hqQAGgBAHgBQAEAAAFgBQCDgZhfhJQgTgPgagQQghgUgtgWQgJgFgIgEIgBAAQgkgPgVgBQgigBABAfQABAZAVAuIgcAxQgOgRgOgPQgrgugygfQgGgEgGgDQAGAEAGAEQBBAuA7BCQAYAcAWAgQAkAyAfAzIABgBQgBgDgBgCIACgEQgjg5gqg3QgRgXgSgUIgCAEAM38kQgCgBgCgBQghgMgggHQgOgDgOgCQgagEgaAAQgHAAgGABQhYADhDAxQgOAJgNAMQguArgUA0QgPAoAAAtQAAAZADAgACL5rICIAlABu3kQB4g+BbB3ALm5jQAqhJAdgDQAIgBAGADAXsiUQi+hhhDldQgBgEAAgFQgCgEAAgDQgHgkgFgmQhAnfABgEQg3nCh9hoQhKg+gzgbANx8SQgigSgYAAANq8OQgagNgZgJAOI5DQg1BagngTAYdiAQgXgIgWgKQgCgBgCgBANqn5QBFEBBvBAQCNBSCQAIQAZABAbAAQBOgIBggbAR1okQAYCaB3B5QBmBnCCAWALPx3QADAIAEAIQADAIAEAIQAJAMANAsQA8CMAcCRQARBUAGBcQACAiABAjQACAKADAKAKLzzQAmA9AeA/AKKzyQAlA9AgA+AH1riQgNAtgPAYAgh0BQD/gNC/COQBqBNBWB9QBTB4ArBhQAcBAAKA1QACAKACAMQAKBGAHCEQACA5ACBEQACBjAhB6QAvj5gCjSAIqqqQgWBPgfAMAFlzyQAdADAbAFQDwAsAfDlABus+QCYhwCXBfQANAIANAJAG9sNQgKAjgLAXAjsjuIH0AAQheCAhqASQgXADgYgBQh3gHiGiNgAmHg7QAXACAVAMQAHAEAEAEQAJAGAJAJQATASAMAVQADAGABAGQASAvgOA7QgNA7gwBJQgOATgYAnQgbAmgrA/QgVAfgFAaQgDAQADAOQAJAmA7AWASCkdQAEAEAFAEQBwCpEigUAItiiQACAJACAJIA/MkQArHyhBBdQgEAFgDAFQgRAWgYATQgvAlhJAYQgKADgLADQh2Ahi2ACQg0ABg5gCQg/gDg4gFQk2gchvhwQgVgUgNgXQgyhUArk4QhGgPgngfQglgdgVgqQg/iBAYi6QAai3CqihQATgTATgPQABgBAAAAQANgKANgJQABAAABgBQBIgyA5AGQABgHACgGQAAgBAAAAAItiiQgGADgFADQgVANgOARQgxAjgxAcQmADcmWjbQgCgBgCgBAItiiQB1heB0iIACjV7QAUApASAdQAdAuATApQAnBTgBA9QgCBcBGAbQAYAJAiAHQBBANBnAGQCcAJBphBQBphBiIghQiHgigrglQgjgfgNgqQgLggADgoQAIhvAViDAmXJBQAKAAALADQAzASAlAVQAmAVgNBKQgMBIg3AZQgmAPglAFQg+gBgxgGQgbgDgYgFAhzV4QgGAdgRAcQgdAvgTApQgmBSABA+QACBchFAaQhEAaiaAJQiaAJhnhBQhnhBCGghQCEghAqgmQAjgeANgqQAKghgDgnQgHhwgUhlAgh55QBRDXhRChQjLANiNBNQhHAmg2A2QgZAYgWAcQgiArgdAtQinEKAkFJQBDBVBAA3QA3AuA3AmQAKAHBAAlIAhATQABABABAAQABABABAAIABABAB22mQCDgeAzBpA4JhHQASgLARgNQCZh5A4lKQAFgeAEghQABgJABgKQA7negBgEQAql6BYiGQARgaATgRQALgKANgKQA6gsBUgdQAOgFAQgFQAigHAwgLIAigIQBQABA+AxQANAKAMAMQBKBKAABpQAAAZgEAYQAHgGAIgGQA7gtBCggQCYhJDAgBAqM1HQgOARgNARQgrA5gkA8Ig/huQgGgBgHgBQgEgBgEgBQiCgYBehKQASgOAagQQAggUAtgXQAJgEAIgFIABAAQBZgmgBA1QgBAYgVAvIAcAwQAQgVARgUQAtg0AygpAtt2wQgQgQgMgOAs248IAjA8AqF1QQgCACgBABIgBADQgCABgBACAt5mnQgUhaABhdQAEjpBUjTQA5iPBdiGQAJgMAJgMAr/uKQAAgMABgMQAHheA1g9QACgCABgDQAxg3BZgbAn4rgQAXAnAUAUAncsgQAygkAxgPQBzgiBzBVApEplQAhA7AdANAohqpQAXApAWATAzSndQgRBLgQA6QgQA6gkAuQglAugNAMQgMAMgJAHQgPANhpBNQgFADgFAEA36g9QAFgGAFgEQgHAAgHAAQgGAAgFAAQgGAAgFgBQgEAAgEALQAJgFAKgFA0Ui9QgyBHhKAgQgnASgvAFQgKABgKABQgFAAgFAAAt5mnQhAEeieBEQivBKjggzQgCgBgDgBQgYgFgZgIArnlsQAPCDBDClQAQAmASAmQgdgdgZgdQiqjGgmivAiT14QiDg6hGBfAis3UQiDg5hFBf");
	this.shape_10.setTransform(682.525,534.2297);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6666").s().p("AADBKQh2gIiGiLIHzAAQheB/hqARQgSADgSAAIgLAAg");
	this.shape_11.setTransform(683.875,517.7611);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC3A2").s().p("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");
	this.shape_12.setTransform(686.1821,563.004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABNbQgLgDgGgLQgFgJADgLQADgLAKgHQAJgFALADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgHAAIgHgBgAlmMkQgMgDgGgKQgFgKADgLQADgLAJgGQALgGALADQALADAGAKQAGALgDALQgDALgKAGQgHADgGAAIgIgBgAibLqQgLgDgGgKQgGgKADgLQADgLAKgGQAKgGALADQAMADAFAKQAGAKgDALQgDAMgKAFQgGAEgIAAIgHgBgAAnKZQgLgDgGgLQgGgJADgLQADgLAKgGQAKgGALADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgHAAIgHgBgAiRHsQgMgDgGgLQgGgJADgMQADgLALgGQAKgFALADQALADAGAKQAGAKgDALQgDAMgKAFQgHAEgHAAIgHgBgAk+m4QgYAAgYgHQgPgEgPgGIgLgGIgIgDIgBgBIgCgBIAAAAIgBgBIgigcIgNgOQgKgMgJgOIgKgWIgGgNIgDgMIgBgFIgDgLIgBgDIAAgCIAAgCIgCgVIABgKIAAgSIAAgBIAAgCIACgJIAEgRIgBgBIACgEQADgMAEgJIAEgHIADgHIACgEIALgRIADgEIAUgYIACgCIAAgBIACgCIACgBIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIAAAAIABAAIAKAAIABAAIABABIABAAIABAAIACAAIACAAIACABIAHAAIABAAIABAAIADABIACAAIABABIABAAIABAAIAMADIACABIAEABIAEABIACAAIACABIACAAIAAAAIABABIAAAAIACABIAEABIAGACIAOAIIADABIAPAIIAIAHIALAIIABABIABABIACABQALAKAKANIABABIADAEIABABIAAABIABABIAAAAIABAAIABADIABABIABABIABABIAAABIABABIAAAAIABACIABABIAAABIACAFQAIANAFAOIAEAJIAAAAIABACIAAABIABABIAAAAIADANIAAABIAAABIABABIAAADIACAMIABACIAAABQABAQAAAQIgBAIIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIAAACIAAAAIgBACIgFAMIAAAAIgBADIAAABIgBABIAAABIgGALQgOAZgWAUIgFAFIgGAEIAAABIgEADIgCABIgEADIgHAEIgJAGIgIAFIgIADIgKAFQgSAHgRADIgLACIgQABIgCAAIgDAAIgIAAIgCAAgAEGnYQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBgBIgigcIgMgOQgLgMgIgOIgLgWIgFgNIgEgMIAAgFIgDgLIgBgDIAAgCIAAgCIgCgVIABgcIgBgBIABgCIACgJIADgRIAAgBIABgCIAAgBIABgCIAEgMIAEgLIAHgOIABgEIALgRIADgEIAXgaIAAgBIACgCIABgBIABAAIACgCIAJgHIAFgEIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABAAIABAAIAFgBIABAAIADAAIATgCIACAAIADAAIABAAIABAAIAJAAIABAAIABABIACAAIADAAIABAAIADABIAHAAIABABIABgBIACABIACAAIACABIANADIAFABIAFACIAAAAIAEABIABAAIADABIADACIAHACIAOAHIACABIANAIIALAHIAKAIIABABIABABIACACQAMAKALAOIACADIABACIAAABIABAAIABAAIACAEIAAAAIACADIACADIABACIABABIACAFQAGALAFALIADAIIACAGIABADIABAAIAAACIABABIAAABIAAAAIADANIABABIAAABIAAABIABADIACAKIAAACIAAACIAAABQACAQgBAQIgBAIIgBALIgBAGIgBAFIAAABIgBADIAAAEIgCAEIgCAJIgBAEIgBACIAAAAIgBACIgEAMIAAAAIgBADIgBABIAAABIgBABIgFALQgPAZgWAUIgFAFIgGAEIAAABIgEADIgCABIgDADIgHAEIgKAGIgIAFIgIADIgKAFQgRAHgSADIgLACIgPABIgDAAIgCAAIgKAAQgZAAgYgHg");
	this.shape_13.setTransform(681.7063,543.9349);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ANlNJIAQAAIAAAJIgQgJgAhaJ9IAMgGIgvAjQAOgRAVgMgAt1I/IAAAAIABAAgAnxtRQBIAMBAAYg");
	this.shape_14.setTransform(746.2,454.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B251C").s().p("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");
	this.shape_15.setTransform(682.525,441.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,1,1).p("AjDAbQBQgsBRgHQBzgMBzA/");
	this.shape_16.setTransform(713.05,477.8618);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("Agh55QACAAABAAQBZAABQAOQBIANBAAYQA+AXBAAkAKLz8IA+hqQAGgBAHgBQAEAAAFgBQCDgZhfhJQgTgPgagQQghgUgtgWQgJgFgIgEIgBAAQgkgPgVgBQgigBABAfQABAZAVAuIgcAxQgOgRgOgPQgrgugygfQgGgEgGgDQAGAEAGAEQBBAuA7BCQAYAcAWAgQAkAyAfAzIABgBQgBgDgBgCIACgEQgjg5gqg3QgRgXgSgUIgCAEAM38kQgCgBgCgBQgEgBgEgCQgdgKgcgGQgOgDgOgCQgagEgaAAQgHAAgGABQhYADhDAxQgOAJgNAMQguArgUA0QgPAoAAAtQAAAZADAgACL5rICIAlABu3kQB4g+BbB3ALm5jQAohGAdgGQABAAABAAQAIgBAGADAXsiUQi+hhhDldQgBgEAAgFQgCgEAAgDQgHgkgFgmQgEgdgDgbQg5mnABgEQg3nCh9hoQhKg+gzgbAOI5DQg1BagogTANx8SQgigSgYAAANq8OQgagNgZgJAYdiAQgXgIgWgKQgCgBgCgBANqn5QBFEBBvBAQCNBSCQAIQAZABAbAAQBOgIBggbAR1okQAYCaB3B5QBmBnCCAWALPx3QADAIAEAIQADAIAEAIQAJAMANAsQAgBMAYBOQATBBANBCQADAPADAPQAMBGAFBMQACAiABAjQACAKADAKAKLzzQAmA9AeA/AKKzyQAlA9AgA+Agh0BQD/gNC/COQBqBNBWB9QBTB4ArBhQAcBAAKA1QACAKACAMQAKBGAHCEQACA5ACBEQACBjAhB6QAvj5gCjSAIiqXQgWBOgeANAFlzyQAdADAbAFQDwAsAfDlABus+QCYhwCXBfQANAIANAJAGpqcQgJAjgMAXAjsjuIH0AAQheCAhqASQgXADgYgBQh3gHiGiNgAmHg7QAXACAVAMQAHAEAEAEQAJAGAJAJQATASAMAVQADAGABAGQASAvgOA7QgNA7gwBJQgOATgYAnQgbAmgrA/QgVAfgFAaQgDAQADAOQAJAmA7AWASCkdQAEAEAFAEQBwCpEigUAItiiQACAJACAJIA/MkQArHyhBBdQgEAFgDAFQgRAWgYATQgvAlhJAYQgKADgLADQh2Ahi2ACQg0ABg5gCQg/gDg4gFQk2gchvhwQgVgUgNgXQgyhUArk4QhGgPgngfQglgdgVgqQg/iBAYi6QAai3CqihQATgTATgPQABgBAAAAQANgKANgJQABAAABgBQBIgyA5AGQABgHACgGQAAgBAAAAAItiiQgGADgFADQgVANgOARQgxAjgxAcQmADcmWjbQgCgBgCgBAHkqUQgNAugPAXAItiiQB1heB0iIACjV7QAUApASAdQAdAuATApQAnBTgBA9QgCBcBGAbQAYAJAiAHQBBANBnAGQCcAJBphBQBphBiIghQiHgigrglQgjgfgNgqQgLggADgoQAIhvAViDAmXJBQAKAAALADQAzASAlAVQAmAVgNBKQgMBIg3AZQgmAPglAFQg+gBgxgGQgbgDgYgFAhzV4QgGAdgRAcQgdAvgTApQgmBSABA+QACBchFAaQhEAaiaAJQiaAJhnhBQhnhBCGghQCEghAqgmQAjgeANgqQAKghgDgnQgHhwgUhlAgh55QBRDXhRChQjLANiNBNQhHAmg2A2QgZAYgWAcQgiArgdAtQinEKAkFJQBDBVBAA3QA3AuA3AmQAKAHBAAlIAhATQABABABAAQABABABAAIABABAB22mQCDgeAzBpA4JhHQASgLARgNQCZh5A4lKQAFgeAEghQABgJABgKQA7negBgEQAql6BYiGQARgaATgRQALgKANgKQA6gsBUgdQAOgFAQgFQAigHAwgLIAigIQBQABA+AxQANAKAMAMQBKBKAABpQAAAZgEAYQAHgGAIgGQA7gtBCggQCYhJDAgBAqM1HQgOARgNARQgrA5gkA8Ig/huQgGgBgHgBQgEgBgEgBQiCgYBehKQASgOAagQQAggUAtgXQAJgEAIgFIABAAQBZgmgBA1QgBAYgVAvIAcAwQAQgVARgUQAtg0AygpAtt2wQgQgQgMgOAs248IAjA8AqF1QQgCACgBABIgBADQgCABgBACAt5mnQgUhaABhdQAEjpBUjTQA5iPBdiGQAJgMAJgMAr/uKQAAgMABgMQAHheA1g9QACgCABgDQAxg3BZgbAn4rgQAXAnAUAUAncsgQAygkAxgPQBzgiBzBVApEplQAhA7AdANAohqpQAXApAWATAzSndQgRBLgQA6QgQA6gkAuQglAugNAMQgMAMgJAHQgPANhpBNQgFADgFAEA36g9QAFgGAFgEQgHAAgHAAQgGAAgFAAQgGAAgFgBQgEAAgEALA36g9QgFAAgFAAA0Ui9QgyBHhKAgQgnASgvAFQgKABgKABAt5mnQhAEeieBEQivBKjggzQgCgBgDgBQgYgFgZgIQAJgFAKgFArnlsQAPCDBDClQAQAmASAmQgdgdgZgdQiqjGgmivAiT14QiDg6hGBfAis3UQiDg5hFBf");
	this.shape_17.setTransform(682.525,534.2297);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC3A2").s().p("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");
	this.shape_18.setTransform(686.1821,563.004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADcNNQgMgDgGgLQgFgJACgLQAEgLAKgHQAJgFAMADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgIAAIgGgBgAiLMWQgMgDgGgKQgFgKACgLQAEgLAJgGQALgGALADQALADAFAKQAHALgDALQgDALgKAGQgHADgHAAIgHgBgAA+LcQgKgDgHgKQgFgKADgLQADgLAJgGQALgGALADQALADAGAKQAGAKgDALQgDAMgLAFQgGAEgHAAIgIgBgAECKLQgMgDgFgLQgGgJADgLQADgLAJgGQALgGALADQALADAGAKQAGAKgDALQgDALgKAGQgHAEgHAAIgHgBgABIHeQgLgDgGgLQgGgJADgMQADgLAKgGQAKgFAMADQALADAGAKQAGAKgDALQgEAMgJAFQgHAEgHAAIgIgBgAhjnGQgYAAgYgHQgPgEgPgGIgLgGIgIgDIgCgBIgBgBIAAAAIgBgBIgjgcIgMgOQgKgMgJgOIgLgWIgFgNIgEgMIAAgFIgDgLIgBgDIAAgCIAAgCIgCgVIAAgKIABgSIAAgBIAAgCIACgJIADgRIAAgBIACgEQADgMAEgJIADgHIAEgHIABgEIALgRIAEgEIAUgYIACgCIAAgBIACgCIACgBIAAAAIACgCIAJgHIAFgEIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIAEgBIAEgBIAAAAIACAAIABAAIAEgBIABAAIADAAIATgCIACAAIADAAIABAAIABAAIAKAAIABAAIABABIABAAIAAAAIADAAIABAAIADABIAHAAIABAAIABAAIACABIACAAIACABIAAAAIACAAIAMADIABABIAFABIADABIACAAIACABIADAAIAAAAIAAABIABAAIACABIADABIAHACIAOAIIADABIAOAIIAIAHIALAIIABABIAAABIACABQAMAKAKANIABABIADAEIAAABIAAABIABABIABAAIAAAAIACADIABABIABABIABABIAAABIABABIAAAAIAAACIABABIABABIACAFQAIANAFAOIADAJIABAAIAAACIABABIAAABIAAAAIAEANIAAABIAAABIABABIAAADIACAMIAAACIAAABQACAQgBAQIgBAIIgBALIgBAGIAAAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgBACIAAAAIAAACIgFAMIAAAAIgBADIgBABIAAABIgBABIgFALQgPAZgVAUIgGAFIgGAEIAAABIgDADIgCABIgEADIgHAEIgKAGIgGAFIgIADIgKAFQgSAHgRADIgMACIgPABIgDAAIgCAAIgIAAIgCAAg");
	this.shape_19.setTransform(659.85,545.3349);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B251C").s().p("AqpNqQiqjGgmiuQgThUAAhXIAAgNQAEjoBUjTQA5iPBdiFIASgYIADgEIABgDIADgCQAQgWARgUQAtg0AygoQgyAogtA0QgRAUgQAWIgcgxQAVguABgZQABg0hZAlIgBABIgRAIQgtAXggAUQgaAQgSAOQheBKCCAZIAIABIANACIA/BuQAkg7Arg5IAbgiIgSAYQhdCFg5CPQhUDTgEDoIAAANQAABXATBUQhAEdieBEQivBLjgg0IgFgBQgYgGgZgIIATgKQASgLARgNQCZh5A4lKIAJg/IACgTQA7ndgBgEQAql5BYiGQARgbATgRIAYgTQA6gsBUgdIBwgdIAigIQBQACA+AwQANAKAMAMQBKBLAABoQAAAZgEAZIAPgMQA7guBCggQCYhJDAAAQAoBrAABeQAABdgoBRQjLANiNBNQhHAmg2A2QgZAYgWAcQgiAsgdAsQinEKAkFJQAPCCBDClIgDADQgBAAAmBKQguhDgIAIgA36NfIgKAAIAKAAQAFgGAFgEIgOAAIgLAAIALAAIAOAAQgFAEgFAGgA2QNGQgnASgvAFIgUACIAUgCQAvgFAngSQBKggAyhGQgyBGhKAggAzzJFQgQA6gkAtQglAugNAMIgVAUQgPAMhpBNIgKAIIAKgIQBphNAPgMIAVgUQANgMAlguQAkgtAQg6QAQg7ARhLQgRBLgQA7gAq/ikIgDAEQg1A9gHBeIgBAXIABgXQAHheA1g9IADgEQAxg3BZgbQhZAbgxA3gAlcm1IADgEQArg4BBAAIAAAAIAAAAQAmAAAuAUIABAAIABAAIACABIABABIABAAIgBAAIgBgBIgCgBIgBAAIgBAAQgugUgmAAIAAAAIAAAAQhBAAgrA4IgDAEgAl0oRIABgBIACgDQAqg3BBAAIAAAAIAAAAQAlAAAsASIABAAIACABIABAAIABABIACABIABAAIABAAIgBAAIgBAAIgCgBIgBgBIgBAAIgCgBIgBAAQgsgSglAAIAAAAIAAAAQhBAAgqA3IgCADIgBABgAttoTQgQgPgMgOQAMAOAQAPgAsTpjIgjg8gAMaKRIgEh9QgHiDgKhHIgEgVQgKg2gchAQgrhghTh4QhWh8hqhOQi/iNj/AMQAohRAAhdQAAhegohrIADAAQBZgBBQAOICIAlQA+AXBAAkQgDggAAgZQAAgtAPgoQAUg0AugqQANgMAOgKQBDgxBYgDIANAAQAaAAAaAEIAcAFQAcAGAdAJIAIAEIAEABQAZAJAaANQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQAzAaBKA+QB9BoA3HCQgBAEA5GmIAHA4QAFAmAHAkIACAIIABAIQBDFdC+BhQiCgWhmhmQh3h5gYibQAYCbB3B5QBmBmCCAWIAEACQAWALAXAHIgCAAQgeACgcAAIAAAAIgBAAQjxAAhkiXQBkCXDxAAIABAAIAAAAQAcAAAegCIACAAQhgAchOAHIg0gBQiQgIiNhSQhvhAhFkAIgFgVIgDhFQgFhMgMhGIgGgeQgNhCgThBQgYhMgghMQgNgsgJgNIgHgQIgHgPIAHAPIAHAQQAJANANAsQAgBMAYBMQATBBANBCIAGAeQAMBGAFBMIADBFIAFAVQACDRgvD5Qghh6gChjgASDKAIAIAHIgJgIIABABgAGdlNQDwAsAfDmQgfjmjwgsQgbgFgdgDQAdADAbAFgAGdplQBBAtA7BCQAYAdAWAfQAkAzAfAyQAlA9AgA/QgehAgmg9IgCgEIACgFIA+hqIANgCIAJgBQCDgZhfhJQgTgOgagQQghgVgtgWIgRgJIgBAAQgkgPgVgBQgigBABAgQABAYAVAvIgcAwIgcggQgrgugygeIgMgIIAMAJgAEsm+IgBgCIAAAAQgohPhXAAIAAAAIAAAAQgXAAgZAFIAAAAIgFABIgBAAIABAAIAFgBIAAAAQAZgFAXAAIAAAAIAAAAQBXAAAoBPIAAAAIABACIAAAAgAFBoOIgCgDQg7hLhGAAIgBAAIAAAAQglAAgoAUIAAABIgCAAIACAAIAAgBQAogUAlAAIAAAAIABAAQBGAAA7BLIACADgAM7pcQAfgBAmg8IABgCIABAAIADgFIAAgBIACgDIABgCIgBACIgCADIAAABIgDAFIgBAAIgBACQgmA8gfABIgCAAIAAAAQgHAAgGgDIgBAAIABAAQAGADAHAAIAAAAIACAAgAMtsSIgCABQgdAFgoBGQAohGAdgFIACgBIADAAIAAAAIABAAIABAAQAEAAAEACIABAAIgBAAQgEgCgEAAIgBAAIgBAAIAAAAIgDAAgATtE6QgHgkgFgmIgHg4Qg5mmABgEQg3nCh9hoQhKg+gzgaQAPgJBuBcQB9BoA3HDQgBADA6GrIAGAzQAGArAHAmIgBgCgAghlkIAAAAg");
	this.shape_20.setTransform(682.525,441.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},590).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_10}]},9).to({state:[{t:this.shape_20},{t:this.shape_14},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16}]},8).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.playagaincookie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#993300").s().p("AkUD1Qg+g+gdhMQgXg/AAhIIABgeQADgpAKglQAbhdBJhJIAAAAIAQgOQAagXAcgSIAHAJQAFAHAHAHIAMALQAeAYAoABQAIAQAMAPIAHAHQApAoA3AAQApAAAggVQAMgIALgLIANgNIABgCIgIgFIAIgJQAPAIAQADQAMACANAAQAqAAAhgYIAIgIIACgCIACADIADACIADADQA+A+AdBNQAMAhAGAjQAFAgAAAjQAAArgJAoQgDARgGARQgbBXhFBFQhzBxiiAAQihAAhzhxgAi7CTQgHAIgBAMQABALAHAIQAJAJAMAAQAMAAAIgJQAIgIAAgLQAAgMgIgIQgIgIgMAAQgMAAgJAIgACuBqQgHAJgBALQABAMAHAIQAJAIAMAAQALAAAJgIQAIgIAAgMQAAgLgIgJQgJgIgLAAQgMAAgJAIgAgFAmQgIAIAAAMQAAALAIAIQAHAJAMAAQALAAAJgJQAIgIAAgLQAAgMgIgIQgJgIgLAAQgMAAgHAIgAjygiQgJAIAAAMQAAALAJAHQAIAJALAAQAMAAAIgJQAIgHAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgACihaQgJAJABALQgBAMAJAHQAIAJALAAQAMAAAIgJQAIgHAAgMQAAgLgIgJQgIgIgMAAQgLAAgIAIgAg+jRQgIAIAAAMQAAALAIAIQAJAJAMAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgMAAgJAIg");
	this.shape.setTransform(39.1,35.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playagaincookie, new cjs.Rectangle(0,0,78.2,71.7), null);


(lib.hend = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APHMSQgGATgGATQgeBTg9A1Qh6Bkicg+QgSgFgQgMQhUgnhdhVIgDgDQgDgEgEgCIhNhQQgugygsg5QhehxhThiIiiixQgKgJgJgJQhvhwhfhLQg+gtgzgeQkGikhih+QhBhYgkhpQgNglgKgkQgFgUgDgQQgBgGAAgBIAAgCQgBgEAAgFQgDgNABgNQgBgHAAgGQAAgNABgLQACgEACgFQACgEAAgFQAEgWAMgZQAEgJAFgKQAPgbATgXQASgXATgWQgGAAAAgDQAAgFAJgNQAMgSAlggQAJgGAJgIQARgOAWgRIABgBQARgOAZgLQAJgDALgEQCCgpEGBaQBJAZBTAjQBvAuBiA5QAJAFAKAGQEpCuCyEIQA/BeA8BlQA+BsA7B0QAwBmAmBcQB4EygdC8QgDAKgDAN");
	this.shape.setTransform(97.6651,102.2044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC3A2").s().p("AJKPmQgSgFgQgMQhUgnhdhVIgDgDQgDgEgEgCIhNhQQgugygsg5QhehxhThiIiiixIgTgSQhvhwhfhLQg+gtgzgeQkGikhih+QhBhYgkhpQgNglgKgkIgIgkIgBgHIAAgCQgBgEAAgFQgDgNABgNIgBgNIABgYIAEgJQACgEAAgFQAEgWAMgZIAJgTQAPgbATgXIAlgtQgGAAAAgDQAAgFAJgNQAMgSAlggIASgOIAngfIABgBQARgOAZgLIAUgHQCCgpEGBaQBJAZBTAjQBvAuBiA5IATALQEpCuCyEIQA/BeA8BlQA+BsA7B0QAwBmAmBcQB4EygdC8IgGAXQAAABAAABQABAAAAAAQAAABAAAAQAAAAABAAIgMAmQgeBTg9A1QhMA+hYAAQg2AAg8gYg");
	this.shape_1.setTransform(97.6651,102.2044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hend, new cjs.Rectangle(-1,-1,197.4,206.4), null);


(lib.handonthemouth = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhhASIABABQAAAAAAABQAFBKhDBOQgEAFgEAFQguANgkAQQgrATAGBKQAIBJA6AbQAiAOAhAHQAHACAHADQAMACALABQAlAIAqADQA3AEAugGQA6gIAqgZQACgCACAAIAAgBQAogbAXgrQBDh8gQi5QAAgQgCgNIgBgDQgXikiDiZQgDgEgCgCQgCgBAAgCQgHgJgIgIQgCgDgCgCQhohwhPAYQgSAGgRAMQgSAXgUAVQgZAuAGBGQAAANADAPQABAKADALQAHAfAMAjQAIAYALAaQARAqAJAkQADALACALQABAGABAGIAAAC");
	this.shape.setTransform(28.6094,44.6089);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC3A2").s().p("AgkG8QgqgDglgIIgXgDQgHgDgHgCQghgHgigOQg6gbgIhJQgGhKArgTQAkgQAugNIAIgKQBDhOgFhKIAAgBIgBgBIABgBIgBgBIAAgCIgCgMIgFgWQgJgkgRgqQgLgagIgYQgMgjgHgfQgDgLgBgKQgDgPAAgNQgGhGAZguQAUgVASgXQARgMASgGQBPgYBoBwIAEAFQAIAIAHAJQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAIAFAGQCDCZAXCkIABADQACANAAAQQAQC5hDB8QgXArgoAbIAAABIgEACQgqAZg6AIQgaAEgeAAQgVAAgYgCg");
	this.shape_1.setTransform(28.6094,44.6089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handonthemouth, new cjs.Rectangle(-1,-1,59.3,91.2), null);


(lib.cookisstook = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#663300").s().p("AoFBVQj5g5AZg+IABgCQAag9BkgdQBbAkBjAWIAZAGQGxBZI2iZIAlAAIAIgBQBbgTAHA8QABAJAAALQgGBVjXAyQjYAykgAMQgxACgwAAQjpAAjOgwg");
	this.shape.setTransform(76.7191,50.3494);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjCDLQgQgVAAgeQAAgdAQgWQAPgUAWgBQAXABAPAUQAQAWAAAdQAAAegQAVQgPAWgXAAQgWAAgPgWgAo7DSQgKgGgIgLQgPgVAAgdQAAgeAPgVQARgWAVAAQAXAAAPAWQAQAVAAAeQAAAdgQAVQgNAUgUACIgZgFgAHyCWQAAgcAPgVQAQgUAWgBQARAAAOANIAHAIQAPAWABAdQAAAWgJARQgHg8hbATgADkAqQgPgUAAgdQAAgeAPgVQARgWAVABQAXgBAPAWQAQAVAAAeQAAAdgQAUQgPAWgXAAQgVAAgRgWgAkihlQgPgVAAgdIAAgEQAAgcAPgUQARgVAWAAQAVAAAQAVQAOATACAZIAAAIQAAAdgQAVQgQAVgVABQgWgBgRgVg");
	this.shape_1.setTransform(91.45,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("Al8CrQAUgCANgTQAQgVAAgeQAAgegQgVQgPgVgWAAQgWAAgQAVQgPAVAAAeQAAAeAPAVQAIAKAJAGQhjgXhbgjQhkAcgaA9QgagpAAg2QAAibDehMQCng4DbgOIAAAEQAAAdAQAVQAQAWAWAAQAWAAAPgWQAQgVAAgdIAAgIIAsAAQE8AADeBKQC0A9ASB1QgOgMgRAAQgWAAgQAUQgPAVAAAcIgIACIglAAQllBgkvAAQizAAigghgAgcA5QgQAWAAAeQAAAdAQAVQAQAWAVAAQAWAAAPgWQAQgVAAgdQAAgegQgWQgPgUgWAAQgVAAgQAUgAGLhmQgQAVAAAeQAAAeAQAVQAQAUAWAAQAWAAAPgUQAQgVAAgeQAAgegQgVQgPgVgWAAQgWAAgQAVg");
	this.shape_2.setTransform(74.825,26.8882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.9,63.7);


(lib.bony_eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hands
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFzFkQALAEAMADQAlAJAqAIQCDAWBUgiQACgBACAAIAAgBIABAAQAugUAfglQBZhrARirQACgOAAgOIAAgDQAEiXhtiaQgCgDgCgCQgBgBAAgBQgHgKgGgIQgCgDgCgCQhuiLhnA1QgYATgXARQgjAngFBBQgBANAAANQgBAKABAKQACAdAHAhQADAXAHAYQALAoADAiQABALAAALQAAAFAAAHIAAABAHkgQQgGBGhUBBQgFAEgGAEQgxAGgoAMQgvANgFBEQgGBEA4AeQAgARAhAKQAHACAHADAFlFgQAHACAHACAmPC/QAMgBANACQA+AGAwAOQAwANAGBEQAFBEg4AeQgnAVgqAKQjdAhhngqQgwgTgigiQhrhrgUirQgViqCXitQARgUASgRQABgBABgBQALgMAMgKQABgBABAAQBghQBdAYQAHACAIADQAMAEAMAGQAZANATASQAGAFAEAGQAhAnAAA3QgBA4gkBKQgKAUgSAlQgVApgfA/QgPAfABAYQACA5BiAM");
	this.shape.setTransform(-2.5924,11.6803);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC3A2").s().p("AqaGdQgwgTgigiQhrhrgUirQgViqCXitQARgUASgRIACgCIAXgWIACgBQBghQBdAYIAPAFIAYAKQAZANATASIAKALQAhAnAAA3QgBA4gkBKIgcA5Ig0BoQgPAfABAYQACA5BiAMIAAAEQAMgBANACQA+AGAwAOQAwANAGBEQAFBEg4AeQgnAVgqAKQhhAOhKAAQhfAAg6gXgAHZF8QgqgIglgJIgXgHIgOgFQghgKgggRQg4geAGhEQAFhEAvgNQAogMAxgGIALgIQBUhBAGhGIAAADIAAAIIAAgKIAAgCIAAgBIAAgMIgBgWQgDgigLgoQgHgYgDgXQgHghgCgdIAAgUIABgaQAFhBAjgnIAvgkQBng1BuCLIAEAFIANASIABACIAEAFQBtCagECXIAAADIgCAcQgRCrhZBrQgfAlguAUIgBAAIAAABIgEABQgyAVhEAAQgsAAg1gJgAFlFgIAAgBIAOAFIgOgEg");
	this.shape_1.setTransform(-2.5924,11.6803);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AG2gaQAAAAAAABQgWBMhVAxQgFADgGADQgrgHgkAAQgrAAgUBNQgUBLAoA0QAYAcAZAWQAGAEAFAHQAJAHAJAGQAdAXAiAVQBqBBBOgNQACAAACAAIAAgBQArgJAkghQBjheA1i9QAFgQADgQIABgDQAlirg5jQQgBgEgBgEQgBgBAAgCQgDgMgEgMQgBgDAAgEQg+i/hjAdQgYAOgYAMQgmAjgUBIQgDANgDAQQgDALgBAMQgFAhgCAoQgCAbAAAeQAAAxgFAoQgBAMgDANQgBAGgCAHIAAABAk3CZQAKgGAKgDQA0gPAqgDQAsgEAfBEQAgBDghAyQgWAjgcAZQihBthhgGQgugCgpgYQh+hGhUinQhUilAxjkQAFgbAHgXQAAgCAAAAQAFgQAFgPQABAAABgCQArhyBSgIQAIgBAGABQALAAAMACQAZAEAXAMQAGADAFAEQApAdAXA4QAVA4ACBYQAAAXABAtQAAAwABBLQAAAlAKAYQAZA5BSgV");
	this.shape_2.setTransform(2.703,10.3672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC3A2").s().p("AFTGlQgigVgdgXIgSgNQgFgHgGgEQgZgWgYgcQgog0AUhLQAUhNArAAQAkAAArAHIALgGQBVgxAWhMIgBACIgBAJIACgLIAAgBIAAgCIAAgBIADgNIAEgZQAFgoAAgxQAAgeACgbQACgoAFghIAEgXIAGgdQAUhIAmgjQAYgMAYgOQBjgdA+C/IABAHIAHAYIABADIACAIQA5DQglCrIgBADQgDAQgFAQQg1C9hjBeQgkAhgrAJIAAABIgEAAQgNACgNAAQhGAAhYg2gAmvHWQgugCgpgYQh+hGhUinQhUilAxjkQAFgbAHgXIAAgCIAKgfIACgCQArhyBSgIQAIgBAGABQALAAAMACQAZAEAXAMQAGADAFAEQApAdAXA4QAVA4ACBYIABBEIABB7QAAAlAKAYQAZA5BSgVIABAEQAKgGAKgDQA0gPAqgDQAsgEAfBEQAgBDghAyQgWAjgcAZQiZBohgAAIgJgBg");
	this.shape_3.setTransform(2.703,10.3672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AGQg4IAAABQgBAAAAABQgfBDhbAiQgGADgGABQgrgLgkgFQgsgFgeBFQgcBEAjA1QAUAdAYAYQAFAEAEAHQAJAHAIAHQAbAZAhAYQBkBKBRgCQACgBACABIAAgBQAtgDAogaQBwhLBLiqQAHgOAFgOIABgDQA6iagjjJQAAgEgBgEQgBgBABgCQgCgLgDgMQAAgDAAgDQgpi6hpAPQgaAKgZAIQgrAcgcBAQgGAMgEAOQgEAKgDALQgIAfgIAkQgFAZgDAcQgFAugKAkQgDALgEAMQgBAFgDAHIgBABAj3B4QAIgHAKgGQAwgYApgLQAqgLArA9QArA8gWA3QgQAmgXAeQiLCJhgAMQgtAGgtgQQiIguhyiVQhwiTAGjpQAAgcADgXQAAgCAAAAQABgRADgQQAAAAABgCQAWh4BPgXQAHgCAHAAQALgCAMgBQAaAAAYAHQAGACAGAEQAuAUAgAzQAgA0ARBVQAEAXAKAtQAIAvAPBJQAHAkAOAWQAjA0BNgk");
	this.shape_4.setTransform(2.779,8.1812);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC3A2").s().p("AmOG8QiIguhyiVQhwiTAGjpQAAgcADgXIAAgCIAEghIABgCQAWh4BPgXQAHgCAHAAQALgCAMgBQAaAAAYAHQAGACAGAEQAuAUAgAzQAgA0ARBVIAOBEIAXB4QAHAkAOAWQAjA0BNgkIACAEQAIgHAKgGQAwgYApgLQAqgLArA9QArA8gWA3QgQAmgXAeQiLCJhgAMQgMABgNAAQghAAgggLgAD5FbQghgYgbgZIgRgOQgEgHgFgEQgYgYgUgdQgjg1AchEQAehFAsAFQAkAFArALIAMgEQBbgiAfhDIABgBIAAgBIAAgBIAAgBIABgBIAEgMIAHgXQAKgkAFguQADgcAFgZQAIgkAIgfQADgLAEgKQAEgOAGgMQAchAArgcQAZgIAagKQBpgPApC6IAAAGIAFAXIAAADIABAIQAjDJg6CaIgBADQgFAOgHAOQhLCqhwBLQgoAagtADIAAABIgEAAIgEAAQhQAAhhhIg");
	this.shape_5.setTransform(2.779,8.1812);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AGFgtIAAABQAAAAAAAAQgPBIhVA6QgFAEgFAEQgwAAgnAGQguAIgNBJQgLBJAxAoQAdAXAeAQQAGADAGAFQALAFALAEQAhARAoANQB5ArBUgYQABgBADAAIAAgBQAtgPAigkQBghnAii3QAEgPABgOIAAgDQAUikhXi2QgCgDgBgDQgCgCABgBQgFgLgGgKQgBgDgBgDQhZimhoArQgYAQgZAPQgkAngMBFQgDANgBAPQgCAKAAALQgBAgACAlQACAZADAcQAGAtAAAlQAAALgBANQgBAFgBAHIAAABAkxCyQAJgFALgDQA1gKAqAAQAsAAAaBGQAaBFgkAwQgZAggfAXQipBghggNQgtgGgogbQh3hQhIitQhGirBDjfQAIgbAIgWQAAgCAAAAQAGgQAHgOQAAAAACgCQA0hvBSgBQAIAAAGABQALABAMADQAZAGAVANQAGAEAFAFQAmAfASA6QASA6gFBXQgDAXgCAuQgEAvgFBLQgDAlAJAZQATA7BUgP");
	this.shape_6.setTransform(6.1402,13.5194);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC3A2").s().p("AnDHlQgtgGgogbQh3hQhIitQhGirBDjfQAIgbAIgWIAAgCIANgeIACgCQA0hvBSgBQAIAAAGABIAXAEQAZAGAVANQAGAEAFAFQAmAfASA6QASA6gFBXQgDAXgCAuIgJB6QgDAlAJAZQATA7BUgPIACAEQAJgFALgDQA1gKAqAAQAsAAAaBGQAaBFgkAwQgZAggfAXQiVBVhcAAQgMAAgMgCgAFRF8QgogNghgRIgWgJQgGgFgGgDQgegQgdgXQgxgoALhJQANhJAugIQAngGAwAAIAKgIQBVg6APhIIAAAAIAAgBIAAgBIAAgCIAAgBIACgMIABgYQAAglgGgtQgDgcgCgZQgCglABggQAAgLACgKQABgPADgNQAMhFAkgnQAZgPAYgQQBogrBZCmIACAGQAGAKAFALQgBAAAAABQAAAAABAAQAAABAAAAQAAAAABABIADAGQBXC2gUCkIAAADQgBAOgEAPQgiC3hgBnQgiAkgtAPIAAABIgEABQgfAJgjAAQg+AAhNgcg");
	this.shape_7.setTransform(6.1402,13.5194);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AG0gRIABABQAAAAAAABQAFBJhDBOQgEAFgEAFQguANgkAQQgrATAGBKQAIBJA6AbQAiAOAhAHQAHACAHADQAMACALABQAlAIAqADQCAAKBKgtQACgCACAAIAAgBQAogbAXgrQBDh8gQi4QAAgQgCgOIgBgDQgXikiDiZQgDgEgCgCQgCgBAAgCQgHgJgIgIQgCgDgCgCQiBiJhaBDQgSAXgUAVQgZAuAGBGQAAANADAPQABAKADALQAHAfAMAjQAIAYALAaQARAqAJAkQADALACAMQABAGABAGIAAACAmSDPQAJgDAMAAQA2AEApALQAqALAHBLQAHBIgvAmQghAZgjAOQi8AxhZglQgrgTgfgjQhehtgZi5QgXi3B7jHQANgYAPgTQAAgBAAgBQAKgOAKgMQABAAABgBQBPheBQAUQAIACAFADQAKAEALAGQAXAMARATQAFAFADAFQAdApACA8QACA9gbBTQgJAWgNArQgQAsgZBHQgMAjACAbQADA+BVAH");
	this.shape_8.setTransform(6.5403,19.1692);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC3A2").s().p("ApuHSQgrgTgfgjQhehtgZi5QgXi3B7jHQANgYAPgTIAAgCQAKgOAKgMIACgBQBPheBQAUQAIACAFADIAVAKQAXAMARATQAFAFADAFQAdApACA8QACA9gbBTQgJAWgNArIgpBzQgMAjACAbQADA+BVAHIABAFQAJgDAMAAQA2AEApALQAqALAHBLQAHBIgvAmQghAZgjAOQhrAchLAAQg5AAgmgQgAHxGYQgqgDglgIIgXgDQgHgDgHgCQghgHgigOQg6gbgIhJQgGhKArgTQAkgQAugNIAIgKQBDhOgFhJIAAgBIgBgBIABgBIgBgBIAAgCIgCgMIgFgXQgJgkgRgqQgLgagIgYQgMgjgHgfQgDgLgBgKQgDgPAAgNQgGhGAZguQAUgVASgXQBahDCBCJIAEAFQAIAIAHAJQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIAFAGQCDCZAXCkIABADQACAOAAAQQAQC4hDB8QgXArgoAbIAAABIgEACQg8AlhhAAQgWAAgXgCg");
	this.shape_9.setTransform(6.5403,19.1692);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AHdgZIABABQgBAAAAABQAFBJhDBOQgEAFgEAFQguANgkAQQgqATAGBKQAIBJA6AbQAhAOAhAHQAIACAGADQAMACAMABQAlAIAqADQCAAKBKgtQABgCADAAIAAgBQAogbAXgrQBCh8gPi4QAAgQgCgOIgBgDQgYikiDiZQgCgEgCgCQgCgBAAgCQgHgJgJgIQgCgDgBgCQiCiJhZBDQgTAXgUAVQgYAuAFBGQABANADAPQABAKADALQAHAfALAjQAIAYALAaQARAqAKAkQACALADAMQABAGAAAGIAAACAndDtQAKAAALADQAzARAlAVQAmAWgNBKQgMBIg3AYQgmAQglAEQjDgBhMg7QglgdgVgqQg/iCAYi5QAai3CqigQATgTATgPQABgBAAgBQANgLANgJQABAAABAAQBlhHBIAoQAHAEAEAFQAJAGAJAIQATASAMAXQADAFABAHQASAugOA7QgNA8gwBIQgOATgYAnQgbAmgrA+QgVAfgFAaQgMA9BQAd");
	this.shape_10.setTransform(2.4905,19.986);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC3A2").s().p("Ar0GuQglgdgVgqQg/iCAYi5QAai3CqigQATgTATgPIABgCQANgLANgJIACAAQBlhHBIAoQAHAEAEAFQAJAGAJAIQATASAMAXQADAFABAHQASAugOA7QgNA8gwBIQgOATgYAnIhGBkQgVAfgFAaQgMA9BQAdIgBAFQAKAAALADQAzARAlAVQAmAWgNBKQgMBIg3AYQgmAQglAEQjDgBhMg7gAIaGQQgqgDglgIIgYgDQgGgDgIgCQghgHghgOQg6gbgIhJQgGhKAqgTQAkgQAugNIAIgKQBDhOgFhJIABgBIgBgBIAAgBIgBgBIAAgCIgBgMIgFgXQgKgkgRgqQgLgagIgYQgLgjgHgfQgDgLgBgKQgDgPgBgNQgFhGAYguQAUgVATgXQBZhDCCCJIADAFQAJAIAHAJQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABABIAEAGQCDCZAYCkIABADQACAOAAAQQAPC4hCB8QgXArgoAbIAAABIgEACQg9AkhhAAQgVAAgXgBg");
	this.shape_11.setTransform(2.4905,19.986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},15).to({state:[{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_7},{t:this.shape_6}]},14).to({state:[{t:this.shape_9},{t:this.shape_8}]},8).to({state:[{t:this.shape_11},{t:this.shape_10}]},8).wait(16));

	// cookie
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AisDGQgIgIAAgLQAAgMAIgIQAIgJAMABQAMgBAIAJQAIAIAAAMQAAALgIAIQgIAIgMAAQgMAAgIgIgAC9CeQgIgJAAgLQAAgMAIgIQAIgIAMAAQAMAAAIAIQAIAIAAAMQAAALgIAJQgIAIgMAAQgMAAgIgIgAAIBZQgIgIAAgLQAAgMAIgIQAJgJALABQAMgBAIAJQAIAIAAAMQAAALgIAIQgIAIgMAAQgLAAgJgIgAjkAQQgIgIAAgKQAAgMAIgIQAIgIAMAAQALAAAIAIQAJAIAAAMQAAAKgJAIQgIAJgLAAQgMAAgIgJgACwgnQgIgHAAgMQAAgLAIgJQAIgIAMAAQALAAAIAIQAJAJAAALQAAAMgJAHQgIAJgLAAQgMAAgIgJgAgvieQgIgIAAgMQAAgLAIgJQAIgHAMgBQAMABAIAHQAHAJAAALQAAAMgHAIQgIAJgMgBQgMABgIgJg");
	this.shape_12.setTransform(-4.725,36.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#993300").s().p("AkUD1Qg+g+gdhMQgXg/AAhIIABgeQADgpAKglQAbhdBJhJIAAAAIAQgOQAagXAcgSIAHAJQAFAHAHAHIAMALQAeAYAoABQAIAQAMAPIAHAHQApAoA3AAQApAAAggVQAMgIALgLIANgNIABgCIgIgFIAIgJQAPAIAQADQAMACANAAQAqAAAhgYIAIgIIACgCIADADIACACIADADQA+A+AdBNQAMAhAGAjQAFAgAAAjQAAArgJAoQgDARgGARQgbBXhFBFQhzBxiiAAQihAAhzhxgAi7CTQgIAIAAAMQAAALAIAIQAJAJAMAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgMAAgJAIgACuBqQgHAJgBALQABAMAHAIQAJAIAMAAQALAAAJgIQAIgIAAgMQAAgLgIgJQgJgIgLAAQgMAAgJAIgAgFAmQgIAIAAAMQAAALAIAIQAHAJAMAAQAMAAAIgJQAIgIAAgLQAAgMgIgIQgIgIgMAAQgMAAgHAIgAjygiQgJAIABAMQgBALAJAHQAIAJALAAQAMAAAIgJQAIgHAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgACihaQgJAJABALQgBAMAJAHQAIAJALAAQAMAAAIgJQAIgHAAgMQAAgLgIgJQgIgIgMAAQgLAAgIAIgAg9jRQgJAIAAAMQAAALAJAIQAIAJAMAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgMAAgIAIg");
	this.shape_13.setTransform(-3.3,37.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AisDGQgIgIAAgMQAAgLAIgIQAIgJAMAAQAMAAAIAJQAIAIAAALQAAAMgIAIQgIAJgMgBQgMABgIgJgAC9CeQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAAIBZQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgJgIgAjkAQQgIgIAAgLQAAgLAIgIQAIgJAMABQALgBAIAJQAJAIAAALQAAALgJAIQgIAIgLAAQgMAAgIgIgACwgnQgIgHAAgMQAAgMAIgIQAIgIAMAAQALAAAIAIQAJAIAAAMQAAAMgJAHQgIAJgLAAQgMAAgIgJgAgvieQgIgIAAgLQAAgMAIgJQAIgHAMgBQAMABAIAHQAHAJAAAMQAAALgHAIQgIAJgMAAQgMAAgIgJg");
	this.shape_14.setTransform(-1.225,20.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AkUD1Qg+g+gchMQgYg/AAhIIABgeQADgpALglQAahdBJhJIAAAAIAQgOQAagXAcgSIAHAJQAFAHAHAHIAMALQAeAYAoABQAIAQAMAPIAHAHQApAoA3AAQApAAAhgVQAMgIAKgLIANgNIACgCIgJgFIAJgJQAOAIAQADQAMACANAAQAqAAAggYIAJgIIACgCIADADIACACIACADQBAA+AcBNQAMAhAGAjQAFAgAAAjQAAArgJAoQgDARgGARQgaBXhHBFQhyBxiiAAQihAAhzhxgAi6CTQgJAIAAAMQAAALAJAIQAIAJAMAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgMAAgIAIgACuBqQgHAJgBALQABAMAHAIQAJAIAMAAQAMAAAIgIQAIgIAAgMQAAgLgIgJQgIgIgMAAQgMAAgJAIgAgFAmQgIAIAAAMQAAALAIAIQAHAJAMAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgMAAgHAIgAjygiQgJAIABAMQgBALAJAHQAIAJAMAAQALAAAIgJQAIgHAAgLQAAgMgIgIQgIgIgLAAQgMAAgIAIgACihaQgJAJABALQgBAMAJAHQAIAJAMAAQALAAAIgJQAIgHAAgMQAAgLgIgJQgIgIgLAAQgMAAgIAIgAg9jRQgJAIABAMQgBALAJAIQAIAJAMAAQALAAAIgJQAJgIAAgLQAAgMgJgIQgIgIgLAAQgMAAgIAIg");
	this.shape_15.setTransform(0.2,21.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AisDGQgIgIAAgLQAAgMAIgJQAIgHAMgBQAMABAIAHQAIAJAAAMQAAALgIAIQgIAJgMAAQgMAAgIgJgAC9CdQgIgIAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAIQgIAJgMAAQgMAAgIgJgAAIBZQgIgIAAgMQAAgLAIgJQAJgHALgBQAMABAIAHQAIAJAAALQAAAMgIAIQgIAJgMAAQgLAAgJgJgAjkAQQgIgIAAgLQAAgLAIgJQAIgHAMgBQALABAIAHQAJAJAAALQAAALgJAIQgIAJgLgBQgMABgIgJgACwgnQgIgHAAgMQAAgLAIgJQAIgIAMAAQALAAAIAIQAJAJAAALQAAAMgJAHQgIAIgLAAQgMAAgIgIgAgvieQgIgIAAgLQAAgMAIgIQAIgJAMABQAMgBAIAJQAHAIAAAMQAAALgHAIQgIAIgMAAQgMAAgIgIg");
	this.shape_16.setTransform(-1.225,0.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AisDGQgIgIAAgMQAAgLAIgIQAIgJAMABQAMgBAIAJQAIAIAAALQAAAMgIAIQgIAIgMAAQgMAAgIgIgAC9CeQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAAIBZQgIgIAAgLQAAgMAIgIQAJgJALABQAMgBAIAJQAIAIAAAMQAAALgIAIQgIAIgMAAQgLAAgJgIgAjkAQQgIgIAAgKQAAgMAIgIQAIgJAMABQALgBAIAJQAJAIAAAMQAAAKgJAIQgIAIgLABQgMgBgIgIgACwgnQgIgHAAgMQAAgLAIgJQAIgIAMAAQALAAAIAIQAJAJAAALQAAAMgJAHQgIAJgLAAQgMAAgIgJgAgvieQgIgIAAgMQAAgLAIgJQAIgHAMgBQAMABAIAHQAHAJAAALQAAAMgHAIQgIAJgMAAQgMAAgIgJg");
	this.shape_17.setTransform(-6.025,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("AkTD1Qg/g+gchMQgYg/AAhIIABgeQADgpALglQAahdBKhJIAAAAIAPgOQAagXAcgSIAHAJQAFAHAHAHIAMALQAfAYAoABQAHAQANAPIAHAHQAoAoA3AAQApAAAhgVQALgIALgLIANgNIACgCIgIgFIAIgJQAOAIAQADQAMACAOAAQApAAAggYIAJgIIACgCIADADIACACIACADQBAA+AcBNQAMAhAFAjQAGAgAAAjQAAArgIAoQgEARgFARQgcBXhGBFQhyBxiiAAQihAAhyhxgAi6CTQgIAIAAAMQAAALAIAIQAIAJAMAAQALAAAIgJQAJgIAAgLQAAgMgJgIQgIgIgLAAQgMAAgIAIgACvBqQgJAJABALQgBAMAJAIQAIAIAMAAQALAAAIgIQAJgIAAgMQAAgLgJgJQgIgIgLAAQgMAAgIAIgAgFAmQgIAIAAAMQAAALAIAIQAIAJALAAQAMAAAHgJQAJgIAAgLQAAgMgJgIQgHgIgMAAQgLAAgIAIgAjzgiQgHAIgBAMQABALAHAHQAJAJAMAAQALAAAIgJQAJgHAAgLQAAgMgJgIQgIgIgLAAQgMAAgJAIgAChhaQgHAJgBALQABAMAHAHQAJAJAMAAQALAAAIgJQAJgHAAgMQAAgLgJgJQgIgIgLAAQgMAAgJAIgAg+jRQgHAIAAAMQAAALAHAIQAJAJAMAAQALAAAJgJQAIgIAAgLQAAgMgIgIQgJgIgLAAQgMAAgJAIg");
	this.shape_18.setTransform(-4.6,22.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AisDGQgIgIAAgLQAAgMAIgIQAIgIAMAAQAMAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgMAAgIgJgAC9CdQgIgHAAgMQAAgMAIgIQAIgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAHQgIAJgMAAQgMAAgIgJgAAIBZQgIgIAAgLQAAgMAIgJQAJgHALAAQAMAAAIAHQAIAJAAAMQAAALgIAIQgIAJgMAAQgLAAgJgJgAjkAQQgIgIAAgKQAAgMAIgJQAIgHAMgBQALABAIAHQAJAJAAAMQAAAKgJAIQgIAJgLAAQgMAAgIgJgACwgnQgIgIAAgLQAAgMAIgIQAIgIAMAAQALAAAIAIQAJAIAAAMQAAALgJAIQgIAJgLgBQgMABgIgJgAgvieQgIgIAAgMQAAgLAIgIQAIgJAMABQAMgBAIAJQAHAIAAALQAAAMgHAIQgIAIgMAAQgMAAgIgIg");
	this.shape_19.setTransform(-9.375,46.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#993300").s().p("AkUD1Qg+g+gdhMQgXg/AAhIIABgeQADgpAKglQAbhdBJhJIAAAAIAQgOQAagXAcgSIAHAJQAFAHAHAHIAMALQAeAYAoABQAIAQANAPIAGAHQApAoA3AAQApAAAggVQANgIAKgLIANgNIABgCIgHgFIAHgJQAPAIAQADQANACANAAQApAAAhgYIAIgIIACgCIACADIADACIADADQA+A+AdBNQAMAhAGAjQAFAgAAAjQAAArgIAoQgEARgFARQgbBXhGBFQhzBxiiAAQihAAhzhxgAi7CTQgHAIgBAMQABALAHAIQAJAJAMAAQALAAAJgJQAIgIAAgLQAAgMgIgIQgJgIgLAAQgMAAgJAIgACvBqQgIAJAAALQAAAMAIAIQAIAIAMAAQALAAAJgIQAIgIAAgMQAAgLgIgJQgJgIgLAAQgMAAgIAIgAgFAmQgIAIAAAMQAAALAIAIQAIAJALAAQALAAAJgJQAIgIAAgLQAAgMgIgIQgJgIgLAAQgLAAgIAIgAjzgiQgHAIgBAMQABALAHAHQAJAJALAAQAMAAAIgJQAJgHgBgLQABgMgJgIQgIgIgMAAQgLAAgJAIgAChhaQgHAJgBALQABAMAHAHQAJAJALAAQAMAAAIgJQAJgHgBgMQABgLgJgJQgIgIgMAAQgLAAgJAIgAg+jRQgHAIgBAMQABALAHAIQAJAJAMAAQALAAAJgJQAIgIAAgLQAAgMgIgIQgJgIgLAAQgMAAgJAIg");
	this.shape_20.setTransform(-7.95,47.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACdDTQgLgDgGgLQgGgKADgLQADgLAKgGQAKgFAMADQALADAGAJQAGALgDALQgDALgLAFQgHAFgHAAIgHgBgAjKCcQgLgDgGgKQgGgKADgLQADgLAKgHQAKgFAMADQALADAFAKQAHAKgDALQgDALgLAGQgGAEgHAAIgIgBgAAABhQgKgDgGgKQgGgJADgMQADgLAKgGQAKgGALADQALADAFAKQAHALgDALQgDALgLAFQgGAEgHAAIgIgBgADDAQQgLgDgGgKQgFgJADgLQADgLAJgGQALgFALADQALADAGAKQAGAKgDALQgDAKgKAFQgHAEgHAAIgIgBgAjRgiQgMgDgFgKQgGgJADgMQADgLAKgGQAKgGALADQALADAGAKQAGALgDALQgDALgKAFQgHAEgHAAIgHgBgAAKicQgKgDgGgKQgGgKADgLQADgLAJgGQAKgGAMADQALADAGAKQAFALgDALQgDALgKAFQgGAEgIAAIgHgBg");
	this.shape_21.setTransform(-20.9779,60.4694);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#993300").s().p("AhjFuQidgqhRiLQgshNgIhQQgHhDAThGIAJgdQAOgmATghQAyhTBagzIAAgBIASgJQAfgQAggKIAEALIAIARIAJANQAXAfAnALQADASAIASIAFAIQAcAxA2APQAnAKAlgMQAOgFANgHIAQgJIACgCIgHgHIALgGQAMALAOAHQAMAGAMADQAoALAmgPIAKgGIADgBIABADIACADIACADQAtBNAHBSQAEAigEAiQgDAhgJAiQgMAqgSAlQgIAPgKAPQgwBNhWAxQhcA0hiAAQgzAAg2gOgACGCnQgKAHgDALQgDALAFAJQAGALAMADQALADAKgGQAKgGADgLQADgLgGgKQgGgKgLgDIgIgBQgHAAgGADgAjiBxQgJAGgDALQgDALAFAKQAGAKAMADQALADAKgFQAKgGADgLQADgLgGgLQgGgKgLgDIgIgBQgHAAgHAEgAgWA3QgKAGgDALQgDALAGAKQAGAKALADQALADAJgGQAKgFADgMQADgLgGgKQgFgKgLgDIgHgBQgHAAgHAEgACsgZQgKAGgDALQgDAKAGAJQAGALALADQALADAKgGQAKgGADgLQADgKgGgKQgGgKgLgDIgHgBQgHAAgHAEgAjphMQgJAGgDALQgDALAFAKQAGAKALADQALADAKgGQALgFADgMQADgLgHgKQgFgKgLgDIgIgBQgHAAgHAEgAgMjHQgLAGgDALQgDAMAGAJQAGALAMADQAKADAKgGQAKgFADgMQADgLgGgKQgGgKgLgDIgIgCQgGAAgGAEg");
	this.shape_22.setTransform(-19.3262,59.648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15,p:{y:21.325}},{t:this.shape_14}]},15).to({state:[{t:this.shape_15,p:{y:1.825}},{t:this.shape_16}]},9).to({state:[{t:this.shape_18},{t:this.shape_17}]},14).to({state:[{t:this.shape_20},{t:this.shape_19}]},8).to({state:[{t:this.shape_22},{t:this.shape_21}]},8).wait(16));

	// mouth
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AjygsQDrAYDsgrQAHgBAHgBQjkD9kBjog");
	this.shape_23.setTransform(-1,-29.0137);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6666").s().p("AjygsQDsAYDrgrIANgCQh2CDh+AAQh0AAh8hug");
	this.shape_24.setTransform(-1,-29.0137);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AjyABQDrAZDsgqQAHgBAHgCQjkBCkBgug");
	this.shape_25.setTransform(-1,-33.6604);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6666").s().p("AjyABQDsAZDrgqIANgDQiGAniRAAQhkAAhpgTg");
	this.shape_26.setTransform(-1,-33.6604);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AiLAAIEXAA");
	this.shape_27.setTransform(-0.75,-30.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},33).to({state:[{t:this.shape_27}]},20).wait(17));

	// eyes
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkYB7QgGgCgFgEQgGgEgEgHQgGgMADgOQABgFADgEIAHgJIAFgDQANgHAOADQAOAEAGAMQAIANgEAOQgDANgNAIQgFADgGABIgIABIgIgBgAFcBfQgHgDgEgEQgGgEgEgGQgHgNADgOQACgEADgFIAGgIIAFgEQAOgGAOACQAOAFAFAMQAJAMgFAPQgCANgNAHQgFAEgGABIgIABIgIgBgAlWAjQgbgHgOgWQgNgXAHgbQAHgaAYgOQAQgKASgBIARADQAIACAHADQAPAKAIAOIACADIAGAMQAHASgGAUQgIAZgXAOIgOAGIgCABIgBAAQgHACgIAAQgJAAgKgDgAEeAHQgbgHgOgVQgNgZAHgbQAHgaAYgOQAQgJASgCIAQADQAIACAHADQAPAKAIAOIACADIAGANQAHASgFAUQgIAZgYANIgOAHIgBABIgBgBQgIADgIAAQgJAAgJgDg");
	this.shape_28.setTransform(-5.9446,-71.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AlEDRQgUgBgUgFIgKgDIgUgHIgLgGIgIgEIgBgBIgCgBIAAAAIgBAAIgigcIgCgBIAAgBIgCgCIgDgCQgJgLgIgMIgCgCIgGgJIgKgWIgFgLIgBgCIgDgMIgBgFIgDgLIgBgFIAAgCIgBgSIgBgDIAAgBIAAgBIAAgBIABgZIAAAAIAAgCIABgCIABgHIACgKIACgHIgBgBIACgEIADgJIAEgMIAHgOIACgEIALgRIADgEIAWgaIAAgBIACgBIAAgBIABgBIABAAIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIABAAIAKAAIABAAIABABIACAAIACAAIABAAIADABIAHAAIACABIAAgBIADABIACAAIABABIAOADIAEABIAFACIABAAIAEABIABAAIACABIAEACIAGACIAOAHIADABIAPAJIAIAGIALAIIABABIABABIACACQALAKAKAMIABACIADADIABACIAAABIABAAIAAAAIABABIABADIABABIABAAIABACIAAAAIABABIAAABIABABIABACIAAABIACAFQAIANAFANIAEAJIAAABIABABIAAACIABAAIAAABIADANIAAAAIAAABIABACIAAACIACANIABACIAAAAQABAPAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIAAACIAAABIgBACIgFALIgBAEIAAAAIgBACIAAAAIgGALQgOAagWAUIgFAFIgGAEIAAAAIgEADIgCACIgEACIgHAFIgJAGIgIAEIgIAEIgKAFQgSAHgRADIgLABIgQABIgFAAIgIAAIgIAAgAkmAoIgFAEIgHAIQgDAEgBAFQgDAOAGAMQAEAHAGAEQAFAEAGADQAIACAIgCQAGgBAFgEQANgHADgNQAEgPgIgMQgGgMgOgFIgJgBQgJAAgJAFgAlshnQgYAOgHAaQgHAbANAYQAOAVAbAIQASAFAQgFIABABIACgBIAOgHQAXgNAIgZQAGgVgHgSIgGgMIgCgDQgIgOgPgKQgHgDgIgCIgRgDQgSABgQAKgAEHCuQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBAAIgigcQgRgSgOgXIgLgVIgFgNIgEgMIAAgFIgDgLIgBgEIAAgCIAAgBIgCgUIABgdIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIAOAIIACABIANAHIALAIIAKAIIABABIABABIACABQAMALALANIACAEIABABIAAABIABABIABAAIACADIAAABIACADIACADIABABIABABIACAFQAHANAFAOIAEAJIAAAAIABADIABABIADANIAAABIAAABIABABIADARIAAABQABAQAAAQIgBAHIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgGAQIgBADIAAABIgBABIAAABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgLAHIgJAGIgQAHQgWALgXAEIgLACIgUABIgJAAQgYAAgYgHgAFNALIgFAEIgGAJQgDAEgCAFQgDANAHANQAEAHAGAEQAEAEAHACQAHACAJgCQAGgBAFgDQANgIACgNQAFgOgJgNQgFgMgOgEIgJgBQgKAAgJAEgAEIiEQgYAPgHAaQgHAaANAZQAOAWAbAHQARAGARgFIABAAIABgBIAOgGQAYgOAIgaQAFgUgHgSIgGgMIgCgDQgIgPgPgJQgHgEgIgCIgQgCQgSABgQAJg");
	this.shape_29.setTransform(-5.3187,-69.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AHogQQAABHgzAzQgzAzhIAAQgaAAgXgHQgpgLghghQgzgzAAhHQAAhIAzgzQAzgyBIAAQAFAAAGAAQBBAEAvAuQAzAzAABIgAiLAQQAABIgzAzQgzAzhIAAQgZAAgXgHQgqgLghghQgzgzAAhIQAAhHAzgzQAzgyBIAAQAGAAAFAAQBBAEAvAuQAzAzAABHg");
	this.shape_30.setTransform(-5.475,-69.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#252525").s().p("AlpC3QgqgLghghQgzgzAAhHQAAhIAzgzQAzgyBIAAIALABQBBADAvAuQAzAzAABIQAABHgzAzQgzAzhIAAQgZAAgXgHgAEJCXQgpgMghghQgzgzAAhHQAAhHAzg0QAzgyBIAAIALABQBBADAvAuQAzA0AABHQAABHgzAzQgzAzhIAAQgaAAgXgGg");
	this.shape_31.setTransform(-5.475,-69.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AlEDRQgUgBgUgFIgKgDIgUgHIgLgGIgIgEIgBgBIgCgBIAAAAIgBAAIgigcIgCgBIAAgBIgCgCIgDgCQgJgLgIgMIgCgCIgGgJIgKgWIgFgLIgBgCIgDgMIgBgFIgDgLIgBgFIAAgCIgBgSIgBgDIAAgBIAAgBIAAgBIABgZIAAAAIAAgCIABgCIABgHIACgKIACgHIgBgBIACgEIADgJIAEgMIAHgOIACgEIALgRIADgEIAWgaIAAgBIACgBIAAgBIABgBIABAAIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIABAAIAKAAIABAAIABABIACAAIACAAIABAAIADABIAHAAIACABIAAgBIADABIACAAIABABIAOADIAEABIAFACIABAAIAEABIABAAIACABIAEACIAGACIAOAHIADABIAPAJIAIAGIALAIIABABIABABIACACQALAKAKAMIABACIADADIABACIAAABIABAAIAAAAIABABIABADIABABIABAAIABACIAAAAIABABIAAABIABABIABACIAAABIACAFQAIANAFANIAEAJIAAABIABABIAAACIABAAIAAABIADANIAAAAIAAABIABACIAAACIACANIABACIAAAAQABAPAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIAAACIAAABIgBACIgFALIgBAEIAAAAIgBACIAAAAIgGALQgOAagWAUIgFAFIgGAEIAAAAIgEADIgCACIgEACIgHAFIgJAGIgIAEIgIAEIgKAFQgSAHgRADIgLABIgQABIgFAAIgIAAIgIAAgAm1hpQgzAzAABHQAABIAzAzQAhAhApALQAXAHAaAAQBIAAAzgzQAzgzAAhIQAAhHgzgzQgvguhBgEIgLAAQhIAAgzAygAEHCuQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBAAIgigcQgRgSgOgXIgLgVIgFgNIgEgMIAAgFIgDgLIgBgEIAAgCIAAgBIgCgUIABgdIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIAOAIIACABIANAHIALAIIAKAIIABABIABABIACABQAMALALANIACAEIABABIAAABIABABIABAAIACADIAAABIACADIACADIABABIABABIACAFQAHANAFAOIAEAJIAAAAIABADIABABIADANIAAABIAAABIABABIADARIAAABQABAQAAAQIgBAHIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgGAQIgBADIAAABIgBABIAAABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgLAHIgJAGIgQAHQgWALgXAEIgLACIgUABIgJAAQgYAAgYgHgAC9iKQgzAzAABIQAABHAzAzQAhAhAqALQAXAHAZAAQBIAAAzgzQAzgzAAhHQAAhIgzgzQgvguhBgEIgLAAQhIAAgzAyg");
	this.shape_32.setTransform(-5.3187,-69.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AlRBnQgkgKgSgdQgRghAJgiQAJgiAggTQAVgNAYgBIAWADQAKADAJAFQAUAMALATIACAEIAIAQQAKAXgIAbQgKAigfASIgTAJIgCABIgBgBQgKADgLAAQgMAAgMgDgAEjBDQgjgKgTgdQgRgfAJgjQAKgiAfgUQAVgMAYgBIAWADQALACAJAFQAUANAKATIADAEIAIAQQAJAXgHAaQgLAigfATIgSAIIgCACIgCgBQgKADgLAAQgLAAgNgEg");
	this.shape_33.setTransform(-7.0403,-75.2685);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AlEDRQgUgBgUgFIgKgDIgUgHIgLgGIgIgEIgBgBIgCgBIAAAAIgBAAIgigcIgCgBIAAgBIgCgCIgDgCQgJgLgIgMIgCgCIgGgJIgKgWIgFgLIgBgCIgDgMIgBgFIgDgLIgBgFIAAgCIgBgSIgBgDIAAgBIAAgBIAAgBIABgZIAAAAIAAgCIABgCIABgHIACgKIACgHIgBgBIACgEIADgJIAEgMIAHgOIACgEIALgRIADgEIAWgaIAAgBIACgBIAAgBIABgBIABAAIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIABAAIAKAAIABAAIABABIACAAIACAAIABAAIADABIAHAAIACABIAAgBIADABIACAAIABABIAOADIAEABIAFACIABAAIAEABIABAAIACABIAEACIAGACIAOAHIADABIAPAJIAIAGIALAIIABABIABABIACACQALAKAKAMIABACIADADIABACIAAABIABAAIAAAAIABABIABADIABABIABAAIABACIAAAAIABABIAAABIABABIABACIAAABIACAFQAIANAFANIAEAJIAAABIABABIAAACIABAAIAAABIADANIAAAAIAAABIABACIAAACIACANIABACIAAAAQABAPAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIAAACIAAABIgBACIgFALIgBAEIAAAAIgBACIAAAAIgGALQgOAagWAUIgFAFIgGAEIAAAAIgEADIgCACIgEACIgHAFIgJAGIgIAEIgIAEIgKAFQgSAHgRADIgLABIgQABIgFAAIgIAAIgIAAgAl3hzQggAUgJAiQgJAjARAfQASAdAkAKQAXAHAWgGIABABIACgCIATgIQAfgTAKghQAIgbgKgXIgIgQIgCgEQgLgTgUgNQgJgFgKgCIgWgDQgYABgVAMgAEHCuQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBAAIgigcQgRgSgOgXIgLgVIgFgNIgEgMIAAgFIgDgLIgBgEIAAgCIAAgBIgCgUIABgdIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIAOAIIACABIANAHIALAIIAKAIIABABIABABIACABQAMALALANIACAEIABABIAAABIABABIABAAIACADIAAABIACADIACADIABABIABABIACAFQAHANAFAOIAEAJIAAAAIABADIABABIADANIAAABIAAABIABABIADARIAAABQABAQAAAQIgBAHIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgGAQIgBADIAAABIgBABIAAABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgLAHIgJAGIgQAHQgWALgXAEIgLACIgUABIgJAAQgYAAgYgHgAD9iWQgfATgKAiQgJAjARAhQATAdAjAJQAYAHAVgHIACABIACgBIASgJQAfgRALgiQAHgbgJgYIgIgQIgDgEQgKgTgUgMQgJgFgLgDIgWgDQgYABgVANg");
	this.shape_34.setTransform(-5.3187,-69.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ak6CDIgFAAIgDAAIgBAAIAAAAIgBAAIgNgEIgCABIAAAAIAAAAIgBgBIgBgBIgSgLQgfgagLgvQgHgmAJgeIAIgXIADgFQAKgaAUgSIACgBQAIgGAJgDIAWgFIACAAIAEABIACAAQATAEASAOQAWAUALAcQAFAMADAOQAJAwgRAtQgSAngkAOQgIADgIACIAAAAIgCAAIgBAAIgCAAgAFBBxIgCAAIgFAAIgDAAIgBAAIgBAAIgNgEIgCABIAAAAIgBgBIgBgBIgSgLQgfgagLgvQgHglAJgfIAIgXIADgFQAKgaAUgSIACgBQAIgGAJgDIAWgFIACAAIAEABIACAAQATAEASAOQAWAUALAcQAFAMADAOQAJAwgRAtQgSAngkAOIgPAFIgBAAIgCAAIgBAAg");
	this.shape_35.setTransform(-5.5193,-68.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AlEDRQgUgBgUgFIgKgDIgUgHIgLgGIgIgEIgBgBIgCgBIAAAAIgBAAIgigcIgCgBIAAgBIgCgCIgDgCQgJgLgIgMIgCgCIgGgJIgKgWIgFgLIgBgCIgDgMIgBgFIgDgLIgBgFIAAgCIgBgSIgBgDIAAgBIAAgBIAAgBIABgZIAAAAIAAgCIABgCIABgHIACgKIACgHIgBgBIACgEIADgJIAEgMIAHgOIACgEIALgRIADgEIAWgaIAAgBIACgBIAAgBIABgBIABAAIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIABAAIAKAAIABAAIABABIACAAIACAAIABAAIADABIAHAAIACABIAAgBIADABIACAAIABABIAOADIAEABIAFACIABAAIAEABIABAAIACABIAEACIAGACIAOAHIADABIAPAJIAIAGIALAIIABABIABABIACACQALAKAKAMIABACIADADIABACIAAABIABAAIAAAAIABABIABADIABABIABAAIABACIAAAAIABABIAAABIABABIABACIAAABIACAFQAIANAFANIAEAJIAAABIABABIAAACIABAAIAAABIADANIAAAAIAAABIABACIAAACIACANIABACIAAAAQABAPAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIAAACIAAABIgBACIgFALIgBAEIAAAAIgBACIAAAAIgGALQgOAagWAUIgFAFIgGAEIAAAAIgEADIgCACIgEACIgHAFIgJAGIgIAEIgIAEIgKAFQgSAHgRADIgLABIgQABIgFAAIgIAAIgIAAgAlGCLIABABIAAAAIAEAAIAFAAIACAAIABAAIACAAIAAAAQAIgCAIgDQAkgOASgoQARgtgJgvQgDgOgFgMQgLgdgWgTQgSgPgTgDIgCAAIgEgBIgCAAIgWAFQgJADgIAGIgCABQgUARgKAaIgDAGIgIAWQgJAfAHAmQALAvAfAZIASAMIABABIABABIAAAAIAAAAIAPACgAEHCuQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBAAIgigcQgRgSgOgXIgLgVIgFgNIgEgMIAAgFIgDgLIgBgEIAAgCIAAgBIgCgUIABgdIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIAOAIIACABIANAHIALAIIAKAIIABABIABABIACABQAMALALANIACAEIABABIAAABIABABIABAAIACADIAAABIACADIACADIABABIABABIACAFQAHANAFAOIAEAJIAAAAIABADIABABIADANIAAABIAAABIABABIADARIAAABQABAQAAAQIgBAHIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgGAQIgBADIAAABIgBABIAAABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgLAHIgJAGIgQAHQgWALgXAEIgLACIgUABIgJAAQgYAAgYgHgAEzB6IABAAIABAAIADAAIAFAAIACAAIABAAIACAAIABAAIAPgFQAkgOASgoQARgtgJgvQgDgOgFgMQgLgdgWgTQgSgPgTgDIgCAAIgEgBIgCAAIgWAFQgJADgIAGIgCABQgUARgKAaIgDAGIgIAWQgJAgAHAlQALAvAfAZIASAMIABABIABABIAAAAIACgBIANAEg");
	this.shape_36.setTransform(-5.3187,-69.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AG3gJQAAgggkgVQgSgLgUgFQgYgHgcAAQgXAAgVAFQgZAFgUANQgkAVAAAgQAAAcAhAWQABABACABQAlAXA0AAQAvAAAjgTQAEgCAEgCQAkgWAAgegAi7AKQAAgeglgWQgRgKgVgGQgYgGgcAAQgXAAgUAEQgZAGgVAMQgjAWAAAeQAAAaAaAVQAEADAFAEQAmAWAzAAQArAAAhgPQAIgDAGgEQAlgXAAgfg");
	this.shape_37.setTransform(-4.575,-74.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ak6BNIgFAAIgDAAIgBAAIAAAAIgBgBIgNgDIgCABIAAAAIAAAAIgBgBIgBgBIgSgMQgfgZgLguQgFgaADgXIAKAHQAlAWA0AAQArAAAhgPQABAhgMAfQgSAogkAOQgIADgIACIAAAAIgCAAIgBAAIgCAAgAFBA7IgCAAIgFAAIgDAAIgBAAIgBAAIgNgEIgCABIAAAAIgBgBIgBgBIgSgMQgfgZgLguQgEgZACgWIADACQAmAXAzAAQAvAAAjgTQADAlgNAhQgSAogkAOIgPAFIgBAAIgCAAIgBAAg");
	this.shape_38.setTransform(-5.5205,-63.1125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AlEDRQgUgBgUgFIgKgDIgUgHIgLgGIgIgEIgBgBIgCgBIAAAAIgBAAIgigcIgCgBIAAgBIgCgCIgDgCQgJgLgIgMIgCgCIgGgJIgKgWIgFgLIgBgCIgDgMIgBgFIgDgLIgBgFIAAgCIgBgSIgBgDIAAgBIAAgBIAAgBIABgZIAAAAIAAgCIABgCIABgHIACgKIACgHIgBgBIACgEIADgJIAEgMIAHgOIACgEIALgRIADgEIAWgaIAAgBIACgBIAAgBIABgBIABAAIAAAAIACgCIAKgHIAEgEIAKgHIAHgEIAGgDIAQgIQALgFALgDIALgDIAEgBIAEgBIABAAIABAAIABAAIAFgBIAAAAIADAAIATgCIADAAIADAAIABAAIAKAAIABAAIABABIACAAIACAAIABAAIADABIAHAAIACABIAAgBIADABIACAAIABABIAOADIAEABIAFACIABAAIAEABIABAAIACABIAEACIAGACIAOAHIADABIAPAJIAIAGIALAIIABABIABABIACACQALAKAKAMIABACIADADIABACIAAABIABAAIAAAAIABABIABADIABABIABAAIABACIAAAAIABABIAAABIABABIABACIAAABIACAFQAIANAFANIAEAJIAAABIABABIAAACIABAAIAAABIADANIAAAAIAAABIABACIAAACIACANIABACIAAAAQABAPAAAQIgBAIIgBAMIgBAFIgBAFIAAABIgBAEIgBADIgCAFIgCAJIgBADIAAACIAAABIgBACIgFALIgBAEIAAAAIgBACIAAAAIgGALQgOAagWAUIgFAFIgGAEIAAAAIgEADIgCACIgEACIgHAFIgJAGIgIAEIgIAEIgKAFQgSAHgRADIgLABIgQABIgFAAIgIAAIgIAAgAlGCLIABABIAAAAIAEAAIAFAAIACAAIABAAIACAAIAAAAQAIgCAIgDQAkgOASgoQAMgfgBgiIAOgHQAkgWAAgfQAAgfgkgWQgSgKgUgGQgYgGgcAAQgXAAgVAEQgZAGgUAMQgkAWAAAfQAAAbAaATQgagTAAgbQAAgfAkgWQAUgMAZgGQAVgEAXAAQAcAAAYAGQAUAGASAKQAkAWAAAfQAAAfgkAWIgOAHQghAPgrAAQg0AAglgWIgKgHQgDAXAFAaQALAvAfAZIASAMIABABIABABIAAAAIAAAAIAPACgAEHCuQgPgEgOgGIgLgGIgIgDIgCgBIgBgBIgBAAIgBAAIgigcQgRgSgOgXIgLgVIgFgNIgEgMIAAgFIgDgLIgBgEIAAgCIAAgBIgCgUIABgdIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIAOAIIACABIANAHIALAIIAKAIIABABIABABIACABQAMALALANIACAEIABABIAAABIABABIABAAIACADIAAABIACADIACADIABABIABABIACAFQAHANAFAOIAEAJIAAAAIABADIABABIADANIAAABIAAABIABABIADARIAAABQABAQAAAQIgBAHIgBALIgBAGIgBAFIAAABIgBADIgBAEIgCAEIgCAJIgBAEIgGAQIgBADIAAABIgBABIAAABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgLAHIgJAGIgQAHQgWALgXAEIgLACIgUABIgJAAQgYAAgYgHgAEzB6IABAAIABAAIADAAIAFAAIACAAIABAAIACAAIABAAIAPgFQAkgOASgoQANgigDgjIAIgFQAlgWAAgfQAAggglgVQgRgLgVgFQgYgHgcAAQgXAAgUAFQgZAFgVANQgjAVAAAgQAAAdAgAWQgCAVAEAZQALAvAfAZIASAMIABABIABABIAAAAIACgBIANAEgADngLIgDgCQgggWAAgdQAAggAjgVQAVgNAZgFQAUgFAXAAQAcAAAYAHQAVAFARALQAlAVAAAgQAAAfglAWIgIAFQgjARgvAAQgzAAgmgWgADkgNIAAAAg");
	this.shape_39.setTransform(-5.3187,-69.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},22).to({state:[{t:this.shape_29},{t:this.shape_28}]},10).to({state:[{t:this.shape_34},{t:this.shape_33}]},7).to({state:[{t:this.shape_36},{t:this.shape_35}]},14).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},10).wait(7));

	// body
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AM38kQgCgBgCgBQghgMgggHQgOgDgOgCQgagEgaAAQgHAAgGABQhYADhDAxQgOAJgNAMQguArgUA0QgPAoAAAtQAAAZADAgQAGAEAGAEQBBAuA7BCAXsiUQi+hhhDldQgBgEAAgFQgCgEAAgDQgHgkgFgmQhAnfABgEQg3nCh9hoQhKg+gzgbALm5jQAqhJAdgDQAIgBAGADAKLz8IA+hqQAGgBAHgBQAEAAAFgBQCDgZhfhJQgTgPgagQQghgUgtgWQgJgFgIgEIgBAAQgkgPgVgBQgigBABAfQABAZAVAuIgcAxQgOgRgOgPQgrgugygfQgGgEgGgDAKLz8Qgjg5gqg3QgRgXgSgUIgCAEQAYAcAWAgQAkAyAfAzQAlA9AgA+QADAIAEAIQADAIAEAIQAJAMANAsQA8CMAcCRQARBUAGBcQACAiABAjQACAKADAKQBFEBBvBAQCNBSCQAIQAZABAbAAQBOgIBggbQgXgIgWgKQgCgBgCgBABu3kQB4g+BbB3AB22mQCDgeAzBpACL5rICIAlACL5rQBIANBAAYQA+AXBAAkAFlzyQAdADAbAFQDwAsAfDlAKLzzQAmA9AeA/AKLzzQgBgDgBgCIACgEAKKzyIABgBAgh0BQD/gNC/COQBqBNBWB9QBTB4ArBhQAcBAAKA1QACAKACAMQAKBGAHCEQACA5ACBEQACBjAhB6QAvj5gCjSAH1riQgNAtgPAYAIqqqQgWBQgfAMAG9sNQgKAjgLAXABus+QCYhwCXBfQANAIANAJAItiiQgGADgFADQgVANgOARQgxAjgxAcQmADcmWjbQgCgBgCgBAItiiQB1heB0iIASCkdQAEAEAFAEQBwCpEigUAR1okQAYCaB3B5QBmBnCCAWAOI5DQg1BagngTANx8SQgigSgYAAANq8OQgagNgZgJAItiiQAlDDAcCWQA4FJAUB3QALA9AAAGQAFGJhwCgQgEAFgDAFQgRAWgYATQgvAlhJAYQgKADgLADQh2Ahi2ACQg0ABg5gCQg/gDg4gFQk2gchvhwQgVgUgNgXQhliqEbxaQAAgBAAAAACjV7QAUApASAdQAdAuATApQAnBTgBA9QgCBcBGAbQAYAJAiAHQBBANBnAGQCcAJBphBQBphBiIghQiHgigrglQgjgfgNgqQgLggADgoQAIhvAViDAiT14QiDg6hGBfAgh55QACAAABAAQBZAABQAOA4JhHQASgLARgNQCZh5A4lKQAFgeAEghQABgJABgKQA7negBgEQAql6BYiGQARgaATgRQALgKANgKQA6gsBUgdQAOgFAQgFQAigHAwgLIAigIQBQABA+AxQANAKAMAMQBKBKAABpQAAAZgEAYAqM1HQgOARgNARQgrA5gkA8Ig/huQgGgBgHgBQgEgBgEgBQiCgYBehKQASgOAagQQAggUAtgXQAJgEAIgFIABAAQBZgmgBA1QgBAYgVAvIAcAwQgCACgBABIgBADQgCABgBACgAqF1QQAQgVARgUQAtg0AygpQAHgGAIgGQA7gtBCggQCYhJDAgBQBRDXhRChQjLANiNBNQhHAmg2A2QgZAYgWAcQgiArgdAtQinEKAkFJQAPCDBDClQAQAmASAmQgdgdgZgdQiqjGgmivQgUhaABhdQAEjpBUjTQA5iPBdiGQAJgMAJgMAr/uKQAAgMABgMQAHheA1g9QACgCABgDQAxg3BZgbAis3UQiDg5hFBfAtt2wQgQgQgMgOAs248IAjA8AzSndQgRBLgQA6QgQA6gkAuQglAugNAMQgMAMgJAHQgPANhpBNQgFADgFAEAt5mnQhAEeieBEQivBKjggzQgCgBgDgBQgYgFgZgIQAJgFAKgFA36g9QAFgGAFgEQgHAAgHAAQgGAAgFAAQgGAAgFgBQgEAAgEALA36g9QgFAAgFAAA0Ui9QgyBHhKAgQgnASgvAFQgKABgKABApEplQAjA9AcAMAohqpQAYArAVASAn4rgQAYApAUATArnlsQBDBVBAA3QA3AuA3AmQAKAHBAAlIAhATQABABABAAQABABABAAIABABAncsgQAygkAxgPQBzgiBzBVAhzV4QgGAdgRAcQgdAvgTApQgmBSABA+QACBchFAaQhEAaiaAJQiaAJhnhBQhnhBCGghQCEghAqgmQAjgeANgqQAKghgDgnQgHhwgUhl");
	this.shape_40.setTransform(-4.525,-14.0703);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CCFFFF").s().p("AKjFKQASCgAUgYQBZhqARirIACgdIAAADQAAAZgCAaQgRCrhZBqQgDAEgCAAQgSAAgPilgALLiUIgDgFIgCgCIgNgSIgEgFQhtiKhoA1QB1hfB0iIIAEB+QACBiAhB6gAs0nRQBDBVBAA2QA3AuA3AmQAKAIBAAkIAhAUIACABIACABIABAAIAAAAIAAABQivhHhgBNQhDimgPiCg");
	this.shape_41.setTransform(3.1542,-3.9417);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF3366").s().p("AgzMOQg/gDg5gFQk2gchvhwQgUgUgOgXQhliqEbxaIAHAIIAEACQGXDcGAjdQAxgcAwgjIAvgkIBAFaIBNG/QAKA9AAAGQAGGJhxCgIgHAKQgRAWgYATQgvAlhJAYIgUAGQh3Ahi2ACIgVABQgpAAgugCgAnAq5IgCgBIgigTQgkgWAFABIAYALQAZANATASIABAAIgCgBg");
	this.shape_42.setTransform(1.0346,48.005);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFC3A2").s().p("AIgYiQhmgGhBgNQgjgHgYgJQhFgbABhcQACg9gohTQgSgpgeguQgSgdgTgpQCWgBBkggIAUgHQBJgYAvglQAYgTARgWIAHgKIAEgFQgVCDgHBvQgDAoAKAgQANAqAjAfQArAlCIAiQCHAhhoBBQhdA5iEAAIglgBgAslXaQhnhBCFghQCFghAqgmQAigeANgqQAKghgCgnQgIhwgUhlQBvBwE2AcQgFAdgSAcQgdAvgSApQgnBSACA+QABBchEAaQhFAaiaAJIgkACQiCAAhag6gAmeleIgEgCIgHgIIAAgBIgBgBIAAAAIAAAAIgBAAIAAgBIgBAAQgTgSgZgNIgYgLQgFgBAkAWQg/glgLgHQg2gmg3guQhBg3hDhVQgklJCokKQAcgtAjgrQAVgcAZgYQA3g2BGgmQCNhNDLgNQD/gNDACOQBpBNBWB9QBUB4AqBhQAdBAAKA1IADAWQALBGAGCEQhzCIh1BeIgMAGQgUANgPARQgwAjgxAcQjBBvjFAAQjGAAjLhugAkcn5IAAAAIAAgBgAops8QgdgMgjg9QAjA9AdAMgAHQtuQAfgMAWhQQgWBQgfAMgAoYuMQgVgSgZgrQAZArAVASgAG1u9QAPgYAMgtQgMAtgPAYgAnxvEQgUgTgXgpQAXApAUATgAGDvzQAMgXAJgjQgJAjgMAXgAi4xAIgBgBIgFgDQhOg4hPAAIgBAAIAAAAQghAAghAJQgxAPgxAkQAxgkAxgPQAhgJAhAAIAAAAIABAAQBPAABOA4IAFADIABABgAF5xvQANAIAMAJQgMgJgNgIQhGgrhFgBIAAAAIAAAAQhRABhQA6IgBABIgCABIACgBIABgBQBQg6BRgBIAAAAIAAAAQBFABBGArIAAAAg");
	this.shape_43.setTransform(-0.8679,14.704);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ANlNJIAQAAIAAAJIgQgJgAhaJ9IAMgGIgvAjQAPgRAUgMgAt1I/IAAAAIABAAgAnxtRQBIAMBAAYg");
	this.shape_44.setTransform(59.15,-93.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9999").s().p("Ar/BQIgNgCIgIgBQiCgZBehIQASgPAagQQAggUAtgWIARgJIABgBQBZglgBA0QgBAZgVAuIAcAwIgDADIgBACIgDAEIgbAiQgrA5gkA7gAJ0ACQgRgVgSgVIAcgwQgVgvgBgYQgBgdAdgBQAVABAkAOIABAAIARAJQAtAXAhAUQAaAQATAOQBfBKiDAXIgJACIgNACIg+BqQgjg6gqg3g");
	this.shape_45.setTransform(-9.9051,-153.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6B251C").s().p("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");
	this.shape_46.setTransform(-4.525,-106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-200.9,315,373.70000000000005);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(48.95,-98.1,1,1,0,0,0,76,31.9);

	this.instance_1 = new lib.cookisstook("synched",0);
	this.instance_1.setTransform(32.8,-66.3,1,1,-14.9992,0,0,76,31.9);

	this.instance_2 = new lib.cookisstook("synched",0);
	this.instance_2.setTransform(78.65,-36.3,1,1,14.9992,0,0,76,31.8);

	this.instance_3 = new lib.cookisstook("synched",0);
	this.instance_3.setTransform(32.8,-15.9,1,1,-14.9992,0,0,76,31.9);

	this.instance_4 = new lib.cookisstook("synched",0);
	this.instance_4.setTransform(78.65,14,1,1,14.9992,0,0,76,31.8);

	this.instance_5 = new lib.cookisstook("synched",0);
	this.instance_5.setTransform(48.95,46.05,1,1,0,0,0,76,31.9);

	this.instance_6 = new lib.cookisstook("synched",0);
	this.instance_6.setTransform(54.6,77.75,1,1,0,0,0,76,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-130,190.70000000000002,239.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(48.95,-98.1,1,1,0,0,0,76,31.9);

	this.instance_1 = new lib.cookisstook("synched",0);
	this.instance_1.setTransform(32.8,-66.3,1,1,-14.9992,0,0,76,31.9);

	this.instance_2 = new lib.cookisstook("synched",0);
	this.instance_2.setTransform(78.65,-36.3,1,1,14.9992,0,0,76,31.8);

	this.instance_3 = new lib.cookisstook("synched",0);
	this.instance_3.setTransform(32.8,-15.9,1,1,-14.9992,0,0,76,31.9);

	this.instance_4 = new lib.cookisstook("synched",0);
	this.instance_4.setTransform(78.65,14,1,1,14.9992,0,0,76,31.8);

	this.instance_5 = new lib.cookisstook("synched",0);
	this.instance_5.setTransform(48.95,46.05,1,1,0,0,0,76,31.9);

	this.instance_6 = new lib.cookisstook("synched",0);
	this.instance_6.setTransform(54.6,77.75,1,1,0,0,0,76,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-130,190.70000000000002,239.6);


(lib.Scene_1_hand_cover_the_mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand_cover_the_mouth
	this.instance = new lib.handonthemouth();
	this.instance.setTransform(746.95,563.85,1,1,0,0,0,28.6,44.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(611).to({_off:false},0).wait(1).to({scaleY:0.9905,rotation:5.9997,x:743.55},0).wait(1).to({scaleY:0.9811,rotation:11.9994,x:740.1},0).wait(1).to({scaleY:0.9716,rotation:17.9992,x:736.65},0).wait(1).to({scaleY:0.9621,rotation:23.9989,x:733.25},0).wait(1).to({scaleY:0.9526,rotation:29.9986,x:729.8},0).wait(1).to({scaleY:0.9432,rotation:44.9985,x:724.55,y:557.7},0).wait(1).to({scaleY:0.9337,rotation:59.9984,x:719.3,y:551.55},0).wait(1).to({scaleY:0.9242,rotation:74.9983,x:714.05,y:545.5},0).wait(1).to({scaleY:0.9147,rotation:89.9982,x:708.75,y:539.35},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cookies = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cookies
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(1015.2,662.75,1,1,-29.9977,0,0,76,31.9);

	this.instance_1 = new lib.cookisstook("synched",0);
	this.instance_1.setTransform(1142.6,500.05,1,1,0,0,0,76,31.9);

	this.instance_2 = new lib.cookisstook("synched",0);
	this.instance_2.setTransform(1126.45,531.85,1,1,-14.9992,0,0,76,31.9);

	this.instance_3 = new lib.cookisstook("synched",0);
	this.instance_3.setTransform(1172.3,561.85,1,1,14.9992,0,0,76,31.8);

	this.instance_4 = new lib.cookisstook("synched",0);
	this.instance_4.setTransform(1126.45,582.25,1,1,-14.9992,0,0,76,31.9);

	this.instance_5 = new lib.cookisstook("synched",0);
	this.instance_5.setTransform(1172.3,612.15,1,1,14.9992,0,0,76,31.8);

	this.instance_6 = new lib.cookisstook("synched",0);
	this.instance_6.setTransform(1142.6,644.2,1,1,0,0,0,76,31.9);

	this.instance_7 = new lib.cookisstook("synched",0);
	this.instance_7.setTransform(1148.25,675.9,1,1,0,0,0,76,31.8);

	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(1093.65,598.15);

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(1093.65,598.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6,p:{regY:31.9,x:1142.6,y:644.2}},{t:this.instance_5,p:{regY:31.8,rotation:14.9992,x:1172.3,y:612.15}},{t:this.instance_4,p:{regY:31.9,rotation:-14.9992,x:1126.45,y:582.25}},{t:this.instance_3,p:{regY:31.8,rotation:14.9992,x:1172.3,y:561.85}},{t:this.instance_2,p:{regY:31.9,rotation:-14.9992,x:1126.45,y:531.85}},{t:this.instance_1,p:{rotation:0,x:1142.6,y:500.05,regY:31.9}},{t:this.instance,p:{rotation:-29.9977,x:1015.2,y:662.75,regY:31.9}}]},364).to({state:[{t:this.instance_8}]},53).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_6,p:{regY:31.8,x:1148.25,y:675.9}},{t:this.instance_5,p:{regY:31.9,rotation:0,x:1142.6,y:644.2}},{t:this.instance_4,p:{regY:31.8,rotation:14.9992,x:1172.3,y:612.15}},{t:this.instance_3,p:{regY:31.9,rotation:-14.9992,x:1126.45,y:582.25}},{t:this.instance_2,p:{regY:31.8,rotation:14.9992,x:1172.3,y:561.85}},{t:this.instance_1,p:{rotation:-14.9992,x:1126.45,y:531.85,regY:31.9}},{t:this.instance,p:{rotation:0,x:1142.6,y:500.05,regY:31.9}}]},1).to({state:[{t:this.instance_5,p:{regY:31.8,rotation:0,x:1148.25,y:675.9}},{t:this.instance_4,p:{regY:31.9,rotation:0,x:1142.6,y:644.2}},{t:this.instance_3,p:{regY:31.8,rotation:14.9992,x:1172.3,y:612.15}},{t:this.instance_2,p:{regY:31.9,rotation:-14.9992,x:1126.45,y:582.25}},{t:this.instance_1,p:{rotation:14.9992,x:1172.3,y:561.85,regY:31.8}},{t:this.instance,p:{rotation:-14.9992,x:1126.45,y:531.85,regY:31.9}}]},3).to({state:[{t:this.instance_4,p:{regY:31.8,rotation:0,x:1148.25,y:675.9}},{t:this.instance_3,p:{regY:31.9,rotation:0,x:1142.6,y:644.2}},{t:this.instance_2,p:{regY:31.8,rotation:14.9992,x:1172.3,y:612.15}},{t:this.instance_1,p:{rotation:-14.9992,x:1126.45,y:582.25,regY:31.9}},{t:this.instance,p:{rotation:14.9992,x:1172.3,y:561.85,regY:31.8}}]},19).to({state:[{t:this.instance_3,p:{regY:31.8,rotation:0,x:1148.25,y:675.9}},{t:this.instance_2,p:{regY:31.9,rotation:0,x:1142.6,y:644.2}},{t:this.instance_1,p:{rotation:14.9992,x:1172.3,y:612.15,regY:31.8}},{t:this.instance,p:{rotation:-14.9992,x:1126.45,y:582.25,regY:31.9}}]},24).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cookie2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cookie2
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(1148.8,505.45,0.9984,0.9984,0,0,0,81.2,36.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(445).to({_off:false},0).wait(1).to({regX:76,regY:31.8,x:1123.65,y:498.2},0).wait(1).to({x:1103.65,y:495.6},0).wait(1).to({x:1083.65,y:493},0).wait(1).to({x:1063.65,y:490.4},0).wait(1).to({x:1043.65,y:487.75},0).wait(1).to({x:1023.7,y:485.15},0).wait(1).to({x:1003.7,y:482.55},0).wait(1).to({x:983.7,y:479.95},0).wait(1).to({x:963.7,y:477.3},0).wait(1).to({x:943.7,y:474.7},0).wait(1).to({x:923.7,y:472.1},0).wait(1).to({x:903.75,y:469.5},0).wait(1).to({x:883.75,y:466.85},0).wait(1).to({x:863.75,y:464.25},0).wait(1).to({x:843.75,y:461.65},0).wait(1).to({x:823.75,y:459.05},0).wait(1).to({x:803.75,y:456.4},0).to({_off:true},1).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cookie1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cookie1
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(1015.2,662.65,0.9999,0.9999,-29.9973,0,0,74.1,30.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(417).to({_off:false},0).wait(1).to({regX:76,regY:31.8,x:1001.45,y:651.35},0).wait(1).to({x:985.6,y:640.15},0).wait(1).to({x:969.75,y:628.9},0).wait(1).to({x:953.9,y:617.7},0).wait(1).to({x:938.05,y:606.45},0).wait(1).to({x:922.2,y:595.25},0).wait(1).to({x:906.35,y:584.05},0).wait(1).to({x:890.5,y:572.8},0).wait(1).to({x:874.65,y:561.6},0).wait(1).to({x:858.8,y:550.35},0).wait(1).to({x:842.95,y:539.15},0).wait(1).to({x:827.1,y:527.9},0).wait(1).to({x:811.25,y:516.7},0).wait(1).to({x:795.4,y:505.5},0).to({_off:true},1).wait(152));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cookie_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cookie_4
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(1172.3,561.85,1,1,14.9992,0,0,76,31.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(488).to({_off:false},0).wait(16).to({regY:31.7,rotation:14.9975,x:1172.35,y:561.8},0).wait(1).to({regY:31.8,rotation:14.9981,x:1143.7,y:559.6},0).wait(1).to({x:1115.15,y:557.3},0).wait(1).to({x:1086.55,y:555},0).wait(1).to({x:1058,y:552.7},0).wait(1).to({x:1029.4,y:550.4},0).wait(1).to({x:1000.85,y:548.1},0).wait(1).to({x:972.25,y:545.8},0).wait(1).to({x:943.7,y:543.5},0).wait(1).to({x:915.1,y:541.2},0).wait(1).to({x:886.55,y:538.9},0).wait(1).to({x:857.95,y:536.6},0).wait(1).to({x:829.4,y:534.3},0).wait(1).to({x:800.8,y:532},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cookie_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cookie_3
	this.instance = new lib.cookisstook("synched",0);
	this.instance.setTransform(1126.45,531.85,1,1,-14.9992,0,0,76,31.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(462).to({_off:false},0).wait(13).to({regX:76.5,regY:32,rotation:-14.9975,y:531.8},0).wait(1).to({regX:76,regY:31.8,rotation:-14.9981,x:1098.7,y:525.85},0).wait(1).to({x:1071.5,y:519.95},0).wait(1).to({x:1044.35,y:514.05},0).wait(1).to({x:1017.15,y:508.15},0).wait(1).to({x:990,y:502.25},0).wait(1).to({x:962.8,y:496.4},0).wait(1).to({x:935.65,y:490.5},0).wait(1).to({x:908.45,y:484.6},0).wait(1).to({x:881.3,y:478.7},0).wait(1).to({x:854.1,y:472.8},0).wait(1).to({x:826.95,y:466.9},0).wait(1).to({x:799.75,y:461.05},0).to({_off:true},1).wait(58));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bony_eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bony_eat
	this.instance = new lib.bony_eat();
	this.instance.setTransform(850.25,736.2,1,1,0,0,0,156.6,185.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(518).to({_off:false},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bony_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bony_body
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(165.25,347.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(165.25,347.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(175.25,347.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(191.25,347.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(199.25,347.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_12();
	this.instance_5.setTransform(213.25,347.9,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_13();
	this.instance_6.setTransform(217.25,347.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_14();
	this.instance_7.setTransform(241.25,347.9,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_15();
	this.instance_8.setTransform(265.25,347.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_16();
	this.instance_9.setTransform(281.25,347.9,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_17();
	this.instance_10.setTransform(305.25,347.9,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_18();
	this.instance_11.setTransform(357.25,347.9,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_19();
	this.instance_12.setTransform(367.25,347.9,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_20();
	this.instance_13.setTransform(375.25,347.9,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_21();
	this.instance_14.setTransform(399.25,347.9,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_22();
	this.instance_15.setTransform(413.25,347.9,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_23();
	this.instance_16.setTransform(447.25,347.9,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_24();
	this.instance_17.setTransform(455.25,347.9,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_25();
	this.instance_18.setTransform(503.25,347.9,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_26();
	this.instance_19.setTransform(545.25,347.9,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_27();
	this.instance_20.setTransform(503.25,347.9,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_28();
	this.instance_21.setTransform(455.25,347.9,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_29();
	this.instance_22.setTransform(437.25,347.9,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_30();
	this.instance_23.setTransform(421.25,347.9,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_31();
	this.instance_24.setTransform(397.25,347.9,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_32();
	this.instance_25.setTransform(361.25,347.9,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_33();
	this.instance_26.setTransform(355.25,347.9,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_34();
	this.instance_27.setTransform(339.25,347.9,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_35();
	this.instance_28.setTransform(265.25,347.9,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_36();
	this.instance_29.setTransform(281.25,347.9,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_37();
	this.instance_30.setTransform(305.25,347.9,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_38();
	this.instance_31.setTransform(357.25,347.9,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_39();
	this.instance_32.setTransform(367.25,347.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_40();
	this.instance_33.setTransform(375.25,347.9,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_41();
	this.instance_34.setTransform(375.25,347.9,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_42();
	this.instance_35.setTransform(375.25,297.6,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_43();
	this.instance_36.setTransform(375.25,231.6,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_44();
	this.instance_37.setTransform(375.25,71.7,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_46();
	this.instance_38.setTransform(751.95,97.9,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_45();
	this.instance_39.setTransform(375.25,71.7,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_48();
	this.instance_40.setTransform(751.95,97.9,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_47();
	this.instance_41.setTransform(375.25,71.7,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_50();
	this.instance_42.setTransform(751.95,97.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_49();
	this.instance_43.setTransform(375.25,71.7,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_52();
	this.instance_44.setTransform(751.95,97.9,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_51();
	this.instance_45.setTransform(375.25,71.7,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_54();
	this.instance_46.setTransform(751.95,97.9,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_53();
	this.instance_47.setTransform(354.85,71.7,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_56();
	this.instance_48.setTransform(751.95,97.9,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_55();
	this.instance_49.setTransform(106.2,71.7,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_58();
	this.instance_50.setTransform(227.25,97.9,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_57();
	this.instance_51.setTransform(106.2,71.7,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_59();
	this.instance_52.setTransform(375.25,347.9,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_60();
	this.instance_53.setTransform(375.25,347.9,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_61();
	this.instance_54.setTransform(375.25,347.9,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_62();
	this.instance_55.setTransform(375.25,347.9,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_63();
	this.instance_56.setTransform(375.25,347.9,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AifAAIE/AA");
	this.shape.setTransform(536.1,513.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_1.setTransform(532.65,534.1318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFFFF").s().p("ALZCvQgUgZgTgTQgmgngmgQQgNgIgMgFQgrgTg+AoIANgKQAuglAagXIAFgDQBchTA3hmQAZCdAGAGQAMBkAXBWgAsSiNQBDBVBBA2QA3AtA2AmQAVAPAWAOQhkgkhoBWQg+iMgSihg");
	this.shape_2.setTransform(536.625,512.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AgWLjQhAgCg5gFQk2gchvhxQgUgUgOgXQhliqAZl0QBnAqDQg1QDiiGkOhQQiLgRA1hrIA0hpIAcg5QBMichShPIAOAIQF7DNFlixQgJAMgFAOIgBACIgEANIgHAeQgJAqAEAqQAHA8A1BpQALAUAKAaQApBqAbDIQAPB0AlA4IAIAMQAmAyA7gLQAqgJAggmQABBOgDAvQgLCsgzBRQg0BRgFAGQhqBhkHAfIggACIgDAAIgBAAIgBAAIhDACIgVAAQgrAAgsgCg");
	this.shape_3.setTransform(535.1222,601.405);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC3A2").s().p("AI0YgQhIgEg1gIQg+gJglgOQhEgaABhcQACg+gnhSQgSgpgdgvQgSgcgGgdIAugEQEHgfBqhhIAIgIQgUBlgIBwQgCAnAKAhQANAqAiAeQAnAiByAgIAXAFQCGAhhoBBQgvAeg6AOQg1AOg+AAIglgCgAqfYLQg6gOgvgeQhnhBCGghIAWgGQBygfAngiQAigfANgqQAKgggCgoQgIhvgUhmQBvBxE2AcQgFAcgSAdQgdAugSApQgnBTACA9QABBchEAbQglAOg9AJQg1AIhIAEIglABQg+AAg1gNgAISIZIgIgMQglg4gPh1QgbjIgphqQgKgagLgUQg1hogHg8QgEgqAJgqIAHgeIAEgNIABgCQAFgOAJgMQlmCwl6jMIgOgIQgTgSgZgNIgYgLIAYALQAZANATASQBSBPhMCcIgcA5Ig0BoQg1BrCLARQEOBQjiCGQjQA2hngqQgxgTgigiQhqhrgVirQgUiqCWiuQATgVASgSIAagXQBohWBkAjQgWgNgVgPQg2gmg3guQhBg3hDhVQgklJCokLQAcgtAjgrQAVgcAZgYQA3g2BGgmQCNhNDMgNQGVgWC1EZQC2EZAVCAQAUCAgNBaQg3BmhcBTIgFAEQgaAXguAlIgNAKQgjAagjAWIAcgFQBGgNBwCZQBvCXAJClQADArgBAuQgBAwgEAyQgQC+g8BLQggAmgqAJQgLACgKAAQgtAAgfgpgAF6lVQgMAIgJAJIgFAFIAFgFQAJgJAMgIQAKgGALgFIAUgIQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAQgXAIgPANIAAAAgAGolvQgGADgBACQABgCAGgDQAIgDASgEQgSAEgIADgAC/nyIk/AAgAn4tMIABAIIABAMIABAFIABAFIAAABIABAEIAAACIAAABIAAABIACAFIADANIACADIAEALIAAABIABADIABAAIAAACIABAAIAFALIAMAUQALAOANAMIAFAFIAGAEIAAABIAEADIACABIAUANIAPAIQAWALAXAEIALACIAUABQAcABAcgIQAOgEAPgGIALgGIAIgDIABgBIACgBIAAAAIABgBIAigcQARgRAOgXIAKgWIAFgNIAEgMIAAgFIADgLIABgDIAAgCIAAgCIACgVIgBgcIABgBIgBgCIgCgJIgDgRIAAgBIgCgEIgGgVIgHgOIgCgEIgLgRIgDgEIgWgaIAAgBIgCgCIgBgBIgBgBIgFgEIgFgDIgJgIIgCgCIAAAAIgCgBIgDgBIAAAAIgCgBIgEgDIgGgDIgQgIQgLgFgKgDIgMgDIgDgBIgFgBIAAAAIgBAAIgBAAIgFgBIgBAAIgCAAIgTgCIgDAAIgDAAIAAAAIgBAAIgKAAIgBAAIAAABIgCAAIgDAAIgBAAIgDABIgHAAIgBABIgBgBIgCABIgCAAIgCABIgNADIgEABIgFACIgBAAIgEABIgBAAIgCABIgEACIgGACIgOAHIgCABQgMAGgMAJIgKAIIgBABIgBABIgCACQgMAKgKAOIgCACIgBABIgBACIAAABIgBAAIAAAAIgCAEIgBAAIgCADIgBABQggANguAXIgFACIAFgCQAugXAggNIgBACIgBACIAAABIgCAFQgIANgFANIgDAJIgBABIgBADIAAABIgDANIgBAAIAAABIAAACIgCAJIgBAIIAAAAIgBADQgdASgmArQAmgrAdgSQgBAPABAOgACkvmIgCACIAAABIgXAaIgDAEIgLARIgBAEIgHAOQgEAJgDAMIgCAEIAAABIgDARIgCAJIgBACIABABIgBAcIACAVIAAACIAAACIABADIADALIAAAFIAEAMIAFANIALAWQAIAOAKAMIANAOIAiAcIABABIABAAIABABIACABIAIADIALAGQAOAGAPAEQAcAIAdgBIAUgBIALgCQAXgEAWgLIAQgIIAUgNIACgBIAEgDIAAgBIAGgEIAFgFQAWgUAPgaIAFgLIABAAIAAgCIABAAIABgDIAAgBIAEgLIACgFIABgDIABgEIABgFIACgFIAAgDIABgEIAAgBIABgFIABgFIABgMIABgIQABgOgBgPIACACQAdASAlApQglgpgdgSIgCgCIgBgDIAAAAIgBgIIgCgJIAAgCIAAgBIgBAAIgDgNIAAgBIgBgDIgBgBIgDgJQgFgNgIgNIgCgFIgBgBIgBgCIgBgCIACABQAhANAyAYQgygYghgNIgCgCIAAgBIgCgDIgBAAIgBgBIAAgBIgBgBIgCgEQgLgNgMgLIAAAAIgBgBIgBAAIgBgBIAAAAIgBgCIgDgCIgBgBIgBAAIAAAAIgCgCIgDgDIgJgGQgJgGgJgFIgCgBIgDgBIgLgGIgHgCIgDgCIgDgBIgBAAIgEgBIAAAAIgFgCIgFgBIgNgDIgCgBIgCAAIgCgBIgBABIgBgBIgHAAIgDgBIgBAAIgDAAIgCAAIgBgBIgBAAIgJAAIgBAAIgBAAIgDAAIgCAAIgTACIgDAAIgBAAIgFABIgBAAIgBAAIAAAAIgFABIgDABIgMADQgLADgKAFIgQAIIgGADIgHAEIgKAHIgFAEIgJAHIgCACIgBAAIgBABgAoaq7QAbgzAXgWQgXAWgbAzgAHfsDQAWAWAaAwQgagwgWgWIgCgDIACADgAiVwzIgFgEIgDgCQhOg3hNAAIgBAAIAAAAQgfAAgfAJIgBAAIgDABQgxAOgxAlQAxglAxgOIADgBIABAAQAfgJAfAAIAAAAIABAAQBNAABOA3IADACIAFAEgAHPxCQikh6ilB6QBSg9BTAAQBSAABSA9gAn4tpIAAAAgAHttrIAAAAgAnau/IAAAAg");
	this.shape_4.setTransform(533.0323,562.9054);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak2DEIgUgBIgLgBQgXgEgWgLIgPgIIgUgNIgCgCIgEgDIAAAAIgGgEIgFgFQgNgNgLgOIgMgTIgFgLIgBgBIAAgBIgBgBIgBgDIAAAAQAIgHAHgEIAJgEIAEgBIgEABIgJAEQgHAEgIAHIAAAAIAAAAIgEgLIgBgEIgBgBIgBgEIgBgDIgBgGIgCgEIAAAAIAAgBIAAgDIgBgDIAAgBIgBgFIgBgGIgBgLIgBgIQgBgOABgOIABgDIAAgBIABgHIACgKIAAgBIAAgBIABgBIADgNIAAgBIABgDIABAAIADgJQAFgOAIgNIACgFIAAgBIABgBIABgCIABgBIACgDIABgBIACgDIAAAAIABgBIAAgBIABgBIABgCIACgCQAKgNAMgLIACgBIABgBIABgBIAKgIQAMgJAMgGIACgBIAOgIIAGgCIAEgBIACgBIABgBIAEgBIABAAIAFgBIAEgBIANgEIACAAIACgBIACAAIABAAIABgBIAHAAIADAAIABAAIADgBIACAAIAAAAIABAAIAKAAIABAAIAAAAIADAAIADAAIATABIACAAIABABIAFAAIABAAIABABIAAAAIAFABIADABIAMADQAKADALAFIAQAIIAGADIAEADIACABIAKAHIAFADIABABIAIAHIACABIABAAIAAABIABAAIACADIAAAAIAWAaIADAEIALASIACADIAHAOIAGAVIACAFIAAABIADARIACAJIABABIgBABIABAcIgCAVIAAABIAAADIgBADIgDALIAAAFIgEAMIgFANIgKAVQgOAXgRASIgiAcIgBAAIAAAAIgCABIgBABIgIAEIgLAGQgPAGgOAEQgXAGgYAAIgJAAgAnPhqIgFACIAFgCQAUgIAOgDQgOADgUAIgAD8C8QgPgEgOgGIgLgGIgIgEIgCgBIgBgBIgBAAIgBAAIgigcIgMgOQgLgMgIgPIgLgVIgFgNIgEgMIAAgFIgDgLIgBgDIAAgDIAAgBIgCgVIABgcIgBgBIABgBIACgJIADgRIAAgBIACgFQADgLAEgKIAHgOIABgDIALgSIADgEIAXgaIAAAAIACgDIABgBIABAAIACgBIAJgIIAFgDIAKgHIAHgEIAGgDIAQgIQAKgFALgDIAMgDIADgBIAFgBIAAAAIABgBIABAAIAFAAIABgBIADAAIATgBIACAAIADAAIABAAIABAAIAJAAIABAAIABAAIACAAIADABIABAAIADAAIAHAAIABABIABAAIACAAIACABIACAAIANAEIAFABIAFABIAAAAIAEABIABABIADABIADABIAHACIALAHIADABIACABQAJAEAJAHIAGAEIAIAGIABABIABABIABABIABABIACABIAAAAIABABQAMAKAKANIABACIABACIABABIAAABIABABIABAAIACADIAAABIACADIABABIABACIABABIABABIACAFQAIANAFAOIADAJIABAAIABADIAAABIADANIABABIAAABIAAABIACAKIABAHIAAABIABADQABAOgBAOIgBAIIgBALIgBAGIgBAFIAAABIgBADIAAAEIgCAEIgBAGIgBADIgBAEIgCAFIgEALIAAAAQgIgHgIgEIgJgEIgEgBIAEABIAJAEQAIAEAIAHIgBADIgBABIAAABIgBABIgFALQgPAZgWAVIgFAFIgGAEIAAAAIgEADIgCACIgUANIgQAIQgWALgXAEIgLABIgUABIgJAAQgYAAgYgGgAHUhqQgXgJgQgEQAQAEAXAJgAHjBPIAAAAg");
	this.shape_5.setTransform(532.425,477.4743);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AsABMIgVgDQh9gZBahIQAoghBNgoIARgJIAAgBQBXglgBA0QgBAZgUAuIAaAwQgQAUgQAXQgqA5gjA7gAJtAHQgRgWgSgUIAcgxQgVgugBgZQgBg0BbAlIABABIARAJQBRAoAqAhQBfBJiDAYIgWADIhABuQglg7grg5g");
	this.shape_6.setTransform(527.7836,394.7188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AVyOdIAQAAIAAAKIgQgKgAQYJRIgBgBIAJAIIgIgHgA2BEeIAFglQA7negBgEQAynDB0hoQBnheAMALQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQg2Afg/A5Qh0BogyHDQABAEg7HeIgFAiIAAgFgAQvkKQgikdgxiTQA2CQAgEDQgBADAkEbQgnj+ABgDgAAar+QBIAMBAAYgAL/ujQAGgOBOA8QgrgdgpgRg");
	this.shape_7.setTransform(543.725,446.6185);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B251C").s().p("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");
	this.shape_8.setTransform(532.65,439.613);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_9.setTransform(532.65,534.1318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCFFFF").s().p("AsSibQBDBVBBA2QA3AtA2AmQAVAPAWAOQgtgQgoARQguAFgtBXQhai3gSihgALZChQgUgZgTgTQgmgngmgQQgNgIgMgFQgrgTg+AoIANgKQAuglAagXIAFgCQBchUA3hmQAZCdAGAGQAMBkAXBWg");
	this.shape_10.setTransform(536.625,513.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3366").s().p("AgwL4QhAgCg5gFQk2gchvhxQgUgUgOgXQg4heAomQQAlBBAnAfQAnAeApgCQA4gEAWg5IAFgOQATg/gRh0QgajHAJhxQACgcAFgWQAWhxgKg9QgHgpgTgnQgGgOgJgNIgHgMIgBgBQgIgNgLgIIgFgEQgLgHgOgFIgUgFIACgIIAYALQAZANATASIAOAIQF5DMFlivIgCAEIAAABIgBACIgEANQgEAPgDAPQgJAqAEAqQAHA8A1BpQALAUAKAaQApBqAbDIQAPB0AlA4IAIAMQAmAyA7gLQAlgIAdgfIACgCIAAABIgCABIACgBQgEBbgCAvQgLCsg0BRQgzBRgFAGQhqBhkHAfIggACIgDAAIgBAAIgBAAIhDACIgVAAQgqAAgtgCg");
	this.shape_11.setTransform(537.7453,599.33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC3A2").s().p("AIdYgQhIgEg1gIQg9gJglgOQhFgaAChcQABg+gmhSQgTgpgdgvQgSgcgFgdIAtgEQEIgfBphhIAIgIQgUBlgHBwQgDAnAKAhQANAqAjAeQAmAiBzAgIAWAFQCGAhhnBBQgvAeg6AOQg1AOg+AAIgmgCgAq1YLQg6gOgvgeQhnhBCFghIAXgGQBygfAmgiQAjgfANgqQAKgggDgoQgHhvgUhmQBvBxE2AcQgGAcgRAdQgdAugTApQgmBTABA9QACBchFAbQgkAOg+AJQg1AIhHAEIglABQg+AAg1gNgAocIXQgngegkhBQggg6gehUQgRgvgNguQgNgsgJgrQgiihA+itQASgzATgkQAshXAvgFIACgBIAbgCQASgBAHACQAGABABACQABAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIAVACIACABIAUAFQANAFALAHIAFAEQAMAIAHANIACABIAHAMQAIANAHAOQATAnAGApQAKA9gVBxQgFAWgDAcQgJBwAbDHQAQB1gTA/IgEAOQgWA5g4AEIgGAAQgnAAgkgcgAIGIFIgJgMQgkg4gQh1QgbjIgohqQgKgagLgTQg1hpgHg8QgEgqAIgqQADgPAFgPIAEgNIABgCIAAgBIABgDQAFgMAIgKIAEgFQAJgJANgIQAJgGALgFIAVgIIgCgCIAAAAQABgCAGgDQAHgDATgEIAbgFIAAAAQBGgNBwCZQBwCXAJClQACArAAAuQgBAwgEAyQgRC+g8BLIgGAHIAAgBIgBACQgdAfgmAIQgLACgKAAQgsAAgfgpgAmWlbIgOgIQgTgSgagNIgYgLQgVgNgVgPQg3gmg3guQhAg3hEhVQgklJCokLQAdgtAigrQAWgcAZgYQA2g2BHgmQCNhNDLgNQGVgWC2EZQC1EZAVCAQAVCAgNBaQg4BmhcBTIgEAEQgaAXgvAlIgNAKIggAXIgbAFQgTAEgHADQgGADgBACIAAAAIACACIgVAIQgLAFgJAGQgNAIgJAJIgEAFQgIAKgFAMQikBQioAAQjGAAjLhugAConyIk/AAgAoPtMIABAIIABAMIABAFIABAFIAAABIABAEIABACIAAABIAAABIABAFIAEANIABADIAFALIAAABIABADIAAAAIABACIAAAAIAGALIAMAUQAKAOAOAMIAFAFIAFAEIAAABIAEADIACABIAUANIAQAIQAWALAWAEIALACIAUABQAdABAbgIQAPgEAOgGIALgGIAIgDIACgBIABgBIABAAIAAgBIAigcQARgRAOgXIALgWIAFgNIADgMIABgFIADgLIABgDIAAgCIAAgCIACgVIgBgcIAAgBIAAgCIgCgJIgEgRIABgBIgCgEIgHgVIgHgOIgBgEIgLgRIgDgEIgWgaIAAgBIgCgCIgBgBIgBgBIgFgEIgFgDIgKgIIgCgCIAAAAIgBgBIgDgBIgBAAIgBgBIgFgDIgGgDIgQgIQgKgFgLgDIgLgDIgEgBIgEgBIgBAAIgBAAIgBAAIgFgBIAAAAIgDAAIgTgCIgCAAIgDAAIgBAAIgBAAIgJAAIgBAAIgBABIgCAAIgCAAIgCAAIgCABIgHAAIgCABIAAgBIgDABIgCAAIgBABIgOADIgEABIgFACIAAAAIgEABIgBAAIgDABIgDACIgHACIgNAHIgDABQgMAGgLAJIgLAIIgBABIAAABIgCACQgMAKgLAOIgBACIgBABIgBACIAAABIgBAAIgBAAIgCAEIAAAAIgCADIgBABQggANgvAXIgEACIAEgCQAvgXAggNIgBACIgBACIgBABIgBAFQgIANgFANIgEAJIAAABIgBADIgBABIgDANIAAAAIAAABIgBACIgCAJIgBAIIAAAAIAAADQgdASgnArQAngrAdgSQgBAPAAAOgACNvmIgCACIAAABIgWAaIgDAEIgLARIgCAEIgHAOQgEAJgDAMIgCAEIABABIgEARIgCAJIAAACIAAABIgBAcIACAVIAAACIAAACIABADIADALIABAFIADAMIAGANIAKAWQAJAOAKAMIANAOIAiAcIABABIAAAAIACABIABABIAIADIALAGQAPAGAPAEQAcAIAcgBIAVgBIALgCQAXgEAWgLIAQgIIAUgNIACgBIAEgDIAAgBIAGgEIAFgFQAWgUAOgaIAGgLIAAAAIABgCIAAAAIABgDIAAgBIAFgLIABgFIABgDIABgEIABgFIACgFIABgDIABgEIAAgBIABgFIABgFIABgMIABgIQAAgOgBgPIADACQAdASAlApQglgpgdgSIgDgCIAAgDIAAAAIgBgIIgCgJIgBgCIAAgBIAAAAIgDgNIgBgBIgBgDIAAgBIgEgJQgFgNgIgNIgCgFIAAgBIgBgCIgBgCIABABQAiANAxAYQgxgYgigNIgBgCIgBgBIgCgDIAAAAIgBgBIAAgBIgBgBIgDgEQgKgNgMgLIAAAAIgCgBIAAAAIgBgBIAAAAIgCgCIgDgCIAAgBIgBAAIAAAAIgCgCIgEgDIgIgGQgJgGgJgFIgDgBIgCgBIgMgGIgGgCIgEgCIgCgBIgBAAIgEgBIgBAAIgFgCIgEgBIgOgDIgBgBIgCAAIgDgBIAAABIgCgBIgHAAIgCgBIgCAAIgCAAIgCAAIgBgBIgBAAIgKAAIgBAAIAAAAIgDAAIgDAAIgTACIgDAAIAAAAIgFABIgBAAIgBAAIgBAAIgEABIgEABIgLADQgLADgLAFIgQAIIgGADIgHAEIgKAHIgEAEIgKAHIgCACIAAAAIgCABgAowq7QAbgzAXgWQgXAWgbAzgAHJsDQAWAWAaAwQgagwgWgWIgDgDIADADgAirwzIgFgEIgDgCQhOg3hOAAIAAAAIAAAAQgfAAggAJIgBAAIgCABQgxAOgyAlQAyglAxgOIACgBIABAAQAggJAfAAIAAAAIAAAAQBOAABOA3IADACIAFAEgAG4xCQikh6ikB6QBSg9BSAAQBSAABSA9gAoOtpIAAAAgAHWtrIAAAAgAnwu/IAAAAg");
	this.shape_12.setTransform(535.2623,562.9054);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B251C").s().p("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");
	this.shape_13.setTransform(532.65,440.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AXwiRQgugYgngmQgBgBgBgCQh3h4gykFQgBgCAAgDIgCgJQgCgIgBgHQAAgDgBgDQgEgegEgcQAAgBgBgCIgcjFQgnj+AAgDQghkdgxiTQgjhogrglQgegagegUQgqgdgpgRQgPgHgPgFQgvgUgsgJQgpgJgnAAQgGAAgHAAAR5oiQAYCbB3B5QAiAjAmAZQABACADABQBIAwBUAOASGkaQAEAEAEAEQAZAlAhAbQACACACACQB2BhDfgQANooLQA6DlBaBUQABACADADQAQAOARAKQCOBSCQAIQAZABAbAAQBOgIBggbQgZgIgYgMQAYADAYACAtw2uQgRgQgMgOQgeglADgWQABgHAFgGA0TpHQAEgRABgRQA8nfgBgEQAynDB0hoQA+g5A3gfQAmgVAlgMQASgGARgEQAlgJAkAAQAGAAAGABQBQADA/AxQAMAJAMAMQBLBLAABpQAAAZgFAYAs547IAjA9Ar1y3Ig8huQgLgBgKgCQh8gZBahJQAnghBNgoQAJgFAIgEIABgBQBWglAAA0QgBAZgVAuIAbAxQgRAUgQAXQgqA5gjA7gAt9mpIAAAAQAAgBgBgBQgShXABhaQAEjoBUjUQA5iPBeiGQAIgMAJgMQACgDADgDQARgXATgVQAsg0AygpQAIgGAHgGQA7gtBCggQCZhKDAAAQACAAABAAQBZAABQAOICIAkQCaA5BsB7Aiv3SQiCg5hGBfABs3iQB4g+BbB3ACJ5pQBIAMBAAYAKX87QhXAEhDAwQgNAKgOAMQhRBKAABpQAAAaAFAYQA3ApAwAzQAOAOANAQAIa2VIgCADAIY2PQAAgCAAgBIgBABQABABAAABQAYAbAVAfQAkAyAgAzIADgGIBAhuQAMgBAKgCQCDgZhfhJQgpghhSgoQgIgFgJgEIAAgBQhbglAAA0QABAZAWAuIgcAxAKMz2Qgkg7gsg5QgRgXgRgUANt8MQgPgIgOgGQgRgFgPgEALp5hQAqhKAdgDQAIgBAGAEAOM5CQg1BbgogTAFjzwQElAbAjD+AKMz2QAxBPAjBSQAJAMANAsQA8CNAcCQQAXBzADCCAInp7QgygYghgNQgBgBgBAAQgXgJgQgDAI1oOQglgpgdgSQgBgBgCgBAITmdQgagwgWgXQgBgBgBgBQgIgIgIgEQgEgCgFgCQgCAAgCgBAgjz/QGVgWC1EZQC2EZAVCAQAUCAgNBaQAZCdAGAGQAMBkAXBXQAQhTALhPQAAgCAAgDQAWimgEiTAKJzwQBABoAtBrAopp5QAygZAhgNQADgBACgBQAUgHANgDAoWmbQAbgzAXgWIAAgBQAIgHAHgEQAFgCAEgCQACAAACgBAnZsTQAxglAxgOQBzgjBzBWAgjz/QjMANiNBNQhGAmg3A2QgZAYgWAcQgiArgcAtQioELAjFJQBEBVBBA3QA3AuA2AmQAVAPAWANQgBAEgBAEApNLXQAkBBAoAfQAnAeApgCQA4gEAWg5QADgHACgHQASg/gQh1QgajHAJhxQACgcAFgWQAVhxgKg9QgGgpgTgmQgGgOgJgNQgCgFgFgHQAAgBgBAAQgIgNgLgIQgDgDgCgBQgLgHgOgFQgKgDgKgCQgBgBAAAAQgKgBgMgBQADgBgBgBQgCgCgGgBQgHgCgSABQgLABgPABQgCAAgBAAQgvAGgsBXQjRjLgtjKQgBgCAAgBQAAgBAAgBQhBEaicBDQiyBMjjg3QgIgCgIgCQAGgFAFgEQgGAAgHAAQgMAAgKgBQgFAAgEAAQDFhYBCl+QAAgBABgCQAAgCAAgCAmKhDQAHAEAHAEQFKCxGjisQAtgTAugWQAHgDAHgEAH4h4QAKgHAKgHQAGgGAGgFQAvgkAagXQACgCADgCQBchTA3hmAH4h4QAEgBAEgCQALgDAMgCQALgBAKgBQgBgCABgBQABgBAGgBQAIgCATABQAMABAQACIAAAAQBHAGBFCvQBECvgiCiQgJArgMAsQgNAugRAvQgPApgQAjQgCB+AAAcIABAJQgEBbgCAvQgLCsg0BRQgzBRgFAGQhqBhkHAfQgWACgYACQAGAdASAcQAcAvATApQAnBSgCA+QgBBcBEAaQAlAOA+AJQA1AIBIAEQBTAFBFgRQA6gOAvgeQBohBiGghQgMgDgLgCQhygggngiQgigegOgqQgKghADgnQAHhwAUhlQgDAEgEAEAJOMnQgHAEgHAEQgeAOgfgBQg8gFgYg6QgDgGgCgIQgKghgBgwIAAgBQAAgCAAgCIABgqQACgZADgcQAHg4AFgxIAGhcQAAgFAAgFQABg8gFgtQgEgdgFgWQgXhyAIg9QAHgoAUgmQAGgOAIgNQADgGAFgGQABgBAAgBIAAAAQACgCABgBQACgEAEgEQACgCACgCQADgDAEgDQABgBACgBQABAAACgBQAIgFAJgEACKsiQClh6CjB6AsCuIQAAgMABgMQAHheA1g9QACgCABgDQAxg3BagbAo3oMQAmgrAdgSA0TpHQAAgDABgCA0YoeQABgDABgEA0ZobQAAgCAAgDA0XosQACgNACgOAzanlQgRBMgQA6QgRA6gkAuQgkAugNAMQgNAMgJAHQgPANhzBUA3/g7QgQgEgRgGA0Ei/QgyBHhKAgQgzAXhBACAp+gPQgTAjgSAzQg+CtAiCiQAKArAMAsQANAuARAvQAeBUAgA5ArrlpQATCjBaC3Ah2V9QgFAcgSAdQgdAugSApQgnBTACA9QABBchEAbQglAOg9AJQg1AIhIAEQhTAFhFgRQg6gOgvgeQhnhBCFghQAMgDALgDQBygfAmgiQAjgfANgqQAKgggDgoQgHhvgUhmQgUgUgOgXQg4heAomQALGKBQg0B0g8AsQgDACgEADADXWCQgQABgQABQgCAAgBAAQAAAAgBAAQAAAAgBAAQggABgjABQg0AAg6gCQg+gCg5gFQk2gchvhxAiW12QiCg6hGBfAB02kQCDgeAzBpAgj53QBRDXhRCh");
	this.shape_14.setTransform(532.65,534.1318);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF3366").s().p("AgxL4QhAgCg5gFQk2gchvhxQgUgUgOgXQg4heApmQQAkBBAnAfQAnAeApgCQA4gEAWg5IAFgOQATg/gRh0QgajHAJhxQACgcAFgWQAWhxgKg9QgHgpgTgnQgGgOgJgNIgHgMIgBgBQgIgNgLgIIgFgEQgLgHgOgFIgTgFIABgIIAYALQAZANATASIAOAIQFKCyGjitIgDADQgHAJBmg1IANgHIgEAEIgGAIIgCADIgBAAIgBACQgFAGgDAGQgIANgGAOQgUAmgHApQgIA9AYByQAFAWADAdQAFAtgBA8IAAAKIgGBcIgMBpQgDAcgCAZIgBApIAAAEIAAABQABAwALAhQABAIAEAGQAXA6A8AFQAfABAfgOIANgIIABgBIAHgFQA8gsA0hzIgBCZIAAAJQgDBbgDAvQgLCsgzBRQg0BRgFAGQhqBhkHAfIggACIgDAAIgBAAIgBAAIhDACIgVAAQgqAAgtgCg");
	this.shape_15.setTransform(537.8203,599.33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC3A2").s().p("AIdYgQhIgEg1gIQg9gJglgOQhFgaAChcQABg+gmhSQgTgpgdgvQgSgcgFgdIAtgEQEIgfBphhIAIgIQgUBlgHBwQgDAnAKAhQANAqAjAeQAmAiBzAgIAWAFQCGAhhnBBQgvAeg6AOQg1AOg+AAIgmgCgAq1YLQg6gOgvgeQhnhBCFghIAXgGQBygfAmgiQAjgfANgqQAKgggDgoQgHhvgUhmQBvBxE2AcQgGAcgRAdQgdAugTApQgmBTABA9QACBchFAbQgkAOg+AJQg1AIhHAEIglABQg+AAg1gNgAocIXQgngegkhBQggg6gehUQgRgvgNguQgNgsgJgrQgiihA+itQASgzATgkQAshXAvgFIACgBIAbgCQASgBAHACQAGABABACQABAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIAVACIACABIAUAFQANAFALAHIAFAEQAMAIAHANIACABIAHAMQAIANAHAOQATAnAGApQAKA9gVBxQgFAWgDAcQgJBwAbDHQAQB1gTA/IgEAOQgWA5g4AEIgGAAQgnAAgkgcgAHoIcQg7gFgYg6QgDgGgCgIQgLghgBgwIAAgBIAAgEIACgqQABgZAEgcIAMhpIAFhcIAAgKQABg8gEgsQgEgdgFgWQgYhyAJg9QAHgpATgmQAHgOAIgNQADgGAEgGIACgCIAAAAIACgDIAHgIIADgEIAIgGIADgBIADgCQAIgFAJgEQgJAEgIAFIgDACIgUADQgTAEgHADQgGADgBACQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIgVAIQgLAFgJAGQgNAIgJAJIgBACQmjCtlKiyIgOgIQgTgSgagNIgYgLQgVgNgVgPQg3gmg3guQhAg3hEhVQgklJCokLQAdgtAigrQAWgcAZgYQA2g2BHgmQCNhNDLgNQGVgWC2EZQC1EZAVCAQAVCAgNBaQg4BmhcBTIgEAEQgaAXgvAlIgNAKIgTAOIAIgDQALgDALgCIAWgCQAAAAAAgBQAAAAAAAAQgBgBABAAQAAAAAAgBQABgBAGgBQAIgCATABIAbADIABAAQBHAGBECwQBFCvgiChQgJArgMAsQgOAugRAvQgPAqgPAiQg0B1g8ArIgIAFIgBABIgNAIQgcANgcAAIgGAAgAConyIk/AAgAoPtMIABAIIABAMIABAFIABAFIAAABIABAEIABACIAAABIAAABIABAFIAEANIABADIAFALIAAABIABADIAAAAIABACIAAAAIAGALIAMAUQAKAOAOAMIAFAFIAFAEIAAABIAEADIACABIAUANIAQAIQAWALAWAEIALACIAUABQAdABAbgIQAPgEAOgGIALgGIAIgDIACgBIABgBIABAAIAAgBIAigcQARgRAOgXIALgWIAFgNIADgMIABgFIADgLIABgDIAAgCIAAgCIACgVIgBgcIAAgBIAAgCIgCgJIgEgRIABgBIgCgEIgHgVIgHgOIgBgEIgLgRIgDgEIgWgaIAAgBIgCgCIgBgBIgBgBIgFgEIgFgDIgKgIIgCgCIAAAAIgBgBIgDgBIgBAAIgBgBIgFgDIgGgDIgQgIQgKgFgLgDIgLgDIgEgBIgEgBIgBAAIgBAAIgBAAIgFgBIAAAAIgDAAIgTgCIgCAAIgDAAIgBAAIgBAAIgJAAIgBAAIgBABIgCAAIgCAAIgCAAIgCABIgHAAIgCABIAAgBIgDABIgCAAIgBABIgOADIgEABIgFACIAAAAIgEABIgBAAIgDABIgDACIgHACIgNAHIgDABQgMAGgLAJIgLAIIgBABIAAABIgCACQgMAKgLAOIgBACIgBABIgBACIAAABIgBAAIgBAAIgCAEIAAAAIgCADIgBABQggANgvAXIgEACIAEgCQAvgXAggNIgBACIgBACIgBABIgBAFQgIANgFANIgEAJIAAABIgBADIgBABIgDANIAAAAIAAABIgBACIgCAJIgBAIIAAAAIAAADQgdASgnArQAngrAdgSQgBAPAAAOgACNvmIgCACIAAABIgWAaIgDAEIgLARIgCAEIgHAOQgEAJgDAMIgCAEIABABIgEARIgCAJIAAACIAAABIgBAcIACAVIAAACIAAACIABADIADALIABAFIADAMIAGANIAKAWQAJAOAKAMIANAOIAiAcIABABIAAAAIACABIABABIAIADIALAGQAPAGAPAEQAcAIAcgBIAVgBIALgCQAXgEAWgLIAQgIIAUgNIACgBIAEgDIAAgBIAGgEIAFgFQAWgUAOgaIAGgLIAAAAIABgCIAAAAIABgDIAAgBIAFgLIABgFIABgDIABgEIABgFIACgFIABgDIABgEIAAgBIABgFIABgFIABgMIABgIQAAgOgBgPIADACQAdASAlApQglgpgdgSIgDgCIAAgDIAAAAIgBgIIgCgJIgBgCIAAgBIAAAAIgDgNIgBgBIgBgDIAAgBIgEgJQgFgNgIgNIgCgFIAAgBIgBgCIgBgCIABABQAiANAxAYQgxgYgigNIgBgCIgBgBIgCgDIAAAAIgBgBIAAgBIgBgBIgDgEQgKgNgMgLIAAAAIgCgBIAAAAIgBgBIAAAAIgCgCIgDgCIAAgBIgBAAIAAAAIgCgCIgEgDIgIgGQgJgGgJgFIgDgBIgCgBIgMgGIgGgCIgEgCIgCgBIgBAAIgEgBIgBAAIgFgCIgEgBIgOgDIgBgBIgCAAIgDgBIAAABIgCgBIgHAAIgCgBIgCAAIgCAAIgCAAIgBgBIgBAAIgKAAIgBAAIAAAAIgDAAIgDAAIgTACIgDAAIAAAAIgFABIgBAAIgBAAIgBAAIgEABIgEABIgLADQgLADgLAFIgQAIIgGADIgHAEIgKAHIgEAEIgKAHIgCACIAAAAIgCABgAowq7QAbgzAXgWQgXAWgbAzgAHJsDQAWAWAaAwQgagwgWgWIgDgDIADADgAirwzIgFgEIgDgCQhOg3hOAAIAAAAIAAAAQgfAAggAJIgBAAIgCABQgxAOgyAlQAyglAxgOIACgBIABAAQAggJAfAAIAAAAIAAAAQBOAABOA3IADACIAFAEgAG4xCQikh6ikB6QBSg9BSAAQBSAABSA9gAoOtpIAAAAgAHWtrIAAAAgAnwu/IAAAAg");
	this.shape_16.setTransform(535.2623,562.9054);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B251C").s().p("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");
	this.shape_17.setTransform(532.65,440.45);

	this.instance_57 = new lib.CachedBmp_64();
	this.instance_57.setTransform(375.25,347.9,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_65();
	this.instance_58.setTransform(375.25,347.9,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_66();
	this.instance_59.setTransform(375.25,347.9,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_67();
	this.instance_60.setTransform(375.25,347.9,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_68();
	this.instance_61.setTransform(375.25,347.9,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_69();
	this.instance_62.setTransform(375.25,347.9,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_70();
	this.instance_63.setTransform(375.25,347.9,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_71();
	this.instance_64.setTransform(375.25,347.9,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_72();
	this.instance_65.setTransform(377.25,347.9,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_73();
	this.instance_66.setTransform(393.25,347.9,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_74();
	this.instance_67.setTransform(403.25,347.9,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_75();
	this.instance_68.setTransform(407.25,347.9,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_76();
	this.instance_69.setTransform(429.25,347.9,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_77();
	this.instance_70.setTransform(433.25,347.9,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_78();
	this.instance_71.setTransform(467.25,347.9,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_79();
	this.instance_72.setTransform(481.25,347.9,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_80();
	this.instance_73.setTransform(495.25,347.9,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_81();
	this.instance_74.setTransform(497.25,347.9,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_82();
	this.instance_75.setTransform(491.25,347.9,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_83();
	this.instance_76.setTransform(525.25,347.9,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_84();
	this.instance_77.setTransform(535.25,347.9,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_85();
	this.instance_78.setTransform(545.25,347.9,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_86();
	this.instance_79.setTransform(551.25,347.9,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_87();
	this.instance_80.setTransform(565.25,347.9,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_88();
	this.instance_81.setTransform(565.25,347.9,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_89();
	this.instance_82.setTransform(565.25,347.9,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_90();
	this.instance_83.setTransform(565.25,347.9,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_91();
	this.instance_84.setTransform(567.25,347.9,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_92();
	this.instance_85.setTransform(578.25,347.9,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_93();
	this.instance_86.setTransform(596.25,347.9,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_94();
	this.instance_87.setTransform(605.25,347.9,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_95();
	this.instance_88.setTransform(618.25,347.9,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_96();
	this.instance_89.setTransform(636.25,347.9,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_97();
	this.instance_90.setTransform(645.25,347.9,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_98();
	this.instance_91.setTransform(658.25,347.9,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_99();
	this.instance_92.setTransform(686.25,347.9,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_100();
	this.instance_93.setTransform(695.25,347.9,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_101();
	this.instance_94.setTransform(695.25,347.9,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_102();
	this.instance_95.setTransform(695.25,347.9,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_103();
	this.instance_96.setTransform(695.25,347.9,0.5,0.5);

	this.instance_97 = new lib.hend();
	this.instance_97.setTransform(760.1,495,0.9999,0.9999,0,0,0,97.8,102.3);
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},10).to({state:[{t:this.instance_37}]},13).to({state:[{t:this.instance_39},{t:this.instance_38}]},8).to({state:[{t:this.instance_41},{t:this.instance_40}]},1).to({state:[{t:this.instance_43},{t:this.instance_42}]},3).to({state:[{t:this.instance_45},{t:this.instance_44}]},8).to({state:[{t:this.instance_47},{t:this.instance_46}]},10).to({state:[{t:this.instance_49},{t:this.instance_48}]},13).to({state:[{t:this.instance_51},{t:this.instance_50}]},6).to({state:[{t:this.instance_52}]},18).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},3).to({state:[{t:this.instance_55}]},4).to({state:[{t:this.instance_56}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape}]},5).to({state:[{t:this.shape_17},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_16},{t:this.shape_15},{t:this.shape_10},{t:this.shape_14},{t:this.shape}]},3).to({state:[{t:this.instance_57}]},3).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},4).to({state:[{t:this.instance_60}]},30).to({state:[{t:this.instance_61}]},16).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},10).to({state:[{t:this.instance_64}]},11).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_66}]},3).to({state:[{t:this.instance_67}]},3).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},3).to({state:[{t:this.instance_70}]},3).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_72}]},3).to({state:[{t:this.instance_73}]},3).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},3).to({state:[{t:this.instance_77}]},2).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_80}]},3).to({state:[{t:this.instance_81}]},3).to({state:[{t:this.instance_82}]},4).to({state:[{t:this.instance_83}]},6).to({state:[{t:this.instance_84}]},7).to({state:[{t:this.instance_85}]},3).to({state:[{t:this.instance_86}]},3).to({state:[{t:this.instance_87}]},3).to({state:[{t:this.instance_88}]},3).to({state:[{t:this.instance_89}]},3).to({state:[{t:this.instance_90}]},3).to({state:[{t:this.instance_91}]},3).to({state:[{t:this.instance_92}]},3).to({state:[{t:this.instance_93}]},3).to({state:[{t:this.instance_94}]},5).to({state:[{t:this.instance_95}]},22).to({state:[{t:this.instance_96}]},1).to({state:[]},25).to({state:[{t:this.instance_97}]},12).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_97}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(400).to({_off:false},0).wait(1).to({regX:97.7,regY:102.2,x:774.8,y:503.4},0).wait(1).to({x:789.65,y:511.9},0).wait(1).to({x:804.45,y:520.4},0).wait(1).to({x:819.3,y:528.9},0).wait(1).to({x:834.1,y:537.4},0).wait(1).to({x:848.95,y:545.9},0).wait(1).to({x:863.8,y:554.45},0).wait(1).to({x:878.6,y:562.95},0).wait(1).to({x:893.45,y:571.45},0).wait(1).to({x:908.25,y:579.95},0).wait(1).to({x:923.1,y:588.45},0).wait(1).to({x:937.9,y:596.95},0).wait(2).to({x:925.1,y:588.5},0).wait(1).to({x:912.3,y:580},0).wait(1).to({x:899.5,y:571.55},0).wait(1).to({x:886.7,y:563.05},0).wait(1).to({x:873.9,y:554.55},0).wait(1).to({x:861.1,y:546.1},0).wait(1).to({x:848.3,y:537.6},0).wait(1).to({x:835.45,y:529.15},0).wait(1).to({x:822.65,y:520.65},0).wait(1).to({x:809.85,y:512.15},0).wait(1).to({x:797.05,y:503.7},0).wait(1).to({x:784.25,y:495.2},0).wait(1).to({x:771.45,y:486.75},0).wait(1).to({x:758.65,y:478.25},0).wait(1).to({x:745.8,y:469.75},0).wait(1).to({regX:97.8,regY:102.4,scaleX:0.9997,scaleY:0.9997,rotation:-29.8831,x:740.5,y:456.25},0).wait(1).to({regX:97.7,regY:102.2,rotation:-29.8837,x:758.35,y:456.7},0).wait(1).to({x:776.35,y:457.3},0).wait(1).to({x:794.35,y:457.9},0).wait(1).to({x:812.4,y:458.5},0).wait(1).to({x:830.4,y:459.1},0).wait(1).to({x:848.4,y:459.65},0).wait(1).to({x:866.45,y:460.25},0).wait(1).to({x:884.45,y:460.85},0).wait(1).to({x:902.45,y:461.45},0).wait(1).to({x:920.5,y:462.05},0).wait(1).to({x:938.5,y:462.6},0).wait(1).to({x:956.5,y:463.2},0).wait(1).to({x:974.55,y:463.8},0).wait(1).to({x:992.55,y:464.4},0).wait(1).to({x:1010.55,y:465},0).wait(2).to({x:987.25,y:461.6},0).wait(1).to({x:963.95,y:458.25},0).wait(1).to({x:940.6,y:454.9},0).wait(1).to({x:917.3,y:451.55},0).wait(1).to({x:893.95,y:448.2},0).wait(1).to({x:870.65,y:444.85},0).wait(1).to({x:847.35,y:441.5},0).wait(1).to({x:824,y:438.15},0).wait(1).to({x:800.7,y:434.8},0).wait(1).to({x:777.35,y:431.45},0).wait(1).to({x:754.05,y:428.1},0).wait(1).to({x:730.7,y:424.75},0).wait(2).to({regX:97.8,regY:102.4,rotation:-29.8831,x:740.5,y:456.25},0).wait(1).to({regX:97.7,regY:102.2,rotation:-29.8837,x:759.65,y:457.45},0).wait(1).to({x:778.95,y:458.8},0).wait(1).to({x:798.25,y:460.15},0).wait(1).to({x:817.55,y:461.5},0).wait(1).to({x:836.85,y:462.85},0).wait(1).to({x:856.15,y:464.2},0).wait(1).to({x:875.45,y:465.55},0).wait(1).to({x:894.75,y:466.9},0).wait(1).to({x:914.05,y:468.25},0).wait(1).to({x:933.35,y:469.6},0).wait(1).to({x:952.65,y:470.95},0).wait(1).to({x:971.95,y:472.3},0).wait(1).to({x:991.25,y:473.65},0).wait(1).to({x:1010.55,y:475},0).wait(1).to({y:465},0).wait(1).to({x:982.6,y:460.95},0).wait(1).to({x:954.6,y:456.95},0).wait(1).to({x:926.6,y:452.9},0).wait(1).to({x:898.65,y:448.9},0).wait(1).to({x:870.65,y:444.85},0).wait(1).to({x:842.65,y:440.85},0).wait(1).to({x:814.7,y:436.8},0).wait(1).to({x:786.7,y:432.8},0).wait(1).to({x:758.7,y:428.75},0).wait(1).to({x:730.7,y:424.75},0).wait(2).to({regY:102,rotation:-29.8832,x:740.55,y:495.55},0).wait(1).to({regY:102.2,scaleX:1.0122,scaleY:0.9909,rotation:-29.8837,x:756.35,y:497.75},0).wait(1).to({scaleX:1.0248,scaleY:0.982,x:772.05,y:499.7},0).wait(1).to({scaleX:1.0373,scaleY:0.9732,x:787.8,y:501.8},0).wait(1).to({scaleX:1.0498,scaleY:0.9644,x:803.55,y:503.8},0).wait(1).to({scaleX:1.0624,scaleY:0.9556,x:819.3,y:505.85},0).wait(1).to({scaleX:1.0749,scaleY:0.9468,x:835,y:507.9},0).wait(1).to({scaleX:1.0874,scaleY:0.9379,x:850.75,y:509.9},0).wait(1).to({scaleX:1.1,scaleY:0.9291,x:866.5,y:511.95},0).wait(1).to({scaleX:1.1125,scaleY:0.9203,x:882.25,y:514},0).wait(1).to({scaleX:1.1251,scaleY:0.9115,x:897.95,y:516},0).wait(1).to({scaleX:1.1376,scaleY:0.9027,x:913.7,y:518.05},0).wait(1).to({scaleX:1.1501,scaleY:0.8938,x:929.45,y:520.05},0).wait(1).to({scaleX:1.1627,scaleY:0.885,x:945.2,y:522.1},0).wait(1).to({scaleX:1.1752,scaleY:0.8762,x:960.9,y:524.15},0).wait(1).to({scaleX:1.1878,scaleY:0.8674,x:976.6,y:526.2},0).wait(1).to({scaleX:1.2003,scaleY:0.8586,x:992.4,y:528.2},0).wait(1).to({x:974.15,y:526.65},0).wait(1).to({x:955.95,y:525.1},0).wait(1).to({x:937.7,y:523.5},0).wait(1).to({x:919.5,y:521.95},0).wait(1).to({x:901.25,y:520.4},0).wait(1).to({x:883.05,y:518.85},0).wait(1).to({x:864.8,y:517.25},0).wait(1).to({x:846.55,y:515.7},0).wait(1).to({x:828.35,y:514.15},0).wait(1).to({x:810.1,y:512.55},0).wait(1).to({x:791.9,y:511},0).wait(1).to({x:773.65,y:509.45},0).wait(1).to({x:755.45,y:507.9},0).wait(1).to({x:737.2,y:506.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_actions_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// actions_start
	this.text = new cjs.Text("click to\nplay", "40px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 185;
	this.text.parent = this;
	this.text.setTransform(1048.1,161.8);
	this.text.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(1048.1,210.85,1,1,0,0,0,87.9,87.9);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_actions_start, null, null);


(lib.playagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("play\nagain", "20px 'Verdana'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(-32.5,41.05);
	this.text.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:-32.5833,y:37.8},0).wait(1).to({x:-32.6667,y:34.55},0).wait(1).to({x:-32.75,y:31.3},0).wait(1).to({x:-32.8333,y:28.05},0).wait(1).to({x:-32.9167,y:24.8},0).wait(1).to({x:-33,y:21.55},0).wait(1).to({x:-32.9286,y:24.8357},0).wait(1).to({x:-32.8571,y:28.1214},0).wait(1).to({x:-32.7857,y:31.4071},0).wait(1).to({x:-32.7143,y:34.6929},0).wait(1).to({x:-32.6429,y:37.9786},0).wait(1).to({x:-32.5714,y:41.2643},0).wait(1).to({x:-32.5,y:44.55},0).wait(1));

	// Layer_1
	this.instance = new lib.playagaincookie();
	this.instance.setTransform(-32.5,70.3,1,1,0,0,0,39.1,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:66.7},0).wait(1).to({y:63.1},0).wait(1).to({y:59.55},0).wait(1).to({y:55.95},0).wait(1).to({y:52.35},0).wait(1).to({y:48.8},0).wait(1).to({y:51.9},0).wait(1).to({y:55.05},0).wait(1).to({y:58.2},0).wait(1).to({y:61.35},0).wait(1).to({y:64.5},0).wait(1).to({y:67.65},0).wait(1).to({y:70.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.3,13,96,124.1);


(lib.cluod = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(71.15,100,1,1,0,0,0,181.8,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:85.65,y:99.95},0).wait(1).to({x:100.1,y:99.9},0).wait(1).to({x:114.55,y:99.85},0).wait(1).to({x:129,y:99.8},0).wait(1).to({x:143.45,y:99.75},0).wait(1).to({x:157.9,y:99.7},0).wait(1).to({x:172.35,y:99.6},0).wait(1).to({x:186.75,y:99.55},0).wait(1).to({x:201.25,y:99.5},0).wait(1).to({x:215.7,y:99.45},0).wait(1).to({x:230.15,y:99.4},0).wait(1).to({x:244.6,y:99.35},0).wait(1).to({x:259.05,y:99.3},0).wait(1).to({x:273.5,y:99.2},0).wait(1).to({x:287.95,y:99.15},0).wait(1).to({x:302.4,y:99.1},0).wait(1).to({x:316.9,y:99.05},0).wait(1).to({x:331.35,y:99},0).wait(1).to({x:345.8,y:98.95},0).wait(1).to({x:360.25,y:98.9},0).wait(1).to({x:374.7,y:98.8},0).wait(1).to({x:389.15,y:98.75},0).wait(1).to({x:403.6,y:98.7},0).wait(1).to({x:418.05,y:98.65},0).wait(1).to({x:432.55,y:98.6},0).wait(1).to({x:447,y:98.55},0).wait(1).to({x:461.45,y:98.5},0).wait(1).to({x:475.9,y:98.4},0).wait(1).to({x:490.35,y:98.35},0).wait(1).to({x:504.8,y:98.3},0).wait(1).to({x:519.25,y:98.25},0).wait(1).to({x:533.7,y:98.2},0).wait(1).to({x:548.2,y:98.15},0).wait(1).to({x:562.65,y:98.1},0).wait(1).to({x:577.1,y:98},0).wait(1).to({x:591.55,y:97.95},0).wait(1).to({x:606,y:97.9},0).wait(1).to({x:620.45,y:97.85},0).wait(1).to({x:634.9,y:97.8},0).wait(1).to({x:649.35,y:97.75},0).wait(1).to({x:663.8,y:97.7},0).wait(1).to({x:678.3,y:97.6},0).wait(1).to({x:692.75,y:97.55},0).wait(1).to({x:707.2,y:97.5},0).wait(1).to({x:721.65,y:97.45},0).wait(1).to({x:736.1,y:97.4},0).wait(1).to({x:750.55,y:97.35},0).wait(1).to({x:765,y:97.3},0).wait(1).to({x:779.45,y:97.2},0).wait(1).to({x:793.95,y:97.15},0).wait(1).to({x:808.4,y:97.1},0).wait(1).to({x:822.85,y:97.05},0).wait(1).to({x:837.3,y:97},0).wait(1).to({x:851.75,y:96.95},0).wait(1).to({x:866.2,y:96.9},0).wait(1).to({x:880.65,y:96.8},0).wait(1).to({x:895.1,y:96.75},0).wait(1).to({x:909.6,y:96.7},0).wait(1).to({x:924.05,y:96.65},0).wait(1).to({x:938.5,y:96.6},0).wait(1).to({x:952.95,y:96.55},0).wait(1).to({x:967.4,y:96.5},0).wait(1).to({x:981.85,y:96.4},0).wait(1).to({x:996.3,y:96.35},0).wait(1).to({x:1010.75,y:96.3},0).wait(1).to({x:1025.25,y:96.25},0).wait(1).to({x:1039.7,y:96.2},0).wait(1).to({x:1054.15,y:96.15},0).wait(1).to({x:1068.6,y:96.1},0).wait(1).to({x:1083.05,y:96},0).wait(1).to({x:1097.5,y:95.95},0).wait(1).to({x:1111.95,y:95.9},0).wait(1).to({x:1126.4,y:95.85},0).wait(1).to({x:1140.85,y:95.8},0).wait(1).to({x:1155.35,y:95.75},0).wait(1).to({x:1169.8,y:95.7},0).wait(1).to({x:1184.25,y:95.6},0).wait(1).to({x:1198.7,y:95.55},0).wait(1).to({x:1213.15,y:95.5},0).wait(1).to({x:1227.6,y:95.45},0).wait(1).to({x:1242.05,y:95.4},0).wait(1).to({x:1256.5,y:95.35},0).wait(1).to({x:1271,y:95.3},0).wait(1).to({x:1285.45,y:95.2},0).wait(1).to({x:1299.9,y:95.15},0).wait(1).to({x:1314.35,y:95.1},0).wait(1).to({x:1328.8,y:95.05},0).wait(1).to({x:1343.25,y:95},0).wait(1).to({x:1357.7,y:94.95},0).wait(1).to({x:1372.15,y:94.9},0).wait(1).to({x:1386.65,y:94.8},0).wait(1).to({x:1401.1,y:94.75},0).wait(1).to({x:1415.55,y:94.7},0).wait(1).to({x:1430,y:94.65},0).wait(1).to({x:1444.45,y:94.6},0).wait(1).to({x:1458.9,y:94.55},0).wait(1).to({x:1473.35,y:94.5},0).wait(1).to({x:1487.8,y:94.4},0).wait(1).to({x:1502.3,y:94.35},0).wait(1).to({x:1516.75,y:94.3},0).wait(1).to({x:1531.2,y:94.25},0).wait(1).to({x:1545.65,y:94.2},0).wait(1).to({x:1560.1,y:94.15},0).wait(1).to({x:1574.55,y:94.1},0).wait(1).to({x:1589,y:94},0).wait(1).to({x:1603.45,y:93.95},0).wait(1).to({x:1617.9,y:93.9},0).wait(1).to({x:1632.4,y:93.85},0).wait(1).to({x:1646.85,y:93.8},0).wait(1).to({x:1661.3,y:93.75},0).wait(1).to({x:1675.75,y:93.7},0).wait(1).to({x:1690.2,y:93.6},0).wait(1).to({x:1704.65,y:93.55},0).wait(1).to({x:1719.1,y:93.5},0).wait(1).to({x:1733.55,y:93.45},0).wait(1).to({x:1748.05,y:93.4},0).wait(1).to({x:1762.5,y:93.35},0).wait(1).to({x:1776.95,y:93.3},0).wait(1).to({x:1791.4,y:93.2},0).wait(1).to({x:1805.85,y:93.15},0).wait(1).to({x:1820.3,y:93.1},0).wait(1).to({x:1834.75,y:93.05},0).wait(1).to({x:1849.2,y:93},0).wait(1).to({x:1863.7,y:92.95},0).wait(1).to({x:1878.15,y:92.9},0).wait(1).to({x:1892.6,y:92.8},0).wait(1).to({x:1907.05,y:92.75},0).wait(1).to({x:1921.5,y:92.7},0).wait(1).to({x:1935.95,y:92.65},0).wait(1).to({x:1950.4,y:92.6},0).wait(1).to({x:1964.85,y:92.55},0).wait(1).to({x:1979.35,y:92.5},0).wait(1).to({x:1993.8,y:92.4},0).wait(1).to({x:2008.25,y:92.35},0).wait(1).to({x:2022.7,y:92.3},0).wait(1).to({x:2037.15,y:92.25},0).wait(1).to({x:2051.6,y:92.2},0).wait(1).to({x:2066.05,y:92.15},0).wait(1).to({x:2080.5,y:92.1},0).wait(1).to({x:2095,y:92},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.1,-9,2389,210.1);


(lib.Scene_1_bakcround = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bakcround
	this.instance = new lib.cluod();
	this.instance.setTransform(180.35,162.05,0.6459,0.6802,0,0,0,191.9,100.1);

	this.instance_1 = new lib.cluod();
	this.instance_1.setTransform(12.05,84,1,1,0,0,0,181.8,100);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ehqbg8KMDU3AAAMAAAB4VMjU3AAAg");
	this.shape.setTransform(659.175,369.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFFFF").s().p("EhqbA8LMAAAh4VMDU3AAAMAAAB4Vg");
	this.shape_1.setTransform(659.175,369.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{regX:191.9,regY:100.1,scaleX:0.6459,scaleY:0.6802,x:180.35,y:162.05}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:181.8,regY:100,scaleX:1,scaleY:1,x:30.05,y:84}}]},631).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_actions_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// actions_end
	this.replay = new lib.playagain();
	this.replay.name = "replay";
	this.replay.setTransform(880.2,334.1,0.9999,0.9999);
	this.replay._off = true;
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.playagain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(631).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.The_hungry_Bony = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,58,69,102,112,182,226,339,416,429,445,474,502,549,595,631];
	this.streamSoundSymbolsList[0] = [{id:"StomachGrowlSoundEffect",startFrame:0,endFrame:58,loop:1,offset:0}];
	this.streamSoundSymbolsList[58] = [{id:"PopSoundEffectHD",startFrame:58,endFrame:69,loop:1,offset:0}];
	this.streamSoundSymbolsList[69] = [{id:"PopSoundEffectHD",startFrame:69,endFrame:82,loop:1,offset:0}];
	this.streamSoundSymbolsList[102] = [{id:"PopSoundEffectHD",startFrame:102,endFrame:112,loop:1,offset:0}];
	this.streamSoundSymbolsList[112] = [{id:"PopSoundEffectHD",startFrame:112,endFrame:125,loop:1,offset:0}];
	this.streamSoundSymbolsList[182] = [{id:"IdeasoundeffectTung",startFrame:182,endFrame:215,loop:1,offset:0}];
	this.streamSoundSymbolsList[226] = [{id:"exciting",startFrame:226,endFrame:339,loop:1,offset:0}];
	this.streamSoundSymbolsList[339] = [{id:"magic",startFrame:339,endFrame:409,loop:1,offset:0}];
	this.streamSoundSymbolsList[416] = [{id:"retrieval_cookie",startFrame:416,endFrame:429,loop:1,offset:0}];
	this.streamSoundSymbolsList[429] = [{id:"eating",startFrame:429,endFrame:516,loop:1,offset:0}];
	this.streamSoundSymbolsList[445] = [{id:"retrieval_cookie",startFrame:445,endFrame:459,loop:1,offset:0}];
	this.streamSoundSymbolsList[474] = [{id:"retrieval_cookie",startFrame:474,endFrame:485,loop:1,offset:0}];
	this.streamSoundSymbolsList[502] = [{id:"retrieval_cookie",startFrame:502,endFrame:516,loop:1,offset:0}];
	this.streamSoundSymbolsList[549] = [{id:"Stomachpain",startFrame:549,endFrame:589,loop:1,offset:0}];
	this.streamSoundSymbolsList[595] = [{id:"burpsoundeffects",startFrame:595,endFrame:618,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("StomachGrowlSoundEffect",0);
		this.InsertIntoSoundStreamData(soundInstance,0,58,1);
		this.start = this.actions_start.start;
		var self= this;
		self.stop();
		self.start.addEventListener("click",startplaying);
		
		function startplaying(){
		self.gotoAndPlay(0);	
			}
	}
	this.frame_58 = function() {
		var soundInstance = playSound("PopSoundEffectHD",0);
		this.InsertIntoSoundStreamData(soundInstance,58,69,1);
	}
	this.frame_69 = function() {
		var soundInstance = playSound("PopSoundEffectHD",0);
		this.InsertIntoSoundStreamData(soundInstance,69,82,1);
	}
	this.frame_102 = function() {
		var soundInstance = playSound("PopSoundEffectHD",0);
		this.InsertIntoSoundStreamData(soundInstance,102,112,1);
	}
	this.frame_112 = function() {
		var soundInstance = playSound("PopSoundEffectHD",0);
		this.InsertIntoSoundStreamData(soundInstance,112,125,1);
	}
	this.frame_182 = function() {
		var soundInstance = playSound("IdeasoundeffectTung",0);
		this.InsertIntoSoundStreamData(soundInstance,182,215,1);
	}
	this.frame_226 = function() {
		var soundInstance = playSound("exciting",0);
		this.InsertIntoSoundStreamData(soundInstance,226,339,1);
	}
	this.frame_339 = function() {
		var soundInstance = playSound("magic",0);
		this.InsertIntoSoundStreamData(soundInstance,339,409,1);
	}
	this.frame_416 = function() {
		var soundInstance = playSound("retrieval_cookie",0);
		this.InsertIntoSoundStreamData(soundInstance,416,429,1);
	}
	this.frame_429 = function() {
		var soundInstance = playSound("eating",0);
		this.InsertIntoSoundStreamData(soundInstance,429,516,1);
	}
	this.frame_445 = function() {
		var soundInstance = playSound("retrieval_cookie",0);
		this.InsertIntoSoundStreamData(soundInstance,445,459,1);
	}
	this.frame_474 = function() {
		var soundInstance = playSound("retrieval_cookie",0);
		this.InsertIntoSoundStreamData(soundInstance,474,485,1);
	}
	this.frame_502 = function() {
		var soundInstance = playSound("retrieval_cookie",0);
		this.InsertIntoSoundStreamData(soundInstance,502,516,1);
	}
	this.frame_549 = function() {
		var soundInstance = playSound("Stomachpain",0);
		this.InsertIntoSoundStreamData(soundInstance,549,589,1);
	}
	this.frame_595 = function() {
		var soundInstance = playSound("burpsoundeffects",0);
		this.InsertIntoSoundStreamData(soundInstance,595,618,1);
	}
	this.frame_631 = function() {
		this.replay = this.actions_end.replay;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		self.replay.addEventListener("click",playAgain);
		
		function playAgain() {
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(11).call(this.frame_69).wait(33).call(this.frame_102).wait(10).call(this.frame_112).wait(70).call(this.frame_182).wait(44).call(this.frame_226).wait(113).call(this.frame_339).wait(77).call(this.frame_416).wait(13).call(this.frame_429).wait(16).call(this.frame_445).wait(29).call(this.frame_474).wait(28).call(this.frame_502).wait(47).call(this.frame_549).wait(46).call(this.frame_595).wait(36).call(this.frame_631).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(177).to({scaleX:0.9519,scaleY:0.9519,x:633.255,y:368.81},0).wait(1).to({scaleX:0.9037,scaleY:0.9037,x:626.51,y:377.62},0).wait(1).to({scaleX:0.8556,scaleY:0.8556,x:619.765,y:386.43},0).wait(1).to({scaleX:0.8075,scaleY:0.8075,x:613.02,y:395.24},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,x:606.275,y:404.05},0).wait(1).to({scaleX:0.7112,scaleY:0.7112,x:599.53,y:412.86},0).wait(1).to({scaleX:0.663,scaleY:0.663,x:592.785,y:421.67},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,x:586.04,y:430.48},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:579.295,y:439.29},0).wait(1).to({scaleX:0.5186,scaleY:0.5186,x:572.55,y:448.1},0).wait(1).to({scaleX:0.4969,scaleY:0.4969,x:569.2909,y:447.8227},0).wait(1).to({scaleX:0.4752,scaleY:0.4752,x:566.0318,y:447.5455},0).wait(1).to({scaleX:0.4535,scaleY:0.4535,x:562.7727,y:447.2682},0).wait(1).to({scaleX:0.4318,scaleY:0.4318,x:559.5136,y:446.9909},0).wait(1).to({scaleX:0.4101,scaleY:0.4101,x:556.2546,y:446.7136},0).wait(1).to({scaleX:0.3884,scaleY:0.3884,x:552.9955,y:446.4364},0).wait(1).to({scaleX:0.3666,scaleY:0.3666,x:549.7364,y:446.1591},0).wait(1).to({scaleX:0.3449,scaleY:0.3449,x:546.4773,y:445.8818},0).wait(1).to({scaleX:0.3232,scaleY:0.3232,x:543.2182,y:445.6046},0).wait(1).to({scaleX:0.3015,scaleY:0.3015,x:539.9591,y:445.3273},0).wait(1).to({scaleX:0.2798,scaleY:0.2798,x:536.7,y:445.05},0).wait(13).to({regX:0.1,scaleX:0.3047,scaleY:0.3047,x:531.95,y:437.2},0).wait(1).to({regX:0,scaleX:0.356,scaleY:0.356,x:539.8856,y:432.0467},0).wait(1).to({scaleX:0.4073,scaleY:0.4073,x:547.8713,y:426.8933},0).wait(1).to({scaleX:0.4586,scaleY:0.4586,x:555.8569,y:421.74},0).wait(1).to({scaleX:0.5099,scaleY:0.5099,x:563.8426,y:416.5867},0).wait(1).to({scaleX:0.5612,scaleY:0.5612,x:571.8282,y:411.4333},0).wait(1).to({scaleX:0.6125,scaleY:0.6125,x:579.8138,y:406.28},0).wait(1).to({scaleX:0.6638,scaleY:0.6638,x:587.7995,y:401.1267},0).wait(1).to({scaleX:0.7151,scaleY:0.7151,x:595.7851,y:395.9733},0).wait(1).to({scaleX:0.7664,scaleY:0.7664,x:603.7707,y:390.82},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,x:611.7564,y:385.6667},0).wait(1).to({scaleX:0.869,scaleY:0.869,x:619.742,y:380.5133},0).wait(1).to({scaleX:0.9203,scaleY:0.9203,x:627.7277,y:375.36},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:635.7133,y:370.2067},0).wait(1).to({scaleX:1.0229,scaleY:1.0229,x:643.6989,y:365.0533},0).wait(1).to({scaleX:1.0742,scaleY:1.0742,x:651.6846,y:359.9},0).wait(1).to({scaleX:1,scaleY:1,x:640,y:360},0).wait(116).to({scaleX:0.988,scaleY:0.988},0).wait(1).to({scaleX:0.9423,scaleY:0.9423,x:653.7267,y:365.27},0).wait(1).to({scaleX:0.8967,scaleY:0.8967,x:667.4533,y:370.54},0).wait(1).to({scaleX:0.851,scaleY:0.851,x:681.18,y:375.81},0).wait(1).to({scaleX:0.8054,scaleY:0.8054,x:694.9067,y:381.08},0).wait(1).to({scaleX:0.7597,scaleY:0.7597,x:708.6333,y:386.35},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,x:722.36,y:391.62},0).wait(1).to({scaleX:0.6684,scaleY:0.6684,x:736.0867,y:396.89},0).wait(1).to({scaleX:0.6227,scaleY:0.6227,x:749.8133,y:402.16},0).wait(1).to({scaleX:0.5771,scaleY:0.5771,x:763.54,y:407.43},0).wait(1).to({scaleX:0.5314,scaleY:0.5314,x:777.2667,y:412.7},0).wait(1).to({scaleX:0.4858,scaleY:0.4858,x:790.9933,y:417.97},0).wait(1).to({scaleX:0.4401,scaleY:0.4401,x:804.72,y:423.24},0).wait(1).to({scaleX:0.3945,scaleY:0.3945,x:818.4467,y:428.51},0).wait(1).to({scaleX:0.3488,scaleY:0.3488,x:832.1733,y:433.78},0).wait(1).to({scaleX:0.3032,scaleY:0.3032,x:845.9,y:439.05},0).wait(6).to({regY:0.5,scaleX:0.305,scaleY:0.305,x:842.65,y:443.5},0).wait(1).to({regY:0,scaleX:0.3095,scaleY:0.3095,x:849.1609,y:448.8912},0).wait(1).to({scaleX:0.314,scaleY:0.314,x:855.6717,y:454.4324},0).wait(1).to({scaleX:0.3185,scaleY:0.3185,x:862.1826,y:459.9737},0).wait(1).to({scaleX:0.323,scaleY:0.323,x:868.6935,y:465.5149},0).wait(1).to({scaleX:0.3275,scaleY:0.3275,x:875.2043,y:471.0561},0).wait(1).to({scaleX:0.332,scaleY:0.332,x:881.7152,y:476.5973},0).wait(1).to({scaleX:0.3365,scaleY:0.3365,x:888.2261,y:482.1386},0).wait(1).to({scaleX:0.3411,scaleY:0.3411,x:894.737,y:487.6798},0).wait(1).to({scaleX:0.3456,scaleY:0.3456,x:901.2478,y:493.221},0).wait(1).to({scaleX:0.3501,scaleY:0.3501,x:907.7587,y:498.7622},0).wait(1).to({scaleX:0.3546,scaleY:0.3546,x:914.2696,y:504.3034},0).wait(1).to({scaleX:0.3591,scaleY:0.3591,x:920.7804,y:509.8447},0).wait(1).to({scaleX:0.3636,scaleY:0.3636,x:927.2913,y:515.3859},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,x:933.8022,y:520.9271},0).wait(1).to({scaleX:0.3726,scaleY:0.3726,x:940.313,y:526.4683},0).wait(1).to({scaleX:0.3771,scaleY:0.3771,x:946.8239,y:532.0096},0).wait(1).to({scaleX:0.3816,scaleY:0.3816,x:953.3348,y:537.5508},0).wait(1).to({scaleX:0.3862,scaleY:0.3862,x:959.8457,y:543.092},0).wait(1).to({scaleX:0.3907,scaleY:0.3907,x:966.3565,y:548.6332},0).wait(1).to({scaleX:0.3952,scaleY:0.3952,x:972.8674,y:554.1745},0).wait(1).to({scaleX:0.3997,scaleY:0.3997,x:979.3783,y:559.7157},0).wait(1).to({scaleX:0.4042,scaleY:0.4042,x:985.8891,y:565.2569},0).wait(1).to({scaleX:0.4087,scaleY:0.4087,x:992.4,y:570.7981},0).wait(1).to({scaleX:0.3809,scaleY:0.3809,x:1046.8,y:581.662},0).wait(1).to({scaleX:0.3531,scaleY:0.3531,x:1101.2,y:592.5259},0).wait(131).to({regX:0.7,regY:0.6,scaleX:0.3528,scaleY:0.3528,x:1078.5,y:589.75},0).wait(1).to({regX:0,regY:0,scaleX:0.4085,scaleY:0.4085,x:1045.6072,y:573.5732},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:1012.9643,y:557.5964},0).wait(1).to({scaleX:0.5199,scaleY:0.5199,x:980.3215,y:541.6196},0).wait(1).to({scaleX:0.5757,scaleY:0.5757,x:947.6786,y:525.6428},0).wait(1).to({scaleX:0.6314,scaleY:0.6314,x:915.0358,y:509.666},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:882.3929,y:493.6892},0).wait(1).to({scaleX:0.7428,scaleY:0.7428,x:849.7501,y:477.7124},0).wait(1).to({scaleX:0.7985,scaleY:0.7985,x:817.1072,y:461.7356},0).wait(1).to({scaleX:0.8542,scaleY:0.8542,x:784.4644,y:445.7588},0).wait(1).to({scaleX:0.9099,scaleY:0.9099,x:751.8216,y:429.782},0).wait(1).to({scaleX:0.9656,scaleY:0.9656,x:719.1787,y:413.8053},0).wait(1).to({scaleX:1.0213,scaleY:1.0213,x:686.5359,y:397.8285},0).wait(1).to({scaleX:1.0771,scaleY:1.0771,x:653.893,y:381.8517},0).wait(1).to({regX:1.2,regY:1.2,scaleX:1.0535,scaleY:1.0535,x:657,y:365.6},0).wait(57).to({regX:0,regY:0,scaleX:1,scaleY:1,x:640,y:360},0).wait(1).to({scaleX:0.9833,scaleY:0.9833,x:641.3183,y:362.3049},0).wait(1).to({scaleX:0.9666,scaleY:0.9666,x:642.6366,y:364.6098},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,x:643.9549,y:366.9146},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,x:645.2732,y:369.2195},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,x:646.5915,y:371.5244},0).wait(1).to({scaleX:0.8997,scaleY:0.8997,x:647.9098,y:373.8293},0).wait(1).to({scaleX:0.883,scaleY:0.883,x:649.228,y:376.1341},0).wait(1).to({scaleX:0.8663,scaleY:0.8663,x:650.5463,y:378.439},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:651.8646,y:380.7439},0).wait(1).to({scaleX:0.8328,scaleY:0.8328,x:653.1829,y:383.0488},0).wait(1).to({scaleX:0.8161,scaleY:0.8161,x:654.5012,y:385.3537},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,x:655.8195,y:387.6585},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:657.1378,y:389.9634},0).wait(1).to({scaleX:0.766,scaleY:0.766,x:658.4561,y:392.2683},0).wait(1).to({scaleX:0.7492,scaleY:0.7492,x:659.7744,y:394.5732},0).wait(1).to({scaleX:0.7325,scaleY:0.7325,x:661.0927,y:396.878},0).wait(1).to({scaleX:0.7158,scaleY:0.7158,x:662.411,y:399.1829},0).wait(1).to({scaleX:0.6991,scaleY:0.6991,x:663.7293,y:401.4878},0).wait(1).to({scaleX:0.6824,scaleY:0.6824,x:665.0476,y:403.7927},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:666.3659,y:406.0976},0).wait(1).to({scaleX:0.6489,scaleY:0.6489,x:667.6841,y:408.4024},0).wait(1).to({scaleX:0.6322,scaleY:0.6322,x:669.0024,y:410.7073},0).wait(1).to({scaleX:0.6155,scaleY:0.6155,x:670.3207,y:413.0122},0).wait(1).to({scaleX:0.5988,scaleY:0.5988,x:671.639,y:415.3171},0).wait(1).to({scaleX:0.5821,scaleY:0.5821,x:672.9573,y:417.622},0).wait(1).to({scaleX:0.5653,scaleY:0.5653,x:674.2756,y:419.9268},0).wait(1).to({scaleX:0.5486,scaleY:0.5486,x:675.5939,y:422.2317},0).wait(1).to({scaleX:0.5319,scaleY:0.5319,x:676.9122,y:424.5366},0).wait(1).to({scaleX:0.5152,scaleY:0.5152,x:678.2305,y:426.8415},0).wait(1).to({scaleX:0.4985,scaleY:0.4985,x:679.5488,y:429.1463},0).wait(1).to({scaleX:0.4818,scaleY:0.4818,x:680.8671,y:431.4512},0).wait(1).to({scaleX:0.465,scaleY:0.465,x:682.1854,y:433.7561},0).wait(1).to({scaleX:0.4483,scaleY:0.4483,x:683.5037,y:436.061},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:684.822,y:438.3659},0).wait(1).to({scaleX:0.4149,scaleY:0.4149,x:686.1402,y:440.6707},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,x:687.4585,y:442.9756},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,x:688.7768,y:445.2805},0).wait(1).to({scaleX:0.3647,scaleY:0.3647,x:690.0951,y:447.5854},0).wait(1).to({scaleX:0.348,scaleY:0.348,x:691.4134,y:449.8902},0).wait(1).to({scaleX:0.3313,scaleY:0.3313,x:692.7317,y:452.1951},0).wait(1).to({scaleX:0.3146,scaleY:0.3146,x:694.05,y:454.5},0).wait(1));

	// hand_cover_the_mouth_obj_
	this.hand_cover_the_mouth = new lib.Scene_1_hand_cover_the_mouth();
	this.hand_cover_the_mouth.name = "hand_cover_the_mouth";
	this.hand_cover_the_mouth.depth = 0;
	this.hand_cover_the_mouth.isAttachedToCamera = 0
	this.hand_cover_the_mouth.isAttachedToMask = 0
	this.hand_cover_the_mouth.layerDepth = 0
	this.hand_cover_the_mouth.layerIndex = 0
	this.hand_cover_the_mouth.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hand_cover_the_mouth).wait(611).to({regX:252.3,regY:174.8,scaleX:1.541,scaleY:1.541,x:-0.05},0).wait(1).to({regX:722.1,regY:560.5,scaleX:1,scaleY:1,x:469.8,y:385.75},0).wait(20));

	// bony_end_obj_
	this.bony_end = new lib.Scene_1_bony_end();
	this.bony_end.name = "bony_end";
	this.bony_end.depth = 0;
	this.bony_end.isAttachedToCamera = 0
	this.bony_end.isAttachedToMask = 0
	this.bony_end.layerDepth = 0
	this.bony_end.layerIndex = 1
	this.bony_end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bony_end).wait(596).to({regX:72,regY:50,scaleX:1.1115,scaleY:1.1115,x:-0.05,y:0.05},0).wait(3).to({regX:108.2,regY:74.9,scaleX:1.1771,scaleY:1.1771,x:0.05,y:0},0).wait(4).to({regX:156.2,regY:108.2,scaleX:1.2777,scaleY:1.2777,x:0,y:0.05},0).wait(3).to({regX:192.2,regY:133.2,scaleX:1.3652,scaleY:1.3652,x:-0.05,y:0.1},0).wait(2).to({regX:216.3,regY:149.8,scaleX:1.4304,scaleY:1.4304,x:0,y:0.05},0).wait(3).to({regX:252.3,regY:174.8,scaleX:1.541,scaleY:1.541,x:-0.05,y:0},0).wait(9).to({regX:360.5,regY:249.7,scaleX:2.0061,scaleY:2.0061,x:0,y:0.1},0).wait(8).to({regX:456.7,regY:316.2,scaleX:2.7417,scaleY:2.7417,x:0.15,y:-0.1},0).wait(4));

	// bony_eat_obj_
	this.bony_eat = new lib.Scene_1_bony_eat();
	this.bony_eat.name = "bony_eat";
	this.bony_eat.depth = 0;
	this.bony_eat.isAttachedToCamera = 0
	this.bony_eat.isAttachedToMask = 0
	this.bony_eat.layerDepth = 0
	this.bony_eat.layerIndex = 2
	this.bony_eat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bony_eat).wait(518).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321},0).to({_off:true},72).wait(42));

	// bony_body_obj_
	this.bony_body = new lib.Scene_1_bony_body();
	this.bony_body.name = "bony_body";
	this.bony_body.setTransform(322.8,534.1,1,1,0,0,0,322.8,534.1);
	this.bony_body.depth = 0;
	this.bony_body.isAttachedToCamera = 0
	this.bony_body.isAttachedToMask = 0
	this.bony_body.layerDepth = 0
	this.bony_body.layerIndex = 3
	this.bony_body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bony_body).wait(180).to({regX:356.9,regY:535.8,scaleX:1.2385,scaleY:1.2385,x:322.75},0).wait(30).to({regX:435.2,regY:490.2,scaleX:3.2814,scaleY:3.2814},0).wait(16).to({regX:322.8,regY:534.1,scaleX:1,scaleY:1,x:322.8},0).wait(136).to({regX:749.8,regY:491.8,scaleX:3.2987,scaleY:3.2987,x:323,y:534.05},0).wait(1).to({regX:745.9,regY:496.4,scaleX:3.2791,scaleY:3.2791,x:322.8},0).wait(25).to({regX:989.1,regY:654,scaleX:2.8321,scaleY:2.8321,x:322.6,y:534.15},0).wait(13).to({regX:664,regY:396.2,scaleX:1,scaleY:1,x:-2.35,y:276.4},0).wait(28).to({regX:989.1,regY:654,scaleX:2.8321,scaleY:2.8321,x:322.6,y:534.15},0).wait(1).to({regX:664,regY:396.2,scaleX:1,scaleY:1,x:-2.35,y:276.4},0).wait(29).to({regX:989.1,regY:654,scaleX:2.8321,scaleY:2.8321,x:322.6,y:534.15},0).wait(1).to({regX:664,regY:396.2,scaleX:1,scaleY:1,x:-2.35,y:276.4},0).wait(26).to({regX:989.1,regY:654,scaleX:2.8321,scaleY:2.8321,x:322.6,y:534.15},0).wait(1).to({regX:664,regY:396.2,scaleX:1,scaleY:1,x:-2.35,y:276.4},0).wait(29).to({_off:true},1).wait(115));

	// actions_end_obj_
	this.actions_end = new lib.Scene_1_actions_end();
	this.actions_end.name = "actions_end";
	this.actions_end.depth = 0;
	this.actions_end.isAttachedToCamera = 0
	this.actions_end.isAttachedToMask = 0
	this.actions_end.layerDepth = 0
	this.actions_end.layerIndex = 4
	this.actions_end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.actions_end).wait(631).to({regX:492.8,regY:341.3,scaleX:3.1789,scaleY:3.1789,x:0.2},0).wait(1));

	// actions_start_obj_
	this.actions_start = new lib.Scene_1_actions_start();
	this.actions_start.name = "actions_start";
	this.actions_start.setTransform(1048.1,210.8,1,1,0,0,0,1048.1,210.8);
	this.actions_start.depth = 0;
	this.actions_start.isAttachedToCamera = 0
	this.actions_start.isAttachedToMask = 0
	this.actions_start.layerDepth = 0
	this.actions_start.layerIndex = 5
	this.actions_start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.actions_start).to({_off:true},1).wait(631));

	// cookie1_obj_
	this.cookie1 = new lib.Scene_1_cookie1();
	this.cookie1.name = "cookie1";
	this.cookie1.depth = 0;
	this.cookie1.isAttachedToCamera = 0
	this.cookie1.isAttachedToMask = 0
	this.cookie1.layerDepth = 0
	this.cookie1.layerIndex = 6
	this.cookie1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cookie1).wait(417).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321},0).wait(1).to({regX:906.4,regY:584.1,scaleX:1,scaleY:1,x:31.25,y:118.75},0).wait(14).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321,x:0,y:0},0).to({_off:true},152).wait(48));

	// cookie2_obj_
	this.cookie2 = new lib.Scene_1_cookie2();
	this.cookie2.name = "cookie2";
	this.cookie2.depth = 0;
	this.cookie2.isAttachedToCamera = 0
	this.cookie2.isAttachedToMask = 0
	this.cookie2.layerDepth = 0
	this.cookie2.layerIndex = 7
	this.cookie2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cookie2).wait(445).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321},0).wait(1).to({regX:973.7,regY:478.7,scaleX:1,scaleY:1,x:98.55,y:13.35},0).wait(17).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321,x:0,y:0},0).to({_off:true},105).wait(64));

	// cookie_3_obj_
	this.cookie_3 = new lib.Scene_1_cookie_3();
	this.cookie_3.name = "cookie_3";
	this.cookie_3.depth = 0;
	this.cookie_3.isAttachedToCamera = 0
	this.cookie_3.isAttachedToMask = 0
	this.cookie_3.layerDepth = 0
	this.cookie_3.layerIndex = 8
	this.cookie_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cookie_3).wait(462).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321},0).wait(14).to({regX:963.1,regY:496.4,scaleX:1,scaleY:1,x:87.95,y:31.05},0).wait(12).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321,x:0,y:0},0).to({_off:true},58).wait(86));

	// cookie_4_obj_
	this.cookie_4 = new lib.Scene_1_cookie_4();
	this.cookie_4.name = "cookie_4";
	this.cookie_4.depth = 0;
	this.cookie_4.isAttachedToCamera = 0
	this.cookie_4.isAttachedToMask = 0
	this.cookie_4.layerDepth = 0
	this.cookie_4.layerIndex = 9
	this.cookie_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cookie_4).wait(488).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321},0).wait(17).to({regX:986.6,regY:547,scaleX:1,scaleY:1,x:111.45,y:81.65},0).wait(12).to({_off:true},1).wait(114));

	// cookies_obj_
	this.cookies = new lib.Scene_1_cookies();
	this.cookies.name = "cookies";
	this.cookies.depth = 0;
	this.cookies.isAttachedToCamera = 0
	this.cookies.isAttachedToMask = 0
	this.cookies.layerDepth = 0
	this.cookies.layerIndex = 10
	this.cookies.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cookies).wait(360).to({regX:651.9,regY:329.9,scaleX:3.2987,scaleY:3.2987,x:0.05},0).wait(4).to({regX:651.1,regY:337.4,scaleX:3.2314,scaleY:3.2314,x:0.15},0).wait(53).to({regX:875.2,regY:465.4,scaleX:2.8321,scaleY:2.8321,x:0},0).wait(71).to({_off:true},30).wait(114));

	// bakcround_obj_
	this.bakcround = new lib.Scene_1_bakcround();
	this.bakcround.name = "bakcround";
	this.bakcround.setTransform(530,369.1,1,1,0,0,0,530,369.1);
	this.bakcround.depth = 0;
	this.bakcround.isAttachedToCamera = 0
	this.bakcround.isAttachedToMask = 0
	this.bakcround.layerDepth = 0
	this.bakcround.layerIndex = 11
	this.bakcround.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bakcround).wait(631).to({regX:659.5,regY:457.4,scaleX:3.1789,scaleY:3.1789,x:530.1,y:369.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(359.1,332.2,985.1,438.40000000000003);
// library properties:
lib.properties = {
	id: 'AD68950FB45ECC43BA8DF059DEC92A01',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/The_hungry_Bony_atlas_1.png?1618058128689", id:"The_hungry_Bony_atlas_1"},
		{src:"images/The_hungry_Bony_atlas_2.png?1618058128690", id:"The_hungry_Bony_atlas_2"},
		{src:"images/The_hungry_Bony_atlas_3.png?1618058128690", id:"The_hungry_Bony_atlas_3"},
		{src:"images/The_hungry_Bony_atlas_4.png?1618058128690", id:"The_hungry_Bony_atlas_4"},
		{src:"images/The_hungry_Bony_atlas_5.png?1618058128690", id:"The_hungry_Bony_atlas_5"},
		{src:"images/The_hungry_Bony_atlas_6.png?1618058128690", id:"The_hungry_Bony_atlas_6"},
		{src:"images/The_hungry_Bony_atlas_7.png?1618058128690", id:"The_hungry_Bony_atlas_7"},
		{src:"images/The_hungry_Bony_atlas_8.png?1618058128690", id:"The_hungry_Bony_atlas_8"},
		{src:"images/The_hungry_Bony_atlas_9.png?1618058128690", id:"The_hungry_Bony_atlas_9"},
		{src:"images/The_hungry_Bony_atlas_10.png?1618058128690", id:"The_hungry_Bony_atlas_10"},
		{src:"images/The_hungry_Bony_atlas_11.png?1618058128690", id:"The_hungry_Bony_atlas_11"},
		{src:"images/The_hungry_Bony_atlas_12.png?1618058128690", id:"The_hungry_Bony_atlas_12"},
		{src:"images/The_hungry_Bony_atlas_13.png?1618058128690", id:"The_hungry_Bony_atlas_13"},
		{src:"images/The_hungry_Bony_atlas_14.png?1618058128691", id:"The_hungry_Bony_atlas_14"},
		{src:"images/The_hungry_Bony_atlas_15.png?1618058128691", id:"The_hungry_Bony_atlas_15"},
		{src:"images/The_hungry_Bony_atlas_16.png?1618058128691", id:"The_hungry_Bony_atlas_16"},
		{src:"images/The_hungry_Bony_atlas_17.png?1618058128691", id:"The_hungry_Bony_atlas_17"},
		{src:"images/The_hungry_Bony_atlas_18.png?1618058128691", id:"The_hungry_Bony_atlas_18"},
		{src:"images/The_hungry_Bony_atlas_19.png?1618058128691", id:"The_hungry_Bony_atlas_19"},
		{src:"images/The_hungry_Bony_atlas_20.png?1618058128691", id:"The_hungry_Bony_atlas_20"},
		{src:"images/The_hungry_Bony_atlas_21.png?1618058128692", id:"The_hungry_Bony_atlas_21"},
		{src:"images/The_hungry_Bony_atlas_22.png?1618058128692", id:"The_hungry_Bony_atlas_22"},
		{src:"images/The_hungry_Bony_atlas_23.png?1618058128692", id:"The_hungry_Bony_atlas_23"},
		{src:"images/The_hungry_Bony_atlas_24.png?1618058128692", id:"The_hungry_Bony_atlas_24"},
		{src:"images/The_hungry_Bony_atlas_25.png?1618058128692", id:"The_hungry_Bony_atlas_25"},
		{src:"images/The_hungry_Bony_atlas_26.png?1618058128692", id:"The_hungry_Bony_atlas_26"},
		{src:"sounds/burpsoundeffects.mp3?1618058128963", id:"burpsoundeffects"},
		{src:"sounds/eating.mp3?1618058128963", id:"eating"},
		{src:"sounds/exciting.mp3?1618058128963", id:"exciting"},
		{src:"sounds/IdeasoundeffectTung.mp3?1618058128963", id:"IdeasoundeffectTung"},
		{src:"sounds/magic.mp3?1618058128963", id:"magic"},
		{src:"sounds/PopSoundEffectHD.mp3?1618058128963", id:"PopSoundEffectHD"},
		{src:"sounds/retrieval_cookie.mp3?1618058128963", id:"retrieval_cookie"},
		{src:"sounds/StomachGrowlSoundEffect.mp3?1618058128963", id:"StomachGrowlSoundEffect"},
		{src:"sounds/Stomachpain.mp3?1618058128963", id:"Stomachpain"}
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
an.compositions['AD68950FB45ECC43BA8DF059DEC92A01'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;