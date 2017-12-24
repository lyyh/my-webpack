(function (modules) {
    var installedModules = {}
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

    /**
     * moduleId 模块ID
     * installedModules 缓存对象 installedModules[moduleId]
     */
    __webpack__require__ = function(moduleId){
        // 若缓存存在，则返回exports
        if(installedModules[moduleId]){
            return installedModules[moduleId].exports
        }

        // 存放缓存对象到 module 中
        // module {i: moduleId,l: false,exports: {}}
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false, // false 模块未加载
            exports: {}
        }

        modules[moduleId].call(module.exports,module,module.exports,__webpack__require__)
        // flag 表明已经加载了
        module.l = true

        return module.exports
    }
})([])