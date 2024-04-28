"use strict";(self.webpackChunkbesiege_modern_mod_docs=self.webpackChunkbesiege_modern_mod_docs||[]).push([[6300],{5719:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(4848),i=o(8453);const s={sidebar_position:7},r="REG",c={id:"logic-units/REG",title:"REG",description:"REG",source:"@site/docs/logic-units/REG.md",sourceDirName:"logic-units",slug:"/logic-units/REG",permalink:"/Besiege-Modern-Docs/docs/logic-units/REG",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"UNPACKER",permalink:"/Besiege-Modern-Docs/docs/logic-units/UNPACKER"},next:{title:"MUX",permalink:"/Besiege-Modern-Docs/docs/logic-units/MUX"}},d={},l=[{value:"Input Ports",id:"input-ports",level:2},{value:"Control Ports",id:"control-ports",level:2},{value:"Clock Trigger Mode",id:"clock-trigger-mode",level:3},{value:"Output Ports",id:"output-ports",level:2},{value:"Function",id:"function",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"reg",children:"REG"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"REG",src:o(9683).A+"",width:"172",height:"117"})}),"\n",(0,t.jsx)(n.p,{children:"Stands for register."}),"\n",(0,t.jsx)(n.p,{children:"Memorize the input signal as a variable and output the contained variable."}),"\n",(0,t.jsx)(n.h2,{id:"input-ports",children:"Input Ports"}),"\n",(0,t.jsxs)(n.p,{children:["There is one input port ",(0,t.jsx)(n.code,{children:"i1"}),", with the type of ",(0,t.jsx)(n.code,{children:"any"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"control-ports",children:"Control Ports"}),"\n",(0,t.jsxs)(n.p,{children:["There are two control ports, ",(0,t.jsx)(n.code,{children:"c1"})," and ",(0,t.jsx)(n.code,{children:"c2"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"c1"})," is the clock signal that will trigger the storage operation. ",(0,t.jsx)(n.code,{children:"bool"})," type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"c2"})," is the load signal that controls whether the unit should load data from ",(0,t.jsx)(n.code,{children:"i1"}),". ",(0,t.jsx)(n.code,{children:"bool"})," type."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"clock-trigger-mode",children:"Clock Trigger Mode"}),"\n",(0,t.jsx)(n.p,{children:"In the mapper of REG, there is a menu for the selection of trigger mode."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"posedge"}),": when the signal of ",(0,t.jsx)(n.code,{children:"c1"})," turns from false to true, the storage operation is triggered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"negedge"}),": when the signal of ",(0,t.jsx)(n.code,{children:"c1"})," turns from true to false, the storage operation is triggered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pos/neg"}),": sum set of ",(0,t.jsx)(n.code,{children:"posedge"})," and ",(0,t.jsx)(n.code,{children:"negedge"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"output-ports",children:"Output Ports"}),"\n",(0,t.jsxs)(n.p,{children:["There is one output port ",(0,t.jsx)(n.code,{children:"o1"}),", with type of ",(0,t.jsx)(n.code,{children:"any"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"function",children:"Function"}),"\n",(0,t.jsxs)(n.p,{children:["Once the storage operation is triggered, REG will see the value of ",(0,t.jsx)(n.code,{children:"c1"}),"(load). If true, REG will read the signal of ",(0,t.jsx)(n.code,{children:"i1"})," and set ",(0,t.jsx)(n.code,{children:"o1"})," with the same value."]}),"\n",(0,t.jsx)(n.p,{children:"If false, REG will do nothing."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9683:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/REG-bd07ae4ae740db08adefd9168f95b550.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);