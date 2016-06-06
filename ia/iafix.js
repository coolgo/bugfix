 
defineClass('AppDelegate', {
	umengTrack:function(){
		MobClick.startWithAppkey_reportPolicy_channelId(kUMeng_KEY,REALTIME,null)
		Bugtags.setInvocationEvent(BTGInvocationEventNone)
	}
})