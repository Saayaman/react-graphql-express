import React from 'react';
import { Table } from 'reactstrap';

// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';

// export const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       author
//       body
//     }
//   }
// `;


const PostViewer = ({ canEdit, onEdit, posts }) => (
  // <Query query={GET_POSTS}>
  //   {({ loading, data }) => !loading && (
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
  //   )}
  // </Query>
);

PostViewer.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
}

export default PostViewer;
