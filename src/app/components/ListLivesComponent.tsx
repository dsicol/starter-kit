import { Card, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type ListLivesComponentProp = {
    lives: {
        id: string;
        fullName: string;
        title: string;
        description: string;
    }[];
};

const ListLivesComponent = ({ lives }: ListLivesComponentProp) => {
    const { t } = useTranslation(['lifePage']);

    return (
        <div>
            {lives.map(life => (
                <Space size="middle" style={{ display: 'flex' }}>
                    <Card
                        extra={<Link to={`/lives/${life.id}`}>Details</Link>}
                        style={{ width: 300 }}
                        title={life.fullName}
                    >
                        <p>{life.title}</p>
                        <p>{life.description}</p>
                    </Card>
                </Space>
            ))}
        </div>
    );
};

export default ListLivesComponent;
