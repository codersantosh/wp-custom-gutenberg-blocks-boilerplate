/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	Button,
} from '@wordpress/components';

import {
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit({clientId}) {
	const blockProps = useBlockProps();
	const MY_TEMPLATE = [
		[ 'core/heading', { placeholder: __('FAQ Query','wp-custom-gutenberg-blocks-boilerplate' ) } ],
		[ 'core/paragraph', { placeholder: __('FAQ Answers and explanation','wp-custom-gutenberg-blocks-boilerplate' ) } ],
	];

	function addInnerBlock() {
		wp.data.dispatch('core/editor').insertBlocks(createBlocksFromInnerBlocksTemplate(MY_TEMPLATE),undefined,clientId);
		wp.data.dispatch( 'core/block-editor' ).selectBlock(clientId);
	}

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ MY_TEMPLATE }
				templateLock={ false }
				allowedBlocks={ [ 'core/heading','core/paragraph'] }
				renderAppender= {false}
			/>
			<Button
				icon ='plus'
				onClick={addInnerBlock}
			>
				{__('Add New','wp-custom-gutenberg-blocks-boilerplate' )}
			</Button>
		</div>
	);
}