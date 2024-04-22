const {createApp} = Vue;

createApp ( {
data() {
     return {
        
        newTodo: {
            text:"",
            done: false,
        },
todoList: [
     {
        text: "Quarterly Newsletter",
        done: true,
    },
    {
        text: "Mobile app luaunch",
        done: false,
    },
     {
        text: "Interview Jhon H",
        done: false,
    },
    {
        text: " Summit update to mobile storefronts",
        done: true,
    },
     {
        text: "Shedule meeting with Alexr",
        done: false,
    },
     {
        text: "Homepage refresh",
        done: true,
    },
     {
        text: "Onboard new Sales team members",
        done: false,
    },
   {
        text: "Review editorial calendar",
        done: true,
    },
]

    }
 },
 created() {
   
   },
methods: {
    addTodo: function() {
        console.log("addTodo"); 
        if (this.newTodo.text !== "") {
            
            this.todoList.push({...this.newTodo})
            this.newTodo.text="",
            this.newTodo.done= false;
        }
        },
    inverDone: function(index) {
            console.log(index);
            this.todoList[index].done = !this.todoList[index].done;
             //console.log(this.todoList[index].done);
            },       
    removeTodo: function (index) {
            this.todoList.splice(index, 0);
            this.newTodo = { text: "", done: false };
                console.log(this.newTodo,  this.todoList.splice(index, 1));
            },
}
  }).mount("#app")