import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function App() {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    // Fetch user data with role 'ADMIN' from your backend API
    axios.get('http://localhost:8080/api/v1/User/admin')
      .then(response => {
        setAdminUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
      });
  }, []);

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {adminUsers.map((user) => (
          <tr key={user.id}>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={user.image} // You can update this to the user's image URL
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.firstname} {user.lastname}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='text-muted mb-0'>{user.email}</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                Active
              </MDBBadge>
            </td>
            <td>ADMIN</td>
            <td>
              <MDBBtn color='link' rounded size='sm'>
                View
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
