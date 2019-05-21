var view = {

	eleWidth: 128,
	eleHeight: 128,
	context: null,
	colors : {
		"0" : '#CDC1B5',
		"2" : '#EFE5DB',
		"4" : '#EEE1C9',
		'8' : '#F3B178',
		'16': '#F59562',
		'32' : '#F77C5E',
		'64' : '#F75E3A',
		'128' : '#EDCF72',
		'256' : '#EDCD60',
		'512' : '#EDC950',
		'1024' : '#EDC53E'
	},
	// 画出画布
	init: function(id){
		if(!window.canvas){
			alert("浏览器不支持画布，请更换浏览器");
			return false;
		}
		var game = document.querySelector('#game');
		var canvas = document.querySelector('#'+id);
	       // var score = document.querySelector('#score p');
		// // 设置一下宽度和高度
		var width = model.cols* this.eleWidth + 30;
		var height = model.rows * this.eleHeight + 30;
		canvas.width = width;
		canvas.height = height;
		game.style.width = width + 20 +'px';

		this.context = canvas.getContext('2d');
		
	},
	render: function(){
		// 根据数据进行绘制画布
		this.context.clearRect(0,0,this.eleWidth*model.cols,model.rows*this.eleHeight);
		this.context.font = '60px Arial '; // 字体颜色没有设置
		var dt ;
		for(var j=0;j<model.rows;j++){
			for(var i = 0;i<model.cols;i++){
				this.context.fillStyle = '';
				dt = model.arr[j][i];
				this.context.fillStyle = this.chooseColor(dt); 
				this.context.fillRect(i*this.eleWidth+i*10,j*this.eleHeight+j*10,this.eleWidth,this.eleHeight);
				this.context.fillStyle = '#fff';
				this.context.textAlign="center";
				this.context.textBaseline = "middle";
			    dt && this.context.fillText(dt,i*this.eleWidth+this.eleWidth/2 + i*10,j*this.eleHeight+this.eleHeight/2 + j*10);
			}
		}
		var score = document.querySelector('#score p');
		score.innerText = model.score;
	},
	chooseColor : function(value){
		return this.colors[''+value];
	}

};