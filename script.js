(function () {
  "use strict";

  /* =========================================================
     1) FULL MERGED CAMPUS DATASET (173 locations + v2 updates)
  ========================================================= */
  const EMBEDDED_DATA = {
    meta: {
      title: "PVG COET Campus Guide data",
      source: "Campus_Navigation_Data_v2.xlsx",
      total_locations: 173
    },
    buildings: [
      {
        id: "FBL",
        name: "FE Building (Late Govind Kashinath Patil)",
        aliases: [
          "fe building",
          "first year building",
          "fe",
          "first year",
          "govind kashinath patil",
          "late govind kashinath patil"
        ]
      },
      {
        id: "BH",
        name: "Boys Hostel",
        aliases: ["boys hostel", "boy's hostel", "gents hostel", "boys"]
      },
      {
        id: "GH",
        name: "Girls Hostel",
        aliases: ["girls hostel", "ladies hostel", "girls"]
      },
      {
        id: "NB",
        name: "New Building",
        aliases: ["new building", "new college building"]
      },
      {
        id: "MB",
        name: "Main Building",
        aliases: ["main building", "main college building"]
      },
      {
        id: "MSP",
        name: "Muktangan School & Playground",
        aliases: ["muktangan", "muktangan school", "playground", "school", "ground"]
      },
      {
        id: "AB",
        name: "Auditorium Building",
        aliases: ["auditorium building", "auditorium"]
      },
      {
        id: "VBS",
        name: "Vastu Bhandar (Store)",
        aliases: ["vastu bhandar", "store", "shop"]
      },
      {
        id: "MLB",
        name: "Mechanical Lab Building",
        aliases: ["mechanical lab building", "mechanical building", "mech building"]
      },
      {
        id: "PA",
        name: "Parking Area",
        aliases: ["parking area", "parking"]
      },
      {
        id: "SB",
        name: "Shadaygu Building",
        aliases: [
          "shadaygu building",
          "shatayu building",
          "shatayu",
          "shadaygu",
          "ladies hostel shatayu"
        ]
      }
    ],
    locations: [
      { id: "FBL-F1-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Utility", name: "Water Point", rooms: null, description: "This water cooler is placed on the right side of the lift on the ground floor of the FE building.", keywords: ["drinking water", "water", "water cooler", "water point"], needs_verification: false },
      { id: "FBL-F1-R02", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Utility", name: "Lift", rooms: null, description: "This lift is just to the left of the boys' washroom on ground floor of FE building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "FBL-F1-R03", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Office", name: "FE Staff Room (1)", rooms: null, description: "The 1st FE staff room is just to the left of the HOD's cabin on ground floor of FE building.", keywords: ["cabin", "faculty room", "fe staff room", "fe staff room (1)", "office", "staff room", "staffroom", "teachers room"], needs_verification: false },
      { id: "FBL-F1-R04", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Office", name: "FE HOD Office", rooms: null, description: "The FE HOD's office is just to the right of the 1st FE staff room on the ground floor of the FE building.", keywords: ["cabin", "head of department", "hod", "hod cabin", "hod office", "office"], needs_verification: false },
      { id: "FBL-F1-R05", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Office", name: "Staff Room (2)", rooms: null, description: "The 2nd FE staff room is just to the right of the HOD's cabin on the ground floor.", keywords: ["cabin", "faculty room", "office", "staff room", "staff room (2)", "staffroom", "teachers room"], needs_verification: false },
      { id: "FBL-F1-R06", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Washroom", name: "Ladies Toilet (FE Ground Floor)", rooms: null, description: "The ladies' toilet on the ground floor of the FE building is just to the left of the 3rd staff room.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "FBL-F1-R07", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Office", name: "Staff Room (3)", rooms: null, description: "The 3rd staff room is just opposite the 2nd staff room and to the right of the ladies' washroom.", keywords: ["cabin", "faculty room", "office", "staff room", "staff room (3)", "staffroom", "teachers room"], needs_verification: false },
      { id: "FBL-F1-R08", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "Ground Floor", category: "Washroom", name: "Gents Toilet (FE Ground Floor)", rooms: null, description: "The gents' toilet is opposite the 1st staff room and to the left of the lift on the ground floor of the FE building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "FBL-F2-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "1st Floor", category: "Washroom", name: "Gents Toilet (FE 1st Floor)", rooms: null, description: "The gents' toilet is on the 1st floor, opposite the 201 classroom and to the left of the lift.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "FBL-F2-R02", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "1st Floor", category: "Classroom", name: "Classrooms 201, 202, 203", rooms: "201, 202, 203", description: "201, 202 & 203 - these classrooms of FE building are opposite to gents toilet.", keywords: ["201", "202", "203", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "FBL-F2-R03", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "1st Floor", category: "Washroom", name: "Ladies Toilet (FE 1st Floor)", rooms: null, description: "Ladies toilet is on the left side of the mechanical lab.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "FBL-F2-R04", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "1st Floor", category: "Lab", name: "Mechanical Lab", rooms: null, description: "Mechanical lab is on the right side of the ladies washroom.", keywords: ["lab", "laboratory", "mechanical lab"], needs_verification: false },
      { id: "FBL-F3-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Lab", name: "Computer Lab (301A)", rooms: "301A", description: "Computer Lab 301A in FE Building.", keywords: ["301a", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "FBL-F3-R02", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Other", name: "Centre (301B)", rooms: "301B", description: "Center room 301B on 2nd floor.", keywords: ["301b", "centre"], needs_verification: false },
      { id: "FBL-F3-R03", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Classroom", name: "Classroom 302", rooms: "302", description: "302 classroom is on right side of computer lab.", keywords: ["302", "class", "classroom", "lecture hall"], needs_verification: false },
      { id: "FBL-F3-R04", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Washroom", name: "Ladies Toilet (FE 2nd Floor)", rooms: null, description: "Ladies toilet is on the left side of the software lab.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "FBL-F3-R05", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Lab", "name": "Software Lab", rooms: null, description: "Software lab is right side of ladies toilet.", keywords: ["computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "FBL-F3-R06", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "2nd Floor", category: "Washroom", "name": "Gents Toilet (FE 2nd Floor)", rooms: null, description: "Gents toilet is opposite to computer lab.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "FBL-F4-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "3rd Floor", category: "Washroom", "name": "Gents Toilet (FE 3rd Floor)", rooms: null, description: "Gents toilet is opposite to 401, 402.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "FBL-F4-R02", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "3rd Floor", category: "Classroom", "name": "Classrooms 401, 402, 403", rooms: "401, 402, 403", description: "Room numbers 401, 402 are opposite to the gents toilet.", keywords: ["401", "402", "403", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "FBL-F4-R03", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "3rd Floor", category: "Washroom", "name": "Ladies Toilet (FE 3rd Floor)", rooms: null, description: "Ladies toilet is on right side of room no. 403.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "FBL-F4-R04", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "3rd Floor", category: "Utility", "name": "Water Point (FE 3rd Floor)", rooms: null, description: "Water point is on right side of the lift.", keywords: ["drinking water", "water", "water cooler", "water point"], needs_verification: false },
      { id: "FBL-F5-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "4th Floor", category: "Classroom", "name": "Classrooms 501, 502", rooms: "501, 502", description: "Room numbers 501, 502 are opposite to the gents toilet.", keywords: ["501", "502", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "FBL-F5-R02", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "4th Floor", category: "Washroom", "name": "Ladies Toilet (FE 4th Floor)", rooms: null, description: "Ladies toilet is on the left side from electronics lab.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "FBL-F5-R03", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "4th Floor", category: "Washroom", "name": "Gents Toilet (FE 4th Floor)", rooms: null, description: "Gents toilet is opposite to 501.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "FBL-F5-R04", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "4th Floor", category: "Lab", "name": "Electronics Lab", rooms: null, description: "Electronics lab of FE is on right hand side from 501.", keywords: ["electronics lab", "lab", "laboratory"], needs_verification: false },
      { id: "FBL-F67-R01", building_id: "FBL", building: "FE Building (Late Govind Kashinath Patil)", floor: "6th & 7th Floor", category: "Other", "name": "Under Construction", rooms: null, description: "Currently under construction.", keywords: ["under construction"], needs_verification: false },
      { id: "BH-F1-R01", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (A Wing)", category: "Room", "name": "8 Rooms", rooms: "A001 - A008", description: "8 Rooms (Room A001 - A008) is located on the 1st Floor (A Wing) of Boys Hostel.", keywords: ["8 rooms", "a001", "a008", "room"], needs_verification: false },
      { id: "BH-F1-R02", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (A Wing)", category: "Utility", "name": "Water Point", rooms: null, description: "Water Point is located on the 1st Floor (A Wing) of Boys Hostel.", keywords: ["drinking water", "water", "water cooler", "water point"], needs_verification: false },
      { id: "BH-F2-R01", building_id: "BH", building: "Boys Hostel", floor: "2nd Floor (A Wing)", category: "Room", "name": "8 Rooms", rooms: "A101 - A108", description: "8 Rooms (Room A101 - A108) is located on the 2nd Floor (A Wing) of Boys Hostel.", keywords: ["8 rooms", "a101", "a108", "room"], needs_verification: false },
      { id: "BH-F2-R02", building_id: "BH", building: "Boys Hostel", floor: "2nd Floor (A Wing)", category: "Utility", "name": "Water Point", rooms: null, description: "Water Point is located on the 2nd Floor (A Wing) of Boys Hostel.", keywords: ["drinking water", "water", "water cooler", "water point"], needs_verification: false },
      { id: "BH-F3-R01", building_id: "BH", building: "Boys Hostel", floor: "3rd Floor (A Wing)", category: "Room", "name": "8 Rooms", rooms: "A201 - A208", description: "8 Rooms (Room A201 - A208) is located on the 3rd Floor (A Wing) of Boys Hostel.", keywords: ["8 rooms", "a201", "a208", "room"], needs_verification: false },
      { id: "BH-FTE-R01", building_id: "BH", building: "Boys Hostel", floor: "Terrace (A Wing)", category: "Other", "name": "Terrace", rooms: null, description: "Terrace is located on the Terrace (A Wing) of Boys Hostel.", keywords: ["roof", "rooftop", "terrace"], needs_verification: false },
      { id: "BH-F1-R03", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (B Wing)", category: "Office", "name": "Hostel Office", rooms: null, description: "Hostel Office is located on the 1st Floor (B Wing) of Boys Hostel.", keywords: ["cabin", "hostel office", "hostel warden", "office", "warden"], needs_verification: false },
      { id: "BH-F1-R04", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (B Wing)", category: "Office", "name": "Director Office (Boys Hostel)", rooms: "001 / 002", description: "Director Office (Room 001 / 002) is located on the 1st Floor (B Wing) of Boys Hostel.", keywords: ["001", "002", "cabin", "director", "director cabin", "director office", "director room", "director's office", "office"], needs_verification: false },
      { id: "BH-F1-R05", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (B Wing)", category: "Room", "name": "2 Rooms Reserved for Foreign Students", rooms: null, description: "2 Rooms Reserved for Foreign Students is located on the 1st Floor (B Wing) of Boys Hostel.", keywords: ["2 rooms reserved for foreign students", "room"], needs_verification: false },
      { id: "BH-F1-R06", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (B Wing)", category: "Room", "name": "8 Rooms with Toilet & Wash", rooms: "B003 - B005", description: "8 Rooms with Toilet & Wash (Room B003 - B005) is located on the 1st Floor (B Wing) of Boys Hostel.", keywords: ["8 rooms with toilet & wash", "b003", "b005", "room"], needs_verification: true, verify_note: "Numbering unclear in original notes (8 rooms listed but only range B003-B005 given) - please verify" },
      { id: "BH-F1-R07", building_id: "BH", building: "Boys Hostel", floor: "1st Floor (B Wing)", category: "Utility", "name": "Water Point", rooms: null, description: "Water Point is located on the 1st Floor (B Wing) of Boys Hostel.", keywords: ["drinking water", "water", "water cooler", "water point"], needs_verification: false },
      { id: "BH-F2-R03", building_id: "BH", building: "Boys Hostel", floor: "2nd Floor (B Wing)", category: "Room", "name": "8 Rooms with Toilet/Bath", rooms: "B101 - B108", description: "8 Rooms with Toilet/Bath (Room B101 - B108) is located on the 2nd Floor (B Wing) of Boys Hostel.", keywords: ["8 rooms with toilet/bath", "b101", "b108", "room"], needs_verification: false },
      { id: "BH-F2-R04", building_id: "BH", building: "Boys Hostel", floor: "2nd Floor (B Wing)", category: "Utility", "name": "Electric Room", rooms: null, description: "Electric Room is located on the 2nd Floor (B Wing) of Boys Hostel.", keywords: ["electric room", "electrical room"], needs_verification: false },
      { id: "BH-F3-R02", building_id: "BH", building: "Boys Hostel", floor: "3rd Floor (B Wing)", category: "Room", "name": "8 Rooms with Toilet/Bath", rooms: "B201 - B208", description: "8 Rooms with Toilet/Bath (Room B201 - B208) is located on the 3rd Floor (B Wing) of Boys Hostel.", keywords: ["8 rooms with toilet/bath", "b201", "b208", "room"], needs_verification: false },
      { id: "BH-FTE-R02", building_id: "BH", building: "Boys Hostel", floor: "Terrace (B Wing)", category: "Other", "name": "Terrace - Gym & Reading Hall", rooms: null, description: "Terrace - Gym & Reading Hall is located on the Terrace (B Wing) of Boys Hostel.", keywords: ["gym", "gymnasium", "reading hall", "reading room", "roof", "rooftop", "terrace", "terrace - gym & reading hall"], needs_verification: false },
      { id: "GH-F1-R01", building_id: "GH", building: "Girls Hostel", floor: "1st Floor", category: "Room", "name": "Rooms with Toilet/Bath", rooms: "201 - 215", description: "Rooms with Toilet/Bath (Room 201 - 215) is located on the 1st Floor of Girls Hostel.", keywords: ["201", "215", "room", "rooms with toilet/bath"], needs_verification: true, verify_note: "Building name not labeled on this page - assumed Girls Hostel; please verify" },
      { id: "GH-F1-R02", building_id: "GH", building: "Girls Hostel", floor: "1st Floor", category: "Other", "name": "Study Hall", rooms: null, description: "Study Hall is located on the 1st Floor of Girls Hostel.", keywords: ["study hall", "study room"], needs_verification: false },
      { id: "GH-F2-R01", building_id: "GH", building: "Girls Hostel", floor: "2nd Floor", category: "Room", "name": "Rooms", rooms: "301 - 315", description: "Rooms (Room 301 - 315) is located on the 2nd Floor of Girls Hostel.", keywords: ["301", "315", "room", "rooms"], needs_verification: false },
      { id: "GH-F2-R02", building_id: "GH", building: "Girls Hostel", floor: "2nd Floor", category: "Other", "name": "Study Hall", rooms: null, description: "Study Hall is located on the 2nd Floor of Girls Hostel.", keywords: ["study hall", "study room"], needs_verification: false },
      { id: "NB-F0-R01", building_id: "NB", building: "New Building", floor: "0th Floor", category: "Utility", "name": "Lift", rooms: null, description: "Lift is located on the 0th Floor of New Building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "NB-F0-R02", building_id: "NB", building: "New Building", floor: "0th Floor", category: "Other", "name": "Parking", rooms: null, description: "Parking is located on the 0th Floor of New Building.", keywords: ["parking", "vehicle parking"], needs_verification: false },
      { id: "NB-F0-R03", building_id: "NB", building: "New Building", floor: "0th Floor", category: "Office", "name": "Science/Commerce Office", rooms: null, description: "Science/Commerce Office is located on the 0th Floor of New Building.", keywords: ["cabin", "office", "science/commerce office"], needs_verification: false },
      { id: "NB-F0-R04", building_id: "NB", building: "New Building", floor: "0th Floor", category: "Office", "name": "Staff Room", rooms: null, description: "Staff Room is located on the 0th Floor of New Building.", keywords: ["cabin", "faculty room", "office", "staff room", "staffroom", "teachers room"], needs_verification: false },
      { id: "NB-F1-R01", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Classroom", "name": "Classrooms", rooms: "101, 102, 103, 104", description: "Classrooms (Room 101, 102, 103, 104) is located on the 1st Floor of New Building.", keywords: ["101", "102", "103", "104", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "NB-F1-R02", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Admin Office", rooms: null, description: "Admin Office is located on the 1st Floor of New Building.", keywords: ["admin", "admin office", "administration", "cabin", "office"], needs_verification: false },
      { id: "NB-F1-R03", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Principal Office", rooms: null, description: "Principal Office is located on the 1st Floor of New Building.", keywords: ["cabin", "office", "principal", "principal cabin", "principal office", "principal room", "principal's cabin", "principal's office", "principal's room"], needs_verification: false },
      { id: "NB-F1-R04", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Other", "name": "Conference Hall", rooms: null, description: "Conference Hall is located on the 1st Floor of New Building.", keywords: ["conference hall", "meeting hall"], needs_verification: false },
      { id: "NB-F1-R05", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Admission & Confidential Room", rooms: null, description: "Admission & Confidential Room is located on the 1st Floor of New Building.", keywords: ["admission", "admission & confidential room", "admission office", "admissions", "cabin", "office"], needs_verification: false },
      { id: "NB-F1-R06", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Director's Office", rooms: null, description: "Director's Office is located on the 1st Floor of New Building.", keywords: ["cabin", "director", "director cabin", "director office", "director room", "director's office", "office"], needs_verification: false },
      { id: "NB-F1-R07", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Student Section", rooms: null, description: "Student Section is located on the 1st Floor of New Building.", keywords: ["cabin", "office", "student desk", "student office", "student section"], needs_verification: false },
      { id: "NB-F1-R08", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Office", "name": "Accounts Office", rooms: null, description: "Accounts is located on the 1st Floor of New Building.", keywords: ["accounts", "accounts office", "accounts section", "cabin", "cashier", "fee payment", "fees", "office"], needs_verification: false },
      { id: "NB-F1-R09", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Washroom", "name": "Ladies Washroom (New Building)", rooms: null, description: "Ladies Washroom is located on the 1st Floor of New Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "NB-F1-R10", building_id: "NB", building: "New Building", floor: "1st Floor", category: "Washroom", "name": "Washroom for Handicap", rooms: null, description: "Washroom for Handicap is located on the 1st Floor of New Building.", keywords: ["accessible washroom", "bathroom", "disabled washroom", "handicap washroom", "restroom", "toilet", "washroom", "washroom for handicap"], needs_verification: false },
      { id: "NB-F2-R01", building_id: "NB", building: "New Building", floor: "2nd Floor", category: "Lab", "name": "Computer Lab", rooms: "1, 2, 3", description: "Computer Lab (Room 1, 2, 3) is located on the 2nd Floor of New Building.", keywords: ["1", "2", "3", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "NB-F2-R02", building_id: "NB", building: "New Building", floor: "2nd Floor", category: "Classroom", "name": "Classrooms", rooms: "201, 202", description: "Classrooms (Room 201, 202) is located on the 2nd Floor of New Building.", keywords: ["201", "202", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "NB-F2-R03", building_id: "NB", building: "New Building", floor: "2nd Floor", category: "Washroom", "name": "Gents Wash", rooms: null, description: "Gents Wash is located on the 2nd Floor of New Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents wash", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "NB-F2-R04", building_id: "NB", building: "New Building", floor: "2nd Floor", category: "Washroom", "name": "Handicap Wash", rooms: null, description: "Handicap Wash is located on the 2nd Floor of New Building.", keywords: ["accessible washroom", "bathroom", "disabled washroom", "handicap wash", "handicap washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "NB-F3-R01", building_id: "NB", building: "New Building", floor: "3rd Floor", category: "Classroom", "name": "Classrooms", rooms: "301, 302, 303, 304, 305, 306", description: "Classrooms (Room 301, 302, 303, 304, 305, 306) is located on the 3rd Floor of New Building.", keywords: ["301", "302", "303", "304", "305", "306", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "NB-F3-R02", building_id: "NB", building: "New Building", floor: "3rd Floor", category: "Lab", "name": "Computer Lab 4", rooms: null, description: "Computer Lab 4 is located on the 3rd Floor of New Building.", keywords: ["computer lab", "computer lab 4", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "NB-F3-R03", building_id: "NB", building: "New Building", floor: "3rd Floor", category: "Lab", "name": "Electronics Lab", rooms: null, description: "Electronics Lab is located on the 3rd Floor of New Building.", keywords: ["electronics lab", "lab", "laboratory"], needs_verification: false },
      { id: "NB-F3-R04", building_id: "NB", building: "New Building", floor: "3rd Floor", category: "Washroom", "name": "Ladies Wash", rooms: null, description: "Ladies Wash is located on the 3rd Floor of New Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies wash", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "NB-F3-R05", building_id: "NB", building: "New Building", floor: "3rd Floor", category: "Washroom", "name": "Hand Wash Area", rooms: null, description: "Hand Wash Area is located on the 3rd Floor of New Building.", keywords: ["bathroom", "hand wash area", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "NB-F4-R01", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Classroom", "name": "Classrooms", rooms: "401, 402", description: "Classrooms (Room 401, 402) is located on the 4th Floor of New Building.", keywords: ["401", "402", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "NB-F4-R02", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Office", "name": "Staff Room", rooms: null, description: "Staff Room is located on the 4th Floor of New Building.", keywords: ["cabin", "faculty room", "office", "staff room", "staffroom", "teachers room"], needs_verification: false },
      { id: "NB-F4-R03", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Other", "name": "Library", rooms: null, description: "Library is located on the 4th Floor of New Building.", keywords: ["book issue", "books", "library"], needs_verification: false },
      { id: "NB-F4-R04", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Other", "name": "Reading Hall", rooms: null, description: "Reading Hall is located on the 4th Floor of New Building.", keywords: ["reading hall", "reading room"], needs_verification: false },
      { id: "NB-F4-R05", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Other", "name": "Digital Library", rooms: null, description: "Digital Library is located on the 4th Floor of New Building.", keywords: ["book issue", "books", "digital library", "library"], needs_verification: false },
      { id: "NB-F4-R06", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Washroom", "name": "Gents Wash", rooms: null, description: "Gents Wash is located on the 4th Floor of New Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents wash", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "NB-F4-R07", building_id: "NB", building: "New Building", floor: "4th Floor", category: "Washroom", "name": "Hand Wash Area", rooms: null, description: "Hand Wash Area is located on the 4th Floor of New Building.", keywords: ["bathroom", "hand wash area", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F0-R01", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Office", "name": "College Office", rooms: null, description: "College Office is located on the 0th Floor of Main Building.", keywords: ["cabin", "clerk office", "college office", "main office", "office"], needs_verification: false },
      { id: "MB-F0-R02", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Lab 1", rooms: null, description: "Lab 1 is located on the 0th Floor of Main Building.", keywords: ["lab", "lab 1", "laboratory"], needs_verification: false },
      { id: "MB-F0-R03", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Electrical Lab", rooms: null, description: "Electrical Lab is located on the 0th Floor of Main Building.", keywords: ["electrical lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F0-R04", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Research Lab (Electrical)", rooms: null, description: "Research Lab (Electrical) is located on the 0th Floor of Main Building.", keywords: ["lab", "laboratory", "research lab", "research lab (electrical)"], needs_verification: false },
      { id: "MB-F0-R05", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Washroom", "name": "Ladies Wash", rooms: null, description: "Ladies Wash is located on the 0th Floor of Main Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies wash", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "MB-F0-R06", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Lab 2", rooms: null, description: "Lab 2 is located on the 0th Floor of Main Building.", keywords: ["lab", "lab 2", "laboratory"], needs_verification: false },
      { id: "MB-F0-R07", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Flexo-Gravure Lab", rooms: null, description: "Flexo-Gravure Lab is located on the 0th Floor of Main Building.", keywords: ["flexo-gravure lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F0-R08", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Lab 3", rooms: null, description: "Lab 3 is located on the 0th Floor of Main Building.", keywords: ["lab", "lab 3", "laboratory"], needs_verification: false },
      { id: "MB-F0-R09", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Office", "name": "HOD Cabin / MSPP Lab", rooms: null, description: "HOD Cabin / MSPP Lab is located on the 0th Floor of Main Building.", keywords: ["cabin", "head of department", "hod", "hod cabin", "hod cabin / mspp lab", "hod office", "office"], needs_verification: false },
      { id: "MB-F0-R10", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Offset/Screen Lab", rooms: null, description: "Offset/Screen Lab is located on the 0th Floor of Main Building.", keywords: ["lab", "laboratory", "offset/screen lab"], needs_verification: false },
      { id: "MB-F0-R11", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Package Testing Lab", rooms: null, description: "Package Testing Lab is located on the 0th Floor of Main Building.", keywords: ["lab", "laboratory", "package testing lab"], needs_verification: false },
      { id: "MB-F0-R12", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Lab", "name": "Binding Lab", rooms: null, description: "Binding Lab is located on the 0th Floor of Main Building.", keywords: ["binding lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F0-R13", building_id: "MB", building: "Main Building", floor: "0th Floor", category: "Washroom", "name": "Gents Wash", rooms: null, description: "Gents Wash is located on the 0th Floor of Main Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents wash", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F1-R01", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Utility", "name": "Lift", rooms: null, description: "Lift is located on the 1st Floor of Main Building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "MB-F1-R02", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Washroom", "name": "Ladies Wash", rooms: null, description: "Ladies Wash is located on the 1st Floor of Main Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies wash", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "MB-F1-R03", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "Electronics Lab 1 & 2", rooms: null, description: "Electronics Lab 1 & 2 is located on the 1st Floor of Main Building.", keywords: ["electronics lab 1 & 2", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F1-R04", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "High Voltage Engineering Lab", rooms: null, description: "High Voltage Engineering Lab is located on the 1st Floor of Main Building.", keywords: ["high voltage engineering lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F1-R05", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Classroom", "name": "Classroom", rooms: "107", description: "Classroom (Room 107) is located on the 1st Floor of Main Building.", keywords: ["107", "class", "classroom", "lecture hall"], needs_verification: false },
      { id: "MB-F1-R06", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "Ink Test Lab", rooms: null, description: "Ink Test Lab is located on the 1st Floor of Main Building.", keywords: ["ink test lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F1-R07", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Classroom", "name": "Classrooms", rooms: "109, 110", description: "Classrooms (Room 109, 110) is located on the 1st Floor of Main Building.", keywords: ["109", "110", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "MB-F1-R08", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Washroom", "name": "Gents Toilet", rooms: null, description: "Gents Toilet is located on the 1st Floor of Main Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F1-R09", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Other", "name": "Conference Hall", rooms: "111 / 112", description: "Conference Hall (Room 111 / 112) is located on the 1st Floor of Main Building.", keywords: ["111", "112", "conference hall", "meeting hall"], needs_verification: false },
      { id: "MB-F1-R10", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "Power System Lab", rooms: null, description: "Power System Lab is located on the 1st Floor of Main Building.", keywords: ["lab", "laboratory", "power system lab"], needs_verification: false },
      { id: "MB-F1-R11", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "Analysis Lab", rooms: "102", description: "Analysis Lab (Room 102) is located on the 1st Floor of Main Building.", keywords: ["102", "analysis lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F1-R12", building_id: "MB", building: "Main Building", floor: "1st Floor", category: "Lab", "name": "PLC Lab", rooms: "103", description: "PLC Lab (Room 103) is located on the 1st Floor of Main Building.", keywords: ["103", "lab", "laboratory", "plc lab"], needs_verification: false },
      { id: "MB-F2-R01", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Lab", "name": "Computer Lab A & B", rooms: null, description: "Computer Lab A & B is located on the 2nd Floor of Main Building.", keywords: ["computer lab", "computer lab a & b", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "MB-F2-R02", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Classroom", "name": "Classrooms", rooms: "204, 205, 209, 210, 212", description: "Classrooms (Room 204, 205, 209, 210, 212) is located on the 2nd Floor of Main Building.", keywords: ["204", "205", "209", "210", "212", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "MB-F2-R03", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Lab", "name": "Refrigeration & Air Conditioning Lab", rooms: null, description: "Refrigeration & Air Conditioning Lab is located on the 2nd Floor of Main Building.", keywords: ["lab", "laboratory", "refrigeration & air conditioning lab"], needs_verification: false },
      { id: "MB-F2-R04", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Utility", "name": "Lift", rooms: null, description: "Lift is located on the 2nd Floor of Main Building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "MB-F2-R05", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Washroom", "name": "Gents Toilet", rooms: null, description: "Gents Toilet is located on the 2nd Floor of Main Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F2-R06", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Washroom", "name": "Ladies Toilet", rooms: null, description: "Ladies Toilet is located on the 2nd Floor of Main Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "MB-F2-R07", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Lab", "name": "Engineering Chemistry Lab", rooms: null, description: "Engineering Chemistry Lab is located on the 2nd Floor of Main Building.", keywords: ["engineering chemistry lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F2-R08", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Office", "name": "Exam Control Room", rooms: "206", description: "Exam Control Room (Room 206) is located on the 2nd Floor of Main Building.", keywords: ["206", "cabin", "exam", "exam cell", "exam control room", "examination", "office"], needs_verification: false },
      { id: "MB-F2-R09", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Office", "name": "MBA Department", rooms: "207", description: "MBA Department (Room 207) is located on the 2nd Floor of Main Building.", keywords: ["207", "cabin", "mba", "mba department", "office"], needs_verification: false },
      { id: "MB-F2-R10", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Lab", "name": "Heat Transfer Lab", rooms: "203", description: "Heat Transfer Lab (Room 203) is located on the 2nd Floor of Main Building.", keywords: ["203", "heat transfer lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F2-R11", building_id: "MB", building: "Main Building", floor: "2nd Floor", category: "Lab", "name": "Dynamics of Machines / Kinematics Lab", rooms: "282", description: "Dynamics of Machines / Kinematics Lab (Room 282) is located on the 2nd Floor of Main Building.", keywords: ["282", "dynamics of machines / kinematics lab", "lab", "laboratory"], needs_verification: true, verify_note: "Room number 282 looks unusual for the 2nd floor (maybe 202?) - please verify" },
      { id: "MB-F3-R01", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab", rooms: "301", description: "Software Lab (Room 301) is located on the 3rd Floor of Main Building.", keywords: ["301", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "MB-F3-R02", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab (Lab A/B)", rooms: "302", description: "Software Lab (Lab A/B) (Room 302) is located on the 3rd Floor of Main Building.", keywords: ["302", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab", "software lab (lab a/b)"], needs_verification: false },
      { id: "MB-F3-R03", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Washroom", "name": "Ladies Wash", rooms: null, description: "Ladies Wash is located on the 3rd Floor of Main Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies wash", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "MB-F3-R04", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Room", "name": "Rooms", rooms: "304, 305", description: "Rooms (Room 304, 305) is located on the 3rd Floor of Main Building.", keywords: ["304", "305", "room", "rooms"], needs_verification: false },
      { id: "MB-F3-R05", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Other", "name": "Girls Common Room", rooms: "306", description: "Girls Common Room (Room 306) is located on the 3rd Floor of Main Building.", keywords: ["306", "common room", "girls common room"], needs_verification: false },
      { id: "MB-F3-R06", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab", rooms: "307", description: "Software Lab (Room 307) is located on the 3rd Floor of Main Building.", keywords: ["307", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "MB-F3-R07", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Utility", "name": "Lift", rooms: null, description: "Lift is located on the 3rd Floor of Main Building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "MB-F3-R08", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Office", "name": "Dept. of IT", rooms: null, description: "Dept. of IT is located on the 3rd Floor of Main Building.", keywords: ["cabin", "dept. of it", "information technology", "it department", "it dept", "office"], needs_verification: false },
      { id: "MB-F3-R09", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Office", "name": "Dept. of Computer", rooms: null, description: "Dept. of Computer is located on the 3rd Floor of Main Building.", keywords: ["cabin", "computer department", "computer dept", "computer engineering", "dept. of computer", "office"], needs_verification: false },
      { id: "MB-F3-R10", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Washroom", "name": "Gents Toilet", rooms: null, description: "Gents Toilet is located on the 3rd Floor of Main Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F3-R11", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab 1 & 2", rooms: "311, 312", description: "Software Lab 1 & 2 (Room 311, 312) is located on the 3rd Floor of Main Building.", keywords: ["311", "312", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab", "software lab 1 & 2"], needs_verification: false },
      { id: "MB-F3-R12", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab 4", rooms: "307", description: "Software Lab 4 (Room 307) is located on the 3rd Floor of Main Building.", keywords: ["307", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab", "software lab 4"], needs_verification: true, verify_note: "Room number appears to repeat 307 in original notes - please verify" },
      { id: "MB-F3-R13", building_id: "MB", building: "Main Building", floor: "3rd Floor", category: "Lab", "name": "Software Lab 5 & 6", rooms: "309, 316", description: "Software Lab 5 & 6 (Room 309, 316) is located on the 3rd Floor of Main Building.", keywords: ["309", "316", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab", "software lab 5 & 6"], needs_verification: false },
      { id: "MB-F4-R01", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Office", "name": "Dept. of ENTC", rooms: null, description: "Dept. of ENTC is located on the 4th Floor of Main Building.", keywords: ["cabin", "dept. of entc", "e&tc", "electronics and telecommunication", "entc", "office"], needs_verification: false },
      { id: "MB-F4-R02", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "Dept. of Computer / Lab 2", rooms: "409", description: "Dept. of Computer / Lab 2 (Room 409) is located on the 4th Floor of Main Building.", keywords: ["409", "computer department", "computer dept", "computer engineering", "dept. of computer / lab 2", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F4-R03", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Classroom", "name": "Classrooms", rooms: "409 - 410", description: "Classrooms (Room 409 - 410) is located on the 4th Floor of Main Building.", keywords: ["409", "410", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "MB-F4-R04", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Washroom", "name": "Gents Toilet", rooms: null, description: "Gents Toilet is located on the 4th Floor of Main Building.", keywords: ["bathroom", "boys washroom", "gents toilet", "gents washroom", "male toilet", "men's washroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MB-F4-R05", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "FOC Cabin", rooms: "412", description: "FOC Cabin (Room 412) is located on the 4th Floor of Main Building.", keywords: ["412", "foc cabin", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F4-R06", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "Communication Lab", rooms: "411", description: "Communication Lab (Room 411) is located on the 4th Floor of Main Building.", keywords: ["411", "communication lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F4-R07", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "Digital Electronics Lab", rooms: "401", description: "Digital Electronics Lab (Room 401) is located on the 4th Floor of Main Building.", keywords: ["401", "digital electronics lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F4-R08", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Office", "name": "Director Rajendra Kadukar's Office", rooms: null, description: "Director Rajendra Kadukar's Office is located on the 4th Floor of Main Building.", keywords: ["cabin", "director", "director cabin", "director office", "director rajendra kadukar's office", "director room", "director's office", "office"], needs_verification: false },
      { id: "MB-F4-R09", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "Analog Electronics Lab", rooms: "401", description: "Analog Electronics Lab (Room 401) is located on the 4th Floor of Main Building.", keywords: ["401", "analog electronics lab", "lab", "laboratory"], needs_verification: false },
      { id: "MB-F4-R10", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "Computer Lab 1 & 2", rooms: "402, 403", description: "Computer Lab 1 & 2 (Room 402, 403) is located on the 4th Floor of Main Building.", keywords: ["402", "403", "computer lab", "computer lab 1 & 2", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "MB-F4-R11", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Washroom", "name": "Ladies Wash", rooms: null, description: "Ladies Wash is located on the 4th Floor of Main Building.", keywords: ["bathroom", "female toilet", "girls washroom", "ladies toilet", "ladies wash", "ladies washroom", "restroom", "toilet", "washroom", "women's washroom"], needs_verification: false },
      { id: "MB-F4-R12", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Classroom", "name": "Classrooms", rooms: "404, 405", description: "Classrooms (Room 404, 405) is located on the 4th Floor of Main Building.", keywords: ["404", "405", "class", "classroom", "classrooms", "lecture hall"], needs_verification: false },
      { id: "MB-F4-R13", building_id: "MB", building: "Main Building", floor: "4th Floor", category: "Lab", "name": "VLSI Design Lab", rooms: "406", description: "VLSI Design Lab (Room 406) is located on the 4th Floor of Main Building.", keywords: ["406", "lab", "laboratory", "vlsi design lab"], needs_verification: false },
      { id: "MSP-F0-R01", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Office", "name": "Muktangan School Office", rooms: null, description: "Muktangan School Office is located on ground floor of Muktangan School & Playground.", keywords: ["cabin", "muktangan school office", "office"], needs_verification: false },
      { id: "MSP-F0-R02", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Office", "name": "Muktangan College Office", rooms: null, description: "Muktangan College Office is located on ground floor of Muktangan School & Playground.", keywords: ["cabin", "clerk office", "college office", "main office", "muktangan college office", "office"], needs_verification: false },
      { id: "MSP-F0-R03", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "3 Floors (School Building)", rooms: null, description: "3 Floors (School Building) is located on ground floor of Muktangan School & Playground.", keywords: ["3 floors", "3 floors (school building)"], needs_verification: false },
      { id: "MSP-F0-R04", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Utility", "name": "School-College & Water Point", rooms: null, description: "School-College & Water Point is located on ground floor of Muktangan School & Playground.", keywords: ["drinking water", "school-college & water point", "water", "water cooler", "water point"], needs_verification: false },
      { id: "MSP-F0-R05", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Exit Gate", rooms: null, description: "Exit Gate is located on ground floor of Muktangan School & Playground.", keywords: ["exit", "exit gate", "gate"], needs_verification: false },
      { id: "MSP-F0-R06", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Kabaddi Ground", rooms: null, description: "Kabaddi Ground is located on ground floor of Muktangan School & Playground.", keywords: ["kabaddi", "kabaddi ground", "playground"], needs_verification: false },
      { id: "MSP-F0-R07", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Archery Ground", rooms: null, description: "Archery Ground is located on ground floor of Muktangan School & Playground.", keywords: ["archery", "archery ground", "playground"], needs_verification: true, verify_note: "Handwriting unclear in original notes, read as 'Arch. Gnd' - please verify" },
      { id: "MSP-F0-R08", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Stage", rooms: null, description: "Stage is located on ground floor of Muktangan School & Playground.", keywords: ["stage"], needs_verification: false },
      { id: "MSP-F0-R09", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Football Ground", rooms: null, description: "Football Ground is located on ground floor of Muktangan School & Playground.", keywords: ["football", "football ground", "playground"], needs_verification: false },
      { id: "MSP-F0-R10", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Washroom", "name": "Washroom", rooms: null, description: "Washroom is located on ground floor of Muktangan School & Playground.", keywords: ["bathroom", "restroom", "toilet", "washroom"], needs_verification: false },
      { id: "MSP-F0-R11", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Rangmanch", rooms: null, description: "Rangmanch is located on ground floor of Muktangan School & Playground.", keywords: ["rangmanch"], needs_verification: false },
      { id: "MSP-F0-R12", building_id: "MSP", building: "Muktangan School & Playground", floor: "Ground", category: "Other", "name": "Rang Peeth", rooms: null, description: "Rang Peeth is located on ground floor of Muktangan School & Playground.", keywords: ["rang peeth"], needs_verification: false },
      { id: "AB-F0-R01", building_id: "AB", building: "Auditorium Building", floor: "0th Floor", category: "Other", "name": "Workshop", rooms: null, description: "Workshop is located on the 0th Floor of Auditorium Building.", keywords: ["machine shop", "workshop"], needs_verification: false },
      { id: "AB-F0-R02", building_id: "AB", building: "Auditorium Building", floor: "0th Floor", category: "Utility", "name": "Lift", rooms: null, description: "Lift is located on the 0th Floor of Auditorium Building.", keywords: ["elevator", "lift"], needs_verification: false },
      { id: "AB-F0-R03", building_id: "AB", building: "Auditorium Building", floor: "0th Floor", category: "Lab", "name": "Computer Lab", rooms: "3, 4", description: "Computer Lab (Room 3, 4) is located on the 0th Floor of Auditorium Building.", keywords: ["3", "4", "computer lab", "lab", "laboratory", "pc lab", "programming lab", "software lab"], needs_verification: false },
      { id: "AB-F0-R04", building_id: "AB", building: "Auditorium Building", floor: "0th Floor", category: "Other", "name": "3D Printing", rooms: null, description: "3D Printing is located on the 0th Floor of Auditorium Building.", keywords: ["3d printer", "3d printing"], needs_verification: false },
      { id: "AB-F1-R01", building_id: "AB", building: "Auditorium Building", floor: "1st Floor", category: "Other", "name": "Library", rooms: null, description: "Library is located on the 1st Floor of Auditorium Building.", keywords: ["book issue", "books", "library"], needs_verification: false },
      { id: "AB-F1-R02", building_id: "AB", building: "Auditorium Building", floor: "1st Floor", category: "Other", "name": "Industry Training Cell", rooms: null, description: "Industry Training Cell is located on the 1st Floor of Auditorium Building.", keywords: ["industry training cell", "training cell"], needs_verification: false },
      { id: "AB-F2-R01", building_id: "AB", building: "Auditorium Building", floor: "2nd Floor", category: "Other", "name": "Auditorium", rooms: null, description: "Auditorium is located on the 2nd Floor of Auditorium Building.", keywords: ["auditorium", "seminar hall"], needs_verification: false },
      { id: "AB-F3-R01", building_id: "AB", building: "Auditorium Building", floor: "3rd Floor", category: "Other", "name": "(Details not recorded)", rooms: null, description: "No details have been recorded for the 3rd Floor of Auditorium Building.", keywords: ["(details not recorded)"], needs_verification: true, verify_note: "No details written for this floor in original notes - please fill in" },
      { id: "VBS-F0-R01", building_id: "VBS", building: "Vastu Bhandar (Store)", floor: "Ground", category: "Other", "name": "Xerox Shop", rooms: null, description: "Xerox Shop is located on ground floor of Vastu Bhandar (Store).", keywords: ["photo copy", "photocopy", "print out", "printout", "xerox", "xerox shop"], needs_verification: false },
      { id: "VBS-F0-R02", building_id: "VBS", building: "Vastu Bhandar (Store)", floor: "Ground", category: "Other", "name": "Stationery", rooms: null, description: "Stationery is located on ground floor of Vastu Bhandar (Store).", keywords: ["notebook", "pen", "stationery"], needs_verification: false },
      { id: "VBS-F0-R03", building_id: "VBS", building: "Vastu Bhandar (Store)", floor: "Ground", category: "Other", "name": "Parking", rooms: null, description: "Parking is located on ground floor of Vastu Bhandar (Store).", keywords: ["parking", "vehicle parking"], needs_verification: false },
      { id: "MLB-F0-R01", building_id: "MLB", building: "Mechanical Lab Building", floor: "Ground", category: "Lab", "name": "Applied Thermodynamics Lab", rooms: null, description: "Applied Thermodynamics Lab is located on ground floor of Mechanical Lab Building.", keywords: ["applied thermodynamics lab", "lab", "laboratory"], needs_verification: false },
      { id: "MLB-F0-R02", building_id: "MLB", building: "Mechanical Lab Building", floor: "Ground", category: "Utility", "name": "Transformer Room", rooms: null, description: "Transformer Room is located on ground floor of Mechanical Lab Building.", keywords: ["transformer room"], needs_verification: false },
      { id: "MLB-F0-R03", building_id: "MLB", building: "Mechanical Lab Building", floor: "Ground", category: "Utility", "name": "Generator Room", rooms: null, description: "Generator Room is located on ground floor of Mechanical Lab Building.", keywords: ["generator room"], needs_verification: false },
      { id: "MLB-F0-R04", building_id: "MLB", building: "Mechanical Lab Building", floor: "Ground", category: "Other", "name": "Workshop", rooms: null, description: "Workshop is located on ground floor of Mechanical Lab Building.", keywords: ["machine shop", "workshop"], needs_verification: false },
      { id: "PA-F0-R01", building_id: "PA", building: "Parking Area", floor: "Ground", category: "Other", "name": "2-Wheeler Parking", rooms: null, description: "2-Wheeler Parking is located on ground floor of Parking Area.", keywords: ["2 wheeler parking", "2-wheeler parking", "bike parking", "parking", "two wheeler parking", "vehicle parking"], needs_verification: false },
      { id: "PA-F0-R02", building_id: "PA", building: "Parking Area", floor: "Ground", category: "Other", "name": "4-Wheeler Parking", rooms: null, description: "4-Wheeler Parking is located on ground floor of Parking Area.", keywords: ["4 wheeler parking", "4-wheeler parking", "car parking", "four wheeler parking", "parking", "vehicle parking"], needs_verification: false },
      { id: "PA-F0-R03", building_id: "PA", building: "Parking Area", floor: "Ground", category: "Other", "name": "Cycle Parking", rooms: null, description: "Cycle Parking is located on ground floor of Parking Area.", keywords: ["bicycle parking", "cycle parking", "parking", "vehicle parking"], needs_verification: false },
      { id: "SB-F0-R01", building_id: "SB", building: "Shadaygu Building", floor: "0th Floor", category: "Office", "name": "Office", rooms: "114", description: "The office of the ladies hostel is on the ground floor of the Shatayu building.", keywords: ["114", "cabin", "office"], needs_verification: false },
      { id: "SB-F0-R02", building_id: "SB", building: "Shadaygu Building", floor: "0th Floor", category: "Other", "name": "Reception Room", rooms: "105", description: "The reception room of the ladies hostel is on the ground floor of the Shatayu building.", keywords: ["105", "reception", "reception room"], needs_verification: false },
      { id: "SB-F0-R03", building_id: "SB", building: "Shadaygu Building", floor: "0th Floor", category: "Other", "name": "Kitchen", rooms: "104", description: "The kitchen of the ladies hostel is on the ground floor of the Shatayu building.", keywords: ["104", "kitchen"], needs_verification: false },
      { id: "SB-F0-R04", building_id: "SB", building: "Shadaygu Building", floor: "0th Floor", category: "Other", "name": "Dining Hall", rooms: null, description: "The dining hall of the ladies hostel is on the ground floor of the Shatayu building.", keywords: ["dining hall", "food", "mess", "canteen", "snacks", "lunch", "tea", "coffee"], needs_verification: false },
      { id: "SB-F0-R05", building_id: "SB", building: "Shadaygu Building", floor: "0th Floor", category: "Room", "name": "Old Age Home Rooms (attached toilet/bath)", rooms: "101 - 113", description: "The Old Age Home rooms are on the ground floor of the Shatayu building.", keywords: ["101", "113", "old age home", "old age home rooms", "old age home rooms (attached toilet/bath)", "room"], needs_verification: false }
    ]
  };

  let DATA = EMBEDDED_DATA;

  /* =========================================================
     2) LIVE MAP PINS & BUILDING MAPPINGS
  ========================================================= */
  const PLACES = [
    { name: "PVG College Gate", lat: 18.489722, lng: 73.853583 },
    { name: "Girls Hostel", lat: 18.489556, lng: 73.853528 },
    { name: "Boys Hostel", lat: 18.489889, lng: 73.853306 },
    { name: "Cycle Parking", lat: 18.489556, lng: 73.853222 },
    { name: "Library & Workshop Building", lat: 18.489444, lng: 73.852111 },
    { name: "Muktangan Playground", lat: 18.490028, lng: 73.851472 },
    { name: "Muktangan English Medium School", lat: 18.489917, lng: 73.851917 },
    { name: "MBA 2nd Building", lat: 18.490250, lng: 73.853361 },
    { name: "MBA Building", lat: 18.490188, lng: 73.853063 },
    { name: "FE Building", lat: 18.489888, lng: 73.853578 },
    { name: "Main Building", lat: 18.489938, lng: 73.852438 }
  ];

  const BUILDINGS = [
    [/fe building|first year/i, "FE Building"],
    [/boys hostel/i, "Boys Hostel"],
    [/girls hostel|shadaygu|shatayu/i, "Girls Hostel"],
    [/main building|new building/i, "Main Building"],
    [/muktangan|playground/i, "Muktangan English Medium School"],
    [/auditorium|library|workshop/i, "Library & Workshop Building"],
    [/parking/i, "Cycle Parking"]
  ];

  const ARRIVED_M = 20;
  const WALK_M_PER_MIN = 80;

  const $ = id => document.getElementById(id);
  const panel = $("campusMapPanel");
  const fromSel = $("cmFrom");
  const toSel = $("cmTo");
  const goBtn = $("cmGo");
  const stopBtn = $("cmStop");
  const say = t => { if ($("cmStatus")) $("cmStatus").textContent = t; };

  let map = null, me = null, route = null, trail = null;
  let trailPts = [], watchId = null, dest = null, destLL = null, first = true;
  const routeStyle = { color: "#10233F", weight: 5, dashArray: "8 10" };

  if (fromSel && toSel) {
    fromSel.add(new Option("📍 My current location", "gps"));
    toSel.add(new Option("Select destination", ""));
    PLACES.forEach((p, i) => {
      fromSel.add(new Option(p.name, i));
      toSel.add(new Option(p.name, i));
    });
  }

  const rad = x => x * Math.PI / 180;
  function dist(a, b) {
    const dLat = rad(b[0] - a[0]), dLng = rad(b[1] - a[1]);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
    return 2 * 6371000 * Math.asin(Math.sqrt(h));
  }

  function initMap() {
    if (map || typeof L === "undefined") return;
    map = L.map("campusMap").setView([18.4898, 73.8527], 18);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    PLACES.forEach((p, i) => {
      L.circleMarker([p.lat, p.lng], {
        radius: 8,
        color: "#10233F",
        weight: 3,
        fillColor: "#C6981F",
        fillOpacity: 1
      })
        .addTo(map)
        .bindTooltip("📌 " + p.name)
        .on("click", () => { if (toSel) toSel.value = i; });
    });
  }

  function clearLayers() {
    [me, route, trail].forEach(l => l && map && map.removeLayer(l));
    me = route = trail = null;
    trailPts = [];
  }

  function stop() {
    if (watchId !== null && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    watchId = null;
    if (goBtn) goBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
  }

  function start() {
    if (!toSel || toSel.value === "") { say("⚠️ Select a destination first."); return; }
    if (!navigator.geolocation) { say("⚠️ This browser can’t share your location."); return; }
    stop();
    clearLayers();
    dest = PLACES[toSel.value];
    destLL = [dest.lat, dest.lng];
    first = true;
    trail = L.polyline([], { color: "#C6981F", weight: 5 }).addTo(map);

    if (fromSel && fromSel.value !== "gps") {
      const f = PLACES[fromSel.value];
      route = L.polyline([[f.lat, f.lng], destLL], routeStyle).addTo(map);
      map.fitBounds(route.getBounds(), { padding: [60, 60] });
      say(`📏 ${Math.round(dist([f.lat, f.lng], destLL))} m from ${f.name} to ${dest.name}. Waiting for your GPS location…`);
    } else {
      say("🛰️ Finding your live GPS location…");
    }

    watchId = navigator.geolocation.watchPosition(onPos, onErr, {
      enableHighAccuracy: true,
      maximumAge: 2000,
      timeout: 20000
    });
    if (goBtn) goBtn.disabled = true;
    if (stopBtn) stopBtn.disabled = false;
  }

  function onPos(pos) {
    const here = [pos.coords.latitude, pos.coords.longitude];
    if (!me) {
      me = L.circleMarker(here, {
        radius: 9,
        color: "#fff",
        weight: 3,
        fillColor: "#1f6feb",
        fillOpacity: 1
      }).addTo(map);
    } else {
      me.setLatLng(here);
    }
    trailPts.push(here);
    trail.setLatLngs(trailPts);

    if (fromSel && fromSel.value === "gps") {
      if (route) map.removeLayer(route);
      route = L.polyline([here, destLL], routeStyle).addTo(map);
    }
    if (first) {
      map.fitBounds([here, destLL], { padding: [60, 60] });
      first = false;
    }

    const d = dist(here, destLL);
    if (d <= ARRIVED_M) {
      say(`🎉 You have arrived at ${dest.name}!`);
      stop();
      return;
    }
    const mins = Math.max(1, Math.round(d / WALK_M_PER_MIN));
    const weak = pos.coords.accuracy > 50 ? ` ⚠️ GPS signal is weak (±${Math.round(pos.coords.accuracy)} m).` : "";
    say(`🚶 ${Math.round(d)} m to ${dest.name}, about ${mins} min walk.${weak}`);
  }

  function onErr(e) {
    const msg = {
      1: "🔒 Location is blocked. Allow location for this site in your browser settings, then try again.",
      2: "📡 Your location is not available. Move to an open area and try again.",
      3: "⏱️ Finding your location took too long. Move to an open area and try again."
    };
    say(msg[e.code] || "⚠️ Could not get your location.");
    stop();
  }

  function openMap(destName) {
    if (!panel) return;
    panel.classList.add("cm-open");
    panel.setAttribute("aria-hidden", "false");
    initMap();
    if (map) setTimeout(() => map.invalidateSize(), 60);
    if (destName && toSel) {
      const i = PLACES.findIndex(p => p.name === destName);
      if (i >= 0) toSel.value = i;
      say("🧭 Tap Start navigation when you are ready to walk.");
    } else {
      say("🗺️ Choose your destination, then tap Start navigation.");
    }
  }

  function closeMap() {
    stop();
    if (!panel) return;
    panel.classList.remove("cm-open");
    panel.setAttribute("aria-hidden", "true");
  }

  function placeForBuilding(text) {
    const hit = BUILDINGS.find(b => b[0].test(text));
    return hit ? hit[1] : null;
  }

  if (goBtn) goBtn.addEventListener("click", start);
  if (stopBtn) stopBtn.addEventListener("click", () => { stop(); say("⏹️ Navigation stopped."); });
  if ($("campusMapBack")) $("campusMapBack").addEventListener("click", closeMap);
  if ($("cbMapChip")) $("cbMapChip").addEventListener("click", () => openMap());

  /* =========================================================
     3) SMART EMOJI & CANTEEN/FOOD INTELLIGENCE
  ========================================================= */
  function getLocationEmoji(loc) {
    const text = [loc.name, loc.category, loc.description, ...(loc.keywords || [])].join(" ").toLowerCase();
    if (/canteen|dining|mess|food|snack|lunch|tea|coffee|kitchen/.test(text)) return "🍽️";
    if (/library|reading|book/.test(text)) return "📚";
    if (/computer|software|coding|pc|programming/.test(text)) return "💻";
    if (/lab|laboratory|chemistry|electronics|electrical|thermodynamics|kinematics|vlsi|ink|package|binding/.test(text)) return "🔬";
    if (/washroom|toilet|restroom|bathroom|hand wash/.test(text)) return "🚻";
    if (/water|cooler/.test(text)) return "💧";
    if (/lift|elevator/.test(text)) return "🛗";
    if (/parking|cycle|bike|car/.test(text)) return "🅿️";
    if (/gym|playground|football|kabaddi|archery|stage|rangmanch|auditorium/.test(text)) return "🏟️";
    if (/principal|director|hod|office|accounts|admission|student section|admin/.test(text)) return "🏛️";
    if (/classroom|class|room|hostel/.test(text)) return "🏫";
    if (/xerox|stationery|store|3d/.test(text)) return "🛍️";
    return "📍";
  }

  function isFoodOrCanteenQuery(q) {
    return /\b(canteen|food|eat|eating|hungry|lunch|breakfast|snacks?|tea|chai|coffee|mess|dining|tiffin)\b/i.test(q);
  }

  /* =========================================================
     4) CHATBOT WIDGET, SEARCH & DYNAMIC INTERACTION
  ========================================================= */
  const launcher = $("campusBotLauncher");
  const chatPanel = $("campusBotPanel");
  const closeBtn = $("campusBotClose");
  const chatForm = $("campusBotForm");
  const chatInput = $("campusBotInput");
  const messagesDiv = $("campusBotMessages");

  if (launcher && chatPanel) {
    launcher.addEventListener("click", () => {
      chatPanel.classList.add("cb-open");
      chatPanel.setAttribute("aria-hidden", "false");
      if (chatInput) chatInput.focus();
    });
  }

  if (closeBtn && chatPanel) {
    closeBtn.addEventListener("click", () => {
      chatPanel.classList.remove("cb-open");
      chatPanel.setAttribute("aria-hidden", "true");
    });
  }

  document.querySelectorAll(".cb-suggestions .cb-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.getAttribute("data-q");
      if (q) {
        if (chatInput) chatInput.value = q;
        askWithTyping(q);
      }
    });
  });

  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", e => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val) return;
      chatInput.value = "";
      askWithTyping(val);
    });
  }

  function addMsg(content, sender, isHtml = false) {
    if (!messagesDiv) return null;
    const div = document.createElement("div");
    div.className = "cb-msg " + sender;
    if (isHtml) {
      div.innerHTML = content;
    } else {
      div.textContent = content;
    }
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return div;
  }

  function showTyping() {
    if (!messagesDiv) return null;
    const t = document.createElement("div");
    t.className = "cb-typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    messagesDiv.appendChild(t);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return t;
  }

  function askWithTyping(q) {
    addMsg(q, "user");
    const typingEl = showTyping();
    setTimeout(() => {
      if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
      respondToQuery(q);
    }, 180);
  }

  function initChat() {
    if (!messagesDiv) return;
    messagesDiv.innerHTML = "";
    const welcomeHtml = `
      <span class="cb-loc-name">🎓 Namaste! Welcome to PVG COET Guide</span>
      <p style="margin:0 0 8px;">Ask me about any <strong>lab 🔬</strong>, <strong>office 🏛️</strong>, <strong>canteen/food 🍽️</strong>, <strong>library 📚</strong>, or <strong>washroom 🚻</strong> across all 173 campus spots!</p>
      <div class="cb-chip-row">
        <button type="button" data-quick="Canteen & Dining">🍽️ Canteen & Food</button>
        <button type="button" data-quick="Accounts Office">💰 Accounts Office</button>
        <button type="button" data-quick="Dept. of Computer">💻 Comp Dept</button>
        <button type="button" data-quick="2-Wheeler Parking">🏍️ Parking</button>
      </div>
    `;
    const wDiv = addMsg(welcomeHtml, "bot", true);
    if (wDiv) {
      wDiv.querySelectorAll("[data-quick]").forEach(b => {
        b.addEventListener("click", () => askWithTyping(b.getAttribute("data-quick")));
      });
    }
  }

  fetch("campus_data.json")
    .then(r => (r.ok ? r.json() : Promise.reject()))
    .then(d => {
      if (d && Array.isArray(d.locations) && d.locations.length >= 10) {
        DATA = d;
      }
    })
    .catch(() => {
      DATA = EMBEDDED_DATA;
    });

  function search(raw) {
    if (!DATA || !DATA.locations) return { type: "none" };
    const q = raw.toLowerCase().trim();

    if (isFoodOrCanteenQuery(q)) {
      const foodSpots = DATA.locations.filter(l =>
        /dining|kitchen|mess|food|canteen|snack/i.test(
          [l.name, l.category, l.description, ...(l.keywords || [])].join(" ")
        )
      );
      return { type: "food_guide", options: foodSpots };
    }

    if (q === "office" || q === "offices") {
      const offices = DATA.locations.filter(l =>
        (l.name + " " + (l.category || "")).toLowerCase().includes("office")
      );
      return { type: "category_list", title: "🏛️ Here are the offices on campus:", options: offices.slice(0, 12) };
    }

    if (/washroom|toilet|restroom|bathroom/.test(q)) {
      const washrooms = DATA.locations.filter(l =>
        (l.name + " " + (l.category || "")).toLowerCase().match(/washroom|toilet|restroom/)
      );
      return { type: "category_list", title: "🚻 Here are the washrooms across campus:", options: washrooms.slice(0, 12) };
    }

    if (/^(lab|labs|laboratory)$/.test(q)) {
      const labs = DATA.locations.filter(l => (l.category || "").toLowerCase() === "lab");
      return { type: "category_list", title: "🔬 Here are labs on campus:", options: labs.slice(0, 12) };
    }

    const matchedBuildingIds = new Set();
    (DATA.buildings || []).forEach(b => {
      if ((b.aliases || []).some(a => q.includes(a.toLowerCase()))) {
        matchedBuildingIds.add(b.id);
      }
    });

    const words = q.split(/\s+/).filter(w => w.length > 1);
    const sc = DATA.locations
      .map(l => {
        let s = 0;
        const nameL = (l.name || "").toLowerCase();
        const blob = [l.name, l.building, l.floor, l.rooms || "", l.category, l.description, ...(l.keywords || [])]
          .join(" ")
          .toLowerCase();

        if (nameL === q) s += 12;
        else if (nameL.includes(q)) s += 7;
        if (blob.includes(q)) s += 5;
        if (matchedBuildingIds.has(l.building_id)) s += 4;

        words.forEach(w => {
          if (w.length > 2 && blob.includes(w)) s += 2;
          if ((l.rooms || "").toLowerCase().split(/[\s,/-]+/).includes(w)) s += 6;
        });

        return { l, s };
      })
      .filter(x => x.s > 0);

    if (!sc.length) return { type: "none" };

    sc.sort((a, b) => b.s - a.s);
    const max = sc[0].s;
    const top = sc.filter(x => x.s === max).map(x => x.l);

    if (top.length === 1) return { type: "answer", loc: top[0] };
    return {
      type: "category_list",
      title: "✨ I found a few matching locations. Tap one to view details:",
      options: sc.slice(0, 8).map(x => x.l)
    };
  }

  function respondToQuery(q) {
    if (/^(hi|hii|hello|hey|namaste)\b/i.test(q)) {
      addMsg("👋 Hello! Ask me where any lab 🔬, office 🏛️, canteen/food 🍽️, library 📚, or washroom 🚻 is on the PVG campus.", "bot");
      return;
    }

    const res = search(q);

    if (res.type === "food_guide") {
      let listHtml = "";
      if (res.options && res.options.length) {
        listHtml = res.options
          .map(
            spot => `
          <div style="margin:6px 0; padding:7px 9px; background:#FBF8F1; border-radius:8px; border:1px solid #E4DCC8;">
            <strong>🍽️ ${spot.name}</strong> — ${spot.building || ""} ${spot.floor ? "(" + spot.floor + ")" : ""}<br>
            <span style="font-size:12px; color:#67707E;">${spot.description || ""}</span>
          </div>
        `
          )
          .join("");
      }
      const html = `
        <span class="cb-loc-name">🍽️ Canteen, Snacks & Dining Info</span>
        <p style="margin:0 0 6px;">🍔☕🍛 Here’s what’s recorded for food & dining on campus—plus nearby spots around campus:</p>
        ${listHtml}
        <div class="cb-chip-row">
          <button type="button" data-q="Dining Hall">🍛 Dining Hall</button>
          <button type="button" data-q="Kitchen">👨‍🍳 Kitchen</button>
          <button type="button" data-q="Vastu Bhandar">🛍️ Vastu Bhandar</button>
        </div>
      `;
      const fDiv = addMsg(html, "bot", true);
      if (fDiv) {
        fDiv.querySelectorAll("[data-q]").forEach(btn => {
          btn.addEventListener("click", () => askWithTyping(btn.getAttribute("data-q")));
        });
      }
      return;
    }

    if (res.type === "answer") {
      showAnswerCard(res.loc);
      return;
    }

    if (res.type === "category_list") {
      const botDiv = addMsg(res.title, "bot");
      if (botDiv) {
        const chipRow = document.createElement("div");
        chipRow.className = "cb-chip-row";
        res.options.forEach(l => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.textContent = `${getLocationEmoji(l)} ${l.name} (${l.building_id || l.building || ""})`;
          btn.onclick = () => askWithTyping(l.name);
          chipRow.appendChild(btn);
        });
        botDiv.appendChild(chipRow);
        if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
      }
      return;
    }

    addMsg("🤔 I couldn't find that exact spot on campus. Try 'Canteen & Food 🍽️', 'Principal Office 🏛️', 'FE HOD Office', 'Library 📚', or a room number like '301A'.", "bot");
  }

  function showAnswerCard(loc) {
    const emoji = getLocationEmoji(loc);
    const metaParts = [
      loc.building ? `🏢 ${loc.building}` : "",
      loc.floor ? `🪜 ${loc.floor}` : "",
      loc.rooms ? `🚪 Room ${loc.rooms}` : ""
    ]
      .filter(Boolean)
      .join(" · ");

    const verifyHtml =
      loc.needs_verification && loc.verify_note
        ? `<div class="cb-verify-note">📌 Note: ${loc.verify_note}</div>`
        : "";

    const html = `
      <span class="cb-loc-name">${emoji} ${loc.name}</span>
      <div class="cb-meta-pill">${metaParts}</div>
      <p style="margin:0 0 4px;">${loc.description || ""}</p>
      ${verifyHtml}
    `;
    const botDiv = addMsg(html, "bot", true);

    if (botDiv) {
      const place = placeForBuilding((loc.building || "") + " " + (loc.name || ""));
      if (place) {
        const navBtn = document.createElement("button");
        navBtn.type = "button";
        navBtn.className = "cb-nav-btn";
        navBtn.textContent = "🧭 Navigate to " + place;
        navBtn.addEventListener("click", () => openMap(place));
        botDiv.appendChild(navBtn);
      }
    }
  }

  window.CampusMap = { open: openMap, close: closeMap };
  initChat();
})();
