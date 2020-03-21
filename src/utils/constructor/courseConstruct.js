export class User {
  constructor(userInfo){
    this.id=userInfo.id+'';
    this.name=userInfo.sex;
    this.label=userInfo.name;

  }
}

export class UserTarget {
  constructor(id,userTarget){
    this.source=id+'';
    this.target=userTarget.id+'';


  }
}
