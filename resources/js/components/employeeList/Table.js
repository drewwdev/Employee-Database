import axios from "axios";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import TableRow from "./TableRow";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    // Life cycle method
    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        let self = this;
        axios.get("/get/employees/list").then(function (response) {
            self.setState({
                employees: response.data,
            });
        });
    };

    render() {
        return (
            <div className="container">
                <ToastContainer />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="100px">
                                            #
                                        </th>
                                        <th scope="col" width="100px">
                                            Name
                                        </th>
                                        <th scope="col" width="100px">
                                            Salary
                                        </th>
                                        <th scope="col" width="100px">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employees.map(
                                        (employee, index) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    data={employee}
                                                />
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
