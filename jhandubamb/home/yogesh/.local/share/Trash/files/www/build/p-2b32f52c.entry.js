import{r as t,h as s,F as i,g as o}from"./p-4b51ccc2.js";import{t as e}from"./p-6f2b2b6f.js";import{I as n}from"./p-e678fbf7.js";const a=class{constructor(s){t(this,s),this.isOpen=!1,this.variant="primary",this.isCollapsible=!0,this.hasChildren=!0,this.resizeTimer=null}componentDidLoad(){this.onWindow(),"primary"===this.variant&&(this.isOpen=!0),this.el.querySelector("[slot='menu']")||(this.hasChildren=!1,console.log(this.hasChildren))}onWindowResize(){this.hasChildren&&this.onWindow()}onWindow(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((()=>{const t=document.documentElement.clientWidth,s=parseInt(e.screens.md.replace("px",""));this.isCollapsible=t<s}),200)}setOpen(){this.isOpen=!this.isCollapsible}render(){const t=s("ul",{class:"menu"},s("slot",{name:"menu"}));return this.isCollapsible&&this.hasChildren?s("details",{class:"accordion",open:this.isOpen},s("summary",{class:"summary"},s("slot",{name:"summary"}),this.isCollapsible&&s(i,null,s("aes-icon",{class:"toggle toggle-open",icon:n.CHEVRON_DOWN}),s("aes-icon",{class:"toggle toggle-close",icon:n.CHEVRON_UP}))),t):s("div",{class:"accordion"},s("div",{class:"summary"},s("slot",{name:"summary"})),this.hasChildren&&t)}get el(){return o(this)}static get watchers(){return{isCollapsible:["setOpen"]}}};a.style=":host{display:block}.accordion:not([open]) .toggle-close{display:none}.accordion[open] .toggle-open{display:none}ul{list-style-type:none;font-size:1rem;line-height:2;padding:0}.summary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0;font-size:1rem;--text-opacity:1;color:rgb(0, 0, 0);color:rgba(0, 0, 0, var(--text-opacity));list-style-type:none}.summary::-webkit-details-marker{display:none}:host([variant='primary']) ::slotted([slot='summary']),:host([variant='secondary']) ::slotted([slot='summary']){font-weight:700 !important;line-height:1.625 !important}@media (min-width: 768px){:host([variant='primary']) ::slotted([slot='summary']){font-weight:400 !important;font-size:1.5rem !important;line-height:2 !important}}.toggle{position:absolute;width:1.5rem;right:0;fill:currentColor}";export{a as aes_menu_accordion}