"use strict";(self["webpackChunkapp_build_draw"]=self["webpackChunkapp_build_draw"]||[]).push([[831],{3831:(t,s,a)=>{a.r(s),a.d(s,{default:()=>g});var e=a(3673);(0,e.dD)("data-v-0caf2dda");const n={class:"absolute-full q-ma-lg draw rounded-borders shadow-5"},i={ref:"canvas",id:"canvas",class:"fit "};function o(t,s,a,o,c,d){const r=(0,e.up)("q-page"),l=(0,e.Q2)("touch-pan");return(0,e.wg)(),(0,e.j4)(r,{class:"fit"},{default:(0,e.w5)((()=>[(0,e._)("div",n,[(0,e.wy)((0,e._)("canvas",i,null,512),[[l,t.draw,void 0,{prevent:!0,mouse:!0}],[l,t.draw,void 0,{prevent:!0,touch:!0}]])])])),_:1})}(0,e.Cn)();var c=a(9119),d=a.n(c),r=a(1959),l=a(7874);const h=["evt"],u=(0,e.aZ)({name:"PageIndex",setup(){const t=(0,l.oR)();return{canvas:(0,r.iH)(null),ctx:(0,r.iH)(null),color:t.getters.color}},methods:{draw(t){let{evt:s}=t,a=d()(t,h);a.isFinal?(console.log("a"),this.ctx.beginPath()):(this.ctx.strokeStyle=this.$store.getters.color,this.ctx.lineWidth=10,this.ctx.lineCap="round",this.ctx.lineTo(a.position.left,a.position.top),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(a.position.left,a.position.top))}},mounted(){this.canvas=this.$refs.canvas,this.canvas.height=window.innerHeight,this.canvas.width=window.innerWidth,this.ctx=this.canvas.getContext("2d"),console.log(this.canvas)}});var v=a(4379),p=a(5777),w=a(7518),f=a.n(w);u.render=o,u.__scopeId="data-v-0caf2dda";const g=u;f()(u,"components",{QPage:v.Z}),f()(u,"directives",{TouchPan:p.Z})}}]);