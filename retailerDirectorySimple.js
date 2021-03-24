const bankData = [
    {
        bankName: "DNB",
        accounts: [
            { accountHolder: "Raul Cepeda-Vestly", accountType: "Salary Account", balance: -10 },
            { accountHolder: "Andy Olsen", accountType: "Vacation Account",  balance: 100000 },
        ],
        transactions: [
            { transactionType: "Salary" , ammount: 10 },
            { transactionType: "Bill" , ammount: -10 },
        ],
        department: [
            { city: "Oslo", country: "Norway" },
            { city: "Bergen", country: "Norway" },
        ]
    },
    {
        bankName: "First Bank of Raul",
        accounts: [
            { accountHolder: "Raul Cepeda-Vestly", accountType: "Savings Account", balance: 10000000 },
            { accountHolder: "Andy Olsen", accountType: "Rainyday Account",  balance: 100000000 },
        ],
        transactions: [
            { transactionType: "Gift from rich Prince" , ammount: 1 },
            { transactionType: "Money sent to Prince i totally trust" , ammount: -10000 },
        ],
        department: [
            { city: "Kinshasa", country: "Democratic Republic of Congo" },
            { city: "Abuja", country: "Nigeria" },          
        ]
    },
]	

function Bank({bankName, accounts, transactions, department }) {

    return (
        <fieldset id={bankName}>        
            <legend>{bankName}</legend>            
            <h2>Bank Accounts</h2>
            <ul>
                {accounts.map((account, i) => 
                    <li key={i}>Holder: {account.accountHolder}, Account Type: {account.accountType}, Balance: {account.balance} GBP </li>
                )}
            </ul>

            <h2>Transactions</h2>
            <ul>
                {transactions.map((transactions, i) =>
                    <li key={i}> info: {transactions.transactionType.toUpperCase()}, Ammount: {transactions.ammount} GBP </li>
                )}
            </ul>
            
            <h2>Branch Office</h2>
            <ul>
                {department.map((department, i) =>
                    <li key={i}>{department.city}, {department.country.toUpperCase()}</li>
                )}
            </ul>
        </fieldset>
    )
}
const BankDirectory = ({title, bank}) =>
    <div>
        <header>
            <h1>{title}</h1>
        </header>
        <div>
            {bank.map((bank, i) =>
                <Bank key={i} {...bank} />
            )}
        </div>
    </div>

ReactDOM.render(
    <BankDirectory bank={bankData} title="Super Awesome BankApp" />,
    document.getElementById("bank-app")
)
