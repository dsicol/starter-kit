import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ListLivesComponent = ({ lives }) => {
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
