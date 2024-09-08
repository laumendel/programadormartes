$('textarea').keyup(function () {
    var characterCount = $(this).val().length;
    current = $("#current");
    theCount = $("#the-count");
    current.text(characterCount);
}
)