import { ObjectId } from 'mongodb';
import { GraphQLMutationResolvers } from '../definitions';
import { getDatabaseContext, Life } from '../../../database';

const mutation: GraphQLMutationResolvers['createlife'] = async (
    root,
    { firstName, lastName, title, description, birthday, hobbies }
) => {
    const { collections } = await getDatabaseContext();
    const document: Life = {
        _id: new ObjectId(),
        firstName,
        lastName,
        title,
        birthday,
        description,
        hobbies,
    };
    try {
        await collections.lives.insertOne(document);
    } catch (error) {
        throw error;
    }
    return document
};

export default mutation;
