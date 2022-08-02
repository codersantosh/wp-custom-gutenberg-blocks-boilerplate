/**
 * WordPress dependencies
 */
import { useBlockProps} from "@wordpress/block-editor";

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();

	return (
		<p { ...blockProps }>
			The record ID: { props.attributes.contextRecordId }
		</p>
	);
}