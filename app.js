if (-1 || 0) alert('first');             // (true || false)=> true alert=> first
if (-1 && 0) alert('second');            // (true && false) => false => not alert
if (null || (-1 && 1)) alert('third');   //(false || (true && true)) => alert => third
