let province_li = document.querySelector(".province");
let seat = document.querySelector(".seat");
let seat_hide = document.querySelector(".seat_hide");
let address = document.querySelector(".address");
// 生成省份
let str1 = "";
for (i = 0; i < 35; i++) {
  str1 += `<li><a href="#">湖南</a></li>`;
}
province_li.innerHTML = str1;
seat.addEventListener("mouseover", function () {
  seat.style.background = "#fff";
  seat_hide.style.display = "block";
});
seat_hide.addEventListener("mouseleave", function () {
  seat.style.background = "";
  seat_hide.style.display = "none";
});

let myjd = document.querySelector(".myjd");
let myjd_li = document.querySelector(".myjd_li");

let str2 = "";
let myjd_1 = document.querySelector(".myjd_1");
for (i = 0; i < 5; i++) {
  str2 += '<li><a href="#">待处理订单</a></li>';
}
myjd_1.innerHTML = str2;

let str3 = "";
let myjd_2 = document.querySelector(".myjd_2");
for (i = 0; i < 4; i++) {
  str3 += '<li><a href="#">我的京豆</a></li>';
}
myjd_2.innerHTML = str3;

let str4 = "";
let myjd_3 = document.querySelector(".myjd_3");
for (i = 0; i < 9; i++) {
  str4 += '<li><a href="#">帮助中心</a></li>';
}
myjd_3.innerHTML = str4;

myjd_li.addEventListener("mouseover", function () {
  myjd.style.display = "block";
});
myjd.addEventListener("mouseleave", function () {
  myjd.style.display = "none";
});

let buy = document.querySelector(".buy");
let str5 = "";
let buy_li = document.querySelector(".buy_li");
for (i = 0; i < 9; i++) {
  str5 += '<li><a href="#">帮助中心</a></li>';
}
buy.innerHTML = str5;

buy_li.addEventListener("mouseover", function () {
  buy.style.display = "block";
});

buy.addEventListener("mouseleave", function () {
  buy.style.display = "none";
});

let serve = document.querySelector(".serve");
let str6 = "";
let serve_li = document.querySelector(".serve_li");
for (i = 0; i < 6; i++) {
  str6 += '<li><a href="#">合作招商</a></li>';
}
serve.innerHTML = str6;

serve_li.addEventListener("mouseover", function () {
  serve.style.display = "block";
});

serve.addEventListener("mouseleave", function () {
  serve.style.display = "none";
});

let search_key = document.querySelector(".search_key");
let str7 = "";
for (i = 0; i < 9; i++) {
  str7 += '<li><a href="#">京东京造</a></li>';
}
search_key.innerHTML = str7;

let header_nav = document.querySelector(".header_nav");
let str8 = "";
for (i = 0; i < 10; i++) {
  str8 += '<li><a href="#">京东超市</a></li>';
}
header_nav.innerHTML = str8;

let nav_left = document.querySelector(".nav_left");

str9 = "";
for (i = 0; i < 18; i++) {
  str9 += `<li><a href="#">手机</a>/<a href="#">运营商</a>/<a href="#">手机</a></li>`;
}
nav_left.innerHTML = str9;

let hide_bottom_left = document.querySelector(".hide_bottom_left");
str10 = "";
for (i = 0; i < 7; i++) {
  str10 += `<li><a href="#">手机通讯></a>`;
}
hide_bottom_left.innerHTML = str10;
let big_left = document.querySelector(".big_left");
let nav_hide = document.querySelector(".nav_hide");
for (i = 0; i < 18; i++) {
  nav_left.children[i].addEventListener("mouseover", function () {
    nav_hide.style.display = "block";
  });
}
big_left.addEventListener("mouseleave", function () {
  nav_hide.style.display = "none";
});

let hide_bottom_right = document.querySelector(".hide_bottom_right");
str11 = "";
for (i = 0; i < 56; i++) {
  str11 += `<li><a href="#">游戏手机</a>`;
}
hide_bottom_right.innerHTML = str11;

// 轮播图模块单独js模块

//nav右模块的轮播图
let nav_right1 = document.querySelector(".nav_right1");
let right1_ltab = document.querySelector(".right1_ltab");
let right1_rtab = document.querySelector(".right1_rtab");
let uls = nav_right1.querySelector("ul");
nav_right1.addEventListener("mouseover", function () {
  right1_ltab.style.display = "block";
  right1_rtab.style.display = "block";
});
nav_right1.addEventListener("mouseleave", function () {
  right1_ltab.style.display = "none";
  right1_rtab.style.display = "none";
});

right1_ltab.addEventListener("click", function () {
  animate(uls, -190);
});

right1_rtab.addEventListener("click", function () {
  animate(uls, 0);
});

let right2_bottom = document.querySelector(".right2_bottom");
let str12 = "";
for (i = 0; i < 12; i++) {
  str12 += `<li><a href="#"><img src="images/card1.png" alt=""></a></br>礼品卡</li>`;
}
right2_bottom.innerHTML = str12;
let img = right2_bottom.querySelectorAll("img");
for (let i = 0; i < 12; i++) {
  right2_bottom.children[i].addEventListener("mouseover", function () {
    img[i].src = "images/card.png";
    this.style.color = "#c81623";
  });
  right2_bottom.children[i].addEventListener("mouseleave", function () {
    img[i].src = "images/card1.png";
    this.style.color = "";
  });
}

// 1. 获取元素
var hour = document.querySelector(".hour"); // 小时的黑色盒子
var minute = document.querySelector(".minute"); // 分钟的黑色盒子
var second = document.querySelector(".second"); // 秒数的黑色盒子
var inputTime = +new Date("2022-11-2 21:00:00"); // 返回的是用户输入时间总的毫秒数
countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白
// 2. 开启定时器
setInterval(countDown, 1000);

function countDown() {
  var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
  var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
  var h = parseInt((times / 60 / 60) % 24); //时
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
  var m = parseInt((times / 60) % 60); // 分
  m = m < 10 ? "0" + m : m;
  minute.innerHTML = m;
  var s = parseInt(times % 60); // 当前的秒
  s = s < 10 ? "0" + s : s;
  second.innerHTML = s;
}

let seckill_middle = document.querySelector(".seckill_middle");
let uls1 = document.querySelector(".uls1");
let seckill_left_tab = document.querySelector(".seckill_left_tab");
let seckill_right_tab = document.querySelector(".seckill_right_tab");
console.log(uls1);
seckill_middle.addEventListener("mouseover", function () {
  seckill_left_tab.style.display = "block";
  seckill_right_tab.style.display = "block";
});
seckill_middle.addEventListener("mouseleave", function () {
  seckill_left_tab.style.display = "none";
  seckill_right_tab.style.display = "none";
});

seckill_left_tab.addEventListener("click", function () {
  animate(uls1, -800);
});

seckill_right_tab.addEventListener("click", function () {
  animate(uls1, 0);
});

// 狂欢热卖模块
let hot_goods = document.querySelector(".hot_goods");
let str13 = "";
for (i = 0; i < 12; i++) {
  str13 += `<li><a herf="#"></a><div class="go"><a herf="#">低至2件5折</a></div><i>美酒狂欢</i></li>`;
}
hot_goods.innerHTML = str13;

let square_goods1 = document.querySelector(".square_goods1");
let uls2 = square_goods1.querySelector("ul");
let str14 = "";
for (i = 0; i < 24; i++) {
  str14 += `<li><a href="#"><h3>智能数码</h3>&nbsp;<p>尽享玩物</p><img src="images/ll.png" alt=""></a></li>`;
}
uls2.innerHTML = str14;

// 返回顶部与吸顶模块
let ceiling = document.querySelector(".ceiling");
let sider_bar = document.querySelector(".sider_bar");
let goBack = document.querySelector(".goBack");
let sider_barTop = sider_bar.offsetTop - 690;
window.addEventListener("scroll", function () {
  let height1 = document.documentElement.scrollTop || document.body.scrollTop;
  if (height1 > 590) {
    ceiling.className = "xdclass ceiling";
    ceiling.style.display = "block";
    sider_bar.style.position = "fixed";
    sider_bar.style.top = sider_barTop + 100 + "px";
    goBack.style.display = "block";
  } else {
    ceiling.className = "";
    ceiling.style.display = "none";
    sider_bar.style.position = "absolute";
    sider_bar.style.top = "670px";
    goBack.style.display = "none";
  }
  goBack.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
