import React from 'react';

function OrderCard({ order }) {
  return (
    <div>
      <h3>{order.meal}</h3>
      <p>Status: {order.status}</p>
    </div>
  );
}

export default OrderCard;
