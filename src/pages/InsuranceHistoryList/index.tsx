import { Button, Form, Input, Select, Space, Table } from "antd";
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import classes from './index.module.less'
import { list, tableCol } from "./column";

function Index() {
  const navigate = useNavigate();
  const goForm = useCallback(() => {
    navigate('/insurance/form')
  }, [])

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        <Form style={{ display: 'flex' }} size="small">
          <Space>
            <Form.Item label="合同编号">
              <Input />
            </Form.Item>
            <Form.Item label="参保人">
              <Input />
            </Form.Item>
            <Form.Item label="保险险种">
              <Select
                style={{ width: 100 }}
                options={[
                  {
                    label: '农作物保险',
                    value: '1'
                  },
                  {
                    label: '牲畜保险',
                    value: '2'
                  },
                  {
                    label: '农业机械保险',
                    value: '3'
                  },
                  {
                    label: '农业设施保险',
                    value: '4'
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{
                background: 'pink'
              }}>查找</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{
                background: 'orange'
              }}>导出EXCEL</Button>
            </Form.Item>
          </Space>
        </Form>
      </div>

      <Table
        // scroll={{ x: 1800 }}
        size="small"
        bordered
        rowKey={'id'}
        columns={tableCol({
          goDetails: (record: any) => {
            navigate('/insurance/details', {
              state: record
            })
          }
        })}
        pagination={{
          showTotal: (total) => {
            return <>共{total}条</>
          },
          total: 199,
          size: 'small',
          position: ['none', 'bottomCenter']
        }}
        dataSource={list}
      />
    </div>
  )
}

export default Index

Index.route = {
  [MENU_PATH]: "/insurance/history-list",
}