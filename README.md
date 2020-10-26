<h1>About</h1>
Investi is a clone of popular trading application Robinhood. The reason why I chose to work on a Robinhood clone is because I've always enjoy trading and learning about how to trade. This application combines a user friendly interface in order to convey critical investment information to the average investor. 

<h2>Built with</h2?>
<li>Javascript</li>
<li>React</li>
<li>Redux</li>
<li>Ruby on Rails</li>
<li>HMTL</li>
<li>CSS</li>
<li>PostgreSQL</li>
<li>IEX/FMP/News API</li>

<h2>Features</h2>

<h3>User Authentication </h3>
![User Auth](https://imgur.com/a/dj6IoVK)
Ruby's BCrypt gem, a hash algorithm, was used to encrypt the password information. 


Data Visualization
Two APIs 1) Investor Exchange (IEX) and 2) Financial Modeling Prep were used to retrieve comapny financials and fetching real time company data. ReCharts is used for the actual rendering of the graph visualization.

News
A News API was used to render the top news for the day to the user. 

Search Bar
Users can search for companies either by ticker or name. Once the navbar is mounted to the page, the api is called to seed the database. Everytime the use types something to the search bar the search query will search the database fot he closest match. 