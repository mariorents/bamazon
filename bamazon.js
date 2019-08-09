const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "root",
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    // console.log("Working!");
    showItems();

});

function showItems() {
    connection
        .query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            console.log("Store Items.. \n");
            for (var i = 0; i < res.length; i++) {
                console.log("Item #: " + res[i].id + "|" +
                "Product: " + res[i].item_name + "|" +
                "Department: " + res[i].department + "|" +
                "Price: " + "$" + res[i].price + "|" +
                "In Stock: " + res[i].stock);
            }
        })
    customerPurchase(); 
};

function customerPurchase(){
    inquirer.prompt({
        name: "itemSelection",
        type: "input",
        message: "What item number from above would you like to buy?.."
    }).then(function(answer) {
        connection.query("SELECT * FROM products", function (err,res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++){
                let input = res[i];
                if (parseInt(answer) == input.id) {    
                 askQuantity(answer);
                }
                else {
                    customerPurchase();
                }
            }
        })           
    }) 
}; 

function askQuantity() {
        inquirer.prompt({
            name: "quantitySelection",
            type: "input",
            message: "How many would you like to purchase?"
        }).then(function(answer){
            connection.query("SELECT * FROM products", function (err,res) {
                if (err) throw err;
                
                if (parseInt(answer) < res[i].stock) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                              stock: (parseInt(answer) - res[i].stock)
                            },
                            {
                              id: res.stock
                            }
                        ],
                        function(error) {
                            if (error) throw err;
                            console.log("Total will be:" + "$" + parseInt(answer.quantitySelection) * res[i].price);
                            ;
                        }                        
                    )
                }

                else if (parseInt(answer) > res[i].stock) {
                    return ("Insufficient quantity!"); 
                }
            })    
                 
        })
        
};


