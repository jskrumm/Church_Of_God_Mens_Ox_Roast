define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["guestList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	    <li>\r\n	        First Name: <span class=\"firstName\">"
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</span>\r\n	        Last Name: <span class=\"lastName\">"
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</span>\r\n	        Pass Type: <span class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.eventPassType || (depth0 != null ? depth0.eventPassType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventPassType","hash":{},"data":data}) : helper)))
    + "</span>\r\n	        Activities: <span class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activities","hash":{},"data":data}) : helper)))
    + "</span>\r\n	        <input type=\"button\" value=\"Remove\" class=\"remove-guest\"/>\r\n	    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h4>Guest Added</h4>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guest : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

return this["JST"];

});