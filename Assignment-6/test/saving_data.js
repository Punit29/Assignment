const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');

describe('Saving records', () => {

    it('creates User', function(done){
        var user = new User({
            name: 'priya',
            email: 'priya@gmail.com',
            password: '1234',
            history: 'asdasd'        
        });

        user.save().then(function(){
            User.findOne({name: 'priya'}).then(function(){
                assert(user.isNew === false)
                done();
            })
        })
    }),

    it('creates product', function(done){
        var product = new Product({
            productName: 'asdasd',
            description: "fghfgh",
            price: '56497',
            category: {
                categoryName:'asdasdzxczxv'
            }
        })

        product.save().then(()=>{
            Product.findOne({productName: 'asdasd'}).then(()=>{
                assert(product.isNew === false)
                done();
            })
        })
    })
})