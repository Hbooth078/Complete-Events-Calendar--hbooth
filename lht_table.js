/*
  Name: YOUR NAME
  Date: TODAY'S DATE
  File: lht_table.js
  Purpose: Generates a dynamic events table for Lakewood Theater
*/

// STEP 4 — create test date: October 1, 2021
let thisDay = new Date("October 1, 2021");

// STEP 5 — create tableHTML starter
let tableHTML = "<table id='eventTable'>"
              + "<caption>Upcoming Events</caption>"
              + "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// STEP 6 — calculate a date 14 days after thisDay
let endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// STEP 7 — loop through eventDates array
for (let i = 0; i < eventDates.length; i++) {

    // STEP 8.1 — create event Date object
    let eventDate = new Date(eventDates[i]);

    // STEP 8.2 — format day and time
    let eventDay = eventDate.toDateString();
    let eventTime = eventDate.toLocaleTimeString();

    // STEP 8.3 — check if within 2-week window
    if (thisDay <= eventDate && eventDate <= endDate) {

        tableHTML += "<tr>";
        tableHTML += `<td>${eventDay} at ${eventTime}</td>`;
        tableHTML += `<td>${eventDescriptions[i]}</td>`;
        tableHTML += `<td>${eventPrices[i]}</td>`;
        tableHTML += "</tr>";
    }
}

// STEP 9 — close the table
tableHTML += "</table>";

// STEP 10 — insert into the eventList div
document.getElementById("eventList").innerHTML = tableHTML;
