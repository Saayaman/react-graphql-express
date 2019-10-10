import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

import PostViewer from './PostViewer';
import PostEditor from './PostEditor';

class App extends Component {
  state = {
    editing: null,
    posts: [
      { id: '1', author: "John Doe", body: "Hello world", date: 'Augest 20th 2019' },
      { id: '2', author: "Jane Doe", body: "Hi, planet!" },
    ]
  }

  updatePosts = (inputs) => {
    let currentPosts = this.state.posts;
    const index = currentPosts.findIndex((post) => post.id === inputs.id)
    currentPosts[index] = inputs;

    this.setState({
      posts: currentPosts,
    })
  }

  newPost = (inputs) => {
    let currentPosts = this.state.posts;
    currentPosts.push(inputs)
    this.setState({
      posts: currentPosts
    })
  } 

  render() {
    //works as both boolean and post object value
    const { editing } = this.state;

    return (
      <Container fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >
          New Post
        </Button>
        
        {/* table */}
        <PostViewer
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
          posts={this.state.posts}
        />

        {/* modal or popup */}
        {editing && (
          <PostEditor
            post={editing}
            onClose={() => this.setState({ editing: null })}
            submitPosts={(inputs) => editing.id ? this.updatePosts({
              ...inputs, id: editing.id
            }) : (
              this.newPost({
                ...inputs,
                id: this.state.posts.length + 1
              })
            )}
            id={this.state.editing.id}
          />
        )}
      </Container>
    );
  }
}

export default App;