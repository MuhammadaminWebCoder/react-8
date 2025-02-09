import React from 'react';
import { instance } from "../hooks/instance";
import { useEffect } from 'react';
import { LineOutlined, MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const getTeachers = (stackId, refresh, setTeachers) => {
  const navigate = useNavigate();

  useEffect(() => {
    instance().get('/techers', {
      params: { stackId }
    }).then(res => {
      setTeachers(res.data.map((item, index) => {
        item.key = index + 1;
        item.name = item.name ? item.name : <LineOutlined />;
        item.age = item.age ? item.age : <LineOutlined />;
        item.stack = item.stack ? item.stack : <LineOutlined />;
        item.action = <Button  onClick={() => navigate(`${item.id}`)} className="!w-[32px] !h-[32px]" type='primary'><MoreOutlined className='rotate-90' /></Button>
        return item;
      }));
    });
  }, [refresh, stackId]);
};
