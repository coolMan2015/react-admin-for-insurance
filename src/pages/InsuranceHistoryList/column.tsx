import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";

/**
 * 合同编号
参保人
保险险种
保险标的
保险金额
保费
保险生效日期
保险期限
合同状态(待审核、审核不通过、审核通过)
创建时间
操作(审核、详情)
 */

export const tableCol:(
  x: {
    goDetails?: Function
  }
) => ColumnsType = ({ goDetails }) => [
  {
    title: '合同编号',
    render(_, record) {
      return (
        <>{record.contractNum}</>
      )
    }
  },
  {
    title: '参保人',
    render(_, record) {
      return (
        <>{record.insuredPerson}</>
      )
    }
  },
  {
    title: '保险险种',
    render(_, record) {
      return (
        <>{record.typeOfInsurance}</>
      )
    }
  },
  {
    title: '保险标的',
    render(_, record) {
      return (
        <>{record.insuranceSubject}</>
      )
    }
  },
  {
    title: '保险金额',
    render(_, record) {
      return (
        <>{record.amount}</>
      )
    }
  },
  {
    title: '保费',
    render(_, record) {
      return (
        <>{record.premium}</>
      )
    }
  },
  {
    title: '保险生效日期',
    render(_, record) {
      return (
        <>{record.effectiveDate}</>
      )
    }
  },
  {
    title: '保险期限',
    render(_, record) {
      return (
        <>{record.term}</>
      )
    }
  },
  {
    title: '合同状态',
    render(_, record) {
      return (
        <>{record.status}</>
      )
    }
  },
  {
    title: '创建时间',
    render(_, record) {
      return (
        <>{record.createdAt}</>
      )
    }
  },
  {
    title: '操作',
    fixed: 'right',
    align: 'center',
    render(_, record) {
      return (
        <Space>
          <a style={{ color: 'skyblue' }}>续保</a>
          <a style={{ color: 'skyblue' }}>停保</a>
          <a style={{ color: 'skyblue' }}
            onClick={() => {
              goDetails?.(record)
            }}
          >详情</a>
        </Space>
      )
    }
  },
]

export const list = [
  {
    id: 13,
    contractNum: 'NO.121220939002',
    insuredPerson: '赵静雅',
    typeOfInsurance: '农业设施保险',
    insuranceSubject: '农作物',
    amount: 100000,
    premium: 200,
    premiumRate: 0.2,
    effectiveDate: '2023-01-02',
    term: '1年',
    status: '生效',
    createdAt: '2023-02-01',
    sex: '女',
    cardNO: '429000d04539455776',
    homeAddress: '湖北省黄冈市六风县钟家村5组',
    phone: '153004549322',
    coverage: '所有农业相关设施',
  },
  {
    id: 14,
    contractNum: 'NO.010120939011',
    insuredPerson: '郭晓阳',
    typeOfInsurance: '农业收获保险',
    insuranceSubject: '小麦',
    amount: 90000,
    premium: 1800,
    premiumRate: 0.02,
    effectiveDate: '2023-10-01',
    term: '1年',
    status: '生效',
    createdAt: '2023-01-30',
    sex: '男',
    cardNO: '130000d04539455784',
    homeAddress: '河北省石家庄市桥西区友谊大街200号',
    phone: '187004549328',
    coverage: '小麦收获过程中的自然灾害风险',
  },
  {
    id: 15,
    contractNum: 'NO.010120939011',
    insuredPerson: '黄明浩',
    typeOfInsurance: '农业收获保险',
    insuranceSubject: '小麦',
    amount: 90000,
    premium: 1800,
    premiumRate: 0.02,
    effectiveDate: '2023-10-01',
    term: '1年',
    status: '生效',
    createdAt: '2023-01-29',
    sex: '男',
    cardNO: '130000d04539455784',
    homeAddress: '河北省石家庄市桥西区友谊大街200号',
    phone: '187004549328',
    coverage: '小麦收获过程中的自然灾害风险',
  },
]