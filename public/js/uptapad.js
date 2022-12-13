function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function refreshAd() {
  var uuid = "";
  if (localStorage.getItem("ms_ad_uuid") != null) {
    uuid = localStorage.getItem("ms_ad_uuid");
  } else {
    uuid = guid();
    localStorage.setItem("ms_ad_uuid", uuid);
  }
  var url = "http://testdspapi.valuepowered.com/forward/v1/ad";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("content-type", "application/json");

  var sendData = { deviceId: uuid, width: 320, height: 480 };
  //将用户输入值序列化成字符串
  xhr.send(JSON.stringify(sendData));

  //回调
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      //根据服务器的响应内容格式处理响应结果
      var json = JSON.parse(xhr.responseText);
      if (json.message != "success") {
        return;
      }
      var ad_arr = json.data.ads;

      var uptap_ad = document.getElementById("uptap_ad");
      try {
        uptap_ad.children[0].remove();
      } catch (e) {}

      uptap_ad.style.width = "100%";
      // uptap_ad.style.height = "auto";
      uptap_ad.style.height = "367px";
      uptap_ad.style.fontWeight = "bold";
      uptap_ad.style.whiteSpace = "nowrap";
      uptap_ad.style.overflow = "hidden";
      uptap_ad.style.textOverflow = "ellipsis";

      var a = document.createElement("a");
      var img = document.createElement("img");
      var p = document.createElement("p");
      var div = document.createElement("div");
      a.appendChild(img);
      a.appendChild(p);
      a.appendChild(div);
      img.style.width = "100%";
      p.style.marginTop = "5px";
      div.style.marginTop = "10px";
      div.style.width = "100px";
      div.style.height = "30px";
      div.style.float = "right";
      div.style.fontSize = "10px";
      div.style.borderRadius = "4px;";
      div.style.border = "1px solid";
      div.style.backgroundColor = "inherit";
      div.style.textAlign = "center";
      div.style.lineHeight = "30px";
      uptap_ad.appendChild(a);
      div.innerHTML = "Play Now";

      p.innerHTML = ad_arr[0].title;
      img.src = ad_arr[0].images[0];
      a.href = ad_arr[0].link;
    }
  };
}

refreshAd();

// try {
//   let scripts = document.querySelectorAll(`.ad_`);
//   for (let i of scripts) {
//     // console.log(i);
//     i.parentNode.removeChild(i);
//   }
// } catch (e) {
//   console.error(e);
// }
