import cesiumExamples from "./cesium-examples.js";
import threeExamples from "./three-examples.js";
import threeTutorial from "./three-tutorial.js";
import threeSymbol from "./three-symbol.js";
import threeCesiumAuthors from "./author.js";

window.THREE_CESIUM_NAVIGATION = [
  { name: "Three.js扩展[r166]", examples: threeExamples },
  // { name: "Three.js教程[r166]", examples: threeTutorial },
  // { name: "Three.js符号库", examples: threeSymbol },
  { name: "Cesium.js案例[1.119]", examples: cesiumExamples },
];

window.THREE_CESIUM_AUTHORS = threeCesiumAuthors;

/* 依赖注入 */
window.GET_SCRIPT = (v, t) =>
  (t === "Cesium.js案例[1.119]"
    ? `<link rel="stylesheet" href="/public/js/cesium/style.css">
 <script type="importmap">
    {
        "imports": {
            "cesium": "/public/js/cesium/Cesium.js",
            "dat.gui": "/public/js/dat.gui.module.js"
        }
    }
 <\/script>`
    : `    
`) +
  `  <link rel="stylesheet" type="text/css" href="/public/css/threelab.css" />   
   
    ${
      t === "Cesium.js案例"
        ? 'window.CESIUM_BASE_URL = "/public/cesium"'
        : ""
    }
    ${v} `;
