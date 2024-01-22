import { EditFilled } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetLifeByIdQuery, useDeleteLifeMutation } from '../api/index';

type LifeDetailsComponentProp = { id: string };

const LifeDetailsComponent = ({ id }: LifeDetailsComponentProp) => {
    const { data, loading, error } = useGetLifeByIdQuery({ variables: { id }, fetchPolicy: 'cache-and-network' });
    const [mutation] = useDeleteLifeMutation();
    const { t } = useTranslation(['lifePage']);
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error finding a life: Server response - ${error.message}`}</p>;
    }

    const { life } = data;
    const { Title } = Typography;
    const handleEdit = () => {
        navigate('edit', {
            relative: 'path',
            state: {
                id,
                firstName: life.firstName,
                lastName: life.lastName,
                title: life.title,
                description: life.description,
                birthday: life.birthday,
                hobbies: life.hobbies,
            },
        });
    };
    const handleDelete = async () => {
        await mutation({ variables: { id } });
        navigate('/lives');
    };

    return (
        <div>
            <Title>{t('lifePage:lifeDetail.title')}</Title>
            <ul>
                <li>{life.fullName}</li>
                <li>{life.title}</li>
                <li>{life.description}</li>
                <li>{life.birthday.toString()}</li>
                <li>{life.hobbies}</li>
            </ul>
            <br />
            <Button icon={<EditFilled />} onClick={() => handleEdit()} type="primary">
                Edit
            </Button>
            <br />
            <Button icon={<EditFilled />} onClick={() => handleDelete()} type="primary">
                Delete
            </Button>
        </div>
    );
};

export default LifeDetailsComponent;
