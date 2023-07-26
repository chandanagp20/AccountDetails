import { onValue, ref, set, get } from "firebase/database";
import database from "../Services/firebase-util";


function creditcardaccount(cardNumber, cardHolder, expMonth, expYear, cvv) {
    let query = ref(database, `card/${cardNumber}`);

    set(query, {
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        expMonth: expMonth,
        expYear: expYear,
        cvv: cvv,
    });
}


export { creditcardaccount }