/*!CK:1244981066!*//*1435069427,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DUenI"]); }

__d("ReactComposerScrapedAttachmentPhotoDropWarningDialog.react",["LayerHideOnEscape","ReactComponentWithPureRenderMixin","React","ReactLayeredComponentMixin","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogHeader.react","XUIDialogHeaderTitle.react","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();'use strict';var r=i,s=r.PropTypes,t=i.createClass({displayName:"ReactComposerScrapedAttachmentPhotoDropWarningDialog",mixins:[h,j],propTypes:{shown:s.bool,onConfirm:s.func,onCancel:s.func},componentDidMount:function(){this.refs.dialog.layer.subscribe('hide',this._onHide);},renderLayers:function(){return {dialog:(i.createElement(l,{ref:"dialog",shown:this.props.shown,width:500,layerHideOnBlur:false,behaviors:{LayerHideOnEscape:g}},i.createElement(o,null,i.createElement(p,null,q._("Remove Link Preview"))),i.createElement(m,null,q._("Uploading a photo will remove the link preview. Do you want to continue?")),i.createElement(n,null,i.createElement(k,{use:"confirm",onClick:this.props.onConfirm,label:q._("Upload Photo")}),i.createElement(k,{onClick:this.props.onCancel,label:q._("Cancel")}))))};},render:function(){return null;},_onHide:function(){this.props.onCancel&&this.props.onCancel();},_onCancel:function(){this.props.onCancel&&this.props.onCancel();}});e.exports=t;},null);