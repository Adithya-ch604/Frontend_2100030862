const formContainer = document.getElementById('form-container');
const addFieldButton = document.getElementById('add-field');
const removeFieldButton = document.getElementById('remove-field');
const dynamicForm = document.getElementById('dynamic-form');

let fieldCount = 0;

addFieldButton.addEventListener('click', () => {
  fieldCount++;

  const table = document.createElement('table');
  const tableRow = document.createElement('tr');

  const labelCell = document.createElement('td');
  const label = document.createElement('label');
  label.innerText = `Field ${fieldCount}:`;
  labelCell.appendChild(label);

  const inputCell = document.createElement('td');
  const select = document.createElement('select');
  const optionText = document.createElement('option');
  optionText.value = 'text';
  optionText.innerText = 'Text Input';
  select.appendChild(optionText);
  const optionCheckbox = document.createElement('option');
  optionCheckbox.value = 'checkbox';
  optionCheckbox.innerText = 'Checkbox';
  select.appendChild(optionCheckbox);
  const optionRadio = document.createElement('option');
  optionRadio.value = 'radio';
  optionRadio.innerText = 'Radio Button';
  select.appendChild(optionRadio);
  select.addEventListener('change', (event) => {
    const inputType = event.target.value;
    let inputElement;
    if (inputType === 'text') {
      inputElement = document.createElement('input');
      inputElement.type = 'text';
    } else if (inputType === 'checkbox') {
      inputElement = document.createElement('input');
      inputElement.type = 'checkbox';
    } else if (inputType === 'radio') {
      inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = `field-${fieldCount}`; // Unique name for radio buttons
    }
    inputCell.replaceChild(inputElement, inputCell.firstChild);
  });
  inputCell.appendChild(select);

  tableRow.appendChild(labelCell);
  tableRow.appendChild(inputCell);
  table.appendChild(tableRow);
  dynamicForm.appendChild(table);
});

removeFieldButton.addEventListener('click', () => {
  if (fieldCount > 0) {
    dynamicForm.removeChild(dynamicForm.lastChild);
    fieldCount--;
  }
});
