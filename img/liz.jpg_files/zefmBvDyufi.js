/*!CK:682078323!*//*1435006085,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["T\/4E\/"]); }

__d("ReactComposerAttachmentPreviewContainer.react",["ReactComposerMinutiaeAttachmentActions","ReactComposerMinutiaeAttachmentStore","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerAttachmentPreview.react","ReactComposerScrapedAttachmentActions","ReactComposerScrapedAttachmentStore","DOM","Event","ReactComponentWithPureRenderMixin","React","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=p,s=r.PropTypes,t=p.createClass({displayName:"ReactComposerAttachmentPreviewContainer",_buttonEvent:(undefined),mixins:[o,i(l,h)],propTypes:{markup:s.instanceOf(HTMLElement)},statics:{calculateState:function(u,v){var w=l.getMarkup(u),x=h.getMarkup(u);return {markup:w||x};}},componentDidUpdate:function(){if(this.refs.attachment){var u=m.scry(p.findDOMNode(this.refs.attachment),"._9s")[0];if(u)this._buttonEvent=n.listen(u,'click',function(event){k.setScrapedAttachment(this.context.composerID,null,{});g.setMarkup(this.context.composerID,null);this._buttonEvent&&this._buttonEvent.remove();this._buttonEvent=null;}.bind(this));}},componentWillUnmount:function(){this._buttonEvent&&this._buttonEvent.remove();},render:function(){if(!this.state.markup)return null;return (p.createElement(j,{ref:"attachment",markup:this.state.markup}));}});e.exports=t;},null);