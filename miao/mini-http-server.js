

var net = require('net')//net是Node.js中内置的网络模块，通过 require('net') 可以引入该模块，并在代码中使用它提供的功能来创建网络应用。
var fs = require('fs')  //fs是Node.js中内置的文件系统模块（File System）。通过 require('fs') 可以引入该模块，并在代码中使用它提供的功能来进行文件操作。

var server = net.createServer()
port = 9229

var messages = []

server.on('connection', conn => {
  console.log('接收到连接', conn.remoteAddress)
  conn.on('data', data => {
    // console.log(data.toString())
    var recv = data.toString()
    var [header, body] = recv.split('\r\n\r\n')
    var [firstLine, ...headerLines] = header.split('\r\n')
    var headers = parseHeaders(headerLines)
    var [method, url] = firstLine.split(' ')

    var urlObj = new URL(`http://${headers.host}${url}`)
    urlObj.pathname = decodeURIComponent(urlObj.pathname)

    if(method == 'GET' && urlObj.pathname == '/favicon.ico'){
      console.log('图片处')
      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('Content-Type: image/png\r\n')
      conn.write('\r\n')
      conn.write(   fs.readFileSync('./tu.png'))
      conn.end()
      return
    }

    //如果search非空，说明这是一个留言请求
    if(method == 'POST' && urlObj.pathname == '/leave-message'){
      //通过post请求留言时,留言信息是放在请求体里的
      //所以直接通过请求体构造一个URLSearchParams对象
      console.log('第二处')
      var params = new URLSearchParams(body)
      var name = params.get('name')
      var message = params.get('message')
      messages.push({name,message})

      conn.write('HTTP/1.1 302 Found\r\n')
      conn.write('Location: /\r\n')
      conn.end()
      return
    }

    if(method == 'GET' && urlObj.pathname == '/'){
      console.log('HTML页面处');
      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('Content-Type: text/html; charset=UTF-8\r\n')
      conn.write(`Date: ${new Date()}\r\n`)
      conn.write('\r\n')
      conn.write(`
        <!doctype html>
        <form method="POST" action="/leave-message">
          Name:<br>
          <input type='text' name='name'><br>
          Message:<br>
          <input type='text' name='message'><br>
          <button>submit</button>
        </form>
        ${
          messages.map(msg => {
            return `<fieldset>
              <legend>${msg.name}</legend>
              <div>${msg.message}</div>
            </fieldset>`
          }).join('\n')
        }
      `)
      conn.end()
      return
    }
    conn.write('HTTP/1.1 404 Not Found\r\n')
    conn.write('Content-Type: text/html; charset=UTF-8\r\n')
    conn.write('\r\n')
    conn.write('页面未找到111')
    conn.end()
  })

  conn.on('error', () => {
  })
})

server.listen(port, () => {
  console.log('服务器正在',port,'端口侦听')
})

function parseHeaders(headers){
  var obj = {}
  for(var h of headers){
    var [k,v] = h.split(': ')
    obj[k.toLowerCase()] = v
  }
  return obj
}
