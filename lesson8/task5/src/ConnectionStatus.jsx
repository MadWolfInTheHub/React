import React, {Component} from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connection: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);

  }
  
  componentWillUnmount() {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);

  };

  handleConnectionChange(event){
    console.log(event.type);
    this.setState({
      connection: event.type,
    });
    console.log(this.state.connection)
  };


  render() {
      return (
        <>
          {this.state.connection === 'online' ? (
          <div className="status">{this.state.connection}</div>
          ) : (
          <div className="status status_offline">{this.state.connection}</div>
          )
          }
        </>
      );
  };
};


export default ConnectionStatus;