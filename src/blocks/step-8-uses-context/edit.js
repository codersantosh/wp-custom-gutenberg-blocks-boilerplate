/**
 * WordPress dependencies
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ context, setAttributes } ) {

	const blockProps = useBlockProps();
	return (
		<p { ...blockProps }>
			{'The record ID: ' + context[ 'wp-custom-gutenberg-blocks-boilerplate/recordId' ]}
		</p>
	)
}