# flowbite
  - URL : [https://flowbite.com/](https://flowbite.com/)
  - CDN : 
  ``` html
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
  ```
## INDEX
- [◎ Modal](#modal)


### ◎ Modal {#modal}
- [API modal](https://daisyui.com/components/modal/)
#### default modal (script)
``` html
  <!-- The button to open modal -->
  <label for="my-modal-4" class="btn">open modal</label>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    </label>
  </label>
  <script>                 
    var modal_4 = document.querySelector('#my-modal-4');
    modal_4.addEventListener("change", function($e){
      console.log($e.target.checked);
    })
    // 모달 open  : modal_4.checked = true;
    // 모달 close : modal_4.checked = false;
  </script>
```

#### modal custom (script)
``` html  
  <style>
    .modal.show { opacity: 1; visibility: visible; pointer-events:auto;}
  </style>

  <button onClick="popupMenu(true)" class="btn">open modal 커스텀</button>
  <div id="custom-modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">title</h3>
      <p class="py-4">You've been ne year of subscription to use Wikipedia for free!</p>
      <div class="modal-action">
        <button onClick="popupMenu(false)" class="btn">닫기</button>
      </div>
    </div>
  </div>

  <script>
    var modalEl = document.getElementById('custom-modal');
    function popupMenu($b){
      //modalEl.classList.toggle('show');
      if($b){
        modalEl.classList.add('show');
      }else{
        modalEl.classList.remove('show');
      }
    }
  </script>
```

