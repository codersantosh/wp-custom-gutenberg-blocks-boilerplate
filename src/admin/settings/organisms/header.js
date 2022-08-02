/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

/*Inbuilt Components*/
import SettingsNotice from "../molecules/notice";
import Navlist from "../molecules/navlist";
import SaveBtn from "../atoms/save-btn";

const SettingsHeader = () => {
    const { useIsPending, useNotice } = useContext(SettingsContext);
    return (
        <>
            <header className="wp-custom-gutenberg-blocks-boilerplate-header wp-custom-gutenberg-blocks-boilerplate-header-sticky">
                <div className="at-flex at-align-items-center at-justify-content-between">
                        <div className="wp-custom-gutenberg-blocks-boilerplate-title">
                            <h1>{__('Settings', 'wp-custom-gutenberg-blocks-boilerplate')}</h1>
                        </div>
                        <div className="wp-custom-gutenberg-blocks-boilerplate-button">
                            <SaveBtn />
                        </div>
                    </div>               
            </header>
            {useNotice && !useIsPending && <SettingsNotice />}
            <Navlist />
        </>
    );
};

export default SettingsHeader;