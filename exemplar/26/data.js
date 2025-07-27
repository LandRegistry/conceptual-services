var data = {
  "service": "26. Contractual controls",
  "last-updated": "27 July 2025",
  "userjourneys": [            
    {
      "title": "Register a control (geospatial data capture part)",
      "path": [{
        "caption": "Task list",
        "imgref": "images/register-a-control/1-task-list.png",
        "note": "Mirror the (assumed) real-life cycle of creating a contract."
      },{
        "caption": "Upload geojson",
        "imgref": "images/register-a-control/2-upload-geojson.png",
        "note": "Assumption that developers are working digitally and that this data can be added by either sharing with the conveyancer or uploaded by the developer directly."
      },{
        "caption": "or use title number",
        "imgref": "images/register-a-control/3-use-title-number.png",
      },{
        "caption": "or upload image",
        "imgref": "images/register-a-control/4-upload-image.png",
        "note": ["Doing the hard word to make it simple: experiment to learn about conveyancers ways of working. Uses AI Extract to convert to geojson from a PDF."
          ,"Expect licensing issues, data storage questions."
        ]
      },
      {
        "caption": "or draw boundary",
        "imgref": "images/register-a-control/5-draw-boundary.png",
        "note": "There may be digital/geospatial literacy issues. See lessons learnt from LLC."
      },
      {
        "caption": "Confirm boundary",
        "imgref": "images/register-a-control/6-confirm-boundary.png",
        "note": [
        	"Reads in geometry and performs title look up."
        	]
      },
      {
        "caption": "Data capture",
        "imgref": "images/register-a-control/data-capture.png",
        "note": [
        	"Capture remaining control data."
        	]
      },
      {
        "caption": "Check your answers",
        "imgref": "images/register-a-control/7-check-your-answers.png",
      },
      {
        "caption": "Confirmation",
        "imgref": "images/register-a-control/8-confirmation.png",
        "note": "Make this a proactive service by running checks using this geojson against other applicable services: eg planning for flooding, Nature Restoration Fund, HSE asset maps, etc."
      }
      
      ]
    },{
      "title": "View land controls",
      "path": [{
        "caption": "Start page",
        "imgref": "images/view-controls/1-start.png"
      },{
        "caption": "Find location",
        "imgref": "images/view-controls/2-find-location.png"
      },{
        "caption": "Map",
        "imgref": "images/view-controls/3-map.png",
        "note": "Interactive map showing boundary definitions. Clicking / tabbing through shows high level details of the control."
      },{
        "caption": "List",
        "imgref": "images/view-controls/4-list.png",
        "note": "Search results as a list. Show key data for users. Link to the detail view."
      },{
        "caption": "Details of a contractual control",
        "imgref": "images/view-controls/5-details.png",
        "note": ["Full details of the control. Direct links to download the data",
          "Also use fixed standard urls to link directly to the data, eg landregistry.gov.uk/planning/ control/CS254667.json."]
      }
      ]
    }
  ]}
