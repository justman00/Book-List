import React from "react";

import {update} from '../BooksAPI'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(props.detail);
    // console.log(Object.keys(this.props.detail));
    if (Object.keys(this.props.detail).includes("shelf")) {
      console.log(this.props.detail.title);
      this.state = { selectValue: this.props.detail.shelf };
    } else {
      this.state = { selectValue: "none" };
    }
    // update(props.detail, "none");
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  this.props.detail.imageLinks ? this.props.detail.imageLinks.smallThumbnail : ""
                })`
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={e => {
                  console.log(this.props.detail);
                  this.props.moveBook(e, this.props.detail);
                  this.setState({ selectValue: e.target.value });

                  // this.props.detail.shelf = e.target.value;
                  // console.log(this.props.detail);
                }}
                value={this.state.selectValue}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.detail.title}</div>
          <div className="book-authors">
            {this.props.detail.authors ? (
              this.props.detail.authors.map(author => author)
            ) : (
              <div>No author</div>
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
