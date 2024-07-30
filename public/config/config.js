import cesiumExamples from "./cesium-examples.js";
import threeExamples from "./three-examples.js";
import threeTutorial from "./three-tutorial.js";
import threeSymbol from "./three-symbol.js";
import threeCesiumAuthors from "./author.js";

window.THREE_CESIUM_NAVIGATION = [
  { name: "Three.js教程[r166]", examples: threeTutorial },
  { name: "Three.js符号库", examples: threeSymbol },
  { name: "Three.js案例", examples: threeExamples },
  { name: "Cesium.js案例[1.119]", examples: cesiumExamples },
];

window.THREE_CESIUM_AUTHORS = threeCesiumAuthors;

/* 依赖注入 */
window.GET_SCRIPT = (v, t) =>
  (t === "Cesium.js案例[1.119]"
    ? `<link rel="stylesheet" href="/three-cesium-examples/public/js/cesium/style.css">
 <script type="importmap">
    {
        "imports": {
            "cesium": "/three-cesium-examples/public/js/cesium/Cesium.js",
            "dat.gui": "/three-cesium-examples/public/js/dat.gui.module.js"
        }
    }
 <\/script>`
    : `  
<script type="importmap">
    {
        "imports": { 
            "three": "/three-cesium-examples/public/js/three/build/three.module.min.js",
            "three/addons/": "/three-cesium-examples/public/js/three/examples/jsm/", 
            "gsap": "/three-cesium-examples/public/js/gsap/index.js",
            "dat.gui": "/three-cesium-examples/public/js/dat.gui.module.js", 
            "3d-tiles-renderer": "/three-cesium-examples/public/js/3dTilesRenderer/index.js",
            "@recast-navigation/three": "/three-cesium-examples/public/js/@recast-navigation/three/dist/index.mjs",
            "@recast-navigation/core": "/three-cesium-examples/public/js/@recast-navigation/core/dist/index.mjs",
            "@recast-navigation/wasm": "/three-cesium-examples/public/js/@recast-navigation/wasm/dist/recast-navigation.wasm-compat.js",
            "@recast-navigation/generators": "/three-cesium-examples/public/js/@recast-navigation/generators/dist/index.mjs",
            "three.path": "/three-cesium-examples/public/js/three.path.module.js",
            "@tweenjs/tween.js":"/three-cesium-examples/public/js/tween.esm.js"

        }
    }
<\/script>

 



`) +
  `  <link rel="stylesheet" type="text/css" href="/three-cesium-examples/public/css/threelab.css" /> 
    <link rel="stylesheet" type="text/css" href="/three-cesium-examples/public/css/threelabUI.css" /> 
   
    ${
      t === "Cesium.js案例"
        ? 'window.CESIUM_BASE_URL = "/three-cesium-examples/public/cesium"'
        : ""
    }
    ${v} `;
