import React from 'react';

export default props => ({
   render() {
      return (
         <div className={`well m-4 p-4 text-center ${props.name}`}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} target="_blank"><button className='btn'>Open in Google Maps</button></a>
         </div>
      )
   }
});