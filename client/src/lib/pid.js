import Nitrouspid from "../images/nitrouspid.png";
import Ethanolpid from "../images/ethanolpid.png";
import Fullpid from "../images/fullpid.png";

// CONSTANTS
export const VALVE_MAP = {
  1: "OPEN",
  0: "CLOSED",
};

export const PADDING = {
  NITROUS: {
    IMAGE: {
      SRC: Nitrouspid,
      ALT: "nitrouspid",
    },
    "COORDINATES" : {
      "SENSOR" : {
        "PT-5": {
          "TEXT" : {
            x1: (1065/1600) * 100 + '%',
            y1: (160/1725) * 100 + '%',
            x2: ((1600-1394)/1600) * 100 + '%',
            y2: ((1725-225)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (882/1600) * 100 + '%',
            y1: (131/1725) * 100 + '%',
            x2: ((1600-1047)/1600) * 100 + '%',
            y2: ((1725-256)/1725) * 100 + '%'
          }
        },
        "PT-6": {
          "TEXT" : {
            x1: (1163/1600) * 100 + '%',
            y1: (1257/1725) * 100 + '%',
            x2: ((1600-1468)/1600) * 100 + '%',
            y2: ((1725-1331)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (1126/1600) * 100 + '%',
            y1: (1124/1725) * 100 + '%',
            x2: ((1600-1335)/1600) * 100 + '%',
            y2: ((1725-1245)/1725) * 100 + '%'
          }
        },
        "PT-7": {
          "TEXT" : {
            x1: (340/1600) * 100 + '%',
            y1: (697/1725) * 100 + '%',
            x2: ((1600-666)/1600) * 100 + '%',
            y2: ((1725-772)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (584/1600) * 100 + '%',
            y1: (787/1725) * 100 + '%',
            x2: ((1600-674)/1600) * 100 + '%',
            y2: ((1725-927)/1725) * 100 + '%'
          }
        },
        "PT-8": {
          "TEXT" : {
            x1: (1084/1600) * 100 + '%',
            y1: (1414/1725) * 100 + '%',
            x2: ((1600-1384)/1600) * 100 + '%',
            y2: ((1725-1481)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (955/1600) * 100 + '%',
            y1: (1379/1725) * 100 + '%',
            x2: ((1600-1072)/1600) * 100 + '%',
            y2: ((1725-1504)/1725) * 100 + '%'
          }
        },
      },
      "VALVE" : {
        "vent_valve": {
          "TEXT" : {
            x1: (93/1600) * 100 + '%',
            y1: (192/1725) * 100 + '%',
            x2: ((1600-429)/1600) * 100 + '%',
            y2: ((1725-266)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (340/1600) * 100 + '%',
            y1: (262/1725) * 100 + '%',
            x2: ((1600-590)/1600) * 100 + '%',
            y2: ((1725-368)/1725) * 100 + '%'
          }
        },
        "pressurization_valve": {
          "TEXT" : {
            x1: (1100/1600) * 100 + '%',
            y1: (750/1725) * 100 + '%',
            x2: ((1600-1348)/1600) * 100 + '%',
            y2: ((1725-814)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (961/1600) * 100 + '%',
            y1: (799/1725) * 100 + '%',
            x2: ((1600-1089)/1600) * 100 + '%',
            y2: ((1725-943)/1725) * 100 + '%'
          }
        },
        "remote_drain_valve": {
          "TEXT" : {
            x1: (636/1600) * 100 + '%',
            y1: (1137/1725) * 100 + '%',
            x2: ((1600-919)/1600) * 100 + '%',
            y2: ((1725-1199)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (507/1600) * 100 + '%',
            y1: (1158/1725) * 100 + '%',
            x2: ((1600-625)/1600) * 100 + '%',
            y2: ((1725-1303)/1725) * 100 + '%'
          }
        },
        "main_propellant_valve": {
          "TEXT" : {
            x1: (600/1600) * 100 + '%',
            y1: (1647/1725) * 100 + '%',
            x2: ((1600-940)/1600) * 100 + '%',
            y2: ((1725-1700)/1725) * 100 + '%'
          },
          "ICON" : {
            x1: (716/1600) * 100 + '%',
            y1: (1482/1725) * 100 + '%',
            x2: ((1600-891)/1600) * 100 + '%',
            y2: ((1725-1632)/1725) * 100 + '%'
          }
        }
      } 
    },
  },
  "FULL" : {
    "IMAGE" : {
      "SRC" : Fullpid,
      "ALT" : "fullpid",
    },
    "COORDINATES" : {
      "SENSOR" : {
        "PT-1": {
          "TEXT" : {
            x1: (1611/3200) * 100 + '%',
            y1: (199/1595) * 100 + '%',
            x2: ((3200-1872)/3200) * 100 + '%',
            y2: ((1595-267)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (1890/3200) * 100 + '%',
            y1: (184/1595) * 100 + '%',
            x2: ((3200-2063)/3200) * 100 + '%',
            y2: ((1595-278)/1595) * 100 + '%'
          }
        },
        "PT-2": {
          "TEXT" : {
            x1: (2407/3200) * 100 + '%',
            y1: (464/1595) * 100 + '%',
            x2: ((3200-2688)/3200) * 100 + '%',
            y2: ((1595-529)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2507/3200) * 100 + '%',
            y1: (331/1595) * 100 + '%',
            x2: ((3200-2598)/3200) * 100 + '%',
            y2: ((1595-446)/1595) * 100 + '%'
          }
        },
        "PT-3": {
          "TEXT" : {
            x1: (2197/3200) * 100 + '%',
            y1: (924/1595) * 100 + '%',
            x2: ((3200-2465)/3200) * 100 + '%',
            y2: ((1595-999)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2082/3200) * 100 + '%',
            y1: (850/1595) * 100 + '%',
            x2: ((3200-2186)/3200) * 100 + '%',
            y2: ((1595-967)/1595) * 100 + '%'
          }
        },
        "PT-4": {
          "TEXT" : {
            x1: (1771/3200) * 100 + '%',
            y1: (1424/1595) * 100 + '%',
            x2: ((3200-2132)/3200) * 100 + '%',
            y2: ((1595-1517)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2011/3200) * 100 + '%',
            y1: (1253/1595) * 100 + '%',
            x2: ((3200-2118)/3200) * 100 + '%',
            y2: ((1595-1407)/1595) * 100 + '%'
          }
        },
        "PT-5": {
          "TEXT" : {
            x1: (1011/3200) * 100 + '%',
            y1: (170/1595) * 100 + '%',
            x2: ((3200-1232)/3200) * 100 + '%',
            y2: ((1595-232)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (896/3200) * 100 + '%',
            y1: (135/1595) * 100 + '%',
            x2: ((3200-1001)/3200) * 100 + '%',
            y2: ((1595-256)/1595) * 100 + '%'
          }
        },
        "PT-6": {
          "TEXT" : {
            x1: (1447/3200) * 100 + '%',
            y1: (379/1595) * 100 + '%',
            x2: ((3200-1735)/3200) * 100 + '%',
            y2: ((1595-446)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (1419/3200) * 100 + '%',
            y1: (460/1595) * 100 + '%',
            x2: ((3200-1514)/3200) * 100 + '%',
            y2: ((1595-606)/1595) * 100 + '%'
          }
        },
        "PT-7": {
          "TEXT" : {
            x1: (1041/3200) * 100 + '%',
            y1: (852/1595) * 100 + '%',
            x2: ((3200-1318)/3200) * 100 + '%',
            y2: ((1595-933)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (927/3200) * 100 + '%',
            y1: (821/1595) * 100 + '%',
            x2: ((3200-1028)/3200) * 100 + '%',
            y2: ((1595-942)/1595) * 100 + '%'
          }
        },
        "PT-8": {
          "TEXT" : {
            x1: (1084/3200) * 100 + '%',
            y1: (1252/1595) * 100 + '%',
            x2: ((3200-1354)/3200) * 100 + '%',
            y2: ((1595-1333)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (962/3200) * 100 + '%',
            y1: (1227/1595) * 100 + '%',
            x2: ((3200-1072)/3200) * 100 + '%',
            y2: ((1595-1344)/1595) * 100 + '%'
          }
        },
        "PT-9": {
          "TEXT" : {
            x1: (1612/3200) * 100 + '%',
            y1: (1109/1595) * 100 + '%',
            x2: ((3200-1862)/3200) * 100 + '%',
            y2: ((1595-1174)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (1570/3200) * 100 + '%',
            y1: (1162/1595) * 100 + '%',
            x2: ((3200-1668)/3200) * 100 + '%',
            y2: ((1595-1328)/1595) * 100 + '%'
          }
        },
        "PT-10": {
          "TEXT" : {
            x1: (1248/3200) * 100 + '%',
            y1: (1110/1595) * 100 + '%',
            x2: ((3200-1531)/3200) * 100 + '%',
            y2: ((1595-1176)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (1475/3200) * 100 + '%',
            y1: (1163/1595) * 100 + '%',
            x2: ((3200-1571)/3200) * 100 + '%',
            y2: ((1595-1330)/1595) * 100 + '%'
          }
        },
      },
      "VALVE" : {
        "NOSV-3": {
          "TEXT" : {
            x1: (136/3200) * 100 + '%',
            y1: (101/1595) * 100 + '%',
            x2: ((3200-439)/3200) * 100 + '%',
            y2: ((1595-183)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (453/3200) * 100 + '%',
            y1: (98/1595) * 100 + '%',
            x2: ((3200-594)/3200) * 100 + '%',
            y2: ((1595-251)/1595) * 100 + '%'
          }
        },
        "NCSV-3": {
          "TEXT" : {
            x1: (614/3200) * 100 + '%',
            y1: (704/1595) * 100 + '%',
            x2: ((3200-928)/3200) * 100 + '%',
            y2: ((1595-784)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (939/3200) * 100 + '%',
            y1: (671/1595) * 100 + '%',
            x2: ((3200-1075)/3200) * 100 + '%',
            y2: ((1595-806)/1595) * 100 + '%'
          }
        },
        "NOSV-4": {
          "TEXT" : {
            x1: (666/3200) * 100 + '%',
            y1: (1158/1595) * 100 + '%',
            x2: ((3200-928)/3200) * 100 + '%',
            y2: ((1595-1244)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (507/3200) * 100 + '%',
            y1: (1133/1595) * 100 + '%',
            x2: ((3200-655)/3200) * 100 + '%',
            y2: ((1595-1280)/1595) * 100 + '%'
          }
        },
        "NCSV-4": {
          "TEXT" : {
            x1: (445/3200) * 100 + '%',
            y1: (1380/1595) * 100 + '%',
            x2: ((3200-733)/3200) * 100 + '%',
            y2: ((1595-1459)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (745/3200) * 100 + '%',
            y1: (1331/1595) * 100 + '%',
            x2: ((3200-897)/3200) * 100 + '%',
            y2: ((1595-1461)/1595) * 100 + '%'
          }
        },
        "NCSV-1": {
          "TEXT" : {
            x1: (2186/3200) * 100 + '%',
            y1: (134/1595) * 100 + '%',
            x2: ((3200-2491)/3200) * 100 + '%',
            y2: ((1595-203)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2177/3200) * 100 + '%',
            y1: (218/1595) * 100 + '%',
            x2: ((3200-2298)/3200) * 100 + '%',
            y2: ((1595-402)/1595) * 100 + '%'
          }
        },
        "NOSV-1": {
          "TEXT" : {
            x1: (2756/3200) * 100 + '%',
            y1: (570/1595) * 100 + '%',
            x2: ((3200-3042)/3200) * 100 + '%',
            y2: ((1595-648)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2722/3200) * 100 + '%',
            y1: (405/1595) * 100 + '%',
            x2: ((3200-2836)/3200) * 100 + '%',
            y2: ((1595-555)/1595) * 100 + '%'
          }
        },
        "NCSV-2": {
          "TEXT" : {
            x1: (2268/3200) * 100 + '%',
            y1: (1476/1595) * 100 + '%',
            x2: ((3200-2573)/3200) * 100 + '%',
            y2: ((1595-1556)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2198/3200) * 100 + '%',
            y1: (1343/1595) * 100 + '%',
            x2: ((3200-2418)/3200) * 100 + '%',
            y2: ((1595-1461)/1595) * 100 + '%'
          }
        },
        "NOSV-2": {
          "TEXT" : {
            x1: (1968/3200) * 100 + '%',
            y1: (1147/1595) * 100 + '%',
            x2: ((3200-2283)/3200) * 100 + '%',
            y2: ((1595-1222)/1595) * 100 + '%'
          },
          "ICON" : {
            x1: (2296/3200) * 100 + '%',
            y1: (1181/1595) * 100 + '%',
            x2: ((3200-2457)/3200) * 100 + '%',
            y2: ((1595-1329)/1595) * 100 + '%'
          }
        }
      } 
    },
  },
  "ETHANOL" : {
    "IMAGE" : {
      "SRC" : Ethanolpid,
      "ALT" : "ethanolpid",
    },
    "COORDINATES" : {
      "SENSOR" : {
        "PT-1": {
          "TEXT" : {
            x1: (884/1971) * 100 + '%',
            y1: (237/1522) * 100 + '%',
            x2: ((1971-1124)/1971) * 100 + '%',
            y2: ((1522-290)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (774/1971) * 100 + '%',
            y1: (142/1522) * 100 + '%',
            x2: ((1971-873)/1971) * 100 + '%',
            y2: ((1522-263)/1522) * 100 + '%'
          }
        },
        "PT-2": {
          "TEXT" : {
            x1: (778/1971) * 100 + '%',
            y1: (330/1522) * 100 + '%',
            x2: ((1971-1008)/1971) * 100 + '%',
            y2: ((1522-396)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (660/1971) * 100 + '%',
            y1: (325/1522) * 100 + '%',
            x2: ((1971-768)/1971) * 100 + '%',
            y2: ((1522-452)/1522) * 100 + '%'
          }
        },
        "PT-3": {
          "TEXT" : {
            x1: (166/1971) * 100 + '%',
            y1: (991/1522) * 100 + '%',
            x2: ((1971-465)/1971) * 100 + '%',
            y2: ((1522-1060)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (406/1971) * 100 + '%',
            y1: (1060/1522) * 100 + '%',
            x2: ((1971-575)/1971) * 100 + '%',
            y2: ((1522-1147)/1522) * 100 + '%'
          }
        },
        "PT-4": {
          "TEXT" : {
            x1: (713/1971) * 100 + '%',
            y1: (1146/1522) * 100 + '%',
            x2: ((1971-993)/1971) * 100 + '%',
            y2: ((1522-1209)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (684/1971) * 100 + '%',
            y1: (1222/1522) * 100 + '%',
            x2: ((1971-775)/1971) * 100 + '%',
            y2: ((1522-1361)/1522) * 100 + '%'
          }
        },
      },
      "VALVE" : {
        "NCSV-1": {
          "TEXT" : {
            x1: (276/1971) * 100 + '%',
            y1: (92/1522) * 100 + '%',
            x2: ((1971-588)/1971) * 100 + '%',
            y2: ((1522-163)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (529/1971) * 100 + '%',
            y1: (177/1522) * 100 + '%',
            x2: ((1971-649)/1971) * 100 + '%',
            y2: ((1522-326)/1522) * 100 + '%'
          }
        },
        "NOSV-2": {
          "TEXT" : {
            x1: (347/1971) * 100 + '%',
            y1: (518/1522) * 100 + '%',
            x2: ((1971-671)/1971) * 100 + '%',
            y2: ((1522-595)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (684/1971) * 100 + '%',
            y1: (584/1522) * 100 + '%',
            x2: ((1971-812)/1971) * 100 + '%',
            y2: ((1522-738)/1522) * 100 + '%'
          }
        },
        "NCSV-3": {
          "TEXT" : {
            x1: (50/1971) * 100 + '%',
            y1: (1373/1522) * 100 + '%',
            x2: ((1971-376)/1971) * 100 + '%',
            y2: ((1522-1441)/1522) * 100 + '%'
          },
          "ICON" : {
            x1: (390/1971) * 100 + '%',
            y1: (1343/1522) * 100 + '%',
            x2: ((1971-626)/1971) * 100 + '%',
            y2: ((1522-1443)/1522) * 100 + '%'
          }
        },
      } 
    },
  },
}
