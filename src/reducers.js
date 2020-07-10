import {COLOR_CHANGE,CHANGE_FEATURE} from './constants';

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

const initialFeature={
    featureTimeState:true,
    position:0
}

export const changeFeature=(state=initialFeature,action={})=>{
    switch(action.type){
        case CHANGE_FEATURE:
           return Object.assign({},state,{featureTimeState:action.payload,position:action.position}) 
        default:
            return state;
    }
}