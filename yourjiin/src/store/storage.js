export const storage = {
    fetch() {
        const arr = [];

        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //넣을 때는 JSON stringify , 빼낼 때는 JSON parse
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //this.todoItems.push(localStorage.key(i));
                    //scope이 달라져 this로 접근이 안되기 때문에 arr로 새로 담아 return 해준다
                }
            }
        }
        return arr;
    }
};