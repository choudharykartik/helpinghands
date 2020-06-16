(this.webpackJsonphelpinghand = this.webpackJsonphelpinghand || []).push([
  [0],
  {
    40: function (e, t, a) {
      e.exports = a.p + "static/media/helpinghands.e44de644.png";
    },
    79: function (e, t, a) {
      e.exports = a(99);
    },
    84: function (e, t, a) {},
    85: function (e, t, a) {},
    99: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(31),
        c = a.n(l),
        s = (a(84), a(85), a(6)),
        o = a(104),
        m = a(101),
        i = a(65),
        u = a(102),
        d = a(40),
        p = a.n(d),
        h = a(10),
        E = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              m.a,
              { className: "py-5 mt-5" },
              r.a.createElement(
                i.a,
                { sm: 12, md: 9, className: "mx-auto text-center" },
                r.a.createElement("img", {
                  src: p.a,
                  width: "200",
                  className: "img-fluid mb-3",
                  alt: "Helping hands",
                }),
                r.a.createElement(
                  "h1",
                  { className: "text-accent" },
                  "Join hands to fight the pandemic."
                ),
                r.a.createElement(
                  "h4",
                  { className: "font-weight-bold" },
                  "#IndiaFightsCorona"
                )
              ),
              r.a.createElement(
                i.a,
                {
                  sm: 12,
                  md: 6,
                  className:
                    "my-5 d-flex mx-auto text-center flex-md-row flex-column align-items-center justify-content-md-between justify-content-sm-center",
                },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    h.b,
                    { to: "/askforhelp" },
                    r.a.createElement(
                      u.a,
                      {
                        variant: "success",
                        size: "lg",
                        className: "rounded-pill mb-2",
                      },
                      r.a.createElement("strong", null, " Ask for help")
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    h.b,
                    { to: "/helpothers" },
                    r.a.createElement(
                      u.a,
                      {
                        type: "button",
                        variant: "warning",
                        size: "lg",
                        className: "rounded-pill mb-2",
                      },
                      r.a.createElement("strong", null, "Help Others")
                    )
                  )
                )
              )
            )
          );
        },
        f = a(103),
        b = a(9),
        g = a.n(b),
        v = a(25),
        x = {
          isAuthenticated: function () {
            return localStorage.getItem("helpinghands-auth");
          },
          setAuthentication: function (e) {
            return localStorage.setItem("helpinghands-auth", e);
          },
          clearAuth: function () {
            return localStorage.removeItem("helpinghands-auth");
          },
          setAPIToken: function (e) {
            return localStorage.setItem("auth_token", e);
          },
          getAPIAuthToken: function () {
            return localStorage.getItem("auth_token");
          },
        },
        N = "a971572c-8e94-11ea-9fa5-0200cd936042",
        y = "https://helpings.herokuapp.com/",
        w = new Headers(),
        O = new Headers();
      w.append("Content-Type", "application/json"),
        O.append("Content-Type", "application/json"),
        O.append("Authorization", "Token " + x.isAuthenticated());
      var S = {
          sendOtp: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t, a) {
                var n, r;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = new Headers()).append(
                            "Content-Type",
                            "application/x-www-form-urlencoded"
                          ),
                          (e.next = 4),
                          fetch(
                            "https://2factor.in/API/V1/"
                              .concat(N, "/SMS/")
                              .concat(t, "/")
                              .concat(a, "/helper%20template"),
                            { headers: n }
                          )
                        );
                      case 4:
                        return (r = e.sent), (e.next = 7), r.json();
                      case 7:
                        return e.abrupt("return", e.sent);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
          verifyOtp: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t, a) {
                var n;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "https://2factor.in/API/V1/"
                              .concat(N, "/SMS/VERIFY/")
                              .concat(t, "/")
                              .concat(a)
                          )
                        );
                      case 2:
                        return (n = e.sent), (e.next = 5), n.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
          addPerson: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t) {
                var a;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "create/person", {
                            method: "POST",
                            headers: w,
                            body: JSON.stringify(t),
                          })
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          createNewHelper: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t) {
                var a;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "create/helper", {
                            method: "POST",
                            headers: w,
                            body: JSON.stringify(t),
                          })
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          getPerson: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t) {
                var a;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "api/person/all", {
                            method: "GET",
                            headers: O,
                          })
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          getNearbyPerson: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t) {
                var a;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "api/person/needy/near", {
                            method: "POST",
                            headers: O,
                            body: JSON.stringify(t),
                          })
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          doHelp: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t, a) {
                var n;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "api/person/help", {
                            method: "POST",
                            headers: O,
                            body: JSON.stringify({ helper_id: a, needy_id: t }),
                          })
                        );
                      case 2:
                        return (n = e.sent), (e.next = 5), n.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
          getHelpDone: (function () {
            var e = Object(v.a)(
              g.a.mark(function e(t) {
                var a;
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(y + "api/person/helper/".concat(t), {
                            method: "GET",
                            headers: O,
                          })
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        },
        j = a(33),
        k = a(106),
        C = [
          "Andaman and Nicobar Islands",
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chandigarh",
          "Chhattisgarh",
          "Dadra and Nagar Haveli",
          "Daman and Diu",
          "Delhi",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jammu and Kashmir",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Ladakh",
          "Lakshadweep",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Puducherry",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal",
        ],
        P = function (e) {
          var t = e.formSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              j.a,
              {
                initialValues: {
                  name: "",
                  mobile_no: "",
                  occupation: "",
                  street: "",
                  city: "",
                  state: "",
                  family_members: 0,
                  pincode: "",
                },
                onSubmit: t,
                validateOnChange: !0,
                validateOnBlur: !0,
                validate: function (e) {
                  var t = {};
                  return (
                    e.name
                      ? (e.name.length >= 3 && e.name.length <= 30) ||
                        (t.name = "Minimum 3 characters, Maximum 30 characters")
                      : (t.name = "Name is required"),
                    e.mobile_no
                      ? 10 !== e.mobile_no.length &&
                        (t.mobile_no = "Mobile is invalid.")
                      : (t.mobile_no = "Mobile is required."),
                    e.street
                      ? e.street.length > 50 &&
                        (t.street =
                          "Street Address should be less than or equal to 50 characters.")
                      : (t.street = "Street Address is required."),
                    e.city || (t.city = "City is required."),
                    e.state || (t.state = "Address is required."),
                    e.occupation || (t.occupation = "Occupation is required."),
                    e.pincode
                      ? 6 !== e.pincode.length &&
                        (t.pincode = "Pincode is invalid.")
                      : (t.pincode = "Pincode is required."),
                    t
                  );
                },
              },
              function (e) {
                var t = e.values,
                  a = e.handleChange,
                  n = e.handleSubmit,
                  l = e.setFieldValue,
                  c = e.touched,
                  s = e.errors,
                  o = e.isSubmitting;
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(k.a.Label, null, "Name"),
                        r.a.createElement(k.a.Control, {
                          name: "name",
                          value: t.name,
                          onChange: function (e) {
                            return (
                              e.target.value.match(/^([A-Za-z]\s?)*$/) && a(e)
                            );
                          },
                          type: "text",
                        }),
                        c.name &&
                          s.name &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.name
                          )
                      )
                    ),
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(k.a.Label, null, "Occupation"),
                        r.a.createElement(k.a.Control, {
                          name: "occupation",
                          value: t.occupation,
                          type: "text",
                          onChange: function (e) {
                            return e.target.value.match(/^[A-Za-z]*$/) && a(e);
                          },
                        }),
                        c.occupation &&
                          s.occupation &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.occupation
                          )
                      )
                    )
                  ),
                  r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(k.a.Label, null, "Mobile"),
                        r.a.createElement(k.a.Control, {
                          name: "mobile_no",
                          value: t.mobile_no,
                          type: "tel",
                          maxLength: "10",
                          pattern: "[0-9]*",
                          onChange: function (e) {
                            return l(
                              "mobile_no",
                              e.target.value.replace(/\D/, "")
                            );
                          },
                        }),
                        c.mobile_no &&
                          s.mobile_no &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.mobile_no
                          )
                      )
                    ),
                    r.a.createElement(
                      i.a,
                      null,
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(
                          k.a.Label,
                          null,
                          "Family Members ",
                          r.a.createElement("small", null, "(Optional)")
                        ),
                        r.a.createElement(k.a.Control, {
                          name: "family_members",
                          onChange: function (e) {
                            return l(
                              "family_members",
                              e.target.value.replace(/\D/, "")
                            );
                          },
                          type: "text",
                          pattern: "[0-9]*",
                          min: 0,
                          max: 9,
                          maxLength: 1,
                          value: t.family_members,
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(
                          k.a.Label,
                          { className: "d-block w-100" },
                          "Street Address"
                        ),
                        r.a.createElement(k.a.Control, {
                          name: "street",
                          value: t.street,
                          onChange: function (e) {
                            return l(
                              "street",
                              e.target.value.replace(/[^a-zA-Z0-9, ]/, "")
                            );
                          },
                          type: "text",
                        }),
                        c.street &&
                          s.street &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.street
                          )
                      )
                    ),
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(
                          k.a.Label,
                          { className: "d-block w-100" },
                          "City"
                        ),
                        r.a.createElement(k.a.Control, {
                          name: "city",
                          value: t.city,
                          onChange: function (e) {
                            return (
                              e.target.value.match(/^([A-Za-z]\s?)*$/) && a(e)
                            );
                          },
                          type: "text",
                        }),
                        c.city &&
                          s.city &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.city
                          )
                      )
                    )
                  ),
                  r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(
                          k.a.Label,
                          { className: "d-block w-100" },
                          "State"
                        ),
                        r.a.createElement(
                          k.a.Control,
                          {
                            as: "select",
                            defaultValue: "",
                            onChange: a,
                            name: "state",
                          },
                          r.a.createElement(
                            "option",
                            { value: "" },
                            "Select State"
                          ),
                          C.map(function (e, t) {
                            return r.a.createElement(
                              "option",
                              { key: t, value: e },
                              e
                            );
                          })
                        ),
                        c.state &&
                          s.state &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.state
                          )
                      )
                    ),
                    r.a.createElement(
                      i.a,
                      { md: 6 },
                      r.a.createElement(
                        k.a.Group,
                        null,
                        r.a.createElement(
                          k.a.Label,
                          { className: "d-block w-100" },
                          "Pincode"
                        ),
                        r.a.createElement(k.a.Control, {
                          value: t.pincode,
                          onChange: function (e) {
                            l("pincode", e.target.value.replace(/\D/, ""));
                          },
                          name: "pincode",
                          maxLength: "6",
                          type: "tel",
                        }),
                        c.pincode &&
                          s.pincode &&
                          r.a.createElement(
                            "div",
                            { className: "text-sm text-danger" },
                            s.pincode
                          )
                      )
                    )
                  ),
                  r.a.createElement(
                    u.a,
                    {
                      disabled: o,
                      type: "submit",
                      onClick: n,
                      variant: "primary",
                    },
                    r.a.createElement("strong", null, " Submit help")
                  )
                );
              }
            )
          );
        },
        T = function () {
          var e = Object(n.useState)(null),
            t = Object(s.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)(null),
            o = Object(s.a)(c, 2),
            d = o[0],
            p = o[1],
            h = Object(n.useState)(!0),
            E = Object(s.a)(h, 2),
            b = E[0],
            g = E[1];
          return r.a.createElement(
            m.a,
            { className: "py-5", id: "askforhelp" },
            r.a.createElement(
              i.a,
              { md: 9, sm: 12, className: "mx-auto" },
              r.a.createElement(
                "h4",
                { className: "text-center font-weight-bold text-dark py-4" },
                "Submit your details to get help"
              ),
              a && r.a.createElement(f.a, { variant: "danger" }, a),
              d && r.a.createElement(f.a, { variant: "success" }, d),
              b
                ? r.a.createElement(P, {
                    formSubmit: function (e, t) {
                      var a = t.setSubmitting;
                      a(!0),
                        l(null),
                        p(null),
                        S.addPerson(e)
                          .then(function (e) {
                            if ((console.log(e), "Success" === e.status))
                              p("Help submitted succesfully."), g(!1);
                            else if ("Failed" === e.status) {
                              for (
                                var t = "", a = 0, n = Object.entries(e.errors);
                                a < n.length;
                                a++
                              ) {
                                var r = Object(s.a)(n[a], 1)[0];
                                t += "".concat(r, ", ");
                              }
                              l(t);
                            }
                          })
                          .catch(function (e) {
                            l("Error Processing request, try again later.");
                          })
                          .finally(function () {
                            a(!1);
                          });
                    },
                  })
                : r.a.createElement(
                    "div",
                    { className: "text-center" },
                    r.a.createElement(
                      u.a,
                      {
                        variant: "primary",
                        onClick: function () {
                          g(!0), l(null), p(null);
                        },
                      },
                      r.a.createElement("strong", null, "Submit another help")
                    )
                  )
            )
          );
        },
        A = a(14),
        H = function (e) {
          var t = e.data,
            a = e.onHelpPress,
            n = t.name,
            l = t.occupation,
            c = t.street,
            s = t.city;
          return r.a.createElement(
            i.a,
            { className: "mb-3" },
            r.a.createElement(
              m.a,
              {
                className:
                  "bg-white border border rounded align-items-center py-2",
              },
              r.a.createElement(
                i.a,
                { sm: 9 },
                r.a.createElement(
                  "div",
                  { className: "" },
                  r.a.createElement(
                    "h5",
                    { className: "font-weight-bold mb-0" },
                    n
                  ),
                  r.a.createElement(
                    "div",
                    { className: "text-accent text-sm" },
                    l
                  ),
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-between" },
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      c + " " + s
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("strong", null, "5km")
                    )
                  )
                )
              ),
              r.a.createElement(
                i.a,
                { sm: 3 },
                r.a.createElement(
                  "div",
                  { className: "text-right" },
                  r.a.createElement(
                    u.a,
                    {
                      variant: "outline-success",
                      size: "sm",
                      onClick: function () {
                        a(t);
                      },
                      className: "w-100",
                    },
                    r.a.createElement("strong", null, "Help")
                  )
                )
              )
            )
          );
        },
        G = a(105),
        L = function (e) {
          var t = e.showModal,
            a = e.handleClose,
            l = e.item,
            c = e.onSave,
            o = Object(n.useState)(!1),
            m = Object(s.a)(o, 2),
            i = m[0],
            d = m[1],
            p = Object(n.createRef)(),
            h = l || {},
            E = h.name,
            f = h.mobile_no,
            b = h.family_members,
            g = h.occupation,
            v = h.street,
            x = h.city,
            N = h.state,
            y = h.id;
          return r.a.createElement(
            G.a,
            { show: t, onHide: a },
            r.a.createElement(
              G.a.Header,
              { closeButton: !0 },
              r.a.createElement(G.a.Title, null, "Person Details")
            ),
            r.a.createElement(
              G.a.Body,
              null,
              r.a.createElement(
                "div",
                { className: "", ref: p },
                r.a.createElement(
                  "h5",
                  { className: "font-weight-bold mb-0" },
                  E
                ),
                r.a.createElement(
                  "div",
                  { className: "text-accent text-sm" },
                  g
                ),
                r.a.createElement(
                  "div",
                  { className: "text-dark font-weight-bold" },
                  f
                ),
                r.a.createElement(
                  "div",
                  { className: "text-dark" },
                  b,
                  " Family members"
                ),
                r.a.createElement(
                  "div",
                  { className: "d-flex justify-content-between" },
                  r.a.createElement(
                    "div",
                    { className: "text-muted" },
                    v + " " + x + ", " + N
                  ),
                  r.a.createElement("div", null)
                )
              )
            ),
            r.a.createElement(
              G.a.Footer,
              null,
              r.a.createElement(
                u.a,
                { variant: "secondary", onClick: a },
                r.a.createElement("strong", null, "Close")
              ),
              r.a.createElement(
                u.a,
                {
                  variant: "primary",
                  onClick: function () {
                    var e = p.current.innerText;
                    navigator.clipboard.writeText(e).then(function (e) {
                      d(!0), c(y);
                    });
                  },
                },
                r.a.createElement("strong", null, i ? "Copied" : "Copy Details")
              )
            )
          );
        },
        M = (a(77), Object(n.createContext)(null)),
        F = a(48),
        _ = a.n(F),
        q = function () {
          var e = Object(n.useContext)(M).user,
            t = Object(n.useState)(!0),
            a = Object(s.a)(t, 2),
            l = a[0],
            c = a[1],
            o = Object(n.useState)(!1),
            d = Object(s.a)(o, 2),
            p = d[0],
            E = d[1],
            f = Object(n.useState)([]),
            b = Object(s.a)(f, 2),
            g = b[0],
            v = b[1],
            x = Object(n.useState)({}),
            N = Object(s.a)(x, 2),
            y = N[0],
            w = N[1],
            O = Object(n.useState)(null),
            j = Object(s.a)(O, 2),
            k = j[0],
            C = j[1],
            P = Object(n.useState)(null),
            T = Object(s.a)(P, 2),
            A = T[0],
            G = T[1],
            F = Object(n.useState)(!1),
            q = Object(s.a)(F, 2),
            I = q[0],
            D = q[1],
            z = Object(n.useState)(null),
            V = Object(s.a)(z, 2),
            J = V[0],
            B = V[1];
          r.a.useEffect(
            function () {
              y.coords &&
                (function () {
                  C(null), G(null);
                  var e = y.coords || {},
                    t = e.latitude,
                    a = e.longitude;
                  S.getNearbyPerson({ latitude: t, longitude: a })
                    .then(function (e) {
                      "Success" === e.status
                        ? (v(e.data), e.data.length || C("No people found."))
                        : C("Error finding persons.");
                    })
                    .catch(function (e) {
                      return C("Error finding persons.");
                    })
                    .finally(function () {
                      E(!1);
                    });
                })();
            },
            [y.coords]
          );
          var U = function (e, t) {
            console.log("GET POSTITON"),
              navigator.geolocation || t("Location not available"),
              navigator.geolocation &&
                navigator.geolocation.getCurrentPosition(e, function (e) {
                  t(e.message), E(!1);
                });
          };
          return r.a.createElement(
            r.a.Fragment,
            null,
            I &&
              r.a.createElement(L, {
                showModal: I,
                handleClose: function () {
                  D(!1);
                },
                onSave: function (t) {
                  S.doHelp(t, e)
                    .then(function (e) {
                      "Success" === e.status
                        ? G(
                            "Wonderful, you can now contact person to help him."
                          )
                        : C("Oops, There is problem somewhere.");
                    })
                    .catch(function (e) {
                      return C("Some error has occured.");
                    });
                },
                item: J,
              }),
            r.a.createElement(
              m.a,
              { className: "py-5" },
              r.a.createElement(
                i.a,
                { md: 9, sm: 12, className: "text-center  mx-auto " },
                r.a.createElement("h4", null, "People looking for help"),
                e
                  ? !p &&
                      r.a.createElement(
                        u.a,
                        {
                          className: "mt-3",
                          variant: "primary",
                          onClick: function () {
                            E(!0),
                              c(!1),
                              navigator &&
                                navigator.permissions &&
                                navigator.permissions
                                  .query({ name: "geolocation" })
                                  .then(function (e) {
                                    "granted" === e.state ||
                                    "prompt" === e.state
                                      ? U(w, C)
                                      : "denied" === e.state &&
                                        (C(
                                          "Please enable location access in site setting."
                                        ),
                                        E(!1));
                                  });
                          },
                        },
                        r.a.createElement(
                          "strong",
                          null,
                          g.length ? "Refresh" : "Find people"
                        )
                      )
                  : r.a.createElement(
                      h.b,
                      { to: "/adduser?c=helpothers" },
                      r.a.createElement(
                        u.a,
                        { variant: "accent" },
                        r.a.createElement("strong", null, "Login to Help")
                      )
                    )
              )
            ),
            r.a.createElement(
              m.a,
              null,
              r.a.createElement(
                i.a,
                { md: 9, sm: 12, className: "mx-auto" },
                r.a.createElement(
                  "div",
                  { className: "text-center" },
                  k && r.a.createElement("h6", { className: "text-danger" }, k),
                  A && r.a.createElement("h6", { className: "text-success" }, A)
                )
              ),
              r.a.createElement(
                i.a,
                { md: 9, className: "mt-4 mx-auto" },
                r.a.createElement(
                  _.a,
                  { type: "text", row: 4, ready: !p, showLoadingAnimation: !0 },
                  p
                    ? ""
                    : g.length
                    ? g.map(function (t, a) {
                        return r.a.createElement(H, {
                          data: t,
                          key: a,
                          onHelpPress: function () {
                            var a;
                            (a = t),
                              e
                                ? (D(!0), B(a))
                                : (window.location.href =
                                    "adduser?c=helpothers");
                          },
                        });
                      })
                    : !l && ""
                )
              )
            )
          );
        },
        I = a(108),
        D = a(107),
        z = function () {
          var e = Object(n.useState)(new Date()),
            t = Object(s.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useContext)(M).user;
          return (
            r.a.useEffect(
              function () {
                setTimeout(function () {
                  l(new Date());
                }, 1e3);
              },
              [a]
            ),
            r.a.createElement(
              I.a,
              {
                expand: "md",
                variant: "light",
                bg: "white",
                className: "border-bottom border-light",
              },
              r.a.createElement(
                h.b,
                { to: "/" },
                r.a.createElement(
                  I.a.Brand,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "d-flex align-items-center" },
                    r.a.createElement("img", {
                      src: p.a,
                      width: "50",
                      alt: "Helping Hands ",
                    }),
                    r.a.createElement(
                      "strong",
                      { className: "m-0 ml-3 text-danger font-weight-bold" },
                      "Helping Hands"
                    )
                  )
                )
              ),
              r.a.createElement(I.a.Toggle, {
                "aria-controls": "basic-navbar-nav",
              }),
              r.a.createElement(
                I.a.Collapse,
                { className: "", id: "basic-navbar-nav" },
                r.a.createElement(
                  D.a,
                  { className: "ml-auto mr-2 align-items-center" },
                  r.a.createElement(
                    h.b,
                    { to: "/askforhelp", className: "nav-link" },
                    r.a.createElement(
                      D.a.Item,
                      { className: "text-accent" },
                      r.a.createElement("strong", null, "Ask for help")
                    )
                  ),
                  r.a.createElement(
                    h.b,
                    { to: "/helpothers", className: "nav-link" },
                    r.a.createElement(
                      D.a.Item,
                      { className: "text-success" },
                      r.a.createElement("strong", null, "Help Others")
                    )
                  ),
                  c
                    ? r.a.createElement(
                        h.b,
                        { to: "/contributions", className: "nav-link" },
                        r.a.createElement(
                          D.a.Item,
                          null,
                          r.a.createElement(
                            u.a,
                            {
                              variant: "light",
                              className: "rounded-pill shadow-none",
                            },
                            r.a.createElement(
                              "strong",
                              null,
                              "Your Contributions"
                            )
                          )
                        )
                      )
                    : ""
                )
              )
            )
          );
        },
        V = a(56),
        J = a(57);
      function B() {
        var e = Object(V.a)([
          "\n  width: ",
          "px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  min-height: 340px;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n\n  &::-webkit-scrollbar {\n    opacity: 0;\n    display: none;\n  }\n",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = Object(V.a)([
          "\n  @media only screen and (max-width: 768px) {\n    width: 100%;\n  }\n  width: 400px;\n  min-height: 300px;\n  padding: 1.25rem;\n  border-radius: 4px;\n  margin: 0.75rem 2rem;\n  background-color: #f7f9f9;\n  display: inline-block;\n  white-space: normal;\n\n  &:nth-child(1) {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      var W = J.a.div(U()),
        R = J.a.div(B(), window.innerWidth - 32),
        Z = function () {
          return r.a.createElement(
            m.a,
            { className: "py-5" },
            r.a.createElement(
              i.a,
              { md: 9, className: "mx-auto" },
              r.a.createElement(
                "h2",
                { className: "text-center text-dark font-weight-bold" },
                "Our Helping Heros"
              )
            ),
            r.a.createElement(
              R,
              { className: "mt-5 mx-auto" },
              r.a.createElement(
                W,
                { className: "shadow-sm pt-5 px-3 pb-3" },
                r.a.createElement(
                  "div",
                  { className: "d-md-flex px-3" },
                  r.a.createElement(
                    "div",
                    { className: "text-center" },
                    r.a.createElement("img", {
                      src: "https://picsum.photos/50",
                      className: "rounded-pill img-fluid text-center",
                      width: "80",
                      alt: "",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "ml-md-3 d-md-flex flex-column align-items-start justify-content-center",
                    },
                    r.a.createElement(
                      "h3",
                      { className: "text-center text-md-left" },
                      "Srinath Goswami"
                    ),
                    r.a.createElement(
                      "h6",
                      { className: "text-center text-md-left" },
                      "Ceo, Future Groups"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "p-3 text-center text-md-left" },
                  r.a.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis inventore nesciunt? Molestiae rerum, vel enim a vitae, reprehenderit recusandae."
                  )
                )
              ),
              r.a.createElement(
                W,
                { className: "shadow-sm pt-5 px-3 pb-3" },
                r.a.createElement(
                  "div",
                  { className: "d-md-flex px-3" },
                  r.a.createElement(
                    "div",
                    { className: "text-center" },
                    r.a.createElement("img", {
                      src: "https://picsum.photos/50",
                      className: "rounded-pill img-fluid text-center",
                      width: "80",
                      alt: "",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "ml-md-3 d-md-flex flex-column align-items-start justify-content-center",
                    },
                    r.a.createElement(
                      "h3",
                      { className: "text-center text-md-left" },
                      "Srinath Goswami"
                    ),
                    r.a.createElement(
                      "h6",
                      { className: "text-center text-md-left" },
                      "Ceo, Future Groups"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "p-3 text-center text-md-left" },
                  r.a.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis inventore nesciunt? Molestiae rerum, vel enim a vitae, reprehenderit recusandae."
                  )
                )
              ),
              r.a.createElement(
                W,
                { className: "shadow-sm pt-5 px-3 pb-3" },
                r.a.createElement(
                  "div",
                  { className: "d-md-flex px-3" },
                  r.a.createElement(
                    "div",
                    { className: "text-center" },
                    r.a.createElement("img", {
                      src: "https://picsum.photos/50",
                      className: "rounded-pill img-fluid text-center",
                      width: "80",
                      alt: "",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "ml-md-3 d-md-flex flex-column align-items-start justify-content-center",
                    },
                    r.a.createElement(
                      "h3",
                      { className: "text-center text-md-left" },
                      "Srinath Goswami"
                    ),
                    r.a.createElement(
                      "h6",
                      { className: "text-center text-md-left" },
                      "Ceo, Future Groups"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "p-3 text-center text-md-left" },
                  r.a.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis inventore nesciunt? Molestiae rerum, vel enim a vitae, reprehenderit recusandae."
                  )
                )
              ),
              r.a.createElement(
                W,
                { className: "shadow-sm pt-5 px-3 pb-3" },
                r.a.createElement(
                  "div",
                  { className: "d-md-flex px-3" },
                  r.a.createElement(
                    "div",
                    { className: "text-center" },
                    r.a.createElement("img", {
                      src: "https://picsum.photos/50",
                      className: "rounded-pill img-fluid text-center",
                      width: "80",
                      alt: "",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "ml-md-3 d-md-flex flex-column align-items-start justify-content-center",
                    },
                    r.a.createElement(
                      "h3",
                      { className: "text-center text-md-left" },
                      "Srinath Goswami"
                    ),
                    r.a.createElement(
                      "h6",
                      { className: "text-center text-md-left" },
                      "Ceo, Future Groups"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "p-3 text-center text-md-left" },
                  r.a.createElement(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis inventore nesciunt? Molestiae rerum, vel enim a vitae, reprehenderit recusandae."
                  )
                )
              )
            )
          );
        },
        $ = function (e) {
          var t = e.formSubmit;
          return r.a.createElement(
            j.a,
            {
              initialValues: { name: "", mobile: "" },
              validate: function (e) {
                var t = {};
                return (
                  e.name || (t.name = "Name is required."),
                  e.mobile
                    ? 10 !== e.mobile.length && (t.mobile = "Invalid mobile.")
                    : (t.mobile = "Mobile is required."),
                  t
                );
              },
              onSubmit: t,
            },
            function (e) {
              var t = e.values,
                a = e.touched,
                n = e.errors,
                l = e.isSubmitting,
                c = e.handleChange,
                s = e.handleSubmit,
                o = e.setFieldValue;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  k.a.Group,
                  null,
                  r.a.createElement(k.a.Label, null, "Name"),
                  r.a.createElement(k.a.Control, {
                    name: "name",
                    value: t.name,
                    type: "text",
                    onChange: function (e) {
                      return e.target.value.match(/^([A-Za-z]\s?)*$/) && c(e);
                    },
                    required: !0,
                  }),
                  a.name &&
                    n.name &&
                    r.a.createElement(
                      "div",
                      { className: "text-sm text-danger" },
                      n.name
                    )
                ),
                r.a.createElement(
                  k.a.Group,
                  null,
                  r.a.createElement(k.a.Label, null, "Mobile"),
                  r.a.createElement(k.a.Control, {
                    name: "mobile",
                    value: t.mobile,
                    onChange: function (e) {
                      return o("mobile", e.target.value.replace(/\D/, ""));
                    },
                    type: "tel",
                    maxLength: 10,
                    required: !0,
                  }),
                  a.mobile &&
                    n.mobile &&
                    r.a.createElement(
                      "div",
                      { className: "text-sm text-danger" },
                      n.mobile
                    )
                ),
                r.a.createElement(
                  u.a,
                  {
                    type: "button",
                    variant: "accent",
                    className: "w-100",
                    disabled: l,
                    onClick: s,
                  },
                  r.a.createElement("strong", null, "GET OTP")
                )
              );
            }
          );
        },
        K = function (e) {
          var t = e.formSubmit,
            a = e.resendOtp,
            n = e.resending;
          return r.a.createElement(
            j.a,
            {
              initialValues: { otp: "" },
              validate: function (e) {
                var t = {};
                return (
                  e.otp
                    ? 4 !== e.otp.length && (t.otp = "OTP has 4 characters.")
                    : (t.otp = "OTP can't be empty."),
                  t
                );
              },
              onSubmit: t,
            },
            function (e) {
              var t = e.values,
                l = e.touched,
                c = e.errors,
                s = e.handleSubmit,
                o = (e.handleChange, e.setFieldValue),
                m = e.isSubmitting;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  k.a.Group,
                  null,
                  r.a.createElement(k.a.Label, null, "Enter OTP"),
                  r.a.createElement(k.a.Control, {
                    name: "otp",
                    autoComplete: "off",
                    type: "tel",
                    value: t.otp,
                    maxLength: 4,
                    onChange: function (e) {
                      return o("otp", e.target.value.replace(/[^0-9]/, ""));
                    },
                    required: !0,
                  }),
                  l.otp &&
                    c.otp &&
                    r.a.createElement(
                      "div",
                      { className: "text-sm text-danger" },
                      c.otp
                    )
                ),
                r.a.createElement(
                  u.a,
                  {
                    type: "submit",
                    variant: "primary",
                    className: "w-100",
                    onClick: s,
                    disabled: n || m,
                  },
                  r.a.createElement("strong", null, "Verify and Continue")
                ),
                r.a.createElement(
                  u.a,
                  {
                    type: "submit",
                    variant: "secondary",
                    className: "w-100 mt-3",
                    onClick: a,
                    disabled: n || m,
                  },
                  r.a.createElement("strong", null, "Resend OTP")
                )
              );
            }
          );
        },
        Y = function () {
          return Math.floor(9e3 * Math.random()) + 1e3;
        },
        Q = function (e) {
          var t = Object(A.g)().search,
            a = Object(n.useState)({ name: "", mobile: "" }),
            l = Object(s.a)(a, 2),
            c = l[0],
            o = l[1],
            u = Object(n.useState)(!1),
            d = Object(s.a)(u, 2),
            p = d[0],
            h = d[1],
            E = Object(n.useState)(0),
            b = Object(s.a)(E, 2),
            g = b[0],
            v = b[1],
            N = Object(n.useState)(null),
            y = Object(s.a)(N, 2),
            w = y[0],
            O = y[1],
            j = Object(n.useState)(null),
            k = Object(s.a)(j, 2),
            C = k[0],
            P = k[1],
            T = Object(n.useState)(null),
            H = Object(s.a)(T, 2),
            G = H[0],
            L = H[1],
            F = Object(n.useContext)(M),
            _ = F.user,
            q = F.setUser,
            I = Object(n.useState)(!1),
            D = Object(s.a)(I, 2),
            z = D[0],
            V = D[1];
          return _
            ? r.a.createElement(A.a, { to: "/" })
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  m.a,
                  { className: "py-5" },
                  r.a.createElement(
                    i.a,
                    { md: "9", sm: "12", className: "mx-auto" },
                    r.a.createElement(
                      "h2",
                      { className: "text-center font-weight-bold" },
                      "Please fill the details to continue"
                    )
                  ),
                  r.a.createElement(
                    i.a,
                    { md: "4", sm: "12", className: "mx-auto mt-5" },
                    C && r.a.createElement(f.a, { variant: "danger" }, C),
                    G && r.a.createElement(f.a, { variant: "success" }, G),
                    p
                      ? r.a.createElement(K, {
                          formSubmit: function (e, a) {
                            var n = a.setSubmitting;
                            P(null),
                              L(null),
                              n(!0),
                              S.verifyOtp(w, e.otp)
                                .then(function (e) {
                                  "Success" === e.Status
                                    ? S.createNewHelper(c)
                                        .then(function (e) {
                                          "Success" === e.status
                                            ? (L("Authentication Successfull"),
                                              x.setAuthentication(e.data.id),
                                              q(),
                                              (window.location.href = t
                                                ? t.split("=")[1]
                                                : "/"))
                                            : P("Error processing request.");
                                        })
                                        .catch(function (e) {
                                          return P("Error processing request.");
                                        })
                                    : P("Invalid OTP entered");
                                })
                                .catch(function (e) {
                                  P(
                                    "Error proccessing request. Try again later."
                                  );
                                })
                                .finally(function () {
                                  n(!1);
                                });
                          },
                          resendOtp: function () {
                            P(null), V(!0), L(null);
                            var e = Y(),
                              t = g || e;
                            v(t),
                              S.sendOtp(c.mobile, t)
                                .then(function (e) {
                                  "Success" === e.Status
                                    ? (h(!0),
                                      O(e.Details),
                                      L("OTP sent successfully"),
                                      V(!1))
                                    : P(
                                        "Error sending otp please check mobile entered"
                                      );
                                })
                                .catch(function (e) {
                                  P(
                                    "Error proccessing request. Try again later."
                                  );
                                })
                                .finally(function () {
                                  V(!1);
                                });
                          },
                          resending: z,
                        })
                      : r.a.createElement($, {
                          formSubmit: function (e, t) {
                            var a = t.setSubmitting;
                            P(null), a(!0), o(e);
                            var n = Y(),
                              r = g || n;
                            v(r),
                              S.sendOtp(e.mobile, r)
                                .then(function (e) {
                                  "Success" === e.Status
                                    ? (L("OTP sent successfully"),
                                      h(!0),
                                      O(e.Details))
                                    : P(
                                        "Error sending otp please check mobile entered"
                                      );
                                })
                                .catch(function (e) {
                                  P(
                                    "Error proccessing request. Try again later."
                                  );
                                })
                                .finally(function () {
                                  a(!1);
                                });
                          },
                        })
                  )
                )
              );
        },
        X = function (e) {
          var t = e.data,
            a = t.name,
            n = t.street,
            l = t.city;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "border p-3 mb-3" },
              r.a.createElement("h4", { className: "font-weight-bold" }, a),
              r.a.createElement("div", null, n + " " + l)
            )
          );
        },
        ee = function () {
          var e = Object(n.useState)([]),
            t = Object(s.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)(!1),
            o = Object(s.a)(c, 2),
            u = o[0],
            d = o[1],
            p = Object(n.useState)(null),
            E = Object(s.a)(p, 2),
            b = E[0],
            g = E[1],
            v = Object(n.useContext)(M).user;
          return (
            r.a.useEffect(
              function () {
                v &&
                  (d(!0),
                  S.getHelpDone(v)
                    .then(function (e) {
                      "Success" === e.status
                        ? l(e.data.to)
                        : g("Unable to get contributions");
                    })
                    .catch(function (e) {
                      g("Unable to get contributions");
                    })
                    .finally(function () {
                      d(!1);
                    }));
              },
              [a.length, v]
            ),
            v
              ? r.a.createElement(
                  m.a,
                  { className: "py-5" },
                  r.a.createElement(
                    i.a,
                    { md: 9, className: "mx-auto text-center" },
                    r.a.createElement(
                      "h2",
                      { className: "font-weight-bold" },
                      "Your Contributions"
                    ),
                    u || 0 !== a.length
                      ? r.a.createElement(
                          "h6",
                          { className: "text-muted" },
                          "We are very blessed for your contribution. Please make your continous support."
                        )
                      : r.a.createElement(
                          "h6",
                          { className: "text-muted" },
                          "It looks like you don't have any contributions,",
                          " ",
                          r.a.createElement(
                            h.b,
                            { to: "helpothers" },
                            "Contribute Now by Helping others"
                          )
                        )
                  ),
                  r.a.createElement(
                    i.a,
                    { md: 6, className: "mx-auto mt-4" },
                    b && r.a.createElement(f.a, { variant: "danger" }, b),
                    r.a.createElement(
                      _.a,
                      {
                        type: "text",
                        ready: !u,
                        rows: 3,
                        showLoadingAnimation: !0,
                      },
                      a.length
                        ? a.map(function (e, t) {
                            return r.a.createElement(X, { data: e, key: t });
                          })
                        : ""
                    )
                  )
                )
              : r.a.createElement(A.a, { to: "/adduser" })
          );
        },
        te = function () {
          return r.a.createElement(
            "div",
            { className: "text-center mt-5 py-5" },
            r.a.createElement(
              "h1",
              {
                style: { fontSize: "5rem" },
                className: "text-muted text-center",
              },
              "404"
            ),
            r.a.createElement("h2", null, "Page not found"),
            r.a.createElement(
              h.b,
              { to: "/" },
              r.a.createElement(
                u.a,
                { variant: "accent", className: "mt-3" },
                r.a.createElement("strong", null, "Go to home")
              )
            )
          );
        };
      a(98);
      var ae = function () {
        var e = Object(n.useState)(x.isAuthenticated()),
          t = Object(s.a)(e, 2),
          a = t[0],
          l = t[1];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            M.Provider,
            {
              value: {
                user: a,
                setUser: function () {
                  l(x.isAuthenticated());
                },
              },
            },
            r.a.createElement(
              h.a,
              null,
              r.a.createElement(z, null),
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(
                  A.d,
                  null,
                  r.a.createElement(
                    A.b,
                    { path: "/", exact: !0 },
                    r.a.createElement(E, null),
                    r.a.createElement(Z, null)
                  ),
                  r.a.createElement(
                    A.b,
                    { path: "/askforhelp" },
                    r.a.createElement(T, null)
                  ),
                  r.a.createElement(
                    A.b,
                    { path: "/helpothers" },
                    r.a.createElement(q, null)
                  ),
                  r.a.createElement(
                    A.b,
                    { path: "/adduser" },
                    r.a.createElement(Q, null)
                  ),
                  r.a.createElement(
                    A.b,
                    { path: "/contributions" },
                    r.a.createElement(ee, null)
                  ),
                  r.a.createElement(
                    A.b,
                    { path: "/" },
                    r.a.createElement(te, null)
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "mt-5 py-5" },
                r.a.createElement(
                  "h5",
                  { className: "text-center" },
                  "Developed with ",
                  r.a.createElement(
                    "span",
                    { className: "text-danger" },
                    "\u2665"
                  ),
                  " by a small team."
                )
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(ae, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[79, 1, 2]],
]);
//# sourceMappingURL=main.42731527.chunk.js.map
