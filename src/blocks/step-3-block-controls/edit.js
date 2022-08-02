/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	InspectorControls
} from '@wordpress/block-editor';

import {
	Toolbar,
	ToolbarGroup,
	ToolbarButton,

	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalBoxControl as BoxControl,

} from '@wordpress/components';
import {
	formatBold,
	formatItalic
} from '@wordpress/icons';

/*Inbuilt Components*/
import BlockControlsCustomization from "./atoms/block-conrols-customization";
import dynamicCSS from "./utils/dynamic-css";

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit(props){
	const {
		attributes,
		attributes: {
			isBold,
			isItalic,
			padding,
			margin,
		},
		setAttributes,
	} = props;

	/*Padding custom functions*/
	const hasPaddingValue = () => !! padding && Object.keys( padding ).length;
	const resetPaddingValue = () => setAttributes( { padding: {} } );

	/*Margin custom functions*/
	const hasMarginValue = () => !! margin && Object.keys( margin ).length;
	const resetMarginValue = () => setAttributes( { margin: {} } );

	/*Rest all*/
	const resetAll = () => {
		resetPaddingValue();
		resetMarginValue();
	};

	/*Margin and Padding CSS*/
	const blockProps = useBlockProps( { style: dynamicCSS(attributes) } );
	return (
		<>
			<BlockControls>
				<Toolbar label={__('Example Toolbar','wp-custom-gutenberg-blocks-boilerplate')}>
					<ToolbarGroup>
						<ToolbarButton
							className = {isBold?'is-pressed':undefined}
							icon={ formatBold }
							label={__('Bold','wp-custom-gutenberg-blocks-boilerplate')}
							onClick={ () => {
								setAttributes( { isBold: !isBold } );
							} }
						/>
						<ToolbarButton
							className = {isItalic?'is-pressed':undefined}
							icon={ formatItalic }
							label={__('Italic','wp-custom-gutenberg-blocks-boilerplate')}
							onClick={ () => {
								setAttributes( { isItalic: !isItalic } );
							} }
						/>
					</ToolbarGroup>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<ToolsPanel label={ __( 'Dimensions','wp-custom-gutenberg-blocks-boilerplate' ) } resetAll={ resetAll }>
					<ToolsPanelItem
						hasValue={ hasPaddingValue }
						label={ __( 'Padding','wp-custom-gutenberg-blocks-boilerplate' ) }
						onDeselect={ resetPaddingValue }
						isShownByDefault={ false }
					>
						<BoxControl
							values={ padding }
							onChange={ (newVal) => {
								setAttributes( { padding: newVal } )
							} }
							label={ __( 'Padding','wp-custom-gutenberg-blocks-boilerplate' ) }
							allowReset={ false }
							splitOnAxis={ false }
						/>
					</ToolsPanelItem>

					<ToolsPanelItem
						hasValue={ hasMarginValue }
						label={ __( 'Margin','wp-custom-gutenberg-blocks-boilerplate' ) }
						onDeselect={ resetMarginValue }
						isShownByDefault={ false }
					>
						<BoxControl
							values={ margin }
							onChange={ (newVal) => {
								setAttributes( { margin: newVal } )
							} }
							label={ __( 'Margin','wp-custom-gutenberg-blocks-boilerplate' ) }
							allowReset={ false }
							splitOnAxis={ false }
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<p { ...blockProps }>
				<BlockControlsCustomization
					isBold = {isBold}
					isItalic = {isItalic}
					text = { __( 'Hello WordPress Developers! from the Block controls example!', 'wp-custom-gutenberg-blocks-boilerplate') }
				/>
			</p>
		</>
	);
}
