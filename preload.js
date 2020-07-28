// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
const {remote, app, webFrame} = require('electron');
    const {Menu, MenuItem} = remote;
 
    //右键餐单
    var view=0.75;
    const menu = new Menu();
    menu.append(new MenuItem({
        label: '放大',
        click:function ()  {
          view=view+0.25;
         webFrame.setZoomLevel(view);
        }
    }));
    menu.append(new MenuItem({type: 'separator'}));//分割线
    menu.append(new MenuItem({
      label: '缩小',
      click:function ()  {
        view=view-0.25;
       webFrame.setZoomLevel(view);
      }
  }));

    menu.append(new MenuItem({type: 'separator'}));//分割线
    menu.append(new MenuItem({
      label: '最小化',
      click:function ()  {
      // window.close();
      remote.getCurrentWindow().minimize();
      }
  }));
  menu.append(new MenuItem({type: 'separator'}));//分割线
  menu.append(new MenuItem({
    label: '关闭',
    click:function ()  {
    window.close();
    // remote.getCurrentWindow().minimize();
    }
}));
  
  window.addEventListener('contextmenu',function(e){
   
    getMousePos();
  });

  function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    // alert('x: ' + x + '\ny: ' + y);
    if(x<500||x>1500)
    {
 e.preventDefault();
    menu.popup();
    }









    // return { 'x': x, 'y': y };
}

// jar包运行
// let cmdStr = 'java -jar ./resources/extra/owell_api-0.0.1-SNAPSHOT.jar';
// const childProcess=require('child_process');
// childProcess.exec('start /min cmd.exe /K  '+cmdStr); 




