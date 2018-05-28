// Fixture


// Original code
// let button = document.querySelector('button');
// button.addEventListener('click', () => {
//   let table = parseTable(document.querySelector('table'));
//   let grades = table.map(student => student.grade);
//   document.querySelector('tfoot td:last-child').textContent = avg(grades);
// });

function parseTable(table) {
    return Array.from(table.querySelectorAll('tbody tr')).map(row => ({
      name: row.querySelector('td:first-child').textContent,
      grade: Number(row.querySelector('td:last-child').textContent)
    }));
}

let sum = arr => arr.reduce((sum, val) => sum + val, 0);
let avg = arr => sum(arr) / arr.length;


// Test helpers
function initContainer() {

}
function getMockTable(students) {
  return `
    <table>
      <thead></thead>
      <tbody>
        ${students.map(s => `
          <td>${s.name}</td>
          <td>${s.grade}</td>
        `)}
      </tbody>
      <tfoot></tfoot>
    </table>
  `;
}

// Test code
describe('Average', function() {
  let tableContainer;
  beforeAll(function() {
    tableContainer = document.createElement('div');
    tableContainer.classList.add('.x');
    document.body.appendChild(tableContainer);
  });
  beforeEach(function() {
    tableContainer.innerHTML = '';
  });
  afterAll(function() {
    document.body.removeChild(tableContainer);
  });
  describe('parseTable', function() {
    it('should parse correctly', function() {
      let students = [
        {name: 'Serge', grade: 85}
      ];
      tableContainer.innerHTML = getMockTable(students);
      expect(parseTable(tableContainer.querySelector('table'))).toEqual(students);
    });
  });
});