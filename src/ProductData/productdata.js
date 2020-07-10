import React from 'react';
import styles from './productdata.module.css';


const ProductData=(props)=>{

const colorOptions=props.data.colorOptions.map((item,pos)=>{
  const classArr=[styles.ProductImage]
  if(pos===props.previewImagePos){
    classArr.push(styles.SelectedProduct)
  }
  return(
    <img className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=> props.onColorClick(pos) } key={pos}/>
  )
});



const selectedButton=props.data.featureList.map((item,pos)=>{
  const mArr=[styles.FeatureItem];
  if(pos===props.featurePos){
  mArr.push(styles.SelectedFeatureItem)
  }
  return(
    <button className={mArr.join(' ')} onClick={()=>props.onButtonClick(pos)} key={pos}>{item}</button>
  )
})

    return(
        <div className={styles.ProductData}>
          <h1 className={styles.title}>{props.data.title}</h1>
          <p className={styles.details}>{props.data.description}</p>
          <h3 className={styles.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
          </div>
          <h3 className={styles.SectionHeading}>Features</h3>
          <div>  
            {selectedButton}
            
          </div>
          <button className={styles.PrimaryButton}>Buy Now</button>
        </div>
    )


}

export default ProductData;

