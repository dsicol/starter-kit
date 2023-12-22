import React from 'react';
import { useGetLifeByIdQuery } from '../api/index';

const GetLifeByIdComponent = ({ id }) => {
  const { data, loading, error } = useGetLifeByIdQuery(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const life = data.life;

  return (
    <div>
      <h1>Life By Id {id}</h1>
      <ul>
        <li>{life.fullName}</li>
      </ul>
    </div>
  );
};

export default GetLifeByIdComponent;
