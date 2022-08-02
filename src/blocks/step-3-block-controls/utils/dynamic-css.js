/*Library*/
import {isEmpty, map} from "lodash";
export default function dynamicCSS(attributes){
    const {
        padding,
        margin
    } = attributes;
    let dynamicCSS = {};
    if( !isEmpty(margin) ){
        map(margin, function (item, index){
            dynamicCSS['margin-'+index] = item;
        })
    }
    if( !isEmpty(padding) ){
        map(margin, function (item, index){
            dynamicCSS['padding-'+index] = item;
        })
    }
    return dynamicCSS;
}