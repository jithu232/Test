package com.rakbanktest;

import android.content.ContentResolver;
import android.content.Context;
import android.provider.Settings;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by ayaan jithin on 21,June,2021
 */
public class RcvDeviceInfo
        extends ReactContextBaseJavaModule {
    private static Boolean isOn = false;
    Context mContext;
    public RcvDeviceInfo(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @ReactMethod
    public void getStatus(
            Callback successCallback) {
        String androidId = Settings.Secure.getString(mContext.getContentResolver(),
                Settings.Secure.ANDROID_ID);
        successCallback.invoke(null, androidId);
    }

    @ReactMethod
    public void turnOn() {
        isOn = true;
        System.out.println("Bulb is turn ON");
    }
    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Bulb is turn OFF");
    }

    @Override
    public String getName() {
        return "Bulb";
    }

}
