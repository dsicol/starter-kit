import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLQueryResolvers, GraphQLLife } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, { id }) => {
    const { collections } = await getDatabaseContext();
    const lifeID = new ObjectId(id);
    const lifeCursorArray = await collections.lives.find({"_id": lifeID}).toArray();

    if (lifeCursorArray.length == 0) {
        throw new Error(`No object with ${id} found`);
    }

    const lifeFields = lifeCursorArray[0];
    const lifeByID: GraphQLLife = {
        firstName: lifeFields.firstName,
        lastName: lifeFields.lastName,
        fullName: lifeFields.firstName + " " + lifeFields.lastName,
        title: lifeFields.title,
        description: lifeFields.description,
        birthday: lifeFields.birthday,
        hobbies: lifeFields.hobbies
    }

    return lifeByID;    
};

export default query;
