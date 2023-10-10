// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function EmployeeTable() {
//   const [employeeData, setEmployeeData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/employeeData')
//       .then((response) => {
//         setEmployeeData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Employee Details</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employeeData.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.Id}</td>
//               <td>{employee.FirstName}</td>
//               <td>{employee.LastName}</td>
//               <td>{employee.Address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeTable;

// import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';

// class EmployeeTable extends Component {
//    state = {
//     employeeData: [],
//    };

//   componentDidMount() {
//     axios.get('http://localhost:3001/employeeData')
//       .then((response) => {
//         this.setState({ employeeData:response.data});
//       })

//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       })
//   }

// render() {
//    const { employeeData } = this.state;
//     return (
//         <div>
//             <h2>Employee Data:</h2>
//                 <ul>    
//                     {employeeData.map ((employeedata) => (
//                         <li>{employeedata.title}</li>
//                     ))}
//                 </ul>
//         </div>
//         );
//     }
// }

// export default EmployeeTable;


import React from 'react';
import JsonData from './employee.json';

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr> 
					<td>{info.id}</td>
					<td>{info.FName}</td>
					<td>{info.LName}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Id</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>City</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
