import * as React from 'react';
import './Post.less';

class Post extends React.Component<IPostProps, void> {
  handleClick = (): void => {
    this.props.increaseLikes(this.props.id);
  }

  render() {
    const likes = this.props.increaseLikes ?
      <span
        className="Post__likes pull-right"
        onClick={this.handleClick}
      >
        { this.props.likes }
      </span> : null;

    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <hr />
        </div>
        <div className="Post col-lg-8 col-lg-offset-2">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="Post__title">
                { this.props.name }
              </h2>
            </div>
            <div className="col-lg-4">
              <span className="Post__date pull-right">
                { this.props.postedAt }
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <span className="Post__text">
                { this.props.post }
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              { likes }
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Post;
