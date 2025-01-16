import{_,o as v,c as g,a as l,n as O,t as p,e as I,f as M,F as A,g as E,d as w,u as G,h as S,v as F,i as q,j as re,k as J,l as $,m as se}from"./index-CC6K_akc.js";class j{constructor(e){this.short=e,this.props={short:e};let t=K.find(i=>i.short==e);if(t){this.props=t,this.member=t.member;let i=le.find(a=>a.member==t.member);i&&(this.year=i.year,this.unit=i.unit),this.cost=t.cost,this.costDelta=0,this.teCostDelta=0}}copy(){let e=new j(this.short);return e.cost=this.cost,e.costDelta=this.costDelta,e.teCostDelta=this.teCostDelta,e}getMain(e){var t;return(t=this.props)!=null&&t.main?typeof this.props.main=="function"?this.props.main(e):this.props.main:""}getCost(e=!1){var i,a;let t=this.cost;return t+=this.costDelta,e&&((i=this.props)!=null&&i.teCostDelta)&&(t+=(a=this.props)==null?void 0:a.teCostDelta(e)),e&&(t+=this.teCostDelta),t>=1?t:1}getCalcCost(e){let t=this.getSkill(e),i=this.getCost(e.te),a=i;return a-=(t==null?void 0:t.ap)??0,a-=(t==null?void 0:t.spAp)??0,(a<1||a>=e.apMax&&i<=e.ap)&&(a=1),a}isReshuffle(e){var t;return(t=this.props)!=null&&t.reshuffle?typeof this.props.reshuffle=="function"?this.props.reshuffle(e):this.props.reshuffle:!1}getSkill(e){var t;if((t=this.props)!=null&&t.skill)return typeof this.props.skill=="function"?this.props.skill(e):this.props.skill}onSkill(e){e.trigger(this.getSkill(e))}afterSkill(e){var t;(t=this.props)!=null&&t.afterSkill&&this.props.afterSkill(e,this)}onDraw(e){var t;this.teCostDelta=0,(t=this.props)!=null&&t.draw&&(typeof this.props.draw=="function"?e.trigger(this.props.draw(e,this)):e.trigger(this.props.draw))}calcDrawHeartCount(e){var a,u,m,o;let t=0,i;if((a=this.props)!=null&&a.draw&&(typeof((u=this.props)==null?void 0:u.draw)=="function"?i=(m=this.props)==null?void 0:m.draw(e):i=(o=this.props)==null?void 0:o.draw),t+=(i==null?void 0:i.heart)||0,e.sp=="tz"&&(t+=(i==null?void 0:i.voltage)||0),e.sp=="mg2"&&(t+=((i==null?void 0:i.mental)||0)+((i==null?void 0:i.protect)||0)),!e.te.includes(this)&&this.getCalcCost(e)>=e.apMax){let h=0,y=this.getSkill(e);h+=y.heart||0,e.sp=="tz"&&(h+=(y==null?void 0:y.voltage)||0),e.sp=="mg2"&&(h+=((y==null?void 0:y.mental)||0)+((y==null?void 0:y.protect)||0));let f=e.getAllCards().length/e.teMax;t+=h/(f+1)*f}return t}onCross(e,t){var i;(i=this.props)!=null&&i.cross&&this.props.cross(e,t,this)}matchAttrs(e){return Object.keys(e).every(t=>e[t]==null?!0:e[t]==this[t])}calcSubtractAp(e){let t=0;if(e!=null&&e.length)for(let i of e)this.matchAttrs({...i,cost:void 0})&&(t+=i.cost);return t}}const le=[{member:3,short:"kz",year:102,unit:"srb"},{member:4,short:"tz",year:102,unit:"drk"},{member:6,short:"mg",year:102,unit:"mrp"},{member:1,short:"kh",year:103,unit:"srb"},{member:2,short:"sy",year:103,unit:"drk"},{member:5,short:"rr",year:103,unit:"mrp"},{member:7,short:"gn",year:104,unit:"srb"},{member:8,short:"sz",year:104,unit:"drk"},{member:9,short:"hm",year:104,unit:"mrp"}],K=[{short:"圣夜吟",member:7,cost:8,main:"dress",reshuffle:!0,skill:{cards:["圣夜👗","圣夜👗","圣夜👗","圣夜👗","圣夜👗"]}},{short:"圣夜👗",member:"dress",cost:3,main:"reshuffle",reshuffle:!0,once:!0,skill:{mental:1,voltage:1}},{short:"pa吟",member:7,cost:4,main:"dress",skill:{cards:["pa👗","pa👗"]}},{short:"pa👗",member:"dress",cost:2,main:"ap",once:!0},{short:"lttf铃",member:8,cost:9,main:"voltage",skill:{voltage:1,mental:-1},drawFilters:[{member:9}]},{short:"上升姬芽",member:9,cost:3,main(r){return r!=null&&r.ignition?"reshuffle":"mental"},reshuffle:r=>r==null?void 0:r.ignition,skill:{mental:1,protect:1},afterSkill(r){r.ignition&&(r.timesDict[this.short]++,r.timesDict[this.short]>=3&&(r.ignition=!1,r.timesDict[this.short]=void 0),r.trigger({"ap-":[{unit:"mrp",cost:-3}]}))},cross(r,e){if(!r.ignition){let t=e.getMain(r);(t=="mental"||t=="protect")&&(r.ignition=!0),r.timesDict[this.short]==null&&(r.timesDict[this.short]=0)}}},{short:"pa姬芽",member:9,cost:4,main:"reshuffle",reshuffle:!0,skill:{protect:1}},{short:"织姬花帆",member:1,cost:4,main:"reshuffle",reshuffle:!0,skill:{mental:1}},{short:"音击花帆",member:1,cost:9,main:"heart",reshuffle:!0,yamaReshuffle:!0,skill:{heart:3},draw:{heart:1,mental:1}},{short:"lttf沙耶",member:2,cost:5,main:"voltage",skill:{voltage:1},drawFilters:[{member:6}]},{short:"沏茶瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{voltage:1},draw:{heart:1}},{short:"蛋糕瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{heart:1},draw:{heart:1}},{short:"花结梢",member:3,cost:13,main:"reshuffle",reshuffle:!0,drawFilters:[{unit:"srb"},{member:"dress"},{unit:"srb"},{member:"dress"},{unit:"srb"},{member:"dress"},{unit:"srb"},{member:"dress"}],skill:{"ap-":[{unit:"srb",cost:-3},{member:"dress",cost:-3}]},cross(r,e,t){e.unit=="srb"&&(r.trigger({heart:1}),t.teCostDelta-=3)}},{short:"kol梢",member:3,cost:9,main:"mental",skill:{mental:1,heart:1},draw:{"ap-":[{member:6,cost:-9}]},cross(r,e){e.member==6&&r.trigger({protect:1,heart:1})}},{short:"自由缀",member:4,cost:2,main:"mental",skill:{mental:1,heart:1},draw:r=>{let e={};return r.mental&&(e={heart:1}),e}},{short:"kol缀",member:4,cost:3,main:"voltage",skill:{voltage:1,heart:1},draw:{"ap-":[{member:3,cost:-3},{member:6,cost:-3}]},cross(r,e){e.member==6&&r.trigger({voltage:1,heart:1})}},{short:"af慈",member:6,cost:9,main:"protect",skill(r){let e={protect:1,heart:10,ap:-20};return r.sp=="mg2"&&(e.heart=9,e.spAp=15),e}},{short:"kol慈",member:6,cost:39,main:"heart",skill:{heart:2,cards:["💎"]},cross(r,e,t){(e.member==1||e.member==2||e.member==3||e.member==4||e.member==5||e.member==7||e.member==8||e.member==9)&&(t.teCostDelta-=3)}},{short:"💎",member:"jewelry",cost:1,main:"ap-",once:!0,skill:{"ap-":[{cost:-1}]},draw:{heart:1,voltage:1,protect:1}},{short:"舞会缀",member:4,cost:2,main:"voltage",skill:{voltage:1}},{short:"舞会沙耶",member:2,cost:2,main:"love+"},{short:"银河缀",member:4,cost:2,main:"voltage",skill(r){let e={voltage:1,heart:1};return r.sp=="tz2"&&(e.spAp=5),e}},{short:"银河慈",member:6,cost:5,main:"reshuffle",reshuffle:!0,skill(r){let e={mental:2,protect:1};return r.sp=="mg2"&&(e.spAp=20),e}},{short:"讴歌梢",member:3,cost:3,main:"love+",draw:{heart:1}},{short:"ritm梢",member:3,cost:2,main:"voltage",skill:{voltage:1},draw:{mental:1}},{short:"秋色梢",member:3,cost:6,main:"love+",draw:{mental:1}},{short:"自由梢",member:3,cost:2,main:"protect",skill:{protect:1},draw:r=>{let e={};return r.mental&&(e={protect:1}),e}},{short:"教师梢",member:3,cost:2,main:"heart",skill:{heart:1,mental:-1},draw:{mental:1}},{short:"ss缀",member:4,cost:3,main:"heart",skill:{heart:1},draw:{voltage:1}},{short:"雨伞缀",member:4,cost:5,main:"love+",draw:{heart:1}},{short:"花火缀",member:4,cost:3,main:"voltage",skill:{voltage:1},draw:{voltage:1}},{short:"秋色缀",member:4,cost:6,main:"heart",skill:r=>{let e={};return r.mental?e={heart:3}:e={heart:2},e},draw:{mental:1}},{short:"抱花缀",member:4,cost:4,main:"voltage",skill:{voltage:1},draw:{voltage:1}},{short:"音击缀",member:4,cost:9,main:"voltage",skill:{voltage:1,heart:3},draw:{voltage:1,protect:1}},{short:"af缀",member:4,cost:9,main:"voltage",skill(r){let e={voltage:2,heart:10,ap:-20};return r.sp=="tz"&&(e.heart=9),r.sp=="tz2"&&(e.spAp=20),e}},{short:"蛋糕慈",member:6,cost:4,main:"mental",skill:{mental:1},draw:{mental:1,protect:1}},{short:"舞会慈",member:6,cost:3,main:"love+",yamaUse:!0,skill:{mental:-1},draw:{mental:1}},{short:"圣诞慈",member:6,cost:4,main:"mental",skill:{mental:3},draw:{mental:1}},{short:"抱花慈",member:6,cost:4,main:"protect",skill:{protect:1},draw:{protect:1}},{short:"hsct慈",member:6,cost:4,main:"reshuffle",reshuffle:!0},{short:"ritm花帆",member:1,cost:1,main:"heart",skill:{heart:1},draw:{mental:1}},{short:"讴歌花帆",member:1,cost:3,main:"mental",skill:{mental:1},draw:{voltage:1}},{short:"雨伞花帆",member:1,cost:3,main:"voltage",skill:{voltage:1},draw:{mental:1}},{short:"自由花帆",member:1,cost:2,main:"voltage",skill:{voltage:1,heart:1},draw:r=>{let e={};return r.mental&&(e={voltage:1}),e}},{short:"舞会花帆",member:1,cost:6,main:"heart",skill:{heart:1}},{short:"偶活花帆",member:1,cost:9,main:"heart",reshuffle:!0,skill:{heart:1},cross(r,e,t){(e.member==2||e.member==5)&&(t.teCostDelta-=2)}},{short:"快乐花帆",member:1,cost:2,main:"mental",skill:{mental:1,voltage:1},draw:{mental:1,heart:1}},{short:"雨伞沙耶",member:2,cost:4,main:"mental",skill:{mental:1},draw:{voltage:1}},{short:"tc沙耶",member:2,cost:3,main:"love+",skill:{mental:-1},draw:{voltage:1}},{short:"宇宙沙耶",member:2,cost:4,main:"teMax",skill:{voltage:1}},{short:"沏茶沙耶",member:2,cost:2,main:"love+",skill:{voltage:1}},{short:"圣诞沙耶",member:2,cost:4,main:"voltage",skill:{voltage:1,heart:2},draw:{voltage:1}},{short:"db瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{voltage:1},draw:{voltage:1}},{short:"梦境瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{heart:1}},{short:"rod瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{mental:1},draw:{mental:1}},{short:"一专瑠璃",member:5,cost:5,main:"reshuffle",reshuffle:!0,skill:{heart:1}},{short:"abdl瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill:{mental:1}},{short:"白昼瑠璃",member:5,cost:3,main:"reshuffle",reshuffle:!0,skill:{mental:-1},draw:{heart:1}},{short:"mc瑠璃",member:5,cost:4,main:"reshuffle",reshuffle:!0,skill(r){let e;return r.ignition?e={heart:1}:e={ap:1},e}},{short:"ritm吟",member:7,cost:5,main:"dress",skill:{cards:["ritm👗1","ritm👗2","ritm👗3"]},draw:{protect:1}},{short:"ritm👗1",member:"dress",cost:1,main:"heart",once:!0,skill:{heart:1}},{short:"ritm👗2",member:"dress",cost:1,main:"voltage",once:!0,skill:{voltage:1}},{short:"ritm👗3",member:"dress",cost:1,main:"teMax",once:!0},{short:"蓝远吟",member:7,cost:3,main:"dress",skill:{cards:["蓝远👗","蓝远👗","蓝远👗"]},cross(r,e){e.unit=="srb"&&r.trigger({voltage:1})}},{short:"蓝远👗",member:"dress",cost:2,main:"reshuffle",reshuffle:!0,once:!0,skill:{heart:1}},{short:"花结吟",member:7,cost:13,teCostDelta(r){let e=0;for(let t of r)t.unit=="srb"&&(e-=3);return e},main:"dress",reshuffle:!0,skill:{cards:["花结👗1","花结👗1","花结👗1","花结👗2","花结👗2","花结👗2","花结👖3","花结👖3","花结👖3"]},drawFilters:[{member:"dress"},{member:"dress"},{member:"dress"},{member:"dress"},{member:"dress"},{member:"dress"},{member:"dress"},{member:"dress"}]},{short:"花结👗1",member:"dress",cost:3,main:"voltage",once:!0,skill(r){let e={voltage:2};return r.getAllCards().length>=33&&(r.sp=="tz2"?e.heart=1:e.heart=2),e}},{short:"花结👗2",member:"dress",cost:3,main:"protect",once:!0,skill(r){let e={protect:1};return r.getAllCards().length>=33&&(r.sp=="mg2"?e.heart=1:e.heart=2),e}},{short:"花结👖3",member:"dress",cost:3,main:"reshuffle",reshuffle:!0,once:!0,skill(r){if(r.getAllCards().length>=30)return{heart:2}},drawFilters:[{unit:"srb"},{unit:"srb"},{unit:"srb"},{unit:"srb"},{unit:"srb"},{unit:"srb"}]},{short:"db铃",member:8,cost:5,main:"heart",skill:{heart:1},afterSkill(r,e){e.costDelta--}},{short:"雪纺铃",member:8,cost:3,main:"mental",skill:{mental:1}}];let ee=class te{constructor(e){this.score=0,this.te=[],this.sute=[],this.yama=e,this.mental=!0,this.protect=!1,this.apMax=20,this.ignition=!1,this.timesDict={},this.cardTimesDict={apSkip:0},this.timesCount=0,this.cardsCount=0,this.sp="",this.effect="",this.teMax=8,this.ap=8,this.apSpeed=2.5,this.drawHeartCount=0,this.jewelryCountTarget=0,this.hasCostEffect=!1,this.testResults=[]}getAllCards(){return[...this.te,...this.sute,...this.yama]}getDrawYama(){return this.yama.length?this.yama:this.sute}start(){this.sp=="kz2"&&(this.ap=1/0);for(let e=0;e<this.teMax;e++){let t=Math.floor(Math.random()*this.yama.length),i=this.yama.splice(t,1)[0];this.te.push(i)}this.hasCostEffect=["st1a"].includes(this.effect),this.testAllCards()}draw(e,t){this.yama.length||(this.yama=[...this.sute],this.sute=[],this.effect=="kj1a"&&this.yama.forEach(m=>{m.getMain(this)=="reshuffle"&&m.cost++}));let i;t?(i=this.yama.filter(m=>m.matchAttrs(t)),i.length||(i=this.yama)):i=this.yama;let a=Math.floor(Math.random()*i.length),u=i[a];this.yama.splice(this.yama.indexOf(u),1),this.te[e]=u,u.onDraw(this)}autoAp(){this.sp!="kz2"&&this.addAp(this.apSpeed)}useCard(e){var a,u,m,o,h,y,f;if(e==null){this.cardTimesDict.apSkip++,this.autoAp(),this.timesCount++;return}let t=this.te[e];this.cardTimesDict[t.short]||(this.cardTimesDict[t.short]=0),this.cardTimesDict[t.short]++;let i=t.isReshuffle(this);this.sp!="kz2"&&this.addAp(-t.getCost(this.te)),t.cost=t.props.cost,t.onSkill(this);for(let b of this.te)b.onCross(this,t);if(this.sp=="sy"&&this.score++,i){for(let b in this.te)b!=e&&this.sute.push(this.te[b]);(a=t.props)!=null&&a.yamaReshuffle&&this.yama.push(...this.sute.splice(0));for(let b=0;b<this.teMax;b++)this.draw(b,(m=(u=t.props)==null?void 0:u.drawFilters)==null?void 0:m[b])}else this.draw(e,(h=(o=t.props)==null?void 0:o.drawFilters)==null?void 0:h[0]);if((y=t.props)!=null&&y.once||((f=t.props)!=null&&f.yamaUse?this.yama.push(t):this.sute.push(t)),t.afterSkill(this),this.timesCount++,this.cardsCount++,this.effect=="kj1b"&&this.cardsCount%5==0){this.sute.push(...this.te.splice(0));for(let b=0;b<this.teMax;b++)this.draw(b)}this.effect=="st1a"&&this.cardsCount%6==0&&this.getAllCards().forEach(b=>b.cost++),!this.protect&&this.sp!="mg2"&&(this.mental=!1),this.autoAp(),this.testAllCards()}calcTestDrawHeartCount(){let e=0,t=this.getAllCards(),i=t.filter(a=>a.short=="💎").length;if(i<this.jewelryCountTarget)for(let a=0;a<this.jewelryCountTarget-i;a++)t.push(new j("💎"));return t.forEach(a=>{e+=a.calcDrawHeartCount(this)}),this.drawHeartCount=e,e}testCard(e,t){var b,d,z,U,P,H,N,V,c;let i=t?t.short:this.te[e].short;if(i=="kol慈")return .01;if(["ritm吟","pa吟","花结吟"].includes(i))return-.01;let a=new te([]);for(let s of this.te)a.te.push(s.copy());for(let s of this.sute)a.sute.push(s.copy());for(let s of this.yama)a.yama.push(s.copy());a.mental=this.mental,a.protect=this.protect,a.ap=this.ap,a.apMax=this.apMax,a.apSpeed=this.apSpeed,a.ignition=this.ignition,a.timesDict={...this.timesDict},a.sp=this.sp,a.jewelryCountTarget=this.jewelryCountTarget;let u,m;if(t&&(u=a.te[e].getCost(a.te),a.te[e]=t,m=a.te[e].getCost(a.te),(a.sp=="mg2"||a.sp=="tz2"||a.sp=="kz2")&&(u=1,m=1),m>a.apMax))return 0;let o=a.te[e],h=o.getSkill(this),y=o.isReshuffle(a);o.onSkill(a);for(let s of a.te)s.onCross(a,o);a.calcTestDrawHeartCount();let f=a.score;if(y&&(f+=a.drawHeartCount*this.teMax/(a.getAllCards().length+(((b=h==null?void 0:h.cards)==null?void 0:b.length)??0))),((z=(d=o.props)==null?void 0:d.drawFilters)==null?void 0:z.length)==1&&!t){let s=(U=o.props)==null?void 0:U.drawFilters[0],n=a.getDrawYama().filter(k=>Object.keys(s).every(C=>k[C]==s[C]));n.forEach(k=>f+=a.testCard(e,k)/n.length)}return(P=o.props)!=null&&P.once&&(f+=((a.drawHeartCount-o.calcDrawHeartCount(a))/(a.getAllCards().length-1)-a.drawHeartCount/a.getAllCards().length)*this.teMax),(H=h==null?void 0:h.cards)!=null&&H.length&&(f+=(a.drawHeartCount/(a.getAllCards().length+((N=h==null?void 0:h.cards)==null?void 0:N.length))-a.drawHeartCount/a.getAllCards().length)*this.teMax),(V=h==null?void 0:h.cards)!=null&&V.length&&(f/=((c=h==null?void 0:h.cards)==null?void 0:c.length)+1),(h==null?void 0:h.ap)<=-a.apMax&&(f/=Math.ceil(Math.min(...a.te.filter(s=>s!=o&&s.member!="jewelry").map(s=>s.getCost()))/a.apSpeed)),o.short=="上升姬芽"&&(f*=3/4,this.hasCostEffect&&(f*=o.getCost())),t&&(f/=Math.max(2,(u+m)/u)),f<0?0:f}testAllCards(){this.testResults=this.te.map((e,t)=>this.testCard(t))}trigger(e){e&&(this.addAp(e.ap),this.addHeart(e.heart),this.addVoltage(e.voltage),this.addMental(e.mental),this.addProtect(e.protect),this.subtractAp(e["ap-"]),this.addCard(e.cards),this.addAp(e.spAp))}addHeart(e){e&&(this.score+=e)}addVoltage(e){e&&(this.sp=="tz"&&(this.score+=e),this.sp=="tz2"&&this.addAp(1*e))}addMental(e){e&&(e>0&&this.sp=="mg2"&&(this.score+=e,this.addAp(1*e)),e>0?this.mental=!0:e<0&&this.sp!="mg2"&&(this.mental=!1))}addProtect(e){e&&(this.sp=="mg2"&&(this.score+=e,this.addAp(2*e)),this.protect=!0)}subtractAp(e){if(e!=null&&e.length)for(let t of this.getAllCards())t.cost+=t.calcSubtractAp(e)}addCard(e){if(e!=null&&e.length)for(let t of e)this.yama.push(new j(t))}addAp(e){if(e){let t=this.ap+e;t>this.apMax&&(t=this.apMax),t<0&&(t=0),this.ap=Number(t.toFixed(2))}}};const ae={class:"cost"},ie={key:0,class:"close"},oe={key:1,class:"test"},ne={key:2,class:"time"},ue={__name:"Card",props:{card:{type:j},stage:{type:ee},te:{default:!1},close:{default:!1},pointerEvents:{default:"auto"}},setup(r){const e=r,t={heart:"rgb(204,39,39)","love+":"rgb(174,141,24)",voltage:"rgb(174,141,24)",mental:"rgb(48,124,24)",reshuffle:"rgb(134,82,195)",teMax:"rgb(134,82,195)",protect:"rgb(48,124,24)",dress:"rgb(134,82,195)",ap:"rgb(174,141,24)","ap-":"rgb(134,82,195)","":"transparent"},i={1:"#f8b500",2:"#5383c3",3:"#68be8d",4:"#ba2636",5:"#e7609e",6:"#c8c2c6",7:"#a2d7dd",8:"#fad764",9:"#9d8de2"};return(a,u)=>{var m,o;return v(),g("div",{class:"card",style:O({pointerEvents:r.te&&e.card.getCost(r.te?e.stage.te:void 0)>e.stage.ap?"none":e.pointerEvents})},[l("div",{class:"background",style:O({backgroundColor:i[e.card.member]?`${i[e.card.member]}`:"transparent"})},null,4),l("div",{style:O({fontWeight:e.card.isReshuffle(e.stage)?"bold":"",fontStyle:e.card.isReshuffle(e.stage)?"italic":""})},p(e.card.short),5),l("div",ae,p(e.card.getCost(r.te?e.stage.te:void 0)),1),l("div",{class:"main",style:O({backgroundColor:t[e.card.getMain(e.stage)]})},null,4),e.close?(v(),g("div",ie,"×")):I("",!0),e.te?(v(),g("div",oe,p(Number(e.stage.testResults[e.stage.te.indexOf(e.card)].toFixed(2))),1)):I("",!0),((m=e.stage)==null?void 0:m.timesDict[e.card.short])!=null?(v(),g("div",ne,p((o=e.stage)==null?void 0:o.timesDict[e.card.short]),1)):I("",!0)],4)}}},R=_(ue,[["__scopeId","data-v-5394f316"]]);function L(r){let e=[];for(let t=0;t<r.te.length;t++)r.te[t].getCost(r.te)<=r.ap&&r.testResults[t]>=0&&e.push(t);return e}function Y(r,e){let t=e.map(a=>r.testResults[a]),i=Math.max(...t);return e.filter((a,u)=>t[u]==i)}function W(r,e,t){let i=r.te.map((m,o)=>r.testResults[o]/r.te[o].getCalcCost(r)),a=e.map(m=>i[m]),u=Math.max(...a);if(!t&&u<=0&&Math.max(...i)>0){let m=Math.min(...e.map(o=>r.te[o].getCost(r.te)));return m<=r.apSpeed?e.filter(o=>r.te[o].getCost(r.te)==m):[]}else return e.filter((m,o)=>a[o]==u)}function me(r,e){let t=e.filter(u=>{var m;return(m=r.te[u].getSkill(r))==null?void 0:m["ap-"]});t.length||(t=e);let i=t.map(u=>{let m=r.te[u],o=0;return r.getAllCards().forEach(h=>{var y,f,b,d;(f=(y=h.props)==null?void 0:y.draw)!=null&&f["ap-"]&&(o+=m.calcSubtractAp((d=(b=h.props)==null?void 0:b.draw)==null?void 0:d["ap-"]))}),o}),a=Math.min(...i);return t.filter((u,m)=>i[m]==a)}function Q(r,e){let t=e.filter(i=>{var a,u;return(u=(a=r.te[i].props)==null?void 0:a.drawFilters)==null?void 0:u.length});return t.length?t:e}function X(r,e){let t=e.filter(i=>r.te[i].member=="dress");return t.length?t:e}function Z(r,e,t){if(r.getAllCards().filter(u=>u.member=="jewelry").length>e)return t;let a=t.filter(u=>r.te[u].member!="jewelry");return a.length?a:t}function B(r,e=8,t){let i,a;if(t==null&&(t=r.strategy??(r.sp=="mg2"||r.sp=="tz2"||r.sp=="kz2"?"score":"cost"),r.ap+r.apSpeed*2>=r.apMax&&(t="score")),!r.ignition&&r.te.find(u=>u.short=="上升姬芽")&&r.te.find(u=>(u.getMain(r)=="mental"||u.getMain(r)=="protect")&&u.short!="上升姬芽")&&(t=="score"?i=Y(r,L(r).filter(u=>{let m=r.te[u];return(m.getMain(r)=="mental"||m.getMain(r)=="protect")&&m.short!="上升姬芽"}))[0]:i=W(r,L(r).filter(u=>{let m=r.te[u];return(m.getMain(r)=="mental"||m.getMain(r)=="protect")&&m.short!="上升姬芽"}),!0)[0]),i==null&&(a=r.te.findIndex(u=>u.short=="kol慈"),a>=0&&r.getAllCards().filter(u=>u.member=="jewelry").length<e&&r.te[a].getCost(r.te)<(t=="score"?r.ap:r.ap+r.apSpeed*2)&&(i=a)),i==null&&(a=r.te.findIndex(u=>u.member=="jewelry"&&r.hasCostEffect),a>=0&&r.getAllCards().filter(u=>u.member=="jewelry").length>e&&(i=a)),i==null&&(t=="score"?i=Q(r,Z(r,e,Y(r,X(r,L(r)))))[0]:i=me(r,Q(r,Z(r,e,W(r,X(r,L(r))))))[0]),L(r).length&&i==null)debugger;return i}window.strategyPlay=B;const de={class:"grid"},he=["open"],fe={class:"grid"},pe={style:{"font-size":"small"}},ce=["disabled"],ve=["disabled"],be=["disabled"],ge=["disabled"],ye=["disabled"],ke=["disabled"],Ce=["disabled"],we=["disabled"],Se=["disabled"],De=["disabled"],Ae=["disabled"],Te=["disabled"],Me={style:{"text-align":"right"}},je={class:"flex-between"},xe={class:"flex-between"},Fe={class:"flex-between"},Ee={class:"grid"},ze={class:"grid"},Ve={class:"grid"},Ie={colspan:"6"},Pe={colspan:"2"},Ne={colspan:"2"},$e={colspan:"2"},Re={colspan:"2"},Le={colspan:"2"},Ue={colspan:"2"},He=["onClick"],Oe={colspan:"2",style:{"text-align":"center"}},qe={__name:"Stage",setup(r){const e=M(!1),t=M(!1),i=M([]),a=M(!1),u=M(),m=M(),o=M({qc:140,sh:3.3,deckLength:17,apSpeed:2.34,sp:"",effect:"",jewelryCountTargetMin:0,jewelryCountTargetMax:16,cardTimes:373,skipTimes:36,strategy:"cost",jewelryCountTarget:0});let h=localStorage.getItem("formData");try{h&&(o.value={...o.value,...JSON.parse(h)})}catch{}const y=K.map(c=>new j(c.short)).sort((c,s)=>typeof c.member=="number"&&typeof s.member=="number"?c.member-s.member:typeof c.member=="number"&&typeof s.member!="number"?-1:typeof c.member!="number"&&typeof s.member=="number"||c.member>s.member?1:c.member<s.member?-1:0),f=M([]);let b=localStorage.getItem("deck");try{b&&(f.value=JSON.parse(b).map(c=>new j(c)))}catch{}f.value.length||(f.value=K.filter(c=>typeof c.member=="number").map(c=>new j(c.short)).slice(0,16));const d=M();window.getStage=()=>d.value;const z=()=>{d.value=new ee([]),d.value.apSpeed=Number(o.value.apSpeed),d.value.sp=o.value.sp,d.value.effect=o.value.effect,d.value.strategy=o.value.strategy,d.value.yama=f.value.map(c=>new j(c.short))};z();const U=()=>{e.value=!1,z()},P=async c=>{var s;if(localStorage.setItem("formData",JSON.stringify(o.value)),localStorage.setItem("deck",JSON.stringify(f.value.map(n=>n.short))),a.value=!1,e.value=!0,t.value=c,c){i.value.push({deck:f.value.map(n=>n.short).join(", "),formData:{...o.value},dict:{}});for(let n=Number(o.value.jewelryCountTargetMin);n<=Number(o.value.jewelryCountTargetMax)&&e.value;n++){let k=0,C=0,D={apSkip:0};for(let T of f.value)D[T.short]=0;for(let T=0;T<Number(o.value.skipTimes);T++){await H(),z(),d.value.jewelryCountTarget=n,d.value.start();for(let x=0;x<Number(o.value.cardTimes)&&e.value;x++)d.value.useCard(B(d.value,n));if(!e.value)break;k+=d.value.score,C+=(s=d.value.getAllCards().filter(x=>x.member=="jewelry"))==null?void 0:s.length;for(let x in d.value.cardTimesDict)D[x]||(D[x]=0),D[x]+=d.value.cardTimesDict[x]}if(!e.value)break;for(let T in D)D[T]=Number((D[T]/o.value.skipTimes).toFixed(2));i.value.at(-1).dict[n]={score:Number((k/o.value.skipTimes).toFixed(2)),jewelryCount:Number((C/o.value.skipTimes).toFixed(2)),cardTimesDict:D}}e.value=!1}else z(),d.value.jewelryCountTarget=o.value.jewelryCountTarget,d.value.start(),V()},H=async c=>new Promise(s=>setTimeout(s,c)),N=M(-1),V=()=>{N.value=B(d.value,o.value.jewelryCountTarget)};return(c,s)=>(v(),g("div",null,[!e.value||t.value?(v(),g(A,{key:0},[s[22]||(s[22]=l("h2",null,"DECK",-1)),s[23]||(s[23]=l("hr",null,null,-1)),l("div",de,[(v(!0),g(A,null,E(f.value,(n,k)=>(v(),$(R,{card:n,close:!0,onClick:C=>f.value.splice(k,1),"pointer-events":e.value?"none":"auto"},null,8,["card","onClick","pointer-events"]))),256))]),l("details",{open:a.value},[s[21]||(s[21]=l("summary",null,[w(" CARD "),l("hr")],-1)),l("div",fe,[(v(!0),g(A,null,E(G(y),(n,k)=>(v(),$(R,{card:n,onClick:C=>f.value.push(new(G(j))(n.short)),"pointer-events":e.value?"none":"auto"},null,8,["card","onClick","pointer-events"]))),256))])],8,he)],64)):I("",!0),l("form",null,[s[42]||(s[42]=l("h2",null,"STAGE",-1)),s[43]||(s[43]=l("hr",null,null,-1)),l("div",pe,[s[24]||(s[24]=l("label",{for:"qc"},"曲长: ",-1)),S(l("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>o.value.qc=n),type:"text",disabled:e.value,id:"qc"},null,8,ce),[[F,o.value.qc]]),s[25]||(s[25]=w(" s  ")),s[26]||(s[26]=l("label",{for:"qc"},"生化值: ",-1)),S(l("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>o.value.sh=n),type:"text",disabled:e.value,id:"sh"},null,8,ve),[[F,o.value.sh]]),s[27]||(s[27]=w("   ")),s[28]||(s[28]=l("label",{for:"deckLength"},"卡组牌数: ",-1)),S(l("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>o.value.deckLength=n),type:"number",disabled:e.value,id:"deckLength"},null,8,be),[[F,o.value.deckLength]]),s[29]||(s[29]=w("   ")),l("button",{onClick:s[3]||(s[3]=n=>{o.value.apSpeed=Number((1200/o.value.qc/o.value.sh*(1-.1*Math.min(9,18-o.value.deckLength))).toFixed(2)),o.value.cardTimes=Math.floor(o.value.qc*8/3)}),disabled:e.value}," 计算AP回复速度/暂停回数 ",8,ge)]),l("div",null,[s[30]||(s[30]=l("label",{for:"ap"},"AP回复速度: ",-1)),S(l("input",{"onUpdate:modelValue":s[4]||(s[4]=n=>o.value.apSpeed=n),type:"text",disabled:e.value,id:"ap"},null,8,ye),[[F,o.value.apSpeed]])]),l("div",null,[s[31]||(s[31]=l("label",{for:"card-time"},"暂停回数: ",-1)),S(l("input",{"onUpdate:modelValue":s[5]||(s[5]=n=>o.value.cardTimes=n),disabled:e.value,type:"number",id:"card-time"},null,8,ke),[[F,o.value.cardTimes]])]),l("div",null,[s[33]||(s[33]=l("label",{for:"sp"},"SP: ",-1)),S(l("select",{"onUpdate:modelValue":s[6]||(s[6]=n=>o.value.sp=n),disabled:e.value,id:"sp",onChange:s[7]||(s[7]=n=>o.value.sp.includes("2")?o.value.strategy="score":o.value.strategy="cost")},s[32]||(s[32]=[re('<option value="" data-v-146b05ee>--</option><option value="tz" data-v-146b05ee>舞会缀</option><option value="sy" data-v-146b05ee>舞会沙耶</option><option value="tz2" data-v-146b05ee>银河缀</option><option value="mg2" data-v-146b05ee>银河慈</option>',5)]),40,Ce),[[q,o.value.sp]])]),l("div",null,[s[35]||(s[35]=l("label",{for:"effect"},"效果: ",-1)),S(l("select",{"onUpdate:modelValue":s[8]||(s[8]=n=>o.value.effect=n),disabled:e.value,id:"effect"},s[34]||(s[34]=[l("option",{value:""},"--",-1),l("option",{value:"st1a"}," (2025年1月公会战A) skill6回使用 deck全card消费AP+1 ",-1),l("option",{value:"kj1a"}," (2025年1月个人战A) 山札切 main效果reshuffle效果deck全card消费AP+1 ",-1),l("option",{value:"kj1b"}," (2025年1月个人战B) skill5回使用 手札全捨 山札手札上限引直 ",-1)]),8,we),[[q,o.value.effect]])]),l("div",null,[s[37]||(s[37]=l("label",{for:"strategy"},"策略: ",-1)),S(l("select",{"onUpdate:modelValue":s[9]||(s[9]=n=>o.value.strategy=n),disabled:e.value,id:"strategy"},s[36]||(s[36]=[l("option",{value:"cost"},"LOVE/AP优先",-1),l("option",{value:"score"},"LOVE优先",-1)]),8,Se),[[q,o.value.strategy]])]),l("div",null,[s[38]||(s[38]=l("label",{for:"jewelry"},"LIVE TARGET💎: ",-1)),S(l("input",{"onUpdate:modelValue":s[10]||(s[10]=n=>o.value.jewelryCountTarget=n),type:"number",id:"jewelry",onChange:s[11]||(s[11]=n=>{e.value&&!t.value&&(d.value.jewelryCountTarget=c.jewelryCountTarget,d.value.testAllCards(),V())})},null,544),[[F,o.value.jewelryCountTarget]])]),l("div",null,[s[39]||(s[39]=l("label",{for:"jewelry"},"SKIP TARGET💎: ",-1)),S(l("input",{"onUpdate:modelValue":s[12]||(s[12]=n=>o.value.jewelryCountTargetMin=n),disabled:e.value,type:"number",id:"jewelry"},null,8,De),[[F,o.value.jewelryCountTargetMin]]),s[40]||(s[40]=w(" ~ ")),S(l("input",{"onUpdate:modelValue":s[13]||(s[13]=n=>o.value.jewelryCountTargetMax=n),disabled:e.value,type:"number",id:"jewelry"},null,8,Ae),[[F,o.value.jewelryCountTargetMax]])]),l("div",null,[s[41]||(s[41]=l("label",{for:"skip-time"},"SKIP回数: ",-1)),S(l("input",{"onUpdate:modelValue":s[14]||(s[14]=n=>o.value.skipTimes=n),disabled:e.value,type:"number",id:"skip-time"},null,8,Te),[[F,o.value.skipTimes]])])]),l("div",Me,[e.value&&!t.value?(v(),g("button",{key:0,onClick:s[15]||(s[15]=n=>{m.value={key:d.value.jewelryCountTarget,score:d.value.score,cardTimesDict:d.value.cardTimesDict},J(()=>u.value.showModal())})}," LOG ")):I("",!0),e.value?(v(),g("button",{key:1,onClick:U},"RETIRE")):(v(),g(A,{key:2},[i.value.length?(v(),g("button",{key:0,onClick:s[16]||(s[16]=n=>i.value=[])}," CLEAR RESULTS ")):I("",!0),l("button",{onClick:s[17]||(s[17]=n=>P(!0))},"SKIP"),l("button",{onClick:s[18]||(s[18]=n=>P(!1))},"LIVE START")],64))]),e.value&&!t.value?(v(),g(A,{key:1},[l("h2",je,[l("div",null,p(d.value.score),1),l("div",null,p(d.value.timesCount)+"回",1)]),l("h2",xe,[l("div",null,p(d.value.sp=="mg2"?"∞":d.value.mental?"100%":"-%"),1),l("div",null,p(d.value.ignition?"🔥":"🚫")+" "+p(d.value.sp=="kz2"?"∞":d.value.ap),1)]),s[44]||(s[44]=l("div",{style:{"text-align":"right"}},null,-1)),l("h2",Fe,[l("div",null,"手札 "+p(d.value.te.length),1),l("button",{onClick:s[19]||(s[19]=n=>{d.value.useCard(void 0),V()})}," AP SKIP ")]),s[45]||(s[45]=l("hr",null,null,-1)),l("div",Ee,[(v(!0),g(A,null,E(d.value.te,(n,k)=>(v(),$(R,{card:n,stage:d.value,te:!0,class:se({highlight:N.value==k}),onClick:C=>{d.value.useCard(k),V()}},null,8,["card","stage","class","onClick"]))),256))]),l("h2",null,"捨札 "+p(d.value.sute.length),1),s[46]||(s[46]=l("hr",null,null,-1)),l("div",ze,[(v(!0),g(A,null,E(d.value.sute,(n,k)=>(v(),$(R,{card:n,stage:d.value,"pointer-events":"none"},null,8,["card","stage"]))),256))]),l("h2",null,"山札 "+p(d.value.yama.length),1),s[47]||(s[47]=l("hr",null,null,-1)),l("div",Ve,[(v(!0),g(A,null,E(d.value.yama,(n,k)=>(v(),$(R,{card:n,stage:d.value,"pointer-events":"none"},null,8,["card","stage"]))),256))])],64)):(v(!0),g(A,{key:2},E(i.value,(n,k)=>(v(),g("table",null,[l("thead",null,[l("tr",null,[l("td",Ie,p(n.deck),1)]),l("tr",null,[l("td",Pe,"AP回复速度: "+p(n.formData.apSpeed),1),l("td",Ne,"暂停回数: "+p(n.formData.cardTimes),1),l("td",$e,"SKIP回数: "+p(n.formData.skipTimes),1)]),l("tr",null,[l("td",Re,"SP: "+p(n.formData.sp),1),l("td",Le,"效果: "+p(n.formData.effect),1),l("td",Ue,"策略: "+p(n.formData.strategy),1)]),s[48]||(s[48]=l("tr",null,[l("td",null,[w("target"),l("br"),w("💎")]),l("td",null,[w("kol慈"),l("br"),w("回数")]),l("td",null,[w("💎"),l("br"),w("回数")]),l("td",null,[w("AP SKIP"),l("br"),w("回数")]),l("td",null,"heart"),l("td",null,"%")],-1))]),l("tbody",null,[(v(!0),g(A,null,E(n.dict,(C,D)=>(v(),g("tr",{style:{cursor:"pointer"},onClick:T=>{m.value={key:D,...C},J(()=>u.value.showModal())}},[l("td",null,p(D),1),l("td",null,p(C.cardTimesDict.kol慈??0),1),l("td",null,p(C.cardTimesDict["💎"]??0),1),l("td",null,p(C.cardTimesDict.apSkip),1),l("td",null,p(C.score),1),l("td",null,p(Number((C.score/Math.max(...Object.values(n.dict).map(T=>T.score))*100).toFixed(2))),1)],8,He))),256))])]))),256)),m.value?(v(),g("dialog",{key:3,ref_key:"dialog",ref:u},[l("table",null,[l("thead",null,[l("tr",null,[s[49]||(s[49]=l("td",null,"target💎",-1)),l("td",null,p(m.value.key),1)]),l("tr",null,[s[50]||(s[50]=l("td",null,"heart",-1)),l("td",null,p(m.value.score),1)])]),l("tbody",null,[(v(!0),g(A,null,E(m.value.cardTimesDict,(n,k)=>(v(),g("tr",null,[l("td",null,p(k),1),l("td",null,p(n)+"回",1)]))),256))]),l("tfoot",null,[l("tr",null,[l("td",Oe,[l("button",{onClick:s[20]||(s[20]=n=>m.value=void 0)},"关闭")])])])])],512)):I("",!0)]))}},Be=_(qe,[["__scopeId","data-v-146b05ee"]]);export{Be as default};
