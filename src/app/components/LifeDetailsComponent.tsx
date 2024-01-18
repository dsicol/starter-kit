import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetLifeByIdQuery } from '../api/index';

type LifeDetailsComponentProp = { id: string };

const LifeDetailsComponent = ({ id }: LifeDetailsComponentProp) => {
    const { data, loading, error } = useGetLifeByIdQuery({ variables: { id } });
    const { t } = useTranslation(['lifePage']);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error finding a life: Server response - ${error.message}`}</p>;
    }

    const { life } = data;

    return (
        <div>
            <h1>{t('lifePage:lifeDetail.title')}</h1>
            <ul>
                <li>{life.fullName}</li>
                <li>{life.title}</li>
                <li>{life.description}</li>
                <li>{life.birthday.toString()}</li>
                <li>{life.hobbies}</li>
            </ul>
        </div>
    );
};

export default LifeDetailsComponent;
