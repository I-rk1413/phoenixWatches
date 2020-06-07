import React from 'react';
import styles from './productpreview.module.css'


const ProductPreview=(props)=>{
    const CurrentHour= new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours();
    const CurrentMinute= new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
    return(
        
    <div className={styles.ProductPreview}>
     <img src={props.currentImage} alt='imagePreview'/>
    
      {props.currentState ?
      <div className={styles.Time}>
    <p>{`${CurrentHour}:${CurrentMinute}`}</p>
    </div> :
    <div className={styles.HeartBeat}>
       <i className='fas fa-heartbeat'></i>
       <p>78</p>
    </div> }
    
    </div>
    );
}
export default ProductPreview;