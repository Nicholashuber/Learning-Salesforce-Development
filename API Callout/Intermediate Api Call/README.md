# Lightning-API-Callout
<h2>Summary</h2>
<p>In this example we send an HTTP request from our apex class code initiated from a button on our lightning component, and then receive the response from the external web service.<br>

The service we are interfacing with is a foreign exchange rates service that sends back the response in JSON format.<br>
We will display the response data on our lightning component.<br></p>


<h2>Setup:</h2>
First you'll need to get yourself an API key here: https://fixer.io/<br>
Authorize the endpoint URL For Apex Callout.
For Authorize the endpoint URL: http://data.fixer.io

<h2>How to:</h2>
From Setup, enter Remote Site Settings in the Quick Find box<br>
Click on the Remote Site Settings.<br>
Click New Remote Site.<br>
For the remote site name, enter foreign_exchange_rates.<br>
For the remote site URL, enter http://data.fixer.io  ,This URL authorizes all subfolders for the endpoint, like http://data.fixer.io/latest<br>
Make sure your Active checkbox is Equal to True.<br>
Click Save.

<h2>Code Summary</h2>
In apex class controller we have a getCalloutResponseContents @AuraEnabled class method with one parameter url as string type. <br>
The Return type is Map type where String is key and object as value of the Map.<br>
In getCalloutResponseContents Method ,first we created a new HTTP object. and set the EndPoint url with url parameter.<br>
In the url parameter we set url from lightning component js controller.<br>
and when the HttpResponse come from callout, Deserialize the JSON string into the Map collection and return the map.
