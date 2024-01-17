import { getDatabaseContext} from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async (root) => {
    const { collections } = await getDatabaseContext();
    const lives = await collections.lives.find().toArray();
    return lives;   
};

export default query;