"use strict";(self.webpackChunkgemunion_github_io=self.webpackChunkgemunion_github_io||[]).push([[7051],{9706:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(4848),s=i(8453);const a={hide_table_of_contents:!0,sidebar_position:4},r="Wait list",c={id:"interfaces/mechanics/wait-list",title:"Wait list",description:"",source:"@site/api/interfaces/mechanics/wait-list.md",sourceDirName:"interfaces/mechanics",slug:"/interfaces/mechanics/wait-list",permalink:"/api/interfaces/mechanics/wait-list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{hide_table_of_contents:!0,sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Recipes interfaces",permalink:"/api/interfaces/mechanics/recipes"},next:{title:"Grade",permalink:"/api/interfaces/mechanics/grade"}},o={},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.RP)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"wait-list",children:"Wait list"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:'export interface IWaitListList extends ISearchable {\n  items?: Array<IWaitListItem>;\n  root: string;\n  item?: IAsset;\n  itemId: number;\n  contractId: number;\n  contract: IContract;\n  isPrivate: boolean;\n}\n\nexport enum WaitListItemStatus {\n  NEW = "NEW",\n  REDEEMED = "REDEEMED",\n}\n\nexport interface IWaitListItem extends IIdDateBase {\n  account: string;\n  waitListItemStatus: WaitListItemStatus;\n  listId: number;\n  list?: IWaitListList;\n}\n\n'})})]})}function u(t={}){const{wrapper:e}={...(0,s.RP)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},8453:(t,e,i)=>{i.d(e,{RP:()=>a});var n=i(6540);const s=n.createContext({});function a(t){const e=n.useContext(s);return n.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}}}]);