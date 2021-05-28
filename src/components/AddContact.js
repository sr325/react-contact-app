import React from 'react'

class AddContact extends React.Component {
    // react state, not hook 
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault(); //do not want page to refresh

        if (this.state.name === "" || this.state.email === "") {
            alert("Please input data")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="ui main">
                <h2> Add Contact </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field" >
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field" >
                        <label>Email</label>
                        <input type="text" name="email" placeholder="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;