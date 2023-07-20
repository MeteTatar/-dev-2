// css/style'ı index'e ekleme

var head = document.head; // head elementini seçin
var link = document.createElement("link"); // link elementi oluşturun

link.type = "text/css"; // link elementinin type özelliğini ayarlayın
link.rel = "stylesheet"; // link elementinin rel özelliğini ayarlayın
link.href = "css/style.css"; // link elementinin href özelliğini ayarlayın

head.appendChild(link); // head elementine link elementini ekleyin




// Tüm listeyi seçme
const list = document.querySelector('#list');

list.addEventListener('click', (event) => 
{
  const target = event.target;

  if (target.tagName === 'LI') 
  {
    target.classList.toggle('checked');
  }
}
);



// Tüm li öğelerini seç
const items = list.querySelectorAll('li');

// Her bir öğe için silme düğmesi oluşturun ve ekleyin
items.forEach(item => {
  const deleteButton = document.createElement('span');
  deleteButton.innerHTML = '&times;'; // Çarpı işareti kodu
  deleteButton.style.float = 'right'; // Sağa yasla
  deleteButton.style.paddingRight = "15px"
  item.appendChild(deleteButton);

  // Tıklandığında öğeyi silmek için olay dinleyicisi ekleyin
  deleteButton.addEventListener('click', () => 
  {
    item.remove();
  });
});




const keys = Object.keys(localStorage);

// Sayfa yüklendiğinde localStorage'den öğeleri yükle
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = localStorage.getItem(key);

  // Eğer öğe daha önce listeye eklenmemişse, ekleyin
  if (!listContainsItem(value)) {
    const newItem = document.createElement('li');
    newItem.innerText = value;

    // Çarpı işareti oluşturma
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '&times;';
    deleteButton.style.float = 'right';
    deleteButton.style.paddingRight = '15px';
    deleteButton.addEventListener('click', () => {
      newItem.remove();
      // localStorage'den de öğeyi sil
      localStorage.removeItem(value);
    });
    newItem.appendChild(deleteButton);

    list.insertBefore(newItem, list.firstChild);
  }
}

function newElement() {
  const taskInput = document.getElementById('task');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Listeye boş ekleme yapamazsınız!');
  } else {
    const newItem = document.createElement('li');
    newItem.innerText = taskValue;

    // Çarpı işareti oluşturma
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '&times;';
    deleteButton.style.float = 'right';
    deleteButton.style.paddingRight = '15px';
    deleteButton.addEventListener('click', () => {
      newItem.remove();
      // localStorage'den de öğeyi sil
      localStorage.removeItem(taskValue);
    });
    newItem.appendChild(deleteButton);

    list.insertBefore(newItem, list.firstChild);

    taskInput.value = '';

    // Yeni öğeyi localStorage'e ekleme
    localStorage.setItem(taskValue, taskValue);
  }
}

function listContainsItem(value) {
  const items = list.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText === value) {
      return true;
    }
  }

  return false;
}
