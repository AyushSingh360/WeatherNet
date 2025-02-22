# Basic-Weather-Program-
# Weather App

This is a simple weather application built using JavaScript, HTML, and CSS. It fetches weather data from the OpenWeatherMap API and displays information like temperature, description, and a rough estimate of rain probability.

## Features

*   Displays current weather conditions for a specified location.
*   Shows temperature in Celsius.
*   Provides a brief weather description (e.g., "cloudy," "sunny," "rain").
*   Gives a *very basic* estimated rain probability (note: this is a simplified estimate based on a short-term forecast and is not a highly accurate prediction).
*   Displays a weather icon.

## How to Use

1.  **Get an API Key:** You will need an API key from OpenWeatherMap (openweathermap.org). Sign up for a free account to obtain one.  This is *essential* for the app to function.
2.  **Replace Placeholder:** Open the `index.html` file (or whatever you named the HTML file) in a text editor.  Find the line `const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';` and replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual API key.
3.  **Enter Location:**  Open the `index.html` file in your web browser. Type the desired city name into the input field and click the "Get Weather" button.

**Important:** The current version of the code *requires you to use your own API key*.  The example code previously only demonstrated how to get weather for a hardcoded set of cities.  Using your API key allows you to get weather information for *any* location supported by OpenWeatherMap.

## Technologies Used

*   HTML
*   CSS
*   JavaScript
*   OpenWeatherMap API

## Notes on Rain Probability

The rain probability displayed is a *rough estimate*. It's based on a simplified analysis of the short-term (3-hour) forecast data.  Real-world weather forecasting is much more complex and uses sophisticated models.  Consider this value an approximation.

## Further Development

Possible future enhancements:

*   More accurate rain probability calculation.
*   Displaying more detailed forecast information (e.g., for multiple days).
*   Improved user interface.
*   Integration with other weather APIs for comparison.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.
