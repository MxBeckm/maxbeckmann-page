"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-dog_js",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const urlDogGLB = ( false ? 0 : \"\") + \"/EarthRemix.glb\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer } = refRenderer;\n        const { current: container } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            // (-100.0, -50.0, -300.0) for earth.glb\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, -30);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-2000 * Math.sin(0.2 * Math.PI), -1000, -2000 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            const scale = scH * 0.005 + 0.1;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 5000000);\n            // For earth.glb\n            // camera.zoom = 0.0091\n            camera.zoom = 0.04;\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, Math.PI);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, urlDogGLB, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 0.5 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 820) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogSpinner, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\maxbe\\\\Documents\\\\MEGAsync\\\\MasterArbeit\\\\Homepage\\\\maxbeckmann-page\\\\components\\\\voxel-dog.js\",\n            lineNumber: 131,\n            columnNumber: 50\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxbe\\\\Documents\\\\MEGAsync\\\\MasterArbeit\\\\Homepage\\\\maxbeckmann-page\\\\components\\\\voxel-dog.js\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"zURt50pwc+mytDe3zC6SvtguxBo=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz9jZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IENvbXByZXNzZWRBcnJheVRleHR1cmUgfSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5pbXBvcnQgeyBEb2dTcGlubmVyLCBEb2dDb250YWluZXIgfSBmcm9tICcuL3ZveGVsLWRvZy1sb2FkZXInXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XHJcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxyXG59XHJcblxyXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcclxuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgcmVmUmVuZGVyZXIgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IHVybERvZ0dMQiA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJycgOiAnJykgKyAnL0VhcnRoUmVtaXguZ2xiJ1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IHJlbmRlcmVyIH0gPSByZWZSZW5kZXJlclxyXG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xyXG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgcmVmUmVuZGVyZXIuY3VycmVudCA9IHJlbmRlcmVyXHJcbiAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcclxuXHJcbiAgICAgIC8vICgtMTAwLjAsIC01MC4wLCAtMzAwLjApIGZvciBlYXJ0aC5nbGJcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0zMClcclxuICAgICAgY29uc3QgaW5pdGlhbENhbWVyYVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgLTIwMDAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAtMTAwMCxcclxuICAgICAgICAtMjAwMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXHJcbiAgICAgIClcclxuICAgICAgXHJcblxyXG4gICAgICAvLyA2NDAgLT4gMjQwXHJcbiAgICAgIC8vIDggICAtPiA2XHJcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyAwLjFcclxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgIDAuMDEsXHJcbiAgICAgICAgNTAwMDAwMFxyXG4gICAgICApXHJcbiAgICAgIFxyXG4gICAgICAvLyBGb3IgZWFydGguZ2xiXHJcbiAgICAgIC8vIGNhbWVyYS56b29tID0gMC4wMDkxXHJcblxyXG4gICAgICBjYW1lcmEuem9vbSA9IDAuMDRcclxuICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuXHJcbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIE1hdGguUEkpXHJcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcblxyXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmxEb2dHTEIsIHtcclxuICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhbmltYXRlKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG5cclxuICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMC41IDogZnJhbWVcclxuXHJcbiAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCkge1xyXG4gICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyA4MjApICogTWF0aC5QSSAqIDIwXHJcblxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID1cclxuICAgICAgICAgICAgcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW2hhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RG9nQ29udGFpbmVyIHJlZj17cmVmQ29udGFpbmVyfT57bG9hZGluZyAmJiA8RG9nU3Bpbm5lciAvPn08L0RvZ0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJDb21wcmVzc2VkQXJyYXlUZXh0dXJlIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJEb2dTcGlubmVyIiwiRG9nQ29udGFpbmVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJ1cmxEb2dHTEIiLCJwcm9jZXNzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjZW5lIiwiU2NlbmUiLCJ0YXJnZXQiLCJWZWN0b3IzIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwic2luIiwiUEkiLCJjb3MiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInpvb20iLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});