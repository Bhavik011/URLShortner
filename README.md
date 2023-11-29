# URLShortner

This is a basic application to shorten any provided url.

To run this project first run this command:

``` bash
npm install
```
This will install all the required packages for this project

now to start server locally run this command:

```bash
node app.js
```
Now your server is started. You can see in the console a log :"Server running"

Now to shorten a url send a post request on this url: http://localhost:3000/app/v1/shortenUrl with this body:
You can even send your own customurl!
{
    "originalUrl":"http://google.com",
    "customUrl":"yt"
}

you will recieve a short url in the response. 
This url has an expiry of 1 minute.

To open the shorten url just copy and paste the shortened url in any browser. It will redirect to the original url link.


if you send any url which is invalid or any custom url which is already taken or if you try to access a short url which has expired then appropriate errors will come.
