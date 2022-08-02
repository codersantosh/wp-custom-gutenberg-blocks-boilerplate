/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit() {
	const blockProps = useBlockProps();
	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'post' );
	}, [] );

	return (
		<div { ...blockProps }>
			{ ! posts && 'Loading' }
			{ posts && posts.length === 0 && 'No Posts' }
			{ posts && posts.length > 0 && (
				<a href={ posts[ 0 ].link }>
					{ posts[ 0 ].title.rendered }
				</a>
			) }
		</div>
	);
}