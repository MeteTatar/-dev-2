// css/style'ı index'e ekleme

var head = document.head; // head elementini seçin
var link = document.createElement("link"); // link elementi oluşturun

link.type = "text/css"; // link elementinin type özelliğini ayarlayın
link.rel = "stylesheet"; // link elementinin rel özelliğini ayarlayın
link.href = "css/style.css"; // link elementinin href özelliğini ayarlayın

head.appendChild(link); // head elementine link elementini ekleyin






// Tüm listeyi seçin
const list = document.querySelector('#list');

// Tüm öğeleri seçin
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



function newElement() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();
  
    if (taskValue === '') {
      // Uyarı mesajı gösterme
      alert('Listeye boş ekleme yapamazsınız!');
    } else {
      const list = document.getElementById('list');
      const newItem = document.createElement('li');
      newItem.innerText = taskValue;
  
      // Çarpı işareti oluşturma
      const deleteButton = document.createElement('span');
      deleteButton.innerHTML = '&times;';
      deleteButton.style.float = 'right';
      deleteButton.style.paddingRight = '15px';
      deleteButton.addEventListener('click', () => {
        newItem.remove();
      });
      newItem.appendChild(deleteButton);
  
      // Listenin başına öğe ekleme
      list.insertBefore(newItem, list.firstChild);
  
      taskInput.value = '';
    }
  }
  
