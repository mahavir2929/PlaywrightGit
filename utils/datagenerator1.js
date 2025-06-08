function randomEmail() {
  return `user${Math.random().toString(36)}@test.com`;
}

function randomPassword(){

return `Pass${Math.random().toString(36)}`

}

function randomName(){
  return `User${Math.floor(Math.random()*1000)}`
}

function randomGender(){
  return Math.random()>0.5 ? 'Male':'Female'
}


function randomState(totalOptions){
  return Math.floor(Math.random*totalOptions)
}