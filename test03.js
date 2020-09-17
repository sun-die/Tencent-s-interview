      //es6 实现数组去重
        var arr1 = [1, 4, '1', 1, 2, 2, 2, 2, 4, "4", 's', 'd', 'd'];
        //第一种set+...
        var newarr01 = [...new set(arr1)];
        console.log(newarr01);
         
        //第二种
         var  newarr02 =Array.from(new  set(arr1));
        console.log(newarr02);
        
      
        