import React from 'react';
import { useParams } from 'react-router';
import LifeDetailsComponent from '../../components/LifeDetailsComponent';

const LifeDetailsPage = () => {
    const params = useParams();
    const lifeId = params.id;

    return <LifeDetailsComponent id={lifeId} />;
};

export default LifeDetailsPage;
