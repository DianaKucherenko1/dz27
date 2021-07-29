let callbacks = {
    incCb: function (arg) {
        let a =  'increase callback ' + arg;
        console.log(a);
        return a;
    },


    decCb: function (arg) {
        let a =  'decrease callback ' + arg;
        console.log(a);
        return a;
    },


    getCb: function (arg) {
        let a =  'get callback ' + arg;
        console.log(a);
        return a;
    }
}


function counter(num = 0, obj) {
    let count = num;



    let statisticObject = {
        incCall: 0,
        decCall: 0,
        getCall: 0,
    }


    function increse() {
        statisticObject.incCall++;
        return obj?.incCb ? obj.incCb(++count) :  ++count;
    }


    function decrese() {
        statisticObject.decCall++;
        return obj?.decCb ? obj.incCb(--count) :  --count;
    }


    function get() {
        statisticObject.getCall++;
        return obj?.getCb ? obj.incCb(count) :  count;
    }

    function getStatistic (){
        return  statisticObject;
    }


    function reset (){
        return count = 0;
    }


    return {
        increse,
        decrese, 
        get,
        getStatistic,
        reset,
    }


}


let newCounter = counter(10, callbacks);


newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.decrese();
newCounter.decrese();
newCounter.get();
console.log(newCounter.getStatistic());
