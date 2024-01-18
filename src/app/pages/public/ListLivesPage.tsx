import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetListLivesQuery } from '../../api/index';
import ListLivesComponent from '../../components/ListLivesComponent';

const ListLivesPage = () => {
    const { data, loading, error } = useGetListLivesQuery();
    const { t } = useTranslation(['lifePage']);
    const lives = data?.life;

    return (
        <div>
            <h1>{t('lifePage:listLives.title')}</h1>
            {error && <div>An error occurred!</div>}
            {loading && <div>Loading...</div>}
            {lives && <ListLivesComponent lives={lives} />}
        </div>
    );
};

export default ListLivesPage;
