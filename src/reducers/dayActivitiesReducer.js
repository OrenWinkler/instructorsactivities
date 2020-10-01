const initialState = [
    {
        dateFrom: "1/1/2020",
        dateTo: "2/1/2020",

        "dayActivities": [
            {
              "date": "1/1/2020",
              "holidayDescription": "תשעה באב",
              "activities": [
                {
                  "id": 1,
                  "startingHour": "09:00:00",
                  "endingHour": "10:00:00",
                  "title": "כותרת ראשית",
                  "subTitle": "תת כותרת 1",
                  "isAllDay": false,
                  "phone": "03-54629940",
                  "activityType": {
                    "id": 1,
                    "description": "הדרכה בארגון",
                    "isConfirmationRequired": true
                  },
                  "organization" : 
                  {
                    "id" : 1,
                    "name" : "בית ספר רבין",
                    "type" :
                    {
                      "id" : 1,
                      "description"  : "מוסד חינוכי"
                    }
                  },
                  "status": {
                    "id": 3,
                    "description": "Assigned"
                  },
                  "instructors": [
                    {
                      "id": 5,
                      "name": "שמחה גורניסקי",
                      "isHeadInstructor": true,
                      "confirmedActivity": true
                    },
                    {
                      "id": 2,
                      "name": "מאיה כהן",
                      "isHeadInstructor": false,
                      "confirmedActivity": true
                    }
                  ],
                  "activityConflicts": [
                    {
                      "activityId": 2,
                      "startingHour": "08:00:00",
                      "endingHour": "09:00:00",
                      "title": "כותרת",
                      "subTitle": "תת כותרת"
                    }
                  ]
                }
              ],
              "roles": [
                {
                  "instructor": {
                    "id": 1,
                    "name": "שמחה רמון"
                  },
                  "role": {
                    "id": 2,
                    "description": "מדריכה באוויר"
                  }
                }
              ]
            }
          ]
    }
]

const dayActivitiesReducer = (state = {dayActivities: initialState}, action) => {
    return state
};

export {dayActivitiesReducer};
export default dayActivitiesReducer;