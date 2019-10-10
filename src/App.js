import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

import PostViewer from './PostViewer';
import PostEditor from './PostEditor';

class App extends Component {
  state = {
    editing: null,
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
        />

        {/* modal or popup */}
        {editing && (
          <PostEditor
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Container>
    );
  }
}

export default App;