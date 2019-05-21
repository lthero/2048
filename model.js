var model = {
    rows : 4,
    cols : 4,
    arr  : [],
    randData : [2,4],
    score : 0,
    flag : false,
    //表格
    init :function(){
        for($i=0;$i<this.rows;$i++){
            var array = [];
            for($j=0;$j<this.cols;$j++){
                array.push(0);
            }
            this.arr.push(array);
        }
        this.randCreate();     
    },
    //生成随机的行和列的一个坐标 并设置好出现的值
    randCreate :function(){
        while(true){
        var  randRow = (Math.floor(Math.random()*100000))%this.rows;
        var  randCol = (Math.floor(Math.random()*100000))%this.cols;  
        if(!this.arr[randRow][randCol]) break;
        }
        var index = (Math.floor(Math.random()*100000))%(this.randData.length);
        this.arr[randRow][randCol] = this.randData[index];
    },
    setConfig :function(rows,cols){
        (rows==undefined) || (this.rows = rows);
        (cols==undefined) || (this.cols = cols);
    },
    //向左合并
    onleft :function(){
        for(var i=0;i<this.rows;i++){
            for(var k=0;k<this.cols;k++){
                if(this.arr[i][k]){            
                    for(var j=k+1;j<this.cols;j++){
                        if(this.arr[i][j]) break;
                    }
                    if(j>=0 && this.arr[i][k]==this.arr[i][j]){
                        this.flag = true; 
                        this.score += this.arr[i][k];
                        this.arr[i][k]*=2;
                        this.arr[i][j] =0;
                    }
                }
            }        
             //移位
        for(k=0,j=0;k<this.cols;k++){
            if(this.arr[i][k]){
                if(k==j){                   
                    j++;               
                }else{
                this.arr[i][j]=this.arr[i][k];
                this.arr[i][k]=0;
                    j++;
                    this.flag = true;
            }
         }
        }
        
    }
        
    },
    //向右合并 
    onright :function(){
        for(var i=0;i<this.rows;i++){
            for(var k=this.cols-1;k>=0;k--){
                if(this.arr[i][k]){
                    for(var j=k-1;j>=0;j--){
                        if(this.arr[i][j]) break;
                    }
                    if(j>=0 && this.arr[i][k]==this.arr[i][j]){
                        this.flag = true; 
                        this.score += this.arr[i][k];
                        this.arr[i][k]*=2;
                        this.arr[i][j] =0;
                    }
                }
            }        
             //移位
        for(k=this.cols-1,j=this.cols-1;k>=0;k--){
            if(this.arr[i][k]){
                if(k==j){                   
                    j--;               
                }else{
                this.arr[i][j]=this.arr[i][k];
                this.arr[i][k]=0;
                    j--;
                    this.flag = true;
            }
         }
        }
        
    }
},

    //向上
    onup :function(){
        for(var i=0;i<this.cols;i++){
            for(var k=0;k<this.rows-1;k++){
                if(this.arr[k][i]){
                    for(var j=k+1;j<this.rows;j++){
                        if(this.arr[j][i]) break;
                    }
                    if(j<this.rows && this.arr[k][i]==this.arr[j][i]){
                        this.flag = true; 
                        this.score += this.arr[i][k];
                        this.arr[k][i]*=2;
                        this.arr[j][i] =0;
                    }
                }
            }        
             //移位
        for(k=0,j=0;k<this.rows;k++){
            if(this.arr[k][i]){
                if(k==j){                   
                    j++;               
                }else{
                this.arr[j][i]=this.arr[k][i];
                this.arr[k][i]=0;
                    j++;
                    this.flag = true;
            }
         }
        }
        
    }        
    },
    //向下
    ondown:function(){
        for(var i=0;i<this.cols;i++){
            for(var k=this.rows-1; k>=0; k--){
                if(this.arr[k][i]){
                    for(var j=k-1;j>=0;j--){
                        if(this.arr[j][i]) break;
                    }
                    if(j>=0 && this.arr[k][i]==this.arr[j][i]){
                        this.flag = true; 
                        this.score += this.arr[i][k];
                        this.arr[k][i]*=2;
                        this.arr[j][i] =0;
                    }
                }
            }        
             //移位
        for(k=this.rows-1,j=this.rows-1;k>=0;k--){
            if(this.arr[k][i]){
                if(k==j){                   
                    j--;               
                }else{
                this.arr[j][i]=this.arr[k][i];
                this.arr[k][i]=0;
                    j--;
                    this.flag = true;
            }
         }
        }
        
    }  
        
    },
       
}


