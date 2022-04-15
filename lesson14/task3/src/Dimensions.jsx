import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height:innerHeight });
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height:innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); 
    }
  }, []); 

  const {width, height} = demensions;
  return <div className="dimensions">
  {`${width}px - ${height}px`}
  </div>
}

/* class Dimensions extends Component {
  state = {
    width: null,
    height: null
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)

    const { innerWidth, innerHeight } = window;
    this.setDimension(innerWidth, innerHeight)
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  };

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimension(innerWidth, innerHeight)
  };
  setDimension = (width, height) => {
    this.setState({
      width,
      height
    });
    document.title = `${innerWidth} x ${innerHeight}`
  }


  render() {
    const {width, height} = this.state;
    return <div className="dimensions">
    {`${width}px - ${height}px`}
    </div>
  }
} */

export default Dimensions;