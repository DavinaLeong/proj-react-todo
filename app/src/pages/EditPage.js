import React from 'react';

import PageHeader from '../components/PageHeader';

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      userId: '',
      isSubmitted: false,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
      .then(response => response.json())
      .then(
        (post) => {
          this.setState({
            title: post.title,
            body: post.body,
            userId: post.userId,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }

  updateTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  updateBody = (event) => {
    this.setState({
      body: event.target.value
    });
  }

  updateUserId = (event) => {
    this.setState({
      userId: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.postId, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.props.postId,
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({isSubmitted: true});
          this.props.setPage(this.props.pages.LIST)
        },
        (error) => {
          this.setState({
            isSubmitted: true,
            error
          });
        }
      );
    return false;
  }

  render() {
    const { error, isSubmitted } = this.state;
    let result = null;
    if (error) {
      result = (
        <div>
          Error: {error.message}
        </div>
      );
    } else if (isSubmitted) {
      result = (
        <div>
          Form submitted
        </div>
      );
    } else {
      result = (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input className="form-control" type="text" value={this.state.title} required onChange={this.updateTitle}/>
          </div>

          <div>
            <label>Body</label>
            <textarea className="form-control" rows="4" value={this.state.body} required onChange={this.updateBody}></textarea>
          </div>

          <div>
            <label>User ID</label>
            <input className="form-control mb-3" type="number" step="1" min="1" max="100" value={this.state.userId}
              required onChange={this.updateUserId}></input>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }

    return (
      <div>
        <PageHeader title='Edit' />

        {result}
      </div>
    );
  }
}

export default EditPage;