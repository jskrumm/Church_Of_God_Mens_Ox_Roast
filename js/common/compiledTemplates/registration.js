define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["confirmationInformation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <li>\r\n	        <h4>Church Attending:</h4>\r\n	        <span>"
    + this.escapeExpression(((helper = (helper = helpers['church-atteding'] || (depth0 != null ? depth0['church-atteding'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"church-atteding","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </li>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <li>\r\n            <h4>Activities:</h4>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.activities : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "                <span>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</span>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <h3>Guest Information</h3>\r\n    <ul class=\"guestInfo\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guests : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li>\r\n                <h4>First Name:</h4>\r\n                <span>"
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </li>\r\n            <li>\r\n                <h4>Last Name:</h4>\r\n                <span>"
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </li>\r\n            <li>\r\n                <h4>Event Pass:</h4>\r\n                <span>"
    + alias3(((helper = (helper = helpers.eventPassType || (depth0 != null ? depth0.eventPassType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventPassType","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </li>\r\n            <li>\r\n                <h4>Activities:</h4>\r\n                <span>"
    + alias3(((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activities","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </li>\r\n            <li class=\"total\">\r\n                <h4>Total Cost:</h4>\r\n                <span>&#36;"
    + alias3(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h3>Registration Information</h3>\r\n<ul class=\"generalInfo\">\r\n    <li>\r\n        <h4>Confirmation #:</h4>\r\n        <span>"
    + alias3(((helper = (helper = helpers.confirmationId || (depth0 != null ? depth0.confirmationId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n    <li>\r\n	    <h4>First Name:</h4>\r\n	    <span>"
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n    <li>\r\n        <h4>Last Name:</h4>\r\n        <span>"
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n    <li>\r\n        <h4>Phone #:</h4>\r\n        <span>"
    + alias3(((helper = (helper = helpers.PAYMENTREQUEST_0_SHIPTOPHONENUM || (depth0 != null ? depth0.PAYMENTREQUEST_0_SHIPTOPHONENUM : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"PAYMENTREQUEST_0_SHIPTOPHONENUM","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n    <li>\r\n	    <h4>Email:</h4>\r\n	    <span>"
    + alias3(((helper = (helper = helpers.EMAIL || (depth0 != null ? depth0.EMAIL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"EMAIL","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['church-atteding'] : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <li>\r\n        <h4>Event Pass:</h4>\r\n        <span>"
    + alias3(((helper = (helper = helpers.eventPass || (depth0 != null ? depth0.eventPass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventPass","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </li>\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.activities : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.guests : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<p>Grand Total: &#36;"
    + alias3(((helper = (helper = helpers.PAYMENTREQUEST_0_AMT || (depth0 != null ? depth0.PAYMENTREQUEST_0_AMT : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"PAYMENTREQUEST_0_AMT","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"useData":true});

this["JST"]["guestList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	    <li>\r\n	    	<dl>\r\n	    		<dt>First Name:</dt>\r\n	    		<dd class=\"firstName\">"
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Last Name:</dt>\r\n	    		<dd class=\"lastName\">"
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Pass Type:</dt>\r\n	    		<dd class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.eventPassType || (depth0 != null ? depth0.eventPassType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventPassType","hash":{},"data":data}) : helper)))
    + "</dd>\r\n				\r\n	    		<dt>Activities:</dt>\r\n	    		<dd class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activities","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Guest Total:</dt>\r\n	    		<dd class=\"guestCost\">$"
    + alias3(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</dd>\r\n	    	</dl>\r\n	        <input type=\"button\" value=\"Remove\" class=\"remove-guest\"/>\r\n	    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h4>Guest Added</h4>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guest : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

return this["JST"];

});