// Debit component
import AccountBalance from "./AccountBalance";
import NavigationLinks from "./NavigationLinks"
import "./css/Debit.css"

// We can define the debit component as a function since we don't need to deal with state for this view
function Debit(props) {
    // props = { addDebit: this.addDebit, debits: this.state.debits, accountBalance: this.state.accountBalance } (this refers to App component)
    const debitsListItems = props.debits.map((debit, index) => {
        let key = ""
        if (debit.id === "") { //if the debit object doesn't have an id, make its index the key for mapping
            key = index.toString()
        }
        else {
            key = debit.id
        }
        return ( <li key={key}> {debit.amount} {debit.description} {debit.date.slice(0,10)} </li> );
    });


    //returns the view to render/display
    return(
        <div className="Debits">
            <h1> DEBITS </h1>
            <div className="debitsList"> 
                <ul> {debitsListItems} </ul>
            </div>
            <form onSubmit={props.addDebit}>
                <label htmlFor="description"> Description: </label>
                <input type="text" name="description"/>
                <label htmlFor="amount"> Amount: </label>
                <input type="number" name="amount"/>
                <button type ="submit"> Add Debit </button>
            </form>
            <NavigationLinks forView="Debit"/> {/* the nagivation links */}
            <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    );

}

export default Debit;