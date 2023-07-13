import React from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';

const Alert = () => {
  const handleClick = () => {
    Swal.fire({
    
      text: 'Producto agregado',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <Button variant="dark" onClick={handleClick}>Agregar</Button>
  );
};

export default Alert;

