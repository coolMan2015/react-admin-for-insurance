import dayjs from "dayjs";
import { message } from "antd";
import { PowerApi, LoginApi, ResponseData, MenuInfoApi, MessageList, MessageAPi, MenuResponse, MenuList, MenuItem } from "@/types"
import { formatMenu } from "@/utils";

type MockDataType = {
  "/getmenu": MenuResponse
  "/getpower": PowerApi
  "/login": LoginApi
  "/addmenu": ResponseData
  "/addmessage": ResponseData
  "/getmessage": MessageAPi
  "/delmenu": ResponseData
  "/getmenuinfo": ResponseData & { data: MenuItem | null }
  "/editmenuinfo": ResponseData
  "/getvisitordata": ResponseData
  [key: string]: ResponseData | MenuList | PowerApi | LoginApi | MenuInfoApi | MenuResponse
}

const userInfoList = [
  {
    user_id: 1,
    username: "张同学",
    account: "admin",
    type_id: "超级管理员",
    t_id: 1,
  },
  {
    user_id: 2,
    username: "王五",
    account: "user",
    type_id: "用户",
    t_id: 2,
  },
  {
    user_id: 4,
    username: "李四",
    account: "qq123456",
    type_id: "游客",
    t_id: 3,
  },
  {
    user_id: 5,
    username: "路过的老鼠",
    account: "jake",
    type_id: "低权游客",
    t_id: 4,
  },
  {
    user_id: 6,
    username: "站长",
    account: "superAdmin",
    type_id: "超级管理员",
    t_id: 1,
  },
];
let currentUser = userInfoList[0];

let menu: MenuList = [
  {
    [MENU_TITLE]: "保险合同",
    [MENU_PATH]: "/insurance",
    [MENU_KEY]: 1,
    [MENU_PARENTKEY]: null,
    [MENU_ICON]: "icon_list",
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 1,
  },
  {
    [MENU_TITLE]: "合同录入",
    [MENU_PATH]: "/form",
    [MENU_KEY]: 101,
    [MENU_PARENTKEY]: 1,
    [MENU_ICON]: null,
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 3,
  },
  {
    [MENU_TITLE]: "承保列表",
    [MENU_PATH]: "/list",
    [MENU_KEY]: 102,
    [MENU_PARENTKEY]: 1,
    [MENU_ICON]:null,
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 4,
  },
  {
    [MENU_TITLE]: "保单列表",
    [MENU_PATH]: "/history-list",
    [MENU_KEY]: 103,
    [MENU_PARENTKEY]: 1,
    [MENU_ICON]: null,
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 4,
  },
  {
    [MENU_TITLE]: "赔付列表",
    [MENU_PATH]: "/pay",
    [MENU_KEY]: 104,
    [MENU_PARENTKEY]: 1,
    [MENU_ICON]: null,
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 4,
  },
  // {
  //   [MENU_TITLE]: "保险录入",
  //   [MENU_PATH]: "/insurance/form",
  //   [MENU_KEY]: 2,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_list",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 1,
  // },
  // {
  //   [MENU_TITLE]: "列表页",
  //   [MENU_PATH]: "/list",
  //   [MENU_KEY]: 9,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_list",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 1,
  // },
  // {
  //   [MENU_TITLE]: "卡片列表",
  //   [MENU_PATH]: "/card",
  //   [MENU_KEY]: 10,
  //   [MENU_PARENTKEY]: 9,
  //   [MENU_ICON]: null,
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 5485,
  // },
  // {
  //   [MENU_TITLE]: "查询列表",
  //   [MENU_PATH]: "/search",
  //   [MENU_KEY]: 11,
  //   [MENU_PARENTKEY]: 9,
  //   [MENU_ICON]: null,
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 9588,
  // },

  // {
  //   [MENU_TITLE]: "表单页",
  //   [MENU_PATH]: "/form",
  //   [MENU_KEY]: 7,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_form",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 3,
  // },
  // {
  //   [MENU_TITLE]: "基础表单",
  //   [MENU_PATH]: "/index",
  //   [MENU_KEY]: 6,
  //   [MENU_PARENTKEY]: 7,
  //   [MENU_ICON]: null,
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 9654,
  // },
  // {
  //   [MENU_TITLE]: "详情页",
  //   [MENU_PATH]: "/details",
  //   [MENU_KEY]: 1,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_edit",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 3,
  // },
  // {
  //   [MENU_TITLE]: "个人中心",
  //   [MENU_PATH]: "/person",
  //   [MENU_KEY]: 2,
  //   [MENU_PARENTKEY]: 1,
  //   [MENU_ICON]: "icon_infopersonal",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 9998,
  // },
  // {
  //   [MENU_TITLE]: "结果页",
  //   [MENU_PATH]: "/result",
  //   [MENU_KEY]: 16,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_voiceprint",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 4,
  // },
  // {
  //   [MENU_TITLE]: "403",
  //   [MENU_PATH]: "/403",
  //   [MENU_KEY]: 3,
  //   [MENU_PARENTKEY]: 16,
  //   [MENU_ICON]: "icon_locking",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 0,
  // },
  // {
  //   [MENU_TITLE]: "404",
  //   [MENU_PATH]: "/404",
  //   [MENU_KEY]: 4,
  //   [MENU_PARENTKEY]: 16,
  //   [MENU_ICON]: "icon_close",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 1,
  // },
  // {
  //   [MENU_TITLE]: "500",
  //   [MENU_PATH]: "/500",
  //   [MENU_KEY]: 5,
  //   [MENU_PARENTKEY]: 16,
  //   [MENU_ICON]: "icon_privacy_closed",
  //   [MENU_KEEPALIVE]: "false",
  //   [MENU_ORDER]: 4568,
  // },
  // {
  //   [MENU_TITLE]: "统计",
  //   [MENU_PATH]: "/statistics",
  //   [MENU_KEY]: 17,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_MTR",
  //   [MENU_KEEPALIVE]: "true",
  //   [MENU_ORDER]: 5,
  // },
  // {
  //   [MENU_TITLE]: "访客统计",
  //   [MENU_PATH]: "/visitor",
  //   [MENU_KEY]: 18,
  //   [MENU_PARENTKEY]: 17,
  //   [MENU_ICON]: "icon_addresslist",
  //   [MENU_KEEPALIVE]: "true",
  //   [MENU_ORDER]: 1,
  // },
  {
    [MENU_TITLE]: "系统管理",
    [MENU_PATH]: "/power",
    [MENU_KEY]: 12,
    [MENU_PARENTKEY]: null,
    [MENU_ICON]: "icon_set",
    [MENU_KEEPALIVE]: "false",
    [MENU_ORDER]: 9,
  },
  {
    [MENU_TITLE]: "权限类别",
    [MENU_PATH]: "/type",
    [MENU_KEY]: 14,
    [MENU_PARENTKEY]: 12,
    [MENU_ICON]: "icon_safety",
    [MENU_KEEPALIVE]: "true",
    [MENU_ORDER]: 12,
  },
  {
    [MENU_TITLE]: "菜单管理",
    [MENU_PATH]: "/menu",
    [MENU_KEY]: 13,
    [MENU_PARENTKEY]: 12,
    [MENU_ICON]: "icon_menu",
    [MENU_KEEPALIVE]: "true",
    [MENU_ORDER]: 1475,
  },
  {
    [MENU_TITLE]: "用户管理",
    [MENU_PATH]: "/user",
    [MENU_KEY]: 15,
    [MENU_PARENTKEY]: 12,
    [MENU_ICON]: "icon_infopersonal",
    [MENU_KEEPALIVE]: "true",
    [MENU_ORDER]: 1593,
  },
  // {
  //   [MENU_TITLE]: "图标库",
  //   [MENU_PATH]: "/icons",
  //   [MENU_KEY]: 8,
  //   [MENU_PARENTKEY]: null,
  //   [MENU_ICON]: "icon_pen",
  //   [MENU_KEEPALIVE]: "true",
  //   [MENU_ORDER]: 10,
  // },
];
const typeList = [
  {
    type_id: 1,
    name: "超级管理员",
    menu_id: "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,101,102,103,104",
  },
  { type_id: 2, name: "用户", menu_id: "1,9,10,11,2,7,6,17,18,16,3,4,5,8" },
  { type_id: 3, name: "游客", menu_id: "9,1,10,11,2,7,6,17,18,12" },
  { type_id: 4, name: "低权游客", menu_id: "9,10" },
];
const power = {
  status: 0,
  data: typeList,
  mapKey: [
    { title: "权限id", dataIndex: "type_id", key: "type_id" },
    { title: "权限简称", dataIndex: "name", key: "name" },
    { title: "显示菜单列表id", dataIndex: "menu_id", key: "menu_id" },
  ],
  menu: formatMenu(menu),
};

const userInfo = {
  msg: "登录成功",
  status: 0,
  token: "12323",
  data: { user_id: 1, username: "超级管理员", account: "admin", type: "0", isLogin: true },
};

const addMenu = {
  msg: "添加成功,菜单栏需要关闭页面重新打开即可生效！",
  status: 0,
};
const addMsg = { msg: "添加成功", status: 0 };

const msgList: MessageList = [
  {
    m_id: 1,
    name: "第一条消息",
    description: "我创建的第一天消息",
    creator: "超级管理员",
    add_time: "2021-04-20 17:01:09",
  },
  {
    m_id: 2,
    name: "RegExp",
    description:
      "RegExp 对象表示正则表达式,它是对字符串执行模式匹配的强大工具。 ",
    creator: "超级管理员",
    add_time: "2021-04-20 17:48:42",
  },
  {
    m_id: 3,
    name: "Ant Design",
    description:
      "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。",
    creator: "超级管理员",
    add_time: "2021-04-20 17:46:44",
  },
  {
    m_id: 4,
    name: "react-ant-admin",
    description:
      "此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。",
    creator: "超级管理员",
    add_time: "2021-04-20 17:28:45",
  },
];
const msg: MessageAPi = {
  status: 0,
  data: {
    mapKey: [
      { title: "消息id", dataIndex: "m_id", key: "m_id" },
      { title: "消息名称", dataIndex: "name", key: "name" },
      { title: "消息描述词", dataIndex: "description", key: "description" },
      { title: "创建人", dataIndex: "creator", key: "creator" },
      { title: "创建时间", dataIndex: "add_time", key: "add_time" },
    ],
    list: msgList,
    total: 4,
  },

  msg: "",
};
const delMenu = { msg: "操作成功", status: 0 };
// const MenuMapKey = [
//   { title: "菜单id", dataIndex: "menu_id", key: "menu_id" },
//   { title: "菜单名称", dataIndex: "title", key: "title" },
//   { title: "菜单路由", dataIndex: "path", key: "path" },
//   { title: "菜单唯一key", dataIndex: "key", key: "key" },
//   { title: "菜单父级key", dataIndex: "parentKey", key: "parentKey" },
//   { title: "菜单图标", dataIndex: "icon", key: "icon" },
//   { title: "页面是否保持状态", dataIndex: "keepAlive", key: "keepAlive" },
//   { title: "菜单排序", dataIndex: "order", key: "order" },
// ]
const MockData: MockDataType = {
  "/getmenu": formatMenu(menu),
  "/getpower": power,
  "/login": userInfo,
  "/addmenu": addMenu,
  "/addmessage": addMsg,
  "/getmessage": msg,
  "/delmenu": delMenu,
  "/getmenuinfo": { status: 0, msg: '', data: null },
  "/editmenuinfo": { status: 0, msg: "修改成功！" },
  "/getvisitordata": { status: 1, msg: "暂无" },
};
type UrlType = keyof MockDataType
function get(url: UrlType) {
  return new Promise((res) => {
    setTimeout(() => {
      if (url === "/getmenu") {
        let typeId = currentUser.t_id;
        if (typeId) {
          let action: string | undefined | number[] = typeList.find((i) => i.type_id === typeId)?.menu_id;
          action = action ? action.split(",").map(Number) : [];
          let menuList = menu.filter((i) => (action as number[]).includes(i[MENU_KEY] as number));
          MockData[url] = formatMenu(menuList);
        }
        res(MockData[url]);

        return;
      }
      res(MockData[url]);
    }, 500);
  }).then((res) => {
    if (res) {
      return res
    } else {
      message.error("接口暂未配置")
      return Promise.reject("接口暂未配置")
    }
  });
}



function post(url: UrlType, data: any) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      switch (url) {
        case "/login":
          userInfo.data.account = data.account;
          console.log('mock data login ==')
          if (data.account.indexOf("admin") === -1) {
            userInfo.data.type = "1";
            userInfo.data.username = "普通用户";
          }
          return res(userInfo);
        case "/addmenu":
          menu.push(data);
          return res(MockData[url]);
        case "/addmessage":
          msgList.push({
            ...data,
            m_id: Math.random(),
            creator: userInfo.data.username,
            add_time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          });
          if (msg.data) {
            msg.data.total = msgList.length;
          }
          return res(MockData[url]);
        case "/delmenu":
          let newMenu = menu.filter((i) => i[MENU_KEY] !== data[MENU_KEY]);
          menu = newMenu.filter((i) => i[MENU_PARENTKEY] !== data[MENU_KEY]);
          return res(MockData[url]);
        case "/getmenuinfo": {
          const findInfo = menu.find((i) => i[MENU_KEY] === data[MENU_KEY]);
          if (findInfo) {
            MockData[url].data = findInfo;
          }
          return res(MockData[url]);
        }
        case "/editmenuinfo":
          menu = menu.map((item) => {
            if (item[MENU_KEY] === data[MENU_KEY]) {
              return data;
            }
            return item;
          });
          return res(MockData[url]);
        case "/getmessage":
          let list = [...msgList];
          if (data.name) {
            list = list.filter((i) => i.name.includes(data.name));
          }
          if (data.description) {
            list = list.filter((i) => i.description.includes(data.description));
          }

          if (msg.data) {
            msg.data.total = list.length;
            msg.data.list = list;
          }
          return res(msg);
        default:
          res({ status: 1, msg: "暂无" });
          break;
      }
    }, 100);
  }).then((res: any) => {
    if (res.status === 0) {
      return res
    } else {
      message.error(`接口暂未配置: ${url}`)
      console.log('params', data)
      return Promise.reject("接口暂未配置")
    }
  });
}


const mock = { get, post };

export default mock;
