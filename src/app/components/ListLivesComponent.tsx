import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Life } from '../api';

type ListLivesComponentProp = { lives: Array<Life> };

const ListLivesComponent = ({ lives }: ListLivesComponentProp) => {
    const { t } = useTranslation(['lifePage']);

    return (
        <div>
            <ul>
                {lives.map(life => (
                    <li key={life.id}>
                        <Link to={`/lives/${life.id}`}>{life.fullName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListLivesComponent;
