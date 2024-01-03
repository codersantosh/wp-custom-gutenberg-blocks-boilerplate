!function(){"use strict";var e=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wp-custom-gutenberg-blocks-boilerplate/step-5-inner-blocks","version":"1.0.0","title":"Inner Blocks","category":"wp-custom-gutenberg-blocks-boilerplate","icon":"tagcloud","description":"Nested Blocks: Using InnerBlocks","keywords":["boilerplate","nested","inner block"],"textdomain":"wp-custom-gutenberg-blocks-boilerplate","supports":{"html":false},"editorScript":"file:index.js"}'),t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components,c={edit:function(o){var c=o.clientId,s=(0,r.useBlockProps)(),a=[["core/heading",{placeholder:(0,n.__)("FAQ Query","wp-custom-gutenberg-blocks-boilerplate")}],["core/paragraph",{placeholder:(0,n.__)("FAQ Answers and explanation","wp-custom-gutenberg-blocks-boilerplate")}]];return(0,t.createElement)("div",s,(0,t.createElement)(r.InnerBlocks,{template:a,templateLock:!1,allowedBlocks:["core/heading","core/paragraph"],renderAppender:!1}),(0,t.createElement)(l.Button,{icon:"plus",onClick:function(){wp.data.dispatch("core/editor").insertBlocks((0,e.createBlocksFromInnerBlocksTemplate)(a),void 0,c),wp.data.dispatch("core/block-editor").selectBlock(c)}},(0,n.__)("Add New FAQ","wp-custom-gutenberg-blocks-boilerplate")))},save:function(){var e=r.useBlockProps.save();return(0,t.createElement)("div",e,(0,t.createElement)(r.InnerBlocks.Content,null))}};(0,e.registerBlockType)(o,c)}();