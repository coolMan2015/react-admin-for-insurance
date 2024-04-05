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

export const tableCol: (
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
    title: '审核状态',
    render(_, record) {
      return (
        <>{record.checkStatus}</>
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
    render(_, record, i) {
      console.log(i, '====')
      return (
        <Space>
          {record.checkStatus === '未审核' && (
            <>
              <a style={{ color: 'skyblue' }}>审核</a>
              <a style={{ color: 'skyblue' }}>编辑</a>
            </>
          )}
          {record.checkStatus === '审核中' && (
            <>
              {i % 2 === 1 ? (
                <a style={{ color: 'skyblue' }}>复核</a>
              ) : (
                <a style={{ color: 'skyblue' }}>审批</a>
              )}

            </>
          )}
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
    id: 1,
    contractNum: 'NO.121220939002',
    insuredPerson: '张元英',
    typeOfInsurance: '农业设施保险',
    insuranceSubject: '农作物',
    amount: 100000,
    premium: 200,
    premiumRate: 0.2,
    effectiveDate: '2023-01-02',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-08-01',
    sex: '女',
    cardNO: '429000d04539455776',
    homeAddress: '湖北省黄冈市六风县钟家村5组',
    phone: '153004549322',
    coverage: '所有农业相关设施',
  },
  {
    id: 7,
    contractNum: 'NO.787820939008',
    insuredPerson: '李晓明',
    typeOfInsurance: '农业种植保险',
    insuranceSubject: '小麦种植',
    amount: 80000,
    premium: 1600,
    premiumRate: 0.02,
    effectiveDate: '2023-07-01',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-07-30',
    sex: '男',
    cardNO: '320000d04539455781',
    homeAddress: '江苏省南京市浦口区长江路88号',
    phone: '139004549325',
    coverage: '小麦因自然灾害等造成的损失',
  },
  {
    id: 8,
    contractNum: 'NO.898920939009',
    insuredPerson: '张伟强',
    typeOfInsurance: '农业养殖保险',
    insuranceSubject: '家禽养殖',
    amount: 60000,
    premium: 1200,
    premiumRate: 0.02,
    effectiveDate: '2023-07-10',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-08-09',
    sex: '男',
    cardNO: '230000d04539455782',
    homeAddress: '黑龙江省哈尔滨市道里区友谊路99号',
    phone: '151004549326',
    coverage: '家禽因疫病、自然灾害等造成的损失',
  },
  {
    id: 9,
    contractNum: 'NO.909020939010',
    insuredPerson: '王丽芳',
    typeOfInsurance: '农业机械保险',
    insuranceSubject: '拖拉机',
    amount: 40000,
    premium: 800,
    premiumRate: 0.02,
    effectiveDate: '2023-06-15',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-09-14',
    sex: '女',
    cardNO: '440000d04539455783',
    homeAddress: '广东省深圳市南山区科技园1号',
    phone: '180004549327',
    coverage: '拖拉机因意外事故等造成的损失',
  },
  {
    id: 10,
    contractNum: 'NO.010120939011',
    insuredPerson: '刘志豪',
    typeOfInsurance: '农田水利设施保险',
    insuranceSubject: '灌溉系统',
    amount: 120000,
    premium: 2400,
    premiumRate: 0.02,
    effectiveDate: '2023-05-20',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-10-19',
    sex: '男',
    cardNO: '140000d04539455784',
    homeAddress: '山西省太原市小店区学府街888号',
    phone: '137004549328',
    coverage: '灌溉系统因自然灾害等造成的损失',
  },
  {
    id: 11,
    contractNum: 'NO.898920939009',
    insuredPerson: '韩鹏飞',
    typeOfInsurance: '农业养殖保险',
    insuranceSubject: '牛',
    amount: 120000,
    premium: 2400,
    premiumRate: 0.02,
    effectiveDate: '2023-08-10',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-04-09',
    sex: '男',
    cardNO: '440000d04539455782',
    homeAddress: '广东省深圳市南山区华侨城路18号',
    phone: '152004549326',
    coverage: '牛养殖过程中的疾病、自然灾害风险',
  },
  {
    id: 12,
    contractNum: 'NO.909020939010',
    insuredPerson: '陈思婷',
    typeOfInsurance: '农业设施及农机具保险',
    insuranceSubject: '温室大棚',
    amount: 60000,
    premium: 1200,
    premiumRate: 0.02,
    effectiveDate: '2023-09-15',
    term: '1年',
    status: '未生效',
    checkStatus: '未审核',
    createdAt: '2023-03-14',
    sex: '女',
    cardNO: '320000d04539455783',
    homeAddress: '江苏省南京市玄武区中山路88号',
    phone: '181004549327',
    coverage: '温室大棚结构及其内部设备损失',
  },
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
    status: '未生效',
    checkStatus: '审核中',
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
    checkStatus: '审核中',
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
    checkStatus: '已审核',
    createdAt: '2023-01-29',
    sex: '男',
    cardNO: '130000d04539455784',
    homeAddress: '河北省石家庄市桥西区友谊大街200号',
    phone: '187004549328',
    coverage: '小麦收获过程中的自然灾害风险',
  },
]