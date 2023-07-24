import { onValue, ref, set, get } from "firebase/database";
import database from "../Services/firebase-util";

let getStudentData = () => {

    let query = ref(database, 'StudentDetails/');
    get(query).then((snapshot) => {
        const data = snapshot.val();
        console.log(data);

    });


}

let writeStudentData = () => {

    let query = ref(database, 'StudentDetails/104');

    set(query, {
        name: 'Gs',
        dob: 23,
    });
}

function addNewAccount(accountNumber,accountHolderName,ifscCode,cvv,branch) {
    let query = ref(database, `Accounts/${accountNumber}`);

    set(query, {
       accountNumber:accountNumber,
       accountHolderName:accountHolderName,
       ifscCode:ifscCode,
       cvv:cvv,
       branch:branch,
    });
}

function creditcardaccount(cardNumber,cardHolder,expMonth,expYear,cvv) {
    let query = ref(database, `card/${cardNumber}`);

    set(query, {
        cardNumber:cardNumber,
        cardHolder:cardHolder,
        expMonth:expMonth,
        expYear:expYear,
        cvv:cvv,
    });
}


export { getStudentData, writeStudentData,addNewAccount,creditcardaccount }