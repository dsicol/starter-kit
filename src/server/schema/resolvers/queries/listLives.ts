import { getDatabaseContext} from '../../../database';
import { GraphQLQueryResolvers, GraphQLLife } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async (root) => {
    const { collections } = await getDatabaseContext();
    const lifeCursorArray = await collections.lives.find({}).toArray();

    if (lifeCursorArray.length == 0) {
        throw new Error(`No lives found`);
    }
    
    const lifeList: Array<GraphQLLife> = lifeCursorArray.map((lifeData) => ({
        firstName: lifeData.firstName,
        lastName: lifeData.lastName,
        fullName: lifeData.firstName + ' ' + lifeData.lastName,
        title: lifeData.title,
        description: lifeData.description,
        birthday: lifeData.birthday,
        hobbies: lifeData.hobbies,
    }));

    return lifeList;    
};

export default query;
