import {COLOR_CHANGE,CHANGE_FEATURE} from './constants';

export const changeColorOfWatch=(pos)=>({
    type:COLOR_CHANGE,
    payload:pos
});

export const changeFeatureOfWatch=(value)=>{
    if(!value){
        return {
            type:CHANGE_FEATURE,
            payload:true,
            position:value
        }
        }
 else{
            return{
                type:CHANGE_FEATURE,
                payload:false,
                position:value

            }
        }
    }
    