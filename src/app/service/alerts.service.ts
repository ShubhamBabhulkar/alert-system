import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  getAlertsData = () => {
    return [
      {
      custName: 'John',
      dob: '28-12-1990',
      custAge: 30,
      isActive: true,
      custAddress: {
        firstLine: '17/3, New Avenue',
        secondLine: 'Park Street',
        landmark: '',
        city: 'Dallas',
        State: 'Texas',
        country: 'USA'
      },
      custAccounts: [
          {
            accountId: 111,
            amount: 100,
            currency: 'USD',
            bills: [
              {
                billId: 1122,
                billDt: '21-07-2018',
                amount: 50
              },
              {
                billId: 1123,
                billDt: '21-07-2018',
                amount: 50
          }
        ]
      },
      {
        accountId: 112,
        amount: 400,
        currency: 'USD',
        bills: [
          {
            billId: 1124,
            billDt: '21-07-2018',
            amount: 150
          },
          {
            billId: 1125,
            billDt: '21-07-2018',
            amount: 250
      }
    ]
  }]
  },
  {
    custName: 'John Dev',
    dob: '28-12-1990',
    custAge: 30,
    isActive: true,
    custAddress: {
      firstLine: '17/3, New Avenue',
      secondLine: 'Park Street',
      landmark: 'Water tank',
      city: 'Dallas',
      State: 'Texas',
      country: 'USA'
    },
    custAccounts: [
        {
          accountId: 113,
          amount: 100,
          currency: 'USD',
          bills: [
            {
              billId: 1122,
              billDt: '21-07-2018',
              amount: 50
            },
            {
              billId: 1123,
              billDt: '21-07-2018',
              amount: 50
        }
      ]
    },
    {
      accountId: 114,
      amount: 400,
      currency: 'USD',
      bills: [
        {
          billId: 1115,
          billDt: '21-07-2018',
          amount: 150
        },
        {
          billId: 1126,
          billDt: '21-07-2018',
          amount: 250
    }
  ]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
},
{
  accountId: 114,
  amount: 400,
  currency: 'USD',
  bills: [
    {
      billId: 1115,
      billDt: '21-07-2018',
      amount: 150
    },
    {
      billId: 1126,
      billDt: '21-07-2018',
      amount: 250
}
]
}]
},
{
  custName: 'Foo Bar',
  dob: '22-12-1995',
  custAge: 24,
  isActive: true,
  custAddress: {
    firstLine: '767, New Nandanwan',
    secondLine: 'Ram mandir',
    landmark: '',
    city: 'Nagpur',
    State: 'Maharashtra',
    country: 'India'
  },
  custAccounts: [
      {
        accountId: 17,
        amount: 1230,
        currency: 'INR',
        bills: [
          {
            billId: 1022,
            billDt: '21-04-2018',
            amount: 550
          },
          {
            billId: 1123,
            billDt: '21-06-2018',
            amount: 150
      }
    ]
  },
  {
    accountId: 18,
    amount: 400,
    currency: 'USD',
    bills: [
      {
        billId: 1124,
        billDt: '21-07-2018',
        amount: 150
      },
      {
        billId: 1125,
        billDt: '21-07-2018',
        amount: 250
  }
]
}]
}
];
  }
}
