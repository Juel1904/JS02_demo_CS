/**
 * Viết một trang web để quản lý sách trong cửa hàng
 * mỗi quyển sách gồm các thông tin: tên, thể loại, giá tiền, số lượng.
 * Trang web có các chức năng chính:
 * 1. Thêm sách vào cửa hàng.
 * 2.Tìm kím thông tin theo tên sách
 * 3. Điều chỉnh số lượng sách(cho phép tăng/giảm số lượng sách)
 * 4. Xóa 1 loại sách ra khỏi cửa hàng.
 */

class Book {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}

let bookList = [];

let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);

  let newBook = new Book(bookName, bookCategory, bookPrice, bookQuantity);

  bookList.push(newBook);
  console.log(bookList);

  alert("New book" + bookName + " added successfully");
});
function searchBook() {
  let searchName = document.getElementById("search-name").value;
  // lặp qua từng quyển sách trong booklist
  let check = false;
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
      check = true;
      document.getElementById("book-name").value = bookList[i].name;
      document.getElementById("book-category").value = bookList[i].category;
      document.getElementById("book-price").value = bookList[i].price;
      document.getElementById("book-quantity").value = bookList[i].quantity;
      console.log(bookList[i]);
      break;
    }
  }
  if (check == false) {
    alert("No book found");
  }
}

// Delete book
function deleteBook() {
  let deleteBookname = document.getElementById("delete-name").value;
  for (let i in bookList) {
    if (bookList[i].name == deleteBookname) {
      bookList.splice(i, 1);
      console.log(bookList);
    }
  }
}
function updateBook() {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);
  // let searchName = document.getElementById("search-name").value;
  // lặp qua từng quyển sách trong booklist
  let check = false;
  for (let i in bookList) {
    if (bookList[i].name.includes(bookName)) {
      bookList[i].category = bookCategory;
      bookList[i].price = bookPrice;
      bookList[i].quantity = bookQuantity;
      check = true;

      console.log(bookList[i]);
      alert("Update " + bookName + " successfully");
      break;
    }
  }
  if (check == false) {
    alert("No book found");
  }
}
