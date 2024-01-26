import { getDatabaseContext } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['deleteLife'] = async (root, { id }) => {
    const { collections } = await getDatabaseContext();
    const deletedLife = await collections.lives.findOneAndDelete({ _id: id });

    return deletedLife.value;
};

export default mutation;
