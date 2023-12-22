import React from 'react';
import { useGetListLivesQuery } from 'C:/Users/Darren/Dropbox/PC/Desktop/code-appvantage/starter-kit/src/app/api/index';

const ListLives = () => {
  const { data, loading } = useGetListLivesQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  const lives = data?.life;

  return (
    <div>
      <h1>List of Lives</h1>
      <ul>
        {lives.map((life) => (
          <li>{life.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListLives;
