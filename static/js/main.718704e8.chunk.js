(this.webpackJsonpprimeiro_projeto_react=this.webpackJsonpprimeiro_projeto_react||[]).push([[0],{111:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,l,p,d,b,j,x=t(0),u=t.n(x),h=t(5),g=t.n(h),O=t(7),f=t(51),m=t.n(f),v=t(75),y=t(66),k=t(22),w=t.p+"static/media/gitlogo.6354bf3f.svg",z=t(13),_=t(14),S=t(47),E=_.c.h1(r||(r=Object(z.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  margin-top: 80px;\n  max-width: 450px;\n  line-height: 56px;\n"]))),F=_.c.form(o||(o=Object(z.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0 0 5px;\n    color: #3a3a3a;\n    border: 2px solid #fff;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: #04d361;\n    border-radius: 0px 5px 5px 0px;\n    border: 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"])),(function(n){return n.hasError&&Object(_.b)(c||(c=Object(z.a)(["\n    border-color: #c53030;\n    border-right: 0;\n    "])))}),Object(S.a)(.2,"#04d361")),C=_.c.span(i||(i=Object(z.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]))),G=_.c.div(a||(a=Object(z.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: white;\n    border-radius: 5px;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]))),D=t(38),I=t(70),J=t.n(I).a.create({baseURL:"https://api.github.com"}),N=t(24),R=t(2),A=function(){var n=Object(x.useState)(""),e=Object(k.a)(n,2),t=e[0],r=e[1],o=Object(x.useState)(""),c=Object(k.a)(o,2),i=c[0],a=c[1],s=Object(x.useState)((function(){var n=localStorage.getItem("@GithubExplorer: repositories");return n?JSON.parse(n):[]})),l=Object(k.a)(s,2),p=l[0],d=l[1];function b(){return(b=Object(y.a)(m.a.mark((function n(e){var o,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return a("Digite o nome autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,J.get("repos/".concat(t));case 7:o=n.sent,c=o.data,d([].concat(Object(v.a)(p),[c])),r(""),a(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),a("Erro na busca por esse reposit\xf3rio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(x.useEffect)((function(){localStorage.setItem("@GithubExplorer: repositories",JSON.stringify(p))}),[p]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("img",{src:w,alt:"Github Explorer"}),Object(R.jsx)(E,{children:"Explore Reposit\xf3rios no Github"}),Object(R.jsxs)(F,{hasError:!!i,onSubmit:function(n){return b.apply(this,arguments)},children:[Object(R.jsx)("input",{value:t,onChange:function(n){return r(n.target.value)},placeholder:"Digite o nome do reposit\xf3rio"}),Object(R.jsx)("button",{type:"submit",children:"Pesquisar"})]}),i&&Object(R.jsx)(C,{children:i}),Object(R.jsx)(G,{children:p.map((function(n){return Object(R.jsxs)(N.b,{to:"/repositories/".concat(n.full_name),children:[Object(R.jsx)("img",{src:n.owner.avatar_url,alt:n.owner.login}),Object(R.jsxs)("div",{children:[Object(R.jsx)("strong",{children:n.full_name}),Object(R.jsx)("p",{children:n.description})]}),Object(R.jsx)(D.b,{size:20})]},n.full_name)}))})]})},B=_.c.header(s||(s=Object(z.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n\na {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #a8a8b3;\n\n  &:hover {\n    color: blue;\n    transition: color 0.2s;\n  }\n\n  svg {\n    margin-right: 4px;\n  }\n}\n"]))),M=_.c.section(l||(l=Object(z.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n    }\n\n     li {\n       strong {\n         display: block;\n         font-size: 36px;\n         color: #3d3d4d;\n       }\n\n       span {\n         display: block;\n         margin-top: 4px;\n         color: #6c6c80;\n       }\n     }\n  }\n"]))),X=_.c.div(p||(p=Object(z.a)(["\n  margin-top: 80px;\n\n  a {\n    background: white;\n    border-radius: 5px;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]))),q=function(){var n=Object(O.f)().params,e=Object(x.useState)(null),t=Object(k.a)(e,2),r=t[0],o=t[1],c=Object(x.useState)([]),i=Object(k.a)(c,2),a=i[0],s=i[1];return Object(x.useEffect)((function(){J.get("repos/".concat(n.repository)).then((function(n){o(n.data)})),J.get("repos/".concat(n.repository,"/issues")).then((function(n){s(n.data)}))}),[n.repository]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(B,{children:[Object(R.jsx)("img",{src:w,alt:"Github Explorer"}),Object(R.jsxs)(N.b,{to:"/",children:[Object(R.jsx)(D.a,{size:16}),"Voltar"]})]}),r&&Object(R.jsxs)(M,{children:[Object(R.jsxs)("header",{children:[Object(R.jsx)("img",{src:r.owner.avatar_url,alt:r.owner.login}),Object(R.jsxs)("div",{children:[Object(R.jsx)("strong",{children:r.full_name}),Object(R.jsx)("p",{children:r.description})]})]}),Object(R.jsxs)("ul",{children:[Object(R.jsxs)("li",{children:[Object(R.jsx)("strong",{children:r.stargazers_count}),Object(R.jsx)("span",{children:"Stars"})]}),Object(R.jsxs)("li",{children:[Object(R.jsx)("strong",{children:r.forks_count}),Object(R.jsx)("span",{children:"Forks"})]}),Object(R.jsxs)("li",{children:[Object(R.jsx)("strong",{children:r.open_issues_count}),Object(R.jsx)("span",{children:"Issues abertos"})]})]})]}),Object(R.jsx)(X,{children:a.map((function(n){return Object(R.jsxs)("a",{href:n.html_url,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("strong",{children:n.title}),Object(R.jsx)("p",{children:n.user.login})]}),Object(R.jsx)(D.b,{size:20})]},n.id)}))})]})},L=_.c.header(d||(d=Object(z.a)(["\n  box-sizing: border-box;\n  max-width: 900px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  margin: 0px;\n  background-color: #298A53;\n  color: #fff;\n  border-radius: 5px;\n"]))),P=t(138),T=t(139),U=t(71),V=t.n(U),H=_.c.button(b||(b=Object(z.a)(["\nbackground-color: transparent;\ndisplay: flex;\ncolor: #fff;\nborder: none;\nborder-radius: 50%;\npadding: 5px;\ntransition: background-color 0.2s;\n\n&:hover {\n    background: ","\n  }\n\n\n\n"])),Object(S.a)(.1,"#298A53")),K=function(){var n=u.a.useState(null),e=Object(k.a)(n,2),t=e[0],r=e[1],o=function(){r(null)};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(H,{onClick:function(n){r(n.currentTarget)},children:Object(R.jsx)(V.a,{})}),Object(R.jsxs)(P.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:o,children:[Object(R.jsx)(T.a,{onClick:o,children:"Finalizar atendimento"}),Object(R.jsx)(T.a,{onClick:o,children:"Dados do usu\xe1rio"})]})]})},Q=function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(L,{children:["Nome do cliente",Object(R.jsx)(K,{})]})})},W=function(){return Object(R.jsxs)(O.c,{children:[Object(R.jsx)(O.a,{path:"/",exact:!0,component:A}),Object(R.jsx)(O.a,{path:"/repositories/:repository+",component:q}),Object(R.jsx)(O.a,{path:"/header",component:Q})]})},Y=t.p+"static/media/gitbackground.2b8edc72.svg",Z=Object(_.a)(j||(j=Object(z.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f0f0f5 url(",") no-repeat 70% top;\n  -font-smoothing: antialiased;\n}\n\nbody, input, button {\n  font: 16px Roboto, sans-serif;\n}\n\n#root {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n\nbutton {\n  cursor: pointer;\n}\n"])),Y),$=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(N.a,{children:Object(R.jsx)(W,{})}),Object(R.jsx)(Z,{})]})};g.a.render(Object(R.jsx)(u.a.StrictMode,{children:Object(R.jsx)($,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.718704e8.chunk.js.map