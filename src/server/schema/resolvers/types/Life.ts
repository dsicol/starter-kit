import { GraphQLLifeResolvers } from '../definitions';

const LifeGraphQL: GraphQLLifeResolvers = {
    id: root => root._id,
    firstName: root => root.firstName,
    lastName: root => root.lastName,
    fullName: root => root.firstName + " " + root.lastName,
    title: root => root.title,
    description: root => root.description,
    birthday: root => root.birthday,
    hobbies: root => root.hobbies
};

export default LifeGraphQL;
