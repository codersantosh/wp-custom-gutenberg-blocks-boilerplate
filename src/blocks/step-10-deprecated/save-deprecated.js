/**
 * WordPress dependencies
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const {
		tName,
		description
	} = attributes;

	const blockProps = useBlockProps.save();
	return (
		<RichText.Content
			tagName={ tName }
			value={ description }
			{ ...blockProps }
		/>
	);
}