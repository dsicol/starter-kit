import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createlife'] = async (root, { lifeInput }) => {
    const { collections } = await getDatabaseContext();
    const document: Life = {
        _id: new ObjectId(),
        ...lifeInput,
    };
    try {
        await collections.lives.insertOne(document);
    } catch (error) {
        throw error;
    }

    return document;
};

export default mutation;
