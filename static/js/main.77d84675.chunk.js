(this.webpackJsonpreact_imo = this.webpackJsonpreact_imo || []).push([
  [4],
  {
    165: function (e, t, n) {},
    187: function (e, t) {},
    189: function (e, t) {},
    19: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "i", function () {
          return r;
        }),
        n.d(t, "j", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return u;
        });
      var o = "0x0000000000000000000000000000000000000000",
        i = "DMT",
        r = "MDX",
        a = "xMDX",
        c = "Demeter",
        s = 6.475,
        u = "https://imo.mdex.cc/api/v2/imo",
        d = { HECO: 128, BSC: 56 },
        l = { "0x38": "BSC", "0x80": "HECO" },
        p = ["detail", "Explana", "404", "list"],
        h = "HECO";
    },
    201: function (e, t) {},
    203: function (e, t) {},
    231: function (e, t) {},
    232: function (e, t) {},
    237: function (e, t) {},
    239: function (e, t) {},
    246: function (e, t) {},
    265: function (e, t) {},
    300: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        i = n(40),
        r = n.n(i),
        a = n(80),
        t = (n(165), n(81)),
        c = n(10),
        s = n(16),
        u = n(39),
        d = n(38),
        l = n(49),
        i = n(50),
        p = n.n(i),
        h = n(82),
        m = n(8);
      function f(i) {
        return (function (e) {
          Object(u.a)(o, e);
          var t,
            n = Object(d.a)(o);
          function o(e) {
            return (
              Object(c.a)(this, o),
              ((e = n.call(this, e)).state = { component: null }),
              e
            );
          }
          return (
            Object(s.a)(o, [
              {
                key: "componentDidMount",
                value:
                  ((t = Object(h.a)(
                    p.a.mark(function e() {
                      var t;
                      return p.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), i();
                              case 2:
                                (t = e.sent),
                                  (t = t.default),
                                  this.setState({ component: t });
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.component;
                  return e
                    ? Object(m.jsx)(e, Object(l.a)({}, this.props))
                    : null;
                },
              },
            ]),
            o
          );
        })(o.Component);
      }
      var g,
        k = n(83),
        O = n(6),
        A = f(function () {
          return Promise.all([n.e(0), n.e(2), n.e(1), n.e(3), n.e(8)]).then(
            n.bind(null, 619)
          );
        }),
        T = f(function () {
          return Promise.all([n.e(0), n.e(1), n.e(9)]).then(n.bind(null, 621));
        }),
        w = f(function () {
          return Promise.all([n.e(0), n.e(2), n.e(12), n.e(1), n.e(7)]).then(
            n.bind(null, 620)
          );
        }),
        b =
          (f(function () {
            return Promise.all([n.e(0), n.e(2), n.e(1), n.e(3), n.e(10)]).then(
              n.bind(null, 622)
            );
          }),
          f(function () {
            return n.e(11).then(n.bind(null, 429));
          })),
        i = (function (e) {
          Object(u.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(m.jsx)(k.a, {
                    children: Object(m.jsxs)(O.d, {
                      children: [
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/",
                          component: w,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/detail",
                          component: A,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/detail/:id",
                          component: A,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/IMO/",
                          component: w,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/IMO",
                          component: w,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/IMO/:lang",
                          component: w,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/Explana",
                          component: T,
                        }),
                        Object(m.jsx)(O.b, {
                          exact: !0,
                          path: "/404",
                          component: b,
                        }),
                        Object(m.jsx)(O.a, { to: "/404" }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(o.Component);
      r.a.render(
        Object(m.jsx)(a.a, { store: t.a, children: Object(m.jsx)(i, {}) }),
        document.getElementById("root")
      ),
        g &&
          g instanceof Function &&
          n
            .e(13)
            .then(n.bind(null, 617))
            .then(function (e) {
              var t = e.getCLS,
                n = e.getFID,
                o = e.getFCP,
                i = e.getLCP,
                e = e.getTTFB;
              t(g), n(g), o(g), i(g), e(g);
            });
    },
    81: function (e, t, n) {
      "use strict";
      var o = n(10),
        i = n(16),
        r = n(3),
        a = {
          Header: {
            Home: "Home",
            Swap: "Swap",
            Pool: "Pool",
            Liquidity: "Liquidity",
            Trading: "Trading",
            Boardroom: "Boardroom",
            Bridge: "Bridge",
            Chart: "Chart",
            Buyback: "Burning black hole",
            News: "News",
            IMO: "IMO",
            Farm: "Farm",
            Connect: "Connect",
          },
          Footer: {
            Application: "Application",
            ACText1: "Listing Token",
            ACText2: "Liquidity Mining Whitelist",
            ACText3: "IMO Application",
            ACText4: "MDEX Ecological Fund Application",
            Guide: "Guide",
            GUText1: "Swap",
            GUText2: "Pool",
            GUText3: "Info",
            GUText4: "Liquidity",
            GUText5: "Boardroom",
            GUText6: "Trading",
            Doc: "Doc",
            DOText1: "FAQ",
            DOText2: "API",
            Guidance: "User Guide",
            About: "About",
            ABText1: "Announcement",
            ABText2: "Adjustment of Pool",
            ABText3: "Ecological Fund",
            Vulnerability: "Bug Bounty Campaign",
            ABText4: "Contact us: business@mdex.com",
            Reserved: "@2021 Mdex.com.All rights reserved",
          },
          Banner: {
            Title: function () {
              return "".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                " current statistics"
              );
            },
            account1: function () {
              return "Current participants of ".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                "："
              );
            },
            account2: function () {
              return "Number of ".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                " participants in the current period"
              );
            },
            Introduce: "05/25 20:00 SGT Start",
            Rollout: "Featured projects coming soon:",
            ShowProject: "View all projects",
            CardTitle: "IMO Project ? ",
            StartStatus: "Stay Tuned!",
            Start: "start",
          },
          Tab: {
            Processing: "Processing",
            Start: "About to start",
            Participated: "Participated",
            Info: "IMO Info",
            Description: "Description",
            MyIn: "My Portfolio",
            IMOs: "IMOs",
            Over: "Over",
            Lockup: "Locked",
          },
          Active: {
            Tips: "Through a new form of staking, IMO will reward all new project tokens to staking MDX or xMDX users. During the staking period, part of the board of directors’ proceeds will be destroyed",
            ComeS: "Coming Soon",
            Progress: "in progress",
            Lockup: "Locked",
            Inli: "In liquidation",
            Over: "Over",
            AirdropAmount: "Rewards Amount",
            AirdropPrice: "Price",
            Begin: "Stake start time",
            End: "Stake end time",
            PledgeEnd: "Staking Remaining",
            LockEndTime: "lock-up end time",
            Participate: "Participated",
            PledgeAmount: "Total Staked",
            EstimateLockTime: "Estimated lock-up time",
            LockEndTimeDec: function () {
              return "Completed locked-up blcok height: ".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 66666,
                " Completed lock-up time is a estimated time based on the staking end time plus the lock-up duration. The actual lock-up end time needs to be based on the height of the lock-up end block"
              );
            },
            LockupTime: "Remaining Lock-up time",
            PopText1: "IMO stake token:",
            BeginDesc: "暂定BeginTips",
            EndDesc: "暂定EndTips",
            EstimateLockDesc:
              "The estimated lock-up period is dynamically calculated based on the number of staked xMDX in the IMO pool. The more stake xMDX , the shorter the lock-up period.",
            LockDesc: function () {
              return "Block height at the end of locked period: ".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 66666,
                ", Remaining lock-up period is the estimated time based on the data of the locked-up block, and the actual lock-up time needs to be based on the block height"
              );
            },
            ClearTips:
              "The contract is calculating the airdrop rewards for each user, and the rewards can be withdrawn after the clearing is completed",
            EndTips: "IMO is over, please claim rewards and principal in time.",
            UnLockup: "Unlock",
            MyPledge: "My staking",
            MyShare: "My share",
            AwardAmount: "My Rewards",
            Unlimited: "Unlimited",
            Calculate: "Calculate",
            Stipulation: "About",
            InliDesc:
              "Estimated time for completion of liquidation: 09.17 20:00 SGT, Rewards can be withdrawn when liquidation is completed. Your principal can be claimed after the lock-up period completed",
          },
          explana: {
            OneAsk: "What do I need to prepare before participating in IMO?",
            OneAnswer1:
              "1. Download wallet: computer: Metamask,mobile: imToken、Math Wallet、BitKeep、O3 Swap、Token Pocket. ",
            OneAnswer2:
              "2. Wallet creation and HECO/BSC network configuration. ",
            OneAnswer3: "3. Buy MDX",
            OneAnswer4: "4. Stake MDX to obtain lock-up voucher ：xMDX",
            TwoAsk: "How to participate in IMO?",
            TwoAnswer1:
              "1. Choose the ongoing IMO project and Stake MDX or xMDX to get new token rewards",
            TwoAnswer2:
              "2. The contract will dynamically calculate the lock-up time based on the number of staked vouchers. After the staking period is completed, it will enter the lock-up period.",
            TwoAnswer3:
              "3. Users can withdraw the principal after the lock-up period.",
            ThreeAsk: "When can I get my rewards?",
            ThreeAnswer1:
              "After the IMO liquidation is completed (depending on the online arrangement of the project), you can get your token rewards in the project details page",
            FourAsk: "IMO common problem",
            FourAnswer1: "How long does IMO need to lock up?",
            FourAnswer2: "How much boardroom rewards need to be deducted?",
            Apply: "Apply now",
            FotText: "Is your project ready to get launched on MDEX?",
            Poratal: "How to apply to participate in IMO?",
            Iap: "IMO application process",
          },
          Info: {
            IMOif: "IMO information",
            Begin: "Start time :",
            End: "End time :",
            Award: "IMO rewards amount :",
            Price: "Price :",
            Destroy: "MDX burned :",
            Tokenif: "Token information",
            CoinName: "Token name :",
            AwardAccount: "Reward tokens :",
            TotalSupply: "Total supply :",
            ToAdr: "Token addreess :",
            AddCoin: function () {
              return "Add ".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                " to wallet"
              );
            },
          },
          Desc: {
            ProName: "Project name",
            ProDes: "Project Description",
            Contact: "Contact the project party",
            WebSide: "Official website:",
            Twitter: "Twitter:",
          },
          Investment: {
            PledgeMoney: "Total stake number",
            MyShare: "My share",
            RewardAmount: "Reward tokens",
            PledgeHistory: "Stake history",
            DestroyIncome: "My burned MDX",
          },
          Btn: {
            Confirming: "Confirming",
            Acquired: "acquired",
            Claim: "Claim",
            Trade: "Trade",
            Approve: "Approve",
            Approving: "Approving",
            Confirm: "Confirm",
            Pii: "Stake ",
            Mam: "Add liquidity",
          },
          Pop: {
            Buco: "Business cooperation",
            Notice: "Notice",
            ToIn: "Won gained:",
            Retrieve: "Retrieve",
            Get: "Get",
            Gypa: "Get your project assets",
            Unas: "Unsigned assets:",
            Ana: "Acquire new assets:",
            Inus: "Stake",
            Available: "Available",
            Topic: "Your LP balance is insufficient,please get the LP first",
            Limit: "Personal stake limit:",
            Approve: "Approve",
            success: "successfully",
            error: "Fail",
            Inveset: "Sent",
            ViewOn: "View on",
            Already: "Staked：",
            And: "and",
            Extract: "Claim",
            Warning:
              "Asset is under liquidating, you can only claim the unsuccessful assets temporarily, and the successful assets are expected to be claimed within 24 hours",
            AirdropAwarn: "Award：",
            ExtractIncome: "Claim rewards",
            ExtractPrincipal: "Claim",
            ClaimTextTitle:
              "DMT tokens will be sent to this address through the HECO network. Please follow the procedure as follows:",
            ClaimText1: "1.Switch to the HECO network.",
            ClaimText2:
              "2.Copy the token contract address followed by adding token to the wallet.",
            ContractAddress: "Token contract address：",
          },
          Supplement: {
            Return: "Return",
            Product: "Product",
            Loading: "Loading",
            Nodata: "No data",
            ProductList: "Product list",
          },
          Check: {
            MinLimit:
              "Exceeding the bottom limit. Please input a valid volume number.",
            MaxLimit: "Exceeding the upper limit. Please input a valid number.",
            Topic: "Not enough balance. Please have",
          },
          Slide: {
            Apply: "Listing Token",
            Fluidity: "Liquidity Mining Whitelist",
            Fund: "MDEX Ecological Fund Application",
            Notice: "Notice",
            Repurchase: "Repurchase & Burn",
            Bridge: "Bridge",
          },
        },
        c = {
          Header: {
            Home: "首页",
            Swap: "兑换",
            Pool: "流动性池",
            Liquidity: "流动性挖矿",
            Trading: "交易挖矿",
            Boardroom: "董事会",
            Bridge: "跨链桥",
            Chart: "行情",
            Buyback: "燃烧黑洞",
            News: "公告",
            IMO: "IMO",
            Farm: "Farm",
            Connect: "连接",
          },
          Footer: {
            Application: "申请",
            ACText1: "上币申请",
            ACText2: "申请流动性激励",
            ACText3: "IMO申请",
            ACText4: "MDEX生态基金申请",
            Guide: "网站导航",
            GUText1: "兑换",
            GUText2: "流动性池",
            GUText3: "info",
            GUText4: "流动性挖矿",
            GUText5: "董事会",
            GUText6: "交易挖矿",
            Doc: "文档",
            DOText1: "FAQ",
            DOText2: "API",
            Guidance: "用户使用指南",
            About: "关于",
            ABText1: "公告",
            ABText2: "矿池调整",
            ABText3: "生态基金",
            Vulnerability: "漏洞赏金计划",
            ABText4: "商务合作: business@mdex.com",
            Reserved: "@2021 Mdex.com.All rights reserved",
          },
          Banner: {
            Title: function () {
              return "".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                "当前数据统计(BSC&HECO)"
              );
            },
            account1: function () {
              return "当期".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                "参与人数："
              );
            },
            account2: function () {
              return "当期".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                "质押数量："
              );
            },
            Introduce: "5月25日20:00正式开启",
            Rollout: "即将开始的精选项目：",
            ShowProject: "查看所有项目",
            CardTitle: "IMO项目？",
            StartStatus: "敬请期待",
            Start: "开始",
          },
          Tab: {
            Processing: "进行中",
            Start: "即将开始",
            Participated: "我参与的",
            Info: "IMO信息",
            Description: "项目简介",
            MyIn: "我的质押记录",
            IMOs: "IMOs",
            Over: "已结束",
            Lockup: "锁仓中",
          },
          Active: {
            Tips: "IMO通过质押打新的形式，将新资产代币全部奖励给质押MDX或xMDX用户，质押期间董事会部分收益将销毁",
            ComeS: "即将开始",
            Progress: "进行中",
            Lockup: "锁仓中",
            Inli: "清算中",
            Over: "已结束",
            AirdropAmount: "奖励总金额",
            AirdropPrice: "奖励代币价格",
            Begin: "质押开始时间",
            End: "质押结束时间",
            PledgeEnd: "距离质押结束：",
            LockEndTime: "锁仓结束时间",
            LockEndTimeDec: function () {
              return "锁仓结束区块高度：".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 66666,
                "锁仓结束时间是在质押结束时间基础上加上锁仓时长预估的时间，实际的锁仓结束时间需要以锁仓结束区块高度为准"
              );
            },
            Participate: "已参与",
            PledgeAmount: "质押数量",
            EstimateLockTime: "预计锁仓时长",
            LockupTime: "剩余锁仓时长",
            PopText1: "IMO质押币种为:",
            BeginDesc: "暂定BeginTips",
            EndDesc: "暂定EndTips",
            EstimateLockDesc:
              "预计锁仓时长是根据质押在IMO池中的凭证数量动态计算的，质押的凭证数量越多，锁仓时长越短",
            LockDesc: function () {
              return "锁仓结束区块高度：".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 66666,
                ", 剩余锁仓时长是根据锁仓区块数据预估的时间，实际锁仓时长需要以区块高度为准"
              );
            },
            ClearTips:
              "合约正在清算每位用户的空投奖励，待清算完成后可以提取奖励",
            EndTips: "IMO已结束，请及时提取奖励和本金",
            UnLockup: "已解锁",
            MyPledge: "我的质押",
            MyShare: "我的份额",
            AwardAmount: "奖励代币数",
            Unlimited: "不限",
            Calculate: "计算中",
            Stipulation: "约",
            InliDesc:
              "预计清算完成时间：09.17 20:00 SGT，清算完成后才可以提取新币奖励，本金在锁仓结束后即可领取",
          },
          explana: {
            OneAsk: "参与IMO前需要准备什么？",
            OneAnswer1:
              "1. 下载钱包：电脑端：Metamask， 手机端：imToken、Math Wallet、BitKeep、O3 Swap、Token Pocket",
            OneAnswer2: "2. 钱包创建和HECO/BSC网络配置",
            OneAnswer3: "3.  购买MDX",
            OneAnswer4: "4.  质押MDX 获取锁仓凭证 xMDX",
            TwoAsk: "如何参与IMO？",
            TwoAnswer1:
              "1. 选择进行中的IMO项目，质押目标MDX或xMDX即可获得新币奖励",
            TwoAnswer2:
              "2. 合约将根据质押的凭证数量，动态计算锁仓时间，质押期完成后，将进入锁仓期。",
            TwoAnswer3: "3. 用户在锁仓期结束后才能提取本金",
            ThreeAsk: "什么时候可以获取项目token？",
            ThreeAnswer1:
              "IMO 清算完成（根据项目方代币发放情况而定）后，在项目详情页一键获取你的新币奖励",
            FourAsk: "IMO 常见问题",
            FourAnswer1: "IMO 需要锁仓多久？",
            FourAnswer2: "需要扣除多少董事会收益？",
            Apply: "立即申请",
            FotText: "您的项目准备好在MDEX上参与IMO吗？",
            Poratal: "如何参与IMO",
            Iap: "如何参与IMO",
          },
          Info: {
            IMOif: "IMO 信息",
            Begin: "质押开始时间 :",
            End: "质押结束时间 :",
            Award: "IMO奖励金额 :",
            Price: "代币初始价格 :",
            Destroy: "销毁MDX数量 :",
            Tokenif: "代币信息",
            CoinName: "代币名称 :",
            AwardAccount: "奖励代币数量 :",
            TotalSupply: "总供应量 :",
            ToAdr: "代币合约地址 :",
            AddCoin: function () {
              return "将".concat(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "XX",
                "添加至MetaMask"
              );
            },
          },
          Desc: {
            ProName: "项目名称",
            ProDes: "项目简介",
            Contact: "联系项目方",
            WebSide: "官网:",
            Twitter: "推特:",
          },
          Investment: {
            PledgeMoney: "总质押数量",
            MyShare: "我的份额",
            RewardAmount: "奖励代币数",
            PledgeHistory: "质押记录",
            DestroyIncome: "我销毁的收益",
          },
          Btn: {
            Confirming: "确认中",
            Acquired: "已领取",
            Claim: "获取资产",
            Trade: "去交易",
            Approve: "授权",
            Approving: "授权中",
            Confirm: "确认",
            Pii: "质押 ",
            Mam: "添加流动性",
          },
          Pop: {
            Buco: "商务合作",
            Notice: "公告",
            ToIn: "共投入:",
            Retrieve: "兑换",
            Get: "获取",
            Gypa: "获取你的项目资产",
            Unas: "未中签资产:",
            Ana: "获取新资产:",
            Inus: "质押",
            Available: "可用",
            Topic: "你的LP余额不足，请先获得LP",
            Limit: "个人质押限额：",
            Approve: "授权",
            success: "成功",
            error: "失败",
            Inveset: "投入",
            ViewOn: "查看交易记录",
            Already: "已质押：",
            And: "和",
            Warning:
              "资产清算中，您暂时只能取回未中签资产，中签资产预计24小时后可以取回",
            Extract: "提取",
            AirdropAwarn: "奖励：",
            PledgeAmount: "已质押数量:",
            ExtractIncome: "提取收益",
            ExtractPrincipal: "提取本金",
            ClaimTextTitle:
              "DMT代币将通过HECO网络发放到当前地址，请按如下操作查看：",
            ClaimText1: "1.将当前网络切换到HECO网络",
            ClaimText2: "2.复制代币合约地址并在钱包添加资产",
            ContractAddress: "代币合约地址：",
          },
          Supplement: {
            Return: "首页",
            Product: "项目",
            Loading: "加载中",
            Nodata: "暂无数据",
            ProductList: "项目列表",
          },
          Check: {
            MinLimit: "低于最低兑换限额，请重新输入",
            MaxLimit: "超过最大可兑换限额，请重新输入",
            Topic: "你的余额不足，请先获得",
          },
          Slide: {
            Apply: "上币申请",
            Fluidity: "申请流动性激励",
            Fund: "MDEX生态基金申请",
            Notice: "公告",
            Repurchase: "回购销毁",
            Bridge: "跨链桥",
          },
        },
        s = n(85),
        u = "zh",
        d = window.localStorage.getItem("IMOLang"),
        l = window.location.href,
        l = Object(s.c)(l);
      0 < Object.keys(l).length
        ? ((p = l.lang),
          ["zh", "en", "hk"].includes((A = "zh-HK" === p ? "hk" : p)) &&
            (u !== A && (u = A), window.localStorage.setItem("IMOLang", A)))
        : d && u !== d && (u = d);
      for (
        var l =
            (Object(i.a)(O, [
              {
                key: "setLang",
                value: function (e) {
                  this.language !== e &&
                    ((this.language = e),
                    window.localStorage.setItem("IMOLang", e));
                },
              },
            ]),
            new O()),
          p =
            (Object(i.a)(k, [
              {
                key: "setSkinSign",
                value: function (e) {
                  this.skinSign = e;
                },
              },
            ]),
            new k()),
          h = navigator.userAgent.toLowerCase(),
          m = ["iphone", "android", "windows phone"],
          f = "pc",
          g = 0;
        g < m.length;
        g++
      )
        -1 !== h.indexOf(m[g]) && (f = "mobile");
      function k() {
        Object(o.a)(this, k), (this.skinSign = ""), Object(r.l)(this);
      }
      function O() {
        Object(o.a)(this, O),
          (this.language = u),
          (this.en = a),
          (this.zh = c),
          Object(r.l)(this);
      }
      var A = new (function e() {
          Object(o.a)(this, e),
            (this.device = f),
            (this.getname = "info"),
            Object(r.l)(this);
        })(),
        T = n(49),
        d = n(78),
        w = n.n(d),
        d = n(156),
        b = n.n(d),
        M = n(19);
      w.a.interceptors.response.use(
        function (e) {
          return e.data;
        },
        function (e) {
          return Promise.reject(e.response);
        }
      );
      function x(e, t, n) {
        return (
          (t = { withCredentials: !1, url: t, timeout: 3e4, headers: {} }),
          "get" === e &&
            ((t.method = "get"),
            (t.params = Object.assign({ user_addr: M.c }, n)),
            (t.headers = {
              authorization: (function (e) {
                e = Object.assign({ user_addr: M.c }, e);
                return (
                  "Bearer " +
                  b.a.sign(e, "DPU4J8N3jhXyAmCw1B7g3kf6ZIIM32o3", {
                    expiresIn: 30,
                  })
                );
              })(Object(T.a)({}, n)),
            })),
          w()(t)
        );
      }
      var v = new (function e() {
          Object(o.a)(this, e),
            (this.get = function (e) {
              return x(
                "get",
                e,
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              );
            });
        })(),
        I = "".concat(M.e, "/pro-list"),
        y = "".concat(M.e, "/pro-join-list"),
        P = "".concat(M.e, "/pro-info"),
        C = "".concat(M.e, "/pro-vote-history"),
        j = "".concat(M.e, "/server-time"),
        S = "".concat(M.e, "/sum"),
        i = {
          lang: l,
          skin: p,
          config: A,
          imo:
            (Object(i.a)(L, [
              {
                key: "getImoProList",
                value: function (e) {
                  return v.get(I, e);
                },
              },
              {
                key: "saveImoProList",
                value: function (e) {
                  this.imoProList = e;
                },
              },
              {
                key: "filterImoProList",
                value: function (t) {
                  var e = this.imoProList.slice(0).filter(function (e) {
                    return e.id !== t;
                  });
                  this.imoProList = e;
                },
              },
              {
                key: "getImoProVote",
                value: function (e) {
                  return v.get(y, e);
                },
              },
              {
                key: "getImoProInfo",
                value: function (e) {
                  return v.get(P, e);
                },
              },
              {
                key: "getImoProHistory",
                value: function (e) {
                  return v.get(C, e);
                },
              },
              {
                key: "getServerTime",
                value: function (e) {
                  return v.get(j, e);
                },
              },
              {
                key: "saveServerTime",
                value: function (e) {
                  this.serverTime = e;
                },
              },
              {
                key: "getSum",
                value: function (e) {
                  return v.get(S, e);
                },
              },
            ]),
            new L()),
          contract:
            (Object(i.a)(D, [
              {
                key: "setAccounts",
                value: function (e) {
                  this.accounts = e;
                },
              },
            ]),
            new D()),
        };
      function D() {
        Object(o.a)(this, D), (this.accounts = ""), Object(r.l)(this);
      }
      function L() {
        Object(o.a)(this, L),
          (this.imoProList = []),
          (this.serverTime = 0),
          Object(r.l)(this);
      }
      t.a = i;
    },
    85: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return u;
      }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "g", function () {
          return s;
        }),
        n.d(t, "h", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return o;
        });
      var o = function (e, t) {
          var n = t || 2;
          if (0 <= Number(e)) {
            var t = 0,
              t = (0).toFixed(n).split(".")[1],
              o = e.toString(),
              i = "",
              r = 0;
            if (-1 === o.indexOf(".")) {
              for (var a = o.length - 1; 0 <= a; a--)
                (i =
                  r % 3 == 0 && 0 !== r
                    ? o.charAt(a) + "," + i
                    : o.charAt(a) + i),
                  r++;
              return i;
            }
            for (var c = o.indexOf(".") - 1; 0 <= c; c--)
              (i =
                r % 3 == 0 && 0 !== r
                  ? o.charAt(c) + "," + i
                  : o.charAt(c) + i),
                r++;
            return i + (o + t).substr((o + t).indexOf("."), n + 1);
          }
        },
        i = function (e) {
          var t = {},
            n = e.indexOf("?");
          if (-1 !== n)
            for (var o = e.substr(n + 1).split("&"), i = 0; i < o.length; i++)
              t[o[i].split("=")[0]] = o[i].split("=")[1];
          return t;
        },
        r = function (e, t) {
          var n = new Date(+e),
            o = n.getFullYear(),
            i = (i = n.getMonth() + 1) < 10 ? "0" + i : i,
            r = (r = n.getDate()) < 10 ? "0" + r : r,
            a = (a = n.getHours()) < 10 ? "0" + a : a,
            e = (e = n.getMinutes()) < 10 ? "0" + e : e,
            n = (n = n.getSeconds()) < 10 ? "0" + n : n;
          return 1 === t
            ? o + "-" + i + "-" + r + " " + a + ":" + e + ":" + n
            : 2 === t
            ? o + "-" + i + "-" + r + " " + a + ":" + e
            : 3 === t
            ? i + "-" + r + " " + a + ":" + e + ":" + n
            : 4 === t
            ? o + "-" + i + "-" + r + " " + a + ":" + e + ":" + n
            : 5 === t
            ? i + "月" + r + "日"
            : 6 === t
            ? o + "/" + i + "/" + r
            : 7 === t
            ? o + "/" + i + "/" + r + " " + a + ":" + e
            : 8 === t
            ? i + "/" + r + " " + a + ":" + e
            : 9 === t
            ? a + ":" + e + " " + i + "/" + o
            : 10 === t
            ? o + "-" + i + "-" + r
            : 11 === t
            ? i + "-" + r
            : 12 === t
            ? i + "/" + r + " " + a + ":" + e
            : 13 === t
            ? i + "." + r + " " + a + ":" + e
            : 14 === t
            ? a + ":" + e + ":" + n + " " + r + "/" + i + "/" + o
            : a + ":" + e + ":" + n;
        },
        a = function (e) {
          var t = e,
            n = (n = Math.floor(t / 86400)) < 10 ? "0".concat(n) : n,
            o = (o = Math.floor((t % 86400) / 3600)) < 10 ? "0".concat(o) : o,
            e =
              (e = Math.floor(((t % 86400) % 3600) / 60)) < 10
                ? "0".concat(e)
                : e,
            t =
              (t = Math.floor(((t % 86400) % 3600) % 60)) < 10
                ? "0".concat(t)
                : t;
          return n < 1e3
            ? (0 < n
                ? " ".concat(n, "d: ").concat(o, "h: ").concat(e, "m: ")
                : (0 < o ? " ".concat(o, "h : ") : "").concat(e, "m : ")
              ).concat(t, "s")
            : " 999d: 00h: 00m: 00s";
        },
        c = function (e, t, n) {
          if (e && t && n)
            return "https://mdex.co/token-icons/"
              .concat(e.toLowerCase(), "/")
              .concat(1 === n ? "lp/" : "")
              .concat(t.toLowerCase(), ".png");
        },
        s = function (e) {
          return e ? e.substring(0, 6) + "..." + e.substring(e.length - 6) : "";
        },
        u = function (e, t, n) {
          n = n || "tx";
          return "https://"
            .concat("HECO" === t ? "hecoinfo" : "bscscan", ".com/")
            .concat(n, "/")
            .concat(e);
        },
        d = function (e, t, n) {
          return e["".concat(n, "_").concat(t)]
            ? e["".concat(n, "_").concat(t)]
            : e[n];
        },
        l = function (e, t) {
          return e && e.indexOf(".")
            ? e.substring(0, e.indexOf(".") + t + 1)
            : e;
        };
    },
  },
  [[300, 5, 6]],
]);
