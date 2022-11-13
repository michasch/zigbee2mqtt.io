"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8278],{87866:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-96c145dc",path:"/devices/ZW-EU-4C.html",title:"Nue / 3A ZW-EU-4C control via MQTT",lang:"en-US",frontmatter:{title:"Nue / 3A ZW-EU-4C control via MQTT",description:"Integrate your Nue / 3A ZW-EU-4C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Moving (enum)",slug:"moving-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZW-EU-4C.md",git:{updatedTime:1668329078e3}}},10465:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var i=o(66252);const d=(0,i.uE)('<h1 id="nue-3a-zw-eu-4c" tabindex="-1"><a class="header-anchor" href="#nue-3a-zw-eu-4c" aria-hidden="true">#</a> Nue / 3A ZW-EU-4C</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZW-EU-4C</td></tr><tr><td>Vendor</td><td>Nue / 3A</td></tr><tr><td>Description</td><td>Zigbee smart curtain switch</td></tr><tr><td>Exposes</td><td>cover (state, position), moving, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZW-EU-4C.jpg" alt="Nue / 3A ZW-EU-4C"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),a=(0,i.Uk)("How to use device type specific configuration"),c=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum" aria-hidden="true">#</a> Moving (enum)</h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),r={},s=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);