WPGroHo=jQuery.extend({my_hash:"",data:{},renderers:{},syncProfileData:function(r,a){WPGroHo.data[r]||(WPGroHo.data[r]={},jQuery("div.grofile-hash-map-"+r+" span").each(function(){WPGroHo.data[r][this.className]=jQuery(this).text()})),WPGroHo.appendProfileData(WPGroHo.data[r],r,a)},appendProfileData:function(r,a,o){for(var e in r){if(jQuery.isFunction(WPGroHo.renderers[e]))return WPGroHo.renderers[e](r[e],a,o,e);jQuery("#"+o).find("h4").after(jQuery('<p class="grav-extra '+e+'" />').html(r[e]))}}},WPGroHo),jQuery(document).ready(function(){"undefined"!=typeof Gravatar&&(Gravatar.profile_cb=function(r,a){WPGroHo.syncProfileData(r,a)},Gravatar.my_hash=WPGroHo.my_hash,Gravatar.init("body","#wpadminbar"))});
//# sourceMappingURL=maps/wpgroho.js.map
