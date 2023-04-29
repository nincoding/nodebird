import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {

  const style = useMemo(() => ({
    marginBottom: "20px",
  }), []);

  const grid = useMemo(() => ({
    gutter: "4",
    xs: "2",
    md: "3",
  }), []);

  const btnStyle = useMemo(() => ({
    textAlign: "center",
    margin: "10px 0px"
  }), []);

  const mtStyle = useMemo(() => ({
    marginTop: "20px"
  }), []);

  return (
    <List 
      style={style}
      grid={grid}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={btnStyle}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={mtStyle}>
        <Card actions={[<StopOutlined key="stop" />]}>
          <Card.Meta description={item.nickname} />
        </Card>
        </List.Item>
      )}
    />
  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;