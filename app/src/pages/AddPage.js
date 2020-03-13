import React from 'react';

import PageHeader from './../components/PageHeader';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      userId: ''
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
    // alert('A post was submitted.\nTitle: ' + this.state.title);
    event.preventDefault();
    console.log(event.target);
    return false;
  }

  render() {
    return (
      <div>
        <PageHeader title='Add' />

        <form onSubmit={() => this.handleSubmit}>
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
      </div>
    );
  }
}

export default AddPage;