# Digital Clock (SpireX)

A simple, responsive digital clock web app.

## Preview
<image src="digitalClock.png"></image>

## Demo
[![Demo](digitalClock.mp4)]<image src="digitalClock.png"></image>

## Features
- Live time updates every second
- 12-hour clock formatting
- Current date displayed (weekday, month, day, year)
- Responsive styling

## File Structure
- `digitalClock.html` — Main HTML page
- `digitalClock.css` — Styles for the clock UI
- `digitalClock.js` — JavaScript logic for time + date
- `assets/` — Supporting files (if any)

## How it works
- `digitalClock.js`:
  - Reads the current time using `new Date()`
  - Converts hours to **12-hour** format
  - Pads hours/minutes/seconds with leading zeros
  - Updates:
    - `#hours`
    - `#minutes`
    - `#seconds`
    - `#date` using `toLocaleDateString`
  - Runs once on load and then every 1000ms via `setInterval`

## Run locally
Open `digitalClock.html` in any browser.

## Notes
- The time function computes an `amPm` value, but the current UI only renders hours, minutes, and seconds (12-hour conversion is applied).


