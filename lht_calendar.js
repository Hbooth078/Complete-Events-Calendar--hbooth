"use strict";

/* Author: Hailee | Date: Dec 4, 2025
   Script to generate events table for Lyman Hall Theater
*/

"use strict";

// Starting test date
let thisDay = new Date("October 1, 2021");

// Initialize table HTML with ID calendar_table
let tableHTML = "<table id='calendar_table'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// End date = 14 days after thisDay
let endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

// Loop through events
for (let i = 0; i < eventDates.length; i++) {
    let eventDate = new Date(eventDates[i]);
    let eventDay = eventDate.toDateString();
    let eventTime = eventDate.toLocaleTimeString();

    // Only include events within the 2-week window
    if (thisDay <= eventDate && eventDate <= endDate) {
        tableHTML += "<tr>";
        tableHTML += "<td class='event-date'>" + eventDay + " at " + eventTime + "</td>";
        tableHTML += "<td class='event-desc'>" + eventDescriptions[i] + "</td>";
        tableHTML += "<td class='event-price'>" + eventPrices[i] + "</td>";
        tableHTML += "</tr>";
    }
}

// Close table
tableHTML += "</table>";

// Insert into page
document.getElementById("eventList").innerHTML = tableHTML;
