/*https://gist.github.com/codersantosh/393ccbca4f1504ddd343abb0756fce72*/
import {compile, serialize, stringify, middleware, prefixer} from 'stylis';

/*Process the Raw CSS*/
const getProcessedCss = (rawCss) =>{
    return serialize(compile(rawCss), middleware([prefixer, stringify]))
}

/*Render CSS inside style tag*/
const RenderCss = (props) => {
    return (
        <style>{getProcessedCss(props.children)}</style>
    );
};
export default RenderCss;