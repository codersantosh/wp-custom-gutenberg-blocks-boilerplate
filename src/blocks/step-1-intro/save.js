/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Frontend Content
 *
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */
export default function save(){
	return (
		<p { ...useBlockProps.save() }>
			{ __( 'Hello WordPress Developers! from the frontend! I am from saved content.', 'wp-custom-gutenberg-blocks-boilerplate') }
		</p>
	);
}