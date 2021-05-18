import './App.css';
import {Component} from 'react';
import image from "./img.jpg"

class App extends Component{

state={isVisible:false}

person=[
  'marwa zaabi',
  'student at Gomycode',
  'student',
]

showV=()=>{
  this.setState({
    isVisible:!this.state.isVisible,
  
  })
  
}

render(){
  return (
  <div>
    
   <center>
      {this.state.isVisible ? (
         <>  <button onClick={this.showV}> Info </button>
          {this.person.map((person)=>(
      
             <h1>{person}</h1> 
             ) )
           }

       <center>
        <img src={image} style={{width:300,heigth:200, marginBottom:30}}/>
       </center>
     
        </>
      )
          :<button onClick={this.showV}> Show info </button> 
       
      }

    </center>
   </div>

  )
  
 
  
}
}


export default App;