/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Frontend Content
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