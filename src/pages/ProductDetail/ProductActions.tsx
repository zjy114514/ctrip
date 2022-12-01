import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Col, DatePicker, Row, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductActions: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Card>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DatePicker.RangePicker size="large" />
        </Col>
        <Col span={24}>
          <Space>
            <Button type="primary" danger icon={<ShoppingCartOutlined />}>
              加入购物车
            </Button>
            <Button
              type="primary"
              icon={<HomeOutlined />}
              onClick={() => navigate('/')}
            >
              返回
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}
