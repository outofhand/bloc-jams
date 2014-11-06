if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/app.js'] === 'undefined'){_$jscoverage['public/javascripts/app.js']=[];
_$jscoverage['public/javascripts/app.js'].source=['(function(/*! Brunch !*/) {',
'  \'use strict\';',
'',
'  var globals = typeof window !== \'undefined\' ? window : global;',
'  if (typeof globals.require === \'function\') return;',
'',
'  var modules = {};',
'  var cache = {};',
'',
'  var has = function(object, name) {',
'    return ({}).hasOwnProperty.call(object, name);',
'  };',
'',
'  var expand = function(root, name) {',
'    var results = [], parts, part;',
'    if (/^\\.\\.?(\\/|$)/.test(name)) {',
'      parts = [root, name].join(\'/\').split(\'/\');',
'    } else {',
'      parts = name.split(\'/\');',
'    }',
'    for (var i = 0, length = parts.length; i < length; i++) {',
'      part = parts[i];',
'      if (part === \'..\') {',
'        results.pop();',
'      } else if (part !== \'.\' && part !== \'\') {',
'        results.push(part);',
'      }',
'    }',
'    return results.join(\'/\');',
'  };',
'',
'  var dirname = function(path) {',
'    return path.split(\'/\').slice(0, -1).join(\'/\');',
'  };',
'',
'  var localRequire = function(path) {',
'    return function(name) {',
'      var dir = dirname(path);',
'      var absolute = expand(dir, name);',
'      return globals.require(absolute, path);',
'    };',
'  };',
'',
'  var initModule = function(name, definition) {',
'    var module = {id: name, exports: {}};',
'    cache[name] = module;',
'    definition(module.exports, localRequire(name), module);',
'    return module.exports;',
'  };',
'',
'  var require = function(name, loaderPath) {',
'    var path = expand(name, \'.\');',
'    if (loaderPath == null) loaderPath = \'/\';',
'',
'    if (has(cache, path)) return cache[path].exports;',
'    if (has(modules, path)) return initModule(path, modules[path]);',
'',
'    var dirIndex = expand(path, \'./index\');',
'    if (has(cache, dirIndex)) return cache[dirIndex].exports;',
'    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);',
'',
'    throw new Error(\'Cannot find module "\' + name + \'" from \'+ \'"\' + loaderPath + \'"\');',
'  };',
'',
'  var define = function(bundle, fn) {',
'    if (typeof bundle === \'object\') {',
'      for (var key in bundle) {',
'        if (has(bundle, key)) {',
'          modules[key] = bundle[key];',
'        }',
'      }',
'    } else {',
'      modules[bundle] = fn;',
'    }',
'  };',
'',
'  var list = function() {',
'    var result = [];',
'    for (var item in modules) {',
'      if (has(modules, item)) {',
'        result.push(item);',
'      }',
'    }',
'    return result;',
'  };',
'',
'  globals.require = require;',
'  globals.require.define = define;',
'  globals.require.register = define;',
'  globals.require.list = list;',
'  globals.require.brunch = true;',
'})();',
'require.register("scripts/album", function(exports, require, module) {',
'var albumPicasso = {',
'      name: \'The Colors\',',
'      artist: \'Pablo Picasso\',',
'      label: \'Cubism\',',
'      year: 1881,',
'      albumArtUrl: \'../app/assets/images/album-placeholder.png\',',
'      songs: [',
'            { name: \'Blue\', length: \'4:26\' },',
'            { name: \'Green\', length: \'3:14\' },',
'            { name: \'Red\', length: \'5:01\' },',
'            { name: \'Pink\', length: \'3:21\' },',
'            { name: \'Magenta\', length: \'2:15\' }                                                ',
'      ]',
'};',
'',
'var albumMarconi = {',
'      name: \'The Telephone\',',
'      artist: \'Guglielmo Marconi\',',
'      label: \'EM\',',
'      year: \'1909\',',
'      albumArtUrl: \'/images/album-placeholder.png\',',
'      songs: [',
'            { name: \'Hello, Operator?\', length: \'1:01\' },',
'            { name: \'Ring, ring, ring\', length: \'5:01\' },',
'            { name: \'Fits in your pocket\', length: \'3:21\'},',
'            { name: \'Can you hear me now?\', length: \'3:14\' },',
'            { name: \'Wrong phone number\', length: \'2:15\'}',
'      ]',
'};',
'',
'var currentlyPlayingSong = null; ',
'',
'var createSongRow = function(songNumber, songName, songLength) {',
'      var template = ',
'       \'<tr>\'',
'     + \'  <td class="song-number col-md-1" data-song-number="\' + songNumber + \'">\' + songNumber + \'</td>\'',
'     + \'  <td class="col-md-9">\' + songName + \'</td>\'',
'     + \'  <td class="col-md-2">\' + songLength + \'</td>\'',
'     + \'</tr>\'',
'     ;      ',
'',
'     // Attach hover functionality to song row',
'      var $row = $(template);',
'',
'      var onHover = function(event) {',
'        var songNumberCell = $(this).find(\'.song-number\');',
'        var songNumber = songNumberCell.data(\'song-number\');',
'        if ( songNumber !== currentlyPlayingSong ) {',
'          songNumberCell.html(\'<a class="album-song-button"><i class="fa fa-play"></i></a>\');',
'        }',
'      };',
'',
'      var offHover = function(event) {',
'        var songNumberCell = $(this).find(\'.song-number\');',
'        var songNumber = songNumberCell.data(\'song-number\');',
'        if ( songNumber !== currentlyPlayingSong ) {',
'          songNumberCell.html(songNumber);',
'        }',
'      };',
'',
'      var clickHandler = function(event) {',
'        var songNumber = $(this).data(\'song-number\');',
'',
'        if ( currentlyPlayingSong !== null ) {',
'          var currentlyPlayingCell = $(\'.song-number[data-song-number="\' + currentlyPlayingSong + \'"]\');',
'          currentlyPlayingCell.html(currentlyPlayingSong);',
'        }',
'',
'        if ( currentlyPlayingSong !== songNumber ) {',
'          $(this).html(\'<a class="album-song-button"><i class="fa fa-pause"></i></a>\');',
'          currentlyPlayingSong = songNumber;',
'        }',
'        else if ( currentlyPlayingSong === songNumber ) {',
'          $(this).html(\'<a class="album-song-button"><i class="fa fa-play"></i></a>\');',
'          currentlyPlayingSong = null;',
'        }',
'      };      ',
'',
'      $row.find(\'.song-number\').click(clickHandler);',
'      $row.hover(onHover, offHover);',
'      return $row;',
'};',
'',
'var changeAlbumView = function(album) {',
'      currentlyPlayingSong = null; ',
'',
'      var $albumTitle = $(\'.album-title\');',
'      $albumTitle.text(album.name);',
'',
'      var $albumArtist = $(\'.album-artist\');',
'      $albumArtist.text(album.artist);',
'',
'      var $albumMeta = $(\'.album-meta-info\');',
'      $albumMeta.text(album.year + " on " + album.label);     ',
'',
'      var $albumImage = $(\'.album-image img\');',
'      $albumImage.attr(\'src\', album.albumArtUrl);',
'',
'      var $songList = $(\'.album-song-listing\');',
'      $songList.empty();',
'      var songs = album.songs;',
'      for ( var i=0; i < songs.length; i++ ) {',
'            var songData = songs[i];',
'            var $newRow = createSongRow(i + 1, songData.name, songData.length);',
'            $songList.append($newRow);',
'      }  ',
'};',
'',
'if ( document.URL.match(/\\/album.html/) ) {',
'      $(document).ready(function() {',
'',
'            $(\'.album1\').click(function() {',
'                  changeAlbumView(albumPicasso);',
'            });',
'',
'            $(\'.album2\').click(function() {',
'                  changeAlbumView(albumMarconi);',
'            });',
'',
'         //   changeAlbumView(albumPicasso);',
'     ',
'      });',
'}',
'});',
'',
';require.register("scripts/app", function(exports, require, module) {',
'require(["./landing"]);',
'require(["./collection"]);',
'require(["./album"]);',
'});',
'',
';require.register("scripts/collection", function(exports, require, module) {',
'var buildAlbumThumbnal = function() {',
'	var template = ',
'        \'<div class="collection-album-container col-md-2">\'',
'      + \'  <div class="collection-album-image-container">\'',
'      + \'    <img src="../app/assets/images/album-placeholder.png"/>\'',
'      + \'  </div>\'',
'      + \'  <div class="caption album-collection-info">\'',
'      + \'    <p>\'',
'      + \'      <a class="album-name" href="./album.html"> Album Name </a>\'',
'      + \'      <br/>\'',
'      + \'      <a href="./album.html"> Artist name </a>\'',
'      + \'      <br/>\'',
'      + \'      X songs\'',
'      + \'      <br/>\'',
'      + \'    </p>\'',
'      + \'  </div>\'',
'      + \'</div>\';',
'',
'      return $(template);',
'};',
'',
'var buildAlbumOverlay = function(albumURL) {',
'      var template =',
'        \'<div class="collection-album-image-overlay">\'',
'      + \'  <div class="collection-overlay-content">\'',
'      + \'    <a class="collection-overlay-button" href="\' + albumURL + \'">\'',
'      + \'      <i class="fa fa-play"></i>\'',
'      + \'    </a>\'',
'      + \'    &nbsp;\'',
'      + \'    <a class="collection-overlay-button">\'',
'      + \'      <i class="fa fa-plus"></i>\'',
'      + \'    </a>\'',
'      + \'  </div>\'',
'      + \'</div>\'',
'      ;',
'      return $(template);',
'};',
'',
'var updateCollectionView = function() {',
'	var $collection = $(".collection-container .row");',
'	$collection.empty();',
'',
'	for (var i = 0; i < 33; i++) {',
'		var $newThumbnail = buildAlbumThumbnal();',
'		$collection.append($newThumbnail);',
'	}	',
'',
'      var onHover = function(event) {',
'            $(this).append(buildAlbumOverlay("./album.html"));',
'      };',
'',
'      var offHover = function(event) {',
'            $(this).find(\'.collection-album-image-overlay\').remove();',
'      };',
'',
'      $collection.find(\'.collection-album-image-container\').hover(onHover, offHover);',
'};',
'',
'if ( document.URL.match(/\\/collection.html/) ) {',
'	$(document).ready(function() {',
'		updateCollectionView();',
'	});',
'}',
'});',
'',
';require.register("scripts/landing", function(exports, require, module) {',
'$(document).ready(function() {',
'	$(\'.hero-content h3\').click(function(){',
'		var subText = $(this).text();',
'		$(this).text(subText + "!");',
'	});',
'',
'	var onHoverAction = function(event){',
'		$(this).animate({\'margin-top\': \'10px\'});',
'	};',
'',
'	var onHoverOffAction = function(event){',
'		$(this).animate({\'margin-top\': \'0px\'});',
'	};',
'',
'	$(\'.selling-points .point\').hover(onHoverAction, onHoverOffAction);',
'});',
'});',
'',
';require.register("scripts/require", function(exports, require, module) {',
'/*',
' RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.',
' Available via the MIT or new BSD license.',
' see: http://github.com/jrburke/requirejs for details',
'*/',
'var requirejs,require,define;',
'(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof',
'RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&',
'Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,',
'g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,',
'k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,',
'k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,',
'd){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,',
'f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;',
'for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?',
'a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=',
'c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=',
'this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&',
'(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=',
'this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);',
'if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",',
'"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,',
'a);this.check()}));this.errback&&q(a,"error",u(this,this.errback))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,',
'nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,',
'a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=',
'!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",\'Module name "\'+n+\'" has not been loaded yet for context: \'+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==',
'e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&s(a).enable()},completeLoad:function(a){var b,',
'c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,',
'e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\\:|\\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\\w\\+\\.\\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror",',
'"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/mg,la=/[^.]\\s*require\\s*\\(\\s*["\']([^\'"\\s]+)["\']\\s*\\)/g,Q=/\\.js$/,ia=/^\\.\\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,',
'Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};',
'g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.15";g.jsExtRegExp=/^\\/|:|\\?|\\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=',
'b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};if(z)return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):',
'(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;if(ea)try{importScripts(d),b.completeLoad(c)}catch(m){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=',
'O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b}),e=N;e&&(b||',
'(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);',
'});',
'',
';'];
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][2]=0;
_$jscoverage['public/javascripts/app.js'][1]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][5]=0;
_$jscoverage['public/javascripts/app.js'][4]=0;
_$jscoverage['public/javascripts/app.js'][5]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][10]=0;
_$jscoverage['public/javascripts/app.js'][7]=0;
_$jscoverage['public/javascripts/app.js'][8]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][16]=0;
_$jscoverage['public/javascripts/app.js'][15]=0;
_$jscoverage['public/javascripts/app.js'][11]=0;
_$jscoverage['public/javascripts/app.js'][14]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][23]=0;
_$jscoverage['public/javascripts/app.js'][21]=0;
_$jscoverage['public/javascripts/app.js'][22]=0;
_$jscoverage['public/javascripts/app.js'][17]=0;
_$jscoverage['public/javascripts/app.js'][19]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][38]=0;
_$jscoverage['public/javascripts/app.js'][29]=0;
_$jscoverage['public/javascripts/app.js'][37]=0;
_$jscoverage['public/javascripts/app.js'][36]=0;
_$jscoverage['public/javascripts/app.js'][25]=0;
_$jscoverage['public/javascripts/app.js'][24]=0;
_$jscoverage['public/javascripts/app.js'][33]=0;
_$jscoverage['public/javascripts/app.js'][32]=0;
_$jscoverage['public/javascripts/app.js'][26]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][52]=0;
_$jscoverage['public/javascripts/app.js'][39]=0;
_$jscoverage['public/javascripts/app.js'][40]=0;
_$jscoverage['public/javascripts/app.js'][45]=0;
_$jscoverage['public/javascripts/app.js'][46]=0;
_$jscoverage['public/javascripts/app.js'][47]=0;
_$jscoverage['public/javascripts/app.js'][48]=0;
_$jscoverage['public/javascripts/app.js'][44]=0;
_$jscoverage['public/javascripts/app.js'][51]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][60]=0;
_$jscoverage['public/javascripts/app.js'][60]=0;
_$jscoverage['public/javascripts/app.js'][59]=0;
_$jscoverage['public/javascripts/app.js'][53]=0;
_$jscoverage['public/javascripts/app.js'][53]=0;
_$jscoverage['public/javascripts/app.js'][55]=0;
_$jscoverage['public/javascripts/app.js'][55]=0;
_$jscoverage['public/javascripts/app.js'][56]=0;
_$jscoverage['public/javascripts/app.js'][56]=0;
_$jscoverage['public/javascripts/app.js'][58]=0;
_$jscoverage['public/javascripts/app.js'][59]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][80]=0;
_$jscoverage['public/javascripts/app.js'][79]=0;
_$jscoverage['public/javascripts/app.js'][77]=0;
_$jscoverage['public/javascripts/app.js'][62]=0;
_$jscoverage['public/javascripts/app.js'][69]=0;
_$jscoverage['public/javascripts/app.js'][68]=0;
_$jscoverage['public/javascripts/app.js'][67]=0;
_$jscoverage['public/javascripts/app.js'][73]=0;
_$jscoverage['public/javascripts/app.js'][66]=0;
_$jscoverage['public/javascripts/app.js'][65]=0;
_$jscoverage['public/javascripts/app.js'][78]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][124]=0;
_$jscoverage['public/javascripts/app.js'][84]=0;
_$jscoverage['public/javascripts/app.js'][87]=0;
_$jscoverage['public/javascripts/app.js'][88]=0;
_$jscoverage['public/javascripts/app.js'][89]=0;
_$jscoverage['public/javascripts/app.js'][90]=0;
_$jscoverage['public/javascripts/app.js'][91]=0;
_$jscoverage['public/javascripts/app.js'][81]=0;
_$jscoverage['public/javascripts/app.js'][94]=0;
_$jscoverage['public/javascripts/app.js'][109]=0;
_$jscoverage['public/javascripts/app.js'][93]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][146]=0;
_$jscoverage['public/javascripts/app.js'][127]=0;
_$jscoverage['public/javascripts/app.js'][136]=0;
_$jscoverage['public/javascripts/app.js'][139]=0;
_$jscoverage['public/javascripts/app.js'][140]=0;
_$jscoverage['public/javascripts/app.js'][142]=0;
_$jscoverage['public/javascripts/app.js'][141]=0;
_$jscoverage['public/javascripts/app.js'][138]=0;
_$jscoverage['public/javascripts/app.js'][126]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][162]=0;
_$jscoverage['public/javascripts/app.js'][154]=0;
_$jscoverage['public/javascripts/app.js'][155]=0;
_$jscoverage['public/javascripts/app.js'][158]=0;
_$jscoverage['public/javascripts/app.js'][159]=0;
_$jscoverage['public/javascripts/app.js'][157]=0;
_$jscoverage['public/javascripts/app.js'][147]=0;
_$jscoverage['public/javascripts/app.js'][148]=0;
_$jscoverage['public/javascripts/app.js'][150]=0;
_$jscoverage['public/javascripts/app.js'][149]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][186]=0;
_$jscoverage['public/javascripts/app.js'][172]=0;
_$jscoverage['public/javascripts/app.js'][173]=0;
_$jscoverage['public/javascripts/app.js'][174]=0;
_$jscoverage['public/javascripts/app.js'][166]=0;
_$jscoverage['public/javascripts/app.js'][178]=0;
_$jscoverage['public/javascripts/app.js'][163]=0;
_$jscoverage['public/javascripts/app.js'][164]=0;
_$jscoverage['public/javascripts/app.js'][167]=0;
_$jscoverage['public/javascripts/app.js'][168]=0;
_$jscoverage['public/javascripts/app.js'][177]=0;
_$jscoverage['public/javascripts/app.js'][180]=0;
_$jscoverage['public/javascripts/app.js'][181]=0;
_$jscoverage['public/javascripts/app.js'][183]=0;
_$jscoverage['public/javascripts/app.js'][184]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][203]=0;
_$jscoverage['public/javascripts/app.js'][202]=0;
_$jscoverage['public/javascripts/app.js'][187]=0;
_$jscoverage['public/javascripts/app.js'][189]=0;
_$jscoverage['public/javascripts/app.js'][190]=0;
_$jscoverage['public/javascripts/app.js'][192]=0;
_$jscoverage['public/javascripts/app.js'][193]=0;
_$jscoverage['public/javascripts/app.js'][194]=0;
_$jscoverage['public/javascripts/app.js'][196]=0;
_$jscoverage['public/javascripts/app.js'][197]=0;
_$jscoverage['public/javascripts/app.js'][198]=0;
_$jscoverage['public/javascripts/app.js'][195]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][265]=0;
_$jscoverage['public/javascripts/app.js'][209]=0;
_$jscoverage['public/javascripts/app.js'][220]=0;
_$jscoverage['public/javascripts/app.js'][221]=0;
_$jscoverage['public/javascripts/app.js'][222]=0;
_$jscoverage['public/javascripts/app.js'][219]=0;
_$jscoverage['public/javascripts/app.js'][227]=0;
_$jscoverage['public/javascripts/app.js'][244]=0;
_$jscoverage['public/javascripts/app.js'][226]=0;
_$jscoverage['public/javascripts/app.js'][264]=0;
_$jscoverage['public/javascripts/app.js'][248]=0;
_$jscoverage['public/javascripts/app.js'][261]=0;
_$jscoverage['public/javascripts/app.js'][247]=0;
_$jscoverage['public/javascripts/app.js'][225]=0;
_$jscoverage['public/javascripts/app.js'][206]=0;
_$jscoverage['public/javascripts/app.js'][205]=0;
_$jscoverage['public/javascripts/app.js'][210]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][299]=0;
_$jscoverage['public/javascripts/app.js'][298]=0;
_$jscoverage['public/javascripts/app.js'][266]=0;
_$jscoverage['public/javascripts/app.js'][269]=0;
_$jscoverage['public/javascripts/app.js'][292]=0;
_$jscoverage['public/javascripts/app.js'][291]=0;
_$jscoverage['public/javascripts/app.js'][270]=0;
_$jscoverage['public/javascripts/app.js'][268]=0;
_$jscoverage['public/javascripts/app.js'][274]=0;
_$jscoverage['public/javascripts/app.js'][273]=0;
_$jscoverage['public/javascripts/app.js'][278]=0;
_$jscoverage['public/javascripts/app.js'][277]=0;
_$jscoverage['public/javascripts/app.js'][281]=0;
_$jscoverage['public/javascripts/app.js'][286]=0;
_$jscoverage['public/javascripts/app.js'][285]=0;
_$jscoverage['public/javascripts/app.js'][284]=0;
_$jscoverage['public/javascripts/app.js'][294]=0;
_$jscoverage['public/javascripts/app.js'][295]=0;
_$jscoverage['public/javascripts/app.js'][293]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][310]=0;
_$jscoverage['public/javascripts/app.js'][303]=0;
_$jscoverage['public/javascripts/app.js'][302]=0;
_$jscoverage['public/javascripts/app.js'][306]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][316]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][317]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][318]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][319]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][321]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][323]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][325]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][326]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][327]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][329]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][330]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][331]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][332]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][333]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][334]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][340]=0;
_$jscoverage['public/javascripts/app.js'][335]=0;
_$jscoverage['public/javascripts/app.js'][340]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][336]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][337]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][338]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][339]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][340]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][340]=0;
_$jscoverage['public/javascripts/app.js'][340]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][341]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][342]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][343]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][344]=0;
_$jscoverage['public/javascripts/app.js'][346]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][345]=0;
_$jscoverage['public/javascripts/app.js'][346]=0;
_$jscoverage['public/javascripts/app.js'][346]=0;
_$jscoverage['public/javascripts/app.js'][346]=0;
_$jscoverage['public/javascripts/app.js'][346]=0;
}_$jscoverage['public/javascripts/app.js'][1]++;
(function(/*! Brunch !*/) {
  _$jscoverage['public/javascripts/app.js'][2]++;
'use strict';

  _$jscoverage['public/javascripts/app.js'][4]++;
var globals = typeof window !== 'undefined' ? window : global;
  _$jscoverage['public/javascripts/app.js'][5]++;
if (typeof globals.require === 'function') {
_$jscoverage['public/javascripts/app.js'][5]++;
return;}


  _$jscoverage['public/javascripts/app.js'][7]++;
var modules = {};
  _$jscoverage['public/javascripts/app.js'][8]++;
var cache = {};

  _$jscoverage['public/javascripts/app.js'][10]++;
var has = function(object, name) {
    _$jscoverage['public/javascripts/app.js'][11]++;
return ({}).hasOwnProperty.call(object, name);
  };

  _$jscoverage['public/javascripts/app.js'][14]++;
var expand = function(root, name) {
    _$jscoverage['public/javascripts/app.js'][15]++;
var results = [], parts, part;
    _$jscoverage['public/javascripts/app.js'][16]++;
if (/^\.\.?(\/|$)/.test(name)) {
      _$jscoverage['public/javascripts/app.js'][17]++;
parts = [root, name].join('/').split('/');
    } else {
      _$jscoverage['public/javascripts/app.js'][19]++;
parts = name.split('/');
    }
    _$jscoverage['public/javascripts/app.js'][21]++;
for (var i = 0, length = parts.length; i < length; i++) {
      _$jscoverage['public/javascripts/app.js'][22]++;
part = parts[i];
      _$jscoverage['public/javascripts/app.js'][23]++;
if (part === '..') {
        _$jscoverage['public/javascripts/app.js'][24]++;
results.pop();
      } else {
_$jscoverage['public/javascripts/app.js'][25]++;
if (part !== '.' && part !== '') {
        _$jscoverage['public/javascripts/app.js'][26]++;
results.push(part);
      }}

    }
    _$jscoverage['public/javascripts/app.js'][29]++;
return results.join('/');
  };

  _$jscoverage['public/javascripts/app.js'][32]++;
var dirname = function(path) {
    _$jscoverage['public/javascripts/app.js'][33]++;
return path.split('/').slice(0, -1).join('/');
  };

  _$jscoverage['public/javascripts/app.js'][36]++;
var localRequire = function(path) {
    _$jscoverage['public/javascripts/app.js'][37]++;
return function(name) {
      _$jscoverage['public/javascripts/app.js'][38]++;
var dir = dirname(path);
      _$jscoverage['public/javascripts/app.js'][39]++;
var absolute = expand(dir, name);
      _$jscoverage['public/javascripts/app.js'][40]++;
return globals.require(absolute, path);
    };
  };

  _$jscoverage['public/javascripts/app.js'][44]++;
var initModule = function(name, definition) {
    _$jscoverage['public/javascripts/app.js'][45]++;
var module = {id: name, exports: {}};
    _$jscoverage['public/javascripts/app.js'][46]++;
cache[name] = module;
    _$jscoverage['public/javascripts/app.js'][47]++;
definition(module.exports, localRequire(name), module);
    _$jscoverage['public/javascripts/app.js'][48]++;
return module.exports;
  };

  _$jscoverage['public/javascripts/app.js'][51]++;
var require = function(name, loaderPath) {
    _$jscoverage['public/javascripts/app.js'][52]++;
var path = expand(name, '.');
    _$jscoverage['public/javascripts/app.js'][53]++;
if (loaderPath == null) {
_$jscoverage['public/javascripts/app.js'][53]++;
loaderPath = '/';}


    _$jscoverage['public/javascripts/app.js'][55]++;
if (has(cache, path)) {
_$jscoverage['public/javascripts/app.js'][55]++;
return cache[path].exports;}

    _$jscoverage['public/javascripts/app.js'][56]++;
if (has(modules, path)) {
_$jscoverage['public/javascripts/app.js'][56]++;
return initModule(path, modules[path]);}


    _$jscoverage['public/javascripts/app.js'][58]++;
var dirIndex = expand(path, './index');
    _$jscoverage['public/javascripts/app.js'][59]++;
if (has(cache, dirIndex)) {
_$jscoverage['public/javascripts/app.js'][59]++;
return cache[dirIndex].exports;}

    _$jscoverage['public/javascripts/app.js'][60]++;
if (has(modules, dirIndex)) {
_$jscoverage['public/javascripts/app.js'][60]++;
return initModule(dirIndex, modules[dirIndex]);}


    _$jscoverage['public/javascripts/app.js'][62]++;
throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  _$jscoverage['public/javascripts/app.js'][65]++;
var define = function(bundle, fn) {
    _$jscoverage['public/javascripts/app.js'][66]++;
if (typeof bundle === 'object') {
      _$jscoverage['public/javascripts/app.js'][67]++;
for (var key in bundle) {
        _$jscoverage['public/javascripts/app.js'][68]++;
if (has(bundle, key)) {
          _$jscoverage['public/javascripts/app.js'][69]++;
modules[key] = bundle[key];
        }
      }
    } else {
      _$jscoverage['public/javascripts/app.js'][73]++;
modules[bundle] = fn;
    }
  };

  _$jscoverage['public/javascripts/app.js'][77]++;
var list = function() {
    _$jscoverage['public/javascripts/app.js'][78]++;
var result = [];
    _$jscoverage['public/javascripts/app.js'][79]++;
for (var item in modules) {
      _$jscoverage['public/javascripts/app.js'][80]++;
if (has(modules, item)) {
        _$jscoverage['public/javascripts/app.js'][81]++;
result.push(item);
      }
    }
    _$jscoverage['public/javascripts/app.js'][84]++;
return result;
  };

  _$jscoverage['public/javascripts/app.js'][87]++;
globals.require = require;
  _$jscoverage['public/javascripts/app.js'][88]++;
globals.require.define = define;
  _$jscoverage['public/javascripts/app.js'][89]++;
globals.require.register = define;
  _$jscoverage['public/javascripts/app.js'][90]++;
globals.require.list = list;
  _$jscoverage['public/javascripts/app.js'][91]++;
globals.require.brunch = true;
})();
_$jscoverage['public/javascripts/app.js'][93]++;
require.register("scripts/album", function(exports, require, module) {
_$jscoverage['public/javascripts/app.js'][94]++;
var albumPicasso = {
      name: 'The Colors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: 1881,
      albumArtUrl: '../app/assets/images/album-placeholder.png',
      songs: [
            { name: 'Blue', length: '4:26' },
            { name: 'Green', length: '3:14' },
            { name: 'Red', length: '5:01' },
            { name: 'Pink', length: '3:21' },
            { name: 'Magenta', length: '2:15' }                                                
      ]
};

_$jscoverage['public/javascripts/app.js'][109]++;
var albumMarconi = {
      name: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: '/images/album-placeholder.png',
      songs: [
            { name: 'Hello, Operator?', length: '1:01' },
            { name: 'Ring, ring, ring', length: '5:01' },
            { name: 'Fits in your pocket', length: '3:21'},
            { name: 'Can you hear me now?', length: '3:14' },
            { name: 'Wrong phone number', length: '2:15'}
      ]
};

_$jscoverage['public/javascripts/app.js'][124]++;
var currentlyPlayingSong = null; 

_$jscoverage['public/javascripts/app.js'][126]++;
var createSongRow = function(songNumber, songName, songLength) {
      _$jscoverage['public/javascripts/app.js'][127]++;
var template = 
       '<tr>'
     + '  <td class="song-number col-md-1" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="col-md-9">' + songName + '</td>'
     + '  <td class="col-md-2">' + songLength + '</td>'
     + '</tr>'
     ;      

     // Attach hover functionality to song row
      _$jscoverage['public/javascripts/app.js'][136]++;
var $row = $(template);

      _$jscoverage['public/javascripts/app.js'][138]++;
var onHover = function(event) {
        _$jscoverage['public/javascripts/app.js'][139]++;
var songNumberCell = $(this).find('.song-number');
        _$jscoverage['public/javascripts/app.js'][140]++;
var songNumber = songNumberCell.data('song-number');
        _$jscoverage['public/javascripts/app.js'][141]++;
if ( songNumber !== currentlyPlayingSong ) {
          _$jscoverage['public/javascripts/app.js'][142]++;
songNumberCell.html('<a class="album-song-button"><i class="fa fa-play"></i></a>');
        }
      };

      _$jscoverage['public/javascripts/app.js'][146]++;
var offHover = function(event) {
        _$jscoverage['public/javascripts/app.js'][147]++;
var songNumberCell = $(this).find('.song-number');
        _$jscoverage['public/javascripts/app.js'][148]++;
var songNumber = songNumberCell.data('song-number');
        _$jscoverage['public/javascripts/app.js'][149]++;
if ( songNumber !== currentlyPlayingSong ) {
          _$jscoverage['public/javascripts/app.js'][150]++;
songNumberCell.html(songNumber);
        }
      };

      _$jscoverage['public/javascripts/app.js'][154]++;
var clickHandler = function(event) {
        _$jscoverage['public/javascripts/app.js'][155]++;
var songNumber = $(this).data('song-number');

        _$jscoverage['public/javascripts/app.js'][157]++;
if ( currentlyPlayingSong !== null ) {
          _$jscoverage['public/javascripts/app.js'][158]++;
var currentlyPlayingCell = $('.song-number[data-song-number="' + currentlyPlayingSong + '"]');
          _$jscoverage['public/javascripts/app.js'][159]++;
currentlyPlayingCell.html(currentlyPlayingSong);
        }

        _$jscoverage['public/javascripts/app.js'][162]++;
if ( currentlyPlayingSong !== songNumber ) {
          _$jscoverage['public/javascripts/app.js'][163]++;
$(this).html('<a class="album-song-button"><i class="fa fa-pause"></i></a>');
          _$jscoverage['public/javascripts/app.js'][164]++;
currentlyPlayingSong = songNumber;
        }
        else {
_$jscoverage['public/javascripts/app.js'][166]++;
if ( currentlyPlayingSong === songNumber ) {
          _$jscoverage['public/javascripts/app.js'][167]++;
$(this).html('<a class="album-song-button"><i class="fa fa-play"></i></a>');
          _$jscoverage['public/javascripts/app.js'][168]++;
currentlyPlayingSong = null;
        }}

      };      

      _$jscoverage['public/javascripts/app.js'][172]++;
$row.find('.song-number').click(clickHandler);
      _$jscoverage['public/javascripts/app.js'][173]++;
$row.hover(onHover, offHover);
      _$jscoverage['public/javascripts/app.js'][174]++;
return $row;
};

_$jscoverage['public/javascripts/app.js'][177]++;
var changeAlbumView = function(album) {
      _$jscoverage['public/javascripts/app.js'][178]++;
currentlyPlayingSong = null; 

      _$jscoverage['public/javascripts/app.js'][180]++;
var $albumTitle = $('.album-title');
      _$jscoverage['public/javascripts/app.js'][181]++;
$albumTitle.text(album.name);

      _$jscoverage['public/javascripts/app.js'][183]++;
var $albumArtist = $('.album-artist');
      _$jscoverage['public/javascripts/app.js'][184]++;
$albumArtist.text(album.artist);

      _$jscoverage['public/javascripts/app.js'][186]++;
var $albumMeta = $('.album-meta-info');
      _$jscoverage['public/javascripts/app.js'][187]++;
$albumMeta.text(album.year + " on " + album.label);     

      _$jscoverage['public/javascripts/app.js'][189]++;
var $albumImage = $('.album-image img');
      _$jscoverage['public/javascripts/app.js'][190]++;
$albumImage.attr('src', album.albumArtUrl);

      _$jscoverage['public/javascripts/app.js'][192]++;
var $songList = $('.album-song-listing');
      _$jscoverage['public/javascripts/app.js'][193]++;
$songList.empty();
      _$jscoverage['public/javascripts/app.js'][194]++;
var songs = album.songs;
      _$jscoverage['public/javascripts/app.js'][195]++;
for ( var i=0; i < songs.length; i++ ) {
            _$jscoverage['public/javascripts/app.js'][196]++;
var songData = songs[i];
            _$jscoverage['public/javascripts/app.js'][197]++;
var $newRow = createSongRow(i + 1, songData.name, songData.length);
            _$jscoverage['public/javascripts/app.js'][198]++;
$songList.append($newRow);
      }  
};

_$jscoverage['public/javascripts/app.js'][202]++;
if ( document.URL.match(/\/album.html/) ) {
      _$jscoverage['public/javascripts/app.js'][203]++;
$(document).ready(function() {

            _$jscoverage['public/javascripts/app.js'][205]++;
$('.album1').click(function() {
                  _$jscoverage['public/javascripts/app.js'][206]++;
changeAlbumView(albumPicasso);
            });

            _$jscoverage['public/javascripts/app.js'][209]++;
$('.album2').click(function() {
                  _$jscoverage['public/javascripts/app.js'][210]++;
changeAlbumView(albumMarconi);
            });

         //   changeAlbumView(albumPicasso);
     
      });
}
});

;_$jscoverage['public/javascripts/app.js'][219]++;
require.register("scripts/app", function(exports, require, module) {
_$jscoverage['public/javascripts/app.js'][220]++;
require(["./landing"]);
_$jscoverage['public/javascripts/app.js'][221]++;
require(["./collection"]);
_$jscoverage['public/javascripts/app.js'][222]++;
require(["./album"]);
});

;_$jscoverage['public/javascripts/app.js'][225]++;
require.register("scripts/collection", function(exports, require, module) {
_$jscoverage['public/javascripts/app.js'][226]++;
var buildAlbumThumbnal = function() {
	_$jscoverage['public/javascripts/app.js'][227]++;
var template = 
        '<div class="collection-album-container col-md-2">'
      + '  <div class="collection-album-image-container">'
      + '    <img src="../app/assets/images/album-placeholder.png"/>'
      + '  </div>'
      + '  <div class="caption album-collection-info">'
      + '    <p>'
      + '      <a class="album-name" href="./album.html"> Album Name </a>'
      + '      <br/>'
      + '      <a href="./album.html"> Artist name </a>'
      + '      <br/>'
      + '      X songs'
      + '      <br/>'
      + '    </p>'
      + '  </div>'
      + '</div>';

      _$jscoverage['public/javascripts/app.js'][244]++;
return $(template);
};

_$jscoverage['public/javascripts/app.js'][247]++;
var buildAlbumOverlay = function(albumURL) {
      _$jscoverage['public/javascripts/app.js'][248]++;
var template =
        '<div class="collection-album-image-overlay">'
      + '  <div class="collection-overlay-content">'
      + '    <a class="collection-overlay-button" href="' + albumURL + '">'
      + '      <i class="fa fa-play"></i>'
      + '    </a>'
      + '    &nbsp;'
      + '    <a class="collection-overlay-button">'
      + '      <i class="fa fa-plus"></i>'
      + '    </a>'
      + '  </div>'
      + '</div>'
      ;
      _$jscoverage['public/javascripts/app.js'][261]++;
return $(template);
};

_$jscoverage['public/javascripts/app.js'][264]++;
var updateCollectionView = function() {
	_$jscoverage['public/javascripts/app.js'][265]++;
var $collection = $(".collection-container .row");
	_$jscoverage['public/javascripts/app.js'][266]++;
$collection.empty();

	_$jscoverage['public/javascripts/app.js'][268]++;
for (var i = 0; i < 33; i++) {
		_$jscoverage['public/javascripts/app.js'][269]++;
var $newThumbnail = buildAlbumThumbnal();
		_$jscoverage['public/javascripts/app.js'][270]++;
$collection.append($newThumbnail);
	}	

      _$jscoverage['public/javascripts/app.js'][273]++;
var onHover = function(event) {
            _$jscoverage['public/javascripts/app.js'][274]++;
$(this).append(buildAlbumOverlay("./album.html"));
      };

      _$jscoverage['public/javascripts/app.js'][277]++;
var offHover = function(event) {
            _$jscoverage['public/javascripts/app.js'][278]++;
$(this).find('.collection-album-image-overlay').remove();
      };

      _$jscoverage['public/javascripts/app.js'][281]++;
$collection.find('.collection-album-image-container').hover(onHover, offHover);
};

_$jscoverage['public/javascripts/app.js'][284]++;
if ( document.URL.match(/\/collection.html/) ) {
	_$jscoverage['public/javascripts/app.js'][285]++;
$(document).ready(function() {
		_$jscoverage['public/javascripts/app.js'][286]++;
updateCollectionView();
	});
}
});

;_$jscoverage['public/javascripts/app.js'][291]++;
require.register("scripts/landing", function(exports, require, module) {
_$jscoverage['public/javascripts/app.js'][292]++;
$(document).ready(function() {
	_$jscoverage['public/javascripts/app.js'][293]++;
$('.hero-content h3').click(function(){
		_$jscoverage['public/javascripts/app.js'][294]++;
var subText = $(this).text();
		_$jscoverage['public/javascripts/app.js'][295]++;
$(this).text(subText + "!");
	});

	_$jscoverage['public/javascripts/app.js'][298]++;
var onHoverAction = function(event){
		_$jscoverage['public/javascripts/app.js'][299]++;
$(this).animate({'margin-top': '10px'});
	};

	_$jscoverage['public/javascripts/app.js'][302]++;
var onHoverOffAction = function(event){
		_$jscoverage['public/javascripts/app.js'][303]++;
$(this).animate({'margin-top': '0px'});
	};

	_$jscoverage['public/javascripts/app.js'][306]++;
$('.selling-points .point').hover(onHoverAction, onHoverOffAction);
});
});

;_$jscoverage['public/javascripts/app.js'][310]++;
require.register("scripts/require", function(exports, require, module) {
/*
 RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
_$jscoverage['public/javascripts/app.js'][316]++;
var requirejs,require,define;
_$jscoverage['public/javascripts/app.js'][317]++;
(function(ba){_$jscoverage['public/javascripts/app.js'][317]++;
function G(b){_$jscoverage['public/javascripts/app.js'][317]++;
return"[object Function]"===K.call(b)}_$jscoverage['public/javascripts/app.js'][317]++;
function H(b){_$jscoverage['public/javascripts/app.js'][317]++;
return"[object Array]"===K.call(b)}_$jscoverage['public/javascripts/app.js'][317]++;
function v(b,c){_$jscoverage['public/javascripts/app.js'][317]++;
if(b){_$jscoverage['public/javascripts/app.js'][317]++;
var d;_$jscoverage['public/javascripts/app.js'][317]++;
for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1){
;}
}}_$jscoverage['public/javascripts/app.js'][317]++;
function T(b,c){_$jscoverage['public/javascripts/app.js'][317]++;
if(b){_$jscoverage['public/javascripts/app.js'][317]++;
var d;_$jscoverage['public/javascripts/app.js'][317]++;
for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1){
;}
}}_$jscoverage['public/javascripts/app.js'][317]++;
function t(b,c){_$jscoverage['public/javascripts/app.js'][317]++;
return fa.call(b,c)}_$jscoverage['public/javascripts/app.js'][317]++;
function m(b,c){_$jscoverage['public/javascripts/app.js'][317]++;
return t(b,c)&&b[c]}_$jscoverage['public/javascripts/app.js'][317]++;
function B(b,c){_$jscoverage['public/javascripts/app.js'][317]++;
for(var d in b){
_$jscoverage['public/javascripts/app.js'][317]++;
if(t(b,d)&&c(b[d],d)){
_$jscoverage['public/javascripts/app.js'][317]++;
break}
}
}_$jscoverage['public/javascripts/app.js'][317]++;
function U(b,c,d,e){_$jscoverage['public/javascripts/app.js'][317]++;
c&&B(c,function(c,g){_$jscoverage['public/javascripts/app.js'][317]++;
if(d||!t(b,g)){
_$jscoverage['public/javascripts/app.js'][317]++;
e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c}
});_$jscoverage['public/javascripts/app.js'][318]++;
return b}_$jscoverage['public/javascripts/app.js'][318]++;
function u(b,c){_$jscoverage['public/javascripts/app.js'][318]++;
return function(){_$jscoverage['public/javascripts/app.js'][318]++;
return c.apply(b,arguments)}}_$jscoverage['public/javascripts/app.js'][318]++;
function ca(b){_$jscoverage['public/javascripts/app.js'][318]++;
throw b;}_$jscoverage['public/javascripts/app.js'][318]++;
function da(b){_$jscoverage['public/javascripts/app.js'][318]++;
if(!b){
_$jscoverage['public/javascripts/app.js'][318]++;
return b;}
_$jscoverage['public/javascripts/app.js'][318]++;
var c=ba;_$jscoverage['public/javascripts/app.js'][318]++;
v(b.split("."),function(b){_$jscoverage['public/javascripts/app.js'][318]++;
c=c[b]});_$jscoverage['public/javascripts/app.js'][318]++;
return c}_$jscoverage['public/javascripts/app.js'][318]++;
function C(b,c,d,e){_$jscoverage['public/javascripts/app.js'][318]++;
c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);_$jscoverage['public/javascripts/app.js'][318]++;
c.requireType=b;_$jscoverage['public/javascripts/app.js'][318]++;
c.requireModules=e;_$jscoverage['public/javascripts/app.js'][318]++;
d&&(c.originalError=d);_$jscoverage['public/javascripts/app.js'][318]++;
return c}_$jscoverage['public/javascripts/app.js'][318]++;
function ga(b){_$jscoverage['public/javascripts/app.js'][318]++;
function c(a,k,b){_$jscoverage['public/javascripts/app.js'][318]++;
var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];_$jscoverage['public/javascripts/app.js'][318]++;
if(a){_$jscoverage['public/javascripts/app.js'][318]++;
a=a.split("/");_$jscoverage['public/javascripts/app.js'][318]++;
l=a.length-1;_$jscoverage['public/javascripts/app.js'][318]++;
j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));_$jscoverage['public/javascripts/app.js'][319]++;
"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));_$jscoverage['public/javascripts/app.js'][319]++;
l=a;_$jscoverage['public/javascripts/app.js'][319]++;
for(c=0;c<l.length;c++){
_$jscoverage['public/javascripts/app.js'][319]++;
if(d=l[c],"."===d){
_$jscoverage['public/javascripts/app.js'][319]++;
l.splice(c,1),c-=1;}
else {
_$jscoverage['public/javascripts/app.js'][319]++;
if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c){
_$jscoverage['public/javascripts/app.js'][319]++;
l.splice(c-1,2),c-=2;}
}
}
_$jscoverage['public/javascripts/app.js'][319]++;
a=a.join("/")}_$jscoverage['public/javascripts/app.js'][319]++;
if(b&&h&&(k||n)){_$jscoverage['public/javascripts/app.js'][319]++;
l=a.split("/");_$jscoverage['public/javascripts/app.js'][319]++;
c=l.length;a:for(;0<c;c-=1){_$jscoverage['public/javascripts/app.js'][319]++;
e=l.slice(0,c).join("/");_$jscoverage['public/javascripts/app.js'][319]++;
if(k){
_$jscoverage['public/javascripts/app.js'][319]++;
for(d=k.length;0<d;d-=1){
_$jscoverage['public/javascripts/app.js'][319]++;
if(b=m(h,k.slice(0,d).join("/"))){
_$jscoverage['public/javascripts/app.js'][319]++;
if(b=m(b,e)){_$jscoverage['public/javascripts/app.js'][319]++;
f=b;_$jscoverage['public/javascripts/app.js'][319]++;
g=c;_$jscoverage['public/javascripts/app.js'][319]++;
break a}}
}
}
_$jscoverage['public/javascripts/app.js'][319]++;
!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}_$jscoverage['public/javascripts/app.js'][319]++;
!f&&i&&(f=i,g=p);_$jscoverage['public/javascripts/app.js'][319]++;
f&&(l.splice(0,
g,f),a=l.join("/"))}_$jscoverage['public/javascripts/app.js'][320]++;
return(f=m(j.pkgs,a))?f:a}_$jscoverage['public/javascripts/app.js'][320]++;
function d(a){_$jscoverage['public/javascripts/app.js'][320]++;
z&&v(document.getElementsByTagName("script"),function(k){_$jscoverage['public/javascripts/app.js'][320]++;
if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName){
_$jscoverage['public/javascripts/app.js'][320]++;
return k.parentNode.removeChild(k),!0}
})}_$jscoverage['public/javascripts/app.js'][320]++;
function e(a){_$jscoverage['public/javascripts/app.js'][320]++;
var k=m(j.paths,a);_$jscoverage['public/javascripts/app.js'][320]++;
if(k&&H(k)&&1<k.length){
_$jscoverage['public/javascripts/app.js'][320]++;
return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}
}_$jscoverage['public/javascripts/app.js'][320]++;
function n(a){_$jscoverage['public/javascripts/app.js'][320]++;
var k,c=a?a.indexOf("!"):-1;_$jscoverage['public/javascripts/app.js'][320]++;
-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));_$jscoverage['public/javascripts/app.js'][320]++;
return[k,a]}_$jscoverage['public/javascripts/app.js'][320]++;
function p(a,
k,b,f){_$jscoverage['public/javascripts/app.js'][321]++;
var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";_$jscoverage['public/javascripts/app.js'][321]++;
a||(p=!1,a="_@r"+(K+=1));_$jscoverage['public/javascripts/app.js'][321]++;
a=n(a);_$jscoverage['public/javascripts/app.js'][321]++;
e=a[0];_$jscoverage['public/javascripts/app.js'][321]++;
a=a[1];_$jscoverage['public/javascripts/app.js'][321]++;
e&&(e=c(e,g,f),d=m(r,e));_$jscoverage['public/javascripts/app.js'][321]++;
a&&(e?h=d&&d.normalize?d.normalize(a,function(a){_$jscoverage['public/javascripts/app.js'][321]++;
return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));_$jscoverage['public/javascripts/app.js'][321]++;
b=e&&!d&&!b?"_unnormalized"+(O+=1):"";_$jscoverage['public/javascripts/app.js'][321]++;
return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}_$jscoverage['public/javascripts/app.js'][321]++;
function s(a){_$jscoverage['public/javascripts/app.js'][321]++;
var k=a.id,b=m(h,k);_$jscoverage['public/javascripts/app.js'][321]++;
b||(b=h[k]=new i.Module(a));_$jscoverage['public/javascripts/app.js'][321]++;
return b}_$jscoverage['public/javascripts/app.js'][321]++;
function q(a,
k,b){_$jscoverage['public/javascripts/app.js'][322]++;
var f=a.id,c=m(h,f);_$jscoverage['public/javascripts/app.js'][322]++;
if(t(r,f)&&(!c||c.defineEmitComplete)){
_$jscoverage['public/javascripts/app.js'][322]++;
"defined"===k&&b(r[f]);}
else {
_$jscoverage['public/javascripts/app.js'][322]++;
if(c=s(a),c.error&&"error"===k){
_$jscoverage['public/javascripts/app.js'][322]++;
b(c.error);}
else {
_$jscoverage['public/javascripts/app.js'][322]++;
c.on(k,b)}
}
}_$jscoverage['public/javascripts/app.js'][322]++;
function w(a,b){_$jscoverage['public/javascripts/app.js'][322]++;
var c=a.requireModules,f=!1;_$jscoverage['public/javascripts/app.js'][322]++;
if(b){
_$jscoverage['public/javascripts/app.js'][322]++;
b(a);}
else {
_$jscoverage['public/javascripts/app.js'][322]++;
if(v(c,function(b){_$jscoverage['public/javascripts/app.js'][322]++;
if(b=m(h,b)){
_$jscoverage['public/javascripts/app.js'][322]++;
b.error=a,b.events.error&&(f=!0,b.emit("error",a))}
}),!f){
_$jscoverage['public/javascripts/app.js'][322]++;
g.onError(a)}
}
}_$jscoverage['public/javascripts/app.js'][322]++;
function x(){_$jscoverage['public/javascripts/app.js'][322]++;
R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}_$jscoverage['public/javascripts/app.js'][322]++;
function y(a){_$jscoverage['public/javascripts/app.js'][322]++;
delete h[a];_$jscoverage['public/javascripts/app.js'][322]++;
delete V[a]}_$jscoverage['public/javascripts/app.js'][322]++;
function F(a,b,c){_$jscoverage['public/javascripts/app.js'][322]++;
var f=a.map.id;_$jscoverage['public/javascripts/app.js'][322]++;
a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){_$jscoverage['public/javascripts/app.js'][323]++;
var e=f.id,g=m(h,e);_$jscoverage['public/javascripts/app.js'][323]++;
g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}_$jscoverage['public/javascripts/app.js'][323]++;
function D(){_$jscoverage['public/javascripts/app.js'][323]++;
var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;_$jscoverage['public/javascripts/app.js'][323]++;
if(!W){_$jscoverage['public/javascripts/app.js'][323]++;
W=!0;_$jscoverage['public/javascripts/app.js'][323]++;
B(V,function(a){_$jscoverage['public/javascripts/app.js'][323]++;
var i=a.map,j=i.id;_$jscoverage['public/javascripts/app.js'][323]++;
if(a.enabled&&(i.isDefine||l.push(a),!a.error)){
_$jscoverage['public/javascripts/app.js'][323]++;
if(!a.inited&&c){
_$jscoverage['public/javascripts/app.js'][323]++;
e(j)?g=b=!0:(f.push(j),d(j));}
else {
_$jscoverage['public/javascripts/app.js'][323]++;
if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix)){
_$jscoverage['public/javascripts/app.js'][323]++;
return h=!1}
}
}
});_$jscoverage['public/javascripts/app.js'][323]++;
if(c&&f.length){
_$jscoverage['public/javascripts/app.js'][323]++;
return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);}
_$jscoverage['public/javascripts/app.js'][324]++;
h&&v(l,function(a){_$jscoverage['public/javascripts/app.js'][324]++;
F(a,{},{})});_$jscoverage['public/javascripts/app.js'][324]++;
if((!c||b)&&g){
_$jscoverage['public/javascripts/app.js'][324]++;
if((z||ea)&&!X){
_$jscoverage['public/javascripts/app.js'][324]++;
X=setTimeout(function(){_$jscoverage['public/javascripts/app.js'][324]++;
X=0;_$jscoverage['public/javascripts/app.js'][324]++;
D()},50);}
}
_$jscoverage['public/javascripts/app.js'][324]++;
W=!1}}_$jscoverage['public/javascripts/app.js'][324]++;
function E(a){_$jscoverage['public/javascripts/app.js'][324]++;
t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}_$jscoverage['public/javascripts/app.js'][324]++;
function I(a){_$jscoverage['public/javascripts/app.js'][324]++;
var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;_$jscoverage['public/javascripts/app.js'][324]++;
a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);_$jscoverage['public/javascripts/app.js'][324]++;
b=i.onScriptError;_$jscoverage['public/javascripts/app.js'][324]++;
(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);_$jscoverage['public/javascripts/app.js'][324]++;
return{node:a,id:a&&a.getAttribute("data-requiremodule")}}_$jscoverage['public/javascripts/app.js'][324]++;
function J(){_$jscoverage['public/javascripts/app.js'][324]++;
var a;
_$jscoverage['public/javascripts/app.js'][325]++;
for(x();A.length;){_$jscoverage['public/javascripts/app.js'][325]++;
a=A.shift();_$jscoverage['public/javascripts/app.js'][325]++;
if(null===a[0]){
_$jscoverage['public/javascripts/app.js'][325]++;
return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));}
_$jscoverage['public/javascripts/app.js'][325]++;
E(a)}}_$jscoverage['public/javascripts/app.js'][325]++;
var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;_$jscoverage['public/javascripts/app.js'][325]++;
L={require:function(a){_$jscoverage['public/javascripts/app.js'][325]++;
return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){_$jscoverage['public/javascripts/app.js'][325]++;
a.usingExports=!0;_$jscoverage['public/javascripts/app.js'][325]++;
if(a.map.isDefine){
_$jscoverage['public/javascripts/app.js'][325]++;
return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}}
},module:function(a){_$jscoverage['public/javascripts/app.js'][325]++;
return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){_$jscoverage['public/javascripts/app.js'][326]++;
return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};_$jscoverage['public/javascripts/app.js'][326]++;
Z=function(a){_$jscoverage['public/javascripts/app.js'][326]++;
this.events=m($,a.id)||{};_$jscoverage['public/javascripts/app.js'][326]++;
this.map=a;_$jscoverage['public/javascripts/app.js'][326]++;
this.shim=m(j.shim,a.id);_$jscoverage['public/javascripts/app.js'][326]++;
this.depExports=[];_$jscoverage['public/javascripts/app.js'][326]++;
this.depMaps=[];_$jscoverage['public/javascripts/app.js'][326]++;
this.depMatched=[];_$jscoverage['public/javascripts/app.js'][326]++;
this.pluginMaps={};_$jscoverage['public/javascripts/app.js'][326]++;
this.depCount=0};_$jscoverage['public/javascripts/app.js'][326]++;
Z.prototype={init:function(a,b,c,f){_$jscoverage['public/javascripts/app.js'][326]++;
f=f||{};_$jscoverage['public/javascripts/app.js'][326]++;
if(!this.inited){_$jscoverage['public/javascripts/app.js'][326]++;
this.factory=b;_$jscoverage['public/javascripts/app.js'][326]++;
if(c){
_$jscoverage['public/javascripts/app.js'][326]++;
this.on("error",c);}
else {
_$jscoverage['public/javascripts/app.js'][326]++;
this.events.error&&(c=u(this,function(a){_$jscoverage['public/javascripts/app.js'][326]++;
this.emit("error",a)}));}
_$jscoverage['public/javascripts/app.js'][326]++;
this.depMaps=a&&a.slice(0);_$jscoverage['public/javascripts/app.js'][326]++;
this.errback=
c;_$jscoverage['public/javascripts/app.js'][327]++;
this.inited=!0;_$jscoverage['public/javascripts/app.js'][327]++;
this.ignore=f.ignore;_$jscoverage['public/javascripts/app.js'][327]++;
f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){_$jscoverage['public/javascripts/app.js'][327]++;
this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){_$jscoverage['public/javascripts/app.js'][327]++;
if(!this.fetched){_$jscoverage['public/javascripts/app.js'][327]++;
this.fetched=!0;_$jscoverage['public/javascripts/app.js'][327]++;
i.startTime=(new Date).getTime();_$jscoverage['public/javascripts/app.js'][327]++;
var a=this.map;_$jscoverage['public/javascripts/app.js'][327]++;
if(this.shim){
_$jscoverage['public/javascripts/app.js'][327]++;
i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){_$jscoverage['public/javascripts/app.js'][327]++;
return a.prefix?this.callPlugin():this.load()}));}
else {
_$jscoverage['public/javascripts/app.js'][327]++;
return a.prefix?this.callPlugin():this.load()}
}},load:function(){_$jscoverage['public/javascripts/app.js'][327]++;
var a=
this.map.url;_$jscoverage['public/javascripts/app.js'][328]++;
S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){_$jscoverage['public/javascripts/app.js'][328]++;
if(this.enabled&&!this.enabling){_$jscoverage['public/javascripts/app.js'][328]++;
var a,b,c=this.map.id;_$jscoverage['public/javascripts/app.js'][328]++;
b=this.depExports;_$jscoverage['public/javascripts/app.js'][328]++;
var f=this.exports,l=this.factory;_$jscoverage['public/javascripts/app.js'][328]++;
if(this.inited){
_$jscoverage['public/javascripts/app.js'][328]++;
if(this.error){
_$jscoverage['public/javascripts/app.js'][328]++;
this.emit("error",this.error);}
else{_$jscoverage['public/javascripts/app.js'][328]++;
if(!this.defining){_$jscoverage['public/javascripts/app.js'][328]++;
this.defining=!0;_$jscoverage['public/javascripts/app.js'][328]++;
if(1>this.depCount&&!this.defined){_$jscoverage['public/javascripts/app.js'][328]++;
if(G(l)){_$jscoverage['public/javascripts/app.js'][328]++;
if(this.events.error&&this.map.isDefine||g.onError!==ca){
_$jscoverage['public/javascripts/app.js'][328]++;
try{_$jscoverage['public/javascripts/app.js'][328]++;
f=i.execCb(c,l,b,f)}catch(d){_$jscoverage['public/javascripts/app.js'][328]++;
a=d}}
else {
_$jscoverage['public/javascripts/app.js'][328]++;
f=i.execCb(c,l,b,f);}
_$jscoverage['public/javascripts/app.js'][328]++;
this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));_$jscoverage['public/javascripts/app.js'][329]++;
if(a){
_$jscoverage['public/javascripts/app.js'][329]++;
return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}
}else {
_$jscoverage['public/javascripts/app.js'][329]++;
f=l;}
_$jscoverage['public/javascripts/app.js'][329]++;
this.exports=f;_$jscoverage['public/javascripts/app.js'][329]++;
if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad)){
_$jscoverage['public/javascripts/app.js'][329]++;
g.onResourceLoad(i,this.map,this.depMaps);}
_$jscoverage['public/javascripts/app.js'][329]++;
y(c);_$jscoverage['public/javascripts/app.js'][329]++;
this.defined=!0}_$jscoverage['public/javascripts/app.js'][329]++;
this.defining=!1;_$jscoverage['public/javascripts/app.js'][329]++;
this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}}
else {
_$jscoverage['public/javascripts/app.js'][329]++;
this.fetch()}
}},callPlugin:function(){_$jscoverage['public/javascripts/app.js'][329]++;
var a=
this.map,b=a.id,d=p(a.prefix);_$jscoverage['public/javascripts/app.js'][330]++;
this.depMaps.push(d);_$jscoverage['public/javascripts/app.js'][330]++;
q(d,"defined",u(this,function(f){_$jscoverage['public/javascripts/app.js'][330]++;
var l,d;_$jscoverage['public/javascripts/app.js'][330]++;
d=m(aa,this.map.id);_$jscoverage['public/javascripts/app.js'][330]++;
var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});_$jscoverage['public/javascripts/app.js'][330]++;
if(this.map.unnormalized){_$jscoverage['public/javascripts/app.js'][330]++;
if(f.normalize&&(e=f.normalize(e,function(a){_$jscoverage['public/javascripts/app.js'][330]++;
return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){_$jscoverage['public/javascripts/app.js'][330]++;
this.init([],function(){_$jscoverage['public/javascripts/app.js'][330]++;
return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){_$jscoverage['public/javascripts/app.js'][330]++;
this.depMaps.push(f);
_$jscoverage['public/javascripts/app.js'][331]++;
if(this.events.error){
_$jscoverage['public/javascripts/app.js'][331]++;
d.on("error",u(this,function(a){_$jscoverage['public/javascripts/app.js'][331]++;
this.emit("error",a)}));}
_$jscoverage['public/javascripts/app.js'][331]++;
d.enable()}}else {
_$jscoverage['public/javascripts/app.js'][331]++;
d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){_$jscoverage['public/javascripts/app.js'][331]++;
this.init([],function(){_$jscoverage['public/javascripts/app.js'][331]++;
return a},null,{enabled:!0})}),l.error=u(this,function(a){_$jscoverage['public/javascripts/app.js'][331]++;
this.inited=!0;_$jscoverage['public/javascripts/app.js'][331]++;
this.error=a;_$jscoverage['public/javascripts/app.js'][331]++;
a.requireModules=[b];_$jscoverage['public/javascripts/app.js'][331]++;
B(h,function(a){_$jscoverage['public/javascripts/app.js'][331]++;
0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});_$jscoverage['public/javascripts/app.js'][331]++;
w(a)}),l.fromText=u(this,function(f,c){_$jscoverage['public/javascripts/app.js'][331]++;
var d=a.name,e=p(d),P=M;_$jscoverage['public/javascripts/app.js'][331]++;
c&&(f=c);_$jscoverage['public/javascripts/app.js'][331]++;
P&&(M=!1);_$jscoverage['public/javascripts/app.js'][331]++;
s(e);_$jscoverage['public/javascripts/app.js'][331]++;
t(j.config,b)&&(j.config[d]=j.config[b]);_$jscoverage['public/javascripts/app.js'][331]++;
try{_$jscoverage['public/javascripts/app.js'][331]++;
g.exec(f)}catch(h){_$jscoverage['public/javascripts/app.js'][331]++;
return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}_$jscoverage['public/javascripts/app.js'][332]++;
P&&(M=!0);_$jscoverage['public/javascripts/app.js'][332]++;
this.depMaps.push(e);_$jscoverage['public/javascripts/app.js'][332]++;
i.completeLoad(d);_$jscoverage['public/javascripts/app.js'][332]++;
n([d],l)}),f.load(a.name,n,l,j))}
}));_$jscoverage['public/javascripts/app.js'][332]++;
i.enable(d,this);_$jscoverage['public/javascripts/app.js'][332]++;
this.pluginMaps[d.id]=d},enable:function(){_$jscoverage['public/javascripts/app.js'][332]++;
V[this.map.id]=this;_$jscoverage['public/javascripts/app.js'][332]++;
this.enabling=this.enabled=!0;_$jscoverage['public/javascripts/app.js'][332]++;
v(this.depMaps,u(this,function(a,b){_$jscoverage['public/javascripts/app.js'][332]++;
var c,f;_$jscoverage['public/javascripts/app.js'][332]++;
if("string"===typeof a){_$jscoverage['public/javascripts/app.js'][332]++;
a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);_$jscoverage['public/javascripts/app.js'][332]++;
this.depMaps[b]=a;_$jscoverage['public/javascripts/app.js'][332]++;
if(c=m(L,a.id)){_$jscoverage['public/javascripts/app.js'][332]++;
this.depExports[b]=c(this);_$jscoverage['public/javascripts/app.js'][332]++;
return}_$jscoverage['public/javascripts/app.js'][332]++;
this.depCount+=1;_$jscoverage['public/javascripts/app.js'][332]++;
q(a,"defined",u(this,function(a){_$jscoverage['public/javascripts/app.js'][332]++;
this.defineDep(b,
a);_$jscoverage['public/javascripts/app.js'][333]++;
this.check()}));_$jscoverage['public/javascripts/app.js'][333]++;
this.errback&&q(a,"error",u(this,this.errback))}_$jscoverage['public/javascripts/app.js'][333]++;
c=a.id;_$jscoverage['public/javascripts/app.js'][333]++;
f=h[c];_$jscoverage['public/javascripts/app.js'][333]++;
!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));_$jscoverage['public/javascripts/app.js'][333]++;
B(this.pluginMaps,u(this,function(a){_$jscoverage['public/javascripts/app.js'][333]++;
var b=m(h,a.id);_$jscoverage['public/javascripts/app.js'][333]++;
b&&!b.enabled&&i.enable(a,this)}));_$jscoverage['public/javascripts/app.js'][333]++;
this.enabling=!1;_$jscoverage['public/javascripts/app.js'][333]++;
this.check()},on:function(a,b){_$jscoverage['public/javascripts/app.js'][333]++;
var c=this.events[a];_$jscoverage['public/javascripts/app.js'][333]++;
c||(c=this.events[a]=[]);_$jscoverage['public/javascripts/app.js'][333]++;
c.push(b)},emit:function(a,b){_$jscoverage['public/javascripts/app.js'][333]++;
v(this.events[a],function(a){_$jscoverage['public/javascripts/app.js'][333]++;
a(b)});_$jscoverage['public/javascripts/app.js'][333]++;
"error"===a&&delete this.events[a]}};_$jscoverage['public/javascripts/app.js'][333]++;
i={config:j,contextName:b,registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,
nextTick:g.nextTick,onError:w,configure:function(a){_$jscoverage['public/javascripts/app.js'][334]++;
a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");_$jscoverage['public/javascripts/app.js'][334]++;
var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};_$jscoverage['public/javascripts/app.js'][334]++;
B(a,function(a,b){_$jscoverage['public/javascripts/app.js'][334]++;
c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});_$jscoverage['public/javascripts/app.js'][334]++;
a.bundles&&B(a.bundles,function(a,b){_$jscoverage['public/javascripts/app.js'][334]++;
v(a,function(a){_$jscoverage['public/javascripts/app.js'][334]++;
a!==b&&(aa[a]=b)})});_$jscoverage['public/javascripts/app.js'][334]++;
a.shim&&(B(a.shim,function(a,c){_$jscoverage['public/javascripts/app.js'][334]++;
H(a)&&(a={deps:a});_$jscoverage['public/javascripts/app.js'][334]++;
if((a.exports||a.init)&&!a.exportsFn){
_$jscoverage['public/javascripts/app.js'][334]++;
a.exportsFn=i.makeShimExports(a);}
_$jscoverage['public/javascripts/app.js'][334]++;
b[c]=a}),j.shim=b);_$jscoverage['public/javascripts/app.js'][334]++;
a.packages&&v(a.packages,function(a){_$jscoverage['public/javascripts/app.js'][334]++;
var b,
a="string"===typeof a?{name:a}:a;_$jscoverage['public/javascripts/app.js'][335]++;
b=a.name;_$jscoverage['public/javascripts/app.js'][335]++;
a.location&&(j.paths[b]=a.location);_$jscoverage['public/javascripts/app.js'][335]++;
j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});_$jscoverage['public/javascripts/app.js'][335]++;
B(h,function(a,b){_$jscoverage['public/javascripts/app.js'][335]++;
!a.inited&&!a.map.unnormalized&&(a.map=p(b))});_$jscoverage['public/javascripts/app.js'][335]++;
if(a.deps||a.callback){
_$jscoverage['public/javascripts/app.js'][335]++;
i.require(a.deps||[],a.callback)}
},makeShimExports:function(a){_$jscoverage['public/javascripts/app.js'][335]++;
return function(){_$jscoverage['public/javascripts/app.js'][335]++;
var b;_$jscoverage['public/javascripts/app.js'][335]++;
a.init&&(b=a.init.apply(ba,arguments));_$jscoverage['public/javascripts/app.js'][335]++;
return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){_$jscoverage['public/javascripts/app.js'][335]++;
function j(c,d,m){_$jscoverage['public/javascripts/app.js'][335]++;
var n,q;_$jscoverage['public/javascripts/app.js'][335]++;
e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=
!0);_$jscoverage['public/javascripts/app.js'][336]++;
if("string"===typeof c){_$jscoverage['public/javascripts/app.js'][336]++;
if(G(d)){
_$jscoverage['public/javascripts/app.js'][336]++;
return w(C("requireargs","Invalid require call"),m);}
_$jscoverage['public/javascripts/app.js'][336]++;
if(a&&t(L,c)){
_$jscoverage['public/javascripts/app.js'][336]++;
return L[c](h[a.id]);}
_$jscoverage['public/javascripts/app.js'][336]++;
if(g.get){
_$jscoverage['public/javascripts/app.js'][336]++;
return g.get(i,c,a,j);}
_$jscoverage['public/javascripts/app.js'][336]++;
n=p(c,a,!1,!0);_$jscoverage['public/javascripts/app.js'][336]++;
n=n.id;_$jscoverage['public/javascripts/app.js'][336]++;
return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}_$jscoverage['public/javascripts/app.js'][336]++;
J();_$jscoverage['public/javascripts/app.js'][336]++;
i.nextTick(function(){_$jscoverage['public/javascripts/app.js'][336]++;
J();_$jscoverage['public/javascripts/app.js'][336]++;
q=s(p(null,a));_$jscoverage['public/javascripts/app.js'][336]++;
q.skipMap=e.skipMap;_$jscoverage['public/javascripts/app.js'][336]++;
q.init(c,d,m,{enabled:!0});_$jscoverage['public/javascripts/app.js'][336]++;
D()});_$jscoverage['public/javascripts/app.js'][336]++;
return j}_$jscoverage['public/javascripts/app.js'][336]++;
e=e||{};_$jscoverage['public/javascripts/app.js'][336]++;
U(j,{isBrowser:z,toUrl:function(b){_$jscoverage['public/javascripts/app.js'][336]++;
var d,e=b.lastIndexOf("."),k=b.split("/")[0];_$jscoverage['public/javascripts/app.js'][336]++;
if(-1!==
e&&(!("."===k||".."===k)||1<e)){
_$jscoverage['public/javascripts/app.js'][337]++;
d=b.substring(e,b.length),b=b.substring(0,e);}
_$jscoverage['public/javascripts/app.js'][337]++;
return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){_$jscoverage['public/javascripts/app.js'][337]++;
return t(r,p(b,a,!1,!0).id)},specified:function(b){_$jscoverage['public/javascripts/app.js'][337]++;
b=p(b,a,!1,!0).id;_$jscoverage['public/javascripts/app.js'][337]++;
return t(r,b)||t(h,b)}});_$jscoverage['public/javascripts/app.js'][337]++;
a||(j.undef=function(b){_$jscoverage['public/javascripts/app.js'][337]++;
x();_$jscoverage['public/javascripts/app.js'][337]++;
var c=p(b,a,!0),e=m(h,b);_$jscoverage['public/javascripts/app.js'][337]++;
d(b);_$jscoverage['public/javascripts/app.js'][337]++;
delete r[b];_$jscoverage['public/javascripts/app.js'][337]++;
delete S[c.url];_$jscoverage['public/javascripts/app.js'][337]++;
delete $[b];_$jscoverage['public/javascripts/app.js'][337]++;
T(A,function(a,c){_$jscoverage['public/javascripts/app.js'][337]++;
a[0]===b&&A.splice(c,1)});_$jscoverage['public/javascripts/app.js'][337]++;
e&&(e.events.defined&&($[b]=e.events),y(b))});_$jscoverage['public/javascripts/app.js'][337]++;
return j},enable:function(a){_$jscoverage['public/javascripts/app.js'][337]++;
m(h,a.id)&&s(a).enable()},completeLoad:function(a){_$jscoverage['public/javascripts/app.js'][337]++;
var b,
c,d=m(j.shim,a)||{},g=d.exports;_$jscoverage['public/javascripts/app.js'][338]++;
for(x();A.length;){_$jscoverage['public/javascripts/app.js'][338]++;
c=A.shift();_$jscoverage['public/javascripts/app.js'][338]++;
if(null===c[0]){_$jscoverage['public/javascripts/app.js'][338]++;
c[0]=a;_$jscoverage['public/javascripts/app.js'][338]++;
if(b){
_$jscoverage['public/javascripts/app.js'][338]++;
break;}
_$jscoverage['public/javascripts/app.js'][338]++;
b=!0}else {
_$jscoverage['public/javascripts/app.js'][338]++;
c[0]===a&&(b=!0);}
_$jscoverage['public/javascripts/app.js'][338]++;
E(c)}_$jscoverage['public/javascripts/app.js'][338]++;
c=m(h,a);_$jscoverage['public/javascripts/app.js'][338]++;
if(!b&&!t(r,a)&&c&&!c.inited){_$jscoverage['public/javascripts/app.js'][338]++;
if(j.enforceDefine&&(!g||!da(g))){
_$jscoverage['public/javascripts/app.js'][338]++;
return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));}
_$jscoverage['public/javascripts/app.js'][338]++;
E([a,d.deps||[],d.exportsFn])}_$jscoverage['public/javascripts/app.js'][338]++;
D()},nameToUrl:function(a,b,c){_$jscoverage['public/javascripts/app.js'][338]++;
var d,e,h;_$jscoverage['public/javascripts/app.js'][338]++;
(d=m(j.pkgs,a))&&(a=d);_$jscoverage['public/javascripts/app.js'][338]++;
if(d=m(aa,a)){
_$jscoverage['public/javascripts/app.js'][338]++;
return i.nameToUrl(d,b,c);}
_$jscoverage['public/javascripts/app.js'][338]++;
if(g.jsExtRegExp.test(a)){
_$jscoverage['public/javascripts/app.js'][338]++;
d=a+(b||"");}
else{_$jscoverage['public/javascripts/app.js'][338]++;
d=j.paths;_$jscoverage['public/javascripts/app.js'][338]++;
a=a.split("/");_$jscoverage['public/javascripts/app.js'][338]++;
for(e=a.length;0<e;e-=1){
_$jscoverage['public/javascripts/app.js'][338]++;
if(h=a.slice(0,
e).join("/"),h=m(d,h)){_$jscoverage['public/javascripts/app.js'][339]++;
H(h)&&(h=h[0]);_$jscoverage['public/javascripts/app.js'][339]++;
a.splice(0,e,h);_$jscoverage['public/javascripts/app.js'][339]++;
break}}
_$jscoverage['public/javascripts/app.js'][339]++;
d=a.join("/");_$jscoverage['public/javascripts/app.js'][339]++;
d+=b||(/^data\:|\?/.test(d)||c?"":".js");_$jscoverage['public/javascripts/app.js'][339]++;
d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}_$jscoverage['public/javascripts/app.js'][339]++;
return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){_$jscoverage['public/javascripts/app.js'][339]++;
g.load(i,a,b)},execCb:function(a,b,c,d){_$jscoverage['public/javascripts/app.js'][339]++;
return b.apply(d,c)},onScriptLoad:function(a){_$jscoverage['public/javascripts/app.js'][339]++;
if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState)){
_$jscoverage['public/javascripts/app.js'][339]++;
N=null,a=I(a),i.completeLoad(a.id)}
},onScriptError:function(a){_$jscoverage['public/javascripts/app.js'][339]++;
var b=I(a);_$jscoverage['public/javascripts/app.js'][339]++;
if(!e(b.id)){
_$jscoverage['public/javascripts/app.js'][339]++;
return w(C("scripterror",
"Script error for: "+b.id,a,[b.id]))}
}};_$jscoverage['public/javascripts/app.js'][340]++;
i.require=i.makeRequire();_$jscoverage['public/javascripts/app.js'][340]++;
return i}_$jscoverage['public/javascripts/app.js'][340]++;
var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;_$jscoverage['public/javascripts/app.js'][340]++;
x=Object.prototype;_$jscoverage['public/javascripts/app.js'][340]++;
var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;_$jscoverage['public/javascripts/app.js'][341]++;
if("undefined"===typeof define){_$jscoverage['public/javascripts/app.js'][341]++;
if("undefined"!==typeof requirejs){_$jscoverage['public/javascripts/app.js'][341]++;
if(G(requirejs)){
_$jscoverage['public/javascripts/app.js'][341]++;
return;}
_$jscoverage['public/javascripts/app.js'][341]++;
q=requirejs;_$jscoverage['public/javascripts/app.js'][341]++;
requirejs=void 0}_$jscoverage['public/javascripts/app.js'][341]++;
"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);_$jscoverage['public/javascripts/app.js'][341]++;
g=requirejs=function(b,c,d,e){_$jscoverage['public/javascripts/app.js'][341]++;
var n,p="_";_$jscoverage['public/javascripts/app.js'][341]++;
!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);_$jscoverage['public/javascripts/app.js'][341]++;
n&&n.context&&(p=n.context);_$jscoverage['public/javascripts/app.js'][341]++;
(e=m(F,p))||(e=F[p]=g.s.newContext(p));_$jscoverage['public/javascripts/app.js'][341]++;
n&&e.configure(n);_$jscoverage['public/javascripts/app.js'][341]++;
return e.require(b,c,d)};_$jscoverage['public/javascripts/app.js'][341]++;
g.config=function(b){_$jscoverage['public/javascripts/app.js'][341]++;
return g(b)};
_$jscoverage['public/javascripts/app.js'][342]++;
g.nextTick="undefined"!==typeof setTimeout?function(b){_$jscoverage['public/javascripts/app.js'][342]++;
setTimeout(b,4)}:function(b){_$jscoverage['public/javascripts/app.js'][342]++;
b()};_$jscoverage['public/javascripts/app.js'][342]++;
require||(require=g);_$jscoverage['public/javascripts/app.js'][342]++;
g.version="2.1.15";_$jscoverage['public/javascripts/app.js'][342]++;
g.jsExtRegExp=/^\/|:|\?|\.js$/;_$jscoverage['public/javascripts/app.js'][342]++;
g.isBrowser=z;_$jscoverage['public/javascripts/app.js'][342]++;
x=g.s={contexts:F,newContext:ga};_$jscoverage['public/javascripts/app.js'][342]++;
g({});_$jscoverage['public/javascripts/app.js'][342]++;
v(["toUrl","undef","defined","specified"],function(b){_$jscoverage['public/javascripts/app.js'][342]++;
g[b]=function(){_$jscoverage['public/javascripts/app.js'][342]++;
var c=F._;_$jscoverage['public/javascripts/app.js'][342]++;
return c.require[b].apply(c,arguments)}});_$jscoverage['public/javascripts/app.js'][342]++;
if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0])){
_$jscoverage['public/javascripts/app.js'][342]++;
y=x.head=D.parentNode;}
_$jscoverage['public/javascripts/app.js'][342]++;
g.onError=ca;_$jscoverage['public/javascripts/app.js'][342]++;
g.createNode=function(b){_$jscoverage['public/javascripts/app.js'][342]++;
var c=
b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");_$jscoverage['public/javascripts/app.js'][343]++;
c.type=b.scriptType||"text/javascript";_$jscoverage['public/javascripts/app.js'][343]++;
c.charset="utf-8";_$jscoverage['public/javascripts/app.js'][343]++;
c.async=!0;_$jscoverage['public/javascripts/app.js'][343]++;
return c};_$jscoverage['public/javascripts/app.js'][343]++;
g.load=function(b,c,d){_$jscoverage['public/javascripts/app.js'][343]++;
var e=b&&b.config||{};_$jscoverage['public/javascripts/app.js'][343]++;
if(z){
_$jscoverage['public/javascripts/app.js'][343]++;
return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):
(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;}
_$jscoverage['public/javascripts/app.js'][344]++;
if(ea){
_$jscoverage['public/javascripts/app.js'][344]++;
try{_$jscoverage['public/javascripts/app.js'][344]++;
importScripts(d),b.completeLoad(c)}catch(m){_$jscoverage['public/javascripts/app.js'][344]++;
b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}}
};_$jscoverage['public/javascripts/app.js'][344]++;
z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){_$jscoverage['public/javascripts/app.js'][344]++;
y||(y=b.parentNode);_$jscoverage['public/javascripts/app.js'][344]++;
if(I=b.getAttribute("data-main")){
_$jscoverage['public/javascripts/app.js'][344]++;
return s=I,q.baseUrl||(E=s.split("/"),s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=
O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0}
});_$jscoverage['public/javascripts/app.js'][345]++;
define=function(b,c,d){_$jscoverage['public/javascripts/app.js'][345]++;
var e,g;_$jscoverage['public/javascripts/app.js'][345]++;
"string"!==typeof b&&(d=c,c=b,b=null);_$jscoverage['public/javascripts/app.js'][345]++;
H(c)||(d=c,c=null);_$jscoverage['public/javascripts/app.js'][345]++;
!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){_$jscoverage['public/javascripts/app.js'][345]++;
c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));_$jscoverage['public/javascripts/app.js'][345]++;
if(M){_$jscoverage['public/javascripts/app.js'][345]++;
if(!(e=J)){
_$jscoverage['public/javascripts/app.js'][345]++;
N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){_$jscoverage['public/javascripts/app.js'][345]++;
if("interactive"===b.readyState){
_$jscoverage['public/javascripts/app.js'][345]++;
return N=b}
}),e=N;}
_$jscoverage['public/javascripts/app.js'][345]++;
e&&(b||
(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}_$jscoverage['public/javascripts/app.js'][346]++;
(g?g.defQueue:R).push([b,c,d])};_$jscoverage['public/javascripts/app.js'][346]++;
define.amd={jQuery:!0};_$jscoverage['public/javascripts/app.js'][346]++;
g.exec=function(b){_$jscoverage['public/javascripts/app.js'][346]++;
return eval(b)};_$jscoverage['public/javascripts/app.js'][346]++;
g(q)}})(this);
});

;