const input = document.getElementById('input'),
      buttonadd = document.getElementById('add'),
      list = document.getElementById('lists');
class Todo {
    constructor(){
        this.data = []
    }
    
    show(){
        list.innerHTML = "";
        for (let i = 0; i < this.data.length; i++) {
            this.data[i].completed = true;
            const {text, date, completed} = this.data[i];
            list.innerHTML += `<li>${i + 1}. ${text} | ${date} | ${completed}
            <button onclick="todo.remove(${i})">delete</button> <button onclick="todo.edit(${i})
            ">edit</button><button onclick="todo.complete(${i})">✔️</button></li>` 
        }
    }

    setTodo(value){
        this.data.push(
            {
                text: value,
                date: new Date(),
                completed: false,
            }
        )
        this.show()
    }
    remove(i) {
        this.data.splice(i,1);
        this.show();
      }
    edit(index) {
        list.innerHTML = "";
        for (let i = 0; i < this.data.length; i++) {
            const {text, date, completed } = this.data[i];
          list.innerHTML += "";
          if (i === index) {
            list.innerHTML += `<input type="text" id="inputEdit" value=${text}><span onclick=todo.done(${i})>Done</span>`;
          } else {
            list.innerHTML += `<li>${text} | ${date} | ${completed}  <button onclick="todo.remove(${i})">delete</button> <button onclick="todo.edit(${i})">edit</button></li>`;
          }
        }
      }
    done(index) {
        const inputEdit = document.getElementById("inputEdit"); 
        this.data[index].text=inputEdit.value;
        this.show();
      }   
};

let todo = new Todo;

buttonadd.addEventListener('click', () => todo.setTodo(input.value));



