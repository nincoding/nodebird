import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {

  const [ isLoggenIn, setIsLoggenIn ] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/"><a>노드버드</a></Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile"><a>프로필</a></Link>
      </Menu.Item>
      <Menu.Item>
        <SearchInput enterButton />
      </Menu.Item>
      <Menu.Item>
        <Link href="/signup"><a>회원가입</a></Link>
      </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          { isLoggenIn ? <UserProfile setIsLoggenIn={setIsLoggenIn} /> : <LoginForm setIsLoggenIn={setIsLoggenIn} /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.github.com/nincoding" target="_blank" rel="noreferrer noopener">Made by nincoding</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;