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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const urlDogGLB = ( false ? 0 : \"\") + \"/EarthRemix.glb\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer } = refRenderer;\n        const { current: container } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            // (-100.0, -50.0, -300.0) for earth.glb\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, -30);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-2000 * Math.sin(0.2 * Math.PI), -1000, -2000 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            const scale = scH * 0.005 + 0.1;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 5000000);\n            // For earth.glb\n            // camera.zoom = 0.0091\n            camera.zoom = 0.04;\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, Math.PI);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, urlDogGLB, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 10.0 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 500;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogSpinner, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\maxbe\\\\Documents\\\\MEGAsync\\\\MasterArbeit\\\\Homepage\\\\maxbeckmann-page\\\\components\\\\voxel-dog.js\",\n            lineNumber: 128,\n            columnNumber: 50\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxbe\\\\Documents\\\\MEGAsync\\\\MasterArbeit\\\\Homepage\\\\maxbeckmann-page\\\\components\\\\voxel-dog.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"zURt50pwc+mytDe3zC6SvtguxBo=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRTtBQUNsQztBQUMyQztBQUM3QjtBQUNpQjtBQUU3RCxTQUFTUyxZQUFZQyxDQUFDO0lBQ3BCLE9BQU9DLEtBQUtDLElBQUksQ0FBQyxJQUFJRCxLQUFLRSxHQUFHLENBQUNILElBQUksR0FBRztBQUN2QztBQUVBLE1BQU1JLFdBQVc7O0lBQ2YsTUFBTUMsZUFBZWIsNkNBQU1BO0lBQzNCLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWtCLGNBQWNoQiw2Q0FBTUE7SUFDMUIsTUFBTWlCLFlBQVksQ0FBQ0MsTUFBeUIsR0FBZSxJQUFLLEVBQUMsSUFBSztJQUV0RSxNQUFNQyxxQkFBcUJsQixrREFBV0EsQ0FBQztRQUNyQyxNQUFNLEVBQUVtQixTQUFTQyxRQUFRLEVBQUUsR0FBR0w7UUFDOUIsTUFBTSxFQUFFSSxTQUFTRSxTQUFTLEVBQUUsR0FBR1Q7UUFDL0IsSUFBSVMsYUFBYUQsVUFBVTtZQUN6QixNQUFNRSxNQUFNRCxVQUFVRSxXQUFXO1lBQ2pDLE1BQU1DLE1BQU1ILFVBQVVJLFlBQVk7WUFFbENMLFNBQVNNLE9BQU8sQ0FBQ0osS0FBS0U7UUFDeEI7SUFDRixHQUFHLEVBQUU7SUFFTCw4Q0FBOEMsR0FDOUMxQixnREFBU0EsQ0FBQztRQUNSLE1BQU0sRUFBRXFCLFNBQVNFLFNBQVMsRUFBRSxHQUFHVDtRQUMvQixJQUFJUyxXQUFXO1lBQ2IsTUFBTUMsTUFBTUQsVUFBVUUsV0FBVztZQUNqQyxNQUFNQyxNQUFNSCxVQUFVSSxZQUFZO1lBRWxDLE1BQU1MLFdBQVcsSUFBSW5CLGdEQUFtQixDQUFDO2dCQUN2QzJCLFdBQVc7Z0JBQ1hDLE9BQU87WUFDVDtZQUNBVCxTQUFTVSxhQUFhLENBQUNDLE9BQU9DLGdCQUFnQjtZQUM5Q1osU0FBU00sT0FBTyxDQUFDSixLQUFLRTtZQUN0QkosU0FBU2EsY0FBYyxHQUFHaEMsK0NBQWtCO1lBQzVDb0IsVUFBVWMsV0FBVyxDQUFDZixTQUFTZ0IsVUFBVTtZQUN6Q3JCLFlBQVlJLE9BQU8sR0FBR0M7WUFDdEIsTUFBTWlCLFFBQVEsSUFBSXBDLHdDQUFXO1lBRTdCLHdDQUF3QztZQUV4QyxNQUFNc0MsU0FBUyxJQUFJdEMsMENBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4QyxNQUFNd0Msd0JBQXdCLElBQUl4QywwQ0FBYSxDQUM3QyxDQUFDLE9BQU9PLEtBQUtrQyxHQUFHLENBQUMsTUFBTWxDLEtBQUttQyxFQUFFLEdBQzlCLENBQUMsTUFDRCxDQUFDLE9BQU9uQyxLQUFLb0MsR0FBRyxDQUFDLE1BQU1wQyxLQUFLbUMsRUFBRTtZQUloQyxhQUFhO1lBQ2IsV0FBVztZQUNYLE1BQU1FLFFBQVFyQixNQUFNLFFBQVE7WUFDNUIsTUFBTXNCLFNBQVMsSUFBSTdDLHFEQUF3QixDQUN6QyxDQUFDNEMsT0FDREEsT0FDQUEsT0FDQSxDQUFDQSxPQUNELE1BQ0E7WUFHRixnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBRXZCQyxPQUFPRSxJQUFJLEdBQUc7WUFDZEYsT0FBT0csUUFBUSxDQUFDQyxJQUFJLENBQUNUO1lBQ3JCSyxPQUFPSyxNQUFNLENBQUNaO1lBRWQsTUFBTWEsZUFBZSxJQUFJbkQsK0NBQWtCLENBQUMsVUFBVU8sS0FBS21DLEVBQUU7WUFDN0ROLE1BQU1pQixHQUFHLENBQUNGO1lBRVYsTUFBTUcsV0FBVyxJQUFJckQsb0ZBQWFBLENBQUM0QyxRQUFRMUIsU0FBU2dCLFVBQVU7WUFDOURtQixTQUFTQyxVQUFVLEdBQUc7WUFDdEJELFNBQVNoQixNQUFNLEdBQUdBO1lBRWxCcEMseURBQWFBLENBQUNrQyxPQUFPckIsV0FBVztnQkFDOUJ5QyxlQUFlO2dCQUNmQyxZQUFZO1lBQ2QsR0FBR0MsSUFBSSxDQUFDO2dCQUNOQztnQkFDQTlDLFdBQVc7WUFDYjtZQUVBLElBQUkrQyxNQUFNO1lBQ1YsSUFBSUMsUUFBUTtZQUNaLE1BQU1GLFVBQVU7Z0JBQ2RDLE1BQU1FLHNCQUFzQkg7Z0JBRTVCRSxRQUFRQSxTQUFTLE1BQU1BLFFBQU8sT0FBT0E7Z0JBRXJDLElBQUlBLFNBQVMsS0FBSztvQkFDaEIsTUFBTUUsSUFBSXZCO29CQUNWLE1BQU13QixXQUFXLENBQUMzRCxZQUFZd0QsUUFBUSxPQUFPdEQsS0FBS21DLEVBQUUsR0FBRztvQkFFdkRHLE9BQU9HLFFBQVEsQ0FBQ2lCLENBQUMsR0FBRztvQkFDcEJwQixPQUFPRyxRQUFRLENBQUMxQyxDQUFDLEdBQUd5RCxFQUFFekQsQ0FBQyxHQUFHQyxLQUFLb0MsR0FBRyxDQUFDcUIsWUFBWUQsRUFBRUcsQ0FBQyxHQUFHM0QsS0FBS2tDLEdBQUcsQ0FBQ3VCO29CQUM5RG5CLE9BQU9HLFFBQVEsQ0FBQ2tCLENBQUMsR0FBR0gsRUFBRUcsQ0FBQyxHQUFHM0QsS0FBS29DLEdBQUcsQ0FBQ3FCLFlBQVlELEVBQUV6RCxDQUFDLEdBQUdDLEtBQUtrQyxHQUFHLENBQUN1QjtvQkFDOURuQixPQUFPSyxNQUFNLENBQUNaO2dCQUNoQixPQUFPO29CQUNMZ0IsU0FBU2EsTUFBTTtnQkFDakI7Z0JBRUFoRCxTQUFTaUQsTUFBTSxDQUFDaEMsT0FBT1M7WUFDekI7WUFFQSxPQUFPO2dCQUNMd0IscUJBQXFCVDtnQkFDckJ6QyxTQUFTZ0IsVUFBVSxDQUFDbUMsTUFBTTtnQkFDMUJuRCxTQUFTb0QsT0FBTztZQUNsQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwxRSxnREFBU0EsQ0FBQztRQUNSaUMsT0FBTzBDLGdCQUFnQixDQUFDLFVBQVV2RCxvQkFBb0I7UUFDdEQsT0FBTztZQUNMYSxPQUFPMkMsbUJBQW1CLENBQUMsVUFBVXhELG9CQUFvQjtRQUMzRDtJQUNGLEdBQUc7UUFBQ0E7S0FBbUI7SUFFdkIscUJBQ0UsOERBQUNiLDJEQUFZQTtRQUFDc0UsS0FBSy9EO2tCQUFlQyx5QkFBVyw4REFBQ1QseURBQVVBOzs7Ozs7Ozs7O0FBRTVEO0dBdkhNTztLQUFBQTtBQXlITiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz9jZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuaW1wb3J0IHsgRG9nU3Bpbm5lciwgRG9nQ29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1kb2ctbG9hZGVyJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IHJlZlJlbmRlcmVyID0gdXNlUmVmKClcclxuICBjb25zdCB1cmxEb2dHTEIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcnIDogJycpICsgJy9FYXJ0aFJlbWl4LmdsYidcclxuXHJcbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50OiByZW5kZXJlciB9ID0gcmVmUmVuZGVyZXJcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgIHJlZlJlbmRlcmVyLmN1cnJlbnQgPSByZW5kZXJlclxyXG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXHJcblxyXG4gICAgICAvLyAoLTEwMC4wLCAtNTAuMCwgLTMwMC4wKSBmb3IgZWFydGguZ2xiXHJcblxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMzApXHJcbiAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgIC0yMDAwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgICAgLTEwMDAsXHJcbiAgICAgICAgLTIwMDAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxyXG4gICAgICApXHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAvLyA4ICAgLT4gNlxyXG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgMC4xXHJcbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICAwLjAxLFxyXG4gICAgICAgIDUwMDAwMDBcclxuICAgICAgKVxyXG4gICAgICBcclxuICAgICAgLy8gRm9yIGVhcnRoLmdsYlxyXG4gICAgICAvLyBjYW1lcmEuem9vbSA9IDAuMDA5MVxyXG5cclxuICAgICAgY2FtZXJhLnpvb20gPSAwLjA0XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcblxyXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCBNYXRoLlBJKVxyXG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5cclxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXHJcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxyXG5cclxuICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgdXJsRG9nR0xCLCB7XHJcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuXHJcbiAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArMTAuMCA6IGZyYW1lXHJcblxyXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxyXG5cclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gNTAwXHJcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgIH1cclxuICB9LCBbaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2dDb250YWluZXIgcmVmPXtyZWZDb250YWluZXJ9Pntsb2FkaW5nICYmIDxEb2dTcGlubmVyIC8+fTwvRG9nQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxEb2dcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiRG9nU3Bpbm5lciIsIkRvZ0NvbnRhaW5lciIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZlJlbmRlcmVyIiwidXJsRG9nR0xCIiwicHJvY2VzcyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJyZW5kZXJlciIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2VuZSIsIlNjZW5lIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJ6b29tIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});