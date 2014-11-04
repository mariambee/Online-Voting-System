console.log("Hello From server ");

if(Meteor.users.find().count()===0){

   Accounts.createUser({
        username: "admin",
        email: "admin@admin.com",
        password: "admin",
        })
    userinfo.insert({
        username: "admin",
        email: "admin@admin.com",
        });
     admin.insert({
        "votename":"quickvote",
        "startdate": new Date(),
        "enddate":["2002","01","01","00","00"],
        "status":"off"
    })
     admin.insert({
        "votename":"nationalvote",
        "startdate": new Date(),
        "enddate":["2002","01","01","00","00"],
        "status":"off"
    })

}

//check this portion in future!

Meteor.publish("users",function(){

    return Meteor.users.find({},{fields: {username:true}});
})

Meteor.publish("userinfo",function(){

    return userinfo.find();
})

Meteor.publish("quickvote",function(){

    return quickvote.find();
})

Meteor.publish("nationalvote",function(){

    return nationalvote.find();
})


Meteor.publish("nationalvoter",function(){

    return nationalvoter.find();
})

Meteor.publish("quickvoter",function(){

    return quickvoter.find();
})

Meteor.publish("admin",function(){

    return admin.find({},{fields: {votename:true,startdate:true,enddate:true,status:true}});
})

userinfo.allow({
    insert: function (userId, doc) {
        return true
    },
    
});
admin.allow({
    update: function (userId, doc) {
        return true
    },

    
});

quickvote.allow({
    insert: function (userId, doc) {
        return true
    },
    
});
quickvoter.allow({
    insert: function (userId, doc) {
        return true
    },
    
});
nationalvoter.allow({
    insert: function (userId, doc) {
        return true
    },
    
});
nationalvote.allow({
    insert: function (userId, doc) {
        return true
    },
    
});


//check it

/*
profile

username: "voterid",

email: "email@email.com",
profile: {
    status: "Candidate/voter",
    DOB: "date of birth",
    bloodGroup: "o+",
    position: "Prime  Minister",
    votecount: "0",
    address: "",
    district: "",
    pourashava: "",
    cityCorporation: "",
    Upozilla:"",

    
}


*/



