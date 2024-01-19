import { Button, Col, Row } from 'antd';
import { Formik, Field, Form } from 'formik';
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
    const handleCreateLife = async (lifeValues: LifeValues) => {
        const createLifeMutationVariables: CreateLifeMutationVariables = {
            lifeInput: lifeValues,
        };
        await mutation({ variables: createLifeMutationVariables });
    };

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    title: '',
                    description: '',
                    birthday: new Date(),
                    hobbies: [],
                }}
                onSubmit={(lifeValues: LifeValues) => {
                    handleCreateLife({
                        ...lifeValues,
                        birthday: new Date(lifeValues.birthday),
                    });
                }}
            >
                // todo: Field as {Input}
                <Form>
                    <Row align="middle" gutter={[16, 24]}>
                        <Col span={12}>
                            <label htmlFor="firstName">First Name</label>
                        </Col>
                        <Col span={12}>
                            <Field name="firstName" placeHolder="Enter first name" />
                        </Col>

                        <Col span={12}>
                            <label htmlFor="lastName">Last Name</label>
                        </Col>
                        <Col span={12}>
                            <Field name="lastName" placeHolder="Enter last name" />
                        </Col>

                        <Col span={12}>
                            <label htmlFor="title">Title</label>
                        </Col>
                        <Col span={12}>
                            <Field name="title" placeHolder="Enter title" />
                        </Col>

                        <Col span={12}>
                            <label htmlFor="description">Description</label>
                        </Col>
                        <Col span={12}>
                            <Field name="description" placeHolder="Enter description" />
                        </Col>

                        <Col span={12}>
                            <label htmlFor="birthday">Birthday</label> 
                        </Col>
                        <Col span={12}>
                            <Field name="birthday" type="date" />
                        </Col>

                        <Col span={12}>
                            <label htmlFor="hobbies">Hobbies</label>
                        </Col>
                        <Col span={12}>
                            <Field name="hobbies" placeHolder="Enter Hobbies" />
                        </Col>
                        <Button htmlType="submit" block>
                            Create life
                        </Button>
                    </Row>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateLifeComponent;
