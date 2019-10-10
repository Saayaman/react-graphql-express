import React from 'react';
import { Table } from 'reactstrap';

const PostViewer = ({ canEdit, onEdit, posts }) => (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr
              key={post.id}
              style={canEdit(post) ? { cursor: 'pointer', fontWeigh: 'bold' } : {}}
              onClick={() => canEdit(post) && onEdit(post)}
            >
              <td>{post.id}</td>
              <td>{post.author}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
);

PostViewer.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
}

export default PostViewer;
