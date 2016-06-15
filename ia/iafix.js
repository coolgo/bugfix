require('JYDeviceMainViewController, JYKitchenViewController');
    defineClass('JYKitchenViewController', {
        clickDummySoyabeanDevice: function() {
            var VirtualTypeK5 = 8;
            self.fetchDeviceCookbookWithProduceType(VirtualTypeK5);
            var weakSelf = __weak(self);
            dispatch_after(1.0, function(){
            var controller = JYDeviceMainViewController.alloc().init();
            controller.setVirtualType(VirtualTypeK5);
            weakSelf.navigationController().pushViewController_animated(controller, true);
            });
        },
    })


 require('JYDeviceMainViewController, JYKitchenViewController');
      defineClass('JYKitchenViewController', {
          clickDummyCookerDevice: function() {
          var VirtualTypeCooker = 11266;
          self.fetchDeviceCookbookWithProduceType(VirtualTypeCooker);
          var weakSelf = __weak(self);
          dispatch_after(1.0, function(){
            var controller = JYDeviceMainViewController.alloc().init();
            controller.setVirtualType(VirtualTypeCooker);
            weakSelf.navigationController().pushViewController_animated(controller, true);
          });
        },
    })