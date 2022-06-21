# BCash
BCash is an app to help you keep track of who you owe and who owes you money in an easy way. Split your tabs and more.


* Routes for develpment:

login: router.post/api/users/ 

crear usuario: router.post/api/users/ 

crear nueva lista: router.post/api/lists/

ruta deudas: router.get/api/meDeben/

ruta debido: router.get/api/debo/

ruta balance: router.get/api/balance/ 

listas: UUID, Title

list content: pamentID, Desc, amount, creditorId,debtorId,isPayed

user model: userId, Username, password, email, firstName, lastName

UserLists: not needed