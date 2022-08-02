/*
https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/
* Process to check deprecated
* 1. Rename block.json to block-new.json
* 2. Rename edit.js to edit-new.js
* 3. Rename index.js to index-new.js
* 4. Rename save.js to save-new.js
* 5. Rename block-deprecated.json to block.json
* 6. Rename edit-deprecated.js to edit.js
* 7. Rename index-deprecated.js to index.js
* 8. Rename save-deprecated.js to save.js, now you have older/deprecated version of this block.
* 9. Run npm , go to editor and add this block and save
* 10. Rename everything to original in revert order from 8 to 1
* 11. Go to the same editor of 7 and refresh
* */

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import {registerBlockType} from "@wordpress/blocks";

const settings = {
	edit,
	save
};

/**
 * Function to register an individual block.
 * https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/
 *
 * @param {Object} metadata The block metadata
 * @param {Object} settings The client-side block settings.
 *
 */
registerBlockType( metadata , settings );