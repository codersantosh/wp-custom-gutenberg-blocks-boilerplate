/**
 * https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-deprecation.md
 */
import {RichText, useBlockProps} from "@wordpress/block-editor";

const v1 = {
	attributes: {
		"tName": {
			"type": "string",
			"default": "p"
		},
		"description": {
			"type": "string",
			"source": "html",
			"selector": "h1,h2,h3,h4,h5,h6,p",
			"default": "",
			"__experimentalRole": "content"
		}
	},
	supports: {
		"anchor": true,
		"className": false
	},
	save({attributes}) {
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
	},
	migrate( attributes, innerBlocks ) {
		const {
			tName,
			description
		} = attributes;
		return {
			tagName: tName,
			content: description,
		};
	},
	isEligible( attribute ) {
		return (attribute.tName);
	},
};

/**
 * New deprecations need to be placed first
 * for them to have higher priority.
 *
 * Old deprecations may need to be updated as well.
 *
 * See block-deprecation.md
 */
export default [ v1 ];
