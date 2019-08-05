var express = require("express");
var app = express();

app.get("/test", (req, res, next) => {
  res.json(["A", "B", "C"]);
});

app.get("/testJson", (req, res, next) => {
  res.json({
    name: "a",
    des: "description"
  });
});

app.get("/store/zones", (req, res, next) => {
  res.json({
    result: ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E", "Zone F"]
  });
});

const retrivalList = [
  {
    itemNumber: "S100",
    category: "Scissors",
    Zone: "Zone B",
    QtyNeeded: 60
  },
  {
    itemNumber: "S101",
    category: "Tape",
    Zone: "Zone A",
    QtyNeeded: 80
  },
  {
    itemNumber: "S102",
    category: "Tape",
    Zone: "Zone B",
    QtyNeeded: 60
  },
  {
    itemNumber: "S103",
    category: "Scissors",
    Zone: "Zone A",
    QtyNeeded: 80
  },
  {
    itemNumber: "S104",
    category: "Tacks",
    Zone: "Zone B",
    QtyNeeded: 60
  },
  {
    itemNumber: "S105",
    category: "Pens",
    Zone: "Zone A",
    QtyNeeded: 80
  },
  {
    itemNumber: "S106",
    category: "Pens",
    Zone: "Zone B",
    QtyNeeded: 60
  },
  {
    itemNumber: "S107",
    category: "Tacks",
    Zone: "Zone A",
    QtyNeeded: 80
  }
];

app.get("/store/retrival-list", (req, res, next) => {
  res.json({
    result: retrivalList
  });
});

app.get("/store/retrival-list/zone/:zone", (req, res, next) => {
  const zone = req.params.zone;

  res.json({
    result: retrivalList.filter(x => x.Zone === zone)
  });
});

const disbursementList = [
  {
    disbursementId: "D001",
    department: "Registrar",
    doneBy: "Jordan",
    Status: "Completed",
    collectionPoint: "Science Department",
    deptRep: "Ms Helen Ho",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S001",
        description: "Stoch Tape",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      },
      {
        category: "Tape",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      },
      {
        category: "Pen",
        itemNumber: "S003",
        description: "Black Pen",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      }
    ],
  },
  {
    disbursementId: "D002",
    department: "English",
    doneBy: "Kapil",
    Status: "Completed",
    collectionPoint: "Science Department",
    deptRep: "Ms Helen Ho",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      }
    ],
  },
  {
    disbursementId: "D003",
    department: "Registrar",
    doneBy: "Jordan",
    Status: "Completed",
    collectionPoint: "Science Department",
    deptRep: "Ms Helen Ho",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      }
    ],
  },
  {
    disbursementId: "D004",
    department: "English",
    doneBy: "Kapil",
    Status: "Completed",
    collectionPoint: "Science Department",
    deptRep: "Ms Helen Ho",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qtyIssue: 50,
      }
    ],
  }
];

app.get("/store/disbursement-list", (req, res, next) => {
  res.json({
    result: disbursementList
  });
});

app.get("/store/disbursement/Id/:disbursementId", (req, res, next) => {
  const disbursementId = req.params.disbursementId;

  res.json({
    result: disbursementList.find(x => x.disbursementId === disbursementId)
  });
});

const stocktakeList = [
  {
    stocktakeId: "D001",
    doneBy: "Jordan",
    status: "Completed",
    month: "January",
    deptRep: "Ms Helen Ho",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S001",
        description: "Stoch Tape",
        unitOfMeasure: "Each",
        qty: 50,
      },
      {
        category: "Tape",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qty: 50,
      },
      {
        category: "Pen",
        itemNumber: "S003",
        description: "Black Pen",
        unitOfMeasure: "Each",
        qty: 50,
      }
    ],
  },
  {
    stocktakeId: "D002",
    doneBy: "Kapil",
    status: "Completed",
    month: "Feburary",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qty: 50,
      }
    ],
  },
  {
    stocktakeId: "D003",
    doneBy: "Jordan",
    status: "Completed",
    month: "March",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qty: 50,
      }
    ],
  },
  {
    stocktakeId: "D004",
    department: "English",
    doneBy: "Kapil",
    Status: "Completed",
    month: "April",
    itemList: [
      {
        category: "Scissors",
        itemNumber: "S002",
        description: "Stoch Dispensor",
        unitOfMeasure: "Each",
        qty: 50,
      }
    ],
  }
];

app.get("/store/check-history", (req, res, next) => {
  res.json({
    result: stocktakeList
  })
});

app.get("/store/check-history/Id/:stocktakeId", (req, res, next) => {
  const stocktakeId = req.params.stocktakeId;

  res.json({
    result: stocktakeList.find(x => x.stocktakeId === stocktakeId)
  });
});

module.exports = app;
