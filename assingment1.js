
// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
Human_Resource> db.employee.insertMany([
    ...     {
    ...       "firstName": "John",
    ...       "lastName": "Doe",
    ...       "salary": 25000,
    ...       "department": "HR",
    ...       "lastCompany": "X",
    ...       "lastSalary": "10000",
    ...       "overallExp": 2,
    ...       "contactInfo": "1234567890",
    ...       "yearGrad": 2016,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Rohan",
    ...       "lastName": "Jame",
    ...       "salary": 30000,
    ...       "department": "Technical",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 1,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "Doe",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "20000",
    ...       "overallExp": 1,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "ECE"
    ...     },
    ...     {
    ...       "firstName": "Sao",
    ...       "lastName": "Avika",
    ...       "salary": 30000,
    ...       "department": "Sales",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "roh",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "EEE"
    ...     },
    ...     {
    ...       "firstName": "Rohan",
    ...       "lastName": "Jame",
    ...       "salary": 30000,
    ...       "department": "Technical",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 1,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "Doe",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "20000",
    ...       "overallExp": 1,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "ECE"
    ...     },
    ...     {
    ...       "firstName": "Sao",
    ...       "lastName": "Avika",
    ...       "salary": 30000,
    ...       "department": "Sales",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "Doe",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "EEE"
    ...     },
    ...     {
    ...       "firstName": "Rohan",
    ...       "lastName": "Jame",
    ...       "salary": 30000,
    ...       "department": "Technical",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 1,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "Doe",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "20000",
    ...       "overallExp": 1,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "ECE"
    ...     },
    ...     {
    ...       "firstName": "Sao",
    ...       "lastName": "Avika",
    ...       "salary": 30000,
    ...       "department": "Sales",
    ...       "lastCompany": "Y",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "1234567860",
    ...       "yearGrad": 2015,
    ...       "gradStream": "CSE"
    ...     },
    ...     {
    ...       "firstName": "Jame",
    ...       "lastName": "Doe",
    ...       "salary": 35000,
    ...       "department": "Accounts",
    ...       "lastCompany": "Z",
    ...       "lastSalary": "15000",
    ...       "overallExp": 2,
    ...       "contactInfo": "123567890",
    ...       "yearGrad": 2019,
    ...       "gradStream": "EEE"
    ...     }
    ...   ])
    {
      acknowledged: true,
      insertedIds: {
        '0': ObjectId("638050a8903ba5309b549a10"),
        '1': ObjectId("638050a8903ba5309b549a11"),
        '2': ObjectId("638050a8903ba5309b549a12"),
        '3': ObjectId("638050a8903ba5309b549a13"),
        '4': ObjectId("638050a8903ba5309b549a14"),
        '5': ObjectId("638050a8903ba5309b549a15"),
        '6': ObjectId("638050a8903ba5309b549a16"),
        '7': ObjectId("638050a8903ba5309b549a17"),
        '8': ObjectId("638050a8903ba5309b549a18"),
        '9': ObjectId("638050a8903ba5309b549a19"),
        '10': ObjectId("638050a8903ba5309b549a1a"),
        '11': ObjectId("638050a8903ba5309b549a1b"),
        '12': ObjectId("638050a8903ba5309b549a1c")
      }
    }



// Query the collection ""employee"" and list all the documents
Human_Resource> db.employee.find({}).pretty()
[
  {
    _id: ObjectId("638050a8903ba5309b549a10"),
    firstName: 'John',
    lastName: 'Doe',
    salary: 25000,
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: 2,
    contactInfo: '1234567890',
    yearGrad: 2016,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a11"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: 30000,
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 1,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a12"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: 1,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a13"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: 30000,
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a14"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a15"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: 30000,
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 1,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a16"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: 1,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a17"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: 30000,
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a18"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a19"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: 30000,
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 1,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a1a"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: 1,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a1b"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: 30000,
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '1234567860',
    yearGrad: 2015,
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638050a8903ba5309b549a1c"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: 35000,
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: 2,
    contactInfo: '123567890',
    yearGrad: 2019,
    gradStream: 'EEE'
  }
]




// Query the collection ""employee"" and list the employees who are having salary more than 30000
Human_Resource> db.employee.find({
    ... "salary":{$gt:30000}
    ... })
    [
      {
        _id: ObjectId("638050a8903ba5309b549a12"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: 1,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a14"),
        firstName: 'Jame',
        lastName: 'roh',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a16"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: 1,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a18"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a1a"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: 1,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a1c"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      }
    ]




// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
Human_Resource> db.employee.find({
    ... "overallExp":{$gt:2}
    ... })




// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
Human_Resource> db.employee.find({
    ... "yearGrad":{$gt:2015},
    ... "overallExp":{$gt:1}
    ... })
    [
      {
        _id: ObjectId("638050a8903ba5309b549a10"),
        firstName: 'John',
        lastName: 'Doe',
        salary: 25000,
        department: 'HR',
        lastCompany: 'X',
        lastSalary: '10000',
        overallExp: 2,
        contactInfo: '1234567890',
        yearGrad: 2016,
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a14"),
        firstName: 'Jame',
        lastName: 'roh',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a18"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("638050a8903ba5309b549a1c"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: 35000,
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: 2,
        contactInfo: '123567890',
        yearGrad: 2019,
        gradStream: 'EEE'
      }
    ]




// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
Human_Resource> db.employee.update(
... {
...     "salary":{$gt:70000}
... },
... {
        $set:{"salary":65000}
    }
... )
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}




// Delete all the documents from ""employee"" where last company is Y"
Human_Resource> db.employee.deleteMany({
    ... "lastCompany": "Y"
    ... })
    { acknowledged: true, deletedCount: 6 }