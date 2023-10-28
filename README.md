# VR Game 

- WebXR
- Nodejs

## Setup and Start

Install dependency
```
npm install
```

Start service
```
node server.js
```

## Debug
It's based on Nodejs, we need to see debug console. Refer to https://developer.oculus.com/documentation/web/browser-remote-debugging/

```
adb devices
adb shell ip route

adb tcpip 5555
adb connect *<ipaddress>*:5555
```

Go to ``chrome://inspect/#devices``