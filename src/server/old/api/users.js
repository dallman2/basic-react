const EMPLOYEES = [
  {
    id: 1,
    name: "John",
    directReports: [
      {
        id: 2,
        name: "Emily",
        directReports: []
      },
      {
        id: 3,
        name: "Jason",
        directReports: [
          { id: 5, name: "Bill", directReports: [] },
          { id: 6, name: "Joe", directReports: [] }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Sarah",
    directReports: [{ id: 7, name: "Brad", directReports: [] }]
  },
  { id: 8, name: "Josh", directReports: [] }
];

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(EMPLOYEES);
    }, 100);
  });
}

export default getUsers;
