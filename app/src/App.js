import React from 'react';

import Title from './components/Title';
import Nav from './components/Nav';
import ListPage from './pages/ListPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.pages.LIST,
    };
  }

  setPage = (page) => {
    this.setState({
      page: page
    });
  }

  renderPage = (page) => {
    switch(page) {
      case this.props.pages.LIST:
        return <ListPage />
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Nav
          links={this.props.links}
          setPage={this.setPage} />
        {this.renderPage(this.state.page)}
      </div>
    );
  }
}

export default App;
