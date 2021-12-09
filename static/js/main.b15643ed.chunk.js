(this["webpackJsonpreact-ip-tracker"]=this["webpackJsonpreact-ip-tracker"]||[]).push([[0],{25:function(n,e,t){},27:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,b,p,h=t(0),j=t.n(h),l=t(10),u=t.n(l),x=(t(25),t(12)),f=t.n(x),m=t(17),O=t(2),g=(t(27),t(3)),w=t(4),v=w.b.div(i||(i=Object(g.a)(["\n  padding-top: 1.2em;\n  width: 100%;\n"]))),y=w.b.h1(a||(a=Object(g.a)(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.5rem;\n"]))),k=t(1),z=function(n){var e=n.text;return Object(k.jsx)(v,{children:Object(k.jsx)(y,{children:e})})},S=w.b.div(r||(r=Object(g.a)(["\n  width: 100%;\n  position: absolute;\n  padding: 1.5em 1em;\n"]))),I=w.b.div(o||(o=Object(g.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  background: #fff;\n  width: 100%;\n  max-width: 1100px;\n  padding: 1.5em;\n  margin: 0 auto;\n  border-radius: 15px;\n  z-index: 4;\n\n  @media (min-width: 768px) {\n    flex-flow: row;\n    padding: 2em;\n\n    section {\n      width: 25%;\n      text-align: start;\n\n      p {\n        font-size: 1.4em;\n      }\n\n      h3 {\n        font-size: 14px;\n      }\n    }\n\n    section + section {\n      border-left: 1px solid var(--Dark-Gray);\n      padding: 1.5em;\n    }\n  }\n"]))),D=w.b.section(c||(c=Object(g.a)(["\n  text-align: center;\n  width: 100%;\n\n  h3 {\n    font-size: 10px;\n    color: var(--Dark-Gray);\n    padding-block-end: 0.7em;\n  }\n\n  p {\n    font-size: 1em;\n    font-weight: 500;\n  }\n\n  .bottom {\n    padding-block-end: 1em;\n  }\n\n  & + & {\n    padding: 0;\n\n    @media (min-width: 425px) {\n      padding: 0 1.5em;\n    }\n  }\n\n  @media (min-width: 425px) and (max-width: 768px) {\n    p {\n      font-size: 1.3rem;\n    }\n  }\n"]))),C=function(n){var e=n.state;return Object(k.jsx)(S,{children:Object(k.jsxs)(I,{children:[Object(k.jsxs)(D,{children:[Object(k.jsx)("h3",{children:"IP ADDRESS"}),Object(k.jsxs)("p",{className:"bottom",children:[" ",e.ip]})]}),Object(k.jsxs)(D,{children:[Object(k.jsx)("h3",{children:"LOCATION"}),Object(k.jsxs)("p",{className:"bottom",children:[" ",e.location," "]})]}),Object(k.jsxs)(D,{children:[Object(k.jsx)("h3",{children:"TIMEZONE"}),Object(k.jsxs)("p",{className:"bottom",children:[" ",e.timezone," "]})]}),Object(k.jsxs)(D,{children:[Object(k.jsx)("h3",{children:"ISP"}),Object(k.jsxs)("p",{children:[" ",e.isp," "]})]})]})})},N=t.p+"static/media/icon-arrow.2eaaa5ee.svg",A=w.b.div(s||(s=Object(g.a)(["\n  width: 100%;\n  margin: 20px 0;\n  padding: 0 1em;\n"]))),E=w.b.div(d||(d=Object(g.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n\n  input {\n    width: inherit;\n    outline: none;\n    border: none;\n    height: 55px;\n    padding: 0 60px 0 25px;\n    border-radius: 12px;\n    cursor: pointer;\n\n    :focus {\n      outline: none;\n    }\n  }\n"]))),F=w.b.button(b||(b=Object(g.a)(["\n  position: absolute;\n  background: var(--Very-Dark-Gray);\n  color: #fff;\n  border: none;\n  height: 55px;\n  width: 60px;\n  right: 0;\n  cursor: pointer;\n  border-radius: 0 12px 12px 0;\n\n  ::before {\n    content: url(",");\n  }\n  :hover {\n    background: hsl(0, 0%, 25%);\n  }\n"])),N),P=function(n){var e=n.onSubmit,t=Object(h.useState)(""),i=Object(O.a)(t,2),a=i[0],r=i[1];return Object(k.jsx)(A,{children:Object(k.jsxs)(E,{children:[Object(k.jsx)("input",{type:"text",placeholder:"Enter IP Address",value:a,onChange:function(n){r(n.target.value)}}),Object(k.jsx)(F,{onClick:function(){e(a)}})]})})},T=t(36),G=t(38),V=t(37),L=function(n){var e=n.coordinates,t=Object(h.useState)(null),i=Object(O.a)(t,2),a=i[0],r=i[1],o=[e.latitude,e.longitude];return a&&a.flyTo(o),Object(k.jsxs)(T.a,{center:o,zoom:13,style:{position:"relative",width:"inherit",height:"100vh",zIndex:"-1",top:"87px"},zoomControl:!1,whenCreated:r,children:[Object(k.jsx)(G.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(k.jsx)(V.a,{position:o,className:"marker"})]})},M=t.p+"static/media/pattern-bg.a60a3c85.png",B=Object(w.a)(p||(p=Object(g.a)(["\n    :root {\n        --Very-Dark-Gray: hsl(0, 0%, 17%);\n        --Dark-Gray: hsl(0, 0%, 59%);\n        --Font-Size: 18px;\n        font-size: var(--Font-Size);\n    }\n\n    *,\n    ::before,\n    ::after {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html,\n    body {\n        height: 100%;\n        min-height: 100%;\n    }\n\n    body {\n        background: url(",") no-repeat top center;\n        ","\n        font-family: 'Rubik', sans-serif;\n        -webkit-font-smoothing: antialiased;\n\n        @media (min-width: 425px) {\n            overflow: hidden;\n            }\n    }\n\n    input {\n        font: inherit;\n    }\n\n    p,h1,h2,h3,h4,h5,h6 {\n        overflow-wrap: break-word;\n    }\n"])),M,"");var J=function(){var n=Object(h.useState)({ip:"",location:"",timezone:"",isp:""}),e=Object(O.a)(n,2),t=e[0],i=e[1],a=Object(h.useState)(""),r=Object(O.a)(a,2),o=r[0],c=r[1],s=Object(h.useState)({latitude:"",longitude:""}),d=Object(O.a)(s,2),b=d[0],p=d[1];return Object(h.useEffect)((function(){var n="https://geo.ipify.org/api/v2/country?apiKey=at_1eOwaoyynv2OrKjDZSIHyo0VvVlnf&ipAddress=".concat(o),e=function(){var n=Object(m.a)(f.a.mark((function n(e){var t,a,r,o,c,s,d,b,h,j;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return n.next=4,n.sent.json();case 4:return t=n.sent,a=t.ip,r=t.location.region,o=t.location.timezone,c=t.isp,i({ip:a,location:r,timezone:o,isp:c}),"d7cb34113fd755abda85adc2bfdf5aba",s="http://api.positionstack.com/v1/reverse?access_key=".concat("d7cb34113fd755abda85adc2bfdf5aba","&query=").concat(a),n.next=14,fetch(s);case 14:return n.next=16,n.sent.json();case 16:d=n.sent,b=d.data[0],h=b.latitude,j=b.longitude,p({latitude:h,longitude:j});case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e(n)}),[o]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(z,{text:"IP Address Tracker"}),Object(k.jsx)(P,{onSubmit:function(n){c(n)}}),Object(k.jsx)(C,{state:t})]}),Object(k.jsx)(L,{coordinates:b}),Object(k.jsx)(B,{})]})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};u.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(J,{})}),document.getElementById("root")),K()}},[[33,1,2]]]);
//# sourceMappingURL=main.b15643ed.chunk.js.map