/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save() {

	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}