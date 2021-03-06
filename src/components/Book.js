import React from "react";

import {update} from '../BooksAPI'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // console.log(props.detail);

    let val = "none";
    if(props.read){
      const check1 = props.read.filter(el => el.title === props.detail.title);
      if(check1.length !== 0){
        val = check1[0].shelf;
      }

      const check2 = props.currentlyReading.filter(el => el.title === props.detail.title);
      if(check2.length !== 0){
        val = check2[0].shelf;
      }

      const check3 = props.wantToRead.filter(el => el.title === props.detail.title);
      if(check3.length !== 0){
        val = check3[0].shelf;
      }
    }

    // console.log(Object.keys(this.props.detail));
    if (Object.keys(this.props.detail).includes("shelf")) {
      // console.log(this.props.detail.title);
      this.state = { selectValue: this.props.detail.shelf };
    } else {
      this.state = { selectValue: val };
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
                  // console.log(this.props.detail);
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
