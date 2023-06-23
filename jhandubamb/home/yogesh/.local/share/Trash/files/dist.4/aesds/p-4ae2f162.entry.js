import{r,h as o}from"./p-4b51ccc2.js";import{t as e}from"./p-6f2b2b6f.js";const t=class{constructor(o){r(this,o),this.bgColor="transparent",this.bgHoverImage="",this.bgVimeoVideo="",this.autoplay=!1,this.controls=!1,this.displayDropShadow=!1,this.displayBorder=!1,this.borderColor="neutrals-black",this.isMobile=!1,this.resizeTimer=null,this.videoLoaded=r=>{r.path[0].volume=this.initialVolume?this.initialVolume:.5}}componentWillLoad(){this.parseCtaData(this.cta)}parseCtaData(r){this.ctaData="string"!=typeof r?r:JSON.parse(r)}onWindowResize(){this.onWindow()}onWindow(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((()=>{const r=document.documentElement.clientWidth,o=parseInt(e.screens.md.replace("px",""));this.isMobile=r<o}),200)}componentDidLoad(){this.onWindow()}makeHorizontalPaddingResponsive(r,o=4){return"transparent"===this.bgColor||"transparent"===this.borderColor?this.makeVerticalPaddingResponsive(r,o):r}makeVerticalPaddingResponsive(r,o=10){return this.isMobile&&parseInt(r)>o?o:r}render(){return o("div",{class:"outer-wrapper",style:{"--bgImage":`url("${this.bgHoverImage}")`}},o("aes-bg",{color:this.bgColor},o("div",{class:"wrapper"},o("aes-spacer",{t:this.makeVerticalPaddingResponsive(this.outerPaddingTop,10),b:this.makeVerticalPaddingResponsive(this.outerPaddingBottom,10),l:this.makeHorizontalPaddingResponsive(this.outerPaddingLeft,4),r:this.makeHorizontalPaddingResponsive(this.outerPaddingRight,4)},o("slot",{name:"multimedia"}),""!==this.bgVimeoVideo&&o("video",!0===this.autoplay&&!1===this.controls?{autoplay:!0,loop:!0,muted:!0,playsinline:!0,onLoadStart:this.videoLoaded}:!1===this.autoplay&&!0===this.controls?{controls:!0,loop:!0,muted:!0,playsinline:!0,onLoadStart:this.videoLoaded}:!0===this.autoplay&&!0===this.controls?{controls:!0,autoPlay:!0,loop:!0,muted:!0,playsinline:!0,onLoadStart:this.videoLoaded}:{loop:!0,muted:!0,playsinline:!0,onLoadStart:this.videoLoaded},o("source",{src:this.bgVimeoVideo,type:"video/mp4"})),o("aes-spacer",{t:this.makeVerticalPaddingResponsive(this.paddingTop,10),b:this.makeVerticalPaddingResponsive(this.paddingBottom,10),l:this.makeHorizontalPaddingResponsive(this.paddingLeft,4),r:this.makeHorizontalPaddingResponsive(this.paddingRight,4)},o("slot",{name:"body"}),void 0!==this.ctaData&&o("aes-button",{shouldDisplayArrow:this.ctaData.shouldDisplayArrow,url:this.ctaData.url,variant:this.ctaData.variant},this.ctaData.text))))))}static get watchers(){return{cta:["parseCtaData"]}}};t.style=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([display-drop-shadow='true']),:host([display-drop-shadow='']){-webkit-box-shadow:0px 8px 32px rgba(0, 0, 0, 0.06);box-shadow:0px 8px 32px rgba(0, 0, 0, 0.06)}:host .outer-wrapper{height:100%}.wrapper{height:100%}:host([display-border='true']) .outer-wrapper,:host([display-border='']) .outer-wrapper{border-width:1px;border-style:solid}:host(:not([bg-hover-image=''])) .outer-wrapper{position:relative}:host(:not([bg-hover-image=''])) .outer-wrapper aes-bg{position:relative}:host(:not([bg-hover-image=''])) .outer-wrapper::before{position:absolute;display:block;width:100%;height:100%;top:0;left:0;opacity:0;background-position:center;background-size:cover;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:700ms;transition-duration:700ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);background-image:var(--bgImage);content:''}:host(:not([bg-hover-image=''])) .outer-wrapper>*{-webkit-transition-property:background-color, border-color, color, fill, stroke;transition-property:background-color, border-color, color, fill, stroke;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host(:not([bg-hover-image=''])) .outer-wrapper:hover::before{opacity:1}:host(:not([bg-hover-image=''])) .outer-wrapper:hover>*{--text-opacity:1 !important;color:rgb(255, 255, 255) !important;color:rgba(255, 255, 255, var(--text-opacity)) !important}:host([display-border][border-color='neutrals-white']) .outer-wrapper{--border-opacity:1;border-color:rgb(255, 255, 255);border-color:rgba(255, 255, 255, var(--border-opacity))}:host([display-border][border-color='neutrals-gray1']) .outer-wrapper{--border-opacity:1;border-color:rgb(245, 245, 245);border-color:rgba(245, 245, 245, var(--border-opacity))}:host([display-border][border-color='neutrals-gray2']) .outer-wrapper{--border-opacity:1;border-color:rgb(229, 229, 229);border-color:rgba(229, 229, 229, var(--border-opacity))}:host([display-border][border-color='neutrals-gray3']) .outer-wrapper{--border-opacity:1;border-color:rgb(191, 191, 191);border-color:rgba(191, 191, 191, var(--border-opacity))}:host([display-border][border-color='neutrals-gray4']) .outer-wrapper{--border-opacity:1;border-color:rgb(102, 102, 102);border-color:rgba(102, 102, 102, var(--border-opacity))}:host([display-border][border-color='neutrals-black']) .outer-wrapper{--border-opacity:1;border-color:rgb(0, 0, 0);border-color:rgba(0, 0, 0, var(--border-opacity))}:host([display-border][border-color='signature-blue1']) .outer-wrapper{--border-opacity:1;border-color:rgb(33, 74, 222);border-color:rgba(33, 74, 222, var(--border-opacity))}:host([display-border][border-color='signature-blue2']) .outer-wrapper{--border-opacity:1;border-color:rgb(88, 119, 230);border-color:rgba(88, 119, 230, var(--border-opacity))}:host([display-border][border-color='signature-blue3']) .outer-wrapper{--border-opacity:1;border-color:rgb(144, 164, 238);border-color:rgba(144, 164, 238, var(--border-opacity))}:host([display-border][border-color='signature-blue4']) .outer-wrapper{--border-opacity:1;border-color:rgb(199, 210, 247);border-color:rgba(199, 210, 247, var(--border-opacity))}:host([display-border][border-color='signature-purple1']) .outer-wrapper{--border-opacity:1;border-color:rgb(140, 92, 242);border-color:rgba(140, 92, 242, var(--border-opacity))}:host([display-border][border-color='signature-purple2']) .outer-wrapper{--border-opacity:1;border-color:rgb(169, 133, 245);border-color:rgba(169, 133, 245, var(--border-opacity))}:host([display-border][border-color='signature-purple3']) .outer-wrapper{--border-opacity:1;border-color:rgb(197, 173, 248);border-color:rgba(197, 173, 248, var(--border-opacity))}:host([display-border][border-color='signature-purple4']) .outer-wrapper{--border-opacity:1;border-color:rgb(226, 214, 252);border-color:rgba(226, 214, 252, var(--border-opacity))}:host([display-border][border-color='signature-aqua1']) .outer-wrapper{--border-opacity:1;border-color:rgb(0, 162, 199);border-color:rgba(0, 162, 199, var(--border-opacity))}:host([display-border][border-color='signature-aqua2']) .outer-wrapper{--border-opacity:1;border-color:rgb(64, 185, 213);border-color:rgba(64, 185, 213, var(--border-opacity))}:host([display-border][border-color='signature-aqua3']) .outer-wrapper{--border-opacity:1;border-color:rgb(128, 208, 227);border-color:rgba(128, 208, 227, var(--border-opacity))}:host([display-border][border-color='signature-aqua4']) .outer-wrapper{--border-opacity:1;border-color:rgb(191, 232, 241);border-color:rgba(191, 232, 241, var(--border-opacity))}:host([display-border][border-color='signature-green1']) .outer-wrapper{--border-opacity:1;border-color:rgb(22, 168, 55);border-color:rgba(22, 168, 55, var(--border-opacity))}:host([display-border][border-color='signature-green2']) .outer-wrapper{--border-opacity:1;border-color:rgb(80, 190, 105);border-color:rgba(80, 190, 105, var(--border-opacity))}:host([display-border][border-color='signature-green3']) .outer-wrapper{--border-opacity:1;border-color:rgb(138, 211, 155);border-color:rgba(138, 211, 155, var(--border-opacity))}:host([display-border][border-color='signature-green4']) .outer-wrapper{--border-opacity:1;border-color:rgb(197, 233, 205);border-color:rgba(197, 233, 205, var(--border-opacity))}:host([display-border][border-color='ui-error']) .outer-wrapper{--border-opacity:1;border-color:rgb(225, 9, 9);border-color:rgba(225, 9, 9, var(--border-opacity))}:host([border-color='transparent']) .outer-wrapper{border-color:transparent}aes-bg{height:100%}aes-button{margin-top:3rem}aes-button[variant='arrow-link']{margin-top:1.5rem}aes-spacer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (device-width: 390px){aes-spacer{height:auto;width:390px;max-width:100%}}@media only screen and (device-width: 375px){aes-spacer video{height:auto;width:375px;max-width:100%}}@media only screen and (device-width: 750px){aes-spacer video{height:auto;width:750px;max-width:100%}}@media only screen and (device-height: 812px){aes-spacer video{height:auto;width:812px;max-width:100%}}@media only screen and (device-height: 844px){aes-spacer video{height:auto;width:844px;max-width:100%}}@media only screen and (device-height: 926px){aes-spacer video{height:auto;width:926px;max-width:100%}}@media only screen and (device-width: 428px){aes-spacer video{height:auto;width:428px;max-width:100%}}@media only screen and (device-width: 736px){aes-spacer{height:auto;width:736px;max-width:100%}}@media only screen and (device-width: 414px){aes-spacer{height:auto;width:414px;max-width:100%}}@media only screen and (device-width: 896px){aes-spacer video{height:auto;width:896px;max-width:100%}}@media only screen and (device-width: 667px){aes-spacer video{height:auto;width:667px;max-width:100%}}";export{t as aes_canvas}