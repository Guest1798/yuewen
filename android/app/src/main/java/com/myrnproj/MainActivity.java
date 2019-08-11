package com.myrnproj;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    public long firstTime=0;
    @Override
    protected String getMainComponentName() {
        return "myrnproj";
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  
        super.onCreate(savedInstanceState);
    }
    // @Override
    // public boolean onKeyDown(int keyCode,KeyEvent event){
    //     long secondTime =System.currentTimeMillis();
    //     if(keyCode==KeyEvent.KEYCODE_BACK){
    //         if(secondTime-firstTime<2000){
    //             System.exit(0);
    //         }
    //         else{
    //             Toast.makeText(getApplicationContext(),'再按一次退出应用程序',Toast.LENGTH_SHORT).show();
    //             firstTime=System.currentTimeMillis();
    //         }
    //         return true;
    //     }
    //     return super.onKeyDown(keyCode,event);
    // }
}
