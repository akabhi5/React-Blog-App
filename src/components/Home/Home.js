import React, { Component } from "react";
import Card from "./Card/Card";
import { getBlogs } from "../../services/blogService";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await getBlogs();
    this.setState({
      posts: res.data,
      loading: false,
    });
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div className="container">
        {loading && (
          <div className="spinner spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {posts.map((post) => {
          return <Card key={post._id} post={post} />;
        })}
      </div>
    );
  }
}

export default Home;
