import React, {Component} from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  render(){
    return (
    <ul className="transactions">{this.props.transactions.slice().map(user => (
      <Transaction key={user.id} {...user}/>
    ))}
    </ul>
  )
}
}

export default TransactionsList;