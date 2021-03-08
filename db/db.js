export let people = [
    {
        id: 1,
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "Jisu",
        age: 18,
        gender: "male"
    },
    {
        id: 3,
        name: "Alex",
        age: 18,
        gender: "female"
    },
    {
        id: 4,
        name: "Brian",
        age: 18,
        gender: "male"
    },
    {
        id: 5,
        name: "Charlie",
        age: 18,
        gender: "female"
    },
    {
        id: 6,
        name: "Debian",
        age: 18,
        gender: "male"
    },
    {
        id: 7,
        name: "Echo",
        age: 18,
        gender: "female"
    },
    {
        id: 8,
        name: "Foxtrat",
        age: 18,
        gender: "male"
    },
]

export const getPeople = () => people;

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]
}

export const deletePerson = id => {
    const cleanedPeople = people.filter(person => person.id !== id)
    if(people.length > cleanedPeople.length) {
        people = cleanedPeople
        return true;
    } else {
        return false;
    }
}

export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name,
        age,
        gender
    }
    people.push(newPerson)
    return newPerson
}
