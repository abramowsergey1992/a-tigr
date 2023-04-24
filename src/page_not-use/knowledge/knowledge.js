$(function () {
    if ($('.knowledge-page').length){
        autosize($('#addQuestion'));

        function QuestCoutryRender() {
            let $questions = $('#question-countries');
            let country = $('#knowledge-country').val()
            let search = $('#knowledge-search').val()
            let minSimbol = 3
            $questions.html('')
            if ((search.length<=minSimbol) && (country.length==0)) {
                $('#question-countries-lib .question-country').each(function () {
                    $questions.append($(this).clone())
                })
            } else {
                $('#question-countries-lib .question-country').each(function () {
                    let visible = false;

                    let $clone = $(this).clone();
                    if ((country.length != 0) && (country==$(this).data('city'))) {
                        visible = true;
                    }
                    if (country.length ==0 || ((country == $(this).data('city')) && country.length)) { 
                        
                        if (search.length > minSimbol) {
                            $clone.html($clone.html().replace(new RegExp(`${search}`, 'ig'), (full, a1) => {
                                visible = true;
                                return `<span class="_selected">${full}</span>`
                            }))
                        }

                        if (visible) {
                            if ($clone.find('._selected').length) {
                                $clone.find('._selected').each(function () {
                                    if ($(this).closest('.question-country__block').length) {
                                        $(this).closest('.question-country__block').find('.question-country__block-head').addClass('_open')
                                        $(this).closest('.question-country__block').find('.question-country__block-body').css('display','block')
                                        $(this).closest('.question-country').find('.question-country__head').addClass('_open')
                                        $(this).closest('.question-country').find('.question-country__body').css('display','block')
                                    }
                                })
                            }
                            $questions.append($clone)
                        }
                    }
                })
            }
            if ($('#question-countries .question-country').length == 0) {
                $questions.append('<p class="_empty-text">'+$('#question-countries').data('empty')+'</p>')
            }
        }
        $('.header__add-question').click(function (e) { 
            e.preventDefault();
            var body = $("html, body");
            body.stop().animate({scrollTop:$('#add-question').offset().top}, 500, 'swing', function() { 
            });
        })
        $('.add-question__btn-back').click(function () {
            $('.add-question').removeClass('_msg-show')
            $('.add-question__container-msg').fadeOut();
            $('#addQuestion').val('')
        })
        let valid = $('#add-question-form').validate(
                {
                errorPlacement: function (error, element) {
                    
                },
                submitHandler: function (form) {
                    $.ajax({
                        url: $(form).attr('action'),
                        data: $(form).serialize(),
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        context: document.body,
                        success: function () {
                            $('.add-question').addClass('_msg-show')
                        $('.add-question__container-msg.success').fadeIn();
                        
                        }, error: function () {
                            $('.add-question').addClass('_msg-show')
                            $('.add-question__container-msg.error').fadeIn();
                        }
                    });
                }
            });
        QuestCoutryRender()
        $('#knowledge-country').select2({
            minimumResultsForSearch: -1
        });

        $(document).on('click', '.question-country__head', function() {
            $(this).toggleClass('_open');
            $(this).closest('.question-country').find('.question-country__body').stop().slideToggle();
        })
        $(document).on('click', '.question-country__block-head', function() {
            $(this).toggleClass('_open');
            $(this).closest('.question-country__block').find('.question-country__block-body').stop().slideToggle();
        })
        $('#knowledge-country').change(function () {
            QuestCoutryRender()
        })
        $('#knowledge-search').keyup(function () {
            QuestCoutryRender()
        })
    }
});