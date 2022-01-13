import { getAncestryData } from "./ancestry.js";

const request = getAncestryData();
request
  .then(response => response.json())
  .then(handleResponse)
  .catch(err => {
    console.log(err);
  });


function handleResponse(people) {
  const byName = people.reduce((hash, person) => {
    hash[person.name] = person;
    return hash;
  }, {});
  const mothersByName = people.reduce((hash, person) => {
    const mother = byName[person.mother];
    if (mother) {
      if (mother.name in hash) {
        hash[mother.name].push(person);
      } else {
        hash[mother.name] = [person];
      }
    }
    return hash;
  }, {});


  const sorted = Object.fromEntries(Object
    .entries(mothersByName)
    .map(([mother, children]) => ([
      mother,
      children.sort((a, b) => a.born - b.born)
    ])));

  const ages = Object.entries(sorted).map(([mother, children]) => ({
    mother: byName[mother],
    minAge: children[0].born - byName[mother].born,
    children
  }));

  document.querySelector('#root').innerHTML = `
    <ol>
    ${ages.map(({mother, minAge, children}) => `
      <li>${mother.name}: ${minAge} (${children.map(child => {
        return child.born - mother.born;
      }).join(', ')})</li>
    `).join('')}
    </ol>
    <p>
      Average: ${ages.reduce((sum, obj) => sum += obj.minAge, 0) / ages.length}
    </p>
  `;
}