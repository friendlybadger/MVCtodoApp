const db = require('../util/database')

module.exports = class TodoList {
    constructor(id, item){
        this.id = id;
        this.item = item;
    }
    // display all todo items
    static fetchAll(){
        return db.execute('SELECT * FROM todo');
        
    }
    // insert into database
   static post(item){
    return db.execute('INSERT INTO todo (item) VALUES (?)', [item]);
   }
//    update into databse
   static update(id, item){
    return db.execute('UPDATE todo SET item=? WHERE id=? ', [ item,id]);
   }
//    delete from database
   static delete(id){
    return db.execute('DELETE from todo WHERE id=? ', [ id]);
   }
};