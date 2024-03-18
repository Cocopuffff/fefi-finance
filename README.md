# FEFI Finance

## Background information

FEFI Finance was conceived to address the needs of time-constrained traders who can benefit from a tool that quickly aggregates, summarizes, and provides sentiment analysis for topics of interest. The app also includes chart viewing capabilities for price analysis, drawing inspiration from TradingView's user interface.

## Features

- View and delete instruments in the watchlist.
- Add an instrument to the watchlist via a modal.
- View the price chart of an instrument in the watchlist with zoom and pan functionality using mouse scrolling and drag-and-drop.
- Manage candlestick granularity of the chart by toggling the caret in the nav bar and selecting a new time frame.
- View and delete topics in the topics list.
- Add topics by searching in the search field.
- Manage topic display name and fine-tune search parameters.
- View news feed and large language model-generated analysis of the news feed, including summaries and sentiment analysis.
- Loading screen modal between pages.
- Loading spinner animation when loading component data on the page.
- Error modal and handling.

## Screenshot(s) of app & functionalities:

- Main page
  ![Welcome page](./src/screenshots/1_main.png?raw=true "Main menu")
- Chart page UI
  ![First chart in watchlist loads on default](./src/screenshots/2_chart_ui.png?raw=true "Chart page UI")
- Delete button appears on hover of instrument
  ![Hovering on watchlist displays delete button for a cleaner UI](./src/screenshots/3_chart_watchlist_hover_delete.png?raw=true "Hover on watchlist")
- Add instruments modal
  !["Modal pops up on clicking of "+" button on watchlist"](./src/screenshots/4_chart_add_instrument.png?raw=true "Add instruments to watchlist")
- Filter instruments by name
  !["Typing instrument name in search field filters in real time"](./src/screenshots/5_chart_filter_instruments.png?raw=true "Filter instruments by name")
- Change candlestick granularity
  !["Clicking on the caret button in the nav bar enables selecting different candlestick ganularities for the chart"](./src/screenshots/6_toggle_candlestick_granularity.png?raw=true "Change candlestick granularity in nav bar")
- News page UI
  ![Empty news feed section on load](./src/screenshots/7_news_ui.png?raw=true "News page UI")
- Add topic button
  !["Clicking add button on topics side list refocuses the user to search directly"](./src/screenshots/8_add_topic.png?raw=true "Add button refocuses on search input")
- Search new topic results, summary and sentiment analysis
  !["Search new topic to follow in search bar and searching causes relevant news feed, summary and sentiment analaysis to be displayed"](./src/screenshots/9_search_new_topic.png?raw=true "Search results, summary and sentiment analysis")
- Search another topic
  !["Directly search for another topic"](./src/screenshots/10_search_bershire_hathaway.png?raw=true "Search another topic")
- Edit topic display name and search parameters ![Click on the edit button to customise display name and search parameters for the best results](./src/screenshots/11_edit_display_name_and_search_parameter.png?raw=true "Edit topic display name and search parameters")
- Scroll news feed
  ![Scroll down to view more news](./src/screenshots/12_news_scroll_down.png?raw=true "Scroll news feed")
- No news found
  !["UI for no news found"](./src/screenshots/13_no_news_results.png?raw=true "No news found")
- Delete topic
  ![Hover over topic to display and click on delete button](./src/screenshots/14_delete_topic.png?raw=true "Delete topic")

## Technologies Used:

- HTML
- CSS with Bootstrap
- React + Vite
- OANDA API: https://developer.oanda.com/rest-live-v20/introduction/
- newsdata API: https://newsdata.io/documentation/
- groq: https://console.groq.com/docs/
- airtable: https://airtable.com/developers/web/api/introduction
- NPM package: "@fortawesome/free-solid-svg-icons": "^6.5.1"
- NPM package: "@fortawesome/react-fontawesome": "^0.2.0",
- NPM package: "echarts": "^5.5.0",
- NPM package: "echarts-for-react": "^3.0.2",

## Getting Started:

The user interface is designed to be intuitive. Users can search for news and manage topics under the News tab. Go to the News tab and search for a topic of interest to get relevant news feeds. Users can fine-tune the news feed by clicking on the edit button and editing the two blue fields: the topic's display name and the search parameter sent to newsdata.io. Use "AND", "OR", "NOT", and round brackets "()" operators between search terms to refine the search. Manage your news topics via the side list.

Users can also view and manage their watchlist instruments' prices in the side list. Adjust candlestick granularity in the nav bar when in the Chart tab by toggling the caret button. The chart, powered by ECharts, allows users to zoom in and out by scrolling and dragging within the chart.

## Next Steps:

I plan to optimize news aggregation and large language model analysis to provide higher quality analysis of the expected impact of news on price. For charting, adding price streaming or interval price update capabilities for real-time updates is a possibility.

## Attributions:

- ChatGPT: hide news image failure to load error by creating a stateful image component, formatting time series and options for ECharts for React, debug, debug time frame button styling, manage multiple API calls and merging data, stop event propagation when clicking within modal body.
- Best practice for merging multiple fetches: https://www.squash.io/executing-multiple-fetch-calls-simultaneously-in-reactjs/#:~:text=Making%20multiple%20fetch%20requests%20in,the%20content%20of%20an%20array.&text=Promise.all()-,Promise.,JSON%20and%20process%20the%20data.
- Instrument sorting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Instrument filtering: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Loading animation: https://codepen.io/ajerez/pen/EaEEOW
- Another animation: https://blog.hubspot.com/website/css-animation-examples
- Loading spinner: https://loading.io/css/
- Styling cursor on hover: https://stackoverflow.com/questions/3087975/how-to-change-the-cursor-into-a-hand-when-a-user-hovers-over-a-list-item
- Convert string into floating point number to calculate daily price change: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
- Return relevant array item based on callback function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- Focus input box when clicking elsewhere: https://www.geeksforgeeks.org/set-the-focus-to-html-form-element-using-javascript/
- Resize image to fit container: https://sentry.io/answers/how-do-i-auto-resize-an-image-to-fit-a-div-container/
