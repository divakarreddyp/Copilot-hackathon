//write code to add,delete,update property values in javscript object

//create object

let allTransactions=[{uniqueid:'I10',email: 'diva@gmail.com', source: 'food', amount: '215', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'I4',email: 'somu@gmail.com', source: 'groceries', amount: '440', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'I0',email: 'gita@gmail.com', source: 'food', amount: '320', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'}                
,{uniqueid:'E1',email: 'rama@gmail.com', paidfor: 'food', amount: '115', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E2',email: 'somu@gmail.com', paidfor: 'groceries', amount: '500', timestamp: 'Wat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E3',email: 'gita@gmail.com', paidfor: 'food', amount: '360', timestamp: 'Tat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E4',email: 'rama@gmail.com', paidfor: 'clothes', amount: '215', timestamp: 'Fat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E5',email: 'somu@gmail.com', paidfor: 'groceries', amount: '500', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E6',email: 'gita@gmail.com', paidfor: 'movies', amount: '280', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E7',email: 'rama@gmail.com', paidfor: 'food', amount: '365', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E8',email: 'somu@gmail.com', paidfor: 'groceries', amount: '600', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'},
{uniqueid:'E9',email: 'gita@gmail.com', paidfor: 'food', amount: '120', timestamp: 'Sat Jun 24 2023 12:35:21 GMT+0530 (India Standard Time)'}                
];
//adding Income function
function addIncome(){
    let timestamp=new Date();
    incomeemail = document.getElementById("incemail").value;
    incomesource = document.getElementById("incsource").value;
    incomeamount = document.getElementById("incamount").value;
    allTransactions.push({uniqueid:'I'+allTransactions.length,email:incomeemail,source:incomesource,amount:incomeamount,timestamp:timestamp});
    document.getElementById('errorMessage').innerHTML='Income added successfully';
}

//adding expense function
function addExpense(){
    let timestamp=new Date();
    expenseemail = document.getElementById("expemail").value;
    expensepaidfor = document.getElementById("exppaidfor").value;
    expenseamount = document.getElementById("expamount").value;
    allTransactions.push({uniqueid:'E'+allTransactions.length,email:expenseemail,paidfor:expensepaidfor,amount:expenseamount,timestamp:timestamp});
    document.getElementById('errorMessage').innerHTML='Expense added successfully';
}

//editing expneses function


//delete expenses function



function fetchExpenses(){
    
    allTransactions.map((eachItem)=>{
            if(eachItem.uniqueid[0]=='E'){
            let [uid,email,paidfor,amount,timestamp]=[eachItem.uniqueid,eachItem.email,eachItem.paidfor,eachItem.amount,eachItem.timestamp];
            document.getElementById('fetchedExpenses').innerHTML+=`<tr><td>${uid}</td> <td>${email}</td> <td>${paidfor}</td> <td>${amount}</td> <td>${timestamp}</td></tr><br />`;
        }
    })
}

function hideExpenses(){
    document.getElementById('fetchedExpenses').innerHTML='';
}
function hideIncome(){
    document.getElementById('fetchedIncome').innerHTML='';
}
function fetchIncome(){
    
    hideExpenses();
    document.getElementById('fetchedExpenses').innerHTML='';
    allTransactions.map((eachItem)=>{
        if(eachItem.uniqueid[0]=='I'){
            let [uid,email,source,amount,timestamp]=[eachItem.uniqueid,eachItem.email,eachItem.source,eachItem.amount,eachItem.timestamp];
            document.getElementById('fetchedIncome').innerHTML+=`<tr><td>${uid}</td> <td>${email}</td> <td>${source}</td> <td>${amount}</td> <td>${timestamp}</td></tr><br />`;
        }
    }
    )
}
//check whether the email is present in the array of objects
function deleteItem(){
    let uid=document.getElementById('deluid').value;
    if(uid[0]=='E'){
        let index=allTransactions.findIndex((eachItem)=>eachItem.uniqueid==uid);
        if(index==-1){
            document.getElementById('deleteMessage').innerHTML='Item not found';
        }
        else{
            delete allTransactions[index];
            document.getElementById('deleteMessage').innerHTML='Item deleted successfully';
        }
    }
    if(uid[0]=='I'){
        let index=allTransactions.findIndex((eachItem)=>eachItem.uniqueid==uid);
        if(index==-1){
            document.getElementById('deleteMessage').innerHTML='Item not found';
        }
        else{
            delete allTransactions[index];
            document.getElementById('deleteMessage').innerHTML='Item deleted successfully';
        }
    }
}

//convert timestamp in allTransactions to date format and sort by date
function sortbyDate(){
    let sortedList=allTransactions.map((eachItem)=>{
        eachItem.timestamp=new Date(eachItem.timestamp);
    })
    allTransactions.sort((a,b)=>a.timestamp-b.timestamp);
    allTransactions.map((eachItem)=>{
        document.getElementById('alltransactions').innerHTML+=`<tr><td>${eachItem.uniqueid}</td> <td>${eachItem.email}</td> <td>${eachItem.source}</td> <td>${eachItem.paidfor}</td> <td>${eachItem.amount}</td> <td>${eachItem.timestamp}</td></tr><br />`;
    })
}
function hideAllTranasactions(){
    document.getElementById('alltransactions').innerHTML='';
}

var totalIncome=0;
var totalExpense=0;
//write code to get arrays which includes all the transactions of a particular email
function fetchUserTransactions(){
    let email=document.getElementById('useremail').value;
    let filteredList=allTransactions.filter((eachItem)=>eachItem.email==email);
    filteredList.map((eachItem)=>{
        if(eachItem.uniqueid[0]=='I'){
            totalIncome=totalIncome+parseInt(eachItem.amount);
        }
        if(eachItem.uniqueid[0]=='E'){
            totalExpense=totalExpense+parseInt(eachItem.amount);
        }
        console.log(totalIncome,totalExpense)
        document.getElementById('filteredTransactions').innerHTML+=`<tr><td>${eachItem.uniqueid}</td> <td>${eachItem.email}</td> <td>${eachItem.source}</td> <td>${eachItem.paidfor}</td> <td>${eachItem.amount}</td> <td>${eachItem.timestamp}</td></tr><br />`;
        
    })
    document.getElementById('results').innerHTML="Total Income = "+totalIncome+"<br />Total Expenses = "+totalExpense+"<br />Net Amount = "+(totalIncome-totalExpense);
}
function hideUserTransactions(){
    document.getElementById('filteredTransactions').innerHTML='';
}