const $addEntryButton = document.querySelector('#add-entry');
const $modalOverlay = document.querySelector('#modal-overlay');

// Form elements
const $entryForm = document.querySelector('#entry-form');
// const newTitle = $form.elements[0].value;
// const newUrl = $form.elements[1].value;
// const newNotes = $form.elements[2].value;

$addEntryButton.addEventListener('click', event => {
  $modalOverlay.classList.remove('hidden');
});

$entryForm.addEventListener('submit', event => {
  event.preventDefault();
  $modalOverlay.classList.add('hidden');
  const day = $entryForm.elements[0].value;
  const time = $entryForm.elements[1].value;
  const activity = $entryForm.elements[2].value;
  const obj = {
    entryDay: day,
    entryTime: time,
    entryActivity: activity
  };
  data[day].push(obj);
  $entryForm.reset();
});
