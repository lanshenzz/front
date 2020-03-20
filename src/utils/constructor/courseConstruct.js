export class User {
  constructor(userInfo){
    this.id=userInfo.id+'';
    this.name=userInfo.sex;
    this.label=userInfo.name;

  }
}

export class UserTarget {
  constructor(userInfo,userTarget){
    this.source=userInfo.id+'';
    this.target=userTarget.id+'';


  }
}
