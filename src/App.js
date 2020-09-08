import React from 'react';
import Profilecomponent from './profile/profilecomponent'


const data={fullname:'Wejden.bedoui',bio :'gomycode student',profession:'developper'};

function App() {

  const handleName =(e)=> {
    //e.preventDefault();
   alert(`name of profile user is: ${e.fullname}`);
    };
  return (
    <Profilecomponent data={data} handleName={handleName}>
      <img src="/photo.jpg" alt="profil" style={{width:'250px'}}/>
      </Profilecomponent>
  );
}

export default App;