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


function user(){
    this.firstName = 'sonar',
    this.lastName = 'dean'
    return{
        firstName: 'kim',
        lastName: 'min',
        age:32,
        // getFullName: () =>{
        //     console.log(`${this.firstName} ${this.lastName}`)
        getFullName: function() {
            console.log(`${this.firstName} ${this.lastName}`)
            setTimeout(() => {
                console.log(`${this.firstName} ${this.lastName}`)
            }, 1000);
        }
    }
}

const u = user()
console.log(u.getFullName()) 