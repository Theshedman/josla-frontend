import React, {Component} from "react";
import './index.css'
/**
 * Button component
 */
class Button extends Component {

  componentWillMount() {
    console.log(this.props);

    this.click = this.props.onClick;
    this.value = this.props.value;
    this.type = this.props.type;
    this.modifier = this.props.modifier
    switch (this.type) {
      case 'danger': 
          this.className = 'btn-danger'
        break;

      case 'success' :
        this.className = 'btn-success'
      break;

      case 'warning' :
      this.className = 'btn-warning'
      break;
      
      case 'info' :
          this.className = 'btn-info'
      break;
    
      default:
        break;
    }

  }

  render() {
    return (
      <>
        <button 
          className={"btn " + 
          this.className +
           " " + 
           this.modifier}
        >
          {this.value}
        </button>
      </>
    );
  }
}

export default Button;
