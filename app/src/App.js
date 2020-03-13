import React from 'react';

import Title from './components/Title';
import Nav from './components/Nav';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.pages.LIST,
      postId: null
    };
  }

  setPostId = (id) => {
    this.setState({
      postId: id
    });
  }

  setPage = (page) => {
    this.setState({
      page: page
    });
  }

  renderPage = (page) => {
    switch(page) {
      case this.props.pages.LIST:
        return <ListPage
          setPostId={this.setPostId} />;
      case this.props.pages.ADD:
        return <AddPage
          pages={this.props.pages}
          setPage={this.setPage} />;
      case this.props.pages.EDIT:
        return <EditPage
          pages={this.props.page}
          setPage={this.setPage} />;
      default:
        return <NotFoundPage />;
    }
  }

  render() {
    return (
      <div className="container">
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
