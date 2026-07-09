# Digital Clock - Documentation

## Overview
This mini project renders a **digital clock** and **current date** in the browser. It uses plain HTML/CSS/JavaScript (no framework).

## Components
### 1) `digitalClock.html`
Contains:
- Clock UI
  - `#hours`, `#minutes`, `#seconds` spans
- Date container
  - `#date` div
- Loads:
  - `digitalClock.css`
  - `digitalClock.js`

### 2) `digitalClock.js`
Main logic:
- Creates a `Date` instance (`new Date()`) to get current time.
- Extracts:
  - `hours` via `getHours()`
  - `minutes` via `getMinutes()`
  - `seconds` via `getSeconds()`
- Converts to **12-hour display**:
  - AM/PM is computed using `hours >= 12 ? "PM" : "AM"`
  - Hours are converted to 12-hour format via `hours % 12` and `0 -> 12`.
- Pads values to always show two digits using:
  - `String(value).padStart(2, "0")`
- Updates DOM elements:
  - `document.getElementById("hours").textContent = hours;` (and minutes/seconds)
- Builds the date using `toLocaleDateString("en-US", dateData)` with options:
  - weekday (long)
  - month (long)
  - day (numeric)
  - year (numeric)
- Keeps the display live:
  - Calls `realTime()` once
  - Repeats every second with `setInterval(realTime, 1000)`

### 3) `digitalClock.css`
Defines the look and responsiveness:
- Centered layout using flexbox
- Dark container with aqua text
- Large font for time
- Smaller font for date
- Basic media query for small screens

## Usage
1. Open `frontend/spireX/digitalClock/digitalClock.html` in a browser.
2. The clock will update automatically every second.

## Implementation Notes
- The script calculates `amPm` but the current UI in `digitalClock.html` does not render it.
- If you want to display AM/PM, add an element in HTML (e.g., `#amPm`) and render `amPm` in `digitalClock.js`.

