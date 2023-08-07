import './styles.css';
import Button from './Button';
import oceans from './oceans.json'; 



function Profile() {
 const listItems = oceans.map(ocean => (
   <div key ={ocean.id} className ="profile">
      <img src = {ocean.id} alt={ocean.name} className = "img" />
   </div>
 )); 
   return(
      <>
      {listItems}
         <Button />
      </>  
   );
}

export default Profile;