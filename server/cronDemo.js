var CronJob = require('cron').CronJob;
var job = new CronJob('*/10 * * * * *',function() {
    console.log(new Date().toISOString());

}, null, true, 'America/Los_Angeles')
job.start();
