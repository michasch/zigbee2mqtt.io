"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39776],{70253:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-2d48a264",path:"/devices/QBKG40LM.html",title:"Xiaomi QBKG40LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi QBKG40LM control via MQTT",description:"Integrate your Xiaomi QBKG40LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Power_outage_memory (binary)",slug:"power-outage-memory-binary",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Flip_indicator_light (binary)",slug:"flip-indicator-light-binary",children:[]},{level:3,title:"Operation_mode (enum)",slug:"operation-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/QBKG40LM.md",git:{updatedTime:1668329078e3}}},77127:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-qbkg40lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-qbkg40lm" aria-hidden="true">#</a> Xiaomi QBKG40LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>QBKG40LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara E1 1 gang switch (with neutral)</td></tr><tr><td>Exposes</td><td>switch (state), action, power_outage_memory, device_temperature, flip_indicator_light, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/QBKG40LM.jpg" alt="Xiaomi QBKG40LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),r=(0,i.Uk)("CC2530/CC2531: "),d={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},c=(0,i._)("code",null,"20211115",-1),n=(0,i.Uk)("CC1352/CC2652: "),l={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},u=(0,i._)("code",null,"20211114",-1),s=(0,i.Uk)("CC2538: "),h={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},p=(0,i._)("code",null,"20211222",-1),m=(0,i.Uk)("Conbee II: "),g={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},b=(0,i._)("code",null,"0x26720700",-1),_=(0,i._)("p",null,[(0,i._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),f=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),v=(0,i.Uk)("This device supports OTA updates, for more information see "),w=(0,i.Uk)("OTA updates"),q=(0,i.Uk)("."),y=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),k=(0,i.Uk)("How to use device type specific configuration"),T=(0,i.uE)('<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary" aria-hidden="true">#</a> Power_outage_memory (binary)</h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power_outage_memory is ON, if <code>false</code> OFF.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="flip-indicator-light-binary" tabindex="-1"><a class="header-anchor" href="#flip-indicator-light-binary" aria-hidden="true">#</a> Flip_indicator_light (binary)</h3><p>After turn on, the indicator light turns on while switch is off, and vice versa. Value can be found in the published state on the <code>flip_indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;flip_indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flip_indicator_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flip_indicator_light is ON, if <code>OFF</code> OFF.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Decoupled mode. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),E={},N=(0,o(83744).Z)(E,[["render",function(e,t){const o=(0,i.up)("OutboundLink"),E=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("ul",null,[(0,i._)("li",null,[r,(0,i._)("a",d,[c,(0,i.Wm)(o)])]),(0,i._)("li",null,[n,(0,i._)("a",l,[u,(0,i.Wm)(o)])]),(0,i._)("li",null,[s,(0,i._)("a",h,[p,(0,i.Wm)(o)])]),(0,i._)("li",null,[m,(0,i._)("a",g,[b,(0,i.Wm)(o)])])]),_,f,(0,i._)("p",null,[v,(0,i.Wm)(E,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[w])),_:1}),q]),y,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(E,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[k])),_:1})])]),T],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);