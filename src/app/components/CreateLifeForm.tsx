import React, { useState } from 'react';
import { useCreateLifeMutation, CreateLifeMutationVariables } from '../api/index';

const CreateLifeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [birthday, setBirthday] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [mutation] = useCreateLifeMutation();

    const handleCreateLife = async () => {
        const createLifeMutationVariables: CreateLifeMutationVariables = {
            lifeInput: {
                firstName,
                lastName,
                description,
                title,
                birthday: new Date(birthday),
                hobbies,
            },
        };
        await mutation({ variables: createLifeMutationVariables });
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                handleCreateLife();
            }}
        >
            <label htmlFor="firstName">
                First Name:
                <input onChange={e => setFirstName(e.target.value)} type="text" />
            </label>
            <br />
            <label htmlFor="lastName">
                Last Name:
                <input onChange={e => setLastName(e.target.value)} type="text" />
            </label>
            <br />
            <label htmlFor="description">
                Description:
                <input onChange={e => setDescription(e.target.value)} type="text" />
            </label>
            <br />
            <label htmlFor="title">
                Title:
                <input onChange={e => setTitle(e.target.value)} type="text" />
            </label>
            <br />
            <label htmlFor="birthday">
                Birthday:
                <input onChange={e => setBirthday(e.target.value)} type="date" />
            </label>
            <br />
            <label htmlFor="hobbies">
                Hobbies:
                <input onChange={e => setHobbies([e.target.value])} type="text" />
            </label>
            <br />
            <button type="submit">Create Life</button>
        </form>
    );
};

export default CreateLifeForm;
