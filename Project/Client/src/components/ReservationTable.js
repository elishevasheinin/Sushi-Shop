import React, { useEffect, useState } from 'react';
import { getOrders } from '../Server/OrdersService'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './AdminTable.css'
import './Modal.css'


const ReservationTable = (props) => {

  const [tableRows, setTableRows] = useState([]);
  let rows = [];

  useEffect(() => {
    async function fetchOrders() {
      const orders = await getOrders("tableOrders");
      orders.forEach(({id, name, phone_number, email, comment, date, time, number, table }) => {
        rows.push({ id,name, phone_number, email, comment, date, time, number, table });
      });
      setTableRows(rows);
    }
    fetchOrders();
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
      label: 'Comment',
      field: 'comment',
      sort: 'asc'
    },
    {
      label: 'Date',
      field: 'date',
      sort: 'asc'
    },
    {
      label: 'Time',
      field: 'time',
      sort: 'asc'
    },
    {
      label: 'Number of diners',
      field: 'number',
      sort: 'asc'
    },
    {
      label: 'Favorite table',
      field: 'table',
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
    </div>
  );
};
    
export default ReservationTable;