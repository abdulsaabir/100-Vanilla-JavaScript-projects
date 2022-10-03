## SpeechSynthesisUtterance
SpeechSynthesisUtterance 是一个实现浏览器语音播报功能的插件，目前实现实时语音播报，语言配置，声音调节，语速调节

### 下载

npm install speechsynthesisutterance  /  yarn add speechsynthesisutterance

### 引入

import VoicesTTS from 'speechsynthesisutterance'

### api

VoicesTTS.init({config})  // 初始化    

config is a Object    

* lang: 'zh-CN'  // 语言环境默认中文
* rate: '1'      // 语速默认正常速度 范围 0.1 - 10
* volume: '1'    // 音量大小默认1 范围 0.1 - 1 

#### e.g
```
VoicesTTS.init({
	'lang': 'en-US',
    'volume': 0.5,
    'rate': 0.8
})
```

VoicesTTS.speak(text)  //播报语音
text is string
#### e.g

```
VoicesTTS.speak('你好，世界')
```

VoicesTTS.stop()  //立即停止语音不需要参数

后续会增加更多配置