import React from 'react';
import OrderCard from '../components/OrderCard';

function OrdersPage() {
  const orders = [
    { id: 1, meal: 'Idli Sambar', status: 'Delivered' },
    { id: 2, meal: 'Biriyani', status: 'Pending' },
  ];

  return (
    <div>
      <h1>Your Orders</h1>
      <div>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
