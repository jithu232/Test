//
//  RcvDeviceInfo.swift
//  RakBankTest
//
//  Created by Ayaan Jithin on 20/06/21.
//

import Foundation

  import  UIKit

  @objc(RcvDeviceInfo)
  class RcvDeviceInfo: NSObject {
    
  @objc
  static var isOn = false
    @objc
    var deviceId : String?
    var systemVersion = UIDevice.current.systemVersion
    let osName = UIDevice.current.systemName
    let name = UIDevice.current.name
    
  @objc
   func turnOn() {
    RcvDeviceInfo.isOn = true
    print("Bulb is now ON")
   }
    
    @objc
    func getStatus(_ callback: RCTResponseSenderBlock) {
      deviceId = UIDevice.current.identifierForVendor!.uuidString
      callback([NSNull(), deviceId!])
    }

    
    @objc
    static func requiresMainQueueSetup() -> Bool {
      return true
    }
    
  }
