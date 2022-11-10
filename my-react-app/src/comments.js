// const handleChangeOperator = (e) => {
//     const chosenOperator = e.target.value;
//     setOperator(chosenOperator)
//     console.log(operator);
//   }  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newSalary = total;
  //   setTotal(newSalary);
  //   setTotal('');
  // }
  // const handleChange = (e) => {
  //   const newSalary = e.target.value;
  //   setTotal(newSalary);
  // }

//   const handleSelection = e => {
//     console.log(setOperation({value: e.target.value}));
//     setOperation({value: e.target.value});
//   }

//   const handleSubmitOperation = e => {
//     e.preventDefault();
//     const selectedOperation = operation;
//     console.log(selectedOperation);
//     setOperation(selectedOperation);
//     setOperation('');
//   }

// const [operation, setOperation] = useState({valour : 0, typeOperator : ''});

// // const [operator, setOperator] = useState({typeOperator : ''})
// // const [balance, setBalance] = useState({});

// const handleChange = (e) => {
//   const {name, value} = e.target;
//   console.log('this is name', name, 'this is value', value)
//   setOperation(prevNumber => ({...prevNumber, [name]: value}));
//   console.log(operation);
// }; 


// export const Operation = ({operation, handleChange}) => {
//   const {valour, typeOperator} = operation;
//   return (
//     <div>
//       <form>
//         <select value={typeOperator} defaultValue="Select fruit" onChange={handleChange}>
//           <option name='typeOperator' value='income'>income</option>
//           <option name='typeOperator' value='outcome'>outcome</option>
//           <option name='typeOperator' value='select'>Select an Option</option>
//         </select>
//         <label htmlFor='header__form'></label>
//         <input id='header__form' name='valour' onChange={handleChange} value={valour} placeholder='Type your income'></input>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

    // if (valour.operator === 'outcome'){
    //   const subtractBalance = balance.valour - valour.amount;
    //   setBalance(prevBal => ({...prevBal, subtractBalance}));
    //   setBalance(subtractBalance);
    //   console.log('sou outcome', balance, valour, subtractBalance);
    //   return;
    // }
    // setBalance(...balance, (balance + valour));


    // <div className=''>
    //   <form className='form' onSubmit={handleSubmit}>
    //     <div className='form__select-amount'>
    //       <select defaultValue={operator} onChange={handleSelectChange}>
    //         <option value='income'>income</option>
    //         <option value='outcome'>outcome</option>
    //         <option value='select'>Select an Option</option>
    //       </select>
    //       <label htmlFor='header__form'></label>
    //       <input id='header__form' name='amount' onChange={handleChangeInput} value={amount} placeholder='Type your income'></input>
    //     </div>
    //     <div className='form__bottom'>
    //       <input id='header__description' name='description' onChange={handleChangeInput} value={description} placeholder='Description'></input>
    //     <div className='form__button'>
    //       <button type='submit'>Submit</button>
    //     </div>
    //     </div>
    //   </form>
    // </div>




// * {
//   box-sizing: border-box;
//   font-family: 'Arial', sans-serif;
// }

// .main {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
// }

// .header {
//   text-align: center;
//   font-size: 1em;
// }

// .form {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 8px;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   border: 1px solid rgb(250, 163, 166);
// }

// .form__select-amount {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 100%;
// }

// .form__bottom {
//   display: flex;
//   /* flex-direction: row; */
//   justify-content: space-around;
//   width: 100%;
// }

// .form__button {
//   display: flex;
//   /* flex-direction: row; */
//   justify-content: center;
//   width: 100%;
// }
// .section__transactions {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// }

  // const joinOperatorAmount = (arr) => {
  //   const newArr = arr.map(item => item.operator === '-' ? Number(Math.abs(item.amount) * -1)
  //     : Number(Math.abs(item.amount)));
  //     console.log('the newarr is', newArr);
  // }