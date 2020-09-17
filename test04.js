
        //es6实现插入排序
        function insert_sort(arr) {

            for (let j = 1; j < arr.length; j++) {

                for (let i = j; i > 0; i--) {

                    if (arr[i] < arr[i - 1]) {
                        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                    }
                }
            }
        }
        let arr = [7, 4, 3, 67, 34, 1, 8];
        insert_sort(arr);
