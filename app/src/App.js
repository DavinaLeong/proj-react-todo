import React from 'react';

import PageHeader from './components/PageHeader';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    
    let div = null;
    if (error) {
      div = (
        <div>Error: {error.message}</div>
      );
    } else if (!isLoaded) {
      div = <div>Loading...</div>
    } else {
      const cards = [];
      posts.forEach((post, index) =>
        cards.push(<Card key={'c'+index} post={post}/>));
      div = cards;
    }
    
    return (
      <div>
        <PageHeader />
        {div}
      </div>
    );
  }
}

export default App;
