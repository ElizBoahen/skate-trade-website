/*!CK:3395107323!*//*1438290047,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qMBbW"]); }

__d("ChatSidebarDropdownConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={SOUND:'sound',ADVANCED_SETTINGS:'advanced_settings',TURN_OFF_DIALOG:'turn_off_dialog',CLOSE_ALL_TABS:'close_all_tabs',SIDEBAR:'sidebar',HIDE_GROUPS:'hide_groups',ONLINE:'online',PAUSE:'pause',SHOW_APPS:'show_apps',HIDE_APPS:'hide_apps',SHOW_TICKER:'show_ticker',HIDE_TICKER:'hide_ticker'};e.exports=g;},null);
__d("ChatSidebarSheetChatOffline.react",["Link.react","React","ReactComponentWithPureRenderMixin","fbt"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();'use strict';var k=h,l=k.PropTypes,m=h.createClass({displayName:"ChatSidebarSheetChatOffline",mixins:[i],propTypes:{onGoOnlineClick:l.func.isRequired},render:function(){return (h.createElement("div",null,j._("{=Go online} to see who's available.",[j.param("=Go online",h.createElement(g,{className:"fbChatGoOnlineLink",onClick:this.props.onGoOnlineClick},j._("Turn on chat")))])));}});e.exports=m;},null);
__d("ChatSidebarSheet",["ArbiterMixin","ChannelConnection","ChannelConstants","ChatBehavior","ChatSidebarSheetChatOffline.react","ChatSidebarSheetChatReconnectMsg.react","ChatSidebarSheetChatShutdownMsg.react","ChatVisibility","CSS","DOM","Event","JSLogger","PresencePrivacy","React","fbt","mixin","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b.__markCompiled&&b.__markCompiled();var x=r.create('sidebar_sheet');function y(ea,fa){return t.render(t.createElement(m,{hint:ea}),fa);}function z(ea,fa){return t.render(t.createElement(l,{msecs:ea}),fa);}var aa=v(g);for(var ba in aa)if(aa.hasOwnProperty(ba))da[ba]=aa[ba];var ca=aa===null?null:aa.prototype;da.prototype=Object.create(ca);da.prototype.constructor=da;da.__superConstructor__=aa;function da(ea){"use strict";aa.call(this);this._root=ea;this._message=p.find(ea,'div.fbChatSidebarMessage div.message');h.subscribe([h.CONNECTED,h.SHUTDOWN,h.RECONNECTING],this._handleConnectionChange.bind(this));h.subscribe([h.MUTE_WARNING,h.UNMUTE_WARNING],this._render.bind(this));s.subscribe('privacy-user-presence-changed',this._render.bind(this));j.subscribe(j.ON_CHANGED,this._render.bind(this));this._render();}da.prototype._handleConnectionChange=function(ea,fa){"use strict";this._channelStatus=ea;this._channelData=fa;this._render();};da.prototype._renderChannelDisconnect=function(){"use strict";if(this._channelStatus===h.SHUTDOWN){return y(this._channelData,this._message);}else if(this._channelStatus===h.RECONNECTING){var ea=this._channelData;z(ea,this._message);if(ea>1000){if(ea>i.WARNING_COUNTDOWN_THRESHOLD_MSEC)this._warningMsgEventListener=q.listen(this._message,'click',function(event){if(o.hasClass(event.getTarget(),'fbChatReconnectLink')){h.reconnect();return false;}});this._showWarningTimeout=w(this._handleConnectionChange.bind(this,h.RECONNECTING,ea-1000),1000);}}};da.prototype._renderOffline=function(){"use strict";return t.render(t.createElement(k,{onGoOnlineClick:function(ea){x.log('sidebar_go_online');n.goOnline();}}),this._message);};da.prototype._clear=function(){"use strict";if(this._showWarningTimeout){clearTimeout(this._showWarningTimeout);this._showWarningTimeout=null;}if(this._warningMsgEventListener){this._warningMsgEventListener.remove();this._warningMsgEventListener=null;}if(this._goOnlineEventListener){this._goOnlineEventListener.remove();this._goOnlineEventListener=null;}o.removeClass(this._root,'offline');o.removeClass(this._root,'error');o.removeClass(this._root,'notice');p.empty(this._message);};da.prototype._render=function(){"use strict";this._clear();if(!n.isOnline()){o.addClass(this._root,'offline');this._renderOffline();}else if(h.disconnected()){o.addClass(this._root,'error');this._renderChannelDisconnect();}else if(!j.notifiesUserMessages()){o.addClass(this._root,'notice');var ea=u._("Alerts are off while you use another client to chat.");p.setContent(this._message,ea);}this.inform('updated');};Object.assign(da.prototype,{_channelStatus:null,_channelData:null,_showWarningTimeout:null,_warningMsgEventListener:null,_goOnlineEventListener:null});e.exports=da;},null);
__d("ChatSidebarDropdown.react",["AppsDivebarDisplayController","Arbiter","AsyncRequest","ChatVisibility","ChatConfig","ChatOptions","ChatSidebarDropdownConstants","ChatTabActions","ContextualDialogArrow","ContextualLayerAutoFlip","Link.react","LogHistory","MenuSeparator.react","PopoverMenu.react","PresencePrivacy","PresenceState","ReactComponentWithPureRenderMixin","React","ReactXUIMenu","SubscriptionsHandler","TrackingNodes","URI","cx","emptyFunction","fbt","ge","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){b.__markCompiled&&b.__markCompiled();'use strict';var ha=y.Item,ia=y.SelectableItem,ja=y.SelectableMenu,ka=x,la=ka.PropTypes,ma=r.getInstance('blackbird'),na=x.createClass({displayName:"ChatSidebarDropdown",mixins:[w],propTypes:{className:la.string,isNormalSidebar:la.bool,onHide:la.func,onShow:la.func,onToggleSidebar:la.func.isRequired},getDefaultProps:function(){return {className:'',isNormalSidebar:true,onHide:da,onShow:da};},getInitialState:function(){return {appsVisible:g.isVisible(),isOnline:j.isOnline(),isTickerVisible:this._getTickerVisibility(),pendingChange:false};},componentDidMount:function(){this._subscriptions=new z();this._subscriptions.addSubscriptions(h.subscribe(['Ticker/resized','ticker/show'],function(){this.setState({isTickerVisible:this._getTickerVisibility()});}.bind(this)),h.subscribe(['AppsDivebar/show-apps','AppsDivebar/hide-apps'],function(){this.setState({appsVisible:g.isVisible()});}.bind(this)),u.subscribe('privacy-user-presence-changed',function(){this.setState({isOnline:j.isOnline()});}.bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},_getTickerVisibility:function(){var oa=fa('pagelet_ticker');return !!(oa&&oa.offsetHeight!==0);},_logVisibilityChange:function(oa,pa){var qa=pa?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility';ma.debug(qa,{action:oa});},_changeSetting:function(oa,pa){if(this.state.pendingChange)return;this.setState({pendingChange:true});var qa={};qa[oa]=!pa;l.setSetting(oa,!pa,'mini_sidebar_menu');new i('/ajax/chat/settings.php').setHandler(v.doSync).setErrorHandler(function(){return l.setSetting(oa,pa,'mini_sidebar_menu_error');}).setFinallyHandler(function(){return this.setState({pendingChange:false});}.bind(this)).setData(qa).setAllowCrossPageTransition(true).send();},_onClickOption:function(oa,pa){var qa=true;switch(oa){case m.SOUND:this._changeSetting(oa,pa);break;case m.ADVANCED_SETTINGS:case m.TURN_OFF_DIALOG:h.inform('chat/advanced-settings-dialog-opened');this._logVisibilityChange(oa,false);break;case m.CLOSE_ALL_TABS:n.closeAllTabs();this._logVisibilityChange(oa,false);break;case m.HIDE_GROUPS:this._changeSetting(oa,pa);break;case m.SIDEBAR:this.props.onToggleSidebar();qa=false;break;case m.ONLINE:!this.state.isOnline?j.goOnline():this._logVisibilityChange(oa,true);break;case m.PAUSE:break;case m.SHOW_TICKER:h.inform('ChatSidebarDropdown/openTicker');break;case m.HIDE_TICKER:h.inform('ChatSidebarDropdown/closeTicker');break;case m.SHOW_APPS:g.showApps();break;case m.HIDE_APPS:g.hideApps();break;}if(qa&&this.refs.menu)this.refs.menu.hidePopover();},_onItemClick:function(oa,pa){var qa=pa.item.getValue(),ra=pa.item.isSelected&&pa.item.isSelected();this._onClickOption(qa,!!ra);},_renderChatSoundOption:function(){return (x.createElement(ia,{value:m.SOUND,selected:l.getSetting(m.SOUND)},ea._("Chat Sounds")));},_renderAdvancedSettingsOption:function(){return (x.createElement(ha,{href:new ba('/ajax/chat/privacy/settings_dialog.php'),rel:"dialog",value:m.ADVANCED_SETTINGS},ea._("Advanced Settings...")));},_renderCloseAllOption:function(){return (x.createElement(ha,{value:m.CLOSE_ALL_TABS},ea._("Close All Chat Tabs")));},_renderHideSidebarOption:function(){return (x.createElement(ha,{className:"_2xvi",value:m.SIDEBAR},ea._("Hide Sidebar")));},_renderHideGroupsOption:function(){if(!this.props.isNormalSidebar)return null;return (x.createElement(ia,{value:m.HIDE_GROUPS,selected:l.getSetting(m.HIDE_GROUPS)},ea._("Hide Groups")));},_renderOnlineOption:function(){var oa=j.isOnline(),pa=oa?(new ba('/ajax/chat/privacy/settings_dialog.php')).addQueryData('dialog_type','turn_off_dialog'):'#',qa=oa?ea._("Turn Off Chat"):ea._("Turn On Chat"),ra=oa?m.TURN_OFF_DIALOG:m.ONLINE;return (x.createElement(ha,{href:pa,rel:oa?'dialog':'',value:ra},qa));},_renderAppsOption:function(){if(!k.get('has_apps_option')||!this.props.isNormalSidebar)return null;var oa=this.state.appsVisible,pa=oa?ea._("Hide Games"):ea._("Show Games"),qa=oa?m.HIDE_APPS:m.SHOW_APPS;return (x.createElement(ha,{value:qa},pa));},_renderTickerToggleOption:function(){if(!k.get('has_ticker_toggle_option')||!this.props.isNormalSidebar)return null;var oa=this.state.isTickerVisible,pa=oa?ea._("Hide Ticker"):ea._("Show Ticker"),qa=oa?m.HIDE_TICKER:m.SHOW_TICKER;return (x.createElement(ha,{value:qa},pa));},_renderConditionalSeparator:function(oa){if(!oa)return null;return x.createElement(s,null);},_renderMenu:function(){return (x.createElement(ja,{className:'fbChatSidebarDropdown/PopoverMenu',multiple:true,onItemClick:this._onItemClick},this._renderChatSoundOption(),this._renderAdvancedSettingsOption(),this._renderConditionalSeparator(true),this._renderCloseAllOption(),this._renderHideSidebarOption(),this._renderHideGroupsOption(),this._renderOnlineOption(),this._renderConditionalSeparator(!!k.get('has_apps_option')&&this.props.isNormalSidebar),this._renderAppsOption(),this._renderConditionalSeparator(!!k.get('has_ticker_toggle_option')&&this.props.isNormalSidebar),this._renderTickerToggleOption()));},render:function(){var oa=ea._("Options"),pa=ga(this.props.className,(("_5qth")+(' '+"_5vm9")+(!j.isOnline()?' '+"_5vma":''))),qa=aa.getTrackingInfo(aa.types.DROPDOWN_BUTTON);return (x.createElement(t,{alignh:"right",alignv:"top",className:pa,layerBehaviors:[p,o],menu:this._renderMenu(),onHide:this.props.onHide,onShow:this.props.onShow,ref:"menu"},x.createElement(q,{"aria-label":oa,className:"_5vmb button","data-ft":qa,"data-hover":"tooltip",href:"#"})));}});e.exports=na;},null);