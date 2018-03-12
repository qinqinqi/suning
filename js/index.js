//banner效果
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pargerbox li");
	let banner=document.querySelector(".lunbo");
	let left=document.querySelector(".btn_left");
	let right=document.querySelector(".btn_right");
	//通过点击实现轮播
	pagers.forEach(function(ele,index){
		ele.onmouseover=function(){
			// 删除、添加类名
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("imgbox1");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("imgbox1");
			n=index;
		}
	});
	// 自动执行代码，让图片自动播放
	var n=0;
	let t=setInterval(move,2000);
	function move(){
		n++;
		if(n==imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("imgbox1");
				pagers[i].classList.remove("active");
			}
			pagers[n].classList.add("active");
			imgs[n].classList.add("imgbox1");
	}
	//鼠标移入轮播停止
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	};

	let flag=true;
	// 左右箭头
	right.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	left.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();//move中n++,效果是n-1
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}

// banner选项卡效果
{
	var li=document.querySelectorAll(".banner_label");
	var inner=document.querySelectorAll(".banner_inner");
	let obj=inner[0]
	li.forEach(function(ele,index){
		ele.onmouseover=function(){
			// for(var i=0;i<inner.length;i++) {
			// 	inner[i].style.display="none";
			// }
			obj.style.display="none";
			inner[index].style.display="block";
			obj=inner[index];
		}
		ele.onmouseleave=function(){
			inner[index].style.display="none";
		}
	})
}

//左侧导航栏开始
{
	let totop=document.querySelector(".totop");
	// let totop=document.querySelector(".right_item_top");
	totop.onclick=function(){
	//普通回到顶部
		// document.documentElement.scrollTop=0;
	// 通过动画回到顶部
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=0;
		},25)
	}

	//onscroll 元素或者浏览器窗口发生滚动的时候触发的事件
	// window.onscroll=function(){
	// 	console.log(document.documentElement.scrollTop)
	// }
	
	let topbar=document.querySelector(".topbar");
	let leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>600){
			topbar.style.display="block";
		}
		else{
			topbar.style.display="none";
		}
		if(st>2450&&st<11050){
			leftbar.style.display="block";
		}
		else{
			leftbar.style.display="none";
		}
	}
//跳楼
	{
	let tips=document.querySelectorAll(".tips");
	let container=document.querySelectorAll(".container");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=container[index].offsetTop;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	});
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<container.length;i++){
			if(st>container[i].offsetTop-50){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}
		}
	})
	}
}

//右侧固定部分返回顶部
{
	let totop=document.querySelector(".right_item_top");
	totop.onclick=function(){
	//普通回到顶部
		// document.documentElement.scrollTop=0;
	// 通过动画回到顶部
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=0;
		},25)

	}
}

// 好货效果
{
	function content(parent){
		let next=parent.querySelector(".best3_tanright");
		let prev=parent.querySelector(".best3_tanleft");
		let inner=parent.querySelector(".best3_inner");
		let item=parent.querySelectorAll(".best3_inner_content");
		let parges=parent.querySelectorAll(".yuan a");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===item.length){
				n=item.length-1;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
			parges[n].classList.add("yuan_active");
			parges[n-1].classList.remove("yuan_active");
			obj=parges[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-390+"px";
			parges[n+1].classList.remove("yuan_active");
			parges[n].classList.add("yuan_active");
			obj=parges[n];
		}
		let obj=parges[0];
		parges.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("yuan_active");
				ele.classList.add("yuan_active");
				obj=ele;
				inner.style.marginLeft=index*-390+"px";
				n=index;
			}
		});
	}
	const contentList=document.querySelectorAll(".best3_content");
	contentList.forEach(function(ele){
		content(ele);
	});
	// content(contentList[0]);
}

//小视频效果
{
	function content(parent){
		let next=parent.querySelector(".small_right");
		let prev=parent.querySelector(".small_left");
		let inner=parent.querySelector(".best3_inner");
		let item=parent.querySelectorAll(".best3_inner_content");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===item.length){
				n=item.length-1;
				return;
			}
			inner.style.marginLeft=n*-394+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-394+"px";
		}
	}
	const contentList=document.querySelectorAll(".smallshow");
	contentList.forEach(function(ele){
		content(ele);
	});
	// content(contentList[0]);
}