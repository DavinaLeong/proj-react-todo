import React from 'react';

import PageHeader from './../components/PageHeader';

class AddPage extends React.Component {
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
            <input type="text" value={this.state.title} required onChange={this.updateTitle}/>
          </div>

          <div>
            <label>Body</label>
            <textarea rows="4" value={this.state.body} required onChange={this.updateBody}></textarea>
          </div>

          <div>
            <label>User ID</label>
            <input type="number" step="1" min="1" max="100" value={this.state.userId}
              required onChange={this.updateUserId}></input>
          </div>

          <input type="submit" value="Submit"/>
        </form>
      );
    }

    return (
      <div>
        <PageHeader title='Add' />

        {result}
      </div>
    );
  }
}

export default AddPage;