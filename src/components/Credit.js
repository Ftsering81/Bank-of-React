// Credit component
import AccountBalance from "./AccountBalance";
import NavigationLinks from "./NavigationLinks";

function Credit (props) {

    // props = { addCredit: this.addCredit, credits: this.state.credits, accountBalance: this.state.accountBalance } (this refers to App component)
    let creditListItems = props.credits.map((credit, index) => {
        let key = ""
        if (credit.id === "") { //if the creedit object doesn't have an id, make its index the key for mapping
            key = index.toString()
        }
        else {
            key = credit.id
        }
        return (<li key={key}> {credit.description} {credit.amount} {credit.date}</li>)
    })
    return (
        <div className="Credits">
            <img src="bank.jpeg" alt="bank"/>
            <h1> CREDITS </h1>
            <ul> {creditListItems} </ul>
            <form onSubmit={props.addCredit}>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description"/>
                <label htmlFor="amount">Amount: </label>
                <input type="text" name="amount"/>
                <button type="submit"> Add Credit </button>
            </form>
            <NavigationLinks forView="Credit" /> {/* the nagivation links */}
            <AccountBalance accountBalance={props.accountBalance} />
        </div>

    );
}

export default Credit;
