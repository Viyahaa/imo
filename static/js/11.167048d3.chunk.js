(this.webpackJsonpreact_imo = this.webpackJsonpreact_imo || []).push([
  [11],
  {
    385: function (n, e, t) {
      n.exports = {
        not_find_ly: "NoteFindPage_not_find_ly__1PB15",
        center_image: "NoteFindPage_center_image__2tt_U",
        note_find_title: "NoteFindPage_note_find_title__39OW7",
        note_find_content: "NoteFindPage_note_find_content__1jx8V",
        note_find_function: "NoteFindPage_note_find_function__aJ5GB",
        pointer: "NoteFindPage_pointer__3aZkT",
        note_find_back: "NoteFindPage_note_find_back__1Zxw_",
        mar_r_10: "NoteFindPage_mar_r_10__1yUAN",
        mar_r_20: "NoteFindPage_mar_r_20__1XLrC",
      };
    },
    429: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function () {
          return f;
        });
      var _ = t(10),
        i = t(16),
        a = t(39),
        c = t(38),
        o = t(0),
        e = t(385),
        r = t.n(e),
        d = t(83),
        s = t(8),
        f = (function (n) {
          Object(a.a)(t, n);
          var e = Object(c.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(i.a)(t, [
              {
                key: "back",
                value: function () {
                  window.history.back();
                },
              },
              {
                key: "render",
                value: function () {
                  var n = this;
                  return Object(s.jsx)("div", {
                    className: r.a.not_find_ly,
                    children: Object(s.jsxs)("div", {
                      className: r.a.center_image,
                      children: [
                        Object(s.jsx)("div", {
                          className: r.a.note_find_title,
                          children: "您访问的页面丢失了",
                        }),
                        Object(s.jsx)("div", {
                          className: r.a.note_find_content,
                          children: "可以通过以下方式继续访问",
                        }),
                        Object(s.jsxs)("div", {
                          className: r.a.note_find_function,
                          children: [
                            Object(s.jsx)("span", {
                              onClick: function () {
                                return n.back();
                              },
                              className:
                                r.a.note_find_back +
                                " " +
                                r.a.mar_r_20 +
                                " " +
                                r.a.pointer,
                              children: "返回上一级",
                            }),
                            Object(s.jsx)(d.b, {
                              to: "/",
                              className: r.a.note_find_back,
                              children: "返回首页",
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(o.Component);
    },
  },
]);
