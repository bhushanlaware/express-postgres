# `Setup Code`

1. Create .env from .env-example file and provide your database connection string. e.g: DATABASE_URL=postgres://postgres:password@localhost:5432/dbname
2. Run below command

### `npm init`

This will create tables and fill the data in it. 

### `npm server`

This will run experss server on http://localhost:4000

### `npm start`

Start server on production.

# `Application use`
### `Overview`

The primary REST service for a "Subscription as
a Service" startup. REST service will be used by companies that will define subscriptions plans to which the users of the platform can subscribe to.


### `API Service`

The primary aspect of this programming challenge is to implement the following two
APIs:

```
/user
/subscription
```
The details of each of these APIs are as follows:

## /user

This is a simple CRUD API that adds a user to DB.

### PUT /user/

```
creates a user with specified username in the DB.
```

**Sample Input:** PUT /user/jay
**Required Output:** Just a HTTP status: 200 on success, other appropriate code for
failures

### GET /user/< username>

**Sample Input:** GET /user/jay

**Sample Output:**

```
{
"user\_name": "jay",
"created\_at": "2020-02-29 19:30:00"
}
```
## /subscription

```
This is the primary API being tested in this challenge.
This will need to provide mechanisms to:
Register a new subscription for an existing user, with a specified plan and
start date
```
### POST /subscription/

**Inputs:**

```
{
"username": < username >,
"planId": < planId >,
"startDate": < date in YYYY-MM-DD format >
}
```
**Sample Input**

```
{ "userName": "jay", "planId": "PRO_1M", "startDate": "2020-03-03" }
```
**Expected Output:**

```
{ "status": <["SUCCESS"|"FAILIURE"]>, "amount": <+/- amount
credited/debited> }
```

Sample Output:

```
{ "status": "SUCCESS", "amount": -200.0 }
```
**Additional Details**

```
On success, return 2 00 HTTP status. For failures, pick an appropriate HTTP code.
The timestamp indicates the start date for the new plan, and it will be valid for the
number of days shown in the table below
planId can be one of those listed in the table below:
```
### GET /subscription/< username >/< date >

**Sample Input:**
/subscription/jay/2020-02-01

Note that the date in the above is optional:
/subscription/jay

**Expected Output:**

```
When input date is specified
```
```
planId that will be active for user at specified date.
Number of days left in plan from the specified input date
Sample output
{ "planId": "PRO_1M", "daysLeft": 3 }
```
```
When input date is NOT specified
```
```
List all subscription entries available in database for user with start and valid
till dates.
```


**Sample output**

```
[
  {
    "planId": "TRIAL",
    "start_date": "2020-02-22",
    "valid_till": "2020-02-28"
  },
  {
    "planId": "PRO_1M",
    "start_date": "2020-02-29",
    "valid_till": "2020-03-30"
  }
]
```

