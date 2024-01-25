import { Button, Col, Input } from 'antd';
import { Formik, Field, Form } from 'formik';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEditLifeMutation, EditLifeMutationVariables } from '../api/index';

type EditLifeComponentProp = { id: string };

const EditLifeComponent = ({ id }: EditLifeComponentProp) => {
    const location = useLocation();
    const navigate = useNavigate();
    const defaultVariables = location.state;
    // Use of variables options in declaration to set default values
    // Mutation variables option overwrites this when called
    const [mutation] = useEditLifeMutation({
        variables: {
            id,
            edits: { ...defaultVariables },
        },
    });
    const handleEditLife = useCallback(async (lifeValues: EditLifeMutationVariables) => {
        await mutation({ variables: lifeValues });
        navigate(-1);
    }, []);

    return (
        <div>
            <Formik
                initialValues={useMemo(
                    () => ({
                        firstName: defaultVariables.firstName,
                        lastName: defaultVariables.lastName,
                        title: defaultVariables.title,
                        description: defaultVariables.description,
                        birthday: new Date(defaultVariables.birthday),
                        hobbies: defaultVariables.hobbies,
                    }),
                    []
                )}
                onSubmit={lifeValues => {
                    handleEditLife({
                        id,
                        edits: {
                            ...lifeValues,
                            birthday: new Date(lifeValues.birthday),
                        },
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
                        Edit this life
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default EditLifeComponent;
