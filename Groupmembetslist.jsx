import React from 'react';

const GroupMembersList = () => {
  const group10Members = [
    'Group member names',
    'Alem',
    'Adey',
    'Afomia',
    'Helina',
    'Care',
    'Zoya',
    'Arohi',
    'Maya',
    'Meny',
    'Hari',
  ];

  return (
    <ul>
      {group10Members.map((member, index) => (
        <li key={index}>{member}</li>
      ))}
    </ul>
  );
};

export default GroupMembersList;