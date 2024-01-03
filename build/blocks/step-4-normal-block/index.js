!function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wp-custom-gutenberg-blocks-boilerplate/step-4-normal-block","version":"1.0.0","title":"Normal Block","category":"wp-custom-gutenberg-blocks-boilerplate","icon":"block-default","description":"Start with the basic building block.","keywords":["boilerplate","normal block"],"textdomain":"wp-custom-gutenberg-blocks-boilerplate","attributes":{"tagName":{"type":"string","default":"p"},"content":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6,p","default":"","__experimentalRole":"content"}},"supports":{"anchor":true,"className":false,"color":{"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true,"fontAppearance":true,"textTransform":true}},"__experimentalSelector":"h1,h2,h3,h4,h5,h6,p","__unstablePasteTextInline":true,"__experimentalSlashInserter":true},"editorScript":"file:index.js"}');function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t,n){return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==r(o)?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var o}var o=window.React,a=window.wp.i18n,l=window.wp.blockEditor,i=window.wp.components;function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s={edit:function(e){var t=e.attributes,r=e.setAttributes,u=t.tagName,s=t.content,p=(0,l.useBlockProps)();return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(i.Toolbar,{label:(0,a.__)("Example Toolbar","wp-custom-gutenberg-blocks-boilerplate")},(0,o.createElement)(i.ToolbarGroup,null,(0,o.createElement)(i.Dropdown,{className:"my-container-class-name",contentClassName:"my-popover-content-classname",position:"bottom right",renderToggle:function(e){var t=e.isOpen,r=e.onToggle;return(0,o.createElement)(i.ToolbarButton,{className:u?"is-pressed":void 0,label:u,onClick:r,"aria-expanded":t},u)},renderContent:function(){return(0,o.createElement)("div",{role:"menu","aria-orientation":"vertical","aria-label":(0,a.__)("More","wp-custom-gutenberg-blocks-boilerplate"),className:"components-dropdown-menu__menu"},["H1","H2","H3","H4","H5","H6","P"].map((function(e){return(0,o.createElement)(i.Button,{onClick:function(){return r({tagName:e.toLowerCase()})}},e)})))}})))),(0,o.createElement)(l.RichText,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({tagName:u.toLowerCase(),value:s,onChange:function(e){r({content:e})},placeholder:(0,a.__)("Content...","wp-custom-gutenberg-blocks-boilerplate")},p)))},save:function(e){var t=e.attributes,r=t.tagName,a=t.content,i=l.useBlockProps.save();return(0,o.createElement)(l.RichText.Content,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({tagName:r,value:a},i))}};(0,e.registerBlockType)(t,s)}();