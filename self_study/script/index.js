$(function () {
    $("#create").on("submit", function(event) {
        event.preventDefault();
        let value = $(this).find("input").val()

        $("#todo-list").append('<li>' +
        '<span>' + value + '</span>' +
        '<button type="button" class = "complete">완료</button>' +
        '<button type="button" class = "remove">삭제</button>' +
        '</li>'
        )

        $(this).trigger("reset")
    })
    $("body").on("click", ".complete", function(event) {
        $(this).parent("li").addClass("completed")
    })
    $("body").on("click", ".remove", function(event) {
        $(this).parent("li").remove()
    })
})