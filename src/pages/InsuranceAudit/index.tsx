import { Button, Col, Form, Input, Radio, Row, Space } from 'antd';
import classes from './index.module.less';
import { useLocation, useNavigate } from 'react-router-dom';


/**
 * 
 *  {
    id: 1,
    contractNum: 'NO.121220939002',
    insuredPerson: '张元英',
    typeOfInsurance: '农业设施保险',
    insuranceSubject: '农作物',
    amount: 100000,
    premium: 200,
    effectiveDate: '2024-01-02',
    term: '1年',
    status: '生效',
    createdAt: '2024-01-01',
  },
 */
const Index = function () {
  const [form] = Form.useForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>

      <Form
        form={form}
        className={classes.form}
        layout='vertical'
        labelWrap
      >
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            参保人:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.insuredPerson}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            性别:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.sex}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            身份证号:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.cardNO}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            家庭住址:
          </Col>
          <Col span={8} className={classes.col}>
            {/* {state?.insuredPerson} */}
            湖北省武汉市
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            被保险人联系方式:
          </Col>
          <Col span={8} className={classes.col}>
            {/* {state?.insuredPerson} */}
            159234534535
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险险种:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.typeOfInsurance}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            机械保险:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.insuredPerson}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保障范围:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.insuredPerson}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险标的:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.insuranceSubject}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险金额:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.amount}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险费率:
          </Col>
          <Col span={8} className={classes.col}>
            {/* {state?.insuredPerson} */}
            20%
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保费:
          </Col>
          <Col span={8} className={classes.col}>
            {2000}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            免赔额:
          </Col>
          <Col span={8} className={classes.col}>
            {500}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险期限:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.term}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险生效日期:
          </Col>
          <Col span={8} className={classes.col}>
            {state?.effectiveDate}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险标的所在地点:
          </Col>
          <Col span={8} className={classes.col}>
            湖北省武汉市
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险标的状况描述:
          </Col>
          <Col span={8} className={classes.col}>
            {'保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述保险标的状况描述'}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            保险标的的风险评估报告:
          </Col>
          <Col span={8} className={classes.col}>
            {'-'}
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            投保人的风险管理措施:
          </Col>
          <Col span={8} className={classes.col}>
            {'-'}
          </Col>
          <Col span={4} className={`${classes.col} ${classes.gray}`}>
            附件:
          </Col>
          <Col span={8} className={classes.col}>
            <a href="#">点击下载</a>
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={24} className={classes.col}>
            <span style={{ height: 20 }} ></span>
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.blue}`}>
            审核:
          </Col>
          <Col span={8} className={classes.col}>
            <Radio.Group defaultValue={'resolve'}>
              <Radio value='resolve'>同意</Radio>
              <Radio value='reject'>驳回</Radio>
            </Radio.Group>
          </Col>
          <Col span={4} className={`${classes.col} ${classes.blue}`}>
            风险评分:
          </Col>
          <Col span={8} className={classes.col}>
            <Input value={96} addonAfter='分' />
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={4} className={`${classes.col} ${classes.blue}`}>
            审核意见:
          </Col>
          <Col span={20} className={classes.col}>
            <Input.TextArea></Input.TextArea>
          </Col>
        </Row>
        <Row gutter={16} className={classes.row}>
          <Col span={12} className={`${classes.col} ${classes.col_right_align}`}>
            <Button
              className={classes.btn}
              size='small'
              onClick={() => {
                navigate(-1)
              }}
            >返回</Button>
          </Col>
          <Col span={12} className={classes.col}>
            <Button
              className={classes.btn}
              size='small'
            >提交</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Index

Index.route = {
  [MENU_PATH]: "/insurance/audit",
  [MENU_TITLE]: "审核"
}