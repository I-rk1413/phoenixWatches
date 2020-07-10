import {COLOR_CHANGE} from './constants';

export const changeColorOfWatch=(pos)=>({
    type:COLOR_CHANGE,
    payload:pos
})