import React from 'react';
import { useParams } from 'react-router';
import EditLifeComponent from '../../components/EditLifeComponent';

const EditLifePage = () => {
    const params = useParams();
    const lifeId = params.id;

    return <EditLifeComponent id={lifeId} />;
};

export default EditLifePage;
