(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4438],{19867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/faucet",function(){return n(55610)}])},55610:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(47568),i=n(828),r=n(7297),s=n(70655),p=n(35944),u=n(67294),o=n(36336),d=n(29630),l=n(75084),y=n(61953),c=n(21448),m=n(79072),f=n(55118),b=n(63225),T=n(3018),F=n(81719),x=n(80973),g=n.n(x),Z=n(61225),v=n(241),h=n(64146),C=n(61744),k=n(31415),M=n(82855),w=n(74518),B=n(43832),A=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"DECIMALS","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),D=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintByAmount","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),P=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),E=n(80234);function I(){var e=(0,r.Z)(["\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 400;\n  font-size: 0.85rem;\n  line-height: 1.66;\n  letter-spacing: 0.03333em;\n  margin-top: 0;\n  margin-right: 14px;\n  margin-bottom: 3px;\n  margin-left: 14px;\n"]);return I=function(){return e},e}function N(){var e=(0,r.Z)(["\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 400;\n  font-size: 0.85rem;\n  line-height: 1.66;\n  letter-spacing: 0.03333em;\n  margin-top: 3px;\n  margin-right: 14px;\n  margin-bottom: 0;\n  margin-left: 14px;\n"]);return N=function(){return e},e}var R={5:{FaucetToken:"0xCe7C5Dfe8fa1281906985AAc59f18750133750Dd",FaucetNonFungibleToken:"0x1422e264932be6379d5d0720e7a3f2abc14784bf",FaucetMultiToken:"0xeb6fb141a6cdc3f457fce0824f0dea627364032b"},97:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0x47145b1b690e163c637212D4c978c7c54b3CFAe7",FaucetMultiToken:"0x71c52412d4d6f03556dAE0b5eC0Aa679356d229c"},80001:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},43113:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},4002:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},1287:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},9e3:{FaucetToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetNonFungibleToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12",FaucetMultiToken:"0xD23eB9591C7b0E122Bb9E5E18c1d1f4051b2D835"},44787:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},568:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},65:{FaucetToken:"0xdF94Fc09ebFddC21d9CD05135B95e00b158e2bFF",FaucetNonFungibleToken:"0xf6DF827821ab7f58eF1d253B21736c0c66489F86",FaucetMultiToken:"0x0f2dd08112a7882e148bAeaF17Cfa0D0aF421c12"},19:{FaucetToken:"0xD23eB9591C7b0E122Bb9E5E18c1d1f4051b2D835",FaucetNonFungibleToken:"0xDa6702C465b70AE164a40a91D366cfb1c431E39f",FaucetMultiToken:"0x7439E9ec403535B12C2Cf841AD7c137466ec1DD4"}},S=((0,F.ZP)(d.Z)(I()),(0,F.ZP)(d.Z)(N()),function(){var e=(0,i.Z)(u.useState(null),2),t=e[0],n=e[1],r=(0,i.Z)(u.useState(null),2),o=r[0],d=r[1],y=(0,i.Z)(u.useState(!1),2),c=y[0],T=y[1],F=(0,i.Z)(u.useState(!1),2),x=F[0],g=F[1],Z=(0,i.Z)(u.useState(!1),2),k=Z[0],M=Z[1],w=(0,i.Z)(u.useState(null),2),I=w[0],N=(w[1],(0,i.Z)(u.useContext(B.w),1)[0]),S=function(){var e=(0,a.Z)((function(){var e,n,a,i,r,p;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return(n=null===N||void 0===N||null===(e=N.connector)||void 0===e?void 0:e.chainId)&&E.zG[n]?(a=new v.Q(N.provider.provider),c&&t&&o?[4,new h.CH(R[n].FaucetToken,A,a.getSigner()).mint(t,C.vz(o))]:[3,2]):[3,7];case 1:s.sent(),s.label=2;case 2:return x&&t&&o?(i="https://ipfs.io/ipfs/QmYborBkZQy6QGu1YD4FuMGKXPQz7h84fY42g1DndRgeTu/token-uri.json",[4,(r=new h.CH(R[n].FaucetNonFungibleToken,D,a.getSigner())).estimateGas.mintByAmount(t,o,i)]):[3,5];case 3:return p=s.sent(),[4,r.mintByAmount(t,o,i,{gasLimit:p})];case 4:s.sent(),s.label=5;case 5:return k&&t&&o?[4,new h.CH(R[n].FaucetMultiToken,P,a.getSigner()).mintBatch(t,[0],[o])]:[3,7];case 6:s.sent(),s.label=7;case 7:return[2]}}))}));return function(){return e.apply(this,arguments)}}();Boolean(I);return(0,p.BX)(m.ZP,{justifyContent:"flex-start",alignItems:"center",spacing:2,sx:{marginTop:1},container:!0,children:[(0,p.tZ)(m.ZP,{xs:12,item:!0,children:(0,p.BX)(m.ZP,{justifyContent:"space-around",container:!0,children:[(0,p.tZ)(m.ZP,{item:!0,children:(0,p.BX)(m.ZP,{container:!0,alignItems:"center",children:[(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(f.Z,{onChange:function(){return T(!c)}})}),(0,p.tZ)(m.ZP,{item:!0,children:"ERC-20"})]})}),(0,p.tZ)(m.ZP,{item:!0,children:(0,p.BX)(m.ZP,{container:!0,alignItems:"center",children:[(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(f.Z,{onChange:function(){return g(!c)}})}),(0,p.tZ)(m.ZP,{item:!0,children:"ERC-721"})]})}),(0,p.tZ)(m.ZP,{item:!0,children:(0,p.BX)(m.ZP,{container:!0,alignItems:"center",children:[(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(f.Z,{onChange:function(){return M(!c)}})}),(0,p.tZ)(m.ZP,{item:!0,children:"ERC-1155"})]})})]})}),(0,p.tZ)(m.ZP,{md:9,xs:12,item:!0,children:(0,p.tZ)(b.Z,{onChange:function(e){var t=e.target.value;n(null),42===t.length&&n(t)},fullWidth:!0,placeholder:"Enter your address"})}),(0,p.tZ)(m.ZP,{md:3,xs:12,item:!0,children:(0,p.tZ)(b.Z,{onChange:function(e){var t=e.target.value;d(t)},type:"number",fullWidth:!0,placeholder:"Amount"})}),(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(l.Z,{onClick:S,variant:"contained",children:"Send"})})]})}),_=function(){var e=(0,Z.Z)(g()({minWidth:600}));return(0,p.BX)(p.HY,{children:[(0,p.tZ)(M.Z,{}),(0,p.tZ)(o.Z,{maxWidth:!e&&"xl",sx:{width:e?"720px":null},children:(0,p.BX)(k.Z,{title:"Faucet - Free ERC-20, ERC-721, and ERC-1155 assets on testnets | Off Grid Platform",description:"Access free ERC-20, ERC-721, and ERC-1155 assets on testnets with the Faucet from Off Grid Platform. Perfect for developers and testers needing crypto assets for testing purposes.",jsonLd:{product:{brand:"Off Grid Platform",productName:"Faucet",description:"A tool to access free ERC-20, ERC-721, and ERC-1155 assets on testnets. Ideal for developers and testers needing crypto assets for testing purposes.",url:"https://offgridplatform.com/apps/faucet",category:"Software Application",additionalType:"http://schema.org/SoftwareApplication",applicationCategory:"FinTech Software"}},children:[(0,p.BX)(y.Z,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:e?"flex-start":"center",alignItems:e?"flex-start":"center"},children:[(0,p.BX)(m.ZP,{justifyContent:e?"space-between":"center",alignItems:"center",container:!0,children:[(0,p.BX)(m.ZP,{item:!0,children:[(0,p.tZ)(d.Z,{align:e?void 0:"center",variant:"h4",component:"h1",gutterBottom:!e,children:"Faucet"}),(0,p.tZ)(d.Z,{align:e?void 0:"center",color:"GrayText",variant:"subtitle1",gutterBottom:!0,children:"Mint ERC-20, ERC-721, and ERC-1155 tokens"})]}),(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(m.ZP,{justifyContent:e?void 0:"center",spacing:1,sx:{marginBottom:"0.35em"},container:!0,children:(0,p.tZ)(m.ZP,{item:!0,children:(0,p.tZ)(c.Z,{disabled:!0,avatar:(0,p.tZ)(T.Z,{}),variant:"outlined",size:"medium",label:"Watch tutorial"})})})})]}),(0,p.tZ)(S,{})]}),(0,p.tZ)(w.Z,{})]})})]})}},31415:function(e,t,n){"use strict";var a=n(26042),i=n(35944),r=(n(67294),n(2962)),s=n(73136),p={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};t.Z=function(e){var t=e.children,n=e.title,u=e.description,o=e.jsonLd;return(0,i.BX)("div",{children:[(0,i.tZ)(r.PB,{title:n,description:u,openGraph:{title:n,description:u}}),o.product&&(0,i.tZ)(r.Qb,(0,a.Z)({},o.product)),(0,i.tZ)(s.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:p,transition:{type:"spring",stiffness:100},className:" flex flex-col items-start w-full pt-10 px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96 pt-24 h-full ",children:t})]})}}},function(e){e.O(0,[5445,2764,3136,4146,1641,6843,9774,2888,179],(function(){return t=19867,e(e.s=t);var t}));var t=e.O();_N_E=t}]);