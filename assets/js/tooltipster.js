!function(t,o,e){var i={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,debug:!0,delay:200,minWidth:0,maxWidth:null,functionInit:function(t,o){},functionBefore:function(t,o){o()},functionReady:function(t,o){},functionAfter:function(t){},hideOnClick:!1,icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,multiple:!1,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,positionTrackerCallback:function(t){"hover"==this.option("trigger")&&this.option("autoClose")&&this.hide()},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0};function n(o,e){this.bodyOverflowX,this.callbacks={hide:[],show:[]},this.checkInterval=null,this.Content,this.$el=t(o),this.$elProxy,this.elProxyPosition,this.enabled=!0,this.options=t.extend({},i,e),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.Status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this._init()}function s(o,e){var i=!0;return t.each(o,function(t,n){if(void 0===e[t]||o[t]!==e[t])return i=!1,!1}),i}n.prototype={_init:function(){var o=this;if(e.querySelector){var i=null;void 0===o.$el.data("tooltipster-initialTitle")&&(void 0===(i=o.$el.attr("title"))&&(i=null),o.$el.data("tooltipster-initialTitle",i)),null!==o.options.content?o._content_set(o.options.content):o._content_set(i);var n=o.options.functionInit.call(o.$el,o.$el,o.Content);void 0!==n&&o._content_set(n),o.$el.removeAttr("title").addClass("tooltipstered"),!r&&o.options.iconDesktop||r&&o.options.iconTouch?("string"==typeof o.options.icon?(o.$elProxy=t('<span class="'+o.options.iconTheme+'"></span>'),o.$elProxy.text(o.options.icon)):o.options.iconCloning?o.$elProxy=o.options.icon.clone(!0):o.$elProxy=o.options.icon,o.$elProxy.insertAfter(o.$el)):o.$elProxy=o.$el,"hover"==o.options.trigger?(o.$elProxy.on("mouseenter."+o.namespace,function(){a()&&!o.options.touchDevices||(o.mouseIsOverProxy=!0,o._show())}).on("mouseleave."+o.namespace,function(){a()&&!o.options.touchDevices||(o.mouseIsOverProxy=!1)}),r&&o.options.touchDevices&&o.$elProxy.on("touchstart."+o.namespace,function(){o._showNow()})):"click"==o.options.trigger&&o.$elProxy.on("click."+o.namespace,function(){a()&&!o.options.touchDevices||o._show()})}},_show:function(){var t=this;"shown"!=t.Status&&"appearing"!=t.Status&&(t.options.delay?t.timerShow=setTimeout(function(){("click"==t.options.trigger||"hover"==t.options.trigger&&t.mouseIsOverProxy)&&t._showNow()},t.options.delay):t._showNow())},_showNow:function(e){var i=this;i.options.functionBefore.call(i.$el,i.$el,function(){if(i.enabled&&null!==i.Content){e&&i.callbacks.show.push(e),i.callbacks.hide=[],clearTimeout(i.timerShow),i.timerShow=null,clearTimeout(i.timerHide),i.timerHide=null,i.options.onlyOne&&t(".tooltipstered").not(i.$el).each(function(o,e){var i=t(e),n=i.data("tooltipster-ns");t.each(n,function(t,o){var e=i.data(o),n=e.status(),s=e.option("autoClose");"hidden"!==n&&"disappearing"!==n&&s&&e.hide()})});var n=function(){i.Status="shown",t.each(i.callbacks.show,function(t,o){o.call(i.$el)}),i.callbacks.show=[]};if("hidden"!==i.Status){var s=0;"disappearing"===i.Status?(i.Status="appearing",p()?(i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+i.options.animation+"-show"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(n)):i.$tooltip.stop().fadeIn(n)):"shown"===i.Status&&n()}else{i.Status="appearing";s=i.options.speed;i.bodyOverflowX=t("body").css("overflow-x"),t("body").css("overflow-x","hidden");var l="tooltipster-"+i.options.animation,a="-webkit-transition-duration: "+i.options.speed+"ms; -webkit-animation-duration: "+i.options.speed+"ms; -moz-transition-duration: "+i.options.speed+"ms; -moz-animation-duration: "+i.options.speed+"ms; -o-transition-duration: "+i.options.speed+"ms; -o-animation-duration: "+i.options.speed+"ms; -ms-transition-duration: "+i.options.speed+"ms; -ms-animation-duration: "+i.options.speed+"ms; transition-duration: "+i.options.speed+"ms; animation-duration: "+i.options.speed+"ms;",h=i.options.minWidth?"min-width:"+Math.round(i.options.minWidth)+"px;":"",f=i.options.maxWidth?"max-width:"+Math.round(i.options.maxWidth)+"px;":"",d=i.options.interactive?"pointer-events: auto;":"";if(i.$tooltip=t('<div class="tooltipster-base '+i.options.theme+'" style="'+h+" "+f+" "+d+" "+a+'"><div class="tooltipster-content"></div></div>'),p()&&i.$tooltip.addClass(l),i._content_insert(),i.$tooltip.appendTo("body"),i.reposition(),i.options.functionReady.call(i.$el,i.$el,i.$tooltip),p()?(i.$tooltip.addClass(l+"-show"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(n)):i.$tooltip.css("display","none").fadeIn(i.options.speed,n),i._interval_set(),t(o).on("scroll."+i.namespace+" resize."+i.namespace,function(){i.reposition()}),i.options.autoClose)if(t("body").off("."+i.namespace),"hover"==i.options.trigger){if(r&&setTimeout(function(){t("body").on("touchstart."+i.namespace,function(){i.hide()})},0),i.options.interactive){r&&i.$tooltip.on("touchstart."+i.namespace,function(t){t.stopPropagation()});var c=null;i.$elProxy.add(i.$tooltip).on("mouseleave."+i.namespace+"-autoClose",function(){clearTimeout(c),c=setTimeout(function(){i.hide()},i.options.interactiveTolerance)}).on("mouseenter."+i.namespace+"-autoClose",function(){clearTimeout(c)})}else i.$elProxy.on("mouseleave."+i.namespace+"-autoClose",function(){i.hide()});i.options.hideOnClick&&i.$elProxy.on("click."+i.namespace+"-autoClose",function(){i.hide()})}else"click"==i.options.trigger&&(setTimeout(function(){t("body").on("click."+i.namespace+" touchstart."+i.namespace,function(){i.hide()})},0),i.options.interactive&&i.$tooltip.on("click."+i.namespace+" touchstart."+i.namespace,function(t){t.stopPropagation()}))}i.options.timer>0&&(i.timerHide=setTimeout(function(){i.timerHide=null,i.hide()},i.options.timer+s))}})},_interval_set:function(){var o=this;o.checkInterval=setInterval(function(){if(0===t("body").find(o.$el).length||0===t("body").find(o.$elProxy).length||"hidden"==o.Status||0===t("body").find(o.$tooltip).length)"shown"!=o.Status&&"appearing"!=o.Status||o.hide(),o._interval_cancel();else if(o.options.positionTracker){var e=o._repositionInfo(o.$elProxy),i=!1;s(e.dimension,o.elProxyPosition.dimension)&&("fixed"===o.$elProxy.css("position")?s(e.position,o.elProxyPosition.position)&&(i=!0):s(e.offset,o.elProxyPosition.offset)&&(i=!0)),i||(o.reposition(),o.options.positionTrackerCallback.call(o,o.$el))}},200)},_interval_cancel:function(){clearInterval(this.checkInterval),this.checkInterval=null},_content_set:function(t){"object"==typeof t&&null!==t&&this.options.contentCloning&&(t=t.clone(!0)),this.Content=t},_content_insert:function(){var t=this.$tooltip.find(".tooltipster-content");"string"!=typeof this.Content||this.options.contentAsHTML?t.empty().append(this.Content):t.text(this.Content)},_update:function(t){var o=this;o._content_set(t),null!==o.Content?"hidden"!==o.Status&&(o._content_insert(),o.reposition(),o.options.updateAnimation&&(p()?(o.$tooltip.css({width:"","-webkit-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=o.Status&&(o.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==o.Status&&o.$tooltip.css({"-webkit-transition":o.options.speed+"ms","-moz-transition":o.options.speed+"ms","-o-transition":o.options.speed+"ms","-ms-transition":o.options.speed+"ms",transition:o.options.speed+"ms"})},o.options.speed))},o.options.speed)):o.$tooltip.fadeTo(o.options.speed,.5,function(){"hidden"!=o.Status&&o.$tooltip.fadeTo(o.options.speed,1)}))):o.hide()},_repositionInfo:function(t){return{dimension:{height:t.outerHeight(!1),width:t.outerWidth(!1)},offset:t.offset(),position:{left:parseInt(t.css("left")),top:parseInt(t.css("top"))}}},hide:function(e){var i=this;e&&i.callbacks.hide.push(e),i.callbacks.show=[],clearTimeout(i.timerShow),i.timerShow=null,clearTimeout(i.timerHide),i.timerHide=null;var n=function(){t.each(i.callbacks.hide,function(t,o){o.call(i.$el)}),i.callbacks.hide=[]};if("shown"==i.Status||"appearing"==i.Status){i.Status="disappearing";var s=function(){i.Status="hidden","object"==typeof i.Content&&null!==i.Content&&i.Content.detach(),i.$tooltip.remove(),i.$tooltip=null,t(o).off("."+i.namespace),t("body").off("."+i.namespace).css("overflow-x",i.bodyOverflowX),t("body").off("."+i.namespace),i.$elProxy.off("."+i.namespace+"-autoClose"),i.options.functionAfter.call(i.$el,i.$el),n()};p()?(i.$tooltip.clearQueue().removeClass("tooltipster-"+i.options.animation+"-show").addClass("tooltipster-dying"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(s)):i.$tooltip.stop().fadeOut(i.options.speed,s)}else"hidden"==i.Status&&n();return i},show:function(t){return this._showNow(t),this},update:function(t){return this.content(t)},content:function(t){return void 0===t?this.Content:(this._update(t),this)},reposition:function(){if(0!==t("body").find(this.$tooltip).length){this.$tooltip.css("width",""),this.elProxyPosition=this._repositionInfo(this.$elProxy);var e=null,i=t(o).width(),n=this.elProxyPosition,s=this.$tooltip.outerWidth(!1),r=(this.$tooltip.innerWidth(),this.$tooltip.outerHeight(!1));if(this.$elProxy.is("area")){var l=this.$elProxy.attr("shape"),a=this.$elProxy.parent().attr("name"),p=t('img[usemap="#'+a+'"]'),h=p.offset().left,f=p.offset().top,d=void 0!==this.$elProxy.attr("coords")?this.$elProxy.attr("coords").split(","):void 0;if("circle"==l){var c=parseInt(d[0]),u=parseInt(d[1]),m=parseInt(d[2]);n.dimension.height=2*m,n.dimension.width=2*m,n.offset.top=f+u-m,n.offset.left=h+c-m}else if("rect"==l){c=parseInt(d[0]),u=parseInt(d[1]);var v=parseInt(d[2]),$=parseInt(d[3]);n.dimension.height=$-u,n.dimension.width=v-c,n.offset.top=f+u,n.offset.left=h+c}else if("poly"==l){for(var g=0,w=0,y=0,b=0,x="even",C=0;C<d.length;C++){var P=parseInt(d[C]);"even"==x?(P>y&&(y=P,0===C&&(g=y)),P<g&&(g=P),x="odd"):(P>b&&(b=P,1==C&&(w=b)),P<w&&(w=P),x="even")}n.dimension.height=b-w,n.dimension.width=y-g,n.offset.top=f+w,n.offset.left=h+g}else n.dimension.height=p.outerHeight(!1),n.dimension.width=p.outerWidth(!1),n.offset.top=f,n.offset.left=h}var T=0,_=0,k=0,I=parseInt(this.options.offsetY),S=parseInt(this.options.offsetX),O=this.options.position;function H(){var n=t(o).scrollLeft();T-n<0&&(e=T-n,T=n),T+s-n>i&&(e=T-(i+n-s),T=i+n-s)}function M(e,i){n.offset.top-t(o).scrollTop()-r-I-12<0&&i.indexOf("top")>-1&&(O=e),n.offset.top+n.dimension.height+r+12+I>t(o).scrollTop()+t(o).height()&&i.indexOf("bottom")>-1&&(O=e,k=n.offset.top-r-I-12)}if("top"==O){var D=n.offset.left+s-(n.offset.left+n.dimension.width);T=n.offset.left+S-D/2,k=n.offset.top-r-I-12,H(),M("bottom","top")}if("top-left"==O&&(T=n.offset.left+S,k=n.offset.top-r-I-12,H(),M("bottom-left","top-left")),"top-right"==O&&(T=n.offset.left+n.dimension.width+S-s,k=n.offset.top-r-I-12,H(),M("bottom-right","top-right")),"bottom"==O){D=n.offset.left+s-(n.offset.left+n.dimension.width);T=n.offset.left-D/2+S,k=n.offset.top+n.dimension.height+I+12,H(),M("top","bottom")}if("bottom-left"==O&&(T=n.offset.left+S,k=n.offset.top+n.dimension.height+I+12,H(),M("top-left","bottom-left")),"bottom-right"==O&&(T=n.offset.left+n.dimension.width+S-s,k=n.offset.top+n.dimension.height+I+12,H(),M("top-right","bottom-right")),"left"==O){T=n.offset.left-S-s-12,_=n.offset.left+S+n.dimension.width+12;var W=n.offset.top+r-(n.offset.top+n.dimension.height);if(k=n.offset.top-W/2-I,T<0&&_+s>i){var A=2*parseFloat(this.$tooltip.css("border-width")),z=s+T-A;this.$tooltip.css("width",z+"px"),r=this.$tooltip.outerHeight(!1),T=n.offset.left-S-z-12-A,W=n.offset.top+r-(n.offset.top+n.dimension.height),k=n.offset.top-W/2-I}else T<0&&(T=n.offset.left+S+n.dimension.width+12,e="left")}if("right"==O){T=n.offset.left+S+n.dimension.width+12,_=n.offset.left-S-s-12;W=n.offset.top+r-(n.offset.top+n.dimension.height);if(k=n.offset.top-W/2-I,T+s>i&&_<0){A=2*parseFloat(this.$tooltip.css("border-width")),z=i-T-A;this.$tooltip.css("width",z+"px"),r=this.$tooltip.outerHeight(!1),W=n.offset.top+r-(n.offset.top+n.dimension.height),k=n.offset.top-W/2-I}else T+s>i&&(T=n.offset.left-S-s-12,e="right")}if(this.options.arrow){var F="tooltipster-arrow-"+O;if(this.options.arrowColor.length<1)var N=this.$tooltip.css("background-color");else N=this.options.arrowColor;if(e?"left"==e?(F="tooltipster-arrow-right",e=""):"right"==e?(F="tooltipster-arrow-left",e=""):e="left:"+Math.round(e)+"px;":e="","top"==O||"top-left"==O||"top-right"==O)var X=parseFloat(this.$tooltip.css("border-bottom-width")),q=this.$tooltip.css("border-bottom-color");else if("bottom"==O||"bottom-left"==O||"bottom-right"==O)X=parseFloat(this.$tooltip.css("border-top-width")),q=this.$tooltip.css("border-top-color");else if("left"==O)X=parseFloat(this.$tooltip.css("border-right-width")),q=this.$tooltip.css("border-right-color");else if("right"==O)X=parseFloat(this.$tooltip.css("border-left-width")),q=this.$tooltip.css("border-left-color");else X=parseFloat(this.$tooltip.css("border-bottom-width")),q=this.$tooltip.css("border-bottom-color");X>1&&X++;var j="";if(0!==X){var E="",L="border-color: "+q+";";-1!==F.indexOf("bottom")?E="margin-top: -"+Math.round(X)+"px;":-1!==F.indexOf("top")?E="margin-bottom: -"+Math.round(X)+"px;":-1!==F.indexOf("left")?E="margin-right: -"+Math.round(X)+"px;":-1!==F.indexOf("right")&&(E="margin-left: -"+Math.round(X)+"px;"),j='<span class="tooltipster-arrow-border" style="'+E+" "+L+';"></span>'}this.$tooltip.find(".tooltipster-arrow").remove();var Q='<div class="'+F+' tooltipster-arrow" style="'+e+'">'+j+'<span style="border-color:'+N+';"></span></div>';this.$tooltip.append(Q)}this.$tooltip.css({top:Math.round(k)+"px",left:Math.round(T)+"px"})}return this},enable:function(){return this.enabled=!0,this},disable:function(){return this.hide(),this.enabled=!1,this},destroy:function(){var o=this;o.hide(),o.$el[0]!==o.$elProxy[0]&&o.$elProxy.remove(),o.$el.removeData(o.namespace).off("."+o.namespace);var e=o.$el.data("tooltipster-ns");if(1===e.length){var i=null;"previous"===o.options.restoration?i=o.$el.data("tooltipster-initialTitle"):"current"===o.options.restoration&&(i="string"==typeof o.Content?o.Content:t("<div></div>").append(o.Content).html()),i&&o.$el.attr("title",i),o.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else e=t.grep(e,function(t,e){return t!==o.namespace}),o.$el.data("tooltipster-ns",e);return o},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:void 0},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:void 0},option:function(t,o){return void 0===o?this.options[t]:(this.options[t]=o,this)},status:function(){return this.Status}},t.fn.tooltipster=function(){var o=arguments;if(0===this.length){if("string"==typeof o[0]){var e=!0;switch(o[0]){case"setDefaults":t.extend(i,o[1]);break;default:e=!1}return!!e||this}return this}if("string"==typeof o[0]){var s="#*$~&";return this.each(function(){var e=t(this).data("tooltipster-ns"),i=e?t(this).data(e[0]):null;if(!i)throw new Error("You called Tooltipster's \""+o[0]+'" method on an uninitialized element');if("function"!=typeof i[o[0]])throw new Error('Unknown method .tooltipster("'+o[0]+'")');var n=i[o[0]](o[1],o[2]);if(n!==i)return s=n,!1}),"#*$~&"!==s?s:this}var r=[],l=o[0]&&void 0!==o[0].multiple,a=l&&o[0].multiple||!l&&i.multiple,p=o[0]&&void 0!==o[0].debug,h=p&&o[0].debug||!p&&i.debug;return this.each(function(){var e=!1,i=t(this).data("tooltipster-ns"),s=null;i?a?e=!0:h&&console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'):e=!0,e&&(s=new n(this,o[0]),i||(i=[]),i.push(s.namespace),t(this).data("tooltipster-ns",i),t(this).data(s.namespace,s)),r.push(s)}),a?r:this};var r=!!("ontouchstart"in o),l=!1;function a(){return!l&&r}function p(){var t=(e.body||e.documentElement).style,o="transition";if("string"==typeof t[o])return!0;v=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var i=0;i<v.length;i++)if("string"==typeof t[v[i]+o])return!0;return!1}t("body").one("mousemove",function(){l=!0})}(jQuery,window,document);