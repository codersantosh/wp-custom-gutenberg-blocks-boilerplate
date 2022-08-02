/**
 * SCSS
 */
import './style.scss';

/*WordPress*/
import {
    render,
    useContext,
} from '@wordpress/element';

import {
    Spinner,
} from "@wordpress/components";

/*Inbuilt Context Provider*/
import SettingsContextProvider, {SettingsContext} from '../../context/SettingsContext.js';

/*Router*/
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

/*Inbuilt Components*/
import General from "./pages/general";
import Advanced from "./pages/advanced";
import Header from "./organisms/header";
import Footer from "./organisms/footer";

const SettingRouters = () => {
    const { useSettings } = useContext(SettingsContext);
  
    if (!Object.keys(useSettings).length) {
        return (
            <Spinner className="wp-custom-gutenberg-blocks-boilerplate-page-loader" />
        )
    }
    return  (
        <div className='wp-custom-gutenberg-blocks-boilerplate'>
            <Header />
            <main className='wp-custom-gutenberg-blocks-boilerplate-main'>
                <Routes>
                    <Route exact path='/general' element={<General />} />
                    <Route exact path={'/advanced'} element={<Advanced />} />

                    <Route path="/" element={<Navigate replace to={'/general'} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

const InitSettings = () => {
    return  (
        <HashRouter basename="/">
            <SettingsContextProvider>
                <SettingRouters />
            </SettingsContextProvider>
        </HashRouter>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    if ('undefined' !== typeof document.getElementById(wpCustomGutenbergBlocksBoilerplateBuild.root_id) && null !== document.getElementById(wpCustomGutenbergBlocksBoilerplateBuild.root_id)) {
        render(<InitSettings />, document.getElementById(wpCustomGutenbergBlocksBoilerplateBuild.root_id));
    }
});