import React, { useContext } from 'react';
import TryContext from '../context/TryContext';
import Cards from '../components/Cards';
import Form from '../components/Form';
import MainCard from '../components/MainCard';

function CreateCards() {
  const { onSave } = useContext(TryContext);
  console.log(onSave.length);
  return (
    <div className="CreateCards">
      <h1>Tryunfutino</h1>
      <div className="ap">
        <Form />
        <MainCard />
      </div>
      {onSave.length > 0 && (<Cards />)}
    </div>
  );
}

export default CreateCards;
