import{r as s,h as i,H as t}from"./p-4b51ccc2.js";import{I as e}from"./p-e678fbf7.js";const r=class{constructor(i){s(this,i),this.shouldDisplayIcon=!0,this.icon=e.DOCUMENT_DEFAULT,this.target="_blank"}render(){return i(t,null,this.shouldDisplayIcon&&i("aes-icon",{class:"media-link-icon",icon:this.icon}),i("aes-button",{url:this.url,variant:"arrow-link","should-display-arrow":!0,target:this.target},i("slot",null)))}};r.style=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.media-link-icon{width:2.5rem;-ms-flex-negative:0;flex-shrink:0;margin-right:1rem}";export{r as aes_media_link}