/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit(props ) {
	const blockProps = useBlockProps();
	const MY_TEMPLATE = [ [ 'wp-custom-gutenberg-blocks-boilerplate/step-8-uses-context', {} ] ];
	const {
		attributes: { recordId },
		setAttributes
	} = props;

	return (
		<>
			<InspectorControls key="setting">
				<TextControl
					label={ __( 'Record ID:','wp-custom-gutenberg-blocks-boilerplate' ) }
					value={ recordId }
					onChange={ ( val ) =>
						setAttributes( { recordId: Number( val ) } )
					}
				/>
			</InspectorControls>
			<div { ...blockProps }>
				{ __( 'Provide values to inner (descendent) blocks using providesContext', 'wp-custom-gutenberg-blocks-boilerplate') }
				<InnerBlocks
					// template={ MY_TEMPLATE }
					templateLock={ false }
					// allowedBlocks={ [ 'wp-custom-gutenberg-blocks-boilerplate/step-8-uses-context'] }
				/>
			</div>
		</>
	);
}