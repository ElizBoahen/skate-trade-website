/*!CK:295728458!*//*1438591244,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nczZX"]); }

__d("UFIPerfLogger",["BanzaiScuba","StopwatchPool","UFIConstants","filterObject","uuid"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=i,m=l.UFIPayloadSourceType;function n(o){"use strict";this.$UFIPerfLogger0=k();this.$UFIPerfLogger1={};}n.prototype.startClock=function(o){"use strict";if(this.$UFIPerfLogger1[o])h.release(this.$UFIPerfLogger1[o]);this.$UFIPerfLogger1[o]=h.acquire();};n.prototype.log=function(o,p,q){"use strict";var r=new g('ufi_performance',null,{addBrowserFields:true});r.addNormal('uuid',this.$UFIPerfLogger0);r.addNormal('code_segment',o);r.addNormal('payload_source',this.$UFIPerfLogger2(p));r.addInteger('duration',this.$UFIPerfLogger3(o));r.addInteger('num_comments',q.numComments||0);r.addInteger('num_likes',q.numLikes||0);r.addTagset('features',q.features||{});r.post();};n.prototype.$UFIPerfLogger2=function(o){"use strict";return Object.keys(j(m,function(p){return p===o;})).pop();};n.prototype.$UFIPerfLogger3=function(o){"use strict";var p=0;if(this.$UFIPerfLogger1[o]){p=this.$UFIPerfLogger1[o].read();h.release(this.$UFIPerfLogger1[o]);delete this.$UFIPerfLogger1[o];}return p;};e.exports=n;},null);
__d("ReactComposerInstantMediaAttachmentSelector.react",["ReactComposerMediaAttachmentSelector.react","ComposerTargetData","Bootloader","FileInput.react","ReactComponentWithPureRenderMixin","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=l,o=n.PropTypes,p=l.createClass({displayName:"ReactComposerInstantMediaAttachmentSelector",mixins:[k],propTypes:{mediaAcceptParam:o.shape({photos:o.string,both:o.string}).isRequired,onClick:o.func.isRequired,onFilesSelected:o.func.isRequired,targetData:o.instanceOf(h).isRequired},render:function(){return (l.createElement(j,{display:"inline",accept:this.props.mediaAcceptParam.both,multiple:this.props.targetData.targetSupportsMultiplePhotos,onChange:this._onFilesSelected,onClick:this.props.onClick,ref:"fileInput",role:"button",tabIndex:"0"},l.createElement(g,{label:m._("Add Photos\/Video")})));},_onFilesSelected:function(event){this.props.onFilesSelected(event);i.loadModules(["ReactComposerMediaUtils"],function(q){return q.clearInput(this.refs.fileInput.getFileInput());}.bind(this));}});e.exports=p;},null);
__d("ReactComposerMediaFilePickerMixin",["ReactComposerContextMixin","Bootloader","invariant"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={mixins:[g],componentWillMount:function(){i(this.props.photoLimit);i(this.props.targetData);},_onFileInputClick:function(k){h.loadModules(["ReactComposerAttachmentLoader","ReactComposerAttachmentType","ReactComposerMediaInitUtils","ReactComposerPhotoUploadActions","ReactComposerLoggingStore"],function(l,m,n,o,p){o.inputClicked(this.context.composerID);l.load(this.context.composerID,m.MEDIA,typeof k==='function'?k:n.bootload,n.getBootstrapURI(this.context.composerID,this.context.composerType,this.context.targetID,this.context.actorID));}.bind(this));},_onFilesSelected:function(event){h.loadModules(["ReactComposerAttachmentType","ReactComposerAttachmentActions","ReactComposerPhotoUploader","ReactComposerMediaUtils"],function(k,l,m,n){var o=new m(this.context.composerID,this.props.photoLimit,this.context.actorID);l.selectAttachment(this.context.composerID,k.MEDIA);n.uploadPhotosOrVideoFromTarget(this.context.composerID,event.target,o,this.props.targetData.targetSupportsMultiplePhotos);}.bind(this));}};e.exports=j;},null);
__d("ReactComposerInstantMediaAttachmentSelectorContainer.react",["ReactComposerInstantMediaAttachmentSelector.react","ReactComposerMediaFilePickerMixin","ComposerTargetData","ReactComponentWithPureRenderMixin","React","curry"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=k,n=m.PropTypes,o=k.createClass({displayName:"ReactComposerInstantMediaAttachmentSelectorContainer",mixins:[j,h],propTypes:{bootload:n.func,mediaAcceptParam:n.shape({photos:n.string,both:n.string}).isRequired,photoLimit:n.number.isRequired,targetData:n.instanceOf(i).isRequired},render:function(){return (k.createElement(g,k.__spread({},this.props,{onClick:l(this._onFileInputClick,this.props.bootload),onFilesSelected:this._onFilesSelected})));}});e.exports=o;},null);
__d("ReactComposerNotesAttachmentSelector.react",["ReactComposerAttachmentSelectorContainer.react","ReactComposerAttachmentType","ReactComposerContextMixin","AsyncRequest","ReactComponentWithPureRenderMixin","React","XNotesComposerController","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=l,q=p.PropTypes,r=l.createClass({displayName:"ReactComposerNotesAttachmentSelector",mixins:[i,k],propTypes:{label:q.string},getDefaultProps:function(){return {label:n._("Write Note")};},render:function(){return (l.createElement(g,{attachmentID:h.NOTES,label:this.props.label,icon:o('/images/litestand/composer/icons/addfile.png'),onSelected:this._onSelected}));},_onSelected:function(){new j(m.getURIBuilder().getURI()).setMethod('POST').setStatusElement(this.context.composerID).send();}});e.exports=r;},null);
__d("ReactFeedComposer.react",["ReactComposer.react","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerLazyHeader.react","ReactComposerMediaAttachmentSelector.react","ReactComposerInstantMediaAttachmentSelectorContainer.react","ReactComposerMediaLazyAttachment.react","ReactComposerNotesAttachmentSelector.react","ReactComposerMLEAttachmentSelector.react","ReactComposerMLELazyAttachment.react","ReactComposerQAndAAttachmentSelector.react","ReactComposerQAndALazyAttachment.react","ReactComposerStatusAttachmentSelector.react","ReactComposerStatusLazyAttachment.react","Bootloader","DOMContainer.react","React","LitestandComposer","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){b.__markCompiled&&b.__markCompiled();var da=z.createClass({displayName:"ReactFeedComposer",mixins:[l],propTypes:{contextConfig:k.isRequired,config:j.isRequired},componentDidMount:function(){aa.initComposer(this.props.contextConfig.composerID);},statics:{preload:function(){}},render:function(){var ea=this._getAdditionalAttachmentComponents(),fa=ea[0],ga=ea[1];return (z.createElement(g,{className:"_5n2b",loggingConfig:this.props.config.loggingConfig},z.createElement(m,{showDelimiter:true},z.createElement(v,{label:ca._(["Update Status","155d6cd2b97f05fd0d45ff038fb8f47d"])}),fa),z.createElement(i,{expanded:this.props.config.showExpandedComposer},z.createElement(w,{bootload:function(ha){return x.loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerFeedPostButtonContainer.react"],ha);},config:this.props.config,selected:true,expanded:this.props.config.showExpandedComposer}),ga)));},_getAdditionalAttachmentComponents:function(){var ea=this.props.config.attachmentsConfig,fa=[],ga=[],ha=ea[h.ALBUM].enabled,ia=ea[h.NOTES].enabled,ja=ea[h.QANDA].enabled,ka=ea[h.MLE].enabled;fa.push(this._getMediaAttachmentSelector());ga.push(z.createElement(p,{key:"media",config:this.props.config,bootload:function(la){return x.loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerFeedMediaPostButtonContainer.react"],la);}}));if(ha)fa.push(z.createElement(y,{key:"album",display:"block"},ea[h.ALBUM].createAlbumLink));if(ia)fa.push(z.createElement(q,{key:"notes"}));if(ja){fa.push(z.createElement(t,{key:"qanda"}));ga.push(z.createElement(u,{key:"qanda",config:this.props.config}));}if(ka){fa.push(z.createElement(r,{key:"mle",label:ca._("Add a Life Event")}));ga.push(z.createElement(s,{key:"mle",config:this.props.config}));}return [fa,ga];},_getMediaAttachmentSelector:function(){var ea=this.props.config.attachmentsConfig[h.MEDIA];if(ea.openFileBrowserImmediately)return (z.createElement(o,{key:"media",mediaAcceptParam:this.props.config.mediaAcceptParam,photoLimit:ea.photoLimit,targetData:this.props.config.targetData,bootload:function(fa){return x.loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerFeedMediaPostButtonContainer.react"],fa);}}));return (z.createElement(n,{key:"media",label:ca._("Add Photos\/Video")}));}});e.exports=da;},null);