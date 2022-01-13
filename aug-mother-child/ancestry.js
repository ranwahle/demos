export function getAncestryData() {
  return fetch('./ancestry.json');
}

// export function getAncestryData(name) {
//   return new Promise((resolve, reject) => {
//     if (typeof name !== 'string') {
//       reject('Please send String as the name');
//     }
//     setTimeout(() => {
//       // get my data
//       resolve({
//         body: [42]
//       });
//     }, 3000);
//   });
// }