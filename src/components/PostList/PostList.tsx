import * as React from 'react';
import './PostList.less';
import Post from './Post/Post';

class PostList extends React.Component<IPostListProps, void> {
  render() {
    const posts = this.props.posts.map(post => {
      return (
        <Post
          {...post}
          key={post.id}
          increaseLikes={this.props.increaseLikes}
        />
      );
    }).reverse();
    
    const previewPost = this.props.previewPost ?
      <Post {...this.props.previewPost} /> : null;

    return (
      <div className="PostList row">
        <div className="col-lg-12">
          { previewPost }
        </div>
        <div className="col-lg-12">
          { posts }
        </div>
      </div>
    );
  };
}

export default PostList;
