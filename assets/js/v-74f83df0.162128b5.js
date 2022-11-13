"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18562],{30974:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-74f83df0",path:"/devices/3RSP019BZ.html",title:"Third Reality 3RSP019BZ control via MQTT",lang:"en-US",frontmatter:{title:"Third Reality 3RSP019BZ control via MQTT",description:"Integrate your Third Reality 3RSP019BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-20T23:20:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Switch between BLE and Zigbee mode",slug:"switch-between-ble-and-zigbee-mode",children:[]},{level:3,title:"Factory Reset",slug:"factory-reset",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/3RSP019BZ.md",git:{updatedTime:1668329078e3}}},13882:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="third-reality-3rsp019bz" tabindex="-1"><a class="header-anchor" href="#third-reality-3rsp019bz" aria-hidden="true">#</a> Third Reality 3RSP019BZ</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3RSP019BZ</td></tr><tr><td>Vendor</td><td>Third Reality</td></tr><tr><td>Description</td><td>Zigbee / BLE smart plug</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/3RSP019BZ.jpg" alt="Third Reality 3RSP019BZ"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="switch-between-ble-and-zigbee-mode" tabindex="-1"><a class="header-anchor" href="#switch-between-ble-and-zigbee-mode" aria-hidden="true">#</a> Switch between BLE and Zigbee mode</h3><p>Plug comes out of the box in BLE mode (Green LED). To use with zigbee2mqtt you need to change to zigbee mode (Red LED):</p><h4 id="ble-→-zigbee" tabindex="-1"><a class="header-anchor" href="#ble-→-zigbee" aria-hidden="true">#</a> BLE → ZigBee</h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the green light is ON.</li><li>Release the button, then press the button immediately. LED light will flash in red, indicating that your Smart Plug is in ZigBee mode now.</li></ol><p>If you want to restore to BLE to work with most Echo devices:</p><h4 id="zigbee-→-ble" tabindex="-1"><a class="header-anchor" href="#zigbee-→-ble" aria-hidden="true">#</a> ZigBee → BLE</h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the red light is ON.</li><li>Release the button, then press the button immediately. LED light will alternately flash in green and red, indicating that your Smart Plug is in BLE mode now.</li></ol><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><p>After your Smart Plug is powered on, press and hold the button for more than 10 seconds until the LED light flashes indicating that your Smart Plug is in pairing mode. (The mode won’t be change while factory reset your Smart Plug.)</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);