import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function BookList() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ name: '', author: '', publication: '', price: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (newBook.name && newBook.author && newBook.publication && newBook.price) {
      setBooks([...books, newBook]);
      setNewBook({ name: '', author: '', publication: '', price: '' });
    } else {
      alert('All fields are required.');
    }
  };

  const containerStyle = {
    marginTop: '20px',
  };

  const tableStyle = {
    borderCollapse: 'collapse', 
    width: '100%', 
  };

  const thStyle = {
    border: 'none', 
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0', 
    color: '#555', 
  };


  const tdStyle = {
    border: 'none', 
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#fff', 
  };


  return (
<div className="container" style={containerStyle}>
<h3 style={{ color: '#555' }}>Book Management App</h3>
<div className="row">
<div className="col-md-6">
<div className="form-group row">
<label htmlFor="name" className="col-sm-4 col-form-label">
Name of the Book
</label>
<div className="col-sm-8">
<input
  type="text"
  name="name"
  id="name"
  className="form-control"
  value={newBook.name}
  onChange={handleInputChange}
  />
</div>
</div>
<div className="form-group row">
<label htmlFor="publication" className="col-sm-4 col-form-label">
Publication
</label>
<div className="col-sm-8">
<input
  type="text"
  name="publication"
  id="publication"
  className="form-control"
  value={newBook.publication}
  onChange={handleInputChange}
  />
</div>
</div>
</div>
<div className="col-md-6">
<div className="form-group row">
<label htmlFor="author" className="col-sm-4 col-form-label">
Author
</label>
<div className="col-sm-8">
<input
  type="text"
  name="author"
  id="author"
  className="form-control"
  value={newBook.author}
  onChange={handleInputChange}
  />
</div>
</div>
<div className="form-group row">
<label htmlFor="price" className="col-sm-4 col-form-label">
  Price
</label>
<div className="col-sm-8">
<input
  type="number"
  name="price"
  id="price"
  className="form-control"
  value={newBook.price}
  onChange={handleInputChange}
  />
</div>
</div>
</div>
</div>
<div className="row mt-4">
<div className="col-md-6">
<button className="btn btn-primary" onClick={handleAddBook}>
Add A Book
</button>
</div>
</div>
<div className="row mt-4">
<div className="col-md-6">
<div style={tableStyle}>
<table className="table table-striped">
<thead>
<tr>
<th style={thStyle}>Name</th>
<th style={thStyle}>Author</th>
<th style={thStyle}>Publication</th>
<th style={thStyle}>Price</th>
</tr>
</thead>
<tbody>
{books.map((book, index) => (
<tr key={index}>
<td style={tdStyle}>{book.name}</td>
<td style={tdStyle}>{book.author}</td>
<td style={tdStyle}>{book.publication}</td>
<td style={tdStyle}>{book.price}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</div>
  );
}


export default BookList;