!function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wp-custom-gutenberg-blocks-boilerplate/step-6-dynamic-block","version":"1.0.0","title":"Dynamic Block","category":"wp-custom-gutenberg-blocks-boilerplate","icon":"database","description":"Dynamic Block (PHP)","keywords":["boilerplate","dynamic"],"textdomain":"wp-custom-gutenberg-blocks-boilerplate","supports":{"html":false},"editorScript":"file:index.js"}'),o=window.wp.element,n=window.wp.blockEditor,i=window.wp.data,r={edit:function(){var e=(0,n.useBlockProps)(),t=(0,i.useSelect)((function(e){return e("core").getEntityRecords("postType","post")}),[]);return(0,o.createElement)("div",e,!t&&"Loading",t&&0===t.length&&"No Posts",t&&t.length>0&&(0,o.createElement)("a",{href:t[0].link},t[0].title.rendered))}};(0,e.registerBlockType)(t,r)}();