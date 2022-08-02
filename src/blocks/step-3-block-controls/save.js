/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import dynamicCSS from "./utils/dynamic-css";
import BlockControlsCustomization from "./atoms/block-conrols-customization";

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const {
		isBold,
		isItalic
	} = attributes;

	/*Margin and Padding CSS*/
	const blockProps = useBlockProps.save( { style: dynamicCSS(attributes) } );
	return (
		<p { ...blockProps }>
			<BlockControlsCustomization
				isBold = {isBold}
				isItalic = {isItalic}
				text = { __( 'Hello WordPress Developers! from the frontend from the Block controls example! I am from saved content.', 'wp-custom-gutenberg-blocks-boilerplate') }
			/>
		</p>
	);
}