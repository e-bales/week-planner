const $addEntryButton = document.querySelector('#add-entry');
const $modalOverlay = document.querySelector('#modal-overlay');

// Form elements
const $entryForm = document.querySelector('#entry-form');
// const newTitle = $form.elements[0].value;
// const newUrl = $form.elements[1].value;
// const newNotes = $form.elements[2].value;
const $table = document.querySelector('table');

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

document.addEventListener('DOMContentLoaded', event => {
  const $mondayTable = renderTable('monday', data.monday);
  const $tuesdayTable = renderTable('tuesday', data.tuesday);
  const $wednesdayTable = renderTable('wednesday', data.wednesday);
  const $thursdayTable = renderTable('thursday', data.thursday);
  const $fridayTable = renderTable('friday', data.friday);
  const $saturdayTable = renderTable('saturday', data.saturday);
  const $sundayTable = renderTable('sunday', data.sunday);

  $table.appendChild($mondayTable);
  $table.appendChild($tuesdayTable);
  $table.appendChild($wednesdayTable);
  $table.appendChild($thursdayTable);
  $table.appendChild($fridayTable);
  $table.appendChild($saturdayTable);
  $table.appendChild($sundayTable);

});

function renderTable(day, array) {
  const $tbody = document.createElement('tbody');
  $tbody.setAttribute('id', day);
  for (let i = 0; i < array.length; i++) {
    const eventObj = array[i];
    const $tr = document.createElement('tr');
    const $timeTD = document.createElement('td');
    const $notesTD = document.createElement('td');
    $timeTD.textContent = eventObj.entryTime;
    $notesTD.textContent = eventObj.entryActivity;
    $tr.appendChild($timeTD);
    $tr.appendChild($notesTD);
    $tbody.appendChild($tr);
  }
  if (day !== 'monday') {
    $tbody.classList.add('hidden');
  }

  return $tbody;
}

const $buttonRow = document.querySelector('#buttonRow');
$buttonRow.addEventListener('click', function (event) {
  const eventTargetAttribute = event.target.getAttribute('data-view');
  event.target.classList.remove('hidden');
  const currentView = document.querySelector('[data-view=' + CSS.escape(eventTargetAttribute) + ']');
  console.log(eventTargetAttribute);
});
