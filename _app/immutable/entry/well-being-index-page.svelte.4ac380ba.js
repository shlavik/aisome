import{S as ot,i as rt,s as ft,k as f,a as g,r as L,l as u,m as v,c,u as N,h as m,p as l,b as ut,I as e,L as mt,v as q,n as st,J as ye,P as pt,x as qe,U as Oe,z as ze,A as Se,B as De,V as Ve,g as Me,d as Te,C as Be,o as ht,N as vt}from"../chunks/index.c9e1d74b.js";import{l as _t,b as nt,a as it,c as dt}from"../chunks/index.034f6a84.js";import{M as gt}from"../chunks/MainButton.4d74500b.js";const p={en:{step:"Step 13 of 13",final_step:"You are on the final step!",indicate:"Please indicate for each of the five statements which is closet to how you have been feeling over the last two weeks.",first:"I have felt cheerful and in good spirits",second:"I have felt calm and relaxed",third:"I have felt active and vigorous",fourth:"I woke up feeling fresh and rested",fifth:"My daily life has been filled with things that interest me",all_time:"All of the time",most_time:"Most of the time",more_half_time:"More than half of the time",less_half_time:"Less than half of the time",some_time:"Some of the time",no_time:"At no time",finish:"FINISH"},ru:{step:"Шаг 13 из 13",final_step:"Вы на последнем шаге!",indicate:"Пожалуйста, укажите значение для каждого из пяти утверждений, которое ближе всего к тому, как вы себя чувствовали в течение последних двух недель.",first:"Я чувствую себя бодрой(-ым) и в хорошем настроении",second:"Я чувствую себя спокойной(-ым) и раскованной(-ым)",third:"Я чувствую себя активной(-ым) и энергичной(-ым)",fourth:"Я просыпаюсь и чувствую себя свежей(-им) и отдохнувшей(-им)",fifth:"Каждый день со мной происходят вещи, представляющие для меня интерес",all_time:"Все время",most_time:"Большую часть времени",more_half_time:"Более половины времени",less_half_time:"Менее половины времени",some_time:"Некоторое время",no_time:"Никогда",finish:"ЗАВЕРШИТЬ"}};function ct(t){let n,_,b,k,j,d,A=p[t[1]].all_time+"",r,R,Z,S,D,x,E,i,U=p[t[1]].most_time+"",G,X,se,Y,w,ne,ce,M,O=p[t[1]].more_half_time+"",ie,ee,oe,K,$,re,be,T,V=p[t[1]].less_half_time+"",fe,te,ue,Q,I,_e,Ee,B,C=p[t[1]].some_time+"",me,le,pe,W,P,he,we,H,F=p[t[1]].no_time+"",ve,ae,de,Ae;return{c(){n=f("fieldset"),_=f("p"),b=f("input"),j=g(),d=f("label"),r=L(A),Z=g(),S=f("p"),D=f("input"),E=g(),i=f("label"),G=L(U),se=g(),Y=f("p"),w=f("input"),ce=g(),M=f("label"),ie=L(O),oe=g(),K=f("p"),$=f("input"),be=g(),T=f("label"),fe=L(V),ue=g(),Q=f("p"),I=f("input"),Ee=g(),B=f("label"),me=L(C),pe=g(),W=f("p"),P=f("input"),we=g(),H=f("label"),ve=L(F),this.h()},l(o){n=u(o,"FIELDSET",{id:!0,class:!0});var s=v(n);_=u(s,"P",{class:!0});var ge=v(_);b=u(ge,"INPUT",{type:!0,id:!0,name:!0}),j=c(ge),d=u(ge,"LABEL",{for:!0});var y=v(d);r=N(y,A),y.forEach(m),ge.forEach(m),Z=c(s),S=u(s,"P",{class:!0});var z=v(S);D=u(z,"INPUT",{type:!0,id:!0,name:!0}),E=c(z),i=u(z,"LABEL",{for:!0});var Je=v(i);G=N(Je,U),Je.forEach(m),z.forEach(m),se=c(s),Y=u(s,"P",{class:!0});var $e=v(Y);w=u($e,"INPUT",{type:!0,id:!0,name:!0}),ce=c($e),M=u($e,"LABEL",{for:!0});var Re=v(M);ie=N(Re,O),Re.forEach(m),$e.forEach(m),oe=c(s),K=u(s,"P",{class:!0});var Ie=v(K);$=u(Ie,"INPUT",{type:!0,id:!0,name:!0}),be=c(Ie),T=u(Ie,"LABEL",{for:!0});var Ge=v(T);fe=N(Ge,V),Ge.forEach(m),Ie.forEach(m),ue=c(s),Q=u(s,"P",{class:!0});var Pe=v(Q);I=u(Pe,"INPUT",{type:!0,id:!0,name:!0}),Ee=c(Pe),B=u(Pe,"LABEL",{for:!0});var Xe=v(B);me=N(Xe,C),Xe.forEach(m),Pe.forEach(m),pe=c(s),W=u(s,"P",{class:!0});var Le=v(W);P=u(Le,"INPUT",{type:!0,id:!0,name:!0}),we=c(Le),H=u(Le,"LABEL",{for:!0});var Ye=v(H);ve=N(Ye,F),Ye.forEach(m),Le.forEach(m),s.forEach(m),this.h()},h(){l(b,"type","radio"),l(b,"id",k="all-time-"+t[0]),l(b,"name",t[0]),b.value="5",l(d,"for",R="all-time-"+t[0]),l(_,"class","svelte-150tp87"),l(D,"type","radio"),l(D,"id",x="most-time-"+t[0]),l(D,"name",t[0]),D.value="4",l(i,"for",X="most-time-"+t[0]),l(S,"class","svelte-150tp87"),l(w,"type","radio"),l(w,"id",ne="more-half-time-"+t[0]),l(w,"name",t[0]),w.value="3",l(M,"for",ee="more-half-time-"+t[0]),l(Y,"class","svelte-150tp87"),l($,"type","radio"),l($,"id",re="less-half-time-"+t[0]),l($,"name",t[0]),$.value="2",l(T,"for",te="less-half-time-"+t[0]),l(K,"class","svelte-150tp87"),l(I,"type","radio"),l(I,"id",_e="some-time-"+t[0]),l(I,"name",t[0]),I.value="1",l(B,"for",le="some-time-"+t[0]),l(Q,"class","svelte-150tp87"),l(P,"type","radio"),l(P,"id",he="no-time-"+t[0]),l(P,"name",t[0]),P.value="0",l(H,"for",ae="no-time-"+t[0]),l(W,"class","svelte-150tp87"),l(n,"id",t[0]),l(n,"class","svelte-150tp87")},m(o,s){ut(o,n,s),e(n,_),e(_,b),e(_,j),e(_,d),e(d,r),e(n,Z),e(n,S),e(S,D),e(S,E),e(S,i),e(i,G),e(n,se),e(n,Y),e(Y,w),e(Y,ce),e(Y,M),e(M,ie),e(n,oe),e(n,K),e(K,$),e(K,be),e(K,T),e(T,fe),e(n,ue),e(n,Q),e(Q,I),e(Q,Ee),e(Q,B),e(B,me),e(n,pe),e(n,W),e(W,P),e(W,we),e(W,H),e(H,ve),de||(Ae=mt(n,"change",t[2]),de=!0)},p(o,[s]){s&1&&k!==(k="all-time-"+o[0])&&l(b,"id",k),s&1&&l(b,"name",o[0]),s&2&&A!==(A=p[o[1]].all_time+"")&&q(r,A),s&1&&R!==(R="all-time-"+o[0])&&l(d,"for",R),s&1&&x!==(x="most-time-"+o[0])&&l(D,"id",x),s&1&&l(D,"name",o[0]),s&2&&U!==(U=p[o[1]].most_time+"")&&q(G,U),s&1&&X!==(X="most-time-"+o[0])&&l(i,"for",X),s&1&&ne!==(ne="more-half-time-"+o[0])&&l(w,"id",ne),s&1&&l(w,"name",o[0]),s&2&&O!==(O=p[o[1]].more_half_time+"")&&q(ie,O),s&1&&ee!==(ee="more-half-time-"+o[0])&&l(M,"for",ee),s&1&&re!==(re="less-half-time-"+o[0])&&l($,"id",re),s&1&&l($,"name",o[0]),s&2&&V!==(V=p[o[1]].less_half_time+"")&&q(fe,V),s&1&&te!==(te="less-half-time-"+o[0])&&l(T,"for",te),s&1&&_e!==(_e="some-time-"+o[0])&&l(I,"id",_e),s&1&&l(I,"name",o[0]),s&2&&C!==(C=p[o[1]].some_time+"")&&q(me,C),s&1&&le!==(le="some-time-"+o[0])&&l(B,"for",le),s&1&&he!==(he="no-time-"+o[0])&&l(P,"id",he),s&1&&l(P,"name",o[0]),s&2&&F!==(F=p[o[1]].no_time+"")&&q(ve,F),s&1&&ae!==(ae="no-time-"+o[0])&&l(H,"for",ae),s&1&&l(n,"id",o[0])},i:st,o:st,d(o){o&&m(n),de=!1,Ae()}}}function bt(t,n,_){let b;ye(t,_t,r=>_(1,b=r));const k=pt();let{name:j=Math.trunc(Math.random()*Number.MAX_SAFE_INTEGER)}=n,{value:d}=n;function A({target:r}){const R=r.id.slice(0,-2);_(3,d=Number(r.value)),k("answer",{name:j,id:R,value:d})}return t.$$set=r=>{"name"in r&&_(0,j=r.name),"value"in r&&_(3,d=r.value)},[j,b,A,d]}class Ce extends ot{constructor(n){super(),rt(this,n,bt,ct,ft,{name:0,value:3})}}function Et(t){let n,_,b=p[t[2]].step+"",k,j,d,A=p[t[2]].final_step+"",r,R,Z,S=p[t[2]].indicate+"",D,x,E,i,U,G,X=p[t[2]].first+"",se,Y,w,ne,ce,M,O,ie,ee=p[t[2]].second+"",oe,K,$,re,be,T,V,fe,te=p[t[2]].third+"",ue,Q,I,_e,Ee,B,C,me,le=p[t[2]].fourth+"",pe,W,P,he,we,H,F,ve,ae=p[t[2]].fifth+"",de,Ae,o,s,ge,y,z;function Je(a){t[5](a)}let $e={name:"1"};t[0][0]!==void 0&&($e.value=t[0][0]),w=new Ce({props:$e}),qe.push(()=>Oe(w,"value",Je)),w.$on("answer",Fe);function Re(a){t[6](a)}let Ie={name:"2"};t[0][1]!==void 0&&(Ie.value=t[0][1]),$=new Ce({props:Ie}),qe.push(()=>Oe($,"value",Re)),$.$on("answer",Fe);function Ge(a){t[7](a)}let Pe={name:"3"};t[0][2]!==void 0&&(Pe.value=t[0][2]),I=new Ce({props:Pe}),qe.push(()=>Oe(I,"value",Ge)),I.$on("answer",Fe);function Xe(a){t[8](a)}let Le={name:"4"};t[0][3]!==void 0&&(Le.value=t[0][3]),P=new Ce({props:Le}),qe.push(()=>Oe(P,"value",Xe)),P.$on("answer",Fe);function Ye(a){t[9](a)}let at={name:"5"};return t[0][4]!==void 0&&(at.value=t[0][4]),o=new Ce({props:at}),qe.push(()=>Oe(o,"value",Ye)),o.$on("answer",Fe),y=new gt({props:{text:t[3],visible:t[1],onClick:t[4]}}),{c(){n=f("section"),_=f("h3"),k=L(b),j=g(),d=f("p"),r=L(A),R=g(),Z=f("p"),D=L(S),x=g(),E=f("form"),i=f("div"),U=f("h3"),G=L("1) "),se=L(X),Y=g(),ze(w.$$.fragment),ce=g(),M=f("div"),O=f("h3"),ie=L("2) "),oe=L(ee),K=g(),ze($.$$.fragment),be=g(),T=f("div"),V=f("h3"),fe=L("3) "),ue=L(te),Q=g(),ze(I.$$.fragment),Ee=g(),B=f("div"),C=f("h3"),me=L("4) "),pe=L(le),W=g(),ze(P.$$.fragment),we=g(),H=f("div"),F=f("h3"),ve=L("5) "),de=L(ae),Ae=g(),ze(o.$$.fragment),ge=g(),ze(y.$$.fragment),this.h()},l(a){n=u(a,"SECTION",{});var h=v(n);_=u(h,"H3",{});var He=v(_);k=N(He,b),He.forEach(m),j=c(h),d=u(h,"P",{});var Ue=v(d);r=N(Ue,A),Ue.forEach(m),R=c(h),Z=u(h,"P",{});var ke=v(Z);D=N(ke,S),ke.forEach(m),x=c(h),E=u(h,"FORM",{class:!0});var J=v(E);i=u(J,"DIV",{class:!0});var Ne=v(i);U=u(Ne,"H3",{class:!0});var je=v(U);G=N(je,"1) "),se=N(je,X),je.forEach(m),Y=c(Ne),Se(w.$$.fragment,Ne),Ne.forEach(m),ce=c(J),M=u(J,"DIV",{class:!0});var Ke=v(M);O=u(Ke,"H3",{class:!0});var xe=v(O);ie=N(xe,"2) "),oe=N(xe,ee),xe.forEach(m),K=c(Ke),Se($.$$.fragment,Ke),Ke.forEach(m),be=c(J),T=u(J,"DIV",{class:!0});var Qe=v(T);V=u(Qe,"H3",{class:!0});var et=v(V);fe=N(et,"3) "),ue=N(et,te),et.forEach(m),Q=c(Qe),Se(I.$$.fragment,Qe),Qe.forEach(m),Ee=c(J),B=u(J,"DIV",{class:!0});var We=v(B);C=u(We,"H3",{class:!0});var tt=v(C);me=N(tt,"4) "),pe=N(tt,le),tt.forEach(m),W=c(We),Se(P.$$.fragment,We),We.forEach(m),we=c(J),H=u(J,"DIV",{class:!0});var Ze=v(H);F=u(Ze,"H3",{class:!0});var lt=v(F);ve=N(lt,"5) "),de=N(lt,ae),lt.forEach(m),Ae=c(Ze),Se(o.$$.fragment,Ze),Ze.forEach(m),J.forEach(m),ge=c(h),Se(y.$$.fragment,h),h.forEach(m),this.h()},h(){l(U,"class","svelte-1w0jzf1"),l(i,"class","svelte-1w0jzf1"),l(O,"class","svelte-1w0jzf1"),l(M,"class","svelte-1w0jzf1"),l(V,"class","svelte-1w0jzf1"),l(T,"class","svelte-1w0jzf1"),l(C,"class","svelte-1w0jzf1"),l(B,"class","svelte-1w0jzf1"),l(F,"class","svelte-1w0jzf1"),l(H,"class","svelte-1w0jzf1"),l(E,"class","svelte-1w0jzf1")},m(a,h){ut(a,n,h),e(n,_),e(_,k),e(n,j),e(n,d),e(d,r),e(n,R),e(n,Z),e(Z,D),e(n,x),e(n,E),e(E,i),e(i,U),e(U,G),e(U,se),e(i,Y),De(w,i,null),e(E,ce),e(E,M),e(M,O),e(O,ie),e(O,oe),e(M,K),De($,M,null),e(E,be),e(E,T),e(T,V),e(V,fe),e(V,ue),e(T,Q),De(I,T,null),e(E,Ee),e(E,B),e(B,C),e(C,me),e(C,pe),e(B,W),De(P,B,null),e(E,we),e(E,H),e(H,F),e(F,ve),e(F,de),e(H,Ae),De(o,H,null),e(n,ge),De(y,n,null),z=!0},p(a,[h]){(!z||h&4)&&b!==(b=p[a[2]].step+"")&&q(k,b),(!z||h&4)&&A!==(A=p[a[2]].final_step+"")&&q(r,A),(!z||h&4)&&S!==(S=p[a[2]].indicate+"")&&q(D,S),(!z||h&4)&&X!==(X=p[a[2]].first+"")&&q(se,X);const He={};!ne&&h&1&&(ne=!0,He.value=a[0][0],Ve(()=>ne=!1)),w.$set(He),(!z||h&4)&&ee!==(ee=p[a[2]].second+"")&&q(oe,ee);const Ue={};!re&&h&1&&(re=!0,Ue.value=a[0][1],Ve(()=>re=!1)),$.$set(Ue),(!z||h&4)&&te!==(te=p[a[2]].third+"")&&q(ue,te);const ke={};!_e&&h&1&&(_e=!0,ke.value=a[0][2],Ve(()=>_e=!1)),I.$set(ke),(!z||h&4)&&le!==(le=p[a[2]].fourth+"")&&q(pe,le);const J={};!he&&h&1&&(he=!0,J.value=a[0][3],Ve(()=>he=!1)),P.$set(J),(!z||h&4)&&ae!==(ae=p[a[2]].fifth+"")&&q(de,ae);const Ne={};!s&&h&1&&(s=!0,Ne.value=a[0][4],Ve(()=>s=!1)),o.$set(Ne);const je={};h&8&&(je.text=a[3]),h&2&&(je.visible=a[1]),y.$set(je)},i(a){z||(Me(w.$$.fragment,a),Me($.$$.fragment,a),Me(I.$$.fragment,a),Me(P.$$.fragment,a),Me(o.$$.fragment,a),Me(y.$$.fragment,a),z=!0)},o(a){Te(w.$$.fragment,a),Te($.$$.fragment,a),Te(I.$$.fragment,a),Te(P.$$.fragment,a),Te(o.$$.fragment,a),Te(y.$$.fragment,a),z=!1},d(a){a&&m(n),Be(w),Be($),Be(I),Be(P),Be(o),Be(y)}}}function Fe({detail:t}){}function wt(t,n,_){let b,k,j,d,A;ye(t,dt,i=>_(10,j=i)),ye(t,it,i=>_(11,d=i)),ye(t,_t,i=>_(2,A=i));const r=[null,null,null,null,null];ht(()=>nt("wbi|start"));function R(i){nt("wbi|finish"),vt(it,d={...d,["well-being-index"]:r},d);try{const G=JSON.stringify({answers:d,logs:j});i.sendData(G)}catch{const G={answers:d,logs:[j[0],[null,"ERASED"],j[j.length-1]]},X=JSON.stringify(G);i.sendData(X)}}function Z(i){t.$$.not_equal(r[0],i)&&(r[0]=i,_(0,r))}function S(i){t.$$.not_equal(r[1],i)&&(r[1]=i,_(0,r))}function D(i){t.$$.not_equal(r[2],i)&&(r[2]=i,_(0,r))}function x(i){t.$$.not_equal(r[3],i)&&(r[3]=i,_(0,r))}function E(i){t.$$.not_equal(r[4],i)&&(r[4]=i,_(0,r))}return t.$$.update=()=>{t.$$.dirty&1&&_(1,b=r.every(i=>i!==null)),t.$$.dirty&6&&_(3,k=b?p[A].finish:"")},[r,b,A,k,R,Z,S,D,x,E]}class Lt extends ot{constructor(n){super(),rt(this,n,wt,Et,ft,{})}}export{Lt as default};
