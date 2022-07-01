// ==========================
//          SIMPLE
// ==========================

const users = [
    {
        name: 'Babur',
        age: 25,
        salar: {
            amount: 1000,
            type: `$`,
        },
    },
    {
        name: 'Shoaziz',
        age: 18,
        salary: {
            amount: 200,
            tax: 15,
            type: `$`,
        },
    },
];

const user = users.find(function (user) {
    return user.name === `Shoaziz`;
});

console.log(getProfit(user.salary.amount, user.salary.tax));

const getProfit = (profit, tax) => {
    return profit - tax;
};

// ---
function minus(num1, num2) {
    return num1 - num2;
}

// ==========================
//           FACTORY
// ==========================

function user({ name, salary }) {
    const name = name;
    const age = 22;
    const salary = {
        amount: 700,
        type: `$`,
    };

    const tax = {
        amount: tax,
        type: `$`,
    };

    const getProfit = () => {
        return salary.amount - tax.amount;
    };

    function salom() {
        return `Assalomu ALaykum, mening ismim ${userName}`;
    }

    return {
        name,
        age,
        salary,
        tax,
        getProfit,
        skills: [],
        salom,
    };
}

// ==========================
//         CONSTRUCTOR
// ==========================

function User({ name }) {
    // this = {}

    this.name = name;
    this.age = 22;
    this.salary = {
        amount: 1100,
        type: `$`,
    };

    this.tax = {
        amount: 100,
        type: `$`,
    };

    this.getProfit = () => {
        return salary.amount - tax.amount;
    };

    this.salom = () => {
        return `Assalomu ALaykum, mening ismim ${this.name}`;
    };

    // return this;
}

const user1 = new User({ name: 'Babur' }).salom();
