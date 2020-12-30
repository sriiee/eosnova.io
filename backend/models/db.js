
const mongoose = require('mongoose');
require('dotenv').config();
const DBURL = (process.env.NODE_ENV == 'production') ? process.env.PRODUCTION_DB_PATH : process.env.DEVELOPMENT_DB_PATH;
const dappDb = mongoose.createConnection(`${DBURL}/dapp_api`, { useNewUrlParser:true });
const ethDappDb = mongoose.createConnection(`${DBURL}/ethDapp`, { useNewUrlParser:true });
const bosDappDb = mongoose.createConnection(`${DBURL}/bosDapp`, { useNewUrlParser:true });
const klayDappDb = mongoose.createConnection(`${DBURL}/klayBapp`, { useNewUrlParser:true });
console.log('DBURL', DBURL);
const Schema = mongoose.Schema;

// DApp
const dappScm = new Schema({
        title : 'string',
        desc : {
            ko : 'string',
            en : 'string',
            zh : 'string'
        },
        category : 'array',
        url : {
            android : 'string',
            ios : 'string'
        },
        icon : 'string',
        create_date : 'number',
        update_date : 'number',
        enable : {
            android : 'boolean',
            ios : 'boolean'
        },
        search_tag : 'string',
        dapp_title : 'string',
    },
    {
        versionKey : false,
        collection : 'dapp',
    });

// ETH DApp
const ethDappScm = new Schema({
        title : 'string',
        desc : {
            ko : 'string',
            en : 'string',
            zh : 'string'
        },
        category : 'array',
        url : {
            android : 'string',
            ios : 'string'
        },
        icon : 'string',
        create_date : 'number',
        update_date : 'number',
        enable : {
            android : 'boolean',
            ios : 'boolean'
        },
        search_tag : 'string',
        dapp_title : 'string',
    },
    {
        versionKey : false,
        collection : 'dapp',
    });

// BOS DApp
const bosDappScm = new Schema({
        title : 'string',
        desc : {
            ko : 'string',
            en : 'string',
            zh : 'string'
        },
        category : 'array',
        url : {
            android : 'string',
            ios : 'string'
        },
        icon : 'string',
        create_date : 'number',
        update_date : 'number',
        enable : {
            android : 'boolean',
            ios : 'boolean'
        },
        search_tag : 'string',
        dapp_title : 'string',
    },
    {
        versionKey : false,
        collection : 'dapp',
    });

// KLAY DApp
const klayDappScm = new Schema({
        title : 'string',
        desc : {
            ko : 'string',
            en : 'string',
            zh : 'string'
        },
        category : 'array',
        url : {
            android : 'string',
            ios : 'string'
        },
        icon : 'string',
        create_date : 'number',
        update_date : 'number',
        enable : {
            android : 'boolean',
            ios : 'boolean'
        },
        search_tag : 'string',
        dapp_title : 'string',
    },
    {
        versionKey : false,
        collection : 'bapp',
    });

const dappCon = dappDb.model('dapp', dappScm);
const ethDappCon = ethDappDb.model('ethDapp', ethDappScm);
const bosDappCon = bosDappDb.model('bosDapp', bosDappScm);
const klayDappCon = klayDappDb.model('klayBapp', klayDappScm);

module.exports = {
    dapp : dappCon,
    ethDapp : ethDappCon,
    bosDapp : bosDappCon,
    klayDapp : klayDappCon,
}




