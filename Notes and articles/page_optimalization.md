## A. What is page optimization and why it's needed?

Website loading speed is as important as ever, even though the Internet connections are getting faster, and smartphones and computers are getting stronger.  If the page doesn't load quickly, people may close the page and move on to a website that will respond at the speed they need. Having a slow website can also lower your ranking on the search engines since Google ranks faster websites higher.

There are many things that can optimized to speed up load times. Your website’s home page, the images you use on your website, as well as the database – they can all be optimized in order to make the website load much faster for the visitors.

## B. How to check what is slowing down loading time?

There are many free tools available on the Internet which allows testing the page and check where the mistakes are being made. Here are a couple o good examples

1. https://developers.google.com/speed/pagespeed/insights/ Google’s PageSpeed Insights: Google’s very own tool. Gives mobile and desktop recommendations.
2. https://tools.pingdom.com/ Reviews site performance, grades it, and tracks performance history so you can see how your site speed has changed.
3. https://gtmetrix.com/ GTmetrix analyzes how well your site loads, checking both PageSpeed and YSlow scores. It also gives suggestions on how to improve the load time.
4. https://www.webpagetest.org/ Run a free website speed test from multiple locations around the globe using real browsers (IE and Chrome) and at real consumer connection speeds.

## C. Avoid that mistakes by following this rules during development

1. Compress HTML, CSS and JS files

Minify HTML, CSS and JavaScript by removing all unnecessary comments, white space and code. This will improve performance because the file size will be reduced. Depending on task manager (webpack, grunt, gulp ) which is used in project there are special npm plugins (uglify) or loaders which can be used to do that during populating dist folder.

2. Compress images

Same rule as with with HTML, CSS and JS files you can reduce size of images in dist folder. However, this may cause problems with images quality or compressed pictures will still slow loading time. In this situation, it's good to use Lazy Load which delays loading of images in long web pages. Images outside of viewport are not loaded until user scrolls to them. This is opposite of image preloading. Using Lazy Load on long web pages will make the page load faster. In some cases, it can also help to reduce server load.

3. Keep files organized

Make CSS and JavaScript External: Using external files will generally make the pages load faster because JavaScript and CSS files are cached by the browser.
Alternatively, if you use CSS in a web page, place the CSS in the HEAD element. This makes the page appear load faster and it can do so progressively. With JavaScript, move the scripts to the bottom of the page.

4. Hold off on external scripts

These external scripts make HTTP requests every time a new page loads. To figure out which scripts are slowing down page use this tool https://tools.pingdom.com/

5. Cache Busting

It's a technic which allows the browser to save CSS or js files on user desktop so when he enters page again the browser will not download this files again.

6. USE CDN

A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Since they can dowloand all needed filles from server near them.

Common CDNs include:

MaxCDN
CloudFlare
Amazon CloudFront
