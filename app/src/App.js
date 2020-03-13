import React from 'react';

import Title from './components/Title';
import Nav from './components/Nav';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.pages.ADD,
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
        return <ListPage />;
      case this.props.pages.ADD:
        return <AddPage />;
      default:
        return <NotFoundPage />;
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
