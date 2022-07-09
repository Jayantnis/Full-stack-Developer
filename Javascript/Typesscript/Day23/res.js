let x = [{
    "overrideDefaultWithdrawnInterests": [{
        "defaultWithDrawnInterestRate": 20,
        "investmentId": "3ad31d3d-5c48-4cf8-aa88-8d500c478012",
        "trancheNumber": 3,

        "monthlyEarningWithdrawls": {
            "monthlyEarningWithdrawls": [{
                "year": 2021,
                "monthlyEarningWithdrawlPercentages": [{
                        "month": 12,
                        // "compoundingType": "Percent",
                        "compoundingValue": 20
                    },
                    {
                        "month": 5,
                        // "compoundingType": "Percent",
                        "compoundingValue": 10
                    },
                    {
                        "month": 7,
                        // "compoundingType": "Percent",
                        "compoundingValue": 14
                    },
                    {
                        "month": 8,
                        // "compoundingType": "Percent",
                        "compoundingValue": 80
                    }
                ]
            }, ]

        }
    }]
}]
console.log(x[0].overrideDefaultWithdrawnInterests[0].monthlyEarningWithdrawls.monthlyEarningWithdrawls[0].year);

console.log(x[0].overrideDefaultWithdrawnInterests[0].monthlyEarningWithdrawls.monthlyEarningWithdrawls[0].monthlyEarningWithdrawlPercentages[0].month);

console.log(x[0].overrideDefaultWithdrawnInterests[0].monthlyEarningWithdrawls.monthlyEarningWithdrawls[0].monthlyEarningWithdrawlPercentages[0].compoundingValue);