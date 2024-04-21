"use strict";(self.webpackChunkbesiege_modern_mod_docs=self.webpackChunkbesiege_modern_mod_docs||[]).push([[8861],{7674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(4848),s=t(8453);const i={sidebar_position:1},c="Unit",a={id:"basic-concepts/unit",title:"Unit",description:"Unit is the logic block that have ports, thus can be recoginzed by the circuit board.",source:"@site/docs/basic-concepts/unit.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/unit",permalink:"/Besiege-Modern-Docs/docs/basic-concepts/unit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/Besiege-Modern-Docs/docs/category/basic-concepts"},next:{title:"Port",permalink:"/Besiege-Modern-Docs/docs/basic-concepts/port"}},r={},d=[{value:"Off-board / On-board Mode",id:"off-board--on-board-mode",level:2},{value:"Behaviour",id:"behaviour",level:2},{value:"Logic units",id:"logic-units",level:3},{value:"Sensors",id:"sensors",level:3},{value:"Executors",id:"executors",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",mermaid:"mermaid",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"unit",children:"Unit"}),"\n",(0,o.jsx)(n.p,{children:"Unit is the logic block that have ports, thus can be recoginzed by the circuit board."}),"\n",(0,o.jsx)(n.p,{children:"The basic structure of a unit."}),"\n",(0,o.jsx)(n.mermaid,{value:'block-beta\n  columns 6\n  space space\n  block:control:2\n    columns 2\n    control..{{"control ..."}}\n    control1{{"control 1"}}\n  end\n  space space\n  space space space space space space\n  block:input:1\n    columns 1\n    input1{{"input 1"}}\n    input..{{"input ..."}}\n  end\n  space Unit("Unit"):2 space\n  block:output:1\n    columns 1\n    output1{{"output 1"}}\n    output..{{"output ..."}}\n  end\n  input1--\x3eUnit\n  input..--\x3eUnit\n  control1--\x3eUnit\n  control..--\x3eUnit\n  Unit--\x3eoutput1\n  Unit--\x3eoutput..'}),"\n",(0,o.jsx)(n.p,{children:"Usually, it has solid dark base."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"unit",src:t(5661).A+"",width:"520",height:"181"})}),"\n",(0,o.jsx)(n.h2,{id:"off-board--on-board-mode",children:"Off-board / On-board Mode"}),"\n",(0,o.jsx)(n.p,{children:"Some of the units have off-board mode, i.e. they can be placed anywhere to complete their task."}),"\n",(0,o.jsx)(n.p,{children:"When configured as off-board, the unit will hide their physical ports and receive/send wireless signal."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"on-board",src:t(9403).A+"",width:"546",height:"335"}),"\n",(0,o.jsx)(n.img,{alt:"off-board",src:t(207).A+"",width:"559",height:"416"})]}),"\n",(0,o.jsxs)(n.p,{children:["Take off-board mode of ",(0,o.jsx)(n.code,{children:"Pose Sensor"})," as example, when configured as off-board, there will be a mapper called ",(0,o.jsx)(n.code,{children:"Send Channel"}),", specifying the channel through which the wireless signal is transmitted (will be discussed later in the ",(0,o.jsx)(n.code,{children:"Wireless"})," chapter)."]}),"\n",(0,o.jsx)(n.h2,{id:"behaviour",children:"Behaviour"}),"\n",(0,o.jsx)(n.h3,{id:"logic-units",children:"Logic units"}),"\n",(0,o.jsxs)(n.p,{children:["When the signal from input/control ports changed, they will update the signals at output ports immediately (the update can happen multiple times per frame, ",(0,o.jsx)(n.strong,{children:"dangerous"}),", wasn't it)"]}),"\n",(0,o.jsx)(n.h3,{id:"sensors",children:"Sensors"}),"\n",(0,o.jsx)(n.p,{children:"For each physical frame (every 0.01s), read the sensor configuration signals from input ports and generate outputs."}),"\n",(0,o.jsx)(n.admonition,{title:"Notation",type:"note",children:(0,o.jsxs)(n.p,{children:["For many sensors, the ouput signal's type is ",(0,o.jsx)(n.code,{children:"package"}),", containing multiple data. For example, IMU will ouput the package signal containing velocity (vector3), acceleration (vector3), angular velocity (vector3) and a place holder(null). You need to use ",(0,o.jsx)(n.code,{children:"UNPACKER"})," to extract the information you want."]})}),"\n",(0,o.jsx)(n.h3,{id:"executors",children:"Executors"}),"\n",(0,o.jsx)(n.p,{children:"For each physical frame (every 0.01s), read the signals from input ports and perform the action, such as press a key, move to a certain angle, display something."}),"\n",(0,o.jsx)(n.admonition,{title:"Notation",type:"note",children:(0,o.jsxs)(n.p,{children:["Similar with sensors, some of the executors receive ",(0,o.jsx)(n.code,{children:"package"})," type input signal."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},207:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/off-board-7ec1d5b92833c2fdc7250eeb687ac02b.png"},9403:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/on-board-cdd812ab09068b93761746f960dec8ad.png"},5661:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/unit-8d7fc9569de365ea13bac96204c2cce7.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);