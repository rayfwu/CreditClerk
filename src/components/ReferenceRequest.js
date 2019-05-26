import React from 'react';

class ReferenceRequest extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         yourtoken: 'Enter token',
         custnum: 'Enter customer number'
      }
      this.updateToken = this.updateToken.bind(this);
      this.updateCustomer = this.updateCustomer.bind(this);
   };
   updateToken(e) {
      this.setState({yourtoken: e.target.value});
   }
   updateCustomer(e) {
      this.setState({custnum: e.target.value});
   }
   render() {
      return (
         <div>
          <label>
            Token: 
            <input type = "text" value = {this.state.yourtoken} 
                onChange = {this.updateToken} />
          </label>
          <input type="submit" value="Submit" />
          <h4>{this.state.yourtoken}</h4>
          <label>
            Customer Number: 
            <input type = "text" value = {this.state.custnum}
                onChange = {this.updateCustomer}/>
          </label>
          <h4>{this.state.custnum}</h4>
          <input type="submit" value="Submit" />
         </div>
      );
   }
}
export default ReferenceRequest;
