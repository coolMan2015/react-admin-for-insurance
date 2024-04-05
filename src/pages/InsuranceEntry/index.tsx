import { Button, Cascader, Col, DatePicker, Form, Input, Row, Select, Space, Upload } from 'antd';
import classes from './index.module.less';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * 参保人     性别
身份证号   家庭住址
被保险人联系方式

保险险种：农作物保险，牲畜保险， 农业机械保险，农业设施保险
保障范围：自然灾害，病虫害，其他风险

保险标的：（如农作物、牲畜等）
保险金额：投保的金额，通常根据农作物或者牲畜的市场价值确定
保险费率: 根据不同的险种和保险标的，保险费率会有所不同
保费：被保险人需要支付的保险费用
免赔额：达到多少才能够进入赔付
保险期限：保险的有限期限，通常为一年
保险生效日期：
保险标的所在地点
保险标的状况描述（如农作物的生长情况、牲畜的健康状况等）
保险标的的风险评估报告（如有）
投保人的风险管理措施（如采取的防灾防损措施等）
附件（如保险条款、风险评估报告等）
 */

const Index = function () {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>申请保险合同录入</div>
      <Form
        form={form}
        className={classes.form}
        // layout='vertical'
        size='small'
      // labelCol={{
      //   span: 4
      // }}
      >
        <Form.Item
          label="参保人"
          className={classes.item}
          initialValue={'丁原英'}
        >
          <Input value={'丁原英'} />
        </Form.Item>
        <Form.Item
          label="性别"
          className={classes.item}
          initialValue={'male'}
        >
          <Select
            value={'male'}
            options={[
              {
                label: '男',
                value: 'male'
              },
              {
                label: '女',
                value: 'female'
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="身份证号"
          className={classes.item}
          initialValue={'43600219679521'}
        >
          <Input value={'43600219679521011'} />
        </Form.Item>
        <Form.Item
          label="家庭住址"
          className={classes.item}
          initialValue={'安徽省阜阳市李家沟5组'}
        >
          <Input value={'安徽省阜阳市李家沟5组'} />
        </Form.Item>
        <Form.Item
          label="被保险人联系方式"
          className={classes.item}
          initialValue={'13920414541'}
        >
          <Input value={'13920414541'} />
        </Form.Item>
        <Form.Item
          label="保险险种"
          className={classes.item}
        >
          <Select
            value={'1'}
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
        <Form.Item
          label="保障范围"
          className={classes.item}
        >
          <Input value={'自然灾害'} />
        </Form.Item>
        <Form.Item
          label="保险标的"
          className={classes.item}
        >
          <Input value={'农作物'} />
        </Form.Item>
        <Form.Item
          label="保险金额"
          className={classes.item}
        >
          <Input value={8000} addonAfter='元' />
        </Form.Item>
        <Form.Item
          label="保险费率"
          className={classes.item}
        >
          <Input value={'4.5%'} />
        </Form.Item>
        <Form.Item
          label="保费"
          className={classes.item}
        >
          <Input value={'360'} addonAfter='元' />
        </Form.Item>
        <Form.Item
          label="免赔额"
          className={classes.item}
        >
          <Input value={'200'} addonAfter='元' />
        </Form.Item>
        <Form.Item
          label="保险期限"
          className={classes.item}
        >
          <Input value={'1年'} />
        </Form.Item>
        {/* <Form.Item
          label="保险生效日期"
          className={classes.item}
        >
          <DatePicker style={{ width: '100%' }} placeholder='日期' />
        </Form.Item> */}
        <Form.Item
          label="保险标的所在地点"
          className={classes.item}
        >
          <Input value={'安徽省阜阳市李家沟5组101号试验田'} />
        </Form.Item>
        <Form.Item
          label="保险标的状况描述"
          className={classes.itemRow}
          labelAlign='left'
          labelCol={{
            span: 4
          }}
        >
          <Input.TextArea value={'------------------'}/>
        </Form.Item>
        <Form.Item
          label="保险标的的风险评估报告"
          className={classes.itemRow}
          labelAlign='left'
          labelCol={{
            span: 4
          }}
        >
          <Input.TextArea value={'------------------'} />
        </Form.Item>
        <Form.Item
          label="投保人的风险管理措施"
          className={classes.itemRow}
          labelAlign='left'
          labelCol={{
            span: 4
          }}
        >
          <Input.TextArea value={'-------------------'} />
        </Form.Item>
        <Form.Item
          label="附件"
          className={classes.itemRow}
          labelAlign='left'
          labelCol={{
            span: 4
          }}
        >
          <Upload
          >
            <Space>
              <Button>上传</Button>
              <a>保险条款.pdf</a>
              <a>风险评估报告.pdf</a>
            </Space>
          </Upload>
        </Form.Item>

      </Form>

      <div className={classes.btnBox}>
        <Button
          type='primary'
          size='small'
          onClick={() => {
            form.submit()
          }}
        >
          提交
        </Button>
        <Button
          size='small'
          onClick={() => {
            navigate(-1)
          }}
        >
          返回
        </Button>
      </div>
    </div>
  )
}

export default Index

Index.route = {
  [MENU_TITLE]: '申请保险合同录入',
  [MENU_PATH]: "/insurance/form",
}