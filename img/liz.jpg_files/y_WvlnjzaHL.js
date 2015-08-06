/*!CK:565575866!*//*1438572769,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ORbht"]); }

__d("ReactComposerStatusUtils",["Bootloader","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerScrapedAttachmentActions","uniqueID"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={scrapeLink:function(m,n,o){j.scrapeAttachment(m,n,o);},uploadPastedFile:function(m,n,o){n.uploadID=k();n.filename='';o&&o.enqueueAsyncUploadRequest(m,[n],{});},uploadDroppedFiles:function(m,n,o){h.selectAttachment(m,i.MEDIA);g.loadModules(["ReactComposerMediaUtils"],function(p){p.uploadPhotosOrVideo(m,n,o,true);});}};e.exports=l;},null);