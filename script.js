const btnel = document.getElementById("btn"); 
/* used to import the elemets of the html 
by id so that they can be used as variables*/
btnel.innerText="Tell me a joke"; 
const jokeel=document.getElementById("joke");
const apikey="dkXz1hVV5hEV6oQ35zkB3A==YaQZkeE3knfGLNpxh"; /*not the real keyh  */ 
/* api key that was given by the api site for the given api ie unique*/
const options={ /* used to get the joke from api*/
    method:"GET",
    headers:{
        "X-Api-Key":apikey, /*"X-Api-Key" is a http header that is used to get api  */
    },

};
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke()
{   try {
    jokeel.innerText="loading....";
    btnel.disabled=true;
    btnel.innerText="loading....";
    const response =await fetch(apiurl,options); 
    const data= await response.json()
    /* response.json() is a method that is used to convert data to js obj so it can be used*/
    jokeel.innerText=data[0].joke;
    /*data is an obj so data[0] is used to access the joke and joke here is the key for the value that was given on the api site */
    btnel.disabled=false;
    btnel.innerText="Tell me a joke";

} catch (error) {
    jokeel.innerText="An error happened :(";
    btnel.innerText=":(";
    btnel.disabled=false;
    btnel.innerText="Tell me a joke";
    
}
       
}

btnel.addEventListener("click",getjoke);