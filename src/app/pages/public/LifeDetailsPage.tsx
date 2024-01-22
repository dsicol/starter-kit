import { LeftCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import LifeDetailsComponent from '../../components/LifeDetailsComponent';

const LifeDetailsPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const lifeId = params.id;

    return (
        <div>
            <Button icon={<LeftCircleFilled />} onClick={() => navigate('/lives')}>
                Back
            </Button>
            <LifeDetailsComponent id={lifeId} />
        </div>
    );
};

export default LifeDetailsPage;
