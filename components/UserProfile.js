import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";

const UserProfile = ({ setIsLoggenIn }) => {

  const onLogOut = useCallback(() => {
    setIsLoggenIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br/>0</div>,
        <div key="followings">팔로잉 수<br/>0</div>,
        <div key="followers">팔로워 수<br/>0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>NIN</Avatar>}
        title="nincoding" 
      />
      <Button
        onClick={onLogOut}
      >로그아웃</Button>
    </Card>
  );
}

export default UserProfile;