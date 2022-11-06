var Event = (function () {
    var list = {};
    var listen;
    var trigger;
    var remove;

    listen = function(key, fn) {
        if (!list[key]) {
            list[key] = [];
        }

        list[key].push(fn);
    };

    trigger = function() {
        // 取出对应的key
        var key = Array.prototype.shift.call(arguments);

        var fns = list[key];
        if (!fns || fns.length === 0) {
            return
        }

        for (let i  = 0, fn; fn = fns[i++];) {
            // fn.apply(this, arguments);
            fn(...arguments)
        }
    };

    remove = function (key, fn) {
        var fns = list[key];

        if (!fns) {
            return false;
        }

        if (!fn) {
            fn && (fns.length = 0)
        } else {
            for(var i = fns.length - 1; i > 0; i--) {
                var _fn = fnd[i];
                if (_fn == fn) {
                    fns.splice(i, 1);
                }
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})()

export default Event