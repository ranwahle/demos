'use strict';

Router.register('navigation', {
  add: Add,
  average: AncestryAverage,
  list: List,
  loading: Loading,
  navigation: Navigation,
  person: Person
});

Router.listen(window);