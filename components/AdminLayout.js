import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <h2>Admin Panel</h2>
        <ul>
            <Link href="/admin/products">
                Products
            </Link>
                <li><Link href="/admin/users">
                        Users
                    </Link>
                </li>
        </ul>
      </Sidebar>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

export default AdminLayout;
