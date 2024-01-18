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
                    debugger;
                    handleCreateLife({
                        ...lifeValues,
                        birthday: new Date(lifeValues.birthday),
                    });
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" placeHolder="Enter first name" />
                    <br />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" placeHolder="Enter last name" />
                    <br />

                    <label htmlFor="title">Title</label>
                    <Field name="title" placeHolder="Enter title" />
                    <br />

                    <label htmlFor="description">Description</label>
                    <Field name="description" placeHolder="Enter description" />
                    <br />

                    <label htmlFor="birthday">Birthday</label>
                    <Field name="birthday" type="date" />
                    <br />

                    <label htmlFor="hobbies">Hobbies</label>
                    <Field name="hobbies" placeHolder="Enter Hobbies" />
                    <br />

                    <button type="submit">Create life</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateLifeComponent;
