import React, { Component } from "react";
import { getBlog } from "../../services/blogService";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const id = this.props.match.params.id;
    const res = await getBlog(id);
    this.setState({
      title: res.data.title,
      content: res.data.content,
      loading: false,
    });
  }

  render() {
    const { title, content, loading } = this.state;
    return (
      <div className="mt-3 container">
        {loading && (
          <div className="spinner spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {!loading && (
          <React.Fragment>
            <h1>{title}</h1>
            <hr />
            <p>{content}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Blog;
