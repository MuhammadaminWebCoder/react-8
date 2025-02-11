import React from 'react';
import { instance } from "../hooks/instance";
import { useEffect } from 'react';
import { LineOutlined, MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const getStudents = (groupId, refresh, setStudents) => {
  const navigate = useNavigate();

  useEffect(() => {
    instance().get('/students', {
      params: { groupId }
    }).then(res => {
        setStudents(res.data.map((item, index) => {
        item.key = index + 1;
        item.phone = <Link className='!text-black hover:!text-blue-500' to={`tel: ${item.phone}`}>{item.phone}</Link>
        item.name = item.name ? item.name : <LineOutlined />;
        item.surname = item.surname ? item.surname : <LineOutlined />;
        item.age = item.age ? item.age : <LineOutlined />;
        item.status = item.status?'active':'active emas'
        item.action = <Button  onClick={() => navigate(`${item.id}`)} className="!w-[32px] !h-[32px]" type='primary'><MoreOutlined className='rotate-90' /></Button>
        return item;
      }));
    });
  }, [refresh, groupId]);
};
