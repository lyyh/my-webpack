(function (modules) {
    window.webpackJsonp = function (chunkIds, moreModules, executeModules) {
        // moreModules['a'](module, module.exports, 0)
        // 遍历 moreModules
        var moduleId
        for(moduleId in moreModules){
            if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){
                modules[moduleId] = moreModules[moduleId]
            }
        }
        // 执行入口函数
        if(executeModules){
            for(var i = 0;i < executeModules.length;i++){
                var result = __webpack__require__(executeModules[i])
            }
        }
        return result
    }

    // 定义__webpack__require__ 函数
    __webpack__require__ = function(moduleId){
        
    }
})([])