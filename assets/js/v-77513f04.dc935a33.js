"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8512],{9339:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-77513f04",path:"/devices/BSEED_TS0601_cover.html",title:"BSEED BSEED_TS0601_cover control via MQTT",lang:"en-US",frontmatter:{title:"BSEED BSEED_TS0601_cover control via MQTT",description:"Integrate your BSEED BSEED_TS0601_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-20T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Calibration",slug:"calibration",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/BSEED_TS0601_cover.md",git:{updatedTime:1668329078e3}}},92377:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var o=i(66252);const a=(0,o.uE)('<h1 id="bseed-bseed-ts0601-cover" tabindex="-1"><a class="header-anchor" href="#bseed-bseed-ts0601-cover" aria-hidden="true">#</a> BSEED BSEED_TS0601_cover</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>BSEED_TS0601_cover</td></tr><tr><td>Vendor</td><td>BSEED</td></tr><tr><td>Description</td><td>Zigbee curtain switch</td></tr><tr><td>Exposes</td><td>cover (state, position), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/BSEED_TS0601_cover.jpg" alt="BSEED BSEED_TS0601_cover"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press down and set simultaneously until LED flashes red.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>Calibration can be done manualy by pressing and holding pause button until it start blinking then press open and wait the time needed then press open again.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',8),d=(0,o.Uk)("How to use device type specific configuration"),r=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),s={},n=(0,i(83744).Z)(s,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);