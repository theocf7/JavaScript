var fns = [];
        function delay(ms) { // you can set delay manually to see what happens if functions take longer to execute
            ms += new Date().getTime();
            while (new Date() < ms){}
        } 
        var one = function(d) { // first function
            console.log("Function A");
            delay(3000); 
        };
        var two = function(d) { // second function
            console.log("Function B");
            delay(6000);
        };
        var three = function(d) { // third function
            console.log("Function C");
            delay(7500);
        };
        fns.push(one);
        fns.push(two);
        fns.push(three);
        intervals = [1,2,3];
        (function(fns, intervals) {
        var count = 0,
            start, finish, execTime; // helpers
        (function run () {
            start = new Date();
            fns[count](); // function executes here
            finish = new Date();
            execTime = finish - start; // time that function takes to execute
            setTimeout(run, ( (intervals[count] - execTime) > 0) ? intervals[count] - execTime : 0 ); // if function took too long to execute start as soon as you can, otherwise subtract execution time from the interval
            if (count === intervals.length - 1) {
                count = 0;
            } else {
                count++;
            }
        })();
        })(fns, intervals); // passing array of function to execute and array of intervals