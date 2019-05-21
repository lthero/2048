var controller = {
	direct : "right",
	voice : null,
	// 初始化
	init: function(id){
		this.voice = document.querySelector('#voice');
		model.init();
		view.init(id);
		view.render();
		this.bindEvents();
	},
	bindEvents: function(){
		var that = this;

		document.addEventListener('keydown',function(ent){
			var event = ent || window.event;
			// 得到按下的键值
			var keycode = event.keyCode;
			console.log(keycode);
			// switch 判断
			switch(keycode){
				case 37:
				case 65:
					that.direct = "left";
					break;
				case 38:
				case 87:
					that.direct = "up";
					break;
				case 39:
				case 68:
					that.direct = "right";
					break;
				case 40:
				case 83:
					that.direct = "down";
					break;
			}
			that.deal();
			
		});
		document.querySelector('#restart').addEventListener('click',function(){
			location.reload();
		});

	},
	deal: function(){
		switch(this.direct){
			case 'left':
				model.onleft();
				break;
			case 'up':
				model.onup();
				break;
			case 'right':
				model.onright();
				break;
			case 'down':
				model.ondown();
				break;
		}
		voice.play();
		if(model.flag){
			model.randCreate();
			model.flag = false;
		}

		view.render();
	}
};


window.onload = function(){
	controller.init('canvas');
}