/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	BlockControls,
	RichText
} from '@wordpress/block-editor';

import {
	Toolbar,
	ToolbarGroup,
	Button,
	Dropdown,
	ToolbarButton
} from '@wordpress/components';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit
	({
		 attributes,
		 setAttributes,
	 })
{
	const {
		tName,
		description
	} = attributes;

	const blockProps = useBlockProps();
	return (
		<>
			<BlockControls>
				<Toolbar label={__('Example Toolbar','wp-custom-gutenberg-blocks-boilerplate')}>
					<ToolbarGroup>
						<Dropdown
							className="my-container-class-name"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={ ( { isOpen, onToggle } ) => (
								<ToolbarButton
									className = {tName?'is-pressed':undefined}
									label={tName}
									onClick={ onToggle }
									aria-expanded={ isOpen }
								>
									{tName}
								</ToolbarButton>
							) }
							renderContent={ () =>
								<div
									role="menu"
									aria-orientation="vertical"
									aria-label={__('More','wp-custom-gutenberg-blocks-boilerplate')}
									className="components-dropdown-menu__menu">
									{["H1","H2","H3","H4","H5","H6",'P'].map(function (item){
										return (
											<Button
												onClick={() =>
													setAttributes( { tName: item.toLowerCase() } )
												}
											>
												{item}
											</Button>
										)
									})}

								</div> }
						/>
					</ToolbarGroup>

				</Toolbar>
			</BlockControls>
			<RichText
				tagName={ tName.toLowerCase() }
				value={ description }
				onChange={ (newVal) => {
					setAttributes( { description: newVal } );
				} }
				placeholder={ __( 'Description...', 'wp-custom-gutenberg-blocks-boilerplate' )  }
				{ ...blockProps }
			/>
		</>
	);
}
