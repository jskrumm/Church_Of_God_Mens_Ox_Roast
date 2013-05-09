using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.WebPages;
using System.Web.WebPages.Html;

public static class Html5Extensions
{
    private enum InputType{
        Color, Date, DateTime, DateTime_Local, Email, Month, Number, Range, Search, Tel, Text, Time, Url, Week
    }

    public static IHtmlString Color(this HtmlHelper helper, string name, object value = null, object attributes = null){
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Color, value, attributes);
    }

    public static IHtmlString DateTime(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.DateTime, value, attributes);
    }

    public static IHtmlString DateTimeLocal(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.DateTime_Local, value, attributes);
    }

    public static IHtmlString Email(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Email, value, attributes);
    }

    public static IHtmlString Month(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Month, value, attributes);
    }

    public static IHtmlString Number(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Number, value, attributes);
    }

    public static IHtmlString Range(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Range, value, attributes);
    }

    public static IHtmlString Search(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Search, value, attributes);
    }

    public static IHtmlString Tel(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Tel, value, attributes);
    }

    public static IHtmlString Time(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Time, value, attributes);
    }

    public static IHtmlString Url(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Url, value, attributes);
    }

    public static IHtmlString Week(this HtmlHelper helper, string name, object value = null, object attributes = null) {
        if (name.IsEmpty()) {
            throw new ArgumentException("Value cannot be null or an empty string.", "name");
        }
        return BuildInputTag(name, InputType.Week, value, attributes);
    }

    private static IHtmlString BuildInputTag(string name, InputType inputType, object value = null, object attributes = null) {
    
        TagBuilder tag = new TagBuilder("input"); 
        tag.MergeAttribute("type", GetInputTypeString(inputType));
        
        tag.MergeAttribute("name", name, replaceExisting: true);
        tag.GenerateId(name);
        if (value != null || HttpContext.Current.Request.Form[name] != null) {
            value = value != null ? value : HttpContext.Current.Request.Form[name];
            tag.MergeAttribute("value", value.ToString());
        }

        if (attributes != null) {
            var dictionary = attributes.GetType()
             .GetProperties()
             .ToDictionary(prop => prop.Name, prop => prop.GetValue(attributes, null));
            tag.MergeAttributes(dictionary, replaceExisting: true);
        }
        return new HtmlString(tag.ToString(TagRenderMode.SelfClosing));
    
    }

    private static string GetInputTypeString(InputType inputType) {
        if (!Enum.IsDefined(typeof(InputType), inputType)) {
            inputType = InputType.Text;
        }
        return inputType.ToString().Replace('_', '-').ToLowerInvariant();
    }
}