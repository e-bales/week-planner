window.addEventListener('beforeunload', event => {
  data.view = 'monday';
  const dataModel = JSON.stringify(data);
  localStorage.setItem('userData', dataModel);
});

var data = {
  nextEntryId: 1,
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  editing: null,
  view: 'monday'
};

if (localStorage.getItem('userData') !== null) {
  data = JSON.parse(localStorage.getItem('userData'));
}
