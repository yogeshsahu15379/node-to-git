System.register(["./p-f6446016.system.js","./p-32b9c046.system.js","./p-bf008d80.system.js"],(function(e){"use strict";var t,i,s,n,o,r;return{setters:[function(e){t=e.r;i=e.h;s=e.F;n=e.g},function(e){o=e.t},function(e){r=e.I}],execute:function(){var l=":host{display:block}.accordion:not([open]) .toggle-close{display:none}.accordion[open] .toggle-open{display:none}ul{list-style-type:none;font-size:1rem;line-height:2;padding:0}.summary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0;font-size:1rem;--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));list-style-type:none}.summary::-webkit-details-marker{display:none}:host([variant='primary']) ::slotted([slot='summary']),:host([variant='secondary']) ::slotted([slot='summary']){font-weight:700 !important;line-height:1.625 !important}@media (min-width: 768px){:host([variant='primary']) ::slotted([slot='summary']){font-weight:400 !important;font-size:1.5rem !important;line-height:2 !important}}.toggle{position:absolute;width:1.5rem;right:0;fill:currentColor}";var a=e("aes_menu_accordion",function(){function e(e){t(this,e);this.isOpen=false;this.variant="primary";this.isCollapsible=true;this.hasChildren=true;this.resizeTimer=null}e.prototype.componentDidLoad=function(){this.onWindow();if(this.variant==="primary"){this.isOpen=true}if(!this.el.querySelector("[slot='menu']")){this.hasChildren=false;console.log(this.hasChildren)}};e.prototype.onWindowResize=function(){if(this.hasChildren){this.onWindow()}};e.prototype.onWindow=function(){var e=this;clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout((function(){var t=document.documentElement.clientWidth;var i=parseInt(o.screens.md.replace("px",""));e.isCollapsible=t<i}),200)};e.prototype.setOpen=function(){this.isOpen=!this.isCollapsible};e.prototype.render=function(){var e=i("ul",{class:"menu"},i("slot",{name:"menu"}));return this.isCollapsible&&this.hasChildren?i("details",{class:"accordion",open:this.isOpen},i("summary",{class:"summary"},i("slot",{name:"summary"}),this.isCollapsible&&i(s,null,i("aes-icon",{class:"toggle toggle-open",icon:r.CHEVRON_DOWN}),i("aes-icon",{class:"toggle toggle-close",icon:r.CHEVRON_UP}))),e):i("div",{class:"accordion"},i("div",{class:"summary"},i("slot",{name:"summary"})),this.hasChildren&&e)};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isCollapsible:["setOpen"]}},enumerable:false,configurable:true});return e}());a.style=l}}}));