(this["webpackJsonpgk-frontend"]=this["webpackJsonpgk-frontend"]||[]).push([[0],{23:function(e,a,t){},4:function(e,a,t){e.exports={TopBarContainer:"TopBar_TopBarContainer__1HgJ-",TopBar:"TopBar_TopBar__1V1dH",Name:"TopBar_Name__396_a",Title:"TopBar_Title__1BSwN",Date:"TopBar_Date__2Gn6m"}},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(2),i=t.n(c),r=t(16),o=t.n(r),s=(t(23),t(3)),l=(t.p,t(17)),j=t.n(l),d=(t(42),t(4)),b=t.n(d),m=function(e){return Object(n.jsx)("div",{className:b.a.TopBarContainer,children:Object(n.jsxs)("div",{className:b.a.TopBar,children:[Object(n.jsx)("div",{className:b.a.Name,children:Object(n.jsx)("p",{children:"Przemys\u0142aw Wojtarowicz"})}),Object(n.jsx)("div",{className:b.a.Title,children:Object(n.jsx)("p",{children:"Grafika komputerowa"})}),Object(n.jsx)("div",{className:b.a.Date,children:Object(n.jsx)("p",{children:"2021"})})]})})},u=t(5),p=t.n(u),O=function(e){var a=Object(c.useState)(),t=Object(s.a)(a,2),i=t[0],r=t[1],o=Object(c.useState)("invert"),l=Object(s.a)(o,2),j=l[0],d=l[1],b=function(e){d(e.target.value)};return Object(n.jsx)("div",{className:p.a.FormContainer,children:Object(n.jsxs)("form",{className:p.a.Form,onSubmit:function(a){if(a.preventDefault(),null!=i&&null!=j){var t=new FormData;t.append("image",i),t.append("operation",j),e.OnFormSubmit(i,t)}},children:[Object(n.jsx)("label",{children:"Wybierz zdj\u0119cie:"}),Object(n.jsx)("input",{type:"file",onChange:function(e){r(e.target.files[0])}}),Object(n.jsx)("label",{className:p.a.OptionsLabel,children:"Wybierz, co chcesz zrobi\u0107 ze zdj\u0119ciem:"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"radio",checked:"invert"===j,value:"invert",name:"opChoice",onChange:b}),Object(n.jsx)("label",{for:"invert",children:"Odwr\xf3\u0107 kolory"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"radio",checked:"grayscale"===j,value:"grayscale",name:"opChoice",onChange:b}),Object(n.jsx)("label",{for:"grayscale",children:"Odcienie szaro\u015bci"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"radio",checked:"edge"===j,value:"edge",name:"opChoice",onChange:b}),Object(n.jsx)("label",{for:"edge",children:"Wykrywanie kraw\u0119dzi (Sobel)"})]}),Object(n.jsx)("input",{className:p.a.Submit,type:"submit",value:"Wy\u015blij"})]})})},g=t(6),h=t.n(g),x=function(e){var a=1==e.loading?Object(n.jsx)("div",{className:h.a.loadingScreen,children:"loading..."}):Object(n.jsx)("img",{src:"data:image/png;base64,"+e.processedImage});return Object(n.jsxs)("div",{className:h.a.ImagesContainer,children:[Object(n.jsx)("div",{className:h.a.Image,children:Object(n.jsx)("img",{src:e.originalImage})}),Object(n.jsx)("div",{className:h.a.Image,children:a})]})},f=function(){var e=Object(c.useState)(),a=Object(s.a)(e,2),t=a[0],i=a[1],r=Object(c.useState)(),o=Object(s.a)(r,2),l=o[0],d=o[1],b=Object(c.useState)(!1),u=Object(s.a)(b,2),p=u[0],g=u[1],h=function(e){g(!0),j.a.post("https://gk-backend.azurewebsites.net/image/Process",e,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST","Content-Type":"multipart/form-data"}}).then((function(e){d(e.data)})).finally((function(){g(!1)}))},f=null!=t?Object(n.jsx)(x,{originalImage:t,processedImage:l,loading:p}):null;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)(O,{OnFormSubmit:function(e,a){i(URL.createObjectURL(e)),h(a)}}),f]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),_()},5:function(e,a,t){e.exports={FormContainer:"ImageForm_FormContainer__jIV5x",Form:"ImageForm_Form__1RFtp",OptionsLabel:"ImageForm_OptionsLabel__2cj9h",Submit:"ImageForm_Submit__2ExgF"}},6:function(e,a,t){e.exports={loadingScreen:"ImageCollection_loadingScreen__1d_PJ"}}},[[43,1,2]]]);
//# sourceMappingURL=main.33dfec02.chunk.js.map