
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import PostArea from '../components/PostArea/PostArea';
import PostList from '../components/PostList/PostList';
import * as PostActions from '../actions/actions';

class App extends React.Component<IAppProps, IAppState> {
  componentWillMount() {
    this.setState({ previewPost: null });
  };

  updatePreviewPost = (text: string): void => {
    const previewPost = text ?
      {
        name: 'Thor Amorim',
        post: text,
        postedAt: '26/02/2016',
        likes: 0
      } : null;

    this.setState({ previewPost });
  }

  render() {
    const { posts, actions } = this.props;
    return (
      <div className="container-fluid">
        <Header />
        <PostArea
          addPost={actions.addPost}
          updatePreviewPost={this.updatePreviewPost}
        />
        <PostList
          posts={posts}
          previewPost={this.state.previewPost}
          increaseLikes={actions.increaseLikes}
        />
      </div>
    );
  }
}

function mapStateToProps(state) { return { posts: state.posts }; };

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(PostActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
