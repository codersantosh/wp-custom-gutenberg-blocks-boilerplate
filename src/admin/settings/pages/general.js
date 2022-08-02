/*WordPress*/
import {
    useContext,
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    TextControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const General = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);
console.log(useSettings)
    return (
        <>
            <div className="wp-custom-gutenberg-blocks-boilerplate-field-wrap">
                <TextControl
                    label={__('Setting 1','wp-custom-gutenberg-blocks-boilerplate')}
                    placeholder={__('Enter Text','wp-custom-gutenberg-blocks-boilerplate')}
                    value={useSettings && useSettings['setting_1']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_1',newVal)
                    }
                />
            </div>

            <div className="wp-custom-gutenberg-blocks-boilerplate-field-wrap">
                <TextControl
                    label={__('Setting 2','wp-custom-gutenberg-blocks-boilerplate')}
                    placeholder={__('Enter Another Text','wp-custom-gutenberg-blocks-boilerplate')}
                    value={useSettings && useSettings['setting_2']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_2',newVal)
                    }
                />
            </div>
        </>
    )
}

export default General;
