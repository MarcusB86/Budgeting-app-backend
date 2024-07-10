const { nanoid } = require("nanoid")


module.exports = [
    {
        "id": nanoid(4),
        "item_name": "Salary",
        "amount": 3000.00,
        "date": "2024-07-03",
        "from": "Employer",
        "category": "Income"
      },
      {
        "id": nanoid(4),
        "item_name": "Food",
        "amount": 20.00,
        "date": "2024-07-04",
        "from": "Me",
        "category": "Spending"
      },
      {
        "id": nanoid(4),
        "item_name": "PS5",
        "amount": 500.00,
        "date": "2024-07-05",
        "from": "Best Buy",
        "category": "Leisure"
      },
      {
        "id": nanoid(4),
        "item_name": "Sneakers",
        "amount": 150.00,
        "date": "2024-07-06",
        "from": "FootLocker",
        "category": "Splurge"
      }
]