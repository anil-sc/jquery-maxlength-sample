import 'jquery';
import 'jquery-maxlength';

(() => {
  $("textarea").maxLength();

  $(document.body)
    .on('click', '#btn-tap', ()=> console.log('tapped'));

})();