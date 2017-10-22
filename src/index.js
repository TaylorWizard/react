// let success = (text) => {
//   console.log(text)
// }
//
// let fail = (error) => {
//   console.log(error)
// }
//
// let request = new XMLHttpRequest()
//
// let ajaxRequest = () => {
//   request.onreadystatechange = () =>{
//     if (request.readyState === 4) {
//       if (request.status === 200) {
//         return success(request.responseText)
//       } else {
//         return fail(request.status)
//       }
//     } else {
//       //request is ongoing
//     }
//   }
//   request.open('GET', 'http://localhost:3000/test')
//   request.send()
// }
//
// window.onload = () => {
//   let timer = setTimeout(() => {
//     clearTimeout(timer)
//     console.log('time out!!!')
//   },0)
//   ajaxRequest()
// }

//custom event
//step1 : 创建自定义事件对象
//step:2: 为元素对这个事件添加事件监听
//step:3: trigger,触发这个自定义事件
// let counter = 0
// let elem = document.getElementById('customEvent')
// let myselfEvent = new CustomEvent('tripleClick', {
//   detail: {
//     message: 'user double click event!!!'
//   }
// })
// elem.addEventListener('tripleClick', function(e) {
//   console.log('tripleClick', e.detail.message)
// }, false)
//
// elem.onclick = () => {
//   setTimeout(() => {
//     counter = 0
//   }, 500)
//   if (++counter == 3) {
//     elem.dispatchEvent(myselfEvent)
//   }
// }
//what is different? the extra one line code for creating custom event
// let counter = 0
// let e = document.createEvent('Event')
// e.initEvent('tripleClick', true, true)
// let elem = document.getElementById('customEvent')
// elem.addEventListener('tripleClick', (e) => {
//   console.log(`tripleClick:`, e)
// }, false)
//
// elem.onclick = () => {
//   let timer = setTimeout(() => {
//     counter = 0
//   }, 500)
//   if (++counter == 3) {
//     elem.dispatchEvent(e)
//   }
// }





