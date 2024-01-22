import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useGetListLivesQuery } from '../../api/index';
import ListLivesComponent from '../../components/ListLivesComponent';

const ListLivesPage = () => {
    const { data, loading, error } = useGetListLivesQuery({ fetchPolicy: 'cache-and-network' });
    const { t } = useTranslation(['lifePage']);
    const { Title } = Typography;
    const navigate = useNavigate();
    const lives = data?.life;

    const handleCreate = () => {
        navigate('create');
    };

    return (
        <div>
            <Title>{t('lifePage:listLives.title')}</Title>
            {error && <div>An error occurred!</div>}
            {loading && <div>Loading...</div>}
            {lives && <ListLivesComponent lives={lives} />}
            <Button icon={<PlusCircleFilled />} onClick={() => handleCreate()}>
                Create Life
            </Button>
        </div>
    );
};

export default ListLivesPage;
