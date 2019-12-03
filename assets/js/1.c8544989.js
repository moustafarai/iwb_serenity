(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{115:function(e,t,i){"use strict";i.r(t);i(117),i(33),i(69),i(119),i(31),i(32),i(120);var n={name:"InputSelect",directives:{"click-outside":{bind:function(e,t,i){e.clickOutsideEvent=function(n){e==n.target||e.contains(n.target)||i.context[t.expression](n)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}},props:{id:{type:String,required:!0},options:{type:Array,required:!0},inputLabelId:{type:String,required:!0},value:{type:[String,Number],required:!1,default:""},mobileBreakpoint:{type:String,required:!1,default:"min-width: 992px"},maxHeight:{type:Number,required:!1,default:320},required:{type:Boolean,required:!1,default:!1}},data:function(){return{internalValue:this.value,listOpen:!1,groupFocused:!1,currentOptionLabel:"",currentPosition:0,preSelectPosition:0,displayDesktopInput:!1,optimizedHeight:this.maxHeight,prefferedOpenDirection:"below",actionKeysArray:["End","Home","ArrowDown","ArrowUp","Esc","Enter","Shift"],currentKeysString:"",keyClear:null,searchIndex:0,currentOptionId:null,isGlobalScrollEnable:!0}},computed:{internalOptions:function(e){var t=[],i=0;return this.options.forEach((function(e){if(Array.isArray(e.value)){var n=[];e.value.forEach((function(e){e.id=i,n.push(e),i+=1})),e.value=n,t.push(e)}else e.id=i,t.push(e),i+=1})),t},flatOptions:function(e){var t=[];return this.internalOptions.forEach((function(e){Array.isArray(e.value)?t.push(e.value):t.push(e)})),this.flattenDeep(t)}},watch:{value:function(e){var t=[];t=Array.isArray(this.flatOptions[this.currentPosition].value)?this.flatOptions[this.currentPosition].value[0]:this.flatOptions;var i=this.getObjetIndexByKey(t,"value",e);-1===i?this.updateCurrentOption(0):this.updateCurrentOption(i)},flatOptions:{handler:function(e){if(""!==this.internalValue){var t=this.getObjetIndexByKey(e,"value",this.internalValue);-1===t?(this.updateCurrentOption(0),this.$emit("update-value",this.internalValue)):this.updateCurrentOption(t)}else this.updateCurrentOption(0)}}},mounted:function(){var e=this,t=window.matchMedia("screen and ("+this.mobileBreakpoint+")"),i=function(t){t.matches?e.displayDesktopInput=!0:e.displayDesktopInput=!1};i(t),t.addListener(i);var n=this.getObjetIndexByKey(this.flatOptions,"value",this.internalValue);-1===n?(this.updateCurrentOption(0),this.$emit("update-value",this.internalValue)):this.updateCurrentOption(n)},methods:{toggleList:function(){var e=document.getElementsByClassName("input--select-wrapper");if(e.length>0)for(var t=0;t<e.length;t++)this.id!=e[t].__vue__.id&&0!=e[t].__vue__.listOpen&&(e[t].__vue__.listOpen=!1);!0===this.listOpen?this.closeList():this.openList()},openList:function(){var e=this;this.adjustPosition(),this.listOpen=!0;var t=document.getElementById("".concat(this.id,"-list"));window.setTimeout((function(){t.focus(),window.addEventListener("wheel",e.handleScrollWhenListIsOpened,{passive:!1}),window.addEventListener("DOMMouseScroll",e.handleScrollWhenListIsOpened,{passive:!1})}),0)},closeList:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!0===this.listOpen){if(this.listOpen=!1,e){var t=document.getElementById("".concat(this.id));window.setTimeout((function(){t.focus()}),0)}window.removeEventListener("wheel",this.handleScrollWhenListIsOpened),window.removeEventListener("DOMMouseScroll",this.handleScrollWhenListIsOpened),this.$emit("update-value",this.internalValue)}},handleScrollWhenListIsOpened:function(e){(function(e,t){for(var i=t.parentNode;null!=i;){if(i==e)return!0;i=i.parentNode}return!1})(document.getElementById("".concat(this.id,"-list")),e.target)||e.target.id!=="".concat(this.id,"-list")&&this.closeList()},selectOption:function(e){var t=e.target.dataset.value,i=this.getObjetIndexByKey(this.flatOptions,"value",t);this.updateCurrentOption(i),this.closeList()},preSelectOption:function(e){var t=e.target.dataset.value,i=this.getObjetIndexByKey(this.flatOptions,"value",t);this.preSelectPosition=i},handleKeyUp:function(e){if(e.preventDefault(),!1===this.listOpen&&this.openList(),this.currentPosition>0){var t=this.currentPosition-1;this.updateCurrentOption(t)}},handleKeyDown:function(e){if(e.preventDefault(),!1===this.listOpen&&this.openList(),this.currentPosition<this.flatOptions.length-1){var t=this.currentPosition+1;this.updateCurrentOption(t)}},handleKeyTab:function(e){!0===this.listOpen&&(e.preventDefault(),this.closeList(),this.updateCurrentOption(this.preSelectPosition))},handleKeyHome:function(e){!0===this.listOpen&&(e.preventDefault(),this.updateCurrentOption(0))},handleKeyEnd:function(e){!0===this.listOpen&&(e.preventDefault(),this.updateCurrentOption(this.flatOptions.length-1))},handleKeyPress:function(e){if(!0===this.listOpen){e.preventDefault();var t=e.key;-1===this.actionKeysArray.indexOf(t)&&this.findItemByCharacter(t)}},handleClickAway:function(){this.closeList(!1)},findItemByCharacter:function(e){var t=e.charAt(0).toLowerCase();if(!this.currentKeysString)if(" "===e)this.updateCurrentOption(this.currentPosition),this.closeList();else for(var i=0;i<this.flatOptions.length;i++)this.flatOptions[i].value===this.internalValue&&(this.searchIndex=i);this.currentKeysString+=t,this.clearCurrentKeysStringAfterDelay();var n=this.findMatchInRange(this.searchIndex+1,this.flatOptions.length);if(n||(n=this.findMatchInRange(0,this.searchIndex)),n){var r=this.getObjetIndexByKey(this.flatOptions,"value",n.value);this.updateCurrentOption(r)}},findMatchInRange:function(e,t){for(var i=e;i<t;i++){var n=this.flatOptions[i].label;if(n&&0===n.toLowerCase().indexOf(this.currentKeysString))return this.flatOptions[i]}return null},clearCurrentKeysStringAfterDelay:function(){var e=this;this.keyClear&&(clearTimeout(this.keyClear),this.keyClear=null),this.keyClear=setTimeout((function(){e.currentKeysString="",e.keyClear=null}),500)},updateCurrentOption:function(e){var t=e;this.flatOptions[e].disabled&&(this.currentPosition<e?t=e+1:this.currentPosition>e&&(t=e-1)),this.preSelectPosition=t,this.currentPosition=t;var i=this.flatOptions[t].label;this.currentOptionLabel=i,this.internalValue=this.flatOptions[t].value,this.currentOptionId="".concat(this.id,"-item-").concat(this.flatOptions[t].id);var n=document.getElementById(this.currentOptionId);if(null!==n){var r=n.offsetTop;n.offsetHeight;r>=this.$refs.list.offsetHeight&&(this.$refs.list.scrollTop=r),r<=this.$refs.list.scrollTop&&(this.$refs.list.scrollTop=r)}},updateMobileValue:function(){this.$emit("update-value",this.internalValue);var e=this.getObjetIndexByKey(this.flatOptions,"value",this.internalValue);e>-1&&this.updateCurrentOption(e)},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}},getObjetIndexByKey:function(e,t,i){var n=e.filter((function(e){return e[t]===i}))[0];return e.indexOf(n)},flattenDeep:function(e){var t=this;return e.reduce((function(e,i){return Array.isArray(i)?e.concat(t.flattenDeep(i)):e.concat(i)}),[])}}},r=i(2),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input--select-wrapper"},[e.displayDesktopInput?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.handleClickAway,expression:"handleClickAway"}],staticClass:"input--select input--select--desktop",on:{blur:e.closeList}},[i("button",{staticClass:"input--select__toggle",attrs:{required:!!e.required,type:"button","aria-haspopup":"listbox",id:e.id,"aria-expanded":e.listOpen?"true":"false","aria-labelledby":e.inputLabelId+" "+e.id},on:{click:e.toggleList,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.handleKeyDown(t)}}},[i("span",{staticClass:"input--select__toggle-label"},[e._v("\n                "+e._s(e.currentOptionLabel)+"\n            ")])]),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.listOpen,expression:"listOpen"}],ref:"list",staticClass:"input--select__list",class:"input--select__list--"+e.prefferedOpenDirection,style:{maxHeight:e.optimizedHeight+"px"},attrs:{tabindex:"-1",role:"listbox",id:e.id+"-list","aria-activedescendant":e.currentOptionId,"aria-labelledby":""+e.inputLabelId},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeList(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.closeList(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.handleKeyUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.handleKeyDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.handleKeyPress(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleKeyTab(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"home",void 0,t.key,void 0)?null:e.handleKeyHome(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"end",void 0,t.key,void 0)?null:e.handleKeyEnd(t)}],keyup:e.handleKeyPress}},[e._l(e.internalOptions,(function(t,n){return[Array.isArray(t.value)?[i("li",{key:"option-"+e.id+"-"+n,attrs:{role:"group","aria-labelledby":"option-"+e.id+"-groupchild-"+n+"-label"}},[i("div",{staticClass:"input--select__option-group-title",attrs:{id:"option-"+e.id+"-groupchild-"+n+"-label"}},[e._v("\n                            "+e._s(t.label)+"\n                        ")]),e._v(" "),i("ul",{staticClass:"input--select__option-group"},e._l(t.value,(function(r,s){return i("li",{key:"option-"+e.id+"-groupchild-"+n+"-"+s,staticClass:"input--select__option",class:{" active":e.internalValue===r.value,"input--select__option--disabled":1==r.disabled},attrs:{role:"option",id:e.id+"-item-"+r.id,"data-value":r.value,"data-disabled":1==t.disabled},on:{click:e.selectOption,mouseover:e.preSelectOption}},[e._v("\n                                "+e._s(r.label)+"\n                            ")])})),0)])]:[i("li",{key:"option-"+e.id+"-"+n,staticClass:"input--select__option",class:{" active":e.internalValue===t.value,"input--select__option--disabled":1==t.disabled},attrs:{role:"option",id:e.id+"-item-"+t.id,"data-value":t.value,"data-disabled":1==t.disabled},on:{click:e.selectOption,mouseover:e.preSelectOption}},[e._v("\n                        "+e._s(t.label)+"\n                    ")])]]}))],2)]):e._e(),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],staticClass:"input--select input--select--mobile",attrs:{"aria-labelledby":e.inputLabelId,required:!!e.required},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.internalValue=t.target.multiple?i:i[0]},e.updateMobileValue]}},[e._l(e.options,(function(t,n){return[Array.isArray(t.value)?[i("optgroup",{key:"option-"+e.id+"-"+n,attrs:{label:t.label}},e._l(t.value,(function(t,n){return i("option",{key:"option-"+e.id+"-groupchild-"+n,attrs:{disabled:1==t.disabled},domProps:{value:t.value}},[e._v("\n                        "+e._s(t.label))])})),0)]:[i("option",{key:"option-"+e.id+"-"+n,attrs:{disabled:1==t.disabled},domProps:{value:t.value}},[e._v("\n                    "+e._s(t.label))])]]}))],2)])}),[],!1,null,null,null);t.default=s.exports},117:function(e,t,i){"use strict";var n=i(3),r=i(118);n(n.P+n.F*!i(16)([].reduce,!0),"Array",{reduce:function(e){return r(this,e,arguments.length,arguments[1],!1)}})},118:function(e,t,i){var n=i(18),r=i(15),s=i(30),a=i(19);e.exports=function(e,t,i,l,o){n(t);var u=r(e),d=s(u),p=a(u.length),c=o?p-1:0,h=o?-1:1;if(i<2)for(;;){if(c in d){l=d[c],c+=h;break}if(c+=h,o?c<0:p<=c)throw TypeError("Reduce of empty array with no initial value")}for(;o?c>=0:p>c;c+=h)c in d&&(l=t(l,d[c],c,u));return l}},119:function(e,t,i){var n=i(3);n(n.S,"Array",{isArray:i(68)})},120:function(e,t,i){"use strict";var n=i(1),r=i(12),s=i(14),a=i(70),l=i(46),o=i(7),u=i(121).f,d=i(71).f,p=i(8).f,c=i(122).trim,h=n.Number,f=h,v=h.prototype,y="Number"==s(i(48)(v)),O="trim"in String.prototype,g=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var i,n,r,s=(t=O?t.trim():c(t,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=t.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var a,o=t.slice(2),u=0,d=o.length;u<d;u++)if((a=o.charCodeAt(u))<48||a>r)return NaN;return parseInt(o,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof h&&(y?o((function(){v.valueOf.call(i)})):"Number"!=s(i))?a(new f(g(t)),i,h):g(t)};for(var b,m=i(5)?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;m.length>k;k++)r(f,b=m[k])&&!r(h,b)&&p(h,b,d(f,b));h.prototype=v,v.constructor=h,i(11)(n,"Number",h)}},121:function(e,t,i){var n=i(67),r=i(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},122:function(e,t,i){var n=i(3),r=i(20),s=i(7),a=i(123),l="["+a+"]",o=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e,t,i){var r={},l=s((function(){return!!a[e]()||"​"!="​"[e]()})),o=r[e]=l?t(p):a[e];i&&(r[i]=o),n(n.P+n.F*l,"String",r)},p=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},123:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);