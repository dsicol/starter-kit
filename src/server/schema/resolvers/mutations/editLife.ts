import { getDatabaseContext } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['editLife'] = async (root, { id, edits }) => {
    const { collections } = await getDatabaseContext();
    collections.lives.findOneAndUpdate({ _id: id }, { $set: { ...edits } }, { returnDocument: 'after' });

    return collections.lives.findOne({ _id: id });
};

export default mutation;
