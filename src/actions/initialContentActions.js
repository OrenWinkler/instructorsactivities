import * as ActionTypes from "./types"
import axios from "axios";

//fake json for testing only
const fakeInitialcontent = {
  content : {
   selectedmenuItem: 2,
   sideMenuCaption: {
     logo: "c:\\icon.jpg",
     title: "מדור תיאום – מחוז מרכז",
     exitMenu: {
       text: "יציאה",
       icon: "c:\\exitIcon.ico"
     }
   },
   navigationMenu: [
     {
       text: "לןז מדריכות",
       icon: "c:\\sched.ico"
     },
     {
       text: "ארגונים",
       icon: "c:\\organizations.ico"
     }
   ],
   dateFiltering: {
     filterViews: [
       {
         id: 1,
         text: "יומי"
       },
       {
         id: 2,
         text: "שבועי"
       }
     ]
   },
   instructorRoles: [
     {
       id: 1,
       text: "מדריכה באוויר"
     },
     {
       id: 2,
       text: "עתודת שמירות"
     }
   ],
   conflictsActions: [
     {
       id: 1,
       text: "עריכת תאום",
       icon: "c:\\action1.ico"
     },
     {
       id: 2,
       text: "שיבוץ מדריכות",
       icon: "c:\\action2.ico"
     }
   ],
   newActivities: [
     {
       id: 1,
       text: "הדרכה במוסח"
     },
     {
       id: 2,
       text: "הדרכה בארגון"
     }
   ],
   schedulePublish: {
     publishDetails: {
       text: "פרסום הלוז",
       icon: "c:\\publish.ico"
     },
     publishSuccessDetails: {
       text: "הלוז פורסם בהצלחה",
       icon: "c:\\publishSuccess.ico"
     },
     publishAfterChangeDetails: {
       addNewText: "יצרת פעילות חדשה לאחר פרסום הלוז...",
       updateNewText: "עדכנת פעילות לאחר פרסום הלוז...",
       deleteNewText: "מחקת פעילות לאחר פרסום הלוז...",
       icon: "c:\\publishAfterChange.ico",
       confirmationText: "הבנתי"
     }
   },
   instructorsDetails: [
     {
       id: 1,
       name: "עליזה כהן",
       picture: "c:\\pic1.jpg"
     },
     {
       id: 2,
       name: "שני מלבורו",
       picture: "c:\\pic2.jpg"
     }
   ],
   filteringOptions: {
     notAssignedDetails: {
       text: "טרם שובץ",
       icon: "c:\\notAssigned.ico"
     },
     clearFilterText: "איפוס סינון",
     allInstructorsText: "לכל המדריכות"
   },
   organizations: [
     {
       id: 1,
       name: "בית ספר עמל",
       Address: "גבעתיים",
       phone: "03-4336664"
     }
   ]
 }
}


//Action Creators
const fetchInitialContentRequest = () => {
  return {
      type: ActionTypes.FETCH_INITIAL_CONTENT_REQUEST
  };
};
const fetchInitialContentSuccess = content => {
  return {
      type: ActionTypes.FETCH_INITIAL_CONTENT_SUCCESS,
      payload: content
  };
};
const fetchInitialContentFailure = error => {
  return {
      type: ActionTypes.FETCH_INITIAL_CONTENT_FAILURE,
      payload: error
  };
};

export const fetchInitialContent = () => {
  return function(dispatch)
  {
    //axios.get('https://instructorsActivities/api/initialContent')
    dispatch(fetchInitialContentRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')  //just a test
    .then(response => {
      dispatch(fetchInitialContentSuccess(fakeInitialcontent))
    })
    .catch(error => {
      dispatch(fetchInitialContentFailure(error.message))
    })
  }
}