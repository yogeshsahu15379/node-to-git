import{r as registerInstance,h,F as Fragment,g as getElement}from"./index-abd53505.js";import{t as tailwindThemeConfig}from"./resolved-tailwind-config-21fbcf50.js";import{I as IconType}from"./enums-3680f0a7.js";var aesMenuAccordionCss=":host{display:block}.accordion:not([open]) .toggle-close{display:none}.accordion[open] .toggle-open{display:none}ul{list-style-type:none;font-size:1rem;line-height:2;padding:0}.summary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0;font-size:1rem;--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));list-style-type:none}.summary::-webkit-details-marker{display:none}:host([variant='primary']) ::slotted([slot='summary']),:host([variant='secondary']) ::slotted([slot='summary']){font-weight:700 !important;line-height:1.625 !important}@media (min-width: 768px){:host([variant='primary']) ::slotted([slot='summary']){font-weight:400 !important;font-size:1.5rem !important;line-height:2 !important}}.toggle{position:absolute;width:1.5rem;right:0;fill:currentColor}";var AesMenuAccordion=function(){function e(e){registerInstance(this,e);this.isOpen=false;this.variant="primary";this.isCollapsible=true;this.hasChildren=true;this.resizeTimer=null}e.prototype.componentDidLoad=function(){this.onWindow();if(this.variant==="primary"){this.isOpen=true}if(!this.el.querySelector("[slot='menu']")){this.hasChildren=false;console.log(this.hasChildren)}};e.prototype.onWindowResize=function(){if(this.hasChildren){this.onWindow()}};e.prototype.onWindow=function(){var e=this;clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout((function(){var t=document.documentElement.clientWidth;var i=parseInt(tailwindThemeConfig.screens.md.replace("px",""));e.isCollapsible=t<i}),200)};e.prototype.setOpen=function(){this.isOpen=!this.isCollapsible};e.prototype.render=function(){var e=h("ul",{class:"menu"},h("slot",{name:"menu"}));return this.isCollapsible&&this.hasChildren?h("details",{class:"accordion",open:this.isOpen},h("summary",{class:"summary"},h("slot",{name:"summary"}),this.isCollapsible&&h(Fragment,null,h("aes-icon",{class:"toggle toggle-open",icon:IconType.CHEVRON_DOWN}),h("aes-icon",{class:"toggle toggle-close",icon:IconType.CHEVRON_UP}))),e):h("div",{class:"accordion"},h("div",{class:"summary"},h("slot",{name:"summary"})),this.hasChildren&&e)};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isCollapsible:["setOpen"]}},enumerable:false,configurable:true});return e}();AesMenuAccordion.style=aesMenuAccordionCss;export{AesMenuAccordion as aes_menu_accordion};