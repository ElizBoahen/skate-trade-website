/*!CK:1226297752!*//*1438713830,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8vpVP"]); }

__d("EntStreamGroupMall",["DOM","$","ge"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={replacePager:function(k){g.setContent(h('pagelet_group_pager'),k);},replaceFilesPager:function(k,l){g.setContent(h('group_files_pager_'+l),k);},replacePostApprovalSection:function(k){var l=i('pagelet_consolidate_posts');if(l!==null)g.setContent(l,k);}};e.exports=j;},null);
__d("GroupViewportTracking",["DOM","csx","ViewportTracking","Banzai","$"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=i;function n(){"use strict";if(i!==null)i.apply(this,arguments);}n.prototype.getDataFromConfig=function(o){"use strict";this.timeout=o.record_delay;};n.prototype.getTimeout=function(){"use strict";return this.timeout;};n.prototype.getAllStories=function(){"use strict";return g.scry(k('pagelet_group_mall'),"._5pat");};n.prototype.getStoryID=function(o){"use strict";var p=JSON.parse(o.getAttribute('data-ft'));return p.id;};n.prototype.getDataToLog=function(o){"use strict";return JSON.parse(o.getAttribute('data-ft'));};n.prototype.sendDataToLog=function(o,p){"use strict";if(this.useBanzai)j.post('group_feed_tracking',p);};e.exports.init=function(o){n.instance=new n();n.instance.init(o);};e.exports.getInstance=function(){return n.instance;};},null);
__d("ReactComposerFileAttachmentSelector.react",["ReactComposerAttachmentSelectorContainer.react","ReactComposerAttachmentType","ReactComponentWithPureRenderMixin","React","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=j,n=m.PropTypes,o=j.createClass({displayName:"ReactComposerFileAttachmentSelector",mixins:[i],propTypes:{label:n.string},getDefaultProps:function(){return {label:k._("Add File")};},render:function(){return (j.createElement(g,{attachmentID:h.FILE,label:this.props.label,icon:l('/images/litestand/composer/icons/addfile.png')}));}});e.exports=o;},null);
__d("XReactComposerFileAttachmentBootstrapController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/react_composer\/file\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null);
__d("ReactComposerFileLazyAttachment.react",["ReactComposerAttachmentType","ReactComposerLoadableAttachmentBodyMixin","XReactComposerFileAttachmentBootstrapController","ActorURI","Bootloader","React"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=l.createClass({displayName:"ReactComposerFileLazyAttachment",mixins:[h],statics:{attachmentID:g.FILE},bootload:function(n){if(this.props.bootload){this.props.bootload(n);}else k.loadModules(["ReactComposerFileAttachment.react"],n);},getBootstrapURI:function(){return j.create(i.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);}});e.exports=m;},null);
__d("ReactComposerQuestionAttachmentSelector.react",["ReactComposerAttachmentSelectorContainer.react","ReactComposerAttachmentType","ReactComponentWithPureRenderMixin","React","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=j,n=m.PropTypes,o=j.createClass({displayName:"ReactComposerQuestionAttachmentSelector",mixins:[i],propTypes:{label:n.string},getDefaultProps:function(){return {label:k._("Ask Question")};},render:function(){return (j.createElement(g,{attachmentID:h.QUESTION,label:this.props.label,icon:l('/images/litestand/composer/icons/questions.png')}));}});e.exports=o;},null);
__d("XReactComposerQuestionAttachmentBootstrapController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/react_composer\/question\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});},null);
__d("ReactComposerQuestionLazyAttachment.react",["ReactComposerAttachmentType","ReactComposerLoadableAttachmentBodyMixin","XReactComposerQuestionAttachmentBootstrapController","ActorURI","Bootloader","React"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=l.createClass({displayName:"ReactComposerQuestionLazyAttachment",mixins:[h],statics:{attachmentID:g.QUESTION},bootload:function(n){if(this.props.bootload){this.props.bootload(n);}else k.loadModules(["ReactComposerQuestionAttachmentContainer.react"],n);},getBootstrapURI:function(){return j.create(i.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',this.context.targetID).getURI(),this.context.actorID);}});e.exports=m;},null);
__d("ReactComposerSellActionType",["keyMirror"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g({CLEAR_LOCATION:null,SAVE_CATEGORY:null,SAVE_LOCATION:null,SAVE_PICKUP_NOTE:null,SAVE_PRICE:null,SAVE_TITLE:null,SET_SELL_CONFIG:null});},null);
__d("ReactComposerSellStore",["ReactComposerSellActionType","ReactComposerStoreBase","fbt"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=100,k=9;for(var l in h)if(h.hasOwnProperty(l))n[l]=h[l];var m=h===null?null:h.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=h;function n(){"use strict";h.call(this,(function(){return {categories:[],locationID:'',savedCategoryID:'',savedCategoryText:i._("Select a Category"),showSelectableLocation:false,title:'',pickupNote:'',price:''};}),(function(o){switch(o.type){case g.CLEAR_LOCATION:this.$ReactComposerSellStore0(o);break;case g.SAVE_CATEGORY:this.$ReactComposerSellStore1(o);break;case g.SAVE_LOCATION:this.$ReactComposerSellStore2(o);break;case g.SAVE_PICKUP_NOTE:this.$ReactComposerSellStore3(o);break;case g.SAVE_PRICE:this.$ReactComposerSellStore4(o);break;case g.SAVE_TITLE:this.$ReactComposerSellStore5(o);break;case g.SET_SELL_CONFIG:this.$ReactComposerSellStore6(o);break;}}.bind(this)));}n.prototype.isPostButtonEnabled=function(o){"use strict";var p=this.getComposerData(o);return !!(p.title.length&&p.price.length&&(!p.categories.length||p.savedCategoryID));};n.prototype.getCategories=function(o){"use strict";return this.getComposerData(o).categories;};n.prototype.getCategoryID=function(o){"use strict";return this.getComposerData(o).savedCategoryID;};n.prototype.getCategoryText=function(o){"use strict";return this.getComposerData(o).savedCategoryText;};n.prototype.getCurrencySymbol=function(o){"use strict";return this.getComposerData(o).currency;};n.prototype.getLocationID=function(o){"use strict";return this.getComposerData(o).locationID;};n.prototype.getNumberCharactersLeftForPickupNote=function(o){"use strict";var p=this.getComposerData(o).pickupNote;return j-p.length;};n.prototype.getNumberCharactersLeftForTitle=function(o){"use strict";var p=this.getComposerData(o).title;return j-p.length;};n.prototype.getPickupNoteText=function(o){"use strict";return this.getComposerData(o).pickupNote;};n.prototype.getPrice=function(o){"use strict";return this.getComposerData(o).price;};n.prototype.getTitleText=function(o){"use strict";return this.getComposerData(o).title;};n.prototype.isCategorySelected=function(o){"use strict";return !!this.getComposerData(o).savedCategoryID;};n.prototype.isSelectableLocationEnabled=function(o){"use strict";return this.getComposerData(o).showSelectableLocation;};n.prototype.$ReactComposerSellStore0=function(o){"use strict";var p=this.validateAction(o,'composerID'),q=this.getComposerData(p);q.locationID=q.pickupNote='';this.emitChange(p);};n.prototype.$ReactComposerSellStore1=function(o){"use strict";var p=this.validateAction(o,['composerID','categoryID','categoryText']),q=p[0],r=p[1],s=p[2],t=this.getComposerData(q);t.savedCategoryID=r;t.savedCategoryText=s;this.emitChange(q);};n.prototype.$ReactComposerSellStore2=function(o){"use strict";var p=this.validateAction(o,['composerID','locationID','locationText']),q=p[0],r=p[1],s=p[2],t=this.getComposerData(q);t.locationID=r;t.pickupNote=s;this.emitChange(q);};n.prototype.$ReactComposerSellStore3=function(o){"use strict";var p=this.validateAction(o,['composerID','pickupNote']),q=p[0],r=p[1],s=this.getComposerData(q);s.pickupNote=r.substring(0,j);this.emitChange(q);};n.prototype.$ReactComposerSellStore4=function(o){"use strict";var p=this.validateAction(o,['composerID','price']),q=p[0],r=p[1];if(!isNaN(r)&&r.length<=k){var s=this.getComposerData(q);s.price=r;this.emitChange(q);}};n.prototype.$ReactComposerSellStore5=function(o){"use strict";var p=this.validateAction(o,['composerID','title']),q=p[0],r=p[1],s=this.getComposerData(q);s.title=r.substring(0,j);this.emitChange(q);};n.prototype.$ReactComposerSellStore6=function(o){"use strict";var p=this.validateAction(o,['composerID','config']),q=p[0],r=p[1],s=this.getComposerData(q);s.categories=r.categories;s.currency=r.currency;s.locationID=r.locationID;s.pickupNote=r.pickupNote;s.showSelectableLocation=r.showSelectableLocation;this.emitChange(q);};e.exports=new n();},null);
__d("ReactComposerSellActions",["ReactComposerSellActionType","ReactComposerDispatcher","ReactComposerSellStore"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();b('ReactComposerSellStore');function i(){"use strict";}i.prototype.clearLocation=function(j){"use strict";h.dispatch({composerID:j,type:g.CLEAR_LOCATION});};i.prototype.saveCategory=function(j,k,l){"use strict";h.dispatch({composerID:j,type:g.SAVE_CATEGORY,categoryID:k,categoryText:l});};i.prototype.saveLocation=function(j,k,l){"use strict";h.dispatch({composerID:j,type:g.SAVE_LOCATION,locationID:k,locationText:l});};i.prototype.savePickupNote=function(j,k){"use strict";h.dispatch({composerID:j,type:g.SAVE_PICKUP_NOTE,pickupNote:k});};i.prototype.savePrice=function(j,k){"use strict";h.dispatch({composerID:j,type:g.SAVE_PRICE,price:k});};i.prototype.saveTitle=function(j,k){"use strict";h.dispatch({composerID:j,type:g.SAVE_TITLE,title:k});};i.prototype.setConfig=function(j,k){"use strict";h.dispatch({composerID:j,type:g.SET_SELL_CONFIG,config:k});};e.exports=new i();},null);
__d("ReactComposerSellAttachmentTextCounter.react",["Layout.react","ReactComponentWithPureRenderMixin","React","XUIText.react","XUITextInput.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=g.Column,o=g.FillColumn,p=i,q=p.PropTypes,r=i.createClass({displayName:"ReactComposerSellAttachmentTextCounter",mixins:[h],propTypes:{onFocus:q.func,onChange:q.func,numCharsRemaining:q.number.isRequired,focusOnMount:q.bool.isRequired,placeholder:q.string.isRequired,text:q.string.isRequired},getInitialState:function(){return {selected:this.props.focusOnMount};},render:function(){var s=m(this.props.className,"_2t_e");return (i.createElement(g,{className:s},i.createElement(o,null,this._getTextInput()),i.createElement(n,null,this.state.selected&&this._getCounter())));},focusInput:function(){this.refs.textInput.focusInput();},_getTextInput:function(){return (i.createElement(k,{className:"_2t_f",onBlur:this._onBlur,onFocus:this._onFocus,onChange:this._onChange,onClick:this._onClick,placeholder:this.props.placeholder,ref:"textInput",value:this.props.text}));},_getCounter:function(){return (i.createElement(j,{className:"_2t_g",size:"small"},this.props.numCharsRemaining));},_onBlur:function(){this.setState({selected:false});},_onFocus:function(event){this.props.onFocus&&this.props.onFocus(event);},_onChange:function(event){this.props.onChange&&this.props.onChange(event);},_onClick:function(){this.setState({selected:true});}});e.exports=r;},null);
__d("ReactComposerSellAttachmentTitleContainer.react",["ReactComposerContextMixin","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerSellActions","ReactComposerSellAttachmentTextCounter.react","ReactComposerSellStore","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=l,o=n.PropTypes,p=l.createClass({displayName:"ReactComposerSellAttachmentTitleContainer",mixins:[g,h(k)],PropTypes:{focusOnMount:o.bool},getDefaultProps:function(){return {focusOnMount:false};},componentDidMount:function(){if(this.props.focusOnMount)this.refs.title.focusInput();},statics:{calculateState:function(q){return {numCharsRemaining:k.getNumberCharactersLeftForTitle(q),titleText:k.getTitleText(q)};}},render:function(){return (l.createElement(j,{onFocus:this._onFocus,onChange:this._onChange,className:this.props.className,focusOnMount:this.props.focusOnMount,numCharsRemaining:this.state.numCharsRemaining,placeholder:m._("What are you selling?"),text:this.state.titleText,ref:"title"}));},_onFocus:function(event){event.target.value=this.props.titleText;},_onChange:function(event){i.saveTitle(this.context.composerID,event.target.value);}});e.exports=p;},null);
__d("ReactComposerSellAttachmentPlaceholder.react",["ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerContextMixin","ReactComposerSellAttachmentTitleContainer.react","ReactComponentWithPureRenderMixin","React","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=l,o=n.PropTypes,p=l.createClass({displayName:"ReactComposerSellAttachmentPlaceholder",mixins:[i,k],propTypes:{init:o.func},render:function(){return (l.createElement("div",{onClick:this._onClick,onFocus:this.props.init,onMouseOver:this.props.init},l.createElement(j,{className:"_ox2"})));},_onClick:function(){this.props.init&&this.props.init();g.selectAttachment(this.context.composerID,h.SELL);}});e.exports=p;},null);
__d("ReactComposerSellAttachmentSelector.react",["ReactComposerAttachmentSelectorContainer.react","ReactComposerAttachmentType","ReactComponentWithPureRenderMixin","React","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=j,n=m.PropTypes,o=j.createClass({displayName:"ReactComposerSellAttachmentSelector",mixins:[i],propTypes:{label:n.string},getDefaultProps:function(){return {label:k._("Sell something")};},render:function(){return (j.createElement(g,{attachmentID:h.SELL,label:this.props.label,icon:l('/images/litestand/composer/icons/sell.png')}));}});e.exports=o;},null);
__d("XReactComposerSellAttachmentBootstrapController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/react_composer\/sell\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null);
__d("ReactComposerSellLazyAttachment.react",["ReactComposerAttachmentType","ReactComposerLoadableAttachmentBodyMixin","ReactComposerSellAttachmentPlaceholder.react","XReactComposerSellAttachmentBootstrapController","ActorURI","Bootloader","React"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=m.createClass({displayName:"ReactComposerSellLazyAttachment",mixins:[h],statics:{attachmentID:g.SELL},getInitialState:function(){return {shouldInitialize:false};},getPlaceholderModule:function(){return i;},shouldInitialize:function(){return this.state.shouldInitialize;},bootload:function(o){if(this.props.bootload){this.props.bootload(o);}else l.loadModules(["ReactComposerSellAttachmentContainer.react"],o);},getBootstrapURI:function(){return k.create(j.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);},init:function(){this.setState({shouldInitialize:true});}});e.exports=n;},null);
__d("ReactComposerGroupishPeopleTaggerPresenter.react",["GroupMentionsTypeaheadView.react"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports={ViewRenderer:g,useLayer:true};},null);
__d("ReactGroupComposer.react",["ReactComposer.react","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerFileAttachmentSelector.react","ReactComposerFileLazyAttachment.react","ReactComposerLazyHeader.react","ReactComposerMediaAttachmentSelector.react","ReactComposerMediaLazyAttachment.react","ReactComposerQuestionAttachmentSelector.react","ReactComposerQuestionLazyAttachment.react","ReactComposerSellAttachmentSelector.react","ReactComposerSellLazyAttachment.react","ReactComposerStatusAttachmentSelector.react","ReactComposerStatusLazyAttachment.react","Bootloader","LitestandComposer","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){b.__markCompiled&&b.__markCompiled();var ca=z.createClass({displayName:"ReactGroupComposer",mixins:[l],propTypes:{contextConfig:k.isRequired,config:j.isRequired},componentDidMount:function(){y.initComposer(this.props.contextConfig.composerID);},render:function(){var da=this._getAttachmentComponents(),ea=da[0],fa=da[1];return (z.createElement(g,{className:"_4lmd",loggingConfig:this.props.config.loggingConfig},z.createElement(o,null,ea),z.createElement(i,{hasMinHeight:false},fa)));},_getAttachmentComponents:function(){var da=[],ea=[],fa=this.props.config.attachmentsConfig[h.SELL].enabled,ga=this.props.config.attachmentsConfig[h.MEDIA].enabled,ha=this.props.config.attachmentsConfig[h.FILE].enabled;if(fa){da.push(z.createElement(t,{key:"sell"}));ea.push(z.createElement(u,{config:this.props.config,key:"sell",selected:true,bootload:function(ja){return x.loadModules(["ReactComposerSellAttachmentContainer.react","ReactComposerGroupSellPostButtonContainer.react"],ja);}}));}var ia=!fa?ba._("Write Post"):ba._("Start Discussion");da.push(z.createElement(v,{key:"status",label:ia}));ea.push(z.createElement(w,{config:this.props.config,key:"status",placeholder:ba._("Write something..."),selected:!fa,bootload:function(ja){return x.loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],ja);}}));if(ga){da.push(z.createElement(p,{key:"media",label:ba._("Add Photo \/ Video")}));ea.push(z.createElement(q,{config:this.props.config,key:"media",bootload:function(ja){return x.loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerGroupMediaPostButtonContainer.react"],ja);}}));}da.push(z.createElement(r,{key:"question"}));ea.push(z.createElement(s,{config:this.props.config,key:"question",bootload:function(ja){return x.loadModules(["ReactComposerQuestionAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],ja);}}));if(ha){da.push(z.createElement(m,{key:"file"}));ea.push(z.createElement(n,{config:this.props.config,key:"file",bootload:function(ja){return x.loadModules(["ReactComposerFileAttachment.react","ReactComposerGroupFilePostButtonContainer.react"],ja);}}));}return [da,ea];}});e.exports=ca;},null);