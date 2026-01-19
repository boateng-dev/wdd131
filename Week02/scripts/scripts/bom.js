const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = input.value;
    deleteButton.textContent = '';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
    
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });
    
    li.append(deleteButton);
    list.append(li);
    
    input.value = ''; // clear input
    input.focus(); // focus back on input
  }
});
