
// $(function () { 

//     if ($('#vacancy-form').length) {
//         $('#vacancy-form').validate(
//             {
//                 errorPlacement: function (error, element) {
//                     if($(element).attr('type')!="checkbox"){
//                         element.after(error);
//                     }
//             },
//             submitHandler: function (form) {
//                 $.ajax({
//                     url: $(form).attr('action'),
//                     data: $(form).serialize(),
//                     method: 'POST',
//                     headers: {
//                         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//                     },
//                     context: document.body,
//                     success: function () {
//                         Fancybox.close()
//                         Fancybox.show([{ src: "#thanks", type: "inline" }]);
                     
//                     }, error: function () {
//                         Fancybox.close()
//                         Fancybox.show([{ src: "#error", type: "inline" }]);
//                     }
//                 });
//             }
//         });
//     }
// })