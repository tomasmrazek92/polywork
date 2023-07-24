"use strict";(()=>{$(document).ready(()=>{gsap.registerPlugin(ScrollTrigger,Flip),$("img").each(function(){$(this).removeAttr("loading"),ScrollTrigger.refresh()});let w=$(".hp-flow_visual-block"),P=$(".hp-flow_visual-phone"),i=$(".hp-flow_visual-card"),b=$(".hp-flow_tags"),v=$(".hp-flow_stats"),x=$(".hp-flow_clients"),T=$(".hp-flow_avatar-intro"),L=$(".hp-flow_avatar-action"),E=$(".hp-flow_visual-button"),o=".hp-flow_pattern",p=!1,A=(e,t,a,l={})=>gsap.timeline({scrollTrigger:{trigger:$(e),start:t,end:a,markers:!0,invalidateOnRefresh:!0,yoyo:!0,...l}}),u=e=>{p=e,console.log(p)},f=e=>{let t=gsap.timeline(),a=i.index(e);console.log(a);let l=["-15em","-10em","10em","5em"];return t.fromTo(e,{opacity:0,x:l[a]},{x:0,opacity:1,duration:.75}),t},g=e=>{let t=gsap.timeline();return i=$(e).find(i),t.add(f($(e).find(i).eq(0)),"<"),t.add(f($(e).find(i).eq(1)),"<"),t.add(f($(e).find(i).eq(2)),"<"),t.add(f($(e).find(i).eq(3)),"<"),t},h=e=>{let t=gsap.timeline();return t.to($(e).find(i),{opacity:0,scale:.8,stagger:{each:.02},duration:.75}),t.fromTo(`${e} ${o}._1`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([`${e} ${o}._2`,`${e} ${o}._4`],{scale:.5,opacity:0},{scale:1,opacity:1},"<"),t.fromTo(`${e} ${o}._3`,{xPercent:50,yPercent:-50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([$(e).find(b),$(e).find(v),$(e).find(x)],{opacity:0,x:"-5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<0.5"),t.fromTo([$(e).find(T),$(e).find(L)],{opacity:0,x:"5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<"),t},_=e=>{let t=gsap.timeline();return t.to(`${e} ${o}._1`,{xPercent:-50,yPercent:50,opacity:0}),t.to(`${e} ${o}._2`,{scale:.5,opacity:0},"<"),t.to(`${e} ${o}._3`,{xPercent:50,yPercent:-50,opacity:0},"<"),t.fromTo(`${e} ${o}._5`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo(`${e} ${o}._6`,{xPercent:-50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(E),{opacity:0,scale:.8},{opacity:1,scale:1,onComplete:()=>{u(!0)},onReverseComplete:()=>{u(!1),m(!0,e)}},"<"),t},S=e=>{let t=gsap.timeline();return t.fromTo($(e).find(w),{display:"block",opacity:1,yPercent:0},{display:"none",opacity:0,yPercent:-10,duration:.3}),t.fromTo($(e).find(P),{display:"none",opacity:0,yPercent:10},{display:"block",opacity:1,yPercent:0,duration:.3}),t.fromTo(`${e} ${o}._7`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1}),t.fromTo(`${e} ${o}._8`,{xPercent:50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(".hp-flow_visual-phone_card-button").eq(1),{scale:1},{scale:.9,delay:.5}),t.fromTo($(e).find(".hp-flow_visual-phone_card"),{rotate:0,xPercent:0},{rotate:"7deg",xPercent:120}),t.fromTo($(e).find(".hp-flow_visual-phone_check"),{opacity:0,scale:.8},{opacity:1,scale:1}),t.fromTo($(e).find(".hp-flow_visual-phone_check-icon"),{opacity:0,scale:2},{opacity:1,scale:1},"<0.1"),t};ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.timeline(),t=".hp-flow_visual.desktop";e.addLabel("Step 1 Starts"),e.add(g(t),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(h(t)),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(_(t)),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(S(t)),e.addLabel("Step 4 Ends"),document.querySelectorAll(".hp-flow_content-inner").forEach((l,r)=>{let c=`Step ${r+1} Starts`,y=`Step ${r+1} Ends`;ScrollTrigger.create({animation:e,trigger:l,start:"bottom bottom",markers:!0,onEnter:({progress:s,direction:d,isActive:q})=>{d===1&&e.tweenFromTo(c,y)},onLeaveBack:({progress:s,direction:d,isActive:q})=>{d===-1&&e.tweenFromTo(y,c)}})})},"(max-width: 991px)":function(){let e=gsap.timeline();e.addLabel("Step 1 Starts"),e.add(g(".hp-flow_content-visual"),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(h(".hp-flow_content-visual")),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(_(".hp-flow_content-visual._3")),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(S(".hp-flow_content-visual")),e.addLabel("Step 4 Ends"),document.querySelectorAll(".hp-flow_content-inner").forEach((a,l)=>{let r=`Step ${l+1} Starts`,c=`Step ${l+1} Ends`;ScrollTrigger.create({animation:e,trigger:a,start:"top bottom",markers:!0,onEnter:({progress:y,direction:s,isActive:d})=>{s===1&&e.tweenFromTo(r,c)},onLeaveBack:({progress:y,direction:s,isActive:d})=>{s===-1&&e.tweenFromTo(c,r)}})})}});let n=0,k=$(".hp-flow_visual-button");function m(e,t){let a=$(t).find(".hp-flow_visual-static"),l=$(t).find(".hp-flow_styles-bg");if(e===!0){if(n===0)return;n=0}else p&&(n=(n+1)%$(a).length);(p||e===!0)&&a.add(l).stop().fadeOut("fast").promise().done(function(){a.eq(n).fadeIn(),l.eq(n).fadeIn()})}k.on("click",()=>{window.matchMedia("(max-width: 991px)").matches?m(!1,$(".hp-flow_content-visual._3")):m(!1,$(".hp-flow_col.visual"))})});})();
