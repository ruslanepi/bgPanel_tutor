import React, { useState } from 'react';
import { data } from '../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePeople={removePeople}></List>
    </section>
  );
};

const List = ({ people, removePeople }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePeople={removePeople}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePeople }) => {
  return (
    <div className="item">
      <h4>{id}</h4>
      <span>{name}</span>
      <div onClick={() => removePeople(id)}>remove people</div>
    </div>
  );
};

export default PropDrilling;
