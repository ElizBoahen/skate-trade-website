/*!CK:1772879863!*//*1438572769,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["L1uLM"]); }

__d("ReactComposerStatusAttachment.react",["ReactComposerAttachmentType","ReactComposerConfig","ReactComposerConstants","ReactComposerContextMixin","ReactComposerDragDropPromptContainer.react","ReactComposerMultilingualStatusContainer.react","ReactComposerProfilePhotoBlock.react","ReactComposerAttachmentPreviewContainer.react","ReactComposerStatusAttachmentMentionsInputWithTagExpansionContainer.react","ReactComposerStatusFooterContainer.react","ReactComposerStatusPlaceholderFooter.react","ReactComposerTaggerSummaryContainer.react","ReactComposerTaggerSummaryPlaceholder.react","React","createEmptyEditorState","ReactComposerStatusActions","ComposedInlineStyle","DocumentModifier","EditorChangeType","EditorState","ReactInputSelection","SelectionState"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();b('createEmptyEditorState');b('ReactComposerStatusActions');b('ComposedInlineStyle');b('DocumentModifier');b('EditorChangeType');b('EditorState');b('ReactInputSelection');b('SelectionState');var u=t,v=u.PropTypes,w=t.createClass({displayName:"ReactComposerStatusAttachment",mixins:[j],propTypes:{additionalTaggers:v.arrayOf(v.shape({button:v.element.isRequired,container:v.element.isRequired})),config:h.isRequired,focused:v.bool,onFocus:v.func,onMentionsInputChange:v.func,onPasteFiles:v.func,onPasteRawText:v.func.isRequired,onPostIntent:v.func,placeholder:v.string.isRequired,postButtonModule:v.func},getDefaultProps:function(){return {taggersData:{}};},componentWillMount:function(){if(this.props.focused)setTimeout(function(){return this.refs.mentionsInput.focus();}.bind(this),0);},render:function(){var x;if(this.props.focused){x=t.createElement(p,{additionalTaggers:this.props.additionalTaggers,attachmentsConfig:this.props.config.attachmentsConfig,audienceXHP:this.props.config.audienceXHP,config:this.props.config,mediaAcceptParam:this.props.config.mediaAcceptParam,postButtonModule:this.props.postButtonModule,taggersConfig:this.props.config.taggersConfig,taggersData:this.props.config.taggersData,targetData:this.props.config.targetData});}else if(!this.props.focused&&this.props.config.showExpandedComposer)x=t.createElement(q,{config:this.props.config});var y=this.props.focused?t.createElement(r,null):t.createElement(s,null),z=this._shouldShowMultilingualStatus()?t.createElement(l,null):null,aa=this.props.config.attachmentsConfig[g.STATUS],ba=t.createElement(o,{config:this.props.config,onChange:this.props.onMentionsInputChange,onFocus:this.props.onFocus,onPasteFiles:this.props.onPasteFiles,onPasteRawText:this.props.onPasteRawText,onPostIntent:this.props.onPostIntent,placeholder:this.props.placeholder,ref:"mentionsInput"}),ca;if(aa.showProfilePic){ca=t.createElement(m,{profilePicSrc:aa.profilePicSrc,profileURI:aa.profileURI},ba);}else ca=ba;return (t.createElement("div",{className:this.props.className},t.createElement(k,{root:this,config:this.props.config}),ca,t.createElement(n,null),y,z,x));},_shouldShowMultilingualStatus:function(){return (this.context.gks[i.GK_MULTILINGUAL_COMPOSER]&&this.props.focused);}});e.exports=w;},null);