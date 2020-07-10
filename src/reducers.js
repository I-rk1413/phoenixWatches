import {COLOR_CHANGE} from './constants';

const initialColor={
    previewImagePos:0
}

export const changeColor=(state=initialColor,action={})=>{
    switch(action.type){
        case COLOR_CHANGE:
            return Object.assign({},state,{previewImagePos:action.payload})
        default:
            return state;
    }
}