"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[5],{4771:function(e,n,i){i.d(n,{Z:function(){return f}});var t=i(9099),s=i(7313),a=i(3428),r=i(6957),o=i(1113),l=i(6694),c=(i(5425),i(6377),i(1904)),d=i(6149),m=i(3604),x=i(6467),p=i(1198),h=i(7468),g=i(7762),u=i(6417);var j=function(e){let{setOpen:n,open:i,gameDetails:s}=e;return console.log("gameDetails",s),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d.Z,{open:i,onClose:()=>n(!1),children:[(0,u.jsx)(p.Z,{className:"mobile-close-icon",onClick:()=>n(!1)}),(0,u.jsxs)(x.Z,{className:"mobile-content",sx:{width:{xs:"300px",sm:"400px"}},children:[(0,u.jsxs)("div",{className:"mobile-image-title-row",children:[(0,u.jsx)("img",{className:"mobile-modal-image",src:null===s||void 0===s?void 0:s.imgUrl,alt:"game"}),(0,u.jsx)(m.Z,{className:"mobile-Title",children:null===s||void 0===s?void 0:s.name}),(0,u.jsxs)("div",{className:"mobile-rating",children:[(0,u.jsx)(h.Z,{className:"mobile-star-icon"}),(0,u.jsx)(x.Z,{className:"mobile-rating-text",children:"5 Rating"})]}),(0,u.jsx)(g.Z,{className:"mobile-description",children:null===s||void 0===s?void 0:s.description})]}),(0,u.jsx)("a",{href:`/game/${null===s||void 0===s?void 0:s._id}`,target:"_blank",children:(0,u.jsx)(t.Z,{className:"mobile-play-button",variant:"contained",color:"primary",onClick:()=>n(!1),children:"Play"})})]})]})})},v=i(750);var Z=function(e){let{setOpen:n,open:i,gameDetails:s}=e;return console.log("gameDetails",s),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(v.Z,{query:"(max-width: 800px)",children:e=>e?(0,u.jsx)(j,{setOpen:n,open:i,gameDetails:s}):(0,u.jsxs)(d.Z,{open:i,onClose:()=>n(!1),children:[(0,u.jsx)(p.Z,{className:"close-icon",onClick:()=>n(!1)}),(0,u.jsxs)(x.Z,{className:"Content",sx:{width:{md:"600px"}},children:[(0,u.jsxs)("div",{className:"image-title-row",children:[(0,u.jsx)("img",{className:"modal-image",src:null===s||void 0===s?void 0:s.imgUrl,alt:"game"}),(0,u.jsxs)(x.Z,{className:"content-text",children:[(0,u.jsx)(m.Z,{className:"Title",children:null===s||void 0===s?void 0:s.name}),(0,u.jsxs)("div",{className:"rating",children:[(0,u.jsx)(h.Z,{className:"star-icon"}),(0,u.jsx)(x.Z,{className:"rating-text",children:"4.5 Rating"})]}),(0,u.jsx)(g.Z,{className:"description",children:null===s||void 0===s?void 0:s.description})]})]}),(0,u.jsx)("a",{href:`/game/${null===s||void 0===s?void 0:s._id}`,target:"_blank",children:(0,u.jsx)(t.Z,{className:"play-button",variant:"contained",color:"primary",onClick:()=>n(!1),children:"Play"})})]})]})})})};var f=function(e){let{gameDetails:n}=e;const[i,d]=(0,s.useState)([]),[m,x]=(0,s.useState)(0),[p,h]=s.useState(!1),[g,j]=(0,s.useState)("");(0,s.useEffect)((()=>{if(Array.isArray(null===n||void 0===n?void 0:n.rating)&&(null===n||void 0===n?void 0:n.rating.length)>0){const e=(null===n||void 0===n?void 0:n.rating.map((e=>e.ratedValue)).reduce(((e,n)=>e+n),0))/(null===n||void 0===n?void 0:n.rating.length);if(Number.isInteger(e))x(e);else{const n=parseFloat(e).toFixed(1);x(n)}}}),[]);const v=(0,l.Z)(o.Z)({fontFamily:"poppins",fontSize:"32px",fontWeight:"600",justifyContent:"space-between"});return(0,u.jsxs)(u.Fragment,{children:[p&&(0,u.jsx)(Z,{gameDetails:g,setOpen:h,open:p}),(0,u.jsx)(t.Z,{onClick:()=>{h(!0);j(n)},children:(0,u.jsxs)(a.Z,{className:"primarycard",children:[(0,u.jsx)(c.Z,{className:"categoryicon"}),(0,u.jsx)(r.Z,{className:"media",component:"img",image:null===n||void 0===n?void 0:n.imgUrl,alt:"green iguana"}),(0,u.jsx)(v,{className:"content",children:(0,u.jsx)(o.Z,{className:"gameName",gutterBottom:!0,variant:"h5",component:"span",sx:{fontSize:"12px",fontWeight:"600",fontFamily:"poppins"},children:null===n||void 0===n?void 0:n.name})})]})})]})}},1904:function(e,n,i){i(7313);var t=i(4972),s=i(6417);n.Z=function(){return(0,s.jsx)("div",{className:"categoryiconEllipse",children:(0,s.jsx)("span",{children:(0,s.jsx)(t.pV2,{})})})}},1033:function(e,n,i){i.d(n,{Z:function(){return l}});i(7313);var t=i(1113),s=i(9019),a=i(6694),r=i(4901),o=i(6417);var l=function(e){const n=(0,a.Z)(t.Z)({fontFamily:"poppins",fontWeight:"600",justifyContent:"space-between",display:"flex",flexDirection:"row",padding:"10px 10px 0 10px "});return(0,o.jsx)("div",{className:"secondary-card",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:(0,o.jsxs)(s.ZP,{children:[(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("img",{src:e.image,alt:"game"}),(0,o.jsx)("span",{})]}),(0,o.jsx)("div",{children:(0,o.jsxs)(n,{component:"div",children:[(0,o.jsx)(t.Z,{className:"gameName",gutterBottom:!0,variant:"h5",component:"div",sx:{fontSize:"14px",fontWeight:"600",fontFamily:"poppins"},children:e.name}),(0,o.jsxs)(t.Z,{gutterBottom:!0,variant:"h5",component:"div",children:[e.rating,(0,o.jsx)(r.xiv,{className:"rating",size:"24px"})]})]})})]})})}},5:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var t=i(7313),s=i(9506),a=i(9019),r=i(1113),o=i(9160),l=(i(1881),i(6417));var c=function(e){return(0,l.jsx)("div",{children:(0,l.jsx)("img",{style:{width:"70px",border:"2px solid purple",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"},src:e.avatar,alt:"img"})})};var d=function(){return(0,l.jsxs)(s.Z,{sx:{backgroundColor:"#E4DFFF",borderRadius:10},children:[(0,l.jsx)(s.Z,{sx:{height:100,backgroundColor:"#4a148c",borderTopLeftRadius:9,borderTopRightRadius:9,textAlign:"center",paddingTop:2},children:(0,l.jsx)("h5",{style:{color:"#FFFFFF"},children:" Leaderboard"})}),(0,l.jsxs)(s.Z,{sx:{position:"relative",top:"-40px"},children:[(0,l.jsx)(c,{avatar:m[0].picture}),(0,l.jsx)(r.Z,{textAlign:"center",fontSize:20,color:"#FFFFFFF",children:(0,l.jsx)("b",{children:m[0].Score})})]}),(0,l.jsx)(s.Z,{sx:{position:"relative",top:"-30px"},children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(s.Z,{children:(0,l.jsxs)(s.Z,{display:"flex",paddingTop:"0",padding:"20px",children:[(0,l.jsx)(s.Z,{width:"20%",children:"Rank"}),(0,l.jsx)(s.Z,{width:"25%",children:"Profile"}),(0,l.jsx)(s.Z,{width:"40%",children:"Name"}),(0,l.jsx)(s.Z,{width:"10%",children:"Score"})]})}),(0,l.jsx)(s.Z,{children:m.slice(1,m.length).map((e=>(0,l.jsxs)(s.Z,{bgcolor:"white",margin:"10px",display:"flex",padding:"20px",borderRadius:"20px",children:[(0,l.jsx)(s.Z,{width:"20%",children:e.id}),(0,l.jsx)(s.Z,{width:"25%",children:(0,l.jsx)("img",{style:{width:"35px",border:"2px solid purple",borderRadius:"50px"},src:e.picture,alt:"user"})}),(0,l.jsx)(s.Z,{width:"45%",children:e.name}),(0,l.jsx)(s.Z,{width:"10%",children:e.Score})]},e.id)))})]})})]})};const m=[{id:1,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/women/63.jpg"},{id:2,name:"Mark",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/62.jpg"},{id:3,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/women/71.jpg"},{id:4,name:"Clere",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/47.jpg"},{id:5,name:"Jhone",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/62.jpg"},{id:6,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/85.jpg"},{id:7,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/14.jpg"},{id:8,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/men/18.jpg"},{id:9,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/women/17.jpg"},{id:10,name:"Jennie",Score:"100",rank:"#1",picture:"https://randomuser.me/api/portraits/women/94.jpg"}];var x=i(9099),p=i(4313),h=i(6505),g=i(7864),u=i(6377),j=i(7890),v=i(8119),Z=i(5743),f=i(9860),w=i(1550),b=i(3306),y=i(7843),N=i(5480);var S=e=>{let{label:n,type:i,name:t,values:s,handleChange:a,style:r,errorMsg:o,error:c}=e;(0,f.Z)();return(0,l.jsxs)(w.Z,{error:Boolean(c),sx:[r],children:[(0,l.jsx)(b.Z,{htmlFor:"outlined-adornment-email-login",children:n}),(0,l.jsx)(y.Z,{id:"outlined-adornment-email-login",type:i,value:s,name:t,onChange:a,label:n,inputProps:{}}),c&&(0,l.jsx)(N.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:o})]})},k=i(3511),F=i(1811);const C=(e,n,i,t,s)=>{(async(e,n,i,t,s)=>{let a={userId:e,gameId:n,comment:i,picture:t,name:s};return await k.L.API(k.I.POST,F.lC+n,a,{"content-Type":"application/json"})})(e,n,i,t,s).then((e=>{console.log("responce",e),201===e.status&&window.location.reload()})).catch((e=>{console.log("error post comment",e)}))};var P=function(){const[e,n]=t.useState([]),[i,s]=t.useState(""),{user:o}=JSON.parse(localStorage.getItem("profile")),c=e.length,[d,m]=(0,t.useState)("");return(0,t.useEffect)((()=>{const e=window.location.pathname,i=e.substring(e.length-24);s(i),(0,u.pj)(i).then((e=>{console.log("game data comments ",e.comments),n(e.comments)}))}),[]),(0,l.jsxs)(a.ZP,{flexGrow:1,children:[(0,l.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,l.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,className:"comment-toolbar",children:[(0,l.jsx)(r.Z,{className:"comment-heading",children:"Comments"}),(0,l.jsxs)(r.Z,{children:[c," Comments"]})]}),(0,l.jsx)(p.Z,{sx:{marginTop:"10px",width:"100%",mb:"60px"}})]}),(0,l.jsxs)(a.ZP,{flexGrow:1,children:[(0,l.jsxs)(Z.Z,{mb:3,sx:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(v.Z,{alt:"Remy Sharp",src:null===o||void 0===o?void 0:o.picture}),(0,l.jsx)(S,{values:d,handleChange:e=>{m(e.target.value)},label:"Add a comment...",type:"string",name:"comment",error:!1,errorMsg:"error ...",style:{width:"100%",marginLeft:2,marginRight:2}}),(0,l.jsx)(x.Z,{className:"comment-button",onClick:()=>{C(o._id,i,d,null===o||void 0===o?void 0:o.picture,null===o||void 0===o?void 0:o.name)},children:"Comment"})]}),e.map(((e,n)=>(0,l.jsxs)(Z.Z,{mb:3,sx:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(v.Z,{src:e.picture,alt:"Remy Sharp"}),(0,l.jsxs)(Z.Z,{className:"comment-text",children:[(0,l.jsx)(r.Z,{variant:"subtitle1",gutterBottom:!0,component:"div",children:e.name}),(0,l.jsx)(r.Z,{variant:"body2",gutterBottom:!0,component:"div",children:e.comment})]})]},n)))]})]})},T=i(3972);i(9336),i(5425),i(1904);i(1033);var D=i(4771);function R(){const e=(0,h.r)(),[n,i]=((0,j.TH)(),t.useState("")),[o,c]=t.useState(""),[m,v]=t.useState([]);console.log("game data",m),(0,t.useEffect)((()=>{const e=window.location.pathname,n=e.substring(e.length-24);(0,u.pj)(n).then((e=>{i(e.gameDetails),c(e.gameDetails.categories)}))}),[]),(0,t.useEffect)((()=>{(0,u.mE)(o).then((e=>{v(e)}))}),[o]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Z,{sx:{flexGrow:1},children:(0,l.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,l.jsxs)(a.ZP,{item:!0,sm:9,xs:12,md:9,children:[(0,l.jsxs)(s.Z,{className:"game-view",children:[(0,l.jsxs)(h.I,{handle:e,children:[(0,l.jsx)("iframe",{src:"https://www.crazygames.com/embed/smash-karts",title:"Smash Karts",style:{height:e.active?"100vh":"65vh",width:"100%",objectFit:"fill"}}),e.active&&(0,l.jsx)(x.Z,{variant:"contained",onClick:e.exit,children:"Exit Full Screen"})]}),(0,l.jsx)(g.vju,{className:"fullscreen-icon",onClick:e.enter})]}),(0,l.jsx)(r.Z,{sx:{fontSize:"20px",fontWeight:"800",marginTop:"20px"},variant:"h5",children:null===n||void 0===n?void 0:n.name}),(0,l.jsx)(r.Z,{sx:{fontSize:"14px",fontWeight:"400",marginTop:"5px"},variant:"h5",children:null===n||void 0===n?void 0:n.description}),(0,l.jsx)(P,{}),(0,l.jsx)(p.Z,{sx:{marginTop:"20px",mb:"30px"}}),(0,l.jsx)(r.Z,{sx:{fontSize:"18px",fontWeight:"800",margin:"20px 0 20px 70px"},variant:"h5",children:"Related Games"}),(0,l.jsx)(T.Z,{itemPadding:[10,10],breakPoints:[{width:100,itemsToShow:1},{width:300,itemsToShow:2},{width:650,itemsToShow:2.3},{width:768,itemsToShow:4.3},{width:1200,itemsToShow:5.3},{width:1500,itemsToShow:5.3}],className:"carousel-dots",children:m.map(((e,n)=>(0,l.jsx)(D.Z,{gameDetails:e})))})]}),(0,l.jsx)(a.ZP,{item:!0,sm:3,xs:12,md:3,children:(0,l.jsx)(s.Z,{className:"leader-board",children:(0,l.jsx)(d,{})})})]})})})}},9336:function(e,n,i){i(7313);var t=i(5743),s=i(9019),a=i(1113),r=i(4771),o=i(6672),l=i(6417);n.Z=e=>{let{dataArray:n}=e;return(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(s.ZP,{sx:{display:"flex",flexDirection:"row",color:"#383838",mb:"40px"},children:[(0,l.jsx)(o.PIe,{size:"22px"}),(0,l.jsx)(a.Z,{style:{textAlign:"left",paddingLeft:"10px",fontFamily:"poppins",fontWeight:"600",fontSize:18,color:"#383838"},children:"Recommended Games"})]}),(0,l.jsx)(s.ZP,{container:!0,children:n.map(((e,n)=>(0,l.jsx)(s.ZP,{item:!0,xs:4,sm:3,md:3,lg:2,sx:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(r.Z,{gameDetails:e})},null===e||void 0===e?void 0:e._id)))})]})}},5425:function(){}}]);