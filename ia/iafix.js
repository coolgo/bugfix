require('MFSideMenuPanModeNone')

defineClass('JYKilluaKitchenViewController', {
            
            viewWillAppear: function(animated) {
            
            self.super().viewWillAppear(animated);
            self.navigationController().setNavigationBarHidden(NO);
            
            self.menuContainerViewController().panMode=MFSideMenuPanModeNone;
            self.shouldRequest = YES;
            self.tableView().triggerPullToRefresh();
            
            }
})