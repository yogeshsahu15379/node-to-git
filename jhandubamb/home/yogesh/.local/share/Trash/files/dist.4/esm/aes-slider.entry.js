import { r as registerInstance, h, H as Host, g as getElement } from './index-abd53505.js';
import { t as tailwindThemeConfig } from './resolved-tailwind-config-21fbcf50.js';
import { I as IconType } from './enums-3680f0a7.js';

/**
 * keen-slider 5.4.0
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2021-01-16
 */

function t(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r);}return e}function e(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t));}));}return e}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){var n,i,o,a,f,s,l,d,h,v,p,m,b,g,w,y,M,O,S,A,j,k,x,E,P,T,D,L,C,X,Y,z,H=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},I="data-keen-slider-moves",V="data-keen-slider-v",q=[],F=null,W=!1,_=!1,N=0,R=[];function U(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.addEventListener(n,e,r),q.push([t,n,e,r]);}function $(t){if(O&&S===K(t)&&ut()){var e=Z(t).x;if(!nt(t)&&E)return G(t);E&&(Wt(),A=e,n.setAttribute(I,!0),E=!1),t.cancelable&&t.preventDefault(),Xt(x(A-e,Bt)*(ft()?-1:1),t.timeStamp),A=e;}}function B(t){O||!ut()||tt(t.target)||(O=!0,E=!0,S=K(t),nt(t),ht(),M=v,A=Z(t).x,Xt(0,t.timeStamp),ot("dragStart"));}function G(t){O&&S===K(t,!0)&&ut()&&(n.removeAttribute(I),O=!1,mt(),ot("dragEnd"));}function J(t){return t.changedTouches}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n?J(t):Q(t);return e?e[0]?e[0].identifier:"error":"default"}function Q(t){return t.targetTouches}function Z(t){var n=Q(t);return {x:lt()?n?n[0].screenY:t.pageY:n?n[0].screenX:t.pageX,timestamp:t.timeStamp}}function tt(t){return t.hasAttribute(y.preventEvent)}function nt(t){var n=Q(t);if(!n)return !0;var e=n[0],r=lt()?e.clientY:e.clientX,i=lt()?e.clientX:e.clientY,o=void 0!==j&&void 0!==k&&Math.abs(k-i)<=Math.abs(j-r);return j=r,k=i,o}function et(t){ut()&&O&&t.preventDefault();}function rt(){U(window,"orientationchange",Pt),U(window,"resize",(function(){return Et()})),U(n,"dragstart",(function(t){ut()&&t.preventDefault();})),U(n,"mousedown",B),U(y.cancelOnLeave?n:window,"mousemove",$),y.cancelOnLeave&&U(n,"mouseleave",G),U(window,"mouseup",G),U(n,"touchstart",B,{passive:!0}),U(n,"touchmove",$,{passive:!1}),U(n,"touchend",G,{passive:!0}),U(n,"touchcancel",G,{passive:!0}),U(window,"wheel",et,{passive:!1});}function it(){q.forEach((function(t){t[0].removeEventListener(t[1],t[2],t[3]);})),q=[];}function ot(t){y[t]&&y[t](Bt);}function at(){return y.centered}function ut(){return void 0!==i?i:y.controls}function ct(){return y.loop&&o>1}function ft(){return y.rtl}function st(){return !y.loop&&y.rubberband}function lt(){return !!y.vertical}function dt(){P=window.requestAnimationFrame(vt);}function ht(){P&&(window.cancelAnimationFrame(P),P=null),T=null;}function vt(t){T||(T=t);var n=t-T,e=pt(n);if(n>=L)return Xt(D-X,!1),z?z():void ot("afterChange");var r=Yt(e);if(0===r||ct()||st()||Y){if(0!==r&&st()&&!Y)return Mt();X+=e,Xt(e,!1),dt();}else Xt(e-r,!1);}function pt(t){return D*C(t/L)-X}function mt(){switch(ot("beforeChange"),y.mode){case"free":wt();break;case"free-snap":yt();break;case"snap":default:bt();}}function bt(){gt((1===l&&0!==p?M:v)+Math.sign(p));}function gt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(t){return 1+--t*t*t*t*t};Ot(Vt(t=It(t,r,i)),e,o,n);}function wt(){if(0===b)return !(!Yt(0)||ct())&&gt(v);var t=y.friction/Math.pow(Math.abs(b),-.5);Ot(Math.pow(b,2)/t*Math.sign(b),6*Math.abs(b/t),(function(t){return 1-Math.pow(1-t,5)}));}function yt(){if(0===b)return gt(v);var t=y.friction/Math.pow(Math.abs(b),-.5),n=Math.pow(b,2)/t*Math.sign(b),e=6*Math.abs(b/t),r=(N+n)/(s/l);Ot((-1===p?Math.floor(r):Math.ceil(r))*(s/l)-N,e,(function(t){return 1-Math.pow(1-t,5)}));}function Mt(){if(ht(),0===b)return gt(v,!0);var t=.04/Math.pow(Math.abs(b),-.5),n=Math.pow(b,2)/t*Math.sign(b),e=function(t){return --t*t*t+1},r=b;Ot(n,3*Math.abs(r/t),e,!0,(function(){Ot(Vt(It(v)),500,e,!0);}));}function Ot(t,n,e,r,i){ht(),D=t,X=0,L=n,C=e,Y=r,z=i,T=null,dt();}function St(e){var r=u(t);r.length&&(n=r[0],Et(e),rt(),ot("mounted"));}function At(){var t,n=H.breakpoints||[];for(var r in n)window.matchMedia(r).matches&&(t=r);if(t===F)return !0;var i=(F=t)?n[F]:H;i.breakpoints&&F&&delete i.breakpoints,y=e(e(e({},$t),H),i),W=!0,h=null,xt();}function jt(t){return "function"==typeof t?t():c(t,1,Math.max(ct()?o-1:o,1))}function kt(){At(),_=!0,ot("created");}function xt(t,n){t&&(H=t),n&&(F=null),Tt(),St(n);}function Et(t){var e=window.innerWidth;if(At()&&(e!==h||t)){h=e;var r=y.slides;"number"==typeof r?(f=null,o=r):(f=u(r,n),o=f?f.length:0);var i=y.dragSpeed;x="function"==typeof i?i:function(t){return t*i},s=lt()?n.offsetHeight:n.offsetWidth,l=jt(y.slidesPerView),d=c(y.spacing,0,s/(l-1)-1),s+=d,a=at()?(s/2-s/l/2)/s:0,Lt();var p=!_||W&&y.resetSlide?y.initial:v;Ut(ct()?p:zt(p)),lt()&&n.setAttribute(V,!0),W=!1;}}function Pt(t){Et(),setTimeout(Et,500),setTimeout(Et,2e3);}function Tt(){it(),Ct(),n&&n.hasAttribute(V)&&n.removeAttribute(V),ot("destroyed");}function Dt(){f&&f.forEach((function(t,n){var e=g[n].distance*s-n*(s/l-d/l-d/l*(l-1)),r=lt()?0:e,i=lt()?e:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");t.style.transform=o,t.style["-webkit-transform"]=o;}));}function Lt(){f&&f.forEach((function(t){var n="calc(".concat(100/l,"% - ").concat(d/l*(l-1),"px)");lt()?(t.style["min-height"]=n,t.style["max-height"]=n):(t.style["min-width"]=n,t.style["max-width"]=n);}));}function Ct(){if(f){var t=["transform","-webkit-transform"];t=[].concat(r(t),lt?["min-height","max-height"]:["min-width","max-width"]),f.forEach((function(n){t.forEach((function(t){n.style.removeProperty(t);}));}));}}function Xt(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();Ft(t,e),n&&(t=Nt(t)),N+=t,_t();}function Yt(t){var n=s*(o-1*(at()?1:l))/l,e=N+t;return e>n?e-n:e<0?e:0}function zt(t){return c(t,0,o-1-(at()?0:l-1))}function Ht(){var t=Math.abs(w),n=N<0?1-t:t;return {direction:p,progressTrack:n,progressSlides:n*o/(o-1),positions:g,position:N,speed:b,relativeSlide:(v%o+o)%o,absoluteSlide:v,size:o,slidesPerView:l,widthOrHeight:s}}function It(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ct()?n?qt(t,e):t:zt(t)}function Vt(t){return -(-s/l*t+N)}function qt(t,n){var e=(v%o+o)%o,r=e<(t=(t%o+o)%o)?-e-o+t:-(e-t),i=e>t?o-e+t:t-e,a=n?Math.abs(r)<=i?r:i:t<e?r:i;return v+a}function Ft(t,n){clearTimeout(m);var e=Math.sign(t);if(e!==p&&Wt(),p=e,R.push({distance:t,time:n}),m=setTimeout((function(){R=[],b=0;}),50),(R=R.slice(-6)).length<=1||0===p)return b=0;var r=R.slice(0,-1).reduce((function(t,n){return t+n.distance}),0),i=R[R.length-1].time,o=R[0].time;b=c(r/(i-o),-10,10);}function Wt(){R=[];}function _t(){w=ct()?N%(s*o/l)/(s*o/l):N/(s*o/l),Rt();for(var t=[],n=0;n<o;n++){var e=(1/o*n-(w<0&&ct()?w+1:w))*o/l+a;ct()&&(e+=e>(o-1)/l?-o/l:e<-o/l+1?o/l:0);var r=1/l,i=e+r,u=i<r?i/r:i>1?1-(i-1)*l/1:1;t.push({portion:u<0||u>1?0:u,distance:ft()?-1*e+1-r:e});}g=t,Dt(),ot("move");}function Nt(t){if(ct())return t;var n=Yt(t);if(!st())return t-n;if(0===n)return t;var e;return t*(e=n/s,(1-Math.abs(e))*(1-Math.abs(e)))}function Rt(){var t=Math.round(N/(s/l));t!==v&&(!ct()&&(t<0||t>o-1)||(v=t,ot("slideChanged")));}function Ut(t){ot("beforeChange"),Xt(Vt(t),!1),ot("afterChange");}var $t={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Bt={controls:function(t){i=t;},destroy:Tt,refresh:function(t){xt(t,!0);},next:function(){gt(v+1,!0);},prev:function(){gt(v-1,!0);},moveToSlide:function(t,n){gt(t,!0,n);},moveToSlideRelative:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0;gt(t,!0,e,!0,n);},resize:function(){Et(!0);},details:function(){return Ht()},options:function(){var t=e({},y);return delete t.breakpoints,t}};return kt(),Bt}function a(t){return Array.prototype.slice.call(t)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return "function"==typeof t?a(t()):"string"==typeof t?a(n.querySelectorAll(t)):t instanceof HTMLElement!=!1?[t]:t instanceof NodeList!=!1?t:[]}function c(t,n,e){return Math.min(Math.max(t,n),e)}Math.sign||(Math.sign=function(t){return (t>0)-(t<0)||+t});

const aesSliderCss = ":host{display:block}.slides-wrapper{position:relative}.slides-button{display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:3rem;height:3rem;padding:0;border-width:1px;border-style:solid;--border-opacity:1;border-color:rgb(229, 229, 229);border-color:rgba(229, 229, 229, var(--border-opacity));opacity:0.75;border-radius:9999px;--bg-opacity:1;background-color:rgb(255, 255, 255);background-color:rgba(255, 255, 255, var(--bg-opacity));-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);cursor:pointer}@media (min-width: 768px){.slides-button{display:-ms-flexbox;display:flex}}.slides-button:hover,.slides-button:focus{opacity:1}.slides-button:focus{outline:2px solid transparent;outline-offset:2px;-webkit-box-shadow:0 0 0 2px rgb(33, 74, 222);box-shadow:0 0 0 2px rgb(33, 74, 222)}.slides-button aes-icon{opacity:0.75;width:0.75rem}.slides-previous{position:absolute;left:0;margin-left:1rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.slides-next{position:absolute;right:0;margin-right:1rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.slides-dots{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:2rem}.dot{width:1rem;height:1rem;border-radius:9999px;border-style:none;--bg-opacity:1;background-color:rgb(229, 229, 229);background-color:rgba(229, 229, 229, var(--bg-opacity));cursor:pointer;text-indent:-9999px}.dot:focus,.dot:active{outline:2px solid transparent;outline-offset:2px;-webkit-box-shadow:0 0 0 2px rgb(33, 74, 222);box-shadow:0 0 0 2px rgb(33, 74, 222)}.dot+.dot{margin-left:0.5rem}.dot--active{--bg-opacity:1;background-color:rgb(191, 191, 191);background-color:rgba(191, 191, 191, var(--bg-opacity))}::slotted(.keen-slider){position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-align:stretch;align-items:stretch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}::slotted(.keen-slider[data-keen-slider-v]){-ms-flex-wrap:wrap;flex-wrap:wrap}::slotted(.keen-slider[data-keen-slider-moves] *){pointer-events:none}";

const AesSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Whether to display navigation arrows to switch slides
     */
    this.displayArrows = false;
    /**
     * Whether to display navigation dots to switch slides
     */
    this.displayDots = false;
    /**
     * Whether to automatically advance slides
     */
    this.autoplay = false;
    /**
     * Whether to infinitely loop slides
     */
    this.loop = false;
    /**
     * Whether the slider has been initialized
     */
    this.initialized = false;
    /**
     * Delay between slides change (miliseconds, requires active autoplay)
     */
    this.duration = 5000;
    /**
     * Number of slides to display (e.g. use 1.5 to display one and a half slides)
     */
    this.slidesToDisplay = 1;
    /**
     * Default no of slides visible on mobile view
     */
    this.slidesToDisplayOnMobile = 1.25;
    /**
     * Spacing between slides
     */
    this.spacing = 32;
    /**
     *  is screen in mobile size
     */
    this.isMobile = false;
    this.initializeSlider = () => {
      const container = this.el.querySelector('.slides-collection');
      this.slider = new o(container, {
        slidesPerView: this.isMobile
          ? this.slidesToDisplayOnMobile
          : this.slidesToDisplay,
        spacing: this.spacing,
        loop: this.loop,
        created: instance => {
          this.initialized = true;
          this.sliderDetails = instance.details();
          this.handleAutoplay(true);
          this.addNavigationDots();
        },
        dragEnd: () => this.handleAutoplay(true),
        dragStart: () => this.handleAutoplay(false),
        slideChanged: () => this.handleStatus(),
      });
    };
    this.addNavigationDots = () => {
      if (!this.displayDots)
        return;
      [...Array(this.sliderDetails.size).keys()].map(slide => {
        const dot = document.createElement('button');
        dot.innerHTML = `Go to slide ${slide + 1}`;
        dot.classList.add('dot');
        this.dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
          this.goToSlide(slide);
        });
      });
    };
    this.goToSlide = slide => {
      this.slider.moveToSlide(slide);
      this.handleAutoplay(this.autoplay);
    };
    this.handleAutoplay = (run) => {
      if (!this.autoplay)
        return;
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = setInterval(() => {
        if (run) {
          this.nextSlide();
        }
      }, this.duration);
    };
    this.handleStatus = () => {
      if (!this.slider)
        return;
      // set active slide in dots navigation
      if (this.displayDots) {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
          index === this.slider.details().relativeSlide
            ? dot.classList.add('dot--active')
            : dot.classList.remove('dot--active');
        });
      }
    };
    this.nextSlide = () => {
      if (!this.slider)
        return;
      this.slider.next();
      this.handleAutoplay(this.autoplay);
    };
    this.prevSlide = () => {
      if (!this.slider)
        return;
      this.slider.prev();
      this.handleAutoplay(this.autoplay);
    };
  }
  /**
   * event for screen resizing
   */
  onWindowResize() {
    this.onWindow();
  }
  onWindow() {
    console.log('resize called', this.isMobile);
    // clearTimeout(this.resizeTimer)
    // this.resizeTimer = setTimeout(() => {
    const docWidth = document.documentElement.clientWidth;
    const breakpoint = parseInt(tailwindThemeConfig.screens.md.replace('px', ''));
    this.isMobile = docWidth < breakpoint;
    // console.log('resize ###########', this.isMobile)
    // this.slidesToDisplay = 1;
    this.initializeSlider();
    // }, 200)
  }
  componentDidLoad() {
    this.initializeSlider();
    this.handleStatus();
  }
  render() {
    return (h(Host, null, h("div", { class: "slides-wrapper" }, h("slot", { name: "slides" }), this.displayArrows && (h("button", { class: "slides-button slides-previous", onClick: this.prevSlide, type: "button" }, h("aes-icon", { icon: IconType.CHEVRON_LEFT }))), this.displayArrows && (h("button", { class: "slides-button slides-next", onClick: this.nextSlide, type: "button" }, h("aes-icon", { icon: IconType.CHEVRON_RIGHT })))), this.displayDots && (h("div", { class: "slides-dots", ref: el => (this.dotsContainer = el) }))));
  }
  get el() { return getElement(this); }
};
AesSlider.style = aesSliderCss;

export { AesSlider as aes_slider };
