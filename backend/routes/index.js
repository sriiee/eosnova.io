const express = require('express'),
    router = express.Router(),
    path = require('path'),
    AWS = require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');
const s3 = new AWS.S3();

const multer = require('multer');
const fs = require('fs');

const db = require('../models/db');


router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  // res.render('index', { title: 'Express' });
});


// get Week
Date.prototype.getWeek = ()=>{
  let now = new Date(),
      year = now.getFullYear();

  let onejan = new Date(now.getFullYear(), 0, 1);
  return {
    year : year,
    weekNumber : Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7)
  };
}

// Week range
function getDays(year, week) {
  let j10 = new Date(year, 0, 10, 12, 0, 0),
      j4 = new Date(year, 0, 4, 12, 0, 0),
      mon = j4.getTime() - j10.getDay() * 86400000,
      result = [];

  for (let i = -1; i < 6; i++) {
    result.push(new Date(mon + ((week - 1) * 7 + i) * 86400000));
  }

  let days_start = (JSON.stringify(result[0])).substring(1, 11),
      days_end = (JSON.stringify(result[6])).substring(1,11);
  return {
    start : days_start,
    end : days_end
  }
}


router.route('/tokenIcon')
    .post((req, res) => {
      upload(req, res, 'token');
    })

router.route('/dappIcon')
    .post((req, res) => {
        upload(req, res);
    })

let upload = function (req, res, token) {
    let imagePath = 'icon';
    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, imagePath);
        },
        filename: function (req, file, cb) {
            file.uploadedFile = {
                name: file['originalname']
            };
            cb(null, file.uploadedFile.name);
        }
    });

    let upload = multer({storage: storage}).single('file');
    upload(req, res, (err) => {
        if (err) console.log('multer err@@', err);
        else {
            let weekNumber = (new Date()).getWeek(),
                date = getDays(weekNumber['year'], weekNumber['weekNumber']),
                fileName = req.file.uploadedFile.name,
                file = {
                    name: fileName,
                    type: req.file.mimetype.split('/')[1],
                    path: `icon/${fileName}`
                }
            fs.readFile(`icon/${fileName}`, (err, data) => {
                if (err) {
                    console.log('readFile err@@', err);
                    res.status(500).send({status: 500, message: 'File system Error'});
                } else {
                    if (token) {
                        let fileInfo = req.body.iconName;
                        public_img_s3(`token/icon/${weekNumber['year']}/${weekNumber['weekNumber']}주(${date['start']}~${date['end']})/${fileInfo}_${fileName}`, data, res, file);
                    } else {
                        let fileInfo = req.body.dappName;
                        public_img_s3(`dapp/icon/${weekNumber['year']}/${weekNumber['weekNumber']}주(${date['start']}~${date['end']})/${fileInfo}_${fileName}`, data, res, file);
                    }
                }
            })
        }
    });

};

let public_img_s3 = ( key, body, res, file )=>{
  let params = {
    Bucket: 'eosnova.submit',
    Key: key,
    Body: body,
    ACL: 'public-read',
    ContentType: `image/${file['type']}`
  };
  //putObject , upload
  s3.upload(params, (err) => {
    if (err) console.log('s3 error', err);
    else {
      fs.copyFile(`${file['path']}`,`temporary/${file['name']}`,(err)=>{
        if(err) {
          console.log('copyFile err', err);
          res.status(500).send({status:500, message:'S3 Upload Error'});
        }
        else{
          fs.unlinkSync(file['path']);
          res.end();
        }
      })
    }
  });
}









let public_s3 = ( key, body, res )=>{
  let bodyData = JSON.stringify({data: body});
  let params = {
    Bucket: 'eosnova.submit',
    Key: key,
    Body: bodyData,
    ACL: 'public-read',
    ContentType: 'application/json'
  };
  // putObject , upload
  s3.upload(params, (err) => {
    if (err) {
      console.log('s3 error', err);
      res.status(500).send({status:500, message:'S3 Upload Error'});
    }
    else {
      res.end();
    }
  });
}


router.route('/submitToken')
    .post((req, res) => {
      let weekNumber = (new Date()).getWeek(),
          date = getDays(weekNumber['year'], weekNumber['weekNumber']);
      let team = (req.body.team).split(','),
          token = (req.body.token).split(','),
          contract = req.body.contract,
          sns = (req.body.sns).split(',');

      let obj = {
        team: {
          name: team[0],
          url: team[1],
          entity: team[2],
          country: team[3],
          desc: team[4]
        },
        token: {
          chain: token[0],
          name: token[1],
          symbol: token[2],
          contract: token[3],
          decimal: token[4]
        },
        contract: contract,
        social: {
          telegram: sns[0],
          medium: sns[1],
          twitter: sns[2],
          facebook: sns[3],
          other: sns[4]
        }
      }

      let timestamp = +new Date();
      let key = `token/submit/${weekNumber['year']}/${weekNumber['weekNumber']}주(${date['start']}~${date['end']})/${timestamp}_${obj['token']['chain']}_${obj['token']['symbol']}.json`;

      public_s3( key, obj, res );
    });


router.route('/submitDapp')
    .post((req, res) => {
      let weekNumber = (new Date()).getWeek(),
          date = getDays(weekNumber['year'], weekNumber['weekNumber']);
      let team = (req.body.team).split(','),
          dapp = (req.body.dapp).split(','),
          contract = req.body.contract,
          sns = (req.body.sns).split(',');

      let obj = {
        team: {
          entity: team[0],
          country: team[1]
        },
        dapp: {
          name: dapp[0],
          url: dapp[1],
          mobile_url: dapp[2],
          referral_url: dapp[3],
          desc: dapp[4],
          category: dapp[5],
          ico: dapp[6]
        },
        contract: contract,
        social: {
          telegram: sns[0],
          medium: sns[1],
          twitter: sns[2],
          facebook: sns[3],
          other: sns[4]
        }
      }

      let timestamp = +new Date();
      let key = `dapp/submit/${weekNumber['year']}/${weekNumber['weekNumber']}주(${date['start']}~${date['end']})/${timestamp}_${obj['dapp']['name']}.json`;

      public_s3( key, obj, res );
    });



/* ############################## DApp ############################## */
router.route('/dapp')
    .get((req, res) => {
        console.log('***** Dapp ok *****');
	    try {
        db.dapp.find({}, null, {sort: {update_date: -1}}, (err, data) => {
            console.log('--- Dapp Read all ---');
            if (err) {
                console.log('Dapp find err');
                res.status(500).send();
            } else {
                res.json(data);
                console.log('Dapp find!');
            }
        })
	    } catch(e) { console.error(e)}
    });


router.route('/ethDapp')
    .get((req, res) => {
        console.log('***** Dapp ok *****');
        db.ethDapp.find({}, null, {sort: {update_date: -1}}, (err, data) => {
            console.log('--- Dapp Read all ---');
            if (err) {
                console.log('Dapp find err');
                res.status(500).send();
            } else {
                res.json(data);
                console.log('Dapp find!');
            }
        })
    });


router.route('/bosDapp')
    .get((req, res) => {
        console.log('***** Dapp ok *****');
        db.bosDapp.find({}, null, {sort: {update_date: -1}}, (err, data) => {
            console.log('--- Dapp Read all ---');
            if (err) {
                console.log('Dapp find err');
                res.status(500).send();
            } else {
                res.json(data);
                console.log('Dapp find!');
            }
        })
    });


router.route('/klayDapp')
    .get((req, res) => {
        console.log('***** Dapp ok *****');
        db.klayDapp.find({}, null, {sort: {update_date: -1}}, (err, data) => {
            console.log('--- Dapp Read all ---');
            if (err) {
                console.log('Dapp find err');
                res.status(500).send();
            } else {
                res.json(data);
                console.log('Dapp find!');
            }
        })
    });








router.route('/test')
    .get((req, res) => {
      let weekNumber = (new Date()).getWeek();
      res.send(weekNumber);
    });



module.exports = router;

