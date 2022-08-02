/**
 * WordPress dependencies
 */
import {
	registerBlockType,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';

const settings = {
	edit,
	save,
	transforms
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