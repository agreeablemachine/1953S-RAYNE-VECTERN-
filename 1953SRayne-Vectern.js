 
// Generated mapping code
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-160, -22, 876, 302, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={NS:"m123.9 77.5c-0.8 0.9-2.2 1.6-3.2 1.5-0.9 0-3.2 0.7-5 1.6-1.7 0.9-4.2 2.6-5.5 3.8-1.2 1.1-2.2 2.8-2.2 3.6 0 0.8-1.7 3.4-3.7 5.8-2.1 2.4-6.3 6.9-9.4 10-3.8 3.9-7 6.1-10 7.1-2.4 0.7-5 1.7-5.7 2.2-0.6 0.5-1.5 0.7-2 0.4-0.4-0.2-1.8 0.7-3.2 2.2-1.4 1.4-5.2 4.6-8.5 7-3.3 2.4-6.1 4.9-6.2 5.6-0.2 0.7-1.1 4.3-2 8.1-1.3 4.9-2.4 7.1-3.8 7.7-1.1 0.5-3.1 3.3-4.5 6.2-2.1 4.3-3 5.3-5.5 5.6-1.7 0.2-4.8 1.8-7 3.6-2.2 1.7-4.8 3.5-5.8 3.8-0.9 0.4-1.7 1.6-1.7 2.7 0 1.2-0.8 2.2-2 2.5-1.1 0.3-4.3 3.4-7 7-2.8 3.6-4.8 6.9-4.5 7.5 0.3 0.6-1.1 2.3-3 4-1.9 1.7-3.5 3.9-3.5 5 0 1.1 1.3 4.8 3 8.3 1.6 3.4 3 7.2 3 8.4 0 1.3 0.6 3.3 1.4 4.5 1.1 1.8 1.3 4.2 0.7 10.8-0.6 5.6-1.5 9.5-2.7 11.3-1 1.6-3 3.1-4.4 3.4-1.4 0.3-3.1 1.1-3.8 1.7-0.7 0.6-1.3 1.5-1.3 2.1 0 0.6 2.4 3 5.3 5.5 4.7 4 5.8 4.5 10.8 4.7 4.3 0.2 5.9-0.2 7.5-1.8 1.1-1.1 3.1-1.9 4.5-1.9 1.4 0 3.3 0.6 4.3 1.3 1.1 0.7 1.7 2.2 1.5 3.7-0.1 1.4 0.1 3.1 0.5 3.7 0.4 0.7 2.2 1.3 3.9 1.3 1.8 0 5 0.5 7 1 2.8 0.7 4.4 2 5.8 4.5 1.9 3.4 2.1 3.5 6.7 2.9 3-0.4 6.7-1.9 9.8-4 2.7-1.9 5.6-3.4 6.2-3.4 0.7 0 3.4-1.1 6-2.6 2.7-1.4 5.2-2.9 5.8-3.5 0.5-0.5 2-0.9 3.5-0.9 1.5 0 3.7 1.2 5.5 3 2.9 2.9 3.3 3 12 3 4.9 0 11.5-0.5 14.5-1.1 3-0.5 10.8-1 17.2-1 7.8 0.1 12.7 0.6 14.5 1.5 1.6 0.7 3.1 2.1 3.5 3 0.6 1.1 2.5 1.8 6 2.1 2.9 0.3 7.1 0.7 9.3 0.9 2.2 0.2 5.8 1.1 8 2 2.2 0.9 5 1.6 6.2 1.6 1.3 0 2.3-0.6 2.3-1.3 0-0.6 0.7-2.8 1.7-4.7 0.9-1.9 4.3-6.1 7.5-9.3 3.9-3.9 6.6-5.7 8.3-5.7 1.4 0 2.9-0.8 3.4-1.8 0.4-0.9 2-2 3.5-2.5 1.4-0.4 3-1.8 3.6-3.2q1-2.5 0-5c-0.6-1.4-3.5-5-6.5-8-3-3-6.1-5.4-6.9-5.3-0.8 0.2-2.6-0.9-4-2.5-2.5-2.6-2.7-2.6-4.6-1-1.2 1.1-2.6 1.5-3.5 1-0.8-0.4-1.4-1.3-1.2-2 0.2-0.6 1.3-1.3 2.5-1.5 1.6-0.1 2.1-0.8 1.9-2.5-0.2-1.9-0.8-2.2-4.7-2.3-2.5 0-6-0.4-7.8-0.7-1.8-0.4-3.1-1.2-2.9-2 0.2-0.7 2.3-1.3 4.8-1.5 2.8-0.2 4.7 0.2 5.1 1 0.6 1 1.3 1 3.5-0.2 1.5-0.8 3-2.6 3.3-4 0.5-2 1.3-2.6 4-2.9 1.9-0.2 4.1-1 4.7-1.7 0.7-0.8 1-1.7 0.5-2-0.4-0.3 0.2-1.2 1.3-1.9 1.7-1.1 2.6-1.1 5.5 0.2 1.9 0.9 4.3 1.3 5.2 0.9 1-0.3 2.2-2.1 2.7-3.9 0.4-1.7 1.3-3.1 2-3 0.6 0.2 1.4-0.5 1.8-1.5 0.4-0.9 1.9-2.7 3.3-4 1.4-1.2 3.5-3.1 4.7-4.2 1.3-1.1 2.3-2.7 2.3-3.5 0-0.8 0.7-2.6 1.5-4 1-1.6 2.4-2.5 4-2.5 1.6 0 2.6-0.6 2.8-1.8 0.1-0.9-0.4-2.3-1.3-2.9-1.3-1.1-1.3-1.5 0.6-3 1.1-1 2.5-2.9 3.1-4.3 0.5-1.4 0.8-3.1 0.6-3.8-0.1-0.6-1.5-1.2-3.1-1.2-1.5-0.1-3.3 0.6-4 1.5-0.6 0.8-1.6 1.3-2.2 1-0.6-0.3-0.9-1.3-0.8-2.3 0.2-1.1-0.2-1.6-1.2-1.4-1.3 0.3-1.4-0.6-0.8-5.7l0.8-6.1c-10.5 1.3-12.1 1.2-13.4 0-0.9-0.8-1.7-2.8-1.6-4.5 0-1.7 0.9-4.5 2-6.3 1.4-2.2 1.8-4.2 1.5-6.5-0.4-2.5-1.9-4.2-7.2-8.2-3.6-2.8-8.2-5.9-10.2-7-2.7-1.4-5.6-1.9-11.3-2-6.5 0-8-0.3-10-2.2-1.3-1.3-3.2-2.2-4.3-2.2-1.1 0-3.9-1.8-6.3-4.1-2.3-2.2-4.6-4-5.2-4-0.6 0-1.9-1.3-3-3-1.6-2.4-2.7-3-5.5-3-1.9 0-4.3-0.4-5.3-0.9-0.9-0.4-3.7-1.8-6.2-2.9-2.5-1.2-6.1-2.6-8-3.2-1.9-0.5-6.2-1.2-9.5-1.5-3.3-0.2-6.7-0.7-7.6-1-0.9-0.3-2.2 0.2-3 1z", GHS:"m362.1 248.9c-1.7 0.9-5.4 2.9-8.3 4.5-2.9 1.6-6.7 3.9-8.3 5.1-1.6 1.2-5.3 3-8 4-2.8 1.1-7.5 1.9-10.5 1.9-3.6 0.1-6.3-0.5-8-1.7-1.4-1-4.2-1.7-6.5-1.7-2.2 0.1-6 0.6-8.5 1.3-2.5 0.7-6.4 2.5-8.8 4-2.3 1.5-4.2 3.1-4.2 3.7 0 0.6-1 1.4-2.3 1.9-1.2 0.5-4.9 1.9-8.2 3.2-3.3 1.2-6.6 2.9-7.3 3.8-0.8 0.9-2.8 1.8-4.5 2.1l-3.2 0.6c-0.9 23.1-1.4 26.4-2.8 28.4-0.9 1.4-1.7 3.2-1.7 4 0 0.8-0.9 2.4-2 3.5-1.1 1.2-2.1 3.7-2.2 6-0.3 3.8-0.2 4 3.1 4.5 1.9 0.3 3.7 1.2 4.1 2 0.4 0.8 1.8 3.5 3 6 1.2 2.5 2.4 6.3 2.7 8.5 0.3 2.2 1 4.9 1.6 6 0.6 1.1 1.4 3.8 1.7 6 0.5 3.4 0.9 4 2.8 3.7 1.4-0.1 2 0.2 1.7 1-0.4 0.8 1.4 2 4.7 3.3 3.2 1.1 7 3.7 9.5 6.2 2.4 2.4 4.3 4.6 4.3 5 0 0.5 1.9 1.9 4.3 3.2 2.3 1.3 5.3 2.6 6.7 2.8 1.4 0.2 5 1.1 8 1.9 3 0.8 8.9 1.4 13 1.3 4.1 0 9.5 0.5 12 1.3 3.2 0.9 6.5 3.2 11.5 8.1 3.9 3.7 8.1 7 9.5 7.3 1.4 0.3 3.3 0.9 4.2 1.5 1 0.5 2.5 0.9 3.3 0.9 0.8 0 1.5-0.8 1.5-1.8 0.1-1.3 0.8-0.9 3 1.5 1.7 1.8 3.3 3.2 3.7 3.1 0.5-0.1 2.6 0.4 4.8 1 2.2 0.7 4.2 1.2 4.5 1.2 0.3 0 1.1-1.2 1.8-2.7 0.7-1.5 1-3 0.7-3.3-0.3-0.3-0.1-0.9 0.4-1.5 0.6-0.6 1.3-5.3 1.7-10.5 0.6-8.1 1.1-10 3.3-12.7 1.4-1.8 3.2-3.3 3.8-3.3 0.7 0 2.1-1.5 3.2-3.3 1.3-2.2 2.1-6.3 2.6-12.7 0.3-5.2 1-14.7 1.3-21.1 0.7-10.8 0.9-11.9 3.7-15.7 1.6-2.3 4-5.6 5.3-7.4 1.5-2.2 2.2-4.2 1.8-5.8-0.3-1.4 0-3.9 0.6-5.5 1-2.6 0.8-3.4-1.1-6-1.2-1.6-2.2-3.6-2.1-4.3 0-0.6-0.5-1.2-1-1.2-0.6 0-1.2-0.7-1.5-1.5-0.3-0.8 0.1-2.4 0.7-3.5 1.1-1.6 1-2.4-0.1-4.3-0.8-1.2-3.1-4.9-5.1-8.2-2-3.3-4.4-8.5-5.3-11.5-1-3-1.7-7.2-1.7-9.3 0-2.6-0.4-3.7-1.5-3.7-0.8 0-1.7 0.4-2 1-0.3 0.6-1.5 1-2.7 1-1.3 0-3.3 1.2-4.5 2.7-1.3 1.6-2.3 3.4-2.3 4 0 0.8-1.3 1.3-3 1.3-2.4 0-3.5-0.8-5.4-3.8-1.2-2-3.1-4.4-4.1-5.2-1-0.8-3.3-2-5.2-2.6-2.6-0.9-3.9-0.8-6.2 0.5z", AL:"m345.4-0.3c-2.5 0.3-3.2 1-3.8 3.6-0.4 1.8-0.7 4.1-0.6 5.2 0.1 1.1 0.2 3.3 0.1 5-0.1 3-0.1 3-7.3 3.7-4.4 0.4-7.6 1.2-8 2-0.5 1-1.8 1.1-5 0.5-3.2-0.5-4.9-0.3-6.5 0.8-1.3 0.8-3 1.3-3.8 1-0.8-0.3-1.5-1.6-1.5-3 0-1.6-0.6-2.5-1.5-2.5-0.9 0-1.5-0.9-1.5-2.3 0-1.7-0.7-2.4-3.2-3-1.8-0.4-4.5-0.7-6-0.7-2.7 0-2.8 0.1-2.3 4.5 0.3 2.5 0.2 4.5-0.2 4.5-0.5 0-0.7 1-0.5 2.3 0.3 1.6-0.7 2.9-3.7 4.9-2.3 1.6-4.5 2.8-5.1 2.8-0.5 0-1.3 1-1.6 2.2-0.3 1.3-0.3 3.4 0.1 4.8 0.4 1.4 0.4 4 0.1 5.7-0.4 2-1.2 3.3-2.1 3.3-0.8 0-1.8 0.7-2.2 1.4-0.6 1.2-1.7 1.3-4.8 0.6-2.2-0.4-6.6-0.5-9.8-0.2-4.3 0.5-5.7 0.4-5.7-0.6 0-0.6-1-1.1-2.2-1-1.1 0.2-2.3 1.1-2.5 2-0.2 1.4-1.3 1.8-4.8 1.8-4.3 0-4.7 0.3-8 5-2.3 3.2-4 4.8-5 4.5-0.8-0.3-2.4 0.4-3.5 1.5-2 2-2 2.1-0.2 4.7 1 1.6 2.2 3.7 2.6 4.8 0.3 1.1 0.1 3.2-0.6 4.8-0.7 1.5-1.9 2.7-2.5 2.7-0.7 0-3 0.8-5 1.7-2.1 1-3.9 2.1-4 2.5-0.2 0.5-1.3 0.8-2.5 0.8-1.3 0-4.5-0.7-7.3-1.6-2.7-0.9-5.8-2.3-6.7-3-1.6-1.2-2.1-1.1-4 0.6-1.3 1.1-3.2 2.2-4.3 2.4-1.1 0.3-4.9 1.8-8.5 3.4-3.6 1.6-6.8 3.6-7.2 4.3-0.3 0.8-0.1 3.4 0.5 5.7 0.7 2.4 2.4 5.8 3.8 7.5 2.6 3.1 3 3.2 10.5 3.2 5.9 0.1 8.8 0.6 11.5 2 2 1.1 6.6 4.2 10.2 7 5.3 4 6.8 5.7 7.2 8.3 0.3 2.2-0.1 4.2-1.5 6.4-1.1 1.8-2 4.6-2 6.3 0 1.7 0.5 3.6 1.2 4.3 0.7 0.7 2.7 1.2 4.3 1.2 1.7 0 4.5-0.3 6.3-0.7 1.9-0.5 3.2-1.4 3.2-2.3 0-0.8 1-2.5 2.2-3.7 1.3-1.3 2.6-2.3 3.1-2.3 0.4 0 4.2 3.3 8.5 7.4l7.7 7.4c20.9 1.2 21.8 1.1 26.5-1.3l5-2.5v-15.5c13.5-18.6 14-19.1 19.6-20.8l5.9-1.8c4.6 4.7 6.3 6.1 6.8 6.1 0.4 0 4-2.5 8-5.6 4.3-3.4 7.5-6.7 8-8.3 0.4-1.4 0.3-6.2-0.3-10.6-1.1-7.8-1-8.2 2.4-18.5 2-5.8 4.6-13.2 5.8-16.5l2.4-6c26.9-16 30.2-18.4 29.8-19.8-0.3-1.2 0.2-1.7 1.9-1.7 1.2 0 2.9-0.4 3.7-0.9 0.9-0.6 1.2-1.5 0.8-2.5-0.6-1.2-0.2-1.6 1.7-1.6 1.6 0 2.5-0.6 2.5-1.5 0-0.8-0.6-1.5-1.2-1.5-0.7 0-2.4-1.1-3.8-2.5-1.5-1.5-3.6-2.5-5.2-2.5-1.6 0-3-0.4-3.3-1-0.3-0.6-2.9-2.1-5.7-3.5-2.9-1.3-6.5-2.5-8-2.5-1.6 0-3-0.5-3.3-1-0.3-0.6-2.3-1-4.5-1-2.2 0-4-0.5-4-1 0-0.6-0.6-0.9-1.2-0.8-0.7 0-2.7 0.3-4.4 0.5zm-55.9 188.3c-0.3 0.5-0.4 1-0.2 1.1 0.1 0 2.3 0.1 4.9 0.2 2.7 0.1 4.8-0.1 4.8-0.6 0-0.4-0.7-0.9-1.5-1.2-0.8-0.3-2.8-0.5-4.5-0.5-1.6 0-3.1 0.4-3.5 1zm-10.8 178c-1 1.2-1.3 2.2-0.7 2.5 0.6 0.3 1 0.3 1 0 0-0.3 1.4-0.1 3 0.5 2.8 0.9 3 0.8 3-1.5 0-1.4-0.4-2.5-1-2.5-0.5 0-1.6-0.2-2.3-0.5-0.7-0.3-2.1 0.3-3 1.5zm55.3 21c0 1.5 1.3 2.5 4.7 3.7 2.6 1 7.4 4.2 10.5 7 5.7 5.2 5.8 5.2 6.1 2.7 0.1-2-1-3.7-5.4-7.7-3.3-3.1-7.2-5.7-9.7-6.5-2.3-0.6-4.6-1.2-5.2-1.2-0.5 0-1 0.9-1 2zm53.7 19.9c-0.4 1.2-1.3 2.1-1.9 2.1-0.7-0.1-3-0.7-5-1.4-2.1-0.8-4-1.1-4.3-0.7-0.2 0.3-0.1 0.9 0.3 1.4 0.4 0.4 1.5 0.7 2.5 0.7 0.9 0 1.5 0.4 1.2 1-0.3 0.6 1.7 1 5 1 4.6 0 5.5-0.3 5.7-1.9 0.2-1-0.4-2.4-1.3-3-1.3-1-1.7-0.8-2.2 0.8zm41.5 13.8c-0.7 1.6-1.2 3.1-1.2 3.5 0 0.5 2.3 0.8 5 0.8 3.4 0 5.2-0.5 5.8-1.5 0.4-0.9 0-2.3-1.3-3.5-1.1-1.2-3.1-2.1-4.5-2-1.8 0-2.9 0.8-3.8 2.7zm125.7 6.6c-1.4 0.7-3.4 1.9-4.3 2.7-0.9 0.8-1.7 2.5-1.6 3.7 0 1.8 0.5 2.2 2.3 2 1.2-0.1 2.7-1.2 3.2-2.5 0.5-1.2 1.9-2.5 3-2.8 1.3-0.3 2.6 0.2 3.8 1.5 1.3 1.7 2.1 1.9 3.7 1.1 1.1-0.6 2-1.3 2-1.8 0-0.4-1-1.7-2.2-2.9-1.3-1.3-3.4-2.2-4.8-2.2-1.4 0-3.7 0.6-5.1 1.2z", BA:"m347.4 229c0.1 6.4 0.4 8 1.6 8 0.8 0 2.1 0.5 2.8 1.2 0.7 0.7 1.2 2.4 1.2 3.8 0 1.4 0.8 4.2 1.8 6.2 0.9 2.1 1.9 3.8 2.2 3.8 0.3 0.1 1.1-0.6 1.8-1.5 1-1.2 0.9-2-0.5-4.3-1-1.5-1.9-4.5-2-6.7-0.2-2.5-1-4.6-2.2-5.5-1-0.8-2.2-2.5-2.5-3.8-0.4-1.6-0.2-2.2 0.9-2.2 0.8 0 1.5-0.4 1.5-1 0-0.6-0.7-0.8-1.5-0.5-0.9 0.3-1.5-0.1-1.5-1 0-0.8 0.8-1.5 1.8-1.5 0.9-0.1 0.1-0.7-1.8-1.6-1.9-0.8-3.5-1.4-3.6-1.4-0.1 0-0.1 3.6 0 8zm-103.8 9.5c-1 0.9-1.7 2.6-1.7 3.8 0.1 1.3-1.2 3.3-3.1 4.9-2.5 2.1-2.9 2.8-1.5 2.8 0.9 0 2.8-1.2 4.2-2.8 1.4-1.5 2.5-3.6 2.5-4.7 0-1.1 0.5-2.6 1.2-3.2 0.7-0.7 1-1.5 0.7-1.8-0.3-0.3-1.3 0.1-2.3 1zm-153.1 15.4c-0.6 0.6-3.1 2.1-5.7 3.5-2.7 1.5-5.4 2.6-6 2.6-0.7 0-3.3 1.4-5.8 3.2-2.7 1.9-6.5 3.5-9.3 4-2.7 0.4-5.2 1.2-5.5 1.7-0.4 0.5-2.5 1.3-4.6 1.8-2.1 0.4-4.1 1.4-4.3 2-0.1 0.7 1.1 4.1 2.7 7.5 2.1 4.4 3 7.8 3 11.1 0 3.8-0.4 5-2.2 6-1.3 0.8-3.1 2.2-4.2 3.3-1.5 1.5-1.7 2.8-1.2 6.7 0.5 4 0 6.1-3.4 14.4-2.2 5.4-4 10.2-4 10.8 0 0.6 1.9 3.2 4.2 5.8 4.2 4.8 4.4 4.9 12.3 5.8 4.4 0.6 9.7 1 11.8 0.9 3.2 0 3.8 0.4 4.2 2.5 0.3 1.4 2 3.9 3.8 5.5 1.7 1.7 3.5 3 4 3 0.4 0 2.2 1.1 4 2.5 1.7 1.3 3.9 2.5 4.7 2.5 0.8 0 3.3-0.6 5.5-1.5 2.2-0.9 4.8-2 5.8-2.5 0.9-0.6 3.2-0.7 5-0.4 2.8 0.6 3.4 0.3 4.7-2.2 1.5-2.9 1.6-2.9 11.3-3.2 8.2-0.2 10.3 0.1 13.2 1.8 1.9 1.1 4.3 1.9 5.3 1.9 0.9-0.1 3.5-0.1 5.6 0 2.2 0 3.6 0.4 3.3 0.8-0.3 0.5 0.3 2.5 1.3 4.5 1.4 2.7 3.3 4.4 6.5 5.8 3.8 1.7 5.4 1.9 10.3 1.1 3.1-0.5 6.6-1.3 7.7-1.9 1.1-0.5 3.5-0.8 5.3-0.6 2 0.3 3.2 1 3.2 1.9 0 0.8 0.6 1.5 1.3 1.5 0.6 0 2.3-0.6 3.7-1.3 1.4-0.7 4.5-1.8 7-2.4 2.5-0.6 8.9-1.2 14.3-1.2 5.3-0.1 10-0.2 10.5-0.3 0.4-0.1 7.5 0.1 15.7 0.5 8.3 0.4 20.9 1.7 28 2.8 12.5 1.9 13.1 2 14.8 0.2 1-1 1.8-2.1 1.7-2.5 0-0.5-0.7-0.8-1.5-0.8-0.9 0-1.3-0.6-1-1.5 0.4-1.1-0.1-1.4-1.7-1.3-1.9 0.3-2.3-0.3-2.8-3.7-0.3-2.2-1.1-4.9-1.7-6-0.6-1.1-1.3-3.8-1.6-6-0.3-2.2-1.5-6-2.7-8.5-1.2-2.5-2.6-5.2-3-6-0.4-0.8-2-1.7-3.6-1.8-1.6-0.2-3.5-0.8-4.1-1.3-0.8-0.5-1.5-0.5-1.8 0.1-0.3 0.6-2.7 1-5.5 1-3.2 0-6.9-0.9-10.2-2.4-2.9-1.3-6.2-3.4-7.3-4.5-1.1-1.2-3.1-2.4-4.5-2.7-1.4-0.3-3.5-1.5-4.8-2.7-1.2-1.2-2.3-3.1-2.3-4.2 0-1.1-0.6-3.1-1.4-4.5-0.8-1.4-1.4-3.6-1.4-5 0-1.4-0.8-3.2-1.7-4-0.9-0.8-2.1-2.5-2.5-3.7-0.6-1.6-1.7-2.3-3.6-2.3-1.6 0.1-3.3-0.5-4-1.2-0.6-0.7-1.3-2.4-1.5-3.8-0.2-1.7-1.5-3.1-4.3-4.6-3.9-2-4-2.2-4.5-8l-0.5-5.9c-6.2-0.9-9.3-1.8-11-2.5-1.6-0.7-4.8-1.4-7-1.6-2.2-0.2-6.4-0.6-9.2-0.9-3.6-0.3-5.5-1-6-2.1-0.5-0.9-2-2.3-3.5-3-1.9-0.9-6.8-1.4-14.5-1.5-6.5 0-14.3 0.5-17.3 1-3 0.6-9.5 1.1-14.5 1.1-8.7 0-9.1-0.1-12-3-1.8-1.8-4-3-5.5-3-1.5 0-3 0.4-3.5 0.9z", GI:"m515.6 322.5c-0.4 0.9-2.5 1.8-5.4 2.1-2.6 0.4-6.5 1.7-8.7 2.9-2.2 1.2-5.2 2.5-6.8 2.8-1.5 0.4-4.7 2.3-7.2 4.2-2.5 1.9-5.7 4-7.3 4.6-1.5 0.5-9.6 1-18.2 1-8.5-0.1-18 0.3-21 0.9-3 0.5-6.9 1.6-8.5 2.4-2.1 1.1-4.3 1.3-7.5 0.9-2.5-0.4-5.5-1.6-6.6-2.8-1.2-1.1-4-3.5-6.3-5.3-2.2-1.7-4.7-3.2-5.4-3.2-0.8 0-1.4 2.9-2 9.2-0.4 5.1-1.1 13.4-1.5 18.3-0.5 5.7-1.4 10-2.5 11.8-0.9 1.5-2.3 2.7-3 2.7-0.6 0-2.4 1.5-3.8 3.3-2.2 2.7-2.7 4.6-3.3 12.7-0.4 5.2-1.1 9.9-1.6 10.5-0.6 0.6-0.3 2.2 0.6 4 0.8 1.6 1.4 4.9 1.4 7.3 0 2.3 0.6 5.2 1.4 6.5 1.2 1.8 2.8 2.3 8.5 3 5.3 0.5 7.8 0.3 9.8-0.7 1.6-0.8 7.7-1.9 13.8-2.5 10.1-1 11.2-1 12.8 0.6 1 1 1.7 2.7 1.5 3.8-0.2 1.4 0.3 2.1 1.7 2.3 1.6 0.2 1.9-0.3 1.7-2.3-0.2-2.4 0-2.5 3.5-1.8 2.1 0.3 4.8 0.9 6 1.2 1.3 0.3 2.3 1 2.3 1.6 0 0.6-1.6 1.2-3.6 1.5l-3.7 0.5c7.2 3.5 9.5 4.5 9.8 4.5 0.3 0 0.5-0.7 0.5-1.5 0-0.8 0.4-1.5 1-1.5 0.5 0 1.8 0.9 2.7 2.1 1 1.1 3 2.7 4.5 3.5 1.8 0.9 2.8 2.2 2.8 3.7 0 1.2 1.3 3.4 2.8 4.9 2.2 2.2 3.3 2.6 5.7 2.1 1.6-0.3 3.6-1.1 4.3-1.7 0.7-0.6 1.3-1.5 1.3-2.1 0-0.6-1.2-0.7-3.1-0.3-2 0.6-3.2 0.4-3.6-0.5-0.4-0.6 0.3-2.3 1.5-3.7 1.2-1.4 2.9-4 3.9-5.8 0.9-1.8 2.3-3.2 2.9-3.2 0.8 0 1.1-0.8 0.8-2-0.3-1.1-0.1-2.2 0.5-2.5 0.5-0.3 1-1.3 1-2.3-0.1-0.9 1.1-2.2 2.7-2.9 1.5-0.6 3.8-1.4 5-1.7 1.3-0.3 2.3-1 2.3-1.6 0-0.6 0.8-0.8 1.7-0.6 1 0.3 2 0.5 2.3 0.6 0.3 0.1 1.6 0.1 3 0 1.4 0 3.7 0.4 5.2 0.9 2.2 0.9 3.3 0.8 5-0.4 1.8-1.1 3.2-1.2 6.8-0.4 2.5 0.6 5.4 1.6 6.5 2.2 1.1 0.6 2.6 1 3.2 0.9 0.7-0.1 1.3 0.4 1.3 1-0.1 0.7 1.7 3.1 3.9 5.3 2.2 2.2 4 4.7 4 5.5 0 0.8 0.8 2.3 1.8 3.3 1 0.9 2 1.5 2.3 1.2 0.3-0.3 1.2 0.2 2 1 0.8 0.9 2.1 1.6 2.7 1.5 0.7 0 1.3-1 1.3-2.3-0.1-1.2 0.7-2.9 1.7-3.8 1-0.8 3-2.1 4.5-2.7 1.6-0.7 3.8-1.2 5-1.2 1.3-0.1 3.2 0.9 4.3 2 1.1 1.1 2.8 2.1 3.7 2 1 0 1.7-0.6 1.5-1.3q-0.2-1.2 3-1l3.3 0.3c0-16.6-0.4-19.4-1.5-20.5-0.8-0.8-2.4-1.5-3.5-1.5-1.1 0-3.4-1.2-5.1-2.8-1.9-1.7-2.8-3.2-2.4-4.2 0.4-0.8 0.8-2 0.8-2.6 0.1-0.6 0.8-1.8 1.4-2.7 0.9-1.1 1-2.3 0.4-3.4-0.5-1-1.5-2.3-2.2-3-0.8-0.7-1.2-2.2-1-3.5 0.2-1.3-0.2-4-0.8-6-0.8-2.9-2-4.2-4.9-5.5-2-1-4.3-3-5-4.5-0.6-1.6-1.9-2.8-2.7-2.8-0.9 0-1.3-0.6-1-1.5 0.3-0.8-0.4-2.5-1.6-3.8-1.1-1.2-3.6-4.3-5.5-7-2.6-3.6-3.3-5.4-2.9-7.7 0.3-1.6 1-3 1.5-3 0.5 0 1-0.7 1-1.5 0-0.8-0.7-1.5-1.5-1.5-0.8 0-1.5-0.9-1.5-2 0-1.1-1.2-3.1-2.8-4.5-2.1-2-2.3-2.5-1-2.5 1.7 0 1.6-0.2-0.2-3-1.1-1.6-2-3.4-2-4 0-0.6-0.7-1.2-1.5-1.5-0.8-0.3-4.4-0.5-7.9-0.5-4.8 0-6.6 0.4-7 1.5z", LN:"m419 209.5c-1.7 2-3.6 2.8-6.6 3-2.3 0.2-5 1.1-5.9 1.9-0.9 0.9-2.1 1.6-2.6 1.6-0.5 0-1.1 0.8-1.4 1.8-0.3 0.9-0.1 2.8 0.4 4.2 0.6 1.6 0.5 4.1-0.1 7-0.6 2.5-1.5 6.4-2.2 8.8-0.8 3.2-1.6 4.2-3.1 4.2-1.1 0-1.7 0.3-1.3 0.7 0.4 0.5-0.1 1.5-1.1 2.3-1 0.8-2.3 2.5-2.9 3.7-0.7 1.3-1.2 2.5-1.2 2.8 0 0.3 0.9 0.5 2 0.5 1.1 0 2.2-0.4 2.5-1 0.3-0.6 1.2-1 2-1 1.1 0 1.5 1.1 1.5 3.7 0 2.1 0.7 6.3 1.7 9.3 0.9 3 3.3 8.2 5.3 11.5 2 3.3 4.3 7 5.1 8.2 1.1 1.9 1.2 2.7 0.2 4.3-0.7 1.1-1.1 2.7-0.8 3.5 0.3 0.8 0.9 1.5 1.5 1.5 0.6 0 1 0.6 1 1.2-0.1 0.7 0.9 2.7 2.1 4.3 1.9 2.6 2.1 3.4 1.1 6-0.6 1.6-0.9 4.1-0.6 5.5 0.3 1.5-0.3 3.7-1.6 5.5-1.1 1.6-3.6 5.2-5.5 8-2.1 2.9-3.6 6.2-3.5 7.7 0 1.8 0.5 2.8 1.5 2.8 0.8 0 3.4 1.5 5.6 3.2 2.3 1.8 5.1 4.2 6.3 5.3 1.1 1.2 4.1 2.4 6.6 2.8 3.2 0.4 5.4 0.2 7.5-0.9 1.6-0.8 5.5-1.9 8.5-2.4 3-0.6 12.5-1 21-0.9 8.6 0 16.7-0.5 18.3-1 1.5-0.6 4.6-2.6 7-4.4 2.3-1.8 5.3-3.7 6.7-4.1 1.4-0.4 4.9-1.9 7.8-3.4 2.8-1.5 5.4-3.3 5.7-4 0.3-0.6 0.1-2-0.4-3-0.6-1-0.6-3.4 0-6.2 0.6-2.5 1.6-4.8 2.2-5.2 0.9-0.5 0.9-1-0.1-2-0.9-0.9-1.2-3.1-0.8-7.3 0.3-3.3 0.9-8.1 1.3-10.7 0.8-4.5 0.7-4.7-2.9-8-2.9-2.6-3.6-3.8-3.2-5.8 0.3-1.4 1.1-3.6 1.7-5 0.7-1.4 2-3.1 3-3.8 0.9-0.6 2.1-3 2.7-5.2 0.9-3.5 0.7-4.6-1.5-8.8-1.4-2.6-2.5-5.1-2.5-5.7 0-0.6 1.6-2 3.5-3.3 3.1-2 3.4-2.5 2.9-5.5-0.4-1.7-0.9-3.5-1.3-3.9-0.3-0.4-1.7-0.8-3.1-0.9-1.4-0.1-4-0.1-5.7-0.1-2.9 0.2-3.4 0.6-3.9 3.4-0.4 2.1-0.2 3.4 0.5 3.5 0.6 0.2 1.1 0.7 1.1 1.3 0 0.6-0.7 1-1.5 1-0.8 0-1.5 0.4-1.5 1 0 0.6-1.7 1.3-3.7 1.6-2.1 0.3-5.4 1.3-7.3 2.2-1.9 0.8-6.3 1.6-9.8 1.6-5.2 0.1-6.2 0.4-6.2 1.8 0 1-0.6 2-1.2 2.2-0.7 0.2-2.6 0.1-4.2-0.3-1.6-0.3-3-0.9-3.2-1.4-0.2-0.4-1.2-0.7-2.1-0.7-1 0.1-2.5-0.6-3.3-1.5-1.3-1.4-1.3-1.6 0-1.5 0.8 0 2.7-1.2 4.2-2.7 2.1-2.2 2.8-3.8 2.8-7.1 0-2.3 0.4-4.2 1-4.2 0.6 0 1-0.7 1-1.5 0-0.8-0.8-1.9-1.7-2.4-1-0.4-2.8-2.5-4-4.5-1.7-2.6-3-3.6-4.8-3.6-1.6 0-2.5 0.6-2.5 1.5 0 0.8-0.4 1.7-1 2-0.6 0.3-1.7-0.1-2.6-0.8-0.9-0.6-2.3-2.7-3.2-4.6-1-1.8-2.8-3.9-4.2-4.7-1.4-0.7-4.1-2.1-6-3-1.9-0.9-4.3-2-5.2-2.5-1-0.5-3.5-1.2-5.5-1.5-3.2-0.5-4.2-0.2-6.3 2.1z", GL:"m299 189c0 0.6-1.3 0.8-3 0.4-1.6-0.3-3.8-0.1-5 0.5-1.1 0.6-2 1.8-2 2.6 0 0.8-0.9 2.4-2 3.5-1.6 1.6-2.8 1.9-6.3 1.4-2.3-0.4-4.6-1.2-5.2-2-0.6-0.7-1.4-1.3-2-1.4-0.5 0-3 1.8-5.5 4-2.5 2.2-4.8 4-5.3 4-0.4 0-2.5 1.3-4.7 3-3.2 2.4-3.9 3.5-3.4 5.3 0.3 1.2-0.1 4.1-0.8 6.4q-1.3 4.3-0.3 5.3 1 1.1-0.5 1.9c-0.8 0.5-1.2 1.4-0.8 2 0.5 0.6-0.7 2.8-2.7 5.1-1.9 2.2-3.5 4.9-3.5 6 0 1.1-0.4 2.2-1 2.5-0.6 0.3-1 1.5-1 2.8 0.1 1.2-1.1 3.4-2.5 5-1.4 1.5-3.2 2.7-4 2.7-0.8 0-2.2 0.2-3 0.5-1 0.3-1.5-0.1-1.4-1.2 0-1-0.4-3.4-0.8-5.3-0.7-2.8-1.5-3.7-4.3-4.5-1.9-0.6-4.1-1.3-4.8-1.8-0.8-0.4-1.6 0.2-2.2 1.8-0.6 1.4-2.2 2.8-3.6 3.3-1.5 0.4-3.1 1.5-3.5 2.5-0.5 0.9-2 1.7-3.4 1.7-1.7 0-4.4 1.8-8.3 5.8-3.2 3.1-6.7 7.5-7.7 9.7-1.4 3.1-1.5 4.4-0.7 6 0.7 1.1 1.3 4.2 1.4 6.9 0.3 4.7 0.5 5.1 4.3 7 2.8 1.5 4.1 2.9 4.3 4.6 0.2 1.4 0.9 3.1 1.5 3.8 0.7 0.7 2.4 1.3 4 1.2 1.9 0 3 0.7 3.6 2.3 0.4 1.2 1.6 2.9 2.5 3.7 0.9 0.8 1.7 2.6 1.7 4 0 1.4 0.6 3.6 1.4 5 0.8 1.4 1.4 3.4 1.4 4.5 0 1.1 1.1 3 2.3 4.2 1.3 1.2 3.4 2.4 4.8 2.7 1.4 0.3 3.4 1.5 4.5 2.7 1.1 1.1 4.4 3.2 7.3 4.5 3.1 1.4 7.1 2.4 10 2.4 2.6 0.1 5.2-0.5 5.9-1.2 0.7-0.7 1.5-2.7 1.8-4.3 0.3-1.6 1.4-3.9 2.6-5 1.1-1.1 1.9-2.7 1.9-3.5 0-0.8 0.8-2.6 1.7-4 1.4-2 1.9-5.3 2.3-15.5l0.5-12.9c4.9-0.9 6.9-1.8 7.7-2.7 0.7-0.9 4-2.6 7.3-3.8 3.3-1.3 7-2.7 8.3-3.2 1.2-0.5 2.2-1.3 2.2-1.9 0-0.6 1.9-2.2 4.3-3.7 2.3-1.5 6.2-3.3 8.7-4 2.5-0.7 6.3-1.2 8.5-1.3 2.3 0 5.1 0.7 6.5 1.7 1.7 1.2 4.4 1.8 8 1.7 3 0 7.8-0.8 10.5-1.9 2.8-1 7.3-3.4 10-5.2 2.8-1.8 5.9-3.9 7-4.7 1.9-1.4 1.9-1.6 0.3-4.5-1-1.7-1.8-4.3-1.8-5.8 0-1.6-0.5-3.4-1.2-4.1-0.7-0.7-2.1-1.2-3-1.2-1 0-2 0.6-2.1 1.3-0.3 0.9-1.1 0.9-3.2 0.2-1.6-0.6-3-1.6-3.2-2.2-0.2-0.7 0.4-1.3 1.2-1.3 0.8 0 1.9-0.9 2.5-2 0.6-1.1 0.8-3.2 0.5-4.7-0.3-1.6-2.2-4.4-4.2-6.4-2.1-1.9-5.4-4.7-7.3-6.1-1.9-1.4-4.7-3.1-6.2-3.7-1.9-0.7-3.5-2.7-4.8-5.6-1.3-2.9-2.6-4.5-3.7-4.5-1 0.1-2.6-0.7-3.5-1.7-1.3-1.3-1.6-2.7-1.2-4.8q0.7-3-0.7-3.9c-0.8-0.5-3.8-1.5-6.7-2.3-2.9-0.7-5.7-1.3-6.3-1.3-0.5 0-0.9 0.4-0.9 1z"};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i;m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)

    campaignTrail_temp.questions_json = [
        {
            "model": "campaign_trail.question",
            "pk": 322,
            "fields": {
                "priority": 0,
                "description": "What will your speech be about as you accept the USP nomination in Arvory?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 321,
            "fields": {
                "priority": 0,
                "description": "You have selected USP assembly member, and longtime friend Petr Vectern to be your running mate. Can you explain why?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 256,
            "fields": {
                "priority": 1,
                "description": "Your opponents are the PFJP's Frens Ricter, and the NFP's Kesaro Kibner. How will you address them in this campaign?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 338,
            "fields": {
                "priority": 1,
                "description": "By far the biggest issue of this election is the economy, which has been in a downward spiral-turned recession since Alphonso took over. What is your plan for it?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 326,
            "fields": {
                "priority": 1,
                "description": "Another massive issue of the campaign is the Rumburg threat, as tensions have been growing rapidly recently. How will you deal with them?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 255,
            "fields": {
                "priority": 1,
                "description": "What is your opinion of Tarquin Soll?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 254,
            "fields": {
                "priority": 1,
                "description": "There is a massive push for Bludish rights in Sordland following the ever-growing WPB and the Izzam incident. Where do you stand?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 290,
            "fields": {
                "priority": 2,
                "description": "What is your stance on the privatization of businesses in Sordland?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 337,
            "fields": {
                "priority": 2,
                "description": "Your running mate Petr Vectern's competence has been called into question multiple times, given his known alcoholism, and frequency of showing up to meetings late. Do you have anything to say?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 292,
            "fields": {
                "priority": 2,
                "description": "Will you address the running mates of Ricter and Kibner, Manoly Suheil, and Remus Holstron at all?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 260,
            "fields": {
                "priority": 2,
                "description": "There has been a growing movement in Sordland to replace Tarquin Soll's constitution of 1929 with a new constitution. Would you support this?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 323,
            "fields": {
                "priority": 2,
                "description": "It's time for the presidential debates vs Kesaro Kibner and Frens Ricter. Will you attend?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 268,
            "fields": {
                "priority": 2,
                "description": "Where would you like to visit in the middle of the campaign?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 289,
            "fields": {
                "priority": 2,
                "description": "Your wife, Monica, has made her views about Women's rights obvious while on the campaign trail, causing some controversy. Will you defend, or disagree with her?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 285,
            "fields": {
                "priority": 2,
                "description": "Petr's wife, Evelyn, has decided to open up an investigation into Petr's private life, as she believes he's not as clean as he claims.",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 288,
            "fields": {
                "priority": 2,
                "description": "A solution to the economic recession that's being suggested currently is seeking out new trade deals, particularly from countries such as Wehlen, Agnolia, Lespia, and Valgsland. Where do you stand on this issue?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 278,
            "fields": {
                "priority": 2,
                "description": "Remus Holstron, Kesaro Kibner's running mate, has made a gaffe on the campaign trail, stating that a Kibner administration would see the \"extermination of the Bludish people one way or another.\" Any comments?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9310,
            "fields": {
                "priority": 0,
                "description": "The controversial 10% assembly threshold has come back into the forefront, as WPB and CPS candidates Denis Stahler and Fetah Ejall polling dangerously close to the 10% they need to get their parties into the assembly. How do you feel about the threshold, and would you modify it?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9311,
            "fields": {
                "priority": 2,
                "description": "There has been a rise in crime over the Alphonso administration, so many would like to know your stance on law and order?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9327,
            "fields": {
                "priority": 2,
                "description": "Immigration is becoming a big question in Sordland, with the NFP, Bludish immigrants, Wehzek affairs, and the Rumburg threat being key reasons why. Where do you stand?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9340,
            "fields": {
                "priority": 2,
                "description": "Another proposed solution for the economic crisis in Sordland is new infrastructure. Would you support the construction of new projects?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9354,
            "fields": {
                "priority": 2,
                "description": "The Vice Presidential Debates between Vectern, Suheil, and Holstron are tonight. WIll Petr attend?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9371,
            "fields": {
                "priority": 2,
                "description": "The second debate between you, Ricter, and Kibner is today. Will you attend?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9388,
            "fields": {
                "priority": 2,
                "description": "BIG NEWS FOR YOUR CAMPAIGN. October Surprise: Manoly Suheil has begun openly contradicting and criticizing Frens Ricter on the campaign trail, specifically for his Free-Market economy plan, causing the Ricter campaign to internally implode. Would you like to capitalize on this?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9406,
            "fields": {
                "priority": 2,
                "description": "What is the final message you want to give to your supporters and the party as election day draws near?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9422,
            "fields": {
                "priority": -1,
                "description": "It's been a long and hard fought election campaign, but we're officially on the last day. Where do you want to visit on the last day of the campaign?",
                "likelihood": 1
            }
        },
        {
            "model": "campaign_trail.question",
            "pk": 9607,
            "fields": {
                "priority": 0,
                "description": "BOMBSHELL: Denis Stahler is Jesus himself. How do you react?",
                "likelihood": 1
            }
        }
    ]
    
    campaignTrail_temp.answers_json = [
        {
            "model": "campaign_trail.answer",
            "pk": 1661,
            "fields": {
                "question": 254,
                "description": "I support Bludish rights. Many Bluds in Sordland are being treated like sub-humans because of a few bad eggs and it's just not fair. You don't deserve to be treated differently or unfairly because of your skin color."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1662,
            "fields": {
                "question": 254,
                "description": "I don't think this is a good idea. In doing this, we're giving people, such as the BFF the right to do whatever they want, and the next thing you know, they'll try to become independent from Sordland as their own country."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1663,
            "fields": {
                "question": 254,
                "description": "THEY LIVE IN SORDLAND SO THEY SHOULD SPEAK SORDISH! ONE NATION, ONE PEOPLE, ONE FLAG! FUCK THE PEOPLE OF \"Bludia\"! THE RAYNE ADMINISTRATION WILL HANDLE THEM WITH EASE!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1665,
            "fields": {
                "question": 255,
                "description": "Tarquin Soll is the greatest leader of our generation, and he was excellent in everything he did. He was the perfect leader, and I aspire to be like him."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1666,
            "fields": {
                "question": 255,
                "description": "Tarquin Soll was a tyrant who abused his powers, suppressed an entire people, and twisted his fame to get whatever he wanted. We should all make sure to not make the mistakes he did."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1667,
            "fields": {
                "question": 255,
                "description": "Although I admire Soll's military work and the good he did for our country by writing our constitution, I still think he made many mistakes, such as giving the judges legislative power, and the Izzam Incident."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1669,
            "fields": {
                "question": 256,
                "description": "Frens Ricter claims to be a bringer of change when in all reality, he'll only hold Sordland back. I am the true candidate for reform in this race, and my record as head reformist in the USP shows that."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1670,
            "fields": {
                "question": 256,
                "description": "Kesaro Kibner has the right idea but the wrong way of doing it. Instead of petty race-baiting, I will truly accomplish what it takes to protect what the average Sord stands for."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1671,
            "fields": {
                "question": 256,
                "description": "We should refrain from negative attacks in this campaign. The country is going through too much."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1672,
            "fields": {
                "question": 256,
                "description": "Why not attack them both? It makes way more sense than just attacking one. Attack Ricter for his support of Alphonso and attack Kibner for his radical views."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1685,
            "fields": {
                "question": 260,
                "description": "Yes. It's time we completely move past Soll's mistakes, and write a constitution for the benefit of the average Sord. We will break the power of the Supreme Court together!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1686,
            "fields": {
                "question": 260,
                "description": "No. There are better ways to fix Sordland than change the constitution.This is a pivotal part of Sordish values, and eroding Soll's legacy is not, and will never be the way."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1687,
            "fields": {
                "question": 260,
                "description": "Let's just leave this be."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1712,
            "fields": {
                "question": 268,
                "description": "Let's visit Gruni, as it's the most competitive area."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1713,
            "fields": {
                "question": 268,
                "description": "Let's visit Greater Holsord and have a massive rally in Holsord."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1714,
            "fields": {
                "question": 268,
                "description": "Let's go to Bergia, as i believe i have a great chance at winning the region."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1715,
            "fields": {
                "question": 268,
                "description": "Let's visit Lorren, and try to lock down that area."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1748,
            "fields": {
                "question": 278,
                "description": "Let's attack him; there's no way anyone who says stuff like this can be anywhere near, let alone a heartbeat away from the presidency."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1749,
            "fields": {
                "question": 278,
                "description": "Let's actually agree with Holstron for this take, in fact, we'll go a step further. A Rayne administration would see the extinction of all things Bludish, from the people to the culture, and even tourists."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1750,
            "fields": {
                "question": 278,
                "description": "There's no reason to comment on this."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1774,
            "fields": {
                "question": 285,
                "description": "We welcome this! And I dare her to release the information publicly. Petr has done no wrong and I will always stand by him."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1775,
            "fields": {
                "question": 285,
                "description": "We welcome this! And I dare her to release the information publicly. Petr has done no wrong and I will always stand by him."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1782,
            "fields": {
                "question": 288,
                "description": "I believe this is a very good idea, as it will not only strengthen trade, further helping our relations with those countries, but could also introduce us to alliances such as ATO and CSP in case the Rumburg threat, God forbid, escalates."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1783,
            "fields": {
                "question": 288,
                "description": "I don't think this is a great idea, as we could very easily become too dependent on foreign trade if we did this. Just because our economic situation is not looking good currently does not mean we should resort to these measures. Also, I believe Sordland should have the ability to stand on it's own two feet in case of war with Rumburg."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1786,
            "fields": {
                "question": 289,
                "description": "I support Monica through and through on this. It's about time Women are treated like actual Sords instead of property."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1787,
            "fields": {
                "question": 289,
                "description": "Not a chance. Women in Sordland mustn't neglect the responsibilities that come with being caretakers of the home and children."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1788,
            "fields": {
                "question": 290,
                "description": "I don't have a problem with it, in fact, if i win, I will enact the privatization of state-owned assets like the Sordish State Corporation, Education, and Healthcare."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1789,
            "fields": {
                "question": 290,
                "description": "I am against it. Not only would privatization take key government assets out of the state's hands, but the average Sord would have to pay for their healthcare."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1790,
            "fields": {
                "question": 290,
                "description": "I can see both sides of the argument. I would take a mixed approach, privatising companies such as the SSC, yet keeping Education and Healthcare in government control."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1791,
            "fields": {
                "question": 290,
                "description": "We won't address privatization in this campaign, as it's not important"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1795,
            "fields": {
                "question": 292,
                "description": "Suheil is a radical who even criticizes her running mate on multiple fronts. It wouldn't surprise me if they loath each other"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1796,
            "fields": {
                "question": 292,
                "description": "Remus Holstron is the epitome of a bigot! It would be dangerous to allow a man like him to be that close to the presidency"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 1797,
            "fields": {
                "question": 292,
                "description": "I just don't see the point in it. No thanks."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3227,
            "fields": {
                "question": 321,
                "description": "Petr is a lifelong friend of mine, and I can't imagine anyone else to be Vice President."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3228,
            "fields": {
                "question": 321,
                "description": "Petr Vectern is a man that knows how to get things done. He's served the assembly for 15 years, and with him at my side, Sordland's government will be an effective one."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3231,
            "fields": {
                "question": 322,
                "description": "Democratic reforms. The people of Sordland have spoken, and this is what they want. It's officially time to move away from the era of Soll, and establish a new chapter for Sordland."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3232,
            "fields": {
                "question": 322,
                "description": "Preserving national values. As president, I will protect our Constitution and keep the traditions and precedents Tarquin Soll set for us. There's a reason this country was so great under him."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3233,
            "fields": {
                "question": 322,
                "description": "Comrades, the federal government has ignored the every day worker for far too long. The bourgeoisie pigs, such as Walter Tusk and Konrath Koronti, have defiled our land, and our economy has suffered greatly for it. It's time we, the people, rise up!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3234,
            "fields": {
                "question": 322,
                "description": "Let's focus on our opponents. Frens Ricter and Kesaro Kibner are extremists who won't get anything done, while I'll be able to work with the assembly to accomplish goals that need to be done."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3235,
            "fields": {
                "question": 323,
                "description": "I'm good, honestly. Tonight is Zabla night."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3236,
            "fields": {
                "question": 323,
                "description": "Of course, we will attend the debates. Tonight, the Sordish people will see their true leader stand out tall above the rest!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3237,
            "fields": {
                "question": 323,
                "description": "Of course, we will attend the debates. Tonight, the Sordish people will see their true leader stand out tall above the rest!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3238,
            "fields": {
                "question": 323,
                "description": "Of course, we will attend the debates. Tonight, the Sordish people will see their true leader stand out tall above the rest!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3247,
            "fields": {
                "question": 326,
                "description": "We will remain vigilant against the threat of Rumburg, and we will never back down against them, and I will make sure to raise the military budget. We must always remain strong and show the might of a Sord."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3248,
            "fields": {
                "question": 326,
                "description": "Diplomacy is at the top of my concerns, and easing tensions with Rumburg is also a priority. We must not hold grudges if we want to succeed as nations, and I think Rumburg could be an ally one day."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3249,
            "fields": {
                "question": 326,
                "description": "We will declare war on Rumburg and crush the serpent's head when I become president! We must conquer the beast once and for all!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3250,
            "fields": {
                "question": 326,
                "description": "Let's focus on other things, no one even cares about Rumburg."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3289,
            "fields": {
                "question": 337,
                "description": "We stand completely with Petr on this one. These rumors are disrespectful, as long as I've known Petr, he's been one of the hardest-working people I have ever known."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3290,
            "fields": {
                "question": 337,
                "description": "I had a feeling Petr's public life would come up. We will pull him back from the campaign."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3291,
            "fields": {
                "question": 337,
                "description": "Let's not address this, as talking about it will feed into it more."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3292,
            "fields": {
                "question": 338,
                "description": "We will keep the Planned Economy. The reason the economic downturn occurred was due to the horrific market reforms of Alphonso. Our economy boomed, dare I say prospered, under Soll and we won't be afraid to mention that."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3293,
            "fields": {
                "question": 338,
                "description": "We will introduce a Free-Market economy. This is the way of the future, and if Sordland wants to be a better place, we must move where the world is moving. Alphonso wasn't a good president, but he had the right idea of moving our country away from this."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 3294,
            "fields": {
                "question": 338,
                "description": "I will have to look into this more when i get in office"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9196,
            "fields": {
                "question": 289,
                "description": "Ok, so women's rights can be mediated. What we need is protection for women agains domestic abuse, and granting them fair pay in work environments, but that's about it."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9199,
            "fields": {
                "question": 285,
                "description": "We welcome this! And I dare her to release the information publicly. Petr has done no wrong and I will always stand by him."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9200,
            "fields": {
                "question": 285,
                "description": "There's no reason to address this."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9289,
            "fields": {
                "question": 288,
                "description": "I would take a mixed approach here. I would make some new trade deals, but at the same time, I'd make sure Sordland doesn't have too many. That way, we'd reap the benefits of free trade without being trade-dependent."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9290,
            "fields": {
                "question": 288,
                "description": "I won't make a comment on this. "
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9293,
            "fields": {
                "question": 289,
                "description": "My wife's views are her own, and I will therefore not address them."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9297,
            "fields": {
                "question": 255,
                "description": "We will not address Colonel Soll in this campaign."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9312,
            "fields": {
                "question": 9311,
                "description": "Law and Order will be one of my top priorities in the Rayne administration. We have a massive problem with it right, and we will stop the crime families and vigilante gangs destroying our country."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9318,
            "fields": {
                "question": 9311,
                "description": "Law and Order just isn't that important. I won't be raising their budget."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9321,
            "fields": {
                "question": 9311,
                "description": "I actually support the prioritization of the Ministry of Justice over the Ministry of Interior. There is so much wrong with our Justice system, and I believe the results will trickle down if we fix the head first."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9328,
            "fields": {
                "question": 9327,
                "description": "I support tightened immigration. We need to keep weary of the Rumburg threat and make sure people cannot slip into our border. It is key we make sure we are completely safe, and can defend ourselves."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9332,
            "fields": {
                "question": 9327,
                "description": "I support relaxed immigration. It's time we start to acknowledge the atrocities being committed in Wehlen, and take in Bludish immigrants seeking refuge from their kind being destroyed."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9338,
            "fields": {
                "question": 9327,
                "description": "I will not talk about immigration in this campaign, as there's too much to lose."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9341,
            "fields": {
                "question": 9340,
                "description": "This is something I can get behind. People, such as in Agnland, deserve a highway system to make trade and travel easier for them. Additionally, this will help us in our relations with Agnolia."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9344,
            "fields": {
                "question": 9340,
                "description": "This is something I can get behind. We need a railway system that connects our two biggest cities. Additionally, this will help us recover, and get us out of the recession faster."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9347,
            "fields": {
                "question": 9340,
                "description": "I just don't see it. It would be more spending and would only plunge us into debt. This is a bad idea that I hope doesn't happen."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9351,
            "fields": {
                "question": 9340,
                "description": "I won't acknowledge this, as infastructure isn't a big problem. Let's focus on other things."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9355,
            "fields": {
                "question": 9354,
                "description": "Of Course! Petr will crush those clowns! Break a leg, Petr!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9359,
            "fields": {
                "question": 9354,
                "description": "Of Course! Petr will crush those clowns! Break a leg, Petr!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9362,
            "fields": {
                "question": 9354,
                "description": "Of Course! Petr will crush those clowns! Break a leg, Petr!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9366,
            "fields": {
                "question": 9354,
                "description": "He's not coming! We're going to the bar tonight to drink like the kings we'll become!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9372,
            "fields": {
                "question": 9371,
                "description": "No thanks, i have to attend my daughters school dance, you always have to be there for you children!"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9377,
            "fields": {
                "question": 9371,
                "description": "Absolutely. This could be our chance to have this election in the bag, and i wouldn't give this opportunity up for the world"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9380,
            "fields": {
                "question": 9371,
                "description": "Absolutely. This could be our chance to have this election in the bag, and i wouldn't give this opportunity up for the world"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9384,
            "fields": {
                "question": 9371,
                "description": "Absolutely. This could be our chance to have this election in the bag, and i wouldn't give this opportunity up for the world"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9389,
            "fields": {
                "question": 9388,
                "description": "Let's just let Ricter and Manoly shoot each other in the foot. No need to insert ourselves into this."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9392,
            "fields": {
                "question": 9388,
                "description": "We'll attack him on this for sure. If Frens' running mate doesn't trust him, why should you?"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9397,
            "fields": {
                "question": 9388,
                "description": "Let's bring this up ALL the time and even call for Ricter to drop Suheil. The more division in their party, the better."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9402,
            "fields": {
                "question": 9388,
                "description": "Let's actually defend Ricter. Suheil must know her place as a running mate, and as a woman."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9407,
            "fields": {
                "question": 9406,
                "description": "Our country has been through never-ending hell, yet we persevere. The last four years have taught us that we need to keep optimism high. We WILL get through this."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9410,
            "fields": {
                "question": 9406,
                "description": "Kesaro Kibner and Frens Ricter are fools who only run to boost their own interests. I care about you, unlike these freaks.\n"
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9415,
            "fields": {
                "question": 9406,
                "description": "As a humble citizen from Deyr, I am the candidate of the average Sord. I have worked my way up from nothing just to represent you all. We are all in this together."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9418,
            "fields": {
                "question": 9406,
                "description": "The Rumburg threat is one that must not be undermined. We need to protect our country, and it starts with electing Anton Rayne."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9423,
            "fields": {
                "question": 9422,
                "description": "We'll do a quick tour around Morna and Morbel, Then we'll get to Conriat, then head to the capital and finish with a massive rally right outside of the Maroon Palace."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9427,
            "fields": {
                "question": 9422,
                "description": "We'll start off in Gelsord, then we'll head to Anrica. Then we'll head to Sarna and finish with a rally in my home city of Deyr."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9432,
            "fields": {
                "question": 9422,
                "description": "Let's head to Laren and Arvory, then we'll make a quick dash to Estord and finish off in Lachaven."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9436,
            "fields": {
                "question": 9422,
                "description": "Why not spend the entire day in Gruni? it is one of the most competitive regions after all. We'll do visits in Valgen, Leirn, and Borin, then we'll finish with a big rally in Benfi."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9439,
            "fields": {
                "question": 9310,
                "description": "I believe the threshold should be raised, actually. These parties have dangerous ideas, such as communism and Bludish dominance, and don't deserve to make it into the assembly."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9440,
            "fields": {
                "question": 9310,
                "description": "I think it should be lowered to allow these people to have a voice. Sordland should be a place where anyone has a chance to share their voice and have their opinion heard."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9441,
            "fields": {
                "question": 9310,
                "description": "I'd much rather have it stay the same. If it ain't broke, don't fix it."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9457,
            "fields": {
                "question": 9310,
                "description": "We shouldn't talk about it, people will get too mad."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9484,
            "fields": {
                "question": 292,
                "description": "We should attack both, honestly. Suheil is a socialist extremist who won't put Sordland first, and Holstron is a bigoted extremist who will plunge Sordland into the dark ages."
            }
        },
        {
            "model": "campaign_trail.answer",
            "pk": 9608,
            "fields": {
                "question": 9607,
                "description": "ok"
            }
        }
    ]
    
    campaignTrail_temp.states_json = [
        {
            "model": "campaign_trail.state",
            "pk": 9029,
            "fields": {
                "name": "Nargis",
                "abbr": "NS",
                "electoral_votes": 0,
                "popular_votes": 5740000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m123.9 77.5c-0.8 0.9-2.2 1.6-3.2 1.5-0.9 0-3.2 0.7-5 1.6-1.7 0.9-4.2 2.6-5.5 3.8-1.2 1.1-2.2 2.8-2.2 3.6 0 0.8-1.7 3.4-3.7 5.8-2.1 2.4-6.3 6.9-9.4 10-3.8 3.9-7 6.1-10 7.1-2.4 0.7-5 1.7-5.7 2.2-0.6 0.5-1.5 0.7-2 0.4-0.4-0.2-1.8 0.7-3.2 2.2-1.4 1.4-5.2 4.6-8.5 7-3.3 2.4-6.1 4.9-6.2 5.6-0.2 0.7-1.1 4.3-2 8.1-1.3 4.9-2.4 7.1-3.8 7.7-1.1 0.5-3.1 3.3-4.5 6.2-2.1 4.3-3 5.3-5.5 5.6-1.7 0.2-4.8 1.8-7 3.6-2.2 1.7-4.8 3.5-5.8 3.8-0.9 0.4-1.7 1.6-1.7 2.7 0 1.2-0.8 2.2-2 2.5-1.1 0.3-4.3 3.4-7 7-2.8 3.6-4.8 6.9-4.5 7.5 0.3 0.6-1.1 2.3-3 4-1.9 1.7-3.5 3.9-3.5 5 0 1.1 1.3 4.8 3 8.3 1.6 3.4 3 7.2 3 8.4 0 1.3 0.6 3.3 1.4 4.5 1.1 1.8 1.3 4.2 0.7 10.8-0.6 5.6-1.5 9.5-2.7 11.3-1 1.6-3 3.1-4.4 3.4-1.4 0.3-3.1 1.1-3.8 1.7-0.7 0.6-1.3 1.5-1.3 2.1 0 0.6 2.4 3 5.3 5.5 4.7 4 5.8 4.5 10.8 4.7 4.3 0.2 5.9-0.2 7.5-1.8 1.1-1.1 3.1-1.9 4.5-1.9 1.4 0 3.3 0.6 4.3 1.3 1.1 0.7 1.7 2.2 1.5 3.7-0.1 1.4 0.1 3.1 0.5 3.7 0.4 0.7 2.2 1.3 3.9 1.3 1.8 0 5 0.5 7 1 2.8 0.7 4.4 2 5.8 4.5 1.9 3.4 2.1 3.5 6.7 2.9 3-0.4 6.7-1.9 9.8-4 2.7-1.9 5.6-3.4 6.2-3.4 0.7 0 3.4-1.1 6-2.6 2.7-1.4 5.2-2.9 5.8-3.5 0.5-0.5 2-0.9 3.5-0.9 1.5 0 3.7 1.2 5.5 3 2.9 2.9 3.3 3 12 3 4.9 0 11.5-0.5 14.5-1.1 3-0.5 10.8-1 17.2-1 7.8 0.1 12.7 0.6 14.5 1.5 1.6 0.7 3.1 2.1 3.5 3 0.6 1.1 2.5 1.8 6 2.1 2.9 0.3 7.1 0.7 9.3 0.9 2.2 0.2 5.8 1.1 8 2 2.2 0.9 5 1.6 6.2 1.6 1.3 0 2.3-0.6 2.3-1.3 0-0.6 0.7-2.8 1.7-4.7 0.9-1.9 4.3-6.1 7.5-9.3 3.9-3.9 6.6-5.7 8.3-5.7 1.4 0 2.9-0.8 3.4-1.8 0.4-0.9 2-2 3.5-2.5 1.4-0.4 3-1.8 3.6-3.2q1-2.5 0-5c-0.6-1.4-3.5-5-6.5-8-3-3-6.1-5.4-6.9-5.3-0.8 0.2-2.6-0.9-4-2.5-2.5-2.6-2.7-2.6-4.6-1-1.2 1.1-2.6 1.5-3.5 1-0.8-0.4-1.4-1.3-1.2-2 0.2-0.6 1.3-1.3 2.5-1.5 1.6-0.1 2.1-0.8 1.9-2.5-0.2-1.9-0.8-2.2-4.7-2.3-2.5 0-6-0.4-7.8-0.7-1.8-0.4-3.1-1.2-2.9-2 0.2-0.7 2.3-1.3 4.8-1.5 2.8-0.2 4.7 0.2 5.1 1 0.6 1 1.3 1 3.5-0.2 1.5-0.8 3-2.6 3.3-4 0.5-2 1.3-2.6 4-2.9 1.9-0.2 4.1-1 4.7-1.7 0.7-0.8 1-1.7 0.5-2-0.4-0.3 0.2-1.2 1.3-1.9 1.7-1.1 2.6-1.1 5.5 0.2 1.9 0.9 4.3 1.3 5.2 0.9 1-0.3 2.2-2.1 2.7-3.9 0.4-1.7 1.3-3.1 2-3 0.6 0.2 1.4-0.5 1.8-1.5 0.4-0.9 1.9-2.7 3.3-4 1.4-1.2 3.5-3.1 4.7-4.2 1.3-1.1 2.3-2.7 2.3-3.5 0-0.8 0.7-2.6 1.5-4 1-1.6 2.4-2.5 4-2.5 1.6 0 2.6-0.6 2.8-1.8 0.1-0.9-0.4-2.3-1.3-2.9-1.3-1.1-1.3-1.5 0.6-3 1.1-1 2.5-2.9 3.1-4.3 0.5-1.4 0.8-3.1 0.6-3.8-0.1-0.6-1.5-1.2-3.1-1.2-1.5-0.1-3.3 0.6-4 1.5-0.6 0.8-1.6 1.3-2.2 1-0.6-0.3-0.9-1.3-0.8-2.3 0.2-1.1-0.2-1.6-1.2-1.4-1.3 0.3-1.4-0.6-0.8-5.7l0.8-6.1c-10.5 1.3-12.1 1.2-13.4 0-0.9-0.8-1.7-2.8-1.6-4.5 0-1.7 0.9-4.5 2-6.3 1.4-2.2 1.8-4.2 1.5-6.5-0.4-2.5-1.9-4.2-7.2-8.2-3.6-2.8-8.2-5.9-10.2-7-2.7-1.4-5.6-1.9-11.3-2-6.5 0-8-0.3-10-2.2-1.3-1.3-3.2-2.2-4.3-2.2-1.1 0-3.9-1.8-6.3-4.1-2.3-2.2-4.6-4-5.2-4-0.6 0-1.9-1.3-3-3-1.6-2.4-2.7-3-5.5-3-1.9 0-4.3-0.4-5.3-0.9-0.9-0.4-3.7-1.8-6.2-2.9-2.5-1.2-6.1-2.6-8-3.2-1.9-0.5-6.2-1.2-9.5-1.5-3.3-0.2-6.7-0.7-7.6-1-0.9-0.3-2.2 0.2-3 1z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9035,
            "fields": {
                "name": "Greater Holsord",
                "abbr": "GHS",
                "electoral_votes": 0,
                "popular_votes": 11240000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m362.1 248.9c-1.7 0.9-5.4 2.9-8.3 4.5-2.9 1.6-6.7 3.9-8.3 5.1-1.6 1.2-5.3 3-8 4-2.8 1.1-7.5 1.9-10.5 1.9-3.6 0.1-6.3-0.5-8-1.7-1.4-1-4.2-1.7-6.5-1.7-2.2 0.1-6 0.6-8.5 1.3-2.5 0.7-6.4 2.5-8.8 4-2.3 1.5-4.2 3.1-4.2 3.7 0 0.6-1 1.4-2.3 1.9-1.2 0.5-4.9 1.9-8.2 3.2-3.3 1.2-6.6 2.9-7.3 3.8-0.8 0.9-2.8 1.8-4.5 2.1l-3.2 0.6c-0.9 23.1-1.4 26.4-2.8 28.4-0.9 1.4-1.7 3.2-1.7 4 0 0.8-0.9 2.4-2 3.5-1.1 1.2-2.1 3.7-2.2 6-0.3 3.8-0.2 4 3.1 4.5 1.9 0.3 3.7 1.2 4.1 2 0.4 0.8 1.8 3.5 3 6 1.2 2.5 2.4 6.3 2.7 8.5 0.3 2.2 1 4.9 1.6 6 0.6 1.1 1.4 3.8 1.7 6 0.5 3.4 0.9 4 2.8 3.7 1.4-0.1 2 0.2 1.7 1-0.4 0.8 1.4 2 4.7 3.3 3.2 1.1 7 3.7 9.5 6.2 2.4 2.4 4.3 4.6 4.3 5 0 0.5 1.9 1.9 4.3 3.2 2.3 1.3 5.3 2.6 6.7 2.8 1.4 0.2 5 1.1 8 1.9 3 0.8 8.9 1.4 13 1.3 4.1 0 9.5 0.5 12 1.3 3.2 0.9 6.5 3.2 11.5 8.1 3.9 3.7 8.1 7 9.5 7.3 1.4 0.3 3.3 0.9 4.2 1.5 1 0.5 2.5 0.9 3.3 0.9 0.8 0 1.5-0.8 1.5-1.8 0.1-1.3 0.8-0.9 3 1.5 1.7 1.8 3.3 3.2 3.7 3.1 0.5-0.1 2.6 0.4 4.8 1 2.2 0.7 4.2 1.2 4.5 1.2 0.3 0 1.1-1.2 1.8-2.7 0.7-1.5 1-3 0.7-3.3-0.3-0.3-0.1-0.9 0.4-1.5 0.6-0.6 1.3-5.3 1.7-10.5 0.6-8.1 1.1-10 3.3-12.7 1.4-1.8 3.2-3.3 3.8-3.3 0.7 0 2.1-1.5 3.2-3.3 1.3-2.2 2.1-6.3 2.6-12.7 0.3-5.2 1-14.7 1.3-21.1 0.7-10.8 0.9-11.9 3.7-15.7 1.6-2.3 4-5.6 5.3-7.4 1.5-2.2 2.2-4.2 1.8-5.8-0.3-1.4 0-3.9 0.6-5.5 1-2.6 0.8-3.4-1.1-6-1.2-1.6-2.2-3.6-2.1-4.3 0-0.6-0.5-1.2-1-1.2-0.6 0-1.2-0.7-1.5-1.5-0.3-0.8 0.1-2.4 0.7-3.5 1.1-1.6 1-2.4-0.1-4.3-0.8-1.2-3.1-4.9-5.1-8.2-2-3.3-4.4-8.5-5.3-11.5-1-3-1.7-7.2-1.7-9.3 0-2.6-0.4-3.7-1.5-3.7-0.8 0-1.7 0.4-2 1-0.3 0.6-1.5 1-2.7 1-1.3 0-3.3 1.2-4.5 2.7-1.3 1.6-2.3 3.4-2.3 4 0 0.8-1.3 1.3-3 1.3-2.4 0-3.5-0.8-5.4-3.8-1.2-2-3.1-4.4-4.1-5.2-1-0.8-3.3-2-5.2-2.6-2.6-0.9-3.9-0.8-6.2 0.5z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9041,
            "fields": {
                "name": "Agnland",
                "abbr": "AL",
                "electoral_votes": 0,
                "popular_votes": 2810000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m345.4-0.3c-2.5 0.3-3.2 1-3.8 3.6-0.4 1.8-0.7 4.1-0.6 5.2 0.1 1.1 0.2 3.3 0.1 5-0.1 3-0.1 3-7.3 3.7-4.4 0.4-7.6 1.2-8 2-0.5 1-1.8 1.1-5 0.5-3.2-0.5-4.9-0.3-6.5 0.8-1.3 0.8-3 1.3-3.8 1-0.8-0.3-1.5-1.6-1.5-3 0-1.6-0.6-2.5-1.5-2.5-0.9 0-1.5-0.9-1.5-2.3 0-1.7-0.7-2.4-3.2-3-1.8-0.4-4.5-0.7-6-0.7-2.7 0-2.8 0.1-2.3 4.5 0.3 2.5 0.2 4.5-0.2 4.5-0.5 0-0.7 1-0.5 2.3 0.3 1.6-0.7 2.9-3.7 4.9-2.3 1.6-4.5 2.8-5.1 2.8-0.5 0-1.3 1-1.6 2.2-0.3 1.3-0.3 3.4 0.1 4.8 0.4 1.4 0.4 4 0.1 5.7-0.4 2-1.2 3.3-2.1 3.3-0.8 0-1.8 0.7-2.2 1.4-0.6 1.2-1.7 1.3-4.8 0.6-2.2-0.4-6.6-0.5-9.8-0.2-4.3 0.5-5.7 0.4-5.7-0.6 0-0.6-1-1.1-2.2-1-1.1 0.2-2.3 1.1-2.5 2-0.2 1.4-1.3 1.8-4.8 1.8-4.3 0-4.7 0.3-8 5-2.3 3.2-4 4.8-5 4.5-0.8-0.3-2.4 0.4-3.5 1.5-2 2-2 2.1-0.2 4.7 1 1.6 2.2 3.7 2.6 4.8 0.3 1.1 0.1 3.2-0.6 4.8-0.7 1.5-1.9 2.7-2.5 2.7-0.7 0-3 0.8-5 1.7-2.1 1-3.9 2.1-4 2.5-0.2 0.5-1.3 0.8-2.5 0.8-1.3 0-4.5-0.7-7.3-1.6-2.7-0.9-5.8-2.3-6.7-3-1.6-1.2-2.1-1.1-4 0.6-1.3 1.1-3.2 2.2-4.3 2.4-1.1 0.3-4.9 1.8-8.5 3.4-3.6 1.6-6.8 3.6-7.2 4.3-0.3 0.8-0.1 3.4 0.5 5.7 0.7 2.4 2.4 5.8 3.8 7.5 2.6 3.1 3 3.2 10.5 3.2 5.9 0.1 8.8 0.6 11.5 2 2 1.1 6.6 4.2 10.2 7 5.3 4 6.8 5.7 7.2 8.3 0.3 2.2-0.1 4.2-1.5 6.4-1.1 1.8-2 4.6-2 6.3 0 1.7 0.5 3.6 1.2 4.3 0.7 0.7 2.7 1.2 4.3 1.2 1.7 0 4.5-0.3 6.3-0.7 1.9-0.5 3.2-1.4 3.2-2.3 0-0.8 1-2.5 2.2-3.7 1.3-1.3 2.6-2.3 3.1-2.3 0.4 0 4.2 3.3 8.5 7.4l7.7 7.4c20.9 1.2 21.8 1.1 26.5-1.3l5-2.5v-15.5c13.5-18.6 14-19.1 19.6-20.8l5.9-1.8c4.6 4.7 6.3 6.1 6.8 6.1 0.4 0 4-2.5 8-5.6 4.3-3.4 7.5-6.7 8-8.3 0.4-1.4 0.3-6.2-0.3-10.6-1.1-7.8-1-8.2 2.4-18.5 2-5.8 4.6-13.2 5.8-16.5l2.4-6c26.9-16 30.2-18.4 29.8-19.8-0.3-1.2 0.2-1.7 1.9-1.7 1.2 0 2.9-0.4 3.7-0.9 0.9-0.6 1.2-1.5 0.8-2.5-0.6-1.2-0.2-1.6 1.7-1.6 1.6 0 2.5-0.6 2.5-1.5 0-0.8-0.6-1.5-1.2-1.5-0.7 0-2.4-1.1-3.8-2.5-1.5-1.5-3.6-2.5-5.2-2.5-1.6 0-3-0.4-3.3-1-0.3-0.6-2.9-2.1-5.7-3.5-2.9-1.3-6.5-2.5-8-2.5-1.6 0-3-0.5-3.3-1-0.3-0.6-2.3-1-4.5-1-2.2 0-4-0.5-4-1 0-0.6-0.6-0.9-1.2-0.8-0.7 0-2.7 0.3-4.4 0.5zm-55.9 188.3c-0.3 0.5-0.4 1-0.2 1.1 0.1 0 2.3 0.1 4.9 0.2 2.7 0.1 4.8-0.1 4.8-0.6 0-0.4-0.7-0.9-1.5-1.2-0.8-0.3-2.8-0.5-4.5-0.5-1.6 0-3.1 0.4-3.5 1zm-10.8 178c-1 1.2-1.3 2.2-0.7 2.5 0.6 0.3 1 0.3 1 0 0-0.3 1.4-0.1 3 0.5 2.8 0.9 3 0.8 3-1.5 0-1.4-0.4-2.5-1-2.5-0.5 0-1.6-0.2-2.3-0.5-0.7-0.3-2.1 0.3-3 1.5zm55.3 21c0 1.5 1.3 2.5 4.7 3.7 2.6 1 7.4 4.2 10.5 7 5.7 5.2 5.8 5.2 6.1 2.7 0.1-2-1-3.7-5.4-7.7-3.3-3.1-7.2-5.7-9.7-6.5-2.3-0.6-4.6-1.2-5.2-1.2-0.5 0-1 0.9-1 2zm53.7 19.9c-0.4 1.2-1.3 2.1-1.9 2.1-0.7-0.1-3-0.7-5-1.4-2.1-0.8-4-1.1-4.3-0.7-0.2 0.3-0.1 0.9 0.3 1.4 0.4 0.4 1.5 0.7 2.5 0.7 0.9 0 1.5 0.4 1.2 1-0.3 0.6 1.7 1 5 1 4.6 0 5.5-0.3 5.7-1.9 0.2-1-0.4-2.4-1.3-3-1.3-1-1.7-0.8-2.2 0.8zm41.5 13.8c-0.7 1.6-1.2 3.1-1.2 3.5 0 0.5 2.3 0.8 5 0.8 3.4 0 5.2-0.5 5.8-1.5 0.4-0.9 0-2.3-1.3-3.5-1.1-1.2-3.1-2.1-4.5-2-1.8 0-2.9 0.8-3.8 2.7zm125.7 6.6c-1.4 0.7-3.4 1.9-4.3 2.7-0.9 0.8-1.7 2.5-1.6 3.7 0 1.8 0.5 2.2 2.3 2 1.2-0.1 2.7-1.2 3.2-2.5 0.5-1.2 1.9-2.5 3-2.8 1.3-0.3 2.6 0.2 3.8 1.5 1.3 1.7 2.1 1.9 3.7 1.1 1.1-0.6 2-1.3 2-1.8 0-0.4-1-1.7-2.2-2.9-1.3-1.3-3.4-2.2-4.8-2.2-1.4 0-3.7 0.6-5.1 1.2z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9047,
            "fields": {
                "name": "Bergia",
                "abbr": "BA",
                "electoral_votes": 0,
                "popular_votes": 6960000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m347.4 229c0.1 6.4 0.4 8 1.6 8 0.8 0 2.1 0.5 2.8 1.2 0.7 0.7 1.2 2.4 1.2 3.8 0 1.4 0.8 4.2 1.8 6.2 0.9 2.1 1.9 3.8 2.2 3.8 0.3 0.1 1.1-0.6 1.8-1.5 1-1.2 0.9-2-0.5-4.3-1-1.5-1.9-4.5-2-6.7-0.2-2.5-1-4.6-2.2-5.5-1-0.8-2.2-2.5-2.5-3.8-0.4-1.6-0.2-2.2 0.9-2.2 0.8 0 1.5-0.4 1.5-1 0-0.6-0.7-0.8-1.5-0.5-0.9 0.3-1.5-0.1-1.5-1 0-0.8 0.8-1.5 1.8-1.5 0.9-0.1 0.1-0.7-1.8-1.6-1.9-0.8-3.5-1.4-3.6-1.4-0.1 0-0.1 3.6 0 8zm-103.8 9.5c-1 0.9-1.7 2.6-1.7 3.8 0.1 1.3-1.2 3.3-3.1 4.9-2.5 2.1-2.9 2.8-1.5 2.8 0.9 0 2.8-1.2 4.2-2.8 1.4-1.5 2.5-3.6 2.5-4.7 0-1.1 0.5-2.6 1.2-3.2 0.7-0.7 1-1.5 0.7-1.8-0.3-0.3-1.3 0.1-2.3 1zm-153.1 15.4c-0.6 0.6-3.1 2.1-5.7 3.5-2.7 1.5-5.4 2.6-6 2.6-0.7 0-3.3 1.4-5.8 3.2-2.7 1.9-6.5 3.5-9.3 4-2.7 0.4-5.2 1.2-5.5 1.7-0.4 0.5-2.5 1.3-4.6 1.8-2.1 0.4-4.1 1.4-4.3 2-0.1 0.7 1.1 4.1 2.7 7.5 2.1 4.4 3 7.8 3 11.1 0 3.8-0.4 5-2.2 6-1.3 0.8-3.1 2.2-4.2 3.3-1.5 1.5-1.7 2.8-1.2 6.7 0.5 4 0 6.1-3.4 14.4-2.2 5.4-4 10.2-4 10.8 0 0.6 1.9 3.2 4.2 5.8 4.2 4.8 4.4 4.9 12.3 5.8 4.4 0.6 9.7 1 11.8 0.9 3.2 0 3.8 0.4 4.2 2.5 0.3 1.4 2 3.9 3.8 5.5 1.7 1.7 3.5 3 4 3 0.4 0 2.2 1.1 4 2.5 1.7 1.3 3.9 2.5 4.7 2.5 0.8 0 3.3-0.6 5.5-1.5 2.2-0.9 4.8-2 5.8-2.5 0.9-0.6 3.2-0.7 5-0.4 2.8 0.6 3.4 0.3 4.7-2.2 1.5-2.9 1.6-2.9 11.3-3.2 8.2-0.2 10.3 0.1 13.2 1.8 1.9 1.1 4.3 1.9 5.3 1.9 0.9-0.1 3.5-0.1 5.6 0 2.2 0 3.6 0.4 3.3 0.8-0.3 0.5 0.3 2.5 1.3 4.5 1.4 2.7 3.3 4.4 6.5 5.8 3.8 1.7 5.4 1.9 10.3 1.1 3.1-0.5 6.6-1.3 7.7-1.9 1.1-0.5 3.5-0.8 5.3-0.6 2 0.3 3.2 1 3.2 1.9 0 0.8 0.6 1.5 1.3 1.5 0.6 0 2.3-0.6 3.7-1.3 1.4-0.7 4.5-1.8 7-2.4 2.5-0.6 8.9-1.2 14.3-1.2 5.3-0.1 10-0.2 10.5-0.3 0.4-0.1 7.5 0.1 15.7 0.5 8.3 0.4 20.9 1.7 28 2.8 12.5 1.9 13.1 2 14.8 0.2 1-1 1.8-2.1 1.7-2.5 0-0.5-0.7-0.8-1.5-0.8-0.9 0-1.3-0.6-1-1.5 0.4-1.1-0.1-1.4-1.7-1.3-1.9 0.3-2.3-0.3-2.8-3.7-0.3-2.2-1.1-4.9-1.7-6-0.6-1.1-1.3-3.8-1.6-6-0.3-2.2-1.5-6-2.7-8.5-1.2-2.5-2.6-5.2-3-6-0.4-0.8-2-1.7-3.6-1.8-1.6-0.2-3.5-0.8-4.1-1.3-0.8-0.5-1.5-0.5-1.8 0.1-0.3 0.6-2.7 1-5.5 1-3.2 0-6.9-0.9-10.2-2.4-2.9-1.3-6.2-3.4-7.3-4.5-1.1-1.2-3.1-2.4-4.5-2.7-1.4-0.3-3.5-1.5-4.8-2.7-1.2-1.2-2.3-3.1-2.3-4.2 0-1.1-0.6-3.1-1.4-4.5-0.8-1.4-1.4-3.6-1.4-5 0-1.4-0.8-3.2-1.7-4-0.9-0.8-2.1-2.5-2.5-3.7-0.6-1.6-1.7-2.3-3.6-2.3-1.6 0.1-3.3-0.5-4-1.2-0.6-0.7-1.3-2.4-1.5-3.8-0.2-1.7-1.5-3.1-4.3-4.6-3.9-2-4-2.2-4.5-8l-0.5-5.9c-6.2-0.9-9.3-1.8-11-2.5-1.6-0.7-4.8-1.4-7-1.6-2.2-0.2-6.4-0.6-9.2-0.9-3.6-0.3-5.5-1-6-2.1-0.5-0.9-2-2.3-3.5-3-1.9-0.9-6.8-1.4-14.5-1.5-6.5 0-14.3 0.5-17.3 1-3 0.6-9.5 1.1-14.5 1.1-8.7 0-9.1-0.1-12-3-1.8-1.8-4-3-5.5-3-1.5 0-3 0.4-3.5 0.9z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9053,
            "fields": {
                "name": "Gruni",
                "abbr": "GI",
                "electoral_votes": 0,
                "popular_votes": 4880000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m515.6 322.5c-0.4 0.9-2.5 1.8-5.4 2.1-2.6 0.4-6.5 1.7-8.7 2.9-2.2 1.2-5.2 2.5-6.8 2.8-1.5 0.4-4.7 2.3-7.2 4.2-2.5 1.9-5.7 4-7.3 4.6-1.5 0.5-9.6 1-18.2 1-8.5-0.1-18 0.3-21 0.9-3 0.5-6.9 1.6-8.5 2.4-2.1 1.1-4.3 1.3-7.5 0.9-2.5-0.4-5.5-1.6-6.6-2.8-1.2-1.1-4-3.5-6.3-5.3-2.2-1.7-4.7-3.2-5.4-3.2-0.8 0-1.4 2.9-2 9.2-0.4 5.1-1.1 13.4-1.5 18.3-0.5 5.7-1.4 10-2.5 11.8-0.9 1.5-2.3 2.7-3 2.7-0.6 0-2.4 1.5-3.8 3.3-2.2 2.7-2.7 4.6-3.3 12.7-0.4 5.2-1.1 9.9-1.6 10.5-0.6 0.6-0.3 2.2 0.6 4 0.8 1.6 1.4 4.9 1.4 7.3 0 2.3 0.6 5.2 1.4 6.5 1.2 1.8 2.8 2.3 8.5 3 5.3 0.5 7.8 0.3 9.8-0.7 1.6-0.8 7.7-1.9 13.8-2.5 10.1-1 11.2-1 12.8 0.6 1 1 1.7 2.7 1.5 3.8-0.2 1.4 0.3 2.1 1.7 2.3 1.6 0.2 1.9-0.3 1.7-2.3-0.2-2.4 0-2.5 3.5-1.8 2.1 0.3 4.8 0.9 6 1.2 1.3 0.3 2.3 1 2.3 1.6 0 0.6-1.6 1.2-3.6 1.5l-3.7 0.5c7.2 3.5 9.5 4.5 9.8 4.5 0.3 0 0.5-0.7 0.5-1.5 0-0.8 0.4-1.5 1-1.5 0.5 0 1.8 0.9 2.7 2.1 1 1.1 3 2.7 4.5 3.5 1.8 0.9 2.8 2.2 2.8 3.7 0 1.2 1.3 3.4 2.8 4.9 2.2 2.2 3.3 2.6 5.7 2.1 1.6-0.3 3.6-1.1 4.3-1.7 0.7-0.6 1.3-1.5 1.3-2.1 0-0.6-1.2-0.7-3.1-0.3-2 0.6-3.2 0.4-3.6-0.5-0.4-0.6 0.3-2.3 1.5-3.7 1.2-1.4 2.9-4 3.9-5.8 0.9-1.8 2.3-3.2 2.9-3.2 0.8 0 1.1-0.8 0.8-2-0.3-1.1-0.1-2.2 0.5-2.5 0.5-0.3 1-1.3 1-2.3-0.1-0.9 1.1-2.2 2.7-2.9 1.5-0.6 3.8-1.4 5-1.7 1.3-0.3 2.3-1 2.3-1.6 0-0.6 0.8-0.8 1.7-0.6 1 0.3 2 0.5 2.3 0.6 0.3 0.1 1.6 0.1 3 0 1.4 0 3.7 0.4 5.2 0.9 2.2 0.9 3.3 0.8 5-0.4 1.8-1.1 3.2-1.2 6.8-0.4 2.5 0.6 5.4 1.6 6.5 2.2 1.1 0.6 2.6 1 3.2 0.9 0.7-0.1 1.3 0.4 1.3 1-0.1 0.7 1.7 3.1 3.9 5.3 2.2 2.2 4 4.7 4 5.5 0 0.8 0.8 2.3 1.8 3.3 1 0.9 2 1.5 2.3 1.2 0.3-0.3 1.2 0.2 2 1 0.8 0.9 2.1 1.6 2.7 1.5 0.7 0 1.3-1 1.3-2.3-0.1-1.2 0.7-2.9 1.7-3.8 1-0.8 3-2.1 4.5-2.7 1.6-0.7 3.8-1.2 5-1.2 1.3-0.1 3.2 0.9 4.3 2 1.1 1.1 2.8 2.1 3.7 2 1 0 1.7-0.6 1.5-1.3q-0.2-1.2 3-1l3.3 0.3c0-16.6-0.4-19.4-1.5-20.5-0.8-0.8-2.4-1.5-3.5-1.5-1.1 0-3.4-1.2-5.1-2.8-1.9-1.7-2.8-3.2-2.4-4.2 0.4-0.8 0.8-2 0.8-2.6 0.1-0.6 0.8-1.8 1.4-2.7 0.9-1.1 1-2.3 0.4-3.4-0.5-1-1.5-2.3-2.2-3-0.8-0.7-1.2-2.2-1-3.5 0.2-1.3-0.2-4-0.8-6-0.8-2.9-2-4.2-4.9-5.5-2-1-4.3-3-5-4.5-0.6-1.6-1.9-2.8-2.7-2.8-0.9 0-1.3-0.6-1-1.5 0.3-0.8-0.4-2.5-1.6-3.8-1.1-1.2-3.6-4.3-5.5-7-2.6-3.6-3.3-5.4-2.9-7.7 0.3-1.6 1-3 1.5-3 0.5 0 1-0.7 1-1.5 0-0.8-0.7-1.5-1.5-1.5-0.8 0-1.5-0.9-1.5-2 0-1.1-1.2-3.1-2.8-4.5-2.1-2-2.3-2.5-1-2.5 1.7 0 1.6-0.2-0.2-3-1.1-1.6-2-3.4-2-4 0-0.6-0.7-1.2-1.5-1.5-0.8-0.3-4.4-0.5-7.9-0.5-4.8 0-6.6 0.4-7 1.5z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9059,
            "fields": {
                "name": "Lorren",
                "abbr": "LN",
                "electoral_votes": 0,
                "popular_votes": 2810000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m419 209.5c-1.7 2-3.6 2.8-6.6 3-2.3 0.2-5 1.1-5.9 1.9-0.9 0.9-2.1 1.6-2.6 1.6-0.5 0-1.1 0.8-1.4 1.8-0.3 0.9-0.1 2.8 0.4 4.2 0.6 1.6 0.5 4.1-0.1 7-0.6 2.5-1.5 6.4-2.2 8.8-0.8 3.2-1.6 4.2-3.1 4.2-1.1 0-1.7 0.3-1.3 0.7 0.4 0.5-0.1 1.5-1.1 2.3-1 0.8-2.3 2.5-2.9 3.7-0.7 1.3-1.2 2.5-1.2 2.8 0 0.3 0.9 0.5 2 0.5 1.1 0 2.2-0.4 2.5-1 0.3-0.6 1.2-1 2-1 1.1 0 1.5 1.1 1.5 3.7 0 2.1 0.7 6.3 1.7 9.3 0.9 3 3.3 8.2 5.3 11.5 2 3.3 4.3 7 5.1 8.2 1.1 1.9 1.2 2.7 0.2 4.3-0.7 1.1-1.1 2.7-0.8 3.5 0.3 0.8 0.9 1.5 1.5 1.5 0.6 0 1 0.6 1 1.2-0.1 0.7 0.9 2.7 2.1 4.3 1.9 2.6 2.1 3.4 1.1 6-0.6 1.6-0.9 4.1-0.6 5.5 0.3 1.5-0.3 3.7-1.6 5.5-1.1 1.6-3.6 5.2-5.5 8-2.1 2.9-3.6 6.2-3.5 7.7 0 1.8 0.5 2.8 1.5 2.8 0.8 0 3.4 1.5 5.6 3.2 2.3 1.8 5.1 4.2 6.3 5.3 1.1 1.2 4.1 2.4 6.6 2.8 3.2 0.4 5.4 0.2 7.5-0.9 1.6-0.8 5.5-1.9 8.5-2.4 3-0.6 12.5-1 21-0.9 8.6 0 16.7-0.5 18.3-1 1.5-0.6 4.6-2.6 7-4.4 2.3-1.8 5.3-3.7 6.7-4.1 1.4-0.4 4.9-1.9 7.8-3.4 2.8-1.5 5.4-3.3 5.7-4 0.3-0.6 0.1-2-0.4-3-0.6-1-0.6-3.4 0-6.2 0.6-2.5 1.6-4.8 2.2-5.2 0.9-0.5 0.9-1-0.1-2-0.9-0.9-1.2-3.1-0.8-7.3 0.3-3.3 0.9-8.1 1.3-10.7 0.8-4.5 0.7-4.7-2.9-8-2.9-2.6-3.6-3.8-3.2-5.8 0.3-1.4 1.1-3.6 1.7-5 0.7-1.4 2-3.1 3-3.8 0.9-0.6 2.1-3 2.7-5.2 0.9-3.5 0.7-4.6-1.5-8.8-1.4-2.6-2.5-5.1-2.5-5.7 0-0.6 1.6-2 3.5-3.3 3.1-2 3.4-2.5 2.9-5.5-0.4-1.7-0.9-3.5-1.3-3.9-0.3-0.4-1.7-0.8-3.1-0.9-1.4-0.1-4-0.1-5.7-0.1-2.9 0.2-3.4 0.6-3.9 3.4-0.4 2.1-0.2 3.4 0.5 3.5 0.6 0.2 1.1 0.7 1.1 1.3 0 0.6-0.7 1-1.5 1-0.8 0-1.5 0.4-1.5 1 0 0.6-1.7 1.3-3.7 1.6-2.1 0.3-5.4 1.3-7.3 2.2-1.9 0.8-6.3 1.6-9.8 1.6-5.2 0.1-6.2 0.4-6.2 1.8 0 1-0.6 2-1.2 2.2-0.7 0.2-2.6 0.1-4.2-0.3-1.6-0.3-3-0.9-3.2-1.4-0.2-0.4-1.2-0.7-2.1-0.7-1 0.1-2.5-0.6-3.3-1.5-1.3-1.4-1.3-1.6 0-1.5 0.8 0 2.7-1.2 4.2-2.7 2.1-2.2 2.8-3.8 2.8-7.1 0-2.3 0.4-4.2 1-4.2 0.6 0 1-0.7 1-1.5 0-0.8-0.8-1.9-1.7-2.4-1-0.4-2.8-2.5-4-4.5-1.7-2.6-3-3.6-4.8-3.6-1.6 0-2.5 0.6-2.5 1.5 0 0.8-0.4 1.7-1 2-0.6 0.3-1.7-0.1-2.6-0.8-0.9-0.6-2.3-2.7-3.2-4.6-1-1.8-2.8-3.9-4.2-4.7-1.4-0.7-4.1-2.1-6-3-1.9-0.9-4.3-2-5.2-2.5-1-0.5-3.5-1.2-5.5-1.5-3.2-0.5-4.2-0.2-6.3 2.1z"
        },
        {
            "model": "campaign_trail.state",
            "pk": 9065,
            "fields": {
                "name": "Gelsland",
                "abbr": "GL",
                "electoral_votes": 0,
                "popular_votes": 2550000,
                "poll_closing_time": 120,
                "winner_take_all_flg": 1,
                "election": 4
            },
            "d": "m299 189c0 0.6-1.3 0.8-3 0.4-1.6-0.3-3.8-0.1-5 0.5-1.1 0.6-2 1.8-2 2.6 0 0.8-0.9 2.4-2 3.5-1.6 1.6-2.8 1.9-6.3 1.4-2.3-0.4-4.6-1.2-5.2-2-0.6-0.7-1.4-1.3-2-1.4-0.5 0-3 1.8-5.5 4-2.5 2.2-4.8 4-5.3 4-0.4 0-2.5 1.3-4.7 3-3.2 2.4-3.9 3.5-3.4 5.3 0.3 1.2-0.1 4.1-0.8 6.4q-1.3 4.3-0.3 5.3 1 1.1-0.5 1.9c-0.8 0.5-1.2 1.4-0.8 2 0.5 0.6-0.7 2.8-2.7 5.1-1.9 2.2-3.5 4.9-3.5 6 0 1.1-0.4 2.2-1 2.5-0.6 0.3-1 1.5-1 2.8 0.1 1.2-1.1 3.4-2.5 5-1.4 1.5-3.2 2.7-4 2.7-0.8 0-2.2 0.2-3 0.5-1 0.3-1.5-0.1-1.4-1.2 0-1-0.4-3.4-0.8-5.3-0.7-2.8-1.5-3.7-4.3-4.5-1.9-0.6-4.1-1.3-4.8-1.8-0.8-0.4-1.6 0.2-2.2 1.8-0.6 1.4-2.2 2.8-3.6 3.3-1.5 0.4-3.1 1.5-3.5 2.5-0.5 0.9-2 1.7-3.4 1.7-1.7 0-4.4 1.8-8.3 5.8-3.2 3.1-6.7 7.5-7.7 9.7-1.4 3.1-1.5 4.4-0.7 6 0.7 1.1 1.3 4.2 1.4 6.9 0.3 4.7 0.5 5.1 4.3 7 2.8 1.5 4.1 2.9 4.3 4.6 0.2 1.4 0.9 3.1 1.5 3.8 0.7 0.7 2.4 1.3 4 1.2 1.9 0 3 0.7 3.6 2.3 0.4 1.2 1.6 2.9 2.5 3.7 0.9 0.8 1.7 2.6 1.7 4 0 1.4 0.6 3.6 1.4 5 0.8 1.4 1.4 3.4 1.4 4.5 0 1.1 1.1 3 2.3 4.2 1.3 1.2 3.4 2.4 4.8 2.7 1.4 0.3 3.4 1.5 4.5 2.7 1.1 1.1 4.4 3.2 7.3 4.5 3.1 1.4 7.1 2.4 10 2.4 2.6 0.1 5.2-0.5 5.9-1.2 0.7-0.7 1.5-2.7 1.8-4.3 0.3-1.6 1.4-3.9 2.6-5 1.1-1.1 1.9-2.7 1.9-3.5 0-0.8 0.8-2.6 1.7-4 1.4-2 1.9-5.3 2.3-15.5l0.5-12.9c4.9-0.9 6.9-1.8 7.7-2.7 0.7-0.9 4-2.6 7.3-3.8 3.3-1.3 7-2.7 8.3-3.2 1.2-0.5 2.2-1.3 2.2-1.9 0-0.6 1.9-2.2 4.3-3.7 2.3-1.5 6.2-3.3 8.7-4 2.5-0.7 6.3-1.2 8.5-1.3 2.3 0 5.1 0.7 6.5 1.7 1.7 1.2 4.4 1.8 8 1.7 3 0 7.8-0.8 10.5-1.9 2.8-1 7.3-3.4 10-5.2 2.8-1.8 5.9-3.9 7-4.7 1.9-1.4 1.9-1.6 0.3-4.5-1-1.7-1.8-4.3-1.8-5.8 0-1.6-0.5-3.4-1.2-4.1-0.7-0.7-2.1-1.2-3-1.2-1 0-2 0.6-2.1 1.3-0.3 0.9-1.1 0.9-3.2 0.2-1.6-0.6-3-1.6-3.2-2.2-0.2-0.7 0.4-1.3 1.2-1.3 0.8 0 1.9-0.9 2.5-2 0.6-1.1 0.8-3.2 0.5-4.7-0.3-1.6-2.2-4.4-4.2-6.4-2.1-1.9-5.4-4.7-7.3-6.1-1.9-1.4-4.7-3.1-6.2-3.7-1.9-0.7-3.5-2.7-4.8-5.6-1.3-2.9-2.6-4.5-3.7-4.5-1 0.1-2.6-0.7-3.5-1.7-1.3-1.3-1.6-2.7-1.2-4.8q0.7-3-0.7-3.9c-0.8-0.5-3.8-1.5-6.7-2.3-2.9-0.7-5.7-1.3-6.3-1.3-0.5 0-0.9 0.4-0.9 1z"
        }
    ]
    
    campaignTrail_temp.issues_json = [
        {
            "model": "campaign_trail.issue",
            "pk": 11,
            "fields": {
                "name": "Rumburg",
                "description": 0,
                "stance_1": "Hawkish",
                "stance_desc_1": 0,
                "stance_2": "Hawkish",
                "stance_desc_2": 0,
                "stance_3": "Somewhat Hawkish",
                "stance_desc_3": 0,
                "stance_4": "Moderate",
                "stance_desc_4": 0,
                "stance_5": "Somewhat Dovish",
                "stance_desc_5": 0,
                "stance_6": "Dovish",
                "stance_desc_6": 0,
                "stance_7": "Dovish",
                "stance_desc_7": 0,
                "election": 4
            }
        },
        {
            "model": "campaign_trail.issue",
            "pk": 12,
            "fields": {
                "name": "Economy",
                "description": 0,
                "stance_1": "Planned Economy",
                "stance_desc_1": 0,
                "stance_2": "Planned Economy",
                "stance_desc_2": 0,
                "stance_3": "Planned Economy",
                "stance_desc_3": 0,
                "stance_4": "Moderate",
                "stance_desc_4": 0,
                "stance_5": "Free-Market",
                "stance_desc_5": 0,
                "stance_6": "Free-Market",
                "stance_desc_6": 0,
                "stance_7": "Free-Market",
                "stance_desc_7": 0,
                "election": 4
            }
        },
        {
            "model": "campaign_trail.issue",
            "pk": 13,
            "fields": {
                "name": "Bludish Rights",
                "description": 0,
                "stance_1": "Hell No",
                "stance_desc_1": 0,
                "stance_2": "Nope",
                "stance_desc_2": 0,
                "stance_3": "No, but wouldn't mind",
                "stance_desc_3": 0,
                "stance_4": "Moderate",
                "stance_desc_4": 0,
                "stance_5": "Yes, but won't mind if no",
                "stance_desc_5": 0,
                "stance_6": "Yep",
                "stance_desc_6": 0,
                "stance_7": "Absoloutely",
                "stance_desc_7": 0,
                "election": 4
            }
        },
        {
            "model": "campaign_trail.issue",
            "pk": 14,
            "fields": {
                "name": "1929 Constitution",
                "description": 0,
                "stance_1": "Keep",
                "stance_desc_1": 0,
                "stance_2": "Keep",
                "stance_desc_2": 0,
                "stance_3": "Keep",
                "stance_desc_3": 0,
                "stance_4": "Moderate",
                "stance_desc_4": 0,
                "stance_5": "Replace",
                "stance_desc_5": 0,
                "stance_6": "Replace",
                "stance_desc_6": 0,
                "stance_7": "Replace",
                "stance_desc_7": 0,
                "election": 4
            }
        },
        {
            "model": "campaign_trail.issue",
            "pk": 15,
            "fields": {
                "name": "Opinion of Tarquin Soll",
                "description": 0,
                "stance_1": "Love him",
                "stance_desc_1": 0,
                "stance_2": "Admire him",
                "stance_desc_2": 0,
                "stance_3": "Like him",
                "stance_desc_3": 0,
                "stance_4": "Moderate",
                "stance_desc_4": 0,
                "stance_5": "Dislike him",
                "stance_desc_5": 0,
                "stance_6": "Loathe him",
                "stance_desc_6": 0,
                "stance_7": "Hate him",
                "stance_desc_7": 0,
                "election": 4
            }
        }
    ]
    
    campaignTrail_temp.state_issue_score_json = [
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9030,
            "fields": {
                "state": 9029,
                "issue": 11,
                "state_issue_score": 0.4,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9031,
            "fields": {
                "state": 9029,
                "issue": 12,
                "state_issue_score": 0.6,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9032,
            "fields": {
                "state": 9029,
                "issue": 13,
                "state_issue_score": 0.2,
                "weight": 1
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9033,
            "fields": {
                "state": 9029,
                "issue": 14,
                "state_issue_score": -0.2,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9034,
            "fields": {
                "state": 9029,
                "issue": 15,
                "state_issue_score": -0.3,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9036,
            "fields": {
                "state": 9035,
                "issue": 11,
                "state_issue_score": -0.5,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9037,
            "fields": {
                "state": 9035,
                "issue": 12,
                "state_issue_score": -0.4,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9038,
            "fields": {
                "state": 9035,
                "issue": 13,
                "state_issue_score": -0.3,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9039,
            "fields": {
                "state": 9035,
                "issue": 14,
                "state_issue_score": -0.3,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9040,
            "fields": {
                "state": 9035,
                "issue": 15,
                "state_issue_score": -0.6,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9042,
            "fields": {
                "state": 9041,
                "issue": 11,
                "state_issue_score": -0.4,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9043,
            "fields": {
                "state": 9041,
                "issue": 12,
                "state_issue_score": 0,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9044,
            "fields": {
                "state": 9041,
                "issue": 13,
                "state_issue_score": -0.2,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9045,
            "fields": {
                "state": 9041,
                "issue": 14,
                "state_issue_score": -0.4,
                "weight": 1
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9046,
            "fields": {
                "state": 9041,
                "issue": 15,
                "state_issue_score": -0.4,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9048,
            "fields": {
                "state": 9047,
                "issue": 11,
                "state_issue_score": 0.4,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9049,
            "fields": {
                "state": 9047,
                "issue": 12,
                "state_issue_score": 0.7,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9050,
            "fields": {
                "state": 9047,
                "issue": 13,
                "state_issue_score": 0.9,
                "weight": 1.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9051,
            "fields": {
                "state": 9047,
                "issue": 14,
                "state_issue_score": 0.5,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9052,
            "fields": {
                "state": 9047,
                "issue": 15,
                "state_issue_score": 0.4,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9054,
            "fields": {
                "state": 9053,
                "issue": 11,
                "state_issue_score": -0.2,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9055,
            "fields": {
                "state": 9053,
                "issue": 12,
                "state_issue_score": 0.5,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9056,
            "fields": {
                "state": 9053,
                "issue": 13,
                "state_issue_score": -0.5,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9057,
            "fields": {
                "state": 9053,
                "issue": 14,
                "state_issue_score": -0.2,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9058,
            "fields": {
                "state": 9053,
                "issue": 15,
                "state_issue_score": -0.2,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9060,
            "fields": {
                "state": 9059,
                "issue": 11,
                "state_issue_score": -0.3,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9061,
            "fields": {
                "state": 9059,
                "issue": 12,
                "state_issue_score": -0.2,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9062,
            "fields": {
                "state": 9059,
                "issue": 13,
                "state_issue_score": -0.3,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9063,
            "fields": {
                "state": 9059,
                "issue": 14,
                "state_issue_score": -0.4,
                "weight": 1
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9064,
            "fields": {
                "state": 9059,
                "issue": 15,
                "state_issue_score": -0.1,
                "weight": 0.8
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9066,
            "fields": {
                "state": 9065,
                "issue": 11,
                "state_issue_score": -0.3,
                "weight": 1.5
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9067,
            "fields": {
                "state": 9065,
                "issue": 12,
                "state_issue_score": -0.3,
                "weight": 2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9068,
            "fields": {
                "state": 9065,
                "issue": 13,
                "state_issue_score": 0.5,
                "weight": 1.2
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9069,
            "fields": {
                "state": 9065,
                "issue": 14,
                "state_issue_score": 0.1,
                "weight": 1
            }
        },
        {
            "model": "campaign_trail.state_issue_score",
            "pk": 9070,
            "fields": {
                "state": 9065,
                "issue": 15,
                "state_issue_score": 0,
                "weight": 0.8
            }
        }
    ]
    
    campaignTrail_temp.candidate_issue_score_json = [
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 36,
            "fields": {
                "candidate": 23,
                "issue": 11,
                "issue_score": -0.3
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 37,
            "fields": {
                "candidate": 23,
                "issue": 12,
                "issue_score": 0.2
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 38,
            "fields": {
                "candidate": 23,
                "issue": 13,
                "issue_score": 0.2
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 39,
            "fields": {
                "candidate": 23,
                "issue": 14,
                "issue_score": 0.3
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 40,
            "fields": {
                "candidate": 23,
                "issue": 15,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 41,
            "fields": {
                "candidate": 24,
                "issue": 11,
                "issue_score": -0.1
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 42,
            "fields": {
                "candidate": 24,
                "issue": 12,
                "issue_score": 0.7
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 43,
            "fields": {
                "candidate": 24,
                "issue": 13,
                "issue_score": 0.5
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 44,
            "fields": {
                "candidate": 24,
                "issue": 14,
                "issue_score": 0.5
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 45,
            "fields": {
                "candidate": 24,
                "issue": 15,
                "issue_score": 0.4
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 46,
            "fields": {
                "candidate": 25,
                "issue": 11,
                "issue_score": -0.6
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 47,
            "fields": {
                "candidate": 25,
                "issue": 12,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 48,
            "fields": {
                "candidate": 25,
                "issue": 13,
                "issue_score": -0.9
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 49,
            "fields": {
                "candidate": 25,
                "issue": 14,
                "issue_score": 0.2
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 50,
            "fields": {
                "candidate": 25,
                "issue": 15,
                "issue_score": -0.4
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9496,
            "fields": {
                "candidate": 26,
                "issue": 11,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9497,
            "fields": {
                "candidate": 26,
                "issue": 12,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9498,
            "fields": {
                "candidate": 26,
                "issue": 13,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9499,
            "fields": {
                "candidate": 26,
                "issue": 14,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9500,
            "fields": {
                "candidate": 26,
                "issue": 15,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9509,
            "fields": {
                "candidate": 27,
                "issue": 11,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9510,
            "fields": {
                "candidate": 27,
                "issue": 12,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9511,
            "fields": {
                "candidate": 27,
                "issue": 13,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9512,
            "fields": {
                "candidate": 27,
                "issue": 14,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 9513,
            "fields": {
                "candidate": 27,
                "issue": 15,
                "issue_score": 0
            }
        }
    ]
    
    campaignTrail_temp.running_mate_issue_score_json = [
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 171,
            "fields": {
                "candidate": 55,
                "issue": 11,
                "issue_score": -0.6
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 172,
            "fields": {
                "candidate": 55,
                "issue": 12,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 173,
            "fields": {
                "candidate": 55,
                "issue": 13,
                "issue_score": 0
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 174,
            "fields": {
                "candidate": 55,
                "issue": 14,
                "issue_score": 0.3
            }
        },
        {
            "model": "campaign_trail.candidate_issue_score",
            "pk": 175,
            "fields": {
                "candidate": 55,
                "issue": 15,
                "issue_score": 0
            }
        }
    ]
    
    campaignTrail_temp.candidate_state_multiplier_json = [
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9071,
            "fields": {
                "candidate": 23,
                "state": 9029,
                "state_multiplier": 0.972
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9072,
            "fields": {
                "candidate": 23,
                "state": 9035,
                "state_multiplier": 0.996
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9073,
            "fields": {
                "candidate": 23,
                "state": 9041,
                "state_multiplier": 1
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9074,
            "fields": {
                "candidate": 23,
                "state": 9047,
                "state_multiplier": 0.621
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9075,
            "fields": {
                "candidate": 23,
                "state": 9053,
                "state_multiplier": 1
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9076,
            "fields": {
                "candidate": 23,
                "state": 9059,
                "state_multiplier": 0.987
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9077,
            "fields": {
                "candidate": 23,
                "state": 9065,
                "state_multiplier": 0.812
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9091,
            "fields": {
                "candidate": 24,
                "state": 9029,
                "state_multiplier": 0.967
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9092,
            "fields": {
                "candidate": 24,
                "state": 9035,
                "state_multiplier": 0.979
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9093,
            "fields": {
                "candidate": 24,
                "state": 9041,
                "state_multiplier": 0.732
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9094,
            "fields": {
                "candidate": 24,
                "state": 9047,
                "state_multiplier": 0.521
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9095,
            "fields": {
                "candidate": 24,
                "state": 9053,
                "state_multiplier": 1
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9096,
            "fields": {
                "candidate": 24,
                "state": 9059,
                "state_multiplier": 0.946
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9097,
            "fields": {
                "candidate": 24,
                "state": 9065,
                "state_multiplier": 0.987
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9098,
            "fields": {
                "candidate": 25,
                "state": 9029,
                "state_multiplier": 0.923
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9099,
            "fields": {
                "candidate": 25,
                "state": 9035,
                "state_multiplier": 0.986
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9100,
            "fields": {
                "candidate": 25,
                "state": 9041,
                "state_multiplier": 0.876
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9101,
            "fields": {
                "candidate": 25,
                "state": 9047,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9102,
            "fields": {
                "candidate": 25,
                "state": 9053,
                "state_multiplier": 1
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9103,
            "fields": {
                "candidate": 25,
                "state": 9059,
                "state_multiplier": 0.964
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9104,
            "fields": {
                "candidate": 25,
                "state": 9065,
                "state_multiplier": 0.912
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9489,
            "fields": {
                "candidate": 26,
                "state": 9029,
                "state_multiplier": 0.22
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9490,
            "fields": {
                "candidate": 26,
                "state": 9035,
                "state_multiplier": 0.0015
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9491,
            "fields": {
                "candidate": 26,
                "state": 9041,
                "state_multiplier": 0.0012
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9492,
            "fields": {
                "candidate": 26,
                "state": 9047,
                "state_multiplier": 1
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9493,
            "fields": {
                "candidate": 26,
                "state": 9053,
                "state_multiplier": 0.332
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9494,
            "fields": {
                "candidate": 26,
                "state": 9059,
                "state_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9495,
            "fields": {
                "candidate": 26,
                "state": 9065,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9502,
            "fields": {
                "candidate": 27,
                "state": 9029,
                "state_multiplier": 0.16
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9503,
            "fields": {
                "candidate": 27,
                "state": 9035,
                "state_multiplier": 0.078
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9504,
            "fields": {
                "candidate": 27,
                "state": 9041,
                "state_multiplier": 0.0015
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9505,
            "fields": {
                "candidate": 27,
                "state": 9047,
                "state_multiplier": 0.432
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9506,
            "fields": {
                "candidate": 27,
                "state": 9053,
                "state_multiplier": 0.533
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9507,
            "fields": {
                "candidate": 27,
                "state": 9059,
                "state_multiplier": 0.322
            }
        },
        {
            "model": "campaign_trail.candidate_state_multiplier",
            "pk": 9508,
            "fields": {
                "candidate": 27,
                "state": 9065,
                "state_multiplier": 0.018
            }
        }
    ]
    
    campaignTrail_temp.answer_score_global_json = [
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 708,
            "fields": {
                "answer": 1661,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 719,
            "fields": {
                "answer": 1667,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 722,
            "fields": {
                "answer": 1669,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 723,
            "fields": {
                "answer": 1669,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 726,
            "fields": {
                "answer": 1670,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 727,
            "fields": {
                "answer": 1670,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 728,
            "fields": {
                "answer": 1671,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 730,
            "fields": {
                "answer": 1672,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 731,
            "fields": {
                "answer": 1672,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 758,
            "fields": {
                "answer": 1685,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 759,
            "fields": {
                "answer": 1685,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 760,
            "fields": {
                "answer": 1685,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 762,
            "fields": {
                "answer": 1686,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 763,
            "fields": {
                "answer": 1686,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 764,
            "fields": {
                "answer": 1686,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 767,
            "fields": {
                "answer": 1687,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.025
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 865,
            "fields": {
                "answer": 1748,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 866,
            "fields": {
                "answer": 1748,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 867,
            "fields": {
                "answer": 1749,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -2
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 868,
            "fields": {
                "answer": 1749,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.3
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 869,
            "fields": {
                "answer": 1750,
                "candidate": 25,
                "affected_candidate": 25,
                "global_multiplier": -0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 917,
            "fields": {
                "answer": 1782,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.007
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 921,
            "fields": {
                "answer": 1786,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 922,
            "fields": {
                "answer": 1786,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 924,
            "fields": {
                "answer": 1788,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 926,
            "fields": {
                "answer": 1789,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.001
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 928,
            "fields": {
                "answer": 1790,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 939,
            "fields": {
                "answer": 1795,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.001
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 941,
            "fields": {
                "answer": 1796,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 950,
            "fields": {
                "answer": 3234,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 951,
            "fields": {
                "answer": 3234,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 952,
            "fields": {
                "answer": 3235,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 953,
            "fields": {
                "answer": 3235,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 961,
            "fields": {
                "answer": 3247,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 962,
            "fields": {
                "answer": 3248,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 963,
            "fields": {
                "answer": 3249,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 964,
            "fields": {
                "answer": 3250,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 988,
            "fields": {
                "answer": 3289,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 990,
            "fields": {
                "answer": 3294,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.06
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9120,
            "fields": {
                "answer": 3232,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9122,
            "fields": {
                "answer": 3231,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9123,
            "fields": {
                "answer": 3233,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9140,
            "fields": {
                "answer": 3294,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9141,
            "fields": {
                "answer": 3294,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9142,
            "fields": {
                "answer": 1665,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9145,
            "fields": {
                "answer": 1666,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9146,
            "fields": {
                "answer": 1666,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9162,
            "fields": {
                "answer": 3290,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9173,
            "fields": {
                "answer": 3235,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9175,
            "fields": {
                "answer": 3236,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9176,
            "fields": {
                "answer": 3236,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9177,
            "fields": {
                "answer": 3236,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9179,
            "fields": {
                "answer": 3237,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9180,
            "fields": {
                "answer": 3237,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9181,
            "fields": {
                "answer": 3237,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9183,
            "fields": {
                "answer": 3238,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9184,
            "fields": {
                "answer": 3238,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9185,
            "fields": {
                "answer": 3238,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9192,
            "fields": {
                "answer": 1787,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9193,
            "fields": {
                "answer": 1787,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.001
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9194,
            "fields": {
                "answer": 1787,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9195,
            "fields": {
                "answer": 1786,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.001
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9202,
            "fields": {
                "answer": 1775,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9203,
            "fields": {
                "answer": 1775,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9205,
            "fields": {
                "answer": 9199,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9206,
            "fields": {
                "answer": 9199,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9207,
            "fields": {
                "answer": 9199,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9209,
            "fields": {
                "answer": 9200,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9211,
            "fields": {
                "answer": 1782,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9213,
            "fields": {
                "answer": 1783,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.001
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9215,
            "fields": {
                "answer": 1748,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9218,
            "fields": {
                "answer": 1749,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.3
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9287,
            "fields": {
                "answer": 1671,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9288,
            "fields": {
                "answer": 1671,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9295,
            "fields": {
                "answer": 3292,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9296,
            "fields": {
                "answer": 3293,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9314,
            "fields": {
                "answer": 9312,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9320,
            "fields": {
                "answer": 9318,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9323,
            "fields": {
                "answer": 9321,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.012
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9330,
            "fields": {
                "answer": 9328,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9331,
            "fields": {
                "answer": 9328,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9334,
            "fields": {
                "answer": 9332,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9335,
            "fields": {
                "answer": 9332,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9337,
            "fields": {
                "answer": 9332,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.007
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9349,
            "fields": {
                "answer": 9347,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9350,
            "fields": {
                "answer": 9347,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9357,
            "fields": {
                "answer": 9355,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9358,
            "fields": {
                "answer": 9355,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9361,
            "fields": {
                "answer": 9359,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9364,
            "fields": {
                "answer": 9362,
                "candidate": 25,
                "affected_candidate": 25,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9365,
            "fields": {
                "answer": 9362,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9368,
            "fields": {
                "answer": 9366,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9369,
            "fields": {
                "answer": 9366,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.009
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9370,
            "fields": {
                "answer": 9366,
                "candidate": 24,
                "affected_candidate": 23,
                "global_multiplier": 0.009
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9374,
            "fields": {
                "answer": 9372,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9375,
            "fields": {
                "answer": 9372,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9376,
            "fields": {
                "answer": 9372,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9379,
            "fields": {
                "answer": 9377,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9382,
            "fields": {
                "answer": 9380,
                "candidate": 24,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9383,
            "fields": {
                "answer": 9380,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9386,
            "fields": {
                "answer": 9384,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9387,
            "fields": {
                "answer": 9384,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9391,
            "fields": {
                "answer": 9389,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.1
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9394,
            "fields": {
                "answer": 9392,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9395,
            "fields": {
                "answer": 9392,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9396,
            "fields": {
                "answer": 9392,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9399,
            "fields": {
                "answer": 9397,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.08
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9400,
            "fields": {
                "answer": 9397,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9401,
            "fields": {
                "answer": 9397,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.05
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9404,
            "fields": {
                "answer": 9402,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9405,
            "fields": {
                "answer": 9402,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.09
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9409,
            "fields": {
                "answer": 9407,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9412,
            "fields": {
                "answer": 9410,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.0015
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9413,
            "fields": {
                "answer": 9410,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.0089
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9414,
            "fields": {
                "answer": 9410,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.0015
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9417,
            "fields": {
                "answer": 9415,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.00023
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9420,
            "fields": {
                "answer": 9418,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9421,
            "fields": {
                "answer": 9418,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9429,
            "fields": {
                "answer": 9427,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9444,
            "fields": {
                "answer": 9439,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9445,
            "fields": {
                "answer": 9439,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9446,
            "fields": {
                "answer": 9439,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9453,
            "fields": {
                "answer": 9440,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.0034
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9460,
            "fields": {
                "answer": 9441,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9462,
            "fields": {
                "answer": 9289,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.007
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9464,
            "fields": {
                "answer": 9196,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.004
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9465,
            "fields": {
                "answer": 3291,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9466,
            "fields": {
                "answer": 1662,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9468,
            "fields": {
                "answer": 1662,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9469,
            "fields": {
                "answer": 1667,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.002
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9472,
            "fields": {
                "answer": 9328,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9473,
            "fields": {
                "answer": 9359,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9474,
            "fields": {
                "answer": 9359,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9475,
            "fields": {
                "answer": 9362,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9476,
            "fields": {
                "answer": 9355,
                "candidate": 25,
                "affected_candidate": 23,
                "global_multiplier": 0.005
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9477,
            "fields": {
                "answer": 9377,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9478,
            "fields": {
                "answer": 9377,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9479,
            "fields": {
                "answer": 9380,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9480,
            "fields": {
                "answer": 9384,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9486,
            "fields": {
                "answer": 9484,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": -0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9487,
            "fields": {
                "answer": 9484,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": -0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9550,
            "fields": {
                "answer": 3248,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.00255
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9554,
            "fields": {
                "answer": 1665,
                "candidate": 23,
                "affected_candidate": 27,
                "global_multiplier": 0.012
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9564,
            "fields": {
                "answer": 3290,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9565,
            "fields": {
                "answer": 3290,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.1
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9566,
            "fields": {
                "answer": 3291,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9573,
            "fields": {
                "answer": 1687,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.025
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9577,
            "fields": {
                "answer": 9200,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9578,
            "fields": {
                "answer": 9200,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9579,
            "fields": {
                "answer": 9200,
                "candidate": 23,
                "affected_candidate": 27,
                "global_multiplier": 0.08
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9580,
            "fields": {
                "answer": 9290,
                "candidate": 23,
                "affected_candidate": 23,
                "global_multiplier": -0.0032
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9593,
            "fields": {
                "answer": 9402,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.07
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9596,
            "fields": {
                "answer": 9423,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9597,
            "fields": {
                "answer": 9423,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9598,
            "fields": {
                "answer": 9427,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9599,
            "fields": {
                "answer": 9432,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9600,
            "fields": {
                "answer": 9432,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9601,
            "fields": {
                "answer": 9436,
                "candidate": 23,
                "affected_candidate": 24,
                "global_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_global",
            "pk": 9602,
            "fields": {
                "answer": 9436,
                "candidate": 23,
                "affected_candidate": 25,
                "global_multiplier": 0.02
            }
        }
    ]
    
    campaignTrail_temp.answer_score_issue_json = [
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 693,
            "fields": {
                "answer": 3231,
                "issue": 14,
                "issue_score": 0.6,
                "issue_importance": 1.2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 694,
            "fields": {
                "answer": 3231,
                "issue": 15,
                "issue_score": 0.4,
                "issue_importance": 0.8
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 697,
            "fields": {
                "answer": 3232,
                "issue": 14,
                "issue_score": -0.6,
                "issue_importance": 14
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 698,
            "fields": {
                "answer": 3232,
                "issue": 15,
                "issue_score": -0.5,
                "issue_importance": 14
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 702,
            "fields": {
                "answer": 3233,
                "issue": 14,
                "issue_score": 0.9,
                "issue_importance": 1.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 703,
            "fields": {
                "answer": 3233,
                "issue": 15,
                "issue_score": 0.9,
                "issue_importance": 1
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9127,
            "fields": {
                "answer": 1669,
                "issue": 14,
                "issue_score": 0.6,
                "issue_importance": 1.5
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9135,
            "fields": {
                "answer": 3292,
                "issue": 12,
                "issue_score": -0.6,
                "issue_importance": 2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9138,
            "fields": {
                "answer": 3293,
                "issue": 12,
                "issue_score": 0.6,
                "issue_importance": 2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9143,
            "fields": {
                "answer": 1665,
                "issue": 15,
                "issue_score": -0.7,
                "issue_importance": 0.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9147,
            "fields": {
                "answer": 1666,
                "issue": 15,
                "issue_score": 0.7,
                "issue_importance": 0.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9148,
            "fields": {
                "answer": 3247,
                "issue": 11,
                "issue_score": -0.6,
                "issue_importance": 1.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9149,
            "fields": {
                "answer": 3248,
                "issue": 11,
                "issue_score": 0.5,
                "issue_importance": 1.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9150,
            "fields": {
                "answer": 3249,
                "issue": 11,
                "issue_score": -0.9,
                "issue_importance": 1.9
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9151,
            "fields": {
                "answer": 1661,
                "issue": 13,
                "issue_score": 0.7,
                "issue_importance": 1.5
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9170,
            "fields": {
                "answer": 1685,
                "issue": 14,
                "issue_score": 0.8,
                "issue_importance": 1.2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9171,
            "fields": {
                "answer": 1686,
                "issue": 14,
                "issue_score": -0.7,
                "issue_importance": 1.2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9216,
            "fields": {
                "answer": 1748,
                "issue": 13,
                "issue_score": 0.7,
                "issue_importance": 1.5
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9286,
            "fields": {
                "answer": 1670,
                "issue": 13,
                "issue_score": 0.5,
                "issue_importance": 1.2
            }
        },
        {
            "model": "campaign_trail.answer_score_issue",
            "pk": 9603,
            "fields": {
                "answer": 1663,
                "issue": 13,
                "issue_score": -0.7,
                "issue_importance": 1.2
            }
        }
    ]
    
    campaignTrail_temp.answer_score_state_json = [
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9125,
            "fields": {
                "answer": 3228,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9186,
            "fields": {
                "answer": 1712,
                "state": 9053,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9187,
            "fields": {
                "answer": 1713,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9188,
            "fields": {
                "answer": 1714,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9189,
            "fields": {
                "answer": 1715,
                "state": 9059,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9315,
            "fields": {
                "answer": 9312,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9316,
            "fields": {
                "answer": 9312,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9317,
            "fields": {
                "answer": 9312,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9324,
            "fields": {
                "answer": 9321,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9325,
            "fields": {
                "answer": 9321,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9326,
            "fields": {
                "answer": 9321,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9425,
            "fields": {
                "answer": 9423,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9426,
            "fields": {
                "answer": 9423,
                "state": 9059,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9430,
            "fields": {
                "answer": 9427,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9431,
            "fields": {
                "answer": 9427,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9434,
            "fields": {
                "answer": 9432,
                "state": 9041,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9435,
            "fields": {
                "answer": 9432,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9438,
            "fields": {
                "answer": 9436,
                "state": 9053,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.015
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9536,
            "fields": {
                "answer": 3231,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.0034
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9537,
            "fields": {
                "answer": 3231,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9538,
            "fields": {
                "answer": 3231,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9539,
            "fields": {
                "answer": 3232,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9540,
            "fields": {
                "answer": 3232,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.0034
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9541,
            "fields": {
                "answer": 3232,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.0034
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9542,
            "fields": {
                "answer": 3233,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9543,
            "fields": {
                "answer": 3293,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9544,
            "fields": {
                "answer": 3293,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9545,
            "fields": {
                "answer": 3293,
                "state": 9053,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9546,
            "fields": {
                "answer": 3292,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9547,
            "fields": {
                "answer": 3292,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9548,
            "fields": {
                "answer": 3292,
                "state": 9059,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9551,
            "fields": {
                "answer": 3248,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.01
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9552,
            "fields": {
                "answer": 3248,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9553,
            "fields": {
                "answer": 1665,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.0234
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9555,
            "fields": {
                "answer": 1666,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.012
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9557,
            "fields": {
                "answer": 1661,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 26,
                "state_multiplier": -0.4
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9558,
            "fields": {
                "answer": 1661,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.12
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9559,
            "fields": {
                "answer": 1662,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.23
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9570,
            "fields": {
                "answer": 1685,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9571,
            "fields": {
                "answer": 1685,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9572,
            "fields": {
                "answer": 1685,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.0012
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9574,
            "fields": {
                "answer": 1786,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9575,
            "fields": {
                "answer": 1786,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9576,
            "fields": {
                "answer": 1786,
                "state": 9065,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9582,
            "fields": {
                "answer": 9439,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9583,
            "fields": {
                "answer": 9440,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.03
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9584,
            "fields": {
                "answer": 9341,
                "state": 9059,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9586,
            "fields": {
                "answer": 9344,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9587,
            "fields": {
                "answer": 9351,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9588,
            "fields": {
                "answer": 9351,
                "state": 9041,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9589,
            "fields": {
                "answer": 9351,
                "state": 9029,
                "candidate": 23,
                "affected_candidate": 27,
                "state_multiplier": 0.04
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9590,
            "fields": {
                "answer": 9351,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 24,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9591,
            "fields": {
                "answer": 9351,
                "state": 9035,
                "candidate": 23,
                "affected_candidate": 25,
                "state_multiplier": 0.02
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9594,
            "fields": {
                "answer": 9415,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": 0.003
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9604,
            "fields": {
                "answer": 1663,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 23,
                "state_multiplier": -100
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9605,
            "fields": {
                "answer": 1663,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 27,
                "state_multiplier": 0.045
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9606,
            "fields": {
                "answer": 1663,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 24,
                "state_multiplier": 0.023
            }
        },
        {
            "model": "campaign_trail.answer_score_state",
            "pk": 9611,
            "fields": {
                "answer": 9608,
                "state": 9047,
                "candidate": 23,
                "affected_candidate": 27,
                "state_multiplier": 12
            }
        }
    ]
    
    campaignTrail_temp.answer_feedback_json = [
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 652,
            "fields": {
                "answer": 1661,
                "candidate": 23,
                "answer_feedback": "The reformist wing is overjoyed to hear this, yet most conservatives groan. As you've entered serious competition for Bergia, you lose votes in the conservative regions."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 654,
            "fields": {
                "answer": 1667,
                "candidate": 23,
                "answer_feedback": "This is an answer that attempts to bridge the gap, but you still lose with some conservatives."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 656,
            "fields": {
                "answer": 3227,
                "candidate": 23,
                "answer_feedback": "Many in the NFP try to paint Petr's selection as nepotism, but most Sords aren't buying it."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 657,
            "fields": {
                "answer": 3228,
                "candidate": 23,
                "answer_feedback": "Highlightig your running mate's record is never a bad decision."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 660,
            "fields": {
                "answer": 3232,
                "candidate": 23,
                "answer_feedback": "The conservatives are pleasantly surprised by this decision to move farther to the right, while the progressives are in shock that you'd be so pro-Soll.\nBluds also see this as a dog-whistle."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 661,
            "fields": {
                "answer": 3233,
                "candidate": 23,
                "answer_feedback": "Good luck, Comrade Rayne."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 662,
            "fields": {
                "answer": 3234,
                "candidate": 23,
                "answer_feedback": "Great attack. Moderates breathe a sigh of relief hearing you criticize Ricter and Kibner, but people also want to hear your plan."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 663,
            "fields": {
                "answer": 3235,
                "candidate": 23,
                "answer_feedback": "Ricter and Kibner spend the entire night making fun of your absence. This is sure to hurt you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 664,
            "fields": {
                "answer": 3238,
                "candidate": 23,
                "answer_feedback": "Advisors agree Kibner won the debate, giving him a nice boost in the polls."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 670,
            "fields": {
                "answer": 3247,
                "candidate": 23,
                "answer_feedback": "It's nice to have a strong stance against Rumburg, and most Sords like to hear it."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 671,
            "fields": {
                "answer": 3248,
                "candidate": 23,
                "answer_feedback": "Sure, it's nice to be diplomatic, but Sords want a strong response."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 672,
            "fields": {
                "answer": 3249,
                "candidate": 23,
                "answer_feedback": "First of all, you are promising a declaration of war against Rumburg, so there's that, second, his is way too extreme for most Sords to get behind. This will hurt you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 673,
            "fields": {
                "answer": 3250,
                "candidate": 23,
                "answer_feedback": "Anton, you can't be serious. This is the second biggest issue besides the economy. You aren't gonna benefit from dodging Rumburg questions at ALL."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 679,
            "fields": {
                "answer": 1661,
                "candidate": 24,
                "answer_feedback": "This is not what most Democrats want to hear you say when you talk about Medicare."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 681,
            "fields": {
                "answer": 1665,
                "candidate": 23,
                "answer_feedback": "This is an answer that gains conservative respect, while also turning off some reformists. As well, you can kiss any shot you had in Bergia gone."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9119,
            "fields": {
                "answer": 3231,
                "candidate": 23,
                "answer_feedback": "The reformist wing of the USP gives you a standing ovation, and although many conservatives and moderates are annoyed at this choice, they'll do anything to stop Ricter and Kibner."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9126,
            "fields": {
                "answer": 1669,
                "candidate": 23,
                "answer_feedback": "This is a good attack, as many think the PFJP is too liberal. Just make sure not to attack RIcter only."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9129,
            "fields": {
                "answer": 1670,
                "candidate": 23,
                "answer_feedback": "The phrase \"Kibner has the right ideas\" raises a few eyebrows, but people get what you mean. Make sure not to attack Kibner only."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9131,
            "fields": {
                "answer": 1671,
                "candidate": 23,
                "answer_feedback": "This is not a good idea."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9132,
            "fields": {
                "answer": 1672,
                "candidate": 23,
                "answer_feedback": "The attacks play smoothly, and Sords agree with your point. Good move."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9133,
            "fields": {
                "answer": 3292,
                "candidate": 23,
                "answer_feedback": "Conservatives cheer on this stance, while reformists and oligarchs are deflated. Additionally, referencing Soll shouldn't be a bad idea."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9136,
            "fields": {
                "answer": 3293,
                "candidate": 23,
                "answer_feedback": "Reformists are happy with this stance, while conservatives are concerned. Additionally, some are weary of a Free-Market economy after Alphonso's failed market reforms."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9139,
            "fields": {
                "answer": 3294,
                "candidate": 23,
                "answer_feedback": "It's the economy, stupid."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9144,
            "fields": {
                "answer": 1666,
                "candidate": 23,
                "answer_feedback": "This answer does almost nothing besides help in Bergia, as most of Sordland still loves Soll. Expect a big hit."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9152,
            "fields": {
                "answer": 1662,
                "candidate": 23,
                "answer_feedback": "Reformists don't like how dangerously close you are getting to Kibner's rhetoric, but conservatives are pleased with this. You'll take a major hit in Bergia as of result."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9154,
            "fields": {
                "answer": 1663,
                "candidate": 23,
                "answer_feedback": "If you didn't come in support of Soll the last question, you can officially say goodbye to Bergia. This is a stance that is cheered on by some NFP members, but hurts you everywhere else."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9156,
            "fields": {
                "answer": 1788,
                "candidate": 23,
                "answer_feedback": "Most Sords don't like the idea of having to pay for their healthcare, but this is overall a popular plan. Privatization isn't a massive issue, so this really shouldn't matter."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9157,
            "fields": {
                "answer": 1789,
                "candidate": 23,
                "answer_feedback": "Many Sords don't like the idea of having to pay for healthcare, so nice job taking that angle. Privatization isn't a massive issue in this election, so this won't really matter."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9158,
            "fields": {
                "answer": 1790,
                "candidate": 23,
                "answer_feedback": "This is a highly popular plan that doesn't upset either side. Privatization isn't a massive issue, so this won't really matter much"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9159,
            "fields": {
                "answer": 1791,
                "candidate": 23,
                "answer_feedback": "Fair."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9160,
            "fields": {
                "answer": 3289,
                "candidate": 23,
                "answer_feedback": "Nice to stand up for Petr here. The rumors still persist though."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9161,
            "fields": {
                "answer": 3290,
                "candidate": 23,
                "answer_feedback": "The rumors of a political divide start in the papers, but you and Petr know they aren't true. Regardless, this will hurt you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9163,
            "fields": {
                "answer": 3291,
                "candidate": 23,
                "answer_feedback": "Sure, but the rumors will surely grow."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9164,
            "fields": {
                "answer": 1795,
                "candidate": 23,
                "answer_feedback": "This is fair, but Suheil doesn't have much dirt on her."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9165,
            "fields": {
                "answer": 1796,
                "candidate": 23,
                "answer_feedback": "Holstron has always been more vocal about his disdain for the Bluds, so make sure to hammer him on that\n"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9167,
            "fields": {
                "answer": 1797,
                "candidate": 23,
                "answer_feedback": "Why?"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9168,
            "fields": {
                "answer": 1685,
                "candidate": 23,
                "answer_feedback": "Reformists are fired up, and some from Ricter's camp are flocking to your campaign, but this cancels out with conservatives leaving your campaign, some sitting home, some going to Kibner."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9169,
            "fields": {
                "answer": 1686,
                "candidate": 23,
                "answer_feedback": "Conservatives are ecstatic to hear this and start coming to your campaign to have an excuse not to vote for Kibner, while reformists are pissed and flock to Ricter at alarming rates."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9172,
            "fields": {
                "answer": 1687,
                "candidate": 23,
                "answer_feedback": "With this being the 3rd biggest question besides the Economy and Rumburg, there is 0 way silence on the issue will not hurt you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9174,
            "fields": {
                "answer": 3236,
                "candidate": 23,
                "answer_feedback": "Advisors agree You won the debate, giving you a nice boost in the polls."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9178,
            "fields": {
                "answer": 3237,
                "candidate": 23,
                "answer_feedback": "Advisors agree Ricter won the debate, giving a a nice boost in the polls."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9190,
            "fields": {
                "answer": 1786,
                "candidate": 23,
                "answer_feedback": "Monica is happy to see you stick up for her, but this answer has its expected supporters and detractors."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9191,
            "fields": {
                "answer": 1787,
                "candidate": 23,
                "answer_feedback": "Your wife is pissed, but at least you shored up some conservative support with this stance. Have fun sleeping on the couch for a few nights!"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9197,
            "fields": {
                "answer": 9196,
                "candidate": 23,
                "answer_feedback": "Your wife is less than happy about this, but she'll take it. As far as politically, most reformists don't feel like your going far enough, while conservatives see this as a great compromise."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9198,
            "fields": {
                "answer": 1774,
                "candidate": 23,
                "answer_feedback": "The investigation concluded that no wrongdoing on Petr's part had been discovered."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9201,
            "fields": {
                "answer": 1775,
                "candidate": 23,
                "answer_feedback": "The investigation concluded that Petr had been involved in multiple extramarital affairs. This will hurt you with primarily liberal circles."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9204,
            "fields": {
                "answer": 9199,
                "candidate": 23,
                "answer_feedback": "The investigation concluded that Petr had used his positions of power over the years to prey on vulnerable women, specifically the young. The USP is furious and forces you to drop him for Anrica mayor Curtain Leste. This could be the end of your campaign if you're not careful."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9208,
            "fields": {
                "answer": 9200,
                "candidate": 23,
                "answer_feedback": "Evelyn keeps the investigation private, and she and Petr's relationship is fractured, and the public makes rumors that they're in an open marriage. This will hurt you a little bit."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9210,
            "fields": {
                "answer": 1782,
                "candidate": 23,
                "answer_feedback": "This is kind of a break from party norms, and most Sords don't like the idea of being too reliant on foreign trade, but they are intrigued at the possibility of joining either alliance."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9212,
            "fields": {
                "answer": 1783,
                "candidate": 23,
                "answer_feedback": "This is in line with the USP's views, as well as the view of the average Sord. However, people want solutions to the recession fast, and are willing to do anything it takes, even if it means picking a side."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9214,
            "fields": {
                "answer": 1748,
                "candidate": 23,
                "answer_feedback": "98% of Sords, even some NFP members think Holstron went too far. Expect to see a boost for you and Ricter."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9217,
            "fields": {
                "answer": 1749,
                "candidate": 23,
                "answer_feedback": "You, the sweaty manchild sitting behind your screen in your bed. Are you trying to make rayne lose? You gain nothing with this answer, even the majority of the NFP hates Holstrons answer. Have fun losing in a blowout"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9219,
            "fields": {
                "answer": 1750,
                "candidate": 23,
                "answer_feedback": "Why not?"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9294,
            "fields": {
                "answer": 9293,
                "candidate": 23,
                "answer_feedback": "\"Anton, your sleeping on the couch for at least a month. If your not gonna support me, i don't know why you married me in the first place.\""
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9298,
            "fields": {
                "answer": 9297,
                "candidate": 23,
                "answer_feedback": "The majority of Sordland respects this decision, as Soll is still a popular figure. "
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9313,
            "fields": {
                "answer": 9312,
                "candidate": 23,
                "answer_feedback": "Many people cheer on the hardline stance, but dovish regions see this as a dog-whistle, and you lose votes in them."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9319,
            "fields": {
                "answer": 9318,
                "candidate": 23,
                "answer_feedback": "This is simply nowhere near the mainstream answer on this position. Sords see what's going on in their cities, and it's the exact opposite of what you're saying."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9322,
            "fields": {
                "answer": 9321,
                "candidate": 23,
                "answer_feedback": "Sure, it's out of the main opinion, but at least you've gotten some gains with the more dovish regions. Also, Justice Morgna wants to hook up with you now."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9329,
            "fields": {
                "answer": 9328,
                "candidate": 23,
                "answer_feedback": "This answer pleases conservatives, yet liberals are a bit concerned Sordland is becoming isolationist."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9333,
            "fields": {
                "answer": 9332,
                "candidate": 23,
                "answer_feedback": "This is a fair answer however, relations with Wehlen would be damaged if you win and the nationalists are fired up to vote for NFP."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9339,
            "fields": {
                "answer": 9338,
                "candidate": 23,
                "answer_feedback": "This is an issue you can't run from if elected, but the majority of the country has more important stuff to worry about."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9342,
            "fields": {
                "answer": 9341,
                "candidate": 23,
                "answer_feedback": "This is a highly popular proposal that goes over well with all sides of the political spectrum, specifically conservatives. You'll see a boost, particularly in Agnland."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9345,
            "fields": {
                "answer": 9344,
                "candidate": 23,
                "answer_feedback": "This is a highly popular proposal that goes over well with all sides of the political spectrum, specifically liberals. Expect to see a boost, specifically in Nargis."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9348,
            "fields": {
                "answer": 9347,
                "candidate": 23,
                "answer_feedback": "This is a really bad stance, because all sides support new infrastructure. Expect to take a hit."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9352,
            "fields": {
                "answer": 9351,
                "candidate": 23,
                "answer_feedback": "Anton it's apparent, you CANNOT dodge economy related questions at ALL in this campaign. Stahler pledges for the highway while Kibner and Ricter pledge the railroad"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9356,
            "fields": {
                "answer": 9355,
                "candidate": 23,
                "answer_feedback": "Petr makes a crude joke about Suheil that seems incredibly sexist and made him look unprofessional. Pundits agree he lost the debate by far and Suheil won."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9360,
            "fields": {
                "answer": 9359,
                "candidate": 23,
                "answer_feedback": "Petr's charisma and energy shines above the rest, pundits agree he won the debate, giving you a well needed boost in the polls."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9363,
            "fields": {
                "answer": 9362,
                "candidate": 23,
                "answer_feedback": "Petr makes a play for Holstron's demographic, which pundits agree came off really bad. Suheil was a bust, so by process of elimination, they agree Holstron won."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9367,
            "fields": {
                "answer": 9366,
                "candidate": 23,
                "answer_feedback": "Suheil and Holstron mock Petr's absense and pundits shame him aswell. Many are calling him a coward, and the action has made Suheil and Holstron look 10x more vice presidential. This will hurt a LOT."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9373,
            "fields": {
                "answer": 9372,
                "candidate": 23,
                "answer_feedback": "Though a good moral, in the final stages of a tight campaign like this you CANNOT afford to miss such a crucial event."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9378,
            "fields": {
                "answer": 9377,
                "candidate": 23,
                "answer_feedback": "Most people agree that you won the debate, giving you a well-needed bump in polling."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9381,
            "fields": {
                "answer": 9380,
                "candidate": 23,
                "answer_feedback": "Most people agree that Ricter won the debate, giving him a well-needed bump in polling."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9385,
            "fields": {
                "answer": 9384,
                "candidate": 23,
                "answer_feedback": "Most people agree that Kibner won the debate, giving him a well-needed bump in polling."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9390,
            "fields": {
                "answer": 9389,
                "candidate": 23,
                "answer_feedback": "This might be for the best, honestly."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9393,
            "fields": {
                "answer": 9392,
                "candidate": 23,
                "answer_feedback": "These attacks go by smoothly and reformists flock to your campaign. This does give Kibner a boost also, though."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9398,
            "fields": {
                "answer": 9397,
                "candidate": 23,
                "answer_feedback": "You've inserted yourself into this controversy, and many are dumbfounded by this decision. Ricter goes down but you do too, and Kibner is seen as the only victor."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9403,
            "fields": {
                "answer": 9402,
                "candidate": 23,
                "answer_feedback": "You have managed to somehow make the entire thing about you, and see a bigger polling dip than Ricter. Conservatives are mad you're defending the opposition, and reformists are mad because of your sexism towards Suheil. This is the end of your campaign, and subsequent political career."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9408,
            "fields": {
                "answer": 9407,
                "candidate": 23,
                "answer_feedback": "This is an answer that fires up the county to vote for you, and makes citizens remember why the believe in you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9411,
            "fields": {
                "answer": 9410,
                "candidate": 23,
                "answer_feedback": "This answer is way too mean-spirited to get anyone fired up, especially with how dreary the times are."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9416,
            "fields": {
                "answer": 9415,
                "candidate": 23,
                "answer_feedback": "This is an answer that gets the job done. Emphasizing your background is always a must."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9419,
            "fields": {
                "answer": 9418,
                "candidate": 23,
                "answer_feedback": "This fuels the Hawks and Conservatives, yet moderates, liberals, and Doves feel a bit dejected."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9424,
            "fields": {
                "answer": 9423,
                "candidate": 23,
                "answer_feedback": "A Morgna wes core, Vectern sis da!"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9428,
            "fields": {
                "answer": 9427,
                "candidate": 23,
                "answer_feedback": "A Morgna wes core, Vetern sis da!"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9433,
            "fields": {
                "answer": 9432,
                "candidate": 23,
                "answer_feedback": "A Morgna wes core, Vectern sis da!"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9437,
            "fields": {
                "answer": 9436,
                "candidate": 23,
                "answer_feedback": "A Morgna wes core, Vectern sis da!"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9443,
            "fields": {
                "answer": 9439,
                "candidate": 23,
                "answer_feedback": "The only people who like this answer are Diehard nationalists. Conservatives would rather things stay the same, reformists and moderates are pissed, and moderate NFP members are completely fired up to vote for you."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9452,
            "fields": {
                "answer": 9440,
                "candidate": 23,
                "answer_feedback": "This is the type of answer that gets someone thrown out of their party. You've guaranteed that even IF you win, no sane USP MP would want to vote for you. All you'll pass is bipartisan shit."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9456,
            "fields": {
                "answer": 9441,
                "candidate": 23,
                "answer_feedback": "This is an answer that hurts with independents, but stays fine everywhere else"
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9458,
            "fields": {
                "answer": 9457,
                "candidate": 23,
                "answer_feedback": "This is an issue that will get bigger if you go the way of a new constitution, but for now this stance is fine."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9461,
            "fields": {
                "answer": 9289,
                "candidate": 23,
                "answer_feedback": "This answer is extremely vague, but it gets the job done."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9471,
            "fields": {
                "answer": 9290,
                "candidate": 23,
                "answer_feedback": "It's the economy, stupid."
            }
        },
        {
            "model": "campaign_trail.answer_feedback",
            "pk": 9485,
            "fields": {
                "answer": 9484,
                "candidate": 23,
                "answer_feedback": "The attacks actually go pretty good, and most audiences agree with them."
            }
        }
    ]
    
    campaignTrail_temp.candidate_image_url = "https://i.imgur.com/73veZGz.jpeg";
    campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/9Kf39bc.jpeg";
    campaignTrail_temp.candidate_last_name = "Rayne";
    campaignTrail_temp.running_mate_last_name = "Vectern";
    
    
    
    campaignTrail_temp.jet_data = [{
        "banner_enabled": true,
        "banner_data": {
            "canName": "Rayne",
            "canImage": "https://i.imgur.com/73veZGz.jpeg",
            "runName": "Vectern",
            "runImage": "https://i.imgur.com/9Kf39bc.jpeg"
        },
        "endings_enabled": false,
        "ending_data": {
            "1726801109575": {
                "id": 1726801109575,
                "variable": "1",
                "operator": ">",
                "value": 0,
                "endingImage": "",
                "endingText": " <p>HTML tags</p>!",
                "amount": "10"
            }
        },
        "mapping_enabled": true,
        "mapping_data": {
            "mapSvg": "",
            "x": "876",
            "y": "302",
            "dx": "-160",
            "dy": "-22",
            "electionPk": "4"
        },
        "cyoa_enabled": false,
        "cyoa_data": {}
    }
    ]
    
   
    
    campaignTrail_temp.cyoa = true

    
    campaignTrail_temp.cyoa = true

    function switcheroo() {
        campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/iP9G3nP.png';
        campaignTrail_temp.running_mate_last_name = 'Leste';
    }
    

    
    cyoAdventure = function(a) {
        ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
        if(ans == 9199){
            console.log("done");
            switcheroo();
            }    campaignTrail_temp.questions_json[campaignTrail_temp.question_number + 1];
        }
                endingPicker = (out, totv, aa, quickstats) => {
                used=false
                orderID = [aa[0].candidate, aa[1].candidate, aa[2].candidate, aa[3].candidate, aa[4].candidate];
                e.final_overall_results.sort((a, b) => b.popular_votes - a.popular_votes);
                // Astro's Ending Template
                
                // Template 1 - Simple 1v1 races
                
                //out = "win", "loss", or "tie" for your candidate
                //totv = total votes in entire election
                //aa = all final overall results data
                //quickstats = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)
                
                //quickstats[0] is the default, and it tracks your electoral vote count.
                
             if (orderID[0] == 23 && orderID[3] == 27 && aa[0].popular_votes/totv >= 0.2 && aa[3].popular_votes/totv >= 0.1) {
                //If you want to enable replacing the image based upon your performance, copy from here....
                    if (used != true) {
                        setInterval(function () {
                            used = true;
                            imgg = document.getElementsByClassName("person_image")[0];
                            if (imgg != null) {
                                imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                            }
                        }, 100);
                    }
                    // to here!
                     return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith PFJP staying in 2nd, and NFP staying in 3rd. Aditionally, Denis Stahler has hit the 10% threshold, and the Communist Party of Sordland will be in the assembly. You can choose to work with or against them, It's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else if (orderID[0] == 23 && orderID[3] == 26 && aa[0].popular_votes/totv >= 0.3 && aa[3].popular_votes/totv >= 0.1) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                              }
                          }, 100);
                      }
                      // to here!
                return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith PFJP staying in 2nd, and the NFP staying in 3rd. Aditionally, Feith Ejall has hit the 10% threshold, and the Workers Party of Bludia will be in the assembly. You can choose to work with or against them, it's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 24 && campaignTrail_temp.running_mate_last_name == "Vectern") {
                    if (used != true) {
                        setInterval(function () {
                            used = true;
                            imgg = document.getElementsByClassName("person_image")[0];
                            if (imgg != null) {
                                imgg.src = "https://i.imgur.com/5Du2C3O.jpeg";
                            }
                        }, 100);
                    }
                   return "<h3><h3>Our Fight isn't over.</h3><p>Anton, even though you lost, you've invoked a fire within the Sordish people, one that will only continue to grow. The workers are now threatening to overthrow the government if they are not treated fairly, and insert you as dictator. The federal government is now looking for you, and your family has moved to United Contana. But you stayed because you know the workers revolution will be realized, it's only a matter of time.</p>";
                } else  if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 24 && campaignTrail_temp.running_mate_last_name == "Vectern") {
                    if (used != true) {
                        setInterval(function () {
                            used = true;
                            imgg = document.getElementsByClassName("person_image")[0];
                            if (imgg != null) {
                                imgg.src = "https://i.imgur.com/5Du2C3O.jpeg";
                            }
                        }, 100);
                    }
                   return "<h3><h3>Our Fight isn't over.</h3><p>Anton, even though you lost, you've invoked a fire within the Sordish people, one that will only continue to grow. The workers are now threatening to overthrow the government if they are not treated fairly, and insert you as dictator. The federal government is now looking for you, and your family has moved to United Contana. But you stayed because you know the workers revolution will be realized, it's only a matter of time.</p>";
                } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 25 && campaignTrail_temp.running_mate_last_name == "Vectern") {
                
                    if (used != true) {
                        setInterval(function () {
                            used = true;
                            imgg = document.getElementsByClassName("person_image")[0];
                            if (imgg != null) {
                                imgg.src = "https://i.imgur.com/5Du2C3O.jpeg";
                            }
                        }, 100);
                    } return "<h3><h3>Our Fight isn't over.</h3><p>Anton, even though you lost, you've invoked a fire within the Sordish people, one that will only continue to grow. The workers are now threatening to overthrow the government if they are not treated fairly, and insert you as dictator. The federal government is now looking for you, and your family has moved to United Contana. But you stayed because you know the workers revolution will be realized, it's only a matter of time, and all we can do is wait...</p>";
                } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 24 && campaignTrail_temp.running_mate_last_name == "Leste") {
                        if (used != true) {
                            setInterval(function () {
                                used = true;
                                imgg = document.getElementsByClassName("person_image")[0];
                                if (imgg != null) {
                                    imgg.src = "https://i.imgur.com/5Du2C3O.jpeg";
                                }
                            }, 100);
                        }
                       return "<h3><h3>Our Fight isn't over.</h3><p>Anton, even though you lost, you've invoked a fire within the Sordish people, one that will only continue to grow. The workers are now threatening to overthrow the government if they are not treated fairly, and insert you as dictator. The federal government is now looking for you, and your family has moved to United Contana. But you stayed because you know the workers revolution will be realized, it's only a matter of time.</p>";
                    } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 25 && campaignTrail_temp.running_mate_last_name == "Leste") {
                    
                        if (used != true) {
                            setInterval(function () {
                                used = true;
                                imgg = document.getElementsByClassName("person_image")[0];
                                if (imgg != null) {
                                    imgg.src = "https://i.imgur.com/5Du2C3O.jpeg";
                                }
                            }, 100);
                        }
                    return "<h3><h3>Our Fight isn't over.</h3><p>Anton, even though you lost, you've invoked a fire within the Sordish people, one that will only continue to grow. The workers are now threatening to overthrow the government if they are not treated fairly, and insert you as dictator. The federal government is now looking for you, and your family has moved to United Contana. But you stayed because you know the workers revolution will be realized, it's only a matter of time, and all we can do is wait...</p>";
            } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 23 && campaignTrail_temp.running_mate_last_name == "Vectern") {

                if (used != true) {
                    setInterval(function () {
                        used = true;
                        imgg = document.getElementsByClassName("person_image")[0];
                        if (imgg != null) {
                            imgg.src = "https://i.imgur.com/MhA4pO7.jpeg";
                        }
                    }, 100);
                }
                return "<h3><h3>ROHTAER OZGAGAE! WORKERS REJOICE!</h3><p>The Sordish people have spoken, and they've spoken LOUD. You wil be the 4th president of Sordland, and rid the country of the class system. But first, we need a new constitution. One to give you major executive power to ban other parties, then we change the party manifesto, and after that, Tusk and Koronti will be under Antel Rock. But most importantly, we must sign the Workers Rights Act. This will be the greatest 4+ years that Sordland has, and wil ever see! Lob a ganecikom Rayne!</p>";
                          } else if (campaignTrail_temp.player_answers[0] == 3233 && orderID[0] == 23 && campaignTrail_temp.running_mate_last_name == "Leste") {

                if (used != true) {
                    setInterval(function () {
                        used = true;
                        imgg = document.getElementsByClassName("person_image")[0];
                        if (imgg != null) {
                            imgg.src = "https://i.imgur.com/MhA4pO7.jpeg";
                        }
                    }, 100);
                }
                return "<h3><h3>ROHTAER OZGAGAE! WORKERS REJOICE!</h3><p>The Sordish people have spoken, and they've spoken LOUD. You wil be the 4th president of Sordland, and rid the country of the class system. But first, we need a new constitution. One to give you major executive power to ban other parties, then we change the party manifesto, and after that, Tusk and Koronti will be under Antel Rock. But most importantly, we must sign the Workers Rights Act. This will be the greatest 4+ years that Sordland has, and wil ever see! Lob a ganecikom Rayne!</p>";
            } else if (orderID[0] == 23 && orderID[1] == 24) {
                  //If you want to enable replacing the image based upon your performance, copy from here....
                    if (used != true) {
                        setInterval(function () {
                            used = true;
                            imgg = document.getElementsByClassName("person_image")[0];
                            if (imgg != null) {
                                imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                            }
                        }, 100);
                    }
                    // to here!
                     return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith PFJP staying in 2nd, and NFP staying in 3rd. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else if (orderID[0] == 23 && orderID[1] == 25) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                              }
                          }, 100);
                      }
                      // to here!
                return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith NFP rising to the 2nd largest party in Sordland, and the PFJP falling to 3rd. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else if (orderID[0] == 24 && orderID[1] == 23) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
                              }
                          }, 100);
                      }
                      // to here!
                return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, a feat that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics seems bleak, especially since you cost the party it's majority, but with how young you are, you could definitely stick around in the assembly, and maybe even run again in 4 years if Ricter handles the job poorly.</p>"
                } else if (orderID[0] == 24 && orderID[1] == 25) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
                              }
                          }, 100);
                      }
                return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP's and Frens Ricter have become the largest party in Sordland, While NFP has rise to the 2nd largest party, and USP falls all the way to third, a feat that most didn't expect given your early lead. In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is bleak, especially since you cost the party it's majority, and are now viewed as a discrace due to making them fall to 3rd place. But with how young you are, you could definitely stick around in the assembly, and maybe even run again in 4 years if Ricter handles the job poorly. If all else fails, don't forget that you have a beautiful family and an amazing best friend by your side.</p>"
                } else if (orderID[0] == 25 && orderID[1] == 23) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
                              }
                          }, 100);
                      }
                return "<h3>Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner and the NFP have become the largest party in Sordland, a feat that most didn't expect given your early lead. In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is bleak, especially since you cost the party it's majority. But with how young you are, you could definitely stick around in the assembly, and maybe even run again in 4 years if Kibner handles the job poorly.</p>"
                } else if (orderID[0] == 25 && orderID[1] == 24) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                      if (used != true) {
                          setInterval(function () {
                              used = true;
                              imgg = document.getElementsByClassName("person_image")[0];
                              if (imgg != null) {
                                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
                              }
                          }, 100);
                      }
                return "<h3Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner and the NFP have become the largest party in Sordland, PFJP stays at 2nd, and USP falls all the way to 3rd, a feat that most didn't expect given your early lead. In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is bleak, especially since you cost the party it's majority. But with how young you are, you could definitely stick around in the assembly, and a run in 4 years is out of the question, hopefully Sordland won't be a dictatorship by that point. If all else fails, don't forget that you have a beautiful family and an amazing best friend by your side.</p>"
            } else if (orderID[0] == 24 && orderID[1] == 23 && orderID[3] == 26 && aa[3].popular_votes/totv >= 0.1) {
                //If you want to enable replacing the image based upon your performance, copy from here....
                  if (used != true) {
                      setInterval(function () {
                          used = true;
                          imgg = document.getElementsByClassName("person_image")[0];
                          if (imgg != null) {
                              imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
                          }
                      }, 100);
                  }
                  // to here!
            return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP in 3rd. Additionally, the Workers Party of Bludia has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics seems bleak, especially since you cost the party it's majority, AND let a new party in, but with how young you are, you could definitely stick around in the assembly, and maybe even run again in 4 years if Ricter handles the job poorly.</p>"
        } else if (orderID[0] == 24 && orderID[1] == 25 && orderID[3] == 26 && aa[3].popular_votes/totv >= 0.1) {
            //If you want to enable replacing the image based upon your performance, copy from here....
              if (used != true) {
                  setInterval(function () {
                      used = true;
                      imgg = document.getElementsByClassName("person_image")[0];
                      if (imgg != null) {
                          imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
                      }
                  }, 100);
              }
              // to here!
        return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP rising to 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you can kiss your future in politics goodbye, especially since made the party fall to 3rd AND let a new party into the assembly, but with how young you are, you could possibly stick around in the assembly, and maybe even teach Deana a thing or two about politics.</p>"
    } else if (orderID[0] == 25 && orderID[1] == 23 && orderID[3] == 26 && aa[3].popular_votes/totv >= 0.1) {
        //If you want to enable replacing the image based upon your performance, copy from here....
          if (used != true) {
              setInterval(function () {
                  used = true;
                  imgg = document.getElementsByClassName("person_image")[0];
                  if (imgg != null) {
                      imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
                  }
              }, 100);
          }
          // to here!
    return "<h3>Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner has led NFP to become the largest party in Sordland, followed by USP falling to 2nd, and PFJP falling to 3rd. Additionally, the Workers Party of Bludia has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics seems bleak, especially since you cost the party it's majority and let a new party in, but given how young you are, you could definitely stick around in the assembly, and if Sordland isn't a dictatorship at that point, possibly run in 1957.</p>"
} else if (orderID[0] == 25 && orderID[1] == 24 && orderID[3] == 26 && aa[3].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner has led NFP to become the largest party in Sordland, followed by PFJP staying at 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you can kiss your future in politics goodbye, especially since made the party fall to 3rd AND let a new party into the assembly, but with how young you are, you could possibly stick around in the assembly, and maybe even teach Deana a thing or two about politics.</p>"
} else if (orderID[0] == 24 && orderID[1] == 23 && orderID[3] == 27 && aa[3].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by USP dropping to 2nd, and NFP staying in 3rd. Additionally, the Communist Party of Sordland has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics seems bleak, especially since you cost the party it's majority, AND let a new party in, but with how young you are, you could definitely stick around in the assembly, and maybe even run again in 4 years if Ricter handles the job poorly.</p>"
} else if (orderID[0] == 24 && orderID[1] == 25 && orderID[3] == 27 && aa[3].popular_votes/totv >= 0.1) {
//If you want to enable replacing the image based upon your performance, copy from here....
  if (used != true) {
      setInterval(function () {
          used = true;
          imgg = document.getElementsByClassName("person_image")[0];
          if (imgg != null) {
              imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
          }
      }, 100);
  }
  // to here!
return "<h3>Sorry, you have lost the 1953 election.</h3><p>It seems like Sordland is ready for a change.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP rising to 2nd, and USP falling to 3rd. Additionally, the Communist Party of Sordland has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you can kiss your future in politics goodbye, especially since made the party fall to 3rd AND let a new party into the assembly, but with how young you are, you could possibly stick around in the assembly, and maybe even teach Deana a thing or two about politics.</p>"
} else if (orderID[0] == 25 && orderID[1] == 23 && orderID[3] == 27 && aa[3].popular_votes/totv >= 0.1) {
//If you want to enable replacing the image based upon your performance, copy from here....
if (used != true) {
  setInterval(function () {
      used = true;
      imgg = document.getElementsByClassName("person_image")[0];
      if (imgg != null) {
          imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
      }
  }, 100);
}
// to here!
return "<h3>Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner has led NFP to become the largest party in Sordland, followed by USP falling to 2nd, and PFJP falling to 3rd. Additionally, the Communist Party of Sordland has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics seems bleak, especially since you cost the party it's majority and let a new party in, but given how young you are, you could definitely stick around in the assembly, and if Sordland isn't a dictatorship at that point, possibly run in 1957.</p>"
} else if (orderID[0] == 25 && orderID[1] == 24 && orderID[3] == 27 && aa[3].popular_votes/totv >= 0.1) {
//If you want to enable replacing the image based upon your performance, copy from here....
if (used != true) {
setInterval(function () {
  used = true;
  imgg = document.getElementsByClassName("person_image")[0];
  if (imgg != null) {
      imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
  }
}, 100);
}
// to here!
return "<h3>Sorry, you have lost the 1953 election.</h3><p>Luderin led to Soll, Alphonso led to Kibner.</p><p>You have become the first member of the USP to lose a presidential election, as Kesaro Kibner has led NFP to become the largest party in Sordland, followed by PFJP staying at 2nd, and USP falling to 3rd. Additionally, the Communist Party of Sordland has made the assembly, making the loss possibly worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you can kiss your future in politics goodbye, especially since made the party fall to 3rd AND let a new party into the assembly, but with how young you are, you could possibly stick around in the assembly, and maybe even teach Deana a thing or two about politics.</p>"
} else if (orderID[0] == 24 && orderID[1] == 23 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is a horrible outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by USP falling to 2nd, and NFP staying in 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 24 && orderID[1] == 23 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is a horrible outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP in 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 24 && orderID[1] == 25 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is a horrible outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP rising to 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 24 && orderID[1] == 25 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/XH5qNAf.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is the worst outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as PFJP and Frens Ricter have become the largest party in Sordland, followed by NFP rising to 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Ricter will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 25 && orderID[1] == 23 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is a horrible outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as NFP and Kesaro Kibner have become the largest party in Sordland, followed by USP falling to 2nd, and PFJP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 25 && orderID[1] == 23 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is a horrible outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as NFP and Kesaro Kibner have become the largest party in Sordland, followed by USP falling to 2nd, and PFJP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 25 && orderID[1] == 24 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is the worst outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as NFP and Kesaro Kibner have become the largest party in Sordland, followed by PFJP falling to 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 25 && orderID[1] == 24 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
      if (used != true) {
          setInterval(function () {
              used = true;
              imgg = document.getElementsByClassName("person_image")[0];
              if (imgg != null) {
                  imgg.src = "https://i.imgur.com/soMJ4fr.jpeg";
              }
          }, 100);
      }
      // to here!
return "<h3>''NIGHTMARE FOR USP, RAYNE LOSES AND WORKERS PARTY AND COMMUNIST PARTY MAKE ASSEMBLY''</h3><p>This is the worst outcome for the USP's power.</p><p>You have become the first member of the USP to lose a presidential election, as NFP and Kesaro Kibner have become the largest party in Sordland, followed by PFJP falling to 2nd, and USP falling to 3rd. Additionally, the Workers Party of Bludia and the Communist Party of Sordland have both made the assembly, making the loss even worse. Feats that most didn't expect given your early lead In retrospect, however, give the faliure of Alphonso's administration, it seems like this could've been expected. President Kibner will have a lot on his plate, so let's hope he handles everything right. As for you, you're future in politics is almost non-existant, especially since you cost the party it's majority, AND let 2 new party in, you'd be lucky to keep your assembly seat. Let's just hope that Deana doesn't mess up as bad as you.</p>"
} else if (orderID[0] == 23 && orderID[1] == 24 && orderID[2] == 25 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
    //If you want to enable replacing the image based upon your performance, copy from here....
        if (used != true) {
            setInterval(function () {
                used = true;
                imgg = document.getElementsByClassName("person_image")[0];
                if (imgg != null) {
                    imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                }
            }, 100);
        }
        // to here!
         return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith PFJP staying in 2nd, and NFP staying in 3rd.  Aditionally, both the Workers Party of Bludia and the Communist Party of Sordland have made the assembly. You can choose to work with or against them, It's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
        } else if (orderID[0] == 23 && orderID[1] == 25 && orderID[2] == 24 && orderID[3] == 26 && orderID[4] == 27 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
            //If you want to enable replacing the image based upon your performance, copy from here....
                if (used != true) {
                    setInterval(function () {
                        used = true;
                        imgg = document.getElementsByClassName("person_image")[0];
                        if (imgg != null) {
                            imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                        }
                    }, 100);
                }
                // to here!
                 return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith NFP rising to 2nd, and PFJP falling to 3rd.  Aditionally, both the Workers Party of Bludia and the Communist Party of Sordland have made the assembly. You can choose to work with or against them, It's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else if (orderID[0] == 23 && orderID[1] == 24 && orderID[2] == 25 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
                    //If you want to enable replacing the image based upon your performance, copy from here....
                        if (used != true) {
                            setInterval(function () {
                                used = true;
                                imgg = document.getElementsByClassName("person_image")[0];
                                if (imgg != null) {
                                    imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                                }
                            }, 100);
                        }
                        // to here!
                         return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith PFJP staying in 2nd, and NFP staying in 3rd.  Aditionally, both the Workers Party of Bludia and the Communist Party of Sordland have made the assembly. You can choose to work with or against them, It's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                        } else if (orderID[0] == 23 && orderID[1] == 25 && orderID[2] == 24 && orderID[3] == 27 && orderID[4] == 26 && aa[3].popular_votes/totv >= 0.1 && aa[4].popular_votes/totv >= 0.1) {
                            //If you want to enable replacing the image based upon your performance, copy from here....
                                if (used != true) {
                                    setInterval(function () {
                                        used = true;
                                        imgg = document.getElementsByClassName("person_image")[0];
                                        if (imgg != null) {
                                            imgg.src = "https://i.imgur.com/73veZGz.jpeg";
                                        }
                                    }, 100);
                                }
                                // to here!
                                 return "<h3>Congratulations! You have won the 1953 election.</h3><p>Morning shall come!</p><p>You've bested Ricter and Kibner and have became the 4th president of Sordland, whith NFP rising to 2nd, and PFJP falling to 3rd.  Aditionally, both the Workers Party of Bludia and the Communist Party of Sordland have made the assembly. You can choose to work with or against them, It's up to you. You'll be dealing with a myriad of problems, like the tensions with Rumburg, fixing the economy, and possibly even making a new constitution, and depending on how you handle things, you'll either be remembered as the greatest or the worst president in Sordish history. A morgna wes core, vectern sis da!";
                } else {
                return "<h3>Oh shit. Something broke.</h3><p>Contact AgreeableMachine91 on Reddit/Discord. Congrats if you won, better luck next time if you lost.</p>"
                }
                
                }
                
                campaignTrail_temp.multiple_endings=true

            



