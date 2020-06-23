import React, { Component } from "react";
import { addBlog } from "../../services/blogService";

class NewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: "", content: "" },
    };
  }

  doSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = this.state;
      await addBlog(data.title, data.content);
      this.props.history.push("/"); // no reload
      // window.location = "/"; // full page reload
    } catch (ex) {
      console.log(ex);
    }
  };

  handleChange = (event) => {
    const data = { ...this.state.data };
    data[event.target.name] = event.target.value;
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">New Blog Post</h2>
        <hr />
        <form onSubmit={this.doSubmit}>
          <div className="form-group">
            <label htmlFor="headingInput">Enter heading</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="headingInput"
              placeholder="Heading"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputTextArea">Blog content</label>
            <textarea
              className="form-control"
              name="content"
              id="inputTextArea"
              rows="20"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewBlog;
