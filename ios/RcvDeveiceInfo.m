//
//  RcvDeveiceInfo.m
//  RakBankTest
//
//  Created by Ayaan Jithin on 20/06/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RcvDeviceInfo, NSObject)
//RCT_EXTERN_METHOD(turnOn)

RCT_EXTERN_METHOD(getStatus: (RCTResponseSenderBlock)callback)

@end
