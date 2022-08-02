/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
const name = 'wp-custom-gutenberg-blocks-boilerplate/step-9-transforms';

const transforms = {
	from: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'wp-custom-gutenberg-blocks-boilerplate/step-4-normal-block' ],
			transform: ( attributes ) =>
				attributes.map( (attribute) =>
					createBlock( name, {} )
				),
		},
	],
	to: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'core/paragraph' ],
			transform: ( attributes ) =>
				createBlock( 'core/paragraph', {} )
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'wp-custom-gutenberg-blocks-boilerplate/step-4-normal-block' ],
			transform: ( attributes ) =>
				createBlock( 'wp-custom-gutenberg-blocks-boilerplate/step-4-normal-block', {} )
		},
	],
};

export default transforms;
