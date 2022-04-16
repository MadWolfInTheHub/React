import React, {useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connection, setConnectioon] = useState({status: 'online'});

  useEffect(() => {
    const handleConnectionChange = event =>{
      setConnectioon({ status: event.type });
    }
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);    
    }

  }, [])

  return (
    <>
      {connection.status === 'online' ? (
      <div className="status">{connection.status}</div>
      ) : (
      <div className="status status_offline">{connection.status}</div>
      )
      }
    </>
  );
}

export default ConnectionStatus;