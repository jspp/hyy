toast('---- activity----');
sleep(1000);
try {
     // 通过名称启动APP
     app.launchApp("亦游");
     var mainPageActivity = "com.yiyou.top.demon.ui.activity.other.WarnMainActivity";
     waitForActivity(mainPageActivity);
 
} catch (error) {
    toast(error);
}
toastLog("---- end ----");
