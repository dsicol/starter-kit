import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, { id }) => {
    const { collections } = await getDatabaseContext();
    const lifeById = await collections.lives.findOne({ _id: id });

    return lifeById;
};

export default query;
