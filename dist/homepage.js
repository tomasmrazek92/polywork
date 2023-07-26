"use strict";(()=>{$(document).ready(()=>{gsap.registerPlugin(ScrollTrigger),$("img").each(function(){$(this).removeAttr("loading"),ScrollTrigger.refresh()});let U=$(".hp-flow_visual-block"),D=$(".hp-flow_visual-phone"),r=$(".hp-flow_visual-card"),j=$(".hp-flow_tags"),z=$(".hp-flow_stats"),G=$(".hp-flow_clients"),J=$(".hp-flow_avatar-intro"),K=$(".hp-flow_avatar-action"),Q=$(".hp-flow_visual-button"),l=".hp-flow_pattern",g=!1,te=(e,t,a,o={})=>gsap.timeline({scrollTrigger:{trigger:$(e),start:t,end:a,markers:!0,invalidateOnRefresh:!0,yoyo:!0,...o}}),q=e=>{g=e},h=e=>{let t=gsap.timeline(),a=r.index(e),o=["-15em","-10em","10em","5em"];return t.fromTo(e,{opacity:0,x:o[a]},{x:0,opacity:1,duration:.75}),t},E=e=>{let t=gsap.timeline();return r=$(e).find(r),t.add(h($(e).find(r).eq(0)),"<"),t.add(h($(e).find(r).eq(1)),"<"),t.add(h($(e).find(r).eq(2)),"<"),t.add(h($(e).find(r).eq(3)),"<"),t},C=e=>{let t=gsap.timeline();return t.to($(e).find(r),{opacity:0,scale:.8,stagger:{each:.02},duration:.75}),t.fromTo(`${e} ${l}._1`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([`${e} ${l}._2`,`${e} ${l}._4`],{scale:.5,opacity:0},{scale:1,opacity:1},"<"),t.fromTo(`${e} ${l}._3`,{xPercent:50,yPercent:-50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo([$(e).find(j),$(e).find(z),$(e).find(G)],{opacity:0,x:"-5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<0.5"),t.fromTo([$(e).find(J),$(e).find(K)],{opacity:0,x:"5em"},{opacity:1,x:0,stagger:{each:.2},duration:.5},"<"),t},k=e=>{let t=gsap.timeline();return t.to(`${e} ${l}._1`,{xPercent:-50,yPercent:50,opacity:0}),t.to(`${e} ${l}._2`,{scale:.5,opacity:0},"<"),t.to(`${e} ${l}._3`,{xPercent:50,yPercent:-50,opacity:0},"<"),t.fromTo(`${e} ${l}._5`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1},"<"),t.fromTo(`${e} ${l}._6`,{xPercent:-50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(Q),{opacity:0,scale:.8},{opacity:1,scale:1,onComplete:()=>{q(!0)},onReverseComplete:()=>{q(!1),b(!0,e)}},"<"),t},W=e=>{let t=gsap.timeline();return t.fromTo($(e).find(U),{display:"block",opacity:1,yPercent:0},{display:"none",opacity:0,yPercent:-10,duration:.3}),t.fromTo($(e).find(D),{display:"none",opacity:0,yPercent:10},{display:"block",opacity:1,yPercent:0,duration:.3}),t},I=e=>{let t=gsap.timeline();return t.fromTo(`${e} ${l}._7`,{xPercent:-50,yPercent:50,opacity:0},{xPercent:0,yPercent:0,opacity:1}),t.fromTo(`${e} ${l}._8`,{xPercent:50,opacity:0},{xPercent:0,opacity:1},"<"),t.fromTo($(e).find(".hp-flow_visual-phone_card-button").eq(1),{scale:1},{scale:.9,delay:.5}),t.fromTo($(e).find(".hp-flow_visual-phone_card"),{rotate:0,xPercent:0},{rotate:"7deg",xPercent:120}),t.fromTo($(e).find(".hp-flow_visual-phone_check"),{opacity:0,scale:.8},{opacity:1,scale:1}),t.fromTo($(e).find(".hp-flow_visual-phone_check-icon"),{opacity:0,scale:2},{opacity:1,scale:1},"<0.1"),t};ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.timeline(),t=".hp-flow_visual.desktop";e.addLabel("Step 1 Starts"),e.add(E(t),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(C(t)),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(k(t)),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(I(t)),e.addLabel("Step 4 Ends");let a=document.querySelectorAll(".hp-flow_content-inner");a.forEach((i,f)=>{let s=`Step ${f+1} Starts`,P=`Step ${f+1} Ends`;ScrollTrigger.create({animation:e,trigger:i,start:"bottom bottom",onEnter:({progress:L,direction:y,isActive:ee})=>{y===1&&e.tweenFromTo(s,P)},onLeaveBack:({progress:L,direction:y,isActive:ee})=>{y===-1&&e.tweenFromTo(P,s)}})});let o=gsap.timeline({paused:!0,scrollTrigger:{trigger:a[3],start:"bottom bottom",onEnter:()=>{o.play()},onLeaveBack:()=>{o.reverse()}}});o.add(W(t))},"(max-width: 991px)":function(){let e=gsap.timeline();e.addLabel("Step 1 Starts"),e.add(E(".hp-flow_content-visual._1"),"<"),e.addLabel("Step 1 Ends"),e.addLabel("Step 2 Starts"),e.add(C(".hp-flow_content-visual")),e.addLabel("Step 2 Ends"),e.addLabel("Step 3 Starts"),e.add(k(".hp-flow_content-visual._3")),e.addLabel("Step 3 Ends"),e.addLabel("Step 4 Starts"),e.add(I(".hp-flow_content-visual._4")),e.addLabel("Step 4 Ends");let t=document.querySelectorAll(".hp-flow_content-inner"),a=[!1,!1,!1,!1];t.forEach((o,i)=>{let f=`Step ${i+1} Starts`,s=`Step ${i+1} Ends`;ScrollTrigger.create({animation:e,trigger:o,start:"top bottom",onEnter:({progress:P,direction:L,isActive:y})=>{L===1&&!a[i]&&(e.tweenFromTo(f,s),a[i]=!0)}})})}});let c=0,w=$(".hp_hero-container-wrap .hp-flow_visual-button"),d=$(".hp_hero-template"),A=$(".hp_hero-container-wrap .hp-flow_styles-bg"),v=$("[hero-template]"),_;function F(){w.addClass("disabled"),c=(c+1)%$(d).length,d.add(A).stop().fadeOut("fast").promise().then(()=>{let e=c===0?d.length-1:c-1;return d.eq(e).find(v).trigger("click").promise()}).then(()=>Promise.all([A.eq(c).fadeIn("fast").promise(),d.eq(c).fadeIn("fast").promise()])).then(()=>d.eq(c).find(v).trigger("click").promise()).then(()=>w.removeClass("disabled")).catch(e=>{console.log("An error occurred: ",e)})}function B(){_&&(clearInterval(_),F()),_=setInterval(function(){F()},4e3)}d.eq(0).find(v).trigger("click"),B(),w.on("click",()=>{B()});let p=0,X=$(".hp-flow_visual .hp-flow_visual-button"),M=$(".hp-flow_col.visual"),O=$(".hp-flow_content-visual._3");function b(e,t){let a=$(t).find(".hp-flow_visual-static"),o=$(t).find(".hp-flow_styles-bg");if(e===!0){if(p===0)return;p=0}else g&&(p=(p+1)%$(a).length);(g||e===!0)&&a.add(o).stop().fadeOut("fast").promise().done(function(){a.eq(p).fadeIn(),o.eq(p).fadeIn()})}let S;function m(e){S&&(clearInterval(S),b(!1,e)),S=setInterval(function(){b(!1,e)},3e3)}X.on("click",()=>{window.matchMedia("(max-width: 991px)").matches?m(O):m(M)}),window.matchMedia("(max-width: 991px)").matches?m(O):m(M);let x=$("[card1-card]"),u=x.find("p"),Y=$(".hp-feature-1_dot"),Z=$(".hp-feature-1_text-dot"),ae=new SplitType(u,{types:"words, chars"}),n=gsap.timeline({scrollTrigger:{trigger:"[card-1]",start:"20% bottom"},defaults:{ease:Expo.easeOut}});n.set(u,{opacity:0}),n.fromTo(x.eq(0),{x:"-2.4rem",scale:.85,opacity:0},{x:0,scale:1,opacity:1,duration:.5}),n.fromTo(Y,{scale:.85,opacity:0},{scale:1,opacity:1},"<"),n.set(u,{opacity:1},"<"),n.to($(u).eq(0).find(".char"),{visibility:"visible",stagger:{each:.025}},"<"),n.fromTo(x.eq(1),{x:"-2.4rem",scale:.85,opacity:0},{x:0,scale:1,opacity:1,duration:.5},">-0.4"),n.to($(u).eq(1).find(".char"),{visibility:"visible",stagger:{each:.025}},">-0.5"),n.fromTo(Z,{scale:0},{scale:1,duration:.2},">-0.5");let V=e=>{$(e).each(function(){let t={val:1},a=$(this).text(),o=parseFloat(a),i=(a.split(".")[1]||[]).length;if(!isNaN(o)){$(this).css("visibility","hidden");let f=()=>{let s;Math.abs(o-t.val)<=.01?s=parseFloat(o.toFixed(i)):s=parseFloat(t.val.toFixed(i)),$(this).text(s)};TweenLite.to(t,3,{val:o,onUpdate:f,onStart:()=>$(this).css("visibility","visible")})}})};gsap.timeline({scrollTrigger:{trigger:"[card-3]",start:"20% bottom"},defaults:{ease:Expo.easeOut}}).call(()=>{V($(".hp-feature-3_value")),V($(".hp-feature-3_date"))});let H=["www.google.com","www.youtube.com","www.tesla.com","www.apple.com","www.webflow.com"],T=0,le,N=document.querySelector(".hp-feature-4_address-inner");function R(){T>=H.length&&(T=0);let e=H[T++],t=document.createElement("div");t.textContent=e,N.innerHTML="",N.appendChild(t);let a=new SplitType(t,{types:"chars"});gsap.timeline().fromTo($(a.chars),{display:"none"},{display:"inline-block",visibility:"visible",ease:"power2",stagger:.05,onComplete:()=>{gsap.delayedCall(1,R)}})}R()});})();
