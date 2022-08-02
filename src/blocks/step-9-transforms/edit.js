/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit () {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Hello WordPress Developers! from the editor!', 'wp-custom-gutenberg-blocks-boilerplate') }
		</p>
	);
}