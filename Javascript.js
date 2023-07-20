// css/style'ı index'e ekleme

var head = document.head; // head elementini seçin
var link = document.createElement("link"); // link elementi oluşturun

link.type = "text/css"; // link elementinin type özelliğini ayarlayın
link.rel = "stylesheet"; // link elementinin rel özelliğini ayarlayın
link.href = "css/style.css"; // link elementinin href özelliğini ayarlayın

head.appendChild(link); // head elementine link elementini ekleyin
