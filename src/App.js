import React from 'react';
import amazonLogo from './amazonLogo.jpg';
import styles from './App.module.css';
import Productpreview from './ProductPreview/productpreview.js'
import ProductData from './ProductData/productdata.js';
import Backend from './backend'



class  App extends React.Component {

  state={
    backend: Backend,
    previewImagePos:0,
    featureTimeState: true,
    featurePos:0
  }

  onColorClick=(pos)=>{
    this.setState({previewImagePos: pos})
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
        <Productpreview currentImage={this.state.backend.colorOptions[this.state.previewImagePos].imageUrl} currentState={this.state.featureTimeState} />
        </div>
          
        <div className={styles.ProductData}>
          <ProductData data={this.state.backend} onColorClick={this.onColorClick} previewImagePos={this.state.previewImagePos} onButtonClick={this.onButtonClick} 
          featurePos={this.state.featurePos}/>
        </div>

      </div>
      </div>
  
  );}
}


export default App;

