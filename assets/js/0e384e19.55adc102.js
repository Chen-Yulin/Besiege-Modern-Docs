"use strict";(self.webpackChunkbesiege_modern_mod_docs=self.webpackChunkbesiege_modern_mod_docs||[]).push([[3976],{1512:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(4848),o=i(8453);const t={sidebar_position:1},r="Mod Intro",l={id:"intro",title:"Mod Intro",description:"This is the documentation for Besiege-Modern-Mod.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Besiege-Modern-Docs/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic Concepts",permalink:"/Besiege-Modern-Docs/docs/category/basic-concepts"}},c={},d=[{value:"Objective",id:"objective",level:2},{value:"Overview of the mod",id:"overview-of-the-mod",level:2},{value:"Logic units",id:"logic-units",level:3},{value:"Sensors",id:"sensors",level:3},{value:"Executors",id:"executors",level:3},{value:"Other",id:"other",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mod-intro",children:"Mod Intro"}),"\n",(0,s.jsxs)(n.p,{children:["This is the documentation for ",(0,s.jsx)(n.strong,{children:"Besiege-Modern-Mod"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TIP",type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Besiege-Modern-Mod"})," can be subscribed in steam workshop."]}),(0,s.jsxs)(n.p,{children:["link: ",(0,s.jsx)(n.a,{href:"https://steamcommunity.com/sharedfiles/filedetails/?id=3205528109",children:"https://steamcommunity.com/sharedfiles/filedetails/?id=3205528109"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Today, some of the logic components that come with besiege have been able to achieve some basic automation. By combining sensors, timers, and logic gates, creative players have built whole bunch of incredible creations.\nHowever, in the game itself, it is very difficult to perform numerical calculations, and it may take dozens or hundreds of logic parts to form a computing unit. This method is not efficient, not to mention that setting up virtual logic cases is also very painful."}),"\n",(0,s.jsx)(n.p,{children:"Then I came up with this mod, where the logic units are succinctly wired on a ciruit board and can handle varies kind of signals, such as"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"null"}),"\n",(0,s.jsx)(n.li,{children:"bool"}),"\n",(0,s.jsx)(n.li,{children:"float"}),"\n",(0,s.jsx)(n.li,{children:"vector2 (2D coordinates)"}),"\n",(0,s.jsx)(n.li,{children:"vector3 (3D coordinates, position/velocity/acceleration)"}),"\n",(0,s.jsx)(n.li,{children:"Quaternion (rotation)"}),"\n",(0,s.jsx)(n.li,{children:"package (collection of multiple signals, can be considered as parallel data, like {bool, float, vector3, null})."}),"\n",(0,s.jsx)(n.li,{children:"Image"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["I believe that as the basic units of the mod is complete, besiege players can build automated machinery with fancier fucntions. The only limit is imagination while ",(0,s.jsx)(n.strong,{children:"besiege players never lack that"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Let's make it happen!!!"})})}),"\n",(0,s.jsx)(n.h2,{id:"overview-of-the-mod",children:"Overview of the mod"}),"\n",(0,s.jsxs)(n.p,{children:["Generally, there are four kinds of block in this mod, i.e. ",(0,s.jsx)(n.strong,{children:"sensors"}),", ",(0,s.jsx)(n.strong,{children:"logic units"}),", ",(0,s.jsx)(n.strong,{children:"executors"})," (corresponding to input\u2192process\u2192output) and ",(0,s.jsx)(n.strong,{children:"others"}),"."]}),"\n",(0,s.jsx)(n.mermaid,{value:"mindmap\n    ((Besiege Modern))\n        ((Logic units))\n            IF\n            ALU\n            WHILE\n            FOR\n            PACKER\n            UNPACKER\n            MUX\n            REGISTER\n            MEMORY\n        ((Sensors))\n            CONST\n            SWITCH\n            POSE SENSOR\n            GPS\n            IMU\n            RADAR\n            CAMERA\n        ((Executors))\n            KEY EMULATOR\n            STEERING HINGE\n            SCREEN\n        ((Others))\n            BOARD\n            INPUT PORT\n            OUTPUT PORT\n            WIRE\n            WIRELESS\n"}),"\n",(0,s.jsx)(n.h3,{id:"logic-units",children:"Logic units"}),"\n",(0,s.jsx)(n.p,{children:"All of the logic units has input ports and output ports, some of them may have control ports as well.\nThey get the data from input ports, process it and generate outputs.\nIn this mod, we have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IF"}),"          if condition"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ALU"}),"         numerical calculation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WHILE"}),"       conditional loop"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FOR"}),"         times loop"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PACKER"}),"      pack up input signal"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UNPACKER"}),"    unpack input signal"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MUX"}),"         select input signal"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"REGISTER"}),"    store single signal"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MEMORY"}),"      store signals with address"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sensors",children:"Sensors"}),"\n",(0,s.jsx)(n.p,{children:"All of the sensors has output ports, some of them may have input ports as well.\nThey are mainly responsible for generating signal for processing/execution.\nEquipped with wireless mode."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CONST"}),"           generate constant signal"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SWITCH"}),"          generate bool signal which can be toggled by key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POSE SENSOR"}),"     generate pose information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GPS"}),"             generate position information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IMU"}),"             generate velocity, acceleration information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RADAR"}),"           detect object and generate the information of the detected object"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"executors",children:"Executors"}),"\n",(0,s.jsx)(n.p,{children:"All of the executors has input ports.\nEquipped with wireless mode(except for steering hinge)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KEY EMULATOR"}),"    emulate holding key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"STEERING HINGE"}),"  steer to the given angle"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,s.jsx)(n.p,{children:"Connect logic units, sensors and executors all together and make magics happen."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Board"}),"       put units on it and wire them up"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"INPUT pin"}),"   the input port for the board"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OUTPUT pin"}),"  the output port for the board"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WIRE"}),"        connect the input port and output port"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WIRELESS"}),"    send and receive wireless signal"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);