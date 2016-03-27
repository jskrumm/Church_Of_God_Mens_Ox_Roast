define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["error"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"error\">\r\n	"
    + this.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\r\n</p>";
},"useData":true});

return this["JST"];

});