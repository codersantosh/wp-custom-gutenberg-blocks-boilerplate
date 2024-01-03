!function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wp-custom-gutenberg-blocks-boilerplate/step-8-uses-context","version":"1.0.0","title":"Uses Context","category":"wp-custom-gutenberg-blocks-boilerplate","icon":"controls-repeat","description":"Use values provided from ancestor blocks","keywords":["boilerplate","use context"],"textdomain":"wp-custom-gutenberg-blocks-boilerplate","supports":{"html":false},"attributes":{"contextRecordId":{"type":"number"}},"usesContext":["wp-custom-gutenberg-blocks-boilerplate/recordId"],"editorScript":"file:index.js"}');function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,o){return n=function(e,t){if("object"!=r(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==r(n)?n:String(n))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e;var n}var n=window.React,c=(window.wp.element,window.wp.blockEditor);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var p={edit:function(e){var t=e.context,r=(e.setAttributes,(0,c.useBlockProps)());return(0,n.createElement)("p",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r),"The record ID: "+t["wp-custom-gutenberg-blocks-boilerplate/recordId"])},save:function(e){var t=c.useBlockProps.save();return(0,n.createElement)("p",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t),"The record ID: ",e.attributes.contextRecordId)}};(0,e.registerBlockType)(t,p)}();