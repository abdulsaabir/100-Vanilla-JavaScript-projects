import { getUserSystem } from './common'

const VoicesTTS = ((window) => {

    let audio = new Audio()

	let CONF = {
		lang: 'zh-CN',  // language
		rate: 1,  		// 语速
		volume: 1,  	// 音量
		text: ''
	}

	const browserSupport = () => {
	    return ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window)
	}


	const init = (conf) => {
		if (conf) {
            CONF = Object.assign({}, CONF, conf)
        }
	}

	const speak = (text) => {
		let utterThis = new window.SpeechSynthesisUtterance()
		utterThis.lang = CONF.lang
		utterThis.rate = CONF.rate
		utterThis.volume = CONF.volume
        utterThis.text = text
        if (!browserSupport()) {
            let audio = new Audio()
            audio.src = `http://tts.baidu.com/text2audio?lan=zh&per=0&ie=UTF-8&spd=1&text=${text}`
            audio.play()
        } else {
            window.speechSynthesis.speak(utterThis)
        }
    }

	const stop = () => {
        audio.stop()
    	window.speechSynthesis.cancel()
  	}

	return {
	    init: init,
	    browserSupport: browserSupport,
	    stop: stop,
	    speak: speak
	 }
})(window)

export default VoicesTTS
