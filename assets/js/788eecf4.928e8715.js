"use strict";(self.webpackChunkgemunion_github_io=self.webpackChunkgemunion_github_io||[]).push([[9797],{7542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(4848),i=n(8453);const a={hide_table_of_contents:!0,sidebar_position:4},r="Features",o={id:"hierarchy/ERC721/features",title:"Features",description:"SIMPLE",source:"@site/admin/hierarchy/ERC721/features.md",sourceDirName:"hierarchy/ERC721",slug:"/hierarchy/ERC721/features",permalink:"/admin/hierarchy/ERC721/features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{hide_table_of_contents:!0,sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Token",permalink:"/admin/hierarchy/ERC721/token"},next:{title:"ERC998",permalink:"/admin/category/erc998"}},l={},c=[{value:"SIMPLE",id:"simple",level:3},{value:"Consist of several extensions:",id:"consist-of-several-extensions",level:4},{value:"BLACKLIST",id:"blacklist",level:3},{value:"WHITELIST",id:"whitelist",level:3},{value:"PAUSABLE",id:"pausable",level:3},{value:"DISCRETE",id:"discrete",level:3},{value:"RANDOM",id:"random",level:3},{value:"GENES",id:"genes",level:3},{value:"RENTABLE",id:"rentable",level:3},{value:"VOTING",id:"voting",level:3},{value:"SOULBOUND",id:"soulbound",level:3},{value:"EXTERNAL",id:"external",level:3}];function h(e){const t={a:"a",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"simple",children:"SIMPLE"}),"\n",(0,s.jsxs)(t.p,{children:["The SIMPLE contract is a foundational component of all features offered by our platform. It includes all the basic functions necessary for the creation and management NFTs, such as ",(0,s.jsx)(t.strong,{children:"minting"}),", ",(0,s.jsx)(t.strong,{children:"burning"}),", and ",(0,s.jsx)(t.strong,{children:"transferring"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"consist-of-several-extensions",children:"Consist of several extensions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Access Control"})," - provides the ability to restrict or grant permission for specific addresses to interact with a smart contract. ",(0,s.jsxs)(t.em,{children:["(see ",(0,s.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/access-control",children:"OpenZeppelin"}),")"]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Burnable"})," -  allows for a token to be destroyed, reducing the overall supply and potentially increasing the value of remaining tokens ",(0,s.jsxs)(t.em,{children:["(see ",(0,s.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/api/token/erc721#ERC721Burnable",children:"OpenZeppelin"}),")"]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enumerable"})," - allows the contract to be queried for a list of all token holders and their token balances ",(0,s.jsxs)(t.em,{children:["(see ",(0,s.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/api/token/erc721#ERC721Enumerable",children:"OpenZeppelin"}),")"]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Royalty"})," - allows for a portion of the sale price to be paid to the original creator of the NFT each time it is resold ",(0,s.jsxs)(t.em,{children:["(see ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2981",children:"EIP-2981"}),")"]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"BaseUrl"})," - allows the NFTs to have a URI pointing to a public location where additional information and resources can be stored ",(0,s.jsxs)(t.em,{children:["(see ",(0,s.jsx)(t.a,{href:"/api/category/json-microservice/",children:"JSON-microservice"}),")"]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"MetaData"})," - provides tiny key/values storage for metadata associated with an NFT."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Overall, the SIMPLE feature provides a comprehensive set of tools for the creation and management of NFTs, serving as the foundation for all other features offered by our platform."}),"\n",(0,s.jsx)(t.h3,{id:"blacklist",children:"BLACKLIST"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Blacklist"})," feature is a security mechanism that ",(0,s.jsx)(t.strong,{children:"restrict"})," certain addresses from ",(0,s.jsx)(t.strong,{children:"transfering NFT"}),". These addresses are typically considered to be bad actors and are unable to use the NFTs they possess if they are added to blacklist. This helps to maintain the integrity of the contract and ensure that NFTs are not being used maliciously."]}),"\n",(0,s.jsx)(t.h3,{id:"whitelist",children:"WHITELIST"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Whitelist"})," feature in NFTs works as the opposite of the ",(0,s.jsx)(t.strong,{children:"Blacklist"}),". While the blacklist restrict specific addresses from transfering the NFT, the Whitelist ",(0,s.jsx)(t.strong,{children:"allows only a specific set of addresses transfer the NFT"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"pausable",children:"PAUSABLE"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Pausable"})," feature in smart contracts allows the contract owner or authorized parties to ",(0,s.jsx)(t.strong,{children:"temporarily pause the execution of the contract"}),". This feature is particularly useful when the marketing team starts selling NFTs, but the programming side is not yet ready to support the transaction process. It can also be used to address unexpected bugs or errors that may arise during the lifetime of the contract, without affecting the overall integrity of the contract."]}),"\n",(0,s.jsx)(t.p,{children:"One practical example of its use is in the sale of mystery boxes. If the NFTs within the mystery boxes are not yet available, the contract can be paused until they are ready. This ensures that the users cannot access the NFTs until the contract is ready, allowing the marketing team to win time for developers or something like this. The Pausable feature of ERC721 contracts allows for greater flexibility and control, making it an important component for any project utilizing NFTs."}),"\n",(0,s.jsx)(t.h3,{id:"discrete",children:"DISCRETE"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Discrete"})," feature allows NFTs to be upgraded with attributes such as level, power, stamina, etc. It provides a new level of functionality to NFTs by allowing owners to enhance their assets. This can increase the value and desirability of NFTs, making them more appealing to buyers and investors."]}),"\n",(0,s.jsx)(t.p,{children:"In a gaming platform, for example, players can upgrade their NFTs to improve their in-game abilities or earn more in-game currency. This not only enhances the user's experience but also positively influences the overall economy of the token as upgraded tokens may hold a higher value."}),"\n",(0,s.jsx)(t.h3,{id:"random",children:"RANDOM"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"RANDOM"})," feature is an important aspect of the ERC721 contract, as it provides a way to randomly generate events within a blockchain application. To ensure the fairness and transparency of the random number generation process, we use the popular decentralized oracle service, ",(0,s.jsx)(t.a,{href:"/admin/integrations/chain-link/",children:"ChainLink"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Combining the RANDOM feature with the ",(0,s.jsx)(t.strong,{children:"UPGRADABLE"})," feature also provides new possibilities for NFT-based gaming experiences. Players can be surprised by the rarity of the NFT they receive and can then work to upgrade it and increase its value. This creates a unique and dynamic NFT economy, where the value of NFTs is determined by both player effort and luck."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also combine RANDOM with other features such as ",(0,s.jsx)(t.strong,{children:"MYSTERY BOX"}),", and this can enhance the overall user experience and drive engagement, with the RANDOM NFT included inside the MYSTERY BOX."]}),"\n",(0,s.jsx)(t.p,{children:"The use of RANDOM in NFT projects, such as in gaming, can greatly add to the value and desirability of the NFTs, leading to a more active and thriving community and economy."}),"\n",(0,s.jsx)(t.h3,{id:"genes",children:"GENES"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Genes"})," feature allows for the creation and management of unique, inheritable traits within NFTs. This allows for a new level of complexity and depth in the NFT ecosystem, creating new opportunities for collectibility and gameplay. The GENES feature has been utilized by popular NFT projects such as ",(0,s.jsx)(t.a,{href:"https://axieinfinity.com/",children:"Axie Infinity"})," and ",(0,s.jsx)(t.a,{href:"https://www.cryptokitties.co/",children:"CryptoKitties"}),", where players can breed and trade creatures with unique traits. One more example is ",(0,s.jsx)(t.a,{href:"https://derace.com/",children:"Derace"})," that allow for the creation of rare and valuable horses NFTs, where the traits of the horses can be passed down through generations. The addition of the GENES feature opens up new possibilities for NFT creators, collectors, and gamers."]}),"\n",(0,s.jsx)(t.h3,{id:"rentable",children:"RENTABLE"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"RENTABLE"})," feature is a popular way for individuals to access assets that may not available for purchase or they might not want to purchase outright. Rentable NFTs, as the name suggests, allow users to rent NFTs for a certain period of time, rather than having to purchase them outright. This is made possible through the use of the ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4907",children:"ERC4907"})," extension, which enables NFTs to be rented and leased out to other users."]}),"\n",(0,s.jsx)(t.p,{children:"One of the key benefits of the Rentable feature is that it enables NFT owners to generate additional income from their assets, while also giving users who may not be able to afford the full purchase price the ability to access and use the NFT for a limited time. For example, if a player mint an NFT, he can allow others to use it for a fee. This can help the player generate additional revenue from their NFT, while also making it more accessible to a wider audience."}),"\n",(0,s.jsx)(t.h3,{id:"voting",children:"VOTING"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VOTING"})," is a powerful and essential feature that can greatly enhance the functionality and value of blockchain projects. Most common case of usage ",(0,s.jsx)(t.strong,{children:"VOTING"})," feature is in\n",(0,s.jsx)(t.a,{href:"/admin/mechanics-gambling/governance/",children:"governance"}),", where users are given the ability to directly participate in the decision-making process of a project, making it more democratic and community-driven. By enabling users to vote on important issues, such as changes to the protocol, new features, and even funding proposals, projects can benefit from a wide range of perspectives and ideas, leading to more informed and equitable decisions."]}),"\n",(0,s.jsxs)(t.p,{children:["One of the main benefits of voting is that it can greatly improve the ",(0,s.jsx)(t.a,{href:"/admin/mechanics-gambling/governance/",children:"governance"})," of a project. By enabling users to participate in decision-making, projects can benefit from a more diverse range of opinions and ideas, leading to more equitable and effective decisions. Additionally, by making the voting process transparent and auditable, projects can build trust and confidence with their community, leading to a more engaged and committed user base."]}),"\n",(0,s.jsx)(t.h3,{id:"soulbound",children:"SOULBOUND"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"SOULBOUND"})," feature is a valuable addition to NFTs, providing security and control to the distribution and ownership of these tokens. By tying ownership to a specific individual, the SOULBOUND feature ensures that the NFT remains in the hands of its intended owner, rather than being traded or passed on to others. This is particularly useful for NFTs with important or high-value attributes, such as ",(0,s.jsx)(t.strong,{children:"Governance tokens"})," used for voting purposes."]}),"\n",(0,s.jsxs)(t.p,{children:["The use of the ",(0,s.jsx)(t.strong,{children:"SOULBOUND"})," feature with ",(0,s.jsx)(t.strong,{children:"VOTING"})," feature, where NFT is a voting pass in ",(0,s.jsx)(t.a,{href:"/admin/mechanics-gambling/governance/",children:"governance"})," systems ensures that each vote is ",(0,s.jsx)(t.strong,{children:"securely tied"})," to an individual voter, preventing fraudulent or duplicated voting. This provides a level of trust and accountability to the ",(0,s.jsx)(t.a,{href:"/admin/mechanics-gambling/governance/",children:"governance"})," process, ensuring that the outcome accurately reflects the will of the voters."]}),"\n",(0,s.jsx)(t.h3,{id:"external",children:"EXTERNAL"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"External"})," contracts are only available in ",(0,s.jsx)(t.a,{href:"https://gemunion.io/pricing",children:"Self-Hosted version"}),", these are contracts deployed by other developers but connected to the system to use in various mechanics. These contracts have disabled contract menu."]})]})}function d(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>a});var s=n(6540);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);