using System;
using System.Collections.Generic;
using System.Web;
using System.IO;
using System.Text;
using System.Net;
using System.Collections.Specialized;
/// <summary>
/// Summary description for ClassName
/// </summary>
public class DoPostPayPalData
{
    private byte[] data;
    private string queryString;
    private string endPointUrl;
    private string method;
    private string contentType;

    public DoPostPayPalData()
    {
       queryString = "";
       endPointUrl = "";
       method = "POST";
       contentType = "application/x-www-form-urlencoded";
    }

    public DoPostPayPalData(string qs, string url)
    {
       this.queryString = qs;
       this.endPointUrl = url;
    }

    public string Post() 
    {
        data = Encoding.UTF8.GetBytes(queryString); //Convert query string paramenters to byte array
   
        //Create request object
        HttpWebRequest req = (HttpWebRequest)WebRequest.Create(endPointUrl);
        req.Method = "POST";
        req.ContentType = "application/x-www-form-urlencoded";
        req.ContentLength = data.Length;

        //Create a new request stream
        Stream newStream = req.GetRequestStream();
        newStream.Write(data, 0, data.Length);
        newStream.Close();

        WebResponse response = req.GetResponse(); // Get the original response.
        newStream = response.GetResponseStream(); // Get the stream containing all content returned by the requested server.
        
        StreamReader reader = new StreamReader(newStream); // Open the stream using a StreamReader for easy access.
        string responseFromServer = reader.ReadToEnd(); // Read the content fully up to the end.

        // Clean up the streams.
        reader.Close();
        newStream.Close();
        response.Close();

        return responseFromServer;
    }
}
