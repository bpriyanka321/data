'use strict';

module.exports = function (STU) {

     STU.getName = function (id, callback) {
         console.log(id);
         STU.findById(id, function (err, instance) {
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
     }



    /* STU.getRecord = function (name, callback) {
        STU.findOne({where:{name:"kinnera"}},function (err, response) {
                console.log('response');
                callback(null, response);

            })

        };
    
    STU.remoteMethod(
        'getRecord', {
            returns: {
                root: true,
                type: "object"
            },
            accepts: [{
                arg: "name",
                type: "string",
                http: {
                    source: 'query'
                }

            }],
            http: {
                path: "/getRecord", verb: "get"
            },

        }
    )
    }


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


     STU.deleteRecord=function(id,callbacck){
        console.log(id);
        STU.destroyById(id,function(err,instance){
            var response=instance.delete+"deleted record";
            console.log(response);
            callback(null,response);
    
        });
    }
    STU.remoteMethod(
        'deleteRecord',{
            returns:{
               root:true,
               type:"number"
            },
            accepts:{
                arg:"id",
                type:"number"
    
            },
            http:{
                path:'/deleteRecord',verb:'del'
            },
    
        }
    )
    }



    STU.createNewRecord=function(input,callback){
        STU.create(data,function(err,response){
            var response="enter new record:"+instance.data;
            console.log(response);
            callback(null,response);
        }),
            
    STU.remoteMethod(
          'createNewRecord',{
              returns:{
                  root:true,
                  type:"Object"
              },
              accepts:[{
                  arg:"input",
                  type:"object",
                  http:{source:'body'}
              }],
              http:{
                  path:'/createNewRecord', verb:'post'
              }

              
          }


    )

        }}*/
    

 
           
       
   
     
 
  



 


    


  

