webpackJsonp([2,3],[,,,,,,function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),r=o(a),s=e(5),i=o(s);e(4),r.default.use(i.default),n.default={name:"navigation-buttons",props:{next:{type:String,default:"/"},prev:{type:String,default:"/"}}}},function(t,n,e){n=t.exports=e(1)(),n.push([t.id,".navigation-buttons{padding:5px;float:right}","",{version:3,sources:["/./src/components/navigation-buttons.vue"],names:[],mappings:"AACA,oBACI,YAAa,AACb,WAAa,CAChB",file:"navigation-buttons.vue",sourcesContent:["\n.navigation-buttons {\n    padding: 5px;\n    float: right;\n}\n"],sourceRoot:"webpack://"}])},function(t,n,e){var o=e(7);"string"==typeof o&&(o=[[t.id,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,n,e){var o,a;e(8),o=e(6);var r=e(10);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation-buttons"},[e("router-link",{attrs:{to:t.prev}},[e("md-button",{staticClass:"md-raised md-primary",attrs:{alt:"prev"}},[t._v("Back")])],1),t._v(" "),e("router-link",{attrs:{to:t.next}},[e("md-button",{staticClass:"md-raised md-primary",attrs:{alt:"next"}},[t._v("Continue")])],1)],1)},staticRenderFns:[]}},,,,function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),r=o(a),s=e(5),i=o(s);e(4);var u=e(9),d=o(u);r.default.use(i.default),n.default={name:"model-config",data:function(){return{}},components:{NavigationButtons:d.default}}},,function(t,n,e){n=t.exports=e(1)(),n.push([t.id,".model-config{padding:20px}","",{version:3,sources:["/./src/components/model-config.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB",file:"model-config.vue",sourcesContent:["\n.model-config {\n    padding: 20px;\n}\n"],sourceRoot:"webpack://"}])},,,,function(t,n,e){var o=e(16);"string"==typeof o&&(o=[[t.id,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)},,,,,,,,,,function(t,n,e){var o,a;e(20),o=e(14);var r=e(32);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=o},,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"model-config"},[e("h1",[t._v("Model Configuration")]),t._v(" "),e("md-input-container",[e("label",[t._v("Generations")]),t._v(" "),e("md-input",{attrs:{type:"number"}})],1),t._v(" "),e("md-input-container",[e("label",[t._v("Offsprings")]),t._v(" "),e("md-input",{attrs:{type:"number"}})],1),t._v(" "),e("navigation-buttons",{attrs:{prev:"/",next:"/times"}})],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=2.2a20c34b80e9428a3bd7.js.map