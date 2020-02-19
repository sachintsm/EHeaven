const CronJob = require('cron').CronJob;
const Cron = require('./db-backup.js');


// AutoBackUp set time
new CronJob(
  
  '* * * * *',
  function() {
    Cron.dbAutoBackUp();
    //console.log('test');
  },
  null,
  true,
  'America/New_York'
);