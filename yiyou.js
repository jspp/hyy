// 是否开启了无障碍模式
auto();
// 保持屏幕常亮
device.keepScreenOn();
toast('---亦游脚本---');
sleep(1000);
try {
     // 通过名称启动APP
     app.launchApp("亦游");
     var mainPageActivity = "com.yiyou.top.demon.ui.activity.other.WarnMainActivity";
     waitForActivity(mainPageActivity);
     toastLog(" 主页面准备就绪  ");
     // 30秒一次  收贝壳
     var getShellTimer = setInterval(function(){
        if(currentActivity()!=mainPageActivity){
            toastLog('不是主界面，无法执行 当前活动页面：'+currentActivity());
            return;
        }
        if(id("iv_seaf_get").exists()){ 
            var getButton = id("iv_seaf_get").findOne();
            toastLog(' [1] 有收去按钮 准备收取');
            getButton.click();
            sleep(1000);
            if(id("btn_seaf_gain_confirm").exists()){
                id("btn_seaf_gain_confirm").findOne().click();
            }
            return;
        }
        sleep(1000);
        if(id("iv_seafood_add").exists()){ // 没有养殖任何东西 
            toastLog(' [2] 没有养殖任何东西  准备 养殖');
            id("iv_seafood_add").findOne().click();
            sleep(300);
            // 点击养殖 小龙虾
            bounds(285,1733,540,2062).clickable().click();
        }else{ // 等待收取 （已经在养殖了）
            toastLog(' [3] 等待收取 ');
            return;
        }
     },3000);
} catch (error) {
    toast(error);
}

