## MVC_CRUD_REST
### About the Poject
The project MVC_CRUD_REST is a simple Grocery shopping list.
This porject was made to uses MVC(Model View Controller), REST(Representational State Transfer)Api that uses Aungular and Node to make requests to a MySQL database. 

The web application allows the user to Create,Update,Delete items on to the shopping list.

### Required software

- MySQL Workbench
- Node.js
- Typescript
- Terminal(For eample Powershell, command prompt or Linux Terminal)


###### Made with:

- Node.js version v14.15.4 
- MySQL Workbench version 8.0.23
- Typescript Version 4.7.3  

### Running MVC_CRUD_REST:
Set up MySQL Workbench and run the database schema located "DatabaseSchema.txt".
    
Change *"backend/config/config.json"* and change the password to your **MySQL password**.
file located here [config.json](backend/config/config.json)
```json
    {
        "host": "localhost",
        "user": "root",
        "database": "groceries",
        "password": "<password>"
    }
```

In an terminal put the following in:

- cd backend
- npm install
- npm start
- cd ../frontend
- npm install
- npm start*
- Open your broswer and go to ***"http://localhost:4200/"***

