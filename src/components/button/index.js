import React ,{Component} from 'react';
import Proptypes from 'prop-types';

class SharedButton extends Component{
    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }
    render(){
        const {buttonText}=this.props; 
        return(
            <button onClick={()=>this.submitEvent()}data-test="buttonComponent">{buttonText}</button>
        )
    }
}

SharedButton.proptype={
buttonText:Proptypes.string,
emitEvent:Proptypes.func
};

export default SharedButton;