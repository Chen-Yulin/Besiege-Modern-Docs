"use strict";(self.webpackChunkbesiege_modern_mod_docs=self.webpackChunkbesiege_modern_mod_docs||[]).push([[1536],{6173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(4848),i=n(8453);const o={sidebar_position:3},l="Timing",a={id:"basic-concepts/timing",title:"Timing",description:"Timing is a very critical part of this mod that nedds special attention.",source:"@site/docs/basic-concepts/timing.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/timing",permalink:"/Besiege-Modern-Docs/docs/basic-concepts/timing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Port",permalink:"/Besiege-Modern-Docs/docs/basic-concepts/port"},next:{title:"Logic Units",permalink:"/Besiege-Modern-Docs/docs/category/logic-units"}},r={},c=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timing",children:"Timing"}),"\n",(0,s.jsx)(t.p,{children:"Timing is a very critical part of this mod that nedds special attention."}),"\n",(0,s.jsxs)(t.p,{children:["There are generally two kinds of unit in this mod, ",(0,s.jsx)(t.code,{children:"Immediate Unit"})," & ",(0,s.jsx)(t.code,{children:"Trigger Unit"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Immediate Unit: the unit is updated (regenerate output) immediately when the input signals are updated. The speed of deduction of a series of immediate units is zero theoretically in game world."}),"\n",(0,s.jsx)(t.li,{children:"Trigger Unit: the unit is updated in each physical frame (100hz). Most of them are sensors, mainly responsible to trigger the update of other immediate unit."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Those two concepts maybe abstract. Let me explain it through some exapmles."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Example 1:"}),"\nLet consider the following simple logic circuit, there are three trigger unit and two immediate unit.\nAt the beginning, no signal is passing among these units."]}),"\n",(0,s.jsx)(t.mermaid,{value:'block-beta\ncolumns 5\n    CONST1("CONST1 [float 1.0]") space ALU("ALU [float +]") space space\n    CONST2("CONST2 [float 2.0]") space CONST3("CONST3 [float 3.0]") space IF("IF [float ==]")\nstyle CONST1 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST2 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST3 fill:#aa3,stroke:#333,stroke-width:4px\nstyle ALU fill:#55e,stroke:#333,stroke-width:4px\nstyle IF fill:#55e,stroke:#333,stroke-width:4px\n\n\nCONST1--"null"--\x3eALU\nCONST2--"null"--\x3eALU\nCONST3--"null"--\x3eIF\nALU--"null"--\x3eIF'}),"\n",(0,s.jsxs)(t.p,{children:["On the first frame, three trigger units (",(0,s.jsx)(t.code,{children:"CONST"}),") generate float signal at output ports one by one."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The order of generating outputs can be totally random. Here we use the order of CONST1->CONST3->CONST2"})}),"\n",(0,s.jsx)(t.p,{children:"Begin with CONST1:"}),"\n",(0,s.jsx)(t.mermaid,{value:'block-beta\ncolumns 5\n    CONST1("CONST1 [float 1.0]") space ALU("ALU [float +]") space space\n    CONST2("CONST2 [float 2.0]") space CONST3("CONST3 [float 3.0]") space IF("IF [float ==]")\nstyle CONST1 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST2 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST3 fill:#aa3,stroke:#333,stroke-width:4px\nstyle ALU fill:#55e,stroke:#333,stroke-width:4px\nstyle IF fill:#55e,stroke:#333,stroke-width:4px\n\n\nCONST1--"float 1.0"--\x3eALU\nCONST2--"null"--\x3eALU\nCONST3--"null"--\x3eIF\nALU--"null"--\x3eIF'}),"\n",(0,s.jsxs)(t.p,{children:["Because of the update in the first input port, ALU's update function is called. However, the second input of ALU is ",(0,s.jsx)(t.code,{children:"null"}),", so ALU generate ",(0,s.jsx)(t.code,{children:"null"})," at output port. Nothing is changed and IF is not affected."]}),"\n",(0,s.jsx)(t.p,{children:"Then comes CONST3's turn:"}),"\n",(0,s.jsx)(t.mermaid,{value:'block-beta\ncolumns 5\n    CONST1("CONST1 [float 1.0]") space ALU("ALU [float +]") space space\n    CONST2("CONST2 [float 2.0]") space CONST3("CONST3 [float 3.0]") space IF("IF [float ==]")\nstyle CONST1 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST2 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST3 fill:#aa3,stroke:#333,stroke-width:4px\nstyle ALU fill:#55e,stroke:#333,stroke-width:4px\nstyle IF fill:#55e,stroke:#333,stroke-width:4px\n\n\nCONST1--"float 1.0"--\x3eALU\nCONST2--"null"--\x3eALU\nCONST3--"float 3.0"--\x3eIF\nALU--"null"--\x3eIF'}),"\n",(0,s.jsxs)(t.p,{children:["Because the first input of IF is ",(0,s.jsx)(t.code,{children:"null"}),", IF generate ",(0,s.jsx)(t.code,{children:"null"})," at output port. Nothing is changed."]}),"\n",(0,s.jsx)(t.p,{children:"Finally comes CONST2's turn:"}),"\n",(0,s.jsx)(t.mermaid,{value:'block-beta\ncolumns 5\n    CONST1("CONST1 [float 1.0]") space ALU("ALU [float +]") space space\n    CONST2("CONST2 [float 2.0]") space CONST3("CONST3 [float 3.0]") space IF("IF [float ==]")\nstyle CONST1 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST2 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST3 fill:#aa3,stroke:#333,stroke-width:4px\nstyle ALU fill:#55e,stroke:#333,stroke-width:4px\nstyle IF fill:#55e,stroke:#333,stroke-width:4px\n\n\nCONST1--"float 1.0"--\x3eALU\nCONST2--"float 2.0"--\x3eALU\nCONST3--"float 3.0"--\x3eIF\nALU--"null"--\x3eIF'}),"\n",(0,s.jsxs)(t.p,{children:["Because of the update in the second input port, ALU's update function is called. ALU generate ",(0,s.jsx)(t.code,{children:"float 3.0"})," at output port."]}),"\n",(0,s.jsx)(t.mermaid,{value:'block-beta\ncolumns 5\n    CONST1("CONST1 [float 1.0]") space ALU("ALU [float +]") space space\n    CONST2("CONST2 [float 2.0]") space CONST3("CONST3 [float 3.0]") space IF("IF [float ==]")\nstyle CONST1 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST2 fill:#aa3,stroke:#333,stroke-width:4px\nstyle CONST3 fill:#aa3,stroke:#333,stroke-width:4px\nstyle ALU fill:#55e,stroke:#333,stroke-width:4px\nstyle IF fill:#55e,stroke:#333,stroke-width:4px\n\n\nCONST1--"float 1.0"--\x3eALU\nCONST2--"float 2.0"--\x3eALU\nCONST3--"float 3.0"--\x3eIF\nALU--"float 3.0"--\x3eIF'}),"\n",(0,s.jsxs)(t.p,{children:["Because of the update in the first input port, IF's update function is called. IF generate ",(0,s.jsx)(t.code,{children:"true"})," at output port."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"As soon as all the trigger units have updated the output, the circuit is bound to generate all the related outputs."})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);