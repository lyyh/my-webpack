(function (modules) {
    window.webpackJsonp = function (chunkIds, moreModules, executeModules) {
        // 遍历 moreModules
        var moduleId
        for (moduleId in moreModules) {
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                // 模块函数赋值给 modules[moduleId] ??
                modules[moduleId] = moreModules[moduleId]
            }
        }
        // 执行入口函数
        if (executeModules) {
            for (var i = 0; i < executeModules.length; i++) {
                var result = __webpack__require__(executeModules[i])
            }
        }
        return result
    }

    var installedModules = {}
    // 定义__webpack__require__ 函数
    __webpack__require__ = function (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        var module = installedModules[moduleId] = {
            l: false, // 模块是否加载 false 未加载
            id: moduleId,
            exports: {}
        }

        var result
        // this == module.exports ??
        // 导出 module 与 module.exports 
        modules[moduleId].call(module.exports, module, module.exports, __webpack__require__)
        module.l = true
        return module.exports
    }
})([])