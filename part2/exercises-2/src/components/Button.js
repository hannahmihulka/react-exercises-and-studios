import './styles.css';

function Button() {
   const onLearnMore = () => {
      alert ("WAAAAATERRRRR"); 
   }
   return ( 
         <button
            onClick = {onLearnMore}>
               Learn More!
         </button>
   );

}



export default Button;