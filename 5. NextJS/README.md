## A. Informations

This is a concept of small search application which allows on searching and displaying The Times articles clippings by publishing date. It's created using Next.js framework and React.
You can search for articles since beginning of 1851. Searched results will be displayed as simple clipping containing article title, lead, date of publishing and link to the article.

Application use free Times API. The response can be big (~20 megabytes) and contain thousands of articles, depending on the year and month so it make take 3-4 sec to load searched answers.

Useful links:
1. https://github.com/zeit/next.js/
2. https://developer.nytimes.com/

## B. Installing project instructions:

   1. Download or clone this repository on your desktop.
   2. Open console/terminal and head to the project folder
   3. Than type `npm install` to install all dependencies
   4. After finishing installation type `npm run dev` and open your browser on http://localhost:3000/
   5. To run production build type `npm run build` and `npm start`and navigate to http://localhost:8080/

## C. Structure

1. Components - Contains React Components
2. Pages - Application main Containers
4. Static - all CSS, images, etc.
