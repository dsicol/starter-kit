import { ObjectId } from 'mongodb';
import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, { id }) => {
    const { collections } = await getDatabaseContext();
    const lifeID = new ObjectId(id);
    const lifeCursorArray = await collections.lives.find({"_id": lifeID}).toArray();

    if (lifeCursorArray.length == 0) {
        throw new Error(`No object with ${id} found`);
    }

    const lifeById = lifeCursorArray[0];
    return lifeById;    
};

export default query;
