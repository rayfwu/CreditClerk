import React from 'react';

class Result extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.token}</h1>
            <h2>{this.props.custnum}</h2>
         </div>
      );
   }
}
Result.defaultProps = {
   token: "Token from props...",
   custnum:"Custnum from props..."
}
export default Result;