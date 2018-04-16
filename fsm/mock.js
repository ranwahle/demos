/* jshint -W109, -W098 */

var mockVisitData = {
  "status": "OK",
  "data": {
    "_id": "573c1346b0a6190001000225",
    "status": {
      "timestamp": 1463555065,
      "mhi": 4.5,
      "level": 1,
      "status": 4.5
    },
    "repairs": [
      {
        "_id": "573c135e3c301601000002dd",
        "created_at": 1463554886636,
        "repair": "r1",
        "summary": "Bznz",
        "imageUrl": "/images/1463554887.png",
        "text": "Aligned Shafts",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "component": {
          "id": "573c12f3b0a6190001000223",
          "type": "chiller"
        },
        "machine": {
          "id": "573c12f3b0a6190001000223",
          "type": "chiller",
          "name": "C-7272",
          "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png"
        },
        "price": {
          "value": 2888,
          "currency": "USD"
        }
      },
      {
        "_id": "573c1377299b1e01000002fb",
        "created_at": 1463554932702,
        "repair": "other",
        "summary": "did some changes",
        "imageUrl": "/images/1463554933.png",
        "text": "did some changes",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "component": {
          "id": "573c12f3b0a6190001000222",
          "type": "compressor"
        },
        "machine": {
          "id": "573c12f3b0a6190001000223",
          "type": "chiller",
          "name": "C-7272",
          "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png"
        },
        "price": {
          "value": 37979,
          "currency": "USD"
        }
      }
    ],
    "diagnoses": [
      {
        "_id": "573c13903c301601000002de",
        "created_at": 1463554956919,
        "diagnosis": "d2",
        "summary": "Bxnzn",
        "imageUrl": "/images/1463554957.png",
        "text": "Oil leak",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "component": {
          "id": "573c12f3b0a6190001000223",
          "type": "chiller"
        },
        "machine": {
          "id": "573c12f3b0a6190001000223",
          "type": "chiller",
          "name": "C-7272",
          "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png"
        }
      }
    ],
    "sessions": [
      {
        "_id": "573c1390b0a6190001000226",
        "created_at": 1463554960000,
        "summary": "",
        "status": "approved",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "machine": {
          "id": "573c12f3b0a6190001000223",
          "name": "C-7272",
          "type": "chiller",
          "tags": {
            "room": "1",
            "floor": "1"
          }
        },
        "updated_at": 1463556163992,
        "status_updated_at": 1463554984677,
        "approved": true,
        "mhi": 4,
        "level": 1,
        "result": {
          "isUnexposed": false,
          "mhi": 4,
          "classifierId": "57207ac2e923010001603170",
          "created_at": "2016-05-18T07:22:43.992Z",
          "changed": true,
          "userId": "56f65c7e4bd680000842a9e5",
          "components": [
            {
              "_id": "573c12f3b0a6190001000223",
              "type": "chiller"
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "level": 2,
                      "plane": 0,
                      "invalid": false,
                      "mhi": 6.081226348876953
                    }
                  ]
                },
                {
                  "points": []
                }
              ],
              "_id": "573c12f3b0a6190001000220",
              "type": "motor",
              "failure_modes": [
                {
                  "confidence": 1,
                  "severity": 0.3479999899864197,
                  "probability": 1,
                  "level": 1,
                  "maintenancePractices": [
                    "Check all motor connections for a tight fit.",
                    "Check power quality, phase angle, resistance etc.",
                    "Visually check the motor for broken or corroded connectors."
                  ],
                  "possibleCauses": [
                    "Broken/cracked rotor bars or shorting rings.",
                    "Bad high resistance joints between rotor bars and shorting rings.",
                    "Shorted rotor laminations.",
                    "Soft foot.",
                    "Loose/open rotor bars not making good contact.",
                    "Poor power quality.",
                    "qwedads",
                    "kj"
                  ],
                  "visibility": 1,
                  "key": "electricalFaults",
                  "problem": "Electrical faults",
                  "description": "Motor electrical faults."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": []
                }
              ],
              "_id": "573c12f3b0a6190001000222",
              "type": "compressor"
            }
          ],
          "overview": {
            "text": "Monitor the machine more frequently.",
            "key": "default"
          },
          "level": 1,
          "type": "customer_analyst"
        }
      },
      {
        "_id": "573c13f9b0a6190001000227",
        "created_at": 1463555065000,
        "summary": "",
        "status": "approved",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "machine": {
          "id": "57151a37a652bb0001000136",
          "name": "Cool pump",
          "type": "pump",
          "tags": {
            "room": "1",
            "floor": "1"
          }
        },
        "updated_at": 1463555973591,
        "status_updated_at": 1463555162874,
        "approved": true,
        "mhi": 5,
        "level": 2,
        "result": {
          "isUnexposed": false,
          "mhi": 5,
          "classifierId": "57207ac2e92301000160316f",
          "created_at": "2016-05-18T07:19:33.591Z",
          "changed": true,
          "userId": "56f65c7e4bd680000842a9e5",
          "components": [
            {
              "_id": "57151a37a652bb0001000136",
              "type": "pump"
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "level": 0,
                      "plane": 0,
                      "invalid": false,
                      "mhi": 2.325822353363037
                    }
                  ]
                },
                {
                  "points": [
                    {
                      "level": 1,
                      "plane": 1,
                      "invalid": false,
                      "mhi": 4.026253700256348
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.3333333432674408,
                      "severity": 0.5,
                      "probability": 1,
                      "level": 2,
                      "maintenancePractices": [
                        "Check bearings lubrication and relubricate if required.",
                        "Replace the motor's bearings in the next quarter."
                      ],
                      "possibleCauses": [
                        "Aging/beyond useful life.",
                        "Lack of lubrication.",
                        "Over lubrication.",
                        "Wrong or incompatible lubricants used.",
                        "Manufacturing defect.",
                        "Poor installation.",
                        "Overload.",
                        "Secondary damage from mechanical failure."
                      ],
                      "visibility": 1,
                      "key": "bearingWear",
                      "missingPoints": [
                        {
                          "bearingnumber": 1,
                          "plane": "V"
                        },
                        {
                          "bearingnumber": 1,
                          "plane": "A"
                        }
                      ],
                      "problem": "Bearing wear",
                      "description": "Bearing wear detected near motor driving end (bearing 2)."
                    }
                  ]
                }
              ],
              "_id": "57151a37a652bb0001000133",
              "type": "motor",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 1A, 1H, 2V, 2A have not been recorded."
                },
                {
                  "confidence": 0,
                  "severity": 0.6000000238418579,
                  "probability": 0,
                  "level": 2,
                  "maintenancePractices": [
                    "Check all motor connections for a tight fit.",
                    "Check soft foot.",
                    "Check power quality, phase angle, resistance etc.",
                    "Visually check the motor for broken or corroded connectors.",
                    "If nothing is found, send the motor for repair in the next quarter."
                  ],
                  "possibleCauses": [
                    "Broken/cracked rotor bars or shorting rings.",
                    "Bad high resistance joints between rotor bars and shorting rings.",
                    "Shorted rotor laminations.",
                    "Soft foot.",
                    "Loose/open rotor bars not making good contact.",
                    "Poor power quality."
                  ],
                  "visibility": 0,
                  "key": "electricalFaults",
                  "problem": "Electrical faults",
                  "description": "Motor electrical faults."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                }
              ],
              "_id": "57151a37a652bb0001000135",
              "type": "driven_pump",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 6A, 6V, 4V, 5V, 3V, 6H, 3H, 5H, 4H have not been recorded."
                }
              ]
            }
          ],
          "overview": {
            "text": "Schedule the recommended activities in the next quarter and monitor the machine frequently until repaired.",
            "key": "default"
          },
          "level": 2,
          "type": "customer_analyst"
        }
      }
    ],
    "created_at": 1463554886000,
    "updated_at": 1463555194089,
    "expires_at": 1463605199000,
    "approved": true,
    "closed_at": 1463555194046,
    "open": false,
    "buildingId": "571519c7af35f60001000001",
    "user": {
      "id": "56f65c7e4bd680000842a9e5",
      "name": "Gavriel QA CA"
    },
    "building": {
      "id": "571519c7af35f60001000001",
      "name": "Palmer",
      "hierarchies": [
        {
          "text": "Floor",
          "key": "floor",
          "level": 0
        },
        {
          "text": "Room",
          "key": "room",
          "level": 1
        }
      ],
      "address": {
        "city": "Holsteinsborg",
        "country": "Greenland",
        "zipCode": "3911",
        "state": "Vestgrønland",
        "street": "Aqqusinersuaq",
        "formattedAddress": "Postboks 70, Aqqusinersuaq 86, Holsteinsborg 3911, Greenland",
        "streetNumber": "86"
      },
      "company": {
        "_id": "56f65c7e4bd680000842a9e4",
        "name": "QA",
        "logoUrl": "/images/logos/augury_logo.png",
        "hierarchies": [
          {
            "text": "Region",
            "type": "region",
            "pluralText": "Regions",
            "level": 0
          },
          {
            "level": 1,
            "text": "Branch",
            "containsBuildings": true,
            "pluralText": "Branches",
            "autoCreateTrainingBuilding": true,
            "type": "branch"
          },
          {
            "text": "Facility",
            "containsBuildings": true,
            "type": "facility",
            "pluralText": "Facilities",
            "level": 2
          }
        ]
      },
      "parentId": "56f7feb199cd29000100001d",
      "parentName": "Ecility",
      "parentType": "facility",
      "status": [
        {
          "timestamp": 1463529600,
          "mhi": 5.4021363,
          "status": 0,
          "level": 2
        },
        {
          "timestamp": 1461628800,
          "mhi": 6.8042727,
          "status": 0,
          "level": 2
        }
      ]
    },
    "company": {
      "name": "QA"
    },
    "timestamp": 1463554886000,
    "machines": [
      {
        "_id": "57151a37a652bb0001000136",
        "created_at": "2016-04-18T17:32:39.596Z",
        "name": "Cool pump",
        "settings": {
          "location": "America/Godthab"
        },
        "cfg_id": "pump-4",
        "imageUrl": "/images/defaults/machines/04_PUMP_HORIZONTAL_CENTERHUNG_COUPLING_DRIVEN_B.png",
        "continuous": false,
        "lastStatus": {
          "status": 5,
          "mhi": 5,
          "timestamp": "2016-05-18T07:04:25.000Z",
          "level": 2,
          "sessionId": "573c13f9b0a6190001000227",
          "user": {
            "_id": "56f65c7e4bd680000842a9e5"
          }
        },
        "containedIn": {
          "ancestorsIds": [
            "571519c7af35f60001000001",
            "56f7feb199cd29000100001d",
            "56f7fb8b99cd290001000010",
            "56f7f99299cd29000100000e",
            "56f65c7e4bd680000842a9e4",
            "55cafdf84bd680000ac2e44c"
          ],
          "company": {
            "_id": "56f65c7e4bd680000842a9e4",
            "name": "QA"
          },
          "_id": "571519c7af35f60001000001",
          "type": "building",
          "name": "Palmer"
        },
        "supported_cfg": true,
        "location": {
          "room": "1",
          "floor": "1"
        },
        "defaults": {
          "imageUrl": "/images/defaults/machines/04_PUMP_HORIZONTAL_CENTERHUNG_COUPLING_DRIVEN_B.png"
        },
        "components": [
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.2280000001192093,
                      0.11699999868869781
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.2280000001192093,
                        0.11699999868869781
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.15600000321865082,
                      0.335999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.15600000321865082,
                        0.335999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.2199999988079071,
                      0.16599999368190765
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.2199999988079071,
                        0.16599999368190765
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "non-driving end",
                "desc": "NDE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.3869999945163727,
                      0.1770000010728836
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.3869999945163727,
                        0.1770000010728836
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.296999990940094,
                      0.39899998903274536
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.296999990940094,
                        0.39899998903274536
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.3610000014305115,
                      0.4050000011920929
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.3610000014305115,
                        0.4050000011920929
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "driving end",
                "desc": "DE"
              }
            ],
            "specs": {
              "hz": "60",
              "make": "Emerson",
              "rpm": 1760,
              "hp": 30
            },
            "_id": "57151a37a652bb0001000133",
            "type": "motor",
            "order": 0
          },
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.8159999847412109,
                      0.47200000286102295
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.8159999847412109,
                        0.47200000286102295
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.7900000214576721,
                      0.5740000009536743
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.7900000214576721,
                        0.5740000009536743
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.8009999990463257,
                      0.578000009059906
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.8009999990463257,
                        0.578000009059906
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "non-driven end",
                "desc": "NDE"
              }
            ],
            "specs": {
              "bearings": 4,
              "make": "Paco Pumps",
              "stages": 2
            },
            "_id": "57151a37a652bb0001000135",
            "type": "driven_pump",
            "order": 1
          }
        ],
        "type": "pump",
        "specs": {
          "drive_cfg": "Coupling Driven",
          "installation": "Flexible",
          "cfg": "Horizontal",
          "make": "Trane",
          "vfd": false,
          "gearbox_cfg": "None",
          "design": "Centerhung",
          "type": "Centrifugal",
          "model": "T54",
          "motor_type": "Electrical"
        },
        "tags": {
          "room": "1",
          "floor": "1"
        },
        "buildingId": "571519c7af35f60001000001",
        "statuses": [
          {
            "sessionId": "573c13f9b0a6190001000227",
            "timestamp": 1463555065,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 5,
            "status": 0,
            "level": 2,
            "machineId": "57151a37a652bb0001000136"
          },
          {
            "sessionId": "571f5d2ba74deb000100015f",
            "timestamp": 1461673259,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 6.8042727,
            "status": 0,
            "level": 2
          },
          {
            "sessionId": "571f5cc5a74deb000100015e",
            "timestamp": 1461673157,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 6.803557,
            "status": 0,
            "level": 2
          }
        ]
      },
      {
        "_id": "573c12f3b0a6190001000223",
        "created_at": "2016-05-18T06:58:48.000Z",
        "name": "C-7272",
        "settings": {
          "location": "America/Godthab"
        },
        "cfg_id": "chiller-10",
        "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png",
        "continuous": false,
        "lastStatus": {
          "status": 4,
          "mhi": 4,
          "timestamp": "2016-05-18T07:02:40.000Z",
          "level": 1,
          "sessionId": "573c1390b0a6190001000226",
          "user": {
            "_id": "56f65c7e4bd680000842a9e5"
          }
        },
        "containedIn": {
          "ancestorsIds": [
            "571519c7af35f60001000001",
            "56f7feb199cd29000100001d",
            "56f7fb8b99cd290001000010",
            "56f7f99299cd29000100000e",
            "56f65c7e4bd680000842a9e4",
            "55cafdf84bd680000ac2e44c"
          ],
          "company": {
            "_id": "56f65c7e4bd680000842a9e4",
            "name": "QA"
          },
          "_id": "571519c7af35f60001000001",
          "type": "building",
          "name": "Palmer"
        },
        "supported_cfg": true,
        "location": {
          "room": "1",
          "floor": "1"
        },
        "defaults": {
          "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png"
        },
        "components": [
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.6909999847412109,
                      0.38999998569488525
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.6909999847412109,
                        0.38999998569488525
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.6050000190734863,
                      0.675000011920929
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.6050000190734863,
                        0.675000011920929
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.6389999985694885,
                      0.4429999887943268
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.6389999985694885,
                        0.4429999887943268
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  }
                ],
                "desc": "NDE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5230000019073486,
                      0.34700000286102295
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5230000019073486,
                        0.34700000286102295
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.5070000290870667,
                      0.6069999933242798
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5070000290870667,
                        0.6069999933242798
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.4480000138282776,
                      0.5230000019073486
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.4480000138282776,
                        0.5230000019073486
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  }
                ],
                "desc": "DE"
              }
            ],
            "specs": {
              "hz": "50",
              "hp": 34,
              "rpm": 990
            },
            "_id": "573c12f3b0a6190001000220",
            "type": "motor",
            "order": 0
          },
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.2770000100135803,
                      0.5249999761581421
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.2770000100135803,
                        0.5249999761581421
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  },
                  {
                    "marker": [
                      0.3070000112056732,
                      0.6489999890327454
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.3070000112056732,
                        0.6489999890327454
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  },
                  {
                    "marker": [
                      0.28299999237060547,
                      0.6140000224113464
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.28299999237060547,
                        0.6140000224113464
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  }
                ],
                "desc": "DE"
              }
            ],
            "specs": {
              "bearings": 1
            },
            "_id": "573c12f3b0a6190001000222",
            "type": "compressor",
            "order": 1
          }
        ],
        "type": "chiller",
        "specs": {
          "drive_cfg": "Direct Driven",
          "installation": "Rigid",
          "cfg": "Horizontal",
          "vfd": false,
          "gearbox_cfg": "None",
          "design": "Centerhung",
          "type": "Recip",
          "motor_type": "Electrical"
        },
        "tags": {
          "room": "1",
          "floor": "1"
        },
        "buildingId": "571519c7af35f60001000001",
        "statuses": [
          {
            "sessionId": "573c1390b0a6190001000226",
            "timestamp": 1463554960,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 4,
            "status": 0,
            "level": 1,
            "machineId": "573c12f3b0a6190001000223"
          }
        ]
      }
    ],
    "machinesStatus": [
      {
        "sessionId": "573c1390b0a6190001000226",
        "timestamp": 1463554960,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 4,
        "status": 0,
        "level": 1,
        "machineId": "573c12f3b0a6190001000223"
      },
      {
        "sessionId": "573c13f9b0a6190001000227",
        "timestamp": 1463555065,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 5,
        "status": 0,
        "level": 2,
        "machineId": "57151a37a652bb0001000136"
      },
      {
        "sessionId": "573c1390b0a6190001000226",
        "timestamp": 1463554960,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 4,
        "status": 0,
        "level": 1,
        "machineId": "573c12f3b0a6190001000223"
      }
    ]
  }
};

var mockNextVisitData = {
  "status": "OK",
  "data": {
    "_id": "573c164eb0a6190001000229",
    "status": {
      "timestamp": 1463555662,
      "mhi": 10,
      "level": 3,
      "status": 10
    },
    "sessions": [
      {
        "_id": "573c164ef4e45b0001000211",
        "created_at": 1463555662000,
        "summary": "",
        "status": "approved",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "machine": {
          "id": "573c1637f4e45b000100020f",
          "name": "C-7273",
          "type": "chiller",
          "tags": {
            "room": "1",
            "floor": "1"
          },
          "location": {
            "room": "1",
            "floor": "1"
          }
        },
        "updated_at": 1463555787061,
        "status_updated_at": 1463555787061,
        "approved": true,
        "mhi": 10,
        "level": 3,
        "result": {
          "isUnexposed": false,
          "mhi": 10,
          "overview": {
            "text": "Repair the machine as soon as possible and run with caution until repaired.",
            "key": "default"
          },
          "created_at": "2016-05-18T07:16:27.061Z",
          "changed": false,
          "classifierId": "57207ac2e923010001603170",
          "components": [
            {
              "_id": "573c1637f4e45b000100020f",
              "type": "chiller"
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "mhi": 8.395441055297852,
                      "plane": 0,
                      "invalid": false,
                      "level": 3
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.3333333432674408,
                      "severity": 0.8395441174507141,
                      "probability": 1,
                      "level": 3,
                      "maintenancePractices": [
                        "Repair the motor as soon as possible."
                      ],
                      "possibleCauses": [
                        "Mechanical fault."
                      ],
                      "visibility": 1,
                      "key": "ISO_level",
                      "missingPoints": [
                        {
                          "bearingnumber": 0,
                          "plane": "H"
                        },
                        {
                          "bearingnumber": 0,
                          "plane": "A"
                        }
                      ],
                      "problem": "Very high vibrations",
                      "description": "Very high vibration levels near motor non-driving end (bearing 1)."
                    }
                  ]
                },
                {
                  "points": [
                    {
                      "mhi": 8.395421028137207,
                      "plane": 2,
                      "invalid": false,
                      "level": 3
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.3333333432674408,
                      "severity": 0.8395420908927917,
                      "probability": 1,
                      "level": 3,
                      "maintenancePractices": [
                        "Repair the motor as soon as possible."
                      ],
                      "possibleCauses": [
                        "Mechanical fault."
                      ],
                      "visibility": 1,
                      "key": "ISO_level",
                      "missingPoints": [
                        {
                          "bearingnumber": 1,
                          "plane": "V"
                        },
                        {
                          "bearingnumber": 1,
                          "plane": "H"
                        }
                      ],
                      "problem": "Very high vibrations",
                      "description": "Very high vibration levels near motor driving end (bearing 2)."
                    }
                  ]
                }
              ],
              "_id": "573c1637f4e45b000100020c",
              "type": "motor",
              "failure_modes": [
                {
                  "confidence": 1,
                  "severity": 0.5795441269874573,
                  "probability": 1,
                  "level": 2,
                  "maintenancePractices": [
                    "Check all motor connections for a tight fit.",
                    "Check soft foot.",
                    "Check power quality, phase angle, resistance etc.",
                    "Visually check the motor for broken or corroded connectors.",
                    "If nothing is found, send the motor for repair in the next quarter."
                  ],
                  "possibleCauses": [
                    "Broken/cracked rotor bars or shorting rings.",
                    "Bad high resistance joints between rotor bars and shorting rings.",
                    "Shorted rotor laminations.",
                    "Soft foot.",
                    "Loose/open rotor bars not making good contact.",
                    "Poor power quality."
                  ],
                  "visibility": 1,
                  "key": "electricalFaults",
                  "problem": "Electrical faults",
                  "description": "Motor electrical faults."
                },
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 1A, 1H, 2V, 2H have not been recorded."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "mhi": 10,
                      "plane": 0,
                      "invalid": false,
                      "level": 3
                    },
                    {
                      "mhi": 10,
                      "plane": 1,
                      "invalid": false,
                      "level": 3
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.6666666865348816,
                      "severity": 1,
                      "probability": 1,
                      "level": 3,
                      "maintenancePractices": [
                        "Repair the compressor as soon as possible."
                      ],
                      "possibleCauses": [
                        "Mechanical fault."
                      ],
                      "visibility": 1,
                      "key": "ISO_level",
                      "missingPoints": [
                        {
                          "bearingnumber": 0,
                          "plane": "A"
                        }
                      ],
                      "problem": "Very high vibrations",
                      "description": "Very high vibration levels near compressor driven end (bearing 3)."
                    }
                  ]
                }
              ],
              "_id": "573c1637f4e45b000100020e",
              "type": "compressor",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because point 3A has not been recorded."
                }
              ]
            }
          ],
          "level": 3,
          "type": "system"
        }
      }
    ],
    "created_at": 1463555662000,
    "updated_at": 1463557552576,
    "expires_at": 1463605199000,
    "approved": true,
    "closed_at": 1463557552515,
    "open": false,
    "buildingId": "571519c7af35f60001000001",
    "user": {
      "id": "56f65c7e4bd680000842a9e5",
      "name": "Gavriel QA CA"
    },
    "building": {
      "id": "571519c7af35f60001000001",
      "name": "Palmer",
      "hierarchies": [
        {
          "text": "Floor",
          "key": "floor",
          "level": 0
        },
        {
          "text": "Room",
          "key": "room",
          "level": 1
        }
      ],
      "address": {
        "city": "Holsteinsborg",
        "country": "Greenland",
        "zipCode": "3911",
        "state": "Vestgrønland",
        "street": "Aqqusinersuaq",
        "formattedAddress": "Postboks 70, Aqqusinersuaq 86, Holsteinsborg 3911, Greenland",
        "streetNumber": "86"
      },
      "company": {
        "_id": "56f65c7e4bd680000842a9e4",
        "name": "QA",
        "logoUrl": "/images/logos/augury_logo.png",
        "hierarchies": [
          {
            "text": "Region",
            "type": "region",
            "pluralText": "Regions",
            "level": 0
          },
          {
            "level": 1,
            "text": "Branch",
            "containsBuildings": true,
            "pluralText": "Branches",
            "autoCreateTrainingBuilding": true,
            "type": "branch"
          },
          {
            "text": "Facility",
            "containsBuildings": true,
            "type": "facility",
            "pluralText": "Facilities",
            "level": 2
          }
        ]
      },
      "parentId": "56f7feb199cd29000100001d",
      "parentName": "Ecility",
      "parentType": "facility",
      "status": [
        {
          "timestamp": 1463529600,
          "mhi": 5.4021363,
          "status": 0,
          "level": 2
        },
        {
          "timestamp": 1461628800,
          "mhi": 6.8042727,
          "status": 0,
          "level": 2
        }
      ]
    },
    "company": {
      "name": "QA"
    },
    "timestamp": 1463555662000,
    "diagnoses": [],
    "repairs": [],
    "machines": [
      {
        "_id": "573c1637f4e45b000100020f",
        "created_at": "2016-05-18T07:13:59.492Z",
        "name": "C-7273",
        "settings": {
          "location": "America/Godthab"
        },
        "cfg_id": "chiller-10",
        "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png",
        "continuous": false,
        "lastStatus": {
          "status": 10,
          "mhi": 10,
          "timestamp": "2016-05-18T07:14:22.000Z",
          "level": 3,
          "sessionId": "573c164ef4e45b0001000211",
          "user": {
            "_id": "56f65c7e4bd680000842a9e5"
          }
        },
        "updated_at": "2016-05-18T07:14:12.909Z",
        "containedIn": {
          "ancestorsIds": [
            "571519c7af35f60001000001",
            "56f7feb199cd29000100001d",
            "56f7fb8b99cd290001000010",
            "56f7f99299cd29000100000e",
            "56f65c7e4bd680000842a9e4",
            "55cafdf84bd680000ac2e44c"
          ],
          "company": {
            "_id": "56f65c7e4bd680000842a9e4",
            "name": "QA"
          },
          "_id": "571519c7af35f60001000001",
          "type": "building",
          "name": "Palmer"
        },
        "supported_cfg": true,
        "location": {
          "room": "1",
          "floor": "1"
        },
        "defaults": {
          "imageUrl": "/images/defaults/machines/22_DIRECT_DRIVEN_RECIPROCATING_CHILLER_BLUE_01.png"
        },
        "components": [
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.6909999847412109,
                      0.38999998569488525
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.6909999847412109,
                        0.38999998569488525
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.6050000190734863,
                      0.675000011920929
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.6050000190734863,
                        0.675000011920929
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.6389999985694885,
                      0.4429999887943268
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.6389999985694885,
                        0.4429999887943268
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  }
                ],
                "extended_desc": "non-driving end",
                "desc": "NDE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5230000019073486,
                      0.34700000286102295
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5230000019073486,
                        0.34700000286102295
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.5070000290870667,
                      0.6069999933242798
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5070000290870667,
                        0.6069999933242798
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  },
                  {
                    "marker": [
                      0.4480000138282776,
                      0.5230000019073486
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.4480000138282776,
                        0.5230000019073486
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_1.png"
                    }
                  }
                ],
                "extended_desc": "driving end",
                "desc": "DE"
              }
            ],
            "specs": {
              "hz": "50",
              "hp": 34,
              "rpm": 990
            },
            "_id": "573c1637f4e45b000100020c",
            "type": "motor",
            "order": 0
          },
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.2770000100135803,
                      0.5249999761581421
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.2770000100135803,
                        0.5249999761581421
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  },
                  {
                    "marker": [
                      0.3070000112056732,
                      0.6489999890327454
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.3070000112056732,
                        0.6489999890327454
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  },
                  {
                    "marker": [
                      0.28299999237060547,
                      0.6140000224113464
                    ],
                    "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.28299999237060547,
                        0.6140000224113464
                      ],
                      "imageUrl": "/images/defaults/machinepoints/05_reciprocating_chiller_direct_driven_2.png"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              }
            ],
            "specs": {
              "bearings": 1
            },
            "_id": "573c1637f4e45b000100020e",
            "type": "compressor",
            "order": 1
          }
        ],
        "type": "chiller",
        "specs": {
          "drive_cfg": "Direct Driven",
          "installation": "Rigid",
          "cfg": "Horizontal",
          "vfd": false,
          "gearbox_cfg": "None",
          "design": "Centerhung",
          "type": "Recip",
          "motor_type": "Electrical"
        },
        "tags": {
          "room": "1",
          "floor": "1"
        },
        "buildingId": "571519c7af35f60001000001",
        "statuses": [
          {
            "sessionId": "573c164ef4e45b0001000211",
            "timestamp": 1463555662,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 10,
            "status": 0,
            "level": 3,
            "machineId": "573c1637f4e45b000100020f"
          }
        ]
      }
    ],
    "machinesStatus": [
      {
        "sessionId": "573c164ef4e45b0001000211",
        "timestamp": 1463555662,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 10,
        "status": 0,
        "level": 3,
        "machineId": "573c1637f4e45b000100020f"
      }
    ]
  }
};

var mockPreviousVisitData = {
  "status": "OK",
  "data": {
    "_id": "571f5cc54eacff000100014a",
    "status": {
      "timestamp": 1461673259,
      "mhi": 6.8042727,
      "level": 2,
      "status": 6.8042727
    },
    "sessions": [
      {
        "_id": "571f5cc5a74deb000100015e",
        "created_at": 1461673157000,
        "summary": "",
        "status": "approved",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "machine": {
          "id": "57151a37a652bb0001000136",
          "name": "Cool pump",
          "type": "pump",
          "tags": {
            "room": "1",
            "floor": "1"
          },
          "location": {
            "room": "1",
            "floor": "1"
          }
        },
        "updated_at": 1461673226636,
        "status_updated_at": 1461673226636,
        "approved": true,
        "mhi": 6.8035569190979,
        "level": 2,
        "result": {
          "isUnexposed": false,
          "mhi": 6.8035569190979,
          "overview": {
            "text": "Schedule the recommended activities in the next quarter and monitor the machine frequently until repaired.",
            "key": "default"
          },
          "created_at": "2016-04-26T12:20:26.636Z",
          "changed": false,
          "classifierId": "57133659e92301000160316b",
          "components": [
            {
              "_id": "57151a37a652bb0001000136",
              "type": "pump",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 1,
                  "severity": -0.10000000149011612,
                  "probability": 1,
                  "level": -1,
                  "visibility": 1,
                  "key": "systemError_sensorSaturated",
                  "problem": "Sensor saturated",
                  "description": "The data recorded at one or several points is saturated. You may want to try and record again."
                },
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "invalidData",
                  "problem": "Invalid data",
                  "description": "There is a problem with the data from point 1H. Possible reasons may include: misplaced sensor, broken sensor, or broken cable. Please repeat the recording and if the problem persists please contact support."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "mhi": 6.8035569190979,
                      "plane": 0,
                      "invalid": false,
                      "level": 2
                    },
                    {
                      "mhi": 8.178659439086914,
                      "plane": 1,
                      "invalid": true,
                      "level": 3
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.3333333432674408,
                      "severity": 0.6803556680679321,
                      "probability": 1,
                      "level": 2,
                      "maintenancePractices": [
                        "Plan a scheduled repair according to recommendation, during the next possible machine downtime."
                      ],
                      "possibleCauses": [
                        "Mechanical fault."
                      ],
                      "visibility": 1,
                      "key": "ISO_level",
                      "missingPoints": [
                        {
                          "bearingnumber": 0,
                          "plane": "H"
                        },
                        {
                          "bearingnumber": 0,
                          "plane": "A"
                        }
                      ],
                      "problem": "High vibrations",
                      "description": "High vibration levels near motor non-driving end (bearing 1)."
                    }
                  ]
                },
                {
                  "points": []
                }
              ],
              "_id": "57151a37a652bb0001000133",
              "type": "motor",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 1A, 2V, 2H, 2A have not been recorded."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                }
              ],
              "_id": "57151a37a652bb0001000135",
              "type": "driven_pump",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 6A, 6V, 4V, 5V, 3V, 6H, 3H, 5H, 4H have not been recorded."
                }
              ]
            }
          ],
          "level": 2,
          "type": "system"
        }
      },
      {
        "_id": "571f5d2ba74deb000100015f",
        "created_at": 1461673259000,
        "summary": "",
        "status": "approved",
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "machine": {
          "id": "57151a37a652bb0001000136",
          "name": "Cool pump",
          "type": "pump",
          "tags": {
            "room": "1",
            "floor": "1"
          },
          "location": {
            "room": "1",
            "floor": "1"
          }
        },
        "updated_at": 1461673285839,
        "status_updated_at": 1461673285839,
        "approved": true,
        "mhi": 6.804272651672363,
        "level": 2,
        "result": {
          "isUnexposed": false,
          "mhi": 6.804272651672363,
          "overview": {
            "text": "Schedule the recommended activities in the next quarter and monitor the machine frequently until repaired.",
            "key": "default"
          },
          "created_at": "2016-04-26T12:21:25.839Z",
          "changed": false,
          "classifierId": "57133659e92301000160316b",
          "components": [
            {
              "_id": "57151a37a652bb0001000136",
              "type": "pump"
            },
            {
              "bearings": [
                {
                  "points": [
                    {
                      "mhi": 6.804272651672363,
                      "plane": 0,
                      "invalid": false,
                      "level": 2
                    }
                  ],
                  "failure_modes": [
                    {
                      "confidence": 0.3333333432674408,
                      "severity": 0.6804272532463074,
                      "probability": 1,
                      "level": 2,
                      "maintenancePractices": [
                        "Plan a scheduled repair according to recommendation, during the next possible machine downtime."
                      ],
                      "possibleCauses": [
                        "Mechanical fault."
                      ],
                      "visibility": 1,
                      "key": "ISO_level",
                      "missingPoints": [
                        {
                          "bearingnumber": 0,
                          "plane": "H"
                        },
                        {
                          "bearingnumber": 0,
                          "plane": "A"
                        }
                      ],
                      "problem": "High vibrations",
                      "description": "High vibration levels near motor non-driving end (bearing 1)."
                    }
                  ]
                },
                {
                  "points": []
                }
              ],
              "_id": "57151a37a652bb0001000133",
              "type": "motor",
              "failure_modes": [
                {
                  "confidence": 1,
                  "severity": 0.42042726278305054,
                  "probability": 1,
                  "level": 1,
                  "maintenancePractices": [
                    "Check all motor connections for a tight fit.",
                    "Check power quality, phase angle, resistance etc.",
                    "Visually check the motor for broken or corroded connectors."
                  ],
                  "possibleCauses": [
                    "Broken/cracked rotor bars or shorting rings.",
                    "Bad high resistance joints between rotor bars and shorting rings.",
                    "Shorted rotor laminations.",
                    "Soft foot.",
                    "Loose/open rotor bars not making good contact.",
                    "Poor power quality."
                  ],
                  "visibility": 1,
                  "key": "electricalFaults",
                  "problem": "Electrical faults",
                  "description": "Motor electrical faults."
                },
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 1A, 1H, 2V, 2H, 2A have not been recorded."
                }
              ]
            },
            {
              "bearings": [
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                },
                {
                  "points": []
                }
              ],
              "_id": "57151a37a652bb0001000135",
              "type": "driven_pump",
              "failure_modes": [
                {
                  "info": true,
                  "confidence": 0,
                  "severity": -0.10000000149011612,
                  "probability": 0,
                  "level": -1,
                  "visibility": 0,
                  "key": "missingRecordings",
                  "problem": "Missing Recordings",
                  "description": "The diagnosis might not have identified all faults because points 6A, 6V, 4V, 5V, 3V, 6H, 3H, 5H, 4H have not been recorded."
                }
              ]
            }
          ],
          "level": 2,
          "type": "system"
        }
      }
    ],
    "created_at": 1461673157000,
    "updated_at": 1461745373341,
    "expires_at": 1461704399000,
    "approved": true,
    "closed_at": 1461745373292,
    "open": false,
    "buildingId": "571519c7af35f60001000001",
    "user": {
      "id": "56f65c7e4bd680000842a9e5",
      "name": "Gavriel QA CA"
    },
    "building": {
      "id": "571519c7af35f60001000001",
      "name": "Palmer",
      "hierarchies": [
        {
          "text": "Floor",
          "key": "floor",
          "level": 0
        },
        {
          "text": "Room",
          "key": "room",
          "level": 1
        }
      ],
      "address": {
        "city": "Holsteinsborg",
        "country": "Greenland",
        "zipCode": "3911",
        "state": "Vestgrønland",
        "street": "Aqqusinersuaq",
        "formattedAddress": "Postboks 70, Aqqusinersuaq 86, Holsteinsborg 3911, Greenland",
        "streetNumber": "86"
      },
      "company": {
        "_id": "56f65c7e4bd680000842a9e4",
        "name": "QA",
        "logoUrl": "/images/logos/augury_logo.png",
        "hierarchies": [
          {
            "text": "Region",
            "type": "region",
            "pluralText": "Regions",
            "level": 0
          },
          {
            "level": 1,
            "text": "Branch",
            "containsBuildings": true,
            "pluralText": "Branches",
            "autoCreateTrainingBuilding": true,
            "type": "branch"
          },
          {
            "text": "Facility",
            "containsBuildings": true,
            "type": "facility",
            "pluralText": "Facilities",
            "level": 2
          }
        ]
      },
      "parentId": "56f7feb199cd29000100001d",
      "parentName": "Ecility",
      "parentType": "facility",
      "status": [
        {
          "timestamp": 1463529600,
          "mhi": 5.4021363,
          "status": 0,
          "level": 2
        },
        {
          "timestamp": 1461628800,
          "mhi": 6.8042727,
          "status": 0,
          "level": 2
        }
      ]
    },
    "company": {
      "name": "QA"
    },
    "timestamp": 1461673157000,
    "diagnoses": [],
    "repairs": [],
    "machines": [
      {
        "_id": "57151a37a652bb0001000136",
        "created_at": "2016-04-18T17:32:39.596Z",
        "name": "Cool pump",
        "settings": {
          "location": "America/Godthab"
        },
        "cfg_id": "pump-4",
        "imageUrl": "/images/defaults/machines/04_PUMP_HORIZONTAL_CENTERHUNG_COUPLING_DRIVEN_B.png",
        "continuous": false,
        "lastStatus": {
          "status": 5,
          "mhi": 5,
          "timestamp": "2016-05-18T07:04:25.000Z",
          "level": 2,
          "sessionId": "573c13f9b0a6190001000227",
          "user": {
            "_id": "56f65c7e4bd680000842a9e5"
          }
        },
        "containedIn": {
          "ancestorsIds": [
            "571519c7af35f60001000001",
            "56f7feb199cd29000100001d",
            "56f7fb8b99cd290001000010",
            "56f7f99299cd29000100000e",
            "56f65c7e4bd680000842a9e4",
            "55cafdf84bd680000ac2e44c"
          ],
          "company": {
            "_id": "56f65c7e4bd680000842a9e4",
            "name": "QA"
          },
          "_id": "571519c7af35f60001000001",
          "type": "building",
          "name": "Palmer"
        },
        "supported_cfg": true,
        "location": {
          "room": "1",
          "floor": "1"
        },
        "defaults": {
          "imageUrl": "/images/defaults/machines/04_PUMP_HORIZONTAL_CENTERHUNG_COUPLING_DRIVEN_B.png"
        },
        "components": [
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.2280000001192093,
                      0.11699999868869781
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.2280000001192093,
                        0.11699999868869781
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.15600000321865082,
                      0.335999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.15600000321865082,
                        0.335999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.2199999988079071,
                      0.16599999368190765
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.2199999988079071,
                        0.16599999368190765
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "non-driving end",
                "desc": "NDE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.3869999945163727,
                      0.1770000010728836
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.3869999945163727,
                        0.1770000010728836
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.296999990940094,
                      0.39899998903274536
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.296999990940094,
                        0.39899998903274536
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.3610000014305115,
                      0.4050000011920929
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.3610000014305115,
                        0.4050000011920929
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "driving end",
                "desc": "DE"
              }
            ],
            "specs": {
              "hz": "60",
              "make": "Emerson",
              "rpm": 1760,
              "hp": 30
            },
            "_id": "57151a37a652bb0001000133",
            "type": "motor",
            "order": 0
          },
          {
            "dimensions": [
              {
                "name": "Vertical",
                "key": "V"
              },
              {
                "name": "Horizontal",
                "key": "H"
              },
              {
                "name": "Axial",
                "key": "A"
              }
            ],
            "bearings": [
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.5640000104904175,
                      0.37400001287460327
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.5640000104904175,
                        0.37400001287460327
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.5400000214576721,
                      0.460999995470047
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.5400000214576721,
                        0.460999995470047
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "disabled": true,
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.527999997138977,
                        0.4440000057220459
                      ],
                      "disabled": true,
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    },
                    "marker": [
                      0.527999997138977,
                      0.4440000057220459
                    ],
                    "disableReason": {
                      "text": "",
                      "key": "disable1"
                    }
                  }
                ],
                "extended_desc": "driven end",
                "desc": "DE"
              },
              {
                "points": [
                  {
                    "marker": [
                      0.8159999847412109,
                      0.47200000286102295
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 0,
                    "defaults": {
                      "marker": [
                        0.8159999847412109,
                        0.47200000286102295
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.7900000214576721,
                      0.5740000009536743
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 1,
                    "defaults": {
                      "marker": [
                        0.7900000214576721,
                        0.5740000009536743
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  },
                  {
                    "marker": [
                      0.8009999990463257,
                      0.578000009059906
                    ],
                    "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png",
                    "plane": 2,
                    "defaults": {
                      "marker": [
                        0.8009999990463257,
                        0.578000009059906
                      ],
                      "imageUrl": "/images/defaults/machinepoints/04_pump_horizontal_centerhung_coupling_driven.png"
                    }
                  }
                ],
                "extended_desc": "non-driven end",
                "desc": "NDE"
              }
            ],
            "specs": {
              "bearings": 4,
              "make": "Paco Pumps",
              "stages": 2
            },
            "_id": "57151a37a652bb0001000135",
            "type": "driven_pump",
            "order": 1
          }
        ],
        "type": "pump",
        "specs": {
          "drive_cfg": "Coupling Driven",
          "installation": "Flexible",
          "cfg": "Horizontal",
          "make": "Trane",
          "vfd": false,
          "gearbox_cfg": "None",
          "design": "Centerhung",
          "type": "Centrifugal",
          "model": "T54",
          "motor_type": "Electrical"
        },
        "tags": {
          "room": "1",
          "floor": "1"
        },
        "buildingId": "571519c7af35f60001000001",
        "statuses": [
          {
            "sessionId": "573c13f9b0a6190001000227",
            "timestamp": 1463555065,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 5,
            "status": 0,
            "level": 2,
            "machineId": "57151a37a652bb0001000136"
          },
          {
            "sessionId": "571f5d2ba74deb000100015f",
            "timestamp": 1461673259,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 6.8042727,
            "status": 0,
            "level": 2
          },
          {
            "sessionId": "571f5cc5a74deb000100015e",
            "timestamp": 1461673157,
            "user": {
              "id": "56f65c7e4bd680000842a9e5",
              "name": "Gavriel QA CA"
            },
            "mhi": 6.803557,
            "status": 0,
            "level": 2
          }
        ]
      }
    ],
    "machinesStatus": [
      {
        "sessionId": "573c13f9b0a6190001000227",
        "timestamp": 1463555065,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 5,
        "status": 0,
        "level": 2,
        "machineId": "57151a37a652bb0001000136"
      },
      {
        "sessionId": "573c13f9b0a6190001000227",
        "timestamp": 1463555065,
        "user": {
          "id": "56f65c7e4bd680000842a9e5",
          "name": "Gavriel QA CA"
        },
        "mhi": 5,
        "status": 0,
        "level": 2,
        "machineId": "57151a37a652bb0001000136"
      }
    ]
  }
};

var mockBuildingVisits = {
  "status": "OK",
  "data": [
    {
      "_id": "5725b37003253b00010000cc",
      "status": {
        "timestamp": 1462105635,
        "mhi": 6.234323,
        "level": 2,
        "status": 6.234323
      },
      "sessions": [
        "5725b37103253b00010000cd",
        "5725b4a1e00b3e0001000165",
        "5725b57803253b00010000dd",
        "5725b7d2e00b3e0001000176",
        "5725b89c03253b00010000e8",
        "5725b99803253b00010000ea",
        "5725ba15e00b3e000100017a",
        "5725bb8de00b3e000100017c",
        "5725bca703253b00010000eb",
        "5725bd43e00b3e000100017d",
        "5725c07703253b00010000f0",
        "5725c378e00b3e000100017f",
        "5725c494e00b3e0001000182",
        "5725c53be00b3e0001000187",
        "5725c63c03253b0001000101",
        "5725c73de00b3e000100018d",
        "5725c7f503253b0001000105",
        "5725ca1903253b0001000106",
        "5725cbc303253b0001000107",
        "5725cd0ae00b3e0001000191",
        "5725cf1103253b0001000109",
        "5725cfdae00b3e0001000198",
        "5725d03403253b000100010a",
        "5725df4403253b000100010c",
        "5725e269e00b3e000100019a",
        "5725e3dde00b3e000100019c",
        "5725e46d03253b000100010e",
        "5725e6a9e00b3e000100019e",
        "5725eb82e00b3e00010001a2",
        "5725ef18e00b3e00010001a3",
        "5725f04b03253b0001000111",
        "5725f08503253b0001000112",
        "5725f13fe00b3e00010001a6",
        "5725f27b03253b0001000114",
        "5725f623d028bf0001000001"
      ],
      "created_at": "2016-05-01T07:42:39.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-05-01T21:00:16.376Z",
      "expires_at": "2016-05-01T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-05-01T21:00:16.310Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Avi Prilutsky"
      },
      "timestamp": 1462088560000
    },
    {
      "_id": "5725e15b03253b000100010d",
      "userId": "541133a3df00e11000000287",
      "buildingId": "5725a378e00b3e00010000ca",
      "open": false,
      "expires_at": "2016-05-01T20:59:59.000Z",
      "created_at": "2016-05-01T10:58:34.000Z",
      "diagnoses": [
        "5725e15c0749030100000079",
        "5725e4590749030100000087",
        "5725e4690749030100000088",
        "5725f36107490301000000aa"
      ],
      "updated_at": "2016-05-01T13:23:27.353Z",
      "closed_at": "2016-05-01T13:23:27.291Z",
      "approved": true,
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Yosi Tuchner"
      },
      "timestamp": 1462100315000,
      "status": null
    },
    {
      "_id": "5757b75bcc0c2400010000a9",
      "status": {
        "timestamp": 1465382965,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "repairs": [
        "5757fb65e0af90010000070e"
      ],
      "diagnoses": [
        "5757b91073f7cc01000008a2",
        "5757bc8873f7cc01000008ac",
        "5757c55be0af900100000670",
        "5757d09e73f7cc01000008db",
        "5757dce6e0af9001000006a1",
        "5757f51ce0af9001000006ea"
      ],
      "sessions": [
        "5757b75bcc0c2400010000aa",
        "5757b851cc0c2400010000ab",
        "5757bae3cc0c2400010000b0",
        "5757bc05ab565e0001000155",
        "5757bd21cc0c2400010000b2",
        "5757be5bcc0c2400010000b3",
        "5757c08ecc0c2400010000b7",
        "5757c127cc0c2400010000b8",
        "5757c1a9ab565e000100015d",
        "5757c2b8ab565e000100015e",
        "5757c3d1ab565e0001000166",
        "5757c4c9ab565e000100016a",
        "5757cf8cab565e0001000187",
        "5757d136ab565e0001000188",
        "5757d392ab565e0001000189",
        "5757d43fab565e000100018a",
        "5757d4f1cc0c2400010000c1",
        "5757d57bab565e000100018b",
        "5757d67dab565e000100018c",
        "5757d977ab565e000100018d",
        "5757dc14cc0c2400010000c2",
        "5757f128ab565e0001000191",
        "5757f1d1ab565e0001000192",
        "5757f2d2ab565e0001000193",
        "5757f386cc0c2400010000ce",
        "5757f47eab565e0001000195",
        "5757f512cc0c2400010000d1",
        "5757f5fccc0c2400010000d2",
        "5757f6f6cc0c2400010000d4",
        "5757f772ab565e0001000197",
        "5757f835ab565e0001000198"
      ],
      "created_at": "2016-06-08T06:12:42.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-06-08T13:34:02.030Z",
      "expires_at": "2016-06-08T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-06-08T13:34:01.944Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Avi Prilutsky"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1465366363000
    },
    {
      "_id": "5781e8e4ddaa8000010002d4",
      "status": {
        "timestamp": 1468143689,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "repairs": [
        "57821596192cd60100000466"
      ],
      "diagnoses": [
        "5781edec376d600100000377",
        "5781ee1b192cd6010000041b",
        "5781f5d3376d600100000389",
        "57820cf8376d6001000003b9"
      ],
      "sessions": [
        "5781e8e548cf02000100007b",
        "5781ea0eddaa8000010002d5",
        "5781eaf848cf02000100007c",
        "5781ee2048cf02000100007d",
        "5781efccddaa8000010002d6",
        "5781f14648cf02000100007e",
        "5781f3f548cf02000100007f",
        "5781f50848cf020001000080",
        "5781f682ddaa8000010002d7",
        "5781fac248cf020001000082",
        "5781fb1948cf020001000083",
        "5781fba5ddaa8000010002d9",
        "5781fd5eddaa8000010002db",
        "5781fe82ddaa8000010002dc",
        "5781ff6548cf020001000084",
        "5782044d48cf020001000085",
        "578206ab48cf020001000086",
        "5782079addaa8000010002dd",
        "5782089addaa8000010002de",
        "57820a61ddaa8000010002df",
        "57820b98ddaa8000010002e0",
        "57821115ddaa8000010002e1",
        "578211b1ddaa8000010002e2",
        "578211f748cf020001000087",
        "5782126fddaa8000010002e3",
        "57821320ddaa8000010002e4",
        "578214a6ddaa8000010002e5",
        "578215a5ddaa8000010002e6",
        "5782171948cf020001000088",
        "578217b4ddaa8000010002e7",
        "5782184948cf020001000089"
      ],
      "created_at": "2016-07-10T06:19:15.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-07-10T17:36:09.975Z",
      "expires_at": "2016-07-10T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-07-10T10:25:50.967Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Avi Prilutsky"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1468131556000
    },
    {
      "_id": "57a8409f70ece60001000012",
      "status": {
        "timestamp": 1470655669,
        "mhi": 8.125743,
        "level": 3,
        "status": 8.125743
      },
      "repairs": [
        "57a86f873d9eaa0100000654",
        "57a8724c3d9eaa0100000664",
        "57a872e13d9eaa0100000669"
      ],
      "diagnoses": [
        "57a8602ff236d50100000575",
        "57a87115f236d501000005c3"
      ],
      "sessions": [
        "57a8409fa71d7b000100000b",
        "57a842e570ece60001000015",
        "57a8456d70ece60001000017",
        "57a847aa70ece6000100001b",
        "57a8494a70ece6000100001d",
        "57a84a9870ece6000100001f",
        "57a84b3570ece60001000020",
        "57a84c0870ece60001000021",
        "57a84c7c70ece60001000022",
        "57a84d4970ece60001000023",
        "57a84e1a70ece60001000024",
        "57a84f0ea71d7b0001000014",
        "57a84faaa71d7b0001000015",
        "57a8510970ece60001000025",
        "57a8512670ece60001000026",
        "57a85b2fa71d7b0001000019",
        "57a85b5e70ece60001000027",
        "57a85bf870ece60001000028",
        "57a85ca9a71d7b000100001a",
        "57a85daba71d7b000100001b",
        "57a85e8370ece60001000029",
        "57a85f1370ece6000100002a",
        "57a8601e70ece6000100002b",
        "57a8616ea71d7b000100001c",
        "57a861f070ece6000100002c",
        "57a862caa71d7b000100001d",
        "57a8633570ece6000100002d",
        "57a863ac70ece6000100002e",
        "57a8641fa71d7b000100001f",
        "57a864a2a71d7b0001000021",
        "57a865b070ece60001000032",
        "57a86967a71d7b0001000026",
        "57a86adba71d7b000100003e",
        "57a86b4370ece60001000040",
        "57a86bb3a71d7b000100003f",
        "57a86c1e70ece60001000041",
        "57a86cb570ece60001000042"
      ],
      "created_at": "2016-08-08T08:19:42.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-08-08T17:10:01.026Z",
      "expires_at": "2016-08-08T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-08-08T11:56:01.012Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Avi Prilutsky"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1470644383000
    },
    {
      "_id": "57cbb5f2a2b7c10001000100",
      "status": {
        "timestamp": 1472988034,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "repairs": [
        "57cbb5f304734f01000013bf",
        "57cbb67404734f01000013c0"
      ],
      "diagnoses": [
        "57cbbcc4ad8c2e010000180c"
      ],
      "sessions": [
        "57cbbba13f23310001000016",
        "57cbbf153f23310001000017",
        "57cbc1553f23310001000018",
        "57cbc3f6a2b7c10001000105",
        "57cbc5faa2b7c10001000106",
        "57cbc7543f2331000100001c",
        "57cbc8543f2331000100001e",
        "57cbcc1ca2b7c1000100010b",
        "57cbce7aa2b7c1000100010c",
        "57cbcf4fa2b7c1000100010d",
        "57cbd0173f2331000100003a",
        "57cbd1843f2331000100003c",
        "57cbd2233f2331000100003d",
        "57cbd2d6a2b7c1000100010f",
        "57cbd333a2b7c10001000110",
        "57cbd466a2b7c10001000111",
        "57cbd50e3f2331000100003f",
        "57cbd5b6a2b7c10001000112",
        "57cbd72f3f23310001000040",
        "57cbd974a2b7c10001000113",
        "57cbdb3b3f23310001000041",
        "57cbdceda2b7c10001000117",
        "57cbe0423f23310001000044",
        "57cbe1b43f23310001000046",
        "57cbecdaa2b7c1000100011a",
        "57cbed9e3f2331000100004b",
        "57cbee09a2b7c1000100011b",
        "57cbeee53f2331000100004c",
        "57cbefb33f2331000100004d",
        "57cbf0793f2331000100004e",
        "57cbf1933f2331000100004f",
        "57cbf2b9a2b7c1000100011e",
        "57cbf3c63f23310001000060",
        "57cbf5243f23310001000071",
        "57cbf68e3f23310001000074",
        "57cbf76aa2b7c10001000120",
        "57cbf822a2b7c10001000121",
        "57cbf915a2b7c10001000122",
        "57cbfddb3f23310001000075",
        "57cc03823f23310001000076"
      ],
      "created_at": "2016-09-04T05:49:38.000Z",
      "userId": "57b0d8f03d70730100000259",
      "updated_at": "2016-09-04T14:36:50.123Z",
      "expires_at": "2016-09-04T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-09-04T11:23:03.222Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Yossi Attia"
      },
      "timestamp": 1472968178000
    },
    {
      "_id": "581ecab778270400010002a8",
      "status": {
        "timestamp": 1478432871,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "repairs": [
        "581ed1e60d555800012d8ad7"
      ],
      "diagnoses": [
        "581ed86850288200017899bc"
      ],
      "sessions": [
        "581ecab978270400010002a9",
        "581ecce605e46f0001000165",
        "581ece3c78270400010002aa",
        "581ecfcf05e46f0001000166",
        "581ed34405e46f0001000167",
        "581ed7a178270400010002ab",
        "581ed8db78270400010002ac",
        "581eda3c78270400010002ad",
        "581ede3c78270400010002ae",
        "581ee00a78270400010002af",
        "581ee1cb05e46f0001000168",
        "581ee36705e46f0001000169",
        "581ee49205e46f000100016a",
        "581ee4ef05e46f000100016b",
        "581ee66805e46f000100016c",
        "581ee78c05e46f000100016d",
        "581ee97f78270400010002b4",
        "581eea9305e46f0001000170",
        "581eeb4b05e46f0001000172",
        "581eebc505e46f0001000174",
        "581eedc278270400010002b9",
        "581eeeb178270400010002ba",
        "581eef7e05e46f0001000177",
        "581ef04978270400010002bb",
        "581ef13c05e46f0001000178",
        "581f079578270400010002c8",
        "581f084d05e46f0001000182",
        "581f0a3005e46f0001000183",
        "581f0c0478270400010002ca",
        "581f0d5b78270400010002cb",
        "581f0e2505e46f0001000184",
        "581f0ef078270400010002cc",
        "581f10d105e46f0001000185",
        "581f119478270400010002cd",
        "581f12cf78270400010002ce",
        "581f15f305e46f0001000186",
        "581f16f205e46f0001000187",
        "581f186705e46f0001000188"
      ],
      "created_at": "2016-11-06T06:16:22.000Z",
      "userId": "57b0d8f03d70730100000259",
      "updated_at": "2016-11-06T16:06:10.768Z",
      "expires_at": "2016-11-06T21:59:59.000Z",
      "approved": true,
      "closed_at": "2016-11-06T12:36:01.504Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Yossi Attia"
      },
      "timestamp": 1478412983000
    },
    {
      "_id": "5847b2f41733770001000177",
      "status": {
        "timestamp": 1481112053,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "diagnoses": [
        "5847c388564ea60001a77858",
        "5847d5a69be6ca0001ff4194",
        "5847d68c564ea60001a77893",
        "5847d920564ea60001a77894",
        "5847dae29be6ca0001ff41a4"
      ],
      "sessions": [
        "5847b30f8d71520001000147",
        "5847b937173377000100017b",
        "5847bcc18d7152000100014e",
        "5847bdea173377000100017e",
        "5847bf121733770001000181",
        "5847c09a8d71520001000150",
        "5847c4338d71520001000155",
        "5847c6488d71520001000156",
        "5847c8551733770001000186",
        "5847c9791733770001000187",
        "5847cac31733770001000188",
        "5847cef1173377000100018b",
        "5847d170173377000100018d",
        "5847d1c6173377000100018e",
        "5847d1f18d71520001000158",
        "5847d215173377000100018f",
        "5847d35f1733770001000190",
        "5847d37a8d7152000100015a",
        "5847d3978d7152000100015b",
        "5847d4b21733770001000192",
        "5847d60f8d7152000100015f",
        "5847d6c08d71520001000161",
        "5847d6dc1733770001000195",
        "5847d8ab1733770001000199",
        "5847d9f2173377000100019b",
        "5847f7eb173377000100019c",
        "5847f89d173377000100019f",
        "5847f95117337700010001a0",
        "5847f9f58d71520001000167"
      ],
      "created_at": "2016-12-07T06:57:55.000Z",
      "userId": "57b0d8f03d70730100000259",
      "updated_at": "2017-02-06T02:04:26.084Z",
      "expires_at": "2016-12-07T21:59:59.000Z",
      "approved": true,
      "closed_at": "2016-12-07T12:22:58.402Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Yossi Attia"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1481093876000
    },
    {
      "_id": "5869ff0d86436c000100004b",
      "status": {
        "timestamp": 1483362118,
        "mhi": 8,
        "level": 3,
        "status": 8
      },
      "repairs": [
        "586a3ddcf9aaed0001e23593",
        "586a3e80f9aaed0001e23595",
        "586a4002e1730d000177bd4f"
      ],
      "diagnoses": [
        "586a021ff9aaed0001e2341c",
        "586a082bf9aaed0001e2342e",
        "586a0c8be1730d000177bbd4"
      ],
      "sessions": [
        "5869ff0eb707ad0001000057",
        "586a009a86436c000100004c",
        "586a022386436c000100004e",
        "586a066786436c000100004f",
        "586a0b9fb707ad0001000058",
        "586a0d23b707ad0001000059",
        "586a0e63b707ad000100005a",
        "586a1005b707ad000100007e",
        "586a127cb707ad0001000082",
        "586a14b086436c0001000070",
        "586a15ba86436c0001000071",
        "586a2481b707ad000100008c",
        "586a267d86436c000100007b",
        "586a2850b707ad000100008f",
        "586a291fb707ad0001000090",
        "586a29e286436c000100007d",
        "586a2bd6b707ad0001000093",
        "586a2cf186436c0001000081",
        "586a2ecab707ad0001000095",
        "586a302d86436c0001000085",
        "586a30d886436c0001000086",
        "586a3c0a86436c0001000087",
        "586a3d0a86436c0001000088",
        "586a3e4b86436c0001000089",
        "586a3f3f86436c000100008a",
        "586a40a7b707ad0001000096",
        "586a4175b707ad0001000097",
        "586a424d86436c000100008c",
        "586a436e86436c000100008d",
        "586a453d86436c0001000090",
        "586a474fb707ad000100009a",
        "586a4d5eb707ad000100009b",
        "586a4df3b707ad000100009c",
        "586a4ea7b707ad000100009e",
        "586a4f4686436c0001000092"
      ],
      "created_at": "2017-01-02T07:19:38.000Z",
      "userId": "57b0d8f03d70730100000259",
      "updated_at": "2017-01-02T15:00:59.828Z",
      "expires_at": "2017-01-02T21:59:59.000Z",
      "approved": true,
      "closed_at": "2017-01-02T13:08:00.915Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Yossi Attia"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1483341581000
    },
    {
      "_id": "5896e8899289b50001000955",
      "status": {
        "timestamp": 1486309084,
        "mhi": 8.244114,
        "level": 3,
        "status": 8.244114
      },
      "repairs": [
        "58972a3425d62d0001d45e55",
        "58972b4c32d43d00010fc05d"
      ],
      "diagnoses": [
        "5896e89932d43d00010fbf3d"
      ],
      "sessions": [
        "5896e89a9289b50001000956",
        "5896ead308b2950001000a62",
        "5896ec0008b2950001000a63",
        "5896ec3608b2950001000a64",
        "5896ec7f08b2950001000a65",
        "5896ecb508b2950001000a66",
        "5896ece908b2950001000a67",
        "5897211a08b2950001000a74",
        "589728d79289b50001000962",
        "589728f608b2950001000a75",
        "589729c19289b50001000963",
        "589729ee9289b50001000964",
        "58972a0e9289b50001000965",
        "58972a2f08b2950001000a76",
        "58972aba9289b50001000966",
        "58972af208b2950001000a77",
        "58972b209289b50001000967",
        "58972bd108b2950001000a78",
        "58972c1a9289b50001000968",
        "58972c3b9289b50001000969",
        "58972caa08b2950001000a79",
        "58972cdf9289b5000100096a",
        "58972d1808b2950001000a7a",
        "58972d539289b5000100096b",
        "589743bf08b2950001000a8d",
        "589743df08b2950001000a8e",
        "5897442208b2950001000a8f",
        "5897447308b2950001000a90",
        "589744bc9289b5000100097a",
        "589745dd08b2950001000a91",
        "589746119289b5000100097b",
        "589746529289b5000100097c",
        "5897466a08b2950001000a92",
        "589746a19289b5000100097d",
        "589746bd08b2950001000a93",
        "589746dc08b2950001000a95"
      ],
      "created_at": "2017-02-05T07:30:28.000Z",
      "userId": "57b0d8f03d70730100000259",
      "updated_at": "2017-02-06T02:18:50.221Z",
      "expires_at": "2017-02-05T21:59:59.000Z",
      "approved": true,
      "closed_at": "2017-02-05T15:50:13.503Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Yossi Attia"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1486284937000
    },
    {
      "_id": "57824fd9ddaa8000010002e8",
      "status": {
        "timestamp": 1468157914,
        "mhi": 4,
        "level": 1,
        "status": 4
      },
      "sessions": [
        "57824fda48cf020001000092"
      ],
      "created_at": "2016-07-10T13:38:33.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-07-10T17:15:02.269Z",
      "expires_at": "2016-07-10T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-07-10T13:41:16.979Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Avi Prilutsky"
      },
      "timestamp": 1468157913000
    },
    {
      "_id": "57d53008ab93a500010002dc",
      "status": {
        "timestamp": 1473589647,
        "mhi": 7.912897,
        "level": 3,
        "status": 7.912897
      },
      "repairs": [
        "57d53016d00c960100001630"
      ],
      "sessions": [
        "57d53026ab93a500010002dd",
        "57d5318f70a2df00010002c4"
      ],
      "created_at": "2016-09-11T10:20:55.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-09-11T17:34:47.872Z",
      "expires_at": "2016-09-11T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-09-11T11:03:27.998Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Avi Prilutsky"
      },
      "timestamp": 1473589256000
    },
    {
      "_id": "57d53c66ab93a500010002df",
      "status": {
        "timestamp": 1473592423,
        "mhi": 5.6630473,
        "level": 2,
        "status": 5.6630473
      },
      "sessions": [
        "57d53c6770a2df00010002c5"
      ],
      "created_at": "2016-09-11T11:13:19.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-09-13T12:47:12.669Z",
      "expires_at": "2016-09-11T20:59:59.000Z",
      "approved": true,
      "closed_at": "2016-09-13T12:47:09.845Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Avi Prilutsky"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1473592422000
    },
    {
      "_id": "5828684e7484f60001000036",
      "status": {
        "timestamp": 1479049619,
        "mhi": 6.121703,
        "level": 2,
        "status": 6.121703
      },
      "sessions": [
        "582868527484f60001000037",
        "582880e17484f6000100003b",
        "5828814afb4ec1000100002e",
        "58288193fb4ec1000100002f"
      ],
      "created_at": "2016-11-13T13:11:38.000Z",
      "userId": "56ae2c24a6ff0e010000063d",
      "updated_at": "2016-11-13T16:23:49.349Z",
      "expires_at": "2016-11-13T21:59:59.000Z",
      "approved": true,
      "closed_at": "2016-11-13T15:08:11.843Z",
      "open": false,
      "buildingId": "5725a378e00b3e00010000ca",
      "technician": {
        "name": "Avi Prilutsky"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1479043150000
    },
    {
      "_id": "58c0065ea04f7c0001000707",
      "userId": "57b0d8f03d70730100000259",
      "buildingId": "5725a378e00b3e00010000ca",
      "open": false,
      "expires_at": "2017-03-08T21:59:59.000Z",
      "created_at": "2017-03-08T07:58:48.000Z",
      "updated_at": "2017-03-10T16:33:57.680Z",
      "diagnoses": [
        "58c0066f0741e100011b4a7e"
      ],
      "sessions": [
        "58c00673de41b9000100071a",
        "58c007cede41b9000100071b",
        "58c00971de41b90001000722",
        "58c00e32a04f7c0001000711",
        "58c00fa3de41b9000100072d",
        "58c01033de41b9000100072e",
        "58c01170de41b9000100072f",
        "58c012aede41b90001000732",
        "58c01335de41b90001000733",
        "58c013b4de41b90001000738",
        "58c01406a04f7c000100071e",
        "58c01462a04f7c000100071f",
        "58c014e5de41b90001000739",
        "58c0152fde41b9000100073a",
        "58c01563a04f7c0001000720",
        "58c01597a04f7c0001000722",
        "58c015dede41b9000100073b",
        "58c01615de41b9000100073c",
        "58c01659de41b90001000747",
        "58c016b3de41b90001000748",
        "58c016d6a04f7c0001000725",
        "58c01731de41b90001000749",
        "58c01783de41b9000100074a",
        "58c017d2a04f7c000100072b",
        "58c01824a04f7c0001000730",
        "58c01857de41b9000100074d",
        "58c01879de41b90001000755",
        "58c018d3de41b9000100075d",
        "58c018f4de41b9000100075e",
        "58c01916de41b9000100075f",
        "58c01965de41b90001000760",
        "58c01982de41b90001000761",
        "58c019d5de41b90001000762",
        "58c019f1de41b90001000763",
        "58c01a18a04f7c0001000738",
        "58c01a64a04f7c000100073b"
      ],
      "status": {
        "timestamp": 1488984676,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "closed_at": "2017-03-08T15:05:17.713Z",
      "approved": true,
      "technician": {
        "name": "Yossi Attia"
      },
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "timestamp": 1488979550000
    },
    {
      "_id": "58e096b0b9cb9b0001000e70",
      "userId": "57b0d8f03d70730100000259",
      "buildingId": "5725a378e00b3e00010000ca",
      "open": false,
      "expires_at": "2017-04-02T20:59:59.000Z",
      "created_at": "2017-04-02T05:53:53.000Z",
      "updated_at": "2017-04-02T13:28:41.156Z",
      "diagnoses": [
        "58e096b16a9f230001000f06",
        "58e0e42db9cb9b0001000eff",
        "58e0e431b9cb9b0001000f00"
      ],
      "sessions": [
        "58e096b1b9cb9b0001000e71",
        "58e096d7b9cb9b0001000e72",
        "58e097016a9f230001000f07",
        "58e09735b9cb9b0001000e73",
        "58e09764b9cb9b0001000e74",
        "58e0e44a6a9f230001000f9a",
        "58e0e5646a9f230001000f9d",
        "58e0e6f16a9f230001000f9e",
        "58e0e817b9cb9b0001000f01",
        "58e0e93cb9cb9b0001000f02",
        "58e0ea456a9f230001000f9f",
        "58e0eb1eb9cb9b0001000f03",
        "58e0ec1cb9cb9b0001000f04",
        "58e0ece2b9cb9b0001000f11",
        "58e0eda7b9cb9b0001000f20",
        "58e0ee20b9cb9b0001000f21",
        "58e0eef66a9f230001000fb1",
        "58e0eff3b9cb9b0001000f24",
        "58e0f0ee6a9f230001000fb2",
        "58e0f1976a9f230001000fb3",
        "58e0f1eeb9cb9b0001000f25",
        "58e0f2256a9f230001000fb4",
        "58e0f2b4b9cb9b0001000f26",
        "58e0f2e76a9f230001000fb5",
        "58e0f35d6a9f230001000fb6",
        "58e0f38e6a9f230001000fb7",
        "58e0f3c46a9f230001000fb8",
        "58e0f4406a9f230001000fbc",
        "58e0f4ab6a9f230001000fc6",
        "58e0f5136a9f230001000fce",
        "58e0f53fb9cb9b0001000f34",
        "58e0f5766a9f230001000fcf",
        "58e0f5bb6a9f230001000fd1",
        "58e0f5f5b9cb9b0001000f38",
        "58e0f6526a9f230001000fd5",
        "58e0f6a4b9cb9b0001000f3a",
        "58e0f6dcb9cb9b0001000f3b"
      ],
      "status": {
        "timestamp": 1491138268,
        "mhi": 10,
        "level": 3,
        "status": 10
      },
      "closed_at": "2017-04-02T13:28:38.087Z",
      "approved": true,
      "building": {
        "name": "PGW",
        "hierarchies": [
          {
            "key": "floor",
            "text": "Floor",
            "level": 0
          }
        ],
        "address": {
          "city": "Yeruham",
          "country": "Israel",
          "state": "South District",
          "formattedAddress": "Yeruham, Israel"
        }
      },
      "company": {
        "_id": "5410a2f0abecbc166a98be52",
        "name": "Tuchner Engineering"
      },
      "technician": {
        "name": "Yossi Attia"
      },
      "timestamp": 1491113648000
    }
  ]
};
