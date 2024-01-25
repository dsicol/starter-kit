import { Button, Col, Input } from 'antd';
import { Formik, Field, Form } from 'formik';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useCreateLifeMutation, CreateLifeMutationVariables } from '../api/index';

interface LifeValues {
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    birthday: Date;
    hobbies: string[];
}

const CreateLifeComponent = () => {
    const [mutation] = useCreateLifeMutation();
    const navigate = useNavigate();
    const handleCreateLife = useCallback(async (lifeValues: LifeValues) => {
        const createLifeMutationVariables: CreateLifeMutationVariables = {
            lifeInput: lifeValues,
        };
        await mutation({ variables: createLifeMutationVariables });
        navigate('/lives');
    }, []);

    return (
        <div>
            <Formik
                initialValues={useMemo(
                    () => ({
                        firstName: '',
                        lastName: '',
                        title: '',
                        description: '',
                        birthday: new Date(),
                        hobbies: [],
                    }),
                    []
                )}
                onSubmit={(lifeValues: LifeValues) => {
                    handleCreateLife({
                        ...lifeValues,
                        birthday: new Date(lifeValues.birthday),
                    });
                }}
            >
                <Form>
                    <Col span={12}>
                        <label htmlFor="firstName">First Name</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="firstName" placeHolder="Enter first name" variant="filled" />
                    </Col>

                    <Col span={12}>
                        <label htmlFor="lastName">Last Name</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="lastName" placeHolder="Enter last name" variant="filled" />
                    </Col>

                    <Col span={12}>
                        <label htmlFor="title">Title</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="title" placeHolder="Enter title" variant="filled" />
                    </Col>

                    <Col span={12}>
                        <label htmlFor="description">Description</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="description" placeHolder="Enter description" variant="filled" />
                    </Col>

                    <Col span={12}>
                        <label htmlFor="birthday">Birthday</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="birthday" type="date" variant="filled" />
                    </Col>

                    <Col span={12}>
                        <label htmlFor="hobbies">Hobbies</label>
                    </Col>
                    <Col span={12}>
                        <Field as={Input} name="hobbies" placeHolder="Enter Hobbies" variant="filled" />
                    </Col>
                    <Button htmlType="submit" size="large">
                        Create life
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateLifeComponent;
