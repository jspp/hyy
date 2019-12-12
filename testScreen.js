// window.console.log("1323");
toast('--------- 开始运行程序------------------');
sleep(2000);
try {
    toast("打印当前活动的 activity"+currentActivity());
    //请求横屏截图 如果landscape为false, 则表示竖屏截图; true为横屏截图。默认为当前设备的方向
    if (!requestScreenCapture()) {
        toast("--------- 请求截图权限失败 ---------");
        exit();
    };
    sleep(500);
    //截图
    let imgPath = "/sdcard/Pictures/img"+random(10000,20000)+".jpg";
    toast("当前图片的名称："+imgPath); 
    captureScreen(imgPath);
    sleep(1000);
    let img  = images.read(imgPath);
    sleep(1500);
    //获取在点(100, 100)的颜色值
    var color = images.pixel(img, 500, 100);
    //显示该颜色值
    toast(colors.toString(color));
    sleep(1000);
    images.save(img, "/sdcard/Pictures/222.png", "png", 90);
    sleep(1000);
    toast("图片处理完毕");
    app.viewFile(imgPath);
} catch (error) {
    toast(error);
}