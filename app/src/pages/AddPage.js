import React from 'react';

import PageHeader from './../components/PageHeader';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      userId: null
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

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <PageHeader title='Add' />

        <form onSubmit={() => this.handleSubmit} method="POST">
          <div>
            <label>Title</label>
            <input type="text" value={this.state.title} required onChange={this.updateTitle}/>
          </div>

          <div>
            <label>Body</label>
            <textarea rows="4" value={this.state.body} required onChange={this.updateBody}></textarea>
          </div>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddPage;