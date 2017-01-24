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

MIT.
