# Mother-Child

Based on the Eloquent JavaScript exercise:

https://eloquentjavascript.net/2nd_edition/05_higher_order.html#h_I9XoVSLsTV

Given an Array of person objects should calculate the average difference between mothers and their children.

Further phase is improving the computational complexity from `O(n^2)` to `O(n)` by using a hash table.

Data looks like this:

```json
[
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}
]
```

Full file:

https://eloquentjavascript.net/2nd_edition/code/ancestry.js