$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/training/features/BookHotel.feature");
formatter.feature({
  "line": 2,
  "name": "Book hotel Feature",
  "description": "",
  "id": "book-hotel-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run1"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "user logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a user launches \"chrome\" and navigates to the Adactin web page \"http://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user enters the \"MxhegoSinazo\" and \"EQXX8J\" and clicks login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 17
    },
    {
      "val": "http://adactinhotelapp.com",
      "offset": 64
    }
  ],
  "location": "StepDefs.a_user_launches_and_navigates_to_the_Adactin_web_page(String,String)"
});
formatter.result({
  "duration": 9860212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MxhegoSinazo",
      "offset": 19
    },
    {
      "val": "EQXX8J",
      "offset": 38
    }
  ],
  "location": "StepDefs.a_user_enters_the_and_and_clicks_login(String,String)"
});
formatter.result({
  "duration": 4350084500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successful booking of a hotel",
  "description": "",
  "id": "book-hotel-feature;successful-booking-of-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "a user populates fields in the search page and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user selects a hotel from the selection page and click continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user populates the book with valid data and clicks confirm",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a order is generated and the booking is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "a user clicks logout",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "a user is successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.a_user_populates_fields_in_the_search_page_and_clicks_continue()"
});
formatter.result({
  "duration": 2658709000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_selects_a_hotel_from_the_selection_page_and_click_continue()"
});
formatter.result({
  "duration": 1158746700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_populates_the_book_with_valid_data_and_clicks_confirm()"
});
formatter.result({
  "duration": 5341514400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_order_is_generated_and_the_booking_is_successful()"
});
formatter.result({
  "duration": 5988591300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_clicks_logout()"
});
formatter.result({
  "duration": 3594973700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_is_successfully_logged_out()"
});
formatter.result({
  "duration": 158407100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a user launches \"chrome\" and navigates to the Adactin web page \"http://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user enters the \"MxhegoSinazo\" and \"EQXX8J\" and clicks login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 17
    },
    {
      "val": "http://adactinhotelapp.com",
      "offset": 64
    }
  ],
  "location": "StepDefs.a_user_launches_and_navigates_to_the_Adactin_web_page(String,String)"
});
formatter.result({
  "duration": 7736469000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MxhegoSinazo",
      "offset": 19
    },
    {
      "val": "EQXX8J",
      "offset": 38
    }
  ],
  "location": "StepDefs.a_user_enters_the_and_and_clicks_login(String,String)"
});
formatter.result({
  "duration": 4178723800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Delete an existing booking",
  "description": "",
  "id": "book-hotel-feature;delete-an-existing-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Clicks on Booked Itinerary",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enters order number   for a recently booked existing order and clicks on search",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "a booking record is displayed on the table,the user selects the booking radio button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "a user clicks on cancel selected",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "a confirm cancel popup message appears",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "a user clicks on ok",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "booking is successfully cancelled",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "a user clicks logout",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "a user is successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.clicks_on_Booked_Itinerary()"
});
formatter.result({
  "duration": 4175017600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.entersOrderNumberForARecentlyBookedExistingOrderAndClicksOnSearch()"
});
formatter.result({
  "duration": 1013149000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.aBookingRecordIsDisplayedOnTheTableTheUserSelectsTheBookingRadioButton()"
});
formatter.result({
  "duration": 100772500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.aUserClicksOnCancelSelected()"
});
formatter.result({
  "duration": 116772900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.aConfirmCancelPopupMessageAppears()"
});
formatter.result({
  "duration": 7196300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.aUserClicksOnOk()"
});
formatter.result({
  "duration": 10609700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.bookingIsSuccessfullyCancelled()"
});
formatter.result({
  "duration": 3063782100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_clicks_logout()"
});
formatter.result({
  "duration": 3663582600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.a_user_is_successfully_logged_out()"
});
formatter.result({
  "duration": 156104600,
  "status": "passed"
});
});