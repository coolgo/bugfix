defineClass('TWRequestURLEngine', {
            
    detailWithParam: function(originParamDic) {

            var strParam = originParamDic.objectForKey("param");
            var dicParam =  strParam.objectFromJSONString().mutableCopy();
            dicParam.setObject_forKey("api_version","1");
            self.encryptWithParam(dicParam);
            dicParam.removeObjectForKey("u_encrypt_origin");
            
            var paramDic = require('NSMutableDictionary').alloc().init();
            var rParamStr = dicParam.JSONString();
            paramDic.setObject_forKey("param",rParamStr);
            return paramDic;
    }
})
