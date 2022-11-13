"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74637],{75339:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-752209df",path:"/devices/SW2500ZB.html",title:"Sinopé SW2500ZB control via MQTT",lang:"en-US",frontmatter:{title:"Sinopé SW2500ZB control via MQTT",description:"Integrate your Sinopé SW2500ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-03-16T20:41:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Led_intensity_on (numeric)",slug:"led-intensity-on-numeric",children:[]},{level:3,title:"Led_intensity_off (numeric)",slug:"led-intensity-off-numeric",children:[]},{level:3,title:"Led_color_on (composite)",slug:"led-color-on-composite",children:[]},{level:3,title:"Led_color_off (composite)",slug:"led-color-off-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SW2500ZB.md",git:{updatedTime:1668329078e3}}},22050:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(66252);const d=(0,i.uE)('<h1 id="sinope-sw2500zb" tabindex="-1"><a class="header-anchor" href="#sinope-sw2500zb" aria-hidden="true">#</a> Sinopé SW2500ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SW2500ZB</td></tr><tr><td>Vendor</td><td>Sinopé</td></tr><tr><td>Description</td><td>Zigbee smart light switch</td></tr><tr><td>Exposes</td><td>switch (state), led_intensity_on, led_intensity_off, led_color_on, led_color_off, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SW2500ZB.jpg" alt="Sinopé SW2500ZB"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),n=(0,i.Uk)("How to use device type specific configuration"),a=(0,i.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="led-intensity-on-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-on-numeric" aria-hidden="true">#</a> Led_intensity_on (numeric)</h3><p>Control status LED intensity when load ON. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_on&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="led-intensity-off-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-off-numeric" aria-hidden="true">#</a> Led_intensity_off (numeric)</h3><p>Control status LED intensity when load OFF. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_off&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="led-color-on-composite" tabindex="-1"><a class="header-anchor" href="#led-color-on-composite" aria-hidden="true">#</a> Led_color_on (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_on&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric): undefined.</li><li><code>g</code> (numeric): undefined.</li><li><code>b</code> (numeric): undefined.</li></ul><h3 id="led-color-off-composite" tabindex="-1"><a class="header-anchor" href="#led-color-off-composite" aria-hidden="true">#</a> Led_color_off (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_off&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric): undefined.</li><li><code>g</code> (numeric): undefined.</li><li><code>b</code> (numeric): undefined.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),c={},l=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[n])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);