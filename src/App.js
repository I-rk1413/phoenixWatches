import React from 'react';
import amazonLogo from './amazonLogo.jpg';
import {connect } from 'react-redux';
import styles from './App.module.css';
import Productpreview from './ProductPreview/productpreview.js'
import ProductData from './ProductData/productdata.js';
import Backend from './backend';
import {changeColorOfWatch} from './actions';



const mapStateToProps=(state)=>{
  return{
    previewImagePos:state.previewImagePos
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
    onColorClick:(pos)=>dispatch(changeColorOfWatch(pos))
  }
}


class  App extends React.Component {

  state={
    featureTimeState: true,
    featurePos:0
  }



  onButtonClick=(pos)=>{
    this.setState((prevState,prevProps)=>{
      return{
      featurePos: pos,
      featureTimeState: pos===prevState.featurePos ? prevState.featureTimeState : !prevState.featureTimeState}  
  })
  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
      <nav className={styles.Topbar}>
        <img src={amazonLogo} alt='amazonLogo' width='10%' />

     </nav>
      </header> 

      <div className={styles.MainContainer}>
        <div className={styles.ProductPreview}>
        <Productpreview currentImage={Backend.colorOptions[this.props.previewImagePos].imageUrl} currentState={this.state.featureTimeState} />
        </div>
          
        <div className={styles.ProductData}>
          <ProductData data={Backend} onColorClick={this.props.onColorClick} previewImagePos={this.props.previewImagePos} onButtonClick={this.onButtonClick} 
          featurePos={this.state.featurePos}/>
        </div>

      </div>
      </div>
  
  );
}
}


export default connect(mapStateToProps,mapDispatchToProps) (App);

