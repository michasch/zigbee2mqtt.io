"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37543],{77126:(e,o,d)=>{d.r(o),d.d(o,{data:()=>t});const t={key:"v-a514e52a",path:"/devices/ZFP-1A-CH.html",title:"Siglis ZFP-1A-CH control via MQTT",lang:"en-US",frontmatter:{title:"Siglis ZFP-1A-CH control via MQTT",description:"Integrate your Siglis ZFP-1A-CH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-01T15:08:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZFP-1A-CH.md",git:{updatedTime:1668329078e3}}},71775:(e,o,d)=>{d.r(o),d.d(o,{default:()=>n});var t=d(66252);const c=(0,t.uE)('<h1 id="siglis-zfp-1a-ch" tabindex="-1"><a class="header-anchor" href="#siglis-zfp-1a-ch" aria-hidden="true">#</a> Siglis ZFP-1A-CH</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZFP-1A-CH</td></tr><tr><td>Vendor</td><td>Siglis</td></tr><tr><td>Description</td><td>zigfred plus smart in-wall switch</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZFP-1A-CH.jpg" alt="Siglis ZFP-1A-CH"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),i=(0,t.Uk)("How to use device type specific configuration"),l=(0,t.uE)('<ul><li><p><code>front_surface_enabled</code>: Front Surface LED enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_enabled</code>: Dimmer 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_dimming_enabled</code>: Dimmer 1 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_enabled</code>: Dimmer 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_dimming_enabled</code>: Dimmer 2 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_enabled</code>: Dimmer 3 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_dimming_enabled</code>: Dimmer 3 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_enabled</code>: Dimmer 4 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_dimming_enabled</code>: Dimmer 4 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_enabled</code>: Cover 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_tilt_enabled</code>: Cover 1 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_enabled</code>: Cover 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_tilt_enabled</code>: Cover 2 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_hold</code>, <code>button_4_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),a={},n=(0,d(83744).Z)(a,[["render",function(e,o){const d=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(d,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[i])),_:1})])]),l],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[d,t]of o)e[d]=t;return e}}}]);