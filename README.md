# eFor
`For` statement emulation to work with large arrays without `event loop` blocking.
## How to use:

```
import eFor from 'utils/eFor.js';

let arr = [1,2,3];

eFor(arr, function (item) {
   // do something with item
});
```

p.s.: i'm tired to type `for (i = 0; i < arr.length; i++) {var item = arr[i]}`

MIT.
