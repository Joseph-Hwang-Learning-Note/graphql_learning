import { people, getById, addPerson, deletePerson } from "../db/db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    },
    Mutation: {
        addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
        deletePerson: (_, {id}) => deletePerson(id)
    }
}

export default resolvers