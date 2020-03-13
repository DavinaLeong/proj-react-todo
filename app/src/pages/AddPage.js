import React from 'react';

import PageHeader from './../components/PageHeader';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      userId: '',
      error: null
    };
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
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
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
          this.props.setPage(this.props.pages.LIST)
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
    return false;
  }

  render() {
    const { error } = this.state;
    let errorDiv = null;
    if (error) {
      errorDiv = (
        <div>
          Error: {error.message}
        </div>
      );
    }

    return (
      <div>
        <PageHeader title='Add' />

        {errorDiv}

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
      </div>
    );
  }
}

export default AddPage;