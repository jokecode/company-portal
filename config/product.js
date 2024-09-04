export const productData = [

  {
    // 图片地址
    url: '/gd/product/pn/DP-PN_01.jpg',
    // 产品概述
    title: 'Profibus-DP转Profinet网关',
    // 产品描述
    desc: '本网关实现ProfibusDP主站转Profinet协议功能，能够实现ProfibusDP的设备如仪表、变频器、伺服、综保、软启动器等设备接入到S7-1200、S7-1500、CPU315-2PN/DP、S7-400等PROFINET网络系统。',
    // 产品类型：
    // 标准化产品 - StandardizedProduct
    // 定制化产品 - CustomizedProduct
    // 代理产品 - AgencyProduct
    type: 'StandardizedProduct',
    // 产品详情
    detail: {
      images: [
        '/gd/product/pn/DP-PN_01.jpg',
        '/gd/product/pn/DP-PN_02.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本网关实现ProfibusDP主站转Profinet协议功能，能够实现ProfibusDP的设备如仪表、变频器、伺服、综保、软启动器等设备接入到S7-1200、S7-1500、CPU315-2PN/DP、S7-400等PROFINET网络系统。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '本网关是一款PROFIBUS DP主站功能的通讯网关。该产品主要功能是将各种PROFIBUS DP从站接入到PROFINET网络中。  \n'
          + '本网关连接到PROFIBUS DP总线中作为主站使用，连接到PROFINET总线中作为从站使用。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: '技术参数\n'
          + '\n'
          + '◆ PROFIBUS DP/V0 协议符合GB/T 20540-2006： 测量和控制数字数据通信工业控制系统用现场总线第3 部分：PROFINET 规范；\n'
          + '\n'
          + '◆ PROFIBUS DP 作为主站，波特率达到12M；\n'
          + '\n'
          + '◆ PROFIBUS DP 作为主站，可接DP从站数量32个，单个DP从站通讯数据不超过244个字节；\n'
          + '\n'
          + '◆ 网关作为PROFINET网络的Device设备（即从站），带2个RJ45以太网接口，支持100BASE-TX，MDI/MDIX自检测，集成以太网交换机，可以组成链式网络，支持环网冗余。\n'
          + '\n'
          + '◆ 适应PROFINET V2.3协议，采用实时（RT）通讯功能，符合： GB/T 25105-2014《工业通信网络现场总线规范类型10: PROFINET IO规范》，IEC 61158-5-10：2007，IDT。\n'
          + '\n'
          + '◆ 支持的PROFINET数据长度：输入≤1400 字节，输出≤1400 字节，输入+输出≤2800 字节。\n'
          + '\n'
          + '\n'
          + '\n'
          + '电气参数\n'
          + '\n'
          + '● 电源电压：直流 24V/200mA（18V～30V 可用），使用中建议接好保护地 PE\n'
          + '\n'
          + '● 环境温度： 运输和存储：-40℃～+85℃ 工作温度：-40℃～+75℃\n'
          + '\n'
          + '● 工作相对湿度：-25～55℃， 湿度≤95%\n'
          + '\n'
          + '● 外形尺寸：50mm（宽）×126mm（高）×94mm（厚）；\n'
          + '\n'
          + '● 安装方式：35mm导轨；\n'
          + '\n'
          + '● 防护等级：IP20；\n'
          + '\n'
          + '● 重量：约500g。\n\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-Canopen_01.jpg',
    title: 'CanOpen转Profinet网关',
    desc: '本产品实现 ProfiNet 网络与 CANOpen 网络之间的数据通讯，可连接 CANOpen 网络到 ProfiNet 网络。 即将 CANOpen 设备转换为 ProfiNet 设备。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-Canopen_01.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本产品实现 ProfiNet 网络与 CANOpen 网络之间的数据通讯，可连接 CANOpen 网络到 ProfiNet 网络。 即将 CANOpen 设备转换为 ProfiNet 设备。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '应用广泛：本产品广泛应用于：CANOpen 接口的变频器、伺服驱动器、电量测量装置、智能现场测量设备、仪 表、PLC、DCS、FCS 等等。\n'
          + '配置简单：用户不必了解 CANOpen  和 ProfiNet  细节，只需要参考手册，根据要求就能配置网关，不需要 复杂编程，即可在短时间内实现连接功能。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'KJ-PNG-205 在 ProfiNet 一侧为 ProfiNet 从站，在 CAN 一侧可以作为 CANOpen 主站或者 CANOpen 从站\n'
          + '\n'
          + '支持标准的 ProfiNet I/O 协议\n'
          + '\n'
          + 'ProfiNet 支持的最多 16 个槽位，支持最大的输入字节数为 1440 字节，最大的输出字节为 1440 字节，输入 输出字节的长度由 STEP7 设定\n'
          + '\n'
          + '支持的模块类型\n'
          + '\n'
          + 'Input 001 byte  \n'
          + '\n'
          + 'Input 002 byte \n'
          + '\n'
          + 'Input 004 byte  \n'
          + '\n'
          + 'Input 008byte  \n'
          + '\n'
          + 'Input 016 bytes \n'
          + '\n'
          + 'Input 032 byte  \n'
          + '\n'
          + 'Input 064 bytes\n'
          + '\n'
          + 'Input 128 byte   \n'
          + '\n'
          + 'Input 256 bytes \n'
          + '\n'
          + 'Input  512bytes \n'
          + '\n'
          + 'Output 001 byte  \n'
          + '\n'
          + 'Output 002 byte  \n'
          + '\n'
          + 'Output 004 byte  \n'
          + '\n'
          + 'Output 008 byte  \n'
          + '\n'
          + 'Output 016 bytes \n'
          + '\n'
          + 'Output 032 byte  \n'
          + '\n'
          + 'Output 064 bytes \n'
          + '\n'
          + 'Output 128 byte  \n'
          + '\n'
          + 'Output 256 bytes \n'
          + '\n'
          + 'Output 512 bytes\n'
          + '\n'
          + '支持 CANOpen 主站和 CANOpen 从站 CANOpen 参数规格：\n'
          + '\n'
          + '支 持 波 特 率 ： 10kBits/s, 20kBits/s, 50kBits/s, 100kBits/s, 125kBits/s, 250kBits/s, 500kBits/s, 800kBits/s, 1Mbits/s 其它波特率可以定制。\n'
          + '\n'
          + '最大连接数：125 个从站\n'
          + '\n'
          + '输入数据最大： 1440 字节\n'
          + '\n'
          + '输出数据最大：1440 字节 \n'
          + '\n'
          + '接收 PDO 数量：512\n'
          + '\n'
          + '发送 PDO 数量：512\n'
          + '\n'
          + 'SDO：支持上行/下行，最大 512 字节 \n'
          + '\n'
          + '供电：24VDC(±5％) ，最大功率 3.5W \n'
          + '\n'
          + '工作环境温度：-25～55℃ , 湿度≤95%\n'
          + '\n'
          + '外形尺寸：40mm（宽） ×110mm（高） ×70mm（厚） \n'
          + '\n'
          + '安装方式：35mm 导轨\n'
          + '\n'
          + '防护等级：IP20',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-ECAT_01.jpg',
    title: 'Profinet转EtherCAT网关',
    desc: '本产品实现 PROFINET 网络与 EtherCAT 网络的互连互通。该网关可实现双向数据交换，实现EtherCAT 设备和 PROFINET 控制器的数据交互。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-ECAT_01.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本产品实现 PROFINET 网络与 EtherCAT 网络的互连互通。该网关可实现双向数据交换，实现EtherCAT 设备和 PROFINET 控制器的数据交互。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '应用广泛：支持 EtherCAT 接口的伺服驱动器、耦合器、仪表、PLC、DCS、FCS 等等。\n'
          + '配置简单：用户不必了解 EtherCAT 协议和 PROFINET 协议细节，只需要参考手册，根据要求就能配置网关，不需要复杂编程，即可在短时间内实现连接功能。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'KJ-PN-ECATM 在 PROFINET 一侧为 PROFINET 从站，在 EtherCAT 一侧为 EtherCAT 主站；\n'
          + '\n'
          + '支持标准的 PROFINET I/O 协议\n'
          + '\n'
          + 'PROFINET 支持的最多 16 个槽位，支持最大的输入字节数为 1440 字节，最大的输出字节为 1440 字节，输入输出字节的长度由 TIA Portal 设定\n'
          + '\n'
          + '支持的模块类型\n'
          + '\n'
          + '001 byte Input \n'
          + '\n'
          + '001 word Input       \n'
          + '\n'
          + '001 Dword Input\n'
          + '\n'
          + ' \n'
          + '\n'
          + '| 002 Dword Input  | 004 Dword Input   | 008 Dword Input   |\n'
          + '| ---------------- | ----------------- | ----------------- |\n'
          + '| 016 Dword Input  | 032 Dword  Input  | 064 Dword  Input  |\n'
          + '| 128 Dword Input  |                   |                   |\n'
          + '| 001 byte Output  | 001 word  Output  | 001 Dword  Output |\n'
          + '| 002 Dword Output | 004 Dword Output  | 008 Dword  Output |\n'
          + '| 016 Dword Output | 032  Dword Output | 064 Dword Output  |\n'
          + '\n'
          + '128 Dword Output\n'
          + '\n'
          + 'EtherCAT 规 范 V1.0.3.2；\n'
          + '\n'
          + ' \n'
          + '\n'
          + '支持 CANopen over EtherCAT（CoE）协议：SDO 上传和下载，SDO 信息服务（访问 CANopen 对象字典），紧急情况请求；支持 Ethernet over EtherCAT（EoE）协议（虚拟交换机）；支持 Transfer over EtherCAT（FoE）协议；\n'
          + '\n'
          + '支持 DC – Synchronous、SM Synchronous 模式\n'
          + '\n'
          + ' \n'
          + '\n'
          + '支持拓扑查看器、诊断检测、自动扫描\n'
          + '\n'
          + '供电：24VDC(±5％)，最大功率 3.5W\n'
          + '\n'
          + '工作环境温度：-25～55℃，湿度≤95%\n'
          + '\n'
          + '外形尺寸：34mm（宽）×110mm（高）×70mm（厚）\n'
          + '\n'
          + '安装方式：35mm 导轨\n'
          + '\n'
          + '防护等级：IP20',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-EIP_01.jpg',
    title: 'Profinet转EtherNET IP网关',
    desc: '该产品是一款 PROFINET 从站功能的通讯网关。该产品主要功能是将 ETHERNET/IP 设备接入到 PROFINET 网络中。\n'
    + '\n'
    + '本网关连接到 PROFINET 总线中做为从站使用，连接到 ETHERNET/IP 总线中做为从站使用。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-EIP_01.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '该产品是一款 PROFINET 从站功能的通讯网关。该产品主要功能是将 ETHERNET/IP 设备接入到 PROFINET 网络中。\n'
          + '\n'
          + '本网关连接到 PROFINET 总线中做为从站使用，连接到 ETHERNET/IP 总线中做为从站使用。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'PROFINET 技术参数\n'
          + '\n'
          + '● 网关做为 PROFINET 网络的 Device 设备（即从站），带 2 个 RJ45 以太网接口，支持 100BASE-TX，MDI/MDIX 自检测，集成以太网交换机，可以组成链式网络，支持环网冗余。\n'
          + '\n'
          + '● 适应 PROFINET V2.3 协议， 采用实时（ RT） 通讯功能， 符合： GB/T 25105-2014《工业通信网络现场总线规范类型 10: PROFINET IO 规范》，IEC 61158-5-10：2007，IDT。\n'
          + '\n'
          + '● 支持的数据长度：输入≤1400 字节，输出≤1400 字节，输入+输出≤2800 字节。\n'
          + '\n'
          + '● 支持的插槽数量：最大 46 条。\n'
          + '\n'
          + '\n'
          + 'ETHERNET/IP 技术参数\n'
          + '\n'
          + '● 网关做为ETHERNET/IP 网络的从站，可以连接 AB（罗克韦尔）CompactLogix、 ControlLogix5000 等系列 PLC。\n'
          + '\n'
          + '● 以太网 10/100M 自适应，具有 IP 地址冲突探测功能。\n'
          + '\n'
          + '● 支持 ODVA 标准 EtherNet/IP 通信协议。\n'
          + '\n'
          + '● 输入输出字节数：输入字节数为 490Bytes、输出字节数为 490 Bytes。'
          + '\n\n'
          + '电气参数'
          + '\n'
          + '◆  电源：直流 24V/200mA（18V～30V 可用），使用中建议接好保护地 PE\n'
          + '\n'
          + '◆  工作环境：-25～55℃，湿度≤95%\n'
          + '\n'
          + '◆  防护等级：IP20\n'
          + '\n'
          + '◆  安装方式：35mm 导轨\n'
          + '\n'
          + '◆  重量：500g',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-Mtcp_01.jpg',
    title: 'Modbus TCP转Profinet网关',
    desc: '本产品实现 ProfiNet 网络与 Modbus（TCP）网络之间的数据通讯，可分别连接ModbusTCP网络到 ProfiNet 网络，即将 Modbus 设备转换为ProfiNet 设备。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-Mtcp_01.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本产品实现 ProfiNet 网络与 Modbus（TCP）网络之间的数据通讯，可分别连接ModbusTCP网络到 ProfiNet 网络，即将 Modbus 设备转换为ProfiNet 设备。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '应用广泛：本产品广泛应用于：TCP 接口的变频器、智能高低压电器、电量测量装置、智能现场测量设备、仪表、PLC、DCS、FCS 等等。\n'
          + '\n'
          + '配置简单：用户不必了解 Modbus 和 ProfiNet 细节，只需要参考手册，根据要求就能配置网关，不需要复杂编程，即可在短时间内实现连接功能。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: '',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-RS232_01.jpg',
    title: 'RS232转Profinet网关',
    desc: '本产品实现 ProfiNet 网络与 RS232 之间的数据通讯，可连接 RS-232网络到 ProfiNet 网络， 并且支持具有不同 通讯波特率和其它设置。即将 RS232设备转换为 ProfiNet 设备。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-RS232_01.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本产品实现 ProfiNet 网络与 RS232 之间的数据通讯，可连接 RS-232网络到 ProfiNet 网络， 并且支持具有不同 通讯波特率和其它设置。即将 RS232设备转换为 ProfiNet 设备。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '应用广泛：本产品广泛应用于：RS-232接口的变频器、智能高低压电器、电量测量装置、智能现场测量设备、 仪表、PLC 、DCS 、FCS 等等。\n'
          + '\n'
          + '配置简单：用户不必了解 RS232 和 ProfiNet 细节，只需要参考手册，根据要求就能配置网关，不需要复杂编 程，即可在短时间内实现连接功能。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'KJ-PNG-204 在 ProfiNet 一侧为 ProfiNet 从站，在 RS-232 一侧可以作为主站或者从站或通用模式。支持标准 的 ProfiNet I/O 协议\n'
          + '\n'
          + 'ProfiNet 支持的最多 16 个槽位，支持最大的输入字节数为 1440 字节，最大的输出字节为 1440 字节，输入 输出字节的长度由 STEP7 设定\n'
          + '\n'
          + '支持的模块类型\n'
          + '\n'
          + '\n'
          + 'Input 001 byte \n'
          + '\n'
          + 'Input 016 byte \n'
          + '\n'
          + 'Input 064 byte \n'
          + '\n'
          + 'Input 256 byte \n'
          + '\n'
          + 'Output 001 byte \n'
          + '\n'
          + 'Output 016 byte \n'
          + '\n'
          + 'Output 064 byte \n'
          + '\n'
          + 'Output 256 byte\n'
          + '\n'
          + '参数规格：\n'
          + '\n'
          + '支持波特率： 1200bit/s, 2400bit/s, 4800bit/s, 9600bit/s, 19200bit/s, 38400bit/s, 57600bit/s, 115200bit/s 其它波特率可以定制。\n'
          + '\n'
          + '工作方式：半双工\n'
          + '\n'
          + '校验方式：无、奇、偶数据位：8 位 停止位：1 位、2 位\n'
          + '\n'
          + '供电：24VDC(±5％) ，最大功率 3.5W\n'
          + '\n'
          + '工作环境温度：-25～55℃ , 湿度≤95%\n'
          + '\n'
          + '外形尺寸：40mm（宽） ×110mm（高） ×70mm（厚）\n'
          + '\n'
          + '安装方式：35mm 导轨\n'
          + '\n'
          + '防护等级：IP20',
        },
      ],
    },
  },
  {
    url: '/gd/product/pn/PN-RTU_01.jpg',
    title: 'Modbus RTU转Profinet网关',
    desc: '本产品实现 ProfiNet 网络与Modbus（RS-485）网络之间的数据通讯，可连接 RS-485 网络到 ProfiNet 网络，并且支持具有不同Modbus 通讯波特率和其它设置。即将 Modbus设备转换为 ProfiNet 设备。',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/pn/PN-RTU_01.jpg',
        '/gd/product/pn/PN-RTU_02.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '本产品实现 ProfiNet 网络与Modbus（RS-485）网络之间的数据通讯，可连接 RS-485 网络到 ProfiNet 网络，并且支持具有不同Modbus 通讯波特率和其它设置。即将 Modbus设备转换为 ProfiNet 设备。',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '应用广泛：本产品广泛应用于：RS-485 接口的变频器、智能高低压电器、电量测量装置、智能现场测量设备、仪表、PLC、DCS、FCS 等等。\n'
          + '\n'
          + '配置简单：用户不必了解Modbus 和 ProfiNet 细节，只需要参考手册，根据要求就能配置网关，不需要复杂编程，即可在短时间内实现连接功能。',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'KJ-MD-PN 在 ProfiNet 一侧为 ProfiNet 从站，在RS-485 一侧可以作为Modbus主站或者 modbus 从站 \n'
          + '\n支持标准的ProfiNetI/O协议 \n'
          + '\nProfiNet 支持的最多 16 个槽位，支持最大的输入字节数为 1440 字节，最大的输出字节为 1440 字节，输入输出字节的长度由 STEP7 设定支持的模块类型。\n'
          + '\n'
          + 'Input 001 byte\n'
          + 'Input 016 byte\n'
          + 'Input 064 byte\n'
          + 'Input 256 byte\n'
          + 'Output 001 byte\n'
          + 'Output 016 byte\n'
          + 'Output 064 byte\n'
          + 'Output 256 byte\n'
          + '\n'
          + '支持 Modbus 主站和 Modbus 从站\n'
          + '支持波特率： 1200bit/s, 2400bit/s, 4800bit/s, 9600bit/s, 19200bit/s, 38400bit/s, 57600bit/s, 115200bit/s 其它波特率可以定制。\n'
          + '工作方式：半双工\n'
          + '校验方式：无、奇、偶\n'
          + '数据位：8 位\n'
          + '停止位：1 位、2 位\n'
          + '功能码： 作为 MODBUS 主站，支持 01H、02H、03H、04H、05H、06H、0FH、10H 号功能；\n'
          + '供电：24VDC(±5％)\n'
          + '最大功率 3.5W\n'
          + '工作环境温度：-25～55℃，湿度≤95%\n'
          + '外形尺寸：40mm（宽）×110mm（高）×70mm（厚）\n'
          + '安装方式：35mm 导轨\n'
          + '防护等级：IP20\n',
        },
      ],
    },
  },

  /********************/
  /*  PROFINET芯片/软件 */
  /********************/
  {
    url: '/gd/case/case1.jpg',
    title: '基于西门子芯片与软件的PN解决方案',
    desc: '标准西门子PN解决方案代理\n支持RT/IRT，ProfiDrive/ProfiSafe等多种行规\n主从站开发，交钥匙工程，OEM生产\n标准产品和定制产品',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/case/case1.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '标准西门子PN解决方案代理\n支持RT/IRT，ProfiDrive/ProfiSafe等多种行规\n主从站开发，交钥匙工程，OEM生产\n标准产品和定制产品',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        // {
        //   title: '技术指标',
        //   desc: '',
        // },
      ],
    },
  },
  {
    url: '/gd/case/case2.jpg',
    title: '各行业定制',
    desc: '提供交钥匙工程\nODM到OEM的一条龙服务\n从研发、生产、品管到售后技术支持\n前西门子FA研发技术主管带队，提供西门子产品品质',
    type: 'CustomizedProduct',
    detail: {
      images: [
        '/gd/case/case2.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '提供交钥匙工程\nODM到OEM的一条龙服务\n从研发、生产、品管到售后技术支持\n前西门子FA研发技术主管带队，提供西门子产品品质',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        // {
        //   title: '技术指标',
        //   desc: '',
        // },
      ],
    },
  },

  /*******/
  /* PLC */
  /*******/
  {
    url: '/gd/product/plc/PLC01_02.jpg',
    title: 'PLC',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/plc/PLC01_01.jpg',
        '/gd/product/plc/PLC01_02.jpg',
        '/gd/product/plc/PLC01_03.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },

  /************/
  /* 分布式 IO */
  /************/
  {
    url: '/gd/product/distributed-io/AI4_01.jpg',
    title: '分布式IO-AI4',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/AI4_01.jpg',
        '/gd/product/distributed-io/AI4_02.jpg',
        '/gd/product/distributed-io/AI4_03.jpg',
        '/gd/product/distributed-io/AI4_04.jpg',
        '/gd/product/distributed-io/AI4_05.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },
  {
    url: '/gd/product/distributed-io/AQ4_01.jpg',
    title: '分布式IO-AQ4',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/AQ4_01.jpg',
        '/gd/product/distributed-io/AQ4_02.jpg',
        '/gd/product/distributed-io/AQ4_03.jpg',
        '/gd/product/distributed-io/AQ4_04.jpg',
        '/gd/product/distributed-io/AQ4_05.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },
  {
    url: '/gd/product/distributed-io/DI16_01.jpg',
    title: '分布式IO-DI16',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/DI16_01.jpg',
        '/gd/product/distributed-io/DI16_02.jpg',
        '/gd/product/distributed-io/DI16_03.jpg',
        '/gd/product/distributed-io/DI16_04.jpg',
        '/gd/product/distributed-io/DI16_05.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },
  {
    url: '/gd/product/distributed-io/DQ8_01.jpg',
    title: '分布式IO-DQ8',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/DQ8_01.jpg',
        '/gd/product/distributed-io/DQ8_02.jpg',
        '/gd/product/distributed-io/DQ8_03.jpg',
        '/gd/product/distributed-io/DQ8_04.jpg',
        '/gd/product/distributed-io/DQ8_05.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },
  {
    url: '/gd/product/distributed-io/EtherCAT_02.jpg',
    title: '分布式IO-EtherCAT',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/EtherCAT_01.jpg',
        '/gd/product/distributed-io/EtherCAT_02.jpg',
        '/gd/product/distributed-io/EtherCAT_03.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },
  {
    url: '/gd/product/distributed-io/壳_01.jpg',
    title: '分布式IO-壳',
    desc: 'XXXXXXXXX',
    type: 'StandardizedProduct',
    detail: {
      images: [
        '/gd/product/distributed-io/壳_01.jpg',
        '/gd/product/distributed-io/壳_02.jpg',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: 'XXXXXXXX',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: 'XXXXXXXX',
        },
      ],
    },
  },

  /************/
  /*   西门子  */
  /************/
  {
    url: '/gd/product/siemens/CP1604.png',
    title: 'CP1604 Profinet主站板卡',
    desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/CP1604.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\tPCI, PCIe, PCI104 接口\n'
          + '◆\t支持RT 和 IRT 功能\n'
          + '◆\t集成PROFINET交换机\n'
          + '◆\t循环时间可达250 µs\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/CP1616.png',
    title: 'CP1616 Profinet主站板卡',
    desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/CP1616.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\tPCI, PCIe, PCI104 接口\n'
          + '◆\t支持RT 和 IRT 功能\n'
          + '◆\t集成PROFINET交换机\n'
          + '◆\t循环时间可达250 µs\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/CP1625.png',
    title: 'CP1625 Profinet主站板卡\n',
    desc: '高性价比的基于PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态或者使用提供的工具进行自定义网络组态',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/CP1625.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '高性价比的基于PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态或者使用提供的工具进行自定义网络组态',
        },
        // {
        //   title: '\n\n产品特点\n\n',
        //   desc: '高性价比的基于PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态或者使用提供的工具进行自定义网络组态',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\tPCIe 接口\n'
          + '◆\t支持RT 和 IRT 功能\n'
          + '◆\t2端口PROFINET交换机\n'
          + '◆\t循环时间可达250 µs\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/CP1626.png',
    title: 'CP1626 Profinet主站板卡',
    desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/CP1626.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '基于PCI/PCIe接口的Profinet主站板卡，支持完全的用户编程与自定义。全程C语言开发，可在博图内进行网络组态',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\tPCI, PCIe, PCI104 接口\n'
          + '◆\t支持RT 和 IRT 功能\n'
          + '◆\t集成PROFINET交换机\n'
          + '◆\t循环时间可达250 µs\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/DKSW.png',
    title: 'Profinet从站软件协议栈',
    desc: '一次性投入，无限数量的使用授权。来自西门子官方的PN从站软件授权，提供全套源代码与移植参考。可自由选择硬件平台进行移植，国内已有大量成功案例',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/DKSW.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'Profinet从站软件协议栈',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '一次性投入，无限数量的使用授权。来自西门子官方的PN从站软件授权，提供全套源代码与移植参考。可自由选择硬件平台进行移植，国内已有大量成功案例',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\tC / C++ 源代码\n'
          + '◆\t支持RT 功能\n'
          + '◆\t使用标准以太网硬件\n'
          + '◆\t循环时间可达1 ms\n'
          + '◆\t支持Windows与Linux环境\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/ERTEC200P.png',
    title: 'ERTEC200P芯片',
    desc: '西门子PN从站芯片。国内外部署已超过500万站点。大量客户长期使用证明的高可靠性与强悍性能。易于开发，提供全套软硬件开发资料。有客户在50天内完成产品开发',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/ERTEC200P.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '西门子PN从站芯片。国内外部署已超过500万站点。大量客户长期使用证明的高可靠性与强悍性能。易于开发，提供全套软硬件开发资料。有客户在50天内完成产品开发',
        },
        // {
        //   title: '\n\n产品特点\n\n',
        //   desc: '西门子PN从站芯片。国内外部署已超过500万站点。大量客户长期使用证明的高可靠性与强悍性能。易于开发，提供全套软硬件开发资料。有客户在50天内完成产品开发',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t集成了支持 IRT 的 2 端口交换机\n'
          + '◆\t符合 C 类（性能提升）\n'
          + '◆\t高负载–用户程序可在集成的ARM中运行\n'
          + '◆\t循环时间可达 31.25 µs\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/ERTEC200P-3-Devkit.png',
    title: 'ERTEC200P-3 Mini开发板',
    desc: '基于ERTEC200P-3芯片的Mini开发板\n'
    + '低成本硬件方案\n'
    + '提供全套硬件设计图\n'
    + '伺服客户提供驱动板设计参考\n',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/ERTEC200P-3-Devkit.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '◆ 基于ERTEC200P-3芯片的Mini开发板\n'
          + '◆ 低成本硬件方案\n'
          + '◆ 提供全套硬件设计图\n'
          + '◆ 伺服客户提供驱动板设计参考\n',
        },
        // {
        //   title: '\n\n产品特点\n\n',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t引出全部GPIO引脚\n'
          + '◆\t支持USB TypeC供电\n'
          + '◆\t支持RS485通信\n'
          + '◆\t支持与底板的并口通信\n'
          + '◆\t标准JTAG调试口\n'
          + '◆\t5vDC供电\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/ERTEC200P-Devkit.png',
    title: 'ERTEC200P开发套件',
    desc: '西门子PN硬从站开发套件。提供全部硬件原理图与参考布板图。硬件提供TAP抓包功能，便于进行通信分析。提供一致性预测试软件。提供优化的软硬件参考设计与样例代码。',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/ERTEC200P-Devkit.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '西门子PN硬从站开发套件。提供全部硬件原理图与参考布板图。硬件提供TAP抓包功能，便于进行通信分析。提供一致性预测试软件。提供优化的软硬件参考设计与样例代码。',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t引出全部GPIO引脚\n'
          + '◆\t支持USB转TTL接口进行调试\n'
          + '◆\t支持2口TAP抓包\n'
          + '◆\t简单快速可改造为光纤接口进行测试、开发\n'
          + '◆\t24vDC供电\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/ERTEC200P-Minicard.png',
    title: '',
    desc: '',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/ERTEC200P-Minicard.png',
      ],
      desc: [
        {
          title: '产品功能',
          desc: '',
        },
        {
          title: '产品特点',
          desc: '',
        },
        {
          title: '技术指标',
          desc: '',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/PNDriver.png',
    title: 'PN Driver Profinet主站协议栈\n',
    desc: '用于标准以太网接口的PROFINET控制器',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/PNDriver.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '用于标准以太网接口的PROFINET控制器',
        },
        {
          title: '\n\n产品特点\n\n',
          desc: '◆\t支持PC 或嵌入式设备\n'
          + '◆\t完整源代码交付\n'
          + '◆\t支持博图网络组态\n'
          + '◆\t提供软件工具进行网络组态\n'
          + '◆\t可适配CP1625/1616/1615/1604等西门子板卡工作\n'
          + '◆\t提供示例代码与工程\n',
        },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t源代码，采用 C/C++ 开发\n'
          + '◆\tWindow 或带有实时补丁的 Debian Linux\n'
          + '◆\t采用 Windows 系统循环时间最小为 32 ms\n'
          + '◆\tLinux等实时系统下可达 1 ms\n'
          + '◆\tWindows 环境可连接 16 个设备，Debian Linux 环境可连接 128 个设备\n'
          + '◆\t支持共享设备功能\n'
          + '◆\t支持选项处理功能\n'
          + '◆\t使用 Linux 环境搭配特定网卡（82574L或者I210）支持快速启动\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/ProfiSafe.png',
    title: 'PROFIsafe 入门开发包，软件电子交付',
    desc: 'PROFIsafe 认证的PROFIsafe 驱动软件(PSD) \n'
    + '\n'
    + '◆\t开发包支持开发基于PROFINET的PROFIsafe现场设备\n'
    + '◆\tPROFIsafe 入门开发包V3.4 遵从IEC 61784-3-3中规定的 PROFIsafe V2.4描述\n'
    + '◆\t满足广泛的客户需求，例如多实例需求和运行中可变的过程数据\n',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/ProfiSafe.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: 'PROFIsafe 认证的PROFIsafe 驱动软件(PSD) \n'
          + '\n'
          + '◆\t开发包支持开发基于PROFINET的PROFIsafe现场设备\n'
          + '◆\tPROFIsafe 入门开发包V3.4 遵从IEC 61784-3-3中规定的 PROFIsafe V2.4描述\n'
          + '◆\t满足广泛的客户需求，例如多实例需求和运行中可变的过程数据\n',
        },
        // {
        //   title: '产品特点',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t支持最新的 PROFIsafe 规则\n'
          + '◆\tCRC 计算工具\n'
          + '◆\tiPar server 功能块(软件和指令代码)\n'
          + '◆\t工具调用接口功能(样例和指令代码)\n'
          + '◆\tDK-ERTEC  200 PN IO的样例程序\n',
        },
      ],
    },
  },
  {
    url: '/gd/product/siemens/SOC1.png',
    title: 'PROFINET IRT 控制器开发套件',
    desc: '◆\t基于SOC1的嵌入式PN控制器解决方案\n'
    + '◆\t开发套件可提供给第三方控制器供应商用于在其控制器中实现PROFINET RT/IRT 功能\n'
    + '◆\t组成\n'
    + '\t评估板CP1625\n'
    + '\t源代码的PROFINET 协议栈\n'
    + '\t支持IRT功能的SOC1 芯片\n'
    + '\t源代码的PN ConfigLib 可集成到第三方工程工具\n',
    type: 'AgencyProduct',
    detail: {
      images: [
        '/gd/product/siemens/SOC1.png',
      ],
      desc: [
        {
          title: '\n\n产品功能\n\n',
          desc: '◆\t基于SOC1的嵌入式PN控制器解决方案\n'
          + '◆\t开发套件可提供给第三方控制器供应商用于在其控制器中实现PROFINET RT/IRT 功能\n'
          + '◆\t组成\n'
          + '\t评估板CP1625\n'
          + '\t源代码的PROFINET 协议栈\n'
          + '\t支持IRT功能的SOC1 芯片\n'
          + '\t源代码的PN ConfigLib 可集成到第三方工程工具\n',
        },
        // {
        //   title: '\n\n产品特点\n\n',
        //   desc: '',
        // },
        {
          title: '\n\n技术指标\n\n',
          desc: '◆\t支持RT及IRT功能\n'
          + '◆\t集成双口交换机\n'
          + '◆\t循环时间可达250 µs\n',
        },
      ],
    },
  },

  // {
  //   url: '/gd/product/pn/_01.jpg',
  //   title: '',
  //   desc: '',
  //   type: 'Profinet',
  //   detail: {
  //     images: [
  //       '/gd/product/pn/_01.jpg',
  //     ],
  //     desc: [
  //       {
  //         title: '产品功能',
  //         desc: '',
  //       },
  //       {
  //         title: '产品特点',
  //         desc: '',
  //       },
  //       {
  //         title: '技术指标',
  //         desc: '',
  //       },
  //     ],
  //   },
  // },

  // {
  //   url: '/gd/product/pn/_01.jpg',
  //   title: '',
  //   desc: '',
  //   type: 'Profinet',
  //   detail: {
  //     images: [
  //       '/gd/product/pn/_01.jpg',
  //     ],
  //     desc: [
  //       {
  //         title: '产品功能',
  //         desc: '',
  //       },
  //       {
  //         title: '产品特点',
  //         desc: '',
  //       },
  //       {
  //         title: '技术指标',
  //         desc: '',
  //       },
  //     ],
  //   },
  // },

  // {
  //   url: '/gd/product/pn/_01.jpg',
  //   title: '',
  //   desc: '',
  //   type: 'Profinet',
  //   detail: {
  //     images: [
  //       '/gd/product/pn/_01.jpg',
  //     ],
  //     desc: [
  //       {
  //         title: '产品功能',
  //         desc: '',
  //       },
  //       {
  //         title: '产品特点',
  //         desc: '',
  //       },
  //       {
  //         title: '技术指标',
  //         desc: '',
  //       },
  //     ],
  //   },
  // },

  // {
  //   url: '/gd/product/pn/_01.jpg',
  //   title: '',
  //   desc: '',
  //   type: 'Profinet',
  //   detail: {
  //     images: [
  //       '/gd/product/pn/_01.jpg',
  //     ],
  //     desc: [
  //       {
  //         title: '产品功能',
  //         desc: '',
  //       },
  //       {
  //         title: '产品特点',
  //         desc: '',
  //       },
  //       {
  //         title: '技术指标',
  //         desc: '',
  //       },
  //     ],
  //   },
  // },
]
