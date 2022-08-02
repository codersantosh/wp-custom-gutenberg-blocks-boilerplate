/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import RenderCss from "../../utils/render-css";

/**
 * Style CSS
 */
import './style.scss';

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const greenBackground = {
		backgroundColor: '#fd4111',
	};
	const blockProps = useBlockProps.save( { style: greenBackground } );

	return (
		<>
			<RenderCss>
				{`
				.wp-custom-gutenberg-blocks-boilerplate{
                        &-parent {
                            min-height:200px;
                            padding:30px;
                            p{
                           		color:red;
                            }
                        }
					   &-child{
							color:orange;
						}
						&-child-2{
							background:yellow;
						}
                `}
			</RenderCss>
			<div
				{ ...blockProps }
				className='wp-custom-gutenberg-blocks-boilerplate-parent'
			>
				<div className='wp-custom-gutenberg-blocks-boilerplate-child wp-custom-gutenberg-blocks-boilerplate-child-1'>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 1!', 'wp-custom-gutenberg-blocks-boilerplate') }
				</div>
				<div className='wp-custom-gutenberg-blocks-boilerplate-child wp-custom-gutenberg-blocks-boilerplate-child-2'>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 2!', 'wp-custom-gutenberg-blocks-boilerplate') }
				</div>
				<p>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 3!', 'wp-custom-gutenberg-blocks-boilerplate') }
				</p>
			</div>
		</>

	);
}