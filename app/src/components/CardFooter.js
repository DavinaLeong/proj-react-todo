import React from 'react';

class CardFooter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      user: null
    };
  }

  componentDidMount() {
    // console.log(this.props);
    fetch('https://jsonplaceholder.typicode.com/users/' + this.props.text)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
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
    let result = null;
    const { error, isLoaded, user } = this.state;

    if (error) {
      result = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      result = <div>Loading...</div>
    } else {
      result = user.name;
    }

    return (
      <div className='card-footer'>
        {result}
      </div>
    );
  }
}

export default CardFooter;