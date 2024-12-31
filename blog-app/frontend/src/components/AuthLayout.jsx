import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({childern, authentication=true}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: change the condition changing if it is not working
    if (authentication && authStatus !== authentication) { // authStatus = false
        navigate("/login");
    } else if (!authentication && authStatus !== authentication) { // authStatus = true
        navigate("/");
    }
    setLoading(false);
  }, [authStatus, navigate, authentication])

  return loading ? <h1>Loading....</h1> : <>{childern}</>
}