# UFO Sightings Web App

## Overview of Project:
In this project, we use JavaScript to create an interactive web page that dynamically displays UFO sightings information based on user-provided search criteria.

## Results:
Using HTML and JavaScript, we created a web page that can dynamically display UFO sightings information based on users' provided search criteria.  We start by displaying UFO sightings information from our entire database.  As users enter their search criteria in one of the five options (Date, City, State, Country, Shape), the sightings information displayed in the table will be dynamically filtered accordingly.

<img src = "static/images/UFO_web_app_page.png">

## Summary:
One drawback with our current design is that the user input criteria are very precise, for example, a specific date.  This leads to no result displayed in many instances.

We recommend the following improvements:

* Instead of filtering sightings from a specific date user entered, we can filter sightings on and after the date user entered.  This will help users narrow their search yet not eliminate too many sightings.

* Since all except two sightings are from the US (with the two exceptions from CA), we can consider eliminating the "Country" search option.  This will streamline the search options for our users.  



