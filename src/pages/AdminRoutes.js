import React, { useEffect } from 'react';

export default function AdminRoutes({ children }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  return children;
}
