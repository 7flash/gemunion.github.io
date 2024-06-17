"use strict";(self.webpackChunkgemunion_github_io=self.webpackChunkgemunion_github_io||[]).push([[1102],{3984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(4848),i=r(8453);const s={hide_table_of_contents:!0,sidebar_position:2},a="Receive Staking Reward",o={id:"mechanics-marketing/staking/receive-reward",title:"Receive Staking Reward",description:"Staking can be classified into two types: recurrent and non-recurrent.",source:"@site/market/mechanics-marketing/staking/receive-reward.md",sourceDirName:"mechanics-marketing/staking",slug:"/mechanics-marketing/staking/receive-reward",permalink:"/market/mechanics-marketing/staking/receive-reward",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/market/mechanics-marketing/staking/overview"},next:{title:"Gaming Mechanics",permalink:"/market/mechanics-gaming/"}},d={},l=[{value:"Withdraw Deposit:",id:"withdraw-deposit",level:3},{value:"Receive Reward:",id:"receive-reward",level:3}];function h(e){const t={blockquote:"blockquote",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"receive-staking-reward",children:"Receive Staking Reward"}),"\n",(0,n.jsxs)(t.p,{children:["Staking can be classified into two types: ",(0,n.jsx)(t.strong,{children:"recurrent"})," and ",(0,n.jsx)(t.strong,{children:"non-recurrent"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Recurrent"})," staking, allows the user to receive the rewards after each full period has been completed. For example, if a user deposited 100 tokens and completed a full staking period of 30 days, they would receive a reward, let's say 10 tokens, at the end of the period. If they continue to hold their deposit for another full staking period of 30 days, they will receive another reward - 10 more  tokens and so on, indefinitely."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Non-recurrent"})," staking, on the other hand, means that the user can receive only one reward after a full period has passed. For example, if a user deposited 100 tokens and completed a full staking period of 30 days, they would receive a reward, same 10 tokens, at the end of the period. But if they continue to hold their deposit beyond the first full period, they will not be able to receive any further rewards."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Users can withdraw their deposited tokens and receive rewards in one transaction. However, there are a few things to keep in mind:"}),"\n",(0,n.jsx)(t.h3,{id:"withdraw-deposit",children:"Withdraw Deposit:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["For both ",(0,n.jsx)(t.strong,{children:"recurrent"})," and ",(0,n.jsx)(t.strong,{children:"non-recurrent"})," staking, If the user ",(0,n.jsx)(t.strong,{children:"has not held"})," their deposit for at least one full staking period since the time they made the deposit, and wishes to withdraw, a penalty will be deducted from the total deposit amount.\n2For ",(0,n.jsx)(t.strong,{children:"reccurent"})," staking, If the user ",(0,n.jsx)(t.strong,{children:"has held"})," their deposit for at least one full staking period since the time they made the deposit and wishes to withdraw, they will receive the full amount of their deposited tokens.\n3For ",(0,n.jsx)(t.strong,{children:"non-reccurent"})," staking, If the staking deposit ",(0,n.jsx)(t.strong,{children:"has been held"})," for full period (meaning the user has completed their staking period and will not continue to receive rewards), the contract will automatically withdraw the full deposit amount to the user's account without requiring any further action from the user."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"receive-reward",children:"Receive Reward:"}),"\n",(0,n.jsx)(t.p,{children:"When a user receives a reward, the following steps are taken:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The contract checks whether the user has held their deposit for at least one full staking period since their last received reward. If the user has not yet received any reward, the contract will check the full staking period from the time the user made the deposit."}),"\n",(0,n.jsx)(t.li,{children:"The reward amount, multiplied by the total number of full staking periods (for non-recurrent staking, this can only be 1), will be transferred to the user's account."}),"\n",(0,n.jsx)(t.li,{children:"If the staking rule is recurrent, the contract will update the time of the user's last received reward to the current timestamp. If the user does not withdraw their deposited tokens, they will be able to continue receiving rewards, and they will be able to withdraw the full amount of their deposited tokens at any time."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE!"})," ",(0,n.jsx)("br",{}),"\nIf a transaction does not involve either receiving of reward or withdrawing deposited tokens, the transaction will be reverted."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{RP:()=>s});var n=r(6540);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);