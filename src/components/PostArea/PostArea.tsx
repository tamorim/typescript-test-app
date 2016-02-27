import * as React from 'react';
import './PostArea.less';

class PostArea extends React.Component<IPostAreaProps, void> {
  input: HTMLInputElement;

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.addPost(this.input.value);
    this.input.value = '';
    this.props.updatePreviewPost(null);
  }

  handleChange = (): void => {
    const text = this.input.value;
    this.props.updatePreviewPost(text.length > 0 ? text : null);
  }

  render() {
    return (
      <div className="PostArea row">
        <div className="col-lg-8 col-lg-offset-2">
          <form onSubmit={this.handleSubmit}>
            <input
              ref={ref => this.input = ref}
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  };
}

export default PostArea;
