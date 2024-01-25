import { getDatabaseContext } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['editLife'] = async (root, { id, edits }) => {
    const { collections } = await getDatabaseContext();

    return (await collections.lives.findOneAndUpdate({ _id: id }, { $set: { ...edits } }, { returnDocument: 'after' }))
        .value;
};

export default mutation;
