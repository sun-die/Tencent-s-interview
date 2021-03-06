 
        //观察者模式
        class Observer {
            constructor() {
                this.message = {};
            }
            // 订阅的方法
            on(type, fn) {
                if (!this.message[type]) {
                    this.message[type] = [];
                }
                this.message[type].push(fn);
            }
            // 发布事件的方法
            emit(type) {
                if (!this.message[type]) { return; }
                this.message[type].forEach(function (item) {
                    item()
                })
            }
        }


        //实例化事件监听对象
        var o = new Observer();
        o.on('click', handleA)
        o.on('click', handleB)
        o.on('abc', handleC)
        o.on('abc', handleD)
        o.emit('abc')
        o.emit('click')

        function handleA() {
            console.log('A事件发生了')
        }
        function handleB() {
            console.log('B事件发生了')
        }
        function handleC() {
            console.log('C事件发生了')
        }
        function handleD() {
            console.log('D事件发生了')
        }
