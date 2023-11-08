import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';

const BottomNav = () => {
  return (
    <Navbar bg="light" expand="sm" fixed="bottom">
      <Nav className="w-100 nav-justified">
        <Nav.Item>
          <Nav.Link href="#home">ホーム</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="#talk">トーク</Nav.Link>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Nav.Link href="#news">ニュース</Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link href="#settings">設定</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNav;

