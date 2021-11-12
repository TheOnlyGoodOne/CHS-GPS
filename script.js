const nodeList = document.querySelector('.node-list');
const nodeStart = document.querySelector('.node-start');
const nodeEnd = document.querySelector('.node-end');
const startPathfind = document.querySelector('.start-pathfind');
const pathLength = document.querySelector('.path-length');

startPathfind.addEventListener('click', () => pathfind(nodeStart.value, nodeEnd.value));

const canvas = document.querySelector('.canvas');

canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 300;

const map = new CanvasMap(canvas);

// async function fetchModel(modelName, modelJson, modelImageSrc) {
//     return new Promise((resolve, reject) => {
//         const model = JSON.parse(modelJson) || await(await fetch(`./models/${modelName}.json`)).json();
//         modelImage = new Image();
//         modelImage.src = modelImageSrc || `./models/${modelName}.png`;

//         modelImage.addEventListener('load', () => {
//             resolve(model);
//         })
//     })
// }

map.loadModel({
    "nodes": {
        "node0": {
            "node1": 110,
            "node16": 85
        },
        "node1": {
            "node0": 110,
            "node2": 82
        },
        "node2": {
            "node3": 74,
            "node1": 82,
            "node7": 116,
            "node15": 120
        },
        "node3": {
            "node4": 63,
            "node2": 74
        },
        "node4": {
            "node5": 111,
            "node3": 63
        },
        "node5": {
            "node6": 76,
            "node10": 76,
            "node4": 111,
            "node15": 95
        },
        "node6": {
            "node9": 121,
            "node5": 76,
            "node8": 141,
            "node7": 146
        },
        "node7": {
            "node8": 132,
            "node6": 146,
            "node2": 116
        },
        "node8": {
            "node6": 141,
            "node7": 132
        },
        "node9": {
            "node10": 164,
            "node6": 121,
            "node18": 80
        },
        "node10": {
            "node11": 74,
            "node9": 164,
            "node5": 76,
            "node18": 111
        },
        "node11": {
            "node12": 67,
            "node10": 74,
            "node13": 81,
            "node14": 76
        },
        "node12": {
            "node11": 67
        },
        "node13": {
            "node11": 81
        },
        "node14": {
            "node11": 76
        },
        "node15": {
            "node2": 120,
            "node5": 95
        },
        "node16": {
            "node0": 85,
            "node17": 115
        },
        "node17": {
            "node16": 115
        },
        "node18": {
            "node10": 111,
            "node9": 80
        }
    },
    "metadata": {
        "node0": {
            "name": "Master Bedroom",
            "position": {
                "x": 230.8550637832751,
                "y": 373.107931575012
            }
        },
        "node1": {
            "name": "hall",
            "position": {
                "x": 321,
                "y": 310
            }
        },
        "node2": {
            "name": "Master Bath",
            "position": {
                "x": 397.5564860186016,
                "y": 338.63150432740815
            }
        },
        "node3": {
            "name": "hall",
            "position": {
                "x": 468,
                "y": 361
            }
        },
        "node4": {
            "name": "Dining Room",
            "position": {
                "x": 531,
                "y": 359
            }
        },
        "node5": {
            "name": "hall",
            "position": {
                "x": 584.0514606398818,
                "y": 261.62114167284966
            }
        },
        "node6": {
            "name": "hall",
            "position": {
                "x": 566,
                "y": 188
            }
        },
        "node7": {
            "name": "hall",
            "position": {
                "x": 425,
                "y": 226
            }
        },
        "node8": {
            "name": "Living Room",
            "position": {
                "x": 457,
                "y": 98
            }
        },
        "node9": {
            "name": "Backyard Entry",
            "position": {
                "x": 646.216452145966,
                "y": 97.39422374932028
            }
        },
        "node10": {
            "name": "Kitchen",
            "position": {
                "x": 660.1339875998071,
                "y": 260.6933059782165
            }
        },
        "node11": {
            "name": "Entry",
            "position": {
                "x": 733.4330074558641,
                "y": 249.55927766090787
            }
        },
        "node12": {
            "name": "Laundry",
            "position": {
                "x": 757,
                "y": 187
            }
        },
        "node13": {
            "name": "Entry Bath",
            "position": {
                "x": 801.1650131640902,
                "y": 293.1675553086699
            }
        },
        "node14": {
            "name": "Entry Closet",
            "position": {
                "x": 807.6598630265229,
                "y": 231.9303994628764
            }
        },
        "node15": {
            "name": "hall",
            "position": {
                "x": 489.41221978729186,
                "y": 260.6933059782165
            }
        },
        "node16": {
            "name": "Master Bedroom Bath",
            "position": {
                "x": 205.49449722952198,
                "y": 292.2397195709578
            }
        },
        "node17": {
            "name": "Master Bedroom Closet",
            "position": {
                "x": 301.06157377674515,
                "y": 228.21905664126456
            }
        },
        "node18": {
            "name": "Pantry",
            "position": {
                "x": 699.9188796153571,
                "y": 156.70409388040042
            }
        }
    },
    "feetPerPixel": 0.086806,
    "image": "https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/2318/files/2019/03/Floor-Plan-1st-Floor.png"
})

//map.pathfind('Master Bedroom', 'Entry');