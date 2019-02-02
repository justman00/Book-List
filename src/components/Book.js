import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.state = { selectValue: "none" };
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
                  this.props.detail.imageLinks.smallThumbnail
                })`
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={e => {
                  this.props.moveBook(e, this.props.detail);
                  this.setState({ selectValue: e.target.value });
                  this.props.detail.shelf = e.target.value;
                  console.log(this.props.detail);
                }}
                value={this.props.detail.shelf}
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
