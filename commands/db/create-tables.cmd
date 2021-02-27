npx sequelize-cli model:generate --name User --attributes username:string
npx sequelize-cli model:generate --name Subscription --attributes username:string,planId:string,startDate:date,validTill:date
npx sequelize-cli model:generate --name Plan --attributes planId:string,validDays:integer,amount:integer
