const item=document.querySelector("#item");
const list=document.querySelector(".list");

item.addEventListener(
    "keyup",
    function(Event){
        if(Event.key=="Enter"){
            addTodo(this.value)
            this.value=""
        }
    }
)
const addTodo=(item)=>{
    const li=document.createElement("li");
    li.innerHTML=`
    ${item}
     <i class='bx bx-x'></i>
    `;
    li.addEventListener(
        "click",
        function add(){
            li.classList.toggle("done")
        }
    )
    li.querySelector("i").addEventListener(
        "click",
        function(){
            li.remove()
        }
    )
    list.appendChild(li)
}