/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import {__} from "@wordpress/i18n";

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			{ __( 'Provided Context is not available on save, therefore need to save the context on attributes to access from frontend.', 'wp-custom-gutenberg-blocks-boilerplate') }
			<InnerBlocks.Content />
		</div>
	);

}