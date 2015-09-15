

defineClass('JYKilluaKitchenViewController', {
            
            viewWillAppear: function(animated) {
            
            self.super().viewWillAppear(animated);
            self.navigationController().setNavigationBarHidden(NO);
          
            self.shouldRequest = YES;
            self.tableView().triggerPullToRefresh();
               abort();      
            
            }
})