/*Custom Components*/
const BlockControlsCustomization = ({isBold, isItalic, text}) => {
    if( isBold && isItalic ){
        return (
            <strong>
                <em>
                    {text}
                </em>
            </strong>
        )
    }
    if( isBold ){
        return (
            <strong>
                {text}
            </strong>
        )
    }
    if( isItalic ){
        return (
            <em>
                {text}
            </em>
        )
    }
    return text;
}
export default BlockControlsCustomization;