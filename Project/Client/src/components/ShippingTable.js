import React, { useEffect, useState } from 'react';
import { getOrders, getProduct } from '../Server/OrdersService'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Modal } from 'react-bootstrap';

import './AdminTable.css'
import './Modal.css'

const ShippingTable = () => {

  const [modalsOrder, setModalsOrder] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  let rows = [];

  useEffect(() => {

    async function fetchData() {
      const orders = await getOrders("shippingOrders");
      orders.forEach(({ id, name, address, phone_number, email, message}) => {
        rows.push({id, name, address, phone_number, email, message});
      });
      const temp = await Promise.all(orders.map(async (order, ind) => {
        const products = await Promise.all(order["products_list"].map(async ({_id, amount}) => {
          const result = await getProduct(_id);
          return {...result, amount};
        }));
        const handle = <MDBBtn onClick={() => setModalsOrder(products)}
              color="red" size="sm">Check Order</MDBBtn>
          return {...rows[ind], handle};
      }));
      setTableRows(temp);
    }
    fetchData();
  }, []);

  
  const columns = [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Address',
      field: 'address',
      sort: 'asc'
    },
    {
      label: 'Phone number',
      field: 'phone_number',
      sort: 'asc'
    },
    {
      label: 'Email',
      field: 'email',
      sort: 'asc'
    },
    {
      label: 'Message',
      field: 'message',
      sort: 'asc'
    },
    {
      label: 'Orders details',
      field: 'handle',
      sort: 'asc'
    }
  ];

  return (
    
    <div className="orders-table-img">
      <div className="orders-table">
        <MDBTable btn>
          <MDBTableHead columns={columns} />
          <MDBTableBody rows={tableRows} />
        </MDBTable>
      </div>

      <Modal show={modalsOrder.length > 0}>
        <div className="order-products">
          {modalsOrder.map(product => {
            const style = {backgroundImage: `url(${product[0].image})`}
            return (<div>
              <div className="modal-product" style={style}>
                  <span className="modal-amount">{product.amount}</span>
              </div>
              <div className="modal-type">{product.type}</div>
              </div>
            )}
          )}
        </div>
        <MDBBtn className="close-btn" onClick={() => setModalsOrder([])}
          color="red" size="sm">Close</MDBBtn>
      </Modal>
    </div>
  );
};

export default ShippingTable;