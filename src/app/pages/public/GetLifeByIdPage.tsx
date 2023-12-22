import React from 'react';
import GetLifeById from '../../components/GetLifeByIdComponent';

const LifeDetailsPage = () => {
  const lifeId = '123'; 
  return <GetLifeById id={lifeId} />;
};

export default LifeDetailsPage;
