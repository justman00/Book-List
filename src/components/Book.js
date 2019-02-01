import React from "react";

const Book = props => {
  //   console.log(props.detail);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.detail.imageLinks.smallThumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option selected value="wantToRead">
                Want to Read
              </option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.detail.title}</div>
        <div className="book-authors">
          {props.detail.authors.map(author => author)}
        </div>
      </div>
    </li>
  );
};

export default Book;
