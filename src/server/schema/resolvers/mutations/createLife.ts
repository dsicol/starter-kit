import { ObjectId } from 'mongodb';
import { GraphQLMutationResolvers, GraphQLLife } from '../definitions';
import { getDatabaseContext, Life } from '../../../database';

const mutation: GraphQLMutationResolvers['createlife'] = async (
    root,
    { firstName, lastName, fullName, title, description, birthday, hobbies }
) => {
    const { collections } = await getDatabaseContext();
    const lifeObject: GraphQLLife = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        title: title,
        birthday: birthday,
        description: description,
        hobbies: hobbies,
    };
    const document: Life = {
        _id: new ObjectId(),
        firstName: lifeObject.firstName,
        lastName: lifeObject.lastName,
        title: lifeObject.title,
        birthday: lifeObject.birthday,
        description: lifeObject.description,
        hobbies: lifeObject.hobbies,
    };
    try {
        await collections.lives.insertOne(document);
    } catch (error) {
        throw error;
    }
    return lifeObject;
};

export default mutation;