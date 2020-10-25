About
Investi is a clone of popular trading application Robinhood. I chose to work on a Robinhood clone because the application combines the simplicity of a beautiful interface and the complexity of conveying critical investment information to the average investor. 

Built with
- Javascript
- React
- Redux
- Ruby on Rails
- HMTL
- CSS
- PostgreSQL
- IEX/FMP/News API

Features

User Authentication 
Ruby's BCrypt gem, a hash algorithm, was used to encrypt the password information. 


Data Visualization
Two APIs 1) Investor Exchange (IEX) and 2) Financial Modeling Prep were used to retrieve comapny financials and fetching real time company data. ReCharts is used for the actual rendering of the graph visualization.

News
A News API was used to render the top news for the day to the user. 

Search Bar
Users can search for companies either by ticker or name. Once the navbar is mounted to the page, the api is called to seed the database. Everytime the use types something to the search bar the search query will search the database fot he closest match. 