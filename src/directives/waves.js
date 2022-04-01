export default {
  mounted(el, binding) {
    el.addEventListener(
      'click',
      (e) => {
        const customOptions = Object.assign({}, binding.value)
        const opts = Object.assign(
          {
            ele: el, // 要显示波纹的元素 挂载元素
            // hit: 扩散类型: 从点击的位置处扩散
            type: 'hit', //  以center 为中心点向外扩展
            color: 'rgba(0, 0, 0, 0.15)', // 波纹显示颜色: 这里是浅灰, 可定制你觉得好看的
          },
          customOptions
        )
        const target = opts.ele
        if (target) {
          target.style.position = 'relative'
          target.style.overflow = 'hidden'
          const rect = target.getBoundingClientRect()
          let ripple = target.querySelector('.waves-ripple')
          if (!ripple) {
            ripple = document.createElement('span')
            ripple.className = 'waves-ripple'
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
            target.appendChild(ripple)
          } else {
            ripple.className = 'waves-ripple'
          }
          switch (opts.type) {
            case 'center':
              ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
              ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
              break
            default:
              ripple.style.top =
                (e.pageY -
                  rect.top -
                  ripple.offsetHeight / 2 -
                  document.documentElement.scrollTop || document.body.scrollTop) + 'px'
              ripple.style.left =
                (e.pageX -
                  rect.left -
                  ripple.offsetWidth / 2 -
                  document.documentElement.scrollLeft || document.body.scrollLeft) + 'px'
          }
          ripple.style.backgroundColor = opts.color
          ripple.className = 'waves-ripple z-active'
          return false
        }
      },
      false
    )
  },
}