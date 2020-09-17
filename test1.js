 
        // 深拷贝
        var obja = {
            a: 'ssss',
            b: 'sdasda',
            c: ['s', 'sda']
        }

        var obj = JSON.parse(JSON.stringify(obja));
        console.log(obj);

 