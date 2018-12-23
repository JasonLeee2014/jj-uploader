jj-uploader is designed for single file update usage in your Vue App.

### Usage

1. install jj-uploader via npm

   `npm i jj-uploader`

2. import it into your view

   ```javascript
   <script>
   import JjUploader from 'jj-uploader'
   
   export default {
     components:{
       'jj-uploader':JjUploader,
     },
   }
   </script>
   ```

3. Use it

   jj-uploader designed for simple single file upload usage.

   | Props   | Type   | Description                                             |
   | ------- | ------ | ------------------------------------------------------- |
   | url     | String | the file upload url aka action in traditional from tag. |
   | timeout | Number | timeout in upload process, default is 0.                |

   | Event   | Description                                                 |
   | ------- | ----------------------------------------------------------- |
   | success | when file successfully updated, this event will be trigged. |
   | error   | when error occurred, this event will be trigged.            |

### Sample Uasge

```html
<jj-uploader :timeout="10000" url="http://localhost:8080/upload/" @error="errorOccured" @success="success"/>
```

```js
methods:{
    errorOccured(event){
      console.log(event)
    },
    success(event){
      console.log(event)
    }
  }
```

### Demo

