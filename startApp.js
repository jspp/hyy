toast('------ 启动APP-------');
sleep(1000);
try {
     // 通过名称启动APP
     app.launchApp("亦游");

     // 通过包名称启动
     //app.launch("com.yiyou.top.demon");
    
     window.console.log(currentActivity());

} catch (error) {
    toast(error);
}
toast('------ end -----');
