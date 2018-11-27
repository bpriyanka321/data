'use strict';

module.exports = function (STU) {

    /* STU.getName = function (id, callback) {
         console.log(id);
         STU.findgetName(id, function (err, instance) {
             var response = "name of the student is:" + instance.name;
             console.log(response);
             callback(null, response);
         });
     }
     STU.remoteMethod(
         'getName',
         {
             returns: { root: true, type: 'string' },
             accepts: [{
                 arg: 'id',
                 type: 'number',
                 required: false,
                 http: {
                     source: 'query'
                 }
             }],
             http: { path: '/getName', verb: 'get' },
         }
 
 
     )
     }*/


    /* STU.getId = function (name, callback) {
           
           STU.findOne({where:{name:"ramya"}},function (err, instance) {
               var response = "id of the student is:" + instance.id;
               console.log(response);
               callback(null, response);
           });
       }
       STU.remoteMethod(
           'getId',
           {
               returns: { root: true, type: 'number' },
               accepts: [{
                   arg: 'name',
                   type: 'string',
                   required: false,
                   http: {
                       source: 'query'
                   }
               }],
               http: { path: '/getId', verb: 'get' },
           }
   
   
       )
       };
   
   
      /* STU.count=function(name,callback){
           STU.findByName(name,function(err,instance){
               var response="no of students are:"+instance.count;
               console.log(response);
               callback(null,response);
           });
   
       }
       STU.remoteMethod(
           'count',{
               returns:
                {
                    root:true,
                    type:"number"
                },
               accepts:
              {
                   arg:'name',
                  type:'string',
                  required:false
                },
               
                   
   
                   http:{path:'/count',verb:'get'},
               }
   
       )
   
   };*/
    /*STU.delete=function(id,callbacck){
        console.log(id);
        STU.findById(id,function(err,instance){
            var response=instance.delete+"deleted record";
            console.log(response);
            callback(null,response);
    
        });
    }
    STU.remoteMethod(
        'delete',{
            returns:{
               root:true,
               type:"number"
            },
            accepts:{
                arg:"id",
                type:"number"
    
            },
            http:{
                path:'/delete',verb:'del'
            },
    
        }
    )
    };*/
    /*STU.getId=function(id,callbacck){
        
        STU.findOne({where:{email_id:"ramya@gmail.com"}},function(err,instance){
            var response="student id is:"+instance.id;
            console.log(response);
            callback(null,response);
    
        });
    }
    STU.remoteMethod(
        'getId',{
            returns:{
               root:true,
               type:"number"
            },
            accepts:{
                arg:"name",
                type:"string",
                required:false
            },
            http:{
                path:'/getid',verb:'get'
            },
    
        }
    )
    };*/
    STU.updateName = function (input, callback) {
        STU.findById(input.id, function (err, response) {
            var updateObj = response;
            updateObj.name = input.name;
            response.updateAttributes(updateObj).then(res => {
                console.log('updatedd res -> ', res);
                callback(null, response);

            }).catch(err => {
                callback(err, null);
            })

        });
    }
    STU.remoteMethod(
        'updateName', {
            returns: {
                root: true,
                type: "object"
            },
            accepts: [{
                arg: "input",
                type: "object",
                http: {
                    source: 'body'
                }

            }],
            http: {
                path: "/updateName", verb: "put"
            },

        }
    )
}
STU.update = function (input, callback) {
    STU.create(input.id, function (err, response) {

